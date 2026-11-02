# Outlook Add-in App Settings

The Outlook Add-in adds PlaceOS rooms, desks and parking to Microsoft Outlook calendar events. The add-in pane reads the event time from Outlook. Staff add rooms to the event, and book desks and parking for the event, without leaving Outlook.

Set settings in Backoffice zone metadata under `outlook-addin_app` for the standard `/outlook-addin/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

All keys below are relative to the metadata details object unless noted otherwise. For example, the key `desks.use_assets` means:

```json
{
    "desks": {
        "use_assets": true
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

## Desks

These settings control the Desks tab (keys under `desks`).

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `desks.use_assets` | boolean | `false` | Read desk resources through the assets API. When `false`, Outlook Add-in uses the legacy `desks` zone metadata. |
| `desks.all_day_period` | object | – | Time window for all-day desk bookings, as hours of the day, e.g. `{ "start": 8, "end": 18 }`. The desk search shows this window for an all-day event. When not set, an all-day booking uses the full day. |
| `desks.hide_user` | boolean | – | Hide the desk details on the desk map, such as the name of the person who booked the desk. Defaults to off. |

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
