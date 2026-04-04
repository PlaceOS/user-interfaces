import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AssetListFieldComponent } from '@placeos/assets';
import { BookingFormService, DeskListFieldComponent } from '@placeos/bookings';
import { AsyncHandler, Desk, settingSignal } from '@placeos/common';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';

@Component({
    selector: 'desk-booking-form',
    template: `
        @if (form) {
            <div class="divide-base-200 space-y-2 divide-y" [formGroup]="form">
                <section class="p-4">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            1
                        </div>
                        <div class="text-xl">Details</div>
                    </h3>
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="w-full sm:flex-1">
                            <label for="title">Add Title<span>*</span></label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="title"
                                    formControlName="title"
                                    placeholder="e.g. Focus Time"
                                />
                                <mat-error
                                    >Booking title is required.</mat-error
                                >
                            </mat-form-field>
                        </div>
                        <div class="w-full sm:flex-1">
                            <label for="date">Date<span>*</span></label>
                            <a-date-field name="date" formControlName="date">
                                Date and time must be in the future
                            </a-date-field>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="w-full sm:flex-1">
                            <label for="start-time"
                                >Start Time<span>*</span></label
                            >
                            <a-time-field
                                name="start-time"
                                [ngModel]="form_value().date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></a-time-field>
                        </div>
                        <div class="w-full sm:flex-1">
                            <label for="end-time">End Time<span>*</span></label>
                            <a-duration-field
                                name="end-time"
                                formControlName="duration"
                                [time]="form_value().date"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                            >
                            </a-duration-field>
                            @if (allow_all_day()) {
                                <mat-checkbox
                                    formControlName="all_day"
                                    class="absolute top-0 right-0"
                                >
                                    All Day
                                </mat-checkbox>
                            }
                        </div>
                    </div>
                    @if (can_book_lockers()) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <mat-checkbox
                                    [ngModel]="
                                        !!form_value().secondary_resource
                                    "
                                    (ngModelChange)="
                                        form.patchValue({
                                            secondary_resource: $event
                                                ? 'locker'
                                                : '',
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    Require locker
                                </mat-checkbox>
                            </div>
                        </div>
                    }
                </section>
                <section class="p-4">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            2
                        </div>
                        <div class="text-xl">Desk</div>
                    </h3>
                    <desk-list-field
                        formControlName="resources"
                    ></desk-list-field>
                </section>
                @if (allow_assets()) {
                    <section class="p-4">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                3
                            </div>
                            <div class="text-xl">Request Asset</div>
                        </h3>
                        <asset-list-field
                            [options]="{
                                date: form_value().date,
                                duration: form_value().duration,
                            }"
                            formControlName="assets"
                        ></asset-list-field>
                    </section>
                }
            </div>
        }
    `,
    styles: [``],
    imports: [
        AssetListFieldComponent,
        DeskListFieldComponent,
        MatCheckboxModule,
        FormsModule,
        ReactiveFormsModule,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class DeskBookingFormComponent extends AsyncHandler implements OnInit {
    private _service = inject(BookingFormService);

    public readonly form = this._service.form;
    public readonly form_value = toSignal(this.form.valueChanges, {
        initialValue: this.form.getRawValue(),
    });
    public readonly allow_assets = settingSignal('desks.allow_assets', false);
    public readonly allow_all_day = settingSignal('desks.allow_all_day', false);
    public readonly can_book_lockers = settingSignal(
        'desks.can_book_lockers',
        false,
    );

    public ngOnInit() {
        this._service.setOptions({ type: 'desk' });
        this.subscription(
            'change',
            this._service.form
                .get('resources')
                ?.valueChanges?.subscribe((list) =>
                    list.length ? this.setBookingAsset(list[0]) : '',
                ),
        );
    }

    private setBookingAsset(desk: Desk) {
        if (!desk) return;
        this._service.form.patchValue({
            asset_id: desk?.id,
            asset_name: desk.name,
            map_id: desk?.map_id || desk?.id,
            description: desk.name,
            booking_type: 'desk',
            zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : [],
            booking_asset: desk,
        });
    }
}
