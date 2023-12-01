import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookingFormService, Locker } from '@placeos/bookings';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'new-locker-form-details',
    styles: [],
    template: `
        <div
            class="p-0 sm:py-4 sm:px-16 divide-y divide-base-200 space-y-2"
            *ngIf="form"
            [formGroup]="form"
        >
            <section class="p-2" [class.!border-none]="allow_groups">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="bg-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        1
                    </div>
                    <div class="text-xl" i18n>Details</div>
                </h3>
                <div class="flex items-center flex-wrap sm:space-x-2">
                    <div class="flex-1 min-w-[256px]">
                        <label for="date" i18n>Building<span>*</span></label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [(ngModel)]="building"
                                [ngModelOptions]="{ standalone: true }"
                                placeholder="Select Building"
                            >
                                <mat-option
                                    *ngFor="let b of buildings | async"
                                    [value]="b"
                                >
                                    {{ b.display_name || b.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="flex-1 min-w-[256px]">
                        <label for="date" i18n>Date<span>*</span></label>
                        <a-date-field name="date" formControlName="date" i18n>
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex-1 w-1/3">
                        <label for="start-time" i18n>
                            Start Time<span>*</span>
                        </label>
                        <a-time-field
                            name="start-time"
                            [ngModel]="form.value.date"
                            (ngModelChange)="form.patchValue({ date: $event })"
                            [ngModelOptions]="{ standalone: true }"
                            [use_24hr]="use_24hr"
                            [disabled]="form.value.duration > 24 * 60 - 1"
                        ></a-time-field>
                    </div>
                    <div class="flex-1 w-1/3 relative">
                        <label for="end-time" i18n>
                            End Time<span>*</span>
                        </label>
                        <a-duration-field
                            name="end-time"
                            formControlName="duration"
                            [time]="form.get('date')?.value"
                            [max]="10 * 60"
                            [min]="60"
                            [step]="60"
                            [use_24hr]="use_24hr"
                            [custom_options]="custom_durations"
                        >
                        </a-duration-field>
                    </div>
                </div>
            </section>
            <section class="p-2" *ngIf="form.contains('resources')">
                <h3 class="space-x-2 flex items-center mb-4">
                    <div
                        class="bg-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                    >
                        {{ (options | async)?.group ? 3 : 2 }}
                    </div>
                    <div class="text-xl" i18n>Locker</div>
                </h3>
                <locker-list-field
                    formControlName="resources"
                ></locker-list-field>
            </section>
        </div>
    `,
})
export class LockerFormDetailsComponent extends AsyncHandler {
    @Input() public form: FormGroup;
    @Output() public find = new EventEmitter<void>();
    /** List of available buildings to select */
    public readonly buildings = this._org.building_list;
    /** List of available levels for the selected building */
    public readonly levels = this._org.active_levels;
    /** List of set options for locker booking */
    public readonly options = this._state.options;
    /** List of set options for locker booking */
    public readonly features = this._state.features;

    /** Selected locker for booking */
    public selected_locker: Locker;
    public from_id = false;
    public custom_durations = [];

    public readonly recurrence_options = ['daily', 'weekly', 'monthly'];

    public get building() {
        return this._org.building;
    }
    public set building(bld) {
        this._org.building = bld;
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public readonly setOptions = (o) => this._state.setOptions(o);

    public readonly setFeature = (f, e) => this._state.setFeature(f, e);

    constructor(
        private _state: BookingFormService,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.form && this.form) {
            this.subscription(
                'change',
                this.form
                    .get('resources')
                    ?.valueChanges?.subscribe((list) =>
                        list?.length ? this.setBookingAsset(list[0]) : ''
                    )
            );
            this.subscription(
                'date',
                this.form
                    .get('date')
                    ?.valueChanges?.subscribe((d) =>
                        this._setCustomDateOptions()
                    )
            );
            this._setCustomDateOptions();
        }
    }

    private _setCustomDateOptions() {
        for (const i of [1, 2, 3, 4, 5, 6, 7]) {
            this.custom_durations.push(i * 24 * 60);
        }
    }

    private setBookingAsset(locker: Locker) {
        this._state.form.patchValue({ asset_id: undefined });
        if (!locker) return;
        this.selected_locker = locker;
        this._state.form.patchValue({
            asset_id: locker?.id,
            asset_name: locker.name,
            map_id: locker?.bank_id || locker?.id,
            description: locker.name,
            booking_type: 'locker',
            zones: [this.building.id],
            booking_asset: locker,
        });
    }
}
