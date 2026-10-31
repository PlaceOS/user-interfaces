// Setting: visitors.use_building_timezone (docs/settings/workplace.md).
// Scenarios: false and true, with every building given BUILDING_TIMEZONE in
// this browser.
// Consumer: apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component.ts
// and libs/form-fields/src/lib/time-field.component.ts.
// When enabled the time field is labelled with the building's timezone offset;
// when the browser is in the same zone the secondary line is suppressed.
import type { Page, Route } from '@playwright/test';
import { expect } from '../../../../../e2e/support/fixtures';
import { InviteVisitorForm } from '../../../../../e2e/support/visitor/invite-form.page';
import { type Audit, BASE, ORIGINS, prepareSettings, type Settings, test } from '../support/settings-harness';

const BUILDING_TIMEZONE = 'Australia/Sydney';

// Far from BUILDING_TIMEZONE, so the time field shows its secondary line.

test.describe.configure({ timeout: 120_000 });

test.use({ readOnlyTimezone: 'Pacific/Kiritimati' });

async function visitor(page: Page, audit: Audit, overrides: Settings) {
    const fixture = await prepareSettings(page, overrides, {
        audit,
        base: BASE,
        landingRooms: false,
        locale: 'en-US',
        // OrganisationService.loadBuildings: the real GET /zones?tags=building
        // runs and every returned building gets BUILDING_TIMEZONE; ids and all
        // other fields are kept.
        routes: async () => {
            await page.addInitScript(() => {
                for (const key of Object.keys(localStorage)) {
                    if (key.startsWith('PLACEOS.org.zones')) localStorage.removeItem(key);
                }
            });
            await page.route(
                (url) =>
                    ORIGINS.has(url.origin) &&
                    url.pathname === '/api/engine/v2/zones' &&
                    url.searchParams.get('tags') === 'building',
                async (route: Route) => {
                    if (route.request().method() !== 'GET') return route.fallback();
                    const response = await route.fetch();
                    const body = await response.json();
                    const json = Array.isArray(body)
                        ? body.map((zone: { timezone?: string }) => ({
                              ...zone,
                              timezone: BUILDING_TIMEZONE,
                          }))
                        : body;
                    audit.fixtures['timezone buildings'] =
                        (audit.fixtures['timezone buildings'] ?? 0) + 1;
                    await route.fulfill({ response, json });
                },
            );
        },
    });
    const form = new InviteVisitorForm(page);
    await form.open();
    await fixture.ready();
    await expect(form.reason).toBeVisible();
    await expect(form.sendButton).toBeVisible();
    await expect(form.successPanel).toHaveCount(0);
    expect(audit.fixtures['timezone buildings'] ?? 0).toBeGreaterThan(0);
    return form;
}

// visitor-flow-details renders the start time as <a-time-field name="time">.
const timeField = (form: InviteVisitorForm) =>
    form.root.locator('a-time-field[name="time"]');
const timezoneLabel = (form: InviteVisitorForm) =>
    timeField(form).locator('.text-xs');

test(
    'visitors.use_building_timezone false leaves the time field in the browser zone',
    async ({ staffPage, audit }) => {
        const form = await visitor(staffPage, audit, {
            'app.visitors.use_building_timezone': false,
        });
        const timezone = await staffPage.evaluate(() => {
            const element = document.querySelector('visitor-flow-details');
            return element
                ? (window as any).ng.getComponent(element).timezone
                : null;
        });
        expect(timezone).toBe('');
        await expect(timeField(form)).toHaveCount(1);
        await expect(timezoneLabel(form)).toHaveCount(0);
    },
);

test(
    'visitors.use_building_timezone true adds the building timezone label',
    async ({ staffPage, audit }) => {
        const form = await visitor(staffPage, audit, {
            'app.visitors.use_building_timezone': true,
        });
        const timezone = await staffPage.evaluate(() => {
            const element = document.querySelector('visitor-flow-details');
            return element
                ? (window as any).ng.getComponent(element).timezone
                : null;
        });
        expect(timezone).toBe(BUILDING_TIMEZONE);
        const label = timezoneLabel(form);
        await expect(label).toHaveCount(1);
        // The label is the date pipe's zone text, e.g. "(GMT+11)"; Intl gives
        // the building's current offset.
        const offset = await staffPage.evaluate((zone) =>
            new Intl.DateTimeFormat('en-US', { timeZone: zone, timeZoneName: 'shortOffset' })
                .formatToParts(new Date())
                .find((part) => part.type === 'timeZoneName')?.value ?? '', BUILDING_TIMEZONE);
        expect(offset).toMatch(/^GMT[+-]\d{1,2}(:\d{2})?$/);
        await expect(label).toContainText('(' + offset + ')');
    },
);
