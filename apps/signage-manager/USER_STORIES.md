# Signage Manager User Stories

## Overview

The Signage Manager app lets authorised users manage signage media, playlists, templates, display and zone playlist assignments, daily schedule visibility, and signage access groups. Navigation is permission-aware: media, playlists, templates, zones, schedules, displays, and manage are available to users with signage access, while group management is shown only to users who can manage signage groups. The manage section shows the content report and branding as tabs. The branding tab shows only when image generation is enabled.

---

## Workflow Coverage

These stories cover the current app workflows:

- Access and navigation: authorised app load, unknown-route redirect, desktop navigation, mobile navigation, and active signage group selector.
- Media library: backend search, result counts, grid/list/folder views backed by media tags, group tabs, file upload entry point, add from link, plugin catalogue selection, preview, edit, item share, item delete action, multi-select, bulk delete confirmation, bulk share, and bulk add to playlist.
- Playlists: search, create, select, edit details, item preview, item schedules, approval request or approval, share group selection, delete confirmation, and display or zone assignment.
- Templates: search, create, select, edit layouts, preview, approval request or approval, and delete confirmation.
- Zones: search, direct selection, create, edit, delete, playlist tab, display tab, add playlist, and add display.
- Displays: search, direct selection, player link when available, schedule tab, playlist tab, zone tab, and add playlist.
- Schedules: display and zone timeline tabs, previous day, next day, today, search, clear search, empty states, row links, and takeover conflict warnings.
- Content report: takeover conflicts, displays with no playlists, unassigned playlists, expired playlists that are still assigned, and expired media in playlists.
- Signage groups: searchable group tree, create, edit, delete entry point, user assignment, user permission editing, zone assignment, zone permission editing, deny-state editing, group feature flags, default permissions, and AD group sync.
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
- Users can press Cmd+K (macOS) or Ctrl+K to open a command palette, including from a text field. The search button in the nav sidebar also opens it.
- The palette lists the pages the user can open. Typing filters the pages and searches displays, playlists, templates, zones, and media, up to 5 of each.
- Users can use the arrow keys and Enter to open a result. Media opens in the preview.

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

- The media page shows the media count for the current group and search. While a sort or filter is active, it shows the filtered count.
- Users can search all media in the group, including media that has not loaded yet.
- Users can switch between grid, list, and folder views.
- Folder view groups media by tag and includes an Untagged folder.
- Users with update permission can rename tags or remove them from all media in the active group.
- Users with delete permission can also remove the media that uses a deleted tag.
- System administrators and support users can manage tags across all groups from the All Groups view.
- Media cards show type, thumbnail or fallback icon, duration, tags, and expired state where available.
- The list loads additional media as the user scrolls.
- Users can sort media by newest, oldest, name, or soonest expiry.
- Users can filter media by type (image, video, webpage, plugin) and by expiry (expires within 7 days, expired).
- While a sort or filter is active, the page loads all media in the group, because the API cannot sort or filter it.

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
- The delete confirmation lists the playlists that use the media. Deleting the media removes it from those playlists, including distribution playlists.
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
- Playlist rows show disabled, expired, pending, awaiting review, and approval-required states. A playlist is expired when its end date has passed or all its schedules have ended. Playlist lists on the media, zone, and display pages show the same states.
- Additional playlists load as the user scrolls.
- Users with create permission can create a new playlist.
- Users with create permission can duplicate a playlist. The copy has the same settings, items, and item schedules. It is not approved and is not assigned to displays or zones.
- Selecting a playlist opens its items and details.
- A link to a playlist opens it, also when the loaded list does not include it. When the playlist cannot load, a warning shows and no playlist is selected.

---

### US-SGM-007: Manage Playlist Items

**As a** content manager  
**I want to** arrange and schedule playlist items  
**So that** playback order and item timing match the intended display plan

**Acceptance Criteria:**

- Users can view media items in the selected playlist. When the items cannot load, the list shows an error with a retry action.
- Non-distribution playlists show the item count and the time to play each item once. The time uses the same fallbacks as the player: item play time, video length, playlist default, then 15 seconds.
- Users can preview a playlist item.
- Users with update permission can reorder playlist items by drag and drop, or with the move up and move down actions in the item menu.
- Distribution playlists cannot be reordered from the item list.
- Users with update permission can remove media from the playlist.
- Adding media to a distribution playlist always asks for the item schedule first. When adding media fails, an error shows.
- Users can expand, collapse, and edit item schedules.
- Keyboard selection is supported for playlist items. Enter and Space on the checkbox or the actions button of a row operate that control.

---

### US-SGM-008: Manage Playlist Details

**As a** content manager  
**I want to** edit playlist metadata, schedules, and assignments  
**So that** each playlist is configured and published to the right destinations

**Acceptance Criteria:**

- Users can view playlist item count, enabled state, description, validity dates, animation, schedules, and next play sessions.
- Users with update permission can edit playlist details. Clearing a validity date removes it.
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
- Approval applies only to the version that the reviewer saw. When the playlist changed after the preview loaded, the preview shows the new version with a warning, and the playlist is not approved.
- A playlist that is awaiting review keeps that state when the user selects it.

---

## Templates

### US-SGM-017: Manage and Approve Templates

**As a** reviewer or content manager\
**I want to** build and approve signage templates\
**So that** controlled display layouts are reviewed before playback

**Acceptance Criteria:**

- The templates page shows a searchable template list and loads more templates as the user scrolls.
- Users with create or update permission can create templates and edit their layout items.
- Users with create permission can duplicate a template. The copy has the same settings and saved layouts. It is not approved and has no template mappings.
- Template rows show approval-required and awaiting-review states.
- Users with approval permission can review and approve a selected template.
- Users without approval permission can select an approver and request template approval with a message.
- The approval preview shows only changed layout items from the pending and approved templates, including the applicable X and Y values. It shows a no-older-version placeholder when no distinct approved version exists.
- Users with update permission can discard pending changes when an approved version exists.
- Users must confirm before they leave a template that has unsaved layout changes. Confirming discards the changes. The browser warns before a reload or tab close drops them.

---

## Zones & Displays

### US-SGM-010: Manage Zone Assignments

**As a** signage administrator  
**I want to** manage playlists and displays for a signage zone  
**So that** zone-level content reaches the right screens

**Acceptance Criteria:**

- The zones page lists signage zones and supports direct routes to a selected zone.
- The header count shows the number of signage zones. When users search in a zone, it shows the number of results. If the count cannot load, the header does not show it.
- System administrators and signage group managers can create, edit, and delete signage zones.
- New and edited signage zones keep the `signage` tag and require a parent from the active group's accessible zone tree.
- Zone management controls are not shown for untagged parent zones in the tree.
- Selecting a zone shows playlist and display tabs.
- The playlist tab shows playlists assigned to the zone and their status.
- Users with update permission can add or remove playlists from the zone.
- The display tab shows displays assigned to the zone.
- Users with update permission can add displays to the zone.
- When the display or zone search in an add dialog fails, the dialog shows an error with a retry, not an empty result.
- While the zone tree or a tab loads, it shows a loading state. If a zone list, the playlist tab, or the display tab cannot load, it shows an error with a retry button. The error shows above the zones that loaded.

---

### US-SGM-011: Manage Display Assignments

**As a** signage administrator  
**I want to** manage playlists and zones for a display  
**So that** an individual screen plays the correct direct and inherited content

**Acceptance Criteria:**

- The displays page lists signage displays and supports direct routes to a selected display.
- Each display in the list shows an online or offline status. A display is offline when its player has not checked in for more than 5 minutes. The tooltip shows when the player last checked in.
- Selecting a display shows schedule, playlist, and zone tabs.
- The display header includes a debug player link for the selected display.
- The playlist tab shows playlists assigned directly to the display and their status.
- Users with update permission can add or remove direct playlist assignments.
- The zone tab shows zones assigned to the display.
- While the display list or a tab loads, it shows a loading state. If the list, the playlist tab, or the zone tab cannot load, it shows an error with a retry button.
- If a link opens a display or zone that cannot load, an error message shows.

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
- Display rows show the same online, offline, or never seen status as the displays page.
- Timeline blocks show only the times that the player plays. Blocks stop at the playlist and schedule dates, and clock times that daylight saving skips do not show. Blocks of disabled playlists say "Disabled" in text.
- Empty and filtered states explain when no rows are available.
- Users must confirm a change that makes two takeover playlists play at the same time on a display in the next 14 days. The check runs when users save playlist schedules and when they assign a playlist to a display or zone. The warning names the display, the other playlist, and the start time of the overlap. Disabled playlists and overlaps that ended earlier today do not count. A single pass (play period 0) plays alone before timed takeovers, so it conflicts only with another single pass.

---

### US-SGM-018: Review Content That Needs Attention

**As a** signage administrator  
**I want to** see content problems in one place  
**So that** I can fix them before they show on screens

**Acceptance Criteria:**

- The report is the first tab of the Manage section. The old `/report` and `/branding` addresses open the matching Manage tab.
- The report checks all displays, zones, playlists, and media in the selected group, not only the pages loaded in other views.
- The report lists takeover conflicts in the next 14 days, displays with no playlist from the display or its zones, playlists not assigned to a display or zone, expired playlists that are still assigned, and expired media that is still in a playlist.
- Display and playlist rows open the related detail page. Media rows open the media preview.
- Each section shows a count, and shows a message when there is nothing to fix.
- Users can refresh the report.

---

## Signage Groups

### US-SGM-013: Manage Signage Groups

**As a** signage group administrator  
**I want to** create and maintain signage groups  
**So that** access can be delegated by group and zone

**Acceptance Criteria:**

- The groups page is available only when the user can manage signage groups. Other users who open its address go to the media library.
- Manageable groups appear in a searchable tree.
- Expanding a group shows its child groups.
- Selecting a group opens its users and zones panels. On mobile, the back button returns to the group list.
- After a save, the selected group and the expanded groups stay as they were, also when the group list cannot load again. When the group list cannot load at all, the page shows an error.
- Users with manage-all-groups permission can create a new group.
- Selected groups can be edited or removed.

---

### US-SGM-014: Manage Group Users and Permissions

**As a** signage group administrator  
**I want to** assign users and permissions to a signage group  
**So that** users receive the right signage capabilities

**Acceptance Criteria:**

- The users panel lists assigned users with name, email, and permission labels.
- Users can add a user not already assigned to the group. The user gets the default permissions of the group. The user search shows a loading state, and an error when the search fails.
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

### US-SGM-019: Limit Group Features

**As a** system administrator or manager of a parent group  
**I want to** limit the signage features of a group  
**So that** users of that group see only the tools they are allowed to use

**Acceptance Criteria:**

- The `app.features` setting sets the features for every group: `templates`, `template-editing`, `ai-generation`, `ai-editing` and `branding-editing`.
- The group header shows a features button to system administrators and to managers of a parent group. Members and managers of only the group itself do not see it.
- The editor shows only the features that `app.features` turns on, and the plugins by name. A group can turn a feature off, but it cannot add a feature that the settings do not have.
- The group gets each list from its parent groups until it sets its own. A child group can turn a feature on again if the settings allow it. "Use parent value" removes the group's own list.
- Saving removes plugin IDs that no longer match a plugin.
- When a group is selected, the features that both the settings and the group allow apply:
  - Without `templates`, the templates section is hidden.
  - Without `template-editing`, template create, edit, duplicate, delete and layout changes are hidden. Template mappings stay available.
  - Without `ai-generation`, the AI create actions are hidden.
  - Without `ai-editing`, "Edit with AI" and refinement in the AI editor are hidden.
  - Without `branding-editing`, the branding tab is read-only.
- The All Groups view uses only `app.features`.

---

### US-SGM-020: Set Group Access Defaults and AD Group Sync

**As a** system administrator or manager of a signage group  
**I want to** set the default permissions of a group and map AD groups to it  
**So that** new members and members of an AD group get the correct permissions automatically

**Acceptance Criteria:**

- The group header shows a group access button. Only system administrators and managers of the group can save changes.
- The editor shows the default permissions of the group. A user that is added to the group without explicit permissions gets these permissions.
- The editor lists the mapped AD groups with the name, ID, and permissions of each mapping. Users can change the permissions of a mapping or remove it.
- When the domain has a staff API tenant that can list directory groups, users search `/api/staff/v1/groups` and select a group to map it.
- When the directory search is not available, users type the AD group ID and an optional name.
- A new mapping starts with the default permissions of the group.
- Saving writes `default_permissions` and `ad_group_mappings` on the group. The backend adds and removes the members of mapped AD groups when it syncs AD groups.

---

## Responsive Layouts

### US-SGM-016: Use Signage Manager on Mobile

**As a** signage administrator  
**I want to** use core manager navigation and media actions on a narrow screen  
**So that** urgent signage updates can be handled away from a desktop

**Acceptance Criteria:**

- Mobile layout exposes the primary app navigation from the footer.
- Overflow navigation shows less common sections, including schedules and manage, when space is limited.
- Media creation actions remain available from a compact media actions menu.
- Compact media actions include upload, add from link, and add plugin options.
