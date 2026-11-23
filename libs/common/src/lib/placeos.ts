import {
    browserEnvironment,
    type AuthSession,
    type Grant,
} from '@placeos/ts-client';

import { log } from './general';
import {
    getNativeRedirectUri,
    isNativeApp,
    storeNativePkceVerifier,
} from './native-app';
import { notifyInfo } from './notifications';
import { startPlaceClient } from './place-client';
import { VERSION } from './version';

const NATIVE_CREDENTIAL_FETCH_KEY = '__placeos_native_credential_fetch__';

/** Longest an application waits for PlaceOS authority setup to settle. */
export const PLACE_SETUP_TIMEOUT = 10 * 1000;

export interface PlaceSettings {
    /** Protocol used by the application server */
    protocol: 'http:' | 'https:';
    /** Domain that the API server lies  */
    domain: string;
    /** Port number of the API server */
    port: number;
    /** Route on domain application rests */
    route: string;
    /** Whether to use the settings domain for auth */
    use_domain: boolean;
    /** Whether login is handled locally by the application */
    local_login: boolean;
    /** Whether application should mock out API requests */
    mock: boolean;

    storage?: 'session' | 'local';
    app_name?: string;
}

function randomString(length = 43): string {
    const chars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (value) => chars[value % chars.length]).join('');
}

async function sha256Base64Url(value: string): Promise<string> {
    const buffer = await crypto.subtle.digest(
        'SHA-256',
        new TextEncoder().encode(value),
    );
    const bytes = Array.from(new Uint8Array(buffer), (byte) =>
        String.fromCharCode(byte),
    ).join('');
    return btoa(bytes)
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

function requestOrigin(input: Parameters<typeof fetch>[0]): string {
    const request_url =
        typeof input === 'string'
            ? input
            : input instanceof URL
              ? input.toString()
              : input?.url;
    return request_url ? new URL(request_url, location.href).origin : '';
}

function setupNativeCredentialedFetch(urls: string[]): void {
    if (typeof window.fetch !== 'function') return;
    const window_state = window as unknown as {
        [NATIVE_CREDENTIAL_FETCH_KEY]?: {
            origins: Set<string>;
            fetch: typeof fetch;
        };
    };
    const origins = urls.map((url) => new URL(url, location.href).origin);
    if (window_state[NATIVE_CREDENTIAL_FETCH_KEY]) {
        for (const origin of origins) {
            window_state[NATIVE_CREDENTIAL_FETCH_KEY].origins.add(origin);
        }
        return;
    }
    const state = {
        origins: new Set(origins),
        fetch: window.fetch.bind(window),
    };
    window_state[NATIVE_CREDENTIAL_FETCH_KEY] = state;
    window.fetch = (input, init) => {
        if (!state.origins.has(requestOrigin(input))) {
            return state.fetch(input, init);
        }
        return state.fetch(input, { ...init, credentials: 'include' });
    };
}

export async function createNativeAuthUrl(
    settings: PlaceSettings,
    client_id: string,
): Promise<string> {
    const protocol = settings.protocol || location.protocol;
    const host = settings.domain || location.hostname;
    const port = settings.port || location.port;
    const host_with_port = `${host}${port ? ':' + port : ''}`;
    const url = settings.use_domain
        ? `${protocol}//${host_with_port}`
        : location.origin;
    const redirect_uri = await getNativeRedirectUri(
        settings.app_name,
        settings.domain,
    );
    const nonce = randomString(16);
    const verifier = randomString();
    const challenge = await sha256Base64Url(verifier);
    localStorage.setItem(`${client_id}_nonce`, nonce);
    // The keys that the ts-client session reads for the code exchange
    storeNativePkceVerifier(`${client_id}_code_verifier`, verifier);
    return (
        `${url}/auth/oauth/authorize?response_type=code` +
        `&client_id=${encodeURIComponent(client_id)}` +
        `&state=${encodeURIComponent(nonce)}` +
        `&redirect_uri=${encodeURIComponent(redirect_uri)}` +
        `&scope=${encodeURIComponent('public')}` +
        '&code_challenge_method=S256' +
        `&code_challenge=${encodeURIComponent(challenge)}`
    );
}

/**
 * Whether the page asks for mock mode. Use it before `setupPlace` runs, which
 * stores the choice. `?mock=false` turns mock mode off.
 */
export function mockModeRequested(): boolean {
    return (
        !location.href.includes('mock=false') &&
        (localStorage.getItem('mock') === 'true' ||
            location.href.includes('mock=true') ||
            location.origin.includes('demo.place.tech'))
    );
}

/** Key of the token that the paste shortcut keeps for the next load */
const PASTED_TOKEN_KEY = 'PLACEOS.pasted_token';

/** Key of a pasted token for the app with this OAuth client ID */
export function pastedTokenKey(client_id: string) {
    return `${PASTED_TOKEN_KEY}.${client_id}`;
}

/**
 * Uses a token that the paste shortcut of `PlaceOS_Service` kept for this
 * load, before the login starts, and removes it, so it is used one time.
 * The refresh token of the old account is replaced, so a renewal does not go
 * back to that account. An app that is not trusted keeps the pasted refresh
 * token in memory only.
 */
function usePastedToken(session: AuthSession) {
    const key = pastedTokenKey(session.client_id);
    const raw = sessionStorage.getItem(key);
    if (!raw) return;
    sessionStorage.removeItem(key);
    let pasted: {
        token?: unknown;
        refresh_token?: unknown;
        expires_at?: unknown;
    };
    try {
        pasted = JSON.parse(raw);
    } catch {
        return;
    }
    const { token, refresh_token, expires_at } = pasted;
    if (typeof token !== 'string' || !token || typeof expires_at !== 'number') {
        return;
    }
    const refresh_key = `${session.client_id}_refresh_token`;
    for (const storage of [localStorage, sessionStorage]) {
        storage.removeItem(refresh_key);
    }
    if (typeof refresh_token === 'string' && refresh_token) {
        session.useRefreshToken(refresh_token);
    }
    session.useToken(token, expires_at);
}

/**
 * Uses the API key of the device before the login starts, so the first
 * request already has it. `''` removes a key and token that the session
 * keeps from an earlier run, so it stops using the old key.
 */
function useDeviceApiKey(
    session: AuthSession,
    storage: Storage,
    api_key: string | undefined,
) {
    if (api_key === undefined) return;
    // The key of the device wins: the login would read a key in the URL
    removeApiKeyFromUrl();
    if (api_key) return session.useApiKey(api_key);
    const key = `${session.client_id}_x-api-key`;
    if (api_key === '' && storage.getItem(key)) {
        storage.removeItem(key);
        session.invalidateToken();
    }
}

/**
 * Removes `x-api-key` from each part of the URL that the login reads: the
 * query of the page, the query of a hash route (`#/rooms?x-api-key=…`) and
 * a hash of parameters (`#x-api-key=…`). A hash route such as `#/rooms`
 * stays as it is.
 */
function removeApiKeyFromUrl() {
    // Rewrite the URL only when it has a key
    if (!location.href.includes('x-api-key')) return;
    const without = (part: string) => {
        const params = new URLSearchParams(part);
        params.delete('x-api-key');
        return params.toString();
    };
    const url = new URL(location.href);
    url.searchParams.delete('x-api-key');
    const hash = url.hash.slice(1);
    const query_start = hash.indexOf('?');
    let route = query_start >= 0 ? hash.slice(0, query_start) : hash;
    if (route.includes('=')) route = without(route);
    const query = query_start >= 0 ? without(hash.slice(query_start + 1)) : '';
    url.hash = query ? `${route}?${query}` : route;
    if (url.href !== location.href) {
        history.replaceState(history.state, '', url);
    }
}

/** Options of `setupPlace` that are not in the settings */
export interface PlaceSetupOptions {
    /**
     * The API key of the device, such as a key from the managed
     * configuration of a native app. The session uses it before the login
     * starts. `''` removes a key that the session keeps from an earlier run.
     */
    api_key?: string;
    /**
     * Gives a Microsoft Entra token to exchange for PlaceOS tokens, such as
     * the SSO token of a Teams tab. The login then uses the `entra` grant.
     */
    entra_token?: () => Promise<string | null>;
    /**
     * Marks the app as trusted, so the session keeps its tokens in the
     * storage over a reload. Use it for an app in a host that the user signs
     * in to, such as a Teams tab or an Outlook add-in.
     */
    trusted?: boolean;
}

/**
 * Initialise the PlaceOS API library. Resolves when the first login attempt
 * ends. Rejects when the authority does not load, or after `timeout_ms`.
 */
export async function setupPlace(
    settings: PlaceSettings,
    timeout_ms = PLACE_SETUP_TIMEOUT,
    options: PlaceSetupOptions = {},
): Promise<void> {
    const protocol = settings.protocol || location.protocol;
    const host = settings.domain || location.hostname;
    const port = settings.port || location.port;
    const host_with_port = `${host}${port ? ':' + port : ''}`;
    const native = isNativeApp();
    // `''` is the origin of the page
    const base_url = settings.use_domain
        ? `${native ? 'https:' : protocol}//${host_with_port}`
        : '';
    const route = (location.pathname + '/').replace('//', '/');
    const mock =
        settings.mock ||
        location.href.includes('mock=true') ||
        localStorage.getItem('mock') === 'true';
    const grant: Grant = options.entra_token
        ? { kind: 'entra', entraToken: options.entra_token }
        : { kind: 'code' };
    if (native) {
        // ts-client only persists access/refresh tokens for trusted devices —
        // without this flag every cold start requires a full browser sign-in.
        localStorage.setItem('trust', 'true');
        const url = base_url || location.origin;
        setupNativeCredentialedFetch([
            `${url}/auth/oauth/authorize`,
            `${url}/auth/oauth/token`,
        ]);
    }
    if (localStorage) {
        localStorage.setItem(
            'mock',
            `${!!mock && !location.href.includes('mock=false')}`,
        );
    }
    if (mock) {
        notifyInfo('Application in mock mode.');
    }
    const storage_kind = native ? 'local' : settings.storage || 'local';
    const storage = storage_kind === 'session' ? sessionStorage : localStorage;
    const { session } = startPlaceClient({
        base_url,
        mock,
        // Identify the app and build on every API request
        headers: {
            'X-App-Name':
                settings.app_name ||
                location.pathname.split('/').find(Boolean) ||
                'PlaceOS',
            'X-App-Date': new Date(VERSION.time).toISOString(),
            'X-App-Build': VERSION.hash,
        },
        auth: {
            redirect_uri: native
                ? await getNativeRedirectUri(settings.app_name, settings.domain)
                : `${location.origin}${route}oauth-resp.html`,
            scope: 'public',
            grant,
            handle_login: native ? false : !settings.local_login,
            use_frame: !native,
            environment: browserEnvironment(storage_kind),
        },
    });
    if (session) {
        // Before the pasted token: the session reads the trust flag on each
        // token read and write.
        if (options.trusted) {
            storage.setItem(`${session.client_id}_trusted`, 'true');
        }
        usePastedToken(session);
        useDeviceApiKey(session, storage, options.api_key);
    }
    const setup_promise: Promise<void> = session
        ? session.start().then((result) => {
              // Without strictNullChecks only `=== false` narrows a Result
              if (result.ok !== false) return;
              const { error } = result;
              // Only the kind: a redirect error has the login URL, which
              // can hold a token in its return URL.
              log(
                  'APP',
                  `Login did not complete: ${error.kind}`,
                  undefined,
                  'warn',
              );
              if (
                  error.kind === 'authority_unavailable' ||
                  error.kind === 'authority_invalid'
              ) {
                  throw new Error(`PlaceOS authority failed: ${error.kind}`);
              }
          })
        : Promise.resolve();
    if (timeout_ms <= 0) return setup_promise;
    return new Promise<void>((resolve, reject) => {
        const timer = setTimeout(
            () => reject(new Error('PlaceOS setup timed out.')),
            timeout_ms,
        );
        setup_promise.then(
            () => {
                clearTimeout(timer);
                resolve();
            },
            (error) => {
                clearTimeout(timer);
                reject(error);
            },
        );
    });
}
