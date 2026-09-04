/**
 * Headless authentication for the PlaceOS e2e suite.
 *
 * Replays the OAuth2 authorization-code + PKCE flow that @placeos/ts-client
 * performs in the browser, using a Playwright APIRequestContext (its own cookie
 * jar), then materialises the result as a Playwright `storageState` so the SPA
 * boots already authenticated. No login form is driven, no SSO round-trip.
 *
 * Why a synthetic storageState rather than clicking through /login:
 *  - ts-client stores its bearer in `localStorage[${cid}_access_token]` /
 *    `_expires_at`, where `cid = Md5(redirect_uri)`
 *    (ts-client/src/auth/functions.ts:306, :175-177).
 *  - workplace leaves `storage` unset, so ts-client resolves it to localStorage
 *    (functions.ts:303) — and Playwright's storageState DOES persist localStorage.
 *    Seeding those two keys is all the SPA needs for `hasToken()` to be true, so
 *    it never bounces to the login redirect.
 *  - The `_expires_at` we write must be in the FUTURE or ts-client treats the
 *    token as stale and triggers a re-auth redirect mid-test.
 */
import { createHash, randomBytes } from 'crypto';
import { request as pwRequest, APIRequestContext } from '@playwright/test';

/**
 * client_id as computed by ts-client: Md5(redirect_uri), 32 hex chars.
 * `Md5.hashStr(_options.redirect_uri, false)` — ts-client/src/auth/functions.ts:306.
 * The same value is what `init` stores as the application's `uid`
 * (`Digest::MD5.hexdigest(redirect_uri)` — init/src/tasks/entities.cr:118), so an
 * application row MUST exist for this exact redirect_uri or authorize will refuse.
 */
export function clientId(redirectUri: string): string {
    return createHash('md5').update(redirectUri).digest('hex').slice(0, 32);
}

/**
 * The redirect_uri ts-client derives at runtime:
 *   `${location.origin}${route}oauth-resp.html`, route = (pathname + '/').replace('//','/')
 * (libs/common/src/lib/placeos.ts, `setupPlace`). For an app served at the root of
 * a dev server that is `${origin}/oauth-resp.html`.
 */
export function redirectUriFor(appUrl: string): string {
    const { origin, pathname } = new URL(appUrl);
    const route = (pathname + '/').replace('//', '/');
    return `${origin}${route}oauth-resp.html`;
}

function base64url(buf: Buffer): string {
    return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

export interface MintResult {
    accessToken: string;
    refreshToken?: string;
    expiresIn: number;
    clientId: string;
    redirectUri: string;
    /** Cookies the backend set during signin, in Playwright storageState shape. */
    cookies: StorageStateCookie[];
}

export interface StorageStateCookie {
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: 'Strict' | 'Lax' | 'None';
}

/**
 * Run the 3-step PKCE flow against the local stack:
 *   POST /auth/signin           -> 202 + session cookie (+ the `verified` cookie)
 *   GET  /auth/oauth/authorize  -> 302 with ?code=   (do NOT follow the redirect)
 *   POST /auth/oauth/token      -> access_token
 */
export async function mintToken(
    backendUrl: string,
    appUrl: string,
    email: string,
    password: string,
): Promise<MintResult> {
    if (!password) {
        throw new Error(
            `Missing password for ${email}. Set the relevant E2E_*_PASSWORD env var ` +
                `(see e2e/.env.example).`,
        );
    }
    const redirectUri = redirectUriFor(appUrl);
    const cid = clientId(redirectUri);
    const verifier = base64url(randomBytes(32)).slice(0, 43);
    const challenge = base64url(createHash('sha256').update(verifier).digest());

    const ctx: APIRequestContext = await pwRequest.newContext({
        baseURL: backendUrl,
        ignoreHTTPSErrors: true, // the local stack uses a self-signed cert
    });
    try {
        // Step 1 — local password sign-in. auth.cr accepts JSON or form-encoded
        // (auth.cr/src/placeos-auth/controllers/sessions.cr:17-22); JSON is used
        // here because it is unambiguous.
        const signin = await ctx.post('/auth/signin', {
            data: { email, password },
            headers: { 'content-type': 'application/json' },
        });
        if (signin.status() !== 202) {
            throw new Error(
                `signin failed for ${email}: HTTP ${signin.status()} ${await safeText(signin)}\n` +
                    `(is the local stack up, and does this user have a password set?)`,
            );
        }

        // Step 2 — authorization code. Read it out of Location; don't follow.
        const authorize = await ctx.get('/auth/oauth/authorize', {
            params: {
                response_type: 'code',
                client_id: cid,
                redirect_uri: redirectUri,
                scope: 'public',
                state: 'e2e',
                code_challenge: challenge,
                code_challenge_method: 'S256',
            },
            maxRedirects: 0,
        });
        const location = authorize.headers()['location'];
        if (!location || !location.includes('code=')) {
            throw new Error(
                `authorize did not return a code for ${email}: HTTP ${authorize.status()} ` +
                    `location=${location}\n` +
                    `(is there an OAuth application registered for redirect_uri ` +
                    `"${redirectUri}" (client_id ${cid})? See e2e/README.md.)`,
            );
        }
        const code = new URL(location, backendUrl).searchParams.get('code');
        if (!code) throw new Error(`could not parse code from location: ${location}`);

        // Step 3 — exchange the code. Public client: a verifier, never a secret.
        const tokenRes = await ctx.post('/auth/oauth/token', {
            form: {
                grant_type: 'authorization_code',
                client_id: cid,
                redirect_uri: redirectUri,
                code,
                code_verifier: verifier,
            },
        });
        if (!tokenRes.ok()) {
            throw new Error(
                `token exchange failed for ${email}: HTTP ${tokenRes.status()} ${await safeText(tokenRes)}`,
            );
        }
        const body = (await tokenRes.json()) as {
            access_token?: string;
            refresh_token?: string;
            expires_in?: number;
        };
        if (!body.access_token) {
            throw new Error(`no access_token returned for ${email}: ${JSON.stringify(body)}`);
        }

        // Carry the backend's cookies across. Not needed when the SPA is served
        // by the dev server, but nginx gates static assets behind an HMAC
        // `verified` cookie (nginx/config/nginx.conf.template, access_by_lua_block),
        // so a suite pointed at a stack-served app would 302 to /auth/login
        // without them.
        const state = await ctx.storageState();
        return {
            accessToken: body.access_token,
            refreshToken: body.refresh_token,
            expiresIn: body.expires_in ?? 3600,
            clientId: cid,
            redirectUri,
            cookies: (state.cookies ?? []) as StorageStateCookie[],
        };
    } finally {
        await ctx.dispose();
    }
}

/**
 * Build a Playwright storageState that seeds ts-client's localStorage token keys
 * on the APP origin (which is where the SPA runs, and is NOT necessarily the
 * backend origin — under `nx serve` they differ).
 */
export function buildStorageState(mint: MintResult, appUrl: string) {
    const origin = new URL(appUrl).origin;
    const expiresAt = Date.now() + mint.expiresIn * 1000;
    const localStorage = [
        { name: `${mint.clientId}_access_token`, value: mint.accessToken },
        { name: `${mint.clientId}_expires_at`, value: String(expiresAt) },
    ];
    if (mint.refreshToken) {
        localStorage.push({ name: `${mint.clientId}_refresh_token`, value: mint.refreshToken });
    }
    return { cookies: mint.cookies, origins: [{ origin, localStorage }] };
}

async function safeText(res: { text(): Promise<string> }): Promise<string> {
    try {
        return (await res.text()).slice(0, 300);
    } catch {
        return '<no body>';
    }
}
