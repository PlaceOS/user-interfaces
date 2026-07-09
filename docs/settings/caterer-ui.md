# Caterer UI App Settings

The Caterer UI app is the interface used by external caterers to view and manage catering orders for a building.

Settings for this app are configured in Backoffice as Zone metadata under the `app` metadata key. Any values you set there are merged over the app's build-time defaults, so you only need to add the settings you want to change. Settings can be applied at the organisation or building Zone level — building-level values override organisation-level ones.

## Branding

These settings control how the app presents itself in the browser and in the app header.

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `"Catering"` | Name of the application. Used in the browser page title when no short name is set. |
| `title` | string | `"PlaceOS"` | Title metadata for the application. |
| `description` | string | `"Caterers UI"` | Description metadata for the application. |
| `short_name` | string | `"PlaceOS"` | Short name for the application. Used in browser page titles and as the app identifier. |
| `logo` | object (Icon) | Built-in light logo | Logo shown when the app is using the light theme. See [Icon objects](#icon-objects). |
| `logo_dark` | object (Icon) | Built-in dark logo | Logo shown when the app is using the dark theme. See [Icon objects](#icon-objects). |

Example — using your own logos:

```json
{
    "name": "Acme Catering",
    "short_name": "Acme",
    "logo": {
        "type": "img",
        "src": "https://example.com/assets/acme-logo-light.svg"
    },
    "logo_dark": {
        "type": "img",
        "src": "https://example.com/assets/acme-logo-dark.svg"
    }
}
```

## Behaviour

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `general` | object | `{}` | General settings associated with the app. |
| `use_region` | boolean | – | When enabled, the level filter lists levels for the whole active region instead of only the active building, showing the parent building name under each level. Useful when a caterer services multiple buildings. |

## Chat

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `chat.enabled` | boolean | – | Whether to show the global chat widget in the app. |

Example:

```json
{
    "chat": {
        "enabled": true
    }
}
```

## Icon objects

The `logo` and `logo_dark` settings take an icon object with the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | string | Yes | Type of icon to render. Either `"img"` (an image from a URL) or `"icon"` (an icon font glyph). |
| `src` | string | For `img` | URL of the image to display. |
| `class` | string | No | CSS class to apply to the icon container element. |
| `content` | string | No | Content to add to the icon container element (e.g. the icon font glyph name). |
| `background` | string | No | Background colour for the icon. |
