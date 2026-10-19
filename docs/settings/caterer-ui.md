# Caterer UI App Settings

The Caterer UI app is the interface used by external caterers to view and manage catering orders for a building.

Set settings in Backoffice zone metadata under `caterer-ui_app` for the standard `/caterer-ui/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

## Application name

These settings control the name that the app gives to the PlaceOS API and uses in console logs.

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | string | `"Catering"` | Application name for the PlaceOS API client. If the URL pathname is empty, the app also uses this name to make the settings metadata key. |
| `short_name` | string | `"PlaceOS"` | Prefix for console log messages. The app also uses it as the API client application name if `name` is not set. |

## Behaviour

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `use_region` | boolean | – | When enabled, the app uses the active region instead of the active building. The level filter lists the levels of the whole region, with the parent building name under each level. The app also loads the orders for the whole region. Useful when a caterer services multiple buildings. |
| `currency` | string | – | Currency code for menu prices, e.g. `"AUD"`. When not set, the app uses the currency of the active building, then `"USD"`. |
| `catering_provider_groups` | object | – | Map of caterer names to the user groups that can see each caterer. When set, the caterer filters list only the caterers for the user's groups. Users in `placeos_admin` or `placeos_support` see all caterers in the order list. |
| `catering.use_bookings` | boolean | – | Load catering orders from the bookings API instead of calendar events. |

Example:

```json
{
    "catering_provider_groups": {
        "Acme Catering": ["acme-caterers"]
    },
    "catering": {
        "use_bookings": true
    }
}
```

## Chat

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `chat.enabled` | boolean | – | Whether to show the global chat widget in the app. |

Example:

```json
{
    "chat": {
        "enabled": true
    }
}
```
