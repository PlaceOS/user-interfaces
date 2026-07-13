# Assistant Panel App Settings

The Assistant Panel is a hands-free, voice-driven AI assistant for shared spaces. It listens for speech, sends what it hears to the PlaceOS AI chat service, and speaks the response back — useful as a wall-mounted or desk-mounted helper panel in meeting rooms and common areas.

Settings for the app are configured in Backoffice as Zone metadata under the `app` metadata key. Values you set there are merged over the app's build-time defaults, so you only need to define the settings you want to change. Settings can be applied at the organisation, building or level zone depending on how broadly you want them to take effect.

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Assistant"` | Name of the application. Appended to browser page titles and used as the fallback location for bookings. |
| `title` | string | `"PlaceOS"` | Base browser page title for the application. |
| `description` | string | `"Assistant UI"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name for the application. Used as the app name for PlaceOS API metadata and page titles. |
| `general` | object | `{}` | General settings associated with the app. |
| `prevent_space_init` | boolean | `true` | Whether to prevent loading the full list of bookable spaces on application startup. Leave this on unless the panel needs the full space list, as loading it can be slow in large organisations. |

## Branding

Both logo settings accept an icon object — see the example below.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `logo` | icon object | `{ "type": "img", "src": "assets/logo-light.svg" }` | Application logo to display on light backgrounds. |
| `logo_dark` | icon object | `{ "type": "img", "src": "assets/logo-dark.svg" }` | Application logo to display on dark backgrounds. |

An icon object has a required `type` of either `"img"` (an image URL) or `"icon"` (an icon font glyph):

| Field | Type | Description |
|-------|------|-------------|
| `type` | `"img"` or `"icon"` | Type of icon to render. |
| `src` | string | URL of the image to display (when `type` is `"img"`). |
| `class` | string | CSS class to apply to the icon container element. |
| `content` | string | Content to add to the icon container element (when `type` is `"icon"`). |

Example — use your own hosted logo:

```json
{
    "app": {
        "logo": {
            "type": "img",
            "src": "https://example.com/assets/company-logo.svg"
        },
        "logo_dark": {
            "type": "img",
            "src": "https://example.com/assets/company-logo-white.svg"
        }
    }
}
```

## AI Assistant Chat

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `chat.enabled` | boolean | – | Whether to show the global AI assistant chat widget. Defaults to `false`. |

Example:

```json
{
    "app": {
        "chat": {
            "enabled": true
        }
    }
}
```
