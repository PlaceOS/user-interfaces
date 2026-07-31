# Debugging a signage player

Signage runs unattended, so the console is usually the only way in. Open dev
tools against the player (remote debugging on a real device) and start here.

## `window.signage`

Always available on a running player, in production builds too.

| Call | Does |
| --- | --- |
| `signage.state()` | Logs a grouped snapshot and returns it |
| `signage.json()` | The same snapshot as text, for pasting into a ticket |
| `signage.poll()` | Forces an immediate display fetch |
| `signage.reload()` | Reloads the application |

`state()` is the first thing to run for almost any issue — it answers most
questions without needing to reproduce anything.

### What the snapshot contains

| Key | Use it to answer |
| --- | --- |
| `version` | Which build is actually running (`hash`, `built`) |
| `online` | Whether the client believes it can reach the backend |
| `updates` | Is update checking running, when did it last check, is a new version pending, is a reload being held back |
| `display_id` / `display_name` | Which display this player is bootstrapped to |
| `poll` | `last_attempt`, `last_success`, `next_due`, `in_flight`, `interval_ms` |
| `schedule` | Tick interval, the player's current time, and mock-time speed |
| `playlists.mapped` | Every playlist id mapped to this display or its zones |
| `playlists.active` | Per playlist: `enabled`, `scheduled`, `active`, `takeover`, `started_at`, `expires_at` |
| `playlists.takeover` | The override playlist, its media and when it ends |
| `active_media` | What the background playlist currently resolves to |
| `upcoming_schedules` | Every scheduled run in the next month, soonest first |
| `media_cache` | Per file `status`, `size`, `owners`; plus totals, budget, `failed_sync_attempts` |
| `watchdog` | Heartbeats for `poll` / `schedule` / `playback`, which are `stalled`, the last fatal error, and the recovery count and throttle state |
| `players` | Per player: `state`, `item_index`, `progress_percent`, `playing`, `queue`, `mid_play_through` |

Timestamps are ISO strings; `"never"` means it has not happened yet.

Media entries carry an `invalid_reason` when the player is refusing to show
them — usually a validity window that has not opened or has passed.

## Enabling debug output

Application logs are gated behind `window.debug`. Signage ships with
`debug: true` in its settings, so they are normally on; if not:

```js
window.debug = true; // takes effect for subsequent messages
```

Messages are prefixed `[<APP>][<scope>]`. Useful scopes: `Signage` (polling,
schedules, overrides), `MediaCache` (downloads, pruning), `MediaPlayer`
(playback, load failures), `CACHE` (service worker updates), `ACCESS` (route
guard), `BOOTSTRAP`.

With debug settings on you also get `window.app.settings`, `window.setting(key)`
and `window.app.org`.

## On-screen debug mode

Append `?debug=true` to the player route:

```
/#/signage/<system_id>?debug=true
```

Adds playback controls, the playlist panel, a time-travel panel for testing
schedules, and the version/playing-item footers. The setting persists in
`sessionStorage` (`SIGNAGE.debug`); `?debug=false` turns it off. Debug mode also
makes the display request use `?preview=true`.

## Symptom → what to check

| Symptom | Check |
| --- | --- |
| Nothing on screen | `state().active_media` — empty means nothing is scheduled now; check `upcoming_schedules` |
| Content scheduled but not showing | `active_media[].invalid_reason`, and `cached` / `loading` on the same entry |
| Stuck on old content | `poll.last_success` and `poll.next_due`; run `signage.poll()` |
| Not picking up new content | `poll.last_success` vs now; if stale, look for `Display poll failed` in the console |
| Media never appears | `media_cache.files` for that URL — `invalidated` means the download failed; `failed_sync_attempts` shows the backoff |
| Old version running | `updates.new_version`, `updates.reload_pending` (a reload waits for the network and for play-through content to finish), `updates.last_check` |
| Blank screen after a reboot | Likely offline boot — check `online`, then whether cached credentials exist |
| Player reloading itself | `watchdog.recent_reloads` and `watchdog.last_error` — something fatal stalled a core loop |

## Recovery watchdog

The player reloads itself when one of its core loops stops checking in:
polling, schedule evaluation or playback. Each beats far more often than its
stall threshold, so a stalled signal means that timer chain is dead rather than
idle. No error is required — most stalls worth recovering from raise none — but
any fatal error is recorded and reported alongside the stall.

The heartbeats measure the player's own machinery, not the backend. The poll
signal beats when a fetch is *attempted*, so a backend that has been down for
hours never triggers a recovery.

| Guard | Value |
| --- | --- |
| Stall thresholds | poll 10 min, schedule 5 min, playback 3 min |
| Grace before recovering | 5 min |
| Recoveries allowed | 3 per hour, then 1 per hour |
| Back to 3 per hour after | 2 hours with no recovery |

Once recoveries are throttled the next one clears the application cache first —
unregistering the service worker and deleting its caches — in case the cached
build is what is wrong. That only happens if `location.href` returns a 200, so a
player is never left with no cached application and no way to fetch a new one;
if the server cannot be reached it falls back to a plain reload.

A recovery reload does **not** wait for the network, unlike an update reload. A
stalled player should restart whether or not the backend is up, and it can boot
from cached credentials and cached content.

`watchdog.recoveries_throttled` and `watchdog.last_recovery` show where in that
sequence a player is.

## Storage

| Location | Holds |
| --- | --- |
| `localStorage["PlaceOS.SIGNAGE.display_details.<id>"]` | Last known display payload, used offline |
| `localStorage["PlaceOS.SIGNAGE.cached_files"]` | Media cache index (urls, sizes, owners) |
| `localStorage["PlaceOS.SIGNAGE.display"]` | Bootstrapped display id |
| `localStorage["PLACEOS.org.*"]` | Cached zone data and last known authority |
| `localStorage["PlaceOS.SIGNAGE.watchdog_reloads"]` | Timestamps of automatic recoveries |
| `sessionStorage["SIGNAGE.debug"]`, `["SIGNAGE.muted"]` | Debug and mute state |
| IndexedDB `SignageMedia` → `files` | The cached media files themselves |

## Resetting

```
/#/bootstrap?clear=true        clear the bootstrapped display
/#/bootstrap?display=<id>      bootstrap straight to a display
```

`Ctrl + Alt + Shift + M` reloads in mock mode (repeat to exit).
`Ctrl + Alt + Shift + D` toggles dark mode.

To clear cached media, delete the `SignageMedia` IndexedDB database and the
`PlaceOS.SIGNAGE.cached_files` key, then reload.
