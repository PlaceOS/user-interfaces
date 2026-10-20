# Enrolment App Settings

The Enrolment app is a self-service check-in page for visitors. Guests open a personalised link from their invitation email (containing a `uid` access token), and the app loads their event details and guest profile so they can confirm or update their details — name, email, organisation, phone, accessibility assistance, beverage preference and file attachments — accept the terms and conditions, and check in to their visit.

The app reads zone settings under `enrolment_app` for the standard `/enrolment/` URL. It also applies the domain config `enrolment` object as a replacement override list during startup. Later zone loads can replace that list. Do not rely on a fixed priority between these two sources. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show values for the domain config `enrolment` object or zone metadata details, without an `app` wrapper.

## General

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Enrolment"` | If the URL pathname is empty, the app uses this name to make the settings metadata key. |
| `short_name` | string | `"Enrolment"` | Prefix for console log messages. |
| `internal_user_domain` | string | – | Email domain that identifies users as internal staff (e.g. `"@yourcompany.com"`). When not set, the domain of the signed-in user's email address is used. The app reads this value one time during startup. Zone settings that load later do not change it, so set it in the domain config `enrolment` object. |
| `sentry_dsn` | string | – | Sentry DSN for error reporting. When set, application errors are reported to your Sentry instance. |

## Guest Form

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `guests.vaccine_check` | boolean | `false` | When enabled, the guest details form shows a "Vaccination Proof" file upload field. |

```json
{
    "guests": {
        "vaccine_check": true
    }
}
```

## Branding

Each logo setting accepts an image URL string or an object with a `src` URL. The logo is shown in the coloured header bar at the top of the page — `logo_dark` is used with the normal (light) theme and `logo_light` is used when the dark theme is active. The dark theme needs `allow_dark_mode`.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `logo_light` | string or object | `{ "type": "img", "src": "assets/logo-light.svg" }` | Logo shown in the header when the dark theme is active. Needs `allow_dark_mode`. |
| `logo_dark` | string or object | `{ "type": "img", "src": "assets/logo-dark.svg" }` | Logo shown in the header with the default light theme. |
| `allow_dark_mode` | boolean | – | Allow the dark theme. When on, the app uses the theme saved in the user's settings. When off or not set, the app uses the light theme. |

Example — use your own hosted logo:

```json
{
    "logo_dark": {
        "src": "https://example.com/assets/company-logo.svg"
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
    "banner": {
        "id": "maintenance-2026-07",
        "type": "warn",
        "content": "Check-in will be unavailable this Saturday between 8pm and 10pm."
    }
}
```
