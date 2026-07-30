/**
 * WP-E2E-02 — the REAL login flow, no injected token.
 *
 * This is the spec that a synthesised-storageState suite structurally cannot
 * write, and it covers the path that has actually regressed in production: the
 * redirect handshake, the authorization-code exchange, PKCE, and the shape of
 * the token that comes back. PPT-2536 was exactly this — a token that parsed
 * fine but lost its scope, so every downstream authorisation check 403'd.
 *
 * Everything else in the suite injects a token for speed. This spec is what
 * earns that shortcut.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { loginViaUI } from '../../../../e2e/support/login';
import { APP_URL, roleFor } from '../../../../e2e/support/env';
import { clientId, redirectUriFor } from '../../../../e2e/support/auth';

// The subject IS authentication, so start with no credentials at all.
test.use({ storageState: undefined });

const CLIENT_ID = clientId(redirectUriFor(APP_URL));

/** Read a JWT payload without verifying — we are asserting on claims, not trust. */
function claims(token: string): Record<string, unknown> {
    const payload = token.split('.')[1];
    return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
}

test.describe('real login', () => {
    test('an unauthenticated visit signs in through the authority and lands in the app', async ({
        page,
    }) => {
        const { token } = await loginViaUI(page, roleFor('admin'));

        // The browser really performed a code exchange...
        expect(token.access_token, 'the SPA received an access token').toBeTruthy();
        expect(token.access_token!.startsWith('eyJ'), 'access token is a JWT').toBeTruthy();

        // ...with the scope intact. An empty scope here is the 2026-07-23 revert
        // bug: the token authenticates but every authorisation check 403s.
        expect(token.scope, 'token carries the public scope').toBe('public');
        expect(token.refresh_token, 'a refresh token was issued').toBeTruthy();

        // And the app is genuinely usable, not merely rendered.
        await expect(page).toHaveURL(/#\/landing/);
        await expect(page.locator('topbar')).toBeVisible();
    });

    test('the issued token is accepted by rest-api and survives a refresh', async ({ page }) => {
        const { token } = await loginViaUI(page, roleFor('admin'));
        expect(token.refresh_token, 'need a refresh token for this spec').toBeTruthy();

        const call = (t?: string) =>
            page.evaluate(
                async (bearer) =>
                    (
                        await fetch('/api/engine/v2/users/current', {
                            headers: { Authorization: `Bearer ${bearer}` },
                        })
                    ).status,
                t,
            );

        expect(await call(token.access_token), 'freshly issued token is accepted').toBe(200);

        // Refresh with no client_secret — PlaceOS SPAs are public clients.
        const refreshed = await page.evaluate(
            async ({ cid, rt }) => {
                const r = await fetch('/auth/oauth/token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({
                        grant_type: 'refresh_token',
                        client_id: cid,
                        refresh_token: rt,
                    }),
                });
                const j = await r.json().catch(() => ({}) as Record<string, string>);
                return { status: r.status, access_token: j.access_token, scope: j.scope };
            },
            { cid: CLIENT_ID, rt: token.refresh_token! },
        );

        expect(refreshed.status, 'refresh -> 200').toBe(200);
        expect(refreshed.access_token, 'refresh returned a token').toBeTruthy();
        expect(refreshed.access_token, 'the token was rotated').not.toBe(token.access_token);
        // The regression that caused the revert: scope silently lost on refresh.
        expect(refreshed.scope, 'scope survives the refresh').toBe('public');

        // Identity must survive too. A refresh that quietly changes `sub` would
        // hand the session to a different user — the token still validates, so
        // nothing downstream would notice.
        const before_claims = claims(token.access_token!);
        const after_claims = claims(refreshed.access_token!);
        expect(after_claims.sub, 'the refreshed token keeps the same subject').toBe(
            before_claims.sub,
        );
        expect(before_claims.sub, 'the subject is a real user id').toBeTruthy();

        expect(
            await call(refreshed.access_token),
            'the REFRESHED token is still accepted by rest-api',
        ).toBe(200);
    });
});
