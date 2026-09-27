# Timetable App Settings

The Timetable app is a PlaceOS display that shows the bookings for a set of spaces on a daily timetable grid.

## Space selection

Select the spaces with query parameters in the URL hash. You can use one or both parameters.

| Parameter | Description |
|-----------|-------------|
| `sys_ids` | Comma-separated list of system IDs or space email addresses. The app shows the spaces in this order. The app shows a "Space not found" column for each ID that does not match a space. |
| `zone_ids` | Comma-separated list of zone IDs, such as level IDs. The app shows all bookable spaces in these zones, sorted by name, after the `sys_ids` spaces. |

Example:

```text
https://example.com/timetable/#/?zone_ids=zone-level-2&sys_ids=sys-boardroom
```

The app shows booking titles, except when one of these conditions is true:

- The booking is private.
- The `hide_meeting_title` setting of the space's `Bookings` module is `true`.

In these conditions, the app shows "Booked".

## Display behaviour

- Each space header shows if the space is free or busy now, and the time that this status changes today.
- The grid scrolls the current time into view when the app starts. It does this again every 5 minutes. After user input, the app waits for 2 minutes before it scrolls.
- The top bar shows an "Offline since" badge when the connection to PlaceOS is lost.

## E-ink panels

E-ink panels can take many seconds to redraw. Use e-ink mode on these panels. In e-ink mode, the app does these things:

- It updates the clock, the current-time line and the space status one time each minute.
- It scrolls the grid without animation.
- It stops all CSS animations and transitions.

To use e-ink mode on all displays in a zone, set `eink_mode` to `true`. To use e-ink mode on one display, add `eink=true` to the URL. The URL parameter overrides the setting, so `eink=false` turns off e-ink mode on one display.

```text
https://example.com/timetable/#/?sys_ids=sys-boardroom&eink=true
```

Set settings in Backoffice zone metadata under `timetable_app` for the standard `/timetable/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"timetable"` | Name of the application. Used in page titles when no short name is set. |
| `title` | string | `"Timetable Application"` | Display title for the application. |
| `description` | string | `"PlaceOS Timetable UI written with Angular Framework"` | Description of the application. |
| `short_name` | string | `"TIMETABLE"` | Short name for the application. Used in page titles and API request headers. |
| `use_24_hour_time` | boolean | `false` | Whether to show times in 24-hour format. |
| `eink_mode` | boolean | `false` | Whether to limit screen updates for e-ink panels. See [E-ink panels](#e-ink-panels). |

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
| `block_start` | number | `0` | First hour of the day (0–23) displayed on the timetable grid. |
| `block_end` | number | `24` | Last hour of the day (1–24) displayed on the timetable grid. The app always shows at least one hour. |

Example — show the grid from 8 AM to 6 PM:

```json
{
    "block_start": 8,
    "block_end": 18
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
