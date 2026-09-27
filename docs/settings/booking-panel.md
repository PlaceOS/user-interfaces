# Booking Panel App Settings

The Booking Panel is the room booking panel application, typically mounted on a tablet outside a meeting room. It shows the room's current status and upcoming events, and lets people book the room on the spot.

Set settings in Backoffice zone metadata under `booking-panel_app` for the standard `/booking-panel/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

For example, the key `logo_light` means:

```json
{
    "logo_light": "https://example.com/logo.svg"
}
```

## Application Identity

| Setting       | Type   | Default         | Description                                                                                           |
| ------------- | ------ | --------------- | ----------------------------------------------------------------------------------------------------- |
| `name`        | string | `"Bookings"`    | Name of the application. Used for the page title and as a fallback application name for API requests. |
| `title`       | string | `"PlaceOS"`     | Title for the application.                                                                            |
| `description` | string | `"Bookings UI"` | Description of the application.                                                                       |
| `short_name`  | string | `"PlaceOS"`     | Short name for the application. Used as the application name for API requests.                        |
| `general`     | object | `{}`            | General settings associated with the app.                                                             |

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

| Feature             | Description                                                                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkin_countdown` | Shows the time until the panel releases a pending booking. Uses the `pending_period` system setting.                                                                                    |
| `connection_badge`  | Shows a "Reconnecting" badge and the time of the last update when the panel is offline for more than 10 seconds.                                                                        |
| `quick_book`        | Shows 15, 30 and 60 minute buttons that book the room immediately. The buttons show only when they fit before the next booking, and only when the booking form does not ask for a host. |
| `extend_meeting`    | Shows a "+15 min" button during a meeting when the room is free after it. The panel updates the booking with the staff API.                                                             |
| `ending_warning`    | Shows the start time of the next meeting when the current meeting ends in 5 minutes or less.                                                                                            |
| `presence_status`   | Shows "People detected" on a free room when the system `presence` setting is `true`.                                                                                                    |
| `presence_release`  | Releases a pending booking when the system `presence` setting is `false` for `presence_release_after` minutes after the start.                                                          |
| `timeline_booking`  | Opens the booking form at the tapped time on the schedule timeline.                                                                                                                     |
| `room_services`     | Shows buttons for room control (when `control_ui` is set), catering (when `catering_ui` is set) and to call a waiter.                                                                   |
| `hide_version`      | Hides the version details. Press the bottom-right corner for 2 seconds to show them.                                                                                                    |

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

## Notes

- A dash (–) in the Default column means the setting has no build-time default; the behaviour described applies only once you set a value (except where a fallback is noted).
- Root-level settings such as `debug`, `composer` and `service_worker` are fixed at build time and are not configurable through Zone metadata.
