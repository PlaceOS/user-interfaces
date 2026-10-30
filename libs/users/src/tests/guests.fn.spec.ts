import { searchGuests, showGuest, updateGuest } from '../lib/guests.fn';

vi.mock('@placeos/ts-client');

import { GuestUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

describe('[Guest API]', () => {
    describe('searchGuests', () => {
        it('should perform GET on guests endpoint', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            const list = await searchGuests('');
            expect(list).toBeInstanceOf(Array);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/guests');
        });

        it('should return Guest objects', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            const list = await searchGuests('');
            expect(list).toBeInstanceOf(Array);
            expect(list[0]).toBeInstanceOf(GuestUser);
        });

        it('should allow filtering Guests', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            await searchGuests('Jim');
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/guests?q=Jim');
        });
    });

    describe('showGuest', () => {
        it('should GET guest', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            spy.mockResolvedValue({ name: 'Jim' } as any);
            const item = await showGuest('jim');
            expect(item).toBeInstanceOf(GuestUser);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/guests/jim');
        });
    });

    describe('updateGuest', () => {
        it('should PATCH guest changes', async () => {
            const spy = vi.spyOn(ts_client, 'patch');
            spy.mockResolvedValue({ name: 'Jim' } as any);
            const item = await updateGuest('jim', {
                name: 'James',
            });
            expect(item).toBeInstanceOf(GuestUser);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/guests/jim', {
                name: 'James',
            });
        });
    });
});
