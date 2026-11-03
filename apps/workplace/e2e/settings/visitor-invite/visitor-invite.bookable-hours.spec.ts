// Setting: visitors.bookable_hours, falling back to bookings.bookable_hours
// (docs/settings/workplace.md).
// Consumer: apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component.ts
// (effective_bookable_hours = visitors ?? bookings) passed to
// libs/form-fields/src/lib/time-field.component.ts, whose last start is the
// range end less effective_min_duration. No field is submitted and the menu is
// closed again.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import { type Audit, type Settings, test, visitor } from '../support/settings-harness';

test.describe.configure({ timeout: 120_000 });

test.use({ readOnlyTimezone: 'Etc/UTC' });

// effective_min_duration is min(visitors.min_duration, ...custom options);
// the custom options are empty at both levels.
const DURATIONS: Settings = {
    'app.visitors.min_duration': 60,
    'app.visitors.max_duration': 180,
    'app.visitors.duration_step': 30,
    'app.visitors.custom_duration_options': [],
    'app.bookings.custom_duration_options': [],
};

const toMinutes = (value: string) => {
    const [hours, minutes] = value.split(':').map(Number);
    return hours * 60 + minutes;
};

/** Tomorrow's start-time options in minutes after midnight. */
async function startTimes(form: InviteVisitorForm) {
    const tomorrow = new Date();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    tomorrow.setUTCHours(12, 0, 0, 0);
    await form.setDate(tomorrow.valueOf());
    return (await form.startTimeOptions()).map(toMinutes);
}

async function open(page: Page, audit: Audit, overrides: Settings) {
    return visitor(page, audit, { ...DURATIONS, ...overrides });
}

test('visitors.bookable_hours 10-16 overrides bookings.bookable_hours 8-12 for the start times',
    async ({ staffPage, audit }) => {
        const form = await open(staffPage, audit, {
            'app.visitors.bookable_hours': { start: 10, end: 16 },
            'app.bookings.bookable_hours': { start: 8, end: 12 },
        });
        const options = await startTimes(form);
        expect(options).toContain(10 * 60);
        expect(options).toContain(15 * 60);
        expect(Math.min(...options)).toBe(10 * 60);
        expect(Math.max(...options)).toBe(15 * 60);
        expect(options).not.toContain(9 * 60 + 45);
        expect(options).not.toContain(15 * 60 + 15);
    });

test('visitors.bookable_hours unset falls back to bookings.bookable_hours 8-12', async ({ staffPage, audit }) => {
    const form = await open(staffPage, audit, {
        'app.visitors.bookable_hours': null,
        'app.bookings.bookable_hours': { start: 8, end: 12 },
    });
    const options = await startTimes(form);
    expect(Math.min(...options)).toBe(8 * 60);
    expect(Math.max(...options)).toBe(11 * 60);
});

test('visitors.bookable_hours and bookings.bookable_hours unset offer the whole day', async ({ staffPage, audit }) => {
    const form = await open(staffPage, audit, {
        'app.visitors.bookable_hours': null,
        'app.bookings.bookable_hours': null,
    });
    const options = await startTimes(form);
    // time-field.component.ts also lists the field's current time when it is
    // off the 15-minute step; only the regular options define the window.
    const stepped = options.filter((time) => time % 15 === 0);
    expect(Math.min(...stepped)).toBe(0);
    expect(Math.max(...stepped)).toBe(23 * 60 + 45);
});
