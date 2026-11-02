# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### Bug Fixes

#### Apps

- Fix bugs in signage, stagehand, assistant panel and small apps

#### Auth

- Preserve mobile auth cookies
- Update client to recover expired-token requests

#### Common

- Recover stalled zone loading
- Report identifiable GA4 page views per route (HIO687AS) (#560)
- Stop org settings overrides after teardown
- Remove credentials from Sentry events
- Correct the Sentry trace settings
- Report startup errors to Sentry
- Remove check-in tokens from Sentry events
- Use current IANA names in the time zone list

#### Components

- Keep chat messages that cannot be sent

#### Concierge

- PROJ-1902 align parking request edit form
- Show parking allocation groups
- Open map studio from links and allow the maps feature
- Correct six booking and status logic bugs
- Keep data safe when loads fail or filters change
- Let the sidebar collapse and fit tables on laptops
- Confirm destructive actions and show failed updates
- Correct small copy and accessibility issues
- Expose state and names in shared controls
- Name icon-only buttons and links
- Add alt text and dialog semantics
- Let users turn off single-key shortcuts
- Add keyboard alternatives to drag and drop
- Name the remaining icon-only buttons

#### Deps

- Update Sentry to 11 and keep its data collection unchanged

#### Events

- Preserve monthly recurrence metadata PPT-2526
- Address review of attendee flags

#### Lint

- Clear all lint errors in the workspace

#### Loading-screen

- Reduce zone load timeout from 120s to 30s

#### Org

- Fallback to individual requests for settings metadata

#### Signage-manager

- Report Angular errors to Sentry

#### Test

- Destroy testing module after each app spec

#### Visitor-kiosk

- Fix check-in, registration and photo UX issues
- Warn visitors before the idle reset
- Set the page language from the selected locale

#### Workplace

- Fix zone filters for new room and desk flows
- Fix various visitor edit bugs
- Fix capacity display for -1
- Preserve monthly recurrence start PPT-2509
- Preserve parking request shift duration
- Show server error when booking cancel fails (HIO-489)
- Show international visitor option in visitor flow
- Meeting flow UX fixes
- Desk flow UX fixes
- Visitor, parking, locker and code flow UX fixes
- Your Bookings, team schedule and other page UX fixes
- Home page and app shell UX fixes

### Features

#### Auth

- Exchange Entra tokens for PlaceOS tokens

#### Booking-panel

- Show capacity and where to book

#### Bookings

- Add an internal or external type for visitors

#### Common

- Add Google Analytics (#496)
- Add dark theme colour overrides and a domain loading gradient
- Add opt-in Sentry Session Replay

#### Concierge

- Add homebase field to desks (PPT-2413)
- Add user groups column to parking bookings
- Add a report of the bookings of a single user (PPT-2844)
- Group the remaining sidebar links under Other
- Move the topbar items into the sidebar
- Map Management page with the map editor
- Mount the AI panel in the Map Management editor

#### Control

- Add a phone layout
- Improve the phone layout

#### Events

- Flag attendees as international and internal/external

#### Map-studio

- Open the level being edited, signed in from Concierge

#### Signage-manager

- Add display management PPT-2673
- Sort distribution playlist items by next play
- Add media to a playlist from the playlist view

#### Workplace

- Run as a Teams and Microsoft 365 personal tab
- Add new desk flow
- Add new visitor booking flow
- Add desk week card to landing page (PPT-2330)
- Add UI for new team schedule view
- Add initial API integration for team schedule
- Hook up favourites and team member flags for colleagues
- Update desk auto-assign to factor in user groups
- Let users customise the landing page

### Performance

#### Components

- Pause the page background animation after loading

#### Concierge

- Reduce list rendering and workflow requests

### Refactor

#### Apps

- Remove unused code from the remaining apps
- Share app setup, test setup and service worker config
- Use lib helpers in place of app copies

#### Common

- Build the time zone list from the browser

#### Concierge

- Update parking report graphs and metrics to be more useful
- Remove signage management section

#### Libs

- Remove unused components, pipes and upload permission wiring
- Remove unused code from common, users and payments
- Share one helper for toggling favourites
- Share the zone rules loader and app version details
- Add provideValueAccessor for form field providers
- Share the themed logo, announce directive and helpers

#### Signage

- Share player rules with the signage manager

#### Signage-manager

- Share assignment, approval and schedule text

## [2610.2] - 2026-10-08

### Performance

#### Apps

- Reduce initial bundle sizes

#### Common

- Fetch the default locale and lazy-load the native domain form
- Load Sentry and the snack bar on demand
- Keep forms, QR and upload libraries out of initial bundles

#### Concierge

- Drop eager chips, dialog and timezone code from startup

## [2610.1] - 2026-10-08

### Bug Fixes

#### Auth

- Update client to recover expired-token requests

#### Booking-panel

- Fix meeting state errors and panel text

#### Bookings

- Save full day for all-day room bookings (PPT-2804)
- Leave approval to the backend for users who cannot approve

#### Catering

- Show load errors and keep order updates reliable

#### Common

- Update favourite signals immediately PPT-2695
- Recover stalled zone loading
- Show light logo when dark mode is not allowed
- Apply synced user groups after first load (PPT-2811)
- Don't stall startup when analytics fails to initialise

#### Concierge

- Confirm before removing an email template
- Correct empty messages on short URL and email template lists
- Warn when parking request approval fails
- Show new parking spaces at once and hide stale overlay
- Warn when room calendars do not load

#### Control

- Stop stuck spinners and stale room state
- Tab defaults, voice lifecycle and recording controls
- Handle hang-up failure without rethrowing

#### Events

- Handle multi-room booking edge cases PPT-2572
- Keep public event visibility and edits correct PPT-2247

#### Signage

- Keep playing from cache while offline

#### Signage-manager

- Brand kit, layer layout and the save race
- The frontend defects found in the pre-push audit
- Show playlist assignment errors
- Keep media list state through uploads and failures
- Harden playlist approval, editing and loading
- Retry playlist list and show version load errors
- Keep template edits and show template errors
- Check layout positions before saving a template
- Keep lists, permissions and flags on the settled group
- Label the command palette for screen readers
- Make zone trees keyboard accessible and retryable
- Fix display and zone data, errors and paging
- Add display and zone error keys to the default locale
- Harden AI image job, rail and save flows
- Reload the content report and show partial checks
- Tighten group admin, sharing and branding
- Label unreadable parents and accept a missing features route
- Keep group selection and lists stable
- Fix playlist approval, adding media and status
- Fix media uploads, selection and animations
- Keep templates on their live ID
- Fix brand kit saves and image editor flows
- Tidy image generation and align its styling
- PPT-2649 keep unscoped zone search usable

#### Styles

- Restore Tailwind utility selector specificity

#### Workplace

- Clarify pending room bookings (PPT-2781)
- Report partial group desk booking failures

### Features

#### Booking-panel

- Add opt-in panel QoL features

#### Catering

- Add order workflow tools to the order list
- Add prep summary and delivery runs panel
- Alert staff about new and cancelled orders
- Add kitchen display board
- Print order dockets and export orders as CSV
- Add bulk menu actions and item duplicate
- Change the status of selected orders

#### Common

- Log service worker status
- Send app identity headers with API requests

#### Components

- Select table rows by key and show load errors
- Add bulk action helper and selection bar

#### Concierge

- To, CC and BCC fields on email templates (PPT-2239)
- Add keyboard shortcuts
- Approve or reject bookings in bulk
- Warn before leaving unsaved changes

#### Control

- Add room QoL improvements

#### Signage

- Apply templates to displays and zones PPT-2690
- Support local time play once schedules

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
- Show templates in display schedules
- Add schedule timezone selection
- Highlight differences in template approval modal
- Add schedule validity start times
- Add schedule masks
- Add template merge flag
- Edit name and display name for displays and zones
- Add display status, loop length and unsaved template guard
- Add media sort/filter, delete usage and duplicate
- Add command palette
- Add takeover conflict warnings and content report
- Add group level feature flags
- Add group default permissions and AD group sync
- Screenshot thumbnails for webpage and plugin media (PPT-2822)

#### Styles

- Add animated gradient background

### Performance

### Refactor

#### Signage-manager

- Rename AI code to ImageGen

## [2608.1] - 2026-08-20

### Bug Fixes

#### Bookings

- Remove start clamping for all day bookings
- Use stored recurrence end date PPT-2672
- Roll back bookings when asset requests fail PPT-2678

#### Ci

- Restore nx test pipeline

#### Common

- Guard nested lookup against primitives
- Widen upload state type to unblock compilation
- Let fixed devices boot offline from cached state
- Prevent unhandled organisation retry errors

#### Concierge

- Tweak level selections/defaults and resource booking paginations
- Export current desk list

#### Events

- Warn on visitor meeting host changes (PPT-2375)
- Warn when changed host remains attendee (PPT-2640)
- Restore attendee-only notification option (PPT-2514)

#### Explore

- Align zone polygons with map

#### Org

- Fallback to individual requests for settings metadata

#### Parking

- Derive request status from the booking process state

#### Signage

- Hold failed-initialisation restarts to the recovery limits
- Let an api-key player start with no network
- Stop a version update navigating away from the display

#### Signage-manager

- Let webpage media carry a thumbnail

#### Uploads

- Report upload failures instead of reporting success

### Features

#### Concierge

- Add no show details to parking reports
- Show parking booking history
- Show desk booking history

#### Events

- Notify only new attendees for PPT-2514

#### Signage

- Hold application reloads until they are safe to apply
- Add window.signage console diagnostics
- Add a stall-based recovery watchdog
- Add template player

#### Signage-manager

- Add save hotkeys to form modals
- Scope zone search to selected hierarchy
- Initial implementation for templates
- Add display management PPT-2673
- Add template media backgrounds
- Show groups signage items are shared with PPT-2679
- Add template approval workflow
- Add template sharing

#### Workplace

- Add parking restriction radio options
- Add meeting notes reset

### Performance

#### Common

- Show cached organisation data while the latest loads
- Show cached translations while the latest load
- Show cached user details while the latest load

### Refactor

#### Locale

- Prune dead keys, de-dup shared strings, drop _N plurals

## [2607.1] - 2026-07-06

### Bug Fixes

#### Auth

- Preserve mobile auth cookies

#### Bookings

- Preserve monthly review recurrence PPT-2526
- Prevent asset option update loop
- Defer booking requests until consumed
- Remove using assigned_asset_name from name details
- Update start/end to most strictly source from date/duration
- Tweak readiness gate for form state

#### Common

- Initialise saved org location on load
- Break runtime import cycle between event and catering classes

#### Concierge

- Update parking report downloads

#### Forms

- Wait for user before form initialisation

#### Mobile

- Add config to hide status bar and remove safe area
- Fix applying MDM system id to panel UIs
- Fix System ID MDM key

#### Org

- Rework default building init logic

#### Uploads

- Handle token refreshes mid-upload

#### Workplace

- Prevent user with reserved desk from booking by default
- Stabilize signal migration
- Preserve parking request shift duration

### Features

#### Catering

- Support external catering backend in workplace bookings

#### Concierge

- Add warning to resource assignment for existing bookings
- Reject clashing assignment bookings and reject overlapping user bookings

#### Mobile

- Add MDM config support
- Add MS Intune support to mobile apps

#### Signage-manager

- Add ability to upload multiple media items at once
- Add list and folder views to media list
- Paginate media, playlist and display requests
- Add support for distribution playlists

### Refactor

#### Bookings

- Clean up form service

#### Components

- Replace svg-viewer map renderer with dynamic map

#### Concierge

- Clean up styles for day view

#### Explore

- Convert explore services and map components to signals

#### Signage-manager

- Migrate to signals

#### Visitor-kiosk

- Migrate to use signals

## [2606.1] - 2026-06-04

### Bug Fixes

#### PPT-2509

- Preserve monthly recurrence week

#### PPT-2512

- Preserve recurrence end dates

#### Booking-panel

- Fix error when parsing timezones

#### Bookings

- Count recurrence instances from first occurrence
- Preserve monthly room recurrence PPT-2509
- Preserve monthly weekday recurrence

#### Common

- Refresh token before uploading files
- Cache organisation metadata
- PPT-2518 preserve selected booking date
- Suppress bookable hours date warning for PPT-2518
- Cap desk booking duration to bookable hours PPT-2511

#### Concierge

- Show deleted parking booking status
- Respect bookable hours in room utilisation PPT-2506
- Fix room booking list display items
- Align booking status terminology
- Fix status display for desk bookings
- Tweak handling of event statuses when room mismatches occur
- PROJ-1902 align parking request edit form

#### Events

- Preserve monthly recurrence weekday PPT-2509
- Align recurrence payloads with calendar backend

#### Form-fields

- Correct recurrence instance end dates PPT-2513

#### Service-worker

- Harden update handling

#### Signage

- Harden media cache storage

#### Signage-manager

- Refresh translated labels
- Handle failed media uploads

#### Workplace

- Show booking context in lists CDU-242
- Update parking request confirmation PROJ-1874

### Features

#### Auth

- Guard apps by subsystem read access

#### Bookings

- Add group booking containers
- Write app metadata to extension data
- Add rule host override settings

#### Common

- Show service worker update card

#### Concierge

- Add attendance report people breakdown
- Report cancelled booking totals
- Approve recurring parking bookings
- Add parking request creation

#### Service-worker

- Support automatic app reloads

#### Settings

- Add environment bar indicator

#### Signage

- Show media type icons in debug playlist

#### Signage-manager

- Localize app text
- Add app translations

#### User

- Add loading and processing of user groups and permissions

### Performance

#### Common

- Cache org zones and bulk load metadata

### Refactor

#### Signage

- Simplify media playback logic

## [2604.1] - 2026-04-28

### Bug Fixes

#### Bookings

- Fix display for desks in group bookings

#### Catering

- Tweak logic to work correctly
- Fix calculating delivery time (PPT-2424)

#### Concierge

- Fix camera feed displays on remote support
- Keep historical bookings when changing desk assignments
- Add error handling to desk assignment errors
- Improve UX for booking rules modal

#### Events

- Tweak check for setting event resources

#### Explore

- Add bookable hours checks and handling for booking modals

#### Form-fields

- Fix updating recurrence field instance date (PROJ-1773)

#### Visitor-kiosk

- Fix visitor authentication for beverages
- Fix scanning QR codes
- Improve responsiveness of QR scanning

### Features

#### Bookings

- Add check and flow for recurrence clashes (PPT-2241)
- Add ability to edit visitor bookings (PPT-2333)

#### Concierge

- Add new URL fields to rooms model and form
- Update emergency contacts to use the asset endpoints
- Add ability to delete recurring desk bookings (PPT-2351)
- Add view for listing parking requests
- Add international toggle for visitors (PPT-2372)
- Add currency options to app settings modals
- Add the ability to add vehicle details to parking
- Add ability to upload/download parking spaces
- Add waitlisted status for parking requests
- Add new site attendance report (PPT-2451)
- Add ability to view room history from management view (PPT-2227)
- Add setting to limit assigned desks/parking
- Add delete option to parking bookings and hide action column when no actions are available

#### Events

- Add check for clashing recurring events (PPT-2366)

#### Explore

- Link to external URL for space booking when set
- Add ability to show event details on space tooltips

#### Signage-manager

- Add zones view
- Add tree view to zone listing

#### Stagehand

- Add push notifications for alerts

#### Workplace

- Add parking request flow
- Add ability for users to choose to add teams meeting to room bookings
- Add auto-allocation logic to desk booking

### Refactor

## [2511.1] - 2025-11-05

### Features

#### Stagehand

- Add ability to manage dashboard alerts

### Refactor

#### Libs

- Move commonly used classes and methods to common

## [2510.1] - 2025-10-02

### Bug Fixes

#### Concierge

- Fix saving room availability for catering and assets (PPT-2202)

#### Events

- Fix displaying attendees for group events (PPT-2209)

### Features

#### Concierge

- Add extra fields to points of interest (PPT-2175)
- Add booked by column to desk bookings table (PPT-2201)
- Add ability to approve/reject cal event series

#### Signage

- Add ability to display webpages (PPT-2173)

#### Workplace

- Add ability to quick book desks from landing view (PPT-2212)
- Add ability for user to set their plate number (PPT-2238)

## [2507.1] - 2025-07-30

### Bug Fixes

#### Bookings

- Check booking rules before submitting booking request

#### Events

- Check booking rules before submitting booking

#### Signage

- Add ability to add zones to displays

### Features

#### Concierge

- Add ability to set orientation of signage displays
- Add support for scheduling to signage playlists
- Add deals and offers section and logic (PPT-2100)
- Add ability to approve playlist changes (PPT-2161)

#### Control

- Add topbar tooltip for lighting levels (PPT-2125)

#### Signage

- Add logic for handling schedule override playlists (PPT-2146)
- Add ability for triggers to activate playlists (PPT-2153)

#### Workplace

- Add deals and offers section and logic

## [2506.1] - 2025-06-12

### Bug Fixes

#### Redirect

- Fix build not having oauth-resp.html

### Features

#### Concierge

- Add ability to print guest passes from visitor list (PPT-2029)
- Add ability to set approval flag for rooms (PPT-2005)
- Add ability to set default work hours for auto-release (PPT-2001)
- Add component for survey rendering, remove survey-core dep

#### Redirect

- Add simple app for redirecting users to set domains (PPT-2015)

#### Workplace

- Add icon for recurrence on details modals (PPT-2028)
- Indicate to user that room bookings require approval (PPT-2006)

### Refactor

## [2504.1] - 2025-04-09

### Bug Fixes

#### Booking-panel

- Add extra text when no QR code (PPT-1956)

#### Catering

- Tweak uploading charge code logic (PPT-1988)

#### Explore

- Use visible user locations first (PPT-1944)

### Features

#### Concierge

- Add ability to email access QR codes to visitors (PPT-1935)
- Add ability to release all lockers (PPT-1886)
- Add ability to delete user's desk bookings (PPT-1982)
- Add ability to set custom auto-release for resource types
- Add extra options to auto-release (PPT-2001)

## [2502.1] - 2025-02-07

### Bug Fixes

#### Concierge

- Handle errors when saving desk details (PPT-1805)

#### Visitor-kiosk

- Fix flow redirections after registration (PPT-1812)

### Features

#### Concierge

- Add security field to desk model (PPT-1784)
- Add ability to set which visitor listing columns show (PPT-1799)

#### Visitor-kiosk

- Add success header for self-registered visitors (PPT-1797)
- Add ability for visitors to checkout (PPT-1808)
- Add ability to select language on visitor kiosk (PPT-1897)

## [2412.1] - 2024-12-10

### Features

#### Visitor-kiosk

- Add translation hooks for text in visitor kiosk (PPT-1720)

## [2411.1] - 2024-11-05

### Features

#### Concierge

- Allow user to print all desk QR codes for a level (PPT-1572)

## [2410.1] - 2024-10-08

### Features

#### Concierge

- Add week view for calendar events (PPT-1508)
- Add ability to search for calendar events (PPT-1509)
- Add ability display bookings based on the building timezone

#### Workplace

- Rework work location UI (PPT-1482)

## [2408.1] - 2024-08-06

### Bug Fixes

### Features

#### Concierge

- Add option to select points of interest from a map (PPT-1343)
- Add event UI (PPT-1216)
- Add event UI (PPT-1216)
- Add ability to see parking space status on manage view (PPT-1379)

#### Workplace

- Add desk height options (PPT-1295, PPT-1298, PPT-1299, PPT-1300)
- Add desk height options (PPT-1295, PPT-1298, PPT-1299, PPT-1300)

## [2404.1] - 2024-04-30

### Bug Fixes

#### Assets

- Fix handling of clashes on edit (PROJ-658)

#### Events

- Fix ignoring assets for availability on edit (PPT-1227)
- Use linked bookings for assets if available

#### Explore

- Fix various minor issues

### Features

#### Concierge

- Add section for management for URLs
- Add public link for points of interest

### Refactor

#### Explore

- Re-write mapspeoples integration

## [2402.1] - 2024-02-27

### Bug Fixes

#### Workplace

- Fix to metadata for link created events (PPT-981)

### Features

#### Concierge

- Add signage playlists logic

### Refactor

#### Maps-people

- Clean up naming of service and properties

## [2312.1] - 2023-12-21

### Bug Fixes

#### Catering

- Add handling for invalid delivery times (PPT-1108)

#### Concierge

- Fix filtering of invalid asset requests (PPT-1126)

#### Explore

- Factor in assigned users for user status (PPT-797)

### Features

#### Events

- Add ability to handle multi-day events

## [2311.1] - 2023-11-15

### Bug Fixes

#### Booking-panel

- Add new custom status text when meeting is checked in early (PPT-976)

#### Concierge

- Tweaks to printing QR codes (PPT-952)

#### Workplace

- Add logic to prevent duplicates showing when using calendar links (PPT-981)

### Features

#### Chat

- Update response handling for longer server processes

#### Concierge

- Add ability to manage emergency contacts

#### Visitor-kiosk

- Add ability to print visitor label after checkin (PPT-656)

### Refactor

## [2310.1] - 2023-10-06

### Bug Fixes

#### Common

- Tweak MS outlook links (PPT-900)

#### Concierge

- Allow editing of desk/room restrictions (PPT-932)

### Features

#### Booking-panel

- Add ability to end in progress meetings (PPT-909)

#### Bookings

- Add status display for linked asset bookings (PPT-915)

#### Workplace

- Add setting to allow 24 hour time (PPT-848)

## [2309.1] - 2023-09-07

### Bug Fixes

## [2308W3] - 2023-08-22

### Features

#### Concierge

- Add ability to make standalone visitor bookings (PPT-787)

## [2308W2] - 2023-08-08

### Styling

#### Concierge

- Minor custom table style changes

## [2307W4] - 2023-07-25

### Bug Fixes

#### Analytics

- Update service to use Google Tags
- Tweak analytics logic

#### Bookings

- Fix booking non-lockers

#### Catering

- Add placeholder image for catering items

#### Concierge

- Tweak management of desks (PPT-541)
- List asset product sub-items in tables

#### Control

- Fix button styles

#### Events

- Tweak handling of availability bindings

#### Explore

- Only hide desk tooltip on mobile when free

#### Form-fields

- Fix input icon colors on dark mode
- Tweak handling of host field data (PPT-583)

#### Locale

- Fix sentence to make it more generic

#### Spaces

- Allow selecting building for space searching
- Add translation key for favourites in space select modal

#### Survey

- Survey preview styling tweak

#### Workplace

- Add success page for checking in resources
- Tweaks to checkin flow
- Various minor fixes
- Minor tweaks to upcoming events (#309)
- Add idle timeout for room booking form
- Fix idle timeout on room booking

### Features

#### Analytics

- Send route and page title changes (PPT-86)

#### Booking-panel

- Add event panel view

#### Concierge

- Add view for asset purchase orders
- Allow selecting date for asset requests (PPT-612)

#### Form-fields

- Add recurrence form fields (PPT-484)

#### Locale

- Add logic for setting locales

#### Survey

- Survey response page
- Change selection widget viz

#### Workplace

- Allow user to view the changelog
- Add flow and select modal for lockers
- Add locker filter to schedule page

### Refactor

#### Workplace

- Fix image related issues (#219)
- Tweak dark mode styles

### Styling

#### Survey/concierge

- Add svg to assets folder for drag and drop icon
- Add not-found icon referenced in NotFoundComponent
- Add mock building image, building name and address for Building-List-Component
- Style mock building image to fit container

## [1.12.0] - 2022-11-08

### Bug Fixes

#### Common

- Tweak handling of spaces for calendar links
- Fix adding spaces as attendees to google calendar links

## [1.11.0] - 2022-10-19

### Bug Fixes

#### Booking-panel

- Add dark mode to bootstrap view

#### Common

- Fix calendar link generation
- Fix to previous commit
- Fix calendar links for google calendar
- Fix timezone issue with calendar links
- Tweak handling of attendees for calendar links

#### Concierge

- Add dark mode styles for asset manager

#### Events

- Fix dates in calendar links

#### Workplace

- Fix dark mode styles for old UIs

### Features

#### Concierge

- Add dark mode styles

### Refactor

#### Styles

- Cleanup global styles

#### Workplace

- Update styles for global search

## [1.10.0] - 2022-09-29

### Features

#### Workplace

- Add feature to show calendar links for event booking

## [1.9.0] - 2022-08-31

### Bug Fixes

#### Common

- Cleanup pending settings after server posted
- Fix saving user settings

#### Payments

- Finalise payment form logic

#### Workplace

- Add logic for editing and deleting bookings

### Features

#### Workplace

- Add favourites sidebar to landing page

### Styling

#### Concierge

- Start adding dark mode styles to concierge

#### Workplace

- Various styling tweaks

## [1.7.0] - 2022-07-28

### Bug Fixes

### Features

#### Assets

- Add asset select modal components and hook them up to the asset list field

#### Bookings

- Add component for inviting visitors (#123)

#### Payments

- Add form field for card inputs
- Add ability to make payments

#### Workplace

- Add work from home settings components
- Hookup font size changes in accessibility options
- Add logic to handle non-calendar room bookings

## [1.6.0] - 2022-06-28

### Features

#### Workplace

- Allow for all day bookings in space booking flow
- Show notes on event details
- Add success and confirm sections of the new meeting flow

## [1.5.0] - 2022-06-06

### Bug Fixes

#### Common

- Add handling for boolean strings to CSV parsing

### Features

#### Form-fields

- Add rich text input component (#142)

#### Workplace

- Start adding new space booking flow

### Refactor

### Styling

## [1.3.0] - 2022-03-02

### Bug Fixes

### Features

#### Concierge

- Add ability to add desks from the management

## [1.2.0] - 2022-01-27

### Features

#### Common

- Add basic service for sending logs to a driver

#### Concierge

- Add parking components

#### Workplace

- Add logic and components for parking

## [1.1.0] - 2021-12-01

### Bug Fixes

#### Common

- Fix app name

### Features

#### Asset-manager

- Add logic for asset requests

#### Concierge

- More asset manager logic
- Add location listing modal to asset manager

## [1.0.0] - 2021-10-25

### Bug Fixes

#### Assets

- Fix workplace desk icons

#### Common

- Clean up vorlon service
- Fix usage of vanilla qr
- Tweak conditionals for feature available guard
- Fix ordering for grabbing user settings
- Fix conditional for getting top level settings
- Fix parsing settings

#### Concierge

- Fix mat elements in desks topbar

#### Control

- Add help button

#### Explore

- Tweak zone label

#### Mocks

- Update maps and desk mock data

#### Sw

- Fix checking of service worker

#### User

- Fix loading user details

#### Workplace

- Fix mocks for explore views
- Fix check for allowing actions on calendar events
- Clean up top menu
- Add topbar menu button for schedule page

### Features

#### Booking-panel

- Add new panel view

#### Catering

- Add ability to import catering menu from CSV file (#56)

#### Common

- Change app name to default to URL path
- Add route guard for checking enabled features

#### Concierge

- Add modal for editing desks to desks section
- Add components and logic for listing staff
- Add logic for setting remote state of visitors
- Add some charts to desk report

#### Control

- Add custom help modal

#### Form-fields

- Pull in updated user-list field from client work

#### Libs

- Move shared logic into libraries and initials nx workspace

#### Settings

- Allow for custom css variables from settings

#### Workplace

- Finish logic for main space booking flow
- Allow setting custom host for events and bookings
- Add logic for saving user settings

### Refactor

#### Concierge

- Refactor desk view and add checkin QR codes (#55)

### Styling

<!-- generated by git-cliff -->
