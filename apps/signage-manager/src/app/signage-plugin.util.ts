import { type JsonValue } from '@placeos/ts-client';

type PluginSchema = Record<string, unknown>;

/** Most levels of nesting `jsonRecord` reads, so a cycle cannot loop */
const JSON_DEPTH_MAX = 32;

function isJsonValue(value: unknown, depth = 0): value is JsonValue {
    if (depth > JSON_DEPTH_MAX) return false;
    if (value === null) return true;
    if (['string', 'boolean'].includes(typeof value)) return true;
    if (typeof value === 'number') return Number.isFinite(value);
    if (Array.isArray(value)) {
        return value.every((item) => isJsonValue(item, depth + 1));
    }
    return (
        isRecord(value) &&
        Object.values(value).every((item) => isJsonValue(item, depth + 1))
    );
}

/**
 * The JSON values of a record, such as plugin params from a form. Values
 * that JSON cannot hold, such as `undefined` or a function, are left out.
 */
export function jsonRecord(
    record: Record<string, unknown>,
): Record<string, JsonValue> {
    const result: Record<string, JsonValue> = {};
    for (const [key, value] of Object.entries(record || {})) {
        if (isJsonValue(value)) result[key] = value;
    }
    return result;
}

function isRecord(value: unknown): value is PluginSchema {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}

export function objectHasKeys(value: unknown): value is PluginSchema {
    return isRecord(value) && Object.keys(value).length > 0;
}

/** Convert catalogue parameter definitions into the JSON Schema shape used by schema-form. */
export function pluginSchema(schema: unknown): PluginSchema | null {
    if (!objectHasKeys(schema)) return null;
    if ('properties' in schema) return schema;
    if (!Object.values(schema).every(isRecord)) return null;
    return { type: 'object', properties: schema };
}

export function schemaDefaults(schema: PluginSchema | null | undefined) {
    const properties = schema?.properties;
    if (!isRecord(properties)) return {};
    return Object.entries(properties).reduce(
        (defaults, [key, property]) => {
            if (isRecord(property) && 'default' in property) {
                defaults[key] = property.default;
            }
            return defaults;
        },
        {} as Record<string, unknown>,
    );
}

/** Display name of a plugin, falling back to its ID when it is not loaded. */
export function pluginName(
    plugins: { id: string; name: string }[],
    plugin_id?: string,
) {
    if (!plugin_id) return '';
    return plugins.find(({ id }) => id === plugin_id)?.name || plugin_id;
}
