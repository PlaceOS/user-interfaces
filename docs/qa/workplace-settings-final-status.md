# Workplace Settings E2E coverage: final status

Updated 30 Oct 2026. PR #595, branch `test/e2e-workplace-settings`, with develop `f9b7be2a60` merged in and the 30 Oct 2026 review fixes on top.

## Summary

| Group | Specs | Unique Settings | Scenarios | Status |
|---|---|---|---|---|
| **In PR #595** | **189** | **214** | **430** | **417 passed locally on 29 Oct; the 30 Oct review fixes (11 specs, 13 new scenarios) are not yet run** |
| Held locally, not in the PR | 2 (+1 product check) | 2 | 6 | See "Held locally" |
| Excluded or ignored by developer decision | – | 5 | – | Not tested |

**Evidence for the PR coverage**
- Full Settings run, 29 Oct 2026, 1 worker, 0 retries (`out-full-settings-run-final.txt`):
  - 422 tests, 417 passed.
  - The 5 failures were 4 held local tests and 1 dev-server hiccup (`events.room_as_host` with `force_host`), which passed 6/6 on a repeat run.
- Typecheck: no errors.

**Status key**
- **PASS**: the test passes and checks the documented behaviour.
- **PASS (current behaviour)**: the test passes but checks the app's current behaviour, which differs from the intended behaviour. The linked Jira ticket tracks the fix. The spec will be updated once the fix reaches the PR branch.
- **UPDATED, NOT YET RUN**: changed on 30 Oct 2026 to assert the behaviour now on develop, or to answer review comments; typechecked but not yet run against the stack.

**Jira state on develop (`f9b7be2a60`)**

| Jira | State |
|---|---|
| PPT-2859, PPT-2861, PPT-2862, PPT-2863, PPT-2858, PPT-2864, PPT-2865, PPT-2866, PPT-2854 | Verified fixed |
| PPT-2860, PPT-2868, PPT-2869, PPT-2870 | Fix merged on develop (#636, #651, #650, #652); not yet verified |

## How to run

The settings specs live in `apps/workplace/e2e/settings/` and run in two Playwright projects. See `e2e/README.md` for the stack and the `.env` settings.

```bash
e2e/stack/up.sh                       # the seeded local stack, for `settings`
bunx playwright test -c apps/workplace/playwright.config.ts --project=settings           # needs the stack
bunx playwright test -c apps/workplace/playwright.config.ts --project=settings-browser   # no stack needed
```

- `settings`: every settings spec except the browser-only ones. Depends on `preflight`, so it fails fast when the stack is down.
- `settings-browser`: the 16 specs that answer every request in the browser (`BROWSER_ONLY_SETTINGS` in `apps/workplace/playwright.config.ts`).
- `--project=local` runs only the original local-backend suite, not the settings specs.
- In CI (`.github/workflows/e2e-advisory.yml`), `settings` runs on the nightly schedule and on "Run workflow"; `settings-browser` runs on every run (push, nightly and "Run workflow"), on a GitHub-hosted runner.

## Settings in PR #595

### bookings (10 specs, 11 Settings, 25 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| bookings.all_day_default | bookings.all-day-default | 2 | PASS | |
| bookings.allow_all_day | bookings.allow-all-day | 3 | UPDATED, NOT YET RUN | Generic key with desks.allow_all_day unset, plus desks.allow_all_day false overriding it (PPT-2859) |
| bookings.bookable_hours | bookings.bookable-hours | 2 | PASS | |
| bookings.can_book_for_anyone | bookings.can-book-for-anyone | 2 | PASS | |
| bookings.can_book_for_others | bookings.can-book-for-others | 2 | PASS | |
| bookings.custom_duration_options | bookings.custom-duration-options | 2 | PASS | |
| bookings.min_duration | bookings.duration-bounds | 2 | PASS | |
| bookings.max_duration | bookings.duration-bounds | 2 | PASS | |
| bookings.duration_step | bookings.duration-step | 2 | PASS | |
| bookings.has_assets | bookings.has-assets | 4 | UPDATED, NOT YET RUN | Generic key with desks.has_assets unset, plus desks.has_assets overriding it both ways (PPT-2864) |
| bookings.use_building_timezone | bookings.use-building-timezone | 2 | PASS | Also tested on the locker form (lockers area) |

### chat (1 spec, 1 Setting, 2 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| chat.enabled | chat.enabled | 2 | PASS | |

### desk-booking (27 specs, 27 Settings, 55 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| desks.allow_all_day | desk-booking.allow-all-day | 2 | PASS | |
| desks.allow_groups | desk-booking.allow-groups | 2 | PASS | |
| desks.allow_multiple | desk-booking.allow-multiple | 2 | PASS | |
| desks.allow_recurrence | desk-booking.allow-recurrence | 2 | PASS | |
| desks.allow_time_changes | desk-booking.allow-time-changes | 1 | PASS | False hides the all-day option, time and duration (PPT-2862) |
| bookings.allowed_daily_desk_count | desk-booking.allowed-daily-desk-count | 2 | PASS | Added in 6be84e50c |
| bookings.assigned_resource_booking | desk-booking.assigned-resource-booking | 2 | PASS | Legacy desk flow |
| desks.auto_allocation | desk-booking.auto-allocation | 2 | PASS | |
| desks.auto_checkin | desk-booking.auto-checkin | 2 | PASS | |
| desks.available_period | desk-booking.available-period | 2 | PASS | |
| desks.bookable_hours | desk-booking.bookable-hours | 4 | PASS | Each range checks its exact first and last start; the start offered at closing time is its own case, named as current behaviour |
| desks.can_book_for_others | desk-booking.can-book-for-others | 4 | UPDATED, NOT YET RUN | Adds the explicit-false override and the fallback to bookings.can_book_for_others (PPT-2869) |
| desks.can_book_lockers | desk-booking.can-book-lockers | 2 | PASS | |
| desks.custom_duration_options | desk-booking.custom-duration-options | 2 | PASS | |
| desks.default_duration | desk-booking.default-duration | 2 | PASS | |
| desks.default_select_as_map | desk-booking.default-select-as-map | 2 | PASS | Legacy desk flow |
| desks.duration_step | desk-booking.duration-step | 1 | PASS | |
| bookings.force_current_user_for_booking_rules | desk-booking.force-current-user-for-booking-rules | 2 | PASS | |
| desks.has_assets | desk-booking.has-assets | 2 | PASS | |
| desks.height_enabled | desk-booking.height-enabled | 2 | PASS | |
| bookings.hide_checkin | desk-booking.hide-checkin | 2 | PASS | |
| desks.max_duration | desk-booking.max-duration | 1 | PASS | |
| desks.min_duration | desk-booking.min-duration | 1 | PASS | |
| desks.show_calendar_links | desk-booking.show-calendar-links | 2 | PASS | |
| desks.show_users | desk-booking.show-users | 3 | PASS | |
| desks.use_assets | desk-booking.use-assets | 2 | PASS | |
| desks.use_building_timezone | desk-booking.use-building-timezone | 2 | PASS | |

### directory (2 specs, 2 Settings, 4 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| users.min_search_length | directory.min-search-length | 2 | PASS | |
| users.show_avatars | directory.show-avatars | 2 | PASS | |

### explore (13 specs, 21 Settings, 42 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| explore.colors | explore.colors | 2 | PASS | |
| explore.legend | explore.legend | 2 | PASS | |
| explore.hide_zones | explore.map-overlays | 2 | PASS | |
| explore.hide_devices | explore.map-overlays | 2 | PASS | |
| explore.hide_sensors | explore.map-overlays | 2 | PASS | |
| explore.disable | explore.map-overlays | 2 | UPDATED, NOT YET RUN | A disabled group has no switch (PPT-2866 / PPT-2854); the file no longer sets retries: 0 |
| explore.show_legend | explore.show-legend | 2 | PASS | |
| explore.area_count_key | explore.area-count-key | 2 | PASS | |
| explore.show_booking_qr | explore.show-booking-qr | 2 | PASS | |
| explore.show_event_details | explore.show-event-details | 2 | PASS | |
| show_presence_indicators | explore.show-presence-indicators | 2 | PASS | |
| explore.show_zone_sensor_info | explore.show-zone-sensor-info | 2 | PASS | |
| use_imperial_units | explore.use-imperial-units | 2 | PASS | Label only (˚C/˚F), confirmed by the developer. The 82°F warning threshold is demo-only and not tested (PB-11 closed). |
| explore.use_zone_polygons | explore.zone-polygons-and-labels | 2 | PASS | |
| explore.show_zone_labels | explore.zone-polygons-and-labels | 2 | PASS | |
| explore.disable_labels | explore.zone-polygons-and-labels | 2 | PASS | |
| explore.disable_features | explore.disable-layers | 3 | PASS | Includes the comma-string form |
| explore.disable_actions | explore.disable-layers | 1 | PASS | |
| explore.disable_styles | explore.disable-layers | 1 | PASS | The spec also has 1 shared baseline scenario (all empty), giving 6 in total |
| desks.enable_maps | explore.enable-maps | 2 | PASS | |
| parking.enable_maps | explore.enable-maps | 2 | PASS | |

### general (28 specs, 35 Settings, 61 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| allow_dark_mode | general.allow-dark-mode | 2 | PASS | |
| banner.type, banner.content, banner.id | general.banner | 5 | PASS | 3 Settings |
| basic_user_search | general.basic-user-search | 1 | PASS | |
| css_variables_dark | general.css-variables-dark | 2 | PASS | |
| css_variables | general.css-variables | 2 | PASS | |
| currency | general.currency | 2 | PASS | |
| default_building | general.default-building | 2 | PASS | |
| default_route | general.default-route | 1 | PASS | |
| environment_bar | general.environment-bar | 1 | PASS | |
| features | general.features | 2 | PASS | |
| global_search | general.global-search | 1 | PASS | |
| group_events_calendar | general.group-events-calendar | 2 | PASS | |
| help | general.help-menu | 2 | PASS | |
| hide_global_search_items | general.hide-global-search-items | 3 | PASS | |
| idle_timeout | general.idle-timeout | 2 | PASS | Legacy meeting form |
| locales | general.locales | 2 | PASS | |
| logo_dark | general.logo-dark | 2 | PASS | |
| logo_light | general.logo-light | 1 | PASS | |
| menu_embeds | general.menu-embeds | 2 | PASS | |
| name | general.name | 1 | PASS | |
| short_name | general.short-name | 1 | PASS | |
| show_changelog | general.show-changelog | 1 | PASS | |
| support_issue_types | general.support-ticket | 2 | PASS | |
| external_support_url | general.support-ticket | 1 | PASS | |
| use_24_hour_time | general.use-24-hour-time | 2 | PASS | |
| use_geolocation | general.use-geolocation | 3 | PASS | |
| use_region | general.use-region | 2 | PASS | |
| virtual_concierge.url | general.virtual-concierge | 2 | PASS | |
| virtual_concierge_url (legacy key) | general.virtual-concierge | 1 | PASS | |
| virtual_concierge.icon | general.virtual-concierge | 2 | PASS | |
| virtual_concierge.display | general.virtual-concierge | 2 | PASS | |
| virtual_concierge.side | general.virtual-concierge | 2 | PASS | |
| week_start | general.week-start | 2 | PASS | |

### landing (10 specs, 10 Settings, 16 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| colleagues_require_auth | landing.colleagues-require-auth | 2 | PASS | |
| feature_groups | landing.feature-groups | 3 | PASS | |
| hide_colleagues | landing.hide-colleagues | 1 | PASS | |
| hide_landing_customise | landing.hide-landing-customise | 2 | PASS | |
| hide_landing_rooms | landing.hide-landing-rooms | 1 | PASS | |
| hide_landing_sidebar | landing.hide-landing-sidebar | 2 | PASS | Legacy landing page; added in 6be84e50c |
| hide_landing_spaces | landing.hide-landing-spaces | 1 | PASS | |
| hide_landing_widgets | landing.hide-landing-widgets | 2 | PASS | |
| show_quick_book | landing.show-quick-book | 1 | PASS | |
| show_quick_links | landing.show-quick-links | 1 | PASS | |

### lockers (11 specs, 10 unique Settings, 22 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| lockers.allow_all_day | lockers.allow-all-day | 2 | PASS | |
| lockers.allow_time_changes | lockers.allow-time-changes | 2 | PASS | |
| bookings.allowed_daily_locker_count | lockers.allowed-daily-locker-count | 2 | PASS | Added in 6be84e50c |
| lockers.available_period | lockers.available-period | 2 | PASS | |
| lockers.disabled_date_select | lockers.disabled-date-select | 2 | UPDATED, NOT YET RUN | Asserts the date, start time and end time are disabled when set and enabled when not (PPT-2860) |
| lockers.disabled_start_time | lockers.disabled-start-time | 2 | PASS | |
| lockers.hide_end_time | lockers.hide-end-time | 2 | PASS | |
| lockers.hide_user | lockers.hide-user | 2 | PASS | Added in 6be84e50c. Related open bug PPT-2870 (picker TypeError); the test avoids it. |
| lockers.max_duration | lockers.max-duration | 2 | PASS | |
| lockers.show_calendar_links | lockers.show-calendar-links | 2 | PASS | |
| bookings.use_building_timezone (locker form) | lockers.use-building-timezone | 2 | PASS | Same Setting as in bookings, so not counted again |

### parking-booking (15 specs, 16 Settings, 40 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| parking.allow_all_day | parking-booking.allow-all-day | 5 | UPDATED, NOT YET RUN | "False alone" now hides the checkbox; adds the override of bookings.allow_all_day and the fallback to it (PPT-2859) |
| bookings.allowed_daily_parking_count | parking-booking.allowed-daily-parking-count | 2 | PASS | Added in 6be84e50c |
| parking.available_period | parking-booking.available-period | 2 | PASS | |
| parking.bookable_hours | parking-booking.bookable-hours | 3 | PASS | |
| parking.can_book_for_others | parking-booking.can-book-for-others | 4 | UPDATED, NOT YET RUN | Adds the override of bookings.can_book_for_others both ways (PPT-2869) |
| parking.custom_duration_options | parking-booking.custom-duration-options | 2 | PASS | |
| parking.hide_user (+ legacy parkings.hide_user) | parking-booking.hide-user | 3 | PASS | |
| parking.max_duration | parking-booking.max-duration | 2 | PASS | |
| parking.min_duration | parking-booking.min-duration | 2 | PASS | |
| parking.restrict_home_location | parking-booking.restrict-home-location | 3 | PASS | |
| parking.show_calendar_links | parking-booking.show-calendar-links | 2 | PASS | |
| parking.show_waitlist | parking-booking.show-waitlist | 2 | PASS | |
| parking.use_building_timezone | parking-booking.use-building-timezone | 3 | UPDATED, NOT YET RUN | The override case is marked test.fail: the getter is still bookings \|\| parking (no ticket yet) |
| parking.show_status_details | parking-booking.map-tooltip | 2 | PASS | |
| parking.show_users | parking-booking.map-tooltip | 1 | PASS | |
| parking.waitlist_week_start | parking-booking.waitlist-week-start | 2 | PASS | |

### parking-request (15 specs, 18 Settings, 39 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| parking.allow_recurrence | parking-request.allow-recurrence | 2 | PASS | |
| parking.approver_groups | parking-request.approver-groups | 2 | PASS | |
| parking.auto_approved_groups | parking-request.auto-approved-groups | 3 | PASS | |
| parking.default_location_from_desk_booking | parking-request.default-location-from-desk-booking | 2 | PASS | |
| parking.extra_space_restrictions | parking-request.extra-space-restrictions | 3 | PASS | |
| parking.show_special_needs | parking-request.form-details | 2 | PASS | |
| parking.request_submission_notes_html | parking-request.form-details | 2 | PASS | |
| parking.can_book_for_anyone | parking-request.form-details | 2 | PASS | |
| parking.hide_availability_counter | parking-request.hide-availability-counter | 2 | PASS | |
| parking.hide_custom_shift | parking-request.hide-custom-shift | 3 | PASS | |
| parking.hidden_buildings | parking-request.location-preference | 2 | PASS | |
| parking.hide_prefer_toggle | parking-request.location-preference | 2 | PASS | |
| parking.request_shift_options | parking-request.request-shift-options | 2 | PASS | |
| parking.request_space_restrictions | parking-request.request-space-restrictions | 2 | PASS | |
| parking.request_types | parking-request.request-types | 2 | PASS | |
| parking.require_plate_number | parking-request.require-plate-number | 2 | PASS | |
| parking.require_space_restriction | parking-request.require-space-restriction | 2 | PASS | |
| parking.vehicle_types | parking-request.vehicle-types | 2 | PASS | |

### room-booking (39 specs, 39 Settings, 81 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| events.all_day_period | room-booking.all-day-period | 2 | PASS | |
| events.allow_all_day | room-booking.allow-all-day | 2 | PASS | |
| events.allow_daily_allday_recurrence | room-booking.allow-daily-allday-recurrence | 3 | UPDATED, NOT YET RUN | Adds the Daily then "Doesn't repeat" case (PPT-2861) |
| events.allow_externals | room-booking.allow-externals | 2 | PASS | |
| events.allow_multiday | room-booking.allow-multiday | 2 | PASS | |
| events.allow_online_meetings | room-booking.allow-online-meetings | 2 | PASS | |
| events.allow_recurrence | room-booking.allow-recurrence | 2 | PASS | |
| events.allowed_future_days | room-booking.allowed-future-days | 2 | PASS | |
| events.bookable_hours | room-booking.bookable-hours | 4 | PASS | Each range checks its exact first and last start; the start offered at closing time is its own case, named as current behaviour |
| events.booking_unavailable | room-booking.booking-unavailable | 2 | PASS | |
| events.can_book_for_anyone | room-booking.can-book-for-anyone | 3 | PASS | Legacy meeting form |
| events.can_book_for_others | room-booking.can-book-for-others | 2 | PASS | |
| events.custom_duration_options | room-booking.custom-duration-options | 2 | PASS | |
| events.duration_step | room-booking.duration-step | 2 | PASS | |
| events.has_assets | room-booking.has-assets | 2 | PASS | |
| events.hide_attendees | room-booking.hide-attendees | 2 | PASS | |
| events.hide_features | room-booking.hide-features | 2 | PASS | |
| events.hide_nearby_desks | room-booking.hide-nearby-desks | 3 | PASS | |
| events.hide_notes | room-booking.hide-notes | 2 | PASS | |
| events.max_duration | room-booking.max-duration | 2 | PASS | |
| events.min_duration | room-booking.min-duration | 2 | PASS | |
| events.multiple_spaces | room-booking.multiple-spaces | 2 | PASS | |
| events.no_standalone | room-booking.no-standalone | 1 | PASS | |
| events.strict_capacity_check | room-booking.strict-capacity-check | 2 | PASS | |
| events.use_bookings | room-booking.use-bookings | 2 | PASS | |
| events.use_building_timezone | room-booking.use-building-timezone | 2 | PASS | |
| events.allow_attendee_internal_or_external | room-booking.allow-attendee-internal-or-external | 2 | PASS | |
| events.allow_international | room-booking.allow-international | 2 | PASS | |
| events.breakdown | room-booking.breakdown | 2 | PASS | Added in 6be84e50c |
| events.force_current_user_for_booking_rules | room-booking.force-current-user-for-booking-rules | 2 | PASS | |
| events.force_host | room-booking.force-host | 2 | PASS | Added in 6be84e50c |
| bookings.no_approval | room-booking.no-approval | 2 | PASS | Added in 6be84e50c |
| events.no_space_resource | room-booking.no-space-resource | 2 | PASS | |
| events.room_as_host | room-booking.room-as-host | 2 | PASS | Added in 6be84e50c. One dev-server hiccup in the full run; 6/6 on repeat. |
| events.setup | room-booking.setup | 2 | PASS | Added in 6be84e50c |
| events.allow_multiple_spaces (legacy alias) | room-booking.allow-multiple-spaces-legacy | 1 | PASS | |
| events.catering_notes_required | room-booking.catering-notes-required | 2 | PASS | |
| catering_provider | room-booking.catering-provider | 2 | PASS | |
| events.default_duration | room-booking.default-duration | 2 | PASS | |

### schedule (5 specs, 8 Settings, 16 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| schedule.event_sources | schedule.event-sources | 2 | PASS | |
| visitors.allow_editing | schedule.visitors-allow-editing | 2 | PASS | |
| auto_release.time_after | schedule.auto-release | 2 | PASS | |
| auto_release.time_before | schedule.auto-release | 2 | PASS | |
| auto_release.all_day_start | schedule.auto-release | 2 | PASS | |
| auto_release.resources | schedule.auto-release | 2 | PASS | |
| schedule.use_driver | schedule.use-driver | 2 | PASS | |
| schedule.use_websocket | schedule.use-websocket | 2 | PASS | |

### visitor-invite (13 specs, 16 Settings, 27 scenarios)
| Setting | Spec | Scen. | Status | Notes |
|---|---|---|---|---|
| visitors.allow_all_day | visitor-invite.allow-all-day | 2 | PASS | |
| visitors.allow_international | visitor-invite.allow-international | 2 | PASS | Docs and schema wording corrected earlier in the PR |
| visitors.allow_pass_number | visitor-invite.allow-pass-number | 2 | PASS | |
| visitors.allow_visitor_internal_or_external | visitor-invite.allow-visitor-internal-or-external | 2 | PASS | |
| visitors.bookable_hours | visitor-invite.bookable-hours | 1 | PASS | |
| visitors.use_building_timezone | visitor-invite.building-timezone | 2 | PASS | |
| visitors.can_book_for_anyone | visitor-invite.can-book-for-anyone | 2 | PASS | |
| visitors.can_book_for_others | visitor-invite.can-book-for-others | 2 | PASS | |
| visitors.min_duration | visitor-invite.duration-options | 1 | PASS | |
| visitors.max_duration | visitor-invite.duration-options | 1 | PASS | |
| visitors.duration_step | visitor-invite.duration-options | 1 | PASS | |
| visitors.custom_duration_options | visitor-invite.duration-options | 1 | PASS | |
| bookings.multiple_visitors | visitor-invite.multiple-visitors | 2 | PASS | Legacy visitor form |
| visitors.reason_required | visitor-invite.reason-required | 2 | PASS | |
| visitors.show_calendar_links | visitor-invite.show-calendar-links | 2 | PASS | |
| bookings.all_day_period | visitor-invite.all-day-period | 2 | PASS | |

## Held locally (not in PR #595)

| Spec | Setting | Scen. | Latest develop (`20bc8d023`) | PR branch app | Jira | Next step |
|---|---|---|---|---|---|---|
| parking-booking.hide-selected-space | parking.hide_selected_space | 4 (card 2, details pop-up 2) | 4/4 PASS | Card true case fails (fix not on branch) | PPT-2863 / PPT-2858 verified | Add to the PR once the fix reaches the branch |
| explore.hide-device-fields | explore.hide_device_fields | 2 | Tooltip rows pass; fails at the owner lookup | Fails (tooltip can't open) | PPT-2865 verified; PPT-2868 fix merged on develop | Re-run on this branch (develop with #651 is merged in), then add to the PR |
| lockers.picker-loading | – (product check, not a setting) | 1 | Fails: TypeError reproduced | – | PPT-2870 fix merged on develop | Keep as a regression check |

`e2e/local/wpa-settings-write-guard.ts` is also held locally. It's a helper, not a setting.

## Excluded or ignored by developer decision

| Setting | Decision | Reason |
|---|---|---|
| new_features | Ignored | Developer: "Not used anymore" |
| bookings.allowed_daily_visitor_count | Excluded | Developer: enforced by a separate backend setting; the frontend skips the check for visitors |
| spaces.show_images | Ignored | Developer: nothing uses the Control page in Workplace (its only reader only adds a CSS class) |
| desks.hide_reason | Ignored for now | Developer decision. Its only reader is `DeskConfirmModalComponent` via `DesksService.bookDesk`. May be revisited. |
| lockers.use_building_timezone | Not tested | Developer: setting not considered useful. The locker form timezone is tested through `bookings.use_building_timezone`. |

Docs still describe `new_features`, `spaces.show_images` and `desks.hide_reason`. No docs change was requested.

## Open Jira tickets linked to Settings coverage

| Jira | Setting | Issue | State |
|---|---|---|---|
| PPT-2860 | lockers.disabled_date_select | Date and time stay editable | Fix merged on develop (#636); spec updated |
| PPT-2868 | explore.hide_device_fields (tooltip) | Device owner lookup uses the module id | Fix merged on develop (#651) |
| PPT-2869 | desks / parking.can_book_for_others | Explicit false doesn't override the generic value | Fix merged on develop (#650); specs updated |
| PPT-2870 | lockers (picker) | TypeError while the picker's lockers load | Fix merged on develop (#652) |
| no ticket yet | parking.use_building_timezone | Explicit false doesn't override bookings.use_building_timezone | Open; covered by a test.fail case |
