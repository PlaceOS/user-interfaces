// Setting: events.setup (docs/settings/workplace.md: default setup time for new
// meetings, in minutes; falls back to 0).
// Coverage: 1 unique Setting / 2 scenarios.
//
// Source: libs/events/src/lib/event-form.service.ts
// - _overflow() = { setup: events.setup || 0, breakdown: events.breakdown || 0 }.
// - _overflowTimes(rooms): setup = the form's setup_time || _overflow().setup,
//   raised to any room's events.overflow.<id>.setup. postForm stores it as the
//   sent meeting's setup_time.
// The new meeting form has no setup field, the prepared draft has
// setup_time 0, and events.overflow is {} (harness base), so the setting alone
// decides. events.breakdown is held at 0 to show only setup changes.
//
// Scenarios (Synthetic Room A, one internal guest):
//   1. events.setup 15: the sent setup_time is 15; breakdown_time stays 0.
//   2. events.setup unset (null): the fallback 0; no setup time is sent.
//
// Safety: settings-harness meetingTest. Fully synthetic organisation, user,
// rooms and sign-in; every API GET must match an exact fixture; the only write
// allowed is one armed POST /api/staff/v1/events, answered in the browser.
// Runs in the settings-browser project (no backend).
import { expect } from '../../../../../e2e/support/fixtures';
import {
    meetingTest as test,
    openSubmissionMeeting,
    submitMeeting,
} from '../support/settings-harness';

const SCENARIOS = [
    { label: '15 sends a 15 minute setup time', setup: 15 as number | null, expected: 15 },
    { label: 'unset falls back to no setup time', setup: null as number | null, expected: 0 },
];

for (const scenario of SCENARIOS) {
    test('events.setup ' + scenario.label, async ({ meeting: { page, audit } }) => {
        const confirm = await openSubmissionMeeting(page, audit, {
            'app.events.setup': scenario.setup,
            'app.events.breakdown': 0,
            'app.events.overflow': {},
        });
        const body = await submitMeeting(page, audit, confirm);
        // CalendarEvent.toJSON drops empty fields, so 0 may be sent as absent.
        expect(body.setup_time ?? 0).toBe(scenario.expected);
        expect(body.breakdown_time ?? 0).toBe(0);
    });
}
