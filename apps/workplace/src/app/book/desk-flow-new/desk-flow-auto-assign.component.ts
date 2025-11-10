import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { IconComponent } from '@placeos/components';
import { AutoAssignedDeskModalComponent } from '../desk-flow/auto-assigned-desk-modal.component';

@Component({
    selector: 'desk-flow-auto-assign',
    template: `
        <div
            class="bg-grad relative mx-auto w-full max-w-full space-y-2 rounded-xl border border-base-300 p-4 text-white shadow"
        >
            <div class="flex items-center justify-between pb-2">
                <div
                    class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                >
                    <div
                        class="absolute inset-0 bg-brand-content opacity-20"
                    ></div>
                    <div>Quick Action</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>auto_awesome</icon>
                    <div class="text-sm">Smart Selection</div>
                </div>
            </div>
            <div>
                <h3 class="mb-1 text-2xl font-medium">Auto-Assign</h3>
                <p class="text-sm">
                    We'll always try to book you in your home neighbourhood—if
                    it's full, we'll find you a spot nearby.
                </p>
            </div>
            <div
                class="flex flex-col items-center space-y-2 pt-2 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
                <button
                    btn
                    matRipple
                    class="w-full flex-1 space-x-2"
                    (click)="autoAssignDesk()"
                >
                    <icon class="text-2xl">bolt</icon>
                    <div>Auto-Assign</div>
                </button>
                <button
                    btn
                    matRipple
                    class="inverse white w-full flex-1 space-x-2"
                >
                    <icon class="text-2xl">map</icon>
                    <div>View Neighbourhood</div>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            .bg-grad {
                background: linear-gradient(
                    105deg,
                    var(--brand-400) 0%,
                    var(--brand-500) 100%
                );
            }
        `,
    ],
    imports: [IconComponent],
})
export class DeskFlowAutoAssignComponent {
    private _booking_form = inject(BookingFormService);
    private _dialog = inject(MatDialog);
    private _router = inject(Router);

    public get form() {
        return this._booking_form.form;
    }

    public readonly autoAssignDesk = () => {
        // Get current form values for date and duration
        const form_value = this.form.getRawValue();
        const { date, duration } = form_value;

        // Open the auto-assigned desk modal
        const dialog_ref = this._dialog.open(AutoAssignedDeskModalComponent, {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'auto-assigned-desk-modal',
        });
        dialog_ref.componentInstance.show_close.set(true);

        // Pass date and duration if they're set
        if (date) {
            dialog_ref.componentInstance.date.set(date);
        }
        if (duration) {
            dialog_ref.componentInstance.duration.set(duration);
        }

        dialog_ref.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
                this._booking_form.setView('success');
                this._router.navigate(['/book', 'desks', 'success']);
            }
        });
    };
}
