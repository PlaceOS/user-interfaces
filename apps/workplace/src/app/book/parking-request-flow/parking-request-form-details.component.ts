import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    OnInit,
    signal,
} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';
import { addDays, endOfDay, startOfDay, startOfWeek } from 'date-fns';

const SHIFT_PRESETS: Record<string, { start: number; end: number }> = {
    business: { start: 540, end: 1020 },
    morning: { start: 360, end: 720 },
    afternoon: { start: 720, end: 1080 },
};

@Component({
    selector: 'parking-request-form-details',
    template: `
        @if (form()) {
            <div class="space-y-4" [formGroup]="form()">
                <!-- BOOKING FREQUENCY -->
                <div class="border-base-300 space-y-3 rounded-lg border p-4">
                    <h3
                        class="text-info flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                    >
                        <icon class="text-lg">date_range</icon>
                        {{ 'BOOKINGS.PARKING_BOOKING_FREQUENCY' | translate }}
                    </h3>
                    <a-date-field
                        name="date"
                        formControlName="date"
                        [to]="end_date()"
                        [timezone]="timezone"
                    ></a-date-field>
                    <div class="space-y-2">
                        <div
                            class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                            [class.border-info]="
                                booking_frequency() === 'single'
                            "
                            [class.border-base-300]="
                                booking_frequency() !== 'single'
                            "
                            (click)="setBookingFrequency('single')"
                        >
                            <div
                                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                [class.border-info]="
                                    booking_frequency() === 'single'
                                "
                                [class.border-base-300]="
                                    booking_frequency() !== 'single'
                                "
                            >
                                @if (booking_frequency() === 'single') {
                                    <div
                                        class="bg-info h-2.5 w-2.5 rounded-full"
                                    ></div>
                                }
                            </div>
                            <div>
                                <div class="font-medium">
                                    {{
                                        'BOOKINGS.PARKING_FREQUENCY_SINGLE'
                                            | translate
                                    }}
                                </div>
                                <div class="text-sm opacity-60">
                                    {{
                                        'BOOKINGS.PARKING_FREQUENCY_SINGLE_DESC'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                            [class.border-info]="
                                booking_frequency() === 'daily'
                            "
                            [class.border-base-300]="
                                booking_frequency() !== 'daily'
                            "
                            (click)="setBookingFrequency('daily')"
                        >
                            <div
                                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                [class.border-info]="
                                    booking_frequency() === 'daily'
                                "
                                [class.border-base-300]="
                                    booking_frequency() !== 'daily'
                                "
                            >
                                @if (booking_frequency() === 'daily') {
                                    <div
                                        class="bg-info h-2.5 w-2.5 rounded-full"
                                    ></div>
                                }
                            </div>
                            <div class="flex-1">
                                <div class="font-medium">
                                    {{
                                        'BOOKINGS.PARKING_FREQUENCY_DAILY'
                                            | translate
                                    }}
                                </div>
                                <div class="text-sm opacity-60">
                                    {{
                                        'BOOKINGS.PARKING_FREQUENCY_DAILY_DESC'
                                            | translate
                                    }}
                                </div>
                                @if (booking_frequency() === 'daily') {
                                    <div
                                        class="border-base-300 mt-3 space-y-3 rounded-lg border p-3"
                                    >
                                        <div class="text-sm font-medium">
                                            {{
                                                'BOOKINGS.PARKING_FREQUENCY_SELECT_DAYS'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="flex gap-2">
                                            @for (
                                                day of WEEKDAY_OPTIONS;
                                                track day.index
                                            ) {
                                                <button
                                                    type="button"
                                                    class="flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors"
                                                    [class.border-info]="
                                                        isDaySelected(day.index)
                                                    "
                                                    [class.bg-info]="
                                                        isDaySelected(day.index)
                                                    "
                                                    [class.text-info-content]="
                                                        isDaySelected(day.index)
                                                    "
                                                    [class.border-base-300]="
                                                        !isDaySelected(day.index)
                                                    "
                                                    (click)="
                                                        $event.stopPropagation();
                                                        toggleDay(day.index)
                                                    "
                                                >
                                                    {{
                                                        day.date | date: 'EEE'
                                                    }}
                                                </button>
                                            }
                                        </div>
                                        @if (max_weeks() > 1) {
                                            <div
                                                class="text-sm font-medium"
                                            >
                                                {{
                                                    'BOOKINGS.PARKING_FREQUENCY_NUM_WEEKS'
                                                        | translate
                                                }}
                                            </div>
                                            <div class="flex gap-2">
                                                @for (
                                                    w of week_options();
                                                    track w
                                                ) {
                                                    <button
                                                        type="button"
                                                        class="flex h-10 min-w-10 items-center justify-center rounded-full border-2 px-3 text-sm font-medium transition-colors"
                                                        [class.border-info]="
                                                            num_weeks() === w
                                                        "
                                                        [class.bg-info]="
                                                            num_weeks() === w
                                                        "
                                                        [class.text-info-content]="
                                                            num_weeks() === w
                                                        "
                                                        [class.border-base-300]="
                                                            num_weeks() !== w
                                                        "
                                                        (click)="
                                                            $event.stopPropagation();
                                                            setNumWeeks(w)
                                                        "
                                                    >
                                                        {{
                                                            (w === 1
                                                                ? 'BOOKINGS.PARKING_FREQUENCY_WEEK'
                                                                : 'BOOKINGS.PARKING_FREQUENCY_WEEKS'
                                                            )
                                                                | translate
                                                                    : {
                                                                          weeks:
                                                                              w,
                                                                      }
                                                        }}
                                                    </button>
                                                }
                                            </div>
                                        }
                                        <div class="text-sm font-medium">
                                            {{
                                                'BOOKINGS.PARKING_FREQUENCY_DATES_HEADER'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="space-y-1">
                                            @for (
                                                day of weekdays;
                                                track $index
                                            ) {
                                                <div
                                                    class="flex items-center gap-2 text-sm"
                                                >
                                                    <div
                                                        class="bg-success h-2 w-2 rounded-full"
                                                    ></div>
                                                    {{
                                                        day
                                                            | date
                                                                : 'EEEE, d MMMM yyyy'
                                                    }}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <!-- REQUEST TYPE -->
                <div class="border-base-300 space-y-3 rounded-lg border p-4">
                    <h3
                        class="text-info flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                    >
                        <icon class="text-lg">ballot</icon>
                        {{ 'BOOKINGS.PARKING_REQUEST_TYPE' | translate }}
                    </h3>
                    <div class="space-y-2">
                        @for (type of request_types(); track type.value) {
                            <div
                                class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                [class.border-info]="
                                    form().value.request_type === type.value
                                "
                                [class.border-base-300]="
                                    form().value.request_type !== type.value
                                "
                                (click)="
                                    form().patchValue({
                                        request_type: type.value,
                                    })
                                "
                            >
                                <div
                                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                    [class.border-info]="
                                        form().value.request_type === type.value
                                    "
                                    [class.border-base-300]="
                                        form().value.request_type !== type.value
                                    "
                                >
                                    @if (
                                        form().value.request_type === type.value
                                    ) {
                                        <div
                                            class="bg-info h-2.5 w-2.5 rounded-full"
                                        ></div>
                                    }
                                </div>
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="font-medium">{{
                                            type.label | translate
                                        }}</span>
                                        @if (type.badge) {
                                            <span
                                                class="bg-base-200 rounded px-2 py-0.5 text-xs"
                                                >{{
                                                    type.badge | translate
                                                }}</span
                                            >
                                        }
                                    </div>
                                    <div class="text-sm opacity-60">
                                        {{ type.description | translate }}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <!-- SHIFT SELECTION -->
                <div class="border-base-300 space-y-3 rounded-lg border p-4">
                    <h3
                        class="text-info flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                    >
                        <icon class="text-lg">schedule</icon>
                        {{ 'BOOKINGS.PARKING_SHIFT_SELECTION' | translate }}
                    </h3>
                    <div class="space-y-3">
                        <div>
                            <label class="mb-1 block text-sm font-medium">
                                {{ 'BOOKINGS.PARKING_SHIFT_TYPE' | translate }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="w-full sm:w-80"
                            >
                                <mat-select
                                    [value]="shift_type()"
                                    (selectionChange)="
                                        setShiftType($event.value)
                                    "
                                >
                                    <mat-option value="business">{{
                                        'BOOKINGS.PARKING_SHIFT_BUSINESS'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="morning">{{
                                        'BOOKINGS.PARKING_SHIFT_MORNING'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="afternoon">{{
                                        'BOOKINGS.PARKING_SHIFT_AFTERNOON'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="custom">{{
                                        'BOOKINGS.PARKING_SHIFT_CUSTOM'
                                            | translate
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex-1">
                                <label class="mb-1 block text-sm font-medium">
                                    {{
                                        'BOOKINGS.PARKING_START_TIME'
                                            | translate
                                    }}
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        [value]="start_time_mins()"
                                        (selectionChange)="
                                            setStartTime($event.value)
                                        "
                                    >
                                        @for (
                                            opt of time_options;
                                            track opt.value
                                        ) {
                                            <mat-option [value]="opt.value">{{
                                                opt.label
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="flex-1">
                                <label class="mb-1 block text-sm font-medium">
                                    {{
                                        'BOOKINGS.PARKING_END_TIME' | translate
                                    }}
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        [value]="end_time_mins()"
                                        (selectionChange)="
                                            setEndTime($event.value)
                                        "
                                    >
                                        @for (
                                            opt of time_options;
                                            track opt.value
                                        ) {
                                            <mat-option [value]="opt.value">{{
                                                opt.label
                                            }}</mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- LOCATION PREFERENCE -->
                @if ((building_list | async)?.length > 1) {
                    <div
                        class="border-base-300 space-y-3 rounded-lg border p-4"
                    >
                        <h3
                            class="text-success flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                        >
                            <icon class="text-lg">place</icon>
                            {{
                                'BOOKINGS.PARKING_LOCATION_PREFERENCE'
                                    | translate
                            }}
                        </h3>
                        @if (region_name) {
                            <div class="text-sm font-medium">
                                {{ region_name }}
                            </div>
                        }
                        <div class="space-y-2">
                            @for (bld of building_list | async; track bld.id) {
                                <div
                                    class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                    [class.border-info]="
                                        (building | async)?.id === bld.id
                                    "
                                    [class.border-base-300]="
                                        (building | async)?.id !== bld.id
                                    "
                                    (click)="setBuilding(bld)"
                                >
                                    <div
                                        class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                        [class.border-info]="
                                            (building | async)?.id === bld.id
                                        "
                                        [class.border-base-300]="
                                            (building | async)?.id !== bld.id
                                        "
                                    >
                                        @if (
                                            (building | async)?.id === bld.id
                                        ) {
                                            <div
                                                class="bg-info h-2.5 w-2.5 rounded-full"
                                            ></div>
                                        }
                                    </div>
                                    <div>
                                        <div class="font-medium">
                                            {{ bld.display_name || bld.name }}
                                        </div>
                                        @if (getBayInfo(bld)) {
                                            <div class="text-sm opacity-60">
                                                {{ getBayInfo(bld) }}
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <!-- VEHICLE DETAILS -->
                <div class="border-base-300 space-y-3 rounded-lg border p-4">
                    <h3
                        class="text-info flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                    >
                        <icon class="text-lg">directions_car</icon>
                        {{ 'BOOKINGS.PARKING_VEHICLE_DETAILS' | translate }}
                    </h3>
                    <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <div class="flex-1">
                            <label class="mb-1 block text-sm font-medium">
                                {{
                                    'BOOKINGS.PARKING_VEHICLE_TYPE' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select formControlName="vehicle_type">
                                    <mat-option value="car">{{
                                        'BOOKINGS.PARKING_VEHICLE_CAR'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="bike">{{
                                        'BOOKINGS.PARKING_VEHICLE_BIKE'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="van">{{
                                        'BOOKINGS.PARKING_VEHICLE_VAN'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="truck">{{
                                        'BOOKINGS.PARKING_VEHICLE_TRUCK'
                                            | translate
                                    }}</mat-option>
                                    <mat-option value="other">{{
                                        'BOOKINGS.PARKING_VEHICLE_OTHER'
                                            | translate
                                    }}</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="flex-1">
                            <label class="mb-1 block text-sm font-medium">
                                {{
                                    'BOOKINGS.PARKING_REGISTRATION' | translate
                                }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    formControlName="plate_number"
                                    [placeholder]="
                                        'BOOKINGS.PARKING_REGISTRATION_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                </div>

                <!-- SPACE RESTRICTIONS -->
                <div class="border-base-300 space-y-3 rounded-lg border p-4">
                    <h3
                        class="text-info flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                    >
                        <icon class="text-lg">tune</icon>
                        {{
                            'BOOKINGS.PARKING_SPACE_RESTRICTIONS_TITLE'
                                | translate
                        }}
                    </h3>
                    <p class="text-sm opacity-60">
                        {{
                            'BOOKINGS.PARKING_SPACE_RESTRICTIONS_DESC'
                                | translate
                        }}
                    </p>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            [value]="
                                form().value.space_restrictions
                                    ? 'oversized'
                                    : 'none'
                            "
                            (selectionChange)="
                                form().patchValue({
                                    space_restrictions: $event.value !== 'none',
                                })
                            "
                        >
                            <mat-option value="none">{{
                                'BOOKINGS.PARKING_RESTRICTION_NONE' | translate
                            }}</mat-option>
                            <mat-option value="oversized">{{
                                'BOOKINGS.PARKING_RESTRICTION_OVERSIZED'
                                    | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        TranslatePipe,
        IconComponent,
        DateFieldComponent,
    ],
})
export class ParkingRequestFormDetailsComponent
    extends AsyncHandler
    implements OnInit
{
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly form = input<FormGroup>(undefined);
    public readonly show_special_needs = input<boolean>(false);
    public readonly building = this._org.active_building;
    public readonly building_list = this._org.building_list;

    public readonly available_days = settingSignal(
        'parking.available_period',
        14,
    );

    public readonly end_date = computed(() =>
        endOfDay(addDays(Date.now(), this.available_days())).valueOf(),
    );

    public readonly booking_frequency = signal<'single' | 'daily'>('single');
    public readonly selected_days = signal<Set<number>>(
        new Set([1, 2, 3, 4, 5]),
    );
    public readonly num_weeks = signal<number>(1);
    public readonly max_weeks = computed(() =>
        Math.max(1, Math.floor(this.available_days() / 7)),
    );
    public readonly week_options = computed(() =>
        Array.from({ length: this.max_weeks() }, (_, i) => i + 1),
    );
    public readonly shift_type = signal<string>('custom');
    public readonly start_time_mins = signal<number>(480);
    public readonly end_time_mins = signal<number>(1020);

    public readonly WEEKDAY_OPTIONS = [1, 2, 3, 4, 5].map((index) => ({
        index,
        date: addDays(startOfWeek(Date.now(), { weekStartsOn: 1 }), index - 1),
    }));

    private readonly _all_request_types = [
        {
            value: 'standard',
            label: 'BOOKINGS.PARKING_REQUEST_STANDARD_TITLE',
            description: 'BOOKINGS.PARKING_REQUEST_STANDARD_DESC',
        },
        {
            value: 'special',
            label: 'BOOKINGS.PARKING_REQUEST_SPECIAL_TITLE',
            description: 'BOOKINGS.PARKING_REQUEST_SPECIAL_DESC',
            badge: 'BOOKINGS.PARKING_REQUIRES_APPROVAL',
        },
        {
            value: 'after_hours',
            label: 'BOOKINGS.PARKING_REQUEST_AFTER_HOURS_TITLE',
            description: 'BOOKINGS.PARKING_REQUEST_AFTER_HOURS_DESC',
            badge: 'BOOKINGS.PARKING_REQUIRES_APPROVAL',
        },
    ];

    public readonly request_types = computed(() =>
        this.show_special_needs()
            ? this._all_request_types
            : this._all_request_types.filter((t) => t.value !== 'special'),
    );

    public readonly time_options = Array.from({ length: 48 }, (_, i) => {
        const total_mins = i * 30;
        const hours = Math.floor(total_mins / 60);
        const mins = total_mins % 60;
        return {
            value: total_mins,
            label: `${hours.toString().padStart(2, '0')} : ${mins.toString().padStart(2, '0')}`,
        };
    });

    public get weekdays(): number[] {
        if (this.booking_frequency() !== 'daily') return [];
        const form = this.form();
        const date = form?.getRawValue()?.date || Date.now();
        const week_start = startOfWeek(date, { weekStartsOn: 1 });
        const selected = this.selected_days();
        const weeks = this.num_weeks();
        const dates: number[] = [];
        for (let w = 0; w < weeks; w++) {
            for (let d = 0; d < 5; d++) {
                if (selected.has(d + 1)) {
                    dates.push(addDays(week_start, w * 7 + d).valueOf());
                }
            }
        }
        return dates;
    }

    public get region_name(): string {
        return this._org.region?.display_name || this._org.region?.name || '';
    }

    public get timezone(): string {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.parking.use_building_timezone')
            ? this._org.building?.timezone
            : '';
    }

    public ngOnInit() {
        const form = this.form();
        if (!form) return;
        const date = form.getRawValue().date;
        if (date) {
            const d = new Date(date);
            const start = d.getHours() * 60 + d.getMinutes();
            const duration = form.value.duration || 540;
            this.start_time_mins.set(start);
            this.end_time_mins.set(start + duration);
            this._detectShiftType(start, start + duration);
        } else {
            this.start_time_mins.set(480);
            this.end_time_mins.set(1020);
            this.shift_type.set('custom');
        }
        const is_daily = form.value.recurrence_type === 'daily';
        this.booking_frequency.set(is_daily ? 'daily' : 'single');
        if (is_daily) {
            if (form.value.recurrence_days) {
                const days = new Set<number>();
                for (let i = 1; i <= 5; i++) {
                    if (form.value.recurrence_days & (1 << i)) days.add(i);
                }
                if (days.size > 0) this.selected_days.set(days);
            }
            if (form.value.recurrence_end && date) {
                const week_start = startOfWeek(date, { weekStartsOn: 1 });
                const diff = form.value.recurrence_end - week_start.valueOf();
                const weeks = Math.max(
                    1,
                    Math.ceil(diff / (7 * 24 * 60 * 60 * 1000)),
                );
                this.num_weeks.set(
                    Math.min(weeks, this.max_weeks()),
                );
            }
        }
    }

    public isDaySelected(day_index: number): boolean {
        return this.selected_days().has(day_index);
    }

    public toggleDay(day_index: number) {
        const days = new Set(this.selected_days());
        if (days.has(day_index)) {
            if (days.size > 1) days.delete(day_index);
        } else {
            days.add(day_index);
        }
        this.selected_days.set(days);
        this._updateRecurrenceDays();
    }

    public setNumWeeks(weeks: number) {
        this.num_weeks.set(weeks);
        this._updateRecurrenceEnd();
    }

    public setBookingFrequency(freq: 'single' | 'daily') {
        this.booking_frequency.set(freq);
        const form = this.form();
        if (!form) return;
        if (freq === 'single') {
            form.patchValue({
                recurrence_type: 'none',
                recurrence_days: null,
            });
        } else {
            this.selected_days.set(new Set([1, 2, 3, 4, 5]));
            this.num_weeks.set(1);
            const date = form.getRawValue().date || Date.now();
            const week_start = startOfWeek(date, { weekStartsOn: 1 });
            form.patchValue({
                recurrence_type: 'daily',
                recurrence_interval: 1,
                recurrence_days: this._computeDaysBitmask(),
                recurrence_end: endOfDay(addDays(week_start, 4)).valueOf(),
            });
        }
    }

    public setShiftType(type: string) {
        this.shift_type.set(type);
        if (type !== 'custom') {
            const preset = SHIFT_PRESETS[type];
            if (preset) {
                this.start_time_mins.set(preset.start);
                this.end_time_mins.set(preset.end);
                this._updateFormTimes(preset.start, preset.end);
            }
        }
    }

    public setStartTime(mins: number) {
        this.start_time_mins.set(mins);
        this.shift_type.set('custom');
        this._updateFormTimes(mins, this.end_time_mins());
    }

    public setEndTime(mins: number) {
        this.end_time_mins.set(mins);
        this.shift_type.set('custom');
        this._updateFormTimes(this.start_time_mins(), mins);
    }

    public readonly setBuilding = (bld) => (this._org.building = bld);

    public getBayInfo(bld: any): string {
        const metadata = bld.metadata || {};
        const parking = metadata.parking?.details || {};
        const car_bays = parking.car_bays;
        const motorcycle_bays = parking.motorcycle_bays;
        const parts: string[] = [];
        if (car_bays) parts.push(`${car_bays} Car bays`);
        if (motorcycle_bays) parts.push(`${motorcycle_bays} Motorcycle bays`);
        return parts.join(' + ') || '';
    }

    private _updateFormTimes(start_mins: number, end_mins: number) {
        const form = this.form();
        if (!form) return;
        const raw_date = form.getRawValue().date || Date.now();
        const day = startOfDay(raw_date);
        const new_date = day.valueOf() + start_mins * 60 * 1000;
        const duration = Math.max(end_mins - start_mins, 30);
        const was_disabled = form.controls.date.disabled;
        if (was_disabled) form.controls.date.enable({ emitEvent: false });
        form.patchValue({ date: new_date, duration });
        if (was_disabled) form.controls.date.disable({ emitEvent: false });
    }

    private _computeDaysBitmask(): number {
        let bitmask = 0;
        this.selected_days().forEach((day) => (bitmask |= 1 << day));
        return bitmask;
    }

    private _updateRecurrenceDays() {
        const form = this.form();
        if (!form || this.booking_frequency() !== 'daily') return;
        form.patchValue({ recurrence_days: this._computeDaysBitmask() });
    }

    private _updateRecurrenceEnd() {
        const form = this.form();
        if (!form || this.booking_frequency() !== 'daily') return;
        const date = form.getRawValue().date || Date.now();
        const week_start = startOfWeek(date, { weekStartsOn: 1 });
        const last_friday = addDays(week_start, (this.num_weeks() - 1) * 7 + 4);
        form.patchValue({
            recurrence_end: endOfDay(last_friday).valueOf(),
        });
    }

    private _detectShiftType(start: number, end: number) {
        for (const [key, preset] of Object.entries(SHIFT_PRESETS)) {
            if (preset.start === start && preset.end === end) {
                this.shift_type.set(key);
                return;
            }
        }
        this.shift_type.set('custom');
    }
}
