# Outlook Add-in App Settings

The Outlook Add-in brings PlaceOS room booking into Microsoft Outlook. From the add-in pane, staff can find and book meeting rooms for their calendar events, book desks, and view their upcoming bookings — without leaving Outlook.

Settings are configured in Backoffice as Zone metadata under the `app` metadata key. Anything you set there is merged over the app's build-time defaults, so you only need to define the settings you want to change. Settings on more specific zones (e.g. a building) override the same settings on broader zones (e.g. the organisation).

All keys below are relative to the `app` metadata object unless noted otherwise. For example, the key `events.max_duration` means:

```json
{
    "app": {
        "events": {
            "max_duration": 240
        }
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
| `name` | string | `"Workplace"` | Application name. Appended to browser page titles and recorded (with the app version) against bookings created through the add-in. |
| `title` | string | `"Workplace Application"` | Title of the application. |
| `description` | string | `"PlaceOS Workplace UI written with Angular Framework"` | Description of the application. |
| `short_name` | string | `"WorkMate Outlook"` | Short name for the application. Registered as the app name during startup and used as a fallback for `name`. |
| `logo_light` | string | `"assets/logo-light.svg"` | Logo image URL for light backgrounds. |
| `logo_dark` | string | `"assets/logo-dark.svg"` | Logo image URL for dark backgrounds. |

## Users & Attendees

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `internal_user_domain` | string | – | Email domain used to decide whether a person is internal staff or an external visitor (e.g. `"@company.com"`). Attendees whose email doesn't match this domain are treated as external. When not set, the domain of the signed-in user's email address is used. |

## Meeting Booking Form

These settings control the form shown when booking a meeting room for a calendar event (keys under `events`).

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `events.has_catering` | boolean | `true` | Show the Catering step on the meeting form, letting the organiser add catering orders to the booking. |
| `events.catering_enabled` | boolean | – | Alternative flag for the same Catering step — catering is shown if either this or `events.has_catering` is `true`. |
| `events.can_book_for_others` | boolean | `false` | Show a Host field on the meeting form so the person booking can select someone else as the meeting host. |
| `events.allow_all_day` | boolean | – | Show an "All Day" checkbox next to the date field. Defaults to off. |
| `events.hide_attendees` | boolean | – | Hide the Attendees step of the meeting form. Defaults to off (attendees are shown). |
| `events.hide_notes` | boolean | – | Hide the Notes step of the meeting form. Defaults to off (notes are shown). |
| `events.min_duration` | number | – | Minimum meeting duration in minutes. Defaults to `30`. Also affects the spacing of selectable start times. |
| `events.max_duration` | number | – | Maximum meeting duration in minutes. Defaults to `480` (8 hours). |
| `events.bookable_hours` | object | – | Restrict start and end times to a window of the day, as 24-hour clock hours. When not set, any time of day can be selected. |
| `events.custom_duration_options` | number[] | – | Replace the standard duration dropdown options with your own list of durations, in minutes. A value smaller than `events.min_duration` also lowers the effective minimum. |
| `events.allow_assets` | boolean | – | Read by the meeting form but currently has no effect — the Assets (equipment request) step is always shown. |

Example — restrict meetings to office hours with fixed duration choices:

```json
{
    "app": {
        "events": {
            "bookable_hours": { "start": 7, "end": 19 },
            "min_duration": 15,
            "max_duration": 240,
            "custom_duration_options": [15, 30, 45, 60, 90, 120]
        }
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

Desk booking times are otherwise fixed by the app: durations from 1 to 10 hours in 1-hour steps.

## Analytics

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `analytics.tracking_id` | string | `""` | Google Analytics tracking ID. Leave empty to disable analytics. |
| `analytics.enabled` | boolean | `true` | Present in the defaults but not checked by the app — analytics runs whenever `analytics.tracking_id` is set. |

## Other Behaviour

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `has_uploads` | boolean | – | Enable the file uploads service on startup (cloud storage for attached files). Leave off unless your PlaceOS instance is configured for uploads. |

## Unused Legacy Defaults

The build-time defaults also include the settings below, carried over from the Workplace app. Nothing in the current Outlook Add-in reads them — they have no effect and can be ignored. They are listed here only so you can recognise them in the defaults.

| Setting | Type | Default | Original purpose |
|---------|------|---------|------------------|
| `features` | string[] | `["spaces", "desks", "explore", "parking", "help", "schedule"]` | Feature list used by other apps to toggle sections — the add-in's pages are fixed. |
| `can_deliver` | boolean | `true` | Catering delivery option flag. |
| `hide_contacts` | boolean | `false` | Hide contacts in user listings. |
| `departments` | object | `{ "user": { "level": "bld-01_lvl-10", "centered_at": "table-10.008" } }` | Department-to-map-location hints. |
| `general.banner` | object | `{ "id": "2", "type": "info", "content": "" }` | Global announcement banner. |
| `general.copyright` | string | `"PlaceOS"` | Copyright text in the overlay menu. |
| `general.position` | string | `"right"` | Overlay menu position. |
| `help.tiles` | object[] | Four PlaceOS help links | Tiles for a Help/Support page (the add-in has no help page). |
| `help.columns` | number | `2` | Column count for help tiles. |
| `events.multiple_spaces` | boolean | `false` | Allow booking multiple rooms in one meeting — the add-in books one room per meeting. |
| `events.desk_start` | number | `9` | Default desk booking start hour. |
| `space_display.show_images` | boolean | `false` | Show photos in space listings. |
| `directory.show_avatars` | boolean | `true` | Show user avatars in search results. |
| `directory.min_search_length` | number | `3` | Minimum characters before running a user search. |
| `schedule.legend` | object[] | Accepted / Pending / Rejected colours | Colour legend for a schedule page. |
| `explore.colors` | object | Status colours for spaces and zones | Map status colouring — the add-in's map uses its own styling. |
| `explore.can_select_building` | boolean | `true` | Allow changing building on a map view. |
| `explore.show_legend_group_names` | boolean | `true` | Show group names on the map legend. |
| `explore.legend` | object | Space status legend items | Map legend contents. |
| `desks.can_book_for_others` | boolean | `true` | Host selection on desk bookings. |
| `desks.allow_groups` | boolean | `true` | Group desk bookings. |
| `desks.auto_allocation` | boolean | `false` | Automatic desk assignment. |
