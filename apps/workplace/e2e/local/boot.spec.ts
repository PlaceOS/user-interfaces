/**
 * WP-E2E-01 — the Phase 0 gate.
 *
 * Proves the whole chain works against a LOCAL backend with no mocks:
 * a headlessly-minted PKCE bearer is accepted by the SPA, the SPA boots
 * authenticated, and the org data it needs actually resolves.
 *
 * The `/misconfigured` assertion is the load-bearing one. OrganisationService
 * routes there when it cannot find a zone tagged `org`, or cannot find any zone
 * tagged `level` that has a parent_id (libs/common/src/lib/org/organisation.service.ts
 * :522, :640). A stack whose seed data is too thin renders a perfectly healthy-
 * looking page that is in fact the failure state, so asserting "not misconfigured"
 * is what separates "the app booted" from "the app booted and has data".
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { APP_URL } from '../../../../e2e/support/env';
import { clientId, redirectUriFor } from '../../../../e2e/support/auth';
import { currentUser, zonesWithTag } from '../../../../e2e/support/api';

test.describe('workplace boots against the local backend', () => {
    test('the seeded token authenticates the SPA and org data resolves', async ({ page }) => {
        const failed_api: string[] = [];
        page.on('response', (r) => {
            const url = r.url();
            if ((url.includes('/api/') || url.includes('/auth/')) && r.status() >= 400) {
                failed_api.push(`${r.status()} ${r.request().method()} ${new URL(url).pathname}`);
            }
        });

        await page.goto('/#/');

        // The SPA must not bounce to a login redirect — that means the seeded
        // localStorage token was not picked up (wrong client_id, or expired).
        await expect
            .poll(() => page.url(), { timeout: 30_000 })
            .not.toMatch(/\/auth\/login|\/login\?/);

        // ...and it must not land on the misconfigured page.
        await expect
            .poll(() => page.url(), { timeout: 30_000 })
            .not.toContain('misconfigured');

        // The shell renders.
        await expect(page.locator('topbar')).toBeVisible({ timeout: 30_000 });

        // The token really is in the store ts-client reads from, under the key
        // derived from THIS app's redirect_uri.
        const cid = clientId(redirectUriFor(APP_URL));
        const stored = await page.evaluate((k) => localStorage.getItem(k), `${cid}_access_token`);
        expect(stored, `localStorage[${cid}_access_token] should hold the bearer`).toBeTruthy();

        if (failed_api.length) {
            console.log('  4xx/5xx API calls during boot:\n   ', failed_api.join('\n    '));
        }
    });

    // Deliberately asserted as the NON-admin worker identity: a sys_admin can see
    // zones a normal user cannot, so proving the hierarchy exists for an ordinary
    // user is the assertion that actually matters.
    test('the backend has the org hierarchy workplace requires', async ({ staffApi: api }) => {
        const user = await currentUser(api);
        expect(user.email, 'the token resolves to a real user').toBeTruthy();
        expect(user.sys_admin, 'this assertion runs as a NON-admin').toBeFalsy();

        const orgs = await zonesWithTag(api, 'org');
        expect(orgs.length, 'at least one zone tagged `org` (else -> /misconfigured)').toBeGreaterThan(0);

        const levels = await zonesWithTag(api, 'level');
        const parented = levels.filter((z) => z.parent_id);
        expect(
            parented.length,
            'at least one zone tagged `level` WITH a parent_id (else -> /misconfigured)',
        ).toBeGreaterThan(0);

        const buildings = await zonesWithTag(api, 'building');
        console.log(
            `  org data: ${orgs.length} org, ${buildings.length} building, ` +
                `${levels.length} level (${parented.length} parented)`,
        );
    });
});
