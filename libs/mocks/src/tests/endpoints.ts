import { MockHttpRequest, registerMockEndpoint } from '@placeos/ts-client';

/**
 * Callback that a mock group registered for `method` and `path`. Mock
 * `@placeos/ts-client` and call the `registerMock*` function first. `T` is
 * the response type that the test reads.
 */
export function endpoint<T = unknown>(
    method: MockHttpRequest['method'],
    path: string,
) {
    const match = vi
        .mocked(registerMockEndpoint)
        .mock.calls.map(([options]) => options)
        .find((o) => o.method === method && o.path === path);
    if (!match?.callback) throw new Error(`No handler for ${method} ${path}`);
    return (request: Partial<MockHttpRequest> = {}) =>
        match.callback({
            url: path,
            path,
            method,
            metadata: {},
            route_params: {},
            query_params: {},
            body: null,
            ...request,
        }) as T;
}
