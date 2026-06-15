import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { addDays, endOfDay } from 'date-fns';

@Component({
    selector: 'parking-form-details',
    template: `
        @if (form()) {
            <div [formGroup]="form()">
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-[256px] flex-1">
                        <label for="title">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [ngModel]="building | async"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (bld of building_list | async; track bld) {
                                    <mat-option [value]="bld">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>Building is required</mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-wrap items-center sm:space-x-2">
                    <div class="min-w-[256px] flex-1">
                        <label for="title">
                            {{ 'FORM.TITLE' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                name="title"
                                formControlName="title"
                                placeholder="e.g. Team Meeting"
                            />
                            <mat-error>{{
                                'FORM.TITLE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="relative min-w-[256px] flex-1">
                        <label for="date">
                            {{ 'FORM.DATE' | translate }}<span>*</span>
                        </label>
                        <a-date-field
                            name="date"
                            formControlName="date"
                            [to]="end_date"
                            [timezone]="timezone"
                        >
                            {{ 'FORM.DATE_REQUIRED' | translate }}
                        </a-date-field>
                        @if (allow_all_day) {
                            <mat-checkbox
                                formControlName="all_day"
                                class="absolute -top-2 right-0"
                            >
                                {{ 'COMMON.ALL_DAY' | translate }}
                            </mat-checkbox>
                        }
                    </div>
                </div>
                @if (!form().value.all_day) {
                    <div class="flex items-center space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="start-time"
                                >{{ 'FORM.TIME_START' | translate
                                }}<span>*</span></label
                            >
                            <a-time-field
                                name="start-time"
                                [ngModel]="form().getRawValue().date"
                                (ngModelChange)="
                                    form().patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr"
                                [range]="bookable_hours"
                                [min_duration]="effective_min_duration"
                                [disabled]="form().controls.date.disabled"
                                [timezone]="timezone"
                            ></a-time-field>
                        </div>
                        <div class="relative w-1/3 flex-1">
                            <label for="end-time">
                                {{ 'FORM.TIME_END' | translate }}<span>*</span>
                            </label>
                            <a-duration-field
                                name="end-time"
                                formControlName="duration"
                                [time]="form()?.getRawValue()?.date"
                                [max]="max_duration"
                                [custom_options]="custom_duration_options"
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
                                [end_time]="bookable_hours?.end"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
                @if (can_book_for_others) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <host-select-field
                            name="host"
                            formControlName="user"
                        ></host-select-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="plate-number">
                        {{ 'BOOKINGS.PARKING_PLATE_NUMBER' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="plate-number"
                            formControlName="plate_number"
                            [placeholder]="
                                'BOOKINGS.PARKING_PLATE_NUMBER_PLACEHOLDER'
                                    | translate
                            "
                        />
                        <mat-error>
                            {{
                                'BOOKINGS.PARKING_PLATE_NUMBER_REQUIRED'
                                    | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                </div>
            </div>
        }
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        TranslatePipe,
        HostSelectFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
    ],
})
export class ParkingFormDetailsComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly form = input<FormGroup>(undefined);

    public readonly building = toObservable(this._org.active_building);
    public readonly building_list = toObservable(this._org.building_list);

    public get end_date() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.parking.available_period') || 7,
            ),
        ).valueOf();
    }

    public get max_duration() {
        return (
            this._settings.get('app.parking.max_duration') ||
            this._settings.get('app.bookings.max_duration') ||
            480
        );
    }

    public get allow_all_day() {
        return (
            (this._settings.get('app.parking.allow_all_day') ||
                this._settings.get('app.bookings.allow_all_day')) ??
            true
        );
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get can_book_for_others() {
        return (
            this._settings.get('app.bookings.can_book_for_others') ||
            this._settings.get('app.parking.can_book_for_others')
        );
    }

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.parking.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get bookable_hours() {
        return (
            this._settings.get('app.parking.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours')
        );
    }

    public get min_duration() {
        return (
            this._settings.get('app.parking.min_duration') ||
            this._settings.get('app.bookings.min_duration') ||
            30
        );
    }

    public get custom_duration_options() {
        return (
            this._settings.get('app.parking.custom_duration_options') ||
            this._settings.get('app.bookings.custom_duration_options') ||
            []
        );
    }

    public get effective_min_duration() {
        return Math.min(this.min_duration, ...this.custom_duration_options);
    }

    public readonly setBuilding = (bld) => (this._org.building = bld);
}
