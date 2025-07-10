import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
    input,
    output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormService, Locker } from '@placeos/bookings';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
    selector: 'new-locker-form-details',
    styles: [],
    template: `
        @if (form()) {
            <div
                class="space-y-2 divide-y divide-base-200 p-0 sm:px-16 sm:py-4"
                [formGroup]="form()"
            >
                <section class="p-2" [class.!border-none]="allow_groups">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                        >
                            1
                        </div>
                        <div class="text-xl">
                            {{ 'BOOKINGS.DETAILS' | translate }}
                        </div>
                    </h3>
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'RESOURCE.BUILDING' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    [(ngModel)]="building"
                                    [ngModelOptions]="{ standalone: true }"
                                    placeholder="Select Building"
                                >
                                    @for (b of buildings | async; track b) {
                                        <mat-option [value]="b">
                                            {{ b.display_name || b.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="relative min-w-[256px] flex-1">
                            <label for="date">
                                {{ 'FORM.DATE' | translate }}<span>*</span>
                            </label>
                            <a-date-field
                                name="date"
                                formControlName="date"
                                [timezone]="timezone"
                            >
                                {{ 'FORM.DATE_REQUIRED' | translate }}
                            </a-date-field>
                            @if (allow_all_day && !disable_date) {
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
                                <label for="start-time">
                                    {{ 'FORM.TIME_START' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="start-time"
                                    [ngModel]="form().getRawValue().date"
                                    (ngModelChange)="
                                        form().patchValue({ date: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [use_24hr]="use_24hr"
                                    [disabled]="
                                        form().controls.date.disabled ||
                                        form().value.duration > 24 * 60 - 1 ||
                                        disable_start
                                    "
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                            @if (!hide_end) {
                                <div class="relative w-1/3 flex-1">
                                    <label for="end-time">
                                        {{ 'FORM.TIME_END' | translate
                                        }}<span>*</span>
                                    </label>
                                    <a-duration-field
                                        name="end-time"
                                        formControlName="duration"
                                        [time]="form().getRawValue().value"
                                        [max]="max_duration"
                                        [min]="60"
                                        [step]="60"
                                        [use_24hr]="use_24hr"
                                        [custom_options]="custom_durations"
                                        [timezone]="timezone"
                                    >
                                    </a-duration-field>
                                </div>
                            }
                        </div>
                    }
                </section>
                @if (form().contains('resources')) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                {{ (options | async)?.group ? 3 : 2 }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.LOCKER' | translate }}
                            </div>
                        </h3>
                        <locker-list-field
                            formControlName="resources"
                        ></locker-list-field>
                    </section>
                }
            </div>
        }
    `,
    standalone: false,
})
export class LockerFormDetailsComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly form = input<FormGroup>(undefined);
    public readonly find = output<void>();
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

    public get max_duration() {
        return (
            this._settings.get('app.lockers.max_duration') ||
            this._settings.get('app.bookings.max_duration') ||
            8 * 60
        );
    }

    public get disable_date() {
        return this._settings.get('app.lockers.disabled_date_select');
    }

    public get disable_start() {
        return this._settings.get('app.lockers.disabled_start_time');
    }
    public get hide_end() {
        return this._settings.get('app.lockers.hide_end_time');
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get allow_all_day() {
        return (
            this.allow_time_changes &&
            (this._settings.get('app.lockers.allow_all_day') ??
                this._settings.get('app.bookings.allow_all_day') ??
                true)
        );
    }

    public get allow_time_changes() {
        return this._settings.get('app.lockers.allow_time_changes') !== false;
    }

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.lockers.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public readonly setOptions = (o) => this._state.setOptions(o);

    public readonly setFeature = (f, e) => this._state.setFeature(f, e);

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
        this._state.form.patchValue({
            all_day: !this.allow_time_changes || this._state.form.value.all_day,
        });
        this.subscription(
            'bld',
            combineLatest([
                this._org.active_building,
                this._dialog.afterAllClosed,
                this.form().controls.duration.valueChanges,
            ]).subscribe(() => {
                this.timeout(
                    'disable',
                    () => {
                        if (this.disable_date) {
                            this.form().controls.date.disable();
                        }
                    },
                    50,
                );
            }),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        const form = this.form();
        if (changes.form && form) {
            this.subscription(
                'change',
                form
                    .get('resources')
                    ?.valueChanges?.subscribe((list) =>
                        list?.length ? this.setBookingAsset(list[0]) : '',
                    ),
            );
            this.subscription(
                'date',
                form
                    .get('date')
                    ?.valueChanges?.subscribe(() =>
                        this._setCustomDateOptions(),
                    ),
            );
            this._setCustomDateOptions();
        }
    }

    private _setCustomDateOptions() {
        const today = new Date();
        const hours = 22 - today.getHours();
        const days = 5 - today.getDay();
        this.custom_durations = [];
        for (let i = 1; i <= days; i++) {
            this.custom_durations.push((24 * i + hours) * 60);
        }
    }

    private setBookingAsset(locker: Locker) {
        this._state.form.patchValue({ asset_id: undefined });
        if (!locker) return;
        this.selected_locker = locker;
        this._state.form.patchValue({
            asset_id: locker?.id,
            asset_name: locker.name,
            map_id: locker.map_id || locker?.bank_id || locker?.id,
            description: locker.name,
            booking_type: 'locker',
            zones: [this.building.id],
            booking_asset: locker,
            tags: locker.bank?.tags || [],
        });
    }
}
