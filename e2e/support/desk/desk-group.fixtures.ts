/** Group fixtures extend the existing local auth fixtures; isolated data per test. */
import { type Response } from '@playwright/test';
import { apiFor, STAFF_API, uniqueTitle, type Booking } from '../api';
import { test as base, expect } from '../fixtures';
import {
    groupActorBookings,
    groupCleanupError,
    removeGroupBooking,
} from './desk-group.api';
import { groupDeskSlot } from './desk-group.env';
import { DeskGroupPage } from './desk-group.page';
import {
    seedGroupActors,
    seedGroupDesks,
    type GroupDeskSeed,
} from './desk-group.seed';
import { ALLOW_GROUP_BOOKING, useSettings } from './desk.settings';

interface GroupScenario {
    title: string;
    members: string[];
    slot: ReturnType<typeof groupDeskSlot>;
    seed: GroupDeskSeed;
    ui: DeskGroupPage;
    created(): Promise<Booking[]>;
}

export const test = base.extend<{
    groupScenario: GroupScenario;
    rollbackGroup: boolean;
    groupActors: Awaited<ReturnType<typeof seedGroupActors>> & {
        slot: ReturnType<typeof groupDeskSlot>;
    };
}>({
    rollbackGroup: [false, { option: true }],
    // Automatic multi-context trace merging hangs on this local CI stack.
    // Keep the first-retry browser trace as a separate, validated artifact.
    trace: 'off',
    groupActors: [
        async ({ adminStorageState }, use, info) => {
            void adminStorageState;
            const admin = await apiFor('admin', info.parallelIndex);
            const audit = {
                users: [] as string[],
                deletedUsers: [] as string[],
                bookings: [] as number[],
            };
            try {
                const slot = groupDeskSlot();
                const owned = await seedGroupActors(admin, slot, audit);
                try {
                    await use({ ...owned, slot });
                } finally {
                    await owned.dispose();
                }
            } finally {
                await info.attach('group-identity-cleanup', {
                    body: JSON.stringify(audit),
                    contentType: 'application/json',
                });
                await admin.dispose();
            }
        },
        { timeout: 90_000 },
    ],
    staffApi: async ({ groupActors }, use) => use(groupActors.actors[0].api),
    // Use Playwright's managed page so CI trace/video lifecycle is retained.
    storageState: async ({ groupActors }, use) =>
        use(groupActors.actors[0].state),
    staffPage: async ({ page }, use, info) => {
        const trace = info.retry === 1;
        if (trace)
            await page.context().tracing.start({
                screenshots: true,
                snapshots: true,
                sources: true,
            });
        try {
            await use(page);
        } finally {
            if (trace) {
                const path = info.outputPath('group-browser-trace.zip');
                await page.context().tracing.stop({ path });
                await info.attach('group-browser-trace', {
                    path,
                    contentType: 'application/zip',
                });
            }
        }
    },
    groupScenario: async (
        { staffPage, staffApi, adminStorageState, rollbackGroup, groupActors },
        use,
        info,
    ) => {
        void adminStorageState;
        const members = groupActors.actors
            .slice(0, 2)
            .map((actor) => actor.email);
        const title = uniqueTitle('E2E Group Desk');
        const seed = await seedGroupDesks(
            staffPage,
            info.parallelIndex,
            members.length,
        );
        const captured: Booking[] = [];
        const pending: Promise<void>[] = [];
        const captureErrors: unknown[] = [];
        const observe = (response: Response) => {
            const request = response.request();
            if (
                request.method() !== 'POST' ||
                new URL(response.url()).pathname !== `${STAFF_API}/bookings` ||
                !response.ok()
            )
                return;
            // This browser context belongs exclusively to this scenario.
            pending.push(
                response
                    .json()
                    .then((booking: Booking) => {
                        captured.push(booking);
                    })
                    .catch((error) => {
                        captureErrors.push(error);
                    }),
            );
        };
        staffPage.on('response', observe);
        try {
            await useSettings(staffPage, {
                ...ALLOW_GROUP_BOOKING,
                'app.bookings.rollback_group_bookings': rollbackGroup,
            });
            await use({
                title,
                members,
                seed,
                slot: groupActors.slot,
                ui: new DeskGroupPage(staffPage),
                created: async () => {
                    await Promise.all(pending);
                    expect(
                        captureErrors,
                        'Booking response capture errors',
                    ).toEqual([]);
                    return captured;
                },
            });
        } finally {
            staffPage.off('response', observe);
            await Promise.all(pending);
            // Query the dedicated booker too: response capture may miss an ID.
            // Actor teardown repeats the sweep before deleting any identities.
            const errors = [...captureErrors];
            const owned = new Map(
                captured.map((booking) => [booking.id, booking]),
            );
            try {
                for (const booking of await groupActorBookings(
                    staffApi,
                    groupActors.slot.start,
                    groupActors.slot.end,
                ))
                    owned.set(booking.id, booking);
            } catch (error) {
                errors.push(groupCleanupError(error));
            }
            for (const booking of [...owned.values()].sort(
                (a, b) =>
                    Number(a.booking_type === 'group') -
                    Number(b.booking_type === 'group'),
            )) {
                try {
                    await removeGroupBooking(staffApi, booking.id);
                } catch (error) {
                    errors.push(groupCleanupError(error));
                }
            }
            try {
                await seed.dispose();
            } catch (error) {
                errors.push(groupCleanupError(error));
            }
            expect(errors, 'Group scenario cleanup errors').toEqual([]);
        }
    },
});
export { expect };
