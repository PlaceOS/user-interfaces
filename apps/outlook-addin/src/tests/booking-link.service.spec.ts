import { signal } from '@angular/core';
import {
    createServiceFactory,
    mockProvider,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { BookingFormService, BookingFormValue } from '@placeos/bookings';
import {
    Booking,
    OrganisationService,
    setCurrentUser,
    StaffUser,
} from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { PlaceZone } from '@placeos/ts-client';

import {
    isParkingRequest,
    PARKING_BOOKING_PROPERTY,
    parkingRequestAsset,
    ParkingLinkService,
} from '../app/calendar/booking-link.service';
import { OutlookEventService } from '../app/calendar/outlook-event.service';
import { MemoryItemAdapter } from '../app/calendar/outlook-item.adapter';

// Mock the HTTP boundary used by `showEvent` and `updateBooking`.
vi.mock('@placeos/ts-client', { spy: true });

const START = new Date(2026, 9, 1, 9).valueOf();
const HOUR = 60 * 60 * 1000;

describe('ParkingLinkService', () => {
    let spectator: SpectatorService<ParkingLinkService>;
    let adapter: MemoryItemAdapter;
    const model = signal<Partial<BookingFormValue>>({});

    const createService = createServiceFactory({
        service: ParkingLinkService,
        providers: [
            mockProvider(BookingFormService, {
                model,
                newForm: vi.fn(() => model.set({ zones: [] })),
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
        adapter = new MemoryItemAdapter({
            subject: 'Client visit',
            start: START,
            end: START + 2 * HOUR,
            all_day: false,
            is_recurring: false,
            room_emails: [],
        });
        spectator = createService();
        const outlook = spectator.inject(OutlookEventService);
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
        await spectator.service.add({
            id: 'park-01',
            name: 'P01',
            bookable: true,
            features: [],
            zone: new PlaceZone({ id: 'lvl-p1', parent_id: 'bld-1' }),
        });

        expect(model()).toMatchObject({
            asset_id: 'park-01',
            zones: ['org-1', 'region-1', 'bld-1', 'lvl-p1'],
        });
        expect(spectator.service.booking()?.asset_id).toBe('park-01');
    });
});
