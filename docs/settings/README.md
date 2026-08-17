# Application Settings Reference

User-friendly references for the runtime settings of each app in this repo. Unless a doc says otherwise, settings are configured in Backoffice as Zone metadata under the `app` metadata key and are merged over the build-time defaults in `apps/<app>/src/environments/settings.ts`.

| App | Doc | Notes |
| --- | --- | --- |
| Workplace | [workplace.md](workplace.md) | Primary staff app — largest settings surface |
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
| Enrolment | [enrolment.md](enrolment.md) | Can also be configured via the domain config `enrolment` key |
| App Loader | [app-loader.md](app-loader.md) | Build-time settings only — does not load Zone metadata |

The Map Studio, `public` and `redirect` apps have no configurable runtime settings.
