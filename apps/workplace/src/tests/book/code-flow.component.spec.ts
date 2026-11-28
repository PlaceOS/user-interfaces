import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    Booking,
    CalendarEvent,
    OrganisationService,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@placeos/ts-client/staff', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { fromV1Mock, mockReply } from '@placeos/ts-client/compat';
import {
    bookings as staff_bookings,
    events as staff_events,
} from '@placeos/ts-client/staff';

import { BookCodeFlowComponent } from '../../app/book/code-flow.component';

describe('BookCodeFlowComponent', () => {
    let spectator: SpectatorRouting<BookCodeFlowComponent>;
    const createComponent = createRoutingFactory({
        component: BookCodeFlowComponent,
        providers: [
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(EventFormService, { newForm: vi.fn() }),
            MockProvider(BookingFormService, {
                newForm: vi.fn(),
                setOptions: vi.fn(),
            }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [FormsModule],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should carry scanned QR code params through to the route', () => {
        const router = spectator.inject(Router);
        (spectator.component as any).handleQrCode(
            'https://place.tech/workplace/#/book/code?asset_id=desk-1',
        );
        expect(router.navigate).toHaveBeenCalledWith(['/book/code'], {
            queryParams: { asset_id: 'desk-1' },
        });
    });

    it('should report the wrong resource when the current booking is for another desk', async () => {
        setCurrentUser(new StaffUser({ id: 'me', email: 'me@test.com' }));
        vi.mocked(staff_bookings.query).mockImplementation(
            fromV1Mock(
                () => Promise.resolve([{ id: 'b-1', asset_id: 'desk-2' }]),
                ['...'],
            ),
        );
        const router = spectator.inject(Router);

        await (spectator.component as any)._checkinBooking('desk-1');

        expect(router.navigate).toHaveBeenCalledWith(
            ['/book', 'code', 'error'],
            { queryParams: { type: 'wrong_resource', asset_id: 'desk-1' } },
        );
    });

    it('should check in to a desk asset booking from a code with the original desk id', async () => {
        setCurrentUser(new StaffUser({ id: 'me', email: 'me@test.com' }));
        vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
            (key: string) =>
                key === 'app.desks.use_assets' ? true : undefined,
        );
        vi.spyOn(
            spectator.inject(OrganisationService),
            'organisation',
            'get',
        ).mockReturnValue({ id: 'org-1' } as any);
        const page = (data: any[]) =>
            Promise.resolve({ data, total: data.length, next: () => null });
        vi.mocked(ts_client.asset_categories.query).mockImplementation(
            fromV1Mock(
                () => page([{ id: 'cat-1', name: '_DESKS_' }]) as any,
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client.asset_types.query).mockImplementation(
            fromV1Mock(
                () => page([{ id: 'type-1', name: '_DESKS_' }]) as any,
                ['...'],
                'page',
            ),
        );
        // the booked desk can be in any building, so search the org
        vi.mocked(ts_client.assets.query).mockImplementation(
            fromV1Mock(
                (query: any) =>
                    page(
                        `${query.zones}` === 'org-1'
                            ? [
                                  {
                                      id: 'asset-1',
                                      zone_id: 'level-1',
                                      map_id: 'desk-1',
                                  },
                              ]
                            : [],
                    ) as any,
                ['...'],
                'page',
            ),
        );
        vi.mocked(staff_bookings.query).mockImplementation(
            fromV1Mock(
                () => Promise.resolve([{ id: 1, asset_id: 'asset-1' }]),
                ['...'],
            ),
        );
        vi.mocked(staff_bookings.checkIn).mockImplementation(
            fromV1Mock(() => ({}), ['...']),
        );
        const router = spectator.inject(Router);

        await (spectator.component as any)._checkinBooking('desk-1');

        expect(router.navigate).toHaveBeenCalledWith([
            '/book',
            'code',
            'success',
        ]);
    });

    it('should check in to a desk asset booking from a code with the original desk id in place_id', async () => {
        setCurrentUser(new StaffUser({ id: 'me', email: 'me@test.com' }));
        vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
            (key: string) =>
                key === 'app.desks.use_assets' ? true : undefined,
        );
        vi.spyOn(
            spectator.inject(OrganisationService),
            'organisation',
            'get',
        ).mockReturnValue({ id: 'org-1' } as any);
        const page = (data: any[]) =>
            Promise.resolve({ data, total: data.length, next: () => null });
        vi.mocked(ts_client.asset_categories.query).mockImplementation(
            fromV1Mock(
                () => page([{ id: 'cat-1', name: '_DESKS_' }]) as any,
                ['...'],
                'page',
            ),
        );
        vi.mocked(ts_client.asset_types.query).mockImplementation(
            fromV1Mock(
                () => page([{ id: 'type-1', name: '_DESKS_' }]) as any,
                ['...'],
                'page',
            ),
        );
        // the booked desk can be in any building, so search the org
        vi.mocked(ts_client.assets.query).mockImplementation(
            fromV1Mock(
                (query: any) =>
                    page(
                        `${query.zones}` === 'org-1'
                            ? [
                                  {
                                      id: 'asset-1',
                                      zone_id: 'level-1',
                                      map_id: 'map-1',
                                      client_ids: { place_id: 'desk-1' },
                                  },
                              ]
                            : [],
                    ) as any,
                ['...'],
                'page',
            ),
        );
        vi.mocked(staff_bookings.query).mockImplementation(
            fromV1Mock(
                () => Promise.resolve([{ id: 1, asset_id: 'asset-1' }]),
                ['...'],
            ),
        );
        vi.mocked(staff_bookings.checkIn).mockImplementation(
            fromV1Mock(() => ({}), ['...']),
        );
        const router = spectator.inject(Router);

        await (spectator.component as any)._checkinBooking('desk-1');

        expect(router.navigate).toHaveBeenCalledWith([
            '/book',
            'code',
            'success',
        ]);
    });

    describe('check in from a desk code', () => {
        beforeEach(() =>
            setCurrentUser(new StaffUser({ id: 'me', email: 'me@test.com' })),
        );

        it('should report a booking for the desk that has not started yet', async () => {
            vi.mocked(staff_bookings.query)
                .mockImplementationOnce(fromV1Mock(() => [], ['...']))
                .mockImplementationOnce(
                    fromV1Mock(
                        () => [{ id: 'b-1', asset_id: 'desk-1' }],
                        ['...'],
                    ),
                );

            await (spectator.component as any)._checkinBooking('desk-1');

            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
                ['/book', 'code', 'error'],
                { queryParams: { type: 'not_started', asset_id: 'desk-1' } },
            );
            expect(staff_bookings.checkIn).not.toHaveBeenCalled();
        });

        it('should start a desk booking when the user has no booking today', async () => {
            vi.mocked(staff_bookings.query).mockImplementation(
                fromV1Mock(() => [], ['...']),
            );
            const booking_form = spectator.inject(BookingFormService);

            await (spectator.component as any)._checkinBooking('desk-1');

            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
                ['/book', 'code', 'error'],
                { queryParams: { type: 'no_booking', asset_id: 'desk-1' } },
            );
            expect(booking_form.newForm).toHaveBeenCalledWith(
                'desk',
                expect.objectContaining({ asset_id: 'desk-1' }),
            );
            expect(
                vi.mocked(booking_form.newForm).mock.lastCall?.[1],
            ).toBeInstanceOf(Booking);
        });
    });

    describe('check in from a space code', () => {
        beforeEach(() =>
            setCurrentUser(new StaffUser({ id: 'me', email: 'me@test.com' })),
        );

        it('should check the user in to the current meeting in the space', async () => {
            vi.mocked(staff_events.query).mockImplementation(
                fromV1Mock(
                    () => [{ id: 'ev-1', resources: [{ id: 'sys-1' }] }],
                    ['...'],
                ),
            );
            vi.mocked(staff_events.guestCheckin).mockImplementation(
                fromV1Mock(() => ({}), ['...']),
            );

            await (spectator.component as any)._checkinEvent('sys-1');

            expect(staff_events.guestCheckin).toHaveBeenCalledExactlyOnceWith(
                expect.objectContaining({
                    id: 'ev-1',
                    guest_id: 'me@test.com',
                    state: true,
                }),
            );
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/book',
                'code',
                'success',
            ]);
        });

        it('should start a meeting in the space when it has no current meeting', async () => {
            vi.mocked(staff_events.query).mockImplementation(
                fromV1Mock(() => [], ['...']),
            );
            vi.mocked(ts_client.systems.show).mockResolvedValue(
                mockReply({
                    id: 'sys-1',
                    name: 'Room 1',
                } as any),
            );
            const event_form = spectator.inject(EventFormService);

            await (spectator.component as any)._checkinEvent('sys-1');

            const event = vi.mocked(event_form.newForm).mock.lastCall?.[0];
            expect(event).toBeInstanceOf(CalendarEvent);
            expect(event?.system?.id).toBe('sys-1');
            expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
                '/book',
                'meeting',
            ]);
            expect(staff_events.guestCheckin).not.toHaveBeenCalled();
        });

        it('should report a space that does not load', async () => {
            vi.mocked(staff_events.query).mockImplementation(
                fromV1Mock(() => [], ['...']),
            );
            vi.mocked(ts_client.systems.show).mockRejectedValue(
                new Error('404'),
            );

            await (spectator.component as any)._checkinEvent('sys-1');

            expect(
                spectator.inject(Router).navigate,
            ).toHaveBeenCalledExactlyOnceWith(['/book', 'code', 'error'], {
                queryParams: { type: 'space_error' },
            });
            expect(
                spectator.inject(EventFormService).newForm,
            ).not.toHaveBeenCalled();
            expect(spectator.component.loading()).toBe(false);
        });
    });
});
