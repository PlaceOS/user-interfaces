import { CompiledModel, TypedArray } from '@litertjs/core';
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
/**
 * Lowest log probability that each wake phrase token can have.
 * In tests, wake phrases with accents scored above -4.2 and other speech below -8.
 */
const WAKE_THRESHOLD = -6;

/** Additive causal mask. 0 on and below the diagonal, -1e9 above it. */
const CAUSAL_MASK = new Float32Array(MAX_TOKENS * MAX_TOKENS);
for (let row = 0; row < MAX_TOKENS; row++) {
    CAUSAL_MASK.fill(-1e9, row * MAX_TOKENS + row + 1, (row + 1) * MAX_TOKENS);
}

interface TokenizerJson {
    model: { vocab: Record<string, number> };
}

export interface Transcript {
    text: string;
    /** The words after the wake phrase. Undefined when the speaker did not say the wake phrase. */
    command?: string;
}

/**
 * Speech to text with Moonshine Tiny on LiteRT.
 * Takes 16 kHz mono audio and returns English text.
 */
export class MoonshineTranscriber {
    private constructor(
        private _model: CompiledModel,
        private _vocab: string[],
        private _wake_tokens: number[][],
    ) {}

    /** `wake_phrase` words must each be one token, such as "Hey room" */
    public static async load(files: ModelFiles, wake_phrase: string) {
        const [bytes, tokenizer] = await Promise.all([
            files.bytes('moonshine'),
            files.json<TokenizerJson>('moonshine_tokenizer'),
        ]);
        const ids = new Map(Object.entries(tokenizer.model.vocab));
        const vocab: string[] = [];
        for (const [piece, id] of ids) vocab[id] = piece;
        // The int8 decoder only runs on the CPU
        return new MoonshineTranscriber(
            await compileModel(bytes, true),
            vocab,
            wakePhraseTokens(ids, wake_phrase),
        );
    }

    public async transcribe(audio: Float32Array): Promise<Transcript> {
        const texts: string[] = [];
        let command: string | undefined;
        for (let start = 0; start < audio.length; start += WINDOW_SAMPLES) {
            const window = audio.subarray(start, start + WINDOW_SAMPLES);
            const max_tokens = Math.min(
                MAX_TOKENS - 1,
                Math.ceil(
                    (window.length / SPEECH_SAMPLE_RATE) * TOKENS_PER_SECOND,
                ) + 1,
            );
            const states = await this._encode(window);
            const ids = await this._decode(states, [], max_tokens);
            texts.push(decodeTokens(this._vocab, ids));
            if (start === 0) {
                const wake = await this._findWakePhrase(states);
                if (wake) {
                    // Decode again after the wake phrase when the first pass heard other words
                    const rest = startsWith(ids, wake)
                        ? ids.slice(wake.length)
                        : await this._decode(states, wake, max_tokens);
                    command = decodeTokens(this._vocab, rest);
                }
            } else if (command !== undefined) {
                command += ` ${texts[texts.length - 1]}`;
            }
        }
        return {
            text: texts.filter(Boolean).join(' '),
            command: command?.trim(),
        };
    }

    private async _encode(audio: Float32Array) {
        const input = new Float32Array(WINDOW_SAMPLES);
        input.set(audio);
        const [states] = await runModel(
            this._model,
            [[input, [1, WINDOW_SAMPLES]]],
            'encode',
        );
        return states;
    }

    /** Returns the next token scores for every position of `tokens` */
    private async _logits(states: TypedArray, tokens: Int32Array) {
        const [logits] = await runModel(
            this._model,
            [
                [states, STATE_SHAPE],
                [tokens, [1, MAX_TOKENS]],
                [CAUSAL_MASK, [1, 1, MAX_TOKENS, MAX_TOKENS]],
            ],
            'decode',
        );
        return logits;
    }

    /** Greedy decode after `prefix`. The model has no cache, so each step reads the full token buffer. */
    private async _decode(
        states: TypedArray,
        prefix: number[],
        max_tokens: number,
    ) {
        const tokens = new Int32Array(MAX_TOKENS).fill(END_TOKEN);
        tokens.set([START_TOKEN, ...prefix]);
        const ids: number[] = [];
        const end = Math.min(MAX_TOKENS - 1, prefix.length + max_tokens);
        for (let position = prefix.length + 1; position <= end; position++) {
            const logits = await this._logits(states, tokens);
            const token = argmax(
                logits,
                (position - 1) * VOCAB_SIZE,
                VOCAB_SIZE,
            );
            if (token === END_TOKEN) break;
            tokens[position] = token;
            ids.push(token);
        }
        return ids;
    }

    /**
     * Scores each form of the wake phrase as the start of the audio.
     * The model gives the probability of every token in one run, so this finds
     * the wake phrase even when the most likely words are different,
     * as with some accents. Returns the best form above the threshold.
     */
    private async _findWakePhrase(states: TypedArray) {
        let best: number[] | undefined;
        let best_score = WAKE_THRESHOLD;
        for (const wake of this._wake_tokens) {
            const tokens = new Int32Array(MAX_TOKENS).fill(END_TOKEN);
            tokens.set([START_TOKEN, ...wake]);
            const logits = await this._logits(states, tokens);
            const score = Math.min(
                ...wake.map((token, i) => logProbability(logits, i, token)),
            );
            if (score > best_score) {
                best = wake;
                best_score = score;
            }
        }
        return best;
    }
}

/**
 * Converts the wake phrase into token sequences, with and without a comma
 * after the first word. Returns none if a word is not one token.
 */
export function wakePhraseTokens(ids: Map<string, number>, phrase: string) {
    const words = phrase.split(' ').map((word) => ids.get(`▁${word}`));
    const comma = ids.get(',');
    if (!words.length || words.some((_) => _ === undefined)) return [];
    const tokens = words as number[];
    const forms = [tokens];
    if (comma !== undefined && tokens.length > 1) {
        forms.push([tokens[0], comma, ...tokens.slice(1)]);
    }
    return forms;
}

function startsWith(ids: number[], prefix: number[]) {
    return prefix.every((token, i) => ids[i] === token);
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

/** Log softmax of one token at one position */
function logProbability(
    logits: ArrayLike<number>,
    position: number,
    token: number,
) {
    const offset = position * VOCAB_SIZE;
    let max = -Infinity;
    for (let i = 0; i < VOCAB_SIZE; i++)
        max = Math.max(max, logits[offset + i]);
    let sum = 0;
    for (let i = 0; i < VOCAB_SIZE; i++)
        sum += Math.exp(logits[offset + i] - max);
    return logits[offset + token] - max - Math.log(sum);
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
