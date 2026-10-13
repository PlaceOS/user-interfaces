/**
 * ROOM-29 — the facilities filter of the room list.
 *
 * A user looking for "a room with a projector" uses this, and it is the only
 * filter of the room step driven by data on the ROOM rather than by the
 * meeting. If it stopped narrowing the list, the list would look perfectly
 * healthy and quietly offer rooms without the equipment somebody needs.
 *
 * ## The feature has to exist before the filter can
 *
 * The filter section is built from whatever features the loaded rooms carry
 * (`meeting-flow-space-select.component.ts`), so with no room carrying anything
 * it is not rendered at all. `room.seed.ts` therefore puts one feature —
 * `E2E Projector` — on the `alt` rooms and nothing else, which gives filtering
 * by it a right answer: the `alt` rooms in, the rest out.
 *
 * Two things learned putting it there, both recorded in the seeder: a System
 * PATCH needs `version` in the QUERY STRING (in the body it is ignored and the
 * request 422s), and `features` is an array — a space-separated string is a 400
 * from the JSON parser.
 */
import { uniqueTitle } from '../../../../e2e/support/api';
import { test, expect } from '../../../../e2e/support/fixtures';
import { ALT_ROOM_FEATURE } from '../../../../e2e/support/room/room.env';
import { roomForWorker } from '../../../../e2e/support/room/room.seed';
import { ROOM_BASE_SETTINGS, useSettings } from '../../../../e2e/support/room/room.settings';
import { MeetingFlow } from '../../../../e2e/support/room/meeting-flow.page';

test.describe('the room list facilities filter', () => {
    test('filtering by a feature narrows the list to the room that has it', async ({
        staffPage,
    }, testInfo) => {
        const featured = await roomForWorker(testInfo.parallelIndex, 'alt');
        const plain = await roomForWorker(testInfo.parallelIndex);

        await useSettings(staffPage, ROOM_BASE_SETTINGS);

        // The list and its filters are the second step of the flow, and that
        // step needs a title. No booking is made.
        const form = new MeetingFlow(staffPage);
        await form.open();
        await form.title.fill(uniqueTitle('E2E Room Features'));
        await form.toRoomStep();

        const before = await form.offeredRoomNames();
        expect(
            before.length,
            'the list must offer more than one room, or narrowing it proves nothing',
        ).toBeGreaterThan(1);
        expect(before, 'precondition: both rooms are offered to begin with').toContain(
            featured.name,
        );
        expect(before).toContain(plain.name);

        // The filter column has a toggle per feature. It is matched on the
        // name of the feature — which is test data we seeded, not app copy.
        const toggle = form.featureToggle(ALT_ROOM_FEATURE);
        if (!(await toggle.count())) {
            throw new Error(
                `no toggle for "${ALT_ROOM_FEATURE}" in the filter column. The ` +
                    `facilities section is only rendered when the loaded rooms carry ` +
                    `features — check room.seed.ts put "${ALT_ROOM_FEATURE}" on ` +
                    `${featured.name}. Rooms offered: ${JSON.stringify(before)}`,
            );
        }
        await form.setToggle(toggle, true);

        await expect(async () => {
            const after = await form.offeredRoomNames();
            expect(
                after,
                `with "${ALT_ROOM_FEATURE}" required, ${featured.name} should still ` +
                    `be offered. Got ${JSON.stringify(after)}`,
            ).toContain(featured.name);
            expect(
                after,
                `and ${plain.name}, which has no features, must be filtered out`,
            ).not.toContain(plain.name);
        }).toPass({ timeout: 30_000 });
    });
});
