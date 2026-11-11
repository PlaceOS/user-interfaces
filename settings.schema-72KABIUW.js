import "./chunk-653SOEEV.js";

// apps/caterer-ui/src/environments/settings.schema.json
var type = "object";
var description = "Customisable settings for the caterer-ui app";
var properties = {
  name: {
    type: "string",
    description: "Application name for the PlaceOS API client. If the URL pathname is empty, the app also uses this name to make the settings metadata key"
  },
  short_name: {
    type: "string",
    description: "Prefix for console log messages. The app also uses it as the API client application name if `name` is not set"
  },
  use_region: {
    type: "boolean",
    description: "Whether to use the active region instead of the active building. The level filter lists the levels of the whole region, with the parent building name under each level. The app also loads the orders for the whole region"
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
  },
  currency: {
    type: "string",
    description: "Currency code for menu prices, e.g. `AUD`. When not set, the app uses the currency of the active building, then `USD`"
  },
  catering_provider_groups: {
    type: "object",
    description: "Map of caterer names to the user groups that can see each caterer. When set, the caterer filters list only the caterers for the user's groups. Users in `placeos_admin` or `placeos_support` see all caterers in the order list",
    additionalProperties: {
      type: "array",
      items: {
        type: "string"
      }
    }
  },
  catering: {
    type: "object",
    description: "Catering order settings",
    properties: {
      use_bookings: {
        type: "boolean",
        description: "Load catering orders from the bookings API instead of calendar events"
      }
    }
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
//# debugId=c1c78892-aa2b-56ef-81d7-58197bb42fbc
//# sourceMappingURL=settings.schema-72KABIUW.js.map
