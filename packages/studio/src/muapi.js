import { fal } from '@fal-ai/client';
import { getModelById, getVideoModelById, getI2IModelById, getI2VModelById, getV2VModelById, getLipSyncModelById, getR2VModelById } from './models.js';

function configureFal(apiKey) {
    if (apiKey) fal.config({ credentials: apiKey });
}

function normalizeOutput(data) {
    const url = data?.images?.[0]?.url
        || data?.video?.url
        || data?.audio_url
        || data?.url;
    return { ...data, url };
}

function buildInput(modelInfo, params, extras = {}) {
    const allowedFields = new Set(Object.keys(modelInfo?.inputs || {}));
    const candidate = { prompt: params.prompt };
    if (params.aspect_ratio) candidate.aspect_ratio = params.aspect_ratio;
    if (params.resolution) candidate.resolution = params.resolution;
    if (params.quality) candidate.quality = params.quality;
    if (params.seed && params.seed !== -1) candidate.seed = params.seed;
    if (params.num_images) candidate.num_images = params.num_images;
    if (params.output_format) candidate.output_format = params.output_format;
    Object.assign(candidate, extras);

    if (allowedFields.size === 0) return candidate;
    const filtered = { prompt: params.prompt };
    for (const key of Object.keys(candidate)) {
        if (allowedFields.has(key) || ['prompt', 'image_url', 'image_urls', 'images_list', 'mask_image_url', 'strength'].includes(key)) {
            filtered[key] = candidate[key];
        }
    }
    return filtered;
}

export async function generateImage(apiKey, params) {
    configureFal(apiKey);
    const modelInfo = getModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;

    const extras = {};
    if (params.image_url) {
        extras.image_url = params.image_url;
        extras.strength = params.strength || 0.6;
    } else if (params.images_list) {
        extras.images_list = params.images_list;
    }
    const input = buildInput(modelInfo, params, extras);

    const { data, requestId } = await fal.subscribe(endpoint, { input });
    if (params.onRequestId) params.onRequestId(requestId);
    return normalizeOutput(data);
}

export async function generateI2I(apiKey, params) {
    configureFal(apiKey);
    const modelInfo = getI2IModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;

    const imageField = modelInfo?.imageField || 'image_url';
    const imagesList = params.images_list?.length > 0 ? params.images_list : (params.image_url ? [params.image_url] : null);

    const extras = {};
    if (imagesList) {
        if (imageField === 'images_list' || imageField === 'image_urls') extras[imageField] = imagesList;
        else extras[imageField] = imagesList[0];
    }
    if (params.mask_image_url) extras.mask_image_url = params.mask_image_url;

    const input = buildInput(modelInfo, params, extras);

    const { data, requestId } = await fal.subscribe(endpoint, { input });
    if (params.onRequestId) params.onRequestId(requestId);
    return normalizeOutput(data);
}

export async function generateVideo(apiKey, params) {
    configureFal(apiKey);
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
    return normalizeOutput(data);
}

export async function generateI2V(apiKey, params) {
    configureFal(apiKey);
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
    return normalizeOutput(data);
}

export async function generateR2V(apiKey, params) {
    configureFal(apiKey);
    const modelInfo = getR2VModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;

    const images = (params.images_list || []).filter(Boolean);
    const videos = (params.video_files || []).filter(Boolean);
    const audios = (params.audio_files || []).filter(Boolean);

    const input = { prompt: params.prompt };
    if (params.aspect_ratio) input.aspect_ratio = params.aspect_ratio;
    if (params.duration) input.duration = params.duration;
    if (params.resolution) input.resolution = params.resolution;
    if (images.length > 0) input.image_urls = images;
    if (videos.length > 0) input.video_urls = videos;
    if (audios.length > 0) input.audio_urls = audios;
    input.generate_audio = true;

    const { data, requestId } = await fal.subscribe(endpoint, { input });
    if (params.onRequestId) params.onRequestId(requestId);
    return normalizeOutput(data);
}

export async function generateMarketingStudioAd(apiKey, params) {
    configureFal(apiKey);
    const images = (params.images_list || []).filter(Boolean);
    const videos = (params.video_files || []).filter(Boolean);
    const audios = (params.audio_files || []).filter(Boolean);
    const useFast = params.fast !== false; // default to fast tier

    // Route: reference-to-video if multi-ref, else image-to-video if 1 image, else text-to-video
    let endpoint;
    const input = {
        prompt: params.prompt,
        aspect_ratio: params.aspect_ratio || '16:9',
        duration: params.duration || 5,
        resolution: params.resolution || (useFast ? '720p' : '1080p'),
    };

    if (images.length >= 2 || videos.length > 0 || audios.length > 0) {
        endpoint = useFast
            ? 'bytedance/seedance-2.0/fast/reference-to-video'
            : 'bytedance/seedance-2.0/reference-to-video';
        // fal.ai expects image_urls / video_urls / audio_urls
        // Reference them in the prompt as @Image1, @Video1, @Audio1, etc.
        if (images.length > 0) input.image_urls = images;
        if (videos.length > 0) input.video_urls = videos;
        if (audios.length > 0) input.audio_urls = audios;
        input.generate_audio = true;
    } else if (images.length === 1) {
        endpoint = useFast
            ? 'bytedance/seedance-2.0/fast/image-to-video'
            : 'bytedance/seedance-2.0/image-to-video';
        input.image_url = images[0];
    } else {
        endpoint = useFast
            ? 'bytedance/seedance-2.0/fast/text-to-video'
            : 'bytedance/seedance-2.0/text-to-video';
    }

    const { data, requestId } = await fal.subscribe(endpoint, { input });
    if (params.onRequestId) params.onRequestId(requestId);
    return normalizeOutput(data);
}

export async function processLipSync(apiKey, params) {
    configureFal(apiKey);
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
    return normalizeOutput(data);
}

export async function uploadFile(apiKey, file, onProgress) {
    configureFal(apiKey);
    const url = await fal.storage.upload(file);
    if (onProgress) onProgress(100);
    return url;
}

export async function getUserBalance(apiKey) {
    return { balance: null, message: 'Balance check not available with fal.ai. Check your usage at fal.ai/dashboard.' };
}

// Workflow stubs — muapi.ai workflow engine not available in fal.ai
export async function getTemplateWorkflows() { return []; }
export async function getUserWorkflows() { return []; }
export async function getPublishedWorkflows() { return []; }
export async function createWorkflow() { throw new Error('Workflow engine not supported with fal.ai backend.'); }
export async function updateWorkflowName() { throw new Error('Workflow engine not supported with fal.ai backend.'); }
export async function deleteWorkflow() { throw new Error('Workflow engine not supported with fal.ai backend.'); }
export async function getWorkflowInputs() { return {}; }
export async function executeWorkflow() { throw new Error('Workflow engine not supported with fal.ai backend.'); }
export async function getAllNodeSchemas() { return []; }
export async function getWorkflowData() { return {}; }
export async function getNodeSchemas() { return []; }
export async function runSingleNode() { throw new Error('Workflow engine not supported with fal.ai backend.'); }
export async function deleteNodeRun() { return {}; }
export async function getNodeStatus() { return { status: 'unknown' }; }

// Agent stubs
export async function getTemplateAgents() { return []; }
export async function getUserAgents() { return []; }
export async function getPublishedAgents() { return []; }
export async function getUserConversations() { return []; }

// Proxy helpers (kept for import compatibility)
export async function handleProxyRequest() { return { status: 501, contentType: 'application/json', data: Buffer.from(JSON.stringify({ error: 'Not implemented' })) }; }
export async function handleServerSideProxy() { return { status: 501, contentType: 'application/json', data: Buffer.from(JSON.stringify({ error: 'Not implemented' })) }; }
export async function calculateDynamicCost() { return { cost: 0 }; }
