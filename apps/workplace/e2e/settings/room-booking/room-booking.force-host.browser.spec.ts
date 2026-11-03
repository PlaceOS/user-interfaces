// Setting: events.force_host (docs/settings/workplace.md).
// Coverage: 1 unique Setting / 2 scenarios.
//
// Source: libs/events/src/lib/event-form.service.ts
// - _host(host, space) = events.force_host || (events.room_as_host ? space : '')
//   || host. postForm sends `host: _host(model.host, rooms[0].email)` and, when
//   that differs from the form's host, extension_data.host_override = the
//   form's host. The same value is the host whose booking rules are checked
//   (_bookingRulesHost looks that person up once through UserPipe unless it is
//   the signed-in user).
// - libs/common/src/lib/types/event.class.ts: the sent `organiser` is the
//   attendee whose email equals `host`, so a forced host that is not an
//   attendee sends no organiser; `creator` is kept from the form.
// The setting changes nothing on screen; only the sent meeting shows it.
//
// Scenarios (one room, one internal guest, hosted by the signed-in user;
// events.room_as_host false in both, so only force_host decides):
//   1. force_host set: host = the forced address, extension_data.host_override
//      = the signed-in user, creator = the signed-in user, no organiser, and the
//      forced host is looked up once for the rules check.
//   2. force_host '': host = the signed-in user, organiser = the signed-in
//      user, no host_override, and no person lookup.
//
// Safety: settings-harness meetingTest. Fully synthetic organisation, user,
// rooms and sign-in; every API GET must match an exact fixture; the only write
// allowed is one armed POST /api/staff/v1/events, answered in the browser.
// Runs in the settings-browser project (no backend).
import { expect } from '../../../../../e2e/support/fixtures';
import {
    MEETING_GUEST,
    MEETING_USER,
    meetingGet,
    meetingPersonPath,
    meetingTest as test,
    openSubmissionMeeting,
    submitMeeting,
} from '../support/settings-harness';

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
        label: 'a forced address sends that host',
        force_host: FORCED.email,
        host: FORCED.email,
        host_override: MEETING_USER.email as string | undefined,
        organiser: undefined as string | undefined,
        lookups: 1,
    },
    {
        label: "'' keeps the signed-in user as host",
        force_host: '',
        host: MEETING_USER.email,
        host_override: undefined as string | undefined,
        organiser: MEETING_USER.email as string | undefined,
        lookups: 0,
    },
];

for (const scenario of SCENARIOS) {
    test('events.force_host ' + scenario.label, async ({ meeting: { page, audit } }) => {
        // The rules-host lookup for the forced address (UserPipe), served locally.
        meetingGet(page, (url) => url.pathname === FORCED_PATH && !url.search, () => FORCED);
        const confirm = await openSubmissionMeeting(page, audit, {
            'app.events.force_host': scenario.force_host,
            'app.events.room_as_host': false,
        });
        expect(audit.fixtures[FORCED_PATH] ?? 0, 'no host lookup before Confirm').toBe(0);
        const body = await submitMeeting(page, audit, confirm);
        const ext = (body.extension_data ?? {}) as Record<string, unknown>;
        const attendees = (body.attendees as { email?: string }[]).map((a) => a.email);

        expect(body.host).toBe(scenario.host);
        expect(body.creator).toBe(MEETING_USER.email);
        expect((body.organiser as { email?: string } | undefined)?.email).toBe(scenario.organiser);
        expect(ext.host_override).toBe(scenario.host_override);
        // postForm adds the form's organiser (the signed-in user) to the attendees.
        expect(attendees).toEqual(expect.arrayContaining([MEETING_GUEST.email, MEETING_USER.email]));
        expect(audit.fixtures[FORCED_PATH] ?? 0, 'rules-host lookups for the forced address')
            .toBe(scenario.lookups);
    });
}
