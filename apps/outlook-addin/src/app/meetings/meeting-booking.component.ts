import { Component, inject } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { currentUser, getInvalidFields, notifyError } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MeetingFlowConfirmComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm.component';
import { MeetingBookingFormComponent } from './meeting-form.component';

@Component({
    selector: 'meeting-booking',
    template: `
        <div class="absolute inset-0 overflow-auto bg-base-200">
            <div
                class="mx-auto w-160 max-w-full border-x border-base-300 bg-base-100 pt-2"
            >
                <header
                    class="sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none bg-base-200 px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">Book Meeting</h2>
                </header>
                <meeting-booking-form></meeting-booking-form>
                <div
                    class="sticky bottom-0 z-20 flex flex-col items-center space-y-2 border-t border-base-200 bg-base-100 px-4 py-2 sm:flex-row sm:space-x-2 sm:space-y-0"
                >
                    <button
                        btn
                        matRipple
                        class="w-full sm:flex-1"
                        (click)="makeBooking()"
                    >
                        Book Meeting
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse w-full sm:flex-1"
                        (click)="clearForm()"
                    >
                        Clear Form
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [MatRippleModule, MeetingBookingFormComponent],
})
export class MeetingBookingComponent {
    private _service = inject(EventFormService);
    private _router = inject(Router);
    private _bottom_sheet = inject(MatBottomSheet);

    public sheet_ref: MatBottomSheetRef;

    public readonly clearForm = () => this._service.clearForm();

    public get form() {
        return this._service.form;
    }

    public makeBooking() {
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', ',
                )}]`,
            );
        this.sheet_ref = this._bottom_sheet.open(MeetingFlowConfirmComponent);
        this.sheet_ref.instance.show_close.set(true);
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._router.navigate(['/book', 'meeting', 'success']);
                this._service.setView('success');
            }
        });
    }
}
