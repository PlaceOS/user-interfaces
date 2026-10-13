import "./chunk-653SOEEV.js";

// apps/signage/src/environments/settings.schema.json
var type = "object";
var description = "Customisable settings for the signage app";
var properties = {
  name: {
    type: "string",
    description: "Name of the application. Used as the suffix of the browser page title and as a fallback application name for API storage keys"
  },
  title: {
    type: "string",
    description: "Title of the application"
  },
  description: {
    type: "string",
    description: "Description of the application"
  },
  short_name: {
    type: "string",
    description: "Short name for the application. Used as the app name for local storage keys and as a fallback for the browser page title"
  },
  logo_light: {
    type: "string",
    description: "Path or URL of the logo image to display on light backgrounds e.g. the login screen"
  },
  logo_dark: {
    type: "string",
    description: "Path or URL of the logo image to display on dark backgrounds e.g. the login screen"
  },
  diagnostics: {
    type: "boolean",
    description: "Whether diagnostics are enabled. Currently unused by the signage app"
  },
  default_animation_time: {
    type: "number",
    description: "Duration in milliseconds of the media player's transition animation between playlist items. Defaults to `1000`"
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
//# debugId=47c9d6bd-bbf0-55b3-a74c-bafa0c2fd196
//# sourceMappingURL=settings.schema-RUFB44OF.js.map
