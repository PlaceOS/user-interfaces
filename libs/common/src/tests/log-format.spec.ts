import { formatLogArgs, MAX_LOG_MESSAGE } from '../lib/log-format';

describe('formatLogArgs', () => {
    it('should remove console styles and apply format directives', () => {
        expect(
            formatLogArgs([
                '%c[APP]%c[Logger] %cLoaded %s in %dms 100%%',
                'color: #E91E63',
                'color: #3F51B5',
                'color: default',
                'settings',
                12.7,
                { id: 1 },
            ]),
        ).toBe('[APP][Logger] Loaded settings in 12ms 100% {"id":1}');
    });

    it('should remove ANSI colour codes and credentials', () => {
        expect(
            formatLogArgs([
                '\u001b[31mFailed\u001b[0m https://a.test/?token=abc',
            ]),
        ).toBe('Failed https://a.test/?token=[Filtered]');
    });

    it('should convert numbers like the console and keep %c without an argument', () => {
        expect(
            formatLogArgs([
                '%d items, %f s, %i %d https://a.test/%c3%a9',
                '12ms',
                '1.25s',
                Symbol('x'),
                12.7,
            ]),
        ).toBe('12 items, 1.25 s, NaN 12 https://a.test/%c3%a9');
    });

    it('should remove ANSI colour codes from nested strings', () => {
        expect(formatLogArgs([{ text: '\u001b[31mred\u001b[0m' }])).toBe(
            '{"text":"red"}',
        );
    });

    it('should limit large and circular values', () => {
        const circular: Record<string, unknown> = { name: 'loop' };
        circular['self'] = circular;
        const text = formatLogArgs([
            circular,
            Array.from({ length: 10_000 }, (_, i) => i),
        ]);

        expect(
            text.startsWith('{"name":"loop","self":[Circular]} [0,1,2'),
        ).toBe(true);
        expect(text.length).toBeLessThanOrEqual(MAX_LOG_MESSAGE);
    });
});
