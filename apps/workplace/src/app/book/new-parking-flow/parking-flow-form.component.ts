import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { BookingFormService, ParkingService } from '@placeos/bookings';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    currentUser,
    getInvalidFields,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { take } from 'rxjs/operators';
import { NewParkingFlowConfirmComponent } from './parking-flow-confirm.component';

@Component({
    selector: 'parking-flow-form',
    template: `
        <div class="h-full w-full overflow-auto bg-base-200">
            <div
                class="mx-auto w-[48rem] max-w-full border border-base-200 bg-base-100 sm:my-4"
            >
                <h2
                    class="w-full border-b border-base-200 p-4 text-2xl font-medium sm:px-16 sm:py-4"
                >
                    {{
                        (form.value.id
                            ? 'APP.WORKPLACE.PARKING_EDIT_HEADER'
                            : 'APP.WORKPLACE.PARKING_NEW_HEADER'
                        ) | translate
                    }}
                </h2>
                <form
                    class="space-y-2 divide-y divide-base-200 p-0 sm:px-16 sm:py-4"
                    [formGroup]="form"
                >
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                1
                            </div>
                            <div class="text-xl">
                                {{ 'BOOKINGS.DETAILS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                matRipple
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
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.PARKING_SPACE' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                            <button
                                icon
                                matRipple
                                (click)="hide_block.space = !hide_block.space"
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
                            <parking-space-list-field
                                formControlName="resources"
                            ></parking-space-list-field>
                        </div>
                    </section>
                    <section
                        class="flex flex-col items-center p-2 sm:flex-row sm:space-x-2"
                    >
                        <button
                            btn
                            matRipple
                            confirm
                            class="mb-2 w-full sm:mb-0 sm:w-auto"
                            (click)="viewConfirm()"
                        >
                            {{ 'BOOKINGS.PARKING_CONFIRM' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            clear-form
                            class="inverse w-full sm:w-auto"
                            (click)="clearForm()"
                        >
                            {{
                                (form.value.id ? 'FORM.RESET' : 'FORM.CLEAR')
                                    | translate
                            }}
                        </button>
                    </section>
                </form>
            </div>
        </div>
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    standalone: false,
})
export class ParkingFlowFormComponent extends AsyncHandler {
    public hide_block: Record<string, boolean> = {};
    public sheet_ref: any;

    public readonly clearForm = () => this._state.resetForm();

    public get form() {
        return this._state.form;
    }

    constructor(
        private _state: BookingFormService,
        private _settings: SettingsService,
        private _router: Router,
        private _bottom_sheet: MatBottomSheet,
        private _parking: ParkingService,
    ) {
        super();
    }

    public async ngOnInit() {
        this._state.setOptions({ type: 'parking' });
        this.form.patchValue({ all_day: true, user: currentUser() });
        const user = await this._parking.user_details.pipe(take(1)).toPromise();
        if (user?.email) {
            this.form.patchValue({ plate_number: user.plate_number });
        }
    }

    public readonly viewConfirm = () => {
        const { asset_id, resources } = this.form.getRawValue();
        if (resources?.length && !asset_id) {
            this.form.patchValue({ asset_id: resources[0].id });
        }
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', ',
                )}]`,
            );
        this.sheet_ref = this._bottom_sheet.open(
            NewParkingFlowConfirmComponent,
        );
        this.sheet_ref.instance.show_close = true;
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._router.navigate(['/book', 'new-parking', 'success']);
                this._state.setView('success');
            }
        });
    };
}
