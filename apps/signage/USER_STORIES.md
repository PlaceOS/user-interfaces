# Signage App User Stories

## Overview

The Signage app is a digital signage display management system for displaying media content (images, videos, webpages) on building displays with scheduling, caching, and playback controls.

---

## Bootstrap & Setup

### US-SIG-001: Select Display from List

**As a** facility manager
**I want to** select a signage display from a list of available displays
**So that** I can configure the kiosk to show content for that specific display

**Acceptance Criteria:**

- Display list shows all signage-enabled systems
- Each display shows building and level/floor information
- Selecting a display saves the configuration to localStorage
- After selection, the app navigates to the signage display page

---

### US-SIG-002: Persist Display Configuration

**As a** facility manager
**I want to** have my display selection remembered between sessions
**So that** I don't have to reconfigure the kiosk after a restart

**Acceptance Criteria:**

- Selected building ID is saved to localStorage
- Selected display ID is saved to localStorage
- On app restart, previously selected display loads automatically
- User can clear saved configuration if needed

---

### US-SIG-003: Bootstrap via URL Parameters

**As a** system administrator
**I want to** configure a display using URL parameters
**So that** I can automate kiosk provisioning without manual interaction

**Acceptance Criteria:**

- `building` query parameter sets the building filter
- `display` query parameter sets the selected display
- `clear_cache` query parameter clears cached configuration
- App auto-navigates to signage display when parameters are valid

---

## Media Playback

### US-SIG-004: Display Images

**As a** content viewer
**I want to** see images displayed on the signage screen
**So that** I can view static visual content

**Acceptance Criteria:**

- JPEG, PNG, and WebP images are supported
- Images display for the configured duration
- Images scale appropriately to fill the display
- Images transition smoothly to the next media item

---

### US-SIG-005: Play Videos

**As a** content viewer
**I want to** watch videos on the signage screen
**So that** I can view dynamic visual content

**Acceptance Criteria:**

- MP4 and WebM videos are supported
- Videos play for their full duration (or configured duration if shorter)
- Videos can be muted/unmuted
- Videos transition smoothly when complete

---

### US-SIG-006: Display Web Content

**As a** content viewer
**I want to** see web pages displayed on the signage screen
**So that** I can view live web-based content

**Acceptance Criteria:**

- Web pages display in an iframe
- Content displays for the configured duration
- Web pages are responsive to the display size
- Content transitions smoothly to the next item

---

### US-SIG-007: Animate Media Transitions

**As a** content viewer
**I want to** see smooth transitions between media items
**So that** the content display feels professional and polished

**Acceptance Criteria:**

- Cut transition switches instantly between items
- Slide transitions animate from top, left, right, or bottom
- CrossFade transitions smoothly blend between items
- Animation duration is configurable (default 1000ms)
- Transitions work for all media types

---

## Playlist Management

### US-SIG-008: Cycle Through Playlist

**As a** content viewer
**I want to** see media items cycle automatically through the playlist
**So that** all scheduled content is displayed

**Acceptance Criteria:**

- Media items display in playlist order
- Each item displays for its configured duration
- Playlist advances automatically without user interaction
- Invalid items are skipped automatically

---

### US-SIG-009: Loop Playlist

**As a** content manager
**I want to** have playlists loop continuously
**So that** content displays indefinitely without intervention

**Acceptance Criteria:**

- Loop ALL mode repeats the entire playlist
- Loop ONE mode repeats a single media item
- Loop NONE mode stops after playlist completes
- Loop mode is configurable per display

---

### US-SIG-010: Shuffle Playlist

**As a** content manager
**I want to** shuffle playlist order randomly
**So that** content appears fresh and varied to viewers

**Acceptance Criteria:**

- Shuffle mode randomizes playlist order
- Current playing item remains first after shuffle
- Shuffle can be toggled on/off
- Shuffle state is indicated visually in debug mode

---

### US-SIG-011: Skip Invalid Media Items

**As a** content viewer
**I want to** have invalid media items skipped automatically
**So that** playback continues without interruption

**Acceptance Criteria:**

- Media outside valid date range is skipped
- Media outside play hours is skipped
- Unavailable media URLs are skipped
- Error indicators show in debug mode for invalid items

---

## Content Scheduling

### US-SIG-012: Time Window Restrictions

**As a** content manager
**I want to** set valid date ranges for media items
**So that** content only displays during appropriate periods

**Acceptance Criteria:**

- `valid_from` timestamp restricts content start date
- `valid_until` timestamp restricts content end date
- Content outside valid window is excluded from playlist
- Debug mode shows validity status for each item

---

### US-SIG-013: Play Hours Restrictions

**As a** content manager
**I want to** set time-of-day restrictions for media items
**So that** content only displays during appropriate hours

**Acceptance Criteria:**

- Play hours can be set (e.g., "09:00-17:00")
- Content outside play hours is excluded from playlist
- Multiple time ranges can be specified
- Validation respects local timezone

---

### US-SIG-014: Override Playlists

**As a** content manager
**I want to** interrupt normal playback with override content
**So that** I can display urgent or scheduled announcements

**Acceptance Criteria:**

- Override playlists interrupt normal playback immediately
- Override playlists have configurable duration
- Normal playback resumes after override expires
- Override playlists can be closed manually in debug mode

---

### US-SIG-015: Schedule Content with Timestamps

**As a** content manager
**I want to** schedule content to play at specific times
**So that** announcements appear exactly when needed

**Acceptance Criteria:**

- `play_at` timestamp triggers single execution
- Content plays within ±18 seconds of scheduled time
- Scheduled content overrides normal playlist
- Duration controls how long override plays

---

### US-SIG-016: Schedule Content with CRON

**As a** content manager
**I want to** schedule recurring content using CRON expressions
**So that** announcements repeat on a regular schedule

**Acceptance Criteria:**

- 5-field CRON expressions are supported
- CRON schedules trigger within 28-second window
- Common patterns work (e.g., "0 9 * * MON-FRI")
- Recurring content overrides normal playlist each trigger

---

### US-SIG-017: Trigger-Based Overrides

**As a** system integrator
**I want to** trigger playlist overrides via PlaceOS signals
**So that** external systems can control signage content

**Acceptance Criteria:**

- PlaceOS trigger variables activate override playlists
- Trigger-based overrides prevent overlapping activations
- Override duration is respected
- Normal playback resumes after trigger override expires

---

## Debug & Testing

### US-SIG-018: Enable Debug Mode

**As a** system administrator
**I want to** enable debug mode via URL parameter
**So that** I can test and troubleshoot signage displays

**Acceptance Criteria:**

- `?debug=true` query parameter enables debug mode
- Debug controls appear at bottom of screen
- Playlist sidebar becomes visible
- Time controls become accessible

---

### US-SIG-019: Manual Playback Controls

**As a** system administrator
**I want to** manually control media playback
**So that** I can test content without waiting for auto-advance

**Acceptance Criteria:**

- Play/Pause button toggles playback
- Skip Next advances to next media item
- Skip Previous returns to previous item
- Mute/Unmute controls audio
- Progress bar shows current duration

---

### US-SIG-020: Override System Time

**As a** system administrator
**I want to** override the system time for testing
**So that** I can verify scheduled content without waiting

**Acceptance Criteria:**

- Time picker allows selecting specific date/time
- Static mode freezes time at selected moment
- Progressive mode advances from selected moment
- Clear button restores actual system time
- Scheduled content responds to overridden time

---

### US-SIG-021: View Playlist Contents

**As a** system administrator
**I want to** view the current playlist in a sidebar
**So that** I can verify which content is scheduled

**Acceptance Criteria:**

- Playlist sidebar shows all media items
- Currently playing item is highlighted (blue with animation)
- Invalid items show error indicators (red)
- Duration displays for each item
- Click on item jumps to that content
- Total playlist length counter is shown

---

## Offline Support & Caching

### US-SIG-022: Cache Media Locally

**As a** system administrator
**I want to** cache media files locally on the device
**So that** content displays even during network outages

**Acceptance Criteria:**

- Media files are cached to IndexedDB
- Cache status shows: Preparing → Downloading → Storing → Cached
- Cached media plays from local storage
- Cache falls back to live streaming if unavailable

---

### US-SIG-023: Preload Upcoming Media

**As a** content viewer
**I want to** have upcoming media preloaded
**So that** transitions are smooth without loading delays

**Acceptance Criteria:**

- Current item ±2 items are preloaded
- Object URLs are created for cached media
- Unused URLs are revoked to prevent memory leaks
- Failed preloads retry automatically

---

### US-SIG-024: Offline Display Configuration

**As a** system administrator
**I want to** have display configuration cached locally
**So that** the display works during network outages

**Acceptance Criteria:**

- Display configuration is stored in localStorage
- 304 Not Modified optimization prevents unnecessary downloads
- Cached configuration loads when API is unavailable
- Configuration refreshes every 60 seconds when online

---

## Metrics & Analytics

### US-SIG-025: Track Media Views

**As a** content manager
**I want to** track how many times each media item is viewed
**So that** I can measure content engagement

**Acceptance Criteria:**

- View is counted when >50% of duration is watched
- Individual media play counts are tracked
- Playlist start counts are tracked
- Full playlist completions are tracked

---

### US-SIG-026: Report Metrics to Backend

**As a** content manager
**I want to** have metrics reported to the backend
**So that** I can analyze signage performance

**Acceptance Criteria:**

- Metrics are posted to backend every 10 minutes
- Media count, playlist count, and play-through count are reported
- Metrics are cleared after successful posting
- Failed posts are retried on next interval

---

## Error Handling

### US-SIG-027: Handle Missing Media

**As a** content viewer
**I want to** have missing media handled gracefully
**So that** playback continues without errors

**Acceptance Criteria:**

- Missing URLs retry every 5 seconds
- After retries fail, item is skipped
- Debug mode shows error status for failed items
- Playback continues with remaining valid items

---

### US-SIG-028: Redirect Unauthorized Users

**As a** system administrator
**I want to** redirect unauthorized users appropriately
**So that** unauthenticated displays show a clear error

**Acceptance Criteria:**

- Unauthorized access redirects to `/unauthorised` page
- Error message explains the authorization issue
- User can attempt to re-authenticate
- Bootstrap page is accessible for reconfiguration

---

### US-SIG-029: Auto-Redirect Uninitialized Displays

**As a** content viewer
**I want to** have uninitialized displays redirect to setup
**So that** displays always show content or configuration

**Acceptance Criteria:**

- Displays without system_id redirect to bootstrap after 3 seconds
- Timeout prevents indefinite loading states
- Bootstrap page allows display selection
- Valid configuration navigates back to signage display

---

## Accessibility

### US-SIG-030: On-Screen Keyboard

**As a** facility manager
**I want to** use an on-screen keyboard for touch interfaces
**So that** I can configure displays without a physical keyboard

**Acceptance Criteria:**

- Virtual keyboard is available for text input
- Keyboard supports standard input operations
- Keyboard works on touch-enabled displays
- Keyboard can be dismissed when not needed
