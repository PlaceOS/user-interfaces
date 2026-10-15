import { CompiledModel } from '@litertjs/core';
import { runModel } from './litert';

/*
 * Text to phonemes for Matcha-TTS.
 * Ported from the LiteRT Matcha-TTS web demo (Apache-2.0):
 * https://github.com/google-ai-edge/litert-samples/tree/main/samples/web_demos/src/matcha-tts
 */

/** Contents of the model's `g2p_meta.json` */
export interface G2PConfig {
    char2idx: Record<string, number>;
    idx2ph: Record<string, string>;
    char_repeats: number;
    start: number;
    end: number;
    MAXT: number;
    n_phonemes: number;
    special: string[];
}

export interface PhonemeChunk {
    ids: number[];
    ipa: string;
}

const TOKEN = /[a-z']+|\d+(?:\.\d+)?|[.,!?;:—…"]/g;
const WORD = /^[a-z']+$/;
/**
 * Acronyms such as "HDMI" or "AV" have no dictionary entry, so they are read letter by letter.
 * Each name is a dictionary word that sounds like the letter.
 */
const ACRONYM = /\b[A-Z]{2,4}\b/g;
const LETTER_NAMES: Record<string, string> = {
    A: 'eh',
    B: 'bee',
    C: 'see',
    D: 'dee',
    E: 'ee',
    F: 'ef',
    G: 'gee',
    H: 'aitch',
    I: 'eye',
    J: 'jay',
    K: 'kay',
    L: 'el',
    M: 'em',
    N: 'en',
    O: 'oh',
    P: 'pee',
    Q: 'cue',
    R: 'ar',
    S: 'ess',
    T: 'tee',
    U: 'you',
    V: 'vee',
    W: 'double you',
    X: 'ex',
    Y: 'why',
    Z: 'zed',
};
const TEXT_REPLACEMENTS: [RegExp, string][] = [
    // Thousands separators, so "1,000" is one number and not "1" and "000"
    [/(\d),(?=\d{3}\b)/g, '$1'],
    [/%/g, ' percent'],
    [/&/g, ' and '],
    [/°/g, ' degrees'],
];
const ONES = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];
const TENS = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
];
const SCALES: [number, string][] = [
    [1e9, 'billion'],
    [1e6, 'million'],
    [1e3, 'thousand'],
    [100, 'hundred'],
];

function integerToWords(value: number): string {
    if (value < 20) return ONES[value];
    if (value < 100) {
        const ones = value % 10 ? ` ${ONES[value % 10]}` : '';
        return TENS[Math.floor(value / 10)] + ones;
    }
    for (const [size, name] of SCALES) {
        if (value < size) continue;
        const rest = value % size ? ` ${integerToWords(value % size)}` : '';
        return `${integerToWords(Math.floor(value / size))} ${name}${rest}`;
    }
    return '';
}

/** Spells out a number token, such as `42` or `3.5` */
export function numberToWords(token: string) {
    const [integer, fraction] = token.split('.');
    const digits = (text: string) =>
        [...text].map((digit) => ONES[+digit]).join(' ');
    let words =
        integer.length > 12 ? digits(integer) : integerToWords(+integer);
    if (fraction !== undefined) words += ` point ${digits(fraction)}`;
    return words;
}

/**
 * Converts words into espeak IPA.
 * Uses the dictionary first, then the neural model for unknown words.
 */
export class G2P {
    private _special: Set<string>;
    private _cache = new Map<string, string>();

    constructor(
        private _dictionary: Map<string, string>,
        private _config: G2PConfig,
        private _model: CompiledModel,
    ) {
        this._special = new Set(_config.special);
    }

    public async wordToIpa(word: string) {
        const known = this._dictionary.get(word) ?? this._cache.get(word);
        if (known !== undefined) return known;
        const ipa = await this._predict(word);
        this._cache.set(word, ipa);
        return ipa;
    }

    private async _predict(word: string) {
        const { char2idx, idx2ph, char_repeats, start, end, MAXT, n_phonemes } =
            this._config;
        const ids = [start];
        for (const char of word) {
            const id = char2idx[char];
            if (id !== undefined) {
                for (let i = 0; i < char_repeats; i++) ids.push(id);
            }
        }
        ids.push(end);
        const length = Math.min(ids.length, MAXT);
        const input = new Float32Array(MAXT);
        input.set(ids.slice(0, length));
        const [logits] = await runModel(this._model, [[input, [1, MAXT]]]);
        let previous = -1;
        let ipa = '';
        for (let position = 0; position < length; position++) {
            let best = 0;
            let best_value = -Infinity;
            for (let k = 0; k < n_phonemes; k++) {
                const value = logits[position * n_phonemes + k];
                if (value > best_value) {
                    best_value = value;
                    best = k;
                }
            }
            if (best === previous) continue;
            previous = best;
            const phoneme = idx2ph[best];
            if (!best || !phoneme || this._special.has(phoneme)) continue;
            ipa += phoneme.replaceAll('-', '');
        }
        return ipa;
    }
}

/** Replaces acronyms with letter names, as "HDMI" to "aitch dee em eye" */
export function spellAcronyms(text: string) {
    return text.replace(ACRONYM, (word) =>
        [...word].map((letter) => LETTER_NAMES[letter]).join(' '),
    );
}

/** Parses the tab separated `word<TAB>ipa` dictionary */
export function parseDictionary(text: string) {
    const dictionary = new Map<string, string>();
    for (const line of text.split('\n')) {
        const tab = line.indexOf('\t');
        if (tab > 0) dictionary.set(line.slice(0, tab), line.slice(tab + 1));
    }
    return dictionary;
}

/**
 * Converts text into chunks of Matcha symbol ids. Each chunk is one sentence
 * or at most `max_ids` symbols, because the model reads single sentences.
 */
export async function phonemize(
    g2p: Pick<G2P, 'wordToIpa'>,
    symbol_ids: Map<string, number>,
    text: string,
    max_ids = 127,
) {
    const space_id = symbol_ids.get(' ') ?? 0;
    const toIds = (ipa: string) =>
        [...ipa].map((_) => symbol_ids.get(_)).filter((_) => _ !== undefined);
    const chunks: PhonemeChunk[] = [];
    let current: PhonemeChunk = { ids: [], ipa: '' };
    const flush = () => {
        if (current.ids.length) chunks.push(current);
        current = { ids: [], ipa: '' };
    };
    const add = (ipa: string, is_word: boolean) => {
        const ids = toIds(ipa);
        // Punctuation without words before it, such as the 2nd '.' of '...', has no sound
        if (!ids.length || (!is_word && !current.ids.length)) return;
        const space = is_word && current.ids.length ? 1 : 0;
        if (current.ids.length + space + ids.length > max_ids) flush();
        if (is_word && current.ids.length) {
            current.ids.push(space_id);
            current.ipa += ' ';
        }
        current.ids.push(...ids);
        current.ipa += ipa;
    };
    const normalized = TEXT_REPLACEMENTS.reduce(
        (result, [pattern, words]) => result.replace(pattern, words),
        spellAcronyms(text).toLowerCase(),
    );
    for (const [token] of normalized.matchAll(TOKEN)) {
        if (/^\d/.test(token)) {
            for (const word of numberToWords(token).split(' ')) {
                add(await g2p.wordToIpa(word), true);
            }
        } else if (WORD.test(token)) {
            add(await g2p.wordToIpa(token), true);
        } else {
            // The model pauses oddly on '!', so read it as a full stop
            const mark = token === '!' ? '.' : token;
            add(mark, false);
            if (/[.?…]/.test(mark)) flush();
        }
    }
    flush();
    return chunks;
}
