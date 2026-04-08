import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ParkingService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ParkingRequestFormDetailsComponent } from '../../app/book/parking-request-flow/parking-request-form-details.component';

describe('ParkingRequestFormDetailsComponent', () => {
    let spectator: Spectator<ParkingRequestFormDetailsComponent>;
    const createComponent = createComponentFactory({
        component: ParkingRequestFormDetailsComponent,
        providers: [
            MockProvider(ParkingService, {
                spaces: of([]),
            }),
            MockProvider(SettingsService, {
                get: jest.fn(
                    (key: string) =>
                        key === 'app.bookings.use_building_timezone' ||
                        key === 'app.parking.use_building_timezone',
                ),
                time_format: 'h:mm a',
            }),
            MockProvider(OrganisationService, {
                active_building: of({ id: 'bld-1', timezone: 'UTC' }),
                active_buildings: of([]),
                building: { id: 'bld-1', timezone: 'UTC' },
            }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.setInput(
            'form',
            new FormGroup({
                date: new FormControl(
                    new Date('2026-04-08T08:00:00.000Z').valueOf(),
                ),
                duration: new FormControl(240),
                request_type: new FormControl('standard'),
                user: new FormControl(null),
                prefer_booked_location_first: new FormControl(false),
                vehicle_type: new FormControl('car'),
                plate_number: new FormControl('ABC123'),
                approver_group: new FormControl(''),
            }),
        );
        spectator.component.shift_options_setting.set([
            {
                id: 'morning',
                name: 'Morning',
                start_time: 480,
                end_time: 720,
            },
            {
                id: 'afternoon',
                name: 'Afternoon',
                start_time: 780,
                end_time: 1020,
            },
        ]);
        spectator.component.request_types_setting.set([
            {
                id: 'standard',
                name: 'Standard',
            },
            {
                id: 'forced',
                name: 'Forced',
                forced_time: {
                    start_time: 540,
                    end_time: 660,
                },
            },
        ]);
        spectator.component.hide_custom_shift.set(false);
    });

    it('should restore the selected shift after clearing a forced request time', () => {
        const base_day = new Date('2026-04-08T00:00:00.000Z').valueOf();
        spectator.component.setShiftType('afternoon');

        spectator.component.setRequestType('forced');

        expect(spectator.component.shift_type()).toBe('custom');
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 540 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(120);

        spectator.component.setRequestType('standard');

        expect(spectator.component.shift_type()).toBe('afternoon');
        expect(spectator.component.form().getRawValue().date).toBe(
            base_day + 780 * 60 * 1000,
        );
        expect(spectator.component.form().getRawValue().duration).toBe(240);
    });
});
