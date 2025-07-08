import { Component, inject, input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
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
                                [use_24hr]="use_24hr"
                                [timezone]="timezone"
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
                            formControlName="organiser"
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
    standalone: false,
})
export class ParkingFormDetailsComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly form = input<FormGroup>(undefined);

    public readonly building = this._org.active_building;
    public readonly building_list = this._org.building_list;

    public get end_date() {
        return endOfDay(
            addDays(
                Date.now(),
                this._settings.get('app.parking.available_period') || 7,
            ),
        );
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

    public readonly setBuilding = (bld) => (this._org.building = bld);
}
