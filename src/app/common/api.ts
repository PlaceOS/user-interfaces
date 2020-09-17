import { HashMap } from "./types";

/**
 * Convert map into a query string
 * @param map Key value pairs to convert
 */
export function toQueryString(map: HashMap) {
    let str = '';
    if (map) {
        for (const key in map) {
            if (map.hasOwnProperty(key) && map[key] !== undefined && map[key] !== null) {
                str += `${(str ? '&' : '')}${key}=${map[key]}`;
            }
        }
    }
    return str;
}
