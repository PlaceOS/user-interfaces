# Signage Settings

The **Signage** app is the digital signage display player. It runs full-screen on a display device and plays back the playlists of images and videos assigned to that display.

Set settings in Backoffice zone metadata under `signage_app` for the standard `/signage/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## Application name

These settings control the name that the app gives to the PlaceOS API and uses in console logs.

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `"Signage"` | Application name for the PlaceOS API client. If the URL pathname is empty, the app also uses this name to make the settings metadata key. |
| `short_name` | string | `"PlaceOS"` | Prefix for console log messages. The app also uses it as the API client application name if `name` is not set. |

## Playback

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `default_animation_time` | number | `1000` | Duration in milliseconds of the media player's transition animation between playlist items. If the value is `0` or not set, the player uses `3000`. |
| `templates_enabled` | boolean | `true` | Make template selection available during signage bootstrap. |

## Example

Example `signage_app` metadata details for the active building zone:

```json
{
    "name": "Lobby Signage",
    "short_name": "Lobby Signage",
    "default_animation_time": 500
}
```
