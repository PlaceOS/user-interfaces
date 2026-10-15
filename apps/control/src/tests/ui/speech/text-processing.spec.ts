import { numberToWords, phonemize } from '../../../app/ui/speech/g2p';

describe('numberToWords', () => {
    it('should spell out numbers', () => {
        expect(numberToWords('7')).toBe('seven');
        expect(numberToWords('42')).toBe('forty two');
        expect(numberToWords('1500')).toBe('one thousand five hundred');
        expect(numberToWords('2.5')).toBe('two point five');
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
    });

    it('should split a long sentence to fit the model', async () => {
        const chunks = await phonemize(g2p, symbols, 'word '.repeat(40), 20);
        expect(chunks.length).toBeGreaterThan(1);
        expect(chunks.every((_) => _.ids.length <= 20)).toBe(true);
    });
});
