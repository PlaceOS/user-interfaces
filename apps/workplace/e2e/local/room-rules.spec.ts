/**
 * ROOM-30 — a zone booking rule hides a room.
 *
 * Booking rules are how a site says "this room is not for general booking" —
 * a boardroom, a room under repair, a floor reserved for an event. They live in
 * `room_booking_rules` metadata on the building and are applied client-side
 * (`event-form.service.ts`), so a change that stopped reading them would offer
 * restricted rooms to everybody, and the room list would look completely
 * normal doing it.
 *
 * Nothing else tests them, for the same reason as several other rows: the
 * stack seeds no rules, so there is nothing to observe. This spec writes one,
 * asserts its effect, and clears it.
 *
 * The condition is `resource_ids`, the narrowest one available, so exactly one
 * room is hidden and the others are the control. Both halves matter: the hidden
 * room disappears AND the rest stay, or "the list is empty" would pass.
 *
 * The ruleset is `{ zone: '*', conditions: { resource_ids: [<system id>] },
 * rules: { hidden: true } }`. Measured on the room list of the new meeting
 * flow, 13 Oct 2026: the room is offered before the rule is written and is
 * not offered after it, and the other rooms stay.
 *
 * The room list shows ten rooms a page, so "not offered" is read from every
 * page (`offeredRoomNames`).
 */
import { uniqueTitle } from '../../../../e2e/support/api';
import { test, expect } from '../../../../e2e/support/fixtures';
import {
    roomForWorker,
    setRoomBookingRules,
} from '../../../../e2e/support/room/room.seed';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';
import { MeetingFlow } from '../../../../e2e/support/room/meeting-flow.page';

test.describe('zone booking rules', () => {
    test('a room hidden by a booking rule is not offered, and the others still are', async ({
        staffPage,
    }, testInfo) => {
        const hidden = await roomForWorker(testInfo.parallelIndex, 'alt');
        const visible = await roomForWorker(testInfo.parallelIndex);

        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        // The room list is the second step of the flow, and that step needs a
        // title. No booking is made.
        const title = uniqueTitle('E2E Room Rules');

        try {
            // No rules yet: both rooms are offered. This is the baseline the
            // assertion below is measured against.
            const form = new MeetingFlow(staffPage);
            await form.open();
            await form.title.fill(title);
            await form.toRoomStep();
            const before = await form.offeredRoomNames();
            expect(
                before,
                `precondition: ${hidden.name} is offered before any rule exists. ` +
                    `Offered: ${JSON.stringify(before)}`,
            ).toContain(hidden.name);

            // Now hide it, and reload so the app reads the new metadata.
            await setRoomBookingRules([hidden.id]);
            await staffPage.reload();
            const after_form = new MeetingFlow(staffPage);
            await after_form.open();
            await after_form.title.fill(title);
            await after_form.toRoomStep();

            await expect(async () => {
                const after = await after_form.offeredRoomNames();
                expect(
                    after,
                    `${hidden.name} is hidden by a booking rule and must NOT be ` +
                        `offered. Offered: ${JSON.stringify(after)}`,
                ).not.toContain(hidden.name);
                expect(
                    after,
                    `and ${visible.name}, which no rule mentions, must still be — ` +
                        `otherwise this is "the list went empty" rather than a rule ` +
                        `being applied`,
                ).toContain(visible.name);
            }).toPass({ timeout: 30_000 });
        } finally {
            // Always: a rule left behind would hide a room from every later run.
            await setRoomBookingRules([]);
        }
    });
});
