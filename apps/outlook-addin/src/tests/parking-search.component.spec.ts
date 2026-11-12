import { signal } from '@angular/core';
import {
    createComponentFactory,
    mockProvider,
    Spectator,
} from '@ngneat/spectator/vitest';
import {
    BookingFormService,
    BookingFormValue,
    ParkingService,
} from '@placeos/bookings';
import {
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';

import { isParkingRequest } from '../app/calendar/booking-link.service';
import { OutlookEventService } from '../app/calendar/outlook-event.service';
import { MemoryItemAdapter } from '../app/calendar/outlook-item.adapter';
import {
    parkingModes,
    ParkingSearchComponent,
} from '../app/calendar/parking-search.component';

const START = new Date(2026, 9, 1, 9).valueOf();
const HOUR = 60 * 60 * 1000;

describe('parkingModes', () => {
    it('turns on parking spaces and parking requests from app features', () => {
        expect(parkingModes(['parking', 'parking-requests'])).toEqual([
            'space',
            'request',
        ]);
        expect(parkingModes(['parking-requests'])).toEqual(['request']);
        expect(parkingModes()).toEqual([]);
    });
});

describe('ParkingSearchComponent', () => {
    let spectator: Spectator<ParkingSearchComponent>;
    const model = signal<Partial<BookingFormValue>>({});
    const features = signal(['parking', 'parking-requests']);
    const user_details = signal<{ plate_number?: string } | null>(null);
    const require_plate_number = settingSignal(
        'parking.require_plate_number',
        false,
    );

    const createComponent = createComponentFactory({
        component: ParkingSearchComponent,
        detectChanges: false,
        providers: [
            mockProvider(BookingFormService, {
                model,
                options: signal({}),
                available_resources: signal([]),
                loading: signal(''),
                assignedResourceBooking: () => 'allow',
            }),
            mockProvider(SettingsService, {
                get: (key: string) =>
                    key === 'app.features' ? features() : undefined,
            }),
            mockProvider(ParkingService, {
                user_details,
                deny_parking_access: signal(false),
                is_home_location: signal(false),
                assigned_space: signal(null),
                levels: signal([]),
            }),
            mockProvider(OrganisationService, {
                building: { id: 'bld-1', name: 'London office' },
            }),
        ],
    });

    beforeEach(async () => {
        vi.clearAllMocks();
        model.set({});
        features.set(['parking', 'parking-requests']);
        user_details.set(null);
        require_plate_number.set(false);
        spectator = createComponent();
        const outlook = spectator.inject(OutlookEventService);
        outlook.useAdapter(
            new MemoryItemAdapter({
                subject: 'Client visit',
                start: START,
                end: START + HOUR,
                all_day: false,
                is_recurring: false,
                room_emails: [],
            }),
        );
        await outlook.refresh();
        spectator.detectChanges();
    });

    it('keeps the chosen mode while the settings still allow it', () => {
        spectator.component.mode.set('request');
        features.set(['parking-requests', 'parking']);
        expect(spectator.component.mode()).toBe('request');

        features.set(['parking']);
        expect(spectator.component.mode()).toBe('space');
    });

    it('searches for spaces only in space mode', () => {
        const form = spectator.inject(BookingFormService);
        expect(model()).toMatchObject({ date: START, duration: 60 });
        expect(form.listAvailableResources).toHaveBeenCalledOnce();

        spectator.component.mode.set('request');
        spectator.detectChanges();

        expect(form.listAvailableResources).toHaveBeenCalledOnce();
    });

    it('keeps a typed plate number when the saved plate number loads', () => {
        user_details.set({ plate_number: 'SAVED1' });
        expect(spectator.component.plate_number()).toBe('SAVED1');

        spectator.component.plate_number.set('TYPED1');
        user_details.set({ plate_number: 'SAVED2' });
        expect(spectator.component.plate_number()).toBe('TYPED1');
    });

    it('requires a plate number only when the site setting asks for one', () => {
        spectator.component.plate_number.set('  ');
        expect(spectator.component.plate_valid()).toBe(true);

        require_plate_number.set(true);
        expect(spectator.component.plate_valid()).toBe(false);
    });

    it('requests parking at the building with the trimmed plate number', async () => {
        const add = vi
            .spyOn(spectator.component.link, 'add')
            .mockResolvedValue();
        spectator.component.plate_number.set(' ABC123 ');

        await spectator.component.requestParking();

        const [asset, fields] = add.mock.calls[0];
        expect(isParkingRequest({ asset_id: asset.id })).toBe(true);
        expect(fields).toEqual({
            plate_number: 'ABC123',
            description: 'Parking request',
            location: 'London office',
        });
    });
});
