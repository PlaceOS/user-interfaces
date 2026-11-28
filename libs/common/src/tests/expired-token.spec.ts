import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { Zone, zones } from '@placeos/ts-client';
import { orThrowPage } from '@placeos/ts-client/compat';

import {
    clientId,
    placeRealtime,
    setToken,
    startPlaceClient,
} from '../lib/place-client';
import { mockData } from './mock-data';

const AUTHORITY = {
    id: 'authority-test',
    name: 'localhost',
    description: '',
    domain: 'localhost',
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

const LEVEL = mockData(Zone, {
    id: 'level-test',
    parent_id: 'building-test',
    tags: ['level'],
});

/** Authorization header of a request */
const bearer = (init?: RequestInit) =>
    new Headers(init?.headers).get('Authorization');

describe('zone requests with expired tokens', () => {
    const fetch_mock = vi.fn<typeof fetch>();
    const tokenRequests = () =>
        fetch_mock.mock.calls.filter(([url]) =>
            String(url).includes('/oauth/token'),
        );

    beforeEach(async () => {
        vi.useFakeTimers();
        localStorage.clear();
        sessionStorage.clear();
        // A trusted application keeps its tokens in local storage
        localStorage.setItem('trust', 'true');
        vi.stubGlobal('fetch', fetch_mock);
        fetch_mock.mockImplementation(async (input) => {
            const url = String(input);
            if (url.endsWith('/auth/authority')) {
                return Response.json(AUTHORITY);
            }
            if (url.includes('/oauth/token')) {
                return Response.json({
                    access_token: 'synthetic-renewed-token',
                    refresh_token: 'synthetic-refresh-token',
                    expires_in: 3600,
                    created_at: Math.floor(Date.now() / 1000),
                });
            }
            return Response.json([LEVEL]);
        });
        const { session } = startPlaceClient({
            base_url: '',
            mock: false,
            headers: {},
            auth: {
                redirect_uri: 'http://localhost/oauth-resp.html',
                scope: 'public',
                grant: { kind: 'code' },
                handle_login: false,
                use_frame: false,
            },
        });
        localStorage.setItem(
            `${clientId()}_refresh_token`,
            'synthetic-refresh-token',
        );
        setToken('synthetic-initial-token', Date.now() + 60_000);
        await session.start();
        fetch_mock.mockClear();
        setToken('synthetic-expired-token', Date.now() - 1000);
    });

    afterEach(() => {
        placeRealtime().stop();
        vi.clearAllTimers();
        vi.useRealTimers();
        vi.unstubAllGlobals();
        localStorage.clear();
    });

    test('renews the token once and completes concurrent level queries', async () => {
        const queries = [
            zones.query({ tags: ['level'], limit: 2500 }).then(orThrowPage),
            zones
                .query({
                    tags: ['level'],
                    limit: 2500,
                    parent_id: ['building-test'],
                })
                .then(orThrowPage),
        ];
        const completed = vi.fn();
        const results = Promise.all(queries).then(completed);

        await vi.advanceTimersByTimeAsync(1000);

        expect(completed).toHaveBeenCalledOnce();
        await results;
        expect(tokenRequests()).toHaveLength(1);
        expect(String(tokenRequests()[0][1]?.body)).toContain(
            'grant_type=refresh_token',
        );
        const zone_requests = fetch_mock.mock.calls.filter(([url]) =>
            String(url).includes('/zones'),
        );
        expect(zone_requests).toHaveLength(2);
        for (const [, init] of zone_requests) {
            expect(bearer(init)).toBe('Bearer synthetic-renewed-token');
        }
    });

    test('rejects the level query when token renewal never completes', async () => {
        fetch_mock.mockImplementation(() => new Promise<Response>(() => {}));
        const failed = vi.fn();
        const query = zones
            .query({ tags: ['level'], limit: 2500 })
            .then(orThrowPage)
            .catch(failed);

        await vi.advanceTimersByTimeAsync(60_000);

        expect(failed).toHaveBeenCalledOnce();
        await query;
        fetch_mock.mockClear();
        setToken('synthetic-valid-token', Date.now() + 60_000);
        await vi.advanceTimersByTimeAsync(1);
        expect(fetch_mock).not.toHaveBeenCalled();
    });
});
