// Setting: parking.waitlist_week_start (app.parking.waitlist_week_start).
// Coverage: 1 unique setting, 2 scenarios.
// Purpose: distinguish the rendered Waitlisted and Tentative status of the same
// unsaved parking fixture across a configured weekly boundary (00:00 / 00:01).
// Source: libs/bookings/src/lib/bookings.fn.ts isInWaitlistWeek;
// apps/workplace/src/app/schedule/schedule-day-view.component.ts bookingStatus.
// Safety: pre-existing staff auth only; genuine staff identity GET is unchanged.
// Every other API response is a named browser GET fixture. No POST/PUT/PATCH/
// DELETE, driver messages, booking submission, seeding or backend cleanup.
// Shell sockets are blocked as a safety guard; no WebSocket data is simulated.
// Each scenario creates a fresh context/document and checks effective settings.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, AUTH_DIR, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/parking/parking.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type Settings, watchStaffId } from '../support/settings-harness';
type DebugWindow = Window & {
    ng?: { getComponent(element: Element): unknown };
    setting?: (key: string) => unknown;
};
type NetworkAudit = {
    api: string[];
    external: string[];
    websocket: string[];
    blockedControl: string[];
    appErrors: string[];
    closing: Promise<void>[];
};
const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const test = readOnlyTest.extend({
    staffToken: [async ({}, use, info) => {
        const token = JSON.parse(await readFile(join(AUTH_DIR, 'staff-' + info.parallelIndex + '.token.json'), 'utf8')) as { accessToken?: string };
        if (!token.accessToken) throw new Error('Valid pre-existing staff authentication is required; this spec never signs in');
        await use(token.accessToken);
    }, { scope: 'worker' }],
});
test.use({ readOnlyTimezone: 'Etc/UTC' });
const ORGANISATION = 'e2e-waitlist-boundary-org';
const REGION = 'e2e-waitlist-boundary-region';
const BUILDING = 'e2e-waitlist-boundary-building';

async function protectNetwork(page: Page): Promise<NetworkAudit> {
    const audit: NetworkAudit = {
        api: [], external: [], websocket: [], blockedControl: [],
        appErrors: [], closing: [],
    };
    page.on('pageerror', (error) =>
        audit.appErrors.push(error.name + ': ' + error.message),
    );
    page.on('console', (message) => {
        if (message.type() === 'error' && /^(ERROR\b|NG0\d+)/.test(message.text())) {
            audit.appErrors.push(message.text().slice(0, 500));
        }
    });
    await page.context().route('**/*', async (route) => {
        const request = route.request();
        const url = new URL(request.url());
        if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method()) ||
            ['/auth', '/login'].some((path) => url.pathname === path || url.pathname.startsWith(path + '/'))) {
            audit.api.push(request.method() + ' ' + url.pathname);
            return route.abort('blockedbyclient');
        }
        if (ORIGINS.has(url.origin)) {
            if (!url.pathname.startsWith('/api/')) return route.fallback();
            if (
                request.method() === 'GET' &&
                url.pathname === '/api/engine/v2/users/current'
            ) return route.fallback();
            audit.api.push(request.method() + ' ' + url.pathname);
            return route.abort('blockedbyclient');
        }
        if (request.method() === 'GET' && url.origin === 'https://fonts.googleapis.com' &&
            url.pathname === '/css2') {
            return route.fulfill({ status: 200, contentType: 'text/css', body: '' });
        }
        audit.external.push(request.method() + ' ' + url.origin + url.pathname);
        return route.abort('blockedbyclient');
    });
    await page.context().routeWebSocket('**/*', (socket) => {
        const url = new URL(socket.url());
        const app = new URL(APP_URL);
        const local = url.host === app.host &&
            url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
        if (local && url.pathname === '/' &&
            [...url.searchParams.keys()].join(',') === 'token') return;
        if (local && url.pathname === '/api/engine/v2/systems/control') {
            audit.blockedControl.push(url.pathname);
        } else {
            audit.websocket.push(url.pathname);
        }
        audit.closing.push(socket.close());
    });
    return audit;
}

async function expectSafe(audit: NetworkAudit) {
    await Promise.all(audit.closing);
    expect(audit.api, 'only synthetic GET API responses, except staff identity').toEqual([]);
    expect(audit.external, 'no external actions').toEqual([]);
    expect(audit.websocket, 'no live WebSocket bindings').toEqual([]);
    expect(audit.appErrors, 'no application errors').toEqual([]);
}

async function getOnly(
    page: Page,
    match: (url: URL) => boolean,
    body: (url: URL) => unknown,
) {
    await page.route(
        (url) => ORIGINS.has(url.origin) && match(url),
        async (route: Route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            await route.fulfill({ json: body(new URL(route.request().url())) });
        },
    );
}

const BOOKING_TITLE = 'Browser-only waitlist boundary';

async function openSchedule(page: Page, minute: number) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    const audit = await protectNetwork(page);
    const staff_id = watchStaffId(page);
    await page.setViewportSize({ width: 1440, height: 1100 });
    // An early time on the execution day keeps genuine token expiry in the
    // future without changing JWTs or the browser token cache. Timers continue.
    const now = new Date();
    now.setUTCHours(0, 0, 30, 0);
    await page.clock.setFixedTime(now);
    const start = new Date(now);
    start.setUTCHours(1, 0, 0, 0);
    const boundary = { day: now.getUTCDay(), hour: 0, minute };
    const settings: Settings = {
        ...READ_ONLY_SETTINGS,
        'app.features': ['parking'],
        'app.feature_groups': {},
        'app.chat.enabled': false,
        'app.global_search': false,
        'app.auto_release': { resources: [] },
        'app.schedule.event_sources': ['api'],
        'app.schedule.use_driver': false,
        'app.schedule.use_websocket': false,
        'app.use_region': false,
        'app.use_geolocation': false,
        'app.default_building': BUILDING,
        'app.bookings.use_building_timezone': false,
        'app.parking.use_building_timezone': false,
        'app.parking.waitlist_week_start': boundary,
    };
    await useSettings(page, settings);
    await page.addInitScript(() => {
        localStorage.setItem('APP.locale', 'en-AU');
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith('PLACEOS.org') || ['PLACEOS.region', 'PLACEOS.building'].includes(key)) localStorage.removeItem(key);
        }
        sessionStorage.removeItem('PLACEOS.building');
    });
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'org' &&
        url.searchParams.get('include_children_count') === 'true',
    () => [{
        id: ORGANISATION, name: 'Waitlist Organisation',
        display_name: 'Waitlist Organisation', tags: ['org'],
    }]);
    await getOnly(page, (url) =>
        /^\/api\/engine\/v2\/metadata\/(bindings|settings|workplace_app|booking_rules)\/bulk$/.test(url.pathname) &&
        !!url.searchParams.get('parent_ids'),
    (url) => Object.fromEntries(
        url.searchParams.get('parent_ids')!.split(',').map((id) => [id, { details: {} }]),
    ));
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'region' &&
        url.searchParams.get('limit') === '200',
    () => [{ id: REGION, name: 'Waitlist Region', tags: ['region'], timezone: 'UTC' }]);
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'building' &&
        url.searchParams.get('parent_id') === REGION &&
        url.searchParams.get('limit') === '500',
    () => [{
        id: BUILDING, parent_id: REGION, name: 'Waitlist Building',
        display_name: 'Waitlist Building', tags: ['building'],
        timezone: 'UTC', location: '0,0',
    }]);
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/zones' &&
        url.searchParams.get('tags') === 'level' &&
        url.searchParams.get('limit') === '2500',
    () => [{
        id: 'e2e-waitlist-boundary-level', parent_id: BUILDING,
        name: 'Waitlist Level', display_name: 'Waitlist Level', tags: ['level'],
    }]);
    await getOnly(page, (url) =>
        url.pathname === '/api/staff/v1/calendars' &&
        [...url.searchParams.keys()].length === 0, () => []);
    await getOnly(page, (url) =>
        url.pathname === '/api/staff/v1/events' &&
        url.searchParams.has('period_start') && url.searchParams.has('period_end'), () => []);
    await getOnly(page, (url) =>
        url.pathname === '/api/staff/v1/bookings' &&
        url.searchParams.get('type') === 'room', () => []);
    await getOnly(page, (url) =>
        url.pathname === '/api/staff/v1/bookings/booked', () => []);
    await getOnly(page, (url) =>
        /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
        url.searchParams.get('name') === 'room_booking_rules',
    () => ({ room_booking_rules: { name: 'room_booking_rules', details: [] } }));
    // App boot reads that have no settings-specific fixture: the authority,
    // the signed-in user's groups, the organisation/building space lists and
    // the user's own settings/contacts metadata.
    await getOnly(page, (url) => url.pathname === '/auth/authority', () => ({
        id: 'e2e-waitlist-authority',
        name: 'Browser-only authority',
        domain: new URL(APP_URL).host,
        version: '3.0.0',
        session: false,
        production: false,
        config: { org_zone: ORGANISATION },
    }));
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/groups/current', () => []);
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/systems' &&
        ((url.searchParams.get('zone_id') === ORGANISATION &&
            url.searchParams.get('limit') === '5000') ||
            (url.searchParams.get('zone_id') === BUILDING &&
                url.searchParams.get('limit') === '500' &&
                url.searchParams.get('signage') === 'false')),
    () => []);
    await page.route(
        (url) =>
            ORIGINS.has(url.origin) &&
            /^\/api\/engine\/v2\/metadata\/[^/]+$/.test(url.pathname) &&
            ['settings', 'contacts'].includes(url.searchParams.get('name') ?? ''),
        async (route: Route) => {
            const request = route.request();
            if (request.method() !== 'GET') return route.fallback();
            const id = decodeURIComponent(
                new URL(request.url()).pathname.split('/')[5],
            );
            if (!id || id !== (await staff_id)) return route.fallback();
            const name = new URL(request.url()).searchParams.get('name')!;
            await route.fulfill({
                json: {
                    [name]: {
                        name,
                        description: '',
                        details: name === 'contacts' ? [] : {},
                    },
                },
            });
        },
    );
    await getOnly(page, (url) =>
        url.pathname === '/api/engine/v2/metadata/' + ORGANISATION &&
        ['room_alerts', 'locale_en-AU', 'locale_en-US'].includes(
            url.searchParams.get('name') ?? '',
        ),
    (url) => {
        const name = url.searchParams.get('name')!;
        return { [name]: { name, description: '', details: {} } };
    });

    const categories = ['_CATERING_', '_DESKS_', '_PARKING_', '_LOCKERS_'];
    const names: Record<string, string[]> = {
        '_CATERING_': [], '_DESKS_': ['_DESKS_'],
        '_PARKING_': ['_PARKING_SPACES_', '_PARKING_USERS_', '_PARKING_FLEET_VEHICLES_'],
        '_LOCKERS_': ['_LOCKER_BANKS_', '_LOCKERS_'],
    };
    await getOnly(page, (url) => url.pathname === '/api/engine/v2/asset_categories' &&
        url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500',
    () => categories.map((name) => ({ id: 'e2e-waitlist-' + name, name, hidden: true })));
    await getOnly(page, (url) => url.pathname === '/api/engine/v2/asset_types' &&
        url.searchParams.get('limit') === '500' &&
        categories.some((name) => url.searchParams.get('category_id') === 'e2e-waitlist-' + name),
    (url) => {
        const category_id = url.searchParams.get('category_id')!;
        const name = categories.find((entry) => category_id === 'e2e-waitlist-' + entry)!;
        return names[name].map((type) => ({ id: 'e2e-waitlist-type-' + type, name: type, category_id, brand: 'PlaceOS' }));
    });
    await getOnly(page, (url) => url.pathname === '/api/engine/v2/assets' &&
        (url.searchParams.get('type_id') ?? '').startsWith('e2e-waitlist-type-'), () => []);
    let parking_reads = 0;
    await getOnly(page, (url) => url.pathname === '/api/staff/v1/bookings' &&
        url.searchParams.get('type') === 'parking' &&
        url.searchParams.has('include_checked_out'), () => {
        parking_reads++;
        return [{
            id: 9_510_001, booking_type: 'parking', type: 'parking',
            title: BOOKING_TITLE, asset_id: 'e2e-waitlist-bay',
            asset_name: 'Waitlist fixture bay', user_name: 'Waitlist fixture user',
            date: start.valueOf(), duration: 60, approved: false,
            rejected: false, deleted: false, all_day: false, checked_in: false,
            zones: [BUILDING], extension_data: {},
        }];
    });
    await page.goto('/#/your-bookings?view=day');
    await expect(page.locator('app-schedule')).toBeVisible();
    await expect(page.locator('schedule-day-view')).toBeVisible();
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((key) =>
            (window as DebugWindow).setting?.(key), key),
        { message: 'effective setting ' + key }).toEqual(value);
    }
    await expect.poll(() => parking_reads, { message: 'synthetic parking listing was consumed' }).toBeGreaterThan(0);
    return audit;
}

for (const scenario of [
    { minute: 0, status: 'Waitlisted' },
    { minute: 1, status: 'Tentative' },
]) {
    test('parking.waitlist_week_start 00:0' + scenario.minute + ' renders ' + scenario.status, async ({ staffPage }) => {
        const audit = await openSchedule(staffPage, scenario.minute);
        try {
            const card = staffPage.locator('schedule-day-view button').filter({ hasText: BOOKING_TITLE });
            await expect(card).toHaveCount(1);
            await expect(card).toBeVisible();
            const status = card.locator('div.flex-shrink-0.rounded-full');
            await expect(status).toHaveCount(1);
            await status.hover();
            const tooltip = staffPage.locator('.mat-mdc-tooltip-surface').filter({
                hasText: new RegExp('^' + scenario.status + '$'),
            });
            await expect(tooltip).toBeVisible();
            await expect(staffPage.locator('booking-details-modal')).toHaveCount(0);
            await expect(staffPage.locator('confirm-modal')).toHaveCount(0);
            await expect(staffPage).toHaveURL(/#\/your-bookings\?view=day$/);
        } finally {
            await expectSafe(audit);
        }
    });
}

