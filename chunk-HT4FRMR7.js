// apps/signage-manager/src/app/signage-plugin.util.ts
var JSON_DEPTH_MAX = 32;
function isJsonValue(value, depth = 0) {
  if (depth > JSON_DEPTH_MAX)
    return false;
  if (value === null)
    return true;
  if (["string", "boolean"].includes(typeof value))
    return true;
  if (typeof value === "number")
    return Number.isFinite(value);
  if (Array.isArray(value)) {
    return value.every((item) => isJsonValue(item, depth + 1));
  }
  return isRecord(value) && Object.values(value).every((item) => isJsonValue(item, depth + 1));
}
function jsonRecord(record) {
  const result = {};
  for (const [key, value] of Object.entries(record || {})) {
    if (isJsonValue(value))
      result[key] = value;
  }
  return result;
}
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
  jsonRecord,
  objectHasKeys,
  pluginSchema,
  schemaDefaults,
  pluginName
};
//# debugId=779f5e45-1282-511c-8d56-ed366a7cb7bd
//# sourceMappingURL=chunk-HT4FRMR7.js.map
