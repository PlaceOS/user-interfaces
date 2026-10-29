// Coverage: 1 unique setting, 3 scenarios.
// Setting: feature_groups (docs/settings/workplace.md).
// Consumer: apps/workplace/src/app/landing-new/landing-features.ts.
// `app.features` is filtered by the current user's groups before the landing
// widgets decide what to show. A feature limited to a group the user is not in
// is treated as disabled.
import type { Page } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../../../../../e2e/support/env';
import { useSettings } from '../../../../../e2e/support/desk/desk.settings';
import { READ_ONLY_SETTINGS, readOnlyTest } from '../../local/wpa-settings-readonly-legacy.fixture';
import { type SafetyAudit, type Settings, stubBootstrap } from '../support/settings-harness';

// Test-local only: the shared fixture remains unchanged. Authentication is
// established by that fixture; these guards cover browser activity afterwards.
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


const E2E_GROUP = 'e2e-feature-group-that-no-staff-user-has';

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': ['desks'],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.show_quick_book': true,
    'app.show_quick_links': false,
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    // Only the Quick Actions card is needed for this check.
    'app.hide_landing_customise': true,
    'app.hide_colleagues': true,
    'app.hide_landing_widgets': [
        'available_now',
        'desk_week',
        'favourites',
        'colleagues',
        'focus_timer',
        'world_clock',
    ],
};

test.describe.configure({ retries: 0, timeout: 120_000 });

async function openLanding(page: Page, overrides: Settings) {
    assertLocalOnly(APP_URL, BACKEND_URL);
    await page.setViewportSize({ width: 1440, height: 1100 });
    let user_groups: Promise<string[]> | undefined;
    page.on('response', (response) => {
        const url = new URL(response.url());
        if (response.request().method() === 'GET' &&
            [new URL(APP_URL).origin, new URL(BACKEND_URL).origin].includes(url.origin) &&
            url.pathname === '/api/engine/v2/users/current') {
            user_groups = response.json().then((user: { groups?: string[] }) => user.groups ?? []);
        }
    });
    await stubBootstrap(page);
    const settings = { ...BASE, ...overrides };
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

    await expect(page.locator('landing-new')).toHaveCount(1);
    await expect.poll(() => !!user_groups, { message: 'the app must load the staff groups' }).toBe(true);
    expect(await user_groups!, 'the restricted group must not belong to this staff user').not.toContain(E2E_GROUP);
    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
}

test(
    'feature_groups without a restriction keeps the feature Quick Actions card',
    async ({ staffPage }) => {
        await openLanding(staffPage, { 'app.feature_groups': {} });
        const card = staffPage.locator('section[data-widget="quick_actions"]');
        await expect(card).toHaveCount(1);
        await expect(
            card.locator('button[name="auto-assign-desk"]'),
        ).toBeVisible();
    },
);

test(
    'feature_groups limiting desks to another group removes the Quick Actions card',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.feature_groups': { desks: [E2E_GROUP] },
        });
        await expect(
            staffPage.locator('section[data-widget="quick_actions"]'),
        ).toHaveCount(0);
        await expect(
            staffPage.locator('button[name="auto-assign-desk"]'),
        ).toHaveCount(0);
    },
);

// Review T30: a member of the restricting group keeps the feature.
// landingFeatures reads the groups only from the signed-in user that the app
// loads from GET users/current. The seeded staff user has no groups, so this
// scenario rewrites that one response in the browser: the real staff identity
// is fetched unchanged and only MEMBER_GROUP is appended to its `groups`
// (email, id, admin/support flags, permissions and every other field are kept).
// Nothing is written to the backend and no user is created.
const MEMBER_GROUP = 'e2e-feature-group-member';
type Identity = Record<string, unknown> & { groups?: string[] };
test(
    'feature_groups limiting desks to a group the user is in keeps the Quick Actions card',
    async ({ staffPage }) => {
        const origins = [new URL(APP_URL).origin, new URL(BACKEND_URL).origin];
        const served: { original: Identity; rewritten: Identity }[] = [];
        await staffPage.route((url) => origins.includes(url.origin) &&
            url.pathname === '/api/engine/v2/users/current', async (route) => {
            if (route.request().method() !== 'GET') return route.fallback();
            const response = await route.fetch({ maxRedirects: 0, maxRetries: 0 });
            if (!response.ok()) return route.fulfill({ response });
            const original = await response.json() as Identity;
            const rewritten = { ...original, groups: [...(original.groups ?? []), MEMBER_GROUP] };
            served.push({ original, rewritten });
            await route.fulfill({ response, json: rewritten });
        });
        await openLanding(staffPage, { 'app.feature_groups': { desks: [MEMBER_GROUP] } });
        // The app loaded the rewritten identity, and only `groups` differs.
        expect(served.length, 'users/current served through the group rewrite').toBeGreaterThan(0);
        const withoutGroups = (identity: Identity) => {
            const copy = { ...identity };
            delete copy.groups;
            return copy;
        };
        for (const { original, rewritten } of served) {
            expect(original.groups ?? [], 'the real staff user is not already in the group').not.toContain(MEMBER_GROUP);
            expect(withoutGroups(rewritten), 'identity fields other than groups are unchanged')
                .toEqual(withoutGroups(original));
            expect(rewritten.groups).toEqual([...(original.groups ?? []), MEMBER_GROUP]);
        }
        const card = staffPage.locator('section[data-widget="quick_actions"]');
        await expect(card).toHaveCount(1);
        await expect(card.locator('button[name="auto-assign-desk"]')).toBeVisible();
    },
);
