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
import { createHash } from 'node:crypto';

import { clientId, redirectUriFor } from '../../../../e2e/support/auth';
import { APP_URL, roleFor } from '../../../../e2e/support/env';
import { expect, test } from '../../../../e2e/support/fixtures';
import { loginViaUI } from '../../../../e2e/support/login';

// The subject is the handshake itself, so start with no credentials.
test.use({ storageState: undefined });

test.describe('PKCE handshake', () => {
    test('the browser performs a public-client PKCE exchange with no secret', async ({
        page,
    }) => {
        const { requests, token } = await loginViaUI(page, roleFor('admin'));

        const authorize = requests.find((r) =>
            r.url.includes('/oauth/authorize'),
        );
        const exchange = requests.find(
            (r) =>
                r.url.includes('/oauth/token') &&
                !r.url.includes('refresh_token'),
        );

        expect(
            authorize,
            'an /oauth/authorize request should have been made',
        ).toBeTruthy();
        expect(
            exchange,
            'an /oauth/token request should have been made',
        ).toBeTruthy();

        // --- the authorize leg -------------------------------------------------
        // 302 is the redirect back to the app carrying ?code=. A 200 here would
        // mean we were served a page instead, i.e. the handshake never completed.
        expect(authorize!.status, 'authorize redirects back with a code').toBe(
            302,
        );

        expect(authorize!.url, 'PKCE must use S256, never "plain"').toContain(
            'code_challenge_method=S256',
        );

        const challenge =
            new URL(authorize!.url).searchParams.get('code_challenge') ?? '';
        // SHA-256 is 32 bytes, which is exactly 43 characters of unpadded
        // base64url. Anything else is not an S256 challenge, whatever the
        // `code_challenge_method` parameter claims.
        expect(
            challenge,
            'an S256 challenge is 43 base64url characters',
        ).toMatch(/^[A-Za-z0-9\-_]{43}$/);

        // --- the token leg -----------------------------------------------------
        expect(exchange!.status, 'token exchange succeeds').toBe(200);

        // The whole point of a public client: the browser holds no secret, so it
        // must never send one. If this ever fails, a credential is sitting in a
        // shipped bundle where anyone can read it.
        const wire = `${exchange!.url} ${exchange!.postData ?? ''}`;
        expect(
            wire,
            'no client_secret anywhere in the token request',
        ).not.toContain('client_secret');

        // The verifier is what proves this client started the flow. Without it,
        // an intercepted code could be redeemed by anyone.
        //
        // Asserting the two values are *related* is the whole point. Checking
        // only that a challenge and a verifier were both present would pass even
        // if they had nothing to do with each other — which is precisely the
        // state a broken client, or a backend that stopped enforcing PKCE, would
        // leave things in.
        // ts-client puts the exchange parameters in the query string, but has
        // also form-encoded them in the body across versions, so read either.
        const body = exchange!.postData ?? '';
        const verifier =
            new URL(exchange!.url).searchParams.get('code_verifier') ||
            new URLSearchParams(body).get('code_verifier') ||
            '';
        expect(verifier, 'a code_verifier was sent').not.toBe('');
        const derived = createHash('sha256')
            .update(verifier)
            .digest('base64url');
        expect(derived, 'the challenge is SHA-256(verifier), base64url').toBe(
            challenge,
        );

        // And it is the client we registered, not something else.
        expect(wire, 'the expected client_id was used').toContain(
            clientId(redirectUriFor(APP_URL)),
        );

        expect(
            token.access_token,
            'the exchange produced a token',
        ).toBeTruthy();
    });

    test('no credentials are exposed in any /auth request', async ({
        page,
    }) => {
        const { requests } = await loginViaUI(page, roleFor('admin'));
        const password = roleFor('admin').password;

        // The password legitimately appears once, in the sign-in POST body. It must
        // not turn up anywhere else, and above all never in a URL, where it would be
        // captured by browser history, proxies and server logs.
        for (const r of requests) {
            expect(
                r.url,
                `password must never appear in a URL (${r.method} ${r.url})`,
            ).not.toContain(password);
            expect(
                r.url,
                `no client_secret in a URL (${r.method} ${r.url})`,
            ).not.toContain('client_secret');
        }

        const bodies_with_password = requests.filter((r) =>
            (r.postData ?? '').includes(password),
        );
        expect(
            bodies_with_password.every((r) => r.url.includes('/auth/signin')),
            'the password should only ever be sent to /auth/signin',
        ).toBeTruthy();
    });
});
