import * as ts_client from '@placeos/ts-client';

import { clientId, isOnline, placeSession, token } from '../lib/place-client';
import {
    pastedTokenKey,
    PLACE_SETUP_TIMEOUT,
    PlaceSettings,
    setupPlace,
} from '../lib/placeos';
import { VERSION } from '../lib/version';

// The real login session runs against a stubbed `fetch`. Native detection
// is driven through the real `window.Capacitor` seam that `native-app` reads.
vi.mock('@placeos/ts-client', { spy: true });

const base_settings: PlaceSettings = {
    protocol: 'https:',
    domain: 'example.com',
    port: 443,
    route: '/placeos',
    use_domain: true,
    // No login redirect, so the first login attempt ends at once
    local_login: true,
    mock: false,
};
/** An authority without a session, so the login does not open a frame */
const AUTHORITY = {
    id: 'authority-test',
    name: 'example.com',
    description: '',
    domain: 'example.com',
    login_url: '/login?continue={{url}}',
    logout_url: '/logout',
    session: false,
    production: false,
    config: {},
    version: '2.0.0',
    metrics: null,
    sentry_dsn: null,
    email_domains: [],
};
const native_fetch_key = '__placeos_native_credential_fetch__';
const real_fetch = window.fetch;
const window_store = window as Window &
    typeof globalThis &
    Record<string, unknown>;

function setNative(is_native: boolean) {
    if (is_native) {
        (window as any).Capacitor = { isNativePlatform: () => true };
    } else {
        delete (window as any).Capacitor;
    }
}

/** A `fetch` that serves the authority and records the other requests */
function serveAuthority() {
    return vi.fn(async (input: RequestInfo | URL, _init?: RequestInit) =>
        String(input).endsWith('/auth/authority')
            ? Response.json(AUTHORITY)
            : new Response(null, { status: 404 }),
    );
}

describe('setupPlace', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        delete window_store[native_fetch_key];
        window.fetch = serveAuthority() as typeof window.fetch;
        setNative(false);
    });

    afterEach(() => {
        vi.useRealTimers();
        history.replaceState(null, '', '/');
        delete window_store[native_fetch_key];
        window.fetch = real_fetch;
        setNative(false);
    });

    it('rejects when PlaceOS setup does not settle', async () => {
        vi.useFakeTimers();
        window.fetch = vi.fn(() => new Promise<Response>(() => undefined));

        const result = setupPlace(base_settings);
        const assertion = expect(result).rejects.toThrow(
            'PlaceOS setup timed out',
        );
        await vi.advanceTimersByTimeAsync(PLACE_SETUP_TIMEOUT);

        await assertion;
        vi.useRealTimers();
    });

    it('rejects at the time limit while a token request of a loaded authority waits', async () => {
        await setupPlace(base_settings);
        // A trusted device renews its stored refresh token in the login
        localStorage.setItem('trust', 'true');
        localStorage.setItem(`${clientId()}_refresh_token`, 'refresh-1');
        vi.useFakeTimers();
        window.fetch = vi.fn(async (input: RequestInfo | URL) => {
            const url = String(input);
            if (url.endsWith('/auth/authority'))
                return Response.json(AUTHORITY);
            if (!url.endsWith('/auth/oauth/token')) {
                return new Response(null, { status: 404 });
            }
            // Ends after the limit of setupPlace
            await new Promise((resolve) =>
                setTimeout(resolve, PLACE_SETUP_TIMEOUT + 2_000),
            );
            return Response.json({
                access_token: 'renewed-token',
                refresh_token: 'refresh-2',
                expires_in: 3600,
            });
        });

        const result = setupPlace(base_settings);
        const assertion = expect(result).rejects.toThrow(
            'PlaceOS setup timed out',
        );
        await vi.advanceTimersByTimeAsync(PLACE_SETUP_TIMEOUT);
        await assertion;
        // The login attempt continues after the limit
        await vi.advanceTimersByTimeAsync(2_000);

        expect(token()).toBe('renewed-token');
    });

    it('sends the API key of the options on the first request', async () => {
        const fetch = serveAuthority();
        window.fetch = fetch as typeof window.fetch;
        // Records the credential of the session when the login starts
        const actual =
            await vi.importActual<typeof ts_client>('@placeos/ts-client');
        let credential_at_start: string | undefined;
        vi.mocked(ts_client.createAuthSession).mockImplementationOnce(
            (config) => {
                const session = actual.createAuthSession(config);
                const start = session.start;
                vi.spyOn(session, 'start').mockImplementation(() => {
                    credential_at_start = session.credential()?.kind;
                    return start();
                });
                return session;
            },
        );

        await setupPlace(base_settings, undefined, { api_key: 'key-1' });
        await ts_client.users.current();

        expect(credential_at_start).toBe('api_key');
        const [url, init] = fetch.mock.lastCall;
        expect(String(url)).toContain('/api/engine/v2/users/current');
        expect(new Headers(init?.headers).get('X-API-Key')).toBe('key-1');
    });

    it('removes a stored API key when the options give an empty key', async () => {
        await setupPlace(base_settings);
        const key = `${clientId()}_x-api-key`;
        localStorage.setItem(key, 'old-key');
        const fetch = serveAuthority();
        window.fetch = fetch as typeof window.fetch;

        await setupPlace(base_settings, undefined, { api_key: '' });
        const result = await ts_client.users.current();

        expect(localStorage.getItem(key)).toBeNull();
        expect(result).toMatchObject({
            ok: false,
            error: { kind: 'auth_missing' },
        });
        for (const [, init] of fetch.mock.calls) {
            expect(new Headers(init?.headers).has('X-API-Key')).toBe(false);
        }
    });

    it('passes configured storage through for browser apps', async () => {
        await setupPlace({ ...base_settings, storage: 'session' });

        expect(ts_client.browserEnvironment).toHaveBeenCalledWith('session');
    });

    it('sends the app identity headers on each request', async () => {
        await setupPlace({ ...base_settings, app_name: 'workplace' });

        expect(ts_client.configure).toHaveBeenCalledWith(
            expect.objectContaining({
                base_url: 'https://example.com:443',
                headers: expect.objectContaining({
                    'X-App-Name': 'workplace',
                    'X-App-Date': new Date(VERSION.time).toISOString(),
                    'X-App-Build': VERSION.hash,
                }),
            }),
        );
    });

    it('always uses local storage for native apps', async () => {
        setNative(true);

        await setupPlace({
            ...base_settings,
            app_name: 'workplace',
            storage: 'session',
        });

        expect(ts_client.browserEnvironment).toHaveBeenCalledWith('local');
    });

    it('includes credentials for native auth endpoint requests', async () => {
        const fetch = serveAuthority();
        window.fetch = fetch as typeof window.fetch;
        setNative(true);

        await setupPlace({
            ...base_settings,
            app_name: 'workplace',
        });
        fetch.mockClear();
        await window.fetch('https://example.com/auth/oauth/token', {
            method: 'POST',
        });
        await window.fetch('https://other.example.com/auth/oauth/token', {
            method: 'POST',
        });

        expect(fetch).toHaveBeenNthCalledWith(
            1,
            'https://example.com/auth/oauth/token',
            { method: 'POST', credentials: 'include' },
        );
        expect(fetch).toHaveBeenNthCalledWith(
            2,
            'https://other.example.com/auth/oauth/token',
            { method: 'POST' },
        );
    });

    it('sends the API key of the URL and removes only the key from the URL', async () => {
        history.replaceState(null, '', '/?x-api-key=key-1&level=zone-1');
        const fetch = serveAuthority();
        window.fetch = fetch as typeof window.fetch;

        await setupPlace(base_settings);
        await ts_client.users.current();

        const [url, init] = fetch.mock.lastCall;
        expect(String(url)).toContain('/api/engine/v2/users/current');
        expect(new Headers(init?.headers).get('X-API-Key')).toBe('key-1');
        expect(location.search).toBe('?level=zone-1');
    });

    describe('with a device API key and a key in the URL', () => {
        /** The requests after the authority */
        function apiRequests(fetch: ReturnType<typeof serveAuthority>) {
            return fetch.mock.calls.filter(
                ([url]) => !String(url).endsWith('/auth/authority'),
            );
        }

        beforeEach(() =>
            history.replaceState(null, '', '/?x-api-key=url-key&level=1'),
        );

        it('sends the device key and keeps the other URL parameters', async () => {
            const fetch = serveAuthority();
            window.fetch = fetch as typeof window.fetch;

            await setupPlace(base_settings, undefined, {
                api_key: 'device-key',
            });
            await ts_client.users.current();

            const [url, init] = apiRequests(fetch)[0];
            expect(String(url)).toContain('/api/engine/v2/users/current');
            expect(new Headers(init?.headers).get('X-API-Key')).toBe(
                'device-key',
            );
            expect(location.search).toBe('?level=1');
        });

        it('does not use the URL key when the device key is empty', async () => {
            const fetch = serveAuthority();
            window.fetch = fetch as typeof window.fetch;

            await setupPlace(base_settings, undefined, { api_key: '' });
            await ts_client.users.current();

            expect(localStorage.getItem(`${clientId()}_x-api-key`)).toBeNull();
            for (const [, init] of fetch.mock.calls) {
                expect(new Headers(init?.headers).has('X-API-Key')).toBe(false);
            }
            expect(location.search).toBe('?level=1');
        });

        describe('in the query of a hash route', () => {
            beforeEach(() =>
                history.replaceState(
                    null,
                    '',
                    '/#/rooms?x-api-key=url-key&level=1',
                ),
            );

            it('sends the device key and keeps the route and the other parameters', async () => {
                const fetch = serveAuthority();
                window.fetch = fetch as typeof window.fetch;

                await setupPlace(base_settings, undefined, {
                    api_key: 'device-key',
                });
                await ts_client.users.current();

                const [, init] = apiRequests(fetch)[0];
                expect(new Headers(init?.headers).get('X-API-Key')).toBe(
                    'device-key',
                );
                expect(location.hash).toBe('#/rooms?level=1');
            });

            it('does not use the URL key when the device key is empty', async () => {
                const fetch = serveAuthority();
                window.fetch = fetch as typeof window.fetch;

                await setupPlace(base_settings, undefined, { api_key: '' });
                await ts_client.users.current();

                expect(
                    localStorage.getItem(`${clientId()}_x-api-key`),
                ).toBeNull();
                for (const [, init] of fetch.mock.calls) {
                    expect(new Headers(init?.headers).has('X-API-Key')).toBe(
                        false,
                    );
                }
            });
        });

        it('sends the device key when the hash has the URL key as parameters', async () => {
            history.replaceState(null, '', '/#x-api-key=url-key&level=1');
            const fetch = serveAuthority();
            window.fetch = fetch as typeof window.fetch;

            await setupPlace(base_settings, undefined, {
                api_key: 'device-key',
            });
            await ts_client.users.current();

            const [, init] = apiRequests(fetch)[0];
            expect(new Headers(init?.headers).get('X-API-Key')).toBe(
                'device-key',
            );
        });
    });

    it('starts the session again 30 seconds after the authority failed', async () => {
        vi.useFakeTimers();
        window.fetch = vi.fn(async () => new Response(null, { status: 503 }));

        const result = setupPlace(base_settings, 0);
        const assertion = expect(result).rejects.toThrow(
            'authority_unavailable',
        );
        // The session tries the authority 5 times in 3 seconds
        await vi.advanceTimersByTimeAsync(3_000);
        await assertion;
        window.fetch = serveAuthority() as typeof window.fetch;
        await vi.advanceTimersByTimeAsync(29_000);
        expect(isOnline()).toBe(false);
        await vi.advanceTimersByTimeAsync(1_000);

        expect(isOnline()).toBe(true);
    });

    it('does not start the session again when a request loaded the authority first', async () => {
        vi.useFakeTimers();
        window.fetch = vi.fn(async () => new Response(null, { status: 503 }));

        const result = setupPlace(base_settings, 0);
        const assertion = expect(result).rejects.toThrow(
            'authority_unavailable',
        );
        await vi.advanceTimersByTimeAsync(3_000);
        await assertion;
        window.fetch = serveAuthority() as typeof window.fetch;
        const session = placeSession()!;
        await session.authorize();
        expect(isOnline()).toBe(true);
        const start = vi.spyOn(session, 'start');
        expect(vi.getTimerCount()).toBe(0);
        await vi.advanceTimersByTimeAsync(30_000);

        expect(start).not.toHaveBeenCalled();
    });

    describe('a pasted token', () => {
        /** Keeps the paste and an old refresh token, as before a reload */
        async function pasteAfterOldLogin() {
            await setupPlace(base_settings);
            const refresh_key = `${clientId()}_refresh_token`;
            localStorage.setItem(refresh_key, 'old-refresh');
            sessionStorage.setItem(refresh_key, 'old-refresh');
            sessionStorage.setItem(
                pastedTokenKey(clientId()),
                JSON.stringify({
                    token: 'pasted-token',
                    refresh_token: 'pasted-refresh',
                    expires_at: Date.now() + 3_600_000,
                }),
            );
            return refresh_key;
        }

        afterEach(() => sessionStorage.clear());

        it('is used for the first request, one time, without a refresh token', async () => {
            const refresh_key = await pasteAfterOldLogin();
            const fetch = serveAuthority();
            window.fetch = fetch as typeof window.fetch;

            await setupPlace(base_settings);
            await ts_client.users.current();

            const [url, init] = fetch.mock.lastCall;
            expect(String(url)).toContain('/api/engine/v2/users/current');
            expect(new Headers(init?.headers).get('Authorization')).toBe(
                'Bearer pasted-token',
            );
            expect(
                sessionStorage.getItem(pastedTokenKey(clientId())),
            ).toBeNull();
            // The old account is not renewed, and an untrusted app keeps no
            // refresh token in storage
            expect(localStorage.getItem(refresh_key)).toBeNull();
            expect(sessionStorage.getItem(refresh_key)).toBeNull();
        });

        it('keeps its refresh token on a trusted device', async () => {
            const refresh_key = await pasteAfterOldLogin();
            localStorage.setItem('trust', 'true');

            await setupPlace(base_settings);

            expect(token()).toBe('pasted-token');
            expect(localStorage.getItem(refresh_key)).toBe('pasted-refresh');
        });

        it('is not used by an app with another client ID', async () => {
            await setupPlace(base_settings);
            const key = pastedTokenKey('other-client');
            const pasted = JSON.stringify({
                token: 'pasted-token',
                expires_at: Date.now() + 3_600_000,
            });
            sessionStorage.setItem(key, pasted);

            await setupPlace(base_settings);

            expect(token()).toBe('');
            expect(sessionStorage.getItem(key)).toBe(pasted);
        });
    });

    describe('a pasted token with session storage', () => {
        afterEach(() => sessionStorage.clear());

        it('keeps its refresh token in session storage on a trusted session', async () => {
            const settings: PlaceSettings = {
                ...base_settings,
                storage: 'session',
            };
            await setupPlace(settings);
            const refresh_key = `${clientId()}_refresh_token`;
            // The session reads the flag from its storage
            sessionStorage.setItem('trust', 'true');
            sessionStorage.setItem(
                pastedTokenKey(clientId()),
                JSON.stringify({
                    token: 'pasted-token',
                    refresh_token: 'pasted-refresh',
                    expires_at: Date.now() + 3_600_000,
                }),
            );

            await setupPlace(settings);

            expect(token()).toBe('pasted-token');
            expect(sessionStorage.getItem(refresh_key)).toBe('pasted-refresh');
            expect(localStorage.getItem(refresh_key)).toBeNull();
        });
    });

    describe('device flags of 6.x', () => {
        /** Saves a token of a trusted device, and the flag of the client */
        async function saveTrustedToken(trusted: string) {
            await setupPlace(base_settings);
            const id = clientId();
            localStorage.setItem('trusted', 'true');
            localStorage.setItem(`${id}_trusted`, trusted);
            localStorage.setItem(`${id}_access_token`, 'saved-token');
            localStorage.setItem(
                `${id}_expires_at`,
                `${Date.now() + 3_600_000}`,
            );
            return id;
        }

        it('removes an empty flag, so a trusted device uses its saved token', async () => {
            const id = await saveTrustedToken('');

            await setupPlace(base_settings);

            expect(localStorage.getItem(`${id}_trusted`)).toBeNull();
            expect(token()).toBe('saved-token');
        });

        it('keeps a flag that is not empty', async () => {
            const id = await saveTrustedToken('false');

            await setupPlace(base_settings);

            expect(localStorage.getItem(`${id}_trusted`)).toBe('false');
            expect(token()).toBe('');
        });
    });
});
