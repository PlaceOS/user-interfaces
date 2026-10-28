// Coverage: 1 unique setting, 2 scenarios.
// Setting: help (docs/settings/workplace.md).
// Consumer: libs/components/src/lib/help-tooltip.component.ts and
// libs/components/src/lib/user-controls.component.ts.
// The user-controls help button is enabled by the `help` feature; its tooltip
// renders one link per configured tile. Links are only inspected, never opened.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';

type Settings = Record<string, unknown>;

// Test-local only: the shared fixture remains unchanged. Authentication is
// established by that fixture; these guards cover browser activity afterwards.
type SafetyAudit = { blocked_http: string[]; unexpected_ws: string[] };
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

// Browser-only GET fixtures prevent unrelated module bootstrap from trying to
// create hidden categories/types. No record is created in PlaceOS.
async function stubBootstrap(page: Page) {
    const origins = new Set([new URL(APP_URL).origin, new URL(BACKEND_URL).origin]);
    const types: Record<string, string[]> = {
        catering: [], desks: ['_DESKS_'],
        parking: ['_PARKING_SPACES_', '_PARKING_USERS_', '_PARKING_FLEET_VEHICLES_'],
        lockers: ['_LOCKER_BANKS_', '_LOCKERS_'],
    };
    const get = async (match: (url: URL) => boolean, body: unknown) => {
        await page.route((url) => origins.has(url.origin) && match(url), async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            await route.fulfill({ json: body });
        });
    };
    await get((url) => url.pathname === '/api/engine/v2/asset_categories' &&
        url.searchParams.get('hidden') === 'true' && url.searchParams.get('limit') === '500',
    Object.keys(types).map((name) => ({ id: 'landing-readonly-' + name,
        name: '_' + name.toUpperCase() + '_', hidden: true })));
    for (const [category, names] of Object.entries(types)) {
        await get((url) => url.pathname === '/api/engine/v2/asset_types' &&
            url.searchParams.get('category_id') === 'landing-readonly-' + category &&
            url.searchParams.get('limit') === '500', names.map((name) => ({
                id: 'landing-readonly-type-' + name, name,
                category_id: 'landing-readonly-' + category, brand: 'PlaceOS',
            })));
    }
    await get((url) => url.pathname === '/api/engine/v2/assets' &&
        (url.searchParams.get('type_id') ?? '').startsWith('landing-readonly-type-'), []);
    await get((url) => url.pathname === '/api/staff/v1/calendars' &&
        [...url.searchParams.keys()].length === 0, []);
}




const HELP_LINK = 'https://example.invalid/e2e-workplace-help';

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['help'],
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
};

test.describe.configure({ retries: 0, timeout: 120_000 });

async function openHelp(page: Page, help: unknown[]) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    await stubBootstrap(page);
    const settings = { ...BASE, 'app.help': help };
    await useSettings(page, settings);
    await page.addInitScript(() => localStorage.setItem('APP.locale', 'en-AU'));
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
    const helpButton = controls.locator('button').filter({
        has: page.locator('icon', { hasText: /^\s*help\s*$/ }),
    });
    await expect(helpButton).toHaveCount(1);
    await helpButton.click();
    await expect(page.locator('help-tooltip')).toBeVisible();
    return page.locator('help-tooltip');
}

test(
    'help renders a configured tile link',
    async ({ staffPage }) => {
        const tooltip = await openHelp(staffPage, [
            {
                name: 'E2E Workplace Help',
                link: HELP_LINK,
                // ApplicationIcon object, as help-tooltip binds [icon]="tile.icon".
                icon: { type: 'icon', class: 'material-symbols-rounded', content: 'help' },
            },
        ]);
        const link = tooltip.locator(`a[href="${HELP_LINK}"]`);
        await expect(link).toHaveCount(1);
        await expect(link).toContainText('E2E Workplace Help');
        await expect(link.locator('icon')).toHaveText(/^\s*help\s*$/);
    },
);

test(
    'help [] leaves the help tooltip without link tiles',
    async ({ staffPage }) => {
        const tooltip = await openHelp(staffPage, []);
        await expect(tooltip.locator('a')).toHaveCount(0);
    },
);
