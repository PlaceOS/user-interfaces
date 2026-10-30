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
 * Sorted IANA time zone names that the browser supports, plus UTC (some
 * browsers leave it out) and the fixed-offset zones. Browsers without
 * `Intl.supportedValuesOf` get the local zone in place of the full list.
 */
function supportedTimezones(): string[] {
    const list = (Intl as IntlWithValues).supportedValuesOf?.('timeZone') || [
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    ];
    return [
        ...new Set(['UTC', ...list.filter(Boolean), ...FIXED_OFFSET_ZONES]),
    ].sort();
}

/** IANA time zone names offered in time zone pickers */
export const TIMEZONES_IANA = supportedTimezones();
