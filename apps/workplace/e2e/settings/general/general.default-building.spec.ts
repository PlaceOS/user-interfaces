// Coverage: 1 unique setting, 2 scenarios.
// Setting: default_building (docs/settings/workplace.md).
// Consumer: libs/common/src/lib/org/organisation.service.ts.
// When the user has no saved building, the app selects `default_building`.
// The organisation is a browser-only three-building fixture (a decoy listed
// first, then A and B); no user or organisation record is changed.
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
const REGION = 'e2e-default-region';
const BUILDING_A = 'e2e-default-building-a';
const BUILDING_B = 'e2e-default-building-b';
/**
 * Listed first and in the same timezone, so the app's own fallbacks when
 * default_building is ignored (timezone match, then buildings[0];
 * OrganisationService._setDefaultBuilding) select it, never A or B.
 */
const BUILDING_FALLBACK = 'e2e-default-building-fallback';
const LEVEL_A = 'e2e-default-level-a';
const LEVEL_B = 'e2e-default-level-b';
const LEVEL_FALLBACK = 'e2e-default-level-fallback';
const NAMES = {
    [BUILDING_A]: 'E2E Default Building A',
    [BUILDING_B]: 'E2E Default Building B',
    [BUILDING_FALLBACK]: 'E2E Default Fallback Building',
};
const LEVELS = [
    {
        id: LEVEL_FALLBACK,
        parent_id: BUILDING_FALLBACK,
        name: 'E2E Level Fallback',
        display_name: 'E2E Level Fallback',
        tags: ['level'],
    },
    {
        id: LEVEL_A,
        parent_id: BUILDING_A,
        name: 'E2E Level A',
        display_name: 'E2E Level A',
        tags: ['level'],
    },
    {
        id: LEVEL_B,
        parent_id: BUILDING_B,
        name: 'E2E Level B',
        display_name: 'E2E Level B',
        tags: ['level'],
    },
];
const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': [],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.show_quick_links': false,
    'app.show_quick_book': false,
    'app.hide_landing_customise': true,
    'app.hide_landing_widgets': ['available_now', 'quick_actions', 'desk_week', 'favourites', 'colleagues', 'focus_timer', 'world_clock'],
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    'app.disable_building_select': false,
};

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

async function organisationFixture(page: Page) {
    await page.addInitScript(() => {
        for (const key of Object.keys(localStorage)) {
            if (
                key.startsWith('PLACEOS.org') ||
                ['PLACEOS.region', 'PLACEOS.building'].includes(key)
            ) {
                localStorage.removeItem(key);
            }
        }
        sessionStorage.removeItem('PLACEOS.building');
    });
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'region' &&
            url.searchParams.get('limit') === '200',
        () => [
            {
                id: REGION,
                name: 'E2E Default Region',
                tags: ['region'],
                timezone: 'UTC',
            },
        ],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'building' &&
            url.searchParams.get('parent_id') === REGION &&
            url.searchParams.get('limit') === '500',
        () => [
            {
                id: BUILDING_FALLBACK,
                parent_id: REGION,
                name: NAMES[BUILDING_FALLBACK],
                display_name: NAMES[BUILDING_FALLBACK],
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
            {
                id: BUILDING_A,
                parent_id: REGION,
                name: 'E2E Default Building A',
                display_name: 'E2E Default Building A',
                tags: ['building'],
                timezone: 'UTC',
                location: '0,0',
            },
            {
                id: BUILDING_B,
                parent_id: REGION,
                name: 'E2E Default Building B',
                display_name: 'E2E Default Building B',
                tags: ['building'],
                timezone: 'UTC',
                location: '40,40',
            },
        ],
    );
    await getOnly(
        page,
        (url) =>
            url.pathname === '/api/engine/v2/zones' &&
            url.searchParams.get('tags') === 'level' &&
            url.searchParams.get('limit') === '2500',
        () => LEVELS,
    );
    await getOnly(
        page,
        (url) =>
            /^\/api\/engine\/v2\/metadata\/[^/]+\/bulk$/.test(url.pathname) &&
            !!url.searchParams.get('parent_ids') &&
            url
                .searchParams.get('parent_ids')!
                .split(',')
                .every((id) => id.startsWith('e2e-default-')),
        (url) =>
            Object.fromEntries(
                url
                    .searchParams.get('parent_ids')!
                    .split(',')
                    .map((id) => [
                        id,
                        {
                            id,
                            name: decodeURIComponent(url.pathname.split('/')[5]),
                            details: {},
                        },
                    ]),
            ),
    );
    await getOnly(
        page,
        (url) =>
            /^\/api\/engine\/v2\/metadata\/e2e-default-[^/]+$/.test(
                url.pathname,
            ) &&
            !!url.searchParams.get('name'),
        (url) => {
            const name = url.searchParams.get('name')!;
            return {
                [name]: {
                    id: url.pathname.split('/')[5],
                    name,
                    details: name.endsWith('_booking_rules')
                        ? []
                        : {},
                },
            };
        },
    );
}

async function openUserControls(page: Page, default_building: string) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await organisationFixture(page);
    await stubBootstrap(page);
    const settings = { ...BASE, 'app.default_building': default_building };
    await useSettings(page, settings);
    await page.addInitScript(() =>
        localStorage.setItem('APP.locale', 'en-AU'),
    );
    await page.goto('/#/landing');
    await expect(page.locator('global-loading [loader]')).toHaveCount(0);
    await expect(page.locator('global-loading [initialisation-error]')).toHaveCount(0);
    for (const [key, value] of Object.entries(settings)) {
        await expect.poll(() => page.evaluate((name) =>
            (window as Window & { setting?: (key: string) => unknown }).setting?.(name), key),
        { message: 'effective setting ' + key }).toEqual(value);
    }

    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
    await page.locator('topbar button[name="user-controls"]').click();
    const controls = page.locator('user-controls-sidebar user-controls');
    await expect(controls).toBeVisible();
    return controls;
}

/** Only the expected building is shown; the other two names are absent. */
async function expectBuilding(controls: ReturnType<Page['locator']>, expected: string) {
    for (const [id, name] of Object.entries(NAMES)) {
        await expect(controls.getByText(name, { exact: true })).toHaveCount(
            id === expected ? 1 : 0,
        );
    }
}

test(
    'default_building selects building B when the user has no saved building',
    async ({ staffPage }) => {
        const controls = await openUserControls(staffPage, BUILDING_B);
        await expectBuilding(controls, BUILDING_B);
    },
);

test(
    'default_building selects building A when the user has no saved building',
    async ({ staffPage }) => {
        const controls = await openUserControls(staffPage, BUILDING_A);
        await expectBuilding(controls, BUILDING_A);
    },
);
