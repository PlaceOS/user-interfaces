import { signal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { BookLockerFlowFormComponent } from '../../../app/book/locker-flow/locker-flow-form.component';
import { LockerFormDetailsComponent } from '../../../app/book/locker-flow/locker-form-details.component';

describe('BookLockerFlowFormComponent', () => {
    let spectator: SpectatorRouting<BookLockerFlowFormComponent>;
    let notify_open: any;
    let model: ReturnType<typeof signal<Record<string, any>>>;
    let form_valid: boolean;
    let after_dismissed_value: any;
    let sheet_open: any;
    let show_close: ReturnType<typeof signal<boolean>>;

    const createComponent = createRoutingFactory({
        component: BookLockerFlowFormComponent,
        detectChanges: false,
        declarations: [MockComponent(LockerFormDetailsComponent)],
        providers: [
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
            date: Date.now() + 60 * 60 * 1000,
            duration: 60,
        });
        form_valid = true;
        after_dismissed_value = true;
        show_close = signal(false);
        sheet_open = vi.fn(() => ({
            instance: { show_close },
            afterDismissed: () => of(after_dismissed_value),
        }));
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    form: () => ({ valid: () => form_valid }),
                    model,
                    setView: vi.fn(),
                } as any),
                MockProvider(MatBottomSheet, { open: sheet_open } as any),
            ],
        });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should create', () => expect(spectator.component).toBeTruthy());

    it('should open the confirm sheet when the form is valid', () => {
        spectator.component.viewConfirm();
        expect(sheet_open).toHaveBeenCalled();
        expect(show_close()).toBe(true);
        expect(notify_open).not.toHaveBeenCalled();
    });

    it('should block confirmation and notify when the form is invalid', () => {
        form_valid = false;
        spectator.component.viewConfirm();
        expect(notify_open).toHaveBeenCalled();
        expect(sheet_open).not.toHaveBeenCalled();
    });

    it('should navigate to success and set the view after dismissal with a value', () => {
        spectator.component.viewConfirm();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book',
            'locker',
            'success',
        ]);
        expect(spectator.inject(BookingFormService).setView).toHaveBeenCalledWith(
            'success',
        );
    });

    it('should not navigate when the sheet is dismissed without a value', () => {
        after_dismissed_value = undefined;
        spectator.component.viewConfirm();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });
});
