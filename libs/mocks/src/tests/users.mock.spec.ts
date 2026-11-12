import { registerMockEndpoint } from '@placeos/ts-client';

import { ACTIVE_USER, MOCK_GUESTS, MOCK_STAFF } from '../lib/api/users.data';
import { registerMockUsers } from '../lib/api/users.mock';
import { endpoint } from './endpoints';

vi.mock('@placeos/ts-client');

type User = (typeof MOCK_STAFF)[number];
type Guest = (typeof MOCK_GUESTS)[number];

describe('registerMockUsers', () => {
    const showUser = (id: string) =>
        endpoint<User>(
            'GET',
            '/api/engine/v2/users/:id',
        )({
            route_params: { id },
        });

    beforeEach(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockUsers();
    });

    // Write requests save the users to the mock session
    afterEach(() => localStorage.clear());

    it('should search users by name or email, up to the limit', () => {
        const search = (query_params: Record<string, string>) =>
            endpoint<User[]>('GET', '/api/engine/v2/users')({ query_params });

        const other = MOCK_STAFF[1];
        expect(search({ q: other.email.toUpperCase() })).toEqual([other]);
        const { length } = search({ q: '@place.tech' });
        expect(length).toBeGreaterThan(2);
        expect(search({ q: '@place.tech', limit: '2' })).toHaveLength(2);
    });

    it('should show the current user, a user by email, or a 404', () => {
        const other = MOCK_STAFF[1];

        expect(showUser('current')).toBe(ACTIVE_USER);
        expect(showUser(encodeURIComponent(other.email))).toBe(other);
        expect(() => showUser('nobody@place.tech')).toThrow(
            expect.objectContaining({ status: 404 }),
        );
    });

    it('should link the active user to the staff list after saved data loads', () => {
        // Saved data loads as copies of the users
        localStorage.setItem('PLACEOS.mock.staff', JSON.stringify(MOCK_STAFF));
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockUsers();

        endpoint<User>(
            'PATCH',
            '/api/engine/v2/users/:id',
        )({
            route_params: { id: 'current' },
            body: { id: 'changed', department: 'Design' },
        });

        expect(showUser('current')).toMatchObject({
            id: 'current',
            department: 'Design',
        });
    });

    describe('guests', () => {
        const saveGuest = (email: string, body: Record<string, unknown>) =>
            endpoint<Guest>(
                'PATCH',
                '/api/staff/v1/guests/:email',
            )({
                route_params: { email: encodeURIComponent(email) },
                body,
            });

        it('should add a visitor that is not on file, and change one that is', () => {
            const known = MOCK_GUESTS[0];
            expect(saveGuest(known.email, { company: 'Acme' })).toBe(known);
            expect(known.company).toBe('Acme');

            const count = MOCK_GUESTS.length;
            const added = saveGuest('new+guest@acme.com', { name: 'New' });
            expect(added).toEqual({
                id: 'new+guest@acme.com',
                email: 'new+guest@acme.com',
                name: 'New',
            });
            expect(MOCK_GUESTS).toHaveLength(count + 1);
        });

        it('should keep guest catering for each booking', () => {
            const path = '/api/staff/v1/guests/:email/catering';
            const request = (booking_id: string) => ({
                route_params: { email: encodeURIComponent('a+b@acme.com') },
                query_params: { booking_id },
            });
            const order = { items: ['Coffee'] };

            endpoint('PATCH', path)({ ...request('booking-1'), body: order });

            expect(endpoint('GET', path)(request('booking-1'))).toEqual(order);
            expect(endpoint('GET', path)(request('booking-2'))).toBeNull();
        });
    });
});
