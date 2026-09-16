# Application settings reference

These pages describe application settings. Defaults come from each app's `src/environments/settings.ts` file. Schemas describe the fields available to settings forms, but some settings are read directly by components and are not in a schema. A dash in a default column means that the app does not define a value there. The description gives any fallback used by the component.

| App | Doc | Notes |
| --- | --- | --- |
| Workplace | [workplace.md](workplace.md) | Staff booking app |
| Concierge | [concierge.md](concierge.md) | Front-of-house management |
| Booking Panel | [booking-panel.md](booking-panel.md) | Room booking panel |
| Assistant Panel | [assistant-panel.md](assistant-panel.md) | |
| Caterer UI | [caterer-ui.md](caterer-ui.md) | External caterer interface |
| Control | [control.md](control.md) | Room behaviour is mostly configured on the System, not app settings |
| Map Kiosk | [map-kiosk.md](map-kiosk.md) | Wayfinding kiosk |
| Visitor Kiosk | [visitor-kiosk.md](visitor-kiosk.md) | Visitor check-in kiosk |
| Outlook Add-in | [outlook-addin.md](outlook-addin.md) | Includes list of legacy defaults no longer read |
| Signage | [signage.md](signage.md) | Display player |
| Signage Manager | [signage-manager.md](signage-manager.md) | Playlist/media admin |
| Stagehand | [stagehand.md](stagehand.md) | |
| Timetable | [timetable.md](timetable.md) | |
| Survey | [survey.md](survey.md) | Settings belong on the organisation zone |
| Enrolment | [enrolment.md](enrolment.md) | Also reads the domain config `enrolment` object |
| App Loader | [app-loader.md](app-loader.md) | Build-time settings; no zone metadata |

The Map Studio, `public` and `redirect` apps have no configurable runtime settings.

## Settings storage and priority

For apps that use the shared organisation loader, put settings in Backoffice zone metadata. The metadata key is `<app-name>_app`, such as `workplace_app`, `concierge_app` or `booking-panel_app`. The loader derives the app name from the URL pathname, removes slashes, and converts it to lower case. If the pathname is empty, it uses the configured application name. A custom deployment path can therefore change the metadata key.

The `app` prefix used in code, such as `app.events.multiple_spaces`, is a settings lookup prefix. Put this object directly in the `workplace_app` metadata details field:

```json
{
    "events": {
        "multiple_spaces": true
    }
}
```

The shared loader checks these sources in order. The first value that is not `null` or `undefined` wins:

1. A local browser debug override for the exact `app.*` key.
2. The active building's application metadata.
3. The active region's application metadata.
4. The organisation's `settings` metadata, shared across apps.
5. The organisation's application metadata.
6. The app's build-time defaults.

The organisation's `settings` metadata uses the same object format. It takes priority over the organisation's application metadata. Level metadata is not part of this override list. Survey disables region and building metadata loading by default. Enrolment also sets an override list from domain configuration during startup. See those app pages for the exceptions.

The service resolves each requested key separately. `false`, `0`, an empty string and an empty array are valid overrides. An object or array returned for one key replaces the value from lower-priority sources; the service does not combine those values. For example, supply the full list when you override `features`.

Root settings such as `composer`, `mock` and `service_worker` are outside `app`. Zone application metadata does not override them. Keep connection and build settings in the app's environment file.

The loader caches zone data in the browser. Reload the app after a metadata change. If cached values remain, use `window.app.org.reloadMetadata()` in debug mode to clear the organisation cache and fetch it again.

## Local settings overrides

Apps with a settings debug panel use **Ctrl+Alt+Shift+S** to open it. A saved override applies only in that browser. It does not update Backoffice. Overrides persist in local storage under `PLACEOS.setting_overrides` and take priority over zone settings.

Overrides use exact keys. An override for `app.events` does not override a lookup for `app.events.multiple_spaces`. Use the exact setting key. Use **Clear all overrides** in the panel to restore the configured values. Apps on the same origin share this local storage key.

## Source references

- [Settings lookup and debug overrides](../../libs/common/src/lib/settings.service.ts)
- [Metadata loading and priority](../../libs/common/src/lib/org/organisation.service.ts)
- [Settings debug panel shortcut](../../libs/components/src/lib/settings-debug-panel-launcher.component.ts)
