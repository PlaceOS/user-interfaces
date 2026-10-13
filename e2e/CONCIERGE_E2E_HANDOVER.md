# Concierge remaining scenario coverage

Source: `notes/concierge-e2e-test-plan-2026-09-16.xlsx`, Plan tab, the twelve
rows marked **Yet to start** as inspected on 2026-09-18. The Workplace workbook
had no rows with that status. Scenarios marked blocked or awaiting decisions
were outside this round.

| Scenario | Spec in `apps/concierge/e2e/local/` | Coverage |
| --- | --- | --- |
| CON-VIS-02 | `concierge-visitor-management.spec.ts` | Invite through Concierge; verify the stored booking and newly created guest |
| CON-VIS-05 | `concierge-visitor-management.spec.ts` | Save a note, verify booking metadata, reload and reopen the note |
| CON-VIS-06 | `concierge-visitor-management.spec.ts` | Require agreement before accepting induction; verify accepted status and check-in persist |
| CON-DESK-06 | `concierge-desk-qr.spec.ts` | Open the QR modal and verify loaded code images for a seeded desk |
| CON-PARK-03 | `concierge-parking-management.spec.ts` | Cancel another user's booking; verify backend deletion and cancelled UI state |
| CON-PARK-04 | `concierge-parking-management.spec.ts` | Create both a parking user and a fleet vehicle; verify assets and reloaded listings |
| CON-CAT-03 | `concierge-catering-management.spec.ts` | Create a catering item, read its asset, and select it in the Workplace meeting form |
| CON-SURV-01 | `concierge-surveys.spec.ts` | Intended builder flow is `fixme` on CON-B4; API creation and reloaded listing pass in CON-SURV-01b |
| CON-PTS-01 | `concierge-points.spec.ts` | Partial: reward setting adjustment survives reload in browser storage |
| CON-DEAL-01 | `concierge-deals.spec.ts` | Create a deal, verify building metadata and reloaded listing |
| CON-FAC-01 | `concierge-facilities.spec.ts` | Partial: render the implemented status panels and map container |
| CON-MAIL-01 | `concierge-email-templates.spec.ts` | Edit a seeded template subject, verify building metadata and reopen from listing |

## Storage and scope

Visitor notes are stored in `booking.extension_data.notes`, as written by
`VisitorNotesModalComponent`. Induction is a booking field, updated through
`POST /api/staff/v1/bookings/:id/update_induction?induction=accepted` during
`VisitorsStateService.setCheckinState`. No developer clarification is needed to
identify those stores.

Points overview currently persists reward configuration in
`localStorage['PLACEOS.point_details']`. The implemented page has no customer
balance listing or backend balance adjustment. Its test must remain partial
against the spreadsheet's original balance scenario.

`FacilitiesStatusComponent` currently displays hardcoded people/mood values.
Its render test does not establish that seeded facilities data is displayed.
The spreadsheet's seeded-content requirement remains partial.

The catering test requires **both apps to be served** at the framework's
`E2E_CONCIERGE_URL` and `E2E_APP_URL`. It mints a separate Workplace staff
session. It selects catering without submitting a booking/order, so ROOM-B5
does not block this scenario.

The email editor is opened through its listing, so organisation initialisation
has completed before its template lookup. A direct standalone editor navigation
redirected to a new template during investigation.

Tests use unique names and remove their bookings, guests, assets, surveys and
metadata entries. Metadata cleanup retains other entries and field descriptions.
Parking cancellation intentionally expects a cancelled row: cancellation is a
soft delete, and these listings retain cancelled bookings.

## CON-B4: new survey creation sends a nonnumeric ID

Measured on 2026-09-18 by submitting the builder UI. Its initial model has
`id: ''`, and `saveSurvey` passes that model to `addSurvey` unchanged. The backend
rejects creation with:

```text
Couldn't parse (Int64 | Nil) from ""
parsing PlaceOS::Model::Survey#id
```

Creating a survey through the API with the ID omitted succeeds, and the survey
appears in the UI after reload. The intended UI test retains the assertions for
successful creation as `test.fixme`. To enable it, fix creation to omit the empty
ID or send an accepted numeric/null value. No application fix or ticket was
created in this test-writing round.

## Running

Use the framework's local backend. Verify that any already running application
servers also proxy to that backend; the existing local-only URL guard does not
inspect an already running server's proxy environment. Keep Workplace running
for the cross-app catering test.

```sh
E2E_BACKEND_URL=https://localhost:9443 bunx playwright test \
  --config apps/concierge/playwright.config.ts --project=local --workers=1 \
  concierge-visitor-management.spec.ts concierge-parking-management.spec.ts \
  concierge-desk-qr.spec.ts concierge-catering-management.spec.ts \
  concierge-surveys.spec.ts concierge-deals.spec.ts \
  concierge-email-templates.spec.ts concierge-points.spec.ts \
  concierge-facilities.spec.ts

bun run e2e:typecheck
```

Excel lock files were present alongside the spreadsheets. Their editable
Questions, Decisions and Bugs tabs have been preserved. This document records the new
scenario mapping without overwriting workbook edits.

## Verification on 2026-09-18

All thirteen active new scenario/control tests passed across focused runs on
the framework's local backend. CON-SURV-01 remains skipped for CON-B4; the
passing survey API control does not mark the builder scenario complete.
Of the twelve original workbook scenarios, nine now have passing full coverage,
two have passing partial coverage, and one is blocked by the measured defect.

`bun run e2e:typecheck` and Prettier checks passed for the new TypeScript files.
Workplace and Concierge builds both passed with
`NX_DAEMON=false NX_ISOLATE_PLUGINS=false NG_BUILD_MAX_WORKERS=2 bun run nx -- build concierge`
(Concierge's configured build dependency also builds Workplace).
The first sandboxed build hit an esbuild deadlock; the successful retry ran
outside the sandbox with reduced build workers. Separate app-server launches
timed out; the focused tests used existing servers after verifying that both
had `PLACE_PROXY_DOMAIN=localhost:9443`.

Today's test changes are prepared on
`test/e2e-workplace-concierge-2026-09-18`, based on
`test/e2e-workplace-concierge-coverage`. Use that parent branch as the PR base
to review only this round of changes. Excel updates remain local in the
Git-excluded `notes/` folder.
