import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { type Debug, test, timezoneBuildings, untouchedVisitor, visitor } from '../support/settings-harness';

test.use({ readOnlyTimezone: 'Etc/UTC' });

/** The effective value of a setting, as the app reads it (unset is null). */
const effective = (page: Page, key: string) =>
    page.evaluate((name) => (window as Debug).setting?.(name) ?? null, key);

// Settings: bookings.use_building_timezone and visitors.use_building_timezone
// on the visitor invite form. InviteVisitorForm uses the building timezone when
// visitors.use_building_timezone ?? bookings.use_building_timezone is true
// (invite-visitor-form.component.ts), so an explicit visitors value overrides
// bookings and an unset visitors value falls back to it.
const SCENARIOS = [
    { label: 'bookings.use_building_timezone true gates the visitor secondary timezone label', bookings: true, visitors: null, shown: true },
    { label: 'bookings.use_building_timezone false gates the visitor secondary timezone label', bookings: false, visitors: null, shown: false },
    { label: 'visitors.use_building_timezone true gates the visitor secondary timezone label', bookings: false, visitors: true, shown: true },
    {
        label: 'visitors.use_building_timezone false overrides bookings.use_building_timezone true and hides the visitor secondary timezone label',
        bookings: true,
        visitors: false,
        shown: false,
    },
];

for (const scenario of SCENARIOS) {
    test(`${scenario.label}`, async ({ staffPage, audit }) => {
        await timezoneBuildings(staffPage, audit);
        const form = await visitor(staffPage, audit, {
            'app.bookings.use_building_timezone': scenario.bookings,
            'app.visitors.use_building_timezone': scenario.visitors,
        });
        expect(audit.fixtures['timezone buildings'] ?? 0).toBeGreaterThan(0);
        const field = form.root.locator('a-time-field[name="time"]');
        await expect(field.locator('button[time-field]')).toBeVisible();
        await expect
            .poll(() => effective(staffPage, 'app.bookings.use_building_timezone'))
            .toBe(scenario.bookings);
        await expect
            .poll(() => effective(staffPage, 'app.visitors.use_building_timezone'))
            .toBe(scenario.visitors);
        await expect.poll(() => field.evaluate((element) => {
            const c = (window as Debug).ng?.getComponent(element) as { timezone(): string } | undefined;
            return c?.timezone();
        })).toBe(scenario.shown ? 'Pacific/Honolulu' : '');
        const secondary = field.locator('button[time-field] div.truncate.text-xs');
        await expect(secondary).toHaveCount(scenario.shown ? 1 : 0);
        if (scenario.shown) await expect(secondary).toBeVisible();
        await untouchedVisitor(form);
    });
}
