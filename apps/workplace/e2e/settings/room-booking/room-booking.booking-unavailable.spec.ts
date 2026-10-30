// Settings: events.booking_unavailable, events.no_standalone (docs/settings/workplace.md).
// Coverage: 2 unique settings, 2 scenarios (shared by both keys).
// Current MeetingFlow: meeting-flow-options confirmBooking.
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

const ROOM_REQUIRED = 'You need to select a room to make a booking';
const STANDALONE_TITLE = 'Make standalone booking';
const TITLE = 'E2E read-only booking-unavailable validation';

// Seeds a valid unsaved roomless meeting in this browser only and opens the
// options step through its supported query route (no confirmation, no save).
async function openOptions(page: Page, overrides: Settings, email: string) {
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
    await page.goto('/#/book/meeting/form?view=2');
    await expect(flow.options).toBeVisible();
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    await expectSettings(page, settings);
    return { flow, settings };
}

async function expectValidRoomlessForm(flow: MeetingFlow, email: string, unavailable: boolean) {
    await expect.poll(() => flow.options.evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as OptionsComponent | undefined;
        if (!component) return null;
        const value = component.form_value();
        return {
            valid: component.form().valid(), id: value.id, title: value.title,
            host: value.host, future: value.date > Date.now(), rooms: value.resources.length,
            no_standalone: component.no_standalone(), strict_capacity: component.strict_capacity_check(),
            booking_unavailable: component.booking_unavailable(), loading: component.loading(),
        };
    }), { message: 'a valid unsaved roomless form must reach the booking_unavailable branch' }).toEqual({
        valid: true, id: '', title: TITLE, host: email, future: true, rooms: 0,
        no_standalone: false, strict_capacity: false, booking_unavailable: unavailable, loading: false,
    });
}

async function expectCleanForm(page: Page, flow: MeetingFlow, settings: Settings, audit: MigrationAudit) {
    await expect(page.locator('confirm-modal')).toHaveCount(0);
    await expect(page.locator('event-link-modal')).toHaveCount(0);
    await expect(page).toHaveURL(/#\/book\/meeting\/form\?view=2$/);
    await expect(flow.options).toBeVisible();
    await expect(flow.success).toHaveCount(0);
    await expectSettings(page, settings);
    expect(audit.blocked_api_requests, 'no write or provider request may be attempted').toEqual([]);
}

readOnlyTest('room settings: booking_unavailable true opens the calendar-link dialog instead of the confirm screen',
    async ({ staffPage, migrationAudit }, info) => {
        const email = migrationStaffEmail(info.parallelIndex);
        const { flow, settings } = await openOptions(staffPage, {
            'app.events.booking_unavailable': true,
            // Checked before booking_unavailable in confirmBooking; pinned off so it cannot pre-empt.
            'app.events.no_standalone': false,
        }, email);
        await expectValidRoomlessForm(flow, email, true);
        await expect(flow.confirm).toBeEnabled();
        await flow.confirm.click();
        const links = staffPage.locator('event-link-modal');
        await expect(links).toHaveCount(1);
        await expect(links).toBeVisible();
        await expect(staffPage.locator('confirm-modal'), 'the standalone confirmation must not open').toHaveCount(0);
        await expect(staffPage.locator('mat-snack-bar-container').filter({ hasText: ROOM_REQUIRED })).toHaveCount(0);
        await expect(flow.success).toHaveCount(0);
        // Close with the icon only. The calendar links open external sites and
        // are never clicked; unactioned, the dialog closes without navigating.
        const close = links.locator(':scope > button[icon]');
        await expect(close).toHaveCount(1);
        await close.click();
        await expect(links).toHaveCount(0);
        await expectCleanForm(staffPage, flow, settings, migrationAudit);
    });

readOnlyTest('room settings: with no_standalone and booking_unavailable false, Confirm opens the ordinary confirm screen',
    async ({ staffPage, migrationAudit }, info) => {
        const email = migrationStaffEmail(info.parallelIndex);
        const { flow, settings } = await openOptions(staffPage, {
            'app.events.no_standalone': false,
            'app.events.booking_unavailable': false,
        }, email);
        await expectValidRoomlessForm(flow, email, false);
        await expect(flow.confirm).toBeEnabled();
        await flow.confirm.click();
        // Without a room, confirmBooking asks before postForm; that modal is the
        // ordinary confirm screen for a roomless meeting.
        const confirm = staffPage.locator('confirm-modal');
        await expect(confirm).toHaveCount(1);
        await expect(confirm.locator('header h2')).toHaveText(STANDALONE_TITLE);
        await expect(confirm.locator('button[name="accept"]'), 'the confirm screen must be reachable without a room').toBeVisible();
        await expect(staffPage.locator('mat-snack-bar-container').filter({ hasText: ROOM_REQUIRED })).toHaveCount(0);
        await expect(staffPage.locator('event-link-modal')).toHaveCount(0);
        // Never send: cancel instead of accept, so postForm is never reached.
        await confirm.locator('footer button[mat-dialog-close]').click();
        await expect(confirm).toHaveCount(0);
        await expectCleanForm(staffPage, flow, settings, migrationAudit);
    });
