/**
 * Is the local PlaceOS stack actually up?
 *
 * The stack is a PRECONDITION, not something Playwright starts — it is ~20
 * containers and Elasticsearch alone wants several GB, so a `webServer` block
 * would be the wrong tool. Instead fail in about a second with a message that
 * says what to do, rather than after 90s of unexplained navigation timeouts.
 */
import { request as pwRequest } from '@playwright/test';
import { BACKEND_URL } from './env';

export async function assertStackUp(): Promise<void> {
    const ctx = await pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        timeout: 10_000,
    });
    try {
        const res = await ctx.get('/api/engine/v2/');
        // Any HTTP answer proves nginx + rest-api are reachable; the route itself
        // may legitimately 401/404 depending on version.
        if (res.status() >= 500) {
            throw new Error(`backend returned HTTP ${res.status()}`);
        }
    } catch (e) {
        throw new Error(
            `Local PlaceOS stack is not reachable at ${BACKEND_URL} (${(e as Error).message}).\n` +
                `Start it with:  cd local && ./placeos start`,
        );
    } finally {
        await ctx.dispose();
    }
}
