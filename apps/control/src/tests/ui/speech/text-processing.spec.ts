import { CompiledModel } from '@litertjs/core';

vi.mock('@litertjs/core', { spy: true });

import * as litert from '@litertjs/core';
import {
    G2P,
    G2PConfig,
    numberToWords,
    parseDictionary,
    phonemize,
    spellAcronyms,
} from '../../../app/ui/speech/g2p';

describe('numberToWords', () => {
    it('should spell out numbers', () => {
        expect(numberToWords('7')).toBe('seven');
        expect(numberToWords('42')).toBe('forty two');
        expect(numberToWords('1500')).toBe('one thousand five hundred');
        expect(numberToWords('2.5')).toBe('two point five');
    });

    it('should read numbers longer than 12 digits digit by digit', () => {
        expect(numberToWords('999999999999')).toBe(
            'nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine',
        );
        expect(numberToWords('1234567890123')).toBe(
            'one two three four five six seven eight nine zero one two three',
        );
    });
});

describe('parseDictionary', () => {
    it('should read word and IPA pairs and skip lines without a word', () => {
        const dictionary = parseDictionary('hello\thəˈloʊ\n\tbad\nnone\n');
        expect([...dictionary]).toEqual([['hello', 'həˈloʊ']]);
    });
});

describe('G2P', () => {
    // Phoneme 0 is the blank, `$` is a special symbol and `-` is a separator
    const config: G2PConfig = {
        char2idx: { a: 1, b: 2 },
        idx2ph: { 0: '_', 1: 'ə', 2: 'b-', 3: '$' },
        char_repeats: 1,
        start: 3,
        end: 3,
        MAXT: 8,
        n_phonemes: 4,
        special: ['$'],
    };
    /** Model that picks one phoneme per input position */
    const model = (best: number[]) => {
        const logits = new Float32Array(config.MAXT * config.n_phonemes);
        best.forEach((k, position) => {
            logits[position * config.n_phonemes + k] = 1;
        });
        const run = vi.fn(async () => [
            { data: async () => logits, delete: vi.fn() },
        ]);
        return { run } as unknown as CompiledModel & { run: typeof run };
    };

    beforeEach(() => {
        vi.mocked(litert.Tensor.fromTypedArray).mockImplementation(
            () =>
                ({ delete: vi.fn() }) as unknown as ReturnType<
                    typeof litert.Tensor.fromTypedArray
                >,
        );
    });

    it('should use the dictionary before the model', async () => {
        const compiled = model([]);
        const g2p = new G2P(new Map([['ab', 'æb']]), config, compiled);
        expect(await g2p.wordToIpa('ab')).toBe('æb');
        expect(compiled.run).not.toHaveBeenCalled();
    });

    it('should decode the model output once per word', async () => {
        // Positions: start, a, a, b, end
        const compiled = model([0, 1, 1, 3, 2]);
        const g2p = new G2P(new Map(), config, compiled);
        // Repeats collapse, and the blank and special symbols are dropped
        expect(await g2p.wordToIpa('aab')).toBe('əb');
        expect(await g2p.wordToIpa('aab')).toBe('əb');
        expect(compiled.run).toHaveBeenCalledTimes(1);
    });
});

describe('spellAcronyms', () => {
    it('should read acronyms letter by letter', () => {
        expect(spellAcronyms('Switch to HDMI on the TV.')).toBe(
            'Switch to aitch dee em eye on the tee vee.',
        );
    });

    it('should leave words and single capitals alone', () => {
        expect(spellAcronyms('I opened PlaceOS in Sydney.')).toBe(
            'I opened PlaceOS in Sydney.',
        );
    });
});

describe('phonemize', () => {
    // Uses each letter as its own phoneme
    const g2p = { wordToIpa: async (word: string) => word };
    const symbols = new Map(
        [' ', '.', ',', '?', ...'abcdefghijklmnopqrstuvwxyz'].map((s, i) => [
            s,
            i,
        ]),
    );
    const ipa = async (text: string) =>
        (await phonemize(g2p, symbols, text)).map((_) => _.ipa);

    it('should split text into sentences', async () => {
        expect(await ipa('Hello there. How are you?')).toEqual([
            'hello there.',
            'how are you?',
        ]);
    });

    it('should not make a chunk from punctuation alone', async () => {
        expect(await ipa('One moment...')).toEqual(['one moment.']);
    });

    it('should read numbers and symbols as words', async () => {
        expect(await ipa('Volume 50%')).toEqual(['volume fifty percent']);
        expect(await ipa('It holds 1,000,000 people, 2,3 or 4.')).toEqual([
            'it holds one million people, two, three or four.',
        ]);
    });

    it('should split a long sentence to fit the model', async () => {
        const chunks = await phonemize(g2p, symbols, 'word '.repeat(40), 20);
        expect(chunks.length).toBeGreaterThan(1);
        expect(chunks.every((_) => _.ids.length <= 20)).toBe(true);
    });
});
