# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### Bug Fixes

#### Assets

- Restrict selection for disabled rooms PPT-2745

#### Bookings

- Show cancel series by default PPT-2682
- Use stored period for group edits PPT-2740

#### Common

- Update favourite signals immediately PPT-2695
- Recover stalled zone loading

#### Concierge

- Preserve parking bay zones when editing
- Bound parking booking pagination
- Resolve aliased hosts in booking views
- Load paginated data in 200-item pages
- Resolve room host names from attendees
- Fix management level selectors (PPT-2566)
- Connect survey save action PPT-2746
- Remove deleted asset from list PPT-2747
- Repair bulk asset endpoint PPT-2748

#### Events

- Preserve external host details
- Book room assets reliably PPT-2693
- Use attendee details for external hosts
- Resolve aliased host names
- Show aliased host name in event details
- Resolve host name from attendees
- Persist public event visibility PPT-2247
- Separate selected rooms from results PPT-2572
- Handle multi-room booking edge cases PPT-2572

#### Signage-manager

- Brand kit, layer layout and the save race
- The frontend defects found in the pre-push audit

#### Visitor-kiosk

- Retain accepted induction status PPT-2763
- Improve QR code scanning

#### Workplace

- Show recurring end date on booking success PPT-2694

### Features

#### Catering

- Support per-room orders PPT-2571

#### Common

- Log service worker status

#### Desks

- Support asset-backed resources

#### Events

- Support multi-location room bookings PPT-2572

#### Mocks

- Signage AI endpoints

#### Signage

- Apply templates to displays and zones PPT-2690

#### Signage-manager

- Add playlist bulk actions PPT-2689
- Add live template preview
- Add template details sidebar
- Allow managers to manage zones PPT-2758
- Add signage tag management PPT-2766
- Create and edit signage artwork with AI
- Name the engine behind the images
- Show the image being changed
- As many blocks of text as the poster needs
- Let a logo be added, since nothing stores one
- A branding page for the organisation
- Full screen AI modal, preview left, settings right
- A light and a dark logo, and words you drag
- Paragraphs, and any colour or face per block
- Attach images to a request and name them in the brief
- A switch for whether the poster wears the branding
- Branding is read only unless you are a sys admin
- Separate images to include from the style reference

### Refactor

#### Signage-manager

- Clean up AI support code

## [2608.1] - 2026-08-20

### Bug Fixes

#### Auth

- Wait for access data before checking guards
- Avoid unauthorised redirect during slow startup

#### Bookings

- Remove start clamping for all day bookings
- Prevent created at being sent to backend
- Check assignments for booking recipients
- Set group member desk names
- Fix type displayed on modal for checkout confirm
- Refresh state after checkout
- Retain selected desk level during loading (PROJ-1951)
- Fix signal error for desk select modal map
- Preserve recurrence end date PROJ-1953
- Keep multi-visitor placeholder email in sync
- Keep delegate host when editing a booking
- Edit visitor group bookings as a group
- Reposition parking autocomplete on scroll (PPT-2633)
- Load delegated visitor group siblings (PPT-2637)
- Migrate visitor groups to containers (PPT-2638)
- Sync edited host identity (PPT-2640)
- Use building timezone for clash checks
- Preserve visitor email on edit
- Save visitors against their own asset (PPT-2635)
- Treat assigned bookings as reserved resources (PPT-2469)
- Match visitor group siblings by group reference (PPT-2638)
- Keep user input entered while the booking form initialises
- Keep form input across the reset flows actually run
- Resolve current desk names
- Ignore ended visitor conflicts (PPT-2658)
- Retain cancelled booking history (PPT-2656)
- Hide cancel action after check-in
- Wait for current availability (PPT-2663)
- Serialize linked visitor bookings PPT-2662
- Filter desks by map level (PPT-2668)
- Hide check-in for unallocated parking
- Use stored recurrence end date PPT-2672
- Check in single occurrence of recurring bookings PPT-2674
- Roll back bookings when asset requests fail PPT-2678

#### Ci

- Restore nx test pipeline

#### Common

- Guard nested lookup against primitives
- Widen upload state type to unblock compilation
- Let fixed devices boot offline from cached state
- Prevent unhandled organisation retry errors

#### Components

- Contain dynamic map overlays

#### Concierge

- Normalise parking CSV imports
- Tweak level selections/defaults and resource booking paginations
- Filter unavailable parking spaces
- Improve booking rules list
- Isolate desk level selections by view
- Isolate level selections across sections
- Handle malformed locker metadata
- Export current desk list
- Load all parking booking pages
- Refine all-day parking labels
- Disable actions for cancelled parking bookings
- Prevent email template form buttons from submitting the form
- Export reports as csv with check-in time
- Prevent room modal map select button "submitting" the form
- Use configurable parking waitlist cutoff
- Update cancelled booking status
- Sort parking levels last on non-parking views (PPT-2566)
- Correct parking no-show reports (PPT-2565)
- Prevent broadcast recipient flicker (PPT-2400)
- Clarify overnight parking bookings
- Make three date tests independent of the runner timezone
- Tie the staff listing scroll timer to its effect
- Exclude rooms from broadcast recipients
- Reset desk booking levels (PPT-2566)
- Skip terminal bookings in reject all
- Allow removing visitor passes (PPT-2657)
- Save only application setting overrides
- Normalise legacy application logos
- Persist conflicting desk cancellations

#### Control

- Require explicit camera selection

#### Events

- Stop catering time sync loop
- Fix check to show notify new attendees option
- Limit attendee-only notifications for PPT-2514
- Prevent recurrence polluting form state
- Show attendee-only notify option again (PPT-2514)
- Warn on visitor meeting host changes (PPT-2375)
- Warn when changed host remains attendee (PPT-2640)
- Restore attendee-only notification option (PPT-2514)
- Preserve host in attendee list

#### Explore

- Correct parking map status query
- Apply all-day desk booking settings
- Make map legend collapsible on all views
- Align zone polygons with map
- More clear pin button to bottom right
- Separate area and sensor overlays (PPT-2639)
- Make the parking clamp test independent of the runner timezone
- Align desk booking dialog wording

#### Form-fields

- Restrict user search fields
- Add sorting to user search field
- Prevent dropdown form submission
- Preserve visitors on removal (PPT-2634)
- Ignore blank bookable hours ranges PPT-2641
- Remove only the clicked visitor from the list (PPT-2634)

#### Org

- Fallback to individual requests for settings metadata

#### Parking

- Complete registration number history
- Derive request status from the booking process state
- Correct request status field mapping

#### Signage

- Hold failed-initialisation restarts to the recovery limits
- Let an api-key player start with no network
- Stop a version update navigating away from the display

#### Signage-manager

- Let webpage media carry a thumbnail
- Stop bouncing permitted users to unauthorised

#### Uploads

- Report upload failures instead of reporting success

#### Visitor-kiosk

- Disable browser input autocomplete

#### Workplace

- Trim required parking plate numbers
- Skip hidden parking availability requests
- Require parking restriction selection
- Restore desk booking button after QR scan
- Cancel the group-booking timer when the success page is destroyed
- Expose visitor invite settings PPT-2666

### Features

#### Booking-panel

- Add configurable timeline

#### Bookings

- Consolidate assigned resource booking settings
- Confirm booking checkout
- Add UTM source to create and delete requests

#### Components

- Show settings source zones
- Dock settings debug panel
- Improve settings enum controls
- Stick expanded settings headers
- Add driver binding debug panel
- Add settings override actions

#### Concierge

- Add site attendance graph for PPT-2564
- Add no show details to parking reports
- Add parking map availability time
- Show parking booking history
- Show desk booking history

#### Events

- Notify only new attendees for PPT-2514

#### Explore

- Add configurable map overlay toggles

#### Signage

- Hold application reloads until they are safe to apply
- Add window.signage console diagnostics
- Add a stall-based recovery watchdog
- Add template player

#### Signage-manager

- Add save hotkeys to form modals
- Let plugins render their own thumbnails
- Scope zone search to selected hierarchy
- Initial implementation for templates
- Add display management PPT-2673
- Add template media backgrounds
- Show media tag counts PPT-2554
- Search existing tags when tagging media PPT-2676
- Show groups signage items are shared with PPT-2679
- Add template approval workflow
- Add template sharing

#### Visitor-kiosk

- Separate check-in and checkout flows

#### Workplace

- Add parking restriction radio options
- Add parking plate history
- Add meeting notes reset

### Performance

#### Common

- Show cached organisation data while the latest loads
- Show cached translations while the latest load
- Show cached user details while the latest load

### Refactor

#### Locale

- Prune dead keys, de-dup shared strings, drop _N plurals

### Styling

#### Components

- Refine settings panel header

## [2607.1] - 2026-07-06

### Bug Fixes

#### Assets

- Update parking space pipe to return unallocated for unallocated spaces
- Fix resource assets using newer duplicate categories and types for resolution

#### Auth

- Preserve mobile auth cookies

#### Booking

- Add guard for form cross-contamination

#### Bookings

- Preserve monthly review recurrence PPT-2526
- Prevent asset option update loop
- Fix required conditional for plate number on booking form
- Defer booking requests until consumed
- Debounce booked resource checks
- Reduce limit for booked resources requests
- Paginate booked resource lookup
- Remove using assigned_asset_name from name details
- Fix stale booking_end being used for clash check
- Update start/end to most strictly source from date/duration
- Combine booked with clashes for availability
- Tweak readiness gate for form state
- Restrict booking extension data
- Generalize reserved-resource booking restriction
- Read parking favourites from correct settings key

#### Common

- Initialise saved org location on load
- Break runtime import cycle between event and catering classes

#### Components

- Stop dynamic map injector signal loop
- Repair broken printable portal and debug console template
- Add missing TranslatePipe and SlicePipe imports to indoor-maps
- Add missing matInput to login form fields

#### Concierge

- Handle desk reject all instances PPT-2532
- Print individual desk QR codes PPT-2533
- Refresh desks after reject all
- Prevent parking level navigation loops
- Refresh desk rejection state PPT-2532
- Use actual booking times in attendance report
- Add ability to hide user list download button
- Read use_region and org init as signals for parking init
- Apply level zone to selector when switching to parking map view
- Delete assigned desk recurrences for current day when unassigned
- Fix user avatar initialising with empty user
- Clean up logic for room approvals
- Add bay number to parking booking searchable fields
- Debounce state service requests
- Handle stale desk rejection status
- Fix rejecting overlapping bookings on desk assignment
- Remove rejected from desk booking request
- Fix bookings modals not have the model passed to the form
- Fix locker infinite loop
- Update parking report columns
- Remove parking request submission info
- Update parking report downloads
- Save existing surveys via update instead of add

#### Events

- Return saved booking after post PPT-2462
- Enforce room booking rules in booking panel
- Keep submitted meeting success details
- Preserve selected meeting booking time
- Keep host permission error visible after host revert
- Add aria-labels to space filter selects

#### Explore

- Minor review fixes
- Clean up handling of disabled map resource states

#### Form-fields

- Remove monthly day recurrence option
- Guard date calendar invalid values
- Hide empty user in search field

#### Forms

- Start network requests from form load
- Wait for user before form initialisation

#### Mobile

- Add config to hide status bar and remove safe area
- Fix applying MDM system id to panel UIs
- Fix System ID MDM key
- Fix workplace safe zones for devices with notches

#### Org

- Rework default building init logic

#### Parking

- Keep approval requests out of waitlist
- Fix level selections persisting when selector is disabled/hidden

#### Uploads

- Handle token refreshes mid-upload

#### Visitor-kiosk

- Force host to null on registration form
- Prevent next button "submitting" the details form
- Keep registration host blank

#### Workplace

- Fix plate number validator propagating to other types
- Remove leading and trailing whitespace from parking request submission html
- Prevent user with reserved desk from booking by default
- Tweaks to parking request form location
- Stabilize signal migration
- Add style to top menu active item more obvious
- Hide expired deals
- Preserve parking request shift duration
- Fix parking form buttons submitting the form
- Fix lookup for location availability
- Prevent deleting ended bookings and events
- Keep ended bookings visible
- Repair broken timeline date handling and remove debug leftovers

### Features

#### Bookings

- Migrate booking form service to use signals

#### Components

- Add debug mode to dynamic map
- Show styles, actions, labels and features in map debug panel
- Add colour swatches and src truncation to map debug panel
- Improve map debug mappings

#### Concierge

- Hide parking user and vehicle tabs
- Add level SVG map editor
- Migrate day view to be signal based
- Migrate desks section to use signals
- Migrate reports to use signals
- Migrate zone and room management to use signals
- Migrate assets to use signals
- Migrate surveys and signage to use signals
- Migrate events, staff and url sections to use signals
- Migrate catering, poi, and visitor sections to use signals
- Migrate remaining logic to use signals
- Add warning to resource assignment for existing bookings
- Reject clashing assignment bookings and reject overlapping user bookings
- Split parking user and vehicle visibility

#### Events

- Migrate event form service to use signals

#### Maps

- Standardise rasterised resolutions for map images

#### Mobile

- Add MDM config support
- Add cleanup command
- Add MS Intune support to mobile apps

#### Signage-manager

- Add ability to upload multiple media items at once
- Add list and folder views to media list
- Paginate media, playlist and display requests
- Add support for distribution playlists

#### Visitor-kiosk

- Add virtual keyboard support

#### Workplace

- Hide locations without parking and add setting to hide locations on parking form
- Add ability to set meeting space from query parameter

### Refactor

#### Bookings

- Tweak plain variables for OnPush templates
- Clean up form service
- Clean up extension data for bookings

#### Components

- Replace svg-viewer map renderer with dynamic map

#### Concierge

- Migrate forms to signals
- Remove ChangeDetectionStrategy where appropriate
- Update button styles for tables
- Tweak week view styles for parking bookings
- Clean up styles for day view
- Improve table overflow for parking

#### Explore

- Convert explore services and map components to signals

#### Libs

- Migrate template state to signals

#### Signage-manager

- Migrate to signals
- Clean up signal related changes

#### Visitor-kiosk

- Migrate to use signals
- Remove Eager change detection

#### Workplace

- Remove ChangeDetectionStrategy where appropriate
- Tweak styles for topbar search
- Tweak styles for footer menu

## [2606.1] - 2026-06-04

### Bug Fixes

#### PPT-2509

- Preserve monthly recurrence week

#### PPT-2512

- Preserve recurrence end dates

#### Assets

- Reduce parking space asset requests

#### Booking-panel

- Fix error when parsing timezones

#### Bookings

- Use current user for resource rule checks
- Filter recurring desk clashes PPT-2507
- Count recurrence instances from first occurrence
- Preserve monthly room recurrence PPT-2509
- Handle empty booking saves
- Align group child resources
- Show failed group bookings on success
- Cleanup booking data before editing
- Fix saving visitor bookings for room bookings
- Preserve monthly room recurrence PPT-2509
- Preserve monthly weekday recurrence

#### Common

- Refresh token before uploading files
- Cache organisation metadata
- PPT-2518 preserve selected booking date
- Suppress bookable hours date warning for PPT-2518
- Cap desk booking duration to bookable hours PPT-2511

#### Concierge

- Prevent stale recurring approvals
- Hide empty booking levels
- Apply zones to parking spaces
- Isolate unsaved feature edits
- Cap report occupancy attendees
- Handle parking reassignment failures
- Filter report levels by resource type
- Limit parking map level selection
- Show deleted parking booking status
- Fix loading asset purchase orders
- Align parking week status display
- Hide parking week space names
- Show declined room bookings in red
- Respect bookable hours in room utilisation PPT-2506
- Apply desk all day default
- Use parking timezone for request times PROJ-1846
- Count daily unique attendance
- Keep attendance averages raw
- Fix room booking list display items
- Show timed cross-day parking bookings
- Correct site attendance reporting PPT-2451
- Show rejected bookings as declined in reports
- Show deleted desk bookings as disabled
- Hide level selector on site attendance report
- Align booking status terminology
- Exclude inactive attendance records
- Fix status display for desk bookings
- Keep attendance tables with print headers
- Avoid splitting attendance table blocks
- Tweak handling of event statuses when room mismatches occur
- Correct space report utilisation
- Scale parking action column with number of actions (PPT-1890)
- Show parking request notes PROJ-1882
- Scroll selected parking space into view
- Apply desk all day default
- Filter approved parking approvals PROJ-1896
- PROJ-1902 align parking request edit form
- Show vehicle type in parking bookings
- PROJ-1910 update room approval status
- Print visitor passes from guest list
- Hide declined room timeline bookings
- Hide cancelled timeline events immediately
- Apply desk duration rules PPT-2511

#### Events

- Block recurring room conflicts PPT-2510
- Preserve monthly recurrence weekday PPT-2509
- Fix saving room data (PROJ-1918)
- Use source calendar when editing booking host
- Align recurrence payloads with calendar backend
- Handle unavailable duration options

#### Explore

- Set desk asset id from map bookings
- Hide desk and parking tooltips on mobile
- Respect disabled map styles
- Disable hover tooltips for touch pointers

#### Form-fields

- Show selected user photo
- Correct recurrence instance end dates PPT-2513
- Limit recurrence instance count
- Prevent duplicate booking rule list items

#### Service-worker

- Harden update handling

#### Signage

- Harden media cache storage
- Handle plugin playback fallback
- Handle plugin errors and cleanup

#### Signage-manager

- Improve playlist schedule display
- Refresh translated labels
- Show preview load errors
- Handle failed media uploads

#### Workplace

- Show meeting success space level
- Apply parking recurrence end date
- Reset saved host after permission errors
- Persist host reset after permission check
- Show booking context in lists CDU-242
- Update parking request confirmation PROJ-1874
- Handle overnight parking shifts PROJ-1881
- Show restricted parking all-day window PROJ-1878
- Clean up desk success page
- Limit parking recurrence dates PROJ-1895
- Clamp recurrence dates
- Wait for settings before menu redirects

### Features

#### Auth

- Guard apps by subsystem read access

#### Bookings

- Add group booking containers
- Write app metadata to extension data
- Add rule host override settings
- Store parking request user groups

#### Catering

- Store menu items as assets

#### Common

- Show service worker update card

#### Concierge

- Hide levels without resources when listing bookings
- Add room booking list loading state
- Add attendance report people breakdown
- Show parking space features
- Report cancelled booking totals
- Show report inactive percentages
- Approve recurring parking bookings
- Add report metric guides
- Add parking request creation
- Add custom parking booking columns
- Make parking assignment map selectable PROJ-1891
- Add ability to disable delete action for room and desk booking
- Configure visitor action window
- Use user list for broadcast recipients
- Add broadcast email recipient groups

#### Explore

- Collapse mobile map legend

#### Lockers

- Store locker banks and lockers as assets

#### Parking

- Support manual approval request types
- Add setting to hide availability counters
- Add ability to prevent editing of allocated bookings

#### Public

- Add public events registration app

#### Service-worker

- Support automatic app reloads

#### Settings

- Add environment bar indicator

#### Signage

- Show awaiting review playlists
- Show media type icons in debug playlist

#### Signage-manager

- Added group support
- Add signage group management
- Add playlist scheduling options
- Target playlist approval requests
- Localize app text
- Add app translations

#### User

- Add loading and processing of user groups and permissions

#### Workplace

- Hide selected parking spaces
- Add notes option to parking request types
- Add embedded menu links
- Support external menu embed links
- Require parking request plate numbers by setting
- Default parking requests to desk building

### Performance

#### Common

- Cache org zones and bulk load metadata

### Refactor

#### Concierge

- Clarify attendance report logic

#### Signage

- Simplify media playback logic

## [2604.1] - 2026-04-28

### Bug Fixes

#### Assets

- Hide assets from being selected if category is hidden

#### Bookings

- Add all day option to visitor booking (PPT-2376)
- Fix display of desk name when booking desks
- Fix multiple issues with editing visitors
- Fix issues with visitor booking editing
- Fix display for desks in group bookings
- Add all day check to availability before posting booking

#### Catering

- Fix applying catering code to menu list
- Tweak logic to work correctly
- Fix removing orders with no items (PPT-2398)
- Fix calculating delivery time (PPT-2424)
- Fix applying delivery time changes (PPT-2424)

#### Concierge

- Fix saving visitor pass numbers (PPT-2291)
- Fix camera feed displays on remote support
- Cancel report requests when level/dates are changed
- Fix grabbing deleted desk bookings
- Fix printing desk QR codes (PPT-2373)
- Update desk bookings when building changes (PPT-2411)
- Update booking details on day view when no level is selected (PPT-2409)
- Keep historical bookings when changing desk assignments
- Preserve history of assigned parking space bookings
- Preserve history of assigned locker bookings
- Fix ending bookings for assigned resources (PPT-2427)
- Add error handling to desk assignment errors
- Improve UX for booking rules modal
- Fix handling desk re-assignment failures
- Fix desync of visitor list state when switching views (PPT-2475)
- Align day view list actions with event details modal (PPT-2478)

#### Events

- Fix editing start time of room bookings in some cases (PPT-2382)
- Tweak check for setting event resources
- Fix sync of all day field on space select modal
- Fix applying all_day value from form to availability request
- Fix update last event details when editing the previously created (PPT-2449)
- Fix editing events with assets

#### Explore

- Fix setting room booking form when external
- Tweak handling of status signals for desk tooltips (PROJ-1665)
- Fix changes to handling of future desk bookings
- Fix handling of desk booking data
- Add bookable hours checks and handling for booking modals
- Fix display of parking space names

#### Form-fields

- Fix overflow of rich text component
- Grab extra user details when selected from search (PPT-2425)
- Fix text for booking rules form
- Fix updating recurrence field instance date (PROJ-1773)
- Fix date field selecting a different date if timezone is different from local

#### Signage

- Fix preview and saving of plugins

#### Visitor-kiosk

- Set JWT before loading event data on beverages view
- Fix visitor authentication for beverages
- Fix scanning QR codes
- Improve responsiveness of QR scanning
- Fix navigating to right view when induction no enabled

#### Workplace

- Add setting to hide nearby desk option on meeting success view (PROJ-1697)
- Fix selecting desk from favourites to book (PPT-2403)
- Remove default parking request space restrictions
- Fix schedule filters for parking requests
- Fix parking booking form crashing

### Features

#### Bookings

- Add check and flow for recurrence clashes (PPT-2241)
- Add ability to edit visitor bookings (PPT-2333)
- Add handling of editing group bookings
- Add setting to prevent booking when assigned (PPT-2469)

#### Concierge

- Add new URL fields to rooms model and form
- Update emergency contacts to use the asset endpoints
- Add ability to delete recurring desk bookings (PPT-2351)
- Add action to download user list for desk bookings
- Add view for listing parking requests
- Add international toggle for visitors (PPT-2372)
- Add currency options to app settings modals
- Add tooltip to show extra visitor details (PPT-2389)
- Add inverted timeline option for room day view
- Add booking list view for rooms
- Add the ability to add vehicle details to parking
- Add ability to send ad-hoc emails to users (PPT-2400)
- Add extra fields to parking space modal
- Add ability to upload/download parking spaces
- Add week view option to parking requests/bookings views
- Add waitlisted status for parking requests
- Add bookable field to parking space table
- Add features column to room listing (PPT-2440)
- Add new site attendance report (PPT-2451)
- Add ability to view room history from management view (PPT-2227)
- Add setting to hide waitlisted parking requests section
- Add setting to limit assigned desks/parking
- Add setting to show/hide edit action for parking bookings
- Add delete option to parking bookings and hide action column when no actions are available

#### Events

- Add check for clashing recurring events (PPT-2366)

#### Explore

- Link to external URL for space booking when set
- Add ability to show event details on space tooltips
- Add template parameters to `room_booking_url` usage
- Add all day option to explore space bookings (PPT-2334)
- Update desk info tooltip to show time of next booking (PPT-2384)
- Add setting to hide parking status on tooltip

#### Form-fields

- Add ability to restrict time ranges on time and duration fields

#### Map-kiosk

- Add pseudo-3D map rendering using three.js
- Add 2D mode to new map renderer

#### Parking

- Convert parking spaces to use assets API
- Convert parking users to use Assets API

#### Signage

- Add interaction handler to plugins

#### Signage-manager

- Add zones view
- Show preview stack for playlist list items
- Add ability to add plugins as media items
- Add tree view to zone listing

#### Stagehand

- Add push notifications for alerts

#### Visitor-kiosk

- Add guest catering endpoints

#### Workplace

- Add ability to get user bookings from a driver for schedule view
- Update explore search to sort relative to user's location (PPT-2304)
- Add parking request flow
- Add settings to set request types and add group based restrictions
- Add setting for desks and room bookings to restrict booking hours (PPT-2415)
- Add ability for users to choose to add teams meeting to room bookings
- Add auto-allocation logic to desk booking
- Add host field to parking request form
- Add ability to book parking requests for externals
- Add ability to show shifts based on user groups
- Add ability to set extra space restrictions for parking requests

### Refactor

#### Assets

- Cleanup handling of parking assets and add checks to prevent duplicates

## [2511.2] - 2025-11-11

### Bug Fixes

#### Bookings

- Fix reading the show_filters state (PPT-2249)
- Fix reading the show_filters state (PPT-2249)

#### Concierge

- Add logic to handle group desk bookings (PPT-2264)

#### Explore

- Fix initial status updates
- Fix zones toggle
- Show free state on space info tooltip (PPT-2286)

#### Signage

- Fix initial form state for new playlists

#### Visitor-kiosk

- Fix bootstrap

#### Workplace

- Fix loading of images for deals

### Features

#### Stagehand

- Add ability to manage dashboard alerts

### Refactor

#### Libs

- Move commonly used classes and methods to common

## [2510.1] - 2025-10-02

### Bug Fixes

#### Booking-panel

- Display any booking modal errors (CDU-133)

#### Bookings

- Use existing user data for final rules check if available
- Fix desk status tooltip on select map (PPT-2213)

#### Catering

- Fix toggle for favouriting items (PPT-2182)

#### Concierge

- Fix saving room availability for catering and assets (PPT-2202)
- Fix check to open visitor section of concierge settings
- Fix saving concierge and workplace settings

#### Events

- Fix displaying attendees for group events (PPT-2209)

#### Explore

- Fix displaying images on space tooltips (PPT-2207)
- Tweak styling for desk tooltip

### Features

#### Concierge

- Add extra fields to points of interest (PPT-2175)
- Add setting to allow hiding parking "add reservation" button (PPT-2192)
- Add simple stat display to parking bookings (PPT-2194)
- Add map view to parking booking listing (PPT-2193)
- Add permission modal to signage media upload (PPT-2197)
- Add booked by column to desk bookings table (PPT-2201)
- Add ability to disable parking management from bookings (PPT-2203)
- Add ability to set user label size (PPT-2204)
- Add buttons to scroll to sections in workplace/concierge settings modal (PPT-2208)
- Show level, building and recurring state on approval display (PPT-2224)
- Add ability to approve/reject cal event series

#### Explore

- Add ability to view poi details from map (PPT-2175)

#### Form-fields

- Add dblclick to date calendar month to reset to current month

#### Signage

- Add ability to display webpages (PPT-2173)

#### Workplace

- Add ability to return to today on schedule view (PPT-2190)
- Add ability to quick book desks from landing view (PPT-2212)
- Add ability for user to set their plate number (PPT-2238)

## [2507.1] - 2025-07-30

### Bug Fixes

#### Bookings

- Check booking rules before submitting booking request

#### Catering

- Handle updating catering orders for standalone visitors (PPT-2140)

#### Concierge

- Sort day view spaces by name (PPT-2135)
- Wait for delete before recreating desk assigned booking (CDU-150)
- Tweak filtering of parking bookings (PPT-2168)
- Fix form state when creating a second parking booking (PPT-2170)

#### Events

- Check booking rules before submitting booking
- Fix checking booking rules on booking

#### Form-fields

- Fix getting non-PlaceOS user details for host calendars
- Fix selecting users from search field (PPT-2169)

#### Signage

- Add ability to add zones to displays

#### Workplace

- Fix booking favourited spaces (PPT-2092)
- Fix code flow asking for camera on checkin requests (PPT-2137)

### Features

#### Concierge

- Add component for survey rendering, remove survey-core dep
- Add ability to set orientation of signage displays
- Add support for scheduling to signage playlists
- Add deals and offers section and logic (PPT-2100)
- Add ability to approve playlist changes (PPT-2161)

#### Control

- Add topbar tooltip for lighting levels (PPT-2125)

#### Signage

- Add logic for handling schedule override playlists (PPT-2146)
- Add ability for triggers to activate playlists (PPT-2153)

#### Survey

- Add app for performing surveys (PPT-2110)

#### Workplace

- Add deals and offers section and logic

### Refactor

#### Surveys

- Cleanup survey builder and responses components

## [2506.1] - 2025-06-12

### Bug Fixes

#### Assets

- Fix counter binding for selected assets

#### Bookings

- Re-evaluate available resources on host change
- Fix showing calendar links (PPT-2081)

#### Catering

- Fix filtering orders by location (PPT-1960)

#### Concierge

- Fix reject all action for desks
- Handle redirects to invalid endpoints on day view section
- Fix routing on assets manager views (PPT-2033)
- Set user name when assigning parking spaces (PPT-2050)
- Fix saving booking panel settings when non-existant (PPT-2056)

#### Form-fields

- Finish options for monthly recurrence (PPT-1993)
- Use PlaceOS users for host select field (CDU-116)

#### Visitor-kiosk

- Fix taking user photos (PPT-2054)
- Fix label printing

#### Workplace

- Add handling all day start for auto-release
- Allow searching controllable spaces from all spaces

### Features

#### Concierge

- Add ability to print guest passes from visitor list (PPT-2029)
- Add ability to set approval flag for rooms (PPT-2005)
- Add ability to set default work hours for auto-release (PPT-2001)

#### Explore

- Add ability to search for desks (PPT-2090)

#### Map-kiosk

- Add view for only parking (PPT-2067)

#### Redirect

- Add simple app for redirecting users to set domains (PPT-2015)

#### Visitor-kiosk

- Add ability to set location for standalone visitors (PPT-2010)

#### Workplace

- Add icon for recurrence on details modals (PPT-2028)
- Indicate to user that room bookings require approval (PPT-2006)

### Refactor

#### Catering

- Clean up order select modal

## [2504.2] - 2025-04-17

### Bug Fixes

#### Workplace

- Fix room booking link on mobile (PROJ-1304)

### Features

#### Control

- Add ability to mute mics on a room basis (PPT-2022)

## [2504.1] - 2025-04-09

### Bug Fixes

#### Assets

- Fix checking rules

#### Booking-panel

- Add extra text when no QR code (PPT-1956)

#### Bookings

- Show non-accessible lockers as unavailable when show accessible active (PPT-1875)
- Fix resource locations when editing bookings (PPT-1876)
- Return user to bank list when options change on locker select modal (PPT-1885)
- Fix time options for parking select (PPT-1899, PPT-1898)
- Add ability to select parking from map (PPT-1897, PPT-1896)
- Fix parking all day fields form sync (PPT-1899)
- Fix level list when selecting parking spaces (PPT-1928)
- Prevent paginated requests causing an infinite loop
- Fix colour of unavailable lockers (PPT-1946)
- Fix overflow for invite visitor success view (PPT-1996)

#### Catering

- Fix type in translation key (PPT-1884)
- Fix managing charge codes
- Fix importing item options
- Fix rendering of delivery time with limited event data
- Tweak uploading charge code logic (PPT-1988)

#### Concierge

- Fix admin check logic
- Use the assigned users plate number when creating booking (PPT-1879)
- Fix saving app settings with a top level array
- Fix removing locker banks (PPT-1889)
- Fix booking rooms (PPT-1907)
- Clear query zones for reports when none selected (PPT-1827)
- Only show control panel option when a URL is available (PPT-1923)
- Fix changing users on parking user modal (PPT-1926)
- Wait for building before loading level list
- Fix toggling visitor remote status (PROJ-1253)
- Tweak selecting timezones for room form (PPT-1941)
- Reload email template list after edit/remove (PPT-1964)
- Fix paged responses for surveys (PPT-1966)
- Fix moving email templates across buildings (PPT-1964)
- Fix catering reports using booking data
- Recreate assigned booking when resource ID changes

#### Events

- Fix editing events
- Fix editing catering

#### Explore

- Use visible user locations first (PPT-1944)

#### Visitor-kiosk

- Fix handling of check-in errors
- Fix saving visitor data changes
- Fix booking beverages for visitors

#### Workplace

- Fix confirm locker modal header (PPT-1874)
- Fix display of level/building on parking/locker success view
- Fix translation key for event notes header (PPT-1880)
- Ignore charge code check when none available
- Fix opening edit locker view (PPT-1948)
- Fix booking modal actions after data refreshes (PPT-1962)
- Fix editing bookings
- Disable start time when date field is disabled
- Fix applying user's plate number when editing parking booking (PPT-1973)
- Fix switching to desk form while editing parking
- Fix deleting booking series (PPT-1987)

### Features

#### Bookings

- Hide fav toggle when viewing select map view (PPT-1978)

#### Concierge

- Add charts to space/rooms report (PPT-1827)
- Add more information when saving app settings
- Add ability to email access QR codes to visitors (PPT-1935)
- Add ability to release all lockers (PPT-1886)
- Add ability to delete user's desk bookings (PPT-1982)
- Add ability to set custom auto-release for resource types
- Add extra options to auto-release (PPT-2001)

#### Explore

- Add setting to hide search items (PPT-1945)
- Add setting to show/hide desk users

#### Users

- Show username if different from email (PPT-1878)

#### Visitor-kiosk

- Add ability to take user photos for pass labels (PPT-1981)

#### Workplace

- Add setting to only allow selecting locker durations
- Remove old views

### Refactor

#### Events

- Refactor events form service

## [2502.2] - 2025-02-12

### Bug Fixes

#### Concierge

- Fix desk booking list after deselecting all zones (PPT-1850)

#### Map-kiosk

- Fix accessibility options (PROJ-1137)

#### Workplace

- Handle invalid resource lists for room bookings (PPT-1854)

## [2502.1] - 2025-02-07

### Bug Fixes

#### Catering

- Fix handling of invalid catering item tags

#### Concierge

- Fix ignore days for locker and parking reports
- Update desk booking local state on changes (PPT-1779)
- Fix keeping desks assigned to user on edit (PPT-1794)
- Handle errors when saving desk details (PPT-1805)

#### Explore

- Prefer map_id over id from desk model
- Fix pinning points of interest (PPT-1820)

#### Visitor-kiosk

- Fix visitor label printing (PPT-1744)
- Fix flow redirections after registration (PPT-1812)

#### Workplace

- Disable checking asset availability when feature disabled
- Only check meeting assets on confirm when selected
- Display email for colleague search when no org details
- Hide colleague button when setting enabled
- Fix removing favourites (PPT-1814)
- Ignore errors when loading colleague data (PPT-1817)

### Features

#### Bookings

- Add ability to hide booking checkin option (PPT-1796)

#### Concierge

- Add report for lockers (PPT-1730)
- Add ability to assign desks to users (PPT-1775)
- Add security field to desk model (PPT-1784)
- Add ability to set which visitor listing columns show (PPT-1799)

#### Visitor-kiosk

- Add success header for self-registered visitors (PPT-1797)
- Add ability for visitors to checkout (PPT-1808)
- Add ability to select language on visitor kiosk (PPT-1897)

#### Workplace

- Add ability to show calendar links for visitor invites (PPT-1798)

### Refactor

#### Conicerge

- Cleanup room approval component

## [2412.1] - 2024-12-10

### Bug Fixes

#### Concierge

- Remove bookings when deleting parking space (PPT-1690)

#### Explore

- Check desk rules before finalising booking (PPT-1687)

#### Visitor-kiosk

- Prevent user re-checking in an finish booking (PPT-1686)

#### Workplace

- Hide space filters when feature disabled
- Prevent booking closed favourite spaces (PPT-1716)

### Features

#### Catering

- Add ability to have multiple menus per building (PPT-1646)

#### Concierge

- Add parking report (PPT-1691)
- Add form for modifying workplace app settings
- Add form for modifying visitor kiosk settings (PPT-1694)
- Add form for managing concierge settings

#### Spaces

- Add ability to set alerts on rooms (PPT-1645)

#### Visitor-kiosk

- Add translation hooks for text in visitor kiosk (PPT-1720)

#### Workplace

- Add desks default duration setting (PPT-1683)

## [2411.1] - 2024-11-05

### Bug Fixes

#### Concierge

- Fix zones when booking parking from map (PPT-1582)
- Fix setting unit price on purchase orders
- Fix search for pending approvals (PPT-1609)
- Fix building timezone display on week view (PPT-1608)
- Fix user shown when editing parking bookings (PPT-1606)
- Update parking booking list after creation/edit (PPT-1605)
- Fix disabling time fields on parking modal
- Only ask for visitor induction when enabled

#### Explore

- Fix parking statuses on maps (PPT-1590)

#### Workplace

- Re-enable ability to make non-all-day parking bookings (PPT-1595)

### Features

#### Concierge

- Allow user to print all desk QR codes for a level (PPT-1572)
- Add button to link room to AV control panel (PPT-1597)

#### Workplace

- Add ability to book desk after booking a room (PPT-1573)
- Add ability to show calendar options after booking parking (PPT-1586)
- Disallow daily recurrence for all day events (PPT-1596)
- Add ability to book recurring desk bookings (PPT-1576)

## [2410.1] - 2024-10-08

### Bug Fixes

#### Bookings

- Update logic to handle recurring instances
- Tweak zones for bookings
- Fix ending booking instances (PPT-1480)
- Fix getting map id for pinning resource
- Fix standalone visitor bookings
- Fix check for user's availability (PPT-1557, PPT-1558)
- Fix adding and viewing booked assets (PPT-1568)

#### Concierge

- Save support issue types to concierge metadata also (PPT-1485)
- Fix saving support issue types for concierge
- Fix saving level id to parking assignment booking (PPT-1498)
- Fix handling asset bookings report without linked events
- Fix whitespace on week view on larger screens
- Fix showing old data when switching zones on week view (PPT-1508)
- Fix z-index of room approvals section (PPT-1514)
- Fix display of form error when booking visitor parking
- Handle case where first instance is cancelled when removing parking assignment (PPT-1523)
- Add ability to set host for visitor invites (PPT-1532)
- Fix removing parking users (PPT-1548)
- Fix minor room report issues (PPT-1554)
- Fix minor issues with desk reports (PPT-1554)
- Fix setting visitors as remote (PPT-1556)
- Fix offset of timezone adjusted bookings on day view

#### Events

- Fix applying space zones to asset bookings (PPT-1346)
- Fix extending bookings over another booking (PPT-1559)

#### Explore

- Fix selecting the same item twice from search (PPT-1504)
- Fix grabbing map features for search
- Ignore rejected bookings for parking maps

#### Mapspeople

- Tweak handling of building switching (PPT-1501)
- Clear directions when changing focus item (PPT-1504)
- Prioritise focus item over building for center
- Store last position of the user (PPT-1504)

#### Visitors

- Update induction API calls

#### Workplace

- Handle removing booking instances (PPT-1480)
- Set initial user for parking bookings (PPT-1520)
- Ignore catering checks when no menu available (PPT-1555)

### Features

#### Concierge

- Add week view for calendar events (PPT-1508)
- Add ability to search for calendar events (PPT-1509)
- Add ability to set booking rules for parking (PPT-1500)
- Add ability to restrict sections to certain groups (PPT-1500)
- Add UI and logic to set booking panel settings (PPT-1282)
- Add simple visitors report (PPT-1533)
- Add ability display bookings based on the building timezone
- Add email templates section (PPT-1448)
- Add logic to use email template tokens (PPT-1459)
- Add reply-to and from addresses (PPT-1461)
- Add ability to send test emails (PPT-1460)

#### Control

- Add basic voice assistant

#### Explore

- Add logic to show occupancy icons for rooms (PPT-1464)

#### Form-fields

- Add ability to attach files to input (PPT-1458)

#### Visitor-kiosk

- Add ability for visitors to self register (PPT-1530)

#### Workplace

- Rework work location UI (PPT-1482)

## [2408.1] - 2024-08-06

### Bug Fixes

#### Assets

- Add check to factor in cancelled and declined bookings for availability

#### Bookings

- Fix sizing of images
- Minor tweak to display of details for group events
- Fix availability checks when user has cancelled bookings
- Fix desk booking group
- Remove value to ignore hiding set desk height when not checked in (PPT-1298)
- Remove room facilities from parking select details
- Show region instead of building in use_region mode
- Display region instead of building for visitor invite when configured (PROJ-852)
- Fix visitor name display (PPT-1453)
- Tweak building display on details modal (PPT-1454)
- Fix adding appropriate zones for selected resources
- Fix switching buildings on parking select modal
- Fix handling bookings without resources

#### Caterer-ui

- Add date options component from concierge

#### Catering

- Remove ability to edit existing orders when field disabled (PPT-1340)

#### Concierge

- Add print styling to reports sections (PPT-1344)
- Fix adding new roles to emergency contacts (PPT-1389)
- Hold report queries over reloads
- Tweak printing of reports (PPT-1344)
- Filter space report resources based on zone (PPT-1372)
- Fix checks when no roles are set
- Hide report options on print
- Fix saving descriptions on saving events
- Fix report charts on initial load (PPT-1410)
- Make auto-release settings wording more clear
- Prevent editing event start time during event
- Add induction to visitor checkin flow
- Fix deleting linked event to group events
- Prevent checkin of declined visitor bookings + approve on checkin
- Simplify getting ignore week days for reports (PPT-1440)
- Up limit for requested rooms (PPT-1441)
- Add level selector to day view when use region set (PPT-1434)
- Fix loading of room list by region
- Fix room booking view scroll when font size not default (PROJ-854)
- Simplify room booking timetable
- Set host of group events to shared calendar
- Prevent adding parking space when no level is selected
- Fix parking map loaded on refresh
- Fix status colours of parking bookings
- Split name and ID columns on desk manage (PPT-1471)
- Fix saving visitor notes
- Fix managing desk bookable status (PPT-1471)
- Fix form checks for unedited fields on desk manage modal (PPT-1471)
- Add ms to checkout time when displaying left time for parking bookings
- Connect date selector to parking map data
- Fix setting zones to parking assignment bookings

#### Conicerge

- Ignore errors when writing setup and breakdown times to zone metadata

#### Events

- Fix enabling recurrence
- Include booked event for room availability (PPT-1369)
- Use room_booking_rules metadata (PROJ-804)
- Fix display of group event location
- Fix images display for group events
- Fix endpoint requests for attendees on group events
- Fix saving images on group events

#### Explore

- Ignore bookings status for non-bookable rooms (PPT-1364)
- Fix space bookings when using maps people (PPT-1394)
- Fix displaying plate numbers for parking spaces
- Fix parking info reserved status when space not assigned (PPT-1386)
- Re-poll parking bookings after making booking from map
- Fix getting parking status for region

#### Form-fields

- Add check to file type when loading users from CSV file (PROJ-768)
- Clear input field after uploading image (PPT-1370)
- Add image viewer component

#### Map-kiosk

- Allow search when using maps indoors (PPT-1352)
- Fix resetting view and home button (PPT-1393)
- Pin point of interest selected
- Set building when deeplink-ing a level

#### Maps-indoors

- Fix map actions (PPT-1360)

#### Maps-people

- Fix setting level from zone (PPT-1376)

#### Mapspeople

- Tweak styling of map to use internal IDs
- Fix setting level

#### Visitor-kiosk

- Fix date and time display on checkin results template
- Prevent check-in of rejected visitors bookings

#### Workplace

- Move check for assets and catering availability to a stream
- Fix asset availability checks on meeting form
- Add setting to force colleague search to only used authenticated user (PPT-1366)
- Set desk asset_id to active resource if not set
- Fix filters for showing group events
- Apply parking asset id on form confirm

### Features

#### Bookings

- Use new booked endpoint for resource availability (PPT-1443)

#### Catering

- Upgrade catering order table
- Upgrade menu listing table.

#### Concierge

- Add ability to set support ticket types (PPT-1342)
- Add option to select points of interest from a map (PPT-1343)
- Add daily usage to spaces report (PPT-1355)
- Add event UI (PPT-1216)
- Add event UI (PPT-1216)
- Add calendar views for group events
- Add ability to reserve parking for visitors (PPT-1388)
- Add ability to see parking space status on manage view (PPT-1379)
- Add extra parking map display info (PPT-1386)
- Add ability to set notes on visitors (PPT-1472)

#### Explore

- Setup parking map booking checks and status displays (PPT-1387)

#### Workplace

- Add integrations for group events (PPT-1220)
- Add events UI (PPT-1217)
- Add events UI (PPT-1217)
- Update booking listings to show extra info for parking (PPT-1380)
- Add desk height options (PPT-1295, PPT-1298, PPT-1299, PPT-1300)
- Add desk height options (PPT-1295, PPT-1298, PPT-1299, PPT-1300)

### Refactor

#### Caterer-ui

- Update to be more inline with concierge

#### Concierge

- Clean up styling inconsistencies
- Cleanup styling for reports
- Simplify visitor listing table

#### Workplace

- Tweak level selectors for resource selection modals

## [2404.1] - 2024-04-30

### Bug Fixes

#### Assets

- Prevent overriding cached value when generating availability (PPT-1210)
- Prevent duplicate asset ids being requested
- Prevent de-duplicating asset IDs if metadata is not available
- Prevent re-creating requests when no changes made
- Add internal times to diff check
- Handle re-creating requests on change rooms
- Prevent selecting end time for asset requests
- Fix check for invalid delivery times
- Fix handling of clashes on edit (PROJ-658)
- Ignore existing bookings for availability checks on edit
- Fix availability check for validating asset requests

#### Booking

- Fix wording of clash booking error message

#### Bookings

- Fix availability of resource that have an assigned user (PPT-1223)
- Increase page size for checking resoure availability (PPT-1318)
- Add fallback for zone requested for availability checks (PPT-1318)

#### Concierge

- Update auto-release setting to save to the metadata for workplace app (PPT-1155)
- Fix removing report data from days set as ignore (PPT-1056)
- Fix desk report level utilisation graph
- Handle numbers for ignore days for report gen (PPT-1232)
- Fix using indexes for ignored days in reports (PPT-1232)
- Fix saving building app settings (PPT-1240)
- Fix setting up regions with existing buildings (PPT-1289)
- Improve auto-release settings UX (PPT-1288)
- Tweak form to correctly set event and booking related settings (PPT-1301)
- Tweak form to correctly set event and booking related settings (PPT-1301)
- Disable poi public link if not available
- Add ability to set a public URL key to poi short links
- Update public poi URLs

#### Events

- Prevent booking with external attendees without room (PPT-1141)
- Send id when patching events
- Load event data for edit form when not set
- Fix ignoring assets for availability on edit (PPT-1227)
- Fix getting assets status from linked bookings
- Use linked bookings for assets if available

#### Explore

- Prevent viewing parking maps on map view (PPT-1222)
- Fix rendering of zone sensor info (PPT-1229)
- Fix various minor issues
- Fix token for directions on mapbox
- Allow using map_id for zone/area statuses
- Fix parsing zone status data
- Tweak to styling zones/areas
- Apply at_location to zone status
- Merge binding data streams for zones
- Correctly pass options to mapsindoors component
- Prevent loading parking bookings when UI is public
- Simplify display of sensor info to allow more displayed on map (PPT-1317)
- Change sensor overlay to tooltip

#### Form-fields

- Fix booking rules between dates end date edit (PPT-1234)

#### Map-kiosk

- Fix styling (PPT-1239)
- Allow multi-building level options when use_region is set
- Prevent websocket bindings when app set as public
- Fix ability to locate spaces from URL params

#### Workplace

- Fix overflow of topbar menu items
- Fix check for auto-release (PPT-1155)
- Ignore auto-release modal until within time range (PPT-1155)
- Re-add visitor invite to top menu
- Fix auto-release checkin modal (PPT-1155)
- Ignore cancelled bookings for auto-release check
- Prevent desk booking modal when panning map (PPT-1292)

### Features

#### Concierge

- Add setting to customise workplace app settings key
- Add ability to manage points of interest (PPT-1238)
- Add section for management for URLs
- Add public link for points of interest

#### Explore

- Add ability to deeplink locations (PPT-1273)

#### Map-kiosk

- Update design

#### Workplace

- Allow using regions for resource availability (PPT-1184)

### Refactor

#### Explore

- Re-write mapspeoples integration

## [2402.1] - 2024-02-27

### Bug Fixes

#### Assets

- Fix keeping status when event changes (PPT-1143)
- Reduce request data stored in events/bookings
- Tweak grab more items when requesting available assets (PPT-1159)
- Change asset listing for availability to grab based off group (PPT-1159)
- Fix asset counts when setting multiple requests (PPT-1187)
- Prevent overlapping requests duplicating ID use (PPT-1192)
- Make sure values exist on requests
- Add availability check before booking assets (PPT-1197)
- Get assets groups to use for duplicate checking (PPT-1192)
- Prevent user selecting more assets than allowed (PPT-1209)
- Prevent over selecting available assets across requests
- Handle not asset ids set on request items

#### Bookings

- Prevent editing visitor bookings
- Remove conflicting linked bookings when editing events/bookings (PPT-1199)

#### Catering

- Fix catering item options creating unique order items (PPT-1179)

#### Concierge

- Fix saving of new signage media
- Fix background color for parking disabled overlay (PPT-1188)
- Tweak parsing of asset request data
- Tweak period counting for reports
- Show status desk bookings ended early (PPT-998)
- Fix showing future requests (PPT-1208)

#### Events

- Tweak edit availability checks for future times (PPT-1119)
- Update availability check at the end of the booking flow (PPT-1119)
- Fix clearing loading state on error when assets are included
- Fix checking availability on edits (PPT-1119)
- Also use event status for evaluating overall status (PPT-1167)
- Only update asset options on change
- Prevent id being sent in events request
- Add ability to set calendar resource for no space bookings (PPT-1141)
- Handle availability request errors
- Tweak checks for valid asset requests

#### Explore

- Prevent opening space book modal when panning

#### Form-fields

- Fix selecting user data from less strict input (PPT-1171)
- Add work location for internal users on user list field (PPT-1150)

#### Map-kiosk

- Hide controls when using mapsindoors

#### User

- Add ability to get location for specific time

#### Users

- Force page to reload after saving (PPT-1183)
- Fix WFH icon and tooltip for work hours
- Tweak handling of times for location

#### Visitor-kiosk

- Fix time display on checked in message
- Allow customising the results text with a template (PPT-1138)
- Ignore event ids in visitor QR codes
- Fix minor issue with rendering result template HTML

#### Workplace

- Fix to metadata for link created events (PPT-981)
- Fix overflow of details on meeting and desk confirm sections
- Hide calendar events when they have an associated booking (PPT-981)
- Notify user of errors when booking parking (PPT-1169)
- Fix editing catering/assets in existing bookings (PPT-1196)

### Features

#### Concierge

- Add signage playlists logic
- Add ability to set auto-release config

#### Events

- Add ability to use the building parent instead of the building (PPT-1184)

#### Users

- Update WFH settings

#### Workplace

- Add confirm modal for keeping bookings when WFH is set (PPT-1155)

### Refactor

#### Maps-people

- Clean up naming of service and properties

## [2312.1] - 2023-12-21

### Bug Fixes

#### Assets

- Tweak saving/updating of linked asset bookings
- Ignore cancelled and declined assets bookings for availability
- Ignore rejected bookings for availability
- Minor tweaks

#### Booking-panel

- Add new custom status text when meeting is checked in early (PPT-976)

#### Bookings

- Fix setting initial level when select desks from map (PPT-973)
- Display desks without a user as not-bookable
- Fix map colours on desk select modal (PPT-913)
- Hide check-in after check on details modal
- Fix user tooltip display for desk select map (PPT-913)
- Set resource as attendee in linked events
- Fix clearing form on navigation (PPT-1057)
- Fix formatting for all day bookings (PPT-1127)

#### Catering

- Fix updating UI on room availability changes (PPT-1016)
- Fix removing items with different options (PROJ-432)
- Use time_format variable instead of hardcoded value
- Hide options in search section (PPT-1066)
- Fix delivery options for all day (PPT-1086)
- Add handling for invalid delivery times (PPT-1108)
- Only show orders for selected date (PPT-1106)
- Fix passing values to order modal (PPT-1109)
- Fix end time for all day events (PPT-1109)
- Use 24 hour time for filters when set (PPT-1116)
- Add step interval setting for delivery times
- Fix listing catering orders (PPT-1114)
- Fix display of order details
- Fix displayed times of order events
- Fix to error updating statuses (PPT-1072)
- Tweak event linking when listing orders (PPT-1072)
- Only update event metadata on status changes

#### Chat

- Allow resuming chats on timeout
- Fix timestamp displayed for messages
- Various minor updates
- Fix closing chat

#### Concierge

- Tweaks to displaying events on day view timeline
- Fix checkin for guests
- Tweaks to printing QR codes (PPT-952)
- Fix checking out guests (PPT-954)
- Disable checkin/out for desks after checkout (PPT-879)
- Tweaks to printing QR codes (PPT-952)
- Fix checkin of visitors
- Make id field for desks bigger (PPT-988)
- Fix asset manager product view overflow (PPT-997)
- Tweak nav for asset manager (PPT-1002)
- Fix colour of desk check-in button
- Fix overflow on survey building list page
- Various desk manage fixes (PPT-1030, PPT-1029, PPT-1028)
- Show checkin buttons for guests
- Re-add ability to checkin all visitors from room booking (PPT-982)
- Move room details icon to end of row (PPT-982)
- Fix scrolling to the top when new desk is added
- Use calendar value first for delete or decline of events (PPT-975)
- Add desk name below QR code (PPT-1049)
- Retry events request with delay on 429 (PPT-1047)
- Fix working with emergency contact data
- Add ability to set map URL for level zones
- Minor fix to parking
- Fix to display of setup/breakdown meetings (PPT-535)
- Add ability to assign a level to emergency contacts
- Fix clearing parking space user (PPT-797)
- Update retry logic for day view requests (PPT-1059)
- Fix removing roles for emergency contacts (PPT-1050)
- Add all day info to catering field
- Allow users to set level as a parking level (PPT-797)
- Fix sorting desk bookings (PPT-842)
- Prevent selecting multiple levels for desks (PPT-796)
- Only show catering order with selected report period (PPT-1107)
- Update event form to more match workplace one (PPT-1109)
- Fix backaway time for day view event request retries
- Fix catering data for reports
- Ignore cancelled catering orders for report (PPT-1122)
- Fix asset meeting time when all day (PPT-1127)
- Fix changing asset tracking status (PPT-1125)
- Fix filtering of invalid asset requests (PPT-1126)
- Update asset field to use new field format (PPT-1128)
- Add setting to allow editing day view events
- Handle ended state for visitor bookings (PPT-1131)
- Fix hide edit check for day view events
- Hook up day view edit to modal

#### Event

- Allow editing multiday events without multiday enabled

#### Events

- Fix check in state of attendees when init from booking
- Fix duration for multi-day bookings
- Change setup/breakdown time back to minutes
- Tweak to visit expected handling
- Fix removing visit expected value on room bookings
- Tweak parsing of data (PPT-981)
- Fix catering settings for main form group
- Set min duration for all day bookings to 24hrs (PPT-1060)
- Fix to associated id check (PPT-981)
- Tweak to helpers for available periods (PPT-1078)
- Allow editing multi-day events
- Fix setting catering time when editing event (PPT-1110)
- Fix editing multiday bookings (PPT-1105)
- Display of catering dates
- Fix display of catering times on all day bookings (PPT-1110)
- Tweak setting catering time on edit (PPT-1115)
- Make all day bookings 24+ hours (PPT-1118)
- Fix handling end time of all day events (PPT-1115)
- Minor fixes to date handling
- Correctly handle date when field disabled
- Only show valid catering when viewing event details
- Add extra checks for availability on edit (PPT-1119)
- Fix check for catering order validators
- Factor in all day when confirming availability
- Fix querying event availability for future dates
- Tweak availability checks
- Fix filtering of valid catering orders (PPT-1072)
- Load metadata for event if needed
- Update metadata if unable to update event setup/breakdown (PPT-1130)

#### Explore

- Factor in assigned users for user status (PPT-797)
- Fix search listing for users with multiple roles (PPT-1044)
- Fix hiding zone toggle
- Allow changing count value used for occupancy
- Minor fixes

#### Form-fields

- Remove space as item separator (PPT-984)
- Fix is between field on booking rules form (PPT-1031, PPT-1033)
- Allow adding comma separated list of items

#### Map-kiosk

- Fix text colour for date value (PPT-1052)
- Fix calls
- Add parking to map kiosk (PPT-1100)
- Fix showing parking data on maps (PPT-1100)

#### Spaces

- Add handling for multiday bookings (PPT-1117)

#### Users

- Update phone validation regex

#### Visitor-kiosk

- Fix checkin
- Use map-kiosk logic for map view
- Change date format to be less ambiguous (PPT-983)
- Fix visitor checkin (PPT-982)
- Fix visitor lookup for standalone bookings (PPT-986)
- Tweak to handling checkin for visitor booking (PPT-982)
- Minor fix to checking in visitors (PPT-982)
- Disable preferences for now
- Fix displaying host name on check-in result page
- Show current time if no event set on results page

#### Workplace

- Fix end date values for limiting user date selection (PPT-971)
- Fix overflow of flow success views (PPT-1000)
- Fix overflow for schedule sidebar filters (PPT-1020)
- Tweak topbar colours
- Fix action button colours (PPT-953)
- Fix disabling assets field on selecting a space (PPT-956)
- Add logic to prevent duplicates showing when using calendar links (PPT-981)
- Fix catering display on confirm modal
- Fix filtering duplicate events (PPT-981)
- Prevent editing multi-day bookings
- Fix displaying catering orders on confirm view (PPT-1091)
- Fix display of multiday event times
- Fix icon colours in mobile footer menu
- Fix date value for order times on confirm modal (PPT-1110)
- Fix min duration offset on multiday end time
- Fix data sync between shared input fields (PPT-1117)
- Fix selectable end times
- Add extra display info to multiday end time field
- Flag invalid catering orders on confirm modal (PPT-1064)
- Fix selectable durations (PPT-1120)
- Fix invalid catering display on edit
- Fix confirm display of assets for desk bookings

### Features

#### Assets

- Add ability to disable asset booking for specific rooms
- Add category fields to assets select modal (PPT-1075)
- Add ability to book multiple groups of assets (PPT-1073)

#### Catering

- Add ability for multiple orders per booking
- Add setting to restrict the available times for catering (PPT-1067)
- Add ability to duplicate orders
- Add ability to set orders past first day in multiday events (PPT-1105)

#### Chat

- Update response handling for longer server processes

#### Concierge

- Add ability to set availability rules for assets (PPT-956)
- Update display of deleted bookings (PPT-998)
- Add view for locker bookings (PPT-1014)
- Add ability to manage emergency contacts
- Add ability to manage emergency contact roles
- Add setting to remove days from reports (PPT-1056)

#### Events

- Update logic for setup and breakdown
- Update display of catering orders on details modal (PPT-1080)
- Add ability to handle multi-day events

#### Explore

- Add ability to query emergency contacts (PPT-1045)

#### Visitor-kiosk

- Add ability to print visitor label after checkin (PPT-656)

#### Workplace

- Add asset restrictions to room booking flow (PPT-956)

### Refactor

### Styling

## [2310.1] - 2023-10-06

### Bug Fixes

#### Assets

- Fix API query params for availability
- Set parent_id on asset request creation
- Remove parent_id from bookings

#### Bookings

- Fix map select filter for desk select modal (PPT-892)
- Minor tweak to desk restriction handling (PPT-914)
- Fix available resources
- Fix duration check
- Tweak handling of all day values
- Fix all day bookings
- Pass user email when checking availability (PPT-851)
- Fix availability check when comparing user emails

#### Catering

- Fix updating order status (PPT-912)
- Fix persisting of active state for order list items

#### Common

- Tweak MS outlook links (PPT-900)

#### Concierge

- Handling desk bookingsinitial page loading before buildings loaded
- Minor tweaks to desk bookings paginations (PPT-860)
- Fix approval view errors
- Fix overflow of desk book modal (PPT-898)
- Fix search for asset manager requests list
- Fix initial date selector state when switch asset manager tabs
- Fix 24 hour time on new event form (PPT-848)
- Remove QR option on desk bookings list (PPT-902)
- Add desk manage actions
- Fix booking desks from concierge
- Fix desk approved/decline (PPT-917)
- Refresh desk booking list after creation (PPT-907)
- Fix logic for setting active level on room manager (PPT-919)
- Allow editing of desk/room restrictions (PPT-932)
- Tweaks to restrictions (PPT-932)
- Display checkin errors for desk bookings (PPT-949)
- Fix printing QR code for desks (PPT-952)
- Fix checking in event guests (PPT-538)
- Fix check in/out of guests (PPT-954)

#### Events

- Fix setting setup/breakdown to 0 (PPT-881)
- Force status locally after checkin (PPT-895)
- Cleanup error handling for asset booking
- Fix removing the event on asset booking failure

#### Explore

- Fix 24 hour time on booking modal
- Fix typo in explore space booking success toast (PPT-906)
- Fix default for enabling parking bookings
- Fix parking space bookings
- Fix loading of space restrictions before building loaded
- Fix status display of parking spaces (PPT-950)
- Fix displaying errors on space bookings

#### Form-fields

- Prevent image uploads when not available

#### Visitor-kiosk

- Fix input field mapping for visitor org data (PPT-910)
- Fix error displayed when invalid email entered (PPT-911)
- Fix redirect on bootstrap (PPT-938)
- Update QR scanning to match new format (PPT-942)
- Fix getting visitor email from QR code

#### Workplace

- Fix displayed time when editing in progress booking (PPT-734)
- Force time display when working with all day
- Add extra details to success pages (PPT-821)
- Fix polling of events on landing (PPT-821)
- Fix auto-fill of desk from QR code (PPT-953)

### Features

#### Booking-panel

- Add ability to end in progress meetings (PPT-909)

#### Bookings

- Add status display for linked asset bookings (PPT-915)

#### Concierge

- Add pagination handling to desk booking list (PPT-860)
- Add ability to toggle between 24 hour time
- Add ability for user to configure 24 hour time usage (PPT-848)

#### Explore

- Add map booking to parking spaces

#### Form-fields

- Add settings to force upload config

#### Workplace

- Add setting to allow 24 hour time (PPT-848)

## [2309.1] - 2023-09-07

### Bug Fixes

#### Bookings

- Fix setting active resource for bookings
- Make host booking parent for group desk bookings (PPT-838)
- Fix warning for unavailable group booking members (PPT-851)
- Fix setting date when in past (PPT-836)

#### Concierge

- Fix showing custom reports
- Fix sorting of desk bookings by name (PPT-842)
- Update desk booking list to more match new design
- Cleanup logic to get booking data for reports
- Fix reload after adding a building (PPT-814)
- Add option to add new categories from management modal (PPT-857)
- Add uncategorised option to asset manager (PPT-857)
- Handle pagination for reports data
- Fix approve/decline of guests and view styling (PPT-869)
- Fix check-in/out of desk bookings (PPT-879)
- Fix time display for guests from calendar events (PPT-878)
- Fix typo in decline desk option

#### Events

- Tweak handling of availability when editing bookings (PPT-839)
- Fix availability check (PPT-839)
- Update day of week for recurrence on date change (PPT-846)

#### Explore

- Clean binding logic for desk statuses
- Fix handling user data from desk bookings

#### Map-kiosk

- Update level select button active styling

#### Org

- Add methods modifying org zones

#### Workplace

- Fix data reflection of query parameters
- Fix image overflow for landing availability (PPT-843)

### Features

#### Concierge

- Add ability to manage asset categories (PPT-857)

## [2308.2] - 2023-08-24

### Bug Fixes

#### Bookings

- Fix setting for no_approvals with bookings (PPT-829)
- Fix zone data when editing bookings
- Fix setting date on edits
- Fix all day fields

#### Concierge

- Fix setting guests as remote
- Allow custom reports as only reports on sidebar (PPT-816)
- Fix data selector on day view (PPT-784)
- Fix listing of guests for building
- Fix setting event visitors to remote

#### Events

- Fix saving event when setting setup and breakdown times (PPT-720)

#### Explore

- Add ability to hide zones toggle
- Tweak handling of desk data
- Show "desk" on error if desk has no name
- Fix errors with desk bookings

#### Form-fields

- Update support email requests (PPT-823)

#### Spaces

- Force selected spaces to one item without setting (PPT-827)

#### Workplace

- Fix minor runtime errors in schedule
- Tweak handling of booking errors

## [2308W3] - 2023-08-22

### Bug Fixes

#### Bookings

- Remove custom all day logic
- Fix expanded map for booking details modal (PPT-679)

#### Concierge

- Fix adding/editing new parking spaces
- Update date options on new UI (PPT-784)
- Fix tagging newly created zones (PPT-788)
- Fix table scrolling for level manager (PPT-799)
- Fix removing buildings (PPT-798)
- Fix booking desks from the map view (PPT-808)

#### Events

- Remove custom all day logic

#### Explore

- Update svg-viewer and ordering of interactions (PPT-782)
- Handle checked in desks (PPT-809)
- Fix checkin status handling for desks
- Add ability to load desk status for future days

#### Form-fields

- Allow forcing of displayed value on duration field
- Fix plural form text on recurrence modal (PPT-805)

#### Users

- Fix email case sensitivity for availability display (PPT-811)

#### Workplace

- Fix routing typo for desk booking success view (PPT-803)

### Features

#### Concierge

- Add ability to make standalone visitor bookings (PPT-787)

## [2308.1] - 2023-08-10

### Bug Fixes

#### Org

- Fix saving selected regions

## [2308W2] - 2023-08-08

### Bug Fixes

#### Bookings

- Only show checkin around booking period (PPT-740)
- Ignore existing booking in availability checks (PPT-741)
- Fix setting host for visitor bookings
- Fix resource list update on building change (PPT-763)

#### Catering

- Fix sorting of catering orders (PROJ-213)

#### Concierge

- Fix sidebar names for reports
- Fix adding custom reports to sidebar
- Fix routing for custom reports (PPT-753)
- Fix scroll on survey responses and routing to new views (PPT-752)
- Fix approve/decline of guest (PPT-762)
- Fix report overflow (PROJ-208)
- Fix handling building switches on booking room select (PPT-764)

#### Events

- Add booking rules filter to future available spaces (PPT-736)
- Fix id for status binding (PPT-759)
- Add booking rule for available hours
- Update clear routes for form data (PPT-764)

#### Explore

- Add zone info to feature locating (PPT-748)
- Fix zone details for locating points of interest (PPT-748)
- Show desks as busy when auto checkin enable
- Fix handling non-existant desk restrictions
- Fix checked in check for desks

#### Form-fields

- Make default end date of recurrence 1 day less than a year (PPT-757)
- Add setting for default recurrence period
- Change default recurrence period to 180 days (PPT-757)

#### Users

- Update availability on date change (PPT-749)

#### Visitor-kiosk

- Add translation module
- Add logic for handling standalone bookings
- Fix ability to use maps

#### Workplace

- Fix selecting desk for booking from favourites (PPT-737)
- Re-enable desk booking editing (PPT-741)
- Tweak editing of bookings (PPT-741)
- Tweak setting desk in booking flow (PPT-741)
- Fix editing desk bookings (PPT-741)

### Styling

#### Concierge

- Minor custom table style changes

## [2307W4] - 2023-07-25

### Bug Fixes

#### Analytics

- Update service to use Google Tags
- Tweak analytics logic

#### Asset

- Fix name of parent_id field for categories

#### Assets

- Fix typo in endpoint URL (#250)
- Clean model
- Fix saving assets
- Rename count field to quantity
- Tweaks to handling asset bookings
- Clean fields before making requests
- Fix booking of assets
- Add default end of life date on asset form
- Default asset select count to 1 (PPT-584)
- Various minor fixes
- Fix availability
- Fix availability on edit
- Fix saving selected assets on modal close (PPT-607)
- Add location id to booking for map locating
- Fix editing of event assets requests
- Fix availability filtering for form field
- Fix editing asset count when selecting items
- Tweak handling of parent event editing
- Fix asset list when editing the amount of existing selection
- Add barcode field to asset (PPT-575)
- Update API usage
- Tweak page size for listing type items (PPT-668)

#### Binding

- Add logic to set a debounce delay before execute is called

#### Bindings

- Delay execute by default

#### Booking

- Tweak parsing model

#### Booking-panel

- Fix check for bookings for status
- Fix booking from checkin view (PPT-631)

#### Bookings

- Hide desk images when none available
- Add loading logic for parking spaces
- Fix getting parking space metadata
- Hide comma when no building address
- Add level filter for desks (#223)
- Fix checking in bookings from details modal
- Tweak styling for visitor form (#285)
- Fix working of checkin button (#288)
- Fix setting duration for all day
- Fix display of selected desk
- Add handling for user departments
- Tweak department handling
- Tweak visitor invite logic with old bookings
- Force bookings to always be in the organisation zone
- Add query param for listing checked out bookings
- Tweak handling of asset name
- Fix removing desks (#316)
- Limit max size of desk filters (#314)
- Fix not showing map when desk is selected (#320)
- Add setting to hide checkin when auto-checkin enabled (PPT-105)
- Tweak handling of form data (PPT-167)
- Fix desk booking (PPT-167)
- Tweak handling of time data
- Initial form state
- Add resource filter for user groups
- Tweak handling of set user in form data
- Prevent booking invalid visitors
- Clear loading state on error
- Tweak form data for group bookings
- Show desk status on select modal map (PPT-409)
- Add handling of resources without IDs (PPT-420)
- Fix level display of parking space list (PPT-419)
- Add setting to hide desk status tooltip on select modal
- Fix status tooltip for in use desks on select modal
- Tweak handling of booking status
- Display checked out bookings as ended
- Tweaks
- Fix is_done check
- Fix booking non-lockers
- Tweak handling of checked_out_at field
- Add display to indicate booking for other user (PPT-499)
- Add field to indicate grouping
- Remove case when checking card owner
- Fix map display when selecting desks (PPT-514)
- Fix filtering of lockers
- Fix listing lockers for bookings
- Throw error in booking checks with no host (PPT-539)
- Add logic to allow bookings to be linked with events
- Prevent toggling favourites error (PPT-682)
- Fix updating form values when no owner
- Fix visitor error handling and form on extra requests (PPT-707)
- Fix setting start time for visitor bookings (PPT-719)
- Minor fix

#### Catering

- Update order category filter
- Show item image on list (#228)
- Tweak layout (#248)
- Tweak catering config handling
- Fix overflow of menu modals
- Display item tags on order modal
- Minor tweaks
- Connect form details to catering filters
- Save selection when closing modal (#263)
- Fix handling undefined settings
- Fix getting catering settings for order modal
- Fix editing of charge codes
- Fix listing of catering item options in orders (#273)
- Fix filtering of menu on order modal
- Fix handling multi-select options for adding items to order
- Display options on listed items
- Add placeholder image for catering items
- Fix parsing of catering item data for selected options
- Tweak handling of options
- Fix currency code on item listing
- Fix updating quantity on edit (PPT-364)
- Fix display of order data when listed (PPT-469)
- Fix updating of order list after change is made (PPT-468)
- Fix complex orders
- Force order status changes locally after update
- Tweak to updating status of events
- Fix runtime error

#### Components

- Fix display of map location (PPT-347)

#### Conceirge

- Fix to min count for space report

#### Conciege

- Fix routing for catering options

#### Concierge

- Change room attendance to use max instead of average
- Tweak menu creation UI
- Fix sidebar error
- Fix QR code URLs for desks
- Fix space no show column on report
- Tweak room report fields
- Fix total time display for users on rooms report
- Tweak building listing for surveys (#286)
- Update buttons for survey section
- Sort building list alphabetically
- Fix deleting event
- Close event display after delete
- Fix survey response alignment
- Asset manager fixes
- Fix passing asset details to backend
- Fix custom report container style
- Add api_key field to custom reports
- Handle custom report before data loaded
- Fix custom report url generation
- Fix handling of custom report URL
- Add ability to do normal desk bookings from concierge (PPT-395)
- Use host override first for room reports
- Show desk bookings that are checked out/deleted
- Tweak desk request
- Fix variable for desk restriction modal
- Fix overflow on desk restriction modal
- Fix display of desk count on restriction modal
- Fix saving of desk restrictions
- Fix adding desk to new bookings (PPT-452)
- Prevent browser tooltip showing undefined (PPT-494)
- Show more of the day-view event on hover (PPT-495)
- Fix sizing of desk booking table
- Change time field for desk bookings
- Allow for reflow of report options layout (PPT-530)
- Remove toggle for cleaning state on day view
- Fix holding staff checked in state (PPT-542)
- Tweak management of desks (PPT-541)
- Fix reject all confirm check
- Minor fixes to room manager
- Fix setting remote for standalone visitors (PPT-537)
- Fix desk template CSV
- Tweak handling add and remove from desk list
- Cleanup of asset models
- Fix selecting purchase orders
- Fix assets field on booking form
- Add flag for hiding assets form field
- Fix navigation on cancel from asset product form (PPT-597)
- Fix getting images from type rather than asset (PPT-599)
- Update local data after asset related creation (PPT-600)
- Fix display for order number of purchase orders (PPT-601)
- Fix asset purchase order for on edit (PPT-602)
- Tweak product displays (PPT-604)
- Add ability to delete assets and purchase orders
- List asset product sub-items in tables
- Fix asset cancel nav (PPT-606)
- Fix count display for asset groups (PPT-605)
- Fix more details panel for asset requests (PPT-609)
- Fix fields and saving of asset models (PPT-602)
- Fix saving dates for asset purchase orders (PPT-610)
- Fix minor asset form issues
- Fix search filtering for asset purchase orders
- Fix requests for approving and declining asset requests
- Fix asset data sync after local updates
- Fix search filtering of purchase orders (PPT-623)
- Remove description field from assets (PPT-622)
- Remove room manager more details button (PPT-625)
- Remove requests for next week after removing asset
- Fix asset availability count
- Re-add pagination for desk management
- Minor routing fixes
- Fix sidebar routing
- Tweak how facilities options are displayed
- Tweak desk booking table columns (PPT-639)
- Tweak desk bookings table (PPT-639)
- Fix display of setup/breakdown
- Update service to get approval data from driver
- Use new space select modal for booking form
- Create new components and update routing for new views
- Fix style ordering (PPT-654)
- Add ability to set setup/breakdown when booking (PPT-535)
- Tweak handling of invalid setup and breakdown times for rendering (PPT-673)
- Update display for cancelled events on new day view
- Add selector for regions
- Fix selecting buildings
- Fix routing to rooms report
- Fix event filtering (PPT-693)
- Handle error when loading guest list (PPT-700)
- Fix selecting regions
- Add type filters to new day view (PPT-702)
- Fix filters on new day view (PPT-702)
- Fix to deleting events
- Finish room approval logic
- Fix deleting events
- Remove event editing
- Show new assets correctly after bulk upload
- List assets associated with purchase order on edit (PPT-619)
- Add success indication of asset adding
- Show facilities option when no admin group set
- Add error handling for guest approval (PPT-721)
- Fix purchase order asset list names (PPT-619)
- Fix routing for new ui on asset manager views (PPT-735)

#### Control

- Fix active output display colour
- Fix output listing with mocks
- Fix button styles
- Add logic to allow ignoring server update from binding

#### Desks

- Fix end time for all day (#314)

#### Events

- Tweak handling of available spaces
- Hookup booking checkin
- Disable check in when checked in
- Simplify request for spaces
- Prevent availability request happening for clean forms
- Using booking driver for near term availability
- Tweak handling of availability bindings
- Fix handling empty event bindings
- Tweak handling of available spaces
- Fix setting date when resetting form
- Fix clearing form on nav
- Fix check availability when editing bookings
- Send whether user has used links on close (#259)
- Add check for spaces being bookable
- Tweak add organiser/host as an attendee to new meetings
- Fix check on event card
- Tweak handling of default title value
- Fix passing correct system id on update
- Add logic to all overriding the host
- Re-validate duration after date changes
- Don't use host_override as host (#317)
- Tweak handling of space availability
- Fix availability check
- Fix availability check for spaces
- Default timezone to browser's value
- Only show check once status is available
- Force update current available spaces on date change (PPT-348)
- Fix availability checks for all day bookings (PPT-363)
- Fix check for assets when posting booking
- Fix hiding notes on details modal when not set
- Add department to booking extension data
- Fix level display for resources on edit
- Fix resources missing data on edit
- Fix setting form data when editing catering (PPT-492)
- Use ical_uid for ignoring existing events for availability (PPT-496)
- Fix sending the correct system_id when changing rooms
- Tweak handling of card location data
- Tweak system id passed
- Tweak updating of events
- Fix display of location on the details modal (PPT-502)
- Fix charge code error on form
- Fix booking rules filtering rooms (PPT-516)
- Add booking rule checks to landing and explore actions
- Add check for recurrence
- Fix passing recurrence details to request
- Fix setting catering time (PPT-556)
- Truncate long host emails (PPT-608)
- Roll back event booking on asset booking failure
- Fix space name stored in asset bookings (PPT-609)
- Add days of week to recurrence data
- Disable assets when no resources selected
- Prevent removing event after failure on edit
- Fix display of assets on details modal
- Tweak availability error message (PPT-646)
- Fix recurrence based off occurrences (PPT-648)
- Fix editing recurring events
- Factor in setup and breakdown for availability
- Factor in day of week offset for monthly (PPT-651)
- Tweaks to editing recurring events
- Fix formatting for month_day recurrence
- Fix parsing recurrence values
- Force all day bookings to be the start of the date
- Save visitors when creating events (PPT-701)
- Tweak handling of editing and deleting of events
- Add logic for deleting recurring events (PPT-692)
- Fix space availability
- Fix to previous commit
- Fix removing recurring series (PPT-692)

#### Explore

- Fix updating space tooltips
- Update check for in use desks (#242)
- Limit buildings to active region
- Hide space image block when not set
- Navigate to success page on space booking completion
- Ignore space actions when no map id
- Disable desk tooltip on mobile
- Prevent booking non-free desks (#292)
- Add authority ID to placeos user requests
- Prevent search returning systems from other orgs
- Fix user search from placeos endpoint
- Post internal changes to zoom and center position
- Delay adding actions for spaces
- Hide space tooltip on mobile
- Show user department on desk info tooltip
- Tweak grabbing of bookings
- Only hide desk tooltip on mobile when free
- Fix styles for desk info tooltip
- Add error message when trying to book unavailable desks
- Prevent booking spaces when unavailable
- Factor in checked out bookings for desk status
- Only navigate to success on workplace app
- Tweak handling of features
- Fix setting host for desks
- Add ability to close custom tooltips after delay (#315)
- Add ability to hide device mac
- Connect parking to map
- Add placeholder value for user location priority
- Fix updating space tooltip status (PPT-289)
- Fix duplicate label on book modal
- Display resource name on set date/time modal (PPT-465)
- Set click cursor when hovering over spaces (PPT-402)
- Fix getting locker data from driver response
- Handle displaying desk statuses for future bookings (PPT-500)
- Only show parking labels above 200% zoom (PPT-505)
- Fix display tag on search results (PPT-510)
- Allow setting data for desk booking query (PPT-500)
- Prevent booking desks with group mismatches
- Fix setting custom host for desk bookings
- Fix type error
- Tweak get module from binding data
- Fix to user search
- Add logic to handle desk restrictions for map booking (PPT-644)
- Fix locker driver binding runtime error
- Update booking available error message (PPT-686)
- Use driver data for in use desk checks

#### Form-field

- Prevent filtering out users with email addresses

#### Form-fields

- Fix text colour for user list field
- Fix input icon colors on dark mode
- Fix user list upload styling
- Update user list to search local users when set
- Allow user search field to query placeos users
- Remove text input for time field to allow display consistancy (PPT-215)
- Remove unusable link icon from rich text input (PPT-370)
- Tweak handling of host field data (PPT-583)
- Fix display of recurrence details (PPT-648)
- Fix non-custom recurrence options (PPT-650)
- Minor tweaks to handling recurrence

#### I18n

- Catch errors setting the locale

#### Locale

- Fix sentence to make it more generic

#### Map-kiosk

- All select host for desk bookings (#306)
- Add ability to set host on map space bookings
- Add setting to hide zone options
- Add logic to handle pinning of non-space or user entities (PPT-557)
- Add translation service

#### Mock

- Add region zone handling

#### Org

- Ignore levels not assigned to a building
- Add handling for zone images (#229)
- Tweak setting default building
- Tweak loading of building metadata
- Prevent filtering out levels from unloaded buildings (PPT-704)

#### Spaces

- Allow selecting building for space searching
- Fix typo
- Show space features on select modal
- Add translation key for favourites in space select modal
- Fix loading individual space data (PPT-511)

#### Survey

- Fix filtered question incorrect drop
- Survey preview styling tweak
- Fix builder bank questions sync
- Fix select linking issue
- Tweak layout
- Page nav styling tweak
- Fix modal overflow (PPT-68)
- Minor styling and layout tweak
- Rename answer counter field.
- Fix questions not showing correctly

#### Survey/concierge

- Links in Survey-List-Component renders correct survey JSON saved in sessionStorage based on survey_id

#### Users

- Fix new user modal
- Fix handling users without emails (#313)
- Fix find availability modal issues (PPT-181)
- Add translation to org field on new user form (PPT-214)
- Add translation to org error message on form
- Fix display of unavailable blocks on availability modal (PPT-181)
- Fix find availability displaying data host
- Fix find availability modal block display
- Fix availability modal scrolling (PPT-713)
- Tweak availability modal styles

#### Workplace

- Clear level occupancy before updating
- Show building for space list on landing
- Fix new parking flow
- Fix booking type for new parking flow
- Fix spelling mistake on landing (#224)
- Hide spaces from different buildings (#225)
- Show other resource types in favourites list
- Load contacts on initialisation (#227)
- #230: Prevent duplicate request
- #234 re-init zone after booking
- #235 change upcoming events to only load once and on every return to landing
- Change freebusy to only load once and on every return to landing (#235)
- Tweak hiding colleague tab
- Add setting to hide meeting assets form field
- Minor fix when assets are hidden
- Add ability to hide landing sidebar (#240)
- Limit building selection to active zone
- Clean up request for space availability on landing page
- Unbind status when switch buildings
- Fix typo in translation key
- Change catering enablement to use menu instead of settings
- Fix landing level display on available rooms (#257)
- Fix truncating of resource names on favourite list
- Fix removing spaces from favourites on landing
- Fix space details display on confirm
- Fix filtering for contact search
- Fix level display on landing favourites
- Add hover tooltip to colleague names
- Fix removing colleagues
- Fix handling catering rules
- Add setting to hide asset field on desk flow (#270)
- Hide schedule filters for disabled features (#268)
- Add success page for checking in resources
- Fix checking in bookings from URL (#275)
- Deny checkin in other users desk bookings (#275)
- Fix check for user
- Show all types of bookings for upcoming list (#284)
- Tweak handling of booking checks for QR code checkin (#275)
- Add force room data into schedule events from bindings
- Only show future bookings on landing (#284)
- Tweaks to schedule event handling
- Tweak handling of bookings from bindings
- Tweaks to checkin flow
- Add check to code flow for future bookings
- Fix button styling for desk flow
- Fix filtering of websocket schedule bookings
- Fix checkbox location for desk form (#289)
- Hook up support ticket modal to SMTP driver (#290)
- Fix submitting support tickets
- Tweak handling of loading for schedule
- Fix display of catering order on confirm modal
- Fix confirm when catering is disabled
- Add delay to changes to accessibility settings
- Add extra confirm step for meetings with a room
- Update condition for filtering upcoming bookings
- Various minor fixes
- Fix desk booking for groups
- Add setting for limiting future booking days
- Change landing to make adhoc space bookings
- Notify users of desk booking errors (#303)
- Tweak landing colleague search (#301)
- Only show bookable spaces on landing availability list
- Pass system id to delete when no user calendar
- Minor tweaks to upcoming events (#309)
- Tweak mobile calendar for schedule
- Tweak mobile action for resetting calendar month
- Fix deleting bookings from landing (#321)
- Close modal + refresh list after deleting event
- Fix remove booking asset
- Set schedule date on landing load
- Tweak logout
- Hide location status for colleagues as it's not implemented (PPT-119)
- Fix availability requests for availability modal (PPT-181)
- Add setting to redirect support tickets to external URL (PPT-178)
- Default dark mode to hidden (PPT-211)
- Tweaks to find availability logic (PPT-181)
- Prevent date being in past on desk form load
- Close no room confirm modal on confirm
- Fix updating displayed fields on meeting form (PPT-362)
- Fix initial load of schedule data (PPT-415)
- Fix schedule state for events/bookings
- Fix search of custom pois
- Fix catering filters on validation check
- Tweaks to checking catering availability
- Fix catering checks
- Fix editing and deleting events with driver data
- Force hide deleted events and bookings
- Prevent charge code validation when not codes (PPT-496)
- Fix check for catering codes (PPT-496)
- Filter out events that don't match the ical_uid
- Fix position of all day checkbox for parking
- Add idle timeout for room booking form
- Fix display of level of room booking success (PPT-551)
- Fix idle timeout on room booking
- Update locker assignment driver module name
- Fix binding to booked lockers
- Fix display of user locker bookings
- Make title not mandatory as it has a default value (PPT-690)
- Ignore availability status when booking from landing (PPT-686)
- Tweak parsing of locker booking data (PPT-679)
- Add check to global search for contacts (PPT-718)
- Ignore issues with invalid lockers
- Fix handling of locker data for bookings
- Force set desk form values if available (PPT-716)
- Fix available levels (PPT-725)
- Add restriction to end date in desk-form date-picker

### Features

#### Analytics

- Send route and page title changes (PPT-86)

#### Assets

- Add zone id to assets

#### Booking-panel

- Add event panel view

#### Bookings

- Add ability to book multiple visitors at once (PPT-360)
- Start adding logic for lockers
- Add component for rendering locker grid
- Add statuses to locker grid
- Add tooltips to desk select map (PPT-409)

#### Catering

- Allow hiding items from set zones
- Add dietary tags (#255)
- Add ability to save charge codes
- Allow user to set require notes setting for catering
- Allow for selection of multiple versions of the same item to be ordered

#### Concierge

- Add ability to disable catering in rooms (#254)
- Allow catering notes to be viewed
- Rework rooms report
- Add feature to embed other UIs in the reports section (PPT-307)
- Add ability to set desk restrictions (PPT-396)
- Add ability to add and edit catering to events (PPT-506)
- Add listing of rooms
- Add view for asset purchase orders
- Allow selecting date for asset requests (PPT-612)
- Allow bulk upload of assets
- Add layout components for new design
- Update core layout to match new design (PPT-536)
- Update day view components

#### Events

- Add ability to make catering notes required
- Add setting to set resource as meeting host
- Add setting to force host of meetings

#### Explore

- Add setting to force use of polygons for zone display
- Add simple sensor info tooltip
- Add setting to change user search endpoint
- Add service for managing locker statuses
- Hook up bank status modal to map
- Add searchable map features

#### Form-fields

- Add input for uploading images
- Add recurrence form fields (PPT-484)

#### Locale

- Add logic for setting locales

#### Survey

- Add building-list and survey-list pages and associated components, and routes to Concierge
- Survey runner component
- Tweak loading text alignment
- Add ability to duplicate questions
- Survey response page frame
- Add view survey responses menu
- Survey response page
- Ratings re-styling + various tweaks
- Minor layout tweaks
- Change selection widget viz
- Various layout tweaks
- Add page sections to survey responses
- Add survey statistics
- Read logo from concierge metadata
- Add date filters
- Handle soft-deleted questions
- Edit questions + soft delete handling

#### Survey/concierge

- Add more pages and components into Concierge
- Add components related to survey creator views and update routing
- Add complete-survey component and not-found component and update routes

#### Workplace

- Allow user to view the changelog
- Add language selection (#222)
- Add settings to hide spaces or rooms (#241)
- Add setting to hide colleagues sidebar (#240)
- Switch to websocket subscription instead of freebusy api
- Add region selection support (#233)
- Allow using websocket to get user bookings
- Add extra logic for capacity based booking restrictions
- Add catering notes support
- Add ability to select charge codes for meeting catering (#261)
- Fix for PPT-8
- Add quick links to landing page (PPT-166)
- Add field to select desk booking host (PPT-394)
- Add logic for displaying locker bookings on my day
- Add locker flow
- Add flow and select modal for lockers
- Add locker filter to schedule page

### Refactor

#### Survey

- Refactor qbank reset + remove logging

#### Survey/concierge

- Re-add '404' path into routes
- Re-route by building_id instead of building_name
- Update navigate() method in Design-Preview-Container to only navigate if it finds :id of associated building
- Store survey json and survey_id in session storage, and update Survey-List with survey_id
- Clear state of selected_questions when draft is saved or completed

#### Workplace

- Fix image related issues (#219)
- Tweak dark mode styles

### Styling

#### Concierge/survey

- Add menu button to settings.ts to be rendered in sidebar component

#### Survey/concierge

- Add side-bar to building-list and survey-list pages and style button alignment
- Add svg to assets folder for drag and drop icon
- Add not-found icon referenced in NotFoundComponent
- Vertically align text in button
- Add mock building image, building name and address for Building-List-Component
- Style mock building image to fit container
- Style text box and comment box inside text-question and comment-question components
- Add surveyJS inbuilt styling and SurveyModule to Concierge, update styling in Complete-Survey component
- Change styling in surveyjs package to different styling to see survey complete button
- Remove unnecessary <section> tags and replace with <div>
- Delete unnecessary button styling in Add-Building-Modal component, delete other unused styling

## [1.12.0] - 2022-11-08

### Bug Fixes

#### Booking-panel

- Add dark mode to bootstrap view

#### Bookings

- Tweak feature display for desk details
- Fix image display on desk list
- Fix parsing asset name
- Tweak handling of booking type
- Fix making visitor bookings
- Fix to previous commit
- Add error handling to invite visitor
- Tweak to visitor listing
- Hide image section when no images present (#213)
- Fix visitor name being stored
- Show different error message for visitor bookings
- Tweak to payments

#### Catering

- Fix passing currency code to catering modal

#### Common

- Fix calendar link generation
- Fix to previous commit
- Fix calendar links for google calendar
- Fix timezone issue with calendar links
- Tweak handling of attendees for calendar links
- Tweak handling of spaces for calendar links
- Fix adding spaces as attendees to google calendar links

#### Concierge

- Fix minor issues with order listing
- Only allow user to generate contact tracing report when user is selected
- Tweak to contact tracing report
- Fix dark mode styles for visitors
- Fix minor dark mode issues
- Add dark mode styles for asset manager
- Update handling of visitor data
- Fix dark mode styles for concierge
- Aggregate space data based off email rather than ID
- Fix to previous commit
- Tweak display of space report data
- Tweak handling of space data
- Fix rendering of space report table
- Fix space listing on space report
- Fix displaying of attendance data
- Ignore spaces without valid details on space report
- Add logic to checkin guests from PlaceOS bookings
- Fix rooms being counted twice for reports

#### Currency

- Fix using setting for currency code (#198)

#### Event

- Fix dark mode styles

#### Events

- Fix parsing of catering order data
- Prevent editing/deleting when unavailable
- Fix dates in calendar links
- Fix to converting visitor booking into event
- Fix overflow on notes
- Fix sizing of detail cards on details modal (#208)
- Fix converting bookings to events
- Fix loading space data for details modal
- Pass selected rooms as attendees
- Fix attendee status counts for event details modal

#### Explore

- Fix minor dark mode style issues
- Show links for delegated map bookings
- Fix positioning of space info tooltips

#### Form-fields

- Fix updating of space list on modal close

#### Spaces

- Fix showing space display name when listed

#### Workplace

- Update confirm button text for desk flow
- Add more logic to desktop meeting confirm modal
- Fix dark mode styles for visitor flow
- Fix dark mode styles for old UIs
- Add locker mocks to old desk flow
- Fix more dark mode styles
- Fix dark mode styles for booking success pages
- Add calendar links to desk success view
- Add loader to landing space availability display
- Fix visitor flow not returning to home after finished
- Add logic for checking in resources to qr code view
- Tweak code flow to create new booking for resource
- Hide location on landing due to no data source for the value
- Fix explore background
- Fix removing items from my day
- Change free space polling to 60 second intervals

### Features

#### Bookings

- Add company field for visitor invites (#211)
- Add simple lookup for past visitors
- Add attendees key to bookings

#### Concierge

- Add dark mode styles
- Display people count data on space report

#### Form-fields

- Update user list field to handle visitor details (#215)

#### Org

- Add logic for setting default building based off geolocation

#### Outlook-addin

- Add desk flow to addin (#203)

#### Workplace

- Add calendar links to desk booking
- Show visitor bookings on schedule view (#207)
- Add group desk bookings to new flow

### Refactor

#### Catering

- Add dark mode styles to catering UI

#### Explore

- Update space info tooltip to match new design
- Clean up styles for map view

#### Styles

- Cleanup global styles

#### Workplace

- Update styles for global search
- Tweak to dark mode styles

## [1.10.0] - 2022-09-29

### Bug Fixes

#### Concierge

- Allow for removing editing on event details

#### Events

- Fix loading while making a booking
- Fix handling of catering
- Add setting to restrict zone spaces to email domain
- Fix to previous commit

#### Explore

- Set host when making space bookings from map

#### Workplace

- Fix icons on menus
- Fix catering check
- Force a host for space bookings

### Features

#### Events

- Allow restricting spaces by email domain

#### Workplace

- Add simple display for spaces in the landing favourites component
- Cleanup desk select modal and refactor it to shared module
- Add meeting flow for user availability
- Add feature to show calendar links for event booking
- Add custom meeting flow confirm modal for desktop

## [1.9.0] - 2022-08-31

### Bug Fixes

#### Bookings

- Tweak loading of booking types
- Minor visitor invite tweaks
- Fix invite visitor request
- Fix settings booking type

#### Catering

- Allow setting the currency globally
- Add button to remove ruleset conditions

#### Common

- Cleanup pending settings after server posted
- Fix saving user settings

#### Concierge

- Fix default route setting
- Allow deleting catering config rulesets
- Fix showing bookings on day view timeline
- Fix display of event details

#### Events

- Add logic to ignore booking when checking availability
- Prevent completing booking when resource is unavailable
- Fix default for event host
- Tweak handling default host
- Show notes on event details modal

#### Explore

- Fix listing of spaces for map statuses

#### Form-fields

- Force duration to match one of the available options

#### Outlook-rooms-addin

- Fix custom CSV template button

#### Payments

- Finalise payment form logic
- Add payment details to booking/event extension data

#### Spaces

- Fix capacity filter for space selection

#### Workplace

- Use id of the selected desk has no name
- Various cosmetic fixes
- Add missing fields from meeting form (all_day, host)
- Add logic for editing and deleting bookings
- Show images for available spaces on landing page
- Fix getting space details on landing page
- Minor fix
- Fix minor issues with new desk booking on desktop
- Fix host being required for bookings
- Fix logo showing on mobile
- Fix footer menu
- Fix showing errors for meeting book confirm
- Fix schedule filtering
- Fix space list on meeting confirm popup
- Add display for catering on meeting confirm and meeting details components
- Fix switching calendars on schedule (#171)
- Fix topbar showing for schedule
- Fix minor form issues
- Fix schedule view not showing catering
- Fix top menu links to be anchor tags instead of buttons
- Fix to previous commit
- Add all day check box to desk form

### Features

#### Explore

- Add setting for hiding displayed fields on device tooltip (#177)

#### Workplace

- Add ability to configure space zone allowed for adding catering
- Add ability to hide nav
- Add logic for adding and removing users from contacts
- Add new parking flow related components
- Add favourites sidebar to landing page

### Refactor

#### Outlook-plugin

- Clean up time filter layout

### Styling

#### Concierge

- Start adding dark mode styles to concierge

#### Workplace

- Update dark mode styles
- Various styling tweaks

## [1.8.0] - 2022-08-01

### Bug Fixes

#### Components

- Fix closing custom tooltips

#### Events

- Tweak to loading existing form data
- Set default host to current user
- Reload space list on building change
- Add handling for approvals through bookings

#### Workplace

- Allow hiding the map when selecting a desk
- Fix desk icon on schedule
- Add setting to prevent standalone room bookings
- Fix feature list for space filtering
- Tweak link for root page
- Minor style tweak to desk flow map view
- Add empty state to colleagues list on landing page
- Show past state on booking and event cards
- Fix check for standalone bookings
- Fix auto allocation of desk without map
- Tweak icons for schedule items

### Features

#### Workplace

- Allow hiding notes and attendees fields
- Allow hiding view location buttons
- Add setting to set the label for features on space search
- Allow for auto-allocation when no departments setup
- Show simpler menu on mobile when less options
- Add features field to space flow form
- Add setting to auto-approval native bookings
- Add details modal for events and bookings

## [1.7.0] - 2022-07-28

### Bug Fixes

#### Assets

- Tweaks to asset select modal

#### Catering

- Minor fixes

#### Components

- Add empty state to interactive map component (#162)
- Fix custom tooltip opening on touch devices

#### Events

- Tweak event form
- Fix post form call
- Add fallback for room ids when checking availability
- Add handling of availability checks when not using calendars

#### Explore

- Set booking type to desk when making desk booking from map
- Minor tweak to desk name display on info tooltip
- Fix searching and locating spaces on maps

#### Form-fields

- Add favourite toggling to space list field items
- Add host select form field for selecting delegated users as host for bookings

#### Map-kiosk

- Fix locating spaces

#### Mocks

- Fix people finding mocks

#### Workplace

- Add names to space booking form fields
- Remove unused property
- Fix desk flow form
- Fix selecting user calendars on schedule page (#171)
- Remove required validation for old flow
- Disable confirm if form invalid
- Remove desk from booking
- PR fixes
- Redo desk booking form validator
- Change to use createComponentFactory when routing is not used
- Fix shown data on dashboard when no user calendar

#### Worplace

- Use SpectatorRouting

### Features

#### Assets

- Add asset select modal components and hook them up to the asset list field
- Add desktop styles for asset select modal

#### Bookings

- Add component for inviting visitors (#123)

#### Catering

- Add components for new order item select modal
- Add more logic to new catering order modal components
- Add filters for catering order menu
- Add desktop styles for catering order modal

#### Components

- Add component to allow setting the default page

#### Desk

- Wip new desk flow

#### Explore

- Add legend to map view

#### Payments

- Add form field for card inputs
- Add ability to make payments

#### Spaces

- Add desktop styles to new space select modal

#### Workplace

- Add work from home settings components
- Add invite visitor flow to workplace
- Wip, new desk flow selector
- Desk filters
- Favourite desk and filtering
- Desk details
- Desk details map
- Booking confirmation flow
- Desk booking success state
- Styling tweaks
- Add assets booking
- Hookup font size changes in accessibility options
- Desk booking flow tests
- Add some test for success flow
- Add logic to handle non-calendar room bookings

#### Worplace

- Desk map view

### Refactor

#### Components

- Tweak styling and cleanup image carousel

## [1.6.0] - 2022-06-28

### Bug Fixes

#### Concierge

- Include desk name in desk bokings

#### Events

- Fix editing events
- Update logic to exclude periods when editing space durations

#### Form-fields

- Fix user list field adding external users and styling
- Tweak aria label for user list field
- Add value accessors to asset and catering list components

#### Workplace

- Check for valid bookings
- Update booking confirm to correctly show all day details
- Tweak topbar to have menu items centered
- Minor fixes to meeting flow

### Features

#### Assets

- Add lib for managing asset related data and components

#### Components

- Add pipe for formatting durations

#### Events

- Tweak checks for space availability
- Allow for cancelling of form post requests

#### Explore

- Add handling for signs of life for desk data (#157)

#### Users

- Add pipe for converting user id into a user object

#### Workplace

- Add support ticket modal component
- Allow for all day bookings in space booking flow
- Show notes on event details
- Consider booking checked-in state for desks
- Add success and confirm sections of the new meeting flow

### Styling

#### Workplace

- Add white borders to buttons on booking success

## [1.5.0] - 2022-06-06

### Bug Fixes

#### Bookings

- Tweak handling of all day bookings

#### Common

- Add handling for boolean strings to CSV parsing

#### Components

- Move locate map modal to components

#### Concierge

- Add formatting to contact tracing duration field
- Tweaks to contact tracing report
- Fix to previous commit
- Tweaks to contact duration parsing
- Tweak to contact duration rendering
- Tweaks to table formatting for contact events
- Tweak asset manager icons

#### Enrolment

- Fix build error

#### Events

- Pass ignore id to availability check
- Only check availability for new events or when date/duration changes
- Only check availability when there are spaces selected

#### Mocks

- Tweak area management data

#### Workplace

- Tweak desk flow map markers
- Tweak viewing of space location in event details

### Features

#### Form-fields

- Add logic for space list field component
- Add rich text input component (#142)

#### Mocks

- Add mock module for contact tracing

#### Spaces

- Add space list component
- Add logic to handle selecting spaces
- Add space filters component
- Start adding logic for space select map components
- Add logic for space select map component

#### Workplace

- Start adding new space booking flow
- Start adding new room select section of the booking form
- Change new space flow to meeting flow

### Refactor

### Styling

#### Space

- Tweak styles for space select components

## [1.4.0] - 2022-04-04

### Bug Fixes

#### Bookings

- Fix handling invalid data for asset features

#### Common

- Simplify retrieval of bindings metadata

#### Concierge

- Ignore extension data when downloading desk report data
- Fix default view when day-view is not available
- Fix contact tracing exec request
- Fix pipe to get user details
- Tweak display of data
- Fix loading user details
- Remove distance field from contact tracing
- Tweak logic for getting user details
- Add ability to download contact tracing data
- Fix action buttons for contact tracing report
- Tweak error handling for contact tracing
- Cleanup downloaded data
- Tweak download report generation
- Tweak error message display for contact tracing errors
- Tweak columns for contact tracing table
- Tweak handling of contact tracing
- Add formatting to contact tracing duration
- Round contact tracing duration
- Fix features check for reports
- Seperate options from the root of reports

#### Explore

- Tweak presence check
- Also check building for location services bindings
- Fix map features occasionally re-rendering
- Update booking modal to get max duration from settings
- Fix check for space info features
- Fix space info tooltip error
- Tweaks to map components
- Tweaks to handling tracking features
- Tweak desk status logic
- Tweak check for desk presence
- Fix adding space actions

#### Users

- Update location class to handle desks
- Add logic to handle user departments

#### Workplace

- Fix all day booking details
- Add setting to hide dashboard availability

### Features

#### Concierge

- Add loading state to contact tracing report

#### Contact-tracing

- Hookup contact tracing to API

#### Explore

- Allow hiding of feature list on space info tooltip

#### Workplace

- Add logic to handle group desk bookings

## [1.3.0] - 2022-03-02

### Bug Fixes

#### Booking-panel

- Add room image for mocks
- Minor tweaks

#### Components

- Update binding directive

#### Concierge

- Fix date format for approve/reject
- Tweak desk level select to one level
- Tweak handling of qr codes for desks
- Tweak qr code generation
- More desk tweaks
- Tweak qr code generation
- Add pagination of desk management
- Hide all level option for desks when on map view
- Add logic for removing desks
- Fix adding of new desks
- Poll desk bookings when viewing map
- Fix desk report rendering

#### Events

- Separate checking availability of selected spaces

#### Explore

- Tweak handling of at_location property on desk data
- Tweak desks status handling
- Remove transparency from desk styles
- Fix check for desks in use status

#### Mocks

- Fix booking rooms not updating map status
- Display test map
- More mock tweaks

#### Workplace

- Fix properties for space find map modal
- Prevent forkJoin  unsubscribe on error out
- Filter today's scheduled events and not from past
- Display dates on scheduled events
- Update handling of upcoming bookings on dashboard
- Tweak wording of booking success component
- Tweak dashboard wording
- Tweaks to dashboard
- Tweaks to dashboard
- Tweak handling of desk locations on dashboard
- More dashboard tweaks
- Remove expired bookings/events

### Features

#### Concierge

- Add ability to add desks from the management
- Allow enabling/disabling reports with settings

#### Workplace

- Added scheduled bookings to dashboard
- Add settings to display global search
- Add logic to allow for all day desk bookings when period is selectable

## [1.2.0] - 2022-01-27

### Bug Fixes

#### Components

- Fix logic for setting focus element on map

#### Concierge

- Fix reports page
- Tweak handling of guest attachments
- Limit report data to 2 decimal places
- Limit decimal places on more fields
- Add mock data for guest attachments
- Tweak styling for id/vaccine attachment tooltips
- Fix sortby button on asset manager
- Fix asset request table column sizes
- Reduce height of sidebar tiles

#### Workplace

- Add logic to user menu sign out button

### Features

#### Asset-manager

- Start adding mocks for assets

#### Common

- Add basic service for sending logs to a driver

#### Concierge

- Add basic contact tracing report
- Add logic and mocks for handling asset requests
- Hookup asset location modal to maps
- Add parking components

#### Workplace

- Add logic and components for parking
- Add logic for preventing duplicate parking space bookings
- Add logic for auto allocation of desks when booking (#99)

## [1.1.0] - 2021-12-01

### Bug Fixes

#### Api

- Encode ids passed into urls (#29)

#### App

- Force enable mocks on demo domain

#### Assets

- Fix workplace desk icons

#### Auth

- Wait for 30 seconds for user

#### Booking

- Tweaks to handling of desk bookings

#### Booking-panel

- Fix making bookings
- Show empty table when no next booking
- Tweak handling of data for current
- Minor cleanup of state service

#### Bookings

- Fix desk booking when no attendees set
- Fix desk booking user correctly
- Remove duplicate code
- Prevent double bookings
- Fix setting user/booked_by details in form data
- Fix check for desk metadata
- Add setting to ignore covid questions
- Only set bookings as all day when duration greater than 12 hours
- Fix setting start and end time from form data
- Tweak handling of all day bookings
- Fix booking type when clear form after booking
- Ignore cancelled bookings
- Ignore cancelled bookings for asset availability

#### Caterer-ui

- Fix build errors

#### Catering

- Add mocks for catering to events

#### Common

- Clean up vorlon service
- Fix usage of vanilla qr
- Tweak conditionals for feature available guard
- Fix ordering for grabbing user settings
- Fix conditional for getting top level settings
- Fix parsing settings
- Fix app name

#### Components

- Fix exec for binding value changes
- Fix map radius message location
- Fix avatar initials for names with special chars
- Add map fixes from client repo
- Fix confirm modal styling
- Prevent no viewer error getting thrown in map component
- Minor fixes to custom table component
- Reduce map viewer errors
- Fix scaling of map polygons
- Fix height of main section
- Tweak map polygon logic
- Fixes to drawing polygons on the map
- Tweaks to map polygon rendering
- Fix showing custom tooltips on touch

#### Concierge

- Fix adding external attendees to bookings (DNBNY-10)
- Fix re-checking in staff members
- Fix styles for SVGs (DNBNY-14)
- Fix editing bookings (DNBNY-13)
- Tweak checkin request params (#18)
- Fix build errors
- Prevent processing bookings erroring on day view (#40)
- Fix build errors
- Fix creating events (#41, #42, #43)
- Fix mocks for visitors
- Fix mocks for bookings
- Minor fixes
- Fix spaces displaying on day-view with mocks
- Fix viewing booking details
- Fix icon for facilities
- Fix making mock bookings
- Minor tweaks and add setup/breakdown values to mocks
- Add reports to default sidebar settings (#44)
- Also use space email when loading event resources (#40)
- Add images for catering options
- Fix overflow on sidebar links
- Minor day view fixes
- Fix lines for hours on dayview timeline
- Tweaks to visitor logic
- Add inputs for adding features to desks
- Fix mat elements in desks topbar
- Add fallbacks for user name in desk data
- Fix changing levels for desk map view
- Fix overflow for desk booking list
- Fix desk booking overflow
- Add tooltips to desk booking actions (#90)
- Tweak asset manager styling
- Tweaks to asset manager
- Tweak desk qr code URL

#### Control

- Update control module logic from client changes
- Update power state handling
- Update output display to use input refs
- Add help button
- Fix setting inputs when only one selected
- Minor fixes to help
- Fix loading tabs

#### Events

- Set recurrence to an empty object when not set (#17)
- Allow event start time to be in past (#10)
- Disable editing host (#8)
- Cleanup event methods
- Export event methods
- Minor fixes to events and types
- Fix setting system for events
- Tweak logic for updating/creating events
- Change form store from local to session storage
- Update event API methods with fixes from client work
- Handle setting system from resource list (#48)
- Debounce available space request
- Tweak availability list for spaces (#72)
- Default event location to selected space
- Fix to setting location

#### Explore

- Fix explore space and desk bindings
- Minor map logic fixes
- Fix zone area statuses
- Update bindings for desks
- Fix setting level detail for desk data
- Fix layering of device info tooltips
- Fix searching for role users
- Clear old search feature on route changes
- Fix booking modal form
- Add handling for coordinates when locating users
- Fix build errors
- Add handling for desk booking locations
- Add fixes from other clients to desk and zones service
- Minor fixes to search component and service
- Clear filter when closing search component
- Minor tweaks to search component
- Fix handling of zone toggling
- Use new booking form service for desk booking
- Fix to loading of space data
- Allow customising disabled of map layers
- Fix toggling of zone layer
- Fix display of zone labels
- Tweak zone label
- Fix disabling zones
- Only draw labels with a location
- Fix zone label location
- Only draw zones with a location
- Tweak drawing of zone polygons
- Fix displaying of zone polygons
- Fix statuses of zone polygons
- Fix setting the zone polygon colours
- Hide device count when 0
- Change space info tooltip to use custom tooltip component
- Tweaks to handling of settings
- Change locate_user to pass username
- Fix booking spaces from maps
- Fix space info tooltip
- Fix setting desk zones on explore bookings
- Set active user's name of desk tooltips
- Tweak z indexing of elements (#70)
- Default zone labels to center of zone
- Change ambient_temp to temperature
- Add ability to hide zone labels
- Minor fixes to explore zones
- Prevent booking non-bookable desks
- Fix setting for limiting date on desk bookings
- Update device dots to be above zones
- Tweak device info tooltip
- Add z-index to location pins
- Fix z-indexing of map features (#70)
- Fix booking qr code URL
- Fix booking desks from the map
- Draw zone polygons even if there is no status for them
- Minor tweaks to zone rendering
- Tweak display of people count
- Tweak zone labels
- Minor fix to device info component

#### Form-field

- Allow for internal emails to be configured (#45)

#### Form-fields

- Update user search field with changes from clients
- Change placeholder for action field to be contents
- Apply client fixes to user list and search fields

#### Map-kiosk

- Fix build errors
- Allow auto-bootstrapping with level id
- Add logic to reset kiosk state
- Fix virtual keyboard usage
- Allow for reset timer to be customised
- Add changes from client work
- Add slide toggle module to app
- Remove margins from map
- Clear locations when switching levels
- Fix type error

#### Mock

- Fix exec methods on system modules

#### Mocks

- Reduce number of attendees added to mock events
- Make internal/external attendees more explicit
- Update maps and desk mock data
- Correctly generate desk metadata for levels

#### Spaces

- Update spaces to handle calendar availability

#### Sw

- Fix checking of service worker

#### User

- Fix loading user details

#### Users

- Allow for custom internal user domain
- Add validation to phone input (#64)
- Fix handling of user domain for validating externals

#### Workplace

- Fix quick book flow (ASH-76)
- Fix setting the host (#22)
- Fix clearing booking form data (#19)
- Fix selecting past times on future dates (#20)
- Fix limits on selecting dates for bookings
- Fix polling of state on desk flow map
- Store current booking details in session storage
- Set booking title if empty
- Prevent host for desk bookings to be invalid
- Fix checking desks
- Fix making bookings (#31)
- Set falsy date to current time for free busy (#34)
- Add default for calendar send to get displayed booking
- Fix topbar user search requests
- Improve locating user from topbar search
- Minor fix to topbar search
- Minor fixes to listing data on schedule page
- Fix build error
- Fix icon for desks in footer menu
- Fix mocks for explore views
- Fix booking desks from map (#49)
- Cleanup app scaffolding
- Fix quick booking
- Minor fix to space booking flow
- Update logic for deleting and editing events
- More delete and edit changes
- Fix booking desks from map (#49)
- Add level display to desk flow map
- Fix references to old shared module
- Fix to previous commit
- More nav menu tweaks
- Fix importing shared modules
- Remove top header from dashboard
- Minor tweaks to sidebar
- Minor fixes to desk booking from map (#58, #59, #60)
- Fix schedule list error when no events
- Fix check for has ended on schedule event view
- Fix booking desks
- Fix locating spaces from dashboard
- Handle viewport resizes on whats on components
- Update form for deliveries
- Tweak help option text
- Fix nav layout on mobile
- Fix help tile contents on mobile
- Add proper mobile template for nav menu
- Fix settings desk booking zones
- Add setting to enable catering on room booking
- Add setting to hide contacts on dashboard
- Allow config to disable user form actions
- Add previous fix to other date field
- Fix space availability check for dashboard
- Show desk booking location details on my day page
- Fix time selector for desk bookings
- Set max desk booking duration to 12 hours
- Fix time options
- Set desk name to booking descriptions
- Show booking description instead of asset id
- Prevent editing of desk bookings
- Myday error parsing events
- MyDay item locations had event.body HTML tags
- Seperate views for viewing booking and event details
- Add setting to enable desk booking reasons
- Clean up settings
- Set booking type when selecting asset
- Truncate text on dashboard availability
- Minor dashboard fixes
- Fix check for allowing actions on calendar events
- Clean up top menu
- Tweak topbar actions
- Fix mobile footer menu
- Change bookings to reject rather than be removed (#84)
- Fix position and sizing of global search
- Fix locating spaces from dashboard
- Add topbar menu button for schedule page
- Fix global search locating users
- Fix status colours for event/booking cards
- Add tracking fn for event/booking listing
- Add max duration setting for room bookings
- Fix selecting a room a second time
- Tweak flow success wording
- Fix showing booking delete when not host

### Documentation

#### Readme

- Add link to settings.schema.json
- Settings to h2 not h1

### Features

#### Asset-manager

- Add logic for asset requests

#### Booking

- Allow users to book desks for others

#### Booking-panel

- Add new panel view
- Finish status logic for new views

#### Bookings

- Update booking UI to use nx
- Add setting to customise allowed bookings of x type for day

#### Caterer-ui

- Update caterers ui to use nx
- Add basic features to caterer UI

#### Catering

- Add ability to import catering menu from CSV file (#56)

#### Common

- Change app name to default to URL path
- Add route guard for checking enabled features

#### Components

- Add custom table component
- Add custom tooltip component
- Add virtual keyboard component
- Add handling for more content types in map features
- Add ability to focus elements on map
- Add global banner component (#82)

#### Concierge

- Update concierge to use nx
- Add desk booking management section
- Add modal for editing desks to desks section
- Add visitor components and logic
- Add components and logic for listing staff
- Allow viewing visitors for the current week
- Add logic for setting remote state of visitors
- Add map view and bookings for desks (DNBNY-3)
- Add reports
- Add more content to desk reports
- Allow selecting multiple/all levels for desk listing
- Allow user to add multiple groups to desks
- Add logic for URL approving and rejecting desks
- Add logic for basic space reporting
- Add qr printing logic for visitors
- Start adding components for points management
- Finish adding logic for points
- Add catering report (#57)
- Add some charts to desk report
- Start adding asset manager components
- Add form components for assets
- Add extra logic for visitors (#92, #93, #94, #95)
- Add file upload component from enrolment to asset manager
- More asset manager logic
- Add location listing modal to asset manager
- Add new column to guest list for vaccination proofs (#97)

#### Control

- Finish main component
- Start adding tooltips for topbar icons
- Add logic for routing inputs to outputs
- Hookup bindings for camera controls
- Hookup bindings for capture module
- Hookup environmental controls
- Add ability to join and control video conferences
- Add custom help modal
- Add main logic for tabbed view

#### Day-view

- Add booking modal and logic

#### Enrolment

- Add new enrolment app
- Allow users to upload attachments to their guest details (#91)
- Add ability to upload vaccination proof (#96)

#### Explore

- Add logic to pin items on the map
- Add locating user and add map radius component
- Add map space booking modal
- Update desks service to handle desk data
- Allow polling desk status from staff API
- Update details display on zone labels
- Add ability to display custom zones on map
- Allow selecting a time for desk bookings
- Allow pinning of any element with query parameters
- Add ability to show qr code for booking rooms

#### Form-fields

- Pull in updated user-list field from client work

#### Libs

- Move shared logic into libraries and initials nx workspace

#### Map

- Update map to allow for templates and HTML as feature content

#### Map-kiosk

- Update map kiosk to use nx
- Add desk booking to map kiosk
- Add bootstrap parameter to handle OSK enablement

#### Mocks

- Cleanup mocks
- Update driver mocks to match placeos implementations

#### Sentry

- Add sentry integration

#### Settings

- Allow for custom css variables from settings

#### Timetable

- Start adding timetable app

#### Visitor-kiosk

- Update visitor kiosk to use nx
- Cleanup checkin flow components
- Add covid disclaimer

#### Workplace

- Update workplace app to use nx
- Cleanup desk booking flow
- Add tooltip to desks on booking map view (MCKPOC-27)
- Add route and component for checkin in desk bookings
- Allow user to checkin with building or lvl id
- Allow desk booking for groups
- Start rewriting booking flows
- Add main form page components for space bookings
- More rewriting of space flow components
- Finish logic for main space booking flow
- Re-write logic for listing user's events/bookings
- Add logic for viewing user's event details
- Start rewrite of desk booking flow
- Add logic and components for desk booking flow
- Add logout button to user menu
- Allow changing of desk filters
- Add global search to topbar
- Add catering to space booking flow
- Allow for extra paragraph to be added to help tiles
- Add building selector to nav menu
- Add whats on section to application
- Add section to dashboard for deliveries
- Add ability to set time during the day for desk bookings
- Update application nav
- Allow setting custom host for events and bookings
- Add building select to user menu
- Update user control menu
- Add tooltip for building selection
- Add help tooltip
- Add display & accessibility tooltip
- Add logic for saving user settings
- Add new landing page
- Add components for new schedule page
- Add mobile calendar to new schedule page
- Allow filtering spaces by features for booking

### Refactor

#### Booking

- Refactor bookings api methods

#### Booking-panel

- Start refactor

#### Calendar

- Refactor calendar service

#### Concierge

- Simplify dayview timeline component
- Simplify event booking modal component
- Refactor desk view and add checkin QR codes (#55)

#### Css

- Remove mixins and sass variables for css custom props

#### Events

- Refactor events api

#### Explore

- Generalise options for explore state service

#### Form-fields

- Move field components to new lib folder

#### Guests

- Refactor guest api methods

#### Staff

- Refactor staff api methods

#### Ui

- Refactor searchbar component

#### Visitor-kiosk

- Overall refactor

#### Workplace

- Refactor event listing components
- Start refactor of schedule event details
- Refactor display of booking/event details
- Refactror view room modal component
- Refactor help components
- Refactor user directory components
- Refactor control page components
- Change view room modal to map locate modal

### Styling

#### Concierge

- Tweak styling for desk report

#### Workplace

- Minor tweak

<!-- generated by git-cliff -->
