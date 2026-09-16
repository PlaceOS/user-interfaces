# Signage App User Stories

## Overview

The Signage app is a kiosk-style digital signage player. It bootstraps a device to a PlaceOS signage system, fetches that display's mapped playlists, plays images, videos, webpages, and plugins, supports scheduled or triggered takeovers, caches media locally, exposes debug controls, accepts simple parent-frame playback commands, and reports playback metrics.

---

## Bootstrap & Setup

### US-SIG-001: Select a Signage Display

**As a** facility manager  
**I want to** select a signage-enabled display from the bootstrap screen  
**So that** the device plays content for the correct physical display

**Acceptance Criteria:**

- Bootstrap is available at `/#/bootstrap` and requires an authorised user.
- The display selector lists signage-enabled systems returned from PlaceOS.
- Each display option shows the display name plus its building and level when available.
- The submit action is disabled until a display is selected.
- Selecting a display and submitting stores the display ID in localStorage under `PlaceOS.SIGNAGE.display`.
- After bootstrap, the app navigates to `/#/signage/:system_id`.

---

### US-SIG-002: Reuse Stored Display Configuration

**As a** facility manager  
**I want to** have the selected display remembered between sessions  
**So that** the signage device can recover after restart without manual setup

**Acceptance Criteria:**

- On bootstrap, the app checks localStorage for `PlaceOS.SIGNAGE.display`.
- If a stored display ID exists, the app navigates automatically to `/#/signage/:system_id`.
- The app also reads `OSK.enabled` from localStorage and enables the virtual keyboard when the value is `true`.
- The bootstrap screen can clear stored signage bootstrap data when opened with `?clear=true`.
- Clearing removes both the current display key and the legacy `PlaceOS.SIGNAGE.building` key.

---

### US-SIG-003: Bootstrap via URL Parameters

**As a** system administrator  
**I want to** configure a display from URL parameters  
**So that** kiosk provisioning can be automated

**Acceptance Criteria:**

- `display=<system_id>` on the bootstrap route sets the active display and immediately bootstraps the panel.
- `clear=true` on the bootstrap route clears stored bootstrap data before normal bootstrap checks complete.
- A valid `display` parameter navigates to `/#/signage/:system_id`.
- The app remains stable when legacy or unsupported parameters, such as `building`, are present.

---

### US-SIG-004: Redirect Uninitialised Displays

**As a** content viewer  
**I want to** be redirected to setup when no display has been selected  
**So that** an unconfigured signage device does not remain on an empty player

**Acceptance Criteria:**

- `/#/signage/:system_id` starts playback for the provided display ID.
- `/#/signage` without a display ID starts a 3 second bootstrap timeout.
- If no display ID is supplied before the timeout expires, the app redirects to `/#/bootstrap`.
- The bootstrap page allows the display to be selected or restored from storage.

---

## Display Data & Playlist Selection

### US-SIG-005: Load Display Configuration

**As a** signage player  
**I want to** fetch my display configuration from PlaceOS  
**So that** I can play the current playlist mappings for my system and zones

**Acceptance Criteria:**

- The app calls the PlaceOS signage endpoint for the active display ID.
- Requests include preview context when debug mode is enabled and include the currently playing item ID when available.
- After a successful response, later requests send its `ETag` and `Last-Modified` values as `If-None-Match` and `If-Modified-Since`.
- Display requests bypass the browser cache, and a `304 Not Modified` response keeps the current display configuration.
- The latest display configuration is cached in localStorage under a display-specific `PlaceOS.SIGNAGE.display_details.<display_id>` key.
- Legacy cached configuration under `PlaceOS.SIGNAGE.display_details` can still be used as a fallback.
- If the API request fails, the app falls back to the cached display configuration only when it matches the active display ID.
- Unchanged responses keep the current parsed display, trigger bindings, media cache, and playlist state.
- Display configuration refreshes every 60 seconds.

---

### US-SIG-006: Build the Active Playlist

**As a** content viewer  
**I want to** see media from the display and its zones  
**So that** the screen shows the content assigned to its location

**Acceptance Criteria:**

- The active playlist includes enabled playlists mapped directly to the display.
- The active playlist also includes enabled playlists mapped to the display's zones.
- Playlist media is ordered by the playlist media list unless the playlist is configured as random.
- Random playlists are shuffled before playback.
- Disabled playlists are excluded.
- Scheduled playlists are included in normal playback only when they have an active non-takeover schedule.
- Takeover schedules are excluded from normal playback and handled as overrides.
- The app rejects signage media that embeds the same display, and rejects nested signage-player embeds when already running inside another frame.

---

## Media Playback

### US-SIG-007: Display Image Media

**As a** content viewer  
**I want to** see image media on the signage screen  
**So that** static content is visible in the display rotation

**Acceptance Criteria:**

- Image items render through the image layer.
- Images use object-contain sizing and remain centred within the screen.
- Images play for their configured media duration, playlist default duration, or 15 seconds when no duration is configured.
- The player advances automatically after the effective duration.

---

### US-SIG-008: Play Video Media

**As a** content viewer  
**I want to** watch video media on the signage screen  
**So that** animated content can be included in the display rotation

**Acceptance Criteria:**

- Video items render through the video layer.
- Videos use object-contain sizing and remain centred within the screen.
- Video playback starts automatically when the item becomes active.
- Debug time speed changes update video playback rate.
- Videos are muted automatically when debug time speed is 4x or faster.
- If browser video playback is blocked, the player pauses cleanly instead of repeatedly failing.
- Debug controls can mute and unmute video playback.

---

### US-SIG-009: Display Webpage Media

**As a** content viewer  
**I want to** see webpage media on the signage screen  
**So that** live web content can be included in the display rotation

**Acceptance Criteria:**

- Webpage items render in an iframe.
- Playback timing starts after the iframe load event plus a 2 second reveal delay.
- If a webpage never reports load, playback continues after a 15 second wait.
- Webpage items play for their configured effective duration.
- A single valid webpage item remains loaded instead of reloading on every loop.
- Upcoming webpage items can be preloaded on the inactive output shortly before transition.
- Webpage media is not cached as a local file.

---

### US-SIG-010: Display Plugin Media

**As a** content viewer  
**I want to** see plugin-based signage content  
**So that** dynamic PlaceOS plugin experiences can appear in the display rotation

**Acceptance Criteria:**

- Plugin media renders through `plugin-embed`.
- Plugin config combines plugin defaults with media-specific plugin parameters.
- When a plugin reports `ready`, the player sends config and then a play signal.
- If a plugin does not report load or ready, the player sends config after a 15 second wait.
- Static plugins follow the configured effective duration.
- Play-through plugins advance when they report `finished`.
- Interactive plugins can request a new playback duration through plugin interaction events.
- Upcoming plugin items can be preloaded on the inactive output shortly before transition.
- Fatal plugin errors advance to the next media item.

---

### US-SIG-011: Animate Media Transitions

**As a** content viewer  
**I want to** see configured transitions between media items  
**So that** playback feels polished without disrupting content

**Acceptance Criteria:**

- Cut transitions switch without slide or fade animation.
- Slide transitions support top, left, right, and bottom directions.
- CrossFade transitions blend from the previous layer to the active layer.
- The animation duration uses `app.default_animation_time`, falling back to the player default.
- Transitions are skipped when there is only one valid active item.
- Transition state is exposed in debug controls through the progress indicator.

---

## Playlist Controls

### US-SIG-012: Cycle Through Playlist Items

**As a** content viewer  
**I want to** see valid media items cycle automatically  
**So that** assigned content plays without user interaction

**Acceptance Criteria:**

- Playback starts at the first valid item when the player has a playlist.
- Items advance automatically when their effective duration expires.
- The player skips media that is not currently valid.
- When a changed playlist still contains the currently playing item, the current item is held over before the updated playlist continues.
- If no valid items exist, the player retries item selection every 5 seconds.
- If media URL resolution hangs or fails, the player waits briefly, skips the failed item when possible, and retries the playlist after a short delay when every valid item has failed.

---

### US-SIG-013: Control Loop Mode in Debug

**As a** system administrator  
**I want to** change loop behaviour in debug mode  
**So that** I can test playlist endings and repeated content

**Acceptance Criteria:**

- Debug controls include a loop toggle.
- Loop modes cycle through `ALL`, `ONE`, and `NONE`.
- `ALL` repeats the playlist continuously.
- `ONE` repeats the current item.
- `NONE` pauses playback after the playlist reaches the end.

---

### US-SIG-014: Shuffle Playlist in Debug

**As a** system administrator  
**I want to** shuffle playlist order in debug mode  
**So that** I can test randomized playback behaviour

**Acceptance Criteria:**

- Debug controls include a shuffle toggle.
- Enabling shuffle randomizes the current playlist while keeping the current item first.
- Disabling shuffle restores the source playlist order.
- Shuffle state is reflected by the debug control icon state.

---

### US-SIG-015: Use Manual Playback Controls

**As a** system administrator  
**I want to** manually control media playback in debug mode  
**So that** I can inspect and test content quickly

**Acceptance Criteria:**

- Debug mode shows play or pause, previous, next, mute, loop, and shuffle controls.
- Play and pause preserve current item progress.
- Previous and next move to valid playlist items.
- Mute and unmute update the active video element.
- A progress bar shows playback progress and exposes elapsed duration through its tooltip.

---

### US-SIG-016: View and Select Playlist Items

**As a** system administrator  
**I want to** inspect the active playlist in debug mode  
**So that** I can verify the content assigned to the display

**Acceptance Criteria:**

- Debug mode shows a playlist sidebar by default.
- A queue button toggles the playlist sidebar.
- The sidebar lists each media item name, playlist name, and duration.
- The currently playing item is highlighted.
- Item tooltips show playlist, media type, duration, validity, cache status, and validation errors when present.
- Invalid items are disabled and shown with an error state.
- Cached items show an offline indicator.
- Selecting a valid item jumps playback to that item.
- The sidebar shows the total number of playlist items.

---

## Scheduling & Overrides

### US-SIG-017: Restrict Media by Date Window

**As a** content manager  
**I want to** restrict media and playlist content by valid dates  
**So that** time-sensitive content only plays during its configured window

**Acceptance Criteria:**

- Media with a future `valid_from` value is treated as invalid.
- Media with a past `valid_until` value is treated as invalid.
- Playlist validity windows are combined with media validity windows when media items are built.
- Scheduled playlist windows are also combined with playlist and media validity windows.
- Invalid items are skipped during playback and shown as invalid in debug playlist view.
- Invalid debug messages identify whether the playlist, media item, or both supplied the active validity boundary.

---

### US-SIG-018: Run Scheduled Non-Takeover Playlists

**As a** content manager  
**I want to** schedule playlists into the normal rotation  
**So that** timed content can join regular playback without interrupting it

**Acceptance Criteria:**

- A scheduled playlist with `play_takeover` disabled is included in normal playback only while its schedule is active.
- `play_at` schedules support Unix timestamps in seconds or milliseconds.
- `play_cron` schedules support recurring cron-based activation.
- `play_period` controls the active window in minutes.
- When `play_period` is missing, the default active window is 24 hours.
- Schedule activation is re-evaluated every 15 seconds, or faster while debug time is accelerated.

---

### US-SIG-019: Run Scheduled Takeover Playlists

**As a** content manager  
**I want to** schedule takeover playlists  
**So that** urgent or time-specific content can interrupt regular playback

**Acceptance Criteria:**

- A scheduled playlist with `play_takeover` enabled is rendered as an override player above normal playback.
- The normal player is paused while an override is active.
- Multiple active takeover playlists can be combined into the override playlist.
- The override ends at the scheduled end time when `play_period` is greater than zero.
- A scheduled takeover with `play_period` set to zero uses a short activation window, plays a single pass, and then clears.
- Clearing a scheduled override records its schedule key so the same activation is not immediately retriggered.

---

### US-SIG-020: Trigger Override Playlists

**As a** system integrator  
**I want to** activate override playlists from PlaceOS trigger variables  
**So that** external systems can take over signage content

**Acceptance Criteria:**

- Playlist mappings whose keys start with `trig-` are treated as trigger mappings.
- The app subscribes to matching variables on the display's `_TRIGGER__1` module.
- When a trigger fires and no override is active, the mapped enabled playlists are converted to override media.
- Trigger overrides are ignored when an override is already active.
- Trigger overrides play once and clear after the override playlist completes.

---

### US-SIG-021: Close Overrides in Debug

**As a** system administrator  
**I want to** close an active override in debug mode  
**So that** I can resume normal playback during testing or operations

**Acceptance Criteria:**

- Debug mode shows an override header when an override player is active.
- The header displays the override playlist name when available.
- The header marks the player as an override.
- The close action clears the override playlist.
- Normal playback resumes after the override is cleared.

---

## Debug & Remote Control

### US-SIG-022: Enable Debug Mode

**As a** system administrator  
**I want to** enable debug mode from the URL  
**So that** I can troubleshoot a signage display

**Acceptance Criteria:**

- `debug` query parameter enables debug mode unless its value is `false`.
- Debug state is stored in sessionStorage under `SIGNAGE.debug`.
- A stored debug state is restored when the signage route loads.
- Debug mode shows time controls, media controls, the playlist toggle, playlist details, and the currently playing media ID.
- `debug=false` disables debug mode and stores that disabled state.
- Mute state is stored for the browser session under `SIGNAGE.muted`.

---

### US-SIG-023: Override Time in Debug

**As a** system administrator  
**I want to** override the app's current time in debug mode  
**So that** I can verify scheduled content without waiting for real time to pass

**Acceptance Criteria:**

- Debug mode shows a time control with the current effective time.
- The control allows selecting a date and time.
- Progression can be frozen at `0x` or advanced at `0.5x`, `1x`, `2x`, `4x`, `8x`, or `16x`.
- The control includes quick actions for now, one hour back, and one hour forward.
- Clearing the override restores the real system time.
- Schedule checks use the effective time from the time helper.
- Debug time speed also controls video playback rate.

---

### US-SIG-024: Pause and Resume from a Parent Frame

**As a** host application  
**I want to** pause and resume signage through postMessage  
**So that** embedded signage can be coordinated with a parent shell

**Acceptance Criteria:**

- The signage panel listens for object postMessage payloads.
- A payload with `type: 'signage:pause'` pauses all player instances.
- A payload with `type: 'signage:resume'` resumes all player instances.
- Unknown payloads are ignored.
- The message listener is removed when the panel is destroyed.

---

## Offline Support & Caching

### US-SIG-025: Cache Media Locally

**As a** system administrator  
**I want to** cache media files locally on the device  
**So that** signage playback can survive network interruptions

**Acceptance Criteria:**

- Non-webpage and non-plugin media URLs are requested for local caching.
- Media files are stored in IndexedDB in the `SignageMedia` database.
- Cache metadata is persisted in localStorage under `PlaceOS.SIGNAGE.cached_files`.
- Cache status moves through preparing, downloading, storing, and cached states.
- Upload API media requests apply a short-lived authentication cookie before fetching.
- Cached media is served to the player as object URLs.
- Cache ownership is tracked per display so one display can prune its files without removing media still owned by another display.

---

### US-SIG-026: Maintain the Media Cache

**As a** signage player  
**I want to** keep the local media cache aligned with the current display configuration  
**So that** storage is not wasted on stale content

**Acceptance Criteria:**

- When display configuration changes, the app requests caching for current media URLs.
- Cached URLs that are no longer referenced by the display are invalidated.
- Cache pruning keeps the current display's priority URLs first and enforces a per-owner storage limit.
- Embedded signage players avoid pruning files owned by other displays.
- Failed cache requests schedule a retry after 15 seconds.
- Media currently preparing, downloading, or storing waits for a final cached or invalidated state before playback tries to use it.
- Invalidated media resolves as unavailable instead of throwing through playback.

---

### US-SIG-027: Preload Nearby Media URLs

**As a** content viewer  
**I want to** have nearby playlist items prepared before playback reaches them  
**So that** transitions are less likely to wait on media loading

**Acceptance Criteria:**

- The player prepares URLs for the current item, two previous items, and two next items.
- Plugin media is skipped because it does not need a prefetched file URL.
- Object URLs outside the nearby window are revoked.
- If an active item's URL is not ready, the player waits and retries item selection.
- Webpage and plugin outputs are prepared on the inactive layer near the end of the current item so they can be revealed after loading.

---

## Metrics & Analytics

### US-SIG-028: Track Playback Metrics

**As a** content manager  
**I want to** track media and playlist playback counts  
**So that** signage engagement can be reported

**Acceptance Criteria:**

- A media count is recorded when a valid item advances after more than 50% progress.
- A playlist count is recorded when playback advances beyond the last valid item for a playlist.
- A playlist play-through count is recorded when the last valid item for a playlist advances after more than 50% progress.
- Playlist counts and play-through counts are not stored for random playlists.
- Metrics are tracked separately for media counts, playlist counts, and play-through counts.

---

### US-SIG-029: Report Metrics to PlaceOS

**As a** content manager  
**I want to** send signage metrics to PlaceOS  
**So that** playback reporting is available outside the device

**Acceptance Criteria:**

- Metrics are checked for posting every 10 minutes.
- Empty metrics are not posted.
- Non-empty metrics are posted to `/api/engine/v2/signage/:display_id/metrics`.
- Metric posting is delayed by a random offset of up to 60 seconds to avoid synchronized device traffic.
- Metrics are cleared only after a successful post.
- Failed posts leave metrics available for the next posting attempt.

---

## Error Handling & Access

### US-SIG-030: Handle Missing or Invalid Media

**As a** content viewer  
**I want to** have missing or invalid media handled gracefully  
**So that** playback continues whenever other valid content exists

**Acceptance Criteria:**

- Items without usable media IDs are considered invalid.
- Future and expired items are skipped.
- Items without ready URLs are retried instead of crashing playback.
- Hanging URL resolution is capped so a single item cannot block playback indefinitely.
- Image and video load failures skip to other valid items when available.
- When all valid media fails to load, the player pauses the failure loop and retries after 30 seconds.
- Fatal plugin errors advance to the next item.
- Debug playlist view shows invalid items with an error indicator.
- If the playlist has no valid items, playback remains stable and retries selection.

---

### US-SIG-031: Protect Signage Routes

**As a** system administrator  
**I want to** restrict signage setup and playback to authorised users  
**So that** unauthorised users cannot operate signage displays

**Acceptance Criteria:**

- Bootstrap and signage routes use `AuthorisedUserGuard`.
- The unauthorised route renders the shared unauthorised component.
- Unknown routes redirect to bootstrap.
- The app remains stable when an invalid display ID is supplied.
