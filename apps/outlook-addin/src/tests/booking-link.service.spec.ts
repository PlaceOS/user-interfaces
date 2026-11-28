import { signal } from '@angular/core';
import {
    createServiceFactory,
    mockProvider,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { BookingFormService, BookingFormValue } from '@placeos/bookings';
import {
    Booking,
    HashMap,
    OrganisationService,
    setCurrentUser,
    StaffUser,
} from '@placeos/common';
import { mockData } from '@placeos/common/tests';
import { Zone } from '@placeos/ts-client';

import {
    type StubApi,
    type StubRequest,
    startStubApi,
} from '@placeos/common/tests';
import {
    isParkingRequest,
    PARKING_BOOKING_PROPERTY,
    ParkingLinkService,
    parkingRequestAsset,
} from '../app/calendar/booking-link.service';
import { OutlookEventService } from '../app/calendar/outlook-event.service';
import {
    MemoryItemAdapter,
    OutlookItemAdapter,
} from '../app/calendar/outlook-item.adapter';

// The API functions `showEvent`, `showBooking`, `updateBooking` and
// `removeBooking` run for real. A stub API answers their requests.
vi.mock('@placeos/ts-client', { spy: true });

const BOOKING_PATH = '/api/staff/v1/bookings/:id';

const START = new Date(2026, 9, 1, 9).valueOf();
const HOUR = 60 * 60 * 1000;

const space = () => ({
    id: 'park-01',
    name: 'P01',
    bookable: true,
    features: [],
    zone: mockData(Zone, { id: 'lvl-p1', parent_id: 'bld-1' }),
});

describe('ParkingLinkService', () => {
    /** The booking that the form posts, from the values of the form */
    const posted = () =>
        new Booking({
            ...model(),
            id: '101',
            booking_type: 'parking',
        } as Partial<Booking>);
    let spectator: SpectatorService<ParkingLinkService>;
    let api: StubApi;
    /** Handlers of the stub API, one for each request that the service makes */
    const booking_show = vi.fn<(request: StubRequest) => unknown>();
    const booking_update = vi.fn<(request: StubRequest) => unknown>();
    const booking_remove = vi.fn<(request: StubRequest) => unknown>();
    const event_show = vi.fn<(request: StubRequest) => unknown>();
    let adapter: MemoryItemAdapter;
    /** Move a pinned pane to a different Outlook item */
    let moveToNextItem: () => void;
    let outlook: OutlookEventService;
    const model = signal<Partial<BookingFormValue>>({});

    const createService = createServiceFactory({
        service: ParkingLinkService,
        providers: [
            mockProvider(BookingFormService, {
                model,
                // An existing booking keeps its form values, such as zones.
                newForm: vi.fn((_type: string, booking?: Booking) =>
                    model.set({ zones: booking?.zones ?? [] }),
                ),
                postForm: vi.fn(async () => posted()),
            }),
            mockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
                region: { id: 'region-1' },
                building: { id: 'bld-1' },
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        setCurrentUser(new StaffUser({ email: 'jon@place.tech' }));
        const not_found = () => {
            throw { status: 404 };
        };
        booking_show.mockReset().mockImplementation(not_found);
        event_show.mockReset().mockImplementation(not_found);
        // The server changes the fields of the posted booking that it gets
        booking_update.mockReset().mockImplementation((request) => ({
            ...posted().toJSON(),
            // The form leaves it empty, and the server sends a valid value
            permission: null,
            ...(request.body as HashMap),
            id: 101,
        }));
        booking_remove.mockReset().mockReturnValue(undefined);
        api = startStubApi();
        api.on('GET', BOOKING_PATH, booking_show);
        api.on('PATCH', BOOKING_PATH, booking_update);
        api.on('DELETE', BOOKING_PATH, booking_remove);
        api.on('GET', '/api/staff/v1/events/:id', event_show);
        adapter = new MemoryItemAdapter({
            subject: 'Client visit',
            start: START,
            end: START + 2 * HOUR,
            all_day: false,
            is_recurring: false,
            room_emails: [],
        });
        const item: OutlookItemAdapter = adapter;
        item.onItemChange = (handler) => (moveToNextItem = handler);
        spectator = createService();
        outlook = spectator.inject(OutlookEventService);
        outlook.useAdapter(adapter);
    });

    afterEach(() => vi.unstubAllGlobals());

    it('requests parking for the building and links it to the event', async () => {
        await spectator.service.add(parkingRequestAsset(), {
            plate_number: 'ABC123',
        });

        expect(model()).toMatchObject({
            title: 'Client visit',
            date: START,
            duration: 120,
            plate_number: 'ABC123',
            zones: ['org-1', 'region-1', 'bld-1'],
        });
        const booking = spectator.service.booking();
        expect(booking && isParkingRequest(booking)).toBe(true);
        // The staff API gives a numeric booking ID
        expect(`${await adapter.getProperty(PARKING_BOOKING_PROPERTY)}`).toBe(
            '101',
        );
    });

    it('books a parking space in the zones of its level', async () => {
        await spectator.service.add(space());

        expect(model()).toMatchObject({
            asset_id: 'park-01',
            zones: ['org-1', 'region-1', 'bld-1', 'lvl-p1'],
        });
        expect(spectator.service.booking()?.asset_id).toBe('park-01');
    });

    it('stores the Outlook item ID and iCalUId on the booking', async () => {
        event_show.mockReturnValue({ ical_uid: 'uid-1' });

        await spectator.service.add(space());

        const item_id = await adapter.itemId();
        expect(item_id).toMatch(/^memory-/);
        expect(spectator.service.booking()?.extension_data).toMatchObject({
            outlook_item_id: item_id,
            ical_uid: 'uid-1',
        });
    });

    it('cancels the booking when Outlook cannot store the link', async () => {
        vi.spyOn(adapter, 'setProperty').mockRejectedValue('Item is read-only');

        await spectator.service.add(space());

        expect(booking_remove).toHaveBeenCalledOnce();
        expect(booking_remove.mock.calls[0][0].url.pathname).toBe(
            '/api/staff/v1/bookings/101',
        );
        expect(spectator.service.booking()).toBeNull();
        expect(spectator.service.state()).toBe('failed');
        expect(spectator.service.error()).toBe('Item is read-only');
    });

    it('keeps the link on the event when the booking cannot store the item ID', async () => {
        booking_update.mockImplementation(() => {
            throw { status: 500 };
        });

        await spectator.service.add(space());

        expect(spectator.service.booking()?.id).toBe('101');
        expect(spectator.service.state()).toBe('idle');
        expect(await adapter.getProperty(PARKING_BOOKING_PROPERTY)).toBe('101');
    });

    it('does not book when Outlook cannot read the event', async () => {
        vi.spyOn(adapter, 'read').mockRejectedValue('Item not available');

        await spectator.service.add(space());

        expect(spectator.inject(BookingFormService).postForm).not.toBeCalled();
        expect(spectator.service.state()).toBe('failed');
        expect(spectator.service.error()).toBe('Item not available');

        spectator.service.clearError();
        expect(spectator.service.state()).toBe('idle');
        expect(spectator.service.error()).toBe('');
    });

    it('does not book parking for a recurring event', async () => {
        adapter.update({ is_recurring: true });

        await spectator.service.add(space());

        expect(spectator.inject(BookingFormService).postForm).not.toBeCalled();
        expect(spectator.service.booking()).toBeNull();
        expect(spectator.service.state()).toBe('failed');
        expect(spectator.service.error()).toContain('recurring events');
    });

    it('moves the booking to the new event time and keeps its zones', async () => {
        await spectator.service.add(space());
        adapter.update({ start: START + HOUR, end: START + 2 * HOUR });
        await outlook.refresh();
        expect(spectator.service.out_of_sync()).toBe(true);

        await spectator.service.update();

        expect(spectator.service.booking()).toMatchObject({
            date: START + HOUR,
            duration: 60,
            zones: ['org-1', 'region-1', 'bld-1', 'lvl-p1'],
        });
        expect(spectator.service.out_of_sync()).toBe(false);
    });

    it('cancels the booking and removes the link from the event', async () => {
        await spectator.service.add(space());

        await spectator.service.remove();

        expect(booking_remove).toHaveBeenCalledOnce();
        expect(booking_remove.mock.calls[0][0].url.pathname).toBe(
            '/api/staff/v1/bookings/101',
        );
        expect(spectator.service.booking()).toBeNull();
        expect(await adapter.getProperty(PARKING_BOOKING_PROPERTY)).toBe('');
    });

    it.each([
        ['an active', { status: 'approved' }, '109'],
        ['a deleted', { deleted: true }, undefined],
    ])('loads %s linked booking', async (_, details, expected) => {
        await adapter.setProperty(PARKING_BOOKING_PROPERTY, '109');
        const booking: HashMap = {
            id: 109,
            asset_id: 'park-09',
            ...details,
        };
        booking_show.mockReturnValue(booking);

        await spectator.service.load();

        expect(spectator.service.booking()?.id?.toString()).toBe(expected);
    });

    it('forgets the booking when a pinned pane moves to another item', async () => {
        await outlook.init();
        await spectator.service.add(space());
        expect(spectator.service.booking()).not.toBeNull();

        moveToNextItem();

        expect(outlook.item_version()).toBe(1);
        expect(spectator.service.booking()).toBeNull();
        expect(spectator.service.out_of_sync()).toBe(false);
    });

    it('keeps the booking of the new item when a load for the old item finishes last', async () => {
        await outlook.init();
        await adapter.setProperty(PARKING_BOOKING_PROPERTY, '201');
        let finishOldLoad = () => {};
        booking_show
            .mockImplementationOnce(
                () =>
                    new Promise(
                        (resolve) =>
                            (finishOldLoad = () => resolve({ id: 201 })),
                    ),
            )
            .mockReturnValueOnce({ id: 202 });
        const old_load = spectator.service.load();
        await vi.waitFor(() => expect(booking_show).toHaveBeenCalled());

        moveToNextItem();
        await adapter.setProperty(PARKING_BOOKING_PROPERTY, '202');
        await spectator.service.load();
        finishOldLoad();
        await old_load;

        expect(`${spectator.service.booking()?.id}`).toBe('202');
    });
});
