# Enrolment App Settings

The Enrolment app is a self-service check-in page for visitors. Guests open a personalised link from their invitation email (containing a `uid` access token), and the app loads their event details and guest profile so they can confirm or update their details — name, email, organisation, phone, accessibility assistance, beverage preference and file attachments — accept the terms and conditions, and check in to their visit.

Settings for the app are configured in Backoffice as Zone metadata under the `app` metadata key. Values you set there are merged over the app's build-time defaults, so you only need to define the settings you want to change. Settings can also be provided on the domain in Backoffice, under the `enrolment` key of the domain's config — these are applied as overrides when the app starts.

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Enrolment"` | Name of the application. Used as the suffix on browser page titles. |
| `title` | string | `"Enrolment Application"` | Base browser page title for the application. |
| `description` | string | `"PlaceOS Enrolment UI written with Angular Framework"` | Description of the application. |
| `short_name` | string | `"Enrolment"` | Short name of the application. Used as the app name for PlaceOS API metadata. |
| `internal_user_domain` | string | – | Email domain that identifies users as internal staff (e.g. `"@yourcompany.com"`). When not set, the domain of the signed-in user's email address is used. |
| `sentry_dsn` | string | – | Sentry DSN for error reporting. When set, application errors are reported to your Sentry instance. |

## Guest Form

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `guests.vaccine_check` | boolean | `false` | When enabled, the guest details form shows a "Vaccination Proof" file upload field. |

```json
{
    "app": {
        "guests": {
            "vaccine_check": true
        }
    }
}
```

## Branding

Both logo settings accept an icon object with an image URL. The logo is shown in the coloured header bar at the top of the page — `logo_dark` is used with the normal (light) theme and `logo_light` is used when the dark theme is active.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `logo_light` | icon object | `{ "type": "img", "src": "assets/logo-light.svg" }` | Logo shown in the header when the dark theme is active. |
| `logo_dark` | icon object | `{ "type": "img", "src": "assets/logo-dark.svg" }` | Logo shown in the header with the default light theme. |

Example — use your own hosted logo:

```json
{
    "app": {
        "logo_dark": {
            "type": "img",
            "src": "https://example.com/assets/company-logo.svg"
        }
    }
}
```

## Banners

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `environment_bar` | string | – | CSS colour for thin identifier bars fixed to the top and bottom of the page — useful for making staging or test environments obvious (e.g. `"#f59e0b"`). |
| `banner` | object | – | A dismissible message banner shown at the top of the app. See below. |

The `banner` object:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique ID for the message. Once a user dismisses a banner, it stays hidden until a banner with a different `id` is published. |
| `type` | `"info"`, `"warn"` or `"error"` | Colour styling for the banner. Defaults to `"info"`. |
| `content` | string | The message text to display. |

```json
{
    "app": {
        "banner": {
            "id": "maintenance-2026-07",
            "type": "warn",
            "content": "Check-in will be unavailable this Saturday between 8pm and 10pm."
        }
    }
}
```
