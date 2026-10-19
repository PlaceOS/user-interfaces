# Signage Manager Settings

The **Signage Manager** app is the administration UI for digital signage. It's where staff create and organise media, build playlists, and assign content to signage displays.

Set settings in Backoffice zone metadata under `signage-manager_app` for the standard `/signage-manager/` URL. Use the organisation zone. The app sets `dont_load_metadata`, so it does not load region or building metadata. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## Branding

These settings control the application name and the logos in the navigation sidebar.

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `"Signage Manager"` | Application name for the PlaceOS API client. If the URL pathname is empty, the app also uses this name to make the settings metadata key. |
| `short_name` | string | `"Signage Manager"` | Prefix for console log messages. The app also uses it as the API client application name if `name` is not set. |
| `logo_light` | string or object | `"assets/logo-light.svg"` | Logo shown in the navigation sidebar when using the light theme. Either a URL string or an object with a `src` URL. |
| `logo_dark` | string or object | `"assets/logo-dark.svg"` | Logo shown in the navigation sidebar when using the dark theme. Either a URL string or an object with a `src` URL. Needs `allow_dark_mode`. |
| `allow_dark_mode` | boolean | – | Allow the dark theme. When on, the app uses the theme saved in the user's settings. When off or not set, the app uses the light theme. |

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
| `show_group_selector` | boolean | `false` | Show the signage group selector in the navigation sidebar and mobile navigation menu. If the value is not set at any level, the selector shows. When this is off, users can still change the group with the breadcrumbs in each section header. |
| `show_media_group_tabs` | boolean | `false` | Show the signage group tabs above the media list. If the value is not set at any level, the tabs show. When this is off, users can still change the group with the breadcrumbs in the media header. |
| `media_allow_extended_video_codecs` | boolean | `false` | Whether media upload validation accepts extended video codecs — AV1 (`av01`/`V_AV1`) and HEVC (`hev1`/`hvc1`) — in MP4 and WebM files, in addition to the default allowed codec set. Only enable this if your signage display hardware can decode these codecs. |
| `signage_path` | string | – | Base URL path of the signage viewer application, used to build display preview links. When not set, `/signage` is used. |
| `schedule_timezone_once_only` | boolean | `true` | Show the timezone selector above the timing fields for schedules that play once at an exact time, and inside the validity block for other schedules. Set to `false` to show it above the timing fields for both schedule types. |
| `features` | string[] | all features | Signage features available to every group: `templates` (template management section), `template-editing`, `ai-generation`, `ai-editing` and `branding-editing`. A signage group can narrow this list for its users under `features.signage.features`. It cannot add features that are not in this list or that its parent group turns off. `branding-editing` applies to the organisation brand kit, so only this setting controls it. Replaces `templates_enabled`. |

## Other

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `access_subsystem` | string | `"signage"` | Group subsystem that grants access to the app, when the authority's `use_group_subsystem_access` is on. If not set, the app uses the name from the URL path. |

## Example

Example `signage-manager_app` metadata details for the organisation zone:

```json
{
    "short_name": "Acme Signage",
    "logo_light": "https://example.com/logos/acme-light.svg",
    "logo_dark": "https://example.com/logos/acme-dark.svg",
    "show_group_selector": true,
    "media_allow_extended_video_codecs": true,
    "signage_path": "/signage"
}
```
