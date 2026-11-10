// apps/signage-manager/src/app/signage-plugin.util.ts
function isRecord(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function objectHasKeys(value) {
  return isRecord(value) && Object.keys(value).length > 0;
}
function pluginSchema(schema) {
  if (!objectHasKeys(schema))
    return null;
  if ("properties" in schema)
    return schema;
  if (!Object.values(schema).every(isRecord))
    return null;
  return { type: "object", properties: schema };
}
function schemaDefaults(schema) {
  const properties = schema?.properties;
  if (!isRecord(properties))
    return {};
  return Object.entries(properties).reduce((defaults, [key, property]) => {
    if (isRecord(property) && "default" in property) {
      defaults[key] = property.default;
    }
    return defaults;
  }, {});
}
function pluginName(plugins, plugin_id) {
  if (!plugin_id)
    return "";
  return plugins.find(({ id }) => id === plugin_id)?.name || plugin_id;
}

export {
  objectHasKeys,
  pluginSchema,
  schemaDefaults,
  pluginName
};
//# debugId=08640164-1d68-5339-930e-f77d9ac7d9ab
//# sourceMappingURL=chunk-DBWLNOKZ.js.map
