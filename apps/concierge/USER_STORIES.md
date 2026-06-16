# Concierge - User Stories

This document describes user stories for the Concierge application, a front-of-house / workplace management console used by reception staff and administrators to manage room, desk, parking, locker, catering, asset and visitor bookings, run reports, and configure the building.

## Personas

- **Concierge**: Front-of-house staff who manage day-to-day bookings, approvals, and visitor check-in/out
- **Workplace Administrator**: An admin who configures spaces, desks, parking, lockers, zones, and app settings
- **Facilities Manager**: Manages facilities status, room configuration, and operational reports
- **Events Coordinator**: Creates and manages entertainment events and promotional offers

> **Routing note:** The app uses hash routing. All routes below are reached at `/#/<route>`. Appending `?mock=true` (e.g. `/#/book/lockers/manage?mock=true`) loads the app against mock data with authentication bypassed — this is how the e2e tests drive the app.

---

## Application Shell & Navigation

### US-001: Land on the default page
**As a** concierge
**I want to** open the app and land on a useful default page
**So that** I can start working without extra navigation

**Acceptance Criteria:**
- Opening `/#/` redirects to the configured `default_route` (`/book/rooms`)
- The top bar (`app-topbar`) and side navigation (`app-sidebar`) are visible
- The page loads against mock data when `?mock=true` is supplied

### US-002: Navigate between feature areas
**As a** concierge
**I want to** use the sidebar to move between bookings, management, and reports
**So that** I can reach any part of the app quickly

**Acceptance Criteria:**
- The sidebar groups links under Bookings, Management, and Reports
- Each link routes to its feature area (e.g. Desk Bookings → `/book/desks/events`)
- The active link is highlighted
- Management items are only shown to admin users

### US-003: Access account and notifications
**As a** concierge
**I want to** see notifications and my account controls in the top bar
**So that** I can stay informed and manage my session

**Acceptance Criteria:**
- The top bar shows a notifications control and the current user's avatar
- The logo links back to the landing page

---

## Room Bookings (Day View)

Route: `/#/book/rooms` — container `[app-new-dayview]`

### US-010: View room bookings for the day
**As a** concierge
**I want to** see all room bookings for the selected day
**So that** I know which rooms are in use and when

**Acceptance Criteria:**
- The day view renders the booking list/timeline (`room-bookings`)
- Bookings can be viewed as a timeline or a list (`view_timeline` / `view_list`)
- The period can be switched between Day and Week

### US-011: Approve a pending room booking
**As a** concierge
**I want to** approve a pending room booking request
**So that** the requester gets confirmation of their reservation

**Acceptance Criteria:**
- Pending bookings appear in the approvals panel with an Approve and Decline action
- Approving a booking updates its status to Approved and disables the action
- Recurring bookings can be approved/declined as a single occurrence or the whole series

### US-012: Decline a room booking
**As a** concierge
**I want to** decline a room booking
**So that** the room is freed up and the requester is informed

**Acceptance Criteria:**
- Declining a pending booking updates its status to Declined
- The action is reflected immediately in the approvals panel

### US-013: Create a room booking
**As a** concierge
**I want to** create a new room booking on behalf of a user
**So that** I can reserve a space for someone at reception

**Acceptance Criteria:**
- An Add control opens a booking form
- The booking can be saved and appears in the day view

### US-014: Filter and export room bookings
**As a** concierge
**I want to** filter bookings by type and level and download the attendee list
**So that** I can focus on relevant bookings and share attendance data

**Acceptance Criteria:**
- Bookings can be filtered by Internal / External / Cancelled
- Bookings can be filtered by one or more levels
- An attendee list can be downloaded

---

## Desk Bookings

Route: `/#/book/desks/events` (bookings) and `/#/book/desks/manage` (management) — container `[app-desks]`

### US-020: View desk bookings
**As a** concierge
**I want to** view desk bookings for the selected date and level
**So that** I can see desk occupancy at a glance

**Acceptance Criteria:**
- The desk bookings list (`desk-bookings`) renders for the selected date
- Bookings can be filtered by level
- The list can be refreshed

### US-021: Book a desk for a user
**As a** concierge
**I want to** create a desk booking on behalf of a user
**So that** I can assign a desk at reception

**Acceptance Criteria:**
- A New Booking control opens the desk booking modal (`desk-book-modal`)
- The booking can be saved and appears in the list

### US-022: Approve or reject desk bookings
**As a** concierge
**I want to** approve or reject desk bookings
**So that** desk requests are confirmed or freed

**Acceptance Criteria:**
- Approve/Reject can be triggered (including via `?approve=<id>` / `?reject=<id>`)
- "Reject All" rejects all bookings for the current view

### US-023: Manage desks
**As an** administrator
**I want to** add and edit desks, including assignment and bookability
**So that** the desk inventory reflects the real workspace

**Acceptance Criteria:**
- The manage view (`desks-manage`) lists desks with an "Add Desk" action
- The desk modal (`desk-modal`) edits `name`, `map_id`, `assigned_user`, `bookable`, features, groups, tags, and notes
- Desks can be bulk imported via CSV and exported
- QR codes can be viewed/printed for desks

---

## Parking Bookings

Route: `/#/book/parking/events` (bookings) and `/#/book/parking/manage` (management) — container `app-parking`

### US-030: View parking bookings
**As a** concierge
**I want to** view parking reservations in list, map, or week view
**So that** I can see parking availability and assignments

**Acceptance Criteria:**
- Bookings render as a list (`parking-bookings-list`), map (`parking-map`), or week view
- The view can be switched between list and map
- Bookings can be filtered by level (map view requires a single level)

### US-031: Create a parking reservation or request
**As a** concierge
**I want to** create a parking reservation or special request for a user
**So that** I can assign parking at reception

**Acceptance Criteria:**
- A reservation control opens the parking booking modal
- A "New Parking Request" control opens the request modal (`parking-request-modal`)

### US-032: Manage parking spaces, users, and fleet
**As an** administrator
**I want to** manage parking spaces, parking users, and fleet vehicles
**So that** the parking inventory and assignments are accurate

**Acceptance Criteria:**
- Manage tabs cover Spaces, Users, and Fleet
- The space modal (`parking-space-modal`) edits `identifier`, `map_id`, `assigned_user`, and `bookable`
- Spaces can be assigned to users and bulk imported via CSV

---

## Locker Bookings

Route: `/#/book/lockers/events` (bookings) and `/#/book/lockers/manage` (management) — container `[app-lockers]`

### US-040: View locker bookings
**As a** concierge
**I want to** view locker bookings for the selected level
**So that** I can see locker usage

**Acceptance Criteria:**
- The locker bookings list (`locker-bookings`) renders
- A "New Booking" control opens the locker booking modal (`locker-booking-modal`)

### US-041: Manage locker banks
**As an** administrator
**I want to** create locker banks and add lockers to them
**So that** the locker inventory is organised by physical location

**Acceptance Criteria:**
- The manage view (`locker-list`) lists locker banks with an "Add Bank" action
- The bank modal (`locker-bank-modal`) requires a `level_id` and edits `name` and `map_id`
- A bank's row menu allows adding lockers and viewing the bank layout
- Expanding a bank reveals its child lockers

### US-042: Release lockers
**As an** administrator
**I want to** release all lockers in a view
**So that** I can reset locker assignments in bulk

**Acceptance Criteria:**
- A "Release all" control is available in the manage view
- Releasing requires confirmation

---

## Asset Bookings

Route: `/#/book/assets/list/requests` — container `[asset-manager]`

### US-050: Review asset requests
**As a** concierge
**I want to** view asset requests, items, and purchase orders
**So that** I can track and fulfil asset needs

**Acceptance Criteria:**
- The listing has Requests, Items, and Purchase Orders tabs
- Items can be viewed as a grid or list

### US-051: Manage asset inventory
**As an** administrator
**I want to** create and edit assets, groups, and categories
**So that** the asset catalogue stays accurate

**Acceptance Criteria:**
- Assets can be created/edited via the asset form (`asset-form`, fields `identifier`, `serial_number`)
- Asset groups, categories, and bulk imports are supported
- Purchase orders can be created

---

## Catering

Route: `/#/book/catering/orders` (orders) and `/#/book/catering/menu` (menu) — container `[app-catering]`

### US-060: View catering orders
**As a** concierge
**I want to** view today's catering orders and their statuses
**So that** I can coordinate deliveries on arrival

**Acceptance Criteria:**
- The orders view lists catering orders (`catering-order-list`)
- Orders can be filtered by zone and caterer

### US-061: Manage catering menu
**As an** administrator
**I want to** edit menu items and pricing
**So that** the catering menu is current

**Acceptance Criteria:**
- The menu view shows menu items (`catering-menu`)
- Items can be added (in a building zone), and menus imported/exported
- Catering booking rules can be configured

---

## Visitors

Route: `/#/book/visitors` — container `[app-new-visitors]`

### US-070: View visitors for the period
**As a** concierge
**I want to** view expected and present visitors for the day/week/month
**So that** I can prepare for and manage arrivals

**Acceptance Criteria:**
- The guest listing (`guest-listings`) renders visitors for the selected period
- Visitors can be searched by name/email and filtered by level

### US-071: Invite a visitor
**As a** concierge
**I want to** invite a visitor
**So that** they are registered ahead of their arrival

**Acceptance Criteria:**
- An "Invite" control opens the invite visitor modal
- A completed invite shows a success confirmation

### US-072: Approve or decline a visitor
**As a** concierge
**I want to** approve or decline a visitor booking
**So that** only authorised visitors are expected

**Acceptance Criteria:**
- Each visitor row exposes Approve and Decline actions
- The visitor's status updates to Approved or Declined

### US-073: Check a visitor in and out
**As a** concierge
**I want to** check visitors in on arrival and out on departure
**So that** I have an accurate record of who is on site

**Acceptance Criteria:**
- Check In is available for visitors who are not yet checked in
- Check Out is available for checked-in visitors
- All visitors for an event can be checked in/out together
- A visitor's status indicator reflects checked-in / checked-out state

### US-074: Manage visitor details
**As a** concierge
**I want to** edit visitor notes, email visitors, print passes, and download the list
**So that** I can manage visitor information and produce records

**Acceptance Criteria:**
- Visitor notes can be edited
- A visitor can be emailed and (when checked in) issued a printed pass
- The visitor list can be downloaded

### US-075: Configure visitor rules
**As an** administrator
**I want to** configure visitor rules
**So that** visitor invitations follow building policy

**Acceptance Criteria:**
- Visitor rules are reachable at `/book/visitors/rules`

---

## Events

Route: `/#/entertainment/events` — container `[app-events]`

### US-080: Browse events
**As an** events coordinator
**I want to** view events in a list or calendar
**So that** I can see what is scheduled

**Acceptance Criteria:**
- Events render as a list (`event-listing`) or calendar (`event-calendar`)
- Events can be filtered by period (week/month) and level

### US-081: Create and edit an event
**As an** events coordinator
**I want to** create and edit entertainment events
**So that** building occupants can discover them

**Acceptance Criteria:**
- An Add control opens the event form (`app-event-manage`)
- The form captures title, organiser, dates, timezone, attendance type, and access level
- Events can be published as draft, open, or public

---

## Staff / Users

Route: `/#/users/staff` — container managed by the Staff module

### US-090: Browse the staff directory
**As a** concierge
**I want to** search and filter the staff directory
**So that** I can look up colleagues and their details

**Acceptance Criteria:**
- Staff are listed and searchable
- Staff can be filtered by zone/level

### US-091: Manage emergency contacts
**As an** administrator
**I want to** manage emergency contacts
**So that** the right people are reachable in an emergency

**Acceptance Criteria:**
- Emergency contacts are reachable at `/users/staff/emergency-contacts`

---

## Facilities

Route: `/#/facilities`

### US-100: Monitor facility status
**As a** facilities manager
**I want to** see facility and room status across the building
**So that** I can respond to issues and occupancy in real time

**Acceptance Criteria:**
- A status panel and/or map shows facility availability
- Results can be filtered by level/zone and event type (Internal/External/Cancelled)

---

## Reports

Route: `/#/reports` (defaults to the desks report)

### US-110: View operational reports
**As a** facilities manager
**I want to** view reports across desks, rooms, attendance, catering, parking, lockers, assets, visitors, and contact tracing
**So that** I can analyse building usage

**Acceptance Criteria:**
- Each report type is reachable from the Reports group (e.g. `/reports/desks`, `/reports/attendance`)
- Custom reports are available when configured

---

## Points Management

Route: `/#/points-management`

### US-120: Manage loyalty points and assets
**As an** administrator
**I want to** view points metrics and configure redeemable assets
**So that** I can run the rewards programme

**Acceptance Criteria:**
- Overview and Assets tabs are available
- Point assets can be created and edited
- Metrics can be filtered by date

---

## Surveys

Route: `/#/surveys`

### US-130: Build and review surveys
**As an** administrator
**I want to** create surveys and review responses
**So that** I can gather and analyse occupant feedback

**Acceptance Criteria:**
- Surveys can be created and edited (questions/pages)
- Responses can be viewed with date filtering and exported

---

## Building Configuration

### US-140: Manage the zone hierarchy
**As an** administrator
**I want to** manage regions, buildings, and levels
**So that** the organisational hierarchy reflects the real estate

**Acceptance Criteria:**
- Route `/#/zone-management` exposes Regions, Buildings, and Levels tabs
- Regions/buildings/levels can be created, edited, and deleted
- App-wide settings (Workplace, Concierge, Booking Panel, Visitor Kiosk) can be configured

### US-141: Manage rooms
**As an** administrator
**I want to** edit room configuration, alerts, and booking rules
**So that** rooms are bookable and correctly described

**Acceptance Criteria:**
- Route `/#/room-management` (`[app-new-room-manager]`) lists rooms with an Add action
- Rooms can be edited, have alerts set, view booking history, and manage booking rules

### US-142: Manage points of interest
**As an** administrator
**I want to** create and manage points of interest on the map
**So that** occupants can find amenities and services

**Acceptance Criteria:**
- Route `/#/points-of-interest` lists POIs with create/edit/delete

---

## Communications & Content

### US-150: Manage digital signage
**As an** administrator
**I want to** manage signage media, displays, and zones
**So that** the right content shows on the right screens

**Acceptance Criteria:**
- Route `/#/signage` exposes Media, Displays, and Zones tabs
- Playlists/media can be created and assigned to displays/zones, and playlists approved

### US-151: Manage email templates
**As an** administrator
**I want to** design email templates for automated notifications
**So that** building communications are on-brand and clear

**Acceptance Criteria:**
- Route `/#/email-templates` allows creating/editing templates
- Templates select a trigger event and configure From/Reply-To, subject, and HTML body with placeholders

### US-152: Manage deals & offers
**As an** events coordinator
**I want to** manage promotional deals and offers
**So that** occupants are aware of available offers

**Acceptance Criteria:**
- Route `/#/deals-n-offers` allows creating/editing/deleting deals

### US-153: Manage short URLs
**As an** administrator
**I want to** create and manage short URLs
**So that** I can share trackable links for building services

**Acceptance Criteria:**
- Route `/#/url-management` allows creating/editing/deleting short URLs and searching them
