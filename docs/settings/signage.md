# Signage Settings

The **Signage** app is the digital signage display player. It runs full-screen on a display device and plays back the playlists of images and videos assigned to that display.

Set settings in Backoffice zone metadata under `signage_app` for the standard `/signage/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## Branding

These settings control how the app identifies itself in the browser and what logos it uses.

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `"Signage"` | Name of the application. Used as the suffix of the browser page title and as a fallback application name for API storage keys. |
| `title` | string | `"PlaceOS"` | Title of the application. |
| `description` | string | `"Signage Panel"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name for the application. Used as the app name for local storage keys and as a fallback for the browser page title. |
| `logo_light` | string | `"assets/logo-light.svg"` | Path or URL of the logo image to display on light backgrounds, e.g. the login screen. |
| `logo_dark` | string | `"assets/logo-dark.svg"` | Path or URL of the logo image to display on dark backgrounds, e.g. the login screen. |

## Playback

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `default_animation_time` | number | `1000` | Duration in milliseconds of the media player's transition animation between playlist items. |
| `templates_enabled` | boolean | `true` | Make template selection available during signage bootstrap. |

## Other

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `diagnostics` | boolean | `true` | Whether diagnostics are enabled. Currently unused by the signage app. |
| `offline_boot` | boolean | `true` | Build-time setting. Allow a previously authenticated display to start with cached organisation data and credentials when the PlaceOS backend cannot be reached. API requests are still authorised by the backend after the connection returns. |

## Example

Example `signage_app` metadata details for the active building zone:

```json
{
    "name": "Lobby Signage",
    "short_name": "Lobby Signage",
    "logo_light": "https://example.com/logos/company-light.svg",
    "logo_dark": "https://example.com/logos/company-dark.svg",
    "default_animation_time": 500
}
```
