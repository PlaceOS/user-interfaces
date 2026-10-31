import type { Response } from '@playwright/test';

/**
 * Whether `error` (or its recorded message) comes from a Playwright call that
 * was still running when its page or context closed. At the end of a test the
 * app can still have requests in flight, so a route handler or a body read can
 * fail this way. The teardown causes it, not the app.
 */
export function closedByTeardown(error: unknown) {
    return String(error).includes(
        'Target page, context or browser has been closed',
    );
}

/**
 * Wraps a route handler that calls `route.fetch()`. If the context closes while
 * the handler runs, its closed-target error is dropped; any other error is
 * thrown as before.
 */
export function ignoreClosed<A extends unknown[]>(
    handler: (...args: A) => Promise<unknown>,
) {
    return async (...args: A) => {
        try {
            await handler(...args);
        } catch (error) {
            if (!closedByTeardown(error)) throw error;
        }
    };
}

/**
 * `response.json()` for a response listener that keeps the promise for later.
 * If the test ends before the body is read, the rejection is not reported as an
 * unhandled error. Code that awaits the promise still gets the rejection.
 */
export function jsonBody<T>(response: Response): Promise<T> {
    const body: Promise<T> = response.json();
    body.catch(() => undefined);
    return body;
}
