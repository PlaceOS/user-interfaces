export interface CurrencyOption {
    code: string;
    name: string;
    display_name: string;
    search_text: string;
}

const FALLBACK_CURRENCY_CODES = [
    'AED',
    'AUD',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'INR',
    'JPY',
    'KRW',
    'MXN',
    'NOK',
    'NZD',
    'SEK',
    'SGD',
    'USD',
    'ZAR',
];

function get_supported_currency_codes(): string[] {
    const intl_ref = Intl as any;
    const currency_list = intl_ref?.supportedValuesOf?.('currency');
    if (!(currency_list instanceof Array) || !currency_list.length) {
        return FALLBACK_CURRENCY_CODES;
    }
    return currency_list.map((code) => `${code}`.toUpperCase());
}

export function buildCurrencyOptions(locale = 'en'): CurrencyOption[] {
    const display_names =
        typeof Intl.DisplayNames === 'function'
            ? new Intl.DisplayNames([locale], { type: 'currency' })
            : null;
    const currency_codes = [...new Set(get_supported_currency_codes())].sort(
        (first_code, second_code) => first_code.localeCompare(second_code),
    );
    return currency_codes.map((currency_code) => {
        const currency_name = display_names?.of(currency_code) || currency_code;
        return {
            code: currency_code,
            name: currency_name,
            display_name: `${currency_code} - ${currency_name}`,
            search_text: `${currency_code} ${currency_name}`.toLowerCase(),
        };
    });
}
