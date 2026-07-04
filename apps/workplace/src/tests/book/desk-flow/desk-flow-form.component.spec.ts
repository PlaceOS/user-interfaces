import { signal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import {
    notifyError,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { NewDeskFlowFormComponent } from '../../../app/book/desk-flow/desk-flow-form.component';
import { NewDeskFormDetailsComponent } from '../../../app/book/desk-flow/desk-form-details.component';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifyError: jest.fn(),
        getInvalidSignalFields: jest.fn(() => ['title']),
    };
});

describe('NewDeskFlowFormComponent', () => {
    let spectator: SpectatorRouting<NewDeskFlowFormComponent>;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let form_valid: boolean;
    let has_assigned_desk: ReturnType<typeof signal<boolean>>;
    let allows_reserved: jest.Mock;
    let auto_allocation: boolean;
    let auto_allocate: jest.Mock;
    let set_view: jest.Mock;
    let after_dismissed_value: any;
    let sheet_open: jest.Mock;
    let show_close: ReturnType<typeof signal<boolean>>;

    const createComponent = createRoutingFactory({
        component: NewDeskFlowFormComponent,
        detectChanges: false,
        declarations: [MockComponent(NewDeskFormDetailsComponent)],
        providers: [
            MockProvider(SettingsService, { get: jest.fn(() => undefined) }),
            MockProvider(OrganisationService, {
                building: { id: 'bld-1' },
                waitUntilInitialised: jest.fn(() => Promise.resolve()),
                active_levels: signal([{ id: 'lvl-1' }]),
                levelsForBuilding: jest.fn(() => []),
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
        ],
    });

    beforeEach(() => {
        (notifyError as jest.Mock).mockClear();
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
        allows_reserved = jest.fn(() => true);
        auto_allocation = false;
        auto_allocate = jest.fn(() => Promise.resolve());
        set_view = jest.fn();
        after_dismissed_value = true;
        show_close = signal(false);
        sheet_open = jest.fn(() => ({
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
                        setOptions: jest.fn(),
                    },
                },
                MockProvider(MatBottomSheet, { open: sheet_open } as any),
            ],
        });
    });

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
        expect(notifyError).not.toHaveBeenCalled();
    });

    it('should default the asset_id from the first available resource', async () => {
        model.set({ id: '', asset_id: '', resources: [{ id: 'desk-9' }] });
        await spectator.component.viewConfirm();
        expect(model().asset_id).toBe('desk-9');
    });

    it('should block confirmation and notify when the form is invalid', async () => {
        form_valid = false;
        await spectator.component.viewConfirm();
        expect(notifyError).toHaveBeenCalled();
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
        expect(notifyError).toHaveBeenCalledWith('No desks available');
        expect(sheet_open).not.toHaveBeenCalled();
    });
});
