# PlaceOS e2e — local backend only

Playwright end-to-end tests that run against a **local PlaceOS stack**. There is no
"which environment am I pointed at today" mode: `assertLocalOnly()` refuses any
non-loopback host before a browser launches. A suite that creates, mutates and
deletes real data must never be one typo away from doing it to a deployment.

Currently wired up for **workplace**. Other apps follow the same shape.

> **What is covered, and what is not:** [`../E2E_USER_STORIES.md`](../E2E_USER_STORIES.md).
> Adding a feature or fixing a bug means adding a row there and a spec, in the same PR —
> that document is what stops the suite decaying.

## Run it

```bash
# 1. an isolated backend, seeded and ready (see "The stack" below)
e2e/stack/up.sh              # --fresh to destroy its volumes first

# 2. the tests
export E2E_BACKEND_URL=https://localhost:9443
bunx playwright test --config apps/workplace/playwright.config.ts                    # everything
bunx playwright test --config apps/workplace/playwright.config.ts --project=local    # real backend
bunx playwright test --config apps/workplace/playwright.config.ts --project=mock     # no backend
bunx playwright test --config apps/workplace/playwright.config.ts --ui               # watch it
```

Playwright starts the Angular dev server itself (`nx serve workplace --port=4214`)
and points its API proxy at the stack. Nothing reaches the network.

If a run dies with "Executable doesn't exist", the workspace's pinned Playwright
needs its browser: `bunx playwright install chromium`.

To target a PlaceOS/local stack instead, set `E2E_BACKEND_URL=https://localhost:8443`
and run `bunx tsx e2e/support/seed.ts` once. Note that seeding mutates that stack
(it adds an OAuth app, a tenant, test users, and makes `login_url` absolute), so
prefer the isolated stack if someone else is using yours.

## The stack

`e2e/stack/` is a self-contained PlaceOS deployment for testing — **not**
PlaceOS/local. It runs as its own compose project (`placeos-e2e`) with its own
network, volumes and secrets, on shifted ports (9443/9080), so it coexists with a
developer's own stack and cannot disturb it.

```bash
e2e/stack/up.sh              # bring up + seed (reuses volumes)
e2e/stack/up.sh --fresh      # destroy volumes first — a genuine cold start
e2e/stack/down.sh            # stop        (--volumes to wipe)
```

It is trimmed to what the e2e path exercises: postgres, redis, frontend-loader,
auth, rest-api, staff-api, nginx, init. Dropped from PlaceOS/local: core, edge,
triggers, dispatch, source, influx, chronograf, mosquitto, minio and the
loki/grafana profile — roughly half the containers.

Two things a cold start taught us that a long-lived stack hides:

- **`frontend-loader` is not optional**, even though the SPA is served by the dev
  server. On startup it clones `PlaceOS/www-core` into the shared `www` volume,
  and that is where the platform's `/login` page lives. Without it nginx serves a
  bare 404 at `/login`. `up.sh` gates on `/login` returning 200 before seeding.
  (This is the one point where bring-up needs network access to GitHub.)
- **A fresh authority gets a RELATIVE `login_url`** (`/login?continue={{url}}`),
  and ts-client resolves that against the authority's `domain` column — a bare
  host with **no port** — so on any non-default port it navigates to a dead URL
  (`http://localhost/login`) and the app dead-ends on a browser error page.
  `seed.ts` patches `login_url` to an absolute URL. A long-lived stack usually has
  an absolute value already, which is why this never shows up locally.

## Layout

```
e2e/                          shared engine, all apps
  stack/                      isolated PlaceOS deployment (compose + up.sh/down.sh)
  support/
    load-env.ts                 dotenv side-effect loader
    env.ts                      config + per-worker roles + assertLocalOnly()
    auth.ts                     headless PKCE mint -> storageState
    login.ts                    drives the REAL login form
    fixtures.ts                 worker-scoped auth fixtures — import test/expect from here
    api.ts                      engine/staff-api helpers + asset sweep
    flows.ts                    multi-step UI flows (bookDeskViaUI)
    preflight.ts                "is the stack up?" — fails in 1s, not 90
    preflight.setup.ts          setup project — `local` depends on it, `mock` does not
    seed.ts                     idempotent API-driven seeding
  .env.example                  copy to .env to override anything
apps/workplace/
  playwright.config.ts        projects: preflight, local, mock
  e2e/
    local/*.spec.ts             real-backend specs
    *.spec.ts                   mock-mode specs (no backend)
```

## Two origins, not one

Under `nx serve` the app and the backend are **different origins**, and conflating
them is the fastest way to a mysteriously unauthenticated SPA:

| | |
|---|---|
| `E2E_BACKEND_URL` | `https://localhost:8443` — the stack (nginx TLS entrypoint) |
| `E2E_APP_URL` | `http://localhost:4214` — the dev server serving the SPA |

The dev server proxies `/api`, `/auth`, `/control` through to the backend, so the
browser only ever sees `E2E_APP_URL` — and that is the origin localStorage (and
therefore the token) belongs to.

## Auth: two paths, and when to use which

**The real login flow is the primary path.** `login.ts` drives it: unauthenticated
visit → redirect to the authority's login page (a cross-origin hop, with `continue`
carrying the return URL) → credentials → back into the app. Use it for anything
whose *subject* is authentication. `apps/workplace/e2e/local/login.spec.ts` is the
worked example, and it guards the exact class of regression that has bitten
production: scope surviving a refresh, rotation, and rest-api still accepting the
refreshed token.

**Injected tokens are a speed optimisation, not the default way in.** The worker
fixtures mint a bearer over PKCE and write a `storageState` seeding
`localStorage[${cid}_access_token]`, so a spec that merely needs to *be* logged in
skips ~5s of form driving. Every spec gets this automatically. Specs that test auth
opt out:

```ts
test.use({ storageState: undefined });
```

Things that will bite you:

- **After a real login, the access token is NOT in localStorage.** ts-client only
  persists it when the device is trusted — `_storeTokenDetails` gates the
  `setItem` on `isTrusted()` (ts-client/src/auth/functions.ts:1042); otherwise the
  bearer lives in memory and only `${cid}_expires_at` is written. So "the token is
  in localStorage" is true of a seeded state and **false of a real login**. Assert
  on the token exchange or on `/users/current`, never on the key.
- **`cid` is derived from where the app is served.** ts-client computes
  `redirect_uri = ${location.origin}${route}oauth-resp.html` at runtime, so the dev
  server and a stack-deployed build are *different clients* and each needs its own
  registered application. `seed.ts` registers the dev-server one.
- **`_expires_at` must be in the future** in a seeded state, or ts-client treats the
  token as stale and triggers a re-auth redirect mid-test.
- **Do not inject `sessionStorage['ENGINE.auth.params']`.** The app deletes it on
  init; re-adding a stale `code` makes ts-client try to re-exchange it and auth breaks.
- **nginx gates static assets behind an HMAC `verified` cookie.** Irrelevant while
  the dev server serves the SPA, but a suite pointed at a stack-served build
  (`https://localhost:8443/workplace/`) will 302 to `/auth/login` unless the cookie
  is carried across. `mintToken` already captures it.

## Parallelism

The suite runs `fullyParallel` across `E2E_WORKERS` (default 4). We own the whole
stack, so isolation is a **seeding** problem rather than a reason to serialise:
`seed.ts` provisions one non-admin identity per worker (`e2e-staff-0@place.tech` …)
and `fixtures.ts` mints per worker, keyed on `parallelIndex`.

Fixtures available:

| Fixture | What |
|---|---|
| `page` | authenticated as this worker's **admin** (the default `storageState`) |
| `staffPage` | a page authenticated as this worker's **non-admin** |
| `staffApi` | an `APIRequestContext` as this worker's non-admin |

**Assert permission-gated behaviour as `staffPage`/`staffApi`.** A `sys_admin`
bypasses the checks, so the same assertion made as admin passes whether or not the
permission logic works.

Raise `E2E_WORKERS` and re-run `seed.ts` to scale out; keep the config's `workers`
at or below it.

## What `seed.ts` sets up, and why

| Step | Why |
|---|---|
| OAuth application for the dev-server `redirect_uri` | ts-client's `client_id` is `Md5(redirect_uri)`; authorize refuses without a matching `uid`. |
| An absolute authority `login_url` | A relative one resolves without the port and dead-ends the login redirect (see "The stack"). |
| A **tenant** for the backend domain | staff-api rejects *every* `/bookings` and `/events` call with "domain does not have a tenant configured" until one exists. |
| One **non-admin** user per worker | Permission gating needs a non-admin; parallel mutation needs distinct identities. |

`seed.ts` polls briefly for the authority rather than reading it once: the row
is created by `init start`, which may not have finished on a cold stack. (The
API reads it straight from Postgres since PPT-2644 — the old Elasticsearch
index lag is gone.)

It bootstraps through the `backoffice` application, which `init` always creates —
otherwise registering an OAuth app would require a token that requires an OAuth app.

### The tenant credentials are placeholders on purpose

staff-api only dereferences tenant credentials when it instantiates a
PlaceCalendar client, which happens on the calendar-backed routes and nowhere else.
So a placeholder tenant unblocks the **entire PlaceOS-native booking surface** —
desks, lockers, parking, visitors — with zero external calls. Verified:

```
GET /bookings?type=desk|locker|parking|visitor   -> 200   (placeholder tenant)
GET /calendars, GET /events                      -> 500   (need real credentials)
```

**Room/calendar events are the only surface that needs a real Microsoft/Google
tenant.** Those specs are therefore opt-in, must live under a separate project, and
must never be part of the PR gate — wiring real credentials in would make the suite
depend on an external service, which is the one thing it is designed not to do.

## CI

`.github/workflows/e2e-advisory.yml` — runs on pushes to **`develop`, `release/**`, `rc/**`**
and `e2e/**`, nightly at **01:10 UTC**, and via **Run workflow**. There is deliberately **no
`pull_request` trigger** (see the table below — it is a security decision, not an oversight),
so a push is the only thing that covers a merge. It brings up the isolated stack, seeds it,
runs the suite, writes a step summary, and uploads the HTML report plus (on failure) traces,
videos and backend container logs.

There are no path filters, on purpose — most real changes touch `libs/**`, which workplace
depends on, and the genuinely dangerous ones (`bun.lock`, `tsconfig.base.json`, `config/`) are
the easiest to leave off an include-list. A filter that is 95% right silently skips the run
that mattered.

Note the push set deliberately stops short of feature branches: there is one self-hosted
runner binding fixed host ports, so runs serialise, and a busy trigger set would build a queue
that starves the nightly.

**It is advisory and must stay that way for now** — do not add it to branch protection or
required status checks until the suite has a track record. See the CI section of
[`../E2E_USER_STORIES.md`](../E2E_USER_STORIES.md) for the bar it needs to clear first.

It runs on a **self-hosted macOS runner** (label `placeos-e2e`). Setup, the network
requirements, and the macOS-specific gotchas are in
[`stack/SELF_HOSTED_RUNNER.md`](stack/SELF_HOSTED_RUNNER.md).

CI-specific choices worth knowing:

| | |
|---|---|
| `E2E_WORKERS: 2` | Lower than the local default of 4. The runner is also hosting ~10 containers, a dev server and browsers. Less contention means fewer failures that are about the machine rather than the code — avoiding false positives matters more than run time here. |
| No `pull_request` trigger | This repo is public and the runner is self-hosted, so a fork PR could run arbitrary code on an internal machine. Triggers are limited to ones requiring write access. Do not add it back without moving to `ubuntu-latest`. |
| Reclaim step | A self-hosted machine is not a fresh VM; a previous aborted run can leave the stack up or port 4214 held. |
| No `vm.max_map_count` bump | Needed on GitHub-hosted Linux, meaningless on macOS — the value lives inside Colima's VM, which already sets it to 1048576. Restore it if reverting to `ubuntu-latest`. |
| Network access to GitHub | `up.sh` clones `PlaceOS/www-core` into the `www` volume once — that is where the platform `/login` page comes from. |

## Booking specs: what the backend actually does

Learned the hard way while building the desk specs. Each of these produced a
failure that looked like something else entirely.

- **`GET /bookings` is scoped to the CALLER.** Listing as an admin does not show
  other users' bookings, so "I checked for leaks as admin and found none" proves
  nothing. Verify against the database, or list as the owning user. Deleting is
  caller-scoped too.
- **The list query parameter is `type`, not `booking_type`.** The latter is the
  model field and appears in the controller's `PARAMS`, which makes the source
  misleading; the request 422s with `missing required parameter 'type'`.
- **Desks come from Zone METADATA, not systems** — `metadata.desks.details[]` on
  a *level* zone. `groups: []` leaves them unrestricted; a populated `groups`
  gates them behind membership.
- **A desk is exclusive for its time range.** Each worker books its own desk, and
  each spec **sweeps that desk before booking** (`releaseAsset`). A post-test
  `finally` alone is not enough: if a run dies mid-flight the leftover holds the
  desk, and because these are all-day bookings it holds it for the rest of the
  day. Every later run then fails as "desk not offered" or a 422 with an empty
  `failures` array — nothing that points at the real cause.
- **`POST /bookings` occasionally 500s with `DB::ConnectionLost`** under
  concurrent writes — roughly 1 run in 8 at 4 workers, on stock connection
  settings (which PlaceOS/local ships too). This is a **staff-api defect, not a
  rig artifact**; sizing the connection pool in compose was tried and did not
  demonstrably help. CI's `retries: 2` absorbs it and reports the test as `flaky`,
  which is the right outcome: the gate stays usable and the instability stays
  visible. Worth fixing in staff-api on its own merits.
- **Calendar routes DO reach the internet.** With the placeholder tenant,
  `/calendars` and `/events` call `login.microsoftonline.com` and fail with
  `AADSTS900023`. So "zero external calls" is true of the routes these specs
  exercise, not of the whole app — the boot spec logs those 500s as expected noise.

## Conventions

- **One spec owns its own data.** Create it, assert it, delete it in a `finally`.
  Use `uniqueTitle()` so concurrent workers cannot collide.
- **Sweep before you create, not just after.** Post-test cleanup handles the happy
  path; a pre-test sweep is what lets a spec recover from a previous crashed run.
- **Never blindly toggle a control** — ensure the state you want. Toggling a
  checkbox that happened to start in the target state silently inverts your
  intent, and the flow then dead-ends in a way that reads as a selector bug.
- **Assert through the API, not only UI text.** A green screen reflecting stale
  state is worse than a red test.
- **Every bugfix PR adds a regression spec** carrying the ticket ID, and a `REG-*` row
  in `E2E_USER_STORIES.md`. A regression spec that was never seen red is a guess,
  not a guard.
- **Red-check new assertions.** Break the expected value once and confirm the test
  fails for the reason you think. An assertion that never observed real data is
  worse than no assertion.
- `.auth/` and `.env` are gitignored — those tokens are impersonation-grade.
