# Survey App Settings

The Survey app displays PlaceOS surveys and collects responses. People open a link to a specific survey (e.g. `/survey/#/<survey-id>`), answer the questions page by page, and submit their responses. The display language can be forced with a `?lang=` query parameter, otherwise it is picked automatically from the visitor's browser languages using the configured locale list.

Settings for the app are configured in Backoffice as Zone metadata under the `app` metadata key. Values you set there are merged over the app's build-time defaults, so you only need to define the settings you want to change. This app only loads settings from the organisation zone — region and building level settings metadata is not loaded.

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Survey"` | Name of the application. Used as the suffix on browser page titles. |
| `title` | string | `"PlaceOS"` | Base browser page title for the application. |
| `description` | string | `"Survey UI"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name of the application. Used as the app name for PlaceOS API metadata. |
| `general` | object | `{}` | General settings associated with the app. |
| `prevent_space_init` | boolean | `true` | Prevents the shared spaces service from loading every bookable space at startup. The Survey app has no space features, so leave this on. |
| `allow_dark_mode` | boolean | `true` | Whether the app is allowed to use the dark theme. When off, the app always renders with the light theme. |

## Localisation

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `locales` | array | – | List of languages the app supports. On first visit the app matches the visitor's browser languages against this list to pick the display language automatically. Visitors can also force a language with the `?lang=` query parameter. |

Each locale entry:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Locale code, e.g. `"en-US"` or `"fr"`. Matched against the browser's language list. |
| `name` | string | Translation key for the language name. |
| `local` | string | Name of the language in that language, e.g. `"Français"`. |
| `flag` | string | Flag emoji for the language. |

```json
{
    "app": {
        "locales": [
            { "id": "en-AU", "name": "LANGUAGE.ENGLISH", "local": "English", "flag": "🇦🇺" },
            { "id": "fr", "name": "LANGUAGE.FRENCH", "local": "Français", "flag": "🇫🇷" }
        ]
    }
}
```

## Branding

The logo is shown in the header above the survey. `logo_light` is used with the light theme and `logo_dark` when the dark theme is active. Each accepts either an image URL string or an icon object with a `src` URL.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `logo_light` | string or icon object | `"assets/logo-light.svg"` | Logo shown with the light theme. |
| `logo_dark` | string or icon object | `"assets/logo-dark.svg"` | Logo shown when the dark theme is active. |

```json
{
    "app": {
        "logo_light": "https://example.com/assets/company-logo.svg",
        "logo_dark": { "type": "img", "src": "https://example.com/assets/company-logo-white.svg" }
    }
}
```

## Banners

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `environment_bar` | string | – | CSS colour for thin identifier bars fixed to the top and bottom of the page — useful for making staging or test environments obvious (e.g. `"#f59e0b"`). |
| `banner` | object | – | A dismissible message banner shown at the top of the app. See below. |

The `banner` object:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique ID for the message. Once a user dismisses a banner, it stays hidden until a banner with a different `id` is published. |
| `type` | `"info"`, `"warn"` or `"error"` | Colour styling for the banner. Defaults to `"info"`. |
| `content` | string | The message text to display. |

```json
{
    "app": {
        "banner": {
            "id": "outage-notice",
            "type": "info",
            "content": "Survey responses may be delayed while we perform maintenance."
        }
    }
}
```
