import { CompiledModel } from '@litertjs/core';
import { ModelFiles, compileModel, runModel } from './litert';
import { SPEECH_SAMPLE_RATE } from './voice-activity';

/** The model reads fixed 5 second windows */
const WINDOW_SAMPLES = 5 * SPEECH_SAMPLE_RATE;
const STATE_SHAPE = [1, 207, 288];
const MAX_TOKENS = 64;
const VOCAB_SIZE = 32768;
const START_TOKEN = 1;
const END_TOKEN = 2;
/** Upper limit of tokens per second of audio. Stops repeat loops on noise. */
const TOKENS_PER_SECOND = 6.5;
const BYTE_TOKEN = /^<0x([0-9A-F]{2})>$/;

/** Additive causal mask. 0 on and below the diagonal, -1e9 above it. */
const CAUSAL_MASK = new Float32Array(MAX_TOKENS * MAX_TOKENS);
for (let row = 0; row < MAX_TOKENS; row++) {
    CAUSAL_MASK.fill(-1e9, row * MAX_TOKENS + row + 1, (row + 1) * MAX_TOKENS);
}

interface TokenizerJson {
    model: { vocab: Record<string, number> };
}

/**
 * Speech to text with Moonshine Tiny on LiteRT.
 * Takes 16 kHz mono audio and returns English text.
 */
export class MoonshineTranscriber {
    private constructor(
        private _model: CompiledModel,
        private _vocab: string[],
    ) {}

    public static async load(files: ModelFiles) {
        const [bytes, tokenizer] = await Promise.all([
            files.bytes('moonshine'),
            files.json<TokenizerJson>('moonshine_tokenizer'),
        ]);
        const vocab: string[] = [];
        for (const [piece, id] of Object.entries(tokenizer.model.vocab)) {
            vocab[id] = piece;
        }
        // The int8 decoder only runs on the CPU
        return new MoonshineTranscriber(await compileModel(bytes, true), vocab);
    }

    public async transcribe(audio: Float32Array) {
        const parts: string[] = [];
        for (let start = 0; start < audio.length; start += WINDOW_SAMPLES) {
            const window = audio.subarray(start, start + WINDOW_SAMPLES);
            const text = await this._transcribeWindow(window);
            if (text) parts.push(text);
        }
        return parts.join(' ');
    }

    private async _transcribeWindow(audio: Float32Array) {
        const input = new Float32Array(WINDOW_SAMPLES);
        input.set(audio);
        const [states] = await runModel(
            this._model,
            [[input, [1, WINDOW_SAMPLES]]],
            'encode',
        );
        const seconds = audio.length / SPEECH_SAMPLE_RATE;
        const max_tokens = Math.min(
            MAX_TOKENS - 1,
            Math.ceil(seconds * TOKENS_PER_SECOND) + 1,
        );
        const tokens = new Int32Array(MAX_TOKENS).fill(END_TOKEN);
        tokens[0] = START_TOKEN;
        const ids: number[] = [];
        // Greedy decode. The model has no cache, so each step reads the full token buffer.
        for (let position = 1; position <= max_tokens; position++) {
            const [logits] = await runModel(
                this._model,
                [
                    [states, STATE_SHAPE],
                    [tokens, [1, MAX_TOKENS]],
                    [CAUSAL_MASK, [1, 1, MAX_TOKENS, MAX_TOKENS]],
                ],
                'decode',
            );
            const token = argmax(
                logits,
                (position - 1) * VOCAB_SIZE,
                VOCAB_SIZE,
            );
            if (token === END_TOKEN) break;
            tokens[position] = token;
            ids.push(token);
        }
        return decodeTokens(this._vocab, ids);
    }
}

function argmax(values: ArrayLike<number>, offset: number, length: number) {
    let best = 0;
    let best_value = -Infinity;
    for (let i = 0; i < length; i++) {
        const value = values[offset + i];
        if (value > best_value) {
            best_value = value;
            best = i;
        }
    }
    return best;
}

/**
 * Converts SentencePiece token ids into text.
 * `▁` marks a space and `<0xNN>` tokens hold raw UTF-8 bytes.
 */
export function decodeTokens(vocab: readonly string[], ids: readonly number[]) {
    const bytes: number[] = [];
    const encoder = new TextEncoder();
    for (const id of ids) {
        const piece = vocab[id];
        if (!piece || id <= END_TOKEN) continue;
        const byte = BYTE_TOKEN.exec(piece);
        if (byte) bytes.push(parseInt(byte[1], 16));
        else bytes.push(...encoder.encode(piece.replaceAll('▁', ' ')));
    }
    return new TextDecoder().decode(new Uint8Array(bytes)).trim();
}
