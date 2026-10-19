# Stagehand App Settings

Stagehand is an AV systems monitoring and management application for facility managers and AV technicians. It provides alert monitoring dashboards, room analytics, camera snapshots, recorder stream views, and remote support tools for rooms with AV equipment.

Set settings in Backoffice zone metadata under `stagehand_app` for the standard `/stagehand/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## Application

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Stagehand"` | Application name for the PlaceOS API client. If the URL pathname is empty, the app also uses this name to make the settings metadata key. |
| `short_name` | string | `"PlaceOS"` | Prefix for console log messages. The app also uses it as the API client application name if `name` is not set. |
| `allow_dark_mode` | boolean | – | Make the dark theme control available in the sidebar. When off or not set, the app uses the light theme. |
| `chat.enabled` | boolean | – | Show the chat widget. When not set, the widget does not show. |

## Access & Support Groups

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `access_subsystem` | string | `"support"` | Group subsystem that grants access to the app, when the authority's `use_group_subsystem_access` is on. |

Stagehand works in one support group at a time: a group whose subsystems include `support`. The sidebar shows the selected group, and opens a list of the user's groups to switch to. The selection is saved in the browser.

The group decides what the app shows. The MQTT alert subscriptions, the remote support system list, the system search and the region and building lists only include the zones the group was granted, with their descendants, and leave out any zone the group was denied. A zone without a hierarchy tag (`region`, `building`, `level` or `area`) cannot be used as an MQTT topic filter, so the alerts list only follows hierarchy zones.

System admins and support users can also pick "All groups", which shows the whole organisation. Other users who are in no support group are sent to the unauthorised page.

## Alerts & Push Notifications

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `push_notification_defaults.critical` | boolean | `true` | Whether push notifications for critical alerts are enabled by default. |
| `push_notification_defaults.high` | boolean | `false` | Whether push notifications for high severity alerts are enabled by default. |
| `push_notification_defaults.medium` | boolean | `false` | Whether push notifications for medium severity alerts are enabled by default. |
| `push_notification_defaults.low` | boolean | `false` | Whether push notifications for low severity alerts are enabled by default. |

These values only set the starting point for new users. Each user's saved notification preferences take priority over these defaults.

```json
{
    "push_notification_defaults": {
        "critical": true,
        "high": true,
        "medium": false,
        "low": false
    }
}
```

## Rooms & Monitoring

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `snapshot_interval` | number | – | Time in milliseconds between refreshes of camera snapshot images. Defaults to `10000` (10 seconds) when not set. |
| `show_recorder_view` | boolean | – | Whether to show the recorder streams link in the sidebar. |
| `educational_environment` | boolean | – | Whether the app is used in an educational environment. When set, room events are labelled as classes, e.g. `Current Class` instead of `Current Event`. |
| `backoffice_link` | string | – | Base URL of the PlaceOS Backoffice, used for links to view systems and triggers. Defaults to `/backoffice/` on the current origin. |
| `service_link` | string | – | Base URL of the room control UI, used for links to control a room. Defaults to `/control/` on the current origin. |

## Analytics

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `analytics_pages` | array | – | List of analytics dashboards selectable on the analytics page, each embedded in an iframe. The analytics link is only shown in the sidebar when this list is not empty. Each entry needs a `name` (display name) and a `url` (dashboard URL to embed). |

```json
{
    "analytics_pages": [
        { "name": "Room Utilisation", "url": "https://analytics.example.com/rooms" },
        { "name": "Device Health", "url": "https://analytics.example.com/devices" }
    ]
}
```
