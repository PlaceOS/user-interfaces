import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    OrganisationService,
    getInvalidSignalFields,
    i18n,
    notifyError,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { isBefore, startOfMinute } from 'date-fns';
import { BookLockerFlowConfirmComponent } from './locker-flow-confirm.component';
import { LockerFormDetailsComponent } from './locker-form-details.component';

@Component({
    selector: 'locker-flow-form',
    styles: [],
    template: `
        <div class="bg-base-200 h-full w-full overflow-auto">
            <div
                class="border-base-200 bg-base-100 mx-auto w-3xl max-w-full border sm:my-4"
            >
                <h2
                    class="border-base-200 w-full border-b p-4 text-2xl font-medium sm:px-16 sm:py-4"
                >
                    {{ 'BOOKINGS.LOCKER_TITLE' | translate }}
                </h2>
                <new-locker-form-details
                    [form]="form"
                ></new-locker-form-details>
                <div class="border-base-200 w-full border-b sm:mb-2"></div>
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatRippleModule, TranslatePipe, LockerFormDetailsComponent],
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

    public get model() {
        return this._state.model;
    }

    public readonly clearForm = () => {
        this.level = this._org.building.id;
        this._state.clearForm();
    };

    public readonly viewConfirm = () => {
        if (!this.form().valid())
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(
                        this.form,
                        this.model,
                    ).join(', '),
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
        await this._org.waitUntilInitialised();
        await this._waitForActiveLevels();
        this._state.setOptions({ type: 'locker' });
        this.level = this._org.building?.id;
        this.levels = [
            { id: this._org.building?.id, name: 'Any Level' },
            ...this._org.levelsForBuilding(this._org.building),
        ];
        if (isBefore(this.model().date, Date.now())) {
            this.model.update((m) => ({
                ...m,
                date: startOfMinute(Date.now()).valueOf(),
            }));
        }
    }

    private async _waitForActiveLevels() {
        while (!this._org.active_levels()?.length) {
            await new Promise((resolve) => setTimeout(resolve, 50));
        }
    }
}
