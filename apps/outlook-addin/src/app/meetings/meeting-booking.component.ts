import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
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
        <div class="bg-base-200 absolute inset-0 overflow-auto">
            <div
                class="border-base-300 bg-base-100 mx-auto w-160 max-w-full border-x pt-2"
            >
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">Book Meeting</h2>
                </header>
                <meeting-booking-form></meeting-booking-form>
                <div
                    class="border-base-200 bg-base-100 sticky bottom-0 z-20 flex flex-col items-center space-y-2 border-t px-4 py-2 sm:flex-row sm:space-y-0 sm:space-x-2"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatRippleModule, MeetingBookingFormComponent],
})
export class MeetingBookingComponent {
    private _service = inject(EventFormService);
    private _router = inject(Router);
    private _bottom_sheet = inject(MatBottomSheet);

    public readonly form = this._service.form;
    public readonly sheet_ref = signal<MatBottomSheetRef<unknown> | null>(null);

    public readonly clearForm = () => this._service.clearForm();

    public makeBooking() {
        if (!this.form.value.host)
            this.form.patchValue({ host: currentUser()?.email });
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', ',
                )}]`,
            );
        const sheet_ref = this._bottom_sheet.open(MeetingFlowConfirmComponent);
        this.sheet_ref.set(sheet_ref);
        sheet_ref.instance.show_close.set(true);
        sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._router.navigate(['/book', 'meeting', 'success']);
                this._service.setView('success');
            }
        });
    }
}
