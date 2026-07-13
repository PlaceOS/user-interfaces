import { signal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    SettingsService,
    setNotifyOutlet,
} from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { NewDeskFlowFormComponent } from '../../../app/book/desk-flow/desk-flow-form.component';
import { NewDeskFormDetailsComponent } from '../../../app/book/desk-flow/desk-form-details.component';

describe('NewDeskFlowFormComponent', () => {
    let spectator: SpectatorRouting<NewDeskFlowFormComponent>;
    let notify_open: any;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let form_valid: boolean;
    let has_assigned_desk: ReturnType<typeof signal<boolean>>;
    let allows_reserved: any;
    let auto_allocation: boolean;
    let auto_allocate: any;
    let set_view: any;
    let after_dismissed_value: any;
    let sheet_open: any;
    let show_close: ReturnType<typeof signal<boolean>>;

    const createComponent = createRoutingFactory({
        component: NewDeskFlowFormComponent,
        detectChanges: false,
        declarations: [MockComponent(NewDeskFormDetailsComponent)],
        providers: [
            MockProvider(SettingsService, { get: vi.fn(() => undefined) }),
            MockProvider(OrganisationService, {
                building: { id: 'bld-1' },
                waitUntilInitialised: vi.fn(() => Promise.resolve()),
                active_levels: signal([{ id: 'lvl-1' }]),
                levelsForBuilding: vi.fn(() => []),
            } as any),
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        model = signal<Record<string, any>>({
            id: '',
            title: 'Desk',
            asset_id: '',
            resources: [],
            date: Date.now() + 60 * 60 * 1000,
            duration: 60,
        });
        form_valid = true;
        has_assigned_desk = signal(false);
        allows_reserved = vi.fn(() => true);
        auto_allocation = false;
        auto_allocate = vi.fn(() => Promise.resolve());
        set_view = vi.fn();
        after_dismissed_value = true;
        show_close = signal(false);
        sheet_open = vi.fn(() => ({
            instance: { show_close },
            afterDismissed: () => of(after_dismissed_value),
        }));
        spectator = createComponent({
            providers: [
                {
                    provide: BookingFormService,
                    useValue: {
                        form: () => ({ valid: () => form_valid }),
                        model,
                        has_assigned_desk,
                        allowsBookingWithReservedResource: allows_reserved,
                        get auto_allocation() {
                            return auto_allocation;
                        },
                        autoAllocateDesk: auto_allocate,
                        setView: set_view,
                        setOptions: vi.fn(),
                    },
                },
                MockProvider(MatBottomSheet, { open: sheet_open } as any),
            ],
        });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should create', () => expect(spectator.component).toBeTruthy());

    it('should show the reserved-desk overlay when the user has a reserved desk that blocks booking', () => {
        has_assigned_desk.set(true);
        allows_reserved.mockReturnValue(false);
        expect(spectator.component.show_reserved_desk_overlay()).toBe(true);
    });

    it('should not show the overlay when booking with a reserved resource is allowed', () => {
        has_assigned_desk.set(true);
        allows_reserved.mockReturnValue(true);
        expect(spectator.component.show_reserved_desk_overlay()).toBe(false);
    });

    it('should open the confirm sheet when the form is valid', async () => {
        await spectator.component.viewConfirm();
        expect(sheet_open).toHaveBeenCalled();
        expect(show_close()).toBe(true);
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('should default the asset_id from the first available resource', async () => {
        model.set({ id: '', asset_id: '', resources: [{ id: 'desk-9' }] });
        await spectator.component.viewConfirm();
        expect(model().asset_id).toBe('desk-9');
    });

    it('should block confirmation and notify when the form is invalid', async () => {
        form_valid = false;
        await spectator.component.viewConfirm();
        expect(notify_open).toHaveBeenCalled();
        expect(sheet_open).not.toHaveBeenCalled();
    });

    it('should navigate to success after the sheet is dismissed with a value', async () => {
        await spectator.component.viewConfirm();
        expect(set_view).toHaveBeenCalledWith('success');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book',
            'desk',
            'success',
        ]);
    });

    it('should not navigate when the sheet is dismissed without a value', async () => {
        after_dismissed_value = undefined;
        await spectator.component.viewConfirm();
        expect(set_view).not.toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });

    it('should auto-allocate a desk before confirming when enabled', async () => {
        auto_allocation = true;
        await spectator.component.viewConfirm();
        expect(auto_allocate).toHaveBeenCalled();
        expect(sheet_open).toHaveBeenCalled();
    });

    it('should abort and notify when auto-allocation fails', async () => {
        auto_allocation = true;
        auto_allocate.mockRejectedValueOnce('No desks available');
        await spectator.component.viewConfirm();
        expect(notify_open).toHaveBeenCalledWith(
            'No desks available',
            expect.anything(),
            expect.anything(),
        );
        expect(sheet_open).not.toHaveBeenCalled();
    });
});
