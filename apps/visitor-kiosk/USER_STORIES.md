# User Stories - Visitor Kiosk

This document outlines the user stories for the Visitor Kiosk application, which enables visitors to check in, register, and check out at building reception kiosks.

## Personas

- **Visitor**: A guest arriving at the building who needs to check in for their appointment
- **Walk-in Visitor**: A guest without a pre-registered appointment who needs to register on arrival
- **Facility Administrator**: An administrator who configures kiosks for different building locations

---

## Welcome Screen

### Viewing Welcome Screen

**US-WELCOME-001**: View welcome screen
- As a visitor
- I want to see a welcoming kiosk interface when I approach
- So that I can easily identify where to check in

**US-WELCOME-002**: View current date and time
- As a visitor
- I want to see the current date and time on the kiosk
- So that I can verify my appointment time

**US-WELCOME-003**: Access check-in
- As a visitor
- I want to tap a "Check-In" button on the welcome screen
- So that I can begin the check-in process

**US-WELCOME-004**: Access self-registration
- As a walk-in visitor
- I want to tap a "Register" button on the welcome screen
- So that I can register myself for a visit

**US-WELCOME-005**: Access building map
- As a visitor
- I want to tap an "Explore" button to view the building map
- So that I can find my way around the building

### Language Selection

**US-WELCOME-006**: Change kiosk language
- As a visitor
- I want to select my preferred language from the welcome screen
- So that I can use the kiosk in a language I understand

**US-WELCOME-007**: View available languages
- As a visitor
- I want to see a list of available languages
- So that I can choose one I'm comfortable with

---

## Check-In Flow

### QR Code Scanning

**US-CHECKIN-001**: Scan QR code to check in
- As a visitor
- I want to scan my booking QR code
- So that I can quickly check in without typing

**US-CHECKIN-002**: View camera preview for scanning
- As a visitor
- I want to see a live camera preview
- So that I can position my QR code correctly

**US-CHECKIN-003**: Handle invalid QR code
- As a visitor
- I want to be informed if my QR code is invalid or unrecognised
- So that I know to try an alternative check-in method

### Email Check-In

**US-CHECKIN-004**: Enter email to check in
- As a visitor
- I want to enter my email address to check in
- So that I can check in without a QR code

**US-CHECKIN-005**: Validate email format
- As a visitor
- I want to see an error if I enter an invalid email format
- So that I can correct my input

**US-CHECKIN-006**: Handle no booking found
- As a visitor
- I want to be informed if no booking is found for my email
- So that I know to register or contact reception

### Induction

**US-CHECKIN-007**: View induction information
- As a visitor
- I want to view building safety and compliance information
- So that I am aware of important policies

**US-CHECKIN-008**: Accept induction terms
- As a visitor
- I want to accept the induction terms via a checkbox
- So that I can confirm I have read the information

**US-CHECKIN-009**: Decline induction
- As a visitor
- I want to decline the induction if I choose not to accept
- So that I can exit the check-in process

### Visitor Details

**US-CHECKIN-010**: View pre-filled visitor details
- As a visitor
- I want to see my details pre-populated from my booking
- So that I can verify the information is correct

**US-CHECKIN-011**: Edit visitor details
- As a visitor
- I want to update my phone number or organisation
- So that my contact information is accurate

**US-CHECKIN-012**: View host information
- As a visitor
- I want to see who my host is
- So that I know who I am visiting

**US-CHECKIN-013**: Enter pass number
- As a visitor
- I want to enter a pass number if required
- So that it can be recorded with my visit

### Photo Capture

**US-CHECKIN-014**: View camera for photo capture
- As a visitor
- I want to see a live camera preview
- So that I can position myself for the photo

**US-CHECKIN-015**: Take visitor photo
- As a visitor
- I want to take a photo of myself
- So that I can be identified during my visit

**US-CHECKIN-016**: Retake photo
- As a visitor
- I want to retake the photo if I'm not satisfied
- So that I have a good photo on record

**US-CHECKIN-017**: Skip photo capture
- As a visitor
- I want to skip the photo step if it's optional
- So that I can complete check-in without a photo

### Beverage Preferences

**US-CHECKIN-018**: View beverage options
- As a visitor
- I want to see available beverage options
- So that I can select a refreshment preference

**US-CHECKIN-019**: Select beverage preference
- As a visitor
- I want to select my preferred beverage
- So that my host can arrange refreshments

**US-CHECKIN-020**: Skip beverage selection
- As a visitor
- I want to skip beverage selection
- So that I can complete check-in without ordering

### Check-In Confirmation

**US-CHECKIN-021**: View check-in confirmation
- As a visitor
- I want to see a confirmation that I have checked in
- So that I know the process is complete

**US-CHECKIN-022**: View meeting details on confirmation
- As a visitor
- I want to see my host name and meeting location
- So that I know where to go

**US-CHECKIN-023**: Print visitor label
- As a visitor
- I want to print a visitor label
- So that I have identification to wear during my visit

**US-CHECKIN-024**: Return to welcome screen
- As a visitor
- I want to tap a button to finish
- So that the kiosk is ready for the next visitor

---

## Self-Registration

### Registration Form

**US-REGISTER-001**: Enter visitor name
- As a walk-in visitor
- I want to enter my name
- So that my identity is recorded

**US-REGISTER-002**: Enter visitor email
- As a walk-in visitor
- I want to enter my email address
- So that I can be contacted if needed

**US-REGISTER-003**: Search for host
- As a walk-in visitor
- I want to search for my host by name
- So that I can associate my visit with the correct person

**US-REGISTER-004**: Select host from results
- As a walk-in visitor
- I want to select my host from search results
- So that my visit is properly recorded

**US-REGISTER-005**: Enter phone number
- As a walk-in visitor
- I want to optionally enter my phone number
- So that I can be reached if necessary

**US-REGISTER-006**: Enter organisation
- As a walk-in visitor
- I want to enter my company or organisation name
- So that it is recorded with my visit

**US-REGISTER-007**: Enter reason for visit
- As a walk-in visitor
- I want to enter the purpose of my visit
- So that my host knows why I am there

**US-REGISTER-008**: Submit registration
- As a walk-in visitor
- I want to submit my registration
- So that a booking is created and my host is notified

**US-REGISTER-009**: Cancel registration
- As a walk-in visitor
- I want to cancel and return to the welcome screen
- So that I can exit without creating a booking

---

## Checkout

**US-CHECKOUT-001**: Initiate checkout
- As a visitor
- I want to scan my QR code or enter my email to check out
- So that my departure is recorded

**US-CHECKOUT-002**: View checkout confirmation
- As a visitor
- I want to see a prompt confirming I want to check out
- So that I can confirm my departure

**US-CHECKOUT-003**: Confirm checkout
- As a visitor
- I want to confirm my checkout
- So that my visit is marked as complete

**US-CHECKOUT-004**: Cancel checkout
- As a visitor
- I want to cancel the checkout process
- So that I can return without checking out

---

## Kiosk Bootstrap & Configuration

**US-BOOTSTRAP-001**: Select building region
- As a facility administrator
- I want to select the region for this kiosk
- So that it operates in the correct geographic context

**US-BOOTSTRAP-002**: Select building
- As a facility administrator
- I want to select the building for this kiosk
- So that it shows the correct building information

**US-BOOTSTRAP-003**: Select floor level
- As a facility administrator
- I want to select the floor level for this kiosk
- So that maps and locations are accurate

**US-BOOTSTRAP-004**: Set map orientation
- As a facility administrator
- I want to set the map rotation/orientation
- So that the map matches the physical kiosk position

**US-BOOTSTRAP-005**: Save kiosk configuration
- As a facility administrator
- I want to save the kiosk settings
- So that they persist across restarts

**US-BOOTSTRAP-006**: Clear kiosk configuration
- As a facility administrator
- I want to clear the existing configuration
- So that I can reassign the kiosk to a different location

---

## Map Exploration

**US-EXPLORE-001**: View building floor map
- As a visitor
- I want to view a map of the building floor
- So that I can orient myself

**US-EXPLORE-002**: Pan and zoom map
- As a visitor
- I want to pan and zoom the floor map
- So that I can see different areas in detail

**US-EXPLORE-003**: Return to welcome from map
- As a visitor
- I want to close the map and return to the welcome screen
- So that I can proceed with check-in

---

## Error Handling

**US-ERROR-001**: View error message
- As a visitor
- I want to see a clear error message when something goes wrong
- So that I understand the issue

**US-ERROR-002**: View declined booking message
- As a visitor
- I want to be informed if my booking was declined
- So that I know to contact reception

**US-ERROR-003**: Return to welcome after error
- As a visitor
- I want to return to the welcome screen after an error
- So that I can try again or seek assistance

---

## Accessibility

**US-ACCESS-001**: Use on-screen keyboard
- As a visitor
- I want to use an on-screen keyboard for input
- So that I can type without a physical keyboard

**US-ACCESS-002**: Use large touch targets
- As a visitor
- I want buttons and controls to be large enough to tap easily
- So that I can interact with the kiosk without difficulty
