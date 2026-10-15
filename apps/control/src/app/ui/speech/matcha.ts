import { CompiledModel } from '@litertjs/core';
import { G2P, G2PConfig, parseDictionary, phonemize } from './g2p';
import { ModelFiles, compileModel, runModel } from './litert';

/*
 * Text to speech with Matcha-TTS (LJSpeech voice) on LiteRT.
 * Ported from the LiteRT Matcha-TTS web demo (Apache-2.0):
 * https://github.com/google-ai-edge/litert-samples/tree/main/samples/web_demos/src/matcha-tts
 */

/** Contents of the model's `config.json` */
interface MatchaConfig {
    symbols: string[];
    n_channels: number;
    n_feats: number;
    MAX_TEXT: number;
    MAX_MEL: number;
    mel_mean: number;
    mel_std: number;
    hop: number;
    sample_rate: number;
    length_scale: number;
    in_channels: number;
}

/**
 * ODE steps for the decoder. The decoder must run on the CPU, at about 1 second per step
 * without Wasm threads. Two steps keep speech clear at half the delay of four.
 */
const DECODER_STEPS = 2;
/** Fixed seed, so the same text always gives the same audio */
const NOISE_SEED = 0;

export class MatchaSynthesizer {
    private constructor(
        private _g2p: G2P,
        private _models: {
            text_encoder: CompiledModel;
            decoder: CompiledModel;
            vocoder: CompiledModel;
        },
        private _embeddings: Float32Array,
        private _config: MatchaConfig,
        private _symbol_ids: Map<string, number>,
    ) {}

    public get sample_rate() {
        return this._config.sample_rate;
    }

    public static async load(files: ModelFiles) {
        const [
            text_encoder,
            decoder,
            vocoder,
            g2p_model,
            embeddings,
            dictionary,
            config,
            g2p_config,
        ] = await Promise.all([
            files.bytes('matcha_text_encoder'),
            files.bytes('matcha_decoder'),
            files.bytes('matcha_vocoder'),
            files.bytes('matcha_g2p'),
            files.bytes('matcha_embeddings'),
            files.bytes('matcha_dictionary').then(gunzipText),
            files.json<MatchaConfig>('matcha_config'),
            files.json<G2PConfig>('matcha_g2p_config'),
        ]);
        const symbol_ids = new Map<string, number>();
        config.symbols.forEach((symbol, id) => {
            if (symbol.length === 1) symbol_ids.set(symbol, id);
        });
        // WebGPU gives wrong decoder output, so only the encoder and vocoder use it
        const models = {
            text_encoder: await compileModel(text_encoder),
            decoder: await compileModel(decoder, true),
            vocoder: await compileModel(vocoder),
        };
        const g2p = new G2P(
            parseDictionary(dictionary),
            g2p_config,
            await compileModel(g2p_model, true),
        );
        return new MatchaSynthesizer(
            g2p,
            models,
            new Float32Array(embeddings.slice().buffer),
            config,
            symbol_ids,
        );
    }

    /** Yields audio for one sentence at a time, so playback can start early */
    public async *synthesize(text: string) {
        const chunks = await phonemize(this._g2p, this._symbol_ids, text);
        for (const chunk of chunks)
            yield await this._synthesizeChunk(chunk.ids);
    }

    private async _synthesizeChunk(phoneme_ids: number[]) {
        const {
            MAX_TEXT,
            MAX_MEL,
            n_feats: FEATURES,
            n_channels: CHANNELS,
            hop,
            mel_mean,
            mel_std,
            length_scale,
            in_channels,
        } = this._config;

        // Blanks (id 0) go between phonemes: ids[2k + 1] = phoneme_ids[k]
        const embedded = new Float32Array(MAX_TEXT * CHANNELS);
        const text_length = Math.min(phoneme_ids.length * 2 + 1, MAX_TEXT);
        const text_mask = new Float32Array(MAX_TEXT).fill(1, 0, text_length);
        for (let t = 0; t < MAX_TEXT; t++) {
            const k = (t - 1) / 2;
            const id =
                t % 2 === 1 && k < phoneme_ids.length ? phoneme_ids[k] : 0;
            embedded.set(
                this._embeddings.subarray(id * CHANNELS, (id + 1) * CHANNELS),
                t * CHANNELS,
            );
        }
        const encoded = await runModel(this._models.text_encoder, [
            [embedded, [1, MAX_TEXT, CHANNELS]],
            [text_mask, [1, 1, MAX_TEXT]],
        ]);
        // Output order is not fixed. `mu` is the larger output.
        const [mu, log_durations] =
            encoded[0].length === FEATURES * MAX_TEXT
                ? encoded
                : [encoded[1], encoded[0]];

        // Expand each phoneme by its duration into mel frames
        const cumulative = new Float64Array(MAX_TEXT);
        let total = 0;
        for (let t = 0; t < MAX_TEXT; t++) {
            total +=
                Math.ceil(Math.exp(log_durations[t]) * text_mask[t]) *
                length_scale;
            cumulative[t] = total;
        }
        const frames = Math.min(Math.max(Math.trunc(total), 1), MAX_MEL);
        const mu_frames = new Float32Array(FEATURES * MAX_MEL);
        for (let frame = 0, t = 0; frame < frames; frame++) {
            while (t < MAX_TEXT - 1 && cumulative[t] <= frame) t++;
            for (let c = 0; c < FEATURES; c++) {
                mu_frames[c * MAX_MEL + frame] = mu[c * MAX_TEXT + t];
            }
        }
        const frame_mask = new Float32Array(MAX_MEL).fill(1, 0, frames);

        // Euler ODE from noise to mel: x += v / steps
        const random = normalRandom(NOISE_SEED);
        const x = new Float32Array(FEATURES * MAX_MEL);
        for (let c = 0; c < FEATURES; c++) {
            for (let frame = 0; frame < frames; frame++) {
                x[c * MAX_MEL + frame] = random();
            }
        }
        for (let step = 0; step < DECODER_STEPS; step++) {
            const [velocity] = await runModel(this._models.decoder, [
                [x, [1, FEATURES, MAX_MEL]],
                [mu_frames, [1, FEATURES, MAX_MEL]],
                [
                    timeEmbedding(step / DECODER_STEPS, in_channels),
                    [1, in_channels],
                ],
                [frame_mask, [1, 1, MAX_MEL]],
            ]);
            for (let i = 0; i < x.length; i++) {
                x[i] += velocity[i] / DECODER_STEPS;
            }
        }

        const mel = new Float32Array(FEATURES * MAX_MEL);
        for (let c = 0; c < FEATURES; c++) {
            for (let frame = 0; frame < frames; frame++) {
                const i = c * MAX_MEL + frame;
                mel[i] = x[i] * mel_std + mel_mean;
            }
        }
        const [wave] = await runModel(this._models.vocoder, [
            [mel, [1, FEATURES, MAX_MEL]],
        ]);
        const samples = new Float32Array(frames * hop);
        for (let i = 0; i < samples.length; i++) {
            samples[i] = Math.max(-1, Math.min(1, wave[i]));
        }
        return samples;
    }
}

async function gunzipText(bytes: Uint8Array) {
    const stream = new Blob([bytes as BlobPart])
        .stream()
        .pipeThrough(new DecompressionStream('gzip'));
    return new Response(stream).text();
}

/** Sinusoidal time embedding for the decoder (scale 1000) */
function timeEmbedding(time: number, size: number) {
    const half = size / 2;
    const embedding = new Float32Array(size);
    const scale = -Math.log(10000) / (half - 1);
    for (let i = 0; i < half; i++) {
        const value = 1000 * time * Math.exp(i * scale);
        embedding[i] = Math.sin(value);
        embedding[half + i] = Math.cos(value);
    }
    return embedding;
}

/** Seeded standard normal values (mulberry32 with Box-Muller) */
function normalRandom(seed: number) {
    let state = seed >>> 0;
    const uniform = () => {
        state = (state + 0x6d2b79f5) | 0;
        let t = Math.imul(state ^ (state >>> 15), 1 | state);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    let spare: number | undefined;
    return () => {
        if (spare !== undefined) {
            const value = spare;
            spare = undefined;
            return value;
        }
        // log(0) is infinite, so replace a zero with the smallest value
        const u = uniform() || Number.MIN_VALUE;
        const radius = Math.sqrt(-2 * Math.log(u));
        const angle = 2 * Math.PI * uniform();
        spare = radius * Math.sin(angle);
        return radius * Math.cos(angle);
    };
}
