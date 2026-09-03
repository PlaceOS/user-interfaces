# Signage Manager User Stories

## Overview

The Signage Manager app lets authorised users manage signage media, playlists, templates, display and zone playlist assignments, daily schedule visibility, and signage access groups. Navigation is permission-aware: media, playlists, templates, zones, schedules, and displays are available to users with signage access, while group management is shown only to users who can manage signage groups.

---

## Workflow Coverage

These stories cover the current app workflows:

- Access and navigation: authorised app load, unknown-route redirect, desktop navigation, mobile navigation, and active signage group selector.
- Media library: search, filtered counts, grid/list/folder views backed by media tags, group tabs, file upload entry point, add from link, plugin catalogue selection, preview, edit, item share, item delete action, multi-select, bulk delete confirmation, bulk share, and bulk add to playlist.
- Playlists: search, create, select, edit details, item preview, item schedules, approval request or approval, share group selection, delete confirmation, and display or zone assignment.
- Templates: search, create, select, edit layouts, preview, approval request or approval, and delete confirmation.
- Zones: search, direct selection, create, edit, delete, playlist tab, display tab, add playlist, and add display.
- Displays: search, direct selection, player link when available, schedule tab, playlist tab, zone tab, and add playlist.
- Schedules: display and zone timeline tabs, previous day, next day, today, search, clear search, empty states, and row links.
- Signage groups: searchable group tree, create, edit, delete entry point, user assignment, user permission editing, zone assignment, zone permission editing, and deny-state editing.
- Responsive workflows: compact media add menu and mobile footer navigation.

---

## Access & Navigation

### US-SGM-001: Access Signage Manager

**As a** signage administrator  
**I want to** open the manager only when I am authorised for signage  
**So that** signage content and assignments are protected

**Acceptance Criteria:**

- The app requires an authorised PlaceOS user.
- Users without signage access are sent to the unauthorised page.
- The app waits for signage group loading before deciding access.
- The default route opens the media library.
- The group management route is hidden unless the user can manage signage groups.

---

### US-SGM-002: Switch Signage Groups

**As a** user with access to multiple signage groups  
**I want to** switch the active signage group  
**So that** I can manage content in the correct scope

**Acceptance Criteria:**

- The active signage group selector is available from the navigation.
- System administrators and support users can view all groups.
- Non-system administrators can switch between their assigned signage groups.
- Switching groups refreshes scoped media, playlists, zones, displays, and permissions.
- Media selection and open tag folders are cleared when the active group changes.

---

## Media Library

### US-SGM-003: Browse Media

**As a** content manager  
**I want to** browse signage media in multiple layouts  
**So that** I can find and inspect assets efficiently

**Acceptance Criteria:**

- The media page shows total media count and filtered count when searching.
- Users can search media.
- Users can switch between grid, list, and folder views.
- Folder view groups media by tag and includes an Untagged folder.
- Users with update permission can rename tags or remove them from all media in the active group.
- Users with delete permission can also remove the media that uses a deleted tag.
- System administrators and support users can manage tags across all groups from the All Groups view.
- Media cards show type, thumbnail or fallback icon, duration, tags, and expired state where available.
- The list loads additional media as the user scrolls.

---

### US-SGM-004: Add Media

**As a** content manager  
**I want to** add files, web links, and plugin media  
**So that** playlists can include all supported signage content types

**Acceptance Criteria:**

- Users with create permission can upload one or more supported media files.
- Users can drag files onto the media page to start upload preview.
- Users can add webpage media from a valid URL.
- Invalid URLs are rejected before creating media.
- Users can create plugin media from the available signage plugins.
- Plugin media creation lists enabled signage plugins and requires a plugin selection before add is enabled.
- Mobile users can access add actions from a compact actions menu.

---

### US-SGM-005: Manage Media Items

**As a** content manager  
**I want to** preview, edit, share, delete, and assign media  
**So that** the media library stays accurate and reusable

**Acceptance Criteria:**

- Users can preview a media item from the list or grid.
- Users with update permission can edit media details.
- Users with update permission can add media to a playlist.
- Users with share permission can share media.
- Users with delete permission can remove media.
- Share and delete actions open confirmation or group-selection dialogs before making changes.
- Users can select multiple media items and bulk add tags, delete, share, or add them to a playlist when permitted.

---

## Playlists

### US-SGM-006: Browse and Create Playlists

**As a** content manager  
**I want to** browse and create playlists  
**So that** media can be arranged into signage rotations

**Acceptance Criteria:**

- The playlists page shows a searchable playlist list.
- Playlist rows show thumbnail previews when available.
- Playlist rows show disabled, expired, pending, awaiting review, and approval-required states.
- Additional playlists load as the user scrolls.
- Users with create permission can create a new playlist.
- Selecting a playlist opens its items and details.

---

### US-SGM-007: Manage Playlist Items

**As a** content manager  
**I want to** arrange and schedule playlist items  
**So that** playback order and item timing match the intended display plan

**Acceptance Criteria:**

- Users can view media items in the selected playlist.
- Users can preview a playlist item.
- Users with update permission can reorder playlist items by drag and drop.
- Distribution playlists cannot be reordered from the item list.
- Users with update permission can remove media from the playlist.
- Users can expand, collapse, and edit item schedules.
- Keyboard selection is supported for playlist items.

---

### US-SGM-008: Manage Playlist Details

**As a** content manager  
**I want to** edit playlist metadata, schedules, and assignments  
**So that** each playlist is configured and published to the right destinations

**Acceptance Criteria:**

- Users can view playlist item count, enabled state, description, validity dates, animation, schedules, and next play sessions.
- Users with update permission can edit playlist details.
- Users with update permission can add or remove display assignments.
- Users with update permission can add or remove zone assignments.
- Users with share permission can share playlists.
- Users with delete permission can remove playlists.
- Share and delete actions open group-selection or confirmation dialogs before making changes.

---

### US-SGM-009: Handle Playlist Approval

**As a** reviewer or content manager  
**I want to** request and complete playlist approval  
**So that** controlled playlists are reviewed before playback

**Acceptance Criteria:**

- Playlists that require approval show approval actions.
- Users with approval permission can approve a selected playlist.
- Users without approval permission can request approval for a selected playlist.
- Approval request actions show a loading state while submitting.
- Approval preview shows changed media versions and allows media preview.

---

## Templates

### US-SGM-017: Manage and Approve Templates

**As a** reviewer or content manager\
**I want to** build and approve signage templates\
**So that** controlled display layouts are reviewed before playback

**Acceptance Criteria:**

- The templates page shows a searchable template list and loads more templates as the user scrolls.
- Users with create or update permission can create templates and edit their layout items.
- Template rows show approval-required and awaiting-review states.
- Users with approval permission can review and approve a selected template.
- Users without approval permission can select an approver and request template approval with a message.
- The approval preview shows only changed layout items from the pending and approved templates, including the applicable X and Y values. It shows a no-older-version placeholder when no distinct approved version exists.
- Users with update permission can discard pending changes when an approved version exists.

---

## Zones & Displays

### US-SGM-010: Manage Zone Assignments

**As a** signage administrator  
**I want to** manage playlists and displays for a signage zone  
**So that** zone-level content reaches the right screens

**Acceptance Criteria:**

- The zones page lists signage zones and supports direct routes to a selected zone.
- System administrators and signage group managers can create, edit, and delete signage zones.
- New and edited signage zones keep the `signage` tag and require a parent from the active group's accessible zone tree.
- Zone management controls are not shown for untagged parent zones in the tree.
- Selecting a zone shows playlist and display tabs.
- The playlist tab shows playlists assigned to the zone and their status.
- Users with update permission can add or remove playlists from the zone.
- The display tab shows displays assigned to the zone.
- Users with update permission can add displays to the zone.

---

### US-SGM-011: Manage Display Assignments

**As a** signage administrator  
**I want to** manage playlists and zones for a display  
**So that** an individual screen plays the correct direct and inherited content

**Acceptance Criteria:**

- The displays page lists signage displays and supports direct routes to a selected display.
- Selecting a display shows schedule, playlist, and zone tabs.
- The display header includes a debug player link for the selected display.
- The playlist tab shows playlists assigned directly to the display and their status.
- Users with update permission can add or remove direct playlist assignments.
- The zone tab shows zones assigned to the display.

---

## Schedules

### US-SGM-012: Review Daily Display and Zone Schedules

**As a** signage administrator  
**I want to** review schedules by display or zone for a selected day  
**So that** I can confirm what content should play where

**Acceptance Criteria:**

- The schedules page has display and zone timeline views.
- Users can move to the previous day, next day, or today.
- The current time indicator appears when the selected date is today.
- Users can search schedules by display, zone, playlist, and source labels where applicable.
- Timeline rows link to the related display or zone detail page.
- Empty and filtered states explain when no rows are available.

---

## Signage Groups

### US-SGM-013: Manage Signage Groups

**As a** signage group administrator  
**I want to** create and maintain signage groups  
**So that** access can be delegated by group and zone

**Acceptance Criteria:**

- The groups page is available only when the user can manage signage groups.
- Manageable groups appear in a searchable tree.
- Expanding a group loads and shows child groups.
- Selecting a group opens its users and zones panels.
- Users with manage-all-groups permission can create a new group.
- Selected groups can be edited or removed.

---

### US-SGM-014: Manage Group Users and Permissions

**As a** signage group administrator  
**I want to** assign users and permissions to a signage group  
**So that** users receive the right signage capabilities

**Acceptance Criteria:**

- The users panel lists assigned users with name, email, and permission labels.
- Users can add a user not already assigned to the group.
- Users can edit an assigned user's signage permissions.
- Users can remove an assigned user from the group.
- Empty state appears when no users are assigned.

---

### US-SGM-015: Manage Group Zones and Permissions

**As a** signage group administrator  
**I want to** assign zones and permissions to a signage group  
**So that** group access applies to the right signage locations

**Acceptance Criteria:**

- The zones panel lists assigned zones with permission labels.
- Users can add a zone not already assigned to the group.
- Users can edit zone permissions and deny state.
- Users can remove an assigned zone from the group.
- Empty state appears when no zones are assigned.

---

## Responsive Layouts

### US-SGM-016: Use Signage Manager on Mobile

**As a** signage administrator  
**I want to** use core manager navigation and media actions on a narrow screen  
**So that** urgent signage updates can be handled away from a desktop

**Acceptance Criteria:**

- Mobile layout exposes the primary app navigation from the footer.
- Overflow navigation shows less common sections, including schedules, when space is limited.
- Media creation actions remain available from a compact media actions menu.
- Compact media actions include upload, add from link, and add plugin options.
