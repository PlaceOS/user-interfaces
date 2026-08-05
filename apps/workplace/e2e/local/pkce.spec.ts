/**
 * AUTH-E2E-01 — the PKCE handshake, asserted on the wire.
 *
 * `login.spec.ts` proves a login works and that the resulting token is usable.
 * This proves the handshake that produced it was actually safe, which is a
 * different question: a client that leaked a secret, or quietly dropped PKCE,
 * would still end up with a perfectly valid token and a perfectly working app.
 * Nothing about the response tells you the exchange was sound. You have to look
 * at what the browser sent.
 *
 * These assertions previously lived in tasks/PPT-2536/e2e/backoffice-login.spec.js,
 * written during the auth.cr migration. They belong with the suite rather than in
 * a task folder, where nothing runs them.
 */
import { test, expect } from '../../../../e2e/support/fixtures';
import { loginViaUI } from '../../../../e2e/support/login';
import { APP_URL, roleFor } from '../../../../e2e/support/env';
import { clientId, redirectUriFor } from '../../../../e2e/support/auth';

// The subject is the handshake itself, so start with no credentials.
test.use({ storageState: undefined });

test.describe('PKCE handshake', () => {
    test('the browser performs a public-client PKCE exchange with no secret', async ({ page }) => {
        const { requests, token } = await loginViaUI(page, roleFor('admin'));

        const authorize = requests.find((r) => r.url.includes('/oauth/authorize'));
        const exchange = requests.find(
            (r) => r.url.includes('/oauth/token') && !r.url.includes('refresh_token'),
        );

        expect(authorize, 'an /oauth/authorize request should have been made').toBeTruthy();
        expect(exchange, 'an /oauth/token request should have been made').toBeTruthy();

        // --- the authorize leg -------------------------------------------------
        // 302 is the redirect back to the app carrying ?code=. A 200 here would
        // mean we were served a page instead, i.e. the handshake never completed.
        expect(authorize!.status, 'authorize redirects back with a code').toBe(302);

        expect(authorize!.url, 'PKCE must use S256, never "plain"').toContain(
            'code_challenge_method=S256',
        );

        const challenge = new URL(authorize!.url).searchParams.get('code_challenge') ?? '';
        expect(challenge.length, 'a real code_challenge was sent').toBeGreaterThan(20);
        // base64url, so it must not contain the standard-base64-only characters.
        expect(challenge, 'the challenge is base64url encoded').not.toMatch(/[+/=]/);

        // --- the token leg -----------------------------------------------------
        expect(exchange!.status, 'token exchange succeeds').toBe(200);

        // The whole point of a public client: the browser holds no secret, so it
        // must never send one. If this ever fails, a credential is sitting in a
        // shipped bundle where anyone can read it.
        const wire = `${exchange!.url} ${exchange!.postData ?? ''}`;
        expect(wire, 'no client_secret anywhere in the token request').not.toContain(
            'client_secret',
        );

        // The verifier is what proves this client started the flow. Without it,
        // an intercepted code could be redeemed by anyone.
        expect(wire, 'the code_verifier was sent').toContain('code_verifier');

        // And it is the client we registered, not something else.
        expect(wire, 'the expected client_id was used').toContain(
            clientId(redirectUriFor(APP_URL)),
        );

        expect(token.access_token, 'the exchange produced a token').toBeTruthy();
    });

    test('no credentials are exposed in any /auth request', async ({ page }) => {
        const { requests } = await loginViaUI(page, roleFor('admin'));
        const password = roleFor('admin').password;

        // The password legitimately appears once, in the sign-in POST body. It must
        // not turn up anywhere else, and above all never in a URL, where it would be
        // captured by browser history, proxies and server logs.
        for (const r of requests) {
            expect(r.url, `password must never appear in a URL (${r.method} ${r.url})`).not.toContain(
                password,
            );
            expect(r.url, `no client_secret in a URL (${r.method} ${r.url})`).not.toContain(
                'client_secret',
            );
        }

        const bodies_with_password = requests.filter((r) => (r.postData ?? '').includes(password));
        expect(
            bodies_with_password.every((r) => r.url.includes('/auth/signin')),
            'the password should only ever be sent to /auth/signin',
        ).toBeTruthy();
    });
});
