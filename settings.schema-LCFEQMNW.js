import "./chunk-653SOEEV.js";

// apps/signage/src/environments/settings.schema.json
var type = "object";
var description = "Customisable settings for the signage app";
var properties = {
  name: {
    type: "string",
    description: "Application name for the PlaceOS API client. If the URL pathname is empty, the app also uses this name to make the settings metadata key"
  },
  short_name: {
    type: "string",
    description: "Prefix for console log messages. The app also uses it as the API client application name if `name` is not set"
  },
  default_animation_time: {
    type: "number",
    description: "Duration in milliseconds of the media player's transition animation between playlist items. Defaults to `1000`. If the value is `0` or not set, the player uses `3000`"
  },
  templates_enabled: {
    type: "boolean",
    description: "Whether template selection is available during signage bootstrap. Defaults to `true`."
  }
};
var settings_schema_default = {
  type,
  description,
  properties
};
export {
  settings_schema_default as default,
  description,
  properties,
  type
};
//# debugId=d2cad32f-2543-5079-a604-c45e9a3971bf
//# sourceMappingURL=settings.schema-LCFEQMNW.js.map
