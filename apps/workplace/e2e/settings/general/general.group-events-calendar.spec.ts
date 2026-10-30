// Setting: group_events_calendar (docs/settings/workplace.md).
// Coverage: 1 unique setting, 2 scenarios.
// Consumers: GroupEventsStateService.calendar (the calendar system lookup) and
// GroupEventCardComponent.attendee_count (the featured card does not count the
// calendar as an attendee).
// All fixtures below are browser-only GET responses. No fixture is saved;
// every non-GET request still reaches the read-only guard.
import type { Page } from '@playwright/test';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import {
    APP_URL,
    assertLocalOnly,
    BACKEND_URL,
} from '../../../../../e2e/support/env';
import { expect } from '../../../../../e2e/support/fixtures';
import { READ_ONLY_SETTINGS } from '../../local/wpa-settings-readonly-legacy.fixture';
import {
    type Audit,
    type DebugWindow,
    getOnly,
    type Identity,
    test,
} from '../support/settings-harness';

const CALENDAR = 'settings-calendar-a@example.invalid';
const SYSTEM_ID = 'e2e-group-events-system';

async function preparePage(
    page: Page,
    overrides: Record<string, unknown>,
    audit: Audit,
) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    let identity: Promise<Identity> | undefined;
    page.on('response', (response) => {
        if (
            response.request().method() === 'GET' &&
            new URL(response.url()).pathname === '/api/engine/v2/users/current'
        )
            identity = response.json();
    });
    // BookingFormService.loadForm/newForm -> CalendarService.loadCalendars reads
    // the calendar provider (/api/staff/v1/calendars). Keep it local and empty.
    await getOnly(
        page,
        audit,
        'calendar provider list',
        (url) => url.pathname === '/api/staff/v1/calendars',
        () => [],
    );
    const settings = {
        ...READ_ONLY_SETTINGS,
        'app.chat.enabled': false,
        'app.use_region': false,
        'app.auto_release': { resources: [] },
        'app.schedule.event_sources': ['api'],
        // Keeps any schedule event listing on PlaceOS bookings, never staff-api /events.
        'app.events.use_bookings': true,
        ...overrides,
    };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-US'));
    return {
        user: async () => {
            if (!identity)
                throw new Error(
                    'the app must establish its existing staff identity before loading fixtures',
                );
            return identity;
        },
        ready: async () => {
            await expect(page.locator('global-loading [loader]')).toHaveCount(
                0,
            );
            for (const [key, value] of Object.entries(settings)) {
                await expect
                    .poll(() =>
                        page.evaluate(
                            (key) => (window as DebugWindow).setting?.(key),
                            key,
                        ),
                    )
                    .toEqual(value);
            }
        },
    };
}

test('group_events_calendar scopes the calendar lookup', async ({
    staffPage,
    audit,
}) => {
    const fixture = await preparePage(
        staffPage,
        {
            'app.features': ['group-events'],
            'app.group_events_calendar': CALENDAR,
        },
        audit,
    );
    const lookups: string[] = [];
    // GroupEventsStateService: GET /api/engine/v2/systems/with_emails?in=<calendar>.
    // No resolved system: queryEvents (staff-api /events, the provider) is never called.
    await getOnly(
        staffPage,
        audit,
        'calendar system lookup',
        (url) =>
            url.pathname === '/api/engine/v2/systems/with_emails' &&
            url.searchParams.has('in'),
        (url) => {
            lookups.push(url.searchParams.get('in') ?? '');
            return [];
        },
    );
    await staffPage.goto('/#/group-events');
    await fixture.ready();
    await expect(
        staffPage.locator('[group-events] group-events-sidebar'),
    ).toBeVisible();
    await expect.poll(() => lookups.length).toBeGreaterThan(0);
    expect([...new Set(lookups)]).toEqual([CALENDAR]);
    await expect(
        staffPage.locator(
            '[group-events] img[src="assets/icons/no-results.svg"]',
        ),
    ).toBeVisible();
    await expect(staffPage.locator('group-event-card')).toHaveCount(0);
});

test('group_events_calendar is not counted as an attendee on the featured group event card', async ({
    staffPage,
    audit,
}) => {
    const fixture = await preparePage(
        staffPage,
        {
            'app.features': ['group-events'],
            'app.group_events_calendar': CALENDAR,
        },
        audit,
    );
    await getOnly(
        staffPage,
        audit,
        'calendar system lookup',
        (url) =>
            url.pathname === '/api/engine/v2/systems/with_emails' &&
            url.searchParams.get('in') === CALENDAR,
        () => [
            {
                id: SYSTEM_ID,
                name: 'E2E Group Events',
                email: CALENDAR,
                zones: [],
            },
        ],
    );
    const start = Math.floor(Date.now() / 1000) + 3600;
    // The calendar is an attendee of its own events; two people attend as well.
    // GroupEventsComponent shows an event with extension_data.featured as the
    // featured card, the one that reads group_events_calendar.
    await getOnly(
        staffPage,
        audit,
        'group events',
        (url) =>
            url.pathname === '/api/staff/v1/events' &&
            url.searchParams.get('system_ids') === SYSTEM_ID,
        () => [
            {
                id: 'e2e-group-event',
                title: 'E2E Group Event',
                body: '',
                event_start: start,
                event_end: start + 3600,
                host: 'e2e-host@example.invalid',
                creator: 'e2e-host@example.invalid',
                permission: 'public',
                attendees: [
                    { email: CALENDAR, name: 'E2E Group Events' },
                    {
                        email: 'e2e-guest-a@example.invalid',
                        name: 'E2E Guest A',
                    },
                    {
                        email: 'e2e-guest-b@example.invalid',
                        name: 'E2E Guest B',
                    },
                ],
                resources: [],
                extension_data: { shared_event: true, featured: true },
            },
        ],
    );
    await staffPage.goto('/#/group-events');
    await fixture.ready();
    const card = staffPage.locator('group-event-card');
    await expect(card).toHaveCount(1);
    await expect(card).toContainText('E2E Group Event');
    await expect(card).toContainText('2 attending');
    expect(audit.fixtures['group events'] ?? 0).toBeGreaterThan(0);
});
