# Group desk E2E coverage

`apps/workplace/e2e/local/desk-group.spec.ts` implements DESK-GROUP-01–06.
It extends the existing local auth fixtures and uses `DeskGroupPage`, which
composes the existing `DeskForm`. API setup and assertions remain in support
helpers. Booking requests use the real local backend.

Each test attempt (including retries) creates three temporary non-admin users,
its own level, desk metadata and SVG map, then removes its bookings, level and
users. User creation uses the same local API as `support/seed.ts`; authentication
uses the existing OAuth helper. Tokens stay in memory and never replace shared
worker staff token/storage files. The SVG alone is served by a Playwright route. Partial-write
tests additionally inject a single HTTP 409 for one member; accepted writes and
rollback checks use the real backend. These cases test frontend recovery, not
backend transaction concurrency.

URLs and credentials come from the existing `e2e/.env`/`support/env.ts` flow.
Only the seeded admin and organisation are required; booker, colleague and
outsider identities are unique per attempt, independent of `E2E_WORKERS`. No calendar tenant is required. Group mode and basic directory
search are enabled per browser; rollback is enabled only for DESK-GROUP-05.
Dates default to two days ahead, with configurable `E2E_DESK_GROUP_DAY_OFFSET`,
`E2E_DESK_GROUP_HOUR` and `E2E_DESK_GROUP_DURATION`. Resource IDs and titles are
generated for each test; no deployed room, desk or account IDs are embedded.

Run against the already seeded local stack:

```sh
CI=1 E2E_WORKERS=2 E2E_BACKEND_URL=https://localhost:9443 bunx playwright test --config apps/workplace/playwright.config.ts --project=local --workers=2 desk-group.spec.ts
```

The URL above is the isolated stack's default port; set it to your local
stack port. The config rejects non-local backends. The selection runs six group
tests and one backend preflight. Results are in
`reports/e2e/workplace/index.html`.

The group page reselects Group after date initialisation, which can reset the
form (REG-10). This suite does not claim to cover that separate initialisation
regression. It waits for actual directory results rather than selecting the
similarly labelled external-user option.

Group selection uses the existing English button label. It does not require the
uncommitted `desk-mode-group`/`desk-mode-lone` application attributes. Run with
the English UI, as required by other text locators in the existing desk helper.

Cleanup checks cancellation responses and verifies captured bookings are deleted.
It also queries dedicated actors' desk/group bookings in the scenario window to
recover records missed by browser response capture, and verifies no active owned
bookings remain before removing identities. Level cleanup is attempted even if
booking cleanup fails. User setup failures clean up previously created actors;
all teardown errors remain visible. The `group-identity-cleanup` report attachment
records created/deleted user IDs without credentials.

Tests explicitly run in parallel. Settings are browser-local, identities and
resources are unique per attempt, and sweeps never target shared seeded users or
other tests' assets. The seeded authority/building are read-only dependencies.
Abrupt process termination or backend outages can still prevent cleanup; use the
repository's disposable isolated stack lifecycle to recover such an interrupted
run. This does not validate coexistence with investigation tests that overwrite
shared zone metadata/settings.

DESK-GROUP-04 deliberately retains the product-behaviour assertion for the refusal
reason. It currently fails because the application writes to a Fetch Response's
readonly `status`, masking the refusal reason. A failing CI result for this defect
is expected; no `fixme`, expected-failure marker or softened assertion is used.

The suite uses Playwright's managed page/context, retaining configured screenshot
and video handling. On the first retry it records `group-browser-trace.zip`
directly from the browser context. Automatic combined API/browser trace export
reproduced a teardown timeout with an incomplete ZIP on this local CI stack, so
only this fixture disables that automatic merge. The standalone trace retains
browser actions, DOM snapshots and browser network traffic; separate API setup
and cleanup calls are represented by the cleanup audit, not by that trace.

CI infrastructure limitation observed during parallel validation: the isolated
Staff API bookings scheduler crashed with
`Fiber::ExecutionContext::Parallel::Scheduler#run_loop` /
`Crystal::EventLoop::Polling::Event#wake_at cannot be nil`. Booking-list requests
then timed out. This is not handled by weakening assertions or silently restarting
the backend in fixtures. An unavailable backend can interrupt teardown; inspect
the cleanup attachments and recover only test-owned data after restoring it.
