/**
 * NEW-VIS-01 … NEW-VIS-03 — the `visitor-flow-new` invite flow, as a
 * NON-ADMIN, against a real local backend.
 *
 * `visitor-invite.spec.ts` covers the same story for the flow this one
 * replaced. That flow is no longer routed, so these are the specs that hold
 * the story for `/book/visitor`.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    currentUser,
    deleteBooking,
    getBooking,
    listBookings,
    uniqueTitle,
} from '../../../../e2e/support/api';
import { readUserSettings, setUserSetting } from '../../../../e2e/support/home/home.api';
import { VisitorFlow } from '../../../../e2e/support/visitor/visitor-flow.page';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import {
    deleteGuest,
    releaseVisitor,
    searchGuests,
} from '../../../../e2e/support/visitor/visitor.api';
import {
    ALLOW_ALL_DAY,
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';

/** Window wide enough to cover an invite made in any timezone. */
const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

/** The user setting that holds the recent visitors. */
const INVITEES_KEY = 'visitor-invitees';

const SETTINGS = { ...SINGLE_VISITOR_MODE, ...ALLOW_ALL_DAY };

const isBookingPost = (url: string, method: string) =>
    url.includes('/api/staff/v1/bookings') && method === 'POST';

test.describe('visitor invite — the new flow', () => {
    test('NEW-VIS-01: a non-admin invites a visitor and the backend stores it', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.new_flow.stores);
        const reason = uniqueTitle('E2E New Visit');
        const flow = new VisitorFlow(staffPage);
        let booking_id: number | undefined;

        const swept = await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        if (swept) console.log(`  swept ${swept} stale invite(s) for ${visitor.email}`);
        // A guest left from an earlier run makes the guest check below pass
        // with no invite at all.
        expect(
            await searchGuests(staffApi, visitor.email),
            'precondition: no guest record exists before the invite',
        ).toHaveLength(0);

        await useSettings(staffPage, SETTINGS);

        try {
            await flow.open();
            // All Day replaces the default slot, which is the next boundary of
            // the clock and makes the invite depend on how fast the run is.
            await flow.setAllDay(true);
            await flow.reason.fill(reason);
            await flow.name.fill(visitor.name);
            await flow.email.fill(visitor.email);
            await flow.company.fill(visitor.company);

            const [response] = await Promise.all([
                staffPage.waitForResponse(
                    (r) => isBookingPost(r.url(), r.request().method()),
                    { timeout: 30_000 },
                ),
                flow.confirm.click(),
            ]);
            const status = response.status();
            const body = await response.text().catch(() => '<body unavailable>');
            expect(response.ok(), `POST /bookings should succeed, got ${status}: ${body}`).toBeTruthy();
            const created_id: number = JSON.parse(body).id;
            booking_id = created_id;

            // The app reached its own success state, and names the visitor.
            await expect(staffPage).toHaveURL(/#\/book\/visitor\/success/);
            await expect(flow.success).toContainText(visitor.name);

            // Read it back independently of the response parsed above.
            const stored = await getBooking(staffApi, created_id);
            const me = await currentUser(staffApi);
            expect(stored.booking_type, 'stored as a visitor booking').toBe('visitor');
            expect(stored.asset_id, 'against this worker’s visitor address').toBe(visitor.email);
            expect(stored.title, 'the reason we typed reached the backend').toBe(reason);
            expect(stored.deleted, 'not soft-deleted').toBeFalsy();
            expect(
                stored.zones.length,
                'carries its zone hierarchy (org/building/level)',
            ).toBeGreaterThan(0);
            expect(stored.user_email, 'the signed-in user is the host').toBe(me.email);

            // The guest record lives outside the booking. Reception reads it.
            const guests = await searchGuests(staffApi, visitor.email);
            expect(
                guests.map((g) => g.email),
                'a guest record was created for the visitor',
            ).toContain(visitor.email);
            expect(guests[0].name, 'carrying the name we typed').toBe(visitor.name);

            const listed = await listBookings(staffApi, 'visitor', window_from(), window_to());
            expect(
                listed.map((b) => b.id),
                'the new invite appears in the visitor listing',
            ).toContain(created_id);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('NEW-VIS-02: Confirm with no visitor email is refused and nothing is sent', async ({
        staffPage,
    }) => {
        const flow = new VisitorFlow(staffPage);
        const posts: string[] = [];
        staffPage.on('request', (request) => {
            if (isBookingPost(request.url(), request.method())) posts.push(request.url());
        });
        await useSettings(staffPage, SETTINGS);

        await flow.open();
        await flow.reason.fill(uniqueTitle('E2E New Visit None'));
        await flow.name.fill('E2E Visitor With No Address');
        await expect(flow.email).toHaveValue('');
        await flow.confirm.click();

        await expect(staffPage.locator('mat-snack-bar-container')).toBeVisible();
        await expect(staffPage).toHaveURL(/#\/book\/visitor\/form/);
        expect(posts, 'no invite may leave the page without an address').toEqual([]);
    });

    test('NEW-VIS-03: a recent visitor from the user settings fills the visitor fields', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.new_flow.recent);
        const flow = new VisitorFlow(staffPage);
        const before: unknown = (await readUserSettings(staffApi))[INVITEES_KEY];
        const history: unknown[] = Array.isArray(before) ? before : [];

        // The last item is the most recent visitor, and the panel shows the
        // most recent first. Format: `email|name|company|international|phone`.
        await setUserSetting(staffApi, INVITEES_KEY, [
            ...history.filter((item) => !`${item}`.startsWith(`${visitor.email}|`)),
            `${visitor.email}|${visitor.name}|${visitor.company}|0|`,
        ]);
        await useSettings(staffPage, SETTINGS);

        try {
            await flow.open();
            await expect(flow.email, 'the fields start empty').toHaveValue('');

            const recent = flow.recentVisitors.filter({ hasText: visitor.email });
            await expect(recent, 'the panel offers the visitor from the settings').toBeVisible();
            await recent.click();

            await expect(flow.email).toHaveValue(visitor.email);
            await expect(flow.name).toHaveValue(visitor.name);
            await expect(flow.company).toHaveValue(visitor.company);
        } finally {
            await setUserSetting(staffApi, INVITEES_KEY, history);
        }
    });
});
