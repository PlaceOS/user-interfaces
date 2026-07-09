# Stagehand App Settings

Stagehand is an AV systems monitoring and management application for facility managers and AV technicians. It provides alert monitoring dashboards, room analytics, camera snapshots, recorder stream views, and remote support tools for rooms with AV equipment.

Settings are configured in PlaceOS Backoffice as Zone metadata under the `app` metadata key. Anything you set there is merged over the app's build-time defaults, so you only need to define the settings you want to change. Settings can be applied at the organisation (root) zone for everyone, or on building zones for location-specific behaviour.

## Branding & Identity

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Stagehand"` | Name of the application. Used in the browser tab title and as the name of the auth client. |
| `title` | string | `"PlaceOS"` | Title for the application. |
| `description` | string | `"Stagehand UI"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name for the application. |
| `logo_light` | string | `"assets/logo-light.svg"` | URL of the logo image to display when using the light theme, e.g. on the login page. |
| `logo_dark` | string | `"assets/logo-dark.svg"` | URL of the logo image to display when using the dark theme, e.g. on the login page. |
| `general` | object | `{}` | General settings associated with the app. |

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

## Booking Behaviour

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `desks.hide_reason` | boolean | `true` | Whether to disable the ability for a user to set a reason on the desk booking confirmation. |
| `desks.can_set_host` | boolean | `true` | Whether a user is allowed to make desk bookings for others. |
| `events.can_book_for_others` | boolean | `true` | Whether a user is allowed to set another user as the host when booking a space from the explore map. |
| `explore.search_enabled` | boolean | `true` | Whether searching is available on the explore map view. |
| `show_qr_for_booking` | boolean | `true` | Whether to show a QR code for bookings. |
