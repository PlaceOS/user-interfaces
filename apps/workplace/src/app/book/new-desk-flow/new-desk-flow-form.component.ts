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
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';
import { NewDeskFlowConfirmComponent } from './new-desk-flow-confirm.component';

@Component({
    selector: 'new-desk-flow-form',
    styles: [],
    template: `
        <div
            class="h-full w-full bg-gray-100 dark:bg-neutral-600 overflow-auto"
        >
            <div
                class="max-w-full w-[48rem] mx-auto sm:my-4 bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
            >
                <h2
                    class="w-full p-4 sm:py-4 sm:px-16 text-2xl font-medium border-b border-gray-300 dark:border-neutral-500"
                    i18n
                >
                    Book Desk
                </h2>
                <new-desk-form-details [form]="form"></new-desk-form-details>
                <div
                    class="sm:mb-2 border-b border-gray-300 dark:border-neutral-500 w-full"
                ></div>
                <section
                    class="flex flex-col sm:flex-row items-center sm:space-x-2 p-2 sm:px-16 sm:mb-2"
                >
                    <button
                        mat-button
                        confirm
                        class="w-full sm:w-auto"
                        (click)="viewConfirm()"
                        [disabled]="!form.valid"
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
                this._router.navigate(['/book', 'newdesk', 'success']);
                this._state.setView('success');
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
        this.level = this._org.building?.id;
        this.levels = [
            { id: this._org.building?.id, name: 'Any Level' },
            ...this._org.levelsForBuilding(this._org.building),
        ];
    }

    // public findDesk() {
    //     this.form.markAllAsTouched();
    //     if (!this.form.valid) return;
    //     this._router.navigate(['/book', 'desks', 'map']);
    // }
}
