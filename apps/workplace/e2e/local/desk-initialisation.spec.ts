/**
 * DESK-21 — values entered before desk-form initialisation completes survive
 * the form reset of the initialisation.
 */
import { DeskFlow } from '../../../../e2e/support/desk/desk-flow.page';
import { expect, test } from '../../../../e2e/support/fixtures';

/** The time a route guard gives the backend before it uses the offline fallback. */
const OFFLINE_FALLBACK_MS = 20_000;
/** Upper limit for the guards on the route. Two are there today. */
const MAX_GUARDS = 4;

test.describe('desk form initialisation', () => {
    test('preserves values entered before the form reset', async ({
        staffPage,
    }, testInfo) => {
        // The desk flow resets its form when it starts. The reset waits for
        // the signed-in user (`BookingFormService.newForm`), and the route
        // guards wait for the groups of that user too, so the reset usually
        // comes before the first render. The test then passes with or without
        // the fault.
        //
        // A guard that gets no answer in 20 s lets the route through on the
        // cached credentials. The form then shows with no user, and the reset
        // comes when `GET /users/current` answers. Hold that request, so the
        // edits below always come before the reset.
        let release_user!: () => void;
        const user_released = new Promise<void>((resolve) => {
            release_user = resolve;
        });
        let user_requests = 0;
        await staffPage.route('**/api/engine/v2/users/current', async (route) => {
            user_requests++;
            await user_released;
            await route.continue().catch(() => undefined);
        });
        // Fake timers, so that the test does not wait for the guards in real
        // time. Time continues to flow at its usual rate between the jumps.
        await staffPage.clock.install();

        try {
            await staffPage.goto('/#/book/desk/form');
            await expect
                .poll(() => user_requests, {
                    message: 'the app did not request the signed-in user',
                    timeout: 30_000,
                })
                .toBeGreaterThan(0);

            // Let the app finish its start in real time before the first
            // jump. The start has its own time limits, and a jump while it
            // runs makes the app load again. The start does not wait for the
            // user, so the loading screen goes away while the request is held.
            await expect(
                staffPage.locator('global-loading [loader]'),
                'the app did not finish its start while the user request was held',
            ).toBeHidden({ timeout: 60_000 });

            // More than one guard is on the route, and each waits in turn, so
            // jump one fallback time for each guard until the form shows. The
            // limit keeps the jumped time below the timers of the app that
            // load the page again. If the form does not show while the request
            // is held, the reset is not held and the test cannot find the
            // fault. Fail here and do not pass without a check.
            const form = new DeskFlow(staffPage);
            let shown = false;
            for (let jump = 0; jump < MAX_GUARDS && !shown; jump++) {
                await staffPage.clock.fastForward(OFFLINE_FALLBACK_MS);
                shown = await form.title
                    .waitFor({ state: 'visible', timeout: 3_000 })
                    .then(() => true)
                    .catch(() => false);
            }
            await expect(
                form.title,
                'the desk flow did not show while the user request was held',
            ).toBeVisible({ timeout: 20_000 });

            const title = `DESK-21 distinctive ${Date.now()}`;
            await form.title.fill(title);
            // The box starts clear, so a tick is the change that the form reset
            // can lose. `setChecked` fails when the box is not in the page.
            await form.setChecked(form.requireLocker, true);
            await testInfo.attach('desk-form-before-reset', {
                body: await staffPage.screenshot(),
                contentType: 'image/png',
            });

            // The reset runs in the microtask after the user is applied. The
            // app requests the groups of the user in the same task, so the
            // answer to that request comes after the reset. Two animation
            // frames then let Angular render the result.
            const groups_loaded = staffPage.waitForResponse((response) =>
                response.url().includes('/api/engine/v2/groups/current'),
            );
            release_user();
            await groups_loaded;
            await staffPage.evaluate(
                () =>
                    new Promise<void>((resolve) =>
                        requestAnimationFrame(() =>
                            requestAnimationFrame(() => resolve()),
                        ),
                    ),
            );

            await expect(
                form.title,
                'the title was lost after the desk form reset',
            ).toHaveValue(title);
            await expect(
                form.requireLocker,
                'the Require locker value was lost after the desk form reset',
            ).toBeChecked();
            await testInfo.attach('desk-form-after-reset', {
                body: await staffPage.screenshot(),
                contentType: 'image/png',
            });
        } finally {
            release_user();
        }
    });
});
