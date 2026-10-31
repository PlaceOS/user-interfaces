// Setting: events.no_standalone (docs/settings/workplace.md). Current MeetingFlow.
// Coverage: 1 unique setting, 1 scenario.
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

const ROOM_REQUIRED = 'You need to select a room to make a booking';
const TITLE = 'E2E read-only room-required validation';

async function expectSettings(page: Page, settings: Settings) {
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((key) =>
            (window as DebugWindow).setting?.(key), key), {
            message: `effective setting ${key} must equal ${JSON.stringify(value)}`,
        }).toEqual(value);
    }
}

async function expectValidRoomlessForm(flow: MeetingFlow, email: string) {
    await expect.poll(() => flow.options.evaluate((element) => {
        const component = (window as DebugWindow).ng?.getComponent(element) as OptionsComponent | undefined;
        if (!component) return null;
        const value = component.form_value();
        return {
            valid: component.form().valid(), id: value.id, title: value.title,
            host: value.host, future: value.date > Date.now(), duration: value.duration,
            rooms: value.resources.length, all_day: value.all_day,
            recurrence: value.recurrence?.pattern ?? null,
            catering: value.catering.length, assets: value.assets.length,
            no_standalone: component.no_standalone(),
            strict_capacity: component.strict_capacity_check(),
            booking_unavailable: component.booking_unavailable(), loading: component.loading(),
        };
    }), { message: 'a valid unsaved roomless form must reach the no_standalone branch' }).toEqual({
        valid: true, id: '', title: TITLE, host: email, future: true, duration: 60,
        rooms: 0, all_day: false, recurrence: null, catering: 0, assets: 0,
        no_standalone: true, strict_capacity: false, booking_unavailable: false, loading: false,
    });
}

readOnlyTest('room settings: events.no_standalone true rejects a valid unsaved meeting without a room',
    async ({ staffPage, migrationAudit }, info) => {
        await staffPage.setViewportSize({ width: 1440, height: 1100 });
        await stubBootstrap(staffPage);
        await useSettings(staffPage, BASE_SETTINGS);
        const email = migrationStaffEmail(info.parallelIndex);
        await staffPage.addInitScript(({ email, title }) => {
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

        // The header refuses the roomless transition. Its supported query route
        // renders options directly without invoking a confirmation or submission.
        const flow = new MeetingFlow(staffPage);
        await staffPage.goto('/#/book/meeting/form?view=2');
        await expect(flow.options).toBeVisible();
        await expect(staffPage.locator('global-loading [loader]')).toHaveCount(0);
        await expect(staffPage.locator('global-loading [initialisation-error]')).toHaveCount(0);
        await expectSettings(staffPage, BASE_SETTINGS);
        await expectValidRoomlessForm(flow, email);
        await expect(flow.confirm).toHaveCount(1);
        await expect(flow.confirm).toBeEnabled();
        await expect(staffPage.locator('mat-dialog-container, mat-snack-bar-container')).toHaveCount(0);

        // Confirm can submit in this UI. Click once only after the real validity,
        // roomless state and rejection setting are established. The HTTP/WS
        // guards remain active and fail the test on any attempted backend write.
        await flow.confirm.click();
        const toast = staffPage.locator('mat-snack-bar-container');
        await expect(toast.getByText(ROOM_REQUIRED, { exact: true })).toBeVisible();
        await expect(toast).toHaveCount(1);
        await expect(flow.options).toBeVisible();
        await expect(flow.success).toHaveCount(0);
        await expect(staffPage.locator('mat-dialog-container, event-link-modal')).toHaveCount(0);
        await expect(staffPage).toHaveURL(/#\/book\/meeting\/form\?view=2$/);
        await expectValidRoomlessForm(flow, email);
        expect(migrationAudit.blocked_api_requests, 'no write or provider request may be attempted').toEqual([]);
    });
