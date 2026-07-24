# Visitor Kiosk App Settings

The Visitor Kiosk is a self-service check-in application for building visitors. It lets guests check in to a meeting, register themselves as walk-up visitors, take a photo, accept an induction, print a visitor badge, and view a building map.

Settings are configured in Backoffice as Zone metadata under the `app` metadata key. Values you set on a Zone are merged over the application's build-time defaults, so you only need to set the keys you want to change. Settings can be applied at the organisation or building level — the closest (most specific) Zone wins.

## General & Branding

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `Visitor-Kiosk` | Name of the application. |
| `title` | string | `Visitor Kiosk` | Title shown in the browser tab. |
| `description` | string | `Kiosk UI written with Angular Framework` | Description of the application. |
| `short_name` | string | `KIOSK` | Short name for the application. |
| `default_route` | string | – | Route the app redirects to after it initialises. Defaults to `welcome` when unset. |
| `logo_light` | string | `assets/logo-light.svg` | URL of the logo shown when the app is using a light theme. |
| `logo_dark` | string | `assets/logo-dark.svg` | URL of the logo shown when the app is using a dark theme. |

## Welcome Page

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `welcome_background` | string | `assets/img/skyline.png` | URL of the background image shown on the welcome, check-in and registration pages. |
| `welcome_message` | string | – | HTML message displayed on the welcome page. When unset, a translated default message is shown. |
| `hide_building_image` | boolean | `false` | Hide the building image panel on the welcome, check-in and registration pages. |
| `hide_explore` | boolean | – | Hide the explore (building map) button on the welcome page. |

## Check-in & Registration

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `allow_self_registration` | boolean | `true` | Allow walk-up visitors to register themselves. Shows the register button on the welcome page. |
| `allow_registration_time_options` | boolean | `false` | Show time options (all-day checkbox and visit duration field) on the self-registration form. |
| `allow_pass_number` | boolean | – | Show a visitor pass number field on the registration and check-in details forms. |
| `allow_user_photo` | boolean | `true` | Ask visitors to take a photo of themselves during check-in. |
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
| `visitor_label_size.width` | number | – | Width of the printed label in millimetres. Defaults to `25`. |
| `visitor_label_size.height` | number | – | Height of the printed label in millimetres. Defaults to `15`. |
| `visitor_label_size.scale` | number | – | Render scale for the printed label. Defaults to `4`. |

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

These control the time options on the self-registration form. Values under `visitors` override the matching values under `bookings`.

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

Settings for the map shown on the explore page (reached via the explore button on the welcome page).

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `explore.colors` | object | See example below | Mapping of status keys to colour values. Keys are usually in the format `<type>-<status>`. |
| `explore.can_select_building` | boolean | `false` | Allow the user to select different buildings to view. |
| `explore.show_legend_group_names` | boolean | `true` | Show group names in the map legend. |
| `explore.legend` | object | `{}` | Mapping of group names to the legend items (`{ "id", "name" }`) to display for that group. |

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

Example legend:

```json
{
    "explore": {
        "show_legend_group_names": true,
        "legend": {
            "Rooms": [
                { "id": "space-available", "name": "Available" },
                { "id": "space-unavailable", "name": "In Use" }
            ]
        }
    }
}
```

## Home Page

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `home` | object | `{}` | Data associated with rendering the home page in the app. |

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
