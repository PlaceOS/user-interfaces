import "./chunk-653SOEEV.js";

// apps/caterer-ui/src/environments/settings.schema.json
var type = "object";
var description = "Customisable settings for the caterer-ui app";
var properties = {
  name: {
    type: "string",
    description: "Name of the application. Used in the browser page title when no short name is set"
  },
  title: {
    type: "string",
    description: "Title metadata for the application"
  },
  description: {
    type: "string",
    description: "Description metadata for the application"
  },
  short_name: {
    type: "string",
    description: "Short name for the application. Used in browser page titles and as the app identifier"
  },
  logo: {
    $ref: "#/$defs/icon",
    description: "Logo to display when the app is using the light theme"
  },
  logo_dark: {
    $ref: "#/$defs/icon",
    description: "Logo to display when the app is using the dark theme"
  },
  general: {
    type: "object",
    description: "General settings associated with the app"
  },
  use_region: {
    type: "boolean",
    description: "Whether the level filter should list levels for the whole active region instead of only the active building, showing the parent building name under each level"
  },
  chat: {
    type: "object",
    description: "Settings for the global chat widget",
    properties: {
      enabled: {
        type: "boolean",
        description: "Whether to show the global chat widget in the app"
      }
    }
  }
};
var $defs = {
  icon: {
    type: "object",
    required: ["type"],
    properties: {
      type: {
        type: "string",
        enum: ["img", "icon"],
        enumNames: ["Image", "Icon"],
        description: "Type of icon to render. Either `img` or `icon`"
      },
      src: {
        type: "string",
        description: "URL of the image icon to display"
      },
      class: {
        type: "string",
        description: "CSS class to apply to icon container element"
      },
      content: {
        type: "string",
        description: "Content to add to the icon container element"
      },
      background: {
        type: "string",
        description: "Background colour for the icon"
      }
    }
  }
};
var settings_schema_default = {
  type,
  description,
  properties,
  $defs
};
export {
  $defs,
  settings_schema_default as default,
  description,
  properties,
  type
};
//# debugId=9bc8f7a2-ac27-5a5b-b198-5e73e66a3735
//# sourceMappingURL=settings.schema-4P6S7LSF.js.map
