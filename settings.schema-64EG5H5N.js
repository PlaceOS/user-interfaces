import "./chunk-SZBWVRCN.js";

// apps/booking-panel/src/environments/settings.schema.json
var type = "object";
var description = "Customisable settings for the booking-panel app";
var properties = {
  name: {
    type: "string",
    description: "Name of the application. Used for the page title and as a fallback application name for API requests."
  },
  title: {
    type: "string",
    description: "Title for the application"
  },
  description: {
    type: "string",
    description: "Description of the application"
  },
  short_name: {
    type: "string",
    description: "Short name for the application. Used as the application name for API requests."
  },
  logo_light: {
    $ref: "#/$defs/logo",
    description: "Logo displayed on the event panel when the light theme is active. Either an image URL string or an object with a `src` image URL."
  },
  logo_dark: {
    $ref: "#/$defs/logo",
    description: "Logo displayed on the event panel when the dark theme is active. Either an image URL string or an object with a `src` image URL."
  },
  general: {
    type: "object",
    description: "General settings associated with the app"
  },
  prevent_space_init: {
    type: "boolean",
    description: "Whether to prevent the spaces service from loading the full list of bookable spaces on startup"
  },
  allow_dark_mode: {
    type: "boolean",
    description: "Whether the user is allowed to switch the app between light and dark themes. When disabled the app is locked to the light theme."
  },
  text_color: {
    type: "string",
    description: "CSS colour for text on the event panel view. Defaults to `#FFFFFF`."
  },
  background_color: {
    type: "string",
    description: "CSS colour for the background of the event panel view. Defaults to `#483285`."
  },
  background_image: {
    type: "string",
    description: "URL of the background image to render on the event panel view"
  },
  refresh_when_websocket_unstable: {
    type: "boolean",
    description: "Whether to reload the page when the websocket connection to the PlaceOS backend is repeatedly dropping"
  },
  user_as_default_host: {
    type: "boolean",
    description: "Whether the signed-in user's email should be used as the host for `book_now` bookings when no host is set"
  },
  features: {
    type: "array",
    description: "List of opt-in panel features. All features are off by default.",
    items: {
      type: "string",
      enum: [
        "checkin_countdown",
        "connection_badge",
        "quick_book",
        "extend_meeting",
        "ending_warning",
        "presence_status",
        "presence_release",
        "timeline_booking",
        "room_services",
        "hide_version",
        "night_mode",
        "burn_in_protection"
      ]
    }
  },
  night_start: {
    type: "string",
    description: "Local time in `HH:mm` format when the `night_mode` feature starts to dim the panel. Defaults to `19:00`."
  },
  night_end: {
    type: "string",
    description: "Local time in `HH:mm` format when the `night_mode` feature stops dimming the panel. Defaults to `07:00`."
  },
  presence_release_after: {
    type: "number",
    description: "Minutes after the start of a pending booking with no presence detected before the `presence_release` feature releases it. Defaults to `5`."
  }
};
var $defs = {
  logo: {
    anyOf: [
      {
        type: "string",
        description: "URL of the logo image"
      },
      {
        type: "object",
        required: ["src"],
        properties: {
          src: {
            type: "string",
            description: "URL of the logo image"
          }
        }
      }
    ]
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
//# debugId=faa93a51-fd7f-5679-9b07-85ab9ef78fd0
//# sourceMappingURL=settings.schema-64EG5H5N.js.map
