# Survey App User Stories

## Survey Access

### US-1: Access Survey by ID
**As a** user
**I want to** access a survey directly via URL with the survey ID
**So that** I can quickly navigate to and complete a specific survey

**Acceptance Criteria:**
- User can access survey at `/#/:id` or `/#/survey/:id`
- Survey title is displayed in the header
- Organization logo is displayed
- Survey questions are loaded and displayed

### US-2: Handle Invalid Survey ID
**As a** user
**I want to** see a clear error message when I access an invalid survey ID
**So that** I understand the survey does not exist or is unavailable

**Acceptance Criteria:**
- User is redirected to a "not found" page
- A clear "Survey not found" message is displayed
- An appropriate icon indicates the error state

---

## Survey Navigation

### US-3: Navigate Multi-Page Survey
**As a** user
**I want to** navigate between pages of a multi-page survey
**So that** I can complete all sections of the survey

**Acceptance Criteria:**
- "Next" button advances to the next page
- "Previous" button returns to the previous page
- Current page questions are displayed
- Navigation buttons are in a sticky footer for easy access

### US-4: View Survey Progress
**As a** user
**I want to** see my progress through the survey
**So that** I know how much of the survey remains

**Acceptance Criteria:**
- Current page is tracked
- Total number of pages is known
- User can see which page they are on

---

## Question Types

### US-5: Answer Rating Questions
**As a** user
**I want to** select a numeric rating for rating questions
**So that** I can provide quantitative feedback on a scale

**Acceptance Criteria:**
- Rating options are displayed as clickable buttons (e.g., 1-5 or 1-10)
- Selected rating is visually highlighted
- Only one rating can be selected

### US-6: Answer Text Questions
**As a** user
**I want to** enter short text responses
**So that** I can provide brief written feedback

**Acceptance Criteria:**
- Text input field is displayed
- Placeholder text provides guidance
- Input accepts standard text entry

### US-7: Answer Comment Questions
**As a** user
**I want to** enter longer text responses in a multi-line field
**So that** I can provide detailed written feedback

**Acceptance Criteria:**
- Multi-line textarea is displayed
- User can enter multiple lines of text
- Field is appropriately sized for longer responses

### US-8: Answer Dropdown Questions
**As a** user
**I want to** select one option from a dropdown menu
**So that** I can choose from predefined options

**Acceptance Criteria:**
- Dropdown menu displays all available options
- User can select one option
- Selected option is displayed when dropdown is closed

### US-9: Answer Radio Button Questions
**As a** user
**I want to** select one option from a list of radio buttons
**So that** I can make a single-choice selection with all options visible

**Acceptance Criteria:**
- All options are displayed with radio buttons
- Only one option can be selected at a time
- Selected option is visually indicated

### US-10: Answer Checkbox Questions
**As a** user
**I want to** select multiple options from a list of checkboxes
**So that** I can make multiple-choice selections

**Acceptance Criteria:**
- All options are displayed with checkboxes
- Multiple options can be selected simultaneously
- Selected options are visually indicated

---

## Form Validation

### US-11: Validate Required Fields
**As a** user
**I want to** be prevented from submitting without answering required questions
**So that** I provide all necessary feedback

**Acceptance Criteria:**
- Required questions are visually marked
- Submit is blocked if required fields are empty
- User receives feedback about which fields need completion

### US-12: Allow Optional Fields
**As a** user
**I want to** skip optional questions
**So that** I can submit the survey without answering every question

**Acceptance Criteria:**
- Optional questions can be left blank
- Survey can be submitted with unanswered optional questions
- Optional fields are distinguishable from required fields

---

## Survey Submission

### US-13: Submit Completed Survey
**As a** user
**I want to** submit my completed survey
**So that** my feedback is recorded

**Acceptance Criteria:**
- Submit button is displayed on the final page
- All answers are sent to the backend
- Submission is processed successfully

### US-14: View Submission Confirmation
**As a** user
**I want to** see a confirmation message after submitting
**So that** I know my survey was successfully recorded

**Acceptance Criteria:**
- Success message is displayed after submission
- User is informed their feedback has been received

---

## Loading States

### US-15: View Loading State
**As a** user
**I want to** see a loading indicator while the survey loads
**So that** I know the application is working

**Acceptance Criteria:**
- Loading spinner is displayed during data fetch
- Progress message indicates loading status
- Loading state transitions to content when ready

---

## Accessibility and Customization

### US-16: Toggle Dark Mode
**As a** user
**I want to** toggle dark mode using a keyboard shortcut
**So that** I can use the survey in low-light conditions

**Acceptance Criteria:**
- Ctrl+Alt+Shift+D toggles dark mode
- UI colors adjust for dark theme
- Logo switches to dark mode variant

### US-17: View Survey in Preferred Language
**As a** user
**I want to** view the survey in my preferred language
**So that** I can understand and complete the survey in my native language

**Acceptance Criteria:**
- Language can be set via `lang` query parameter
- UI text is translated to selected language
- Survey content displays in appropriate language

### US-18: Use Survey on Mobile Devices
**As a** user
**I want to** complete the survey on my mobile device
**So that** I can provide feedback from any device

**Acceptance Criteria:**
- Layout is responsive and mobile-friendly
- Touch interactions work correctly
- Form fields are appropriately sized for mobile
- Navigation buttons are easily accessible

---

## Branding

### US-19: View Organization Branding
**As a** user
**I want to** see my organization's branding on the survey
**So that** I recognize the survey as official

**Acceptance Criteria:**
- Organization logo is displayed in the header
- Survey title is prominently shown
- Theme colors reflect organization branding
