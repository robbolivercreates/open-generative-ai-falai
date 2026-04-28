import { fal } from '@fal-ai/client';
import { getModelById, getVideoModelById, getI2IModelById, getI2VModelById, getV2VModelById, getLipSyncModelById } from './models.js';

export class MuapiClient {
    constructor() {
        // No-op: fal.ai is configured per-call via credentials
    }

    getKey() {
        const key = window.__FAL_KEY__ || localStorage.getItem('fal_key');
        if (!key) throw new Error('API Key missing. Please set it in Settings.');
        return key;
    }

    _configure() {
        const key = this.getKey();
        fal.config({ credentials: key });
    }

    _normalize(data) {
        const url = data?.images?.[0]?.url
            || data?.video?.url
            || data?.audio_url
            || data?.url;
        return { ...data, url };
    }

    async generateImage(params) {
        this._configure();
        const modelInfo = getModelById(params.model);
        const endpoint = modelInfo?.endpoint || params.model;

        const input = { prompt: params.prompt };
        if (params.aspect_ratio) input.aspect_ratio = params.aspect_ratio;
        if (params.resolution) input.resolution = params.resolution;
        if (params.quality) input.quality = params.quality;
        if (params.image_url) {
            input.image_url = params.image_url;
            input.strength = params.strength || 0.6;
        } else {
            // text-to-image
        }
        if (params.seed && params.seed !== -1) input.seed = params.seed;

        const { data, requestId } = await fal.subscribe(endpoint, { input });
        if (params.onRequestId) params.onRequestId(requestId);
        return this._normalize(data);
    }

    async generateVideo(params) {
        this._configure();
        const modelInfo = getVideoModelById(params.model);
        const endpoint = modelInfo?.endpoint || params.model;

        const input = {};
        if (params.prompt) input.prompt = params.prompt;
        if (params.aspect_ratio) input.aspect_ratio = params.aspect_ratio;
        if (params.duration) input.duration = params.duration;
        if (params.resolution) input.resolution = params.resolution;
        if (params.quality) input.quality = params.quality;
        if (params.mode) input.mode = params.mode;
        if (params.image_url) input.image_url = params.image_url;

        const { data, requestId } = await fal.subscribe(endpoint, { input });
        if (params.onRequestId) params.onRequestId(requestId);
        return this._normalize(data);
    }

    async generateI2I(params) {
        this._configure();
        const modelInfo = getI2IModelById(params.model);
        const endpoint = modelInfo?.endpoint || params.model;

        const input = { prompt: params.prompt || '' };
        const imageField = modelInfo?.imageField || 'image_url';
        const imagesList = params.images_list?.length > 0 ? params.images_list : (params.image_url ? [params.image_url] : null);
        if (imagesList) {
            if (imageField === 'images_list') input.images_list = imagesList;
            else input[imageField] = imagesList[0];
        }
        if (params.aspect_ratio) input.aspect_ratio = params.aspect_ratio;
        if (params.resolution) input.resolution = params.resolution;
        if (params.quality) input.quality = params.quality;
        if (params.mask_image_url) input.mask_image_url = params.mask_image_url;
        if (params.num_images) input.num_images = params.num_images;
        if (params.output_format) input.output_format = params.output_format;

        const { data, requestId } = await fal.subscribe(endpoint, { input });
        if (params.onRequestId) params.onRequestId(requestId);
        return this._normalize(data);
    }

    async generateI2V(params) {
        this._configure();
        const modelInfo = getI2VModelById(params.model);
        const endpoint = modelInfo?.endpoint || params.model;

        const input = {};
        if (params.prompt) input.prompt = params.prompt;
        const imageField = modelInfo?.imageField || 'image_url';
        if (params.image_url) {
            if (imageField === 'images_list') input.images_list = [params.image_url];
            else input[imageField] = params.image_url;
        }
        if (params.aspect_ratio) input.aspect_ratio = params.aspect_ratio;
        if (params.duration) input.duration = params.duration;
        if (params.resolution) input.resolution = params.resolution;
        if (params.quality) input.quality = params.quality;
        if (params.mode) input.mode = params.mode;

        const { data, requestId } = await fal.subscribe(endpoint, { input });
        if (params.onRequestId) params.onRequestId(requestId);
        return this._normalize(data);
    }

    async processV2V(params) {
        this._configure();
        const modelInfo = getV2VModelById(params.model);
        const endpoint = modelInfo?.endpoint || params.model;
        const videoField = modelInfo?.videoField || 'video_url';

        const { data, requestId } = await fal.subscribe(endpoint, {
            input: { [videoField]: params.video_url }
        });
        if (params.onRequestId) params.onRequestId(requestId);
        return this._normalize(data);
    }

    async processLipSync(params) {
        this._configure();
        const modelInfo = getLipSyncModelById(params.model);
        const endpoint = modelInfo?.endpoint || params.model;

        const input = {};
        if (params.audio_url) input.audio_url = params.audio_url;
        if (params.image_url) input.image_url = params.image_url;
        if (params.video_url) input.video_url = params.video_url;
        if (params.prompt) input.prompt = params.prompt;
        if (params.resolution) input.resolution = params.resolution;
        if (params.seed !== undefined && params.seed !== -1) input.seed = params.seed;

        const { data, requestId } = await fal.subscribe(endpoint, { input });
        if (params.onRequestId) params.onRequestId(requestId);
        return this._normalize(data);
    }

    async uploadFile(file) {
        this._configure();
        return await fal.storage.upload(file);
    }

    getDimensionsFromAR(ar) {
        switch (ar) {
            case '1:1': return [1024, 1024];
            case '16:9': return [1280, 720];
            case '9:16': return [720, 1280];
            case '4:3': return [1152, 864];
            case '3:2': return [1216, 832];
            case '21:9': return [1536, 640];
            default: return [1024, 1024];
        }
    }
}

export const muapi = new MuapiClient();
