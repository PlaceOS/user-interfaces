import { Component } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { currentUser, getInvalidFields, notifyError } from '@placeos/common';
import { EventFormService } from '@placeos/events';
import { MeetingFlowConfirmComponent } from 'apps/workplace/src/app/book/meeting-flow/meeting-flow-confirm.component';

@Component({
    selector: 'meeting-booking',
    template: `
        <div class="absolute inset-0 bg-base-200">
            <div
                class="mx-auto w-full max-w-[32rem] overflow-auto max-h-screen"
            >
                <h3 class="text-2xl p-4 font-medium">Book Meeting</h3>
                <meeting-booking-form></meeting-booking-form>
                <div
                    class="flex flex-col p-4 space-y-2 border-t border-base-200"
                >
                    <button
                        btn
                        matRipple
                        class="w-full"
                        (click)="makeBooking()"
                    >
                        Book Meeting
                    </button>
                    <button
                        btn
                        matRipple
                        class="w-full inverse"
                        (click)="clearForm()"
                    >
                        Clear Form
                    </button>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class MeetingBookingComponent {
    public sheet_ref: MatBottomSheetRef;

    public readonly clearForm = () => this._service.clearForm();

    public get form() {
        return this._service.form;
    }

    constructor(
        private _service: EventFormService,
        private _router: Router,
        private _bottom_sheet: MatBottomSheet
    ) {}

    public makeBooking() {
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', '
                )}]`
            );
        this.sheet_ref = this._bottom_sheet.open(MeetingFlowConfirmComponent);
        this.sheet_ref.instance.show_close = true;
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._router.navigate(['/book', 'meeting', 'success']);
                this._service.setView('success');
            }
        });
    }
}
