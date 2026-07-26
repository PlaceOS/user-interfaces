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
            Bookings: [{ $poll_bookings: vi.fn() }],
            AreaManagement: [{ $update: vi.fn() }],
        } as any);
        vi.mocked(registerMockEndpoint).mockClear();
    });

    afterEach(() => vi.useRealTimers());

    it('should register mock endpoints', () => {
        mocksInit();
        expect(registrations().length).toBeGreaterThan(0);
    });

    it('should cover every mocked API group', () => {
        mocksInit();
        const paths = registrations().map((r) => r.path);

        for (const group of [
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

    it('should give every endpoint a path, method and handler', () => {
        mocksInit();

        for (const handler of registrations()) {
            expect(handler.path, JSON.stringify(handler)).toBeTruthy();
            expect(handler.method, handler.path).toBeTruthy();
            expect(typeof handler.callback, handler.path).toBe('function');
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

    it('should register nothing in the production build', () => {
        emptyMocksInit();
        expect(registerMockEndpoint).not.toHaveBeenCalled();
    });
});
