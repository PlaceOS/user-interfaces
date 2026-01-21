# Stagehand User Stories

## Overview

Stagehand is an AV systems monitoring and management application for facility managers and AV technicians to monitor device health, manage alert dashboards, view analytics, and provide remote support to rooms with AV equipment.

---

## Alert Monitoring

### US-SM-001: View All System Alerts

**As an** AV technician
**I want to** view all active alerts across my organization
**So that** I can identify and prioritize issues requiring attention

**Acceptance Criteria:**

- Display a list of all active alerts
- Show summary cards for critical alerts, warnings, and open alerts count
- Display alert details including severity, issue description, device, location, and status
- Provide a link to manage the affected room in PlaceOS Backoffice

---

### US-SM-002: Filter Alerts by Severity

**As an** AV technician
**I want to** filter alerts by severity level (Critical, High, Medium)
**So that** I can focus on the most urgent issues first

**Acceptance Criteria:**

- Provide severity filter options (Critical, High/Warning, Medium/Info)
- Update the alerts list in real-time when filter is applied
- Persist filter selection in the URL query parameters

---

### US-SM-003: Filter Alerts by Device Type

**As an** AV technician
**I want to** filter alerts by device type (Display, Audio, Video, Network, Control System)
**So that** I can troubleshoot specific categories of equipment

**Acceptance Criteria:**

- Provide device type filter options
- Update the alerts list when filter is applied
- Allow combining with other filters (severity, search, location)

---

### US-SM-004: Search Alerts

**As an** AV technician
**I want to** search alerts by name or location
**So that** I can quickly find alerts for specific rooms or issues

**Acceptance Criteria:**

- Provide a search input field
- Filter alerts in real-time as the user types
- Search should match against alert name and location

---

### US-SM-005: Filter Alerts by Region and Building

**As a** facility manager
**I want to** filter alerts by region and building
**So that** I can focus on issues within my area of responsibility

**Acceptance Criteria:**

- Provide region and building dropdown selectors in the sidebar
- Building selector appears only when a region is selected
- Filters apply to all alert displays across the application

---

### US-SM-006: View Alerts from Specific Dashboard

**As an** AV technician
**I want to** view alerts from a specific dashboard
**So that** I can monitor alerts relevant to my responsibilities

**Acceptance Criteria:**

- Provide a dashboard selector dropdown on the alerts page
- Display only alerts from the selected dashboard
- Provide a link to manage the selected dashboard settings

---

## Dashboard Management

### US-SM-007: View All Dashboards

**As a** facility manager
**I want to** view a list of all alert dashboards
**So that** I can manage and organize my monitoring configuration

**Acceptance Criteria:**

- Display a table of all dashboards with name, description, and enabled status
- Show nested alerts within each dashboard (expandable rows)
- Provide actions to add, edit, and delete dashboards

---

### US-SM-008: Create New Dashboard

**As a** facility manager
**I want to** create a new alert dashboard
**So that** I can organize alerts for specific purposes or locations

**Acceptance Criteria:**

- Provide a form with dashboard name (required), description, and enabled toggle
- Save the dashboard to the system
- Navigate to the dashboard list after successful creation

---

### US-SM-009: Edit Dashboard

**As a** facility manager
**I want to** edit an existing dashboard
**So that** I can update its name, description, or enabled status

**Acceptance Criteria:**

- Load existing dashboard data into the edit form
- Allow updating name, description, and enabled status
- Save changes and return to dashboard list

---

### US-SM-010: Delete Dashboard

**As a** facility manager
**I want to** delete a dashboard
**So that** I can remove obsolete monitoring configurations

**Acceptance Criteria:**

- Provide a delete action for each dashboard
- Confirm deletion before removing
- Remove the dashboard and all associated alerts

---

### US-SM-011: Enable/Disable Dashboard

**As a** facility manager
**I want to** enable or disable a dashboard
**So that** I can temporarily pause alert monitoring without deleting the configuration

**Acceptance Criteria:**

- Provide an enabled toggle in the dashboard form
- Disabled dashboards do not generate alerts
- Status is visible in the dashboard list

---

## Alert Configuration

### US-SM-012: Create Alert Condition

**As a** facility manager
**I want to** create alert conditions for a dashboard
**So that** I can define when alerts should be triggered

**Acceptance Criteria:**

- Provide a form with alert name, description, severity, and alert type
- Allow searching and selecting target systems
- Support adding multiple trigger conditions
- Save the alert configuration

---

### US-SM-013: Configure Alert Severity

**As a** facility manager
**I want to** set the severity level for an alert (Critical, High, Medium)
**So that** alerts are prioritized appropriately

**Acceptance Criteria:**

- Provide severity level selection (Critical, High, Medium)
- Severity affects alert display and notification behavior
- Critical alerts are highlighted prominently

---

### US-SM-014: Configure Alert Match Logic

**As a** facility manager
**I want to** choose whether all conditions or any condition must match
**So that** I can create flexible alert rules

**Acceptance Criteria:**

- Provide a "Match Any" toggle option
- When enabled, alert triggers if ANY condition matches
- When disabled, alert triggers only if ALL conditions match

---

### US-SM-015: Add Comparison Condition

**As a** facility manager
**I want to** add comparison-based trigger conditions
**So that** I can monitor when values exceed thresholds

**Acceptance Criteria:**

- Support left operand, operator, and right operand configuration
- Display conditions in a comparison table
- Allow editing and removing conditions

---

### US-SM-016: Add Time-Based Condition

**As a** facility manager
**I want to** add time-based trigger conditions
**So that** I can schedule alerts for specific times

**Acceptance Criteria:**

- Support specific time (AT) conditions
- Support CRON expression conditions
- Combine with other conditions using AND/OR logic

---

### US-SM-017: Edit Alert Condition

**As a** facility manager
**I want to** edit an existing alert condition
**So that** I can adjust monitoring rules as requirements change

**Acceptance Criteria:**

- Load existing alert data into the edit form
- Allow modifying all alert properties and conditions
- Save changes to the system

---

### US-SM-018: Delete Alert Condition

**As a** facility manager
**I want to** delete an alert condition
**So that** I can remove obsolete monitoring rules

**Acceptance Criteria:**

- Provide a delete action for each alert
- Confirm deletion before removing
- Remove the alert from the dashboard

---

## Remote Support

### US-SM-019: View Room Status Overview

**As an** AV support technician
**I want to** view an overview of all rooms and their status
**So that** I can monitor the health of equipment across the facility

**Acceptance Criteria:**

- Display total room count and active alerts count
- Show a list of rooms with real-time status
- Display occupancy status (Available/In Use/Pending) for each room
- Show active alerts count with severity indicators per room

---

### US-SM-020: View Next Scheduled Event

**As an** AV support technician
**I want to** see the next scheduled event for each room
**So that** I can prepare for upcoming usage and prioritize support

**Acceptance Criteria:**

- Display the next scheduled event/class name
- Show the event start time
- Update automatically as events change

---

### US-SM-021: View Camera Snapshots

**As an** AV support technician
**I want to** view camera snapshots from rooms
**So that** I can visually verify room status and equipment

**Acceptance Criteria:**

- Display camera feed thumbnails in the room list
- Click thumbnail to open full-screen snapshot modal
- Show timestamp of the snapshot
- Auto-refresh snapshots at configurable interval

---

### US-SM-022: Filter Rooms by State

**As an** AV support technician
**I want to** filter rooms by state (All/In Use/Available/Has Issues)
**So that** I can focus on rooms requiring attention

**Acceptance Criteria:**

- Provide state filter options
- Update room list when filter is applied
- "Has Issues" shows rooms with active alerts

---

### US-SM-023: Search Rooms

**As an** AV support technician
**I want to** search for rooms by name
**So that** I can quickly find a specific room

**Acceptance Criteria:**

- Provide a search input field
- Filter rooms in real-time as user types
- Match against room name and display name

---

### US-SM-024: Access Room Control System

**As an** AV support technician
**I want to** access the control system for a room
**So that** I can troubleshoot and manage equipment remotely

**Acceptance Criteria:**

- Provide a link to the room's control/service interface
- Open in a new tab/window
- Link configured via settings

---

### US-SM-025: Access Room Management

**As an** AV support technician
**I want to** access PlaceOS Backoffice for a room
**So that** I can configure room settings and diagnose issues

**Acceptance Criteria:**

- Provide a link to manage the room in Backoffice
- Open in a new tab/window
- Link includes the room/system ID

---

## Push Notifications

### US-SM-026: Receive Push Notifications for Alerts

**As an** AV technician
**I want to** receive browser push notifications when alerts occur
**So that** I am immediately aware of issues even when not viewing the app

**Acceptance Criteria:**

- Request browser notification permission
- Send push notification when alert triggers
- Include alert severity, location, and device in notification
- Critical alerts require user interaction (stay on screen)

---

### US-SM-027: Configure Notification Preferences

**As an** AV technician
**I want to** configure which alert severities trigger notifications
**So that** I only receive notifications for issues I care about

**Acceptance Criteria:**

- Provide per-severity toggles (Critical, High, Medium, Low)
- Persist preferences in local storage
- Show notification permission status
- Provide button to request permission if not granted

---

### US-SM-028: Prevent Duplicate Notifications

**As an** AV technician
**I want to** not receive duplicate notifications for the same alert
**So that** I am not overwhelmed with repeated notifications

**Acceptance Criteria:**

- Track which alerts have triggered notifications
- Only notify once per alert instance
- Reset tracking when alert is resolved

---

## Analytics

### US-SM-029: View Analytics Dashboards

**As a** facility manager
**I want to** view analytics dashboards
**So that** I can analyze system performance and trends

**Acceptance Criteria:**

- Display embedded analytics dashboards
- Provide page selector to switch between analytics views
- Analytics pages configured via zone metadata

---

### US-SM-030: Switch Between Analytics Pages

**As a** facility manager
**I want to** switch between different analytics pages
**So that** I can view different reports and metrics

**Acceptance Criteria:**

- Provide dropdown to select analytics page
- Load selected analytics in iframe
- Remember last selected page

---

## Recorder Streams

### US-SM-031: View Recorder Streams Grid

**As an** AV technician
**I want to** view a grid of live recorder streams
**So that** I can monitor multiple video feeds simultaneously

**Acceptance Criteria:**

- Display recorder streams in a responsive grid (1-3 columns)
- Show live image/feed for each stream
- Display recorder/stream name
- Auto-refresh snapshots at configurable interval

---

### US-SM-032: Toggle Recorder Streams View

**As an** administrator
**I want to** enable or disable the recorder streams view
**So that** I can show or hide this feature based on facility needs

**Acceptance Criteria:**

- Configure visibility via `show_recorder_view` setting
- Navigation item hidden when disabled
- Recorder streams configured via zone metadata

---

## Navigation and UI

### US-SM-033: Navigate Using Sidebar

**As a** user
**I want to** navigate between app sections using the sidebar
**So that** I can access different features quickly

**Acceptance Criteria:**

- Display navigation menu with links to Alerts, Remote Support, Analytics, Dashboards
- Conditionally show Recorder Streams based on settings
- Highlight current section

---

### US-SM-034: Collapse/Expand Sidebar

**As a** user
**I want to** collapse or expand the sidebar
**So that** I can maximize screen space when needed

**Acceptance Criteria:**

- Provide toggle to collapse/expand sidebar
- Compact mode shows icons only with tooltips
- Expanded mode shows icons and labels
- Remember preference

---

### US-SM-035: Access PlaceOS Backoffice

**As an** administrator
**I want to** quickly access PlaceOS Backoffice
**So that** I can manage system configuration

**Acceptance Criteria:**

- Provide Backoffice launch button in sidebar
- Open in new tab/window
- Link configured via settings

---

### US-SM-036: Filter by URL Parameters

**As a** user
**I want to** share filtered views via URL
**So that** I can bookmark or share specific alert views with colleagues

**Acceptance Criteria:**

- Persist filter selections in URL query parameters
- Support region, building, search, severity, device_type, and state parameters
- Load filters from URL on page load
