# Map Kiosk App Settings

The Map Kiosk app is a building wayfinding kiosk. It shows an interactive map of your building so visitors and staff can find rooms, desks, people and amenities, and it can optionally let people book a desk or meeting room directly from the kiosk.

Settings are configured in Backoffice as Zone metadata under the **`app`** metadata key. Any values you set there are merged over the application's build-time defaults, so you only need to add the settings you want to change. Settings can be applied at the organisation, region, building or level zone as appropriate — more specific zones override broader ones.

## Branding & General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"MapKiosk"` | Name of the application. Used as the suffix of the browser page title and as the default location name for bookings. |
| `title` | string | `"PlaceOS"` | Title for the application. |
| `description` | string | `"Map Kiosk UI"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name for the application. Used to namespace client settings and as a fallback for the page title. |
| `logo_light` | string | `"assets/logo-light.svg"` | URL of the logo to display in the top bar when the light theme is active. Also accepts an icon object with a `src` property. |
| `logo_dark` | string | `"assets/logo-dark.svg"` | URL of the logo to display in the top bar when the dark theme is active. Also accepts an icon object with a `src` property. |
| `allow_dark_mode` | boolean | `true` | Whether the dark mode toggle is shown in the accessibility controls. |
| `general` | object | `{}` | General settings associated with the app. |

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
| `inactivity_timeout_secs` | number | `180` | Number of **seconds** after the last user interaction before the map view resets the kiosk state — closes any open dialogs, recentres the map and returns to the default level. |
| `kiosk_reset_delay` | number | `300000` | Number of **milliseconds** of inactivity before the desk booking view navigates back to the explore map. The default is 5 minutes. |
| `show_qr_for_booking` | boolean | `true` | Whether to show a QR code so people can complete their booking on a personal device instead of the kiosk. |

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
| `explore.hide_zones` | boolean | – | Whether to hide zone overlays on the explore map. |

Example:

```json
{
    "explore": {
        "search_enabled": true,
        "show_legend": false,
        "hide_zones": true
    }
}
```

## Desk Booking (`desks`)

Settings for the desk booking flow available from the kiosk.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `desks.use_assets` | boolean | `false` | Read desk resources through the assets API. When `false`, Map Kiosk uses the legacy `desks` zone metadata. |
| `desks.hide_reason` | boolean | `true` | Whether to disable the ability for the user to enter a reason for their desk booking. |
| `desks.can_set_host` | boolean | `true` | Whether the user is allowed to make desk bookings on behalf of other people. |

Example:

```json
{
    "desks": {
        "use_assets": true,
        "hide_reason": false,
        "can_set_host": false
    }
}
```

## Meeting Bookings (`events`)

Settings for booking meeting rooms from the kiosk.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `events.can_book_for_others` | boolean | `true` | Whether users are allowed to set another person as the host when booking a space. |

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
