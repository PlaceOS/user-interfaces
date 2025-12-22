# Booking Panel - User Stories

This document describes user stories for the Booking Panel application, a touchscreen interface displayed outside physical meeting rooms to show availability and enable quick bookings.

## Personas

- **Office Worker**: An employee looking to book a room or check in to a meeting
- **Meeting Organizer**: A person who has scheduled a meeting and needs to start/manage it
- **Facility Manager**: An administrator configuring panels for different rooms
- **Visitor**: A guest who needs to find or use a meeting room

---

## Room Status Display

### US-001: View Room Availability at a Glance
**As an** office worker
**I want to** see the current availability status of a room from outside
**So that** I can quickly determine if the room is free without opening the door

**Acceptance Criteria:**
- Room displays a clear visual indicator (green = free, red = busy, yellow = pending)
- Status is visible from a reasonable distance
- Display updates in real-time without manual refresh

### US-002: View Current Meeting Details
**As an** office worker
**I want to** see details of the current meeting in progress
**So that** I know who is using the room and when it will be available

**Acceptance Criteria:**
- Display shows meeting title (when configured)
- Display shows meeting organizer name (when configured)
- Display shows time remaining until the meeting ends
- Privacy settings can hide sensitive meeting information

### US-003: View Next Scheduled Meeting
**As an** office worker
**I want to** see when the next meeting is scheduled
**So that** I can plan when the room will next be available

**Acceptance Criteria:**
- Panel shows the start time of the next scheduled booking
- Panel shows the duration of the upcoming meeting
- When room is free, shows how long until the next booking

### US-004: View Room Information
**As an** office worker
**I want to** see the room name and capacity
**So that** I can confirm I'm at the correct room and it fits my needs

**Acceptance Criteria:**
- Room name is prominently displayed
- Room capacity is visible
- Room image can be displayed as background (when configured)

### US-005: View Current Date and Time
**As an** office worker
**I want to** see the current date and time on the panel
**So that** I can verify meeting times without checking my phone

**Acceptance Criteria:**
- Current time is displayed and updates in real-time
- Current date is displayed
- Time format respects locale settings

---

## Booking a Room

### US-006: Book Room Immediately (Quick Book)
**As an** office worker
**I want to** quickly book a free room by tapping the panel
**So that** I can secure the space for an immediate meeting

**Acceptance Criteria:**
- Tapping on a free room initiates a booking
- Booking uses a default duration (typically 30 minutes)
- Booking is confirmed and room status changes to busy/pending
- User receives confirmation of the booking

### US-007: Book Room with Custom Duration
**As an** office worker
**I want to** specify how long I need the room
**So that** I can book the exact time I need

**Acceptance Criteria:**
- Duration selector allows choosing booking length
- Minimum and maximum durations are enforced
- Duration options are available in reasonable increments (e.g., 15 minutes)
- Selected duration is reflected in the booking

### US-008: Book Room with Meeting Title
**As a** meeting organizer
**I want to** add a title to my ad-hoc booking
**So that** others can see what the room is being used for

**Acceptance Criteria:**
- Text field allows entering a meeting title
- Default title is pre-populated ("Ad-Hoc Panel Booking")
- Title appears on the panel once booking is confirmed

### US-009: Book Room on Behalf of Someone
**As an** office worker
**I want to** book a room and specify a different host
**So that** I can book for my manager or a colleague

**Acceptance Criteria:**
- Host field allows searching the staff directory
- Autocomplete helps find the correct person
- Booking is associated with the selected host

### US-010: Book Room for a Future Time
**As an** office worker
**I want to** schedule a booking for later in the day
**So that** I can reserve a room for an upcoming meeting

**Acceptance Criteria:**
- Date and time picker allows selecting future slots
- Only available time slots can be selected
- Conflicts with existing bookings are prevented
- Booking confirmation shows the scheduled time

---

## Check-In and Meeting Management

### US-011: Check In to a Pending Meeting
**As a** meeting organizer
**I want to** confirm my meeting has started by checking in
**So that** the room is marked as occupied and not released

**Acceptance Criteria:**
- Pending meetings show a check-in prompt
- Tapping the panel confirms attendance
- Room status changes from pending to busy
- Meeting organizer is notified of successful check-in

### US-012: Check In via QR Code
**As a** meeting organizer
**I want to** scan a QR code with my mobile device to check in
**So that** I can confirm my meeting from my phone

**Acceptance Criteria:**
- QR code is displayed on the panel (when enabled)
- Scanning the code opens a check-in page on mobile
- Check-in updates the panel status in real-time

### US-013: End Meeting Early
**As a** meeting organizer
**I want to** end my meeting early and release the room
**So that** others can use the space

**Acceptance Criteria:**
- End meeting button is available during active meetings (when enabled)
- Confirmation is requested before ending
- Room status changes to free after ending
- Remaining time is released back to availability

### US-014: Auto-Release Unconfirmed Bookings
**As a** facility manager
**I want** unconfirmed meetings to automatically release the room
**So that** no-shows don't waste meeting space

**Acceptance Criteria:**
- Pending bookings expire after configurable period (e.g., 10 minutes)
- Room returns to free status after expiration
- Meeting organizer is notified of auto-cancellation

---

## Room Services Integration

### US-015: Call Waiter Service
**As a** meeting participant
**I want to** request waiter service from the panel
**So that** I can order refreshments without leaving the room

**Acceptance Criteria:**
- Waiter call button is visible (when enabled)
- Tapping sends a service request
- Confirmation is shown to the user

### US-016: Access Room Controls
**As a** meeting participant
**I want to** control room features (lights, AV, temperature)
**So that** I can adjust the environment from the panel

**Acceptance Criteria:**
- Control UI button opens embedded control interface
- Controls auto-dismiss after period of inactivity (30 seconds)
- Changes take effect in the room in real-time

### US-017: Access Catering Menu
**As a** meeting organizer
**I want to** order catering from the panel
**So that** I can arrange food for my meeting

**Acceptance Criteria:**
- Catering button opens embedded catering interface (when enabled)
- Order is associated with the current booking
- Confirmation is provided after ordering

---

## Panel Configuration

### US-018: Configure Panel for a Room
**As a** facility manager
**I want to** assign a panel to a specific room
**So that** the panel displays information for that space

**Acceptance Criteria:**
- Bootstrap screen allows searching for rooms
- Room can be selected from search results
- Selection persists across panel restarts
- Panel immediately shows selected room's status

### US-019: Configure Panel via URL
**As a** facility manager
**I want to** configure the panel via URL parameters
**So that** I can deploy panels without manual setup

**Acceptance Criteria:**
- System ID can be passed as URL parameter
- Panel automatically connects to specified room
- No manual configuration required

### US-020: Switch Between Display Modes
**As a** facility manager
**I want to** choose different display modes for the panel
**So that** I can optimize the view for different use cases

**Acceptance Criteria:**
- Panel view (interactive booking interface)
- Event view (display-focused, minimal interaction)
- Check-in view (kiosk mode with timeline)
- Mode selection persists across restarts

---

## Accessibility and Display

### US-021: View Panel in Different Languages
**As an** office worker
**I want to** see the panel in my preferred language
**So that** I can understand the interface

**Acceptance Criteria:**
- Panel supports multiple languages (English, French, Arabic, Japanese, Chinese, Spanish, Italian)
- Language is set based on system configuration
- All text elements are properly translated

### US-022: Use Panel on Different Devices
**As a** facility manager
**I want** the panel to work on various display sizes
**So that** I can deploy different hardware

**Acceptance Criteria:**
- Interface is responsive to screen size
- Touch targets are appropriately sized
- Landscape and portrait orientations are supported

### US-023: View Offline Status
**As an** office worker
**I want to** know when the panel is offline or unavailable
**So that** I understand why bookings aren't working

**Acceptance Criteria:**
- Offline state displays a configured image or color
- Status is clear that the panel is not operational
- Panel automatically reconnects when service is restored

---

## Timeline and Schedule View

### US-024: View Daily Schedule
**As an** office worker
**I want to** see all bookings for the day on a timeline
**So that** I can find available slots at a glance

**Acceptance Criteria:**
- 24-hour timeline shows all bookings as blocks
- Current time is indicated with a marker
- Booked slots are visually distinct from free slots

### US-025: Book from Timeline
**As an** office worker
**I want to** tap on a free time slot in the timeline
**So that** I can book a specific future time

**Acceptance Criteria:**
- Tapping on free slot opens booking dialog
- Selected time is pre-populated in the form
- Booking is created for the selected time slot

---

## Privacy and Security

### US-026: Hide Sensitive Meeting Information
**As a** facility manager
**I want to** configure what meeting details are shown
**So that** sensitive information isn't displayed publicly

**Acceptance Criteria:**
- Option to hide meeting titles
- Option to hide organizer names
- Room shows as busy without revealing details

### US-027: Restrict Booking Capabilities
**As a** facility manager
**I want to** disable ad-hoc bookings on certain panels
**So that** rooms require pre-booking through the calendar

**Acceptance Criteria:**
- Book now functionality can be disabled
- Panel still shows status and meeting info
- Users are directed to use calendar for bookings

---

## Real-Time Updates

### US-028: Receive Live Status Updates
**As an** office worker
**I want** the panel to update automatically
**So that** I always see current information

**Acceptance Criteria:**
- Status updates via WebSocket connection
- Changes reflect within seconds
- No manual refresh required

### US-029: Presence Detection Integration
**As a** facility manager
**I want** the panel to integrate with room sensors
**So that** occupancy is detected automatically

**Acceptance Criteria:**
- Panel responds to presence sensor data (when available)
- Empty rooms can auto-release after timeout
- Sensor status affects room availability display
