import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Injector,
    OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AssetListFieldComponent } from '@placeos/assets';
import { BookingFormService, DeskListFieldComponent } from '@placeos/bookings';
import {
    AsyncHandler,
    Desk,
    onFieldChange,
    settingSignal,
} from '@placeos/common';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';

@Component({
    selector: 'desk-booking-form',
    template: `
        @if (form) {
            <div class="divide-base-200 space-y-2 divide-y">
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
                                    [formField]="form.title"
                                    placeholder="e.g. Focus Time"
                                />
                                <mat-error
                                    >Booking title is required.</mat-error
                                >
                            </mat-form-field>
                        </div>
                        <div class="w-full sm:flex-1">
                            <label for="date">Date<span>*</span></label>
                            <a-date-field [formField]="form.date">
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
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({ ...m, date: $event }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></a-time-field>
                        </div>
                        <div class="w-full sm:flex-1">
                            <label for="end-time">End Time<span>*</span></label>
                            <a-duration-field
                                [formField]="form.duration"
                                [time]="model().date"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                            >
                            </a-duration-field>
                            @if (allow_all_day()) {
                                <mat-checkbox
                                    [formField]="form.all_day"
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
                                        !!model().secondary_resource
                                    "
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            secondary_resource: $event
                                                ? 'locker'
                                                : '',
                                        }))
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
                        [formField]="form.resources"
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
                                date: model().date,
                                duration: model().duration,
                            }"
                            [formField]="form.assets"
                        ></asset-list-field>
                    </section>
                }
            </div>
        }
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        AssetListFieldComponent,
        DeskListFieldComponent,
        MatCheckboxModule,
        FormsModule,
        FormField,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class DeskBookingFormComponent extends AsyncHandler implements OnInit {
    private _service = inject(BookingFormService);
    private _injector = inject(Injector);

    public readonly form = this._service.form;
    public readonly model = this._service.model;
    public readonly allow_assets = settingSignal('desks.allow_assets', false);
    public readonly allow_all_day = settingSignal('desks.allow_all_day', false);
    public readonly can_book_lockers = settingSignal(
        'desks.can_book_lockers',
        false,
    );

    public ngOnInit() {
        this._service.setOptions({ type: 'desk' });
        onFieldChange(
            this._service.model,
            (m) => m.resources,
            (list) => (list?.length ? this.setBookingAsset(list[0]) : ''),
            this._injector,
        );
    }

    private setBookingAsset(desk: Desk) {
        if (!desk) return;
        this._service.model.update((m) => ({
            ...m,
            asset_id: desk?.id,
            asset_name: desk.name,
            map_id: desk?.map_id || desk?.id,
            description: desk.name,
            booking_type: 'desk',
            zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : [],
            booking_asset: desk,
        }));
    }
}
