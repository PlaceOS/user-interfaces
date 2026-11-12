import { registerMockEndpoint } from '@placeos/ts-client';

import { registerMockBookings } from '../lib/api/bookings.mock';
import { ACTIVE_USER } from '../lib/api/users.data';

vi.mock('@placeos/ts-client');

const API = '/api/staff/v1/bookings';
/** Far after the generated mock bookings, so only test bookings match */
const START = Date.UTC(2099, 0, 1) / 1000;
const HOUR = 60 * 60;

describe('registerMockBookings', () => {
    /** Callback registered for the given method + path */
    function handler(method: string, path: string) {
        const match = vi
            .mocked(registerMockEndpoint)
            .mock.calls.map(([options]) => options)
            .find((o) => o.method === method && o.path === path);
        if (!match) throw new Error(`No handler for ${method} ${path}`);
        return (req: Record<string, unknown>) =>
            match.callback({
                route_params: {},
                query_params: {},
                ...req,
            } as never);
    }

    /** Add a booking through the create endpoint */
    const create = (fields: Record<string, unknown>) =>
        handler(
            'POST',
            API,
        )({
            body: {
                user_id: ACTIVE_USER.id,
                zones: ['zone-test'],
                booking_start: START,
                booking_end: START + HOUR,
                ...fields,
            },
        }) as { id: string };
    /** IDs of the listed bookings in the test period */
    const list = (query_params: Record<string, string> = {}) =>
        (
            handler(
                'GET',
                API,
            )({
                query_params: {
                    period_start: `${START}`,
                    period_end: `${START + HOUR}`,
                    ...query_params,
                },
            }) as { id: string }[]
        ).map((b) => b.id);
    const route = (path: string, id: string, query_params = {}) =>
        handler(
            'POST',
            `${API}/:id/${path}`,
        )({
            route_params: { id },
            query_params,
        }) as Record<string, unknown>;

    beforeAll(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockBookings();
    });

    afterEach(() => {
        // Write requests save changed bookings to the mock session
        localStorage.clear();
        vi.useRealTimers();
    });

    it('should list the bookings of the active user, or of the zones asked for', () => {
        const zones = ['zone-list'];
        const mine = create({ zones });
        const theirs = create({ zones, user_id: 'someone-else' });

        expect(list()).toContain(mine.id);
        expect(list()).not.toContain(theirs.id);
        expect(list({ zones: 'zone-other,zone-list' })).toEqual([
            mine.id,
            theirs.id,
        ]);
        expect(
            list({ zone_ids: 'zone-list', user_id: 'someone-else' }),
        ).toEqual([theirs.id]);
    });

    it('should filter the listed bookings by type, and page them', () => {
        const zones = ['zone-page'];
        const desk = create({ zones, type: 'desk' });
        const legacy_desk = create({ zones, booking_type: 'desk' });
        const parking = create({ zones, type: 'parking' });

        expect(list({ zones: 'zone-page', type: 'desk' })).toEqual([
            desk.id,
            legacy_desk.id,
        ]);
        expect(list({ zones: 'zone-page', limit: '2' })).toEqual([
            desk.id,
            legacy_desk.id,
        ]);
        expect(list({ zones: 'zone-page', limit: '2', offset: '2' })).toEqual([
            parking.id,
        ]);
    });

    it('should approve and reject a booking', () => {
        const { id } = create({});

        expect(route('approve', id)).toMatchObject({
            approved: true,
            rejected: false,
        });
        expect(route('reject', id)).toMatchObject({
            approved: false,
            rejected: true,
        });
    });

    it('should soft delete a booking', () => {
        const booking = create({ zones: ['zone-delete'] });
        handler('DELETE', `${API}/:id`)({ route_params: { id: booking.id } });

        // Apps still show it as cancelled
        expect(
            handler('GET', `${API}/:id`)({ route_params: { id: booking.id } }),
        ).toMatchObject({ deleted: true });
        expect(list({ zones: 'zone-delete' })).toEqual([]);
        expect(list({ zones: 'zone-delete', include_deleted: 'true' })).toEqual(
            [booking.id],
        );
    });

    it('should check a booking in, out and in again', () => {
        vi.useFakeTimers({ now: (START + 60) * 1000 });
        const { id } = create({});

        expect(route('check_in', id)).toMatchObject({
            checked_in: true,
            checked_in_at: START + 60,
        });
        vi.setSystemTime((START + 120) * 1000);
        expect(route('check_in', id, { state: 'false' })).toMatchObject({
            checked_in: false,
            checked_out_at: START + 120,
        });
        expect(route('check_in', id, { state: 'true' })).not.toHaveProperty(
            'checked_out_at',
        );
        vi.useRealTimers();
    });

    it('should raise a 404 for an unknown booking', () => {
        expect(() => route('approve', 'not-a-booking')).toThrow(
            expect.objectContaining({ status: 404 }),
        );
    });

    describe('clashing assets', () => {
        const clashes = (body: Record<string, unknown>, include_time = false) =>
            handler(
                'POST',
                `${API}/clashing-assets`,
            )({
                body: {
                    booking_start: START + HOUR / 2,
                    booking_end: START + 2 * HOUR,
                    ...body,
                },
                query_params: { include_clash_time: `${include_time}` },
            });

        it('should list assets that an active booking holds in the period', () => {
            create({ asset_id: 'desk-held' });
            const rejected = create({ asset_id: 'desk-rejected' });
            route('reject', rejected.id);
            const deleted = create({ asset_ids: ['desk-deleted'] });
            handler(
                'DELETE',
                `${API}/:id`,
            )({
                route_params: { id: deleted.id },
            });
            create({
                asset_id: 'desk-later',
                booking_start: START + 2 * HOUR,
                booking_end: START + 3 * HOUR,
            });

            const asset_ids = [
                'desk-held',
                'desk-rejected',
                'desk-deleted',
                'desk-later',
                'desk-free',
            ];
            expect(clashes({ asset_ids })).toEqual(['desk-held']);
            expect(clashes({ asset_ids }, true)).toEqual([
                {
                    asset_id: 'desk-held',
                    booking_start: START,
                    booking_end: START + HOUR,
                },
            ]);
        });

        it('should not clash a booking with itself when it is edited', () => {
            const booking = create({ asset_id: 'desk-edit' });
            expect(clashes({ id: booking.id, asset_id: 'desk-edit' })).toEqual(
                [],
            );
        });
    });
});
