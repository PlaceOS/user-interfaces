# Changelog

All notable changes to this project will be documented in this file.

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

#### Org

- Tweak setting initial building when lazy loading buildings (PPT-750)

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

### Spec

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

- #238 fix auto populate host
- Set overlay header to white (#238)
- Only show offline state when explicit offline image set (#245)
- Fix getting space details for new bookings
- Add binding to room name
- Fix check for displaying current status
- Redirect to bootstrap when invalid system set
- Fix check for showing room status
- Fix display of checkin info for current event
- Tweak generation of next available time (#304)
- Fix time status display checks
- Remove mock data
- Allow cross-origin images on event view
- Fix background image on event view
- Add bindings to customise booking form (PPT-310)
- Use book_now exec for booking creation (PPT-310)
- Fix book_now parameters
- Fix book_now duration value (PPT-310)
- Fix position of host and time details (PPT-366)
- Hide start time field on booking modal
- Fix binding for hiding host on form (PPT-310)
- Prevent bookings when in use
- Fix next booking button to allow bookings
- Use current booking in determining status if not value available (PPT-418)
- Fix status line conditionals
- Fix check for bookings for status
- Scope bootstrap systems to org zone
- Add error handling to bookings
- Add flag to force using api for current bookings
- Fix to previous commit
- Limit available duration based on next booking
- Change book now to be a confirmation rather than form
- Fix book now calls
- Correctly handle errors
- Round up minutes for status
- Change handling of form title value (PPT-560)
- Fix booking from checkin view (PPT-631)
- Show host select when disable_book_now_host is false
- Allow for setting host on panel view

#### Booking_panel

- Allow min duration to be applied

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
- Fix overflow of menu modals
- Display item tags on order modal
- Tweak catering config handling
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
- Fix hearing binding
- Remove remote reference to material icons
- Fix output listing with mocks
- Fix button styles
- Debounce tab changes from binding
- Fix toggling of input sources
- Delay updating source volume
- Add logic to allow ignoring server update from binding
- Ignore first change to microphone volume
- Minor fixes
- Fix status bar slider bindings
- Add translation module

#### Desks

- Fix end time for all day (#314)

#### Enrolment

- Allow reading application settings from the authority

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
- Fix handling setting building when no region set
- Ignore setting region as undefined/null
- Fix handling regions without any buildings
- Allow setting region when no building is set
- Fix loading buildings for regions
- Add handling for zone images (#229)
- Tweak setting default building
- Fix priority of settings overrides
- Get booking rules for buildings
- Allow arbitrary fields in desk class (PPT-508)
- Fix parsing and toJSON logic for desks (PPT-508)
- Set building metadata to load lazily
- Update region metadata to be lazy loaded
- Tweak loading of building metadata
- Fix initialising building metadata
- Prevent filtering out levels from unloaded buildings (PPT-704)

#### Outlook-addin

- Add translation module
- Add dropdown to select building (PPT-371)

#### Spaces

- Allow selecting building for space searching
- Setup status service to handle building switching
- Fix typo
- Fix display of levels on select modal (#258)
- Show space features on select modal
- Add translation key for favourites in space select modal
- Fix space images being squished (#291)
- Minor styling fixes (#300)
- Fix map on space select modal (PPT-460)
- Tweak select modal pin size (PPT-442)
- Fix loading individual space data (PPT-511)
- Fix version of space (PPT-594)

#### Survey

- Fix filtered question incorrect drop
- Survey preview styling tweak
- Fix builder bank questions sync
- Fix select linking issue
- Tweak layout
- Page nav styling tweak
- Fix modal overflow (PPT-68)
- Add survey response modal
- Fix incorrect rating parsing
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

- Use current user for qr checkin booking (#237)
- Allow booking from checkin timeline (#246)
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

#### Control

- Add hearing loop code binding and UI

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

#### Org

- Add region zones
- Allow setting default building from user's timezone

#### Spaces

- Add name remapping and hiding to features list (PPT-283)

#### Survey

- Add building-list and survey-list pages and associated components, and routes to Concierge
- Add radio group question + rename question types
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
- Selection widget styling tweak
- Add page sections to survey responses
- Add survey statistics
- Read logo from concierge metadata
- Add date filters
- Add deleted flag to question modal
- Handle soft-deleted questions
- Edit questions + soft delete handling

#### Survey/concierge

- Add more pages and components into Concierge
- Add components related to survey creator views and update routing
- Add complete-survey component and not-found component and update routes

#### Surveys

- Add visitor trigger to dropdown (PPT-359)

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

### PPT-472

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

### Ci

### Shore

### Spec

### Styling

#### Survey

- Styling change for survey rating options

### Tweak

#### Survey

- Tweak threshold colors

## [1.12.0] - 2022-11-08

### Bug Fixes

#### Bookings

- Tweak to visitor listing
- Hide image section when no images present (#213)
- Fix visitor name being stored
- Show different error message for visitor bookings
- Tweak to payments

#### Calendar

- Only load calendars when needed

#### Common

- Tweak handling of spaces for calendar links
- Fix adding spaces as attendees to google calendar links

#### Concierge

- Fix rendering of space report table
- Fix space listing on space report
- Fix displaying of attendance data
- Ignore spaces without valid details on space report
- Add logic to checkin guests from PlaceOS bookings
- Fix rooms being counted twice for reports

#### Control

- Fix marked usage
- Fix handling of route parameters for auth

#### Event

- Fix dark mode styles

#### Events

- Fix to converting visitor booking into event
- Fix overflow on notes
- Fix sizing of detail cards on details modal (#208)
- Fix converting bookings to events
- Fix loading space data for details modal
- Pass selected rooms as attendees
- Fix attendee status counts for event details modal

#### Explore

- Show links for delegated map bookings
- Fix positioning of space info tooltips

#### Spaces

- Tweak space pipe retrieving data
- Fix showing space display name when listed

#### Workplace

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

#### Form-fields

- Update user list field to handle visitor details (#215)

#### Org

- Add logic for setting default building based off geolocation

#### Workplace

- Show visitor bookings on schedule view (#207)
- Add group desk bookings to new flow

## [1.11.0] - 2022-10-19

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

#### Catering

- Fix passing currency code to catering modal

#### Common

- Fix calendar link generation
- Fix to previous commit
- Fix calendar links for google calendar
- Fix timezone issue with calendar links
- Tweak handling of attendees for calendar links

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

#### Currency

- Fix using setting for currency code (#198)

#### Events

- Fix parsing of catering order data
- Prevent editing/deleting when unavailable
- Fix dates in calendar links

#### Explore

- Fix minor dark mode style issues

#### Form-fields

- Fix updating of space list on modal close

#### Outlook-addin

- Fix desk success view

#### Spaces

- Tweak listing of spaces features for filtering
- Fix error when searching for spaces

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

### Features

#### Concierge

- Add dark mode styles
- Display people count data on space report

#### Outlook-addin

- Add desk flow to addin (#203)
- Move meeting booking to use form logic from workplace (#202, #201)

#### Workplace

- Add calendar links to desk booking

### Refactor

#### Catering

- Add dark mode styles to catering UI

#### Explore

- Update space info tooltip to match new design
- Clean up styles for map view

#### Outlook-addin

- Add dark mode styles

#### Styles

- Cleanup global styles

#### Workplace

- Update styles for global search
- Tweak to dark mode styles

## [1.10.0] - 2022-09-29

### Bug Fixes

#### Booking-panel

- Tweaks to loading system data

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

#### Booking-panel

- Add logic to show meeting details on panel UI (#195)

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

#### Outlook-plugin

- Fix handling of room data when making a booking
- Minor fixes
- Fix building selection filter
- Hook up filters for location
- Fix upcoming bookings
- Fix checks when finding space
- Catch office token errors
- Tweak handling of office API
- Tweak login logic
- Update auth flow
- More auth tweaks
- Add error handling to auth page
- Fix typo
- Fix to auth error
- Tweak office api handling
- Fail the auth flow if credentials are missing
- Tweak fragment parsing
- Fix to previous commit
- Tweak to previous commit
- Tweak auth handling
- Fix to previous commit
- Perform normal login when not in outlook
- Tweak auth initialisation

#### Outlook-rooms-addin

- Hide space image block when there is no image for space
- Fix custom CSV template button

#### Payments

- Finalise payment form logic
- Add payment details to booking/event extension data

#### Spaces

- Fix overflow on space list for select modal
- Fix capacity filter for space selection
- Fix display of level details when viewing space details

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

#### Outlook-plugin

- Add office sign-in to app initialisation

#### Workplace

- Add ability to configure space zone allowed for adding catering
- Add ability to hide nav
- Add logic for adding and removing users from contacts
- Add new parking flow related components
- Add favourites sidebar to landing page

### Refactor

#### Outlook-plugin

- Clean up time filter layout
- Simplify find space logic

### Styling

#### Concierge

- Start adding dark mode styles to concierge

#### Workplace

- Update dark mode styles
- Various styling tweaks

### Ci

## [1.8.0] - 2022-08-01

### Bug Fixes

#### Components

- Fix closing custom tooltips

#### Events

- Tweak to loading existing form data
- Set default host to current user
- Reload space list on building change
- Add handling for approvals through bookings

#### Outlook addin

- Access image property of Spaces via space.images

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

### Styling

#### Outlook addin

- Tweak margins and sizing

## [1.7.0] - 2022-07-28

### Bug Fixes

#### Assets

- Tweaks to asset select modal

#### Calendar

- Prevent loading calendars when no user calendar available

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

#### Outlook addin

- Fix type error in form fields and delete booking_type which was unnecessary
- Use EventEmitter to correctly update spaces based on Filter selections

#### Spaces

- Display image on select list

#### Workplace

- Add names to space booking form fields
- Remove unused property
- Remove required validation for old flow
- Disable confirm if form invalid
- Remove desk from booking
- PR fixes
- Fix desk flow form
- Redo desk booking form validator
- Change to use createComponentFactory when routing is not used
- Fix selecting user calendars on schedule page (#171)
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

#### Org

- Add setting to allow setting a default building

#### Payments

- Add form field for card inputs
- Add ability to make payments

#### Spaces

- Add desktop styles to new space select modal

#### Workplace

- Wip, new desk flow selector
- Desk filters
- Favourite desk and filtering
- Desk details
- Desk details map
- Booking confirmation flow
- Desk booking success state
- Styling tweaks
- Add assets booking
- Add work from home settings components
- Add invite visitor flow to workplace
- Desk booking flow tests
- Hookup font size changes in accessibility options
- Add some test for success flow
- Add logic to handle non-calendar room bookings

#### Worplace

- Desk map view

### Refactor

#### Components

- Tweak styling and cleanup image carousel

#### Outlook addin

- Refactor filter logic, try to clear filter when navigating back to form page
- Make MatBottomSheet service private
- Change eventEmitter to BehaviorSubject in Features-Filter service
- Add button to download csv template by using window.open method instead of a[download]

### Styling

#### Outlook addin

- Change heading sizes from xl to lg for consistency, add 2rem width-margins to room-details component and room-confirm component for consistency with other components
- Add text to show how many filters applied to Filter button
- Centre the close mat-icons on modals as it was getting cropped off
- Style button in room-booking

### Ci

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

#### Outlook

- Styling tweak

#### Outlook addin

- Correct typo of variable name from selectedLevel to selected_level in find-space.component
- Change incorrect src path to SVG in image components
- Fix styling issue where toggle buttons were incorrectly aligned in find-space.component
- Disable Submit button in room-confirm component after first click, as it was making multiple bookings for the same room

#### Spaces

- Tweak new space select map component
- Change control and booking panel UIs to request rooms on demand

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

#### Outlook addin

- Add 'New Booking' button in booking-confirmed component to return to form

#### Spaces

- Add pipe for converting space id into a user object

#### Users

- Add pipe for converting user id into a user object

#### Workplace

- Add support ticket modal component
- Allow for all day bookings in space booking flow
- Show notes on event details
- Consider booking checked-in state for desks
- Add success and confirm sections of the new meeting flow

### Refactor

#### Outlook addin

- Add mat option for all levels in map view
- Apply delay of processing map features when the floor level is changed so that map pins will load
- Refactor find-space.component to remove unmanaged subscription, delete unused debug tracing
- Add microsoftonline.com as an AppDomain in the manifest.xml file
- Declare and export the not-found component from the Shared Module

### Styling

#### Outlook

- Tweak styling
- Fix time selector sizing

#### Outlook addin

- Changed overflow settings to auto to include scrollbar on y axis
- Apply overflow-auto to x-axis of find-space.component
- Add access to the image of a space where the image is returned as a string within an array
- Change max width of views to 375pixels
- Shrink margins and make font smaller, updated code of accessing image of a space
- Change margins from 4rem to 2rem
- Reduce font sizes in Room-confirm component and Room-details component. Repeat mat-icon for each attendee

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

- New space select modal
- Add space list component
- Add space details component
- Add space filter display component
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

### Ci

#### Workflows/codeql-analysis

- Add CodeQL

## [1.4.0] - 2022-04-04

### Bug Fixes

#### Booking-panel

- Fix error handling for bookings
- Add handling for checking in on panel
- Allow for panel UI to scale with screen size
- Tweak check for bookable
- Fix to previous commit
- Add extra details to offline display
- Fix binding for offline image
- Allow more customisation to qr code

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

#### Booking-panel

- Allow for custom URLs for QR code
- Allow for offline state to be shown for panel
- Add binding for presence

#### Concierge

- Add loading state to contact tracing report

#### Contact-tracing

- Hookup contact tracing to API

#### Explore

- Allow hiding of feature list on space info tooltip

#### Workplace

- Add logic to handle group desk bookings

### Refactor

### Styling

## [1.3.0] - 2022-03-02

### Bug Fixes

#### Booking-panel

- Add room image for mocks
- Fix catching modal errors (#102)
- Enable user select field on modal
- Minor tweaks
- Fix closing booking modal
- Fix setting room when booking
- Fix updating panel status

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

#### Outlook-addin

- Fix setting of event form view to get available spaces

#### Spaces

- Fix availability check on space select modal

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

### Refactor

#### Room-details

- Worked on date picker, custom date format
- Dates before today's date greyed out in calendar drop down

### Styling

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

#### Enrolment

- Minor styling fixes

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

#### Booking-panel

- Allow for touch to book

#### Bookings

- Ignore cancelled bookings
- Ignore cancelled bookings for asset availability

#### Common

- Fix app name

#### Components

- Tweak map polygon logic
- Fixes to drawing polygons on the map
- Tweaks to map polygon rendering
- Fix showing custom tooltips on touch

#### Concierge

- Fix overflow for desk booking list
- Fix desk booking overflow
- Add tooltips to desk booking actions (#90)
- Tweak asset manager styling
- Tweaks to asset manager
- Tweak desk qr code URL

#### Enrolment

- Fix base href

#### Explore

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

#### Map-kiosk

- Remove margins from map
- Clear locations when switching levels
- Fix type error

#### Org

- Tweak org level settings

#### Timetable

- Fix overflow on smaller screens
- Fix base href

#### Workplace

- Fix global search locating users
- Fix status colours for event/booking cards
- Add tracking fn for event/booking listing
- Add max duration setting for room bookings
- Fix selecting a room a second time
- Tweak flow success wording
- Fix showing booking delete when not host

### Features

#### Asset-manager

- Add logic for asset requests

#### Concierge

- Start adding asset manager components
- Add form components for assets
- Add extra logic for visitors (#92, #93, #94, #95)
- Add file upload component from enrolment to asset manager
- More asset manager logic
- Add location listing modal to asset manager
- Add new column to guest list for vaccination proofs (#97)

#### Enrolment

- Add new enrolment app
- Add logic to handle uploads
- Allow users to upload attachments to their guest details (#91)
- Add ability to upload vaccination proof (#96)

#### Explore

- Add ability to show qr code for booking rooms

#### Timetable

- Start adding timetable app
- Add logic to display space events

#### Workplace

- Add new landing page
- Add components for new schedule page
- Add mobile calendar to new schedule page
- Allow filtering spaces by features for booking

## [1.0.0] - 2021-10-25

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

- Fix build errors
- Fix build error
- Various fixes and fix tests
- Add end time to current booking
- Minor binding tweaks
- Fix making bookings
- Fix type error
- Fix room status text
- Show empty table when no next booking
- Tweak handling of status
- Tweak handling of data for current
- Minor cleanup of state service
- Handle free time less than a minute
- Add timer for force status changes
- Fix book modal
- Change new bookings to use API

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

#### Control

- Update control module logic from client changes
- Tweak handling of volume and mute states
- Fix volume and mute bindings
- Update power state handling
- Update output display to use input refs
- Fix power bindings
- Add some mobile styles
- Add state for enabling VC
- Add help button
- Fix setting inputs when only one selected
- Display help when no available controls
- Hide help button when not needed
- Minor fixes to help
- Only show outputs when more than 2
- Fix initial loading of tabbed view
- Fix loading tabs
- Tweaks to updates and VC
- Update camera control logic

#### Events

- Set recurrence to an empty object when not set (#17)
- Allow event start time to be in past (#10)
- Disable editing host (#8)
- Cleanup event methods
- Export event methods
- Change form store from local to session storage
- Minor fixes to events and types
- Fix setting system for events
- Tweak logic for updating/creating events
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

#### Mock

- Fix exec methods on system modules

#### Mocks

- Reduce number of attendees added to mock events
- Make internal/external attendees more explicit
- Update maps and desk mock data
- Correctly generate desk metadata for levels

#### Org

- Fix loading mock organisation
- Filter out building not in the org zone
- Tweak loading of settings

#### Spaces

- Update spaces to handle calendar availability

#### Sw

- Fix checking of service worker

#### Testing

- Fix running testing framework

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
- Cleanup app scaffolding
- Fix quick booking
- Minor fix to space booking flow
- Update logic for deleting and editing events
- More delete and edit changes
- Fix booking desks from map (#49)
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

### Documentation

#### Readme

- Add link to settings.schema.json
- Settings to h2 not h1
- Add link to settings schema

### Features

#### Booking

- Allow users to book desks for others

#### Booking-panel

- Re-write panel display
- Add status bar to panel
- Add panel timeline component
- Add new panel view
- Add checkin view components
- Finish status logic for new views
- Add setting to show/hide qr code

#### Bookings

- Update booking UI to use nx
- Add setting to customise allowed bookings of x type for day

#### Caterer-ui

- Update caterers ui to use nx
- Add basic features to caterer UI

#### Catering

- Add components for listing catering orders
- Add catering menu components and logic
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

- Add catering menu and order list
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

#### Control

- Update control ui to use nx
- Finish main component
- Start adding tooltips for topbar icons
- Add logic for routing inputs to outputs
- Hookup bindings for camera controls
- Hookup bindings for capture module
- Hookup environmental controls
- Add simple view for source select modal
- Add meeting join logic
- Allow opening select meeting modal with query params
- Add ability to join and control video conferences
- Add custom help modal
- Add main logic for tabbed view
- Add controls for tabbed views
- Post selected input and handle selected tab bindings

#### Day-view

- Add booking modal and logic

#### Desk

- Add map_id to desk class

#### Explore

- Cleanup explore components
- Add logic to pin items on the map
- Add locating user and add map radius component
- Add map space booking modal
- Update desks service to handle desk data
- Allow polling desk status from staff API
- Update details display on zone labels
- Add ability to display custom zones on map
- Allow selecting a time for desk bookings
- Allow pinning of any element with query parameters

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

#### Org

- Allow for global application settings

#### Sentry

- Add sentry integration

#### Settings

- Allow for custom css variables from settings

#### Visitor-kiosk

- Update visitor kiosk to use nx
- Cleanup checkin flow components
- Add covid disclaimer

#### Workplace

- Add space booking flow component and form components
- Add new logic and components for space searching
- Add final components for space booking flow
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
