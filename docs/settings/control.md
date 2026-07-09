# Control App Settings

The Control app is the AV / room control interface, typically shown on an in-room touch panel. It provides controls for the room's displays, sources, lighting, microphones, cameras, calls and room joining.

Settings are configured in Backoffice as Zone metadata under the `app` metadata key. Values you set on a zone are merged over the application's build-time defaults, so you only need to define the settings you want to change. Settings on more specific zones (e.g. a building) override the same settings on broader zones (e.g. the organisation).

All keys below live under the `app` metadata key — for example, the key `logo_light` means:

```json
{
    "app": {
        "logo_light": "https://example.com/logo.svg"
    }
}
```

> **Note:** Most of the Control app's behaviour — available inputs and outputs, lighting scenes, microphones, cameras, help pages, room joining and so on — is driven by the System and its module bindings, configured on the System in Backoffice rather than through these app settings.

## Application Identity

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Control"` | Name of the application. Appended to browser page titles. |
| `title` | string | `"PlaceOS"` | Base browser page title for the application. |
| `description` | string | `"Room Control UI"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name for the application. Used as the app name for PlaceOS API metadata and as a fallback for page titles. |
| `general` | object | `{}` | General settings associated with the app. |
| `prevent_space_init` | boolean | `true` | Whether to prevent loading the full list of bookable spaces on application startup. Leave this on — the Control app only talks to the room's own System, and loading every space can be slow in large organisations. |

## Branding & Appearance

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `logo_light` | string or icon object | `"assets/logo-light.svg"` | Logo shown in the top bar, the tabbed room view and the help modal when the light theme is active. Accepts an image URL, or an icon object with a `src` field. |
| `logo_dark` | string or icon object | `"assets/logo-dark.svg"` | Logo shown in the same places when the dark theme is active. |
| `allow_dark_mode` | boolean | `false` | Whether the app is allowed to use the dark theme. When off, the app always uses the light theme (and the light logo) regardless of the user's theme preference. |
| `environment_bar` | string | — | CSS colour for thin identifier bars shown at the top and bottom of the app, useful for telling environments apart (e.g. `"#f59e0b"` for staging). Leave unset for no bars. |

Logo settings accept either a plain image URL string or an icon object:

```json
{
    "app": {
        "logo_light": { "type": "img", "src": "https://example.com/logo.svg" },
        "logo_dark": { "type": "img", "src": "https://example.com/logo-dark.svg" }
    }
}
```

## Support Contact

These details are shown in the help contact tooltip when a user asks for assistance. They have no build-time defaults — if unset, the app falls back to generic placeholder details (`your administrator`, `support@place.tech`, `0412345678`), so you should set them for your organisation.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `support_contact` | string | — | Name of the person or team to contact for help with the room. |
| `support_email` | string | — | Email address for room support. |
| `support_phone` | string | — | Phone number for room support. |

Example:

```json
{
    "app": {
        "support_contact": "the AV Service Desk",
        "support_email": "av-support@example.com",
        "support_phone": "+61 2 9123 4567"
    }
}
```
