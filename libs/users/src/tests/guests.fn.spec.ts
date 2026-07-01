import {
    listGuestMeetings,
    queryGuests,
    removeGuest,
    searchGuests,
    showGuest,
    updateGuest,
} from '../lib/guests.fn';

jest.mock('@placeos/ts-client');

import { CalendarEvent, GuestUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

describe('[Guest API]', () => {
    describe('searchGuests', () => {
        it('should perform GET on guests endpoint', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            const list = await searchGuests('');
            expect(list).toBeInstanceOf(Array);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/guests');
        });

        it('should return Guest objects', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            const list = await searchGuests('');
            expect(list).toBeInstanceOf(Array);
            expect(list[0]).toBeInstanceOf(GuestUser);
        });

        it('should allow filtering Guests', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            await searchGuests('Jim');
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/guests?q=Jim');
        });
    });

    describe('queryGuests', () => {
        it('should perform GET on guests endpoint', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            const list = await queryGuests({
                period_start: 0,
                period_end: 2,
            });
            expect(list).toBeInstanceOf(Array);
            expect(spy).toHaveBeenCalledWith(
                '/api/staff/v1/guests?period_start=0&period_end=2',
            );
        });

        it('should return Guest objects', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            const list = await queryGuests({
                period_start: 0,
                period_end: 2,
            });
            expect(list).toBeInstanceOf(Array);
            expect(list[0]).toBeInstanceOf(GuestUser);
        });

        it('should allow querying Guests', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            await queryGuests({
                period_start: 0,
                period_end: 2,
                zone_ids: 'zone-123',
                system_ids: 'sys-123',
            });
            expect(spy).toHaveBeenCalledWith(
                '/api/staff/v1/guests?period_start=0&period_end=2&zone_ids=zone-123&system_ids=sys-123',
            );
        });
    });

    describe('showGuest', () => {
        it('should GET guest', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockResolvedValue({ name: 'Jim' } as any);
            const item = await showGuest('jim');
            expect(item).toBeInstanceOf(GuestUser);
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/guests/jim');
        });
    });

    describe('updateGuest', () => {
        it('should PATCH guest changes', async () => {
            const spy = jest.spyOn(ts_client, 'patch');
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

    describe('removeGuest', () => {
        it('should DELETE guest', async () => {
            const spy = jest.spyOn(ts_client, 'del');
            spy.mockResolvedValue(undefined as any);
            const item = await removeGuest('jim');
            expect(item).toBeUndefined();
            expect(spy).toHaveBeenCalledWith('/api/staff/v1/guests/jim', {
                response_type: 'void',
            });
        });
    });

    describe('listGuestMeetings', () => {
        it('should GET calendar events for guest', async () => {
            const spy = jest.spyOn(ts_client, 'get');
            spy.mockResolvedValue([{ name: 'Jim' }] as any);
            const list = await listGuestMeetings('jim');
            expect(list[0]).toBeInstanceOf(CalendarEvent);
            expect(spy).toHaveBeenCalledWith(
                '/api/staff/v1/guests/jim/meetings',
            );
        });
    });
});
