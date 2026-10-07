/**
 * The Microsoft 365 tenant the stack's calendar and directory can be backed by.
 *
 * Off unless all three `E2E_O365_*` variables are set. Off, `seed.ts` creates
 * the tenant row with placeholder credentials and every calendar-backed route
 * (`/api/staff/v1/events`, `/api/staff/v1/staff`) answers 500 at Microsoft; the
 * PlaceOS-native surfaces (desks, lockers, parking, visitors, native room
 * bookings) are unaffected. On, the row carries app-only credentials and those
 * routes answer from the tenant.
 *
 * CI sets them from the repository variables `E2E_O365_TENANT` and
 * `E2E_O365_CLIENT_ID` and the secret `E2E_O365_CLIENT_SECRET`; they belong to
 * the PlaceOS sandbox tenant and the app "PlaceOS Bookings Visualiser", which
 * holds Calendars.ReadWrite, User.Read.All, GroupMember.Read.All and
 * Place.Read.All.
 */
export const O365 = {
    tenant: process.env.E2E_O365_TENANT ?? '',
    client_id: process.env.E2E_O365_CLIENT_ID ?? '',
    client_secret: process.env.E2E_O365_CLIENT_SECRET ?? '',
};

export const CALENDAR_ENABLED = !!(
    O365.tenant &&
    O365.client_id &&
    O365.client_secret
);

/**
 * A local admin whose email is a mailbox in that tenant.
 *
 * staff-api creates an event on the signed-in user's own calendar and only lets
 * a user host for themselves (`can_create?` in events.cr), so the identity that
 * books through the calendar has to exist in the tenant. The default is one of
 * the tenant's demo users. The password is local: this is an ordinary PlaceOS
 * user, created by `seed.ts`, that happens to share an address with a mailbox.
 */
export const CALENDAR_USER_EMAIL =
    process.env.E2E_CALENDAR_USER ?? 'AdeleV@0cbfs.onmicrosoft.com';
export const CALENDAR_USER_PASSWORD =
    process.env.E2E_CALENDAR_PASSWORD ?? 'e2e-calendar-development';

/**
 * A room mailbox in the tenant, for the one room system the calendar specs book.
 *
 * Shared with placeos-dev's "[PlaceOS Dev] Sydney Room 4": the sandbox has no
 * spare room mailboxes. The specs book days out and delete what they create.
 */
export const CALENDAR_ROOM_EMAIL =
    process.env.E2E_CALENDAR_ROOM ?? 'testroom4@0cbfs.onmicrosoft.com';
