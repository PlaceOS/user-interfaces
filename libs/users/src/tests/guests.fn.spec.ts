import {
    getGuestCateringItem,
    searchGuests,
    setGuestCateringItem,
    showGuest,
    updateGuest,
} from '../lib/guests.fn';

vi.mock('@placeos/ts-client');

import { CateringItem, GuestUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

const mockGet = vi.mocked(
    ts_client.get as unknown as (url: string) => Promise<unknown>,
);
const mockPatch = vi.mocked(
    ts_client.patch as unknown as (
        url: string,
        body: unknown,
    ) => Promise<unknown>,
);

describe('[Guest API]', () => {
    beforeEach(() => vi.clearAllMocks());

    describe('searchGuests', () => {
        it('should GET all guests as GuestUser objects without a query', async () => {
            mockGet.mockResolvedValue([{ name: 'Jim' }]);
            const list = await searchGuests('');
            expect(mockGet).toHaveBeenCalledWith('/api/staff/v1/guests');
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(GuestUser);
            expect(list[0].name).toBe('Jim');
        });

        it('should pass the search string as a query', async () => {
            mockGet.mockResolvedValue([]);
            await searchGuests('Jim');
            expect(mockGet).toHaveBeenCalledWith('/api/staff/v1/guests?q=Jim');
        });
    });

    describe('showGuest and updateGuest', () => {
        it('should encode the guest ID in the URL', async () => {
            mockGet.mockResolvedValue({ name: 'Jim' });
            mockPatch.mockResolvedValue({ name: 'James' });
            const shown = await showGuest('jim+1@place.tech');
            const updated = await updateGuest('jim+1@place.tech', {
                name: 'James',
            });
            expect(mockGet).toHaveBeenCalledWith(
                '/api/staff/v1/guests/jim%2B1%40place.tech',
            );
            expect(mockPatch).toHaveBeenCalledWith(
                '/api/staff/v1/guests/jim%2B1%40place.tech',
                { name: 'James' },
            );
            expect(shown).toBeInstanceOf(GuestUser);
            expect(updated.name).toBe('James');
        });
    });

    describe('guest catering', () => {
        it('should scope the catering request to an encoded booking ID', async () => {
            mockGet.mockResolvedValue({ id: 'item-1', name: 'Coffee' });
            const item = await getGuestCateringItem('jim@place.tech', 'b/1');
            expect(mockGet).toHaveBeenCalledWith(
                '/api/staff/v1/guests/jim%40place.tech/catering?booking_id=b%2F1',
            );
            expect(item).toBeInstanceOf(CateringItem);
            expect(item?.name).toBe('Coffee');
        });

        it('should return null when the guest has no catering item', async () => {
            mockGet.mockResolvedValue(null);
            mockPatch.mockResolvedValue(null);
            expect(await getGuestCateringItem('jim@place.tech')).toBeNull();
            expect(
                await setGuestCateringItem(
                    'jim@place.tech',
                    new CateringItem(),
                ),
            ).toBeNull();
            expect(mockGet).toHaveBeenCalledWith(
                '/api/staff/v1/guests/jim%40place.tech/catering',
            );
        });

        it('should PATCH the catering item for the booking', async () => {
            const item = new CateringItem({ id: 'item-1', name: 'Tea' });
            mockPatch.mockResolvedValue({ id: 'item-1', name: 'Tea' });
            const result = await setGuestCateringItem(
                'jim@place.tech',
                item,
                'booking-1',
            );
            expect(mockPatch).toHaveBeenCalledWith(
                '/api/staff/v1/guests/jim%40place.tech/catering?booking_id=booking-1',
                item,
            );
            expect(result).toBeInstanceOf(CateringItem);
        });
    });
});
