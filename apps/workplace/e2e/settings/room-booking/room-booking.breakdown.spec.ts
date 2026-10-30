// Setting: events.breakdown (docs/settings/workplace.md: default breakdown
// (pack-down) time for new meetings, in minutes; falls back to 0).
// Coverage: 1 unique Setting / 2 scenarios.
//
// Source: libs/events/src/lib/event-form.service.ts
// - _overflow() = { setup: events.setup || 0, breakdown: events.breakdown || 0 }.
// - _overflowTimes(rooms): breakdown = the form's breakdown_time ||
//   _overflow().breakdown, raised to any room's events.overflow.<id>.breakdown.
//   postForm stores it as the sent meeting's breakdown_time.
// The new meeting form has no breakdown field, the prepared draft has
// breakdown_time 0, and events.overflow is {} (harness base), so the setting
// alone decides. events.setup is held at 0 to show only breakdown changes.
//
// Scenarios (Synthetic Room A, one internal guest):
//   1. events.breakdown 20: the sent breakdown_time is 20; setup_time stays 0.
//   2. events.breakdown unset (null): the fallback 0; no breakdown time is sent.
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
    { label: '20 sends a 20 minute breakdown time', breakdown: 20 as number | null, expected: 20 },
    { label: 'unset falls back to no breakdown time', breakdown: null as number | null, expected: 0 },
];

for (const scenario of SCENARIOS) {
    test('events.breakdown ' + scenario.label, async ({ meeting: { page, audit } }) => {
        const confirm = await openSubmissionMeeting(page, audit, {
            'app.events.breakdown': scenario.breakdown,
            'app.events.setup': 0,
            'app.events.overflow': {},
        });
        const body = await submitMeeting(page, audit, confirm);
        // CalendarEvent.toJSON drops empty fields, so 0 may be sent as absent.
        expect(body.breakdown_time ?? 0).toBe(scenario.expected);
        expect(body.setup_time ?? 0).toBe(0);
    });
}
