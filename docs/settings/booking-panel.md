# Booking Panel App Settings

The Booking Panel is the room booking panel application, typically mounted on a tablet outside a meeting room. It shows the room's current status and upcoming events, and lets people book the room on the spot.

Settings are configured in Backoffice as Zone metadata under the `app` metadata key. Values you set on a zone are merged over the application's build-time defaults, so you only need to define the settings you want to change. Settings on more specific zones (e.g. a building) override the same settings on broader zones (e.g. the organisation).

All keys below live under the `app` metadata key — for example, the key `logo_light` means:

```json
{
    "app": {
        "logo_light": "https://example.com/logo.svg"
    }
}
```

## Application Identity

| Setting | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| `name` | string | `"Bookings"` | Name of the application. Used for the page title and as a fallback application name for API requests. |
| `title` | string | `"PlaceOS"` | Title for the application. |
| `description` | string | `"Bookings UI"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name for the application. Used as the application name for API requests. |
| `general` | object | `{}` | General settings associated with the app. |

## Branding & Appearance

| Setting | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| `logo_light` | string or object | `"assets/logo-light.svg"` | Logo displayed on the event panel when the light theme is active. Either an image URL string or an object with a `src` image URL. |
| `logo_dark` | string or object | `"assets/logo-dark.svg"` | Logo displayed on the event panel when the dark theme is active. Either an image URL string or an object with a `src` image URL. |
| `allow_dark_mode` | boolean | `false` | Whether the user is allowed to switch the app between light and dark themes. When disabled the app is locked to the light theme. |
| `text_color` | string | – | CSS colour for text on the event panel view. Falls back to `#FFFFFF` when not set. |
| `background_color` | string | – | CSS colour for the background of the event panel view. Falls back to `#483285` when not set. |
| `background_image` | string | – | URL of the background image to render on the event panel view. |

Logos can be set as a plain URL string, or as an object:

```json
{
    "app": {
        "logo_light": { "src": "https://example.com/logo-light.svg" },
        "logo_dark": "https://example.com/logo-dark.svg"
    }
}
```

Example panel styling:

```json
{
    "app": {
        "text_color": "#FFFFFF",
        "background_color": "#004466",
        "background_image": "https://example.com/panel-background.jpg"
    }
}
```

## Booking Behaviour

| Setting | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| `user_as_default_host` | boolean | – | Whether the signed-in user's email should be used as the host for "Book Now" bookings when no host is set. |

## Performance & Reliability

| Setting | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| `prevent_space_init` | boolean | `true` | Whether to prevent the spaces service from loading the full list of bookable spaces on startup. Leave enabled for panels — a panel only cares about its own room, so loading every space slows startup unnecessarily. |
| `refresh_when_websocket_unstable` | boolean | – | Whether to reload the page when the websocket connection to the PlaceOS backend is repeatedly dropping. Useful for unattended panels that need to recover on their own. |

## Notes

- A dash (–) in the Default column means the setting has no build-time default; the behaviour described applies only once you set a value (except where a fallback is noted).
- Root-level settings such as `debug`, `composer` and `service_worker` are fixed at build time and are not configurable through Zone metadata.
