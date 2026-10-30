// Settings: visitors.min_duration, visitors.max_duration,
// visitors.duration_step, visitors.custom_duration_options
// (docs/settings/workplace.md).
// Consumer: apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component.ts
// passed to libs/form-fields/src/lib/duration-field.component.ts.
// The visitor form's duration menu is read only. No field is submitted.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import type { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import { type Audit, type Settings, test, visitor } from '../support/settings-harness';

// The getters are visitors.x || bookings.x (visitor-flow-details.component.ts).
// These bookings.* fallbacks differ from every value a scenario expects. An
// override key wins even when null (SettingsService.get exact-key match); null
// custom options fall through to the bookings []. Scenario 4 sets its own.
const FALLBACKS: Settings = {
    'app.bookings.min_duration': 15,
    'app.bookings.max_duration': 480,
    'app.bookings.duration_step': 15,
    'app.bookings.custom_duration_options': [],
    'app.visitors.custom_duration_options': null,
};

test.use({ readOnlyTimezone: 'Etc/UTC' });

async function open(page: Page, audit: Audit, overrides: Settings) {
    return visitor(page, audit, { ...FALLBACKS, ...overrides });
}

/** Choose tomorrow at noon, so today's clock cannot bound the options. */
async function setTomorrow(form: InviteVisitorForm) {
    const tomorrow = new Date();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    tomorrow.setUTCHours(12, 0, 0, 0);
    await form.setDate(tomorrow.valueOf());
}

test(
    'visitors.min_duration bounds the duration menu and removes shorter options',
    async ({ staffPage, audit }) => {
        const form = await open(staffPage, audit, {
            'app.visitors.min_duration': 60,
            'app.visitors.max_duration': 180,
            'app.visitors.duration_step': 30,
        });
        await setTomorrow(form);
        const options = await form.durationOptions();
        expect(options).toContain(60);
        expect(options).not.toContain(30);
        expect(options).not.toContain(45);
        expect(Math.min(...options)).toBeGreaterThanOrEqual(60);
    },
);

test(
    'visitors.max_duration removes longer options from the duration menu',
    async ({ staffPage, audit }) => {
        const form = await open(staffPage, audit, {
            'app.visitors.min_duration': 30,
            'app.visitors.max_duration': 120,
            'app.visitors.duration_step': 30,
        });
        await setTomorrow(form);
        const options = await form.durationOptions();
        expect(options).toContain(120);
        expect(options).not.toContain(150);
        expect(options).not.toContain(180);
        expect(Math.max(...options)).toBeLessThanOrEqual(120);
    },
);

test(
    'visitors.duration_step changes the spacing of duration options',
    async ({ staffPage, audit }) => {
        const form = await open(staffPage, audit, {
            'app.visitors.min_duration': 45,
            'app.visitors.max_duration': 225,
            'app.visitors.duration_step': 45,
        });
        await setTomorrow(form);
        const options = await form.durationOptions();
        expect(options).toEqual(expect.arrayContaining([45, 90, 135, 180, 225]));
        expect(options).not.toContain(75);
    },
);

test(
    'visitors.custom_duration_options adds exact values outside the generated step',
    async ({ staffPage, audit }) => {
        const form = await open(staffPage, audit, {
            'app.visitors.min_duration': 30,
            'app.visitors.max_duration': 120,
            'app.visitors.duration_step': 30,
            'app.visitors.custom_duration_options': [45, 200],
        });
        await setTomorrow(form);
        const options = await form.durationOptions();
        expect(options).toContain(45);
        expect(options).toContain(200);
        expect(options).not.toContain(75);
    },
);
