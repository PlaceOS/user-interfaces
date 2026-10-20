# Outlook Add-in App Settings

The Outlook Add-in brings PlaceOS room booking into Microsoft Outlook. From the add-in pane, staff can find and book meeting rooms for their calendar events, book desks, and view their upcoming bookings — without leaving Outlook.

Set settings in Backoffice zone metadata under `outlook-addin_app` for the standard `/outlook-addin/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

All keys below are relative to the metadata details object unless noted otherwise. For example, the key `events.max_duration` means:

```json
{
    "events": {
        "max_duration": 240
    }
}
```

Where a default is shown as `–`, the app has no build-time default for that setting; the behaviour listed in the description applies until you set a value.

## Common Settings

These options live at the root of the settings file (alongside `app`, not inside it) and are shared by all PlaceOS apps. They are mainly managed by developers at build time.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `debug` | boolean | `true` | Write extra debugging messages to the browser console. |
| `mock` | boolean | – | Run the app against mock data instead of the live API. Mainly for development and demos. |
| `composer` | object | – | Connection details for the PlaceOS API (domain, route, protocol). Managed by developers at build time — leave as is. |
| `service_worker.auto_reload` | boolean | – | Automatically reload the app as soon as a new version is available. |
| `service_worker.interval` | number | – | Time between checks for new app versions, in milliseconds (minimum 1 minute). |

## Application Identity

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Workplace"` | Application name. Recorded (with the app version) against bookings created through the add-in, and used in the `utm_source` of booking requests. If the URL pathname is empty, the app also uses this name to make the settings metadata key. |
| `short_name` | string | `"WorkMate Outlook"` | Prefix for console log messages. Also the booking application name if `name` is not set. |

## Users & Attendees

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `internal_user_domain` | string | – | Email domain used to decide whether a person is internal staff or an external visitor (e.g. `"@company.com"`). Attendees whose email doesn't match this domain are treated as external. When not set, the domain of the signed-in user's email address is used. |

## Meeting Booking Form

These settings control the form shown when booking a meeting room for a calendar event (keys under `events`).

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `events.has_catering` | boolean | `true` | Show the Catering step on the meeting form, letting the organiser add catering orders to the booking. |
| `events.catering_enabled` | boolean | – | Alias for `events.has_catering`. The form shows the Catering step if either key is `true`. |
| `events.can_book_for_others` | boolean | `false` | Show a Host field on the meeting form so the person booking can select someone else as the meeting host. |
| `events.allow_all_day` | boolean | – | Show an "All Day" checkbox next to the date field. Defaults to off. |
| `events.hide_attendees` | boolean | – | Hide the Attendees step of the meeting form. Defaults to off (attendees are shown). |
| `events.allow_international` | boolean | – | Show a checkbox next to the attendee list that flags each attendee as international. The flag is stored on the event and shown in the visitor report for synced visitor bookings. |
| `events.allow_attendee_internal_or_external` | boolean | – | Show a control next to the attendee list that marks each attendee as internal (default) or external. The type is stored on the event and shown in the visitor report for synced visitor bookings. |
| `events.hide_notes` | boolean | – | Hide the Notes step of the meeting form. Defaults to off (notes are shown). |
| `events.min_duration` | number | – | Minimum meeting duration in minutes. Defaults to `30`. Also affects the spacing of selectable start times. |
| `events.max_duration` | number | – | Maximum meeting duration in minutes. Defaults to `480` (8 hours). |
| `events.bookable_hours` | object | – | Restrict start and end times to a window of the day, as 24-hour clock hours. When not set, any time of day can be selected. |
| `events.custom_duration_options` | number[] | – | Replace the standard duration dropdown options with your own list of durations, in minutes. A value smaller than `events.min_duration` also lowers the effective minimum. |
| `events.allow_assets` | boolean | – | Show the Assets (equipment request) step on the meeting form. Defaults to off. |
| `events.multiple_spaces` | boolean | `false` | When `true`, users can select more than one room in the meeting form. The event form then uses the timezone of the event, or the browser timezone, and ignores `events.use_building_timezone`. |
| `events.allow_multiple_spaces` | boolean | – | Legacy alias for `events.multiple_spaces`. The setting applies if either key is `true`. |
| `events.use_building_timezone` | boolean | – | Use the timezone of the active building for meeting times. When the selected room is in a different building, the add-in saves the timezone of the room's building with the event. Has no effect when `events.multiple_spaces` is `true`. |

Example — restrict meetings to office hours with fixed duration choices:

```json
{
    "events": {
        "bookable_hours": { "start": 7, "end": 19 },
        "min_duration": 15,
        "max_duration": 240,
        "custom_duration_options": [15, 30, 45, 60, 90, 120]
    }
}
```

## Desk Booking Form

These settings control the desk booking form (keys under `desks`).

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `desks.use_assets` | boolean | `false` | Read desk resources through the assets API. When `false`, Outlook Add-in uses the legacy `desks` zone metadata. |
| `desks.allow_all_day` | boolean | – | Show an "All Day" checkbox on the desk booking form. Defaults to off. |
| `desks.can_book_lockers` | boolean | – | Show a "Require locker" checkbox so a locker can be requested along with the desk. Defaults to off. |
| `desks.allow_assets` | boolean | – | Show a Request Asset step on the desk booking form for requesting equipment with the booking. Defaults to off. |
| `desks.all_day_period` | object | – | Time window for all-day desk bookings, as hours of the day, e.g. `{ "start": 8, "end": 18 }`. The desk search shows this window for an all-day event. When not set, an all-day booking uses the full day. |
| `desks.hide_user` | boolean | – | Hide the desk details on the desk map, such as the name of the person who booked the desk. Defaults to off. |

Desk booking times are otherwise fixed by the app: durations from 1 to 10 hours in 1-hour steps.

The booking form service reads `desks.all_day_period` from these keys in order, and uses the first value that is set: `desk.all_day_period`, `desks.all_day_period`, then `bookings.all_day_period`. Parking settings that the service reads use the same order, with `parking`, `parkings` and `bookings`.

## Parking

The calendar pane shows a Parking tab when `features` turns on parking or parking requests. The tab uses the same parking settings as the Workplace app.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `features` | string[] | `["spaces", "desks", "explore", "parking", "parking-requests", "help", "schedule"]` | `parking` lets the user choose a parking space. `parking-requests` lets the user request parking, and the parking team assigns a space. With both, the user selects one. With neither, the Parking tab is hidden. The add-in ignores the other values. |
| `parking.require_plate_number` | boolean | – | Make the plate number required. Defaults to off. |
| `parking.assigned_resource_booking` | string | – | Rule for users with an assigned parking space: `allow`, `deny` or `other_only`. When not set, or set to a different value, the app uses `other_only`. When this is not `allow`, a user with an assigned parking space cannot book more parking. The tab shows the assigned space instead. |

## Spaces and Maps

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `space_display.show_images` | boolean | `false` | Show the first photo of each space in the room search list. |
| `use_region` | boolean | – | List the levels of the whole active region on the room and desk maps, instead of only the active building. The map shows the building name under each level. |
| `explore.colors` | object | Status colours for spaces and zones | Map fill colours by status. The room map reads `space-free` and `space-busy`. The desk map reads `desk-free`, `desk-busy` and `desk-not-bookable`. Each map then tries the key without the prefix, such as `free`, and then a built-in colour. |

## Other Behaviour

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `has_uploads` | boolean | – | Enable the file uploads service on startup (cloud storage for attached files). Leave off unless your PlaceOS instance is configured for uploads. |
