/**
 * Stack preflight, as a Playwright setup project.
 *
 * This used to be `globalSetup`, which runs for every invocation regardless of
 * `--project`. That made `--project=mock` — documented as needing no backend —
 * fail when the stack was absent. A setup project is the mechanism for "only
 * the projects that depend on this", so only `local` waits on it.
 *
 * It also reports better: a missing stack is now a named failing test with the
 * message attached, rather than a runner crash before any test exists.
 */
import { test as setup } from '@playwright/test';

import { ensureParking } from './parking/parking.seed';
import { assertStackUp } from './preflight';
import { ensureEquipment } from './room/asset.seed';
import { ensureCateringMenu } from './room/catering.seed';
import { ensureRooms } from './room/room.seed';

// Seeding needs the stack check to have passed first.
setup.describe.configure({ mode: 'serial' });

setup('local PlaceOS stack is up', async () => {
    await assertStackUp();
});

/**
 * The shared rows every worker reads: rooms, parking spaces, requestable
 * equipment and the catering menu. Created here, once, before the `local`
 * project starts, so a worker's own `ensure*` call only ever finds them.
 */
setup('shared fixtures are seeded', async () => {
    setup.setTimeout(180_000);
    await Promise.all([
        ensureRooms(),
        ensureParking(),
        ensureEquipment(),
        ensureCateringMenu(),
    ]);
});
