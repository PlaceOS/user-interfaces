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

import { assertStackUp } from './preflight';

setup('local PlaceOS stack is up', async () => {
    await assertStackUp();
});
