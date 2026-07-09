# Signage Manager Settings

The **Signage Manager** app is the administration UI for digital signage. It's where staff create and organise media, build playlists, and assign content to signage displays.

Settings are configured in Backoffice as Zone metadata under the `app` metadata key. Anything you set there is merged over the app's build-time defaults, so you only need to define the settings you want to change. Settings cascade through the zone hierarchy (organisation, building, level), with more specific zones overriding broader ones.

## Branding

These settings control how the app identifies itself in the browser and what logos it shows in the navigation sidebar.

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `"Signage Manager"` | Name of the application. Used as the browser tab title when no short name is set. |
| `title` | string | `"PlaceOS"` | Title for the application. |
| `description` | string | `"Signage Manager UI"` | Description of the application. |
| `short_name` | string | `"Signage Manager"` | Short name for the application. Used as the browser tab title prefix and as the application name passed to the PlaceOS API client. |
| `logo_light` | string or object | `"assets/logo-light.svg"` | Logo shown in the navigation sidebar when using the light theme. Either a URL string or an object with a `src` URL. |
| `logo_dark` | string or object | `"assets/logo-dark.svg"` | Logo shown in the navigation sidebar when using the dark theme. Either a URL string or an object with a `src` URL. |

Logos can be a plain URL string, or an object form:

```json
{
    "logo_light": { "src": "https://example.com/logos/company-light.svg" }
}
```

## Localisation

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `show_locale_selector` | boolean | `false` | Whether to show the locale (language) selector in the navigation sidebar. The selector is only rendered when more than one locale is configured. |
| `locales` | array | – | List of locales available in the navigation sidebar locale selector. Each entry has an `id` (locale code, e.g. `en`), a `name` (display name, supports translation keys) and an optional `local` (the locale's name in its own language, shown alongside the translated name). |

Example locale list:

```json
{
    "show_locale_selector": true,
    "locales": [
        { "id": "en", "name": "English", "local": "English" },
        { "id": "fr", "name": "French", "local": "Français" },
        { "id": "ja", "name": "Japanese", "local": "日本語" }
    ]
}
```

## Media & Displays

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `media_allow_extended_video_codecs` | boolean | `false` | Whether media upload validation accepts extended video codecs — AV1 (`av01`/`V_AV1`) and HEVC (`hev1`/`hvc1`) — in MP4 and WebM files, in addition to the default allowed codec set. Only enable this if your signage display hardware can decode these codecs. |
| `signage_path` | string | – | Base URL path of the signage viewer application, used to build display preview links. When not set, `/signage` is used. |

## Other

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `default_animation_time` | number | `1000` | Default duration for UI animations in milliseconds. |
| `diagnostics` | boolean | `true` | Whether diagnostics are enabled for the application. |

## Example

A typical `app` metadata configuration for an organisation zone:

```json
{
    "short_name": "Acme Signage",
    "logo_light": "https://example.com/logos/acme-light.svg",
    "logo_dark": "https://example.com/logos/acme-dark.svg",
    "media_allow_extended_video_codecs": true,
    "signage_path": "/signage"
}
```
