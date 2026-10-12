/**
 * VIS-18 / VIS-19 — what the form refuses to send, and who it sends.
 *
 * Both tests are about the moment BEFORE the request: the invite form is the
 * only thing standing between a typo and a visitor who never gets told they are
 * expected. Neither can be judged from the screen, so both watch the network —
 * the question is not "did a message appear" but "did anything leave".
 *
 * `asset_id` carries the visitor's address on a visitor booking and has an
 * `email` validator on it (`booking.utilities.ts`), which is what test 1
 * exercises. The backend would happily store `not-an-email`, so if the form
 * lets it through nothing else will stop it.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { deleteBooking, getBooking, listBookings, uniqueTitle } from '../../../../e2e/support/api';
import { VISITOR_SLOTS, visitorFor } from '../../../../e2e/support/visitor/visitor.env';
import { deleteGuest, releaseVisitor, releaseGroupContainers } from '../../../../e2e/support/visitor/visitor.api';
import {
    GROUP_VISITOR_MODE,
    SINGLE_VISITOR_MODE,
    useSettings,
} from '../../../../e2e/support/visitor/visitor.settings';
import {
    inviteVisitorViaUI,
    inviteVisitorsViaUI,
} from '../../../../e2e/support/visitor/visitor.flows';
import { InviteVisitorForm } from '../../../../e2e/support/visitor/invite-form.page';

const DAY = 86_400;
const window_from = () => Math.floor(Date.now() / 1000) - 2 * DAY;
const window_to = () => Math.floor(Date.now() / 1000) + 2 * DAY;

test.describe('visitor invite validation', () => {
    test('an address that is not an email is refused before anything is sent', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const visitor = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.validation.badEmail);

        await releaseVisitor(staffApi, visitor.email, window_from(), window_to());
        await useSettings(staffPage, SINGLE_VISITOR_MODE);

        const form = new InviteVisitorForm(staffPage);
        await form.open();
        await form.expectSingleMode();

        const posts: number[] = [];
        staffPage.on('response', (r) => {
            if (r.url().includes('/api/staff/v1/bookings') && r.request().method() === 'POST') {
                posts.push(r.status());
            }
        });

        // Everything else valid, so a refusal can only be about the address.
        await expect(async () => {
            await form.visitorName.fill(visitor.name);
            await form.visitorEmail.fill('not-an-email');
            await form.reason.fill(uniqueTitle('E2E Bad Email'));
            expect(await form.visitorEmail.inputValue()).toBe('not-an-email');
        }).toPass({ timeout: 30_000 });

        await form.sendButton.click();
        // Long enough that a slow POST would still have been seen. Asserting
        // "nothing yet" straight after the click would pass either way.
        await staffPage.waitForTimeout(5_000);

        expect(
            posts,
            'a malformed address must be caught in the form — the backend stores ' +
                'whatever it is given, so nothing else will catch it',
        ).toHaveLength(0);
        await expect(
            form.successPanel,
            'and the invite must not reach its success screen',
        ).toBeHidden();

        // Control: the same form sends once the address is a real one. Without
        // this, a form broken for any other reason would pass the test above.
        let booking_id: number | undefined;
        try {
            const reason = uniqueTitle('E2E Good Email');
            const created = await inviteVisitorViaUI(staffPage, staffApi, visitor, reason);
            booking_id = created.id;
            expect(
                (await getBooking(staffApi, booking_id)).asset_id,
                'with a valid address the same invite goes through',
            ).toBe(visitor.email);
        } finally {
            if (booking_id != null) await deleteBooking(staffApi, booking_id);
            await deleteGuest(staffApi, visitor.email);
        }
    });

    test('a visitor removed before sending is not invited', async ({
        staffPage,
        staffApi,
    }, testInfo) => {
        const kept = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.validation.keptA);
        const dropped = visitorFor(testInfo.parallelIndex, VISITOR_SLOTS.validation.removedB);
        const reason = uniqueTitle('E2E Visit Removed');
        const created_ids: number[] = [];

        for (const v of [kept, dropped]) {
            await releaseVisitor(staffApi, v.email, window_from(), window_to());
        }
        await releaseGroupContainers(staffApi, window_from(), window_to());
        await useSettings(staffPage, GROUP_VISITOR_MODE);

        try {
            // Both go on the list, then one comes off — all inside the send
            // flow, so a REG-09 retry repeats the correction instead of
            // quietly inviting the person who was taken off.
            const created = await inviteVisitorsViaUI(
                staffPage,
                staffApi,
                [kept, dropped],
                reason,
                { remove: [dropped] },
            );
            created_ids.push(...created.map((b) => b.id));

            const members = created.filter((b) => b.booking_type === 'visitor');
            expect(
                members.map((b) => b.asset_id),
                'only the visitor left on the list is invited',
            ).toEqual([kept.email]);

            // And nothing for the removed one anywhere in the window — a
            // booking created and then orphaned would not show up above.
            const live = (
                await listBookings(staffApi, 'visitor', window_from(), window_to())
            ).filter((b) => !b.deleted);
            expect(
                live.map((b) => b.asset_id),
                'the visitor taken off the list must have no booking at all',
            ).not.toContain(dropped.email);
        } finally {
            for (const id of created_ids) await deleteBooking(staffApi, id).catch(() => null);
            await releaseGroupContainers(staffApi, window_from(), window_to());
            for (const v of [kept, dropped]) await deleteGuest(staffApi, v.email).catch(() => null);
        }
    });
});
