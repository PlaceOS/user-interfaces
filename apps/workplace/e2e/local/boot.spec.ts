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

/**
 * Boot-time 5xx this suite tolerates, derived from an observed run rather than
 * from documentation — the CI log for this spec listed exactly one entry.
 *
 * `/calendars` (and `/events`, which boot does not currently reach) are the
 * routes that genuinely call Microsoft/Google. The stack seeds a staff-api
 * tenant with placeholder credentials, which is what lets every PlaceOS-native
 * booking route work locally; these two 500 on `AADSTS900023` by design. Making
 * them real would mean putting live Microsoft credentials in the default suite.
 *
 * Add to this list only with the failing URL in hand and a reason next to it.
 */
const TOLERATED_5XX = ['/api/staff/v1/calendars', '/api/staff/v1/events'];

test.describe('workplace boots against the local backend', () => {
    test('the seeded token authenticates the SPA and org data resolves', async ({ page }) => {
        const failed_api: string[] = [];
        const unexpected_5xx: string[] = [];
        page.on('response', (r) => {
            const url = new URL(r.url());
            // Same-origin only. A substring test for `/api/` would also match a
            // third-party URL that happens to contain that segment.
            const ours = url.origin === new URL(APP_URL).origin;
            const backend_path =
                url.pathname.startsWith('/api/') || url.pathname.startsWith('/auth/');
            if (!ours || !backend_path || r.status() < 400) return;

            const entry = `${r.status()} ${r.request().method()} ${url.pathname}`;
            failed_api.push(entry);
            // Only 5xx is asserted on. A 4xx during boot is frequently benign —
            // probes for optional resources, permission-shaped answers for a
            // non-admin — whereas a 5xx means a backend route is broken.
            if (r.status() >= 500 && !TOLERATED_5XX.some((p) => url.pathname.startsWith(p))) {
                unexpected_5xx.push(entry);
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

        // The list above used to be logged and nothing more, so a required
        // endpoint could start 500ing and this stayed green as long as the shell
        // still rendered. Anything outside TOLERATED_5XX now fails.
        expect(
            unexpected_5xx,
            'server errors during boot outside the known-tolerated set',
        ).toEqual([]);
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
