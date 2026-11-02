import { HashMap } from './types';

const IGNORE_VALUES = [undefined, null, ''];

/**
 * Convert map into a query string
 * @param map Key value pairs to convert
 */
export function toQueryString(map: HashMap) {
    let str = '';
    if (map) {
        for (const key in map) {
            if (key in map && !IGNORE_VALUES.includes(map[key])) {
                str += `${str ? '&' : ''}${key}=${encodeURIComponent(
                    map[key],
                )}`;
            }
        }
    }
    return str;
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
}

/** The HTTP status carried by a ts-client error or its wrapped response. */
export function errorStatus(error: unknown): number | undefined {
    if (!isRecord(error)) return undefined;
    const status = error['status'];
    if (typeof status === 'number') return status;
    const nested = error['error'];
    if (!isRecord(nested)) return undefined;
    const nested_status = nested['status'];
    return typeof nested_status === 'number' ? nested_status : undefined;
}
