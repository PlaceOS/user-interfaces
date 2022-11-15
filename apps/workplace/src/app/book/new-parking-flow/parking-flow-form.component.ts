import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    BaseClass,
    getInvalidFields,
    notifyError,
    SettingsService,
} from '@placeos/common';

@Component({
    selector: 'parking-flow-form',
    template: `
        <div
            class="h-full w-full bg-gray-100 dark:bg-neutral-600 overflow-auto"
        >
            <div
                class="max-w-full w-[768px] mx-auto sm:my-4 bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
            >
                <h2
                    class="w-full p-4 sm:py-4 sm:px-16 text-2xl font-medium border-b border-gray-300 dark:border-neutral-500"
                    i18n
                >
                    {{ form.value.id ? 'Edit' : 'Book' }} Parking Reservation
                </h2>
                <form
                    class="p-0 sm:py-4 sm:px-16 divide-y divide-gray-300 space-y-2"
                    [formGroup]="form"
                >
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                1
                            </div>
                            <div class="text-xl" i18n>Details</div>
                            <div class="flex-1 w-px"></div>
                            <button
                                mat-icon-button
                                (click)="
                                    hide_block.details = !hide_block.details
                                "
                            >
                                <app-icon>{{
                                    hide_block.details
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</app-icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.details ? 'hide' : 'show'"
                        >
                            <parking-form-details
                                class="mt-4"
                                [form]="form"
                            ></parking-form-details>
                        </div>
                    </section>
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-black/20 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                2
                            </div>
                            <div class="text-xl" i18n>Space</div>
                            <div class="flex-1 w-px"></div>
                            <button
                                mat-icon-button
                                (click)="
                                    hide_block.space = !hide_block.space
                                "
                            >
                                <app-icon>{{
                                    hide_block.space
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</app-icon>
                            </button>
                        </h3>
                        <div
                            class="overflow-hidden"
                            [@show]="hide_block.space ? 'hide' : 'show'"
                        >
                            <parking-space-list-field formControlName="resources"></parking-space-list-field>
                        </div>
                    </section>
                    <section
                        class="flex flex-col sm:flex-row items-center sm:space-x-2 p-2"
                    >
                        <button
                            mat-button
                            confirm
                            class="mb-2 sm:mb-0 w-full sm:w-auto"
                            (click)="viewConfirm()"
                            i18n
                        >
                            Confirm Reservation
                        </button>
                        <button
                            mat-button
                            clear-form
                            class="inverse w-full sm:w-auto"
                            (click)="clearForm()"
                            i18n
                        >
                            {{ form.value.id ? 'Reset' : 'Clear' }} Form
                        </button>
                    </section>
                </form>
            </div>
        </div>
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class ParkingFlowFormComponent extends BaseClass {
    public hide_block: Record<string, boolean> = {};

    public readonly clearForm = () => this._state.resetForm();

    public get form() {
        return this._state.form;
    }

    constructor(
        private _state: BookingFormService,
        private _settings: SettingsService,
        private _router: Router,
        private _bottom_sheet: MatBottomSheet
    ) {
        super();
    }

    public ngOnInit() {
        this._state.setOptions({ type: 'parking' });
    }

    public readonly viewConfirm = () => {
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', '
                )}]`
            );
        // this.sheet_ref = this._bottom_sheet.open(MeetingFlowConfirmComponent);
        // this.sheet_ref.instance.show_close = true;
        // this.sheet_ref.afterDismissed().subscribe((value) => {
        //     if (value) {
        //         this._router.navigate(['/book', 'meeting', 'success']);
        //         this._state.setView('success');
        //     }
        // });
    };
}
