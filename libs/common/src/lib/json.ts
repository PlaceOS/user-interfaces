import type { JsonValue } from '@placeos/ts-client';

/**
 * A JSON copy of app data, for a `JsonValue` field such as the `details` of
 * metadata. The 7.x client rejects a request with a value that is not JSON,
 * such as `undefined` in an object or a class instance. The copy removes
 * these values, as `JSON.stringify` does.
 */
export function toJsonValue(value: unknown): JsonValue {
    const text = JSON.stringify(value);
    return text === undefined ? null : JSON.parse(text);
}

/**
 * JSON that the app stores, such as the `details` of metadata, as a list of
 * the app type `T`. Gives `[]` when the value is not a list. The API types
 * these values as any JSON, so this gives them an app type. It does not
 * check the items.
 */
export function jsonList<T>(value: JsonValue | undefined): T[] {
    if (!Array.isArray(value)) return [];
    const list: readonly unknown[] = value;
    return [...list] as T[];
}

/** A JSON object, such as the `details` of metadata */
export type JsonRecord = { readonly [key: string]: JsonValue };

/** Whether a JSON value is an object, not an array or a scalar */
export function isJsonRecord(
    value: JsonValue | undefined,
): value is JsonRecord {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Whether a JSON value is an array. `Array.isArray` narrows a JSON value to
 * `any[]`, so use this check to keep the JSON type of the items.
 */
export function isJsonArray(
    value: JsonValue | undefined,
): value is readonly JsonValue[] {
    return Array.isArray(value);
}

/** The fields of a JSON object, or an empty object for any other value */
export function jsonRecord(value: JsonValue | undefined): JsonRecord {
    return isJsonRecord(value) ? value : {};
}

/** The objects of a JSON array. Other values give an empty list */
export function jsonRecords(value: JsonValue | undefined): JsonRecord[] {
    return isJsonArray(value) ? value.filter(isJsonRecord) : [];
}

/** The text of a JSON string, or `''` for any other value */
export function jsonText(value: JsonValue | undefined): string {
    return typeof value === 'string' ? value : '';
}

/** The strings of a JSON array. Other values give an empty list */
export function jsonStrings(value: JsonValue | undefined): string[] {
    return isJsonArray(value)
        ? value.filter((_): _ is string => typeof _ === 'string')
        : [];
}
