import "./chunk-653SOEEV.js";

// apps/assistant-panel/src/environments/settings.schema.json
var type = "object";
var description = "Customisable settings for the assistant-panel app";
var properties = {
  name: {
    type: "string",
    description: "Name of the application. Appended to browser page titles and used as the fallback location for bookings"
  },
  title: {
    type: "string",
    description: "Base browser page title for the application"
  },
  description: {
    type: "string",
    description: "Description of the application"
  },
  short_name: {
    type: "string",
    description: "Short name for the application. Used as the app name for PlaceOS API metadata and page titles"
  },
  logo: {
    $ref: "#/$defs/icon",
    description: "Application logo to display on light backgrounds"
  },
  logo_dark: {
    $ref: "#/$defs/icon",
    description: "Application logo to display on dark backgrounds"
  },
  general: {
    type: "object",
    description: "General settings associated with the app"
  },
  prevent_space_init: {
    type: "boolean",
    description: "Whether to prevent loading the full list of bookable spaces on application startup"
  },
  chat: {
    type: "object",
    description: "Settings for the global AI assistant chat widget",
    properties: {
      enabled: {
        type: "boolean",
        description: "Whether to show the global AI assistant chat widget. Defaults to `false`"
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
//# debugId=efaa9845-50b8-5a2c-8f9d-9d46c6d3aeee
//# sourceMappingURL=settings.schema-ZYQJ53ZP.js.map
