import { CalendarEvent, GuestUser, Space, VERSION } from '@placeos/common';
import {
    approveEvent,
    checkinEventGuest,
    queryEventGuests,
    queryEvents,
    rejectEvent,
    saveEvent,
    showEvent,
} from '../lib/events.fn';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

describe('Event API Methods', () => {
    const app_version = VERSION.raw || VERSION.version || VERSION.hash;
    const app_name = 'PlaceOS';

    beforeEach(() => vi.clearAllMocks());

    describe('queryEvents', () => {
        it('should allow calling GET request for listing events', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue([{}] as any);
            const events = await queryEvents({
                period_start: 1,
                period_end: 2,
            });
            expect(events).toHaveLength(1);
            expect(events[0]).toBeInstanceOf(CalendarEvent);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/events?period_start=1&period_end=2`,
            );
            spy.mockReset();
        });
    });

    describe('showEvent', () => {
        it('should allow calling GET request for a specific event', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const event = await showEvent('1');
            expect(event).toBeInstanceOf(CalendarEvent);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/events/1`,
            );
            spy.mockReset();
        });
    });

    // describe('createEvent', () => {
    //     it('should allow calling POST request for creating a new event', async () => {
    //         const spy = vi.spyOn(ts_client, 'post');
    //         expect(spy).not.toHaveBeenCalled();
    //         spy.mockImplementation(() => of({}) as any);
    //         const event = await createEvent({}).toPromise();
    //         expect(event).toBeInstanceOf(CalendarEvent);
    //         expect(ts_client.post).toHaveBeenCalledWith(
    //             `/api/staff/v1/events`,
    //             {}
    //         );
    //         spy.mockReset();
    //     });
    // });

    // describe('updateEvent', () => {
    //     it('should allow calling PATCH request for updating an event', async () => {
    //         const spy = vi.spyOn(ts_client, 'patch');
    //         expect(spy).not.toHaveBeenCalled();
    //         spy.mockImplementation(() => of({}) as any);
    //         const event = await updateEvent('1', {}).toPromise();
    //         expect(event).toBeInstanceOf(CalendarEvent);
    //         expect(ts_client.patch).toHaveBeenCalledWith(
    //             `/api/staff/v1/events/1`,
    //             new CalendarEvent().toJSON()
    //         );
    //         spy.mockReset();
    //     });
    //     it('should allow calling PUT request for updating an event', async () => {
    //         const spy = vi.spyOn(ts_client, 'put');
    //         expect(spy).not.toHaveBeenCalled();
    //         spy.mockImplementation(() => of({}) as any);
    //         const event = await updateEvent('1', {}, {}, 'put').toPromise();
    //         expect(event).toBeInstanceOf(CalendarEvent);
    //         expect(ts_client.put).toHaveBeenCalledWith(
    //             `/api/staff/v1/events/1`,
    //             new CalendarEvent().toJSON()
    //         );
    //         spy.mockReset();
    //     });
    // });

    describe('saveEvent', () => {
        it('should create new events', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            spy.mockResolvedValue({} as any);
            expect(ts_client.post).not.toHaveBeenCalled();
            await saveEvent({});
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/events`,
                expect.objectContaining({
                    extension_data: expect.objectContaining({
                        app_name,
                        app_version,
                    }),
                }),
            );
            spy.mockReset();
        });
        it('should send every selected room as a resource attendee', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            spy.mockResolvedValue('');
            const resources = [
                new Space({ id: 'space-1', email: 'one@example.com' }),
                new Space({ id: 'space-2', email: 'two@example.com' }),
            ];

            await saveEvent(new CalendarEvent({ resources }));

            expect(spy).toHaveBeenCalledWith(
                `/api/staff/v1/events`,
                expect.objectContaining({
                    attendees: expect.arrayContaining([
                        expect.objectContaining({
                            email: 'one@example.com',
                            resource: true,
                        }),
                        expect.objectContaining({
                            email: 'two@example.com',
                            resource: true,
                        }),
                    ]),
                }),
            );
        });
        it('should update existing events', async () => {
            const spy = vi.spyOn(ts_client, 'patch');
            spy.mockResolvedValue({} as any);
            expect(ts_client.patch).not.toHaveBeenCalled();
            await saveEvent({ id: '1' });
            expect(ts_client.patch).toHaveBeenCalledWith(
                `/api/staff/v1/events/1`,
                expect.objectContaining({
                    extension_data: expect.objectContaining({
                        app_name,
                        app_version,
                    }),
                }),
            );
            spy.mockReset();
        });
    });

    describe('approveEvent', () => {
        it('should allow calling POST request for approving an event', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const event = await approveEvent('1', 'sys-1');
            expect(event).toBeInstanceOf(CalendarEvent);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/events/1/approve?system_id=sys-1`,
                '',
            );
            spy.mockReset();
        });
    });

    describe('rejectEvent', () => {
        it('should allow calling POST request for rejecting an event', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const event = await rejectEvent('1', 'sys-1');
            expect(event).toBeInstanceOf(CalendarEvent);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/events/1/reject?system_id=sys-1`,
                '',
            );
            spy.mockReset();
        });
    });

    describe('queryEventGuests', () => {
        it('should allow calling POST request for querying guest in an event', async () => {
            const spy = vi.spyOn(ts_client, 'get');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue([{}] as any);
            const guests = await queryEventGuests('1');
            expect(guests[0]).toBeInstanceOf(GuestUser);
            expect(ts_client.get).toHaveBeenCalledWith(
                `/api/staff/v1/events/1/guests`,
            );
            spy.mockReset();
        });
    });

    describe('checkinEventGuests', () => {
        it('should allow calling POST request for checking in an event guest', async () => {
            const spy = vi.spyOn(ts_client, 'post');
            expect(spy).not.toHaveBeenCalled();
            spy.mockResolvedValue({} as any);
            const guest = await checkinEventGuest('1', 'guest-1', true);
            expect(guest).toBeInstanceOf(GuestUser);
            expect(ts_client.post).toHaveBeenCalledWith(
                `/api/staff/v1/events/1/guests/guest-1/checkin?state=true`,
                '',
            );
            spy.mockReset();
        });
    });
});
