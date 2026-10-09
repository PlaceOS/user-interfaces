/**
 * VIS-07 / VIS-08 — settings that change what the invite form demands.
 *
 * Both of these are off by default, and both are the kind of thing that only
 * breaks for the customers who turned them on — which is exactly the class of
 * bug an e2e suite is for. `visitors.reason_required` is PPT-2782.
 *
 * The settings are applied per BROWSER CONTEXT rather than seeded onto the org
 * zone (see `visitor.settings.ts`). Two specs can therefore demand opposite
 * configurations and still run in parallel; seeding them centrally would force
 * the whole suite to serialise on shared state.
 *
 * Both tests drive the real form, because the point is the form's behaviour.
 * The assertions are still made against what the backend stored.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, getBooking, uniqueTitle } from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import { deleteGuest, releaseVisitor } from '../../../../e2e/support/visitor/visitor.api';
import {
    ALLOW_ALL_DAY,
    REASON_REQUIRED,
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import { InviteVisitorForm } from '../../../../e2e/support/visitor/invite-form.page';
import { inviteVisitorViaUI } from '../../../../e2e/support/visitor/visitor.flows';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

test.describe('visitor invite settings', () => {
    test('an all-day invite is stored as all-day', async ({ staffPage, staffApi }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.settings.allDay);
        const reason = uniqueTitle('E2E Visit All Day');
        let booking_id: number | undefined;

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, { ...SINGLE_VISITOR_MODE, ...ALLOW_ALL_DAY });

        try {
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason, {
                allDay: true,
            });
            booking_id = created.id;

            const stored = await getBooking(staffApi, booking_id);
            expect(stored.all_day, 'the backend recorded it as an all-day booking').toBe(true);

            // An all-day invite should span a real day, not the one-hour default
            // the form starts with. Asserting the flag alone would pass even if
            // the times never changed.
            expect(
                stored.booking_end - stored.booking_start,
                'an all-day invite covers far more than the default hour',
            ).toBeGreaterThan(8 * 3600);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('with a reason required, sending without one is refused', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.settings.reason);

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, { ...SINGLE_VISITOR_MODE, ...REASON_REQUIRED });

        const form = new InviteVisitorForm(staffPage);
        await form.open();
        await form.expectSingleMode();

        // With the setting on, the component starts the reason EMPTY. Without it
        // the reason defaults to "Visit", so a spec that forgot to clear the
        // field would send successfully and prove nothing.
        await expect(
            form.reason,
            'with reason_required the field must start empty, or this test is vacuous',
        ).toHaveValue('');

        const posts: number[] = [];
        staffPage.on('response', (r) => {
            if (r.url().includes('/api/staff/v1/bookings') && r.request().method() === 'POST') {
                posts.push(r.status());
            }
        });

        await expect(async () => {
            await form.visitorName.fill(visitor.name);
            await form.visitorEmail.fill(visitor.email);
            expect(await form.visitorEmail.inputValue()).toBe(visitor.email);
        }).toPass({ timeout: 30_000 });

        await form.sendButton.click();

        // The form must refuse locally. Give it long enough that a slow POST
        // would still have been seen — asserting "no request yet" immediately
        // after a click would pass even if one were on its way.
        await staffPage.waitForTimeout(5_000);

        expect(
            posts,
            'a missing reason must be caught in the form — no booking POST should be made',
        ).toHaveLength(0);
        await expect(
            form.successPanel,
            'and the invite must not reach its success screen',
        ).toBeHidden();

        // Control: the same form DOES send once a reason is supplied, so the
        // assertion above is about the reason and not about a form that was
        // broken for some unrelated reason.
        let booking_id: number | undefined;
        try {
            const reason = uniqueTitle('E2E Visit Reason');
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason);
            booking_id = created.id;
            expect(
                (await getBooking(staffApi, booking_id)).title,
                'with a reason supplied the invite goes through and keeps it',
            ).toBe(reason);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });
});
