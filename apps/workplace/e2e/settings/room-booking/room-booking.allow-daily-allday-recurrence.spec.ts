// events.allow_daily_allday_recurrence on the MeetingFlow details step (All Day, recurrence) and options step (confirmBooking).
// Covered active keys: events.allow_daily_allday_recurrence
// Form state and incidental bootstrap fixtures exist only in this browser.
import type { Page } from '@playwright/test';
import { staffEmail as migrationStaffEmail } from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { MeetingFlow } from '../../../../../e2e/support/room/meeting-flow.page';
import { ROOM_BOOKINGS_MODE } from '../../../../../e2e/support/room/room.settings';
import { useSettings } from '../../../../../e2e/support/room/room.settings';
import { READ_ONLY_SETTINGS, readOnlyTest as readOnlyBase } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type DebugWindow,
    type MigrationAudit,
    migrationAuditFor,
    type Settings,
    stubBootstrap,
} from '../support/settings-harness';

const readOnlyTest = readOnlyBase.extend<{ migrationAudit: MigrationAudit }>(
    migrationAuditFor({ guard: 'strict', register: false }),
);
// Keep the shared staff-only context and API guard; use UTC for the local seed.
readOnlyTest.use({ storageState: undefined, readOnlyTimezone: 'Etc/UTC' });


interface OptionsComponent {
    form(): { valid(): boolean };
    form_value(): {
        id: string;
        title: string;
        host: string;
        date: number;
        duration: number;
        resources: unknown[];
        all_day: boolean;
        recurrence: { pattern?: string } | null;
        catering: unknown[];
        assets: unknown[];
    };
    no_standalone(): boolean;
    strict_capacity_check(): boolean;
    booking_unavailable(): boolean;
    loading(): boolean;
}

const BASE_SETTINGS: Settings = {
    // Prevent unrelated preference writes and chat startup.
    'app.chat.enabled': false,
    ...READ_ONLY_SETTINGS,
    'app.features': ['spaces'],
    'app.feature_groups': {},
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.global_search': false,
    'app.use_region': false,
    'app.use_geolocation': false,
    // Keeps theme initialisation from saving a user preference.
    'app.allow_dark_mode': false,
    // PlaceOS bookings path; no calendar directory reads (room.settings.ts).
    ...ROOM_BOOKINGS_MODE,
    'app.catering.backend': 'native',
    'app.catering_provider': '',
    // Pinned so only the key under test changes the form layout.
    'app.events.has_assets': false,
    'app.events.allow_multiday': false,
    'app.events.multiple_spaces': false,
    'app.events.use_building_timezone': false,
    'app.events.allow_visibility': false,
    'app.events.can_book_for_anyone': false,
    'app.events.can_book_for_others': false,
    'app.events.allow_online_meetings': false,
    'app.events.hide_attendees': false,
    'app.events.hide_notes': false,
    'app.events.no_standalone': true,
    'app.events.booking_unavailable': false,
    'app.events.strict_capacity_check': false,
    'app.events.allow_all_day': false,
    'app.events.allow_recurrence': false,
    'app.events.bookable_hours': null,
    'app.events.default_duration': 60,
    'app.events.min_duration': 30,
    'app.events.max_duration': 180,
    'app.events.duration_step': 30,
    'app.events.custom_duration_options': [],
};


async function expectSettings(page: Page, settings: Settings) {
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((key) =>
            (window as DebugWindow).setting?.(key), key), {
            message: `effective setting ${key} must equal ${JSON.stringify(value)}`,
        }).toEqual(value);
    }
}

const DAILY_RECURR_ERROR = 'Daily recurrence for all day meetings are not allowed.';
const STANDALONE_TITLE = 'Make standalone booking';
const TITLE = 'E2E read-only daily all-day recurrence validation';

// Seeds a valid unsaved roomless meeting for tomorrow in this browser only and
// opens the details step, where All Day and recurrence are edited locally.
async function openDetails(page: Page, overrides: Settings, email: string) {
    const settings = { ...BASE_SETTINGS, ...overrides };
    await page.setViewportSize({ width: 1440, height: 1100 });
    await stubBootstrap(page, { prefix: 'no-standalone', limit: false, meeting: true });
    await useSettings(page, settings);
    await page.addInitScript(({ email, title }) => {
        const date = new Date();
        date.setUTCDate(date.getUTCDate() + 1);
        date.setUTCHours(10, 0, 0, 0);
        localStorage.setItem('APP.locale', 'en-AU');
        sessionStorage.removeItem('PLACEOS.event');
        sessionStorage.setItem('PLACEOS.event_form', JSON.stringify({
            id: '', title, host: email, organiser: { email },
            date: date.valueOf(), date_end: date.valueOf() + 3_600_000, duration: 60,
            all_day: false, recurring: false, recurrence: null,
            resources: [], attendees: [], assets: [], catering: [], meeting_provider: null,
        }));
    }, { email, title: TITLE });
    const flow = new MeetingFlow(page);
    await flow.open();
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    await expectSettings(page, settings);
    return { flow, settings };
}

async function dailyAllDayState(flow: MeetingFlow) {
    return flow.options.evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as OptionsComponent | undefined;
        if (!component) return null;
        const value = component.form_value();
        const recurrence = value.recurrence as { pattern?: string; _pattern?: string } | null;
        return {
            valid: component.form().valid(), id: value.id, title: value.title,
            future: value.date > Date.now(), rooms: value.resources.length,
            all_day: value.all_day, pattern: recurrence?.pattern ?? null, chosen: recurrence?._pattern ?? null,
            no_standalone: component.no_standalone(), booking_unavailable: component.booking_unavailable(),
            strict_capacity: component.strict_capacity_check(), loading: component.loading(),
        };
    });
}

for (const enabled of [false, true]) {
    readOnlyTest(`events.allow_daily_allday_recurrence ${enabled} controls confirmation of an all-day daily meeting`,
        async ({ staffPage, migrationAudit }, info) => {
            const email = migrationStaffEmail(info.parallelIndex);
            const { flow, settings } = await openDetails(staffPage, {
                'app.events.allow_daily_allday_recurrence': enabled,
                'app.events.allow_recurrence': true,
                'app.events.allow_all_day': true,
                'app.events.all_day_period': { start: 9, end: 17 },
                // Later confirmBooking branches; pinned off so only the key under test decides.
                'app.events.no_standalone': false,
                'app.events.booking_unavailable': false,
            }, email);
            await flow.setAllDay(true);
            await expect(flow.recurrence).toBeVisible();
            await flow.recurrence.click();
            await staffPage.getByRole('option', { name: 'Daily', exact: true }).click();
            await expect(flow.recurrence).toContainText('Daily');
            // The header refuses the roomless transition; the supported query
            // route renders the options step without confirming or saving.
            await staffPage.goto('/#/book/meeting/form?view=2');
            await expect(flow.options).toBeVisible();
            // _pattern distinguishes a real daily choice from 'none' (which also
            // stores pattern 'daily' in recurrence.ts).
            await expect.poll(() => dailyAllDayState(flow), {
                message: 'a valid unsaved roomless all-day daily form must reach the recurrence gate',
            }).toEqual({
                valid: true, id: '', title: TITLE, future: true, rooms: 0,
                all_day: true, pattern: 'daily', chosen: 'daily',
                no_standalone: false, booking_unavailable: false, strict_capacity: false, loading: false,
            });
            await expect(flow.confirm).toBeEnabled();
            await flow.confirm.click();
            const toast = staffPage.locator('mat-snack-bar-container');
            const standalone = staffPage.locator('confirm-modal');
            if (enabled) {
                // Past the recurrence gate, a roomless meeting asks before postForm.
                await expect(standalone).toHaveCount(1);
                await expect(standalone.locator('header h2')).toHaveText(STANDALONE_TITLE);
                await expect(toast.filter({ hasText: DAILY_RECURR_ERROR })).toHaveCount(0);
                // Never send: cancel instead of accept.
                await standalone.locator('footer button[mat-dialog-close]').click();
                await expect(standalone).toHaveCount(0);
            } else {
                await expect(toast.getByText(DAILY_RECURR_ERROR, { exact: true })).toBeVisible();
                await expect(standalone).toHaveCount(0);
            }
            await expect(staffPage.locator('event-link-modal')).toHaveCount(0);
            await expect(flow.success).toHaveCount(0);
            await expect(staffPage).toHaveURL(/#\/book\/meeting\/form\?view=2$/);
            await expectSettings(staffPage, settings);
            expect(migrationAudit.blocked_api_requests, 'no write or provider request may be attempted').toEqual([]);
        });
}

readOnlyTest("events.allow_daily_allday_recurrence false allows an all-day meeting set to Daily and back to Doesn't repeat",
    async ({ staffPage, migrationAudit }, info) => {
        const email = migrationStaffEmail(info.parallelIndex);
        const { flow, settings } = await openDetails(staffPage, {
            'app.events.allow_daily_allday_recurrence': false,
            'app.events.allow_recurrence': true,
            'app.events.allow_all_day': true,
            'app.events.all_day_period': { start: 9, end: 17 },
            'app.events.no_standalone': false,
            'app.events.booking_unavailable': false,
        }, email);
        await flow.setAllDay(true);
        await expect(flow.recurrence).toBeVisible();
        await flow.recurrence.click();
        await staffPage.getByRole('option', { name: 'Daily', exact: true }).click();
        await expect(flow.recurrence).toContainText('Daily');
        await flow.recurrence.click();
        await staffPage.getByRole('option', { name: "Doesn't repeat", exact: true }).click();
        await expect(flow.recurrence).toContainText("Doesn't repeat");
        await staffPage.goto('/#/book/meeting/form?view=2');
        await expect(flow.options).toBeVisible();
        // "Doesn't repeat" is stored as pattern 'daily' with _pattern 'none' (recurrence.ts).
        await expect.poll(() => dailyAllDayState(flow), {
            message: 'a valid unsaved roomless all-day form with no recurrence must reach the recurrence gate',
        }).toEqual({
            valid: true, id: '', title: TITLE, future: true, rooms: 0,
            all_day: true, pattern: 'daily', chosen: 'none',
            no_standalone: false, booking_unavailable: false, strict_capacity: false, loading: false,
        });
        await expect(flow.confirm).toBeEnabled();
        await flow.confirm.click();
        const standalone = staffPage.locator('confirm-modal');
        // Past the recurrence gate, a roomless meeting asks before postForm.
        await expect(standalone).toHaveCount(1);
        await expect(standalone.locator('header h2')).toHaveText(STANDALONE_TITLE);
        await expect(staffPage.locator('mat-snack-bar-container').filter({ hasText: DAILY_RECURR_ERROR })).toHaveCount(0);
        // Never send: cancel instead of accept.
        await standalone.locator('footer button[mat-dialog-close]').click();
        await expect(standalone).toHaveCount(0);
        await expect(staffPage.locator('event-link-modal')).toHaveCount(0);
        await expect(flow.success).toHaveCount(0);
        await expect(staffPage).toHaveURL(/#\/book\/meeting\/form\?view=2$/);
        await expectSettings(staffPage, settings);
        expect(migrationAudit.blocked_api_requests, 'no write or provider request may be attempted').toEqual([]);
    });
