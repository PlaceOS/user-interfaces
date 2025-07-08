import { Component, OnInit, inject } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    firstTruthyValueFrom,
    getInvalidFields,
    i18n,
    nextValueFrom,
    notifyError,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { isBefore, startOfMinute } from 'date-fns';
import { first } from 'rxjs/operators';
import { BookLockerFlowConfirmComponent } from './locker-flow-confirm.component';

@Component({
    selector: 'locker-flow-form',
    styles: [],
    template: `
        <div class="h-full w-full overflow-auto bg-base-200">
            <div
                class="mx-auto w-[48rem] max-w-full border border-base-200 bg-base-100 sm:my-4"
            >
                <h2
                    class="w-full border-b border-base-200 p-4 text-2xl font-medium sm:px-16 sm:py-4"
                >
                    {{ 'BOOKINGS.LOCKER_TITLE' | translate }}
                </h2>
                <new-locker-form-details
                    [form]="form"
                ></new-locker-form-details>
                <div class="w-full border-b border-base-200 sm:mb-2"></div>
                <section
                    class="flex flex-col items-center p-2 sm:mb-2 sm:flex-row sm:space-x-2 sm:px-16"
                >
                    <button
                        btn
                        name="open-locker-confirm"
                        matRipple
                        confirm
                        class="w-full sm:w-auto"
                        (click)="viewConfirm()"
                    >
                        {{ 'BOOKINGS.LOCKER_CONFIRM' | translate }}
                    </button>
                </section>
            </div>
        </div>
    `,
    standalone: false,
})
export class BookLockerFlowFormComponent implements OnInit {
    private _state = inject(BookingFormService);
    private _router = inject(Router);
    private _org = inject(OrganisationService);
    private _bottom_sheet = inject(MatBottomSheet);

    public sheet_ref: MatBottomSheetRef<BookLockerFlowConfirmComponent>;
    public level = '';
    public levels = [];

    public get form() {
        return this._state.form;
    }

    public readonly clearForm = () => {
        this.level = this._org.building.id;
        this._state.clearForm();
    };

    public readonly viewConfirm = () => {
        if (!this.form.valid)
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        this.sheet_ref = this._bottom_sheet.open(
            BookLockerFlowConfirmComponent,
        );
        this.sheet_ref.instance.show_close.set(true);
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._router.navigate(['/book', 'locker', 'success']);
                this._state.setView('success');
            }
        });
    };

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        await nextValueFrom(
            this._org.active_levels.pipe(first((_) => _?.length > 0)),
        );
        this._state.setOptions({ type: 'locker' });
        this.level = this._org.building?.id;
        this.levels = [
            { id: this._org.building?.id, name: 'Any Level' },
            ...this._org.levelsForBuilding(this._org.building),
        ];
        if (isBefore(this.form.value.date, Date.now())) {
            this.form.patchValue({ date: startOfMinute(Date.now()).valueOf() });
        }
    }
}
