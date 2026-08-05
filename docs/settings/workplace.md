# Workplace App Settings

Workplace is the primary staff-facing application for booking meeting rooms, desks, parking, lockers and visitors, and for exploring building maps. Settings are configured in Backoffice under the `app` metadata key on a Zone (typically the org or building zone). Anything you set there is merged over the app's build-time defaults, so you only need to define the settings you want to change. Settings on more specific zones (e.g. a building) override the same settings on broader zones (e.g. the org).

All keys below are relative to the `app` metadata object unless noted otherwise. For example, `events.default_duration` means `{ "events": { "default_duration": ... } }`.

## Common Settings

These options live at the root of the settings file (alongside `app`, not inside it) and are shared by all PlaceOS apps.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `debug` | boolean | `true` | Write extra debugging messages to the browser console. |
| `mock` | boolean | `false` | Run the app against mock data instead of the live API. Mainly for development and demos. |
| `composer` | object | – | Connection details for the PlaceOS API (domain, route, protocol). Managed by developers at build time — leave as is. |
| `service_worker.auto_reload` | boolean | `false` | Automatically reload the app as soon as a new version is available. |
| `service_worker.interval` | number | – | Time between checks for new app versions, in milliseconds (minimum 1 minute). |

## General & Branding

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Workplace"` | Name of the application, used in the browser page title. |
| `title` | string | `"Workplace Application"` | Display title for the application. |
| `description` | string | `"PlaceOS Workplace UI..."` | Description of the application. |
| `short_name` | string | `"WorkMate"` | Short name for the application. |
| `logo_light` | string \| object | `"assets/logo-light.svg"` | Logo shown in the top bar when using the light theme. Either an image URL or an icon object with a `src` property. |
| `logo_dark` | string \| object | `"assets/logo-dark.svg"` | Logo shown in the top bar when using the dark theme. Either an image URL or an icon object with a `src` property. |
| `environment_bar` | string | – | CSS colour for thin environment identifier bars shown at the top and bottom of the app (useful for marking test/UAT environments). Leave unset to hide the bars. |
| `sentry_dsn` | string | – | Connection string for Sentry error reporting. |
| `show_changelog` | boolean | `true` | Whether the version number in the user controls links to the changelog modal. |
| `allow_dark_mode` | boolean | `true` | Allow users to switch the application to the dark theme. |
| `default_route` | string | `"/landing"` | Route users are redirected to when they enter the application. |
| `currency` | string | `"USD"` | Currency code used when displaying prices. |
| `use_24_hour_time` | boolean | `false` | Display times using a 24-hour clock. |
| `use_geolocation` | boolean | `false` | Use the device's location to select the closest building when the app loads. |
| `new_features` | boolean | `true` | Show hints in the UI when new features are added. |
| `week_start` | number | – | First day of the week for schedule and calendar views. `0` is Sunday through `6` for Saturday. |
| `idle_timeout` | number | `5` | Minutes of inactivity on the meeting form before the user is prompted to discard their changes. |
| `global_search` | boolean | `true` | Show the global search bar in the top bar. |
| `features` | string[] | see below | List of feature flags controlling which sections of the app are available. |
| `locales` | object[] | 10 languages | Languages available in the language selector. |
| `menu_embeds` | object[] | – | Additional menu items that open third-party URLs embedded inside the app. |

Default `features` list — remove entries to hide sections of the app:

```json
{
    "features": [
        "spaces", "desks", "explore", "parking", "help",
        "schedule", "lockers", "visitor-invite", "group-events"
    ]
}
```

Each entry in `locales` looks like:

```json
{
    "locales": [
        { "id": "en-AU", "name": "LANGUAGE.ENGLISH", "local": "English", "flag": "🇦🇺" },
        { "id": "fr", "name": "LANGUAGE.FRENCH", "local": "Français", "flag": "🇫🇷" }
    ]
}
```

- `id` — locale code, e.g. `en-AU`
- `name` — display name (supports translation keys)
- `local` — the language's name in that language
- `flag` — emoji flag shown next to the name

Each entry in `menu_embeds` looks like:

```json
{
    "menu_embeds": [
        {
            "id": "intranet",
            "name": "Intranet",
            "url": "https://intranet.example.com",
            "external": false,
            "icon": "language"
        }
    ]
}
```

- `id` — unique URL-safe identifier (required)
- `name` — display name (required)
- `url` — third-party URL to embed in an iframe (required)
- `external` — open as an external link instead of embedding
- `icon` — Material Symbols icon name; defaults to `open_in_browser`

## Menu & Banner (`general.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `general.menu.items` | object[] | – | Custom list of links shown in the overlay menu (see link format below). |
| `general.menu.copyright` | string | – | Copyright organisation name shown in the menu. |
| `general.menu.position` | string | – | Side of the screen the overlay menu opens from: `left` or `right`. |
| `general.banner.id` | string | `"2"` | Unique identifier for the dismissable banner shown at the top of the app. Change it to re-show the banner to users who dismissed a previous one. |
| `general.banner.type` | string | `"info"` | Banner style: `info`, `warn` or `error`. Affects the banner colour. |
| `general.banner.content` | string | `""` | Message shown in the banner. Leave empty for no banner. |
| `general.search` | boolean | `true` | Whether search functionality is enabled. |
| `general.dark_mode` | boolean | `true` | Whether dark mode is enabled by default. |

Link format (used by `general.menu.items`, `home.tiles`, `home.footer` and `help.tiles`):

```json
{
    "name": "Book a Desk",
    "route": "/book/desks",
    "query_params": { "level": "zone-123" },
    "background": "https://example.com/desk-banner.jpg",
    "icon": { "type": "icon", "class": "material-symbols-rounded", "content": "desk" }
}
```

- `name` — display name (required)
- `route` — internal path the link navigates to
- `query_params` — query parameters added to the route
- `background` — URL of a background image for tile-style links
- `icon` — icon object: `type` is `img` (uses `src` URL) or `icon` (uses `class` and `content`)

## Home & Help Pages

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `home.background` | string | – | URL of the background image shown on the home page. |
| `home.tiles` | object[] | – | Links rendered as tiles on the home page (link format above). |
| `home.footer` | object[] | – | Links rendered in the home page footer menu (link format above). |
| `help.tiles` | object[] | 4 PlaceOS links | Links rendered as tiles on the help page (link format above). |
| `help.columns` | number | – | Number of columns used to lay out the help page tiles. |

## Booking Form (`booking.*`)

Options for the space booking form.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `booking.meeting_types` | object[] | – | Meeting type options offered in the booking flow. Each item needs an `id` and a `name`. |
| `booking.capacity_filters` | object[] | – | Capacity filter options for narrowing down spaces. Each item needs an `id` and a `name`. |
| `booking.show_fields` | string[] | – | Form fields available for use in the booking flow. |
| `booking.html_body` | boolean | – | Allow HTML content in the event body. |
| `booking.multiple_spaces` | boolean | – | Allow users to book multiple spaces in the booking flow. |
| `booking.setup` | number | – | Default setup time for new bookings, in minutes. |
| `booking.breakdown` | number | – | Default breakdown (pack-down) time for new bookings, in minutes. |
| `booking.allowed_daily_desk_count` | number | `1` | Number of desk bookings a user can make for a single day. Use `0` for unlimited. |
| `booking.all_day_period` | object | – | Time window used for "all day" bookings, as hours of the day, e.g. `{ "start": 8, "end": 18 }`. |

```json
{
    "booking": {
        "meeting_types": [
            { "id": "internal", "name": "Internal Meeting" },
            { "id": "client", "name": "Client Meeting" }
        ],
        "capacity_filters": [
            { "id": "4", "name": "Up to 4 people" },
            { "id": "10", "name": "Up to 10 people" }
        ]
    }
}
```

## General Booking Behaviour (`bookings.*`)

These apply to all resource booking flows (desks, parking, lockers). Most can be overridden per resource type under `desks.*`, `parking.*` or `lockers.*`.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `bookings.no_approval` | boolean | `false` | Skip the approval process — new bookings are created already approved. |
| `bookings.all_day_default` | boolean | `false` | Turn the "all day" option on by default for new bookings. |
| `bookings.allow_all_day` | boolean | – | Make the "all day" option available in resource booking flows. |
| `bookings.allowed_daily_visitor_count` | number | `100` | Maximum number of visitor invites allowed for a single day. |
| `bookings.multiple_visitors` | boolean | `true` | Allow a single visitor invite to include multiple visitors. |
| `bookings.bookable_hours` | object | – | Time window in which bookings can be made, as hours of the day, e.g. `{ "start": 8, "end": 19 }`. |
| `bookings.can_book_for_others` | boolean | – | Allow users to make bookings on behalf of other users. |
| `bookings.can_book_for_anyone` | boolean | – | Allow users to make bookings on behalf of anyone, including people outside the organisation. |
| `bookings.custom_duration_options` | number[] | – | Custom list of duration options, in minutes, offered when selecting a booking duration. |
| `bookings.duration_step` | number | `30` | Step, in minutes, between generated duration options. |
| `bookings.min_duration` | number | – | Minimum booking duration, in minutes. |
| `bookings.max_duration` | number | – | Maximum booking duration, in minutes. |
| `bookings.has_assets` | boolean | – | Make asset requests available in resource booking flows. |
| `bookings.use_building_timezone` | boolean | – | Display and book times using the building's timezone rather than the user's device timezone. |
| `bookings.force_current_user_for_booking_rules` | boolean | `false` | Always check booking rules against the signed-in user, even when booking on behalf of someone else. |
| `bookings.assigned_resource_booking` | `allow` \| `deny` \| `other_only` | `other_only` | Controls booking for users with an assigned desk, parking space, or locker. `allow` permits all bookings. `deny` and `other_only` both block a booking whenever the person it is *for* has an assigned resource of that type — whether that assignment comes from the resource metadata or from an existing `is_assigned` booking, and regardless of `allowed_daily_*_count`. They differ in who may book: `other_only` lets a user with an assigned resource book on behalf of others, `deny` does not. |

## Meetings & Events (`events.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `events.bookable_hours` | object | – | Time window in which meetings can be booked, as hours of the day, e.g. `{ "start": 8, "end": 19 }`. |
| `events.all_day_period` | object | – | Time window used for "all day" meetings, as hours of the day. |
| `events.multiple_spaces` | boolean | `false` | Allow users to book multiple spaces in a single meeting. |
| `events.desk_start` | number | `9` | Default start time (hour of the day) for desk bookings made from the meeting flow. |
| `events.can_book_for_others` | boolean | `false` | Allow users to create meetings on behalf of another host. |
| `events.has_catering` | boolean | `true` | Show the catering step in the meeting booking flow. |
| `events.has_assets` | boolean | `true` | Make asset requests available in the meeting booking flow. |
| `events.allow_all_day` | boolean | `true` | Make the "all day" option available for meetings. |
| `events.allow_multiday` | boolean | – | Allow meetings to span multiple days. |
| `events.allow_externals` | boolean | `true` | Allow external (non-directory) attendees to be added to meetings. |
| `events.allow_recurrence` | boolean | `false` | Allow recurring meetings to be created. |
| `events.allow_daily_allday_recurrence` | boolean | `false` | Allow daily recurrence for all-day meetings. |
| `events.allow_online_meetings` | boolean | `false` | Show the online meeting option on the meeting form. |
| `events.hide_notes` | boolean | `false` | Hide the notes field on the meeting form. |
| `events.hide_attendees` | boolean | `false` | Hide the attendees field on the meeting form. |
| `events.hide_nearby_desks` | boolean | `false` | Hide the "book nearby desks" action on the meeting success view. |
| `events.features_label` | string | `""` | Custom label for the space features field in the meeting flow. |
| `events.features_on_form` | boolean | `false` | Show space features on the meeting form. |
| `events.booking_unavailable` | boolean | `false` | Mark room booking as unavailable. When `true`, submitting the meeting form opens a modal linking to the alternate booking method instead of creating the event. |
| `events.no_standalone` | boolean | – | Require every meeting to include at least one room. When `true`, submitting without a space shows an error. |
| `events.strict_capacity_check` | boolean | – | Strictly limit the attendee count to the total capacity of the selected spaces. |
| `events.use_bookings` | boolean | – | Manage room meetings through the PlaceOS bookings API instead of calendar events. |
| `events.use_building_timezone` | boolean | – | Display and book meeting times using the building's timezone. |
| `events.force_current_user_for_booking_rules` | boolean | `false` | Always check meeting room booking rules against the signed-in user, even when booking on behalf of someone else. |

## Desks (`desks.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `desks.bookable_hours` | object | – | Time window in which desks can be booked, as hours of the day, e.g. `{ "start": 8, "end": 19 }`. |
| `desks.allow_all_day` | boolean | `true` | Make the "all day" option available for desk bookings. Overrides `bookings.allow_all_day`. |
| `desks.allow_time_changes` | boolean | `true` | Allow users to change the time of desk bookings. |
| `desks.allow_groups` | boolean | `true` | Allow group desk bookings. |
| `desks.has_group_booking` | boolean | – | Whether users are allowed to make group desk bookings. |
| `desks.allow_recurrence` | boolean | `true` | Allow recurring desk bookings. |
| `desks.auto_allocation` | boolean | `false` | Automatically allocate a desk instead of letting the user pick one. |
| `desks.can_book_lockers` | boolean | `true` | Allow users to book a locker as part of the desk booking flow. |
| `desks.can_book_for_others` | boolean | `true` | Allow users to book desks on behalf of other users. Overrides `bookings.can_book_for_others`. |
| `desks.can_set_host` | boolean | – | Allow the user to set someone else as the host of a desk booking. |
| `desks.default_duration` | number | `60` | Default duration for desk bookings, in minutes. |
| `desks.custom_duration_options` | number[] | – | Custom list of duration options, in minutes, for desk bookings. Overrides `bookings.custom_duration_options`. |
| `desks.duration_step` | number | `30` | Step, in minutes, between duration options for desk bookings. Overrides `bookings.duration_step`. |
| `desks.min_duration` | number | `60` | Minimum desk booking duration, in minutes. Overrides `bookings.min_duration`. |
| `desks.max_duration` | number | `480` | Maximum desk booking duration, in minutes. Overrides `bookings.max_duration`. |
| `desks.has_assets` | boolean | – | Make asset requests available in the desk booking flow. Overrides `bookings.has_assets`. |
| `desks.hide_map` | boolean | `false` | Hide the map when selecting desks. |
| `desks.default_select_as_map` | boolean | `false` | Open the desk selection modal on the map view instead of the list view. |
| `desks.needs_reason` | boolean | – | Require users to enter a reason for their desk booking. |
| `desks.hide_reason` | boolean | – | Hide the ability to enter a reason for a desk booking. |
| `desks.show_calendar_links` | boolean | `true` | Show "add to calendar" links on the desk booking success view. |
| `desks.use_building_timezone` | boolean | – | Display and book desk times using the building's timezone. Overrides `bookings.use_building_timezone`. |

## Parking (`parking.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `parking.allow_all_day` | boolean | `true` | Make the "all day" option available for parking bookings. Overrides `bookings.allow_all_day`. |
| `parking.allow_recurrence` | boolean | `true` | Make multi-day recurrence options available in parking flows. |
| `parking.available_period` | number | `7` | Number of days into the future that parking can be booked. |
| `parking.bookable_hours` | object | – | Time window in which parking can be booked, as hours of the day. |
| `parking.can_book_for_others` | boolean | – | Allow users to book parking on behalf of other users. Overrides `bookings.can_book_for_others`. |
| `parking.can_book_for_anyone` | boolean | – | Allow users to book parking for anyone, including external users. Overrides `bookings.can_book_for_anyone`. |
| `parking.custom_duration_options` | number[] | – | Custom list of duration options, in minutes, for parking bookings. Overrides `bookings.custom_duration_options`. |
| `parking.min_duration` | number | `30` | Minimum parking booking duration, in minutes. Overrides `bookings.min_duration`. |
| `parking.max_duration` | number | `480` | Maximum parking booking duration, in minutes. Overrides `bookings.max_duration`. |
| `parking.show_calendar_links` | boolean | – | Show "add to calendar" links on the parking booking success view. |
| `parking.use_building_timezone` | boolean | – | Display and book parking times using the building's timezone. Overrides `bookings.use_building_timezone`. |
| `parking.request_submission_notes_html` | string | `""` | Optional HTML content shown in the parking request summary and submission section. |
| `parking.request_shift_options` | object[] | – | Shift presets shown in the parking request flow (see example below). The custom shift option is always shown separately. |
| `parking.request_types` | object[] | standard, special, after_hours | Request type options shown in the parking request flow (see example below). |
| `parking.request_space_restrictions` | object[] | – | Space restriction options shown as a radio set in the parking request flow. `None` is always included and selected by default. If the list is empty, the field is hidden. Each item needs an `id` and a `name`. |
| `parking.require_space_restriction` | boolean | `false` | Require users to select a configured space restriction instead of `None` in the parking request flow. |
| `parking.extra_space_restrictions` | object[] | – | Additional space restriction options shown as on/off toggles; multiple can be enabled at once. Each item needs an `id` and a `name` (label or translation key). |
| `parking.auto_approved_groups` | string[] | – | User group names that are auto-approved for parking requests. Users in these groups will not see the approver group selector. |
| `parking.vehicle_types` | object[] | car, bike, van, truck, other | Vehicle type options shown in the parking request flow. Each item needs an `id` and a `name`. |
| `parking.hidden_buildings` | string[] | `[]` | Building (zone) IDs to hide from the location options in the parking request flow. Buildings without any levels tagged `parking` are always hidden. |
| `parking.hide_prefer_toggle` | boolean | `false` | Hide the "Prefer booked location first" toggle in the location preference section. |
| `parking.hide_custom_shift` | boolean | `false` | Hide the custom option from the shift selection dropdown. |
| `parking.hide_selected_space` | boolean | `false` | Hide selected parking space names in booking cards and booking detail modals. |
| `parking.hide_availability_counter` | boolean | `false` | Hide the parking availability counter shown next to the selected location or level. |
| `parking.require_plate_number` | boolean | `false` | Make the plate number/registration field mandatory in the parking request flow. |
| `parking.show_status_details` | boolean | – | Show availability status details (status text, assigned users, plate numbers) in the explore map parking tooltip. |

Shift presets (`start_time`/`end_time` are minutes from midnight; `groups` optionally limits who sees the preset):

```json
{
    "parking": {
        "request_shift_options": [
            { "id": "day", "name": "Day Shift", "start_time": 480, "end_time": 1020 },
            {
                "id": "night",
                "name": "Night Shift",
                "start_time": 1320,
                "end_time": 420,
                "groups": ["security-team"]
            }
        ]
    }
}
```

Request types (`forced_time` locks the form to a fixed window and hides the shift picker; `book_as` can be `internals`, `externals` or `both` — when omitted the host field is hidden):

```json
{
    "parking": {
        "request_types": [
            { "id": "standard", "name": "Standard" },
            {
                "id": "after_hours",
                "name": "After Hours",
                "description": "For work outside business hours",
                "badge": "Approval required",
                "groups": ["managers"],
                "book_as": "both",
                "forced_time": { "start_time": 1080, "end_time": 1380 }
            }
        ]
    }
}
```

## Lockers (`lockers.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `lockers.allow_all_day` | boolean | – | Make the "all day" option available for locker bookings. Overrides `bookings.allow_all_day`. |
| `lockers.allow_time_changes` | boolean | `true` | Allow users to change the time of locker bookings. |
| `lockers.disabled_date_select` | boolean | – | Disable date selection on the locker form. |
| `lockers.disabled_start_time` | boolean | – | Disable start time selection on the locker form. |
| `lockers.hide_end_time` | boolean | – | Hide the end time field on the locker form. |
| `lockers.max_duration` | number | `480` | Maximum locker booking duration, in minutes. Overrides `bookings.max_duration`. |
| `lockers.show_calendar_links` | boolean | – | Show "add to calendar" links on the locker booking success view. |
| `lockers.use_building_timezone` | boolean | – | Display and book locker times using the building's timezone. Overrides `bookings.use_building_timezone`. |
| `use_region` | boolean | – | Scope locker listings to the active region instead of the active building. (Top-level `app` setting.) |

## Explore Map (`explore.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `explore.colors` | object | see below | Mapping of map element keys to colours. Keys usually follow the format `<type>-<status>`, e.g. `space-busy`. |
| `explore.can_select_building` | boolean | `true` | Allow the user to switch between buildings on the map. |
| `explore.show_legend` | boolean | `true` | Show the legend on the explore map. |
| `explore.show_legend_group_names` | boolean | `true` | Show group names in the map legend. |
| `explore.legend` | object | Available / In Use / Pending / Signs of Life | Legend entries, grouped by name. Each group maps to a list of `{ "id", "name" }` entries. |
| `explore.hide_zones` | boolean | `true` | Hide zone overlays on the explore map. |
| `explore.use_zone_polygons` | boolean | `false` | Render zones on the map using their polygon data. |
| `explore.show_simple_sensor_info` | boolean | `false` | Show simplified sensor information on the explore map. |
| `explore.show_presence_indicators` | boolean | `false` | Show presence indicator icons on spaces with presence sensors. |
| `explore.use_cisco_maps` | boolean | `false` | Use Cisco Spaces maps instead of the default interactive SVG maps. |
| `explore.cisco_maps.token` | string | `""` | Token for accessing Cisco Spaces. |
| `explore.cisco_maps.tenant_id` | string | `""` | Cisco Spaces tenant ID. |
| `explore.cisco_maps.location_id` | string | `""` | Cisco Spaces location ID. |
| `explore.cisco_maps.script` | string | – | URL of the Cisco Spaces digital map script to load. |
| `explore.cisco_maps.api_endpoint` | string | – | API endpoint for Cisco Spaces requests. |
| `explore.cisco_maps.access_token` | string | – | API key used for Cisco Spaces API requests. |
| `no_maps` | boolean | `true` | Disable map views throughout the application. (Top-level `app` setting.) |

Default map colours:

```json
{
    "explore": {
        "colors": {
            "space-free": "#43a047",
            "space-pending": "#ffb300",
            "space-busy": "#e53935",
            "space-not-bookable": "#ccc",
            "space-unknown": "#000",
            "zone-low": "#43a047",
            "zone-medium": "#ffb300",
            "zone-high": "#e53935"
        }
    }
}
```

## Schedule Page (`schedule.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `schedule.event_sources` | string[] | – | Sources to load schedule events from: any of `api`, `driver`, `ws`. Overrides the legacy `use_driver` and `use_websocket` settings. |
| `schedule.use_websocket` | boolean | `false` | Legacy. Source schedule events from a websocket binding instead of the API. Use `event_sources` instead. |
| `schedule.use_driver` | boolean | – | Legacy. Source schedule events from the bookings driver. Use `event_sources` instead. |
| `schedule.legend` | object[] | Accepted / Pending / Rejected | Legend entries mapping booking statuses to colours on the schedule view. |

```json
{
    "schedule": {
        "event_sources": ["api", "ws"],
        "legend": [
            { "name": "Accepted", "color": "#21A453" },
            { "name": "Pending", "color": "#ffbf1f" },
            { "name": "Rejected", "color": "#f44336" }
        ]
    }
}
```

## Spaces & User Directory

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `space_display.show_images` | boolean | `false` | Render images associated with spaces in listings. |
| `spaces.show_images` | boolean | – | Render images associated with spaces. |
| `directory.show_avatars` | boolean | `true` | Show user avatars in the directory. |
| `directory.min_search_length` | number | `3` | Minimum number of characters before a user search runs. |
| `users.show_avatars` | boolean | – | Show user avatars in the directory user list. |
| `users.min_search_length` | number | `3` | Minimum number of characters required before performing a directory search. |
| `basic_user_search` | boolean | `false` | Use basic user directory queries for colleague search instead of the staff search API. |
| `colleagues_require_auth` | boolean | – | Require colleague search to query the user directory as an authenticated user. When `false`, the staff search API is used instead. |
| `no_user_calendar` | boolean | `false` | Set to `true` when users do not have calendars available. |
| `hide_contacts` | boolean | `false` | Hide the contacts section. |

## Auto Release (`auto_release.*`)

Prompts users who are not in the office to release their upcoming resource bookings so others can use them.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `auto_release.time_before` | number | – | Minutes before the booking start time to begin prompting the user. Capped at 60. |
| `auto_release.time_after` | number | – | Minutes after the booking start time at which the booking is released if the user hasn't kept it. |
| `auto_release.resources` | string[] | – | Booking types that auto release applies to, e.g. `desk`, `parking`. |
| `auto_release.all_day_start` | number | – | Hour of the day used as the start time for all-day bookings when checking for release. |

Per-resource-type overrides can be set with `<type>_time_before` and `<type>_time_after` keys, e.g. `desk_time_before`.

```json
{
    "auto_release": {
        "time_before": 30,
        "time_after": 60,
        "resources": ["desk", "parking"]
    }
}
```

## Integrations & Other

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `analytics.enabled` | boolean | `true` | Enable Google Analytics. |
| `analytics.tracking_id` | string | `""` | Google Analytics tracking ID. |
| `chat.enabled` | boolean | `false` | Show the global chat widget in the app. |
| `can_deliver` | boolean | `true` | Make delivery available for catering orders. |
| `group_events_calendar` | string | – | ID (email address) of the calendar used to list group events. |
