/**
 * Driving the REAL login flow.
 *
 * This is the primary auth path for anything whose subject is authentication.
 * Injecting a synthesised token (see auth.ts) is faster, and is the right choice
 * for specs that merely need to *be* logged in — but it skips the code exchange,
 * the redirect handshake and the token-storage logic entirely, which is exactly
 * where the auth regressions have actually happened.
 *
 * One behaviour worth knowing before you assert on storage: after a normal login
 * ts-client persists ONLY `${cid}_expires_at`. The access token stays in memory
 * unless the device is marked trusted — `_storeTokenDetails` gates the
 * `setItem(access_token)` call on `isTrusted()` (ts-client/src/auth/functions.ts:1042).
 * So "the token is in localStorage" is true of a seeded storageState and false of
 * a real login. Assert on the token exchange or on `/users/current`, not on the key.
 */
import { Page, expect } from '@playwright/test';
import { APP_URL, Role } from './env';

/** One request the browser made to /auth/*, as observed on the wire. */
export interface AuthRequest {
    url: string;
    method: string;
    status: number;
    postData: string | null;
}

export interface LoginResult {
    /** The token-endpoint response the browser actually received. */
    token: { access_token?: string; refresh_token?: string; scope?: string; expires_in?: number };
    /**
     * Every `/auth/*` request the browser made during the login, in order.
     *
     * Captured so specs can assert on what was actually sent rather than on what
     * the SDK claims it sent. The distinction matters: a client that leaks a
     * secret, or silently drops PKCE, still returns a perfectly valid-looking
     * token, so the response alone cannot tell you the handshake was safe.
     */
    requests: AuthRequest[];
}

/**
 * Land on the app unauthenticated, follow the redirect to the login page, sign
 * in, and wait to arrive back in the app.
 *
 * We wait for the login FORM, not for a URL. Where the login page lives depends
 * on the authority's `login_url` column, and that genuinely differs between
 * stacks: a freshly-initialised one gets a relative `/login?continue={{url}}`
 * (so the dev server proxies it same-origin), while an older or hand-edited
 * authority may carry an absolute `https://host:port/login?...` and send the
 * browser cross-origin. Both are correct. Asserting on the URL shape couples the
 * suite to a config detail that has nothing to do with what is being tested.
 */
export async function loginViaUI(page: Page, role: Role): Promise<LoginResult> {
    let token: LoginResult['token'] = {};
    const requests: AuthRequest[] = [];
    page.on('response', async (res) => {
        const url = res.url();
        if (!url.includes('/auth/')) return;
        const req = res.request();
        requests.push({
            url,
            method: req.method(),
            status: res.status(),
            postData: req.postData(),
        });
        if (url.includes('/oauth/token') && res.status() === 200) {
            try {
                token = await res.json();
            } catch {
                /* not JSON — leave token empty and let the caller's assert fail */
            }
        }
    });

    await page.goto('/#/');

    // Unauthenticated: the app must bounce to a login page — wherever it lives.
    const email = page.locator('input[type="email"]');
    await expect(
        email,
        `expected a login form after visiting the app unauthenticated, but none appeared ` +
            `(landed on ${page.url()}). Is the authority's login_url set?`,
    ).toBeVisible({ timeout: 30_000 });

    await email.fill(role.email);
    await page.locator('input[type="password"]').fill(role.password);
    await page.getByRole('button', { name: /log ?in/i }).click();

    // ...and back into the app, authenticated.
    await page.waitForURL(new RegExp(escapeRe(new URL(APP_URL).host)), { timeout: 30_000 });
    await expect(page.locator('topbar')).toBeVisible({ timeout: 30_000 });

    return { token, requests };
}

function escapeRe(s: string): string {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
