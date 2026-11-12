import { mockSystem, registerMockEndpoint } from '@placeos/ts-client';

import { mocksInit as emptyMocksInit } from '../empty';
import { mocksInit } from '../index';

// Record registrations instead of populating the real ts-client handler map —
// the interest here is what each `registerMock*` group asks for. An
// `importOriginal` factory deadlocks here (the mock modules import this same
// module at load), so the whole module is stubbed.
vi.mock('@placeos/ts-client');

/** Handler options passed to `registerMockEndpoint` since the last reset */
const registrations = () =>
    vi.mocked(registerMockEndpoint).mock.calls.map(([options]) => options);

describe('mocksInit', () => {
    beforeEach(() => {
        // `createSystem` polls the system it just registered
        vi.useFakeTimers();
        vi.mocked(mockSystem).mockReturnValue({
            Bookings: [{ $poll_bookings: vi.fn(), call: vi.fn() }],
            AreaManagement: [{ $update: vi.fn(), call: vi.fn() }],
        } as never);
        vi.mocked(registerMockEndpoint).mockClear();
    });

    afterEach(() => vi.useRealTimers());

    it('should cover every mocked API group', () => {
        mocksInit();
        const paths = registrations().map((r) => r.path);

        for (const group of [
            'alert_dashboards',
            'oauth_apps',
            'maps/ai',
            'short_url',
            'assets',
            'bookings',
            'calendars',
            'events',
            'signage',
            'surveys',
            'systems',
            'users',
            'zones',
        ]) {
            expect(
                paths.some((path) => path.includes(group)),
                `no endpoint registered for ${group}`,
            ).toBe(true);
        }
    });

    it('should not register the same endpoint twice', () => {
        mocksInit();
        const seen = new Set<string>();
        const duplicates: string[] = [];

        for (const { method, path } of registrations()) {
            const key = `${method} ${path}`;
            if (seen.has(key)) duplicates.push(key);
            seen.add(key);
        }

        // A second registration silently replaces the first, so the earlier
        // handler would never run in mock mode.
        expect(duplicates).toEqual([]);
    });

    it('should not shadow a fixed route with an earlier parameter route', () => {
        mocksInit();
        const parts = (path: string) => path.replace(/^\//, '').split('/');
        const handlers = registrations();
        const shadowed: string[] = [];

        // ts-client uses the first registered handler whose shape fits, and a
        // `:param` segment fits any value
        handlers.forEach(({ method, path }, index) => {
            const route = parts(path);
            const earlier = handlers.slice(0, index).find((other) => {
                const other_route = parts(other.path);
                return (
                    other.method === method &&
                    other_route.length === route.length &&
                    other_route.every(
                        (part, i) => part[0] === ':' || part === route[i],
                    )
                );
            });
            if (earlier) shadowed.push(`${method} ${path} <- ${earlier.path}`);
        });

        expect(shadowed).toEqual([]);
    });

    it('should register nothing in the production build', () => {
        emptyMocksInit();
        expect(registerMockEndpoint).not.toHaveBeenCalled();
    });
});
