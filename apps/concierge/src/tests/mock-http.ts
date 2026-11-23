import { parseResponse, type Schema } from '@placeos/ts-client';
import {
    type HttpVerb,
    type MockHttpRequest,
    registerMockEndpoint,
} from '@placeos/ts-client/compat';

type Handler = (request: MockHttpRequest) => unknown;
/** The response body, or a callback that gives it */
type Reply =
    | Handler
    | Record<string, unknown>
    | readonly unknown[]
    | string
    | null;

/**
 * The mock endpoints of ts-client answer after at least 200 ms, also with
 * `delay: 0`. Wait this long for a response from `mockHttp`.
 */
export const MOCK_HTTP_DELAY_MS = 250;

/** Wait until the mock endpoints answered the requests sent before. */
export function waitForMockHttp() {
    return new Promise((resolve) => setTimeout(resolve, MOCK_HTTP_DELAY_MS));
}

/**
 * Answers `method path` from the mock endpoints with the shortest delay
 * (see `MOCK_HTTP_DELAY_MS`), and gives the spy of the callback so a test
 * can check the requests. Call
 * `startMockPlaceClient()` from `@placeos/common/tests` first, and
 * `clearMockEndpoints()` after each test.
 *
 * ```ts
 * const list = mockHttp('GET', '/api/staff/v1/bookings', [], { 'x-total-count': '0' });
 * expect(list.mock.calls[0][0].query_params.type).toBe('desk');
 * ```
 *
 * The client parses the reply with the schema of the operation, as for the
 * real server. A callback that throws an error with a `status` sends that status.
 */
export function mockHttp(
    method: HttpVerb,
    path: string,
    reply: Reply = {},
    headers?: Record<string, string>,
) {
    const callback = vi.fn<Handler>((request) =>
        typeof reply === 'function' ? reply(request) : reply,
    );
    registerMockEndpoint({ method, path, callback, delay: 0, headers });
    return callback;
}

/** An error for a `mockHttp` callback to throw, to send the HTTP `status`. */
export function httpStatus(status: number) {
    return Object.assign(new Error(`HTTP ${status}`), { status });
}

/**
 * App data, such as `new Booking({...}).toJSON()`, as the server would send
 * it: parsed with the schema, so the fields that the schema does not have
 * are removed. Use `mockData` of `@placeos/common/tests` for data that the
 * test writes in the schema shape.
 */
export function serverData<O, I>(schema: Schema<O, I>, value: unknown): O {
    const result = parseResponse(schema, value, { missing_fields: 'zero' });
    if (result.ok === false) {
        throw new Error(`Bad server data at ${result.error.path}`);
    }
    return result.value;
}
