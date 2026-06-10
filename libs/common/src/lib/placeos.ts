import { PlaceAuthOptions, setup } from '@placeos/ts-client';
import { getNativeRedirectUri, isNativeApp } from './native-app';
import { notifyInfo } from './notifications';

const NATIVE_CREDENTIAL_FETCH_KEY = '__placeos_native_credential_fetch__';

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
    const challenge = randomString();
    const verify = await sha256Base64Url(challenge);
    localStorage.setItem(`${client_id}_nonce`, nonce);
    sessionStorage.setItem(`${client_id}_challenge`, challenge);
    return (
        `${url}/auth/oauth/authorize?response_type=code` +
        `&client_id=${encodeURIComponent(client_id)}` +
        `&state=${encodeURIComponent(nonce)}` +
        `&redirect_uri=${encodeURIComponent(redirect_uri)}` +
        `&scope=${encodeURIComponent('public')}` +
        '&code_challenge_method=S256' +
        `&code_challenge=${encodeURIComponent(verify)}`
    );
}

/**
 * Initialise the PlaceOS API library
 */
export async function setupPlace(settings: PlaceSettings): Promise<void> {
    const protocol = settings.protocol || location.protocol;
    const host = settings.domain || location.hostname;
    const port = settings.port || location.port;
    const host_with_port = `${host}${port ? ':' + port : ''}`;
    const url = settings.use_domain
        ? `${protocol}//${host_with_port}`
        : location.origin;
    const route = (location.pathname + '/').replace('//', '/');
    const native = isNativeApp();
    const mock =
        settings.mock ||
        location.href.includes('mock=true') ||
        localStorage.getItem('mock') === 'true';
    // Generate configuration object
    const config: PlaceAuthOptions = {
        auth_type: 'auth_code',
        scope: 'public',
        host: host_with_port,
        secure: native || protocol === 'https:',
        auth_uri: `${url}/auth/oauth/authorize`,
        token_uri: `${url}/auth/oauth/token`,
        redirect_uri: native
            ? await getNativeRedirectUri(settings.app_name, settings.domain)
            : `${location.origin}${route}oauth-resp.html`,
        storage: native ? 'local' : settings.storage,
        handle_login: native ? false : !settings.local_login,
        use_iframe: !native,
        mock,
        delay: 300,
    };
    if (native)
        setupNativeCredentialedFetch([config.auth_uri, config.token_uri]);
    if (localStorage) {
        localStorage.setItem(
            'mock',
            `${!!mock && !location.href.includes('mock=false')}`,
        );
    }
    if (mock) {
        notifyInfo('Application in mock mode.');
    }
    return setup(config);
}
