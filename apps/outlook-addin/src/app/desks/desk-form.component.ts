import { Component } from '@angular/core';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { Desk } from '@placeos/organisation';

@Component({
    selector: 'desk-booking-form',
    template: `
        <div
            class="divide-y divide-base-200 space-y-2"
            *ngIf="form"
            [formGroup]="form"
        >
            <section class="p-4">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="border border-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        1
                    </div>
                    <div class="text-xl">Details</div>
                </h3>
                <div class="flex items-center flex-wrap sm:space-x-2">
                    <div class="flex-1 min-w-[256px]">
                        <label for="title">Add Title<span>*</span></label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                placeholder="e.g. Focus Time"
                            />
                            <mat-error>Booking title is required.</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex-1 min-w-[256px]">
                        <label for="date">Date<span>*</span></label>
                        <a-date-field name="date" formControlName="date">
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex-1 w-1/3">
                        <label for="start-time">Start Time<span>*</span></label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3 relative">
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
                        <mat-checkbox
                            formControlName="all_day"
                            *ngIf="allow_all_day"
                            class="absolute top-0 right-0"
                        >
                            All Day
                        </mat-checkbox>
                    </div>
                </div>
                <div
                    class="flex items-center space-x-2"
                    *ngIf="can_book_lockers"
                >
                    <div class="flex-1 w-1/3">
                        <mat-checkbox
                            [ngModel]="!!form.value.secondary_resource"
                            (ngModelChange)="
                                form.patchValue({
                                    secondary_resource: $event ? 'locker' : ''
                                })
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            Require locker
                        </mat-checkbox>
                    </div>
                </div>
            </section>

            <section class="p-4">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="border border-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        2
                    </div>
                    <div class="text-xl">Desk</div>
                </h3>
                <desk-list-field formControlName="resources"></desk-list-field>
            </section>
            <section class="p-4" *ngIf="allow_assets">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="border border-base-200 rounded-full h-6 w-6 flex items-center justify-center"
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
        </div>
    `,
    styles: [``],
})
export class DeskBookingFormComponent extends AsyncHandler {
    public readonly form = this._service.form;

    public get allow_assets() {
        return this._settings.get('app.bookings.allow_assets');
    }

    constructor(
        private _service: BookingFormService,
        private _settings: SettingsService
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
                    list.length ? this.setBookingAsset(list[0]) : ''
                )
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
