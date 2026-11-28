import { isJsonRecord } from '@placeos/common';
import { type JsonValue, metadata, type Metadata } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';
export { jsonList, toJsonValue } from '@placeos/common';

/**
 * The metadata `name` of the zone, system or user `id`. Rejects when the request fails.
 * When the item has no metadata with this name, it gives an empty metadata with
 * `details` set to `{}`, as `showMetadata` of 6.x did.
 */
export async function showMetadata(
    id: string,
    name: string,
): Promise<Metadata> {
    const item = (await metadata.show({ id, name }).then(orThrow))[name];
    return {
        name,
        description: '',
        parent_id: id,
        schema_id: null,
        editors: [],
        modified_by_id: null,
        updated_at: 0,
        created_at: 0,
        ...item,
        details: item?.details ?? {},
    };
}

/**
 * JSON that this app stores, as the record type `T`. Gives `{}` when the value is
 * not an object. See `jsonList`.
 */
export function jsonRecord<T extends object = Record<string, unknown>>(
    details: JsonValue,
): Partial<T> {
    if (!isJsonRecord(details)) return {};
    const record: object = details;
    return { ...record } as Partial<T>;
}
