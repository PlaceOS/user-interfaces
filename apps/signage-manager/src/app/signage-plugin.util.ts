type PluginSchema = Record<string, unknown>;

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
