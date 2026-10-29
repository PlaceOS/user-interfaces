// Coverage: 4 unique settings, 8 scenarios (2 per setting).
// Settings: explore.hide_zones, explore.hide_devices, explore.hide_sensors,
// explore.disable (docs/settings/workplace.md).
// Consumer: libs/explore/src/lib/explore-map-view.component.ts
// and ExploreStateService.setOptions. Visibility scenarios do not
// click overlays; disable scenarios exercise their browser-local toggle state
// and check the map's applied options before and after the click.
import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type SafetyAudit, type Settings, stubBootstrap } from '../support/settings-harness';
const test = readOnlyTest.extend<{ safetyAudit: SafetyAudit }>({
    safetyAudit: [async ({ staffPage }, use, info) => {
        const context = staffPage.context();
        const origins = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
        const audit: SafetyAudit = { blocked_http: [], unexpected_ws: [] };
        const closing: Promise<void>[] = [];
        await context.route('**/*', async (route) => {
            const request = route.request();
            const url = new URL(request.url());
            const read = ['GET', 'HEAD', 'OPTIONS'].includes(request.method());
            const provider = /^\/api\/staff\/v1\/(calendars|events)(\/|$)/.test(url.pathname);
            if (read && !provider && (!url.pathname.startsWith('/api/') || origins.has(url.origin))) {
                return route.fallback();
            }
            audit.blocked_http.push(request.method() + ' ' + url.pathname);
            await route.abort('blockedbyclient');
        });
        await context.routeWebSocket('**/*', (socket) => {
            const url = new URL(socket.url());
            const app = new URL(APP_URL);
            const local = url.host === app.host &&
                url.protocol === (app.protocol === 'https:' ? 'wss:' : 'ws:');
            // Hold Vite's browser-local socket open to prevent reload polling.
            // No socket is ever connected to its server.
            if (local && url.pathname === '/' && [...url.searchParams.keys()].join(',') === 'token') return;
            if (!(local && url.pathname === '/api/engine/v2/systems/control')) {
                audit.unexpected_ws.push(url.origin + url.pathname);
            }
            closing.push(socket.close());
        });
        try {
            await use(audit);
        } finally {
            await context.close();
            await Promise.all(closing);
            await info.attach('settings-safety-audit', {
                body: Buffer.from(JSON.stringify(audit, null, 2)), contentType: 'application/json',
            });
            expect(audit, 'zero attempted HTTP writes/provider reads or unexpected WebSockets').toEqual({
                blocked_http: [], unexpected_ws: [],
            });
        }
    }, { auto: true, timeout: 30_000 }],
});


const ORIGINS = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
const CATEGORIES = [
    { id: 'e2e-explore-lockers', name: '_LOCKERS_', hidden: true },
    { id: 'e2e-explore-parking', name: '_PARKING_', hidden: true },
    { id: 'e2e-explore-desks', name: '_DESKS_', hidden: true },
    { id: 'e2e-explore-catering', name: '_CATERING_', hidden: true },
];
const TYPES: Record<string, { id: string; name: string }[]> = {
    'e2e-explore-lockers': [
        { id: 'e2e-explore-locker-banks', name: '_LOCKER_BANKS_' },
        { id: 'e2e-explore-lockers', name: '_LOCKERS_' },
    ],
    'e2e-explore-parking': [
        { id: 'e2e-explore-parking-spaces', name: '_PARKING_SPACES_' },
        { id: 'e2e-explore-parking-users', name: '_PARKING_USERS_' },
        { id: 'e2e-explore-parking-fleet', name: '_PARKING_FLEET_VEHICLES_' },
    ],
    'e2e-explore-desks': [{ id: 'e2e-explore-desks-type', name: '_DESKS_' }],
    'e2e-explore-catering': [],
};
const TYPE_IDS = Object.values(TYPES).flat().map((type) => type.id);
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['explore'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.use_region': false,
    'app.desks.use_assets': false,
    'app.explore.show_legend': false,
    'app.explore.legend': [],
    'app.explore.disable': [],
    'app.maps_people.keys': {},
    'app.maps_people.use_zones': [],
    'app.explore.cisco_maps.enabled': false,
};

test.use({ readOnlyTimezone: 'Etc/UTC' });

test.describe.configure({ retries: 0, timeout: 120_000 });

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

async function openExplore(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_categories' &&
            url.searchParams.get('hidden') === 'true' &&
            url.searchParams.get('limit') === '500',
        () => CATEGORIES,
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('limit') === '500' &&
            Object.hasOwn(
                TYPES,
                url.searchParams.get('category_id') ?? '',
            ),
        (url) => {
            const category_id = url.searchParams.get('category_id')!;
            return TYPES[category_id].map((type) => ({
                ...type,
                brand: 'PlaceOS',
                category_id,
            }));
        },
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/assets' &&
            TYPE_IDS.includes(url.searchParams.get('type_id') ?? ''),
        () => [],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/systems' &&
            [...url.searchParams.keys()].sort().join(',') === 'limit,zone_id' &&
            url.searchParams.get('limit') === '50',
        () => [],
    );
    await getOnly(
        page,
        (url) => url.pathname === '/api/staff/v1/calendars',
        () => [],
    );
    await stubBootstrap(page);
    const settings = { ...BASE, ...overrides };
    await useSettings(page, settings);
    await page.addInitScript(() =>
        localStorage.setItem('APP.locale', 'en-AU'),
    );
    await page.goto('/#/explore');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((name) =>
            (window as Window & { setting?: (key: string) => unknown }).setting?.(name), key),
        { message: 'effective setting ' + key }).toEqual(value);
    }

    await expect(page.locator('explore-map-view')).toHaveCount(1);
    return page.locator('explore-map-view');
}

const overlay = (page: Page, label: string) =>
    page
        .locator('explore-map-view settings-toggle')
        .filter({ hasText: label });

/**
 * Whether the Explore map's applied options disable `devices`
 * (ExploreStateService options, which merge app.explore.disable on reset and
 * on every option change). Read from the map view, not inferred from the toggle
 * colour. Fails closed if the signal is unavailable.
 */
function devicesDisabled(page: Page) {
    return page.locator('explore-map-view').evaluate((element) => {
        const view = (window as Window & { ng?: { getComponent(e: Element): unknown } }).ng
            ?.getComponent(element) as { options?: () => { disable?: string[] } } | undefined;
        if (!view?.options) throw new Error('explore map options are unavailable');
        return !!view.options().disable?.includes('devices');
    });
}

test(
    'explore.hide_zones false shows the Areas overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': false,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Areas')).toHaveCount(1);
        await expect(overlay(staffPage, 'Areas')).toBeVisible();
    },
);

test(
    'explore.hide_zones true removes the Areas overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Areas')).toHaveCount(0);
    },
);

test(
    'explore.hide_devices false shows the Show Devices overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': false,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Show Devices')).toHaveCount(1);
        await expect(overlay(staffPage, 'Show Devices')).toBeVisible();
    },
);

test(
    'explore.hide_devices true removes the Show Devices overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Show Devices')).toHaveCount(0);
    },
);

test(
    'explore.hide_sensors false shows the Show Sensors overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': false,
        });
        await expect(overlay(staffPage, 'Show Sensors')).toHaveCount(1);
        await expect(overlay(staffPage, 'Show Sensors')).toBeVisible();
    },
);

test(
    'explore.hide_sensors true removes the Show Sensors overlay toggle',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': true,
            'app.explore.hide_sensors': true,
        });
        await expect(overlay(staffPage, 'Show Sensors')).toHaveCount(0);
    },
);

test(
    'explore.disable devices keeps the Show Devices toggle off after a click',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': false,
            'app.explore.hide_sensors': true,
            'app.explore.disable': ['devices'],
        });
        const toggle = overlay(staffPage, 'Show Devices').locator('button').first();
        await expect(toggle).toHaveCount(1);
        // Click only once the map has applied the disabled state.
        await expect
            .poll(() => devicesDisabled(staffPage), { message: 'devices disabled before the click' })
            .toBe(true);
        await expect(toggle).toHaveClass(/border-base-300/);
        await toggle.click();
        // The click cannot enable devices: the applied state and the toggle both stay off.
        await expect
            .poll(() => devicesDisabled(staffPage), { message: 'devices still disabled after the click' })
            .toBe(true);
        await expect(toggle).toHaveClass(/border-base-300/);
    },
);

test(
    'explore.disable without devices allows the Show Devices toggle to turn on',
    async ({ staffPage }) => {
        await openExplore(staffPage, {
            'app.explore.hide_zones': true,
            'app.explore.hide_devices': false,
            'app.explore.hide_sensors': true,
            'app.explore.disable': [],
        });
        const toggle = overlay(staffPage, 'Show Devices').locator('button').first();
        await expect(toggle).toHaveCount(1);
        // Devices start disabled (ExploreStateService.reset); the same click
        // enables them here, which proves the click is handled.
        await expect
            .poll(() => devicesDisabled(staffPage), { message: 'devices disabled before the click' })
            .toBe(true);
        await expect(toggle).toHaveClass(/border-base-300/);
        await toggle.click();
        await expect
            .poll(() => devicesDisabled(staffPage), { message: 'devices enabled after the click' })
            .toBe(false);
        await expect(toggle).toHaveClass(/border-info/);
    },
);
