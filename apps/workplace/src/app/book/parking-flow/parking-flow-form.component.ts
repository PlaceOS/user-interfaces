import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import {
    BookingFormService,
    ParkingService,
    ParkingSpaceListFieldComponent,
} from '@placeos/bookings';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    currentUser,
    getInvalidFields,
    nextValueFrom,
    notifyError,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { roundToNearestMinutes } from 'date-fns';
import { NewParkingFlowConfirmComponent } from './parking-flow-confirm.component';
import { ParkingFormDetailsComponent } from './parking-form-details.component';

@Component({
    selector: 'parking-flow-form',
    template: `
        <div class="bg-base-200 h-full w-full overflow-auto">
            <div
                class="border-base-200 bg-base-100 mx-auto w-3xl max-w-full border sm:my-4"
            >
                <h2
                    class="border-base-200 w-full border-b p-4 text-2xl font-medium sm:px-16 sm:py-4"
                >
                    {{
                        (form.value.id
                            ? 'APP.WORKPLACE.PARKING_EDIT_HEADER'
                            : 'APP.WORKPLACE.PARKING_NEW_HEADER'
                        ) | translate
                    }}
                </h2>
                <form
                    class="divide-base-200 space-y-2 divide-y p-0 sm:px-16 sm:py-4"
                    [formGroup]="form"
                >
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
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
                                <icon>{{
                                    hide_block.details
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
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
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
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
                                <icon>{{
                                    hide_block.space
                                        ? 'expand_more'
                                        : 'expand_less'
                                }}</icon>
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
    imports: [
        CommonModule,
        MatRippleModule,
        ReactiveFormsModule,
        TranslatePipe,
        IconComponent,
        ParkingFormDetailsComponent,
        ParkingSpaceListFieldComponent,
    ],
})
export class ParkingFlowFormComponent extends AsyncHandler implements OnInit {
    private _state = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _router = inject(Router);
    private _bottom_sheet = inject(MatBottomSheet);
    private _parking = inject(ParkingService);

    public hide_block: Record<string, boolean> = {};
    public sheet_ref: any;

    public readonly clearForm = () => this._state.resetForm();

    public get form() {
        return this._state.form;
    }

    public async ngOnInit() {
        this._state.setOptions({ type: 'parking' });
        this.form.patchValue({ user: currentUser() });
        const user = await nextValueFrom(this._parking.user_details);
        if (user?.email && !this.form.value.plate_number) {
            this.form.patchValue({
                plate_number:
                    this._settings.get('plate_number') ||
                    user.plate_number ||
                    '',
            });
        }
    }

    public readonly viewConfirm = () => {
        const { asset_id, resources, date } = this.form.getRawValue();
        console.log('Form:', this.form.getRawValue().date);
        if (resources?.length && asset_id !== resources[0].id) {
            this.form.patchValue({ asset_id: resources[0].id });
        }
        if (!date) {
            const state = this.form.controls.date.disabled;
            if (state) this.form.controls.date.enable();
            this.form.patchValue({
                date: roundToNearestMinutes(Date.now(), {
                    nearestTo: 5,
                    roundingMethod: 'ceil',
                }).valueOf(),
            });
            if (state) this.form.controls.date.disable();
        }
        console.log('Form:', this.form.getRawValue().date);
        if (!this.form.valid)
            return notifyError(
                `Some fields are invalid. [${getInvalidFields(this.form).join(
                    ', ',
                )}]`,
            );
        this.sheet_ref = this._bottom_sheet.open(
            NewParkingFlowConfirmComponent,
        );
        this.sheet_ref.instance.show_close.set(true);
        this.sheet_ref.afterDismissed().subscribe((value) => {
            if (value) {
                this._router.navigate(['/book', 'parking', 'success']);
                this._state.setView('success');
            }
        });
    };
}
