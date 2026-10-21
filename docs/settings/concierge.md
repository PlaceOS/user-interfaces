# Concierge App Settings

Concierge is the front-of-house management application for PlaceOS. It gives reception and facilities staff a single place to manage room bookings, desks, parking, lockers, visitors, assets and reports for a building or region.

Set settings in Backoffice zone metadata under `concierge_app` for the standard `/concierge/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## General & Branding

| Setting | Type | Default | Description |
|---|---|---|---|
| `name` | string | `"Concierge"` | Name of the application. |
| `short_name` | string | `"Concierge"` | Short name for the application. |
| `logo_light` | string / object | `"assets/logo-light.svg"` | Logo shown when using the light theme. Also used in generated PDF reports. Either a URL string or an object with a `src` URL. |
| `logo_dark` | string / object | `"assets/logo-dark.svg"` | Logo shown when using the dark theme. Also used in generated PDF reports. Either a URL string or an object with a `src` URL. |
| `default_route` | string | `"/book/rooms"` | Route that the app opens when the URL is `/` or does not match a page. When empty, these URLs show a blank page. |
| `currency` | string | `"USD"` | Default currency code for pricing, e.g. on catering orders. |
| `use_24_hour_time` | boolean | `false` | Display times using a 24 hour clock. |
| `week_start` | number | – | Day of the week that calendars and week views start on: `0` for Sunday through `6` for Saturday. Defaults to `0`. |
| `use_region` | boolean | – | Scope data to the active region instead of the active building. Affects desks, parking, lockers, visitors, reports and other listings. |
| `banner` | object | – | Message banner shown at the top of the app. Set `content` (or `message`) to the text and `type` to `info`, `warn` or `error`. `type` defaults to `info`. When a user closes the banner, it stays closed until `id` changes. The settings form sets `id` to the date and hour of the edit. |

```json
{
    "logo_light": { "src": "https://example.com/logo-light.svg" },
    "logo_dark": "https://example.com/logo-dark.svg",
    "banner": { "id": "2026-10-19", "type": "warn", "content": "Level 3 is closed today." }
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
| `features` | string[] | See [feature values](#feature-values) | List of features enabled in the app. Each value shows the sidebar links with the same ID. A sidebar group shows when one or more of its links show. |
| `feature_groups` | object | – | Maps feature names to the user groups allowed to access them, e.g. `parking-requests`. Features without an entry are available to all users. |
| `admin_group` | string | `"concierge_admins"` | Name of the user group that grants access to admin sections of the app, such as the management group of the sidebar. Members of `placeos_admin` and `placeos_support` are also admin in the sidebar and the parking pages. When no settings source sets it, the app uses `admin`. |
| `has_uploads` | boolean | `true` | Whether file upload support (S3/cloud storage) is available in the app. |
| `bulk_actions` | boolean | `false` | Let staff select several rows and apply one action to all of them. Desk, parking and locker bookings, parking requests and asset requests get approve and reject actions. Catering orders get a status action. |
| `map_studio_url` | string | – | Where the `Open in Map Studio` links in Map Management go. Defaults to `/map-studio/`. |

### Feature values

| Value | Sidebar link | On by default |
|---|---|---|
| `spaces` | Room bookings and room management | Yes |
| `desks` | Desk bookings and desk management | Yes |
| `parking` | Parking bookings and parking management | Yes |
| `parking-bookings` | Parking bookings only | No |
| `parking-manage` | Parking management only | No |
| `lockers` | Locker bookings and locker management | No |
| `assets` | Asset bookings and asset list | Yes |
| `catering` | Catering orders and catering menu | Yes |
| `visitors` | Visitor bookings | Yes |
| `visitor-rules` | Visitor rules | No |
| `zones` | Zone management | Yes |
| `maps` | Map management | Yes |
| `points` | Points management | Yes |
| `emergency-contacts` | Emergency contacts | No |
| `points-of-interest` | Map features | No |
| `url-management` | URL management | No |
| `email-templates` | Email templates | Yes |
| `deals-n-offers` | Deals and offers | No |
| `internal-users` | User list | Yes |
| `events` | Group events | Yes |
| `surveys` | Surveys | Yes |
| `attendance-report` | Site attendance report | Yes |
| `booking-report` | Room report | Yes |
| `desk-report` | Desk report | No |
| `parking-report` | Parking report | No |
| `lockers-report` | Lockers report | No |
| `catering-report` | Catering report | No |
| `contact-tracing-report` | Contact tracing report | Yes |
| `assets-report` | Assets report | No |
| `visitors-report` | Visitors report | No |
| `user-report` | Report of the desk, parking, locker and room bookings of a single user in the active building or region | No |

The management group of the sidebar shows only to admin users. See `admin_group`.

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
| `bookings.max_duration` | number | – | Maximum booking duration in minutes. Defaults to `480` (8 hours) for parking and locker bookings. Visitor invites use `180` when `visitors.max_duration` and this key are not set. |
| `bookings.duration_step` | number | – | Step in minutes between the durations of the visitor invite duration field. Fallback for `visitors.duration_step`. Defaults to `15`. |
| `bookings.can_book_for_anyone` | boolean | – | Let users select any staff user as the host of a visitor invite. Fallback for `visitors.can_book_for_anyone`. |
| `bookings.multiple_visitors` | boolean | – | Let one visitor invite include more than one visitor. Defaults to `false`. |
| `bookings.custom_duration_options` | number[] | – | Custom list of selectable booking durations, in minutes. |
| `bookings.available_period` | number | – | Number of days into the future that bookings can be made. Parking and lockers use it when their own key is not set. When neither key is set, parking uses `7` and lockers use `90`. |
| `bookings.allow_all_day` | boolean | – | Allow all day bookings. Fallback for `lockers.allow_all_day` and `visitors.allow_all_day`. When no key is set, locker bookings allow all day and visitor invites do not. |
| `bookings.all_day_default` | boolean | – | Pre-select the all day option for new bookings. |
| `bookings.all_day_period` | object | – | Time window of an all day booking, as `start` and `end` hours of the day (0-24). Set the two values. When a value is missing, an all day booking uses the full day. Desk, parking, locker and visitor bookings can use `<type>.all_day_period` to override it. |

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
| `desks.hide_user_list_download` | boolean | `false` | Hide the desk booking user list download action on the desks view. |
| `desks.default_duration` | number | – | Default duration in minutes for new desk bookings. Defaults to `60`. |
| `desks.all_day_default` | boolean | – | Pre-select the all day option for new desk bookings. Falls back to `bookings.all_day_default`. |
| `desks.allow_deleting` | boolean | – | Allow desk bookings to be deleted from the desk bookings list. Defaults to `false`. |

## Meeting Rooms & Events

Settings for meeting room bookings and the day view.

| Setting | Type | Default | Description |
|---|---|---|---|
| `events.allow_setup_breakdown` | boolean | `false` | Allow setup and breakdown times to be viewed and set on room bookings. |
| `events.use_building_timezone` | boolean | `false` | Handle event dates and times in the active building's timezone instead of the local timezone. |
| `events.multiple_spaces` | boolean | – | Allow one meeting to use multiple rooms. |
| `events.allow_multiple_spaces` | boolean | – | Legacy alias for `events.multiple_spaces`. Either key set to `true` enables multiple room selection. |
| `events.day_timeline_view` | string | `"inverted"` | Layout of the day timeline. `default` shows rooms as columns across the top and hours down the side. `inverted` shows rooms as rows in the left column and hours across the top. |
| `events.block_start` | number | `7` | Earliest hour of the day (0-24) shown on the day timeline. |
| `events.block_end` | number | `19` | Latest hour of the day (0-24) shown on the day timeline. |
| `events.block_height` | number | `5` | Height in rem of each hour block on the `default` day timeline. The `inverted` view does not use it. |
| `events.custom_actions` | array | Set Setup/Breakdown action | Additional custom actions shown in the action menu of room bookings. |
| `events.allow_edit` | boolean | – | Allow room bookings to be edited from the day view and booking lists. Defaults to `false`. |
| `events.allow_deleting` | boolean | – | Allow room bookings to be deleted from the room bookings list. Defaults to `false`. |
| `events.booking_unavailable` | boolean | – | Mark the event calendar as unavailable. Hides event actions on room bookings. |
| `events.hide_attendees` | boolean | – | Hide the attendees field in the event booking form. |
| `events.hide_notes` | boolean | – | Hide the notes field in the event booking form. |
| `events.has_assets` | boolean | – | Allow assets to be requested as part of event bookings. |
| `events.allow_externals` | boolean | – | Allow external attendees to be added to event bookings. |
| `events.allow_international` | boolean | – | Show a checkbox in the event booking form that flags each attendee as international. The flag is stored on the event and shown in the visitor report and visitor listings for synced visitor bookings. When this setting is off, the column shows only if a listed booking is flagged as international. |
| `events.allow_attendee_internal_or_external` | boolean | – | Show a control in the event booking form that marks each attendee as internal (default) or external. The type is stored on the event and shown in the visitor report and visitor listings for synced visitor bookings. When this setting is off, the column shows only if a listed booking is marked external. |
| `events.allow_multiday` | boolean | – | Allow events to span multiple days. |
| `events.strict_capacity_check` | boolean | – | Strictly limit attendee counts to the capacity of the selected space. |
| `events.max_duration` | number | – | Maximum event duration in minutes. Defaults to `480` (8 hours). |
| `events.min_duration` | number | – | Minimum room booking duration in minutes. Defaults to `30`. |
| `events.default_duration` | number | – | Duration in minutes of a new room booking. Defaults to `60`. |
| `events.custom_duration_options` | number[] | – | Custom list of selectable room booking durations, in minutes. |
| `events.duration_step` | number | – | Step in minutes between the durations of the room booking duration field. Defaults to `30`. |
| `events.available_period` | number | – | Number of days into the future that group events can be created, on the group events page. Leave unset for no limit. Room bookings use `events.allowed_future_days`. |
| `events.allowed_future_days` | number | – | Number of days into the future that users can select in the room booking form and the room selection filters. Defaults to `180`. |
| `events.bookable_hours` | object | – | Time window during which events are allowed, as hours of the day (0-24). |
| `events.allow_all_day` | boolean | – | Show the all day option in the room booking form. Defaults to `false`. |
| `events.all_day_period` | object | – | Time window of an all day room booking, as `start` and `end` hours of the day (0-24). Set the two values. When a value is missing, an all day booking uses the full day. |
| `events.can_book_for_others` | boolean | – | Let users select a host from the users they can book for in the room booking form. Defaults to `false`. |
| `events.can_book_for_anyone` | boolean | – | Let users select any staff user as the host in the room booking form. Defaults to `false`. Takes priority over `events.can_book_for_others`. |
| `events.allow_visibility` | boolean | – | Show the visibility options in the room booking form. Defaults to `false`. |

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
| `parking.hide_users_and_vehicles` | boolean | `false` | Shorthand for `parking.hide_users` and `parking.hide_vehicles`. When `true`, the users and vehicles tabs are hidden, whatever the value of those keys. |
| `parking.hide_availability_counter` | boolean | `false` | Hide the parking space availability counter in the parking topbar. |
| `parking.hide_assign_space` | boolean | `false` | Hide the assign space action on parking bookings and requests. |
| `parking.allow_editing` | boolean | – | Allow parking bookings to be edited from parking lists. Defaults to `true`. |
| `parking.allow_editing_allocated` | boolean | – | Allow edits to allocated parking bookings in the parking list. Falls back to `parking.allow_editing`. |
| `parking.can_book_for_anyone` | boolean | – | Allow the parking request modal to select an external host. Defaults to `false`. |
| `parking.request_submission_notes_html` | string | – | HTML content shown below the parking request form. Defaults to an empty string. |
| `parking.allow_deleting` | boolean | `false` | Allow parking bookings to be deleted from parking lists. |
| `parking.allow_all_day` | boolean | – | Allow all day parking bookings in the parking booking form. Defaults to `false`. The parking space select modal shows the all day option when this key or `bookings.allow_all_day` is `true`. |
| `parking.show_users` | boolean | – | Show the assigned user in the parking space details on the assign space map. Defaults to `false`. |
| `parking.show_status_details` | boolean | – | Show the status of the space in the parking space details on the assign space map. Defaults to `true`. |
| `parking.assign_space_on_approve` | boolean | `false` | Automatically assign a parking space when approving a parking booking. |
| `parking.max_assigned_count` | number | `0` | Maximum number of parking spaces that can be assigned to a single user. `0` for unlimited. |
| `parking.custom_booking_columns` | array | `[]` | Additional columns to display in the parking bookings list, sourced from booking extension data. |
| `parking.show_user_groups` | string[] | `[]` | User group names to show in the parking bookings list. The column shows the groups of each booking that are in this list. It is hidden when the list is empty. |
| `parking.use_building_timezone` | boolean | – | Handle parking dates and times in the active building's timezone. The parking pages, the parking report and the parking space select modal use the building timezone when this key or `bookings.use_building_timezone` is `true`. |
| `parking.hide_user` | boolean | – | Hide the details of each parking space, such as its status and user, on the map of the parking space select modal. When unset, the modal reads the legacy `parkings.hide_user` key. |
| `parking.bookable_hours` | object | – | Time window during which parking bookings are allowed, as hours of the day (0-24). |
| `parking.min_duration` | number | – | Minimum parking booking duration in minutes. Falls back to `bookings.min_duration`. |
| `parking.max_duration` | number | – | Maximum parking booking duration in minutes. Falls back to `bookings.max_duration`. |
| `parking.custom_duration_options` | number[] | – | Custom list of selectable parking booking durations, in minutes. Falls back to `bookings.custom_duration_options`. |
| `parking.available_period` | number | – | Number of days into the future that parking can be booked. In the parking booking form, falls back to `bookings.available_period`, then `7`. The parking space select modal uses `7` when this key is not set. It does not read `bookings.available_period`. |

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
| `lockers.allow_all_day` | boolean | – | Allow all day locker bookings in the locker booking form and the locker select modal. Falls back to `bookings.allow_all_day`. Defaults to `true`. |
| `lockers.allow_time_changes` | boolean | – | Let users change the date and time in the locker select modal. Defaults to `true`. When `false`, the modal also hides the all day option. |
| `lockers.all_day_default` | boolean | – | Pre-select the all day option for new locker bookings. Falls back to `bookings.all_day_default`. |
| `lockers.bookable_hours` | object | – | Time window during which locker bookings are allowed, as hours of the day (0-24). |
| `lockers.min_duration` | number | – | Minimum locker booking duration in minutes. Falls back to `bookings.min_duration`. Defaults to `30`. |
| `lockers.max_duration` | number | – | Maximum locker booking duration in minutes. Falls back to `bookings.max_duration`. Defaults to `480` (8 hours). |
| `lockers.custom_duration_options` | number[] | – | Custom list of selectable locker booking durations, in minutes. Falls back to `bookings.custom_duration_options`. |
| `lockers.available_period` | number | – | Number of days into the future that lockers can be booked, in the locker booking form and the locker select modal. Falls back to `bookings.available_period`, then `90`. |

## Visitors

| Setting | Type | Default | Description |
|---|---|---|---|
| `visitors.all_visitors_action_window` | number | `15` | Time window in minutes before an event starts and after it ends during which bulk actions are available for all visitors of the event. |
| `visitors.hide_fields` | string[] | – | List of field names to hide in the visitor listing. |
| `visitors.allow_international` | boolean | – | Enable international visitor details in visitor listings and reports. |
| `visitors.allow_visitor_internal_or_external` | boolean | – | Let each invited visitor be marked internal or external in the invite form, and show the type in visitor listings and reports. Defaults to `false`. |
| `visitors.has_parking` | boolean | – | Allow parking to be arranged for visitors. Requires the `parking` feature to be enabled. |
| `visitors.allow_printing_label` | boolean | – | Allow visitor labels to be printed from the visitor listing. Defaults to `true`. |
| `visitors.allow_pass_number` | boolean | `true` | Allow pass numbers to be set for visitors in the visitor listing and in the visitor invite form. Set to `false` to remove the pass number field from the two forms. |
| `visitors.bookable_hours` | object | – | Time window during which visitor invites are allowed, as hours of the day (0-24). Falls back to `bookings.bookable_hours`. |
| `visitors.show_calendar_links` | boolean | – | Show calendar links after a visitor invite is sent. Defaults to `false`. |
| `visitors.allow_all_day` | boolean | – | Show the all day option in the visitor invite form. Falls back to `bookings.allow_all_day`. Defaults to `false`. |
| `visitors.can_book_for_others` | boolean | – | Let users select a host from the users they can book for in the visitor invite form. Falls back to `bookings.can_book_for_others`. |
| `visitors.can_book_for_anyone` | boolean | – | Let users select any staff user as the host in the visitor invite form. Falls back to `bookings.can_book_for_anyone`. Takes priority over `visitors.can_book_for_others`. |
| `visitors.min_duration` | number | – | Minimum visitor invite duration in minutes. Falls back to `bookings.min_duration`, then `30`. |
| `visitors.max_duration` | number | – | Maximum visitor invite duration in minutes. Falls back to `bookings.max_duration`, then `180`. |
| `visitors.duration_step` | number | – | Step in minutes between the durations of the visitor invite duration field. Falls back to `bookings.duration_step`, then `15`. |
| `visitors.custom_duration_options` | number[] | – | Custom list of selectable visitor invite durations, in minutes. Falls back to `bookings.custom_duration_options`. |
| `visitors.use_building_timezone` | boolean | – | Handle visitor invite dates and times in the active building's timezone. The invite form uses the building timezone when this key or `bookings.use_building_timezone` is `true`. |

## Reports

| Setting | Type | Default | Description |
|---|---|---|---|
| `reports.features` | string[] | – | List of report cards shown on the reports menu page: `attendance`, `desks`, `spaces`, `catering`, `contact-tracing` and `user`. Defaults to all of them except `user`. The `/reports` route opens the desk report, so this page does not show at this time. The sidebar report links use the `*-report` values of `features`. |
| `reports.attendance_include_weekends` | boolean | `false` | Include weekends in attendance report calculations. |
| `reports.ignore_days` | array | – | Days of the week to exclude from report calculations. Either day names (e.g. `"saturday"`) or day indexes (0-6). |
| `custom_reports` | array | `[]` | Custom report pages to add to the reports section. Each report is rendered as an embedded page. The sidebar shows a link to each report, whatever the value of `features`. |

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

Each custom report requires an `id` (unique, URL-safe), a `name` (shown in the reports menu) and a `url` (the page to embed). `icon` is an optional Material Symbols icon name for the sidebar link. It defaults to `insert_chart`.

## Catering

| Setting | Type | Default | Description |
|---|---|---|---|
| `catering.use_bookings` | boolean | `true` | Source catering orders from the bookings API instead of calendar events. Affects catering reports. |

## Group Events

| Setting | Type | Default | Description |
|---|---|---|---|
| `group_events_calendar` | string | – | ID of the calendar used for storing group events. |

## Analytics

| Setting | Type | Default | Description |
|---|---|---|---|
| `analytics.enabled` | boolean | `true` | Enable Google Analytics. |
| `analytics.tracking_id` | string | `""` | Google Analytics tracking ID. Analytics is only initialised when this is set. |

```json
{
    "analytics": {
        "enabled": true,
        "tracking_id": "G-XXXXXXXXXX"
    }
}
```

For GA4 tracking IDs (`G-...`), the app sends page views after successful router
navigation. The page path has no query string or fragment. In the GA4 web data stream, open **Enhanced measurement > Page views >
Advanced settings** and turn off **Page changes based on browser history events**.
The app disables the automatic page view on tag load. The GA4 property setting
must also be off to prevent duplicate navigation events. See
[Google's manual page-view setup](https://developers.google.com/analytics/devguides/collection/ga4/views#manual_pageviews).

Set `analytics.enabled` to `false` and reload the app to stop analytics
initialisation and event tracking.

## Integration & Advanced

Settings for linking Concierge to the other PlaceOS applications and metadata sources. Most deployments can leave these at their defaults.

| Setting | Type | Default | Description |
|---|---|---|---|
| `workplace_metadata_key` | string | – | Name of the zone metadata key storing workplace app settings. Defaults to `workplace_app`. |
| `workplace_desk_action_path` | string | – | Path appended to the Workplace URL for desk QR codes on the desk management page and in the desk QR code list. The app replaces `{asset_id}` with the encoded desk ID. Defaults to `/#/book/code?asset_id={asset_id}`. |
| `concierge_metadata_key` | string | – | Name of the zone metadata key storing concierge app settings. Used by the settings form, the induction settings and the support issue types list. When unset, the app reads `concierge_app`. Defaults to `concierge_app`. |
| `visitor_kiosk_metadata_key` | string | – | Name of the zone metadata key storing visitor kiosk app settings. Used by the visitor kiosk settings form, the induction settings and the visitor listing. When unset, the induction settings and the visitor listing read `visitor_kiosk_app`. Defaults to `visitor-kiosk_app`. |
| `visitor_kiosk_app` | string | – | Legacy alias for `visitor_kiosk_metadata_key`. |
| `concierge_app` | string | – | Legacy alias for `concierge_metadata_key`. |
| `workplace_url_path` | string | – | URL path of the Workplace app, used when generating desk QR code links. Defaults to `/workplace`. |
| `public_url_path` | string | – | URL path of the Public app, used for public links to group events. Defaults to `/public`. |
| `kiosk_url_path` | string | – | URL path of the Map Kiosk app, used when generating point of interest and short URL links. Defaults to `/map-kiosk`. |
| `control_path` | string | – | URL path of the room control app, used for links from the room manager listing. |
| `short_url_public_key` | string | – | Public key used when generating short URLs for points of interest. |
