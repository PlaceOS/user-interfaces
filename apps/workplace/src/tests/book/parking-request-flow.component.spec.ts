import { signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ParkingRequestFlowComponent } from '../../app/book/parking-request-flow.component';

describe('ParkingRequestFlowComponent', () => {
    let spectator: Spectator<ParkingRequestFlowComponent>;
    let model: WritableSignal<any>;
    let view: WritableSignal<string>;
    let is_home_location: WritableSignal<boolean>;
    let load_bookings: jest.Mock;
    let load_form: jest.Mock;
    let new_form: jest.Mock;
    let set_view: jest.Mock;
    let set_options: jest.Mock;
    let param_map: any;
    let query_param_map: any;

    const createComponent = createComponentFactory({
        component: ParkingRequestFlowComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {} as any),
            MockProvider(ParkingService, {} as any),
            MockProvider(ActivatedRoute, {} as any),
        ],
    });

    function build() {
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    model,
                    view,
                    loadForm: load_form,
                    newForm: new_form,
                    setView: set_view,
                    setOptions: set_options,
                } as any),
                MockProvider(ParkingService, {
                    is_home_location,
                    loadBookings: load_bookings,
                } as any),
                MockProvider(ActivatedRoute, {
                    paramMap: of(param_map),
                    queryParamMap: of(query_param_map),
                } as any),
            ],
        });
    }

    beforeEach(() => {
        jest.clearAllMocks();
        model = signal<any>({ id: '', booking_type: '' });
        view = signal('form');
        is_home_location = signal(false);
        load_bookings = jest.fn();
        load_form = jest.fn();
        new_form = jest.fn();
        set_view = jest.fn();
        set_options = jest.fn();
        param_map = { has: () => false, get: () => null };
        query_param_map = { has: () => false, get: () => null };
    });

    it('should load parking bookings and initialise a parking form on init', () => {
        build();
        spectator.component.ngOnInit();

        expect(load_bookings).toHaveBeenCalled();
        expect(load_form).toHaveBeenCalledWith('parking');
        expect(set_options).toHaveBeenCalledWith({ type: 'parking' });
        expect(model().booking_type).toBe('parking');
    });

    it('should start a new parking form when there is no active booking', () => {
        build();
        spectator.component.ngOnInit();

        expect(new_form).toHaveBeenCalledWith('parking');
    });

    it('should not start a new form when an existing booking is loaded', () => {
        model.set({ id: 'existing-1', booking_type: '' });
        build();
        spectator.component.ngOnInit();

        expect(new_form).not.toHaveBeenCalled();
    });

    it('should move to the view named by the route step parameter', () => {
        param_map = {
            has: (key: string) => key === 'step',
            get: (key: string) => (key === 'step' ? 'confirm' : null),
        };
        build();
        spectator.component.ngOnInit();

        expect(set_view).toHaveBeenCalledWith('confirm');
    });

    it('should move to the success view when the success query param is present', () => {
        query_param_map = {
            has: (key: string) => key === 'success',
            get: () => 'true',
        };
        build();
        spectator.component.ngOnInit();

        expect(set_view).toHaveBeenCalledWith('success');
    });

    it('should expose the home-location restriction and current view from the services', () => {
        build();

        expect(spectator.component.is_home_location()).toBe(false);
        expect(spectator.component.view()).toBe('form');

        is_home_location.set(true);
        view.set('success');

        expect(spectator.component.is_home_location()).toBe(true);
        expect(spectator.component.view()).toBe('success');
    });
});
