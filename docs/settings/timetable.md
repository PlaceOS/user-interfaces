# Timetable App Settings

The Timetable app is a PlaceOS interface for viewing and booking spaces and desks against a daily timetable grid. Administrators configure it in Backoffice by adding settings to Zone metadata under the `app` metadata key. Any values you set there are merged over the application's build-time defaults, so you only need to define the settings you want to change.

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"timetable"` | Name of the application. Used in page titles when no short name is set. |
| `title` | string | `"Timetable Application"` | Display title for the application. |
| `description` | string | `"PlaceOS Timetable UI written with Angular Framework"` | Description of the application. |
| `short_name` | string | `"TIMETABLE"` | Short name for the application. Used in page titles and API request headers. |
| `features` | string[] | `["spaces", "desks", "explore", "help", "schedule"]` | List of feature flags enabled for the application. Remove an entry to hide that feature. |
| `can_deliver` | boolean | `true` | Whether delivery options are available. |
| `hide_contacts` | boolean | `false` | Whether to hide contact details in the app. |

## Branding

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `logo_light` | string or icon object | `"assets/logo-light.svg"` | Logo displayed in the top bar when the light theme is active. Either an image URL string or an icon object with a `src`. |
| `logo_dark` | string or icon object | `"assets/logo-dark.svg"` | Logo displayed in the top bar when the dark theme is active. Either an image URL string or an icon object with a `src`. |

Logos can be set as a simple URL string:

```json
{
    "logo_light": "https://example.com/my-logo.svg"
}
```

Or as an icon object for more control:

```json
{
    "logo_light": {
        "type": "img",
        "src": "https://example.com/my-logo.svg",
        "class": "my-logo-class",
        "content": ""
    }
}
```

Icon object fields:

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Type of icon to render. Either `"img"` or `"icon"`. Required. |
| `src` | string | URL of the image to display. |
| `class` | string | CSS class to apply to the icon container element. |
| `content` | string | Content to add to the icon container element. |

## Timetable Grid

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `block_start` | number | – | First hour of the day (0–24) displayed on the timetable grid. Defaults to `0` (midnight) when not set. |
| `block_end` | number | – | Last hour of the day (0–24) displayed on the timetable grid. Defaults to `24` when not set. |

Example — show the grid from 8 AM to 6 PM:

```json
{
    "block_start": 8,
    "block_end": 18
}
```

## Desk Booking

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `desks.can_book_for_others` | boolean | `true` | Whether users are allowed to make desk bookings on behalf of other users. |
| `desks.allow_groups` | boolean | `true` | Whether users are allowed to make group desk bookings. |

Example:

```json
{
    "desks": {
        "can_book_for_others": false,
        "allow_groups": true
    }
}
```

## Analytics

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `analytics.enabled` | boolean | `true` | Whether Google Analytics tracking is enabled. |
| `analytics.tracking_id` | string | `""` | Google Analytics tracking ID. Analytics is only initialised when this is set. |

Example:

```json
{
    "analytics": {
        "enabled": true,
        "tracking_id": "G-XXXXXXXXXX"
    }
}
```
