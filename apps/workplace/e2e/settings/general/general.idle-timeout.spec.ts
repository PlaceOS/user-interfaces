// Setting: idle_timeout (docs/settings/workplace.md), legacy meeting form.
// Coverage: 1 unique setting, 2 scenarios.
// Only the legacy meeting form reads this setting
// (apps/workplace/src/app/book/meeting-flow/meeting-flow-form.component.ts):
// ngOnInit calls UserIdleTimeService.idleFor(idle_timeout minutes) and opens the
// "form out of date" confirm modal when it resolves. The routed new flow
// (meeting-flow-new) has no idle check, so every scenario sets
// app.use_legacy_flows true.
// The browser clock is controlled. idleFor listens for input until it resolves
// (UserIdleTimeService._listening), so the test reads that state just before
// and just after the configured boundary instead of inferring it from the DOM.
// The modal is never answered: both answers run newForm() and reload the page.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type DebugWindow, prepare, test } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** Whether the legacy form's idle check is still waiting (read-only). */
function idleListening(page: Page) {
    return page.locator('meeting-flow-form').evaluate((element) => {
        const form = (window as DebugWindow).ng?.getComponent(element) as
            | { _idle?: { _listening?: boolean } }
            | undefined;
        if (typeof form?._idle?._listening !== 'boolean') {
            throw new Error(
                'the legacy meeting form idle state is unavailable',
            );
        }
        return form._idle._listening;
    });
}

for (const minutes of [1, 2]) {
    test(
        'idle_timeout ' +
            minutes +
            ' opens the legacy meeting form idle warning at the configured time',
        async ({ staffPage, audit }) => {
            await staffPage.clock.install();
            const fixture = await prepare(staffPage, audit, {
                'app.use_legacy_flows': true,
                'app.features': ['spaces'],
                'app.events.use_bookings': true,
                'app.catering.backend': 'native',
                'app.events.has_assets': false,
                'app.idle_timeout': minutes,
            });
            await staffPage.goto('/#/book/meeting/form');
            await fixture.ready();
            const form = staffPage.locator('meeting-flow-form');
            await expect(
                form.locator('meeting-form-details input#title'),
            ).toBeEditable();
            await expect(staffPage.locator('meeting-flow-new')).toHaveCount(0);
            // idleFor starts after OrganisationService initialisation.
            await expect
                .poll(() => idleListening(staffPage), {
                    message: 'idle check started',
                })
                .toBe(true);
            // Freeze time, then reset the idle start with one input event.
            await staffPage.clock.pauseAt(
                new Date((await staffPage.evaluate(() => Date.now())) + 1000),
            );
            await staffPage.locator('body').dispatchEvent('mousemove');
            const warning = staffPage.locator('confirm-modal');
            // Five seconds before the boundary: still waiting, no warning.
            await staffPage.clock.runFor(minutes * 60_000 - 5_000);
            expect(
                await idleListening(staffPage),
                'idle check still waiting before the boundary',
            ).toBe(true);
            await expect(warning).toHaveCount(0);
            // Five seconds after it: resolved, and the warning opens.
            await staffPage.clock.runFor(10_000);
            expect(
                await idleListening(staffPage),
                'idle check resolved after the boundary',
            ).toBe(false);
            // Change detection is timer-scheduled; let real time run to render it.
            await staffPage.clock.resume();
            await expect(warning).toBeVisible();
            await expect(warning).toHaveCount(1);
            await expect(
                staffPage.locator('meeting-flow-confirm, meeting-flow-success'),
            ).toHaveCount(0);
        },
    );
}
