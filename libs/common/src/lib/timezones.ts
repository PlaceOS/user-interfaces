type IntlWithValues = typeof Intl & {
    supportedValuesOf?: (key: 'timeZone') => string[];
};

/**
 * Fixed-offset zones, which `Intl.supportedValuesOf` leaves out. The sign is
 * inverted by IANA convention: `Etc/GMT-10` is UTC+10.
 */
const FIXED_OFFSET_ZONES = [
    ...Array.from({ length: 12 }, (_, i) => `Etc/GMT+${i + 1}`),
    ...Array.from({ length: 14 }, (_, i) => `Etc/GMT-${i + 1}`),
];

/**
 * Legacy names that Chrome and Safari return in place of the current IANA
 * names. Firefox already returns the current names.
 */
const LEGACY_ZONE_NAMES: Record<string, string> = {
    'Africa/Asmera': 'Africa/Asmara',
    'America/Buenos_Aires': 'America/Argentina/Buenos_Aires',
    'America/Catamarca': 'America/Argentina/Catamarca',
    'America/Coral_Harbour': 'America/Atikokan',
    'America/Cordoba': 'America/Argentina/Cordoba',
    'America/Godthab': 'America/Nuuk',
    'America/Indianapolis': 'America/Indiana/Indianapolis',
    'America/Jujuy': 'America/Argentina/Jujuy',
    'America/Louisville': 'America/Kentucky/Louisville',
    'America/Mendoza': 'America/Argentina/Mendoza',
    'Asia/Calcutta': 'Asia/Kolkata',
    'Asia/Katmandu': 'Asia/Kathmandu',
    'Asia/Rangoon': 'Asia/Yangon',
    'Asia/Saigon': 'Asia/Ho_Chi_Minh',
    'Atlantic/Faeroe': 'Atlantic/Faroe',
    'Europe/Kiev': 'Europe/Kyiv',
    'Pacific/Enderbury': 'Pacific/Kanton',
    'Pacific/Ponape': 'Pacific/Pohnpei',
    'Pacific/Truk': 'Pacific/Chuuk',
};

/**
 * Sorted IANA time zone names that the browser supports, plus UTC (some
 * browsers leave it out) and the fixed-offset zones. Browsers without
 * `Intl.supportedValuesOf` get the local zone in place of the full list.
 * Legacy names are changed to their current IANA names.
 */
function supportedTimezones(): string[] {
    const list = (Intl as IntlWithValues).supportedValuesOf?.('timeZone') || [
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    ];
    return [
        ...new Set([
            'UTC',
            ...list
                .filter(Boolean)
                .map((zone) => LEGACY_ZONE_NAMES[zone] ?? zone),
            ...FIXED_OFFSET_ZONES,
        ]),
    ].sort();
}

/** IANA time zone names offered in time zone pickers */
export const TIMEZONES_IANA = supportedTimezones();
