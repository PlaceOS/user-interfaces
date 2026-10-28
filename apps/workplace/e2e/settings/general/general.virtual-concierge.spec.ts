// Coverage: 5 unique settings, 9 scenarios.
// Settings: virtual_concierge.url, virtual_concierge_url (legacy),
// virtual_concierge.icon, virtual_concierge.display, virtual_concierge.side.
// Consumer: apps/workplace/src/app/components/virtual-concierge-button.component.ts.
// The button only exists when a URL is configured. Clicking it opens the
// configured embed shape; no application data is changed.
import type { Page } from '@playwright/test';
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


const EMBED_URL =
    'data:text/html;charset=utf-8,%3Ctitle%3EE2E%20Virtual%20Concierge%3C/title%3E';
const ICON_URL =
    'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%3E%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%23123456%22%2F%3E%3C%2Fsvg%3E';

const BASE: Settings = {
    ...READ_ONLY_SETTINGS,
    'app.features': [],
    'app.chat.enabled': false,
    'app.global_search': false,
    'app.show_quick_links': false,
    'app.show_quick_book': false,
    'app.use_region': false,
    'app.use_geolocation': false,
    'app.allow_dark_mode': false,
    'app.auto_release': { resources: [] },
    'app.schedule.event_sources': ['api'],
    'app.events.use_bookings': true,
    'app.feature_groups': {},
    'app.virtual_concierge.url': '',
    'app.virtual_concierge_url': '',
    'app.virtual_concierge.icon': '',
    'app.virtual_concierge.display': 'fullscreen',
    'app.virtual_concierge.side': 'left',
    'app.hide_landing_customise': true,
    'app.hide_landing_widgets': [
        'available_now',
        'quick_actions',
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
    await expect(
        page.locator('topbar button[name="user-controls"]'),
    ).toBeVisible();
}

const button = (page: Page) => page.locator('virtual-concierge-button button');

/** Sub-pixel layout rounding allowed when comparing pane edges, in px */
const EDGE_TOLERANCE = 2;

/**
 * Read-only: the sidebar pane touches the requested viewport edge and not the
 * other one. VirtualConciergeButtonComponent opens it 28rem wide with
 * position { left: '0' } or { right: '0' }. The width is the document's
 * client width, the area that the fixed overlay container fills.
 */
async function expectPaneAt(page: Page, side: 'left' | 'right') {
    const pane = page.locator(`.cdk-overlay-pane.sidebar-embed-dialog-${side}`);
    const gaps = async () => {
        const box = await pane.boundingBox();
        if (!box) return null;
        const width = await page.evaluate(() => document.documentElement.clientWidth);
        const left = box.x;
        const right = width - (box.x + box.width);
        return side === 'left' ? { near: left, far: right } : { near: right, far: left };
    };
    await expect.poll(async () => Math.abs((await gaps())?.near ?? Infinity),
        { message: 'pane gap to the ' + side + ' edge' }).toBeLessThanOrEqual(EDGE_TOLERANCE);
    const settled = await gaps();
    expect(settled?.far ?? 0, 'pane does not also reach the other edge').toBeGreaterThan(EDGE_TOLERANCE);
}

async function closeEmbed(page: Page, selector: string) {
    await page.locator(`${selector} button[mat-dialog-close]`).click();
    await expect(page.locator(selector)).toHaveCount(0);
}

test(
    'virtual_concierge.url empty hides the concierge button',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.virtual_concierge.url': '',
            'app.virtual_concierge_url': '',
        });
        await expect(button(staffPage)).toHaveCount(0);
    },
);

test(
    'virtual_concierge.url configured shows the concierge button',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.virtual_concierge.url': EMBED_URL,
        });
        await expect(button(staffPage)).toHaveCount(1);
        await expect(button(staffPage)).toBeVisible();
    },
);

test(
    'virtual_concierge_url (legacy) is used when virtual_concierge.url is empty',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.virtual_concierge.url': '',
            'app.virtual_concierge_url': EMBED_URL,
        });
        await expect(button(staffPage)).toHaveCount(1);
        await button(staffPage).click();
        await expect(staffPage.locator('fullscreen-embed')).toBeVisible();
        await expect(
            staffPage.locator('fullscreen-embed iframe'),
        ).toHaveAttribute('src', EMBED_URL);
        await closeEmbed(staffPage, 'fullscreen-embed');
    },
);

test(
    'virtual_concierge.icon replaces the default support icon',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.virtual_concierge.url': EMBED_URL,
            'app.virtual_concierge.icon': ICON_URL,
        });
        await expect(button(staffPage).locator('img')).toHaveCount(1);
        await expect(button(staffPage).locator('img')).toHaveAttribute(
            'src',
            ICON_URL,
        );
        await expect(
            button(staffPage).locator('icon', { hasText: /^\s*support_agent\s*$/ }),
        ).toHaveCount(0);
    },
);

test(
    'virtual_concierge.icon empty shows the default support icon',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.virtual_concierge.url': EMBED_URL,
            'app.virtual_concierge.icon': '',
        });
        await expect(button(staffPage).locator('img')).toHaveCount(0);
        await expect(
            button(staffPage).locator('icon', { hasText: /^\s*support_agent\s*$/ }),
        ).toHaveCount(1);
    },
);

test(
    'virtual_concierge.display fullscreen opens the fullscreen embed',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.virtual_concierge.url': EMBED_URL,
            'app.virtual_concierge.display': 'fullscreen',
        });
        await button(staffPage).click();
        await expect(staffPage.locator('fullscreen-embed')).toBeVisible();
        await expect(staffPage.locator('sidebar-embed')).toHaveCount(0);
        await expect(
            staffPage.locator('fullscreen-embed iframe'),
        ).toHaveAttribute('src', EMBED_URL);
        await closeEmbed(staffPage, 'fullscreen-embed');
    },
);

test(
    'virtual_concierge.display sidebar opens the sidebar embed',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.virtual_concierge.url': EMBED_URL,
            'app.virtual_concierge.display': 'sidebar',
        });
        await button(staffPage).click();
        await expect(staffPage.locator('sidebar-embed')).toBeVisible();
        await expect(staffPage.locator('fullscreen-embed')).toHaveCount(0);
        await expect(
            staffPage.locator('sidebar-embed iframe'),
        ).toHaveAttribute('src', EMBED_URL);
        await closeEmbed(staffPage, 'sidebar-embed');
    },
);

test(
    'virtual_concierge.side right uses the right sidebar position',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.virtual_concierge.url': EMBED_URL,
            'app.virtual_concierge.display': 'sidebar',
            'app.virtual_concierge.side': 'right',
        });
        await button(staffPage).click();
        await expect(staffPage.locator('sidebar-embed')).toBeVisible();
        await expect(
            staffPage.locator(
                '.cdk-overlay-pane.sidebar-embed-dialog.sidebar-embed-dialog-right',
            ),
        ).toHaveCount(1);
        await expectPaneAt(staffPage, 'right');
        await closeEmbed(staffPage, 'sidebar-embed');
    },
);

test(
    'virtual_concierge.side left uses the left sidebar position',
    async ({ staffPage }) => {
        await openLanding(staffPage, {
            'app.virtual_concierge.url': EMBED_URL,
            'app.virtual_concierge.display': 'sidebar',
            'app.virtual_concierge.side': 'left',
        });
        await button(staffPage).click();
        await expect(staffPage.locator('sidebar-embed')).toBeVisible();
        await expect(
            staffPage.locator(
                '.cdk-overlay-pane.sidebar-embed-dialog.sidebar-embed-dialog-left',
            ),
        ).toHaveCount(1);
        await expectPaneAt(staffPage, 'left');
        await closeEmbed(staffPage, 'sidebar-embed');
    },
);
