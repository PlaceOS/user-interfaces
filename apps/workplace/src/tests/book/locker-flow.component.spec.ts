import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    BookingFormService,
    loadLockerResources,
    queryBookings,
} from '@placeos/bookings';
import {
    currentUser,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BookLockerFlowComponent } from '../../app/book/locker-flow.component';
import { BookLockerFlowConfirmComponent } from '../../app/book/locker-flow/locker-flow-confirm.component';
import { BookLockerFlowFormComponent } from '../../app/book/locker-flow/locker-flow-form.component';
import { BookLockerFlowSuccessComponent } from '../../app/book/locker-flow/locker-flow-success.component';

jest.mock('@placeos/bookings', () => {
    const actual = jest.requireActual('@placeos/bookings');
    return {
        ...actual,
        loadLockerResources: jest.fn(() => Promise.resolve([])),
        queryBookings: jest.fn(() => Promise.resolve([])),
    };
});

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        currentUser: jest.fn(() => ({ email: 'me@test.com' })),
    };
});

describe('BookLockerFlowComponent', () => {
    let spectator: SpectatorRouting<BookLockerFlowComponent>;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let view: ReturnType<typeof signal<string>>;
    let set_view: jest.Mock;
    let load_form: jest.Mock;
    let new_form: jest.Mock;

    const createComponent = createRoutingFactory({
        component: BookLockerFlowComponent,
        detectChanges: false,
        declarations: [
            MockComponent(BookLockerFlowConfirmComponent),
            MockComponent(BookLockerFlowFormComponent),
            MockComponent(BookLockerFlowSuccessComponent),
        ],
        providers: [
            MockProvider(SettingsService, { get: jest.fn(() => false) }),
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
                active_region: signal({ id: 'reg-1' }),
                region: { id: 'reg-1' },
            } as any),
        ],
    });

    const build = () => {
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    view,
                    model,
                    setView: set_view,
                    setOptions: jest.fn(),
                    loadForm: load_form,
                    newForm: new_form,
                    loadGroupMembersForBooking: jest.fn(() =>
                        Promise.resolve([]),
                    ),
                    last_success: null,
                } as any),
            ],
        });
        return spectator;
    };

    beforeEach(() => {
        (loadLockerResources as jest.Mock).mockResolvedValue([]);
        (queryBookings as jest.Mock).mockResolvedValue([]);
        (currentUser as jest.Mock).mockReturnValue({ email: 'me@test.com' });
        model = signal<Record<string, any>>({ id: '', booking_type: '' });
        view = signal<string>('form');
        set_view = jest.fn((v: string) => view.set(v));
        load_form = jest.fn();
        new_form = jest.fn();
    });

    it('should create', () => expect(build().component).toBeTruthy());

    it('should render the form view by default', () => {
        build();
        spectator.detectChanges();
        expect(spectator.query('locker-flow-form')).toExist();
        expect(spectator.query('locker-flow-success')).not.toExist();
    });

    it('should render the success view when selected', () => {
        build();
        view.set('success');
        spectator.detectChanges();
        expect(spectator.query('locker-flow-success')).toExist();
    });

    it('should render the confirm view when selected', () => {
        build();
        view.set('confirm');
        spectator.detectChanges();
        expect(spectator.query('locker-flow-confirm')).toExist();
    });

    it('should load the locker form and default booking_type on init', () => {
        build();
        spectator.component.ngOnInit();
        expect(load_form).toHaveBeenCalledWith('locker');
        expect(model().booking_type).toBe('locker');
    });

    it('should create a new form when there is no existing booking id', () => {
        build();
        spectator.component.ngOnInit();
        expect(new_form).toHaveBeenCalledWith('locker');
    });

    it('should not create a new form when editing an existing booking', () => {
        model.set({ id: 'booking-1', booking_type: '' });
        build();
        spectator.component.ngOnInit();
        expect(new_form).not.toHaveBeenCalled();
    });

    it('should switch to the success view when the success query param is present', () => {
        build();
        spectator.setRouteQueryParam('success', 'true');
        spectator.component.ngOnInit();
        expect(set_view).toHaveBeenCalledWith('success');
    });

    it('should mark that the user has an assigned locker space', async () => {
        (loadLockerResources as jest.Mock).mockResolvedValue([
            { id: 'locker-1', name: 'E-043', assigned_to: 'ME@TEST.COM' },
        ]);
        build();
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        await Promise.resolve();
        spectator.detectChanges();
        expect(spectator.component.assigned_space()?.id).toBe('locker-1');
    });

    it('should flag when the user already has a locker booking today', async () => {
        (queryBookings as jest.Mock).mockResolvedValue([{ id: 'b-1' }]);
        build();
        await spectator.fixture.whenStable();
        expect(spectator.component.has_booking()).toBe(true);
    });
});
