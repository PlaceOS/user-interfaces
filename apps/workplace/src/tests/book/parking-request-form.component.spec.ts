import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ParkingRequestFormComponent } from '../../app/book/parking-request-flow/parking-request-form.component';

describe('ParkingRequestFormComponent', () => {
    let spectator: Spectator<ParkingRequestFormComponent>;
    let form: FormGroup;
    let post_form: jest.Mock;
    const createComponent = createComponentFactory({
        component: ParkingRequestFormComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                setOptions: jest.fn(),
                postForm: jest.fn(),
            } as any),
            MockProvider(ParkingService, {
                user_details: of(null),
            }),
            MockProvider(SettingsService, {
                get: jest.fn(),
            }),
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
                region: { id: 'reg-1' },
                building: {
                    id: 'bld-1',
                    name: 'HQ',
                    display_name: 'Headquarters',
                },
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
        ],
    });

    beforeEach(() => {
        form = new FormGroup({
            id: new FormControl(''),
            date: new FormControl(Date.now() + 60 * 60 * 1000),
            duration: new FormControl(60),
            title: new FormControl('Parking Request'),
            asset_id: new FormControl(''),
            asset_name: new FormControl(''),
            description: new FormControl(''),
            zones: new FormControl([]),
            location: new FormControl(''),
            extension_data: new FormControl({}),
        });
        post_form = jest.fn(() => Promise.resolve({ id: 'booking-1' }));
        spectator = createComponent({
            detectChanges: false,
            providers: [
                MockProvider(BookingFormService, {
                    form,
                    view: jest.fn(),
                    setOptions: jest.fn(),
                    setView: jest.fn(),
                    resetForm: jest.fn(),
                    postForm: post_form,
                } as any),
            ],
        });
    });

    it('should set the parking request location from the selected building before submitting', async () => {
        await spectator.component.submitRequest();

        expect(form.getRawValue().zones).toEqual(['org-1', 'reg-1', 'bld-1']);
        expect(form.getRawValue().location).toBe('Headquarters');
        expect(form.getRawValue().extension_data.location).toBe(
            'Headquarters',
        );
        expect(post_form).toHaveBeenCalled();
    });
});
