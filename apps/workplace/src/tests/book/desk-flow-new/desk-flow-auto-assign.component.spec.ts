import { signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingFormService } from '@placeos/bookings';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { DeskFlowAutoAssignComponent } from '../../../app/book/desk-flow-new/desk-flow-auto-assign.component';
import { AutoAssignedDeskModalComponent } from '../../../app/book/desk-flow/auto-assigned-desk-modal.component';

describe('DeskFlowAutoAssignComponent', () => {
    let spectator: Spectator<DeskFlowAutoAssignComponent>;
    let model: WritableSignal<any>;
    let set_view: any;
    let dialog_open: any;
    let after_closed_value: any;
    let component_instance: {
        show_close: { set: any };
        date: { set: any };
        duration: { set: any };
    };

    const createComponent = createComponentFactory({
        component: DeskFlowAutoAssignComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {} as any),
            MockProvider(MatDialog, {} as any),
            MockProvider(Router, { navigate: vi.fn() }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        model = signal<any>({ date: Date.now(), duration: 60 });
        set_view = vi.fn();
        after_closed_value = false;
        component_instance = {
            show_close: { set: vi.fn() },
            date: { set: vi.fn() },
            duration: { set: vi.fn() },
        };
        const dialog_ref = {
            componentInstance: component_instance,
            afterClosed: vi.fn(() => of(after_closed_value)),
        };
        dialog_open = vi.fn(() => dialog_ref);
        spectator = createComponent({
            providers: [
                MockProvider(BookingFormService, {
                    model,
                    setView: set_view,
                } as any),
                { provide: MatDialog, useValue: { open: dialog_open } },
            ],
        });
    });

    it('should open the auto-assigned desk modal with fullscreen config', () => {
        spectator.component.autoAssignDesk();

        expect(dialog_open).toHaveBeenCalledWith(
            AutoAssignedDeskModalComponent,
            expect.objectContaining({
                maxWidth: '100vw',
                maxHeight: '100vh',
                panelClass: 'auto-assigned-desk-modal',
            }),
        );
        expect(component_instance.show_close.set).toHaveBeenCalledWith(true);
    });

    it('should pass the current date and duration to the modal when set', () => {
        model.set({ date: 1234, duration: 90 });

        spectator.component.autoAssignDesk();

        expect(component_instance.date.set).toHaveBeenCalledWith(1234);
        expect(component_instance.duration.set).toHaveBeenCalledWith(90);
    });

    it('should not set date or duration on the modal when they are falsy', () => {
        model.set({ date: 0, duration: 0 });

        spectator.component.autoAssignDesk();

        expect(component_instance.date.set).not.toHaveBeenCalled();
        expect(component_instance.duration.set).not.toHaveBeenCalled();
    });

    it('should move the booking form to the success view when the modal confirms', () => {
        after_closed_value = true;

        spectator.component.autoAssignDesk();

        expect(set_view).toHaveBeenCalledWith('success');
    });

    it('should not change the view when the modal is dismissed without confirming', () => {
        after_closed_value = false;

        spectator.component.autoAssignDesk();

        expect(set_view).not.toHaveBeenCalled();
    });

    it('should expose the booking form model through the model getter', () => {
        expect(spectator.component.model).toBe(model);
    });
});
