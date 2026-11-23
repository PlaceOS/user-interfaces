import { CateringItem, GuestUser } from '@placeos/common';
import { startMockPlaceClient } from '@placeos/common/tests';
import {
    clearMockEndpoints,
    type HttpVerb,
    type MockHttpRequest,
    registerMockEndpoint,
} from '@placeos/ts-client/compat';

import {
    getGuestCateringItem,
    searchGuests,
    setGuestCateringItem,
    showGuest,
    updateGuest,
} from '../lib/guests.fn';

const GUESTS = '/api/staff/v1/guests';

/** Answers requests to `path` in mock mode, and records them */
function serve(
    method: HttpVerb,
    path: string,
    callback: (request: MockHttpRequest) => unknown,
) {
    const handler = vi.fn(callback);
    registerMockEndpoint({ path, method, callback: handler });
    return handler;
}

/** Path and query of the URL of the first request to `handler` */
const requested = (handler: ReturnType<typeof serve>) => {
    const url = new URL(handler.mock.calls[0][0].url, location.origin);
    return `${url.pathname}${url.search}`;
};

describe('[Guest API]', () => {
    beforeEach(() => startMockPlaceClient());
    afterEach(() => clearMockEndpoints());

    describe('searchGuests', () => {
        it('should GET all guests as GuestUser objects without a query', async () => {
            const query = serve('GET', GUESTS, () => [{ name: 'Jim' }]);
            const list = await searchGuests('');
            expect(requested(query)).toBe(GUESTS);
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(GuestUser);
            expect(list[0].name).toBe('Jim');
        });

        it('should pass the search string as a query', async () => {
            const query = serve('GET', GUESTS, () => []);
            await searchGuests('Jim');
            expect(requested(query)).toBe(`${GUESTS}?q=Jim`);
        });
    });

    describe('showGuest and updateGuest', () => {
        it('should encode the guest ID in the URL', async () => {
            const show = serve('GET', `${GUESTS}/:id`, () => ({ name: 'Jim' }));
            const update = serve('PATCH', `${GUESTS}/:id`, ({ body }) => body);
            const shown = await showGuest('jim+1@place.tech');
            const updated = await updateGuest('jim+1@place.tech', {
                name: 'James',
            });
            expect(requested(show)).toBe(`${GUESTS}/jim%2B1%40place.tech`);
            expect(requested(update)).toBe(`${GUESTS}/jim%2B1%40place.tech`);
            expect(update.mock.calls[0][0].body).toEqual({ name: 'James' });
            expect(shown).toBeInstanceOf(GuestUser);
            expect(updated.name).toBe('James');
        });
    });

    describe('guest catering', () => {
        const CATERING = `${GUESTS}/:id/catering`;

        it('should scope the catering request to an encoded booking ID', async () => {
            const get = serve('GET', CATERING, () => ({
                id: 'item-1',
                name: 'Coffee',
            }));
            const item = await getGuestCateringItem('jim@place.tech', 'b/1');
            expect(requested(get)).toBe(
                `${GUESTS}/jim%40place.tech/catering?booking_id=b%2F1`,
            );
            expect(item).toBeInstanceOf(CateringItem);
            expect(item?.name).toBe('Coffee');
        });

        it('should return null when the guest has no catering item', async () => {
            const get = serve('GET', CATERING, () => null);
            serve('PATCH', CATERING, () => null);
            expect(await getGuestCateringItem('jim@place.tech')).toBeNull();
            expect(
                await setGuestCateringItem(
                    'jim@place.tech',
                    new CateringItem(),
                ),
            ).toBeNull();
            expect(requested(get)).toBe(`${GUESTS}/jim%40place.tech/catering`);
        });

        it('should PATCH the catering item for the booking', async () => {
            const item = new CateringItem({ id: 'item-1', name: 'Tea' });
            const patch = serve('PATCH', CATERING, () => ({
                id: 'item-1',
                name: 'Tea',
            }));
            const result = await setGuestCateringItem(
                'jim@place.tech',
                item,
                'booking-1',
            );
            expect(requested(patch)).toBe(
                `${GUESTS}/jim%40place.tech/catering?booking_id=booking-1`,
            );
            expect(patch.mock.calls[0][0].body).toEqual(
                JSON.parse(JSON.stringify(item)),
            );
            expect(result).toBeInstanceOf(CateringItem);
        });
    });
});
