# Concierge - User Stories

This document describes user stories for the Concierge application, a front-of-house and workplace management console used by reception staff, workplace administrators, facilities teams, catering coordinators, and events coordinators.

The app covers room, desk, parking, locker, catering, asset, visitor, staff, reporting, content, and building configuration workflows.

## Personas

- **Concierge**: Front-of-house staff who manage daily bookings, visitor arrivals, approvals, and on-the-day exceptions.
- **Workplace Administrator**: Admin users who configure building hierarchy, bookable resources, booking rules, app settings, content, and access-controlled management areas.
- **Facilities Manager**: Facilities staff who monitor operational state, respond to issues, manage room configuration, and run occupancy reports.
- **Catering Coordinator**: Catering staff or admins who review orders, manage menus, and keep catering rules current.
- **Events Coordinator**: Staff who create, publish, and maintain events, offers, and promotional content.
- **Reporting User**: Managers who generate, export, and print operational reports for compliance, utilisation, and planning.

> **Routing note:** The app uses hash routing. All routes below are reached at `/#/<route>`. Appending `?mock=true` (for example `/#/book/lockers/manage?mock=true`) loads the app against mock data with authentication bypassed; this is how the e2e tests drive the app.

---

## Application Shell & Navigation

### US-001: Land on the default page
**As a** concierge
**I want to** open the app and land on a useful default page
**So that** I can start working without extra navigation

**Acceptance Criteria:**
- Opening `/#/` redirects through the configured `default_route`.
- The default route is expected to take users to room bookings unless the configured concierge settings override it.
- The top bar (`app-topbar`) and side navigation (`app-sidebar`) are visible once the route loads.
- The route loads against mock data when `?mock=true` is supplied.
- If the target route is unavailable because the feature is disabled, the app redirects to a reachable route instead of leaving the shell blank.

### US-002: Navigate between feature areas
**As a** concierge
**I want to** use the sidebar to move between bookings, management, reports, and standalone tools
**So that** I can reach any operational area quickly

**Acceptance Criteria:**
- The sidebar groups links under Bookings, Management, and Reports where child links exist.
- Bookings links include room bookings, desk bookings, parking bookings, locker bookings, asset bookings, catering bookings, visitor bookings, and visitor rules when those features are enabled.
- Management links include zones, rooms, desks, parking, lockers, catering, points, emergency contacts, signage, map features, URL management, email templates, and deals when those features are enabled.
- Standalone links include assets, staff, events, and surveys when enabled.
- The active route is highlighted.
- Links hidden by `app.features` or `app.feature_groups` are not shown to users without access.
- Management items are hidden from non-admin users.
- Custom report links configured in settings appear under Reports without duplicating built-in report IDs.

### US-003: Access account, notifications, and global state
**As a** concierge
**I want to** see notifications, account controls, loading state, and global app banners
**So that** I can manage my session and understand app-wide status

**Acceptance Criteria:**
- The top bar shows the configured logo, notification control, and current user avatar.
- The logo links back to the landing route.
- Global banners render above the active route when configured.
- Global loading state is visible while blocking app-level operations are in progress.
- Global chat is shown only when enabled by the PlaceOS service.

### US-004: Respect authorisation and unavailable routes
**As a** workplace administrator
**I want to** restrict routes to authorised users
**So that** operational and administrative data is not exposed to the wrong audience

**Acceptance Criteria:**
- Routes that require authentication use the application guard before loading feature modules.
- Unauthorised users are sent to the unauthorised page.
- Unknown routes redirect through the app fallback route.
- Feature links are filtered before users can navigate from the sidebar.

---

## Room Bookings (Day View)

Route: `/#/book/rooms` - container `[app-new-dayview]`

### US-010: View room bookings for the day
**As a** concierge
**I want to** see all room bookings for the selected day
**So that** I know which rooms are in use and when

**Acceptance Criteria:**
- The day view renders the booking list or timeline (`room-bookings`).
- Bookings can be viewed as timeline or list when both views are enabled.
- The selected date controls which bookings are shown.
- Each booking shows enough context to identify the room, organiser, time, and status.
- The view handles an empty day with a clear empty state.
- Cancelled or declined events are visually distinct from active bookings when they are included in the filter.

### US-011: Approve a pending room booking
**As a** concierge
**I want to** approve a pending room booking request
**So that** the requester gets confirmation of their reservation

**Acceptance Criteria:**
- Pending room bookings appear in the approvals area or row actions with an Approve action.
- Approving a booking updates its status to Approved.
- The action is disabled or removed after the approval succeeds.
- For recurring bookings, the user can approve a single occurrence or the whole series where the backend supports both scopes.
- A failed approval leaves the booking in its previous state and communicates the failure.

### US-012: Decline a room booking
**As a** concierge
**I want to** decline a pending room booking
**So that** the room is freed and the requester is informed

**Acceptance Criteria:**
- Pending room bookings expose a Decline action.
- Declining a booking updates its status to Declined.
- The action is reflected immediately in the approvals panel and booking list.
- For recurring bookings, the user can decline a single occurrence or the whole series where the backend supports both scopes.
- Declined bookings do not continue to block room availability.

### US-013: Create a room booking
**As a** concierge
**I want to** create a new room booking on behalf of a user
**So that** I can reserve a space for someone at reception

**Acceptance Criteria:**
- The New Booking control opens the booking modal.
- The form captures organiser, room, date, start time, end time, title, attendees, and any configured extra fields.
- The form supports charge code selection when charge codes are configured.
- Room availability is respected before saving.
- Saving the booking closes the modal and adds the booking to the active day view.
- Validation prevents saving without required booking details.

### US-014: Filter and export room bookings
**As a** concierge
**I want to** filter room bookings and download attendee data
**So that** I can focus on relevant bookings and share attendance data

**Acceptance Criteria:**
- Bookings can be filtered by Internal, External, and Cancelled event types.
- Bookings can be filtered by one or more levels.
- Level filters update the URL with `zone_ids` so the filtered view can be shared or reloaded.
- The setup and breakdown display can be toggled when `app.events.allow_setup_breakdown` is enabled.
- An attendee list can be downloaded when data is available.

### US-015: Preserve route-driven room context
**As a** concierge
**I want to** reload a filtered room booking URL
**So that** I can return to the same operational context

**Acceptance Criteria:**
- `zone_ids` query parameters restore the selected levels.
- A level from another building switches the active building to the matching parent building.
- Invalid or empty `zone_ids` values are ignored instead of breaking the page.
- Date controls keep the booking list aligned with the selected date.

---

## Desk Bookings

Routes: `/#/book/desks/events`, `/#/book/desks/map`, and `/#/book/desks/manage` - container `[app-desks]`

### US-020: View desk bookings
**As a** concierge
**I want to** view desk bookings for the selected date and level
**So that** I can see desk occupancy at a glance

**Acceptance Criteria:**
- The desk bookings list (`desk-bookings`) renders for the selected date.
- Bookings can be filtered by level, date, and search text.
- The list can be refreshed after booking or approval actions.
- The selected level is reflected in `zone_ids`.
- If all levels are selected, the app shows all bookable desks available to the current building context.
- Empty results show that no matching desk bookings exist.

### US-021: Book a desk for a user
**As a** concierge
**I want to** create a desk booking on behalf of a user
**So that** I can assign a desk at reception

**Acceptance Criteria:**
- A New Booking control opens the desk booking modal (`desk-book-modal`).
- The modal allows selecting a user, date, desk, and any required booking details.
- Only bookable desks are selectable for the booking.
- Saving creates the booking and makes it visible in the list.
- Validation prevents saving when the selected desk or user is missing.

### US-022: Approve or reject desk bookings
**As a** concierge
**I want to** approve or reject desk bookings
**So that** desk requests are confirmed or freed

**Acceptance Criteria:**
- Desk booking rows expose approval and rejection actions where applicable.
- Approve and Reject can also be triggered by `?approve=<id>` and `?reject=<id>` query parameters.
- Approved bookings show an approved state and no longer appear as pending.
- Rejected bookings show a declined or rejected state and do not block availability.
- "Reject All" rejects all eligible bookings for the current filtered view.
- Bulk rejection refreshes the list after completion.

### US-023: Manage desks
**As an** administrator
**I want to** add and edit desks, including assignment and bookability
**So that** the desk inventory reflects the real workspace

**Acceptance Criteria:**
- The manage view (`desks-manage`) lists desks with an add action.
- The desk modal edits `name`, `map_id`, `assigned_user`, `bookable`, features, groups, tags, homebase, and notes where supported.
- New desks are added to local data and require saving before they can be used.
- Desk management can be filtered by level and search text.
- Desk QR codes can be viewed or printed.
- Desk booking rules are configurable from the manage toolbar.

### US-024: Import and export desks
**As an** administrator
**I want to** bulk import and export desk inventory
**So that** large floor updates do not require one-by-one editing

**Acceptance Criteria:**
- The manage toolbar exposes a CSV upload action.
- Uploaded CSV rows are parsed into desk records.
- Missing desk IDs are generated before adding rows to local data.
- A template CSV can be downloaded.
- Import errors are reported without losing already loaded desk data.

### US-025: Use the desk map
**As a** concierge
**I want to** view desks spatially on a map
**So that** I can help users pick a location

**Acceptance Criteria:**
- `/#/book/desks/map` shows the desk map view.
- Map mode requires a specific level and does not use the "All" level option.
- Desk map data stays aligned with the selected level.
- Selecting a desk from the map can lead to booking or details where supported.

---

## Parking Bookings

Routes: `/#/book/parking/events/list`, `/#/book/parking/events/map`, `/#/book/parking/events/requests`, `/#/book/parking/events/bookings`, `/#/book/parking/manage/spaces`, `/#/book/parking/manage/users`, `/#/book/parking/manage/fleet`, and `/#/book/parking/manage/map` - container `app-parking`

### US-030: View parking bookings
**As a** concierge
**I want to** view parking reservations in list, map, or week view
**So that** I can see parking availability and assignments

**Acceptance Criteria:**
- Parking bookings render as a list (`parking-bookings-list`) or map (`parking-map`).
- The events section defaults to the list view when no child route is supplied.
- The view can be switched between list and map.
- Bookings can be filtered by level, date, period, and search text.
- Map view uses a single selected level.
- The availability counter shows occupied spaces against total spaces when enabled.

### US-031: Create a parking reservation or request
**As a** concierge
**I want to** create a parking reservation or parking request for a user
**So that** I can assign or request parking at reception

**Acceptance Criteria:**
- A reservation control opens the parking booking modal when direct reservations are enabled.
- A New Parking Request control opens the request modal (`parking-request-modal`) when request handling is enabled.
- The form captures user, date, vehicle or request details, and selected parking space where applicable.
- Direct reservations are disabled when `disable_reservations` is configured.
- Saving refreshes the active parking list.

### US-032: Manage parking spaces, users, and fleet
**As an** administrator
**I want to** manage parking spaces, parking users, and fleet vehicles
**So that** the parking inventory and assignments are accurate

**Acceptance Criteria:**
- Manage tabs cover Spaces, Users, Fleet, and Map.
- The Spaces view requires a selected level before creating a new space.
- The space modal (`parking-space-modal`) edits `identifier`, `map_id`, `assigned_user`, and `bookable`.
- Spaces can be assigned to users.
- Parking users can be created and searched.
- Fleet vehicles can be created and searched.
- Parking booking rules are configurable from the manage toolbar.

### US-033: Filter parking requests
**As a** concierge
**I want to** filter parking work by request type
**So that** I can focus on the queue I am processing

**Acceptance Criteria:**
- The events list exposes request filters when request handling is enabled.
- Filters include All, Requests, Pending Manual, Booked, and Waitlisted when waitlist support is enabled.
- Changing the filter updates the list without changing the selected date or level.
- The selected filter does not cause a navigation loop when query parameters update.

### US-034: Import and export parking spaces
**As an** administrator
**I want to** bulk import and export parking spaces
**So that** parking inventory updates can be managed efficiently

**Acceptance Criteria:**
- Spaces can be uploaded from CSV when a level is selected.
- A CSV export or template can be downloaded from the Spaces manage view.
- CSV upload is disabled until a level is selected.
- Imported spaces are associated with the active level.
- Invalid upload data is reported without clearing existing spaces.

### US-035: Preserve parking route state
**As a** concierge
**I want to** reload a parking URL with selected filters
**So that** I can share or return to the same parking view

**Acceptance Criteria:**
- `zone_ids` restores the selected level or levels.
- `period` restores Day or Week mode where the current view supports period switching.
- Hidden or disabled level selectors do not wipe a user's persisted level choice.
- Manage views snap an empty level selection back to the first available level.

---

## Locker Bookings

Routes: `/#/book/lockers/events` and `/#/book/lockers/manage` - container `[app-lockers]`

### US-040: View locker bookings
**As a** concierge
**I want to** view locker bookings for the selected level and date
**So that** I can see locker usage

**Acceptance Criteria:**
- The locker bookings list (`locker-bookings`) renders.
- Bookings can be filtered by level, date, and search text.
- A New Booking control opens the locker booking modal (`locker-booking-modal`).
- Locker bookings show approved, pending, and declined states where available.
- Empty views show no matching bookings instead of a blank page.

### US-041: Manage locker banks
**As an** administrator
**I want to** create locker banks and add lockers to them
**So that** the locker inventory is organised by physical location

**Acceptance Criteria:**
- The manage view (`locker-list`) lists locker banks with an Add Bank action.
- The bank modal (`locker-bank-modal`) requires a `level_id` and edits `name` and `map_id`.
- A bank's row menu allows adding lockers and viewing the bank layout.
- Expanding a bank reveals its child lockers.
- Child lockers can be created, edited, assigned, and marked bookable where supported.

### US-042: Release lockers
**As an** administrator
**I want to** release all lockers in a view
**So that** I can reset locker assignments in bulk

**Acceptance Criteria:**
- A Release All control is available in the manage view.
- Releasing requires confirmation.
- Only lockers in the active filtered context are released.
- The view refreshes after release.
- A no-op release communicates that there are no matching lockers to release.

### US-043: Approve or reject locker bookings
**As a** concierge
**I want to** approve or reject locker bookings
**So that** locker requests match building policy

**Acceptance Criteria:**
- Eligible locker bookings expose approve and reject actions.
- Approving sets the locker booking to approved.
- Rejecting sets the locker booking to declined.
- Reject All rejects eligible bookings for the selected date.
- Bulk rejection requires confirmation and reports when there are no eligible bookings.

### US-044: Configure locker booking rules
**As an** administrator
**I want to** manage locker booking rules
**So that** booking windows and access rules match building policy

**Acceptance Criteria:**
- Booking rules are reachable from the locker toolbar.
- Rules can be scoped to the locker resource type.
- Saving rule changes updates the relevant metadata.

---

## Asset Bookings

Routes: `/#/book/assets/list/requests`, `/#/book/assets/list/items`, `/#/book/assets/list/purchase-orders`, `/#/book/assets/view/:id`, and `/#/book/assets/manage/*` - container `[asset-manager]`

### US-050: Review asset requests
**As a** concierge
**I want to** view asset requests, items, and purchase orders
**So that** I can track and fulfil asset needs

**Acceptance Criteria:**
- The listing has Requests, Items, and Purchase Orders tabs.
- Requests are searchable.
- Request details can be opened for review.
- The active tab controls the search placeholder and available actions.
- Region-enabled deployments can switch the active building from the top bar.

### US-051: Manage asset inventory
**As an** administrator
**I want to** create and edit assets, groups, and categories
**So that** the asset catalogue stays accurate

**Acceptance Criteria:**
- Assets can be created or edited via the asset form (`asset-form`).
- Asset fields include `identifier`, `serial_number`, category, group, and location data where configured.
- Asset groups can be created from the Items tab.
- Asset categories can be managed from the asset toolbar.
- Asset booking rules and room availability settings can be configured.
- Asset bulk import is supported from the manage routes.

### US-052: Browse asset items
**As a** concierge
**I want to** browse asset items in list or grid mode
**So that** I can find the right asset quickly

**Acceptance Criteria:**
- Items can be viewed as a grid or list.
- Search filters the visible asset items.
- Selecting an asset opens its detail view.
- The selected display mode remains active while navigating within asset listing routes.

### US-053: Manage purchase orders
**As an** administrator
**I want to** create and review asset purchase orders
**So that** procurement status is visible to operations staff

**Acceptance Criteria:**
- Purchase orders are listed under `/#/book/assets/list/purchase-orders`.
- A purchase order can be created from `/#/book/assets/manage/purchase-order`.
- Purchase orders are searchable.
- Saved purchase orders return the user to an appropriate asset listing route.

---

## Catering

Routes: `/#/book/catering/orders`, `/#/book/catering/menu`, and `/#/book/catering/:view` - container `[app-catering]`

### US-060: View catering orders
**As a** catering coordinator
**I want to** view catering orders and their statuses
**So that** I can coordinate preparation and deliveries

**Acceptance Criteria:**
- The orders view lists catering orders (`catering-order-list`).
- Orders can be filtered by date, zone, and caterer where supported.
- Order status is visible in the list.
- Order details can be reviewed before fulfilment.
- Empty states explain that there are no matching orders.

### US-061: Manage catering menu
**As an** administrator
**I want to** edit menu items and pricing
**So that** the catering menu is current

**Acceptance Criteria:**
- The menu view shows menu items (`catering-menu`).
- Menu items can be added for a building zone.
- Existing menu items can be edited or removed.
- Menus can be imported and exported.
- Catering booking rules can be configured.

### US-062: Handle catering changes and exceptions
**As a** catering coordinator
**I want to** identify changed, cancelled, or special catering orders
**So that** the catering team can avoid missed or incorrect deliveries

**Acceptance Criteria:**
- Cancelled or changed orders are distinguishable from active orders.
- Order notes or special instructions are visible in order details where supplied.
- Date and zone filters can isolate the operational window being prepared.
- Exported catering data reflects the active filters where supported.

---

## Visitors

Route: `/#/book/visitors` - container `[app-new-visitors]`

### US-070: View visitors for the period
**As a** concierge
**I want to** view expected and present visitors for the day, week, or month
**So that** I can prepare for and manage arrivals

**Acceptance Criteria:**
- The guest listing (`guest-listings`) renders visitors for the selected period.
- Visitors can be searched by visitor name, email, company, or host details.
- Visitors can be filtered by level where level data is available.
- Rows show visitor, host, time, check-in state, check-out state, notes, parking, pass number, induction, and status fields when enabled.
- Hidden fields configured by settings are not displayed.
- Visitor detail tooltips expose phone, organisation, and reason where provided.

### US-071: Invite a visitor
**As a** concierge
**I want to** invite a visitor
**So that** they are registered ahead of their arrival

**Acceptance Criteria:**
- An Invite Visitor control opens the invite visitor modal.
- The form captures visitor details, host, visit time, reason, and any configured compliance fields.
- Parking details can be captured when visitor parking is enabled.
- A completed invite shows a success confirmation.
- Invalid or incomplete invites show validation errors and do not create a booking.

### US-072: Approve or decline a visitor
**As a** concierge
**I want to** approve or decline a visitor booking
**So that** only authorised visitors are expected

**Acceptance Criteria:**
- Each eligible visitor row exposes Approve and Decline actions.
- The visitor's status updates to Approved or Declined.
- Declined visitors cannot be checked in unless their status changes.
- Approval and decline actions report failures without losing the original status.

### US-073: Check a visitor in and out
**As a** concierge
**I want to** check visitors in on arrival and out on departure
**So that** I have an accurate record of who is on site

**Acceptance Criteria:**
- Check In is available for visitors who are not yet checked in.
- Check Out is available for checked-in visitors.
- All visitors for an event can be checked in or out together.
- A visitor's status indicator reflects not checked in, checked in, or checked out state.
- Check-in time and check-out time are shown using the configured time format and timezone.

### US-074: Manage visitor details
**As a** concierge
**I want to** edit visitor notes, email visitors, print passes, and download the list
**So that** I can manage visitor information and produce records

**Acceptance Criteria:**
- Visitor notes can be edited.
- A visitor can be emailed when an email address is available.
- A visitor pass can be printed when the visitor is checked in and pass printing is enabled.
- Visitor pass numbers can be captured when pass numbers are enabled.
- The visitor list can be downloaded.
- Visitor QR codes can be generated or shown where configured.

### US-075: Configure visitor rules
**As an** administrator
**I want to** configure visitor rules
**So that** visitor invitations follow building policy

**Acceptance Criteria:**
- Visitor rules are exposed from the sidebar only when the `visitor-rules` feature is enabled.
- The `/#/book/visitors/rules` route must resolve to a rules screen before the feature is enabled in a production configuration.
- Visitor policy settings can be edited by authorised administrators.
- Rule changes affect future invitations without corrupting existing visitor records.

### US-076: Manage visitor compliance data
**As a** concierge
**I want to** review visitor induction, ID, and international visitor data
**So that** site access requirements are handled before arrival

**Acceptance Criteria:**
- Induction status is shown when inductions are enabled.
- ID submission state is visible where ID confirmation is configured.
- International visitor fields are shown only when enabled.
- Submitted ID data can be confirmed or rejected where the workflow is available.
- Compliance fields remain hidden when disabled by settings.

---

## Events

Routes: `/#/entertainment/events`, `/#/entertainment/events/manage`, `/#/entertainment/events/manage/:id`, and `/#/entertainment/events/view/:id` - container `[app-events]`

### US-080: Browse events
**As an** events coordinator
**I want to** view events in a list or calendar
**So that** I can see what is scheduled

**Acceptance Criteria:**
- Events render as a list (`event-listing`) or calendar (`event-calendar`) when available.
- Events can be filtered by period and level where supported.
- Event cards or rows show title, date, time, location, and publication status.
- Empty states explain that there are no matching events.

### US-081: Create and edit an event
**As an** events coordinator
**I want to** create and edit entertainment events
**So that** building occupants can discover them

**Acceptance Criteria:**
- An Add control opens the event form (`app-event-manage`).
- Existing events can be edited at `/#/entertainment/events/manage/:id`.
- The form captures title, organiser, dates, timezone, attendance type, and access level.
- Events can be published as draft, open, or public where supported.
- Required fields are validated before saving.

### US-082: View event details
**As a** concierge
**I want to** open event details
**So that** I can answer occupant questions about the event

**Acceptance Criteria:**
- Event details are available at `/#/entertainment/events/view/:id`.
- The detail view shows schedule, location, organiser, description, and attendance information where available.
- Users can return from details to the event list.

---

## Staff / Users

Routes: `/#/users/staff` and `/#/users/staff/emergency-contacts`

### US-090: Browse the staff directory
**As a** concierge
**I want to** search and filter the staff directory
**So that** I can look up colleagues and their details

**Acceptance Criteria:**
- Staff are listed in the staff module.
- Staff can be searched by name or email.
- Staff can be filtered by zone or level where available.
- Selecting a staff member opens their details.
- Empty search results are shown clearly.

### US-091: Manage emergency contacts
**As an** administrator
**I want to** manage emergency contacts
**So that** the right people are reachable in an emergency

**Acceptance Criteria:**
- Emergency contacts are reachable at `/#/users/staff/emergency-contacts`.
- Contacts can be created, edited, and removed where supported.
- Contact details include enough information for emergency communication.
- Changes are saved only after confirmation or a successful save action.

### US-092: Review staff details
**As a** concierge
**I want to** view staff details from the directory
**So that** I can support visitors, deliveries, and internal requests

**Acceptance Criteria:**
- Staff details show identity, contact information, and location metadata where available.
- Missing optional staff fields display a graceful fallback.
- Staff lookup does not expose admin-only controls to non-admin users.

---

## Facilities

Route: `/#/facilities`

### US-100: Monitor facility status
**As a** facilities manager
**I want to** see facility and room status across the building
**So that** I can respond to issues and occupancy in real time

**Acceptance Criteria:**
- A status panel, list, or map shows facility availability.
- Results can be filtered by level or zone.
- Room event type filters can distinguish Internal, External, and Cancelled events where applicable.
- The page handles unavailable status data with an empty or error state.

### US-101: Inspect facility details
**As a** facilities manager
**I want to** inspect a facility or room from the status view
**So that** I can understand the current issue or occupancy state

**Acceptance Criteria:**
- Selecting a facility exposes details where supported.
- The detail view identifies the facility, level, status, and current booking or fault context where available.
- Returning to the facility list preserves the selected filters.

---

## Reports

Routes: `/#/reports`, `/#/reports/attendance`, `/#/reports/bookings`, `/#/reports/desks`, `/#/reports/parking`, `/#/reports/lockers`, `/#/reports/catering`, `/#/reports/contact-tracing`, `/#/reports/assets`, `/#/reports/visitors`, and `/#/reports/:id`

### US-110: View operational reports
**As a** reporting user
**I want to** view reports across workplace operations
**So that** I can analyse building usage

**Acceptance Criteria:**
- The Reports route defaults to the desks report when no specific child route is selected.
- Built-in report routes include attendance, room bookings, desks, parking, lockers, catering, contact tracing, assets, and visitors.
- Custom reports are available at `/#/reports/:id` when configured.
- Report pages share date range and level selection controls where applicable.
- Report generation shows loading state.

### US-111: Generate, download, and print a report
**As a** reporting user
**I want to** generate, export, and print reports
**So that** I can distribute operational data

**Acceptance Criteria:**
- A report can be generated for a selected date range.
- Level filters restrict the report when the report supports levels.
- Download and print actions are disabled until report data is available.
- Download exports the generated data in the report's supported format.
- Print mode hides controls that are not part of the report output.

### US-112: Run attendance reports
**As a** facilities manager
**I want to** report on site attendance
**So that** I can understand occupancy for a selected period

**Acceptance Criteria:**
- `/#/reports/attendance` allows selecting date range and level scope.
- Generate delegates to the attendance report service.
- Download exports the generated attendance data.
- Empty results show a no-data state rather than enabling a blank export.

### US-113: Run booking utilisation reports
**As a** workplace administrator
**I want to** report on rooms, desks, parking, and lockers
**So that** I can measure resource utilisation

**Acceptance Criteria:**
- Room booking reports include active and declined or cancelled booking states in summary counts.
- Desk reports count rejected bookings as declined.
- Parking and locker reports respect active date range and level filters.
- Report summaries and detail tables stay consistent with the same generated data.

### US-114: Run catering, asset, visitor, and contact tracing reports
**As a** reporting user
**I want to** report on support services and compliance-sensitive workflows
**So that** I can audit activity beyond room and desk usage

**Acceptance Criteria:**
- Catering reports include order and item views where supported.
- Asset reports include request, item, or utilisation summaries where supported.
- Visitor reports include visitor activity for the selected period.
- Contact tracing reports require a selected user before download is enabled.
- Contact tracing reports can be printed and downloaded when events are available.

---

## Points Management

Routes: `/#/points-management`, `/#/points-management/overview`, and `/#/points-management/assets`

### US-120: Manage loyalty points and assets
**As an** administrator
**I want to** view points metrics and configure redeemable assets
**So that** I can run the rewards programme

**Acceptance Criteria:**
- Overview and Assets tabs are available.
- Point metrics can be filtered by date.
- Point assets can be created and edited.
- Asset details include redemption value and display metadata where supported.
- The default points route redirects to Overview.

### US-121: Review points performance
**As a** workplace administrator
**I want to** review points activity over time
**So that** I can understand programme adoption

**Acceptance Criteria:**
- The Overview tab shows activity metrics for the selected period.
- Date changes update the displayed metrics.
- Empty metrics show zero values rather than stale data.

---

## Surveys

Routes: `/#/surveys`, `/#/surveys/list/:id`, `/#/surveys/builder`, `/#/surveys/builder/:id`, `/#/surveys/responses/:id`, and `/#/surveys/run/:id`

### US-130: Build and review surveys
**As an** administrator
**I want to** create surveys and review responses
**So that** I can gather and analyse occupant feedback

**Acceptance Criteria:**
- The Surveys landing view lists buildings or survey groupings.
- Surveys can be created with the builder route.
- Existing surveys can be edited with `/#/surveys/builder/:id`.
- Responses can be viewed with date filtering.
- Responses can be exported where supported.

### US-131: Run a survey
**As an** occupant or visitor
**I want to** complete a survey from a run link
**So that** I can submit feedback without admin navigation

**Acceptance Criteria:**
- `/#/surveys/run/:id` opens the survey outlet.
- The survey can be submitted once required questions are complete.
- The run view is focused on the survey and does not require the user to navigate admin lists.

---

## Building Configuration

### US-140: Manage the zone hierarchy
**As an** administrator
**I want to** manage regions, buildings, and levels
**So that** the organisational hierarchy reflects the real estate

**Acceptance Criteria:**
- Route `/#/zone-management` exposes Regions, Buildings, and Levels management.
- Regions, buildings, and levels can be created, edited, and deleted where supported.
- Active building and region context affects feature routes that depend on location.
- Legacy routes `/#/level-management`, `/#/building-management`, and `/#/region-management` redirect to `/#/zone-management`.
- App-wide settings for Workplace, Concierge, Booking Panel, and Visitor Kiosk can be configured.

### US-141: Manage rooms
**As an** administrator
**I want to** edit room configuration, alerts, and booking rules
**So that** rooms are bookable and correctly described

**Acceptance Criteria:**
- Route `/#/room-management` (`[app-new-room-manager]`) lists rooms with an Add action.
- Rooms can be created and edited.
- Room details include name, capacity, level, map ID, features, and bookability metadata where supported.
- Room alerts can be set and edited.
- Room booking history can be viewed.
- Room booking rules can be managed.
- Changes refresh the room list after saving.

### US-142: Manage points of interest
**As an** administrator
**I want to** create and manage points of interest on the map
**So that** occupants can find amenities and services

**Acceptance Criteria:**
- Route `/#/points-of-interest` lists POIs.
- POIs can be created, edited, and deleted.
- POIs include map or level positioning data where required.
- Search or filtering helps locate existing POIs.

### US-143: Configure app settings
**As an** administrator
**I want to** manage concierge and related app settings
**So that** features, defaults, and workflow rules match the building

**Acceptance Criteria:**
- Settings modals load inherited and zone-specific metadata before editing.
- Concierge settings include feature list, feature groups, default route, booking options, report options, and module-specific toggles where configured.
- Workplace, Booking Panel, and Visitor Kiosk settings can be edited from the same app settings area.
- Saving settings writes only intended changes and reports failures.

---

## Communications & Content

### US-150: Manage digital signage
**As an** administrator
**I want to** manage signage media, displays, and zones
**So that** the right content shows on the right screens

**Acceptance Criteria:**
- Route `/#/signage` exposes Media, Displays, and Zones tabs.
- `/#/signage` redirects to `/#/signage/media` by default.
- Media can be uploaded, searched, previewed, and organised where supported.
- Playlists can be created and assigned to displays or zones.
- Displays can be created, edited, and associated with signage zones.
- Playlists can be approved where approval is part of the workflow.

### US-151: Manage email templates
**As an** administrator
**I want to** design email templates for automated notifications
**So that** building communications are on-brand and clear

**Acceptance Criteria:**
- Route `/#/email-templates` lists templates.
- Templates can be created at `/#/email-templates/manage`.
- Templates can be edited at `/#/email-templates/manage/:id`.
- Templates select a trigger event.
- Templates configure From, Reply-To, subject, and HTML body with placeholders.
- Validation prevents saving templates without required routing or content fields.

### US-152: Manage deals and offers
**As an** events coordinator
**I want to** manage promotional deals and offers
**So that** occupants are aware of available offers

**Acceptance Criteria:**
- Route `/#/deals-n-offers` lists deals.
- Deals can be created at `/#/deals-n-offers/manage`.
- Deals can be edited at `/#/deals-n-offers/manage/:id`.
- Deals can be deleted where supported.
- Deal details include title, dates, description, and publication metadata where supported.

### US-153: Manage short URLs
**As an** administrator
**I want to** create and manage short URLs
**So that** I can share trackable links for building services

**Acceptance Criteria:**
- Route `/#/url-management` lists short URLs.
- URLs can be created, edited, deleted, and searched.
- New URLs validate destination and short-code fields before saving.
- Editing preserves existing link analytics or metadata where supported.

---

## Cross-Cutting Behaviour

### US-160: Work in mock mode
**As a** tester
**I want to** open concierge routes with `?mock=true`
**So that** I can validate workflows without a live backend session

**Acceptance Criteria:**
- `?mock=true` initialises mock data and bypasses normal authentication for supported e2e flows.
- Mock mode works on direct deep links such as `/#/book/parking/events/list?mock=true`.
- Mock mode preserves route and query parameters after the app initialises.

### US-161: Keep date, level, and search state predictable
**As a** concierge
**I want** filters to behave consistently across modules
**So that** I can move through the app without losing context unexpectedly

**Acceptance Criteria:**
- Date selectors update the current module's date-dependent results.
- Level selectors use active building or region scope based on settings.
- Search filters update visible lists without changing unrelated filters.
- Query parameters restore supported filters on reload.
- Invalid query parameters are ignored or normalised rather than causing repeated navigation.

### US-162: Handle empty, loading, and error states
**As a** user
**I want to** understand when data is loading, absent, or failed
**So that** I do not mistake app state for missing operational work

**Acceptance Criteria:**
- Long-running operations show loading indicators.
- Empty lists show a clear no-data state.
- Failed create, update, delete, import, export, approve, or reject actions report the failure.
- Failed operations do not silently discard user input where recovery is possible.

### US-163: Support admin-only configuration safely
**As a** workplace administrator
**I want** admin-only workflows to be clearly separated
**So that** front-of-house users cannot accidentally change configuration

**Acceptance Criteria:**
- Non-admin users do not see the Management sidebar group.
- Admin routes with guards still require authorised loading.
- Destructive actions use confirmation where the app supports confirmation.
- Saved configuration updates refresh affected lists or settings-backed controls.

### US-164: Export operational records
**As a** reporting user
**I want to** export operational data from supported modules
**So that** I can share records outside Concierge

**Acceptance Criteria:**
- Export actions are available only when the module supports export.
- Exported data reflects the active filters where supported.
- Export buttons are disabled or no-op with a warning when there is no data.
- Generated file names identify the exported module or template.
