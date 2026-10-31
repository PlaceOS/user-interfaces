// Setting: bookings.no_approval (docs/settings/workplace.md).
// Coverage: 1 unique Setting / 2 scenarios.
//
// Source:
// - libs/events/src/lib/event-form.service.ts _performBooking: with
//   events.use_bookings true the meeting is saved as a native room booking with
//   status 'approved' when bookings.no_approval === true AND
//   currentUserCanApprove(), otherwise 'tentative'.
// - libs/common/src/lib/user-state.ts currentUserCanApprove(): the signed-in
//   user's `groups` include 'placeos_admin' or 'placeos_support' (staff-api
//   accepts `approved` on create only from such users). The User class
//   (types/user.class.ts) keeps `groups` from users/current as given.
// - libs/bookings/src/lib/booking.utilities.ts newBookingFromCalendarEvent:
//   booking_type 'room', asset_id = the first room, approved =
//   (status === 'approved'); Booking (types/booking.class.ts) then resolves
//   status 'approved' or 'tentative'. createBooking (bookings.fn.ts) POSTs it
//   to /api/staff/v1/bookings?utm_source=<app>_<build>_<user email>.
//
// Scenarios (Synthetic Room A, one internal guest; the synthetic signed-in
// user's groups include 'placeos_support' in the browser only, with sys_admin
// and support false):
//   1. no_approval true: the sent booking is approved (status 'approved').
//   2. no_approval false: the sent booking waits for approval ('tentative').
// A standard user with no_approval on (booking still stored, pending, not
// refused) is covered by ROOM-21, and the default case by ROOM-20, in the
// team's apps/workplace/e2e/local/room-approval.spec.ts; not repeated here.
//
// Safety: settings-harness meetingTest. Fully synthetic organisation, user,
// rooms and sign-in; every API GET must match an exact fixture; the only write
// allowed is one armed POST /api/staff/v1/bookings (utm_source query only),
// answered in the browser. Nothing reaches a backend.
// Runs in the settings-browser project (no backend).
import { expect } from '../../../../../e2e/support/fixtures';
import {
    MEETING_ROOMS,
    MEETING_USER,
    meetingTest as test,
    openSubmissionMeeting,
    submitMeeting,
} from '../support/settings-harness';

const APPROVER_GROUPS = ['placeos_support'];

const SCENARIOS = [
    { label: 'true saves an approver\'s room booking as approved', no_approval: true, approved: true, status: 'approved' },
    { label: 'false leaves an approver\'s room booking tentative', no_approval: false, approved: false, status: 'tentative' },
];

for (const scenario of SCENARIOS) {
    test('bookings.no_approval ' + scenario.label, async ({ meeting: { page, audit } }) => {
        const confirm = await openSubmissionMeeting(page, audit, {
            'app.events.use_bookings': true,
            'app.bookings.no_approval': scenario.no_approval,
        }, { groups: APPROVER_GROUPS });
        const body = await submitMeeting(page, audit, confirm, { native: true });

        expect(body.booking_type).toBe('room');
        expect(body.asset_id).toBe(MEETING_ROOMS[0].id);
        expect(body.user_email).toBe(MEETING_USER.email);
        // removeEmptyFields may drop a false flag, so absent means false.
        expect(body.approved ?? false).toBe(scenario.approved);
        expect(body.status).toBe(scenario.status);
    });
}
