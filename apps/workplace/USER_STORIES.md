# Workplace - User Stories

This document describes user stories for the Workplace application, the primary staff-facing
interface for PlaceOS. It lets employees book desks, meeting rooms, parking, lockers and
visitors, explore the building on an interactive map, manage their own schedule, coordinate
with colleagues and discover company events and offers.

These stories are the basis for the e2e tests in `apps/workplace/e2e`. Each test references
the relevant `US-xxx` identifier.

## Personas

- **Employee**: A staff member who books spaces and resources and manages their own bookings.
- **Team Lead**: An employee who coordinates where and when their team is in the office.
- **Host**: An employee inviting external visitors on site.
- **Facilities/Reception**: Staff who manage building resources and control room services.
- **Visitor**: An external guest invited by a host (interacts indirectly via invites).

Feature availability is gated per organisation/user via the `features` setting and
`feature_groups`. Routes can still be reached directly when permitted by
`AuthorisedUserGuard`. Stories below describe behaviour when the relevant feature is enabled.

---

## Application Shell & Navigation

### US-001: Land on the home page
**As an** employee
**I want to** be taken to my home page when I open the app
**So that** I immediately see my day at a glance

**Acceptance Criteria:**
- Opening the app root redirects to the default route (`/landing`)
- The home page (`landing-new`) renders with the global topbar
- Navigation chrome (topbar + footer menu) is present on every authorised page

### US-002: Navigate between feature areas
**As an** employee
**I want to** move between the app's feature areas from the navigation menu
**So that** I can reach bookings, my schedule, the map and more

**Acceptance Criteria:**
- The top menu (`top-menu`) lists only the features enabled for the user
- Selecting a menu item routes to that feature area
- The active feature is indicated in the menu
- A footer menu provides the same navigation on smaller screens

### US-003: Search globally
**As an** employee
**I want to** search from the topbar
**So that** I can quickly jump to people, spaces or actions

**Acceptance Criteria:**
- A global search control is available in the topbar when `app.global_search` is not disabled
- Global search is reachable from any page

---

## Home / Landing

### US-010: See my next booking
**As an** employee
**I want to** see my upcoming booking on the home page
**So that** I know where I need to be next

**Acceptance Criteria:**
- The home page shows an upcoming-booking section (`landing-upcoming-booking`)
- When a booking exists it shows its time and location

### US-011: See what is available now
**As an** employee
**I want to** see resources available right now
**So that** I can grab a desk or room without planning ahead

**Acceptance Criteria:**
- The home page shows an availability section (`landing-available-now`)

### US-012: Use quick actions to start a booking
**As an** employee
**I want to** start a common booking in one click from the home page
**So that** I can book without navigating the full flow

**Acceptance Criteria:**
- The home page shows quick actions (`landing-quick-actions`)
- Selecting a quick action opens the relevant booking flow

### US-013: See colleague availability
**As a** team lead
**I want to** see my colleagues' presence on the home page
**So that** I can coordinate being in together

**Acceptance Criteria:**
- The home page shows a colleagues section (`landing-colleagues-new`) when enabled

### US-014: Re-book favourites
**As an** employee
**I want to** see my frequently booked spaces
**So that** I can re-book them quickly

**Acceptance Criteria:**
- The home page shows a favourites section (`landing-favourites-new`) when enabled

---

## Booking Flows

All booking flows are hosted inside the `placeos-book` shell and follow a multi-step
pattern (details → selection → confirm → success).

### US-020: Book a desk
**As an** employee
**I want to** book a desk for a chosen date and time
**So that** I have a place to work in the office

**Acceptance Criteria:**
- `/book/desk` opens the desk flow (`desk-flow-new`)
- The user can choose date/time and select a desk
- The booking can be confirmed and a success state is shown

### US-021: Book a meeting room
**As an** employee
**I want to** book a meeting room with details and options
**So that** I can host a meeting

**Acceptance Criteria:**
- `/book/meeting` opens the meeting flow (`meeting-flow-new`)
- The user can enter meeting details and select a room
- Catering/assets options are available when enabled
- The booking can be confirmed

### US-022: Book parking
**As an** employee
**I want to** book a parking space for the days I drive in
**So that** I am guaranteed a spot

**Acceptance Criteria:**
- `/book/parking` opens the parking flow (`placeos-parking-flow`)
- The user can pick dates and a vehicle type
- The booking can be confirmed when the user is eligible

### US-023: Request parking
**As an** employee
**I want to** request an assigned parking space
**So that** I can be allocated parking subject to approval

**Acceptance Criteria:**
- `/book/parking-request` opens the parking request flow (`placeos-parking-request-flow`)

### US-024: Invite a visitor
**As a** host
**I want to** invite an external visitor for a chosen date
**So that** they are expected and can check in on arrival

**Acceptance Criteria:**
- `/book/visitor` opens the visitor flow (`visitor-flow-new`)
- The user can enter visit details and add one or more visitors
- Navigating away mid-flow warns about losing unsaved invites

### US-025: Book a locker
**As an** employee
**I want to** book a locker
**So that** I have somewhere to store belongings

**Acceptance Criteria:**
- `/book/locker` opens the locker flow (`placeos-book-locker-flow`)

### US-026: Book via code
**As an** employee
**I want to** book using a code
**So that** I can quickly claim a specific resource

**Acceptance Criteria:**
- `/book/code` opens the code flow (`book-code-flow`)
- Success and error outcomes have dedicated states

---

## Schedule / Your Bookings

### US-030: View my bookings
**As an** employee
**I want to** view all my bookings in one place
**So that** I can keep track of where I need to be

**Acceptance Criteria:**
- `/your-bookings` renders the schedule page (`app-schedule`)
- Bookings are shown for the selected date/range

### US-031: Switch schedule views
**As an** employee
**I want to** switch between day, week and list views
**So that** I can see my schedule the way that suits me

**Acceptance Criteria:**
- The schedule topbar lets the user change view mode
- The selected view renders the corresponding layout

### US-032: Filter and pick a date range
**As an** employee
**I want to** filter bookings by type/status and choose a date
**So that** I can focus on what is relevant

**Acceptance Criteria:**
- Filters are available (`schedule-filters`)
- A date selector controls the period shown

---

## Explore / Map

### US-040: View the interactive floor map
**As an** employee
**I want to** see the building map with live availability
**So that** I can find free spaces and desks

**Acceptance Criteria:**
- `/explore` renders the explore page (`app-explore`)
- The map view renders with availability indicators

### US-041: Locate my upcoming booking on the map
**As an** employee
**I want to** pin my next booking on the map
**So that** I can find where I'm going

**Acceptance Criteria:**
- An upcoming-booking pill is shown when the user has a booking

### US-042: Locate a colleague
**As an** employee
**I want to** locate a colleague on the map
**So that** I can sit near them or find them

**Acceptance Criteria:**
- The map can be opened focused on a specific user (`/explore?user=…`)

---

## Directory

### US-050: Search the staff directory
**As an** employee
**I want to** search for colleagues by name
**So that** I can find their contact details

**Acceptance Criteria:**
- `/directory` renders the directory (`[a-directory-user-list]`)
- Typing at least the minimum number of characters returns matching staff

### US-051: Locate or contact a colleague from the directory
**As an** employee
**I want to** locate a colleague on the map or call them from their entry
**So that** I can reach or find them

**Acceptance Criteria:**
- A locate action opens the map focused on the colleague
- A call action is available when a phone number exists

---

## Team Schedule

### US-060: View team availability
**As a** team lead
**I want to** see my team's bookings and presence
**So that** I can coordinate office days

**Acceptance Criteria:**
- `/team-schedule` renders the team schedule (`team-schedule`)
- Team members and their bookings are listed

---

## Discovery: Group Events & Deals

### US-070: Browse group events
**As an** employee
**I want to** browse company events
**So that** I can find activities to attend

**Acceptance Criteria:**
- `/group-events` renders the group events page (`[group-events]`)
- Events can be filtered

### US-071: Browse deals & offers
**As an** employee
**I want to** browse staff deals and offers
**So that** I can take advantage of promotions

**Acceptance Criteria:**
- `/deals-n-offers` renders the deals page (`deals-n-offers`)
- Deals can be sorted/filtered

---

## Control

### US-080: Control room services
**As** facilities/reception
**I want to** control building/room systems
**So that** I can manage AV, lighting and climate

**Acceptance Criteria:**
- `/control` renders the control page (`[app-control]`)
- A list of controllable spaces is shown

---

## Error & Access States

### US-090: Unauthorised access
**As an** employee without access
**I want to** see a clear unauthorised page
**So that** I understand I cannot use the app

**Acceptance Criteria:**
- `/unauthorised` renders the unauthorised page

### US-091: Misconfiguration
**As an** employee
**I want to** see a clear message when the app is misconfigured
**So that** I know to contact support rather than assume a fault

**Acceptance Criteria:**
- `/misconfigured` renders the misconfigured page
