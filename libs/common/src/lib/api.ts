import { HashMap } from "./types";

/**
 * Convert map into a query string
 * @param map Key value pairs to convert
 */
export function toQueryString(map: HashMap) {
    let str = '';
    if (map) {
        for (const key in map) {
            if (key in map && map[key] !== undefined && map[key] !== null) {
                str += `${(str ? '&' : '')}${key}=${encodeURIComponent(map[key])}`;
            }
        }
    }
    return str;
}
