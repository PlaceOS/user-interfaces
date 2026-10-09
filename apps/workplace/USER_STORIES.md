# Workplace - User Stories

This document describes user stories for the Workplace application, the primary staff-facing
interface for PlaceOS. It lets employees book desks, meeting rooms, parking, lockers and
visitors, explore the building on an interactive map, manage their own schedule, coordinate
with colleagues, control eligible spaces and discover company events and offers.

These stories are the basis for product coverage and e2e coverage in `apps/workplace/e2e`.
Existing automated tests reference the relevant `US-xxx` identifier. Some stories below are
not yet automated; they document expected product behaviour and useful future test coverage.

Feature availability is gated per organisation/user via the `features` setting,
`feature_groups`, route guards and app-specific settings. Stories below describe behaviour
when the relevant feature is enabled and the signed-in user is authorised.

## Personas

- **Employee**: A staff member who books spaces and resources and manages their own day.
- **Mobile Employee**: An employee using the mobile shell or a narrow viewport while moving.
- **Team Lead**: An employee who coordinates where and when their team is in the office.
- **Host**: An employee inviting external visitors on site.
- **Facilities/Reception**: Staff who manage building resources and control room services.
- **Parking Approver**: Staff who approve or review parking requests where configured.
- **Support/Admin**: Staff who configure Workplace features, embedded links and settings.
- **Visitor**: An external guest invited by a host, interacting indirectly via invite details.

---

## Application Shell, Access & Navigation

### US-001: Land on the home page
**As an** employee
**I want to** be taken to my home page when I open the app
**So that** I immediately see my day at a glance

**Acceptance Criteria:**
- Opening the app root redirects to the configured default route (`/landing` by default).
- The home page (`landing-new`) renders with the global topbar.
- Navigation chrome (`topbar`, `top-menu` and `footer-menu`) is present on authorised pages.
- The page title reflects the current feature area.

### US-002: Navigate between feature areas
**As an** employee
**I want to** move between the app's feature areas from the navigation menu
**So that** I can reach bookings, my schedule, the map and other tools

**Acceptance Criteria:**
- The top menu (`top-menu`) lists only the features enabled for the user.
- Selecting a menu item routes to that feature area.
- The active feature is indicated in the menu.
- A footer menu provides the same core navigation on smaller screens.
- Deep links into enabled feature routes keep the global shell visible after loading.

### US-003: Search globally
**As an** employee
**I want to** search from the topbar
**So that** I can quickly jump to people, spaces or actions

**Acceptance Criteria:**
- A global search control is available in the topbar when `app.global_search` is not disabled.
- Global search is reachable from any authorised page.
- Search results distinguish people, spaces and actionable routes where supported.
- Selecting a search result takes the user to the relevant person, map target or booking flow.

### US-004: Hide unavailable features
**As an** employee
**I want to** see only the features I can use
**So that** I do not follow dead-end navigation

**Acceptance Criteria:**
- Disabled feature flags remove their menu entries and quick actions.
- Direct routes remain protected by `AuthorisedUserGuard` and feature permissions.
- Users without access are sent to a clear unauthorised state instead of a broken page.
- The schedule filter list only includes booking types enabled for the user.

### US-005: Open configured embedded pages
**As an** employee
**I want to** open organisation-specific tools inside Workplace
**So that** I can use workplace services without leaving the app

**Acceptance Criteria:**
- Configured embedded menu items route to `/embedded/:id`.
- The embedded page renders the configured URL inside the app shell when allowed.
- Missing, disabled or malformed embedded page configuration shows a recoverable error state.
- Embedded pages keep the global navigation available unless the configured display mode hides it.

### US-006: Use the virtual concierge
**As an** employee
**I want to** ask the virtual concierge for help
**So that** I can complete workplace tasks faster

**Acceptance Criteria:**
- The virtual concierge button appears when a virtual concierge URL is configured.
- The concierge can open fullscreen or in a sidebar based on `virtual_concierge.display`.
- Sidebar mode respects the configured side (`virtual_concierge.side`).
- Suggested prompts are shown on concierge surfaces that support prompts.
- Closing the concierge returns the user to the page they were using.

### US-007: Use locale and time preferences
**As an** employee
**I want to** see dates, times and labels in my configured locale
**So that** Workplace is understandable in my region

**Acceptance Criteria:**
- The language selector uses configured `app.locales`.
- Date and time displays respect locale and `app.use_24_hour_time` where supported.
- Booking, schedule and confirmation screens use translated labels via the app locale service.
- Right-to-left locales do not make primary navigation or booking forms unusable.

### US-008: Use Workplace on mobile
**As a** mobile employee
**I want to** use Workplace on a phone-sized screen
**So that** I can book and find spaces while moving through the building

**Acceptance Criteria:**
- Core navigation remains reachable through the footer and responsive topbar.
- Booking forms, schedule filters and map controls fit without horizontal scrolling.
- Mobile builds keep the same authorised routes as the web app.
- Native/mobile authentication states recover to the intended route after login where supported.

### US-009: Recover from loading and session changes
**As an** employee
**I want to** recover cleanly from expired sessions or app chunk updates
**So that** I can continue without losing context unnecessarily

**Acceptance Criteria:**
- Expired or unauthenticated sessions redirect through the configured login flow.
- Chunk load errors trigger the configured reload behaviour.
- Long-running pages show loading states while settings, organisation data or bookings load.
- Errors from required startup configuration route to a clear error state.

---

## Home / Landing

### US-010: See my next booking
**As an** employee
**I want to** see my upcoming booking on the home page
**So that** I know where I need to be next

**Acceptance Criteria:**
- The home page shows an upcoming-booking section (`landing-upcoming-booking`).
- When a booking exists it shows its time, location and booking type.
- Meeting, desk, parking, locker and visitor bookings use recognisable type labels/icons.
- Selecting the upcoming booking opens its details or the relevant schedule context.
- Empty state copy is shown when there is no upcoming booking.

### US-011: See what is available now
**As an** employee
**I want to** see resources available right now
**So that** I can grab a desk or room without planning ahead

**Acceptance Criteria:**
- The home page shows an availability section (`landing-available-now`).
- Availability respects the current building, level and configured resource types.
- Available resources show enough location context to decide whether to book.
- Selecting an available resource starts the matching booking flow with prefilled context.
- Empty and loading states do not block the rest of the landing page.

### US-012: Use quick actions to start a booking
**As an** employee
**I want to** start a common booking in one click from the home page
**So that** I can book without navigating the full flow

**Acceptance Criteria:**
- The home page shows quick actions (`landing-quick-actions`).
- Selecting a quick action opens the relevant booking flow.
- Quick actions are hidden when their feature is disabled.
- Quick actions preserve the currently selected date/building context where available.

### US-013: See colleague availability
**As a** team lead
**I want to** see my colleagues' presence on the home page
**So that** I can coordinate being in together

**Acceptance Criteria:**
- The home page shows a colleagues section (`landing-colleagues-new`) when enabled.
- Colleagues show availability, location or booking context when data is available.
- Users can add or remove colleagues from their tracked list.
- A colleague can be opened in directory or located on the map when supported.
- Empty states explain how to add colleagues.

### US-014: Re-book favourites
**As an** employee
**I want to** see my frequently booked spaces
**So that** I can re-book them quickly

**Acceptance Criteria:**
- The home page shows a favourites section (`landing-favourites-new`) when enabled.
- Favourite spaces show type, name and useful location details.
- Selecting a favourite starts a booking with the favourite resource selected or prioritised.
- Favourites that are unavailable show their unavailable state instead of failing silently.

### US-015: See my desk week
**As an** employee
**I want to** see my desk bookings for the week
**So that** I can plan my office attendance

**Acceptance Criteria:**
- The landing page can show a desk-week component (`landing-desk-week`) when enabled.
- Each workday clearly indicates booked, available, unavailable or not-in-office state.
- Selecting a day opens the desk booking or schedule flow for that day.
- Recurring desk bookings are represented consistently with single-day bookings.

### US-016: Use landing concierge prompts
**As an** employee
**I want to** use suggested prompts on the landing page
**So that** I can ask common workplace questions quickly

**Acceptance Criteria:**
- The landing virtual concierge surface appears when chat/concierge configuration is enabled.
- Suggested prompts come from configured `virtual_concierge.prompts`.
- Submitting a prompt opens or continues the concierge experience.
- Concierge failures do not prevent the rest of the landing page from rendering.

### US-017: See organisation messages
**As an** employee
**I want to** see important workplace announcements
**So that** I know about changes that affect my day

**Acceptance Criteria:**
- A configured banner can be shown on the landing page or app shell.
- Banner type controls the visual severity where supported.
- Empty banner content does not leave blank space.
- Dismissal or acknowledgement behaviour is consistent with the configured banner model.

### US-018: Start from an empty state
**As a** new employee
**I want to** understand the home page when I have no bookings or favourites
**So that** I know what action to take next

**Acceptance Criteria:**
- Empty states are shown for upcoming bookings, favourites, colleagues and availability.
- Empty states offer relevant next actions when the user has permission.
- Empty sections do not hide unrelated populated sections.
- The page remains useful when only one landing module has data.

---

## Booking Flows

All booking flows are hosted inside the `placeos-book` shell and follow a multi-step
pattern such as details, selection, confirm and success. Step route names may vary by flow.

### US-020: Book a desk
**As an** employee
**I want to** book a desk for a chosen date and time
**So that** I have a place to work in the office

**Acceptance Criteria:**
- `/book/desk` redirects to the desk form step and opens `desk-flow-new`.
- The user can choose date, time, duration, building/level and a desk where available.
- Desk availability respects booking rules, reserved desks and assigned-desk settings.
- Group desk booking is available only when `desks.allow_groups` is enabled.
- Booking for another user is available only when `desks.can_book_for_others` is enabled.
- The booking can be confirmed and a success state is shown.
- Calendar links are shown when `desks.show_calendar_links` is enabled.

### US-021: Book a meeting room
**As an** employee
**I want to** book a meeting room with details and options
**So that** I can host a meeting

**Acceptance Criteria:**
- `/book/meeting` redirects to the meeting form step and opens `meeting-flow-new`.
- The user can enter title, date, time, duration, host and attendee details.
- External attendees are available only when allowed by settings.
- Online meeting options are available only when enabled.
- Catering and asset options are available when `events.has_catering` or `events.has_assets` is enabled.
- Room selection respects capacity, location, features and availability.
- The booking can be confirmed and a success state is shown.
- A nearby desk action is available from success only when the setting allows it.

### US-022: Book parking
**As an** employee
**I want to** book a parking space for the days I drive in
**So that** I am guaranteed a spot

**Acceptance Criteria:**
- `/book/parking` redirects to the parking form step and opens `placeos-parking-flow`.
- The user can pick date, time, duration, all-day state and vehicle details.
- Parking location and space choices respect available parking levels and hidden buildings.
- Parking can be booked for another user only when the setting allows it.
- Required plate number validation is enforced when `parking.require_plate_number` is enabled.
- The booking can be confirmed when the user is eligible and a space is available.

### US-023: Request parking
**As an** employee
**I want to** request an assigned parking space
**So that** I can be allocated parking subject to approval

**Acceptance Criteria:**
- `/book/parking-request` redirects to the request form step and opens `placeos-parking-request-flow`.
- The user can choose request type, shift, date/time window, vehicle type and parking location preferences.
- Configured request types, shift options, vehicle types and space restrictions are shown.
- Recurrence options are shown only when `parking.allow_recurrence` is enabled.
- Location defaults can prefer the user's desk booking location when configured.
- Manual approval and auto-approval behaviour follows configured request types and approver groups.
- Submission success indicates whether the request is approved, pending or requires follow-up.

### US-024: Invite a visitor
**As a** host
**I want to** invite an external visitor for a chosen date
**So that** they are expected and can check in on arrival

**Acceptance Criteria:**
- `/book/visitor` redirects to the visitor form step and opens `visitor-flow-new`.
- The user can enter visit title/reason, host, date/time, visitor name and visitor contact details.
- Multiple visitors are available only when configured.
- Recent invitees can be reused where stored in user settings.
- All-day visitor invites are available only when visitor settings allow it.
- Navigating away mid-flow warns about losing unsaved invites.
- Success clearly lists who was invited and when they are expected.

### US-025: Book a locker
**As an** employee
**I want to** book a locker
**So that** I have somewhere to store belongings

**Acceptance Criteria:**
- `/book/locker` redirects to the locker form step and opens `placeos-book-locker-flow`.
- Locker booking is available only when the lockers feature is enabled.
- The user can choose the relevant location and time period where supported.
- The booking can be confirmed and appears in the user's schedule.

### US-026: Book via code
**As an** employee
**I want to** book using a code
**So that** I can quickly claim a specific resource

**Acceptance Criteria:**
- `/book/code` opens the code flow (`book-code-flow`).
- The user can enter or scan a booking code where supported by the shell.
- Valid codes route to the correct success state.
- Invalid, expired or already-used codes route to the dedicated error state.
- Success and error pages keep the app shell and navigation available.

### US-027: Review booking details before submission
**As an** employee
**I want to** review booking details before confirming
**So that** I can catch mistakes before creating a booking

**Acceptance Criteria:**
- Confirm steps summarise date, time, duration, host, resource and location.
- Optional data such as attendees, visitor details, catering, assets and vehicle details is shown when present.
- Required missing fields prevent confirmation and move focus to the invalid field.
- Returning to earlier steps preserves completed form values.

### US-028: Handle unavailable resources
**As an** employee
**I want to** understand why a booking cannot be completed
**So that** I can choose another resource or time

**Acceptance Criteria:**
- Unavailable resources are disabled or clearly marked.
- Rule failures show actionable messages instead of generic errors.
- If availability changes before confirmation, the user is told to choose another option.
- Search, map and list selection states remain consistent after an unavailable result.

### US-029: Create repeated or all-day bookings
**As an** employee
**I want to** create all-day or recurring bookings where allowed
**So that** I can plan repeated attendance without duplicate entry

**Acceptance Criteria:**
- All-day controls appear only for booking types that support them.
- Recurrence controls appear only when the flow's `allow_recurrence` setting is enabled.
- Recurrence summary text is shown on the confirm step.
- Invalid recurrence end dates or unsupported patterns are blocked before submission.
- Recurring bookings appear correctly in the schedule views.

---

## Schedule / Your Bookings

### US-030: View my bookings
**As an** employee
**I want to** view all my bookings in one place
**So that** I can keep track of where I need to be

**Acceptance Criteria:**
- `/your-bookings` renders the schedule page (`app-schedule`).
- Bookings are shown for the selected date/range.
- Desk, room, parking, locker and visitor bookings are visually distinguishable.
- Empty ranges show a useful empty state.
- The schedule can refresh after creating, editing or cancelling a booking.

### US-031: Switch schedule views
**As an** employee
**I want to** switch between day, week and list views
**So that** I can see my schedule the way that suits me

**Acceptance Criteria:**
- The schedule topbar lets the user change view mode.
- The selected view renders the corresponding layout.
- Date navigation keeps the selected view mode.
- Mobile layouts expose equivalent date and view controls.

### US-032: Filter and pick a date range
**As an** employee
**I want to** filter bookings by type/status and choose a date
**So that** I can focus on what is relevant

**Acceptance Criteria:**
- Filters are available (`schedule-filters`).
- A date selector controls the period shown.
- Filter options only include enabled booking types.
- Active filters are visible and can be cleared.
- Filter changes update day, week and list views consistently.

### US-033: View booking details
**As an** employee
**I want to** open a booking from my schedule
**So that** I can confirm its details

**Acceptance Criteria:**
- Selecting a booking opens a details modal or details surface.
- Details include booking type, date/time, location, host and resource data.
- Visitor bookings show visitor-specific details when available.
- Parking bookings show status and selected space details unless hidden by settings.
- Detail loading and missing-data states are handled gracefully.

### US-034: Edit a booking
**As an** employee
**I want to** edit bookings from my schedule
**So that** I can change plans without recreating the booking

**Acceptance Criteria:**
- Editable bookings expose an edit action.
- Edit actions open the matching booking flow with existing booking values hydrated.
- Room, desk, parking and visitor edits preserve the correct resource and participant data.
- Validation rules are re-run before saving edited bookings.
- Successful edits return the user to a refreshed schedule.

### US-035: Cancel a booking
**As an** employee
**I want to** cancel bookings I no longer need
**So that** resources become available for others

**Acceptance Criteria:**
- Cancellable bookings expose a cancel action.
- The user is asked to confirm cancellation.
- Cancellation updates the schedule without requiring a full page reload.
- Recurring or instance-based bookings make the cancellation scope clear where supported.
- Failed cancellations show an actionable error message.

### US-036: Understand booking status
**As an** employee
**I want to** see booking approval and waitlist status
**So that** I know whether I can rely on the booking

**Acceptance Criteria:**
- Schedule cards show approved, tentative/pending, declined and waitlisted states where applicable.
- Parking requests waiting for approval are distinct from waitlisted bookings.
- Status colours match the configured schedule legend where supported.
- Detail modals repeat the status in text, not colour alone.

### US-037: Add bookings to a calendar
**As an** employee
**I want to** add supported bookings to my calendar
**So that** my external calendar stays in sync

**Acceptance Criteria:**
- Calendar links are shown on success/detail screens when enabled for the booking type.
- Outlook, Google Calendar and iCal options are available where supported.
- Calendar links include the correct booking title, time and location.
- Calendar options are hidden when disabled by settings.

---

## Explore / Map

### US-040: View the interactive floor map
**As an** employee
**I want to** see the building map with live availability
**So that** I can find free spaces and desks

**Acceptance Criteria:**
- `/explore` renders the explore page (`app-explore`).
- The map view renders with availability indicators (`explore-map-view`).
- Building and level context is visible when multiple locations are available.
- The map legend appears when configured.
- The page handles organisations without maps by showing list/search alternatives.

### US-041: Locate my upcoming booking on the map
**As an** employee
**I want to** pin my next booking on the map
**So that** I can find where I'm going

**Acceptance Criteria:**
- An upcoming-booking pill is shown when the user has a booking.
- Selecting the pill focuses the map on the booking's resource or zone.
- The selected pin includes time and location context.
- If the booking has no map position, the user gets a clear fallback.

### US-042: Locate a colleague
**As an** employee
**I want to** locate a colleague on the map
**So that** I can sit near them or find them

**Acceptance Criteria:**
- The map can be opened focused on a specific user (`/explore?user=...`).
- A matching colleague is highlighted when location data is available.
- If location data is unavailable, the user can still open the colleague profile or directory result.
- Privacy or feature restrictions hide colleague location without breaking map search.

### US-043: Search for spaces and resources
**As an** employee
**I want to** search the map for spaces, desks and resources
**So that** I can find the right place quickly

**Acceptance Criteria:**
- Search results include matching spaces, desks and other map resources where available.
- Selecting a result changes building/level as needed and focuses the resource.
- Results show availability or status context when supported.
- Empty search results explain that no matching resource was found.

### US-044: Book from the map
**As an** employee
**I want to** start a booking from a selected map resource
**So that** I can act immediately when I find a suitable place

**Acceptance Criteria:**
- Bookable map resources expose a booking action.
- The booking flow receives selected resource, building, level and time context where possible.
- Unbookable resources explain why booking is not available.
- Returning from the booking flow does not lose the user's selected building/level unnecessarily.

### US-045: Understand parking availability on the map
**As an** employee
**I want to** see parking availability and restrictions on the map
**So that** I can choose an appropriate parking location

**Acceptance Criteria:**
- Parking resources or zones show availability when parking map data is configured.
- Availability counters are hidden when `parking.hide_availability_counter` is enabled.
- Selected parking space names are hidden when `parking.hide_selected_space` is enabled.
- Hidden buildings are not offered as parking locations.

---

## Directory

### US-050: Search the staff directory
**As an** employee
**I want to** search for colleagues by name
**So that** I can find their contact details

**Acceptance Criteria:**
- `/directory` renders the directory (`[a-directory-user-list]`).
- Typing at least the configured minimum number of characters returns matching staff.
- Directory search respects `directory.min_search_length`.
- Avatars are shown or hidden based on directory settings.
- Empty, loading and error states are visible and understandable.

### US-051: Locate or contact a colleague from the directory
**As an** employee
**I want to** locate a colleague on the map or call them from their entry
**So that** I can reach or find them

**Acceptance Criteria:**
- A locate action opens the map focused on the colleague.
- A call action is available when a phone number exists.
- Email/contact details are available when present in the user record.
- Missing contact methods do not leave disabled controls without explanation.

### US-052: Respect hidden contacts settings
**As a** support/admin
**I want to** hide staff contact surfaces when required
**So that** Workplace follows organisation privacy settings

**Acceptance Criteria:**
- Directory and contact links are hidden when contact features are disabled.
- Global search does not expose contact actions that the directory hides.
- Existing deep links fail closed when a user is not allowed to view contact details.

---

## Team Schedule

### US-060: View team availability
**As a** team lead
**I want to** see my team's bookings and presence
**So that** I can coordinate office days

**Acceptance Criteria:**
- `/team-schedule` renders the team schedule (`team-schedule`).
- Team members and their bookings are listed.
- The view makes in-office, remote, unavailable and unknown states distinguishable.
- Empty team state explains how team members are determined or added.

### US-061: Filter team schedule
**As a** team lead
**I want to** filter team availability by date, person and location
**So that** I can find the best day for collaboration

**Acceptance Criteria:**
- Team schedule filters are available (`team-schedule-filters`).
- Filters update the list/table without losing selected date context.
- Quick actions remain relevant to the selected date/location.
- Empty filtered results can be cleared in one action.

### US-062: Act on team schedule insights
**As a** team lead
**I want to** start useful actions from the team schedule
**So that** I can coordinate attendance without switching tools

**Acceptance Criteria:**
- Quick actions are shown where the team schedule supports them.
- A user can open a colleague, map location or relevant booking flow from schedule rows.
- Actions are hidden when the required feature is disabled.

---

## Discovery: Group Events & Deals

### US-070: Browse group events
**As an** employee
**I want to** browse company events
**So that** I can find activities to attend

**Acceptance Criteria:**
- `/group-events` renders the group events page (`[group-events]`).
- Featured events are highlighted when configured.
- Events can be filtered.
- Empty and no-results states are shown when no events match.
- The virtual concierge remains available when configured.

### US-071: Browse deals & offers
**As an** employee
**I want to** browse staff deals and offers
**So that** I can take advantage of promotions

**Acceptance Criteria:**
- `/deals-n-offers` renders the deals page (`deals-n-offers`).
- Deals can be sorted/filtered.
- Selecting a deal opens deal details.
- Expired or unavailable deals are not presented as active.
- Empty and no-results states are shown when no deals match.

### US-072: Open event or deal details
**As an** employee
**I want to** open an event or deal for more information
**So that** I can decide whether it is relevant to me

**Acceptance Criteria:**
- Detail surfaces include title, dates, location and descriptive content where available.
- Links or calls to action open safely in the configured target.
- Missing images or optional metadata do not break cards or modals.

---

## Control

### US-080: Control room services
**As** facilities/reception
**I want to** control building/room systems
**So that** I can manage AV, lighting and climate

**Acceptance Criteria:**
- `/control` renders the control page (`[app-control]`).
- A list of controllable spaces is shown.
- Spaces can be searched or filtered where supported.
- Selecting a space opens available controls for that space.
- Control actions show success, loading and error states.

### US-081: Move from control to explore
**As** facilities/reception
**I want to** jump from a controllable space to its map location
**So that** I can understand where the room is

**Acceptance Criteria:**
- A map/explore action appears only when the explore feature is enabled.
- The action routes to the relevant map location.
- Missing map metadata disables the action or shows a clear fallback.

---

## Error, Access & Resilience States

### US-090: Unauthorised access
**As an** employee without access
**I want to** see a clear unauthorised page
**So that** I understand I cannot use the app

**Acceptance Criteria:**
- `/unauthorised` renders the unauthorised page.
- The unauthorised state explains that access is unavailable.
- The user can retry login or navigate away where the shell permits.
- Direct links to protected routes fail closed.

### US-091: Misconfiguration
**As an** employee
**I want to** see a clear message when the app is misconfigured
**So that** I know to contact support rather than assume a fault

**Acceptance Criteria:**
- `/misconfigured` renders the misconfigured page.
- Missing required organisation, settings or zone metadata routes to misconfigured state.
- The message avoids exposing sensitive backend details.
- Recovery guidance is shown for support/admin users where available.

### US-092: Handle backend failures
**As an** employee
**I want to** see recoverable error states when services fail
**So that** I can retry instead of getting stuck

**Acceptance Criteria:**
- Booking, schedule, map and directory data failures show local error states.
- Retry actions are available where the underlying operation is safe to retry.
- Partially loaded pages keep usable sections visible.
- Error messaging distinguishes validation issues from service outages.

### US-093: Handle no-data organisations
**As a** support/admin
**I want to** see useful empty states when a tenant lacks data
**So that** configuration gaps can be diagnosed

**Acceptance Criteria:**
- Missing buildings, levels, resources or user directory data produce empty states.
- Empty states identify the missing data category without showing raw exceptions.
- Features with no configured data do not appear as successful blank pages.

---

## Cross-Cutting Requirements

### US-100: Keep booking context across flows
**As an** employee
**I want to** keep selected date, time, building and resource context when moving between related flows
**So that** I do not repeat entry

**Acceptance Criteria:**
- Quick actions, map booking actions and schedule edits prefill available context.
- Context is cleared when it would create an invalid booking.
- Changing booking type does not leak incompatible fields into the new flow.

### US-101: Support feature-specific settings
**As a** support/admin
**I want to** configure Workplace behaviour per tenant
**So that** the app matches each organisation's policies

**Acceptance Criteria:**
- Settings in `apps/workplace/src/environments/settings.schema.json` are reflected in the UI.
- Disabled settings hide controls instead of showing controls that fail at submission.
- Settings-driven labels, limits and options update without code changes.
- Defaults in `settings.ts` produce a usable demo/mock configuration.

### US-102: Preserve accessibility basics
**As an** employee using assistive technology
**I want to** navigate and complete primary flows
**So that** Workplace is usable without relying only on pointer interaction

**Acceptance Criteria:**
- Primary navigation, booking forms, filters and modals are keyboard reachable.
- Buttons and icon-only controls have accessible names.
- Status is not conveyed by colour alone.
- Focus moves predictably when opening dialogs, changing steps and showing validation errors.

### US-103: Keep mock mode useful for testing
**As a** developer or tester
**I want to** use mock mode for Workplace flows
**So that** e2e tests can run without a live PlaceOS backend

**Acceptance Criteria:**
- `?mock=true` and the mock-mode shortcut load mock data consistently.
- Mock data covers landing, booking, schedule, explore and directory smoke tests.
- Mock mode does not require OAuth redirects.
- E2e tests can assert stable selectors tied to the story IDs in this document.
