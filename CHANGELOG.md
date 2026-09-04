# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### Bug Fixes

#### Common

- Update favourite signals immediately PPT-2695
- Recover stalled zone loading

#### Events

- Handle multi-room booking edge cases PPT-2572

#### Signage-manager

- Brand kit, layer layout and the save race
- The frontend defects found in the pre-push audit

### Features

#### Common

- Log service worker status

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

## [2608.1] - 2026-08-20

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
- Remove start clamping for all day bookings
- Use stored recurrence end date PPT-2672
- Roll back bookings when asset requests fail PPT-2678

#### Ci

- Restore nx test pipeline

#### Common

- Initialise saved org location on load
- Break runtime import cycle between event and catering classes
- Guard nested lookup against primitives
- Widen upload state type to unblock compilation
- Let fixed devices boot offline from cached state
- Prevent unhandled organisation retry errors

#### Concierge

- Update parking report downloads
- Tweak level selections/defaults and resource booking paginations
- Export current desk list

#### Events

- Warn on visitor meeting host changes (PPT-2375)
- Warn when changed host remains attendee (PPT-2640)
- Restore attendee-only notification option (PPT-2514)

#### Explore

- Align zone polygons with map

#### Forms

- Wait for user before form initialisation

#### Mobile

- Add config to hide status bar and remove safe area
- Fix applying MDM system id to panel UIs
- Fix System ID MDM key

#### Org

- Rework default building init logic
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

- Handle token refreshes mid-upload
- Report upload failures instead of reporting success

#### Workplace

- Prevent user with reserved desk from booking by default
- Stabilize signal migration
- Preserve parking request shift duration

### Features

#### Concierge

- Add warning to resource assignment for existing bookings
- Reject clashing assignment bookings and reject overlapping user bookings
- Add no show details to parking reports
- Show parking booking history
- Show desk booking history

#### Events

- Notify only new attendees for PPT-2514

#### Mobile

- Add MDM config support
- Add MS Intune support to mobile apps

#### Signage

- Hold application reloads until they are safe to apply
- Add window.signage console diagnostics
- Add a stall-based recovery watchdog
- Add template player

#### Signage-manager

- Add ability to upload multiple media items at once
- Add list and folder views to media list
- Paginate media, playlist and display requests
- Add support for distribution playlists
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

#### Bookings

- Clean up form service

#### Components

- Replace svg-viewer map renderer with dynamic map

#### Concierge

- Clean up styles for day view

#### Explore

- Convert explore services and map components to signals

#### Locale

- Prune dead keys, de-dup shared strings, drop _N plurals

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

#### Assets

- Fix handling of clashes on edit (PROJ-658)

#### Booking-panel

- Add new custom status text when meeting is checked in early (PPT-976)
- Add extra text when no QR code (PPT-1956)

#### Bookings

- Check booking rules before submitting booking request
- Fix display for desks in group bookings

#### Catering

- Add handling for invalid delivery times (PPT-1108)
- Tweak uploading charge code logic (PPT-1988)
- Tweak logic to work correctly
- Fix calculating delivery time (PPT-2424)

#### Common

- Tweak MS outlook links (PPT-900)

#### Concierge

- Allow editing of desk/room restrictions (PPT-932)
- Tweaks to printing QR codes (PPT-952)
- Fix filtering of invalid asset requests (PPT-1126)
- Handle errors when saving desk details (PPT-1805)
- Fix saving room availability for catering and assets (PPT-2202)
- Fix camera feed displays on remote support
- Keep historical bookings when changing desk assignments
- Add error handling to desk assignment errors
- Improve UX for booking rules modal

#### Events

- Fix ignoring assets for availability on edit (PPT-1227)
- Use linked bookings for assets if available
- Check booking rules before submitting booking
- Fix displaying attendees for group events (PPT-2209)
- Tweak check for setting event resources

#### Explore

- Factor in assigned users for user status (PPT-797)
- Fix various minor issues
- Use visible user locations first (PPT-1944)
- Add bookable hours checks and handling for booking modals

#### Form-fields

- Fix updating recurrence field instance date (PROJ-1773)

#### Signage

- Add ability to add zones to displays

#### Visitor-kiosk

- Fix flow redirections after registration (PPT-1812)
- Fix visitor authentication for beverages
- Fix scanning QR codes
- Improve responsiveness of QR scanning

#### Workplace

- Add logic to prevent duplicates showing when using calendar links (PPT-981)
- Fix to metadata for link created events (PPT-981)

### Features

#### App-loader

- Add new app for listing available applications (PPT-2474)

#### Booking-panel

- Add ability to end in progress meetings (PPT-909)

#### Bookings

- Add status display for linked asset bookings (PPT-915)
- Add check and flow for recurrence clashes (PPT-2241)
- Add ability to edit visitor bookings (PPT-2333)

#### Chat

- Update response handling for longer server processes

#### Concierge

- Add ability to make standalone visitor bookings (PPT-787)
- Add ability to manage emergency contacts
- Add signage playlists logic
- Add section for management for URLs
- Add public link for points of interest
- Add option to select points of interest from a map (PPT-1343)
- Add event UI (PPT-1216)
- Add event UI (PPT-1216)
- Add ability to see parking space status on manage view (PPT-1379)
- Add week view for calendar events (PPT-1508)
- Add ability to search for calendar events (PPT-1509)
- Add ability display bookings based on the building timezone
- Allow user to print all desk QR codes for a level (PPT-1572)
- Add security field to desk model (PPT-1784)
- Add ability to set which visitor listing columns show (PPT-1799)
- Add ability to email access QR codes to visitors (PPT-1935)
- Add ability to release all lockers (PPT-1886)
- Add ability to delete user's desk bookings (PPT-1982)
- Add ability to set custom auto-release for resource types
- Add extra options to auto-release (PPT-2001)
- Add ability to print guest passes from visitor list (PPT-2029)
- Add ability to set approval flag for rooms (PPT-2005)
- Add ability to set default work hours for auto-release (PPT-2001)
- Add component for survey rendering, remove survey-core dep
- Add ability to set orientation of signage displays
- Add support for scheduling to signage playlists
- Add deals and offers section and logic (PPT-2100)
- Add ability to approve playlist changes (PPT-2161)
- Add extra fields to points of interest (PPT-2175)
- Add booked by column to desk bookings table (PPT-2201)
- Add ability to approve/reject cal event series
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

#### Control

- Add topbar tooltip for lighting levels (PPT-2125)

#### Events

- Add ability to handle multi-day events
- Add check for clashing recurring events (PPT-2366)

#### Explore

- Link to external URL for space booking when set
- Add ability to show event details on space tooltips

#### Signage

- Add logic for handling schedule override playlists (PPT-2146)
- Add ability for triggers to activate playlists (PPT-2153)
- Add ability to display webpages (PPT-2173)

#### Signage-manager

- Add zones view
- Add tree view to zone listing

#### Stagehand

- Add ability to manage dashboard alerts
- Add push notifications for alerts

#### Visitor-kiosk

- Add ability to print visitor label after checkin (PPT-656)
- Add translation hooks for text in visitor kiosk (PPT-1720)
- Add success header for self-registered visitors (PPT-1797)
- Add ability for visitors to checkout (PPT-1808)
- Add ability to select language on visitor kiosk (PPT-1897)

#### Workplace

- Add setting to allow 24 hour time (PPT-848)
- Add desk height options (PPT-1295, PPT-1298, PPT-1299, PPT-1300)
- Add desk height options (PPT-1295, PPT-1298, PPT-1299, PPT-1300)
- Rework work location UI (PPT-1482)
- Add icon for recurrence on details modals (PPT-2028)
- Indicate to user that room bookings require approval (PPT-2006)
- Add deals and offers section and logic
- Add ability to quick book desks from landing view (PPT-2212)
- Add ability for user to set their plate number (PPT-2238)
- Add parking request flow
- Add ability for users to choose to add teams meeting to room bookings
- Add auto-allocation logic to desk booking

### Refactor

#### Explore

- Re-write mapspeoples integration

#### Libs

- Move commonly used classes and methods to common

#### Maps-people

- Clean up naming of service and properties

## [2308W2] - 2023-08-08

### Bug Fixes

#### Analytics

- Update service to use Google Tags
- Tweak analytics logic

#### Booking-panel

- Add dark mode to bootstrap view

#### Bookings

- Fix booking non-lockers

#### Catering

- Add placeholder image for catering items

#### Common

- Fix calendar link generation
- Fix to previous commit
- Fix calendar links for google calendar
- Fix timezone issue with calendar links
- Tweak handling of attendees for calendar links
- Tweak handling of spaces for calendar links
- Fix adding spaces as attendees to google calendar links

#### Concierge

- Add dark mode styles for asset manager
- Tweak management of desks (PPT-541)
- List asset product sub-items in tables

#### Control

- Fix button styles

#### Events

- Fix dates in calendar links
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

- Fix dark mode styles for old UIs
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

- Add dark mode styles
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

- Add feature to show calendar links for event booking
- Allow user to view the changelog
- Add flow and select modal for lockers
- Add locker filter to schedule page

### Refactor

#### Styles

- Cleanup global styles

#### Workplace

- Update styles for global search
- Fix image related issues (#219)
- Tweak dark mode styles

### Styling

#### Concierge

- Minor custom table style changes

#### Survey/concierge

- Add svg to assets folder for drag and drop icon
- Add not-found icon referenced in NotFoundComponent
- Add mock building image, building name and address for Building-List-Component
- Style mock building image to fit container

## [1.9.0] - 2022-08-31

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
- Fix app name
- Add handling for boolean strings to CSV parsing
- Cleanup pending settings after server posted
- Fix saving user settings

#### Concierge

- Fix mat elements in desks topbar

#### Control

- Add help button

#### Explore

- Tweak zone label

#### Mocks

- Update maps and desk mock data

#### Payments

- Finalise payment form logic

#### Sw

- Fix checking of service worker

#### User

- Fix loading user details

#### Workplace

- Fix mocks for explore views
- Fix check for allowing actions on calendar events
- Clean up top menu
- Add topbar menu button for schedule page
- Add logic for editing and deleting bookings

### Features

#### Asset-manager

- Add logic for asset requests

#### Assets

- Add asset select modal components and hook them up to the asset list field

#### Booking-panel

- Add new panel view

#### Bookings

- Add component for inviting visitors (#123)

#### Catering

- Add ability to import catering menu from CSV file (#56)

#### Common

- Change app name to default to URL path
- Add route guard for checking enabled features
- Add basic service for sending logs to a driver

#### Concierge

- Add modal for editing desks to desks section
- Add components and logic for listing staff
- Add logic for setting remote state of visitors
- Add some charts to desk report
- More asset manager logic
- Add location listing modal to asset manager
- Add parking components
- Add ability to add desks from the management

#### Control

- Add custom help modal

#### Form-fields

- Pull in updated user-list field from client work
- Add rich text input component (#142)

#### Libs

- Move shared logic into libraries and initials nx workspace

#### Payments

- Add form field for card inputs
- Add ability to make payments

#### Settings

- Allow for custom css variables from settings

#### Workplace

- Finish logic for main space booking flow
- Allow setting custom host for events and bookings
- Add logic for saving user settings
- Add logic and components for parking
- Start adding new space booking flow
- Allow for all day bookings in space booking flow
- Show notes on event details
- Add success and confirm sections of the new meeting flow
- Add work from home settings components
- Hookup font size changes in accessibility options
- Add logic to handle non-calendar room bookings
- Add favourites sidebar to landing page

### Refactor

#### Concierge

- Refactor desk view and add checkin QR codes (#55)

### Styling

#### Concierge

- Start adding dark mode styles to concierge

#### Workplace

- Various styling tweaks

<!-- generated by git-cliff -->
