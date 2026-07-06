import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    SettingsService,
    setCurrentUser,
    StaffUser,
} from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BookLockerFlowComponent } from '../../app/book/locker-flow.component';
import { BookLockerFlowConfirmComponent } from '../../app/book/locker-flow/locker-flow-confirm.component';
import { BookLockerFlowFormComponent } from '../../app/book/locker-flow/locker-flow-form.component';
import { BookLockerFlowSuccessComponent } from '../../app/book/locker-flow/locker-flow-success.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('BookLockerFlowComponent', () => {
    let spectator: SpectatorRouting<BookLockerFlowComponent>;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let view: ReturnType<typeof signal<string>>;
    let set_view: any;
    let load_form: any;
    let new_form: any;

    const createComponent = createRoutingFactory({
        component: BookLockerFlowComponent,
        detectChanges: false,
        declarations: [
            MockComponent(BookLockerFlowConfirmComponent),
            MockComponent(BookLockerFlowFormComponent),
            MockComponent(BookLockerFlowSuccessComponent),
        ],
        providers: [
            MockProvider(SettingsService, { get: vi.fn(() => false) } as any),
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
                    setOptions: vi.fn(),
                    loadForm: load_form,
                    newForm: new_form,
                    loadGroupMembersForBooking: vi.fn(() =>
                        Promise.resolve([]),
                    ),
                    last_success: null,
                } as any),
            ],
        });
        return spectator;
    };

    beforeEach(() => {
        setCurrentUser(
            new StaffUser({
                id: 'me',
                email: 'me@test.com',
                name: 'Me',
            } as any),
        );
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.query).mockResolvedValue({ data: [] } as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        vi.mocked(ts_client.querySystems).mockResolvedValue({ data: [] } as any);
        vi.mocked(ts_client.post).mockResolvedValue({ id: 'x' } as any);
        model = signal<Record<string, any>>({ id: '', booking_type: '' });
        view = signal<string>('form');
        set_view = vi.fn((v: string) => view.set(v));
        load_form = vi.fn();
        new_form = vi.fn();
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

    it('should not mark an assigned locker space when there are no locker resources', async () => {
        build();
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        await Promise.resolve();
        spectator.detectChanges();
        expect(spectator.component.assigned_space()).toBeUndefined();
    });

    it('should flag when the user already has a locker booking today', async () => {
        vi.mocked(ts_client.get).mockResolvedValue([{ id: 'b-1' }] as any);
        build();
        await spectator.fixture.whenStable();
        expect(spectator.component.has_booking()).toBe(true);
    });
});
