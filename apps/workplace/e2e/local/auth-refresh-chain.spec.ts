import { test, expect } from '../../../../e2e/support/fixtures';
import { APP_URL, roleFor } from '../../../../e2e/support/env';
import { clientId, redirectUriFor } from '../../../../e2e/support/auth';
import { loginViaUI } from '../../../../e2e/support/login';

// The subject is authentication, so start without injected credentials.
test.use({ storageState: undefined });

const CLIENT_ID = clientId(redirectUriFor(APP_URL));

type JwtClaims = {
    sub?: string;
    scope?: string | string[];
    exp?: number;
};

type RefreshResult = {
    status: number;
    access_token?: string;
    refresh_token?: string;
    scope?: string;
    error?: string;
};

function claims(token: string): JwtClaims {
    const payload = token.split('.')[1];
    return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
}

function includesPublicScope(scope: JwtClaims['scope']): boolean {
    return Array.isArray(scope) ? scope.includes('public') : scope === 'public';
}

test.describe('OAuth refresh-token rotation', () => {
    test('AUTH-E2E-03: rotates refresh and access tokens across three refreshes', async ({
        page,
    }) => {
        const { token } = await loginViaUI(page, roleFor('admin'));
        const at0 = token.access_token;
        const rt0 = token.refresh_token;
        expect(at0, 'the initial access token should exist').toBeTruthy();
        expect(rt0, 'the initial refresh token should exist').toBeTruthy();

        const callUsersCurrent = (access_token: string) =>
            page.evaluate(async (bearer) => {
                const response = await fetch('/api/engine/v2/users/current', {
                    headers: { Authorization: `Bearer ${bearer}` },
                });
                return response.status;
            }, access_token);

        const refresh = (refresh_token: string) =>
            page.evaluate(
                async ({ client_id, refresh_token: current_refresh_token }) => {
                    const response = await fetch('/auth/oauth/token', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: new URLSearchParams({
                            grant_type: 'refresh_token',
                            client_id,
                            refresh_token: current_refresh_token,
                        }),
                    });
                    const body = await response
                        .json()
                        .catch(() => ({} as RefreshResult));
                    return {
                        status: response.status,
                        access_token: body.access_token,
                        refresh_token: body.refresh_token,
                        scope: body.scope,
                        error: body.error,
                    };
                },
                { client_id: CLIENT_ID, refresh_token },
            );

        expect(await callUsersCurrent(at0!), 'AT0 should be accepted').toBe(200);
        const original_sub = claims(at0!).sub;
        expect(original_sub, 'AT0 should contain a subject').toBeTruthy();

        const refreshed1 = await refresh(rt0!);
        expect(refreshed1.status, 'RT0 refresh should succeed').toBe(200);
        expect(refreshed1.scope, 'RT0 refresh should preserve public scope').toBe('public');
        const at1 = refreshed1.access_token;
        const rt1 = refreshed1.refresh_token;
        expect(at1, 'AT1 should exist').toBeTruthy();
        expect(rt1, 'RT1 should exist').toBeTruthy();
        expect(at1, 'AT1 should differ from AT0').not.toBe(at0);
        expect(rt1, 'RT1 should differ from RT0').not.toBe(rt0);
        const claims1 = claims(at1!);
        expect(claims1.sub, 'AT1 should preserve the original subject').toBe(original_sub);
        expect(includesPublicScope(claims1.scope), 'AT1 should contain public scope').toBe(true);
        expect(claims1.exp, 'AT1 should not already be expired').toBeGreaterThan(
            Math.floor(Date.now() / 1000),
        );
        expect(await callUsersCurrent(at1!), 'AT1 should be accepted').toBe(200);

        const refreshed2 = await refresh(rt1!);
        expect(refreshed2.status, 'RT1 refresh should succeed').toBe(200);
        expect(refreshed2.scope, 'RT1 refresh should preserve public scope').toBe('public');
        const at2 = refreshed2.access_token;
        const rt2 = refreshed2.refresh_token;
        expect(at2, 'AT2 should exist').toBeTruthy();
        expect(rt2, 'RT2 should exist').toBeTruthy();
        expect(at2, 'AT2 should differ from AT1').not.toBe(at1);
        expect(at2, 'AT2 should differ from AT0').not.toBe(at0);
        expect(rt2, 'RT2 should differ from RT1').not.toBe(rt1);
        const claims2 = claims(at2!);
        expect(claims2.sub, 'AT2 should preserve the original subject').toBe(original_sub);
        expect(includesPublicScope(claims2.scope), 'AT2 should contain public scope').toBe(true);
        expect(claims2.exp, 'AT2 should not already be expired').toBeGreaterThan(
            Math.floor(Date.now() / 1000),
        );
        expect(await callUsersCurrent(at2!), 'AT2 should be accepted').toBe(200);

        const refreshed3 = await refresh(rt2!);
        expect(refreshed3.status, 'RT2 refresh should succeed').toBe(200);
        expect(refreshed3.scope, 'RT2 refresh should preserve public scope').toBe('public');
        const at3 = refreshed3.access_token;
        const rt3 = refreshed3.refresh_token;
        expect(at3, 'AT3 should exist').toBeTruthy();
        expect(rt3, 'RT3 should exist').toBeTruthy();
        expect(at3, 'AT3 should differ from AT2').not.toBe(at2);
        expect(at3, 'AT3 should differ from AT0').not.toBe(at0);
        expect(at3, 'AT3 should differ from AT1').not.toBe(at1);
        expect(rt3, 'RT3 should differ from RT2').not.toBe(rt2);
        const claims3 = claims(at3!);
        expect(claims3.sub, 'AT3 should preserve the original subject').toBe(original_sub);
        expect(includesPublicScope(claims3.scope), 'AT3 should contain public scope').toBe(true);
        expect(claims3.exp, 'AT3 should not already be expired').toBeGreaterThan(
            Math.floor(Date.now() / 1000),
        );
        expect(await callUsersCurrent(at3!), 'AT3 should be accepted').toBe(200);
    });
});
