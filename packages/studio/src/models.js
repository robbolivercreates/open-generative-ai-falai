// Curated fal.ai models
// Curated fal.ai text-to-image models
export const t2iModels = [
  {
    "id": "fal-ai/nano-banana-2",
    "name": "Nano Banana 2",
    "endpoint": "fal-ai/nano-banana-2",
    "inputs": {
      "prompt": {
        "examples": ["A cinematic portrait of a woman at golden hour, film grain, shallow depth of field."],
        "description": "Text prompt describing the image.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "21:9"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      }
    }
  },
  {
    "id": "fal-ai/nano-banana-pro",
    "name": "Nano Banana Pro",
    "endpoint": "fal-ai/nano-banana-pro",
    "inputs": {
      "prompt": {
        "examples": ["Ultra-detailed architectural render of a futuristic city at dusk, volumetric light."],
        "description": "Text prompt describing the image.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "21:9"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      }
    }
  },
  {
    "id": "openai/gpt-image-2",
    "name": "GPT Image 2",
    "endpoint": "openai/gpt-image-2",
    "inputs": {
      "prompt": {
        "examples": ["A neon-lit retro diner sign with perfect typography reading 'OPEN 24 HOURS', cinematic."],
        "description": "Text prompt describing the image. Excellent for fine typography.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "2:3", "3:2"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      },
      "quality": {
        "enum": ["low", "medium", "high"],
        "title": "Quality", "name": "quality", "type": "string",
        "description": "Quality of the generated image.", "default": "high"
      }
    }
  },
  {
    "id": "fal-ai/flux-2-pro",
    "name": "Flux 2 Pro",
    "endpoint": "fal-ai/flux-2-pro",
    "inputs": {
      "prompt": {
        "examples": ["Highly detailed studio product photo of a perfume bottle on marble, soft reflection."],
        "description": "Text prompt describing the image.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      }
    }
  },
  {
    "id": "fal-ai/flux-pro/v1.1",
    "name": "Flux Pro 1.1",
    "endpoint": "fal-ai/flux-pro/v1.1",
    "inputs": {
      "prompt": {
        "examples": ["A hyperrealistic close-up of a tiger's eye, 8k, extreme detail."],
        "description": "Text prompt describing the image.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "21:9"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      }
    }
  },
  {
    "id": "fal-ai/flux/dev",
    "name": "Flux Dev",
    "endpoint": "fal-ai/flux/dev",
    "inputs": {
      "prompt": {
        "examples": ["Extreme close-up of a tiger eye. Detailed iris and pupil. Sharp focus."],
        "description": "Text prompt (2-3000 chars).",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "21:9"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      }
    }
  },
  {
    "id": "fal-ai/flux/schnell",
    "name": "Flux Schnell (Fast)",
    "endpoint": "fal-ai/flux/schnell",
    "inputs": {
      "prompt": {
        "examples": ["A vibrant street art mural of a phoenix on a brick wall."],
        "description": "Text prompt describing the image. Fast 1-4 step generation.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "21:9"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      }
    }
  },
  {
    "id": "fal-ai/recraft/v3/text-to-image",
    "name": "Recraft v3",
    "endpoint": "fal-ai/recraft/v3/text-to-image",
    "inputs": {
      "prompt": {
        "examples": ["A minimalist logo for a coffee brand called 'EMBER', warm orange tones, vector style."],
        "description": "Text prompt. Supports vector art and long text.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      }
    }
  },
  {
    "id": "fal-ai/qwen-image",
    "name": "Qwen Image",
    "endpoint": "fal-ai/qwen-image",
    "inputs": {
      "prompt": {
        "examples": ["A calligraphy scroll with Chinese characters meaning 'harmony', traditional ink style."],
        "description": "Text prompt. Excellent complex text rendering.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      }
    }
  },
  {
    "id": "fal-ai/imagen4/preview",
    "name": "Google Imagen 4",
    "endpoint": "fal-ai/imagen4/preview",
    "inputs": {
      "prompt": {
        "examples": ["A macro photo of a dewdrop on a leaf, sunrise light, ultra sharp."],
        "description": "Text prompt describing the image.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "aspect_ratio": {
        "enum": ["1:1", "16:9", "9:16", "4:3", "3:4"],
        "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string",
        "description": "Aspect ratio of the output image.", "default": "1:1"
      }
    }
  }
];


export const getModelById = (id) => t2iModels.find(m => m.id === id);

export const getAspectRatiosForModel = (modelId) => {
  const model = getModelById(modelId);
  if (!model) return ['1:1'];

  const arInput = model.inputs?.aspect_ratio;
  if (arInput && arInput.enum) {
    return arInput.enum;
  }

  return ['1:1', '16:9', '9:16', '4:3', '3:2', '21:9'];
};

// ==========================================
// Text-to-Video Models
// Curated fal.ai text-to-video models
export const t2vModels = [
  {
    "id": "bytedance/seedance-2.0/text-to-video",
    "name": "Seedance 2.0",
    "endpoint": "bytedance/seedance-2.0/text-to-video",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the video." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "title": "Duration", "name": "duration", "type": "int", "description": "Duration in seconds.", "default": 5, "minValue": 3, "maxValue": 12, "step": 1 },
      "resolution": { "enum": ["720p", "1080p"], "title": "Resolution", "name": "resolution", "type": "string", "default": "1080p" }
    }
  },
  {
    "id": "bytedance/seedance-2.0/fast/text-to-video",
    "name": "Seedance 2.0 Fast",
    "endpoint": "bytedance/seedance-2.0/fast/text-to-video",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the video." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "title": "Duration", "name": "duration", "type": "int", "description": "Duration in seconds.", "default": 5, "minValue": 3, "maxValue": 10, "step": 1 },
      "resolution": { "enum": ["720p"], "title": "Resolution", "name": "resolution", "type": "string", "default": "720p" }
    }
  },
  {
    "id": "fal-ai/veo3.1",
    "name": "Veo 3.1",
    "endpoint": "fal-ai/veo3.1",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the video (with sound)." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "enum": ["8s"], "title": "Duration", "name": "duration", "type": "string", "default": "8s" }
    }
  },
  {
    "id": "fal-ai/veo3.1/fast",
    "name": "Veo 3.1 Fast",
    "endpoint": "fal-ai/veo3.1/fast",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the video." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "enum": ["8s"], "title": "Duration", "name": "duration", "type": "string", "default": "8s" }
    }
  },
  {
    "id": "fal-ai/sora-2/text-to-video",
    "name": "Sora 2",
    "endpoint": "fal-ai/sora-2/text-to-video",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the video (OpenAI Sora 2 with audio)." },
      "aspect_ratio": { "enum": ["16:9", "9:16"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "enum": ["4", "8", "12"], "title": "Duration", "name": "duration", "type": "string", "default": "8" }
    }
  },
  {
    "id": "fal-ai/sora-2/text-to-video/pro",
    "name": "Sora 2 Pro",
    "endpoint": "fal-ai/sora-2/text-to-video/pro",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Premium Sora 2 text-to-video." },
      "aspect_ratio": { "enum": ["16:9", "9:16"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "enum": ["4", "8", "12"], "title": "Duration", "name": "duration", "type": "string", "default": "8" }
    }
  },
  {
    "id": "fal-ai/kling-video/v2.5-turbo/pro/text-to-video",
    "name": "Kling 2.5 Turbo Pro",
    "endpoint": "fal-ai/kling-video/v2.5-turbo/pro/text-to-video",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the video." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "enum": ["5", "10"], "title": "Duration", "name": "duration", "type": "string", "default": "5" }
    }
  }
];

export const getVideoModelById = (id) => t2vModels.find(m => m.id === id);

export const getAspectRatiosForVideoModel = (modelId) => {
  const model = getVideoModelById(modelId);
  if (!model) return ['16:9'];
  const arInput = model.inputs?.aspect_ratio;
  if (arInput && arInput.enum) return arInput.enum;
  return ['16:9', '9:16', '1:1'];
};

export const getDurationsForModel = (modelId) => {
  const model = getVideoModelById(modelId);
  if (!model) return [5];
  const durInput = model.inputs?.duration;
  if (durInput && durInput.enum) return durInput.enum;
  if (durInput) return [durInput.default || 5];
  return [];
};

export const getResolutionsForVideoModel = (modelId) => {
  const model = getVideoModelById(modelId);
  if (!model) return [];
  const resInput = model.inputs?.resolution;
  if (resInput && resInput.enum) return resInput.enum;
  return [];
};
// Auto-generated from schema_data.json — Image to Image models
// Curated fal.ai image-to-image / edit models
export const i2iModels = [
  {
    "id": "fal-ai/nano-banana-2/edit",
    "name": "Nano Banana 2 Edit",
    "endpoint": "fal-ai/nano-banana-2/edit",
    "family": "nano-banana",
    "imageField": "image_urls",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "examples": ["Change the background to a cozy coffee shop interior, keep the person exactly as is."],
        "description": "Describe the edit you want.",
        "type": "string", "title": "Prompt", "name": "prompt"
      }
    }
  },
  {
    "id": "fal-ai/nano-banana-pro/edit",
    "name": "Nano Banana Pro Edit",
    "endpoint": "fal-ai/nano-banana-pro/edit",
    "family": "nano-banana",
    "imageField": "image_urls",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "examples": ["Professional retouch: remove blemishes, enhance lighting, keep features natural."],
        "description": "Describe the edit you want.",
        "type": "string", "title": "Prompt", "name": "prompt"
      }
    }
  },
  {
    "id": "openai/gpt-image-2/edit",
    "name": "GPT Image 2 Edit",
    "endpoint": "openai/gpt-image-2/edit",
    "family": "gpt-2",
    "imageField": "image_urls",
    "hasPrompt": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "examples": ["Replace the sky with a dramatic sunset, preserve everything else pixel-perfect."],
        "description": "Text description of the desired edits.",
        "type": "string", "title": "Prompt", "name": "prompt"
      },
      "quality": {
        "enum": ["low", "medium", "high"],
        "title": "Quality", "name": "quality", "type": "string",
        "description": "Quality of the output image.", "default": "high"
      },
      "output_format": {
        "enum": ["jpeg", "png", "webp"],
        "title": "Output Format", "name": "output_format", "type": "string",
        "description": "Format of the output.", "default": "png"
      }
    }
  },
  {
    "id": "fal-ai/flux-pro/kontext",
    "name": "Flux Kontext Pro",
    "endpoint": "fal-ai/flux-pro/kontext",
    "family": "flux-kontext",
    "imageField": "image_url",
    "hasPrompt": true,
    "maxImages": 1,
    "inputs": {
      "prompt": {
        "examples": ["Change the season to winter with snow, preserve composition."],
        "description": "Describe the edit. Handles text + reference image.",
        "type": "string", "title": "Prompt", "name": "prompt"
      }
    }
  },
  {
    "id": "fal-ai/flux-2-pro/edit",
    "name": "Flux 2 Pro Edit",
    "endpoint": "fal-ai/flux-2-pro/edit",
    "family": "flux-2",
    "imageField": "image_url",
    "hasPrompt": true,
    "maxImages": 1,
    "inputs": {
      "prompt": {
        "examples": ["Transform to black and white cinematic style, high contrast."],
        "description": "Style transfer and sequential editing.",
        "type": "string", "title": "Prompt", "name": "prompt"
      }
    }
  },
  {
    "id": "fal-ai/bytedance/seedream/v4/edit",
    "name": "Seedream v4 Edit",
    "endpoint": "fal-ai/bytedance/seedream/v4/edit",
    "family": "seedream",
    "imageField": "image_urls",
    "hasPrompt": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "examples": ["Add soft bokeh background and warm studio lighting."],
        "description": "Unified generation + editing.",
        "type": "string", "title": "Prompt", "name": "prompt"
      }
    }
  },
  {
    "id": "fal-ai/qwen-image-edit",
    "name": "Qwen Image Edit",
    "endpoint": "fal-ai/qwen-image-edit",
    "family": "qwen",
    "imageField": "image_url",
    "hasPrompt": true,
    "maxImages": 1,
    "inputs": {
      "prompt": {
        "examples": ["Replace the text on the sign with 'CAFÉ', matching original font."],
        "description": "Precise text and object editing.",
        "type": "string", "title": "Prompt", "name": "prompt"
      }
    }
  }
];

// Curated fal.ai image-to-video models
export const i2vModels = [
  {
    "id": "bytedance/seedance-2.0/image-to-video",
    "name": "Seedance 2.0 I2V",
    "endpoint": "bytedance/seedance-2.0/image-to-video",
    "imageField": "image_url",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the motion." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "title": "Duration", "name": "duration", "type": "int", "description": "Duration in seconds.", "default": 5, "minValue": 3, "maxValue": 12, "step": 1 },
      "resolution": { "enum": ["720p", "1080p"], "title": "Resolution", "name": "resolution", "type": "string", "default": "1080p" }
    }
  },
  {
    "id": "bytedance/seedance-2.0/fast/image-to-video",
    "name": "Seedance 2.0 Fast I2V",
    "endpoint": "bytedance/seedance-2.0/fast/image-to-video",
    "imageField": "image_url",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the motion (fast tier — lower cost/latency)." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "title": "Duration", "name": "duration", "type": "int", "description": "Duration in seconds.", "default": 5, "minValue": 3, "maxValue": 10, "step": 1 },
      "resolution": { "enum": ["720p"], "title": "Resolution", "name": "resolution", "type": "string", "default": "720p" }
    }
  },
  {
    "id": "fal-ai/kling-video/v3/pro/image-to-video",
    "name": "Kling v3 Pro I2V",
    "endpoint": "fal-ai/kling-video/v3/pro/image-to-video",
    "imageField": "image_url",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the motion (audio included)." },
      "duration": { "enum": ["5", "10"], "title": "Duration", "name": "duration", "type": "string", "default": "5" }
    }
  },
  {
    "id": "fal-ai/veo3.1/image-to-video",
    "name": "Veo 3.1 I2V",
    "endpoint": "fal-ai/veo3.1/image-to-video",
    "imageField": "image_url",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the motion." },
      "duration": { "enum": ["8s"], "title": "Duration", "name": "duration", "type": "string", "default": "8s" }
    }
  },
  {
    "id": "fal-ai/kling-video/v2.5-turbo/pro/image-to-video",
    "name": "Kling 2.5 Turbo Pro I2V",
    "endpoint": "fal-ai/kling-video/v2.5-turbo/pro/image-to-video",
    "imageField": "image_url",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the motion." },
      "duration": { "enum": ["5", "10"], "title": "Duration", "name": "duration", "type": "string", "default": "5" }
    }
  },
  {
    "id": "fal-ai/pixverse/v6/image-to-video",
    "name": "PixVerse V6 I2V",
    "endpoint": "fal-ai/pixverse/v6/image-to-video",
    "imageField": "image_url",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the motion." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "enum": ["5", "8"], "title": "Duration", "name": "duration", "type": "string", "default": "5" },
      "resolution": { "enum": ["360p", "540p", "720p", "1080p"], "title": "Resolution", "name": "resolution", "type": "string", "default": "720p" }
    }
  },
  {
    "id": "fal-ai/minimax/hailuo-02/standard/image-to-video",
    "name": "MiniMax Hailuo-02 I2V",
    "endpoint": "fal-ai/minimax/hailuo-02/standard/image-to-video",
    "imageField": "image_url",
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Describe the motion." },
      "resolution": { "enum": ["512p", "768p"], "title": "Resolution", "name": "resolution", "type": "string", "default": "768p" },
      "duration": { "enum": ["6", "10"], "title": "Duration", "name": "duration", "type": "string", "default": "6" }
    }
  }
];

export const getI2IModelById = (id) => i2iModels.find(m => m.id === id);
export const getI2VModelById = (id) => i2vModels.find(m => m.id === id);

export const getAspectRatiosForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    if (!model) return ['1:1'];
    if (model.inputs && model.inputs.aspect_ratio && model.inputs.aspect_ratio.enum) return model.inputs.aspect_ratio.enum;
    return ['1:1', '16:9', '9:16'];
};

export const getAspectRatiosForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    if (!model) return ['16:9'];
    if (model.inputs && model.inputs.aspect_ratio && model.inputs.aspect_ratio.enum) return model.inputs.aspect_ratio.enum;
    return ['16:9', '9:16', '1:1'];
};

export const getDurationsForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    if (!model) return [];
    const dur = model.inputs && model.inputs.duration;
    if (!dur) return [];
    if (dur.enum) return dur.enum;
    if (dur.minValue !== undefined && dur.maxValue !== undefined && dur.step) {
        const vals = [];
        for (let v = dur.minValue; v <= dur.maxValue; v += dur.step) vals.push(v);
        return vals;
    }
    if (dur.default) return [dur.default];
    return [];
};

export const getResolutionsForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    if (!model) return [];
    const res = model.inputs && model.inputs.resolution;
    if (res && res.enum) return res.enum;
    return [];
};

export const getModesForModel = (modelId) => {
    const model = [...t2vModels, ...i2vModels].find(m => m.id === modelId);
    if (!model) return [];
    const modeInput = model.inputs?.mode;
    if (modeInput?.enum) return modeInput.enum;
    return [];
};

export const getResolutionsForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    if (!model) return [];
    if (model.inputs?.resolution?.enum) return model.inputs.resolution.enum;
    if (model.inputs?.quality?.enum) return model.inputs.quality.enum;
    return [];
};

// Returns the payload field name for quality/resolution for a t2i model ('resolution', 'quality', or null)
export const getQualityFieldForModel = (modelId) => {
    const model = getModelById(modelId);
    if (!model) return null;
    if (model.inputs?.resolution) return 'resolution';
    if (model.inputs?.quality) return 'quality';
    return null;
};

// Returns quality/resolution options for a t2i model
export const getResolutionsForModel = (modelId) => {
    const model = getModelById(modelId);
    if (!model) return [];
    if (model.inputs?.resolution?.enum) return model.inputs.resolution.enum;
    if (model.inputs?.quality?.enum) return model.inputs.quality.enum;
    return [];
};

// Returns the payload field name for quality/resolution for an i2i model ('resolution', 'quality', or null)
export const getQualityFieldForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    if (!model) return null;
    if (model.inputs?.resolution) return 'resolution';
    if (model.inputs?.quality) return 'quality';
    return null;
};

// Returns the maximum number of images an i2i model accepts (defaults to 1)
export const getMaxImagesForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    return model?.maxImages || 1;
};

// Video-to-video is not prioritized in this fal.ai migration — empty list
export const v2vModels = [];

// Curated fal.ai lipsync / talking avatar models
export const lipsyncModels = [
  {
    "id": "fal-ai/sync-lipsync/v3",
    "name": "Sync Lipsync v3",
    "endpoint": "fal-ai/sync-lipsync/v3",
    "category": "video",
    "inputs": {
      "video_url": { "type": "string", "title": "Video URL", "name": "video_url", "description": "Source video URL." },
      "audio_url": { "type": "string", "title": "Audio URL", "name": "audio_url", "description": "Audio file URL." }
    }
  },
  {
    "id": "fal-ai/sync-lipsync/v2",
    "name": "Sync Lipsync v2",
    "endpoint": "fal-ai/sync-lipsync/v2",
    "category": "video",
    "inputs": {
      "video_url": { "type": "string", "title": "Video URL", "name": "video_url", "description": "Source video URL." },
      "audio_url": { "type": "string", "title": "Audio URL", "name": "audio_url", "description": "Audio file URL." }
    }
  },
  {
    "id": "bytedance/omnihuman/v1.5",
    "name": "ByteDance OmniHuman v1.5",
    "endpoint": "bytedance/omnihuman/v1.5",
    "category": "image",
    "inputs": {
      "image_url": { "type": "string", "title": "Image URL", "name": "image_url", "description": "Portrait image URL." },
      "audio_url": { "type": "string", "title": "Audio URL", "name": "audio_url", "description": "Audio file URL." },
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Optional scene prompt." }
    }
  },
  {
    "id": "fal-ai/pixverse/lipsync",
    "name": "PixVerse Lipsync",
    "endpoint": "fal-ai/pixverse/lipsync",
    "category": "video",
    "inputs": {
      "video_url": { "type": "string", "title": "Video URL", "name": "video_url", "description": "Source video URL." },
      "audio_url": { "type": "string", "title": "Audio URL", "name": "audio_url", "description": "Audio file URL." }
    }
  },
  {
    "id": "fal-ai/heygen/v3/lipsync/speed",
    "name": "HeyGen v3 Lipsync (Speed)",
    "endpoint": "fal-ai/heygen/v3/lipsync/speed",
    "category": "video",
    "inputs": {
      "video_url": { "type": "string", "title": "Video URL", "name": "video_url", "description": "Source video URL." },
      "audio_url": { "type": "string", "title": "Audio URL", "name": "audio_url", "description": "Audio file URL." }
    }
  },
  {
    "id": "fal-ai/heygen/v3/lipsync/precision",
    "name": "HeyGen v3 Lipsync (Precision)",
    "endpoint": "fal-ai/heygen/v3/lipsync/precision",
    "category": "video",
    "inputs": {
      "video_url": { "type": "string", "title": "Video URL", "name": "video_url", "description": "Source video URL." },
      "audio_url": { "type": "string", "title": "Audio URL", "name": "audio_url", "description": "Audio file URL." }
    }
  },
  {
    "id": "veed/fabric-1.0",
    "name": "VEED Fabric 1.0",
    "endpoint": "veed/fabric-1.0",
    "category": "image",
    "inputs": {
      "image_url": { "type": "string", "title": "Image URL", "name": "image_url", "description": "Portrait image URL." },
      "audio_url": { "type": "string", "title": "Audio URL", "name": "audio_url", "description": "Audio file URL." }
    }
  }
];

export const getLipSyncModelById = (id) => lipsyncModels.find(m => m.id === id);

export const getResolutionsForLipSyncModel = (id) => {
  const model = lipsyncModels.find(m => m.id === id);
  return model?.inputs?.resolution?.enum || [];
};

export const imageLipSyncModels = lipsyncModels.filter(m => m.category === 'image');
export const videoLipSyncModels = lipsyncModels.filter(m => m.category === 'video');

export const getV2VModelById = (id) => v2vModels.find(m => m.id === id);

// ==========================================
// Reference-to-Video Models (multi-input)
// ==========================================
export const r2vModels = [
  {
    "id": "bytedance/seedance-2.0/fast/reference-to-video",
    "name": "Seedance 2.0 Fast Reference",
    "endpoint": "bytedance/seedance-2.0/fast/reference-to-video",
    "fast": true,
    "maxImages": 9,
    "maxVideos": 3,
    "maxAudios": 3,
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Reference uploads as @Image1, @Video1, @Audio1." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "title": "Duration", "name": "duration", "type": "int", "description": "Duration in seconds.", "default": 5, "minValue": 4, "maxValue": 15, "step": 1 },
      "resolution": { "enum": ["480p", "720p"], "title": "Resolution", "name": "resolution", "type": "string", "default": "720p" }
    }
  },
  {
    "id": "bytedance/seedance-2.0/reference-to-video",
    "name": "Seedance 2.0 Reference",
    "endpoint": "bytedance/seedance-2.0/reference-to-video",
    "fast": false,
    "maxImages": 9,
    "maxVideos": 3,
    "maxAudios": 3,
    "inputs": {
      "prompt": { "type": "string", "title": "Prompt", "name": "prompt", "description": "Reference uploads as @Image1, @Video1, @Audio1." },
      "aspect_ratio": { "enum": ["16:9", "9:16", "1:1"], "title": "Aspect Ratio", "name": "aspect_ratio", "type": "string", "default": "16:9" },
      "duration": { "title": "Duration", "name": "duration", "type": "int", "description": "Duration in seconds.", "default": 5, "minValue": 4, "maxValue": 15, "step": 1 },
      "resolution": { "enum": ["480p", "720p"], "title": "Resolution", "name": "resolution", "type": "string", "default": "720p" }
    }
  }
];

export const getR2VModelById = (id) => r2vModels.find(m => m.id === id);

export const getAspectRatiosForR2VModel = (id) => {
  const m = getR2VModelById(id);
  return m?.inputs?.aspect_ratio?.enum || ["16:9", "9:16", "1:1"];
};

export const getDurationsForR2VModel = (id) => {
  const m = getR2VModelById(id);
  if (!m) return [];
  const d = m.inputs?.duration;
  if (!d) return [];
  const out = [];
  for (let i = d.minValue; i <= d.maxValue; i += (d.step || 1)) out.push(i);
  return out;
};

export const getResolutionsForR2VModel = (id) => {
  const m = getR2VModelById(id);
  return m?.inputs?.resolution?.enum || [];
};
