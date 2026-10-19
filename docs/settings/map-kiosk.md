# Map Kiosk App Settings

The Map Kiosk app is a building wayfinding kiosk. It shows an interactive map of your building so visitors and staff can find rooms, desks, people and amenities, and it can optionally let people book a desk or meeting room directly from the kiosk.

Set settings in Backoffice zone metadata under `map-kiosk_app` for the standard `/map-kiosk/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## Branding & General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"MapKiosk"` | Application name sent with PlaceOS API requests. If you do not set it, the app uses `short_name`. |
| `short_name` | string | `"PlaceOS"` | Prefix for console log messages. The app also uses it as the API application name when `name` is not set. |
| `logo_light` | string | `"assets/logo-light.svg"` | URL of the logo to display in the top bar when the light theme is active. Also accepts an icon object with a `src` property. |
| `logo_dark` | string | `"assets/logo-dark.svg"` | URL of the logo to display in the top bar when the dark theme is active. Also accepts an icon object with a `src` property. |
| `allow_dark_mode` | boolean | – | Whether the dark mode toggle is shown in the accessibility controls. The toggle does not show when you do not set a value. |
| `environment_bar` | string | – | CSS colour for thin identifier bars at the top and bottom of the app, for example `"#f59e0b"`. Leave unset to hide the bars. |
| `banner` | object | – | Message banner at the top of the app. The user can close it. It has an `id`, a `type` (`"info"`, `"warn"` or `"error"`, default `"info"`) and the `content` text. After a user closes a banner, it stays hidden until the `id` changes. |

The app does not set the browser page title from settings.

Example — custom branding:

```json
{
    "name": "Level 3 Kiosk",
    "logo_light": "https://example.com/logo-light.svg",
    "logo_dark": "https://example.com/logo-dark.svg",
    "allow_dark_mode": false
}
```

## Kiosk Behaviour

These settings control how the kiosk resets itself between users, and how bookings made at the kiosk are completed.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `use_region` | boolean | – | Whether the level list on the map view should include levels for all buildings in the active region (prefixed with the building name) instead of only the active building. Also scopes booking queries to the region. |
| `inactivity_timeout_secs` | number | – | Number of **seconds** after the last user interaction before the map view resets the kiosk state — closes any open dialogs, recentres the map and returns to the default level. Set to `0` to turn off the reset. The map view uses `180` when you do not set a value. |
| `kiosk_reset_delay` | number | – | Number of **milliseconds** of inactivity before the desk booking view navigates back to the explore map. The view uses `300000` (5 minutes) when you do not set a value. |

Example — reset the map after 2 minutes idle and return from the booking flow after 3 minutes:

```json
{
    "inactivity_timeout_secs": 120,
    "kiosk_reset_delay": 180000
}
```

## Map View (`explore`)

Settings that control what appears on the interactive map.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `explore.search_enabled` | boolean | `true` | Whether the search bar is shown in the top bar of the map view. |
| `explore.show_legend` | boolean | – | Whether the legend section is shown in the map view sidebar. The legend is only hidden when this is explicitly set to `false`. |
| `explore.show_booking_qr` | boolean | – | When a user selects a room to book, show a QR code to book on a personal device instead of the booking form. When not set, the booking form shows. |
| `explore.colors` | object | – | Mapping of map element keys to colour values. Keys usually use the format `<type>-<status>`, for example `space-free`. The map uses built-in colours for keys that you do not set. |
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
| `use_imperial_units` | boolean | – | Show zone sensor temperatures in Fahrenheit. (Top-level `app` setting.) |

Example:

```json
{
    "explore": {
        "search_enabled": true,
        "show_legend": false,
        "disable": ["devices", "zones"]
    }
}
```

## Desk Booking (`desks`)

Settings for the desk booking flow available from the kiosk.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `desks.use_assets` | boolean | `false` | Read desk resources through the assets API. When `false`, Map Kiosk uses the legacy `desks` zone metadata. |
| `desks.enable_maps` | boolean | – | Let people book desks from the map. Desk booking is on unless the value is `false`. |
| `desks.show_users` | boolean | – | Show the name of the person at a desk in the desk tooltip. Names show unless the value is `false`. |

Example:

```json
{
    "desks": {
        "use_assets": true,
        "show_users": false
    }
}
```

## Meeting Bookings (`events`)

Settings for booking meeting rooms from the kiosk.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `events.can_book_for_others` | boolean | `true` | Whether users can set another person as the host on the room booking form. The form does not show when `explore.show_booking_qr` is `true`. |

## Chat Assistant (`chat`)

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `chat.enabled` | boolean | – | Whether the global chat assistant widget is available in the app. |

Example:

```json
{
    "chat": {
        "enabled": true
    }
}
```
