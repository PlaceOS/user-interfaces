import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { NewParkingFlowComponent } from '../../app/book/parking-flow.component';
import { NewParkingFlowConfirmComponent } from '../../app/book/parking-flow/parking-flow-confirm.component';
import { ParkingFlowFormComponent } from '../../app/book/parking-flow/parking-flow-form.component';
import { ParkingFlowSuccessComponent } from '../../app/book/parking-flow/parking-flow-success.component';

describe('NewParkingFlowComponent', () => {
    let spectator: SpectatorRouting<NewParkingFlowComponent>;
    let deny_parking_access: ReturnType<typeof signal<boolean>>;
    let assigned_space: ReturnType<typeof signal<any>>;
    let has_booking: ReturnType<typeof signal<boolean>>;
    let is_home_location: ReturnType<typeof signal<boolean>>;
    let view: ReturnType<typeof signal<string>>;
    let model: ReturnType<typeof signal<Record<string, any>>>;

    const createComponent = createRoutingFactory({
        component: NewParkingFlowComponent,
        declarations: [
            MockComponent(NewParkingFlowConfirmComponent),
            MockComponent(ParkingFlowFormComponent),
            MockComponent(ParkingFlowSuccessComponent),
        ],
        detectChanges: false,
        providers: [
            MockProvider(BookingFormService, {} as any),
            MockProvider(ParkingService, {} as any),
            MockProvider(OrganisationService, {} as any),
        ],
    });

    const build = (options: Record<string, any> = {}) => {
        deny_parking_access = signal(false);
        assigned_space = signal<any>(null);
        has_booking = signal(false);
        is_home_location = signal(false);
        view = signal('form');
        model = signal({ id: '', booking_type: '' });
        return createComponent({
            detectChanges: false,
            ...options,
            providers: [
                MockProvider(BookingFormService, {
                    view,
                    model,
                    last_success: null,
                    loadForm: jest.fn(),
                    newForm: jest.fn(),
                    setOptions: jest.fn(),
                    setView: jest.fn(),
                } as any),
                MockProvider(ParkingService, {
                    deny_parking_access,
                    assigned_space,
                    has_booking,
                    is_home_location,
                    loadBookings: jest.fn(),
                } as any),
                MockProvider(OrganisationService, {
                    waitUntilInitialised: jest.fn(() => Promise.resolve()),
                } as any),
            ],
        });
    };

    beforeEach(() => {
        spectator = build();
    });

    it('should render nothing but the placeholder before it is ready', () => {
        spectator.detectChanges();
        expect(spectator.query('parking-flow-form')).toBeNull();
        expect(spectator.query('parking-flow-confirm')).toBeNull();
        expect(spectator.query('parking-flow-success')).toBeNull();
    });

    it('should show the form view once ready', () => {
        spectator.component.ready.set(true);
        view.set('form');
        spectator.detectChanges();
        expect(spectator.query('parking-flow-form')).not.toBeNull();
    });

    it('should show the confirm view when the state view is confirm', () => {
        spectator.component.ready.set(true);
        view.set('confirm');
        spectator.detectChanges();
        expect(spectator.query('parking-flow-confirm')).not.toBeNull();
        expect(spectator.query('parking-flow-form')).toBeNull();
    });

    it('should show the success view when the state view is success', () => {
        spectator.component.ready.set(true);
        view.set('success');
        spectator.detectChanges();
        expect(spectator.query('parking-flow-success')).not.toBeNull();
        expect(spectator.query('parking-flow-form')).toBeNull();
    });

    it('should show the access-denied message when parking is denied', () => {
        spectator.component.ready.set(true);
        deny_parking_access.set(true);
        spectator.detectChanges();
        expect(spectator.query('parking-flow-form')).toBeNull();
        expect(spectator.fixture.nativeElement.textContent).toContain(
            'not allowed to book parking',
        );
    });

    it('should show the home-location restriction when the active location is home', () => {
        spectator.component.ready.set(true);
        is_home_location.set(true);
        spectator.detectChanges();
        expect(spectator.query('parking-flow-form')).toBeNull();
        expect(
            spectator.query('img[src="assets/icons/permission-none.svg"]'),
        ).not.toBeNull();
    });

    it('should show the assigned-space summary when a space is already booked', () => {
        spectator.component.ready.set(true);
        assigned_space.set({ name: 'Bay 42' });
        has_booking.set(true);
        spectator.detectChanges();
        expect(spectator.query('parking-flow-form')).toBeNull();
        expect(
            spectator.query('img[src="assets/icons/parking-success.svg"]'),
        ).not.toBeNull();
        expect(spectator.query('a[btn]')).not.toBeNull();
    });

    it('should show the booking flow when a space is assigned but has no booking yet', () => {
        spectator.component.ready.set(true);
        assigned_space.set({ name: 'Bay 42' });
        has_booking.set(false);
        view.set('form');
        spectator.detectChanges();
        expect(spectator.query('parking-flow-form')).not.toBeNull();
    });

    it('should load a fresh parking form and mark ready on init when no edit state exists', async () => {
        const state: any = spectator.inject(BookingFormService);
        const parking: any = spectator.inject(ParkingService);
        await spectator.component.ngOnInit();

        expect(parking.loadBookings).toHaveBeenCalled();
        expect(state.loadForm).toHaveBeenCalledWith('parking');
        expect(state.setOptions).toHaveBeenCalledWith({ type: 'parking' });
        expect(state.newForm).toHaveBeenCalledWith('parking');
        expect(model().booking_type).toBe('parking');
        expect(spectator.component.ready()).toBe(true);
    });

    it('should not reload the form when an existing parking booking is being edited', async () => {
        model.set({ id: 'booking-1', booking_type: 'parking' });
        const state: any = spectator.inject(BookingFormService);
        await spectator.component.ngOnInit();

        expect(state.loadForm).not.toHaveBeenCalled();
        expect(state.newForm).not.toHaveBeenCalled();
    });

    it('should apply the step route param to the state view on init', async () => {
        spectator.activatedRouteStub.snapshot = {
            paramMap: new Map([['step', 'confirm']]),
            queryParamMap: new Map(),
        } as any;
        const state: any = spectator.inject(BookingFormService);
        await spectator.component.ngOnInit();

        expect(state.setView).toHaveBeenCalledWith('confirm');
    });

    it('should switch to the success view when the success query param is present', async () => {
        spectator.activatedRouteStub.snapshot = {
            paramMap: new Map(),
            queryParamMap: new Map([['success', '1']]),
        } as any;
        const state: any = spectator.inject(BookingFormService);
        await spectator.component.ngOnInit();

        expect(state.setView).toHaveBeenCalledWith('success');
    });
});
