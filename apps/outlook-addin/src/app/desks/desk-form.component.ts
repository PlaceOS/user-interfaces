import { Component } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { Desk } from '@placeos/organisation';

@Component({
    selector: 'desk-booking-form',
    template: `
        @if (form) {
            <div class="space-y-2 divide-y divide-base-200" [formGroup]="form">
                <section class="p-4">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
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
                                [ngModel]="form.value.date"
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
                                [time]="form.get('date')?.value"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                            >
                            </a-duration-field>
                            @if (allow_all_day) {
                                <mat-checkbox
                                    formControlName="all_day"
                                    class="absolute right-0 top-0"
                                >
                                    All Day
                                </mat-checkbox>
                            }
                        </div>
                    </div>
                    @if (can_book_lockers) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <mat-checkbox
                                    [ngModel]="!!form.value.secondary_resource"
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
                            class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                        >
                            2
                        </div>
                        <div class="text-xl">Desk</div>
                    </h3>
                    <desk-list-field
                        formControlName="resources"
                    ></desk-list-field>
                </section>
                @if (allow_assets) {
                    <section class="p-4">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                3
                            </div>
                            <div class="text-xl">Request Asset</div>
                        </h3>
                        <asset-list-field
                            [date]="form.value.date"
                            [duration]="form.value.duration"
                            formControlName="assets"
                        ></asset-list-field>
                    </section>
                }
            </div>
        }
    `,
    styles: [``],
    standalone: false,
})
export class DeskBookingFormComponent extends AsyncHandler {
    public readonly form = this._service.form;

    public get allow_assets() {
        return this._settings.get('app.desks.allow_assets');
    }

    constructor(
        private _service: BookingFormService,
        private _settings: SettingsService,
    ) {
        super();
    }

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
