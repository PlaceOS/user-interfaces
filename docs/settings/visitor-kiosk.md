# Visitor Kiosk App Settings

The Visitor Kiosk is a self-service check-in application for building visitors. It lets guests check in to a meeting, register themselves as walk-up visitors, take a photo, accept an induction, print a visitor badge, and view a building map.

Set settings in Backoffice zone metadata under `visitor-kiosk_app` for the standard `/visitor-kiosk/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## General & Branding

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `Visitor-Kiosk` | Application name sent with PlaceOS API requests. If you do not set it, the app uses `short_name`. |
| `short_name` | string | `KIOSK` | Prefix for console log messages. The app also uses it as the API application name when `name` is not set. |
| `default_route` | string | – | Route the app redirects to after it initialises. Defaults to `welcome` when unset. The Concierge form keeps this value but does not show a field for it. |
| `inactivity_timeout_secs` | number | – | Number of **seconds** with no touch, click or key press before the kiosk returns to the welcome page. This stops the camera and removes visitor details from the screen. The welcome and setup pages stay open. Set to `0` to turn off the reset. Defaults to `120` when unset. The explore page uses the same setting to reset the map, but its fallback is `180` seconds. `0` also turns off the map reset. |
| `use_24_hour_time` | boolean | – | Show times with a 24-hour clock on the check-in result page and the explore booking form. When not set, the app uses a 12-hour clock. |
| `logo_light` | string | `assets/logo-light.svg` | URL of the logo shown when the app is using a light theme. |
| `logo_dark` | string | `assets/logo-dark.svg` | URL of the logo shown when the app is using a dark theme. |

The app does not set the browser page title from settings.

## Welcome Page

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `welcome_background` | string | `assets/img/skyline.webp` | URL of the background image shown on the welcome, check-in and registration pages. |
| `welcome_message` | string | – | HTML message displayed on the welcome page. When unset, a translated default message is shown. |
| `hide_building_image` | boolean | `false` | Hide the building image panel on the welcome, check-in and registration pages. |
| `hide_explore` | boolean | – | Hide the explore (building map) button on the welcome page. |
| `chat.enabled` | boolean | – | Show the chat widget. The widget does not show when you do not set a value. |

## Banners

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `environment_bar` | string | – | CSS colour for thin identifier bars at the top and bottom of the app, for example `"#f59e0b"`. Leave unset to hide the bars. |
| `banner` | object | – | Message banner at the top of the app. The user can close it. See below. |

The `banner` object:

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Unique ID for the message. After a user closes a banner, it stays hidden until the `id` changes. |
| `type` | `"info"`, `"warn"` or `"error"` | Colour style for the banner. Defaults to `"info"`. |
| `content` | string | Message text to show. |

## Check-in & Registration

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `allow_self_registration` | boolean | `true` | Allow walk-up visitors to register themselves. Shows the register button on the welcome page. |
| `allow_registration_time_options` | boolean | `false` | Show time options (all-day checkbox and visit duration field) on the self-registration form. |
| `allow_pass_number` | boolean | – | Show a visitor pass number field on the registration and check-in details forms. |
| `allow_user_photo` | boolean | `true` | Ask visitors to take a photo during check-in when badge printing is enabled. |
| `allow_beverages` | boolean | – | Let visitors select beverage (catering) preferences after checking in. Only applies to visitors with a linked event, or when `standalone_visitor_location` is set. |
| `checked_in_template` | string | – | HTML template displayed after a successful check-in. Supports the placeholders `{{ title }}`, `{{ room_name }}`, `{{ host_name }}`, `{{ host_email }}`, `{{ visitor_name }}`, `{{ visitor_email }}`, `{{ can_use_lift }}`, `{{ date }}` and `{{ time }}`. |
| `standalone_visitor_location` | string | – | Location associated with standalone visitors (visitors without a linked calendar event). When set, standalone visitors are also offered beverage preferences after check-in. |

Example check-in confirmation template:

```json
{
    "checked_in_template": "<h2>Welcome {{ visitor_name }}!</h2><p>{{ host_name }} has been notified. Your meeting is in {{ room_name }} at {{ time }}.</p>"
}
```

## Visitor Badge Printing

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `allow_printing_label` | boolean | – | Allow printing a visitor badge label after check-in. Defaults to `true` when unset. |
| `visitor_label_size.width` | number | – | Label width in `em`, relative to the font size set by `visitor_label_size.scale`. Defaults to `25`. |
| `visitor_label_size.height` | number | – | Label height in `em`, relative to the font size set by `visitor_label_size.scale`. Defaults to `15`. |
| `visitor_label_size.scale` | number | – | Label font size in millimetres. Defaults to `4`. A larger value also increases the label width and height. |

Example:

```json
{
    "allow_printing_label": true,
    "visitor_label_size": { "width": 62, "height": 29, "scale": 4 }
}
```

## Induction

Show an induction (site rules / safety) acceptance step during check-in and registration.

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `induction_enabled` | boolean | – | Show an induction acceptance step in the check-in and registration flows. Requires `induction_details` to also be set. |
| `induction_details` | string | – | Induction text displayed to visitors for acceptance. The induction step is hidden when this is unset. |
| `induction_after_details` | boolean | – | Show the induction step after the visitor details form instead of before it. |

## Visitor Booking Options

These control the time options on the self-registration form. Values under `visitors` override the matching values under `bookings`. The `bookings` keys are legacy aliases. Use the `visitors` keys for new settings. The Concierge form writes only the `visitors` keys.

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `visitors.allow_all_day` | boolean | – | Whether the all-day option is available on the self-registration form. Overrides `bookings.allow_all_day`. |
| `visitors.max_duration` | number | – | Maximum visit duration in minutes selectable on the self-registration form. Overrides `bookings.max_duration`. Defaults to `180`. |
| `bookings.allow_all_day` | boolean | – | Fallback for `visitors.allow_all_day`. |
| `bookings.max_duration` | number | – | Fallback for `visitors.max_duration`. Defaults to `180`. |

Example:

```json
{
    "visitors": { "allow_all_day": true, "max_duration": 240 }
}
```

## Explore (Building Map)

Settings for the map shown on the explore page (reached via the explore button on the welcome page). The explore page uses the Map Kiosk map view, so these keys work the same as in [Map Kiosk](map-kiosk.md).

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `explore.colors` | object | See example below | Mapping of status keys to colour values. Keys are usually in the format `<type>-<status>`. |
| `explore.search_enabled` | boolean | – | Show the search bar on the explore page. The search bar does not show when you do not set a value. |
| `explore.show_legend` | boolean | – | Show the legend on the explore page. The legend shows unless the value is `false`. |
| `explore.show_booking_qr` | boolean | – | When a visitor selects a room to book, show a QR code to book on a personal device instead of the booking form. |
| `explore.disable` | string[] | – | Map layers to turn off. This turns off the features, actions, labels and styles of each layer. Layer names include `devices`, `desks`, `lockers`, `parking`, `spaces`, `spaces-presence` and `zones`. A comma-separated string is also accepted. |
| `explore.disable_features` | string[] | – | Map layers whose features are turned off. |
| `explore.disable_actions` | string[] | – | Map layers whose click actions are turned off. |
| `explore.disable_labels` | string[] | – | Map layers whose labels are turned off. |
| `explore.disable_styles` | string[] | – | Map layers whose styles are turned off. |
| `explore.hide_device_fields` | string[] | – | Fields to hide in device tooltips: `mac`, `manufacturer`, `os`, `ssid`, `username` and `user`. |
| `explore.use_zone_polygons` | boolean | – | Draw zone areas with their polygon data. |
| `explore.show_zone_labels` | boolean | – | Show labels for zone areas. |
| `explore.show_zone_sensor_info` | boolean | – | Show sensor values in zone area labels. |
| `explore.area_count_key` | string | – | Key of the zone area value to use as the people count. The map uses `count` when you do not set a value. |
| `use_imperial_units` | boolean | – | Show zone sensor temperatures in Fahrenheit. |
| `desks.enable_maps` | boolean | – | Let people book desks from the map. Desk booking is on unless the value is `false`. |
| `desks.show_users` | boolean | – | Show the name of the person at a desk in the desk tooltip. Names show unless the value is `false`. |

Default map colours:

```json
{
    "explore": {
        "colors": {
            "space-available": "#43a047",
            "space-requestable": "#ffb300",
            "space-unavailable": "#e53935",
            "space-not-bookable": "#ccc",
            "desk-available": "#43a047",
            "desk-available-stroke": "#1b5e20",
            "desk-unavailable": "#e53935",
            "desk-unavailable-stroke": "#b71c1c",
            "desk-reserved": "#ffb300",
            "desk-reserved-stroke": "#ff6f00",
            "desk-not-bookable": "#fff",
            "desk-not-bookable-stroke": "#ccc",
            "zone-low": "#43a047",
            "zone-medium": "#ffb300",
            "zone-high": "#e53935"
        }
    }
}
```

Example:

```json
{
    "explore": {
        "search_enabled": true,
        "disable": ["devices"],
        "hide_device_fields": ["mac", "ssid"]
    }
}
```

## Languages

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `locales` | array | See example below | List of locales available in the language selector on the welcome page. The selector is hidden when fewer than two locales are set. Each entry requires an `id` (locale code) and `name` (translation key), with optional `local` (native name) and `flag` (flag emoji). |

The build default includes English (AU/US), French (FR/CA), Spanish, Portuguese, Italian, Chinese, Japanese and Arabic. Example of a reduced list:

```json
{
    "locales": [
        { "id": "en-AU", "name": "LANGUAGE.ENGLISH", "local": "English", "flag": "🇦🇺" },
        { "id": "fr", "name": "LANGUAGE.FRENCH", "local": "Français", "flag": "🇫🇷" }
    ]
}
```
