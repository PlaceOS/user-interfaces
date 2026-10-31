// Setting: events.room_as_host (docs/settings/workplace.md).
// Coverage: 1 unique Setting / 2 scenarios.
//
// Source: libs/events/src/lib/event-form.service.ts
// - _host(host, space) = events.force_host || (events.room_as_host ? space : '')
//   || host, where `space` is the first selected room's email. postForm sends
//   that as `host` and, when it differs from the form's host, sets
//   extension_data.host_override = the form's host. The same value is the host
//   whose booking rules are checked (looked up once through UserPipe).
// - libs/common/src/lib/types/event.class.ts: the sent `organiser` is the
//   attendee whose email equals `host`. Rooms are not attendees there, so a
//   room or forced host sends no organiser; `creator` is kept from the form.
// The false case is not repeated here: with force_host '' it is the
// "'' keeps the signed-in user as host" scenario in room-booking.force-host.
//
// Scenarios (Synthetic Room A, one internal guest, hosted by the signed-in user):
//   1. room_as_host true, force_host '': host = Room A's email,
//      host_override = the signed-in user; Room A is looked up once.
//   2. room_as_host true, force_host set: force_host takes precedence; host =
//      the forced address; the forced host is looked up once, Room A never.
//
// Safety: settings-harness meetingTest. Fully synthetic organisation, user,
// rooms and sign-in; every API GET must match an exact fixture; the only write
// allowed is one armed POST /api/staff/v1/events, answered in the browser.
// Runs in the settings-browser project (no backend).
import { expect } from '../../../../../e2e/support/fixtures';
import {
    MEETING_GUEST,
    MEETING_ROOMS,
    MEETING_USER,
    meetingGet,
    meetingPersonPath,
    meetingTest as test,
    openSubmissionMeeting,
    submitMeeting,
} from '../support/settings-harness';

const ROOM = MEETING_ROOMS[0];
const ROOM_PATH = meetingPersonPath(ROOM.email);
const FORCED = {
    id: 'e2e-meeting-submission-forced-host',
    name: 'Synthetic Forced Host',
    email: 'forced-host@dev.place.tech',
    groups: [] as string[],
    department: '',
};
const FORCED_PATH = meetingPersonPath(FORCED.email);

const SCENARIOS = [
    {
        label: 'true sends the first room as host',
        force_host: '',
        host: ROOM.email,
        room_lookups: 1,
        forced_lookups: 0,
    },
    {
        label: 'true with force_host set sends the forced host (force_host wins)',
        force_host: FORCED.email,
        host: FORCED.email,
        room_lookups: 0,
        forced_lookups: 1,
    },
];

for (const scenario of SCENARIOS) {
    test('events.room_as_host ' + scenario.label, async ({ meeting: { page, audit } }) => {
        // Rules-host lookups (UserPipe), served locally for either possible host.
        meetingGet(page, (url) => url.pathname === ROOM_PATH && !url.search, () => ({
            id: ROOM.id, name: ROOM.name, email: ROOM.email, groups: [], department: '',
        }));
        meetingGet(page, (url) => url.pathname === FORCED_PATH && !url.search, () => FORCED);
        const confirm = await openSubmissionMeeting(page, audit, {
            'app.events.room_as_host': true,
            'app.events.force_host': scenario.force_host,
        });
        expect(audit.fixtures[ROOM_PATH] ?? 0, 'no room lookup before Confirm').toBe(0);
        expect(audit.fixtures[FORCED_PATH] ?? 0, 'no forced-host lookup before Confirm').toBe(0);
        const body = await submitMeeting(page, audit, confirm);
        const ext = (body.extension_data ?? {}) as Record<string, unknown>;
        const attendees = (body.attendees as { email?: string }[]).map((a) => a.email);

        expect(body.host).toBe(scenario.host);
        expect(body.creator).toBe(MEETING_USER.email);
        expect(body).not.toHaveProperty('organiser');
        expect(ext.host_override).toBe(MEETING_USER.email);
        // postForm adds the form's organiser (the signed-in user) to the attendees.
        expect(attendees).toEqual(expect.arrayContaining([MEETING_GUEST.email, MEETING_USER.email]));
        expect(audit.fixtures[ROOM_PATH] ?? 0, 'rules-host lookups for Room A').toBe(scenario.room_lookups);
        expect(audit.fixtures[FORCED_PATH] ?? 0, 'rules-host lookups for the forced host')
            .toBe(scenario.forced_lookups);
    });
}
