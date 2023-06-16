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
                    map[key]
                )}`;
            }
        }
    }
    return str;
}
