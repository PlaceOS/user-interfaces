# Control App User Stories

The Control app is an AV/Room Control interface designed to be displayed on touchscreens and displays inside physical meeting rooms. It enables users to manage audio-visual equipment, lighting, cameras, video conferencing, and other room-connected devices through an intuitive touch interface.

## Room Selection

### US-001: Initial Room Setup
**As a** facilities administrator
**I want to** select which room/system the control panel is assigned to
**So that** the panel controls the correct room's equipment

**Acceptance Criteria:**
- System displays a room search/selection interface on first launch
- User can search for rooms by name
- Selected room is stored locally for future sessions
- System auto-loads the stored room on subsequent launches

### US-002: Change Room Assignment
**As a** facilities administrator
**I want to** change the room assignment of a control panel
**So that** I can reassign panels when room configurations change

**Acceptance Criteria:**
- User can navigate to the bootstrap/setup screen
- Previous room selection can be cleared
- New room can be selected from available options

---

## Power Control

### US-003: Power On Room
**As a** meeting room user
**I want to** power on the room's AV system
**So that** I can use the room's equipment for my meeting

**Acceptance Criteria:**
- Power button is prominently displayed on the interface
- Tapping power button activates the room's AV system
- Interface shows loading state during power-on sequence
- Full control interface becomes available after power-on

### US-004: Power Off Room
**As a** meeting room user
**I want to** power off the room's AV system when leaving
**So that** equipment is properly shut down and energy is conserved

**Acceptance Criteria:**
- Power button allows shutting down the system
- Confirmation is requested before shutdown
- System returns to standby state after power-off

---

## Audio/Video Source Management

### US-005: View Available Sources
**As a** meeting room user
**I want to** see all available input sources (laptop, camera, etc.)
**So that** I know what devices I can present from

**Acceptance Criteria:**
- Input sources are listed in a sidebar or dedicated section
- Each source shows an icon and name
- Sources are grouped by type (HDMI, wireless, camera, etc.)

### US-006: View Output Destinations
**As a** meeting room user
**I want to** see all available output displays
**So that** I know where my content will be shown

**Acceptance Criteria:**
- Output displays are shown at the bottom of the interface
- Each output shows its name and current source
- Output status (on/off) is clearly indicated

### US-007: Route Source to Display
**As a** meeting room user
**I want to** route an input source to a specific display
**So that** my content appears on the desired screen

**Acceptance Criteria:**
- User can tap on an output to select it
- Source selection modal appears with available inputs
- Selected source is routed to the output
- Output card updates to show the new source

### US-008: Present to All Displays
**As a** meeting room user
**I want to** send my content to all displays simultaneously
**So that** everyone in the room can see my presentation

**Acceptance Criteria:**
- "Present to all" button is available
- Tapping routes the selected source to all outputs
- All output cards update to reflect the change

### US-009: Clear Display Output
**As a** meeting room user
**I want to** clear a display output
**So that** the screen shows nothing or returns to default

**Acceptance Criteria:**
- User can select "None" or blank option for an output
- Display clears or shows default content
- Output card reflects the cleared state

---

## Volume Control

### US-010: Adjust Master Volume
**As a** meeting room user
**I want to** adjust the room's master volume
**So that** audio is at a comfortable level for all participants

**Acceptance Criteria:**
- Volume slider is accessible in the status bar
- Slider adjusts from 0% to 100%
- Volume changes take effect immediately
- Current volume level is visually indicated

### US-011: Mute/Unmute Audio
**As a** meeting room user
**I want to** quickly mute and unmute the room audio
**So that** I can handle interruptions without adjusting volume

**Acceptance Criteria:**
- Mute button is adjacent to volume slider
- Tapping toggles mute state
- Muted state is clearly indicated (icon change, visual feedback)
- Unmuting restores previous volume level

### US-012: Adjust Per-Output Volume
**As a** meeting room user
**I want to** adjust volume for individual outputs
**So that** I can balance audio between different speakers/zones

**Acceptance Criteria:**
- Each output has its own volume control
- Volume can be adjusted independently per output
- Mute option available per output

---

## Lighting Control

### US-013: Select Lighting Scene
**As a** meeting room user
**I want to** select a preset lighting scene
**So that** I can quickly set appropriate lighting for my activity

**Acceptance Criteria:**
- Lighting icon is visible in the top navigation
- Tapping opens lighting scene selection
- Available scenes are listed (e.g., Presentation, Meeting, Video Call)
- Selecting a scene applies it immediately
- Current scene is indicated

### US-014: Adjust Individual Lights
**As a** meeting room user
**I want to** control individual lights
**So that** I can customize lighting beyond preset scenes

**Acceptance Criteria:**
- Individual light controls are accessible
- Each light can be toggled on/off
- Light status is visually indicated

### US-015: Adjust Lighting Levels
**As a** meeting room user
**I want to** adjust brightness levels for lighting zones
**So that** I can fine-tune the room's ambiance

**Acceptance Criteria:**
- Brightness sliders available for each zone
- Sliders allow granular brightness control
- Changes apply in real-time
- Current brightness level is displayed

---

## Camera Control

### US-016: Select Camera
**As a** meeting room user
**I want to** select which camera to use
**So that** I can choose the best angle for my meeting

**Acceptance Criteria:**
- Camera icon accessible in navigation
- Available cameras are listed
- Selected camera is indicated
- Preview of camera feed shown when possible

### US-017: Control Camera Position
**As a** meeting room user
**I want to** pan, tilt, and zoom the camera
**So that** I can frame the shot appropriately

**Acceptance Criteria:**
- Joystick/directional control for pan and tilt
- Zoom in/out buttons available
- Controls respond smoothly to touch input
- Movement stops when control is released

### US-018: Use Camera Presets
**As a** meeting room user
**I want to** quickly move the camera to preset positions
**So that** I can use common framing without manual adjustment

**Acceptance Criteria:**
- Camera presets are listed
- Selecting a preset moves camera to that position
- Preset names indicate the framing (e.g., "Wide Shot", "Presenter")

### US-019: Save Camera Preset
**As a** meeting room user
**I want to** save the current camera position as a preset
**So that** I can quickly return to this framing later

**Acceptance Criteria:**
- Save preset option is available
- User can name the preset
- Preset is stored and available for future use

---

## Video Conferencing

### US-020: Start Video Conference Call
**As a** meeting room user
**I want to** start a video conference call
**So that** I can connect with remote participants

**Acceptance Criteria:**
- Video conference icon accessible in navigation
- Dial pad available for entering meeting numbers
- Call initiates when user dials
- Call status is displayed (Dialling, Connected, etc.)

### US-021: Join Scheduled Meeting
**As a** meeting room user
**I want to** join a meeting from the room's calendar
**So that** I don't have to manually enter meeting details

**Acceptance Criteria:**
- "Join Meeting" button shows upcoming meetings
- Meeting list displays time and title
- Selecting a meeting auto-joins the call
- Meeting URL is processed automatically

### US-022: End Video Call
**As a** meeting room user
**I want to** end the video conference call
**So that** I can properly disconnect from the meeting

**Acceptance Criteria:**
- End call button is prominently displayed during calls
- Tapping ends the call
- System returns to idle state
- Confirmation shown for call ended

### US-023: Mute/Unmute Microphone
**As a** meeting room user
**I want to** mute and unmute the room microphone during calls
**So that** I can control when remote participants hear us

**Acceptance Criteria:**
- Microphone mute button available during calls
- Muted state clearly indicated
- Remote participants cannot hear when muted
- Toggle responds immediately

### US-024: Toggle Self-View
**As a** meeting room user
**I want to** show or hide the self-view camera feed
**So that** I can see how I appear to remote participants

**Acceptance Criteria:**
- Self-view toggle available during calls
- Shows picture-in-picture of room camera
- Can be toggled on/off
- Does not affect what remote participants see

### US-025: Change Video Layout
**As a** meeting room user
**I want to** change the video conference layout
**So that** I can view remote participants optimally

**Acceptance Criteria:**
- Layout options available (Auto, Equal, Prominent, Single)
- Selecting layout changes the display immediately
- Current layout is indicated

### US-026: Share Presentation in Call
**As a** meeting room user
**I want to** share content/presentation during a video call
**So that** remote participants can see my materials

**Acceptance Criteria:**
- Presentation sharing option available during calls
- Selected source is shared with remote participants
- Presentation mode can be toggled on/off
- Remote participants see shared content

### US-027: Send DTMF Tones
**As a** meeting room user
**I want to** send DTMF tones during a call
**So that** I can navigate phone menus or enter PINs

**Acceptance Criteria:**
- Dial pad accessible during active calls
- Tones sent when buttons pressed
- Audio feedback for button presses

### US-028: Hold/Resume Call
**As a** meeting room user
**I want to** put a call on hold and resume it
**So that** I can handle private conversations

**Acceptance Criteria:**
- Hold button available during calls
- Call is paused when held
- Resume button available while on hold
- Remote participants see/hear hold state

---

## Phone Dialling

### US-029: Make Phone Call
**As a** meeting room user
**I want to** make a phone call from the room system
**So that** I can dial into audio conferences or call participants

**Acceptance Criteria:**
- Phone dial pad accessible
- Numbers can be entered
- Call initiates when dialled
- Call status displayed (ringing, connected)

### US-030: View Incoming Call
**As a** meeting room user
**I want to** see and answer incoming calls
**So that** I don't miss important communications

**Acceptance Criteria:**
- Incoming call notification displayed
- Caller information shown if available
- Answer and decline options available
- Ringing indicator visible

---

## Recording

### US-031: View Recording Status
**As a** meeting room user
**I want to** see if the room is currently recording
**So that** I'm aware of when sessions are being captured

**Acceptance Criteria:**
- Recording status shown in status bar
- Active recording clearly indicated (red indicator)
- Recording duration displayed
- Time remaining shown if applicable

### US-032: Control Recording
**As a** meeting room user
**I want to** pause and resume recording
**So that** I can control what is captured

**Acceptance Criteria:**
- Play/Pause controls available during recording
- Paused state clearly indicated
- Recording can be resumed after pause

### US-033: View Next Scheduled Recording
**As a** meeting room user
**I want to** see when the next recording is scheduled
**So that** I know when recording will start

**Acceptance Criteria:**
- Upcoming recording schedule displayed
- Time until next recording shown
- Recording title displayed if available

---

## Room Joining (Multi-Room)

### US-034: Join Rooms Together
**As a** meeting room user
**I want to** link multiple rooms together
**So that** a larger group can use adjacent rooms as one space

**Acceptance Criteria:**
- Room joining icon available
- Available join modes listed
- Selecting mode initiates room linking
- Joined state indicated on all panels

### US-035: View Joined Rooms Status
**As a** meeting room user
**I want to** see which rooms are currently joined
**So that** I understand the current room configuration

**Acceptance Criteria:**
- Joined rooms listed when in joined state
- Room names/identifiers shown
- Join status visible on interface

### US-036: Separate Joined Rooms
**As a** meeting room user
**I want to** separate previously joined rooms
**So that** each room can operate independently again

**Acceptance Criteria:**
- Option to separate rooms available
- Separation can be initiated from any joined panel
- Rooms return to independent operation
- Confirmation of separation shown

### US-037: View Join Lockout
**As a** meeting room user
**I want to** see when room joining is unavailable
**So that** I understand why I cannot join rooms

**Acceptance Criteria:**
- Lockout state clearly indicated
- Reason for lockout displayed if available
- Interface shows when lockout will end

---

## Voice Assistant

### US-038: Activate Voice Control
**As a** meeting room user
**I want to** use voice commands to control the room
**So that** I can operate equipment hands-free

**Acceptance Criteria:**
- Voice assistant button visible
- Tapping activates listening mode
- Visual indicator shows when listening
- Spoken commands are processed

### US-039: Execute Voice Commands
**As a** meeting room user
**I want to** give verbal commands for common actions
**So that** I can quickly control equipment without touching the screen

**Acceptance Criteria:**
- Common commands recognized (volume, mute, source selection)
- Feedback shown for command recognition
- Success/failure indication for command execution
- Voice control can be deactivated

### US-040: View Voice Command Status
**As a** meeting room user
**I want to** see feedback on voice command processing
**So that** I know if my command was understood

**Acceptance Criteria:**
- Real-time transcription shown
- Command interpretation displayed
- Execution status indicated
- Error states clearly communicated

---

## Room Accessories

### US-041: Control Blinds/Screens
**As a** meeting room user
**I want to** control motorized blinds and screens
**So that** I can manage natural light and projection surfaces

**Acceptance Criteria:**
- Blinds/screens controls accessible
- Open/close/position controls available
- Current position indicated
- Multiple blinds can be controlled individually

### US-042: Control Custom Accessories
**As a** meeting room user
**I want to** control room-specific accessories
**So that** I can use all available room equipment

**Acceptance Criteria:**
- Room accessories shown in interface
- Each accessory has appropriate controls
- Accessory state is displayed
- Controls are intuitive for the accessory type

---

## Help System

### US-043: Access Help Documentation
**As a** meeting room user
**I want to** access help information
**So that** I can learn how to use room features

**Acceptance Criteria:**
- Help icon available in navigation
- Help content relevant to current context
- Instructions are clear and illustrated
- Help modal can be dismissed easily

### US-044: View Feature-Specific Help
**As a** meeting room user
**I want to** get help for a specific feature
**So that** I can learn how to use that particular function

**Acceptance Criteria:**
- Help content adapts to current tab/feature
- Step-by-step instructions provided
- Markdown-formatted content renders properly
- Images/diagrams included where helpful

---

## Microphone Selection

### US-045: Select Active Microphone
**As a** meeting room user
**I want to** select which microphone to use
**So that** audio is captured from the optimal location

**Acceptance Criteria:**
- Microphone selection accessible
- Available microphones listed
- Selected microphone indicated
- Audio source switches when selection changes

---

## Tab Navigation

### US-046: Navigate Between Control Tabs
**As a** meeting room user
**I want to** switch between different control categories
**So that** I can access all room functions

**Acceptance Criteria:**
- Tabs displayed for different control areas
- Active tab is highlighted
- Tab content changes when selected
- Tabs are customizable per room configuration

### US-047: View TV Channels
**As a** meeting room user
**I want to** browse and select TV channels
**So that** I can display broadcast content

**Acceptance Criteria:**
- TV channels tab available (if configured)
- Channel list displayed
- Channel selection changes display output
- Channel information shown (name, number)

---

## Accessibility

### US-048: Use Hearing Loop
**As a** hearing-impaired meeting room user
**I want to** know if a hearing loop (T-coil) is available
**So that** I can use my hearing aid with the room system

**Acceptance Criteria:**
- Hearing loop availability indicated
- T-coil/loop icon displayed when available
- Information on how to use the loop accessible

### US-049: Touch-Friendly Interface
**As a** meeting room user
**I want to** easily interact with all controls via touch
**So that** I can operate the system without a mouse or keyboard

**Acceptance Criteria:**
- All buttons have adequate touch target size
- Spacing between controls prevents accidental taps
- Gestures are intuitive (swipe, tap, long-press)
- Visual feedback on touch interactions

---

## System Status

### US-050: View System Status
**As a** meeting room user
**I want to** see the overall status of the room system
**So that** I know if equipment is working properly

**Acceptance Criteria:**
- System status indicators visible
- Error states clearly communicated
- Connected equipment status shown
- Network/connection status indicated

### US-051: View Current Meeting Information
**As a** meeting room user
**I want to** see information about the current/upcoming meeting
**So that** I know the room's schedule

**Acceptance Criteria:**
- Current meeting details displayed
- Meeting time and duration shown
- Meeting title visible
- Upcoming meetings accessible
