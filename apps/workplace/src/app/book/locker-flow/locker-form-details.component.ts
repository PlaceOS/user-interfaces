import { CommonModule } from '@angular/common';
import {
    Component,
    Injector,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
    BookingForm,
    BookingFormService,
    Locker,
    LockerListFieldComponent,
} from '@placeos/bookings';
import {
    AsyncHandler,
    OrganisationService,
    SettingsService,
    onFieldChange,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';

@Component({
    selector: 'new-locker-form-details',
    styles: [],
    template: `
        @if (form()) {
            <div
                class="divide-base-200 space-y-2 divide-y p-0 sm:px-16 sm:py-4"
            >
                <section class="p-2">
                    <h3 class="mb-4 flex items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                        >
                            1
                        </div>
                        <div class="text-xl">
                            {{ 'COMMON.DETAILS' | translate }}
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
                                    @for (b of buildings(); track b) {
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
                                [formField]="form().date"
                                [timezone]="timezone"
                            >
                                {{ 'FORM.DATE_REQUIRED' | translate }}
                            </a-date-field>
                            @if (allow_all_day && !disable_date) {
                                <mat-checkbox
                                    [formField]="form().all_day"
                                    class="absolute -top-2 right-0"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    </div>
                    @if (!model().all_day) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <label for="start-time">
                                    {{ 'FORM.TIME_START' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="start-time"
                                    [ngModel]="model().date"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            date: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [use_24hr]="use_24hr"
                                    [disabled]="
                                        form().date().disabled() ||
                                        model().duration > 24 * 60 - 1 ||
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
                                        [formField]="form().duration"
                                        [time]="model().date"
                                        [max]="max_duration"
                                        [min]="60"
                                        [step]="60"
                                        [custom_options]="custom_durations()"
                                        [use_24hr]="use_24hr"
                                        [timezone]="timezone"
                                    >
                                    </a-duration-field>
                                </div>
                            }
                        </div>
                    }
                </section>
                @if (form().resources) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ options()?.group ? '3' : '2' }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.LOCKER' | translate }}
                            </div>
                        </h3>
                        <locker-list-field
                            [formField]="form().resources"
                        ></locker-list-field>
                    </section>
                }
            </div>
        }
    `,
    imports: [
        CommonModule,
        TranslatePipe,
        FormsModule,
        FormField,
        LockerListFieldComponent,
        DateFieldComponent,
        TimeFieldComponent,
        DurationFieldComponent,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSelectModule,
    ],
})
export class LockerFormDetailsComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _injector = inject(Injector);

    public readonly form = input<BookingForm>(undefined);
    public readonly find = output<void>();
    /** Writable signal holding the raw booking form value */
    public readonly model = this._state.model;
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
    public custom_durations = signal<number[]>([]);

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
        await this._org.waitUntilInitialised();
        this._state.model.update((m) => ({
            ...m,
            all_day: !this.allow_time_changes || m.all_day,
        }));
    }

    public ngOnChanges(changes: SimpleChanges) {
        const form = this.form();
        if (changes.form && form) {
            const resource_change = onFieldChange(
                this._state.model,
                (m) => m.resources,
                (list) => (list?.length ? this.setBookingAsset(list[0]) : ''),
                this._injector,
            );
            this.subscription('change', () => resource_change.destroy());
            const date_change = onFieldChange(
                this._state.model,
                (m) => m.date,
                () => this._setCustomDateOptions(),
                this._injector,
            );
            this.subscription('date', () => date_change.destroy());
            this._setCustomDateOptions();
        }
    }

    private _setCustomDateOptions() {
        const today = new Date();
        const hours = 22 - today.getHours();
        const days = 5 - today.getDay();
        const durations: number[] = [];
        for (let i = 1; i <= days; i++) {
            durations.push((24 * i + hours) * 60);
        }
        this.custom_durations.set(durations);
    }

    private setBookingAsset(locker: Locker) {
        this._state.model.update((m) => ({ ...m, asset_id: undefined }));
        if (!locker) return;
        this.selected_locker = locker;
        this._state.model.update((m) => ({
            ...m,
            asset_id: locker?.id,
            asset_name: locker.name,
            map_id: locker.map_id || locker?.bank_id || locker?.id,
            description: locker.name,
            booking_type: 'locker',
            zones: [this.building.id],
            booking_asset: locker,
            tags: locker.bank?.tags || [],
        }));
    }
}
