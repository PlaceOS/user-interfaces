import { signal } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { ParkingRequestFormComponent } from '../../app/book/parking-request-flow/parking-request-form.component';

describe('ParkingRequestFormComponent', () => {
    let spectator: Spectator<ParkingRequestFormComponent>;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let form: any;
    let post_form: any;
    const createComponent = createComponentFactory({
        component: ParkingRequestFormComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            // This spec only exercises `submitRequest()` and never asserts on
            // the DOM. Left on, zoneless auto-detect renders the child
            // parking-request-form-details template against the hand-mocked
            // form/org (non-callable fields, `level_list` missing), throwing
            // `this.field(...)`/`this._org.level_list is not a function`
            // asynchronously. Disable it so no template renders.
            { provide: ComponentFixtureAutoDetect, useValue: false },
            MockProvider(BookingFormService, {
                setOptions: vi.fn(),
                postForm: vi.fn(),
            } as any),
            MockProvider(ParkingService, {
                user_details: signal(null),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(),
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
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    beforeEach(() => {
        model = signal({
            id: '',
            date: Date.now() + 60 * 60 * 1000,
            duration: 60,
            title: 'Parking Request',
            asset_id: '',
            asset_name: '',
            description: '',
            zones: [],
            location: '',
            extension_data: {},
            plate_number: ' ABC123 ',
        });
        form = () => ({ valid: () => true });
        post_form = vi.fn(() => Promise.resolve({ id: 'booking-1' }));
        spectator = createComponent({
            detectChanges: false,
            providers: [
                MockProvider(BookingFormService, {
                    form,
                    model,
                    view: vi.fn(),
                    setOptions: vi.fn(),
                    setView: vi.fn(),
                    resetForm: vi.fn(),
                    postForm: post_form,
                } as any),
            ],
        });
    });

    it('should set the parking request location from the selected building before submitting', async () => {
        await spectator.component.submitRequest();

        expect(model().zones).toEqual(['org-1', 'reg-1', 'bld-1']);
        expect(model().location).toBe('Headquarters');
        expect(model().extension_data.location).toBe('Headquarters');
        expect(model().plate_number).toBe('ABC123');
        expect(post_form).toHaveBeenCalled();
    });
});
