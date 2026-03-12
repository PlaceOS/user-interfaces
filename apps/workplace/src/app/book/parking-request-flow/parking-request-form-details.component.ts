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
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    currentUser,
    notifyError,
    OrganisationService,
    settingSignal,
    SettingsService,
    UploadsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';
import { addDays, endOfDay, startOfDay, startOfWeek } from 'date-fns';
import { SettingsToggleComponent } from '../../../../../../libs/components/src/lib/settings-toggle.component';
import { FullscreenEmbedComponent } from '../../components/fullscreen-embed.component';

const SHIFT_PRESETS: Record<string, { start: number; end: number }> = {
    day_worker: { start: 420, end: 1020 },
    day_shift_12hr: { start: 330, end: 1110 },
    night_shift_12hr: { start: 1050, end: 390 },
    half_day_am: { start: 420, end: 720 },
    half_day_pm: { start: 750, end: 1020 },
};

interface ParkingRequestShiftOption {
    id: string;
    name: string;
    start_time: number;
    end_time: number;
}

interface ParkingRequestOption {
    id: string;
    name: string;
}

interface ParkingRequestType {
    value: string;
    label: string;
    description?: string;
    badge?: string;
    groups?: string[];
}

const DEFAULT_SHIFT_OPTIONS: ParkingRequestShiftOption[] = [
    {
        id: 'day_worker',
        name: 'BOOKINGS.PARKING_SHIFT_DAY_WORKER',
        start_time: SHIFT_PRESETS.day_worker.start,
        end_time: SHIFT_PRESETS.day_worker.end,
    },
    {
        id: 'day_shift_12hr',
        name: 'BOOKINGS.PARKING_SHIFT_DAY_12HR',
        start_time: SHIFT_PRESETS.day_shift_12hr.start,
        end_time: SHIFT_PRESETS.day_shift_12hr.end,
    },
    {
        id: 'night_shift_12hr',
        name: 'BOOKINGS.PARKING_SHIFT_NIGHT_12HR',
        start_time: SHIFT_PRESETS.night_shift_12hr.start,
        end_time: SHIFT_PRESETS.night_shift_12hr.end,
    },
    {
        id: 'half_day_am',
        name: 'BOOKINGS.PARKING_SHIFT_HALF_DAY_AM',
        start_time: SHIFT_PRESETS.half_day_am.start,
        end_time: SHIFT_PRESETS.half_day_am.end,
    },
    {
        id: 'half_day_pm',
        name: 'BOOKINGS.PARKING_SHIFT_HALF_DAY_PM',
        start_time: SHIFT_PRESETS.half_day_pm.start,
        end_time: SHIFT_PRESETS.half_day_pm.end,
    },
];

const DEFAULT_SPACE_RESTRICTION_OPTIONS: ParkingRequestOption[] = [
    {
        id: 'oversized',
        name: 'BOOKINGS.PARKING_RESTRICTION_OVERSIZED',
    },
];

@Component({
    selector: 'parking-request-form-details',
    template: `
        @if (form()) {
            <div [formGroup]="form()">
                <!-- BOOKING FREQUENCY -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>date_range</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_BOOKING_FREQUENCY' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    <a-date-field
                        name="date"
                        formControlName="date"
                        [to]="end_date()"
                        [timezone]="timezone"
                    ></a-date-field>
                    @if (allow_recurrence()) {
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
                                                            isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        [class.bg-info]="
                                                            isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        [class.text-info-content]="
                                                            isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        [class.border-base-300]="
                                                            !isDaySelected(
                                                                day.index
                                                            )
                                                        "
                                                        (click)="
                                                            $event.stopPropagation();
                                                            toggleDay(day.index)
                                                        "
                                                    >
                                                        {{
                                                            day.date
                                                                | date: 'EEE'
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
                                                                num_weeks() ===
                                                                w
                                                            "
                                                            [class.bg-info]="
                                                                num_weeks() ===
                                                                w
                                                            "
                                                            [class.text-info-content]="
                                                                num_weeks() ===
                                                                w
                                                            "
                                                            [class.border-base-300]="
                                                                num_weeks() !==
                                                                w
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
                                                                              weeks: w,
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
                    }
                </div>

                <!-- REQUEST TYPE -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>ballot</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_REQUEST_TYPE' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
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
                @if (form().value.request_type === 'special') {
                    <!-- P2 SPECIAL NEEDS DETAILS -->
                    <div
                        class="gradient border-base-content text-warning flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>description</icon>
                        <div>
                            {{
                                'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS' | translate
                            }}
                        </div>
                    </div>
                    <div class="space-y-6 p-4">
                        <div>
                            <label class="mb-2 block text-sm font-medium">
                                {{
                                    'BOOKINGS.P2_REASON_FOR_REQUEST' | translate
                                }}
                                <span class="text-error">*</span>
                            </label>
                            <textarea
                                matInput
                                formControlName="notes"
                                rows="6"
                                class="border-base-content w-full rounded-lg border p-4 text-base"
                                [placeholder]="
                                    'BOOKINGS.P2_REASON_PLACEHOLDER' | translate
                                "
                            ></textarea>
                        </div>

                        <div>
                            <div class="mb-2 text-sm font-medium">
                                {{
                                    'BOOKINGS.P2_ATTACH_SUPPORTING_DOCS'
                                        | translate
                                }}
                            </div>
                            <label
                                class="border-base-300 hover:border-info flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                for="p2-supporting-docs"
                            >
                                <icon class="mt-0.5 text-xl">upload_file</icon>
                                <div>
                                    <div class="font-medium">
                                        {{
                                            'BOOKINGS.P2_UPLOAD_FILE'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm opacity-70">
                                        {{
                                            'BOOKINGS.P2_ACCEPTED_FORMATS'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </label>
                            <input
                                id="p2-supporting-docs"
                                type="file"
                                class="hidden"
                                multiple
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                (change)="onSupportingDocsSelected($event)"
                            />
                            @if (supporting_doc_names().length) {
                                <div class="mt-3 space-y-2">
                                    @for (
                                        file_name of supporting_doc_names();
                                        track $index
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 flex items-center justify-between rounded-lg border p-1"
                                        >
                                            <div
                                                class="truncate px-4 py-2 text-sm"
                                            >
                                                {{ file_name }}
                                            </div>
                                            <div class="flex items-center">
                                                <button
                                                    icon
                                                    type="button"
                                                    matRipple
                                                    (click)="
                                                        previewSupportingDoc(
                                                            $index
                                                        )
                                                    "
                                                >
                                                    <icon>open_in_new</icon>
                                                </button>
                                                <button
                                                    icon
                                                    type="button"
                                                    matRipple
                                                    (click)="
                                                        removeSupportingDoc(
                                                            $index
                                                        )
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }

                <!-- SHIFT SELECTION -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>schedule</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_SHIFT_SELECTION' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
                    <div class="space-y-3">
                        <div>
                            @if (show_shift_select()) {
                                <label class="mb-1 block text-sm font-medium">
                                    {{
                                        'BOOKINGS.PARKING_SHIFT_TYPE'
                                            | translate
                                    }}
                                </label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <mat-select
                                        [value]="shift_type()"
                                        (selectionChange)="
                                            setShiftType($event.value)
                                        "
                                    >
                                        <mat-select-trigger>
                                            @if (
                                                selected_shift_option();
                                                as option
                                            ) {
                                                {{ option.name | translate }}
                                                ({{
                                                    shiftTime(option.start_time)
                                                        | date: time_format
                                                }}
                                                -
                                                {{
                                                    shiftTime(option.end_time)
                                                        | date: time_format
                                                }})
                                            } @else {
                                                {{
                                                    'BOOKINGS.PARKING_SHIFT_CUSTOM'
                                                        | translate
                                                }}
                                                ({{
                                                    shiftTime(start_time_mins())
                                                        | date: time_format
                                                }}
                                                -
                                                {{
                                                    shiftTime(end_time_mins())
                                                        | date: time_format
                                                }})
                                            }
                                        </mat-select-trigger>
                                        @for (
                                            option of shift_options();
                                            track option.id
                                        ) {
                                            <mat-option [value]="option.id">
                                                {{ option.name | translate }}
                                                ({{
                                                    shiftTime(option.start_time)
                                                        | date: time_format
                                                }}
                                                -
                                                {{
                                                    shiftTime(option.end_time)
                                                        | date: time_format
                                                }})
                                            </mat-option>
                                        }
                                        <mat-option value="custom">
                                            {{
                                                'BOOKINGS.PARKING_SHIFT_CUSTOM'
                                                    | translate
                                            }}
                                            ({{
                                                shiftTime(
                                                    custom_start_time_mins()
                                                ) | date: time_format
                                            }}
                                            -
                                            {{
                                                shiftTime(
                                                    custom_end_time_mins()
                                                ) | date: time_format
                                            }})
                                        </mat-option>
                                    </mat-select>
                                </mat-form-field>
                            }
                        </div>
                        @if (shift_type() === 'custom') {
                            <div class="flex gap-4">
                                <div class="flex-1">
                                    <label
                                        class="mb-1 block text-sm font-medium"
                                    >
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
                                                opt of time_options();
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{
                                                        shiftTime(opt.value)
                                                            | date: time_format
                                                    }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                <div class="flex-1">
                                    <label
                                        class="mb-1 block text-sm font-medium"
                                    >
                                        {{
                                            'BOOKINGS.PARKING_END_TIME'
                                                | translate
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
                                                opt of time_options();
                                                track opt.value
                                            ) {
                                                <mat-option
                                                    [value]="opt.value"
                                                    >{{
                                                        shiftTime(opt.value)
                                                            | date: time_format
                                                    }}</mat-option
                                                >
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <!-- LOCATION PREFERENCE -->
                @if (hasMultipleBuildings(building_list | async)) {
                    <div
                        class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                    >
                        <icon>place</icon>
                        <div>
                            {{
                                'BOOKINGS.PARKING_LOCATION_PREFERENCE'
                                    | translate
                            }}
                        </div>
                    </div>
                    <div class="space-y-3 p-4">
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
                        <settings-toggle
                            formControlName="prefer_booked_location_first"
                        >
                            {{
                                'BOOKINGS.PARKING_PREFER_BOOKED_LOCATION_FIRST'
                                    | translate
                            }}
                        </settings-toggle>
                    </div>
                }
                <!-- VEHICLE DETAILS -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>directions_car</icon>
                    <div>
                        {{ 'BOOKINGS.PARKING_VEHICLE_DETAILS' | translate }}
                    </div>
                </div>
                <div class="space-y-3 p-4">
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

                <!-- APPROVER GROUP -->
                @if (approver_group_options().length && !is_auto_approved()) {
                    <div
                        class="border-base-300 space-y-3 rounded-lg border p-4"
                    >
                        <h3
                            class="text-info flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
                        >
                            <icon class="text-lg">group</icon>
                            {{
                                'BOOKINGS.PARKING_APPROVER_GROUP_TITLE'
                                    | translate
                            }}
                        </h3>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                formControlName="approver_group"
                                [placeholder]="
                                    'BOOKINGS.PARKING_APPROVER_GROUP_PLACEHOLDER'
                                        | translate
                                "
                            >
                                <mat-option value="">{{
                                    'COMMON.ANY' | translate
                                }}</mat-option>
                                @for (
                                    option of approver_group_options();
                                    track option.id
                                ) {
                                    <mat-option [value]="option.id">{{
                                        option.name | translate
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }

                <!-- SPACE RESTRICTIONS -->
                <div
                    class="gradient border-base-content flex items-center space-x-2 border-l-8 px-4 py-3 font-medium"
                >
                    <icon>tune</icon>
                    <div>
                        {{
                            'BOOKINGS.PARKING_SPACE_RESTRICTIONS_TITLE'
                                | translate
                        }}
                    </div>
                </div>
                @if (space_restriction_options().length) {
                    <div class="space-y-3 p-4">
                        <p class="text-sm opacity-60">
                            {{
                                'BOOKINGS.PARKING_SPACE_RESTRICTIONS_DESC'
                                    | translate
                            }}
                        </p>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [value]="selected_space_restriction()"
                                (selectionChange)="
                                    setSpaceRestriction($event.value)
                                "
                            >
                                <mat-option value="none">{{
                                    'BOOKINGS.PARKING_RESTRICTION_NONE'
                                        | translate
                                }}</mat-option>
                                @for (
                                    option of space_restriction_options();
                                    track option.id
                                ) {
                                    <mat-option [value]="option.id">{{
                                        option.name | translate
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </div>
        }
    `,
    styles: [
        `
            .gradient {
                background: linear-gradient(
                    105deg,
                    var(--base-200) 0%,
                    var(--base-200) 50%,
                    var(--base-100) 100%
                );
            }
        `,
    ],
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
        SettingsToggleComponent,
        MatRippleModule,
    ],
})
export class ParkingRequestFormDetailsComponent
    extends AsyncHandler
    implements OnInit
{
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _uploads = inject(UploadsService);
    private _dialog = inject(MatDialog);

    public readonly form = input<FormGroup>(undefined);
    public readonly show_special_needs = input<boolean>(true);
    public readonly building = this._org.active_building;
    public readonly building_list = this._org.building_list;

    public readonly available_days = settingSignal(
        'parking.available_period',
        14,
    );
    public readonly allow_recurrence = settingSignal(
        'parking.allow_recurrence',
        true,
    );
    public readonly shift_options_setting = settingSignal<
        ParkingRequestShiftOption[]
    >('parking.request_shift_options', DEFAULT_SHIFT_OPTIONS);
    public readonly space_restriction_options_setting = settingSignal<
        ParkingRequestOption[]
    >('parking.request_space_restrictions', DEFAULT_SPACE_RESTRICTION_OPTIONS);
    public readonly approver_groups_setting = settingSignal<
        ParkingRequestOption[]
    >('parking.approver_groups', []);
    public readonly auto_approved_groups_setting = settingSignal<string[]>(
        'parking.auto_approved_groups',
        [],
    );

    public readonly is_auto_approved = computed(() => {
        const auto_groups = this.auto_approved_groups_setting();
        if (!auto_groups?.length) return false;
        const user_groups = currentUser()?.groups || [];
        return auto_groups.some((g) => user_groups.includes(g));
    });

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
    public readonly shift_type = signal<string>('day_worker');
    public readonly start_time_mins = signal<number>(420);
    public readonly end_time_mins = signal<number>(1020);
    public readonly supporting_doc_names = signal<string[]>([]);
    public readonly custom_start_time_mins = signal<number>(480);
    public readonly custom_end_time_mins = signal<number>(600);
    public readonly shift_options = computed(() =>
        this._normaliseShiftOptions(this.shift_options_setting()),
    );
    public readonly selected_shift_option = computed(() =>
        this.shift_options().find((_) => _.id === this.shift_type()),
    );
    public readonly show_shift_select = computed(
        () => this.shift_options().length + 1 > 1,
    );
    public readonly space_restriction_options = computed(() =>
        this._normaliseOptions(this.space_restriction_options_setting()),
    );
    public readonly approver_group_options = computed(() =>
        this._normaliseOptions(this.approver_groups_setting()),
    );
    public readonly selected_space_restriction = computed(() => {
        const value = this.form()?.getRawValue()?.space_restrictions;
        if (typeof value === 'string' && value) return value;
        if (value === true) {
            return this.space_restriction_options()[0]?.id || 'none';
        }
        return 'none';
    });

    public readonly WEEKDAY_OPTIONS = [1, 2, 3, 4, 5, 6, 7].map((index) => ({
        index,
        date: addDays(startOfWeek(Date.now(), { weekStartsOn: 1 }), index - 1),
    }));

    private readonly _default_request_types: ParkingRequestType[] = [
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

    public readonly request_types_setting = settingSignal<ParkingRequestType[]>(
        'parking.request_types',
        null,
    );

    public readonly request_types = computed(() => {
        const custom_types = this.request_types_setting();
        const all_types =
            custom_types?.length > 0
                ? custom_types
                : this._default_request_types;
        const user_groups = currentUser()?.groups || [];
        return all_types.filter((t) => {
            if (t.value === 'special' && !this.show_special_needs())
                return false;
            if (t.groups?.length)
                return t.groups.some((g) => user_groups.includes(g));
            return true;
        });
    });

    public readonly time_options = computed(() => {
        const values = new Set(Array.from({ length: 48 }, (_, i) => i * 30));
        values.add(this.start_time_mins());
        values.add(this.end_time_mins());
        return [...values]
            .filter((value) => value >= 0 && value < 1440)
            .sort((left, right) => left - right)
            .map((value) => ({ value }));
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
            for (let d = 0; d < 7; d++) {
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

    public get time_format(): string {
        return this._settings.time_format;
    }

    public ngOnInit() {
        const form = this.form();
        if (!form) return;
        this.supporting_doc_names.set(
            form.value.p2_document_names ||
                (form.value.attachments || []).map((url) =>
                    this._fileNameFromUrl(url),
                ),
        );
        const is_edit = !!form.value.id;
        const default_custom_shift = this._defaultCustomShift();
        this.custom_start_time_mins.set(default_custom_shift.start_time);
        this.custom_end_time_mins.set(default_custom_shift.end_time);
        const date = form.getRawValue().date;
        if (is_edit && date) {
            const d = new Date(date);
            const start = d.getHours() * 60 + d.getMinutes();
            const duration = form.value.duration || 600;
            this.start_time_mins.set(start);
            this.end_time_mins.set(start + duration);
            this._detectShiftType(start, start + duration);
            if (this.shift_type() === 'custom') {
                this.custom_start_time_mins.set(start);
                this.custom_end_time_mins.set(start + duration);
            }
        } else {
            if (this.shift_options().length) {
                this.setShiftType(this.shift_options()[0].id);
            } else {
                this.start_time_mins.set(default_custom_shift.start_time);
                this.end_time_mins.set(default_custom_shift.end_time);
                this.shift_type.set('custom');
            }
        }
        if (
            form.value.space_restrictions === true &&
            this.space_restriction_options().length
        ) {
            this.setSpaceRestriction(this.space_restriction_options()[0].id);
        }
        const is_daily =
            this.allow_recurrence() && form.value.recurrence_type === 'daily';
        this.booking_frequency.set(is_daily ? 'daily' : 'single');
        if (!this.allow_recurrence() && form.value.recurrence_type !== 'none') {
            form.patchValue({
                recurrence_type: 'none',
                recurrence_days: null,
                recurrence_interval: null,
                recurrence_end: null,
            });
        }
        if (is_daily) {
            if (form.value.recurrence_days) {
                const days = new Set<number>();
                for (let i = 1; i <= 7; i++) {
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
                this.num_weeks.set(Math.min(weeks, this.max_weeks()));
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
        if (freq === 'daily' && !this.allow_recurrence()) return;
        this.booking_frequency.set(freq);
        const form = this.form();
        if (!form) return;
        if (freq === 'single') {
            form.patchValue({
                recurrence_type: 'none',
                recurrence_days: null,
                recurrence_interval: null,
                recurrence_end: null,
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
                recurrence_end: endOfDay(addDays(week_start, 6)).valueOf(),
            });
        }
    }

    public setShiftType(type: string) {
        this.shift_type.set(type);
        if (type === 'custom') {
            const { start_time, end_time } = this._normaliseCustomShift(
                this.custom_start_time_mins(),
                this.custom_end_time_mins(),
            );
            this.custom_start_time_mins.set(start_time);
            this.custom_end_time_mins.set(end_time);
            this.start_time_mins.set(start_time);
            this.end_time_mins.set(end_time);
            this._updateFormTimes(start_time, end_time);
            return;
        }
        const preset = this.shift_options().find((_) => _.id === type);
        if (preset) {
            this.start_time_mins.set(preset.start_time);
            this.end_time_mins.set(preset.end_time);
            this._updateFormTimes(preset.start_time, preset.end_time);
        }
    }

    public setStartTime(mins: number) {
        const { start_time, end_time } = this._normaliseCustomShift(
            mins,
            this.end_time_mins(),
        );
        this.start_time_mins.set(start_time);
        this.end_time_mins.set(end_time);
        this.custom_start_time_mins.set(start_time);
        this.custom_end_time_mins.set(end_time);
        this.shift_type.set('custom');
        this._updateFormTimes(start_time, end_time);
    }

    public setEndTime(mins: number) {
        const { start_time, end_time } = this._normaliseCustomShift(
            this.start_time_mins(),
            mins,
        );
        this.start_time_mins.set(start_time);
        this.end_time_mins.set(end_time);
        this.custom_start_time_mins.set(start_time);
        this.custom_end_time_mins.set(end_time);
        this.shift_type.set('custom');
        this._updateFormTimes(start_time, end_time);
    }

    public setSpaceRestriction(value: string) {
        const form = this.form();
        if (!form) return;
        form.patchValue({
            space_restrictions: value === 'none' ? false : value,
        });
    }

    public readonly setBuilding = (bld) => (this._org.building = bld);

    public async onSupportingDocsSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        const files = Array.from(input.files || []);
        const valid_files = files.filter(
            (file) => file.size <= 10 * 1024 * 1024,
        );
        if (valid_files.length !== files.length) {
            notifyError('Some files exceeded 10MB and were skipped.');
        }
        const existing_urls: string[] = this.form()?.value.attachments || [];
        const existing_names: string[] =
            this.form()?.value.p2_document_names || [];
        const new_urls: string[] = [];
        const uploaded_names: string[] = [];
        for (const file of valid_files) {
            const upload_id = await this._uploads
                .uploadFile(file, true)
                .catch(() => '');
            if (!upload_id) continue;
            uploaded_names.push(file.name);
            new_urls.push(
                `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`,
            );
        }
        const names = [...existing_names, ...uploaded_names];
        const urls = [...existing_urls, ...new_urls];
        this.supporting_doc_names.set(names);
        this.form()?.patchValue({
            p2_document_names: names,
            attachments: urls,
        });
        input.value = '';
    }

    public removeSupportingDoc(index: number) {
        const names = [...(this.form()?.value.p2_document_names || [])];
        const urls = [...(this.form()?.value.attachments || [])];
        if (index < 0 || index >= names.length) return;
        names.splice(index, 1);
        if (index < urls.length) urls.splice(index, 1);
        this.supporting_doc_names.set(names);
        this.form()?.patchValue({
            p2_document_names: names,
            attachments: urls,
        });
    }

    public previewSupportingDoc(index: number) {
        const urls = [...(this.form()?.value.attachments || [])];
        const url = urls[index];
        if (!url) return;
        this._dialog.open(FullscreenEmbedComponent, { data: url });
    }

    private _fileNameFromUrl(url: string): string {
        const last_part = `${url || ''}`.split('/').pop() || '';
        return decodeURIComponent(last_part || 'Uploaded file');
    }

    public shiftTime(mins: number): number {
        const raw_date = this.form()?.getRawValue()?.date || Date.now();
        return startOfDay(raw_date).valueOf() + mins * 60 * 1000;
    }

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

    public hasMultipleBuildings(buildings: any[] | null | undefined): boolean {
        const ids = new Set((buildings || []).filter(Boolean).map((_) => _.id));
        return ids.size > 1;
    }

    private _updateFormTimes(start_mins: number, end_mins: number) {
        const form = this.form();
        if (!form) return;
        const raw_date = form.getRawValue().date || Date.now();
        const day = startOfDay(raw_date);
        const new_date = day.valueOf() + start_mins * 60 * 1000;
        const duration =
            end_mins > start_mins
                ? end_mins - start_mins
                : 1440 - start_mins + end_mins;
        const was_disabled = form.controls.date.disabled;
        if (was_disabled) form.controls.date.enable({ emitEvent: false });
        form.patchValue({ date: new_date, duration: Math.max(duration, 30) });
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
        const last_day_of_week = addDays(
            week_start,
            (this.num_weeks() - 1) * 7 + 6,
        );
        form.patchValue({
            recurrence_end: endOfDay(last_day_of_week).valueOf(),
        });
    }

    private _detectShiftType(start: number, end: number) {
        const normalized_end = end > 1440 ? end - 1440 : end;
        for (const option of this.shift_options()) {
            if (
                option.start_time === start &&
                option.end_time === normalized_end
            ) {
                this.shift_type.set(option.id);
                return;
            }
        }
        this.shift_type.set('custom');
    }

    private _defaultCustomShift() {
        const now = new Date();
        const current_mins = now.getHours() * 60 + now.getMinutes();
        const start_time = Math.min(
            (Math.floor(current_mins / 30) + 1) * 30,
            1410,
        );
        return {
            start_time,
            end_time: Math.min(start_time + 120, 1439),
        };
    }

    private _normaliseCustomShift(start_mins: number, end_mins: number) {
        const start_time = Math.max(0, Math.min(start_mins, 1410));
        const end_time = Math.min(Math.max(end_mins, start_time + 30), 1439);
        return { start_time, end_time };
    }

    private _normaliseShiftOptions(
        options: ParkingRequestShiftOption[] | undefined,
    ): ParkingRequestShiftOption[] {
        return (options || [])
            .filter(
                (option) =>
                    !!option?.id &&
                    option.id !== 'custom' &&
                    typeof option.start_time === 'number' &&
                    typeof option.end_time === 'number',
            )
            .map((option) => ({
                id: option.id,
                name: option.name || option.id,
                start_time: option.start_time,
                end_time: option.end_time,
            }));
    }

    private _normaliseOptions(
        options: ParkingRequestOption[] | undefined,
    ): ParkingRequestOption[] {
        return (options || [])
            .filter((option) => !!option?.id)
            .map((option) => ({
                id: option.id,
                name: option.name || option.id,
            }));
    }
}
