import {
    CompiledModel,
    Tensor,
    TypedArray,
    isWebGPUSupported,
    loadAndCompile,
    loadLiteRt,
} from '@litertjs/core';

/** Model files, pinned to a commit so an upstream change cannot break the app */
const DEFAULT_FILE_URLS = {
    moonshine:
        'https://huggingface.co/litert-community/moonshine-tiny/resolve/eb73d789d7eebcd4d3d5f1a851692923a8e76763/moonshine_tiny_5s_i8.tflite',
    moonshine_tokenizer:
        'https://huggingface.co/UsefulSensors/moonshine-tiny/resolve/390624ed33d594443aa4aa221f5b9f283b545b5a/tokenizer.json',
    ...matchaUrls(
        'https://huggingface.co/litert-community/Matcha-TTS/resolve/6dd0418da3204f5704d7afb66722d795e84fcbe5/',
    ),
};
export type ModelFile = keyof typeof DEFAULT_FILE_URLS;

function matchaUrls(base: string) {
    return {
        matcha_text_encoder: `${base}matcha_textenc_fp16.tflite`,
        matcha_decoder: `${base}matcha_decoder_fp16.tflite`,
        matcha_vocoder: `${base}matcha_vocoder_fp16.tflite`,
        matcha_g2p: `${base}dp_g2p_matcha_fp16.tflite`,
        matcha_embeddings: `${base}emb.bin`,
        matcha_dictionary: `${base}g2p_dict.txt.gz`,
        matcha_config: `${base}config.json`,
        matcha_g2p_config: `${base}g2p_meta.json`,
    };
}

const CACHE_NAME = 'control-voice-models-v1';

/**
 * Downloads model files and keeps them in the Cache API, so each file downloads once.
 * `mirror_url` is an absolute URL of a folder that holds the same file names.
 * When set, it replaces the Hugging Face URLs.
 */
export class ModelFiles {
    constructor(private _mirror_url = '') {}

    public url(file: ModelFile) {
        const url = DEFAULT_FILE_URLS[file];
        if (!this._mirror_url) return url;
        const name = url.slice(url.lastIndexOf('/') + 1);
        return new URL(name, this._mirror_url.replace(/\/?$/, '/')).href;
    }

    public async bytes(file: ModelFile) {
        const url = this.url(file);
        const cache =
            'caches' in globalThis
                ? await caches.open(CACHE_NAME).catch(() => undefined)
                : undefined;
        const hit = await cache?.match(url);
        if (hit) return new Uint8Array(await hit.arrayBuffer());
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} when loading ${url}`);
        }
        const bytes = new Uint8Array(await response.arrayBuffer());
        await cache?.put(url, new Response(bytes.slice())).catch(() => {});
        return bytes;
    }

    public async json<T>(file: ModelFile): Promise<T> {
        return JSON.parse(new TextDecoder().decode(await this.bytes(file)));
    }
}

let runtime: Promise<unknown> | undefined;

/** Loads the LiteRT Wasm runtime once. `wasm_url` is the folder with the LiteRT `.wasm` files. */
export function loadRuntime(wasm_url: string) {
    runtime ??= loadLiteRt(wasm_url);
    return runtime;
}

/**
 * Compiles a model on the GPU when the browser supports WebGPU, else on the CPU.
 * Use `cpu_only` for graphs that give wrong results on WebGPU.
 */
export async function compileModel(bytes: Uint8Array, cpu_only = false) {
    if (!cpu_only && isWebGPUSupported()) {
        try {
            return await loadAndCompile(bytes, { accelerator: 'webgpu' });
        } catch {
            // Some browsers list WebGPU but cannot compile on it
        }
    }
    return loadAndCompile(bytes, { accelerator: 'wasm' });
}

/** Runs one model signature and returns its outputs as host arrays. Frees all tensors. */
export async function runModel(
    model: CompiledModel,
    inputs: [TypedArray, number[]][],
    signature?: string,
) {
    const tensors = inputs.map(([data, shape]) =>
        Tensor.fromTypedArray(data, shape),
    );
    try {
        const outputs = signature
            ? await model.run(signature, tensors)
            : await model.run(tensors);
        try {
            return await Promise.all(outputs.map((_) => _.data()));
        } finally {
            outputs.forEach((_) => _.delete());
        }
    } finally {
        tensors.forEach((_) => _.delete());
    }
}
