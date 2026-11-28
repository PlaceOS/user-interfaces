vi.mock('@placeos/ts-client', { spy: true });

import {
    browserEnvironment,
    configure,
    createAuthSession,
    createRealtime,
    zones,
    type Realtime,
    type RealtimeStatus,
} from '@placeos/ts-client';
import {
    registerMockEndpoint,
    registerSystem,
} from '@placeos/ts-client/compat';

import {
    isOnline,
    placeFetch,
    placeRealtime,
    placeSession,
    startPlaceClient,
    stopPlaceClient,
} from '../lib/place-client';
import { getModule } from '../lib/realtime';
import { startFakePlaceClient, type FakeSession } from './fake-session';
import { startMockPlaceClient } from './test-helpers';

afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
});

/** An authority without a session, so the login does not open a frame */
const AUTHORITY = {
    id: 'authority-test',
    name: 'localhost',
    description: '',
    domain: 'localhost',
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

/** The headers and options of each request of a stubbed global `fetch` */
function stubFetch(...statuses: number[]) {
    const fetch = vi.fn(
        async (_url: string, _init: RequestInit) =>
            new Response(null, { status: statuses.shift() ?? 200 }),
    );
    vi.stubGlobal('fetch', fetch);
    return fetch;
}

function signedIn(): FakeSession {
    const fake = startFakePlaceClient();
    fake.signIn({ id: 'authority-1' }, 'token-1');
    return fake;
}

describe('placeFetch', () => {
    it('rejects a URL on another origin', async () => {
        signedIn();
        const fetch = stubFetch();

        await expect(
            placeFetch('https://other.example.com/api/engine/v2/zones'),
        ).rejects.toThrow('placeFetch sends only to the API server');
        expect(fetch).not.toHaveBeenCalled();
    });

    it('sends one retry after a 511 when the session renews the credential', async () => {
        const fake = signedIn();
        const auth = fake.session.client_auth;
        if (auth.kind !== 'credential') throw new Error('Expected a session');
        const rejected = vi
            .spyOn(auth, 'rejected')
            .mockImplementation(async () => {
                fake.setCredential({ kind: 'bearer', token: 'token-2' });
                return true;
            });
        const fetch = stubFetch(511, 200);

        const response = await placeFetch('/api/engine/v2/zones');

        expect(response.status).toBe(200);
        expect(rejected).toHaveBeenCalledWith(511, {
            kind: 'bearer',
            token: 'token-1',
        });
        expect(fetch).toHaveBeenCalledTimes(2);
        const headers = new Headers(fetch.mock.calls[1][1].headers);
        expect(headers.get('Authorization')).toBe('Bearer token-2');
    });

    it('does not follow a redirect with an API key', async () => {
        signedIn().setCredential({ kind: 'api_key', key: 'key-1' });
        const fetch = stubFetch();

        await placeFetch('/api/engine/v2/zones');

        const [, init] = fetch.mock.calls[0];
        expect(init.redirect).toBe('error');
        expect(new Headers(init.headers).get('X-API-Key')).toBe('key-1');
    });
});

describe('placeRealtime', () => {
    it('starts again 30 seconds after the realtime client failed, one time', async () => {
        vi.useFakeTimers();
        signedIn();
        const listeners: ((status: RealtimeStatus) => void)[] = [];
        const start = vi.fn();
        const realtime: Partial<Realtime> = {
            start,
            stop: vi.fn(),
            subscribe: (listener) => {
                listeners.push(listener);
                return () => undefined;
            },
        };
        vi.mocked(createRealtime).mockReturnValueOnce(realtime as Realtime);

        placeRealtime();
        for (const listener of listeners) listener({ kind: 'failed' });
        for (const listener of listeners) listener({ kind: 'failed' });
        await vi.advanceTimersByTimeAsync(29_999);
        expect(start).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(1);

        expect(start).toHaveBeenCalledTimes(1);
    });
});

/** Options of a client that uses the real session, without a login redirect */
const REAL_OPTIONS = {
    base_url: '',
    mock: false,
    headers: {},
    auth: {
        redirect_uri: 'http://localhost/oauth-resp.html',
        scope: 'public',
        grant: { kind: 'code' },
        handle_login: false,
    },
} as const;

/** Makes `startPlaceClient` use the real session, not the fake session */
async function useRealSession() {
    const actual =
        await vi.importActual<typeof import('@placeos/ts-client')>(
            '@placeos/ts-client',
        );
    vi.mocked(createAuthSession).mockImplementation(actual.createAuthSession);
}

/**
 * Starts a client with the real session on a trusted device, and its login
 * with a code and the nonce in the URL. The authority loads only after
 * `releaseAuthority`, and the token endpoint gives tokens.
 */
async function startLoginWithCode() {
    await useRealSession();
    let releaseAuthority: () => void = () => undefined;
    const authority_loaded = new Promise<void>(
        (resolve) => (releaseAuthority = resolve),
    );
    const fetch = vi.fn(async (url: string, _init: RequestInit) => {
        if (url.endsWith('/auth/authority')) {
            await authority_loaded;
            return Response.json(AUTHORITY);
        }
        return Response.json({
            access_token: 'old-token',
            refresh_token: 'old-refresh',
            expires_in: 3600,
        });
    });
    vi.stubGlobal('fetch', fetch);
    // A trusted device keeps its tokens in storage
    localStorage.setItem('trust', 'true');
    const session = startPlaceClient(REAL_OPTIONS).session!;
    const id = session.client_id;
    localStorage.setItem(`${id}_nonce`, 'nonce-1');
    history.replaceState(null, '', '/?code=code-1&state=nonce-1');
    const login = session.start();
    await vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    return { fetch, id, login, releaseAuthority };
}

describe('startPlaceClient', () => {
    afterEach(() => {
        history.replaceState(null, '', '/');
        localStorage.clear();
    });

    it('ignores the status of the session that it replaced', () => {
        const old = startFakePlaceClient();
        startFakePlaceClient();

        old.signIn();

        expect(isOnline()).toBe(false);
    });

    it('stops the login of the replaced session from writing tokens', async () => {
        const { fetch, id, login, releaseAuthority } =
            await startLoginWithCode();
        // The same redirect URI, so the same client ID and storage keys
        startPlaceClient(REAL_OPTIONS);
        // The new session keeps a refresh token and has no access token, so
        // the old session would exchange its code
        localStorage.setItem(`${id}_refresh_token`, 'new-refresh');
        releaseAuthority();
        await login;

        const urls = fetch.mock.calls.map(([url]) => url);
        expect(urls.some((url) => url.endsWith('/auth/oauth/token'))).toBe(
            false,
        );
        expect(localStorage.getItem(`${id}_access_token`)).toBeNull();
        expect(localStorage.getItem(`${id}_refresh_token`)).toBe('new-refresh');
    });

    it('stops the replaced session from removing the login parameters of the URL', async () => {
        await useRealSession();
        vi.stubGlobal(
            'fetch',
            vi.fn(async (url: string) =>
                url.endsWith('/auth/authority')
                    ? Response.json(AUTHORITY)
                    : Response.json({
                          access_token: 'new-token',
                          expires_in: 3600,
                      }),
            ),
        );
        const old = startPlaceClient(REAL_OPTIONS).session!;
        // Loads the authority, so a later attempt makes no requests
        await old.start();
        const current = startPlaceClient(REAL_OPTIONS).session!;
        localStorage.setItem(`${current.client_id}_nonce`, 'nonce-1');
        history.replaceState(null, '', '/?code=code-1&state=nonce-1');

        // Such as a caller that kept the old session
        await old.authorize();
        expect(location.search).toBe('?code=code-1&state=nonce-1');
        await current.start();

        expect(current.credential()).toEqual({
            kind: 'bearer',
            token: 'new-token',
        });
    });

    it('stopPlaceClient stops the client and the login that runs', async () => {
        const { id, login, releaseAuthority } = await startLoginWithCode();

        stopPlaceClient();
        releaseAuthority();
        await login;

        expect(isOnline()).toBe(false);
        expect(placeSession()).toBeNull();
        expect(localStorage.getItem(`${id}_access_token`)).toBeNull();
    });

    it('removes the empty device flags of 6.x from the storage of the session', () => {
        const { session } = startFakePlaceClient();
        const id = session.client_id;
        sessionStorage.setItem(`${id}_trusted`, '');
        sessionStorage.setItem(`${id}_fixed_device`, '');
        sessionStorage.setItem(`${id}_trust`, 'false');
        // Another storage than the one of the session
        localStorage.setItem(`${id}_trusted`, '');

        startPlaceClient({
            base_url: '',
            mock: false,
            headers: {},
            auth: {
                redirect_uri: 'http://localhost/oauth-resp.html',
                scope: 'public',
                grant: { kind: 'code' },
                environment: browserEnvironment('session'),
            },
        });

        expect(sessionStorage.getItem(`${id}_trusted`)).toBeNull();
        expect(sessionStorage.getItem(`${id}_fixed_device`)).toBeNull();
        expect(sessionStorage.getItem(`${id}_trust`)).toBe('false');
        expect(localStorage.getItem(`${id}_trusted`)).toBe('');
        sessionStorage.clear();
        localStorage.clear();
    });
});

describe('client logs', () => {
    afterEach(() => (window.debug = false));

    it('keep only the kind and the status of an error', async () => {
        startMockPlaceClient();
        registerMockEndpoint({
            path: '/api/engine/v2/zones/:id',
            method: 'GET',
            callback: () => {
                throw Object.assign(new Error('Private detail'), {
                    status: 500,
                });
            },
        });
        window.debug = true;
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

        await zones.show({ id: 'zone-1' });
        // The URL of a login redirect can hold a token in its return URL
        const log = vi.mocked(configure).mock.lastCall?.[0].log;
        log?.({
            scope: 'auth',
            level: 'warn',
            args: [
                'not signed in',
                {
                    error: {
                        kind: 'redirecting',
                        url: 'https://login.example.com/?continue=secret',
                    },
                },
            ],
        });

        const errors = warn.mock.calls
            .flat()
            .filter(
                (arg): arg is { error: object } =>
                    typeof arg === 'object' && arg !== null && 'error' in arg,
            )
            .map((arg) => arg.error);
        expect(errors).toEqual([
            { kind: 'http', status: 500 },
            { kind: 'redirecting' },
        ]);
    });

    it('keep only the safe fields of a login entry and remove server text', () => {
        startFakePlaceClient();
        window.debug = true;
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
        // The log sink that the session writes to
        const log = vi.mocked(createAuthSession).mock.lastCall?.[0].log;
        if (!log) throw new Error('Expected the log of the session');

        log({
            scope: 'auth',
            level: 'warn',
            args: [
                'login refused',
                { error: 'access_denied', description: 'user x@y' },
                { status: 400, message: 'invalid_grant: user x@y' },
                { status: 400, grant: 'code', body: 'private' },
            ],
        });
        // The path of a redirect can name the tenant or the user
        log({
            scope: 'auth',
            level: 'warn',
            args: ['redirecting', { path: '/login/x@y', attempt: 1 }],
        });
        log({
            scope: 'http',
            level: 'warn',
            args: [
                'request failed',
                {
                    name: 'zones.show',
                    method: 'GET',
                    error: { kind: 'http', status: 500, body: 'private' },
                },
            ],
        });

        const objects = warn.mock.calls
            .flat()
            .filter((arg) => typeof arg === 'object' && arg !== null);
        expect(objects).toEqual([
            {},
            { status: 400 },
            { status: 400, grant: 'code' },
            { attempt: 1 },
            {
                name: 'zones.show',
                method: 'GET',
                error: { kind: 'http', status: 500 },
            },
        ]);
    });
});

describe('getModule', () => {
    // Stops the mock socket, its bindings and its keep-alive
    afterEach(() => stopPlaceClient());

    it('rejects with the message of the driver', async () => {
        startMockPlaceClient();
        registerSystem('sys-1', {
            Bookings: [
                {
                    book: () => {
                        throw new Error('Room is taken');
                    },
                },
            ],
        });

        await expect(
            getModule('sys-1', 'Bookings').execute('book'),
        ).rejects.toMatchObject({
            name: 'ModuleCallFailed',
            message: 'Room is taken',
        });
    });

    it('gives a batch of values to each listener when one listener throws', async () => {
        startMockPlaceClient();
        const system = registerSystem('sys-1', {
            Lights: [{ level: 1, scene: 'a' }],
        });
        const console_error = vi
            .spyOn(console, 'error')
            .mockImplementation(() => undefined);
        const lights = getModule('sys-1', 'Lights');
        lights.variable('level').subscribe(() => {
            throw new Error('Broken listener');
        });
        const scene = vi.fn();
        lights.variable('scene').subscribe(scene);
        await vi.waitFor(() => expect(scene).toHaveBeenCalledWith('a'));

        // Both changes arrive in one batch
        system['Lights'][0]['level'] = 2;
        system['Lights'][0]['scene'] = 'b';

        await vi.waitFor(() => expect(scene).toHaveBeenLastCalledWith('b'));
        expect(console_error).toHaveBeenCalledWith(
            'sys-1 Lights_1.level',
            expect.any(Error),
        );
    });
});
