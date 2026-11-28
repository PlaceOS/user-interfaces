import { configure, type FetchFunction } from '@placeos/ts-client';
import { type FakeSession, startFakePlaceClient } from './fake-session';

/** A request that the stub API got */
export interface StubRequest {
    readonly method: string;
    readonly url: URL;
    /** The JSON body, or `undefined` */
    readonly body: unknown;
}

/** Gives the response data. Throw `{ status }` to send that HTTP status. */
export type StubHandler = (request: StubRequest) => unknown;

export interface StubApi {
    readonly fake: FakeSession;
    /** Each request, in order */
    readonly requests: StubRequest[];
    /**
     * Answers `method path` with `handler`. A `:name` segment of the path
     * matches one segment of the URL. A later handler replaces an earlier one.
     */
    on(method: string, path: string, handler: StubHandler): void;
}

/** Most handlers of one test */
const HANDLERS_MAX = 64;

/**
 * Starts the PlaceOS client with a fake login session and an API that the
 * test answers. The REST and staff operations and `placeFetch` all send their
 * requests to it, without a delay. A request without a handler gets a 404.
 * The session is signed in with the token `token-1`.
 *
 * Call `vi.mock('@placeos/ts-client', { spy: true })` in the spec first.
 * The Angular unit-test system cannot mock the workspace libraries, so a spec
 * stubs the API under them instead.
 *
 * ```ts
 * const api = startStubApi();
 * api.on('GET', '/api/staff/v1/guests/:id', () => ({ email: 'a@b.com' }));
 * ```
 */
export function startStubApi(): StubApi {
    const fake = startFakePlaceClient();
    // The client sends no request without a credential
    fake.signIn({ id: 'authority-1' }, 'token-1');
    const handlers = new Map<
        string,
        { pattern: RegExp; handler: StubHandler }
    >();
    const requests: StubRequest[] = [];
    const send: FetchFunction = async (input, init) => {
        const url = new URL(input, location.origin);
        const method = (init.method ?? 'GET').toUpperCase();
        const text = typeof init.body === 'string' ? init.body : '';
        const request = {
            method,
            url,
            body: text ? JSON.parse(text) : undefined,
        };
        requests.push(request);
        const match = [...handlers.values()].find((item) =>
            item.pattern.test(`${method} ${url.pathname}`),
        );
        if (!match) return new Response(null, { status: 404 });
        try {
            const data = await match.handler(request);
            if (data === undefined) return new Response(null, { status: 204 });
            return new Response(JSON.stringify(data), {
                headers: { 'content-type': 'application/json' },
            });
        } catch (error) {
            const status =
                error && typeof error === 'object' && 'status' in error
                    ? Number(error.status)
                    : 500;
            return new Response(null, { status });
        }
    };
    configure({
        base_url: '',
        auth: fake.session.client_auth,
        fetch: send,
        // Test data has only some fields, as the mock mode data
        missing_fields: 'zero',
    });
    // `placeFetch` sends with the global `fetch`
    vi.stubGlobal('fetch', send);
    return {
        fake,
        requests,
        on(method, path, handler) {
            const key = `${method.toUpperCase()} ${path}`;
            if (!handlers.has(key) && handlers.size >= HANDLERS_MAX) {
                throw new Error('Too many stub API handlers.');
            }
            const segments = path
                .split('/')
                .map((part) =>
                    part.startsWith(':')
                        ? '[^/]+'
                        : part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
                );
            handlers.set(key, {
                pattern: new RegExp(
                    `^${method.toUpperCase()} ${segments.join('/')}$`,
                ),
                handler,
            });
        },
    };
}
