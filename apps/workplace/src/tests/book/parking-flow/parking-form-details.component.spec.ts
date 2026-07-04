import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { addDays, endOfDay } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import { ParkingFormDetailsComponent } from '../../../app/book/parking-flow/parking-form-details.component';

describe('ParkingFormDetailsComponent', () => {
    let spectator: Spectator<ParkingFormDetailsComponent>;
    let settings: Record<string, any>;
    let org_building: any;

    const createComponent = createComponentFactory({
        component: ParkingFormDetailsComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {} as any),
            MockProvider(SettingsService, {} as any),
            MockProvider(OrganisationService, {} as any),
        ],
    });

    beforeEach(() => {
        settings = {};
        org_building = { id: 'bld-1', timezone: 'Australia/Sydney' };
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    model: signal({ all_day: false }),
                } as any),
                MockProvider(SettingsService, {
                    get: jest.fn((key: string) => settings[key]),
                } as any),
                MockProvider(OrganisationService, {
                    active_building: signal({ id: 'bld-1' }),
                    building_list: signal([{ id: 'bld-1' }, { id: 'bld-2' }]),
                    building: org_building,
                } as any),
            ],
        });
    });

    it('should default the available period to 7 days when unset', () => {
        const expected = endOfDay(addDays(Date.now(), 7)).valueOf();
        expect(spectator.component.end_date).toBe(expected);
    });

    it('should use the configured parking available period for the end date', () => {
        settings['app.parking.available_period'] = 14;
        const expected = endOfDay(addDays(Date.now(), 14)).valueOf();
        expect(spectator.component.end_date).toBe(expected);
    });

    it('should fall back through parking then bookings then default for max duration', () => {
        expect(spectator.component.max_duration).toBe(480);
        settings['app.bookings.max_duration'] = 240;
        expect(spectator.component.max_duration).toBe(240);
        settings['app.parking.max_duration'] = 600;
        expect(spectator.component.max_duration).toBe(600);
    });

    it('should default allow_all_day to true when no setting is present', () => {
        expect(spectator.component.allow_all_day).toBe(true);
    });

    it('should honour an explicit false allow_all_day parking setting', () => {
        settings['app.parking.allow_all_day'] = false;
        settings['app.bookings.allow_all_day'] = false;
        expect(spectator.component.allow_all_day).toBe(false);
    });

    it('should read can_book_for_others from bookings or parking settings', () => {
        expect(spectator.component.can_book_for_others).toBeFalsy();
        settings['app.parking.can_book_for_others'] = true;
        expect(spectator.component.can_book_for_others).toBe(true);
    });

    it('should only use the building timezone when the setting is enabled', () => {
        expect(spectator.component.timezone).toBe('');
        settings['app.parking.use_building_timezone'] = true;
        expect(spectator.component.timezone).toBe('Australia/Sydney');
    });

    it('should compute the effective minimum duration from min and custom options', () => {
        expect(spectator.component.effective_min_duration).toBe(30);
        settings['app.parking.custom_duration_options'] = [15, 45];
        expect(spectator.component.effective_min_duration).toBe(15);
    });

    it('should set the active building on the organisation service', () => {
        spectator.component.setBuilding({ id: 'bld-2' });
        expect((spectator.inject(OrganisationService) as any).building).toEqual(
            { id: 'bld-2' },
        );
    });
});
