import { DEFAULT_AI_STRINGS, resolveAiStrings } from '../lib/ai/strings';

describe('resolveAiStrings', () => {
    it('lays host overrides over the defaults one level deep', () => {
        expect(resolveAiStrings(null)).toBe(DEFAULT_AI_STRINGS);
        const strings = resolveAiStrings({
            title: 'Map assistant',
            reasons: { other: 'Something else' },
        });
        expect(strings.title).toBe('Map assistant');
        expect(strings.reasons).toEqual({
            ...DEFAULT_AI_STRINGS.reasons,
            other: 'Something else',
        });
        expect(strings.categories).toEqual(DEFAULT_AI_STRINGS.categories);
    });
});
