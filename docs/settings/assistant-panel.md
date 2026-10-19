# Assistant Panel App Settings

The Assistant Panel is a hands-free, voice-driven AI assistant for shared spaces. It listens for speech, sends what it hears to the PlaceOS AI chat service, and speaks the response back — useful as a wall-mounted or desk-mounted helper panel in meeting rooms and common areas.

Set settings in Backoffice zone metadata under `assistant-panel_app` for the standard `/assistant-panel/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Assistant"` | Application name sent with PlaceOS API requests. If you do not set it, the app uses `short_name`. |
| `short_name` | string | `"PlaceOS"` | Prefix for console log messages. The app also uses it as the API application name when `name` is not set. |

The app does not set the browser page title from settings.

## Banners

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `environment_bar` | string | – | CSS colour for thin identifier bars at the top and bottom of the panel, for example `"#f59e0b"`. Leave unset to hide the bars. |
| `banner` | object | – | Message banner at the top of the panel. The user can close it. See below. |

The `banner` object:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique ID for the message. After a user closes a banner, it stays hidden until the `id` changes. |
| `type` | `"info"`, `"warn"` or `"error"` | Colour style for the banner. Defaults to `"info"`. |
| `content` | string | Message text to show. |

## AI Assistant Chat

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `chat.enabled` | boolean | – | Whether to show the global AI assistant chat widget. Defaults to `false`. |

Example:

```json
{
    "chat": {
        "enabled": true
    }
}
```
