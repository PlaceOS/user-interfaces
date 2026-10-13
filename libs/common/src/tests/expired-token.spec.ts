import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import {
    cleanupAuth,
    clientId,
    queryZones,
    setToken,
    setup,
} from '@placeos/ts-client';

describe('zone requests with expired tokens', () => {
    const fetch_mock = vi.fn<typeof fetch>();

    beforeEach(async () => {
        vi.useFakeTimers();
        localStorage.clear();
        sessionStorage.clear();
        vi.stubGlobal('fetch', fetch_mock);
        fetch_mock.mockImplementation(async (input) => {
            const url = String(input);
            if (url.endsWith('/auth/authority')) {
                return Response.json({
                    id: 'authority-test',
                    version: '2.0.0',
                    config: {},
                });
            }
            if (url.includes('/oauth/token')) {
                return Response.json({
                    access_token: 'synthetic-renewed-token',
                    refresh_token: 'synthetic-refresh-token',
                    expires_in: 3600,
                    created_at: Math.floor(Date.now() / 1000),
                });
            }
            return Response.json([
                {
                    id: 'level-test',
                    parent_id: 'building-test',
                    tags: ['level'],
                },
            ]);
        });
        const initialisation = setup({
            auth_uri: '/oauth/authorize',
            token_uri: '/oauth/token',
            redirect_uri: 'http://localhost/',
            scope: 'public',
            auth_type: 'auth_code',
        });
        setToken('synthetic-initial-token', Date.now() + 60_000);
        localStorage.setItem(
            `${clientId()}_refresh_token`,
            'synthetic-refresh-token',
        );
        await initialisation;
        fetch_mock.mockClear();
        setToken('synthetic-expired-token', Date.now() - 1000);
    });

    afterEach(() => {
        cleanupAuth();
        vi.clearAllTimers();
        vi.useRealTimers();
        vi.unstubAllGlobals();
    });

    test('renews the token and completes concurrent level queries', async () => {
        const queries = [
            queryZones({ tags: 'level', limit: 2500 }),
            queryZones({
                tags: 'level',
                limit: 2500,
                parent_id: 'building-test',
            }),
        ];
        const completed = vi.fn();
        const results = Promise.all(queries).then(completed);

        await vi.advanceTimersByTimeAsync(1000);

        expect(completed).toHaveBeenCalledOnce();
        await results;
        expect(
            fetch_mock.mock.calls.filter(([url]) =>
                String(url).includes('/oauth/token'),
            ),
        ).toHaveLength(1);
        expect(
            fetch_mock.mock.calls.find(([url]) =>
                String(url).includes('/oauth/token'),
            )?.[1]?.body,
        ).toContain('grant_type=refresh_token');
        const zone_requests = fetch_mock.mock.calls.filter(([url]) =>
            String(url).includes('/zones'),
        );
        expect(zone_requests).toHaveLength(2);
        for (const [, options] of zone_requests) {
            expect(options?.headers).toMatchObject({
                Authorization: 'Bearer synthetic-renewed-token',
            });
        }
    });

    test('rejects the level query when token renewal never completes', async () => {
        fetch_mock.mockImplementation(() => new Promise<Response>(() => {}));
        const failed = vi.fn();
        const query = queryZones({ tags: 'level', limit: 2500 }).catch(failed);

        await vi.advanceTimersByTimeAsync(30_000);

        expect(failed).toHaveBeenCalledWith(
            expect.objectContaining({
                message: 'Timed out waiting for authentication.',
            }),
        );
        await query;
        fetch_mock.mockClear();
        setToken('synthetic-valid-token', Date.now() + 60_000);
        await vi.advanceTimersByTimeAsync(1);
        expect(fetch_mock).not.toHaveBeenCalled();
    });
});
