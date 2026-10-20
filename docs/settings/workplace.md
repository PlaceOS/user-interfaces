# Workplace App Settings

Workplace is the primary staff-facing application for booking meeting rooms, desks, parking, lockers and visitors, and for exploring building maps.

Set settings in Backoffice zone metadata under `workplace_app` for the standard `/workplace/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

All keys below are relative to the metadata details object unless noted otherwise. For example, `events.default_duration` means `{ "events": { "default_duration": ... } }`.

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
| `short_name` | string | `"Workplace"` | Short name for the application. |
| `logo_light` | string \| object | `"assets/logo-light.svg"` | Logo shown in the top bar when using the light theme. Either an image URL or an icon object with a `src` property. |
| `logo_dark` | string \| object | `"assets/logo-dark.svg"` | Logo shown in the top bar when using the dark theme. Either an image URL or an icon object with a `src` property. |
| `environment_bar` | string | – | CSS colour for thin environment identifier bars shown at the top and bottom of the app (useful for marking test/UAT environments). Leave unset to hide the bars. |
| `css_variables` | object | – | Colour overrides for the light theme. See [theme colour overrides](README.md#theme-colour-overrides). |
| `css_variables_dark` | object | – | Colour overrides for the dark theme. See [theme colour overrides](README.md#theme-colour-overrides). |
| `sentry_dsn` | string | – | Connection string for Sentry error reporting. |
| `show_changelog` | boolean | `true` | Whether the version number in the user controls links to the changelog modal. |
| `allow_dark_mode` | boolean | – | Allow users to switch the application to the dark theme. When not set, the app uses the light theme only. |
| `default_route` | string | `"/landing"` | Route users are redirected to when they enter the application. |
| `currency` | string | `"USD"` | Currency code used when displaying prices. |
| `use_24_hour_time` | boolean | `false` | Display times using a 24-hour clock. |
| `use_geolocation` | boolean | `false` | Use the device's location to select the closest building when the app loads. |
| `new_features` | boolean | `true` | Show hints in the UI when new features are added. |
| `week_start` | number | – | First day of the week for schedule and calendar views. `0` is Sunday through `6` for Saturday. |
| `idle_timeout` | number | – | Minutes of inactivity on the meeting form before the user is prompted to discard their changes. Falls back to `5`. |
| `global_search` | boolean | – | Show the global search bar in the top bar. Shown when not set; set to `false` to hide it. |
| `hide_global_search_items` | string[] | – | Result types to hide from the global search. Valid values are `contacts`, `desks`, `emergency_contacts`, `features`, `mapspeople`, `points_of_interest`, `spaces` and `users`. |
| `hide_colleagues` | boolean | – | Hide the colleagues card on the landing page. The favourites card takes the full row. |
| `hide_landing_spaces` | boolean | – | Hide the Desks and Lockers tabs of the Available Now card on the landing page. |
| `hide_landing_rooms` | boolean | – | Hide the Rooms tab of the Available Now card on the landing page. The card is hidden when no tab is left. |
| `hide_landing_customise` | boolean | – | Stop users from changing the layout of the landing page. The **Edit home screen** button is hidden, and each user gets the default layout. A saved layout is kept, but it is not used. |
| `hide_landing_widgets` | string[] | – | Cards of the landing page that users cannot have. The cards are not on the page, and users cannot add them. Valid values are `available_now`, `quick_actions`, `desk_week`, `favourites`, `colleagues`, `focus_timer` and `world_clock`. |
| `show_quick_links` | boolean | – | Show the booking links in the Quick Actions card on the landing page, one for each enabled feature. Shown when not set; set to `false` to hide them. |
| `show_quick_book` | boolean | – | Show the Auto-assign Desk action in the Quick Actions card on the landing page. Needs the `desks` feature. Shown when not set; set to `false` to hide it. |
| `features` | string[] | see below | List of feature flags controlling which sections of the app are available. |
| `feature_groups` | object | – | Limits features to user groups. Each key is a feature name and each value is a list of user group names. A user must be in one of the groups to use the feature. Features that are not in the object are available to all users. |
| `default_building` | string | – | Zone ID of the building that the app selects when the user has no saved building. |
| `use_imperial_units` | boolean | – | Show zone temperatures on the explore map in Fahrenheit instead of Celsius. |
| `locales` | object[] | 10 languages | Languages available in the language selector. |
| `menu_embeds` | object[] | – | Additional menu items that open third-party URLs embedded inside the app. |

Each user can add, remove and reorder the cards of the landing page with **Edit home screen**, unless `hide_landing_customise` is set. The app saves the layout in the `landing_layout` key of the user's `settings` metadata. The settings above, such as `hide_landing_widgets`, decide which cards a user can add. The next-booking card stays at the top. The Focus Timer and World Clock cards are not on the page by default. A user adds them in the same edit mode. The World Clock card saves its cities in the `world_clock_zones` key of the same metadata.

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

## Banner (`banner.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `banner.id` | string | – | Unique identifier for the dismissable banner shown at the top of the app. Change it to show the banner again to users who dismissed a previous one. |
| `banner.type` | string | – | Banner style: `info`, `warn` or `error`. Affects the banner colour. Falls back to `info`. |
| `banner.content` | string | – | Message shown in the banner. When it is empty, the app does not show the banner. |

```json
{
    "banner": {
        "id": "maintenance-1",
        "type": "warn",
        "content": "The booking system is offline on Saturday from 8:00 to 10:00."
    }
}
```

## Help Menu

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `help` | object[] | 4 PlaceOS links | Links shown in the help menu of the user controls (link format below). |

Link format:

```json
{
    "help": [
        {
            "name": "IT Support",
            "link": "https://support.example.com",
            "icon": { "type": "icon", "class": "material-symbols-rounded", "content": "support" }
        }
    ]
}
```

- `name` — display name (required)
- `link` — URL that the link opens
- `icon` — icon object: `type` is `img` (uses `src` URL) or `icon` (uses `class` and `content`)

## General Booking Behaviour (`bookings.*`)

These apply to all resource booking flows (desks, parking, lockers). Most can be overridden per resource type under `desks.*`, `parking.*` or `lockers.*`.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `bookings.no_approval` | boolean | `false` | Create new bookings already approved. Only an admin or support user's bookings are sent approved; staff-api refuses `approved` from other users, whose bookings are left for an approver or the auto-approval driver. |
| `bookings.all_day_default` | boolean | `false` | Turn the "all day" option on by default for new bookings. |
| `bookings.allow_all_day` | boolean | – | Make the "all day" option available in resource booking flows. |
| `bookings.allowed_daily_visitor_count` | number | `100` | Maximum number of visitor invites allowed for a single day. |
| `bookings.multiple_visitors` | boolean | `true` | Allow a single visitor invite to include multiple visitors. |
| `bookings.allowed_daily_desk_count` | number | – | Number of desk bookings a user can make for a single day. Use `0` for unlimited. Falls back to `1`. |
| `bookings.allowed_daily_parking_count` | number | – | Number of parking bookings a user can make for a single day. Use `0` for unlimited. Falls back to `1`. |
| `bookings.allowed_daily_locker_count` | number | – | Number of locker bookings a user can make for a single day. Use `0` for unlimited. Falls back to `1`. |
| `bookings.all_day_period` | object | – | Time window used for "all day" resource bookings, as hours of the day, e.g. `{ "start": 8, "end": 18 }`. Override per type under `desks.*`, `parking.*` or `lockers.*`. |
| `bookings.bookable_hours` | object | – | Time window in which bookings can be made, as hours of the day, e.g. `{ "start": 8, "end": 19 }`. |
| `bookings.can_book_for_others` | boolean | – | Allow users to make bookings on behalf of other users. |
| `bookings.can_book_for_anyone` | boolean | – | Allow users to make bookings on behalf of anyone, including people outside the organisation. |
| `bookings.custom_duration_options` | number[] | – | Custom list of duration options, in minutes, offered when selecting a booking duration. |
| `bookings.duration_step` | number | – | Step, in minutes, between generated duration options. Falls back to `15`. |
| `bookings.min_duration` | number | – | Minimum booking duration, in minutes. Falls back to `30`. |
| `bookings.max_duration` | number | – | Maximum booking duration, in minutes. Falls back to `480` for desks, parking and lockers, and `180` for visitor invites. |
| `bookings.has_assets` | boolean | – | Make asset requests available in resource booking flows. |
| `bookings.use_building_timezone` | boolean | – | Display and book times using the building's timezone rather than the user's device timezone. |
| `bookings.hide_checkin` | boolean | – | Hide check-in in the shared booking details modal. Resource settings such as `desks.hide_checkin`, `parking.hide_checkin` and `lockers.hide_checkin` can also hide it for one type. |
| `bookings.force_current_user_for_booking_rules` | boolean | `false` | Always check booking rules against the signed-in user, even when booking on behalf of someone else. |
| `bookings.assigned_resource_booking` | `allow` \| `deny` \| `other_only` | `other_only` | Controls booking for users with an assigned desk, parking space, or locker. `allow` permits all bookings. `deny` and `other_only` both block a booking whenever the person it is *for* has an assigned resource of that type — whether that assignment comes from the resource metadata or from an existing `is_assigned` booking, and regardless of `allowed_daily_*_count`. They differ in who may book: `other_only` lets a user with an assigned resource book on behalf of others, `deny` does not. |

## Visitor Invites (`visitors.*`)

These settings override the matching `bookings.*` settings for visitor invites.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `visitors.reason_required` | boolean | `false` | Require a reason for each visitor invite. Starts new invites with an empty reason and rejects blank or whitespace-only reasons. |
| `visitors.allow_editing` | boolean | `false` | Allow visitor booking edits from the shared booking details modal, subject to the booking status and user permissions. |
| `visitors.allow_all_day` | boolean | `true` | Make the all-day option available for visitor invites. |
| `visitors.can_book_for_others` | boolean | – | Allow users to invite visitors on behalf of another internal host. Falls back to `bookings.can_book_for_others`. |
| `visitors.can_book_for_anyone` | boolean | – | Allow users to invite visitors on behalf of any host, including an external host. Falls back to `bookings.can_book_for_anyone`. |
| `visitors.allow_visitor_internal_or_external` | boolean | `false` | Show a control on the visitor invites step that marks each visitor as internal (default) or external. |
| `visitors.allow_international` | boolean | – | Accept international phone numbers for visitors. Off when not set. |
| `visitors.allow_pass_number` | boolean | – | Show a pass number field for each visitor. Off when not set. |
| `visitors.bookable_hours` | object | – | Time window in which visitors can be invited, as hours of the day. Falls back to `bookings.bookable_hours`. |
| `visitors.min_duration` | number | – | Minimum visitor invite duration, in minutes. Falls back to `bookings.min_duration`, then `30`. |
| `visitors.max_duration` | number | – | Maximum visitor invite duration, in minutes. Falls back to `bookings.max_duration`, then `180`. |
| `visitors.duration_step` | number | – | Step, in minutes, between duration options for visitor invites. Falls back to `bookings.duration_step`, then `15`. |
| `visitors.custom_duration_options` | number[] | – | Custom list of duration options, in minutes, for visitor invites. Falls back to `bookings.custom_duration_options`. |
| `visitors.show_calendar_links` | boolean | – | Show "add to calendar" links on the visitor invite success view. Off when not set. |
| `visitors.use_building_timezone` | boolean | – | Display and book visitor invite times using the building's timezone. `bookings.use_building_timezone` also turns this on. |

## Meetings & Events (`events.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `events.bookable_hours` | object | – | Time window in which meetings can be booked, as hours of the day, e.g. `{ "start": 8, "end": 19 }`. |
| `events.all_day_period` | object | – | Time window used for "all day" meetings, as hours of the day. |
| `events.multiple_spaces` | boolean | `false` | Allow users to book multiple spaces in a single meeting. |
| `events.allow_multiple_spaces` | boolean | – | Legacy alias for `events.multiple_spaces`. Either key set to `true` enables multiple room selection. Use `events.multiple_spaces` for new configuration. |
| `events.can_book_for_others` | boolean | `false` | Allow users to create meetings on behalf of another host. The host list shows the calendars that the user can edit. If the calendar API is not available, the list shows only the current user. For native bookings without calendar access, use `events.can_book_for_anyone`. |
| `events.can_book_for_anyone` | boolean | – | Allow users to select any user as the meeting host. The default is `false`. The form checks that the user can edit the host's calendar. If the check fails, the form sets the host back to the current user. When `events.use_bookings` is `true`, the form does not do this check. |
| `events.has_assets` | boolean | `true` | Make asset requests available in the meeting booking flow. |
| `events.allow_all_day` | boolean | `true` | Make the "all day" option available for meetings. |
| `events.allow_multiday` | boolean | – | Allow meetings to span multiple days. |
| `events.allowed_future_days` | number | – | Number of days into the future that a meeting can be booked. Falls back to `180`. |
| `events.min_duration` | number | – | Minimum meeting duration, in minutes. Falls back to `30`. |
| `events.max_duration` | number | – | Maximum meeting duration, in minutes. Falls back to `480`. |
| `events.duration_step` | number | – | Step, in minutes, between meeting duration options. Falls back to `15`. |
| `events.default_duration` | number | – | Default duration of a new meeting, in minutes. Falls back to `60`. |
| `events.custom_duration_options` | number[] | – | Custom list of duration options, in minutes, for meetings. |
| `events.setup` | number | – | Default setup time for new meetings, in minutes. Falls back to `0`. |
| `events.breakdown` | number | – | Default breakdown (pack-down) time for new meetings, in minutes. Falls back to `0`. |
| `events.force_host` | string | – | Email of the user that is the host of every new meeting. Takes priority over `events.room_as_host`. |
| `events.room_as_host` | boolean | – | Make the first selected room the host of a new meeting. |
| `events.hide_features` | string[] | – | Space features to hide from the space filters of the meeting flow. |
| `events.no_space_resource` | string | – | ID of the space that the app adds to a meeting when the user selects no space. |
| `events.catering_notes_required` | boolean | – | Require notes on the catering order of a meeting. |
| `events.allow_externals` | boolean | `true` | Allow external (non-directory) attendees to be added to meetings. |
| `events.allow_international` | boolean | `false` | Show a checkbox on the meeting form that flags each attendee as international. The flag is stored on the event and shown in the visitor report for synced visitor bookings. |
| `events.allow_attendee_internal_or_external` | boolean | `false` | Show a control on the meeting form that marks each attendee as internal (default) or external. The type is stored on the event and shown in the visitor report for synced visitor bookings. |
| `events.allow_recurrence` | boolean | `false` | Allow recurring meetings to be created. |
| `events.allow_daily_allday_recurrence` | boolean | `false` | Allow daily recurrence for all-day meetings. |
| `events.allow_online_meetings` | boolean | `false` | Show the online meeting option on the meeting form. |
| `events.hide_notes` | boolean | `false` | Hide the notes field on the meeting form. |
| `events.hide_attendees` | boolean | `false` | Hide the attendees field on the meeting form. |
| `events.hide_nearby_desks` | boolean | `false` | Hide the "book nearby desks" action on the meeting success view. |
| `events.booking_unavailable` | boolean | `false` | Mark room booking as unavailable. When `true`, submitting the meeting form opens a modal linking to the alternate booking method instead of creating the event. |
| `events.no_standalone` | boolean | – | Require every meeting to include at least one room. When `true`, submitting without a space shows an error. |
| `events.strict_capacity_check` | boolean | – | Strictly limit the attendee count to the total capacity of the selected spaces. |
| `events.use_bookings` | boolean | – | Manage room meetings through the PlaceOS bookings API instead of calendar events. |
| `events.use_building_timezone` | boolean | – | Display and book meeting times using the building's timezone. |
| `events.force_current_user_for_booking_rules` | boolean | `false` | Always check meeting room booking rules against the signed-in user, even when booking on behalf of someone else. |

## Desks (`desks.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `desks.use_assets` | boolean | `false` | Read desk resources through the assets API. When `false`, Workplace uses the legacy `desks` zone metadata. |
| `desks.available_period` | number | – | Number of days ahead available in the desk form date selector. Falls back to `90`. |
| `desks.bookable_hours` | object | – | Time window in which desks can be booked, as hours of the day, e.g. `{ "start": 8, "end": 19 }`. |
| `desks.allow_all_day` | boolean | `true` | Make the "all day" option available for desk bookings. Overrides `bookings.allow_all_day`. |
| `desks.allow_time_changes` | boolean | `true` | Allow users to change the time of desk bookings. |
| `desks.allow_groups` | boolean | `true` | Allow group desk bookings. |
| `desks.allow_recurrence` | boolean | `true` | Allow recurring desk bookings. |
| `desks.auto_allocation` | boolean | `false` | Automatically allocate a desk instead of letting the user pick one. |
| `desks.can_book_lockers` | boolean | `true` | Allow users to book a locker as part of the desk booking flow. |
| `desks.can_book_for_others` | boolean | `true` | Allow users to book desks on behalf of other users. Overrides `bookings.can_book_for_others`. |
| `desks.default_duration` | number | `60` | Default duration for desk bookings, in minutes. |
| `desks.custom_duration_options` | number[] | – | Custom list of duration options, in minutes, for desk bookings. Overrides `bookings.custom_duration_options`. |
| `desks.duration_step` | number | – | Step, in minutes, between duration options for desk bookings. Falls back to `bookings.duration_step`, then `15`. |
| `desks.min_duration` | number | – | Minimum desk booking duration, in minutes. Falls back to `bookings.min_duration`, then `30`. |
| `desks.max_duration` | number | – | Maximum desk booking duration, in minutes. Falls back to `bookings.max_duration`, then `480`. |
| `desks.has_assets` | boolean | – | Make asset requests available in the desk booking flow. Overrides `bookings.has_assets`. |
| `desks.default_select_as_map` | boolean | `false` | Open the desk selection modal on the map view instead of the list view. |
| `desks.show_users` | boolean | – | Show desk users in desk tooltips. Shown when not set; set to `false` to hide them. On the Explore map, this controls the staff name from the building system. On the desk booking map, this controls the names of the people who booked the desk in the selected time window. |
| `desks.allow_multiple` | boolean | – | Let users select more than one desk in the desk booking flow. |
| `desks.auto_checkin` | boolean | – | Treat a desk booking as checked in when the desk detects a person. Affects the Explore map and the booking details modal. The legacy key `desk.auto_checkin` is also read. |
| `desks.enable_maps` | boolean | – | Let users book desks from the Explore map. On when not set; set to `false` to turn it off. |
| `desks.height_enabled` | boolean | – | Show the desk height controls in the user controls and the desk booking details. |
| `desks.needs_reason` | boolean | – | Require users to enter a reason for their desk booking. |
| `desks.hide_reason` | boolean | – | Hide the ability to enter a reason for a desk booking. |
| `desks.show_calendar_links` | boolean | `true` | Show "add to calendar" links on the desk booking success view. |
| `desks.use_building_timezone` | boolean | – | Display and book desk times using the building's timezone. Overrides `bookings.use_building_timezone`. |

## Parking (`parking.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `parking.allow_all_day` | boolean | `true` | Make the "all day" option available for parking bookings. Overrides `bookings.allow_all_day`. |
| `parking.allow_recurrence` | boolean | `true` | Make multi-day recurrence options available in parking flows. |
| `parking.available_period` | number | – | Number of days into the future that parking can be booked. Falls back to `7`. |
| `parking.enable_maps` | boolean | – | Let users book parking spaces from the Explore map. On when not set; set to `false` to turn it off. |
| `parking.restrict_home_location` | boolean | – | Stop users from booking parking in the building of their assigned desk. The parking flows show a message instead of the form in that building. |
| `parking.show_users` | boolean | – | Show the name of the user in the parking tooltip on the Explore map. Off when not set. |
| `parking.hide_user` | boolean | – | Hide the users of parking spaces on the parking selection map. The legacy key `parkings.hide_user` is also read. `parking.show_users` and `parking.hide_user` are independent: each controls a different map. |
| `parking.bookable_hours` | object | – | Time window in which parking can be booked, as hours of the day. |
| `parking.can_book_for_others` | boolean | – | Allow users to book parking on behalf of other users. Overrides `bookings.can_book_for_others`. |
| `parking.can_book_for_anyone` | boolean | – | Allow users to book parking for anyone, including external users. Overrides `bookings.can_book_for_anyone`. |
| `parking.custom_duration_options` | number[] | – | Custom list of duration options, in minutes, for parking bookings. Overrides `bookings.custom_duration_options`. |
| `parking.min_duration` | number | – | Minimum parking booking duration, in minutes. Falls back to `bookings.min_duration`, then `30`. |
| `parking.max_duration` | number | – | Maximum parking booking duration, in minutes. Falls back to `bookings.max_duration`, then `480`. |
| `parking.show_calendar_links` | boolean | – | Show "add to calendar" links on the parking booking success view. |
| `parking.use_building_timezone` | boolean | – | Display and book parking times using the building's timezone. Overrides `bookings.use_building_timezone`. |
| `parking.request_submission_notes_html` | string | `""` | Optional HTML content shown in the parking request summary and submission section. |
| `parking.request_shift_options` | object[] | – | Shift presets shown in the parking request flow (see example below). The custom shift option is always shown separately. |
| `parking.request_types` | object[] | standard, special, after_hours | Request type options shown in the parking request flow (see example below). |
| `parking.request_space_restrictions` | object[] | – | Space restriction options shown as a radio set in the parking request flow. If the list is empty, the field is hidden. Each item needs an `id` and a `name`. |
| `parking.require_space_restriction` | boolean | `true` | Require users to select a configured space restriction in the parking request flow. |
| `parking.extra_space_restrictions` | object[] | – | Additional space restriction options shown as on/off toggles; multiple can be enabled at once. Each item needs an `id` and a `name` (label or translation key). |
| `parking.auto_approved_groups` | string[] | – | User group names that are auto-approved for parking requests. Users in these groups will not see the approver group selector. |
| `parking.approver_groups` | object[] | `[]` | Approver options for parking requests. Each option needs an `id` and a `name`. A request type can restrict this list with its `approver_groups` array of IDs. |
| `parking.vehicle_types` | object[] | car, bike, van, truck, other | Vehicle type options shown in the parking request flow. Each item needs an `id` and a `name`. |
| `parking.default_location_from_desk_booking` | boolean | `false` | Default new parking requests to the desk booking building for the selected user and date. Show a desk icon beside the matching parking location. |
| `parking.hidden_buildings` | string[] | `[]` | Building (zone) IDs to hide from the location options in the parking request flow. Buildings without any levels tagged `parking` are always hidden. |
| `parking.hide_prefer_toggle` | boolean | `false` | Hide the "Prefer booked location first" toggle in the location preference section. |
| `parking.hide_custom_shift` | boolean | `false` | Hide the custom option from the shift selection dropdown. |
| `parking.hide_selected_space` | boolean | `false` | Hide selected parking space names in booking cards and booking detail modals. |
| `parking.hide_availability_counter` | boolean | `false` | Hide the parking availability counter shown next to the selected location or level. |
| `parking.require_plate_number` | boolean | `false` | Make the plate number/registration field mandatory in the parking request flow. |
| `parking.show_special_needs` | boolean | `false` | Show the special needs reason and document fields to each user who selects the `special` request type. When `false`, only parking users with the special needs flag see them. |
| `parking.show_status_details` | boolean | – | Show availability status details (status text, assigned users, plate numbers) in the explore map parking tooltip. Shown when not set; set to `false` to hide them. |
| `parking.show_waitlist` | boolean | – | Show unallocated parking bookings in the active waitlist week as waitlisted. Shown when not set; set to `false` to hide the status. |
| `parking.waitlist_week_start` | object | Friday at 18:00 | Day and time at which the active parking waitlist week starts. Needs a `day` (`0` is Sunday), an `hour` and a `minute`. |

Request types also accept `approver_groups` to restrict the approver options, `show_notes` to show the notes field, and `requires_manual_approval` to mark the request for manual approval. The last two fields default to `false`.

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
| `lockers.allow_all_day` | boolean | – | Make the "all day" option available for locker bookings. Falls back to `bookings.allow_all_day`, then `true`. |
| `lockers.allow_time_changes` | boolean | – | Allow users to change the time of locker bookings. On when not set; set to `false` to turn it off. |
| `lockers.available_period` | number | – | Number of days ahead available in the date selector of the locker selection modal. Falls back to `90`. |
| `lockers.hide_user` | boolean | – | Hide the users of lockers on the locker selection map. |
| `lockers.disabled_date_select` | boolean | – | Disable date selection on the locker form. |
| `lockers.disabled_start_time` | boolean | – | Disable start time selection on the locker form. |
| `lockers.hide_end_time` | boolean | – | Hide the end time field on the locker form. |
| `lockers.max_duration` | number | – | Maximum locker booking duration, in minutes. Falls back to `bookings.max_duration`, then `480`. |
| `lockers.show_calendar_links` | boolean | – | Show "add to calendar" links on the locker booking success view. |
| `lockers.use_building_timezone` | boolean | – | Display and book locker times using the building's timezone. Overrides `bookings.use_building_timezone`. |
| `use_region` | boolean | – | Scope locker listings to the active region instead of the active building. (Top-level `app` setting.) |

## Explore Map (`explore.*`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `explore.colors` | object | see below | Mapping of map element keys to colours. Keys usually follow the format `<type>-<status>`, e.g. `space-busy`. |
| `explore.show_legend` | boolean | `true` | Show the legend on the explore map. |
| `explore.legend` | array | Available / In Use / Pending / Signs of Life | Legend entries. Each entry is a `[name, colour]` pair, e.g. `["Available", "#43a047"]`. |
| `explore.hide_zones` | boolean | `true` | Hide the Areas overlay toggle on the explore map. |
| `explore.hide_devices` | boolean | `true` | Hide the Devices overlay toggle on the explore map. |
| `explore.hide_sensors` | boolean | `true` | Hide the Sensors overlay toggle on the explore map. |
| `explore.use_zone_polygons` | boolean | `false` | Render zones on the map using their polygon data. |
| `explore.show_zone_labels` | boolean | – | Show zone labels on the explore map. |
| `explore.show_zone_sensor_info` | boolean | – | Show sensor information in the zone labels. |
| `explore.area_count_key` | string | – | Key in the zone data that gives the people count of an area. Falls back to `count`. |
| `explore.disable` | string[] | – | Map feature groups to turn off in every map view. A comma-separated string is also valid. |
| `explore.disable_actions` | string[] | – | Map feature groups whose click actions are turned off. A comma-separated string is also valid. |
| `explore.disable_features` | string[] | – | Map feature groups whose features (such as tooltips) are turned off. A comma-separated string is also valid. |
| `explore.disable_labels` | string[] | – | Map feature groups whose labels are turned off. A comma-separated string is also valid. |
| `explore.disable_styles` | string[] | – | Map feature groups whose colours are turned off. A comma-separated string is also valid. |
| `explore.hide_device_fields` | string[] | – | Fields to hide from device info tooltips. Valid values are `mac`, `manufacturer`, `os`, `ssid`, `username` and `user`. |
| `explore.show_booking_qr` | boolean | – | Show a booking QR code instead of the booking modal when a user selects a space on the map. |
| `explore.show_event_details` | boolean | – | Show meeting details in space tooltips. Shown when not set; set to `false` to hide them. |
| `explore.cisco_maps.enabled` | boolean | `false` | Use Cisco Spaces maps instead of the default interactive SVG maps. |
| `explore.cisco_maps.script` | string | – | URL of the Cisco Spaces digital map script to load. |
| `explore.cisco_maps.api_endpoint` | string | – | API endpoint for Cisco Spaces requests. |
| `explore.cisco_maps.access_token` | string | – | API key used for Cisco Spaces API requests. |
| `show_presence_indicators` | boolean | `false` | Show presence indicator icons on spaces with presence sensors. (Top-level `app` setting.) |
| `department_map` | object | – | Mapping of desk department IDs to display names. The desk tooltip on the explore map shows the name. (Top-level `app` setting.) |

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

```json
{
    "schedule": {
        "event_sources": ["api", "ws"]
    }
}
```

## Spaces & User Directory

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `spaces.show_images` | boolean | – | Render images associated with spaces in the space list. Off when not set. |
| `users.show_avatars` | boolean | – | Show user avatars in the directory user list. Off when not set. |
| `users.min_search_length` | number | – | Minimum number of characters required before performing a directory search. Falls back to `3`. |
| `basic_user_search` | boolean | `false` | Use basic user directory queries for colleague search instead of the staff search API. |
| `colleagues_require_auth` | boolean | – | Require colleague search to query the user directory as an authenticated user. On when not set. When `false`, the staff search API is used instead. |

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
| `catering.backend` | string | `"native"` | Catering system: `native` uses PlaceOS menus, `external` uses the external catering driver bound to the building. |
| `catering_provider` | string | – | Caterer whose menu items show in the catering order form. When not set, the form shows all caterers. |
| `support_email` | string | – | Email address that receives support tickets. Falls back to `support@place.tech`. |
| `support_issue_types` | array | – | Issue type options for support tickets. Each item is a string or an object with a `name`. |
| `external_support_url` | string | – | URL that the support action opens instead of the support ticket form. |
| `group_events_calendar` | string | – | ID (email address) of the calendar used to list group events. |

For GA4 tracking IDs (`G-...`), the app sends page views after successful router
navigation. In the GA4 web data stream, open **Enhanced measurement > Page views >
Advanced settings** and turn off **Page changes based on browser history events**.
The app disables the automatic page view on tag load. The GA4 property setting
must also be off to prevent duplicate navigation events. See
[Google's manual page-view setup](https://developers.google.com/analytics/devguides/collection/ga4/views#manual_pageviews).

Set `analytics.enabled` to `false` and reload the app to stop analytics
initialisation and event tracking.

## Virtual Concierge (`virtual_concierge.*`)

A button for the virtual concierge shows on the schedule, team schedule, explore, deals and directory pages when a URL is set.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `virtual_concierge.url` | string | – | URL of the virtual concierge page to embed. The button is hidden when this is empty. |
| `virtual_concierge_url` | string | – | Legacy key for the URL. Used when `virtual_concierge.url` is empty. |
| `virtual_concierge.icon` | string | – | URL of the image for the button. A default icon shows when this is empty. |
| `virtual_concierge.display` | string | `"fullscreen"` | How the embed opens: `fullscreen` or `sidebar`. |
| `virtual_concierge.side` | string | `"left"` | Side of the screen for the sidebar: `left` or `right`. |
| `virtual_concierge.prompts` | string[] | three example prompts | Suggested prompts for the virtual concierge UI. |

```json
{
    "virtual_concierge": {
        "url": "https://concierge.example.com",
        "icon": "https://concierge.example.com/icon.png",
        "display": "sidebar",
        "side": "right"
    }
}
```
