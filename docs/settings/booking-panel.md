# Booking Panel App Settings

The Booking Panel is the room booking panel application, typically mounted on a tablet outside a meeting room. It shows the room's current status and upcoming events, and lets people book the room on the spot.

Set settings in Backoffice zone metadata under `booking-panel_app` for the standard `/booking-panel/` URL. Use the organisation zone. The panel sets `dont_load_metadata` to `true`, so it does not read region or building metadata. The organisation `settings` metadata also applies. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

For example, the key `logo_light` means:

```json
{
    "logo_light": "https://example.com/logo.svg"
}
```

## Application Identity

| Setting      | Type   | Default      | Description                                                                                               |
| ------------ | ------ | ------------ | --------------------------------------------------------------------------------------------------------- |
| `name`       | string | `"Bookings"` | Application name sent with PlaceOS API requests. If you do not set it, the app uses `short_name`.         |
| `short_name` | string | `"PlaceOS"`  | Prefix for console log messages. The app also uses it as the API application name when `name` is not set. |

The app does not set the browser page title from settings.

## Branding & Appearance

| Setting            | Type             | Default                   | Description                                                                                                                       |
| ------------------ | ---------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `logo_light`       | string or object | `"assets/logo-light.svg"` | Logo displayed on the event panel when the light theme is active. Either an image URL string or an object with a `src` image URL. |
| `logo_dark`        | string or object | `"assets/logo-dark.svg"`  | Logo displayed on the event panel when the dark theme is active. Either an image URL string or an object with a `src` image URL.  |
| `allow_dark_mode`  | boolean          | `false`                   | Whether the user is allowed to switch the app between light and dark themes. When disabled the app is locked to the light theme.  |
| `text_color`       | string           | –                         | CSS colour for text on the event panel view. Falls back to `#FFFFFF` when not set.                                                |
| `background_color` | string           | –                         | CSS colour for the background of the event panel view. Falls back to `#483285` when not set.                                      |
| `background_image` | string           | –                         | URL of the background image to render on the event panel view.                                                                    |

Logos can be set as a plain URL string, or as an object:

```json
{
    "logo_light": { "src": "https://example.com/logo-light.svg" },
    "logo_dark": "https://example.com/logo-dark.svg"
}
```

Example panel styling:

```json
{
    "text_color": "#FFFFFF",
    "background_color": "#004466",
    "background_image": "https://example.com/panel-background.jpg"
}
```

## Banners & Chat

| Setting           | Type    | Default | Description                                                                                                                    |
| ----------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `environment_bar` | string  | –       | CSS colour for thin identifier bars at the top and bottom of the panel, for example `"#f59e0b"`. Leave unset to hide the bars. |
| `banner`          | object  | –       | Message banner at the top of the panel. The user can close it. See below.                                                      |
| `chat.enabled`    | boolean | –       | Whether to show the global chat widget. The chat widget does not show when you do not set a value.                             |

The `banner` object:

| Field     | Type                            | Description                                                                                      |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| `id`      | string                          | Unique ID for the message. After a user closes a banner, it stays hidden until the `id` changes. |
| `type`    | `"info"`, `"warn"` or `"error"` | Colour style for the banner. Defaults to `"info"`.                                               |
| `content` | string                          | Message text to show.                                                                            |

## Booking Behaviour

| Setting                | Type    | Default | Description                                                                                                |
| ---------------------- | ------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `user_as_default_host` | boolean | –       | Whether the signed-in user's email should be used as the host for "Book Now" bookings when no host is set. |

## Optional Features

The `features` setting is a list of opt-in panel features. All features are off by default.

| Setting                  | Type     | Default | Description                                                                                                                                                   |
| ------------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `features`               | string[] | –       | List of features to enable. See the values below.                                                                                                             |
| `presence_release_after` | number   | –       | Minutes after the start of a pending booking with no presence detected before `presence_release` releases it. The panel uses `5` when you do not set a value. |
| `night_start`            | string   | –       | Local time in `HH:mm` format when `night_mode` starts to dim the panel. The panel uses `19:00` when you do not set a value.                                   |
| `night_end`              | string   | –       | Local time in `HH:mm` format when `night_mode` stops dimming the panel. The panel uses `07:00` when you do not set a value.                                   |

| Feature              | Description                                                                                                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `checkin_countdown`  | Shows the time until the panel releases a pending booking. Uses the `pending_period` system setting.                                                                                                                           |
| `connection_badge`   | Shows a "Reconnecting" badge and the time of the last update when the panel is offline for more than 10 seconds.                                                                                                               |
| `quick_book`         | Shows 15, 30 and 60 minute buttons that book the room immediately. The buttons show only when they fit before the next booking, and only when the booking form does not ask for a host.                                        |
| `extend_meeting`     | Shows a "+15 min" button during a meeting when the room is free after it. The panel updates the booking with the staff API.                                                                                                    |
| `ending_warning`     | Shows the start time of the next meeting when the current meeting ends in 5 minutes or less.                                                                                                                                   |
| `presence_status`    | Shows "People detected" on a free room when the system `presence` setting is `true`.                                                                                                                                           |
| `presence_release`   | Releases a pending booking when the system `presence` setting is `false` for `presence_release_after` minutes after the start.                                                                                                 |
| `timeline_booking`   | Opens the booking form at the tapped time on the schedule timeline.                                                                                                                                                            |
| `room_services`      | Shows buttons for room control (when `control_ui` is set), catering (when `catering_ui` is set) and to call a waiter.                                                                                                          |
| `hide_version`       | Hides the version details. Press the bottom-right corner for 2 seconds to show them.                                                                                                                                           |
| `night_mode`         | Dims the panel between `night_start` and `night_end` when no meeting is busy or pending. The first tap on a dimmed panel wakes it for 2 minutes and does not start a booking. The panel cannot turn off the display backlight. |
| `burn_in_protection` | Moves the panel content by up to 2 pixels every minute to prevent screen burn-in.                                                                                                                                              |

```json
{
    "features": ["checkin_countdown", "quick_book", "ending_warning"]
}
```

## Performance & Reliability

| Setting                           | Type    | Default | Description                                                                                                                                                                                                           |
| --------------------------------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prevent_space_init`              | boolean | `true`  | Whether to prevent the spaces service from loading the full list of bookable spaces on startup. Leave enabled for panels — a panel only cares about its own room, so loading every space slows startup unnecessarily. |
| `refresh_when_websocket_unstable` | boolean | –       | Whether to reload the page when the websocket connection to the PlaceOS backend is repeatedly dropping. Useful for unattended panels that need to recover on their own.                                               |

## System Settings

The panel also reads values from the `Bookings` module of the room's System. Set these values in the System, zone or driver settings in Backoffice, not in `booking-panel_app` metadata. The Concierge booking panel settings form writes the first group of keys to the settings of the zone.

| Setting                     | Type    | Concierge form value | Description                                                                                                                                                         |
| --------------------------- | ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `control_ui`                | string  | `""`                 | URL of the room control UI. The `room_services` feature shows a button for it.                                                                                      |
| `catering_ui`               | string  | `""`                 | URL of the catering UI. The `room_services` feature shows a button for it.                                                                                          |
| `custom_qr_url`             | string  | `""`                 | URL for the QR code. When not set, the QR code opens the check-in view of this panel.                                                                               |
| `custom_qr_color`           | string  | `""`                 | CSS colour for the QR code. When you do not set a value, the panel view uses `#fff` and the event panel uses `#000`.                                                |
| `show_qr_code`              | boolean | `true`               | Whether to show the QR code. The panel shows it unless the value is `false`.                                                                                        |
| `hide_qr_text`              | boolean | `false`              | Whether to hide the text below the QR code.                                                                                                                         |
| `disable_book_now`          | boolean | `false`              | Whether to stop bookings on the panel.                                                                                                                              |
| `disable_book_now_host`     | boolean | –                    | Whether to hide the host field on the booking form. When not set, the panel view hides the host field. Set to `false` to ask for a host.                            |
| `disable_end_meeting`       | boolean | `false`              | Whether to stop the panel from releasing pending bookings that nobody checks in to.                                                                                 |
| `enable_end_meeting_button` | boolean | `false`              | Whether to show a button that ends the current booking early.                                                                                                       |
| `hide_meeting_details`      | boolean | `false`              | Whether to hide the meeting details.                                                                                                                                |
| `hide_meeting_title`        | boolean | `false`              | Whether to hide the meeting title.                                                                                                                                  |
| `min_duration`              | number  | `15`                 | Minimum booking duration in minutes. The panel uses `15` when you do not set a value.                                                                               |
| `max_duration`              | number  | `480`                | Maximum booking duration in minutes. The panel uses `480` when you do not set a value.                                                                              |
| `pending_before`            | number  | `5`                  | Minutes before the start when people can check in. The `Bookings` driver uses this value. The panel does not read it directly.                                      |
| `pending_period`            | number  | `15`                 | Minutes after the start before the panel releases a pending booking. The `Bookings` driver also uses this value. When not set, the panel does not release bookings. |
| `room_image`                | string  | `""`                 | URL of the room image.                                                                                                                                              |
| `offline_image`             | string  | `""`                 | URL of the image to show when the room cannot be booked.                                                                                                            |

The panel also reads these keys. The Concierge form does not write them:

| Setting              | Type    | Description                                                                                                                                                         |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `room_name`          | string  | Room name to show on the panel.                                                                                                                                     |
| `status`             | string  | Room status from the driver: `free`, `pending`, `busy` or `not-bookable`.                                                                                           |
| `pending`            | boolean | Whether bookings have a pending state. The `Bookings` driver uses this value.                                                                                       |
| `default_title`      | string  | Title for bookings made with the quick-book buttons. The panel uses `Ad-Hoc Panel Booking` when you do not set a value. The booking form does not use this setting. |
| `offline_color`      | string  | Background colour when the room cannot be booked. The panel uses `#FFFFFF` when you do not set a value.                                                             |
| `disable_qr_booking` | boolean | Whether to stop bookings from the QR check-in view.                                                                                                                 |
| `show_timeline`      | boolean | Whether to show the schedule timeline.                                                                                                                              |
| `timeline_position`  | string  | Position of the schedule timeline: `left`, `right`, `bottom`, `floating-left` or `floating-bottom`.                                                                 |
| `presence`           | boolean | Whether sensors detect people in the room.                                                                                                                          |
| `room_capacity`      | number  | Capacity of the room.                                                                                                                                               |

## Notes

- A dash (–) in the Default column means the setting has no build-time default; the behaviour described applies only once you set a value (except where a fallback is noted).
- Root-level settings such as `debug`, `composer` and `service_worker` are fixed at build time and are not configurable through Zone metadata.
