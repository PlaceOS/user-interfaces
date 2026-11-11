import { buildCurrencyOptions } from '../lib/currency-options';

describe('buildCurrencyOptions', () => {
    const intl = Intl as typeof Intl & {
        supportedValuesOf?: (key: string) => string[];
    };

    afterEach(() => vi.restoreAllMocks());

    it('should list each supported currency once, sorted, with its name', () => {
        vi.spyOn(intl, 'supportedValuesOf').mockReturnValue([
            'usd',
            'AUD',
            'USD',
        ]);

        expect(buildCurrencyOptions('en')).toEqual([
            {
                code: 'AUD',
                name: 'Australian Dollar',
                display_name: 'AUD - Australian Dollar',
                search_text: 'aud australian dollar',
            },
            {
                code: 'USD',
                name: 'US Dollar',
                display_name: 'USD - US Dollar',
                search_text: 'usd us dollar',
            },
        ]);
    });

    it('should use the fallback list when the browser lists no currencies', () => {
        vi.spyOn(intl, 'supportedValuesOf').mockReturnValue([]);

        const codes = buildCurrencyOptions().map((_) => _.code);

        expect(codes).toHaveLength(20);
        expect(codes).toContain('EUR');
        expect(codes).toEqual([...codes].sort());
    });
});
