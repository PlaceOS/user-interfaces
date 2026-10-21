import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { notifyError } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
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
                    <div>{{ 'BOOKINGS.DESK_AUTO_ASSIGN_LABEL' | translate }}</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>auto_awesome</icon>
                    <div class="text-sm">
                        {{ 'BOOKINGS.DESK_AUTO_ASSIGN_SMART' | translate }}
                    </div>
                </div>
            </div>
            <div>
                <h3 class="mb-1 text-2xl font-medium">
                    {{ 'BOOKINGS.DESK_AUTO_ASSIGN' | translate }}
                </h3>
                <p class="text-sm">
                    {{ 'BOOKINGS.DESK_AUTO_ASSIGN_INFO' | translate }}
                </p>
            </div>
            <div class="pt-2">
                <button
                    btn
                    matRipple
                    class="white w-full space-x-2"
                    (click)="autoAssignDesk()"
                >
                    <icon class="text-2xl">bolt</icon>
                    <div>{{ 'BOOKINGS.DESK_AUTO_ASSIGN' | translate }}</div>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            .bg-grad {
                background: linear-gradient(
                    105deg,
                    var(--brand-100) 0%,
                    var(--brand-200) 100%
                );
            }
        `,
    ],
    imports: [IconComponent, TranslatePipe],
})
export class DeskFlowAutoAssignComponent {
    private _booking_form = inject(BookingFormService);
    private _dialog = inject(MatDialog);
    private _router = inject(Router);

    public get model() {
        return this._booking_form.model;
    }

    /** Error to show in place of the modal, when the form is not ready */
    public readonly error = input('');

    public readonly autoAssignDesk = () => {
        if (this.error()) return notifyError(this.error());
        // Get current form values for date and duration
        const { date, duration } = this.model();

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
            }
        });
    };
}
