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
import * as ts_client from '@placeos/ts-client';
import { PlaceZone } from '@placeos/ts-client';

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

// Mock the HTTP boundary used by `showEvent`, `showBooking`,
// `updateBooking` and `removeBooking`.
vi.mock('@placeos/ts-client', { spy: true });

const START = new Date(2026, 9, 1, 9).valueOf();
const HOUR = 60 * 60 * 1000;

const space = () => ({
    id: 'park-01',
    name: 'P01',
    bookable: true,
    features: [],
    zone: new PlaceZone({ id: 'lvl-p1', parent_id: 'bld-1' }),
});

describe('ParkingLinkService', () => {
    let spectator: SpectatorService<ParkingLinkService>;
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
                postForm: vi.fn(
                    async () =>
                        new Booking({
                            ...model(),
                            id: 'bkn-1',
                            booking_type: 'parking',
                        } as Partial<Booking>),
                ),
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
        vi.mocked(ts_client.get).mockRejectedValue('Not found');
        vi.mocked(ts_client.patch).mockImplementation(async (_, data) => ({
            ...model(),
            id: 'bkn-1',
            ...data,
        }));
        vi.mocked(ts_client.del).mockResolvedValue(undefined);
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
        expect(await adapter.getProperty(PARKING_BOOKING_PROPERTY)).toBe(
            'bkn-1',
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
        vi.mocked(ts_client.get).mockImplementation(((url: string) =>
            url.includes('/events/')
                ? Promise.resolve({ ical_uid: 'uid-1' } as HashMap)
                : Promise.reject('Not found')) as typeof ts_client.get);

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

        expect(ts_client.del).toHaveBeenCalledWith(
            expect.stringMatching(/\/bookings\/bkn-1\?/),
            expect.anything(),
        );
        expect(spectator.service.booking()).toBeNull();
        expect(spectator.service.state()).toBe('failed');
        expect(spectator.service.error()).toBe('Item is read-only');
    });

    it('keeps the link on the event when the booking cannot store the item ID', async () => {
        vi.mocked(ts_client.patch).mockRejectedValue('Server error');

        await spectator.service.add(space());

        expect(spectator.service.booking()?.id).toBe('bkn-1');
        expect(spectator.service.state()).toBe('idle');
        expect(await adapter.getProperty(PARKING_BOOKING_PROPERTY)).toBe(
            'bkn-1',
        );
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

        expect(ts_client.del).toHaveBeenCalledWith(
            expect.stringMatching(/\/bookings\/bkn-1\?/),
            expect.anything(),
        );
        expect(spectator.service.booking()).toBeNull();
        expect(await adapter.getProperty(PARKING_BOOKING_PROPERTY)).toBe('');
    });

    it.each([
        ['an active', { status: 'approved' }, 'bkn-9'],
        ['a cancelled', { status: 'cancelled' }, undefined],
        ['a deleted', { deleted: true }, undefined],
    ])('loads %s linked booking', async (_, details, expected) => {
        await adapter.setProperty(PARKING_BOOKING_PROPERTY, 'bkn-9');
        const booking: HashMap = {
            id: 'bkn-9',
            asset_id: 'park-09',
            ...details,
        };
        vi.mocked(ts_client.get).mockImplementation(((_url: string) =>
            Promise.resolve(booking)) as typeof ts_client.get);

        await spectator.service.load();

        expect(spectator.service.booking()?.id).toBe(expected);
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
        await adapter.setProperty(PARKING_BOOKING_PROPERTY, 'bkn-old');
        let finishOldLoad = () => {};
        vi.mocked(ts_client.get)
            .mockImplementationOnce(
                ((_url: string) =>
                    new Promise<HashMap>(
                        (resolve) =>
                            (finishOldLoad = () => resolve({ id: 'bkn-old' })),
                    )) as typeof ts_client.get,
            )
            .mockImplementationOnce(((_url: string) =>
                Promise.resolve<HashMap>({
                    id: 'bkn-new',
                })) as typeof ts_client.get);
        const old_load = spectator.service.load();
        await vi.waitFor(() => expect(ts_client.get).toHaveBeenCalled());

        moveToNextItem();
        await adapter.setProperty(PARKING_BOOKING_PROPERTY, 'bkn-new');
        await spectator.service.load();
        finishOldLoad();
        await old_load;

        expect(spectator.service.booking()?.id).toBe('bkn-new');
    });
});
