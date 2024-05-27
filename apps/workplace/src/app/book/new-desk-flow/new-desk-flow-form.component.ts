import { Component, OnInit } from '@angular/core';
import {
    MatBottomSheet,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    getInvalidFields,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';
import { isBefore, startOfMinute } from 'date-fns';
import { first } from 'rxjs/operators';
import { NewDeskFlowConfirmComponent } from './new-desk-flow-confirm.component';

@Component({
    selector: 'new-desk-flow-form',
    styles: [],
    template: `
        <div class="h-full w-full bg-base-200 overflow-auto">
            <div
                class="max-w-full w-[48rem] mx-auto sm:my-4 bg-base-100 border border-base-200"
            >
                <h2
                    class="w-full p-4 sm:py-4 sm:px-16 text-2xl font-medium border-b border-base-200"
                    i18n
                >
                    Book Desk
                </h2>
                <new-desk-form-details [form]="form"></new-desk-form-details>
                <div class="sm:mb-2 border-b border-base-200 w-full"></div>
                <section
                    class="flex flex-col sm:flex-row items-center sm:space-x-2 p-2 sm:px-16 sm:mb-2"
                >
                    <button
                        btn
                        name="open-desk-confirm"
                        matRipple
                        confirm
                        class="w-full sm:w-auto"
                        (click)="viewConfirm()"
                        i18n
                    >
                        Confirm Desk
                    </button>
                </section>
            </div>
        </div>
    `,
})
export class NewDeskFlowFormComponent implements OnInit {
    public sheet_ref: MatBottomSheetRef<any>;
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
        const { asset_id, resources } = this.form.getRawValue();
        if (resources?.length && !asset_id) {
            this.form.patchValue({ asset_id: resources[0].id });
        }
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', '
                )}]`
            );
        this.sheet_ref = this._bottom_sheet.open(NewDeskFlowConfirmComponent);
        this.sheet_ref.instance.show_close = true;
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._state.setView('success');
                this._router.navigate(['/book', 'new-desks', 'success']);
            }
        });
    };

    constructor(
        private _state: BookingFormService,
        private _router: Router,
        private _org: OrganisationService,
        private _bottom_sheet: MatBottomSheet,
        private _settings: SettingsService
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _));
        await this._org.active_levels.pipe(first((_) => _?.length > 0));
        this._state.setOptions({ type: 'desk' });
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
