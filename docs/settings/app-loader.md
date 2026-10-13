# App Loader Settings

The App Loader is a simple application launcher. It shows a grid of the applications registered against the current PlaceOS domain (the applications configured in Backoffice under the domain), each displayed with its name and favicon and linking through to that application. It hides itself from the list, only shows applications with a valid `http`/`https` redirect URI, and sorts the tiles alphabetically.

**Note on configuration:** unlike most PlaceOS applications, the App Loader does not load settings from Zone metadata — it only reads its build-time defaults from `apps/app-loader/src/environments/settings.ts`. To change these settings you need to update that file and rebuild/redeploy the application. For quick testing, individual `app.*` settings can be overridden locally in a browser via the settings debug overrides (stored in the browser's local storage under `PLACEOS.setting_overrides`).

All keys below live under the `app` settings key.

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Applications"` | Name of the application. Used as the suffix on browser page titles. |
| `title` | string | `"PlaceOS"` | Base browser page title for the application. |
| `description` | string | `"Application launcher"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name of the application. |
| `logo_light` | string | `"assets/logo-light.svg"` | Application logo for light backgrounds. Not currently displayed by the launcher — each tile shows the target application's own favicon instead. |
| `logo_dark` | string | `"assets/logo-dark.svg"` | Application logo for dark backgrounds. Not currently displayed by the launcher. |
| `general` | object | `{}` | General settings associated with the app. |
| `prevent_space_init` | boolean | `true` | Prevents the shared spaces service from loading every bookable space at startup. The App Loader has no space features, so leave this on. |
| `application_restrictions` | array | `[]` | Rules that limit which applications are visible to which user groups. See below. |

## Application Restrictions

By default every application on the domain is shown to every user. `application_restrictions` lets you hide specific applications from users who aren't in the right groups.

Each rule identifies an application by one or more of `id`, `name` or `redirect_uri` (every field you set must match), and optionally lists the user `groups` allowed to see it:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Match the application with this ID. |
| `name` | string | Match the application with this exact name. |
| `redirect_uri` | string | Match the application with this redirect URI (resolved against the current origin, so relative paths work). |
| `groups` | string array | User groups allowed to see the matched application. If omitted or empty, the matched application stays visible to everyone. |

How the rules are applied:

- Applications that no rule matches are visible to everyone.
- If one or more rules match an application, it is only shown when at least one of those rules either has no `groups` or lists a group the signed-in user belongs to.
- A rule with none of `id`, `name` or `redirect_uri` set is ignored.

Example — only facility managers see Concierge, and Workplace stays visible to all staff:

```json
{
    "app": {
        "application_restrictions": [
            {
                "name": "Concierge",
                "groups": ["facility-managers", "admins"]
            },
            {
                "redirect_uri": "/control/",
                "groups": ["av-support"]
            }
        ]
    }
}
```
