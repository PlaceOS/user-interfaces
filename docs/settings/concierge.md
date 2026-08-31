# Concierge App Settings

Concierge is the front-of-house management application for PlaceOS. It gives reception and facilities staff a single place to manage room bookings, desks, parking, lockers, visitors, assets and reports for a building or region. Settings are configured in Backoffice under the `app` metadata key on a Zone (typically the building or organisation zone). Any values you set there are merged over the app's build-time defaults, so you only need to define the settings you want to change.

## General & Branding

| Setting | Type | Default | Description |
|---|---|---|---|
| `name` | string | `"Concierge"` | Name of the application. |
| `title` | string | `"PlaceOS"` | Title shown in the browser tab. |
| `description` | string | `"Concierge UI"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name for the application. |
| `logo_light` | string / object | `"assets/logo-light.svg"` | Logo shown when using the light theme. Also used in generated PDF reports. Either a URL string or an object with a `src` URL. |
| `logo_dark` | string / object | `"assets/logo-dark.svg"` | Logo shown when using the dark theme. Also used in generated PDF reports. Either a URL string or an object with a `src` URL. |
| `default_route` | string | `"/book/rooms"` | Route used for the sidebar bookings link when no matching feature is enabled, e.g. `/book/rooms`. |
| `currency` | string | `"USD"` | Default currency code for pricing, e.g. on catering orders. |
| `use_24_hour_time` | boolean | `false` | Display times using a 24 hour clock. |
| `week_start` | number | – | Day of the week that calendars and week views start on: `0` for Sunday through `6` for Saturday. Defaults to `0`. |
| `use_region` | boolean | – | Scope data to the active region instead of the active building. Affects desks, parking, lockers, visitors, signage, reports and other listings. |
| `hide_sidebar` | boolean | – | Hide the application sidebar. Currently applied on the signage management view. |

```json
{
    "logo_light": { "src": "https://example.com/logo-light.svg" },
    "logo_dark": "https://example.com/logo-dark.svg"
}
```

## Localisation

| Setting | Type | Default | Description |
|---|---|---|---|
| `locales` | array | English (AU/US), French (FR/CA), Spanish, Portuguese, Italian, Chinese, Japanese, Arabic | List of languages users can select in the application. |

Each locale entry requires an `id` and `name`:

```json
{
    "locales": [
        { "id": "en-AU", "name": "LANGUAGE.ENGLISH", "local": "English", "flag": "🇦🇺" },
        { "id": "fr", "name": "LANGUAGE.FRENCH", "local": "Français", "flag": "🇫🇷" }
    ]
}
```

- `id` — locale code, e.g. `en-AU`, `fr`, `zh`
- `name` — translation key or display name for the locale
- `local` — name of the locale in its own language
- `flag` — flag emoji to show alongside the name

## Features & Access

| Setting | Type | Default | Description |
|---|---|---|---|
| `features` | string[] | All features enabled (see below) | List of features enabled in the app. Available values: `spaces`, `zones`, `desks`, `parking`, `visitors`, `assets`, `facilities`, `internal-users`, `points`, `surveys`, `catering`, `events`, `booking-report`, `attendance-report`, `contact-tracing-report`, `signage`, `email-templates`. |
| `feature_groups` | object | – | Maps feature names to the user groups allowed to access them, e.g. `parking-requests`. Features without an entry are available to all users. |
| `admin_group` | string | `"concierge_admins"` | Name of the user group that grants access to admin sections of the app. Members of `placeos_admin` and `placeos_support` are always allowed. |
| `delegated` | boolean | `false` | Set when your PlaceOS instance uses delegated calendar access. Hides event actions from the event details view. |
| `has_uploads` | boolean | `true` | Whether file upload support (S3/cloud storage) is available in the app. |

```json
{
    "features": ["spaces", "desks", "visitors", "events"],
    "feature_groups": {
        "parking-requests": ["parking_managers", "concierge_admins"]
    }
}
```

## Guests

| Setting | Type | Default | Description |
|---|---|---|---|
| `guests.vaccine_check` | boolean | `true` | Enable vaccination checks for guests. |
| `induction_enabled` | boolean | – | Enable the visitor induction flow. Requires `induction_details` to be set. |
| `induction_details` | string | – | Text content of the visitor induction agreement shown in the induction modal. |

## Bookings (General)

These act as fallbacks for the desk, parking and locker booking flows — a value set here applies wherever the more specific section doesn't override it.

| Setting | Type | Default | Description |
|---|---|---|---|
| `bookings.can_book_for_others` | boolean | `true` | Allow users to create bookings on behalf of other users. |
| `bookings.use_building_timezone` | boolean | `false` | Handle booking dates and times in the active building's timezone instead of the local timezone. Affects desks, lockers, visitors and email broadcasts. |
| `bookings.bookable_hours` | object | – | Time window during which bookings are allowed, as hours of the day (0-24). |
| `bookings.min_duration` | number | – | Minimum booking duration in minutes. Defaults to `30`. |
| `bookings.max_duration` | number | – | Maximum booking duration in minutes. Defaults to `480` (8 hours). |
| `bookings.custom_duration_options` | number[] | – | Custom list of selectable booking durations, in minutes. |
| `bookings.available_period` | number | – | Number of days into the future that bookings can be made. Defaults to `7`. |
| `bookings.allow_all_day` | boolean | – | Allow all day bookings. Defaults to `true`. |
| `bookings.all_day_default` | boolean | – | Pre-select the all day option for new bookings. |

```json
{
    "bookings": {
        "bookable_hours": { "start": 8, "end": 19 },
        "custom_duration_options": [30, 60, 120, 240]
    }
}
```

`bookable_hours` uses hours of the day from 0 to 24 — for example, `8` is 8:00 AM and `19` is 7:00 PM.

## Desks

| Setting | Type | Default | Description |
|---|---|---|---|
| `desks.use_assets` | boolean | `false` | Read and manage desk resources through the assets API. When `false`, Concierge uses the legacy `desks` zone metadata. |
| `desks.can_book_for_others` | boolean | `true` | Allow concierge users to create desk bookings on behalf of other users. |
| `desks.max_assigned_count` | number | `0` | Maximum number of desks that can be assigned to a single user. `0` for unlimited. |
| `desks.hide_user_list_download` | boolean | `true` | Hide the desk booking user list download action on the desks view. |
| `desks.default_duration` | number | – | Default duration in minutes for new desk bookings. Defaults to `60`. |
| `desks.all_day_default` | boolean | – | Pre-select the all day option for new desk bookings. Falls back to `bookings.all_day_default`. |
| `desks.allow_deleting` | boolean | – | Allow desk bookings to be deleted from the desk bookings list. Defaults to `false`. |

## Meeting Rooms & Events

Settings for meeting room bookings and the day view.

| Setting | Type | Default | Description |
|---|---|---|---|
| `events.allow_setup_breakdown` | boolean | `false` | Allow setup and breakdown times to be viewed and set on room bookings. |
| `events.use_building_timezone` | boolean | `false` | Handle event dates and times in the active building's timezone instead of the local timezone. |
| `events.day_timeline_view` | string | `"inverted"` | Layout of the day timeline. `default` shows rooms on the vertical axis, `inverted` shows rooms on the horizontal axis. |
| `events.block_start` | number | `7` | Earliest hour of the day (0-24) shown on the day timeline. |
| `events.block_end` | number | `19` | Latest hour of the day (0-24) shown on the day timeline. |
| `events.block_height` | number | `5` | Display height of each hour block on the day timeline. |
| `events.custom_actions` | array | Set Setup/Breakdown action | Additional custom actions shown in the action menu of room bookings. |
| `events.allow_edit` | boolean | – | Allow room bookings to be edited from the day view and booking lists. |
| `events.allow_deleting` | boolean | – | Allow room bookings to be deleted from the room bookings list. Defaults to `false`. |
| `events.booking_unavailable` | boolean | – | Mark the event calendar as unavailable. Hides event actions on room bookings. |
| `events.hide_attendees` | boolean | – | Hide the attendees field in the event booking form. |
| `events.hide_notes` | boolean | – | Hide the notes field in the event booking form. |
| `events.has_assets` | boolean | – | Allow assets to be requested as part of event bookings. |
| `events.allow_externals` | boolean | – | Allow external attendees to be added to event bookings. |
| `events.allow_multiday` | boolean | – | Allow events to span multiple days. |
| `events.strict_capacity_check` | boolean | – | Strictly limit attendee counts to the capacity of the selected space. |
| `events.max_duration` | number | – | Maximum event duration in minutes. Defaults to `480` (8 hours). |
| `events.available_period` | number | – | Number of days into the future that events can be booked. Leave unset for no limit. |
| `events.bookable_hours` | object | – | Time window during which events are allowed, as hours of the day (0-24). |
| `events.all_day_default` | boolean | – | Pre-select the all day option for new event bookings. |

```json
{
    "events": {
        "custom_actions": [
            {
                "id": "set_setup_breakdown",
                "name": "Set Setup/Breakdown",
                "icon": "manage_history"
            }
        ]
    }
}
```

Each custom action requires an `id` (passed to the action handler when selected) and a `name` (shown in the menu). `icon` is an optional Material Symbols icon name.

## Parking

| Setting | Type | Default | Description |
|---|---|---|---|
| `parking.show_waitlist` | boolean | `false` | Show waitlisted parking bookings in parking lists. |
| `parking.show_requests` | boolean | – | Show parking requests in the parking section. Access can be restricted via the `parking-requests` feature group. |
| `parking.disable_bookings` | boolean | – | Disable creating new parking reservations. |
| `parking.disable_styles` | boolean | `false` | Disable status styling of parking spaces on the parking map. |
| `parking.hide_bay_number` | boolean | `false` | Hide parking bay numbers in parking booking lists. |
| `parking.hide_level_selector_on_booking_list` | boolean | `false` | Hide the level selector when viewing the parking booking list. |
| `parking.hide_users` | boolean | `false` | Hide the users tab on the parking view. |
| `parking.hide_vehicles` | boolean | `false` | Hide the vehicles tab on the parking view. |
| `parking.hide_users_and_vehicles` | boolean | `false` | Hide both the users and vehicles tabs on the parking view. |
| `parking.hide_availability_counter` | boolean | `false` | Hide the parking space availability counter in the parking topbar. |
| `parking.hide_assign_space` | boolean | `false` | Hide the assign space action on parking bookings and requests. |
| `parking.allow_editing` | boolean | – | Allow parking bookings to be edited from parking lists. Defaults to `true`. |
| `parking.allow_deleting` | boolean | `false` | Allow parking bookings to be deleted from parking lists. |
| `parking.allow_all_day` | boolean | – | Allow all day parking bookings. |
| `parking.assign_space_on_approve` | boolean | `false` | Automatically assign a parking space when approving a parking booking. |
| `parking.max_assigned_count` | number | `0` | Maximum number of parking spaces that can be assigned to a single user. `0` for unlimited. |
| `parking.custom_booking_columns` | array | `[]` | Additional columns to display in the parking bookings list, sourced from booking extension data. |
| `parking.use_building_timezone` | boolean | – | Handle parking dates and times in the active building's timezone. Falls back to `bookings.use_building_timezone`. |
| `parking.bookable_hours` | object | – | Time window during which parking bookings are allowed, as hours of the day (0-24). |
| `parking.min_duration` | number | – | Minimum parking booking duration in minutes. Falls back to `bookings.min_duration`. |
| `parking.max_duration` | number | – | Maximum parking booking duration in minutes. Falls back to `bookings.max_duration`. |
| `parking.custom_duration_options` | number[] | – | Custom list of selectable parking booking durations, in minutes. Falls back to `bookings.custom_duration_options`. |
| `parking.available_period` | number | – | Number of days into the future that parking can be booked. Falls back to `bookings.available_period`. |

```json
{
    "parking": {
        "custom_booking_columns": [
            { "field": "license_plate", "name": "Plate", "size": "8rem" }
        ]
    }
}
```

Each custom column requires a `field` (the booking extension data field to display). `name` or `display_name` sets the column header, and `size` sets the CSS width of the column.

## Lockers

| Setting | Type | Default | Description |
|---|---|---|---|
| `lockers.disabled_date_select` | boolean | – | Disable the date field in the locker booking form. |
| `lockers.disabled_start_time` | boolean | – | Disable the start time field in the locker booking form. |
| `lockers.hide_end_time` | boolean | – | Hide the end time field in the locker booking form. |
| `lockers.allow_all_day` | boolean | – | Allow all day locker bookings. Falls back to `bookings.allow_all_day`. Defaults to `true`. |
| `lockers.bookable_hours` | object | – | Time window during which locker bookings are allowed, as hours of the day (0-24). |
| `lockers.min_duration` | number | – | Minimum locker booking duration in minutes. Falls back to `bookings.min_duration`. Defaults to `30`. |
| `lockers.max_duration` | number | – | Maximum locker booking duration in minutes. Falls back to `bookings.max_duration`. Defaults to `480` (8 hours). |
| `lockers.custom_duration_options` | number[] | – | Custom list of selectable locker booking durations, in minutes. Falls back to `bookings.custom_duration_options`. |
| `lockers.available_period` | number | – | Number of days into the future that lockers can be booked. Falls back to `bookings.available_period`. Defaults to `7`. |

## Visitors

| Setting | Type | Default | Description |
|---|---|---|---|
| `visitors.all_visitors_action_window` | number | `15` | Time window in minutes before an event starts and after it ends during which bulk actions are available for all visitors of the event. |
| `visitors.hide_fields` | string[] | – | List of field names to hide in the visitor listing. |
| `visitors.allow_international` | boolean | – | Enable international visitor details in visitor listings and reports. |
| `visitors.has_parking` | boolean | – | Allow parking to be arranged for visitors. Requires the `parking` feature to be enabled. |
| `visitors.allow_printing_label` | boolean | – | Allow visitor labels to be printed from the visitor listing. Defaults to `true`. |
| `visitors.allow_pass_number` | boolean | – | Allow pass numbers to be set for visitors. Defaults to `true`. |

## Reports

| Setting | Type | Default | Description |
|---|---|---|---|
| `reports.features` | string[] | – | List of report types shown in the reports menu. Defaults to `attendance`, `desks`, `spaces`, `catering` and `contact-tracing`. |
| `reports.attendance_include_weekends` | boolean | `false` | Include weekends in attendance report calculations. |
| `reports.ignore_days` | array | – | Days of the week to exclude from report calculations. Either day names (e.g. `"saturday"`) or day indexes (0-6). |
| `custom_reports` | array | `[]` | Custom report pages to add to the reports section. Each report is rendered as an embedded page. |

```json
{
    "reports": { "ignore_days": ["saturday", "sunday"] },
    "custom_reports": [
        {
            "id": "occupancy-dashboard",
            "name": "Occupancy Dashboard",
            "url": "https://example.com/dashboards/occupancy"
        }
    ]
}
```

Each custom report requires an `id` (unique, URL-safe), a `name` (shown in the reports menu) and a `url` (the page to embed).

## Catering

| Setting | Type | Default | Description |
|---|---|---|---|
| `catering.use_bookings` | boolean | `true` | Source catering orders from the bookings API instead of calendar events. Affects catering reports. |

## Group Events

| Setting | Type | Default | Description |
|---|---|---|---|
| `group_events_calendar` | string | – | ID of the calendar used for storing group events. |

## Integration & Advanced

Settings for linking Concierge to the other PlaceOS applications and metadata sources. Most deployments can leave these at their defaults.

| Setting | Type | Default | Description |
|---|---|---|---|
| `workplace_metadata_key` | string | – | Name of the zone metadata key storing workplace app settings. Defaults to `workplace_app`. |
| `concierge_metadata_key` | string | – | Name of the zone metadata key storing concierge app settings. Defaults to `concierge_app`. |
| `visitor_kiosk_metadata_key` | string | – | Name of the zone metadata key storing visitor kiosk app settings. Defaults to `visitor-kiosk_app`. |
| `visitor_kiosk_app` | string | – | Name of the zone metadata key read for visitor kiosk configuration (induction and visitor listing). Defaults to `visitor-kiosk_app`. |
| `concierge_app` | string | – | Name of the zone metadata key written to by the induction settings modal. Defaults to `concierge_app`. |
| `workplace_url_path` | string | – | URL path of the Workplace app, used when generating desk QR code links. Defaults to `/workplace`. |
| `kiosk_url_path` | string | – | URL path of the Map Kiosk app, used when generating point of interest and short URL links. Defaults to `/map-kiosk`. |
| `signage_path` | string | – | URL path of the Signage app, used when generating signage display URLs. Defaults to `/signage`. |
| `control_path` | string | – | URL path of the room control app, used for links from the room manager listing. |
| `short_url_public_key` | string | – | Public key used when generating short URLs for points of interest. |
