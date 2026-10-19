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

## Pages

Each space column is a minimum of 20rem wide. When more spaces are selected than fit on the screen, the app divides the spaces into pages. The app shows the next page after `page_interval` seconds. Dots in the top bar show the current page. Tap a dot to show that page. After user input on the grid, the app waits for `page_interval` seconds before it shows the next page.

Set `page_interval` to `0` to show all spaces on one page. The grid then scrolls horizontally.

## Screen protection

Displays that show the same image for a long time can get burn-in.

- When `night_mode` is `true`, the app covers the grid with a black screen outside the hours from `block_start` to `block_end`. The screen shows a small clock that moves every 10 minutes. With the default hours (0 to 24), night mode has no effect.
- When `burn_in_protection` is `true`, the app moves the full UI by up to 2 pixels every 10 minutes.

E-ink panels do not get burn-in. In e-ink mode, the app does not move the UI, and the night clock stays in the center.

## E-ink panels

E-ink panels can take many seconds to redraw. Use e-ink mode on these panels. In e-ink mode, the app does these things:

- It updates the clock, the current-time line and the space status one time each minute.
- It scrolls the grid without animation.
- It stops all CSS animations and transitions.
- It shows the next page of spaces a minimum of 60 seconds after the last page change, at the same time as the clock update.

To use e-ink mode on all displays in a zone, set `eink_mode` to `true`. To use e-ink mode on one display, add `eink=true` to the URL. The URL parameter overrides the setting, so `eink=false` turns off e-ink mode on one display.

```text
https://example.com/timetable/#/?sys_ids=sys-boardroom&eink=true
```

Set settings in Backoffice zone metadata under `timetable_app` for the standard `/timetable/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"timetable"` | Application name for the PlaceOS API client. If the URL pathname is empty, the app also uses this name to make the settings metadata key. |
| `short_name` | string | `"TIMETABLE"` | Prefix for console log messages. The app also uses it as the API client application name if `name` is not set. |
| `use_24_hour_time` | boolean | `false` | Whether to show times in 24-hour format. |
| `eink_mode` | boolean | `false` | Whether to limit screen updates for e-ink panels. See [E-ink panels](#e-ink-panels). |
| `page_interval` | number | `20` | Seconds between pages when more spaces are selected than fit on the screen. Set to `0` to scroll instead. See [Pages](#pages). |
| `night_mode` | boolean | `false` | Whether to cover the grid with a dark screen and a small clock outside the displayed hours. See [Screen protection](#screen-protection). |
| `burn_in_protection` | boolean | `false` | Whether to move the UI by a few pixels every 10 minutes. See [Screen protection](#screen-protection). |

## Branding

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `logo_light` | string or object | `"assets/logo-light.svg"` | Logo displayed in the top bar when the light theme is active. Either an image URL string or an object with a `src` URL. |
| `logo_dark` | string or object | `"assets/logo-dark.svg"` | Logo displayed in the top bar when the dark theme is active. Either an image URL string or an object with a `src` URL. Needs `allow_dark_mode`. |
| `allow_dark_mode` | boolean | – | Allow the dark theme. When on, the app uses the theme saved in the user's settings. When off or not set, the app uses the light theme. |

Logos can be a plain URL string, or an object with a `src` URL:

```json
{
    "logo_light": { "src": "https://example.com/my-logo.svg" }
}
```

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
