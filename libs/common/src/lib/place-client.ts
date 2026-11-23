import { signal } from '@angular/core';
import {
    browserEnvironment,
    configure,
    createAuthSession,
    createRealtime,
    type AuthEnvironment,
    type AuthSession,
    type AuthSessionConfig,
    type Credential,
    type DomainAuthority,
    type KeyValueStore,
    type LogEntry,
    type Realtime,
} from '@placeos/ts-client';
import {
    consoleLog,
    mockFetch,
    mockRealtimeEnvironment,
} from '@placeos/ts-client/compat';

/**
 * The PlaceOS client of the application: one login session, the configured
 * REST client and one realtime socket. `setupPlace` in `placeos.ts` calls
 * `startPlaceClient`. The other functions read the state.
 */

/** The authority of mock mode. The same values as 6.x of ts-client. */
const MOCK_AUTHORITY: DomainAuthority = {
    id: 'mock-authority',
    name: 'localhost:4200',
    description: '',
    domain: 'localhost:4200',
    login_url: '/login?continue={{url}}',
    logout_url: '/logout',
    session: true,
    production: false,
    config: {},
    version: '2.0.0',
    metrics: null,
    sentry_dsn: null,
    email_domains: [],
};

/** Path of the REST API on the server */
export const API_PATH = '/api/engine/v2';
/**
 * Wait before the client tries again after the authority failed to load or
 * the realtime client stopped after its last reconnect attempt.
 */
const RECOVERY_DELAY_MS = 30_000;

interface PlaceClient {
    readonly session: AuthSession | null;
    readonly mock: boolean;
    /** Origin of the server, or `''` for the origin of the page */
    readonly base_url: string;
    /** Headers that each request sends, such as `X-App-Name` */
    readonly headers: Readonly<Record<string, string>>;
    /**
     * Made on first use, so that it reads the fixed device flag after the
     * startup applied the API key. See `placeRealtime`.
     */
    realtime: Realtime | null;
    /** Removes the listeners and timers of this client */
    readonly stop: () => void;
}

let _client: PlaceClient | null = null;
const _online = signal(false);
/** Callers of `waitForOnline` that wait for `_online` */
let _online_waiters: (() => void)[] = [];
let _markStarted: () => void = () => {};
const _started = new Promise<void>((resolve) => (_markStarted = resolve));

function setOnline(online: boolean) {
    _online.set(online);
    if (!online) return;
    const waiters = _online_waiters;
    _online_waiters = [];
    for (const resolve of waiters) resolve();
}

/** Fields of a login log entry that hold no server text, token or URL */
const AUTH_LOG_FIELDS: ReadonlySet<string> = new Set([
    'attempt',
    'attempts',
    'credential',
    'expires_in_seconds',
    'fixed_device',
    'grant',
    'reason',
    'status',
    'trusted',
]);

/**
 * `consoleLog` without the details that can hold personal data or a token:
 * an error argument keeps only its `kind` and `status`, and a login entry
 * keeps only the fields of `AUTH_LOG_FIELDS`. Server text, such as the body
 * of a failed response or the description of a refused login, and the URL
 * of a redirect are removed. The app can send its logs to the remote logger.
 */
function privateLog(entry: LogEntry): void {
    const auth = entry.scope === 'auth';
    consoleLog({
        ...entry,
        args: entry.args.map((arg) => privateArg(arg, auth)),
    });
}

function privateArg(arg: unknown, auth: boolean): unknown {
    if (typeof arg !== 'object' || arg === null) return arg;
    const safe = Object.fromEntries(
        Object.entries(arg).filter(
            ([key]) => (!auth && key !== 'error') || AUTH_LOG_FIELDS.has(key),
        ),
    );
    if (!('error' in arg)) return safe;
    const error = arg.error;
    if (typeof error !== 'object' || error === null) return safe;
    const kind = 'kind' in error ? error.kind : undefined;
    const status = 'status' in error ? error.status : undefined;
    return { ...safe, error: { kind, status } };
}

/**
 * The browser parts of a login session, with a switch that retires them.
 * `session.stop()` does not end a login attempt that runs, so a replaced
 * session could still exchange a code and write its tokens over the tokens
 * of the new session with the same client ID. After `retire()`, its requests
 * fail, and it cannot write to the storage, change the URL or navigate. It
 * can still read.
 */
function retirable(environment: AuthEnvironment) {
    let retired = false;
    const guard = (store: KeyValueStore): KeyValueStore => ({
        get: (key) => store.get(key),
        keys: () => store.keys(),
        set: (key, value) => {
            if (!retired) store.set(key, value);
        },
        remove: (key) => {
            if (!retired) store.remove(key);
        },
    });
    return {
        environment: {
            ...environment,
            fetch: (url: string, init: RequestInit) =>
                retired
                    ? Promise.reject(
                          new Error('The login session was replaced.'),
                      )
                    : environment.fetch(url, init),
            storage: guard(environment.storage),
            session_storage: guard(environment.session_storage),
            navigate: (url: string) => {
                if (!retired) environment.navigate(url);
            },
            replaceUrl: (url: string) => {
                if (!retired) environment.replaceUrl(url);
            },
        } satisfies AuthEnvironment,
        retire: () => (retired = true),
    };
}

/**
 * 6.x of ts-client could keep an empty `<client_id>_trust`, `_trusted` or
 * `_fixed_device`, and then used the flag without the client ID. 7.x uses the
 * empty value, so a trusted device would stop using its saved tokens. Remove
 * the empty values; keep a value such as `false`.
 */
function removeEmptyDeviceFlags(client_id: string, storage: KeyValueStore) {
    for (const name of ['trust', 'trusted', 'fixed_device']) {
        const key = `${client_id}_${name}`;
        if (storage.get(key) === '') storage.remove(key);
    }
}

export interface PlaceClientOptions {
    readonly base_url: string;
    readonly mock: boolean;
    readonly headers: Readonly<Record<string, string>>;
    /** The login settings. Not used in mock mode. */
    readonly auth: Omit<AuthSessionConfig, 'base_url' | 'headers' | 'log'>;
}

/**
 * Makes the login session and configures the REST client. The caller then
 * calls `session.start()` to log in; mock mode has no session. A second call
 * replaces the client, such as when a native app changes its server.
 */
export function startPlaceClient(options: PlaceClientOptions): PlaceClient {
    _client?.stop();
    setOnline(false);
    const { base_url, mock, headers } = options;
    if (mock) {
        configure({
            base_url,
            auth: { kind: 'none' },
            headers,
            fetch: mockFetch,
            missing_fields: 'zero',
            log: privateLog,
        });
        _client = {
            session: null,
            mock,
            base_url,
            headers,
            realtime: null,
            stop: () => _client?.realtime?.stop(),
        };
        setOnline(true);
        _markStarted();
        return _client;
    }
    const { environment, retire } = retirable(
        options.auth.environment ?? browserEnvironment(),
    );
    const session = createAuthSession({
        ...options.auth,
        environment,
        base_url,
        headers,
        log: privateLog,
    });
    removeEmptyDeviceFlags(session.client_id, environment.storage);
    const all_headers = { ...headers, 'X-App-Id': session.client_id };
    configure({
        base_url,
        auth: session.client_auth,
        headers: all_headers,
        log: privateLog,
    });
    let retry: ReturnType<typeof setTimeout> | undefined;
    const client: PlaceClient = {
        session,
        mock,
        base_url,
        headers: all_headers,
        realtime: null,
        stop: () => {
            remove_listener();
            clearTimeout(retry);
            session.stop();
            retire();
            client.realtime?.stop();
        },
    };
    // 6.x was online once the authority loaded and the first login ended.
    // 6.x also loaded the authority again until it loaded, so a device that
    // starts without a network comes online when the network is back.
    const remove_listener = session.subscribe((status) => {
        if (status.kind === 'loading') return;
        const has_authority = session.authority() !== null;
        setOnline(has_authority);
        if (has_authority) {
            clearTimeout(retry);
            retry = undefined;
            return;
        }
        const unavailable =
            status.kind === 'signed_out' &&
            status.error?.kind === 'authority_unavailable';
        if (!unavailable || retry !== undefined) return;
        retry = setTimeout(() => {
            retry = undefined;
            if (session.authority() === null) void session.start();
        }, RECOVERY_DELAY_MS);
    });
    _client = client;
    _markStarted();
    return client;
}

/**
 * Stops and retires the client, such as after a native setup failed, so its
 * login attempt cannot write tokens or set the app online while the user
 * picks another server. `startPlaceClient` makes a new client.
 */
export function stopPlaceClient(): void {
    _client?.stop();
    _client = null;
    setOnline(false);
}

/**
 * Resolves when `startPlaceClient` configured the REST client, so a request
 * does not go out before the client exists.
 */
export function placeClientStarted(): Promise<void> {
    return _started;
}

/** The login session. `null` before setup and in mock mode. */
export function placeSession(): AuthSession | null {
    return _client?.session ?? null;
}

/**
 * The realtime client. Throws before `setupPlace`. After its last reconnect
 * attempt fails, it starts again after `RECOVERY_DELAY_MS`, as 6.x reloaded
 * the page then.
 */
export function placeRealtime(): Realtime {
    const client = _client;
    if (!client) throw new Error('Call setupPlace before realtime calls.');
    if (client.realtime) return client.realtime;
    const realtime = client.session
        ? createRealtime({
              base_url: client.base_url,
              auth: client.session.client_auth,
              fixed_device: client.session.isFixedDevice(),
              log: privateLog,
          })
        : createRealtime({
              base_url: client.base_url,
              auth: { kind: 'none' },
              environment: mockRealtimeEnvironment(),
              log: privateLog,
          });
    let restart: ReturnType<typeof setTimeout> | undefined;
    realtime.subscribe((status) => {
        if (status.kind !== 'failed' || restart !== undefined) return;
        restart = setTimeout(() => {
            restart = undefined;
            if (_client === client) realtime.start();
        }, RECOVERY_DELAY_MS);
    });
    client.realtime = realtime;
    return realtime;
}

/** Whether the realtime socket is open. False before `setupPlace` */
export function realtimeConnected(): boolean {
    return _client?.realtime?.status().kind === 'open';
}

/** Whether requests go to the mock endpoints */
export function isMock(): boolean {
    return _client?.mock ?? false;
}

/** The authority of the server, or `undefined` before it loads */
export function authority(): DomainAuthority | undefined {
    if (_client?.mock) return MOCK_AUTHORITY;
    return _client?.session?.authority() ?? undefined;
}

/** True after the authority loaded and the first login ended */
export function isOnline(): boolean {
    return _online();
}

/** Signal of `isOnline` */
export function onlineState() {
    return _online.asReadonly();
}

/** Resolves when `isOnline` is true. */
export function waitForOnline(): Promise<void> {
    if (_online()) return Promise.resolve();
    return new Promise((resolve) => _online_waiters.push(resolve));
}

/**
 * The credential that requests send now. `null` when there is none, also
 * in mock mode. This does not make requests.
 */
export function currentCredential(): Credential | null {
    return _client?.session?.credential() ?? null;
}

/**
 * The access token of the session. `'x-api-key'` with an API key,
 * `'mock-token'` in mock mode, and `''` without a valid credential, as 6.x.
 */
export function token(): string {
    if (_client?.mock) return 'mock-token';
    const credential = currentCredential();
    if (credential?.kind === 'bearer') return credential.token;
    if (credential?.kind === 'api_key') return 'x-api-key';
    return '';
}

/** The API key of a fixed device, or `''` */
export function apiKey(): string {
    const credential = currentCredential();
    return credential?.kind === 'api_key' ? credential.key : '';
}

/** The OAuth client ID, or `''` before setup and in mock mode */
export function clientId(): string {
    return _client?.session?.client_id ?? '';
}

/** Origin of the API server, such as `https://placeos.example.com` */
export function apiOrigin(): string {
    return _client?.base_url || location.origin;
}

/** URL of the REST API, such as `https://placeos.example.com/api/engine/v2` */
export function apiEndpoint(): string {
    return `${apiOrigin()}${API_PATH}`;
}

/** Whether the application runs on a device in a fixed location */
export function isFixedDevice(): boolean {
    return _client?.session?.isFixedDevice() ?? false;
}

/** Uses an access token from another source, such as a Teams sign-in */
export function setToken(token: string, expires_at_ms?: number): void {
    _client?.session?.useToken(token, expires_at_ms);
}

/** Uses an API key, for a fixed device */
export function setApiKey(key: string): void {
    _client?.session?.useApiKey(key);
}

/** Removes the access token, so the next request gets a new one */
export function invalidateToken(): void {
    _client?.session?.invalidateToken();
}

/**
 * Gets a valid access token. Resolves with `token()`, or rejects with the
 * error of the login.
 */
export async function authorise(): Promise<string> {
    const session = _client?.session;
    if (!session) return token();
    const result = await session.authorize();
    if (result.ok === false) throw result.error;
    return token();
}

/** Ends the session on the server and goes to the logout page */
export async function logout(): Promise<void> {
    await _client?.session?.logout();
}

/**
 * A `fetch` with the credential and the headers of the client, for an
 * endpoint that has no generated operation. In mock mode it goes to the mock
 * endpoints. After a 401 or a 511 it asks the session for a new credential
 * and sends one time again. As the generated operations do, a request with an
 * API key does not follow a redirect.
 * @param path Path on the API server, such as `/api/engine/v2/zones`. A full
 * URL must be on the API server.
 */
export async function placeFetch(
    path: string,
    init: RequestInit = {},
): Promise<Response> {
    const origin = new URL(apiOrigin()).origin;
    const url = new URL(path, `${origin}/`);
    if (url.origin !== origin) {
        throw new Error(
            `placeFetch sends only to the API server: ${url.origin}`,
        );
    }
    const auth = _client?.session?.client_auth;
    const send = async (credential: Credential | null) => {
        const headers = new Headers(init.headers);
        for (const [key, value] of Object.entries(_client?.headers ?? {})) {
            if (!headers.has(key)) headers.set(key, value);
        }
        if (credential?.kind === 'bearer') {
            headers.set('Authorization', `Bearer ${credential.token}`);
        } else if (credential?.kind === 'api_key') {
            headers.set('X-API-Key', credential.key);
        }
        const request: RequestInit = {
            ...init,
            headers,
            ...(credential?.kind === 'api_key' ? { redirect: 'error' } : {}),
        };
        return _client?.mock
            ? mockFetch(url.href, request)
            : fetch(url.href, request);
    };
    if (auth?.kind !== 'credential') return send(null);
    const credential = await auth.credential();
    const response = await send(credential);
    if (!credential) return response;
    if (response.status !== 401 && response.status !== 511) return response;
    const status = response.status === 511 ? 511 : 401;
    if (!(await auth.rejected(status, credential))) return response;
    return send(await auth.credential());
}

/**
 * `placeFetch` that parses a JSON body, and rejects on a status that is
 * not 2xx with the status in the error, as the 6.x request functions did.
 */
export async function placeFetchJson<T>(
    path: string,
    init: RequestInit = {},
): Promise<T> {
    const response = await placeFetch(path, {
        ...init,
        headers: { 'Content-Type': 'application/json', ...init.headers },
    });
    const text = await response.text();
    if (!response.ok) {
        throw Object.assign(new Error(text || response.statusText), {
            status: response.status,
        });
    }
    return (text ? JSON.parse(text) : null) as T;
}
