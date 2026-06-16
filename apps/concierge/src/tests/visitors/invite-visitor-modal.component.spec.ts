import { signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { VisitorInviteFormComponent } from 'libs/bookings/src/lib/visitor-invite-form.component';

import { InviteVisitorModalComponent } from '../../app/visitors/invite-visitor-modal.component';

describe('InviteVisitorModalComponent', () => {
    let loading: WritableSignal<string>;
    let booking_form: {
        loading: WritableSignal<string>;
        clearOldState: jest.Mock;
    };

    beforeEach(async () => {
        loading = signal('Saving booking');
        booking_form = {
            loading,
            clearOldState: jest.fn(() => loading.set('')),
        };

        await TestBed.configureTestingModule({
            imports: [InviteVisitorModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { date: 1 },
                },
                {
                    provide: MatDialogRef,
                    useValue: { close: jest.fn() },
                },
                {
                    provide: BookingFormService,
                    useValue: booking_form,
                },
            ],
        }).compileComponents();
    });

    it('should create component', () => {
        const fixture = TestBed.createComponent(InviteVisitorModalComponent);

        expect(fixture.componentInstance).toBeTruthy();
    });

    it('should clear stale booking loading state on open', () => {
        const fixture = TestBed.createComponent(InviteVisitorModalComponent);

        expect(booking_form.clearOldState).toHaveBeenCalled();
        expect(fixture.componentInstance.loading()).toBe('');
    });

    it('should not include undefined imports in the visitor invite form', () => {
        const dependencies = (VisitorInviteFormComponent as any).ɵcmp
            .dependencies;
        const resolved_dependencies =
            typeof dependencies === 'function' ? dependencies() : dependencies;

        expect(resolved_dependencies).not.toContain(undefined);
    });
});
