/**
 * DESK-21 — values entered before desk-form initialisation completes survive
 * the form reset of the initialisation.
 */
import { DeskForm } from '../../../../e2e/support/desk/desk-form.page';
import { expect, test } from '../../../../e2e/support/fixtures';

/** State of the held settle timer of the desk flow. */
interface DeskInitHold {
    /** True after the desk flow started its settle timer. */
    held: boolean;
    /** Ends the settle timer. The form reset follows. */
    release: () => void;
}

type HoldWindow = Window & { desk_init_hold: DeskInitHold };

test.describe('desk form initialisation', () => {
    test('preserves values entered before the form reset', async ({
        staffPage,
    }, testInfo) => {
        // The desk flow shows its form immediately. It resets the form after
        // the organisation data loads and a settle timer of 300 ms ends. On
        // fast hardware the reset comes before the first edit, and the test
        // then passes with or without the fault. Hold the settle timer, so
        // the edits below always come before the reset.
        await staffPage.addInitScript(() => {
            const native = window.setTimeout;
            const hold: DeskInitHold = { held: false, release: () => null };
            (window as unknown as HoldWindow).desk_init_hold = hold;
            window.setTimeout = ((
                fn: (...args: unknown[]) => void,
                ms?: number,
                ...args: unknown[]
            ) => {
                const is_settle_timer =
                    ms === 300 &&
                    !hold.held &&
                    /NewDeskFlowComponent\b/.test(new Error().stack || '');
                if (!is_settle_timer) return native(fn, ms, ...args);
                hold.held = true;
                hold.release = () => fn(...args);
                return 0;
            }) as typeof window.setTimeout;
        });

        const form = new DeskForm(staffPage);
        await form.open();
        // If the timer is not found, the reset is not held and the test
        // cannot find the fault. Fail here and do not pass without a check.
        await expect
            .poll(
                () =>
                    staffPage.evaluate(
                        () =>
                            (window as unknown as HoldWindow).desk_init_hold
                                .held,
                    ),
                {
                    message: 'the desk flow did not start its settle timer',
                    timeout: 30_000,
                },
            )
            .toBe(true);

        const title = `DESK-21 distinctive ${Date.now()}`;
        await form.title.fill(title);
        // The box starts clear, so a tick is the change that the form reset
        // can lose. `setChecked` does nothing when the box is not in the
        // page, so make sure that the tick is there.
        await form.setChecked(form.requireLocker, true);
        await expect(form.requireLocker).toBeChecked();
        await testInfo.attach('desk-form-before-reset', {
            body: await staffPage.screenshot(),
            contentType: 'image/png',
        });

        // The reset runs in the microtask after the timer callback. Two
        // animation frames let Angular render the result.
        await staffPage.evaluate(async () => {
            (window as unknown as HoldWindow).desk_init_hold.release();
            await new Promise<void>((resolve) =>
                requestAnimationFrame(() =>
                    requestAnimationFrame(() => resolve()),
                ),
            );
        });

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
    });
});
