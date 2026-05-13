import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
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
import { bookedResourceList, ParkingService } from '@placeos/bookings';
import {
    AsyncHandler,
    currentUser,
    firstTruthyValueFrom,
    getTimeInTimezone,
    notifyError,
    OrganisationService,
    settingSignal,
    SettingsService,
    startOfDayInTimezone,
    UploadsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    DateFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import {
    addDays,
    addMinutes,
    endOfDay,
    getUnixTime,
    startOfDay,
    startOfWeek,
} from 'date-fns';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { combineLatest, of } from 'rxjs';
import { catchError, filter, map, startWith, switchMap } from 'rxjs/operators';
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
    groups?: string[];
}

interface ParkingRequestOption {
    id: string;
    name: string;
}

interface ParkingRequestTimeWindow {
    start_time: number;
    end_time: number;
}

interface ParkingRequestShiftState extends ParkingRequestTimeWindow {
    type: string;
}

interface VehicleTypeOption {
    id: string;
    name: string;
}

type ParkingRequestBookAs = 'internals' | 'externals' | 'both';

interface ParkingRequestTypeConfig {
    id?: string;
    value?: string;
    name?: string;
    label?: string;
    description?: string;
    badge?: string;
    groups?: string[];
    approver_groups?: string[];
    book_as?: ParkingRequestBookAs;
    forced_time?: ParkingRequestTimeWindow;
}

interface ParkingRequestType {
    id: string;
    name: string;
    description?: string;
    badge?: string;
    groups?: string[];
    approver_groups?: string[];
    book_as?: ParkingRequestBookAs;
    forced_time?: ParkingRequestTimeWindow;
}

const CUSTOM_SHIFT_ID = 'custom';
const ALL_DAY_SHIFT_ID = 'all_day';
const ALL_DAY_START_MINS = 0;
const ALL_DAY_END_MINS = 1440;
const DEFAULT_DAY_DURATION_MINS = 540;

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

const DEFAULT_VEHICLE_TYPE_OPTIONS: VehicleTypeOption[] = [
    { id: 'car', name: 'BOOKINGS.PARKING_VEHICLE_CAR' },
    { id: 'bike', name: 'BOOKINGS.PARKING_VEHICLE_BIKE' },
    { id: 'van', name: 'BOOKINGS.PARKING_VEHICLE_VAN' },
    { id: 'truck', name: 'BOOKINGS.PARKING_VEHICLE_TRUCK' },
    { id: 'other', name: 'BOOKINGS.PARKING_VEHICLE_OTHER' },
];

@Component({
    selector: 'parking-request-form-details',
    template: `
        @if (form()) {
            <div class="space-y-4" [formGroup]="form()">
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
                        @for (type of request_types(); track type.id) {
                            <div
                                class="flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
                                [class.border-info]="
                                    form().value.request_type === type.id
                                "
                                [class.border-base-300]="
                                    form().value.request_type !== type.id
                                "
                                (click)="setRequestType(type.id)"
                            >
                                <div
                                    class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
                                    [class.border-info]="
                                        form().value.request_type === type.id
                                    "
                                    [class.border-base-300]="
                                        form().value.request_type !== type.id
                                    "
                                >
                                    @if (
                                        form().value.request_type === type.id
                                    ) {
                                        <div
                                            class="bg-info h-2.5 w-2.5 rounded-full"
                                        ></div>
                                    }
                                </div>
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="font-medium">{{
                                            type.name | translate
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
                    @if (show_host_select()) {
                        <div class="border-base-300 space-y-3 border-t pt-3">
                            <h4 class="text-sm font-medium">
                                {{ 'FORM.HOST' | translate }}
                            </h4>
                            <a-user-search-field
                                formControlName="user"
                                [guests]="
                                    allow_any_host() ||
                                    can_book_for_anyone() &&
                                        host_book_as() !== 'internals'
                                "
                                [guests_only]="
                                    !allow_any_host() &&
                                    can_book_for_anyone() &&
                                        host_book_as() === 'externals'
                                "
                                [disable_search]="
                                    !allow_any_host() &&
                                    can_book_for_anyone() &&
                                        host_book_as() === 'externals'
                                "
                                [allow_externals]="
                                    allow_any_host() ||
                                    can_book_for_anyone() &&
                                        host_book_as() !== 'internals'
                                "
                            ></a-user-search-field>
                        </div>
                    }
                </div>
                @if (
                    form().value.request_type === 'special' &&
                    show_special_needs()
                ) {
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
                    @if (forced_request_time(); as forced_time) {
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label class="mb-1 block text-sm font-medium">
                                    {{
                                        'BOOKINGS.PARKING_START_TIME'
                                            | translate
                                    }}
                                </label>
                                <div
                                    class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                                >
                                    {{
                                        shiftTime(forced_time.start_time)
                                            | date: time_format
                                    }}
                                </div>
                            </div>
                            <div>
                                <label class="mb-1 block text-sm font-medium">
                                    {{
                                        'BOOKINGS.PARKING_END_TIME' | translate
                                    }}
                                </label>
                                <div
                                    class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                                >
                                    {{
                                        shiftTime(forced_time.end_time)
                                            | date: time_format
                                    }}
                                </div>
                            </div>
                        </div>
                    } @else if (is_all_day_forced()) {
                        <div
                            class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                        >
                            {{ 'BOOKINGS.PARKING_SHIFT_ALL_DAY' | translate }}
                        </div>
                    } @else {
                        <div class="space-y-3">
                            <div>
                                @if (show_shift_select()) {
                                    <label
                                        class="mb-1 block text-sm font-medium"
                                    >
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
                                                    {{
                                                        option.name | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            option.start_time
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            option.end_time
                                                        ) | date: time_format
                                                    }})
                                                } @else {
                                                    {{
                                                        'BOOKINGS.PARKING_SHIFT_CUSTOM'
                                                            | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            start_time_mins()
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            end_time_mins()
                                                        ) | date: time_format
                                                    }})
                                                }
                                            </mat-select-trigger>
                                            @for (
                                                option of shift_options();
                                                track option.id
                                            ) {
                                                <mat-option [value]="option.id">
                                                    {{
                                                        option.name | translate
                                                    }}
                                                    ({{
                                                        shiftTime(
                                                            option.start_time
                                                        ) | date: time_format
                                                    }}
                                                    -
                                                    {{
                                                        shiftTime(
                                                            option.end_time
                                                        ) | date: time_format
                                                    }})
                                                </mat-option>
                                            }
                                            @if (allow_custom_shift()) {
                                                <mat-option
                                                    [value]="CUSTOM_SHIFT_ID"
                                                >
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
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                } @else if (
                                    selected_shift_option();
                                    as option
                                ) {
                                    <label
                                        class="mb-1 block text-sm font-medium"
                                    >
                                        {{
                                            'BOOKINGS.PARKING_SHIFT_TYPE'
                                                | translate
                                        }}
                                    </label>
                                    <div
                                        class="border-base-300 bg-base-200 rounded-lg border px-4 py-3"
                                    >
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
                                    </div>
                                }
                            </div>
                            @if (show_custom_time_inputs()) {
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
                                                                | date
                                                                    : time_format
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
                                                                | date
                                                                    : time_format
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            }
                        </div>
                    }
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
                                    class="flex min-h-15 cursor-pointer items-center gap-3 rounded-lg border px-4 py-2 transition-colors"
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
                                    <div
                                        class="flex flex-1 items-center justify-between gap-3"
                                    >
                                        <div>
                                            <div class="font-medium">
                                                {{
                                                    bld.display_name || bld.name
                                                }}
                                            </div>
                                            @if (getBayInfo(bld)) {
                                                <div class="text-sm opacity-60">
                                                    {{ getBayInfo(bld) }}
                                                </div>
                                            }
                                        </div>
                                        @if (
                                            (building | async)?.id === bld.id
                                        ) {
                                            <div
                                                class="border-base-300 flex shrink-0 items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                                            >
                                                @if (availability_loading()) {
                                                    <div
                                                        class="text-sm font-medium opacity-60"
                                                    >
                                                        Checking...
                                                    </div>
                                                } @else if (
                                                    available_space_count() !==
                                                    null
                                                ) {
                                                    @let percent =
                                                        usage_ratio();
                                                    <div
                                                        class="flex items-center"
                                                    >
                                                        {{
                                                            spaces_in_use_count()
                                                        }}
                                                        of
                                                        {{
                                                            total_space_count()
                                                        }}
                                                        <icon
                                                            class="ml-1! text-lg"
                                                            >car_lock</icon
                                                        >
                                                    </div>
                                                    <div
                                                        class="rounded-sm px-2 py-1 font-mono text-xs"
                                                        [class.bg-error]="
                                                            percent === 1
                                                        "
                                                        [class.text-error-content]="
                                                            percent === 1
                                                        "
                                                        [class.bg-warning]="
                                                            percent > 0.5 &&
                                                            percent < 1
                                                        "
                                                        [class.text-warning-content]="
                                                            percent > 0.5 &&
                                                            percent < 1
                                                        "
                                                        [class.bg-success]="
                                                            percent < 0.5
                                                        "
                                                        [class.text-success-content]="
                                                            percent < 0.5
                                                        "
                                                    >
                                                        {{
                                                            percent * 100
                                                                | number
                                                                    : '1.0-0'
                                                        }}%
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                        @if (!hide_prefer_toggle()) {
                            <settings-toggle
                                formControlName="prefer_booked_location_first"
                            >
                                {{
                                    'BOOKINGS.PARKING_PREFER_BOOKED_LOCATION_FIRST'
                                        | translate
                                }}
                            </settings-toggle>
                        }
                    </div>
                } @else {
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
                        <div class="flex items-center justify-between gap-3">
                            <div>
                                <div class="font-medium">
                                    {{
                                        (building | async)?.display_name ||
                                            (building | async)?.name
                                    }}
                                </div>
                                @if (getBayInfo(building | async)) {
                                    <div class="text-sm opacity-60">
                                        {{ getBayInfo(building | async) }}
                                    </div>
                                }
                            </div>
                            <div
                                class="border-base-300 mr-2 flex shrink-0 items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                            >
                                @if (availability_loading()) {
                                    <div class="text-sm font-medium opacity-60">
                                        Checking...
                                    </div>
                                } @else if (available_space_count() !== null) {
                                    @let percent = usage_ratio();
                                    <div class="flex items-center">
                                        {{ spaces_in_use_count() }} of
                                        {{ total_space_count() }}
                                        <icon class="ml-1! text-lg"
                                            >car_lock</icon
                                        >
                                    </div>
                                    <div
                                        class="rounded-sm px-2 py-1 font-mono text-xs"
                                        [class.bg-error]="percent === 1"
                                        [class.text-error-content]="
                                            percent === 1
                                        "
                                        [class.bg-warning]="
                                            percent > 0.5 && percent < 1
                                        "
                                        [class.text-warning-content]="
                                            percent > 0.5 && percent < 1
                                        "
                                        [class.bg-success]="percent < 0.5"
                                        [class.text-success-content]="
                                            percent < 0.5
                                        "
                                    >
                                        {{ percent * 100 | number: '2.0-0' }}%
                                    </div>
                                }
                            </div>
                        </div>
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
                                    @for (
                                        vtype of vehicle_type_options();
                                        track vtype.id
                                    ) {
                                        <mat-option [value]="vtype.id">{{
                                            vtype.name | translate
                                        }}</mat-option>
                                    }
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
                @if (
                    filtered_approver_group_options().length &&
                    !is_auto_approved()
                ) {
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
                                @for (
                                    option of filtered_approver_group_options();
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
                @if (
                    space_restriction_options().length ||
                    extra_space_restriction_options().length
                ) {
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
                    <div class="space-y-3 p-4">
                        <p class="text-sm opacity-60">
                            {{
                                'BOOKINGS.PARKING_SPACE_RESTRICTIONS_DESC'
                                    | translate
                            }}
                        </p>
                        @if (space_restriction_options().length) {
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    [value]="selected_space_restriction()"
                                    (selectionChange)="
                                        setSpaceRestriction($event.value)
                                    "
                                >
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
                        }
                        @if (extra_space_restriction_options().length) {
                            <div class="flex flex-col gap-2">
                                @for (
                                    option of extra_space_restriction_options();
                                    track option.id
                                ) {
                                    <settings-toggle
                                        [name]="option.name | translate"
                                        [toggle]="true"
                                        [ngModel]="
                                            isExtraRestrictionSelected(
                                                option.id
                                            )
                                        "
                                        (ngModelChange)="
                                            setExtraRestriction(
                                                option.id,
                                                $event
                                            )
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></settings-toggle>
                                }
                            </div>
                        }
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
        UserSearchFieldComponent,
        SettingsToggleComponent,
        MatRippleModule,
    ],
})
export class ParkingRequestFormDetailsComponent
    extends AsyncHandler
    implements OnInit
{
    private _prefilled_plate_number = '';
    private _parking = inject(ParkingService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _uploads = inject(UploadsService);
    private _dialog = inject(MatDialog);
    private _saved_shift_state: ParkingRequestShiftState | null = null;
    /**
     * Set to `true` once the user has explicitly chosen a shift via the
     * dropdown / custom inputs / request type. While this is `false` the
     * preferred shift is re-applied whenever the available shift options
     * change (e.g. when settings load asynchronously after the form opens).
     */
    private _user_selected_shift = false;

    constructor() {
        super();
        // Re-resolve the preferred shift whenever the configured shift
        // options change. Settings are loaded asynchronously from PlaceOS
        // metadata, so on first open the form often initialises with no
        // presets and falls through to "custom + booking-form defaults".
        // When the real options arrive we want to snap onto the first
        // preset (or all-day, etc.) without waiting for the user to touch
        // the dropdown.
        effect(() => {
            // Track the dependencies that should re-trigger this.
            this.shift_options();
            this.allow_custom_shift();
            const form = this.form();
            if (!form) return;
            if (this._user_selected_shift) return;
            if (this.forced_request_time()) return;
            this._applyPreferredShift();
        });
    }

    public readonly form = input<FormGroup>(undefined);
    public readonly show_special_needs = input<boolean>(true);
    public readonly force_show_host_select = input<boolean>(false);
    public readonly force_allow_any_host = input<boolean>(false);
    public readonly building = this._org.active_building;
    public readonly building_list = this._org.active_buildings;
    public readonly available_space_count = signal<number | null>(null);
    public readonly total_space_count = signal<number | null>(null);
    public readonly availability_loading = signal(false);
    public readonly spaces_in_use_count = computed(() => {
        const available = this.available_space_count();
        const total = this.total_space_count();
        if (available === null || total === null) return null;
        return Math.max(total - available, 0);
    });
    public readonly usage_percentage = computed(() => {
        const used = this.spaces_in_use_count();
        const total = this.total_space_count();
        if (used === null || total === null || total <= 0) return 0;
        return Math.round((used / total) * 100);
    });
    public readonly usage_ratio = computed(() => {
        const used = this.spaces_in_use_count();
        const total = this.total_space_count();
        if (used === null || total === null || total <= 0) return 0;
        return used / total;
    });

    public readonly can_book_for_anyone = computed(
        () =>
            settingSignal('parking.can_book_for_anyone')() ??
            settingSignal('bookings.can_book_for_anyone')(),
    );

    public readonly can_book_for_others = computed(
        () =>
            settingSignal('parking.can_book_for_others')() ??
            settingSignal('bookings.can_book_for_others')(),
    );

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
    public readonly hide_custom_shift = settingSignal<boolean>(
        'parking.hide_custom_shift',
        false,
    );
    public readonly space_restriction_options_setting = settingSignal<
        ParkingRequestOption[]
    >('parking.request_space_restrictions', []);
    public readonly extra_space_restriction_options_setting = settingSignal<
        ParkingRequestOption[]
    >('parking.extra_space_restrictions', []);
    public readonly approver_groups_setting = settingSignal<
        ParkingRequestOption[]
    >('parking.approver_groups', []);
    public readonly vehicle_type_options_setting = settingSignal<
        VehicleTypeOption[]
    >('parking.vehicle_types', DEFAULT_VEHICLE_TYPE_OPTIONS);
    public readonly hide_prefer_toggle = settingSignal<boolean>(
        'parking.hide_prefer_toggle',
        false,
    );
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
    public readonly CUSTOM_SHIFT_ID = CUSTOM_SHIFT_ID;
    public readonly shift_type = signal<string>(CUSTOM_SHIFT_ID);
    public readonly start_time_mins = signal<number>(480);
    public readonly end_time_mins = signal<number>(1020);
    public readonly supporting_doc_names = signal<string[]>([]);
    public readonly custom_start_time_mins = signal<number>(480);
    public readonly custom_end_time_mins = signal<number>(600);
    public readonly shift_options = computed(() => {
        const user_groups = currentUser()?.groups || [];
        return this._normaliseShiftOptions(this.shift_options_setting()).filter(
            (option) => {
                if (option.groups?.length) {
                    return option.groups.some((group) =>
                        user_groups.includes(group),
                    );
                }
                return true;
            },
        );
    });
    public readonly selected_shift_option = computed(() =>
        this.shift_options().find((_) => _.id === this.shift_type()),
    );
    public readonly has_preset_shifts = computed(
        () => this.shift_options().length > 0,
    );
    public readonly allow_custom_shift = computed(
        () => !this.hide_custom_shift(),
    );
    /**
     * True when no preset shifts are configured and custom shifts are
     * disabled — the form must fall back to a single all-day window.
     */
    public readonly is_all_day_forced = computed(
        () => !this.has_preset_shifts() && !this.allow_custom_shift(),
    );
    public readonly show_shift_select = computed(() => {
        if (this.is_all_day_forced()) return false;
        const preset_count = this.shift_options().length;
        const custom_count = this.allow_custom_shift() ? 1 : 0;
        return preset_count + custom_count > 1;
    });
    public readonly show_custom_time_inputs = computed(
        () =>
            this.shift_type() === CUSTOM_SHIFT_ID && this.allow_custom_shift(),
    );
    public readonly vehicle_type_options = computed(() =>
        this._normaliseOptions(this.vehicle_type_options_setting()),
    );
    public readonly space_restriction_options = computed(() =>
        this._normaliseOptions(this.space_restriction_options_setting()),
    );
    public readonly extra_space_restriction_options = computed(() =>
        this._normaliseOptions(this.extra_space_restriction_options_setting()),
    );
    public readonly selected_request_type_id = signal<string>('standard');
    public readonly selected_request_type = computed(() =>
        this.request_types().find(
            (_) => _.id === this.selected_request_type_id(),
        ),
    );
    public readonly forced_request_time = computed(
        () => this.selected_request_type()?.forced_time || null,
    );
    public readonly host_book_as = computed<ParkingRequestBookAs | null>(() => {
        const book_as = this.selected_request_type()?.book_as;
        return book_as === 'internals' ||
            book_as === 'externals' ||
            book_as === 'both'
            ? book_as
            : null;
    });
    public readonly show_host_select = computed(
        () =>
            !!this.force_show_host_select() ||
            (this.can_book_for_anyone() && !!this.host_book_as()),
    );
    public readonly allow_any_host = computed(
        () => !!this.force_allow_any_host() && !!this.can_book_for_anyone(),
    );
    public readonly approver_group_options = computed(() =>
        this._normaliseOptions(this.approver_groups_setting()),
    );
    public readonly filtered_approver_group_options = computed(() => {
        const all_options = this.approver_group_options();
        const allowed_ids = this.selected_request_type()?.approver_groups;
        if (!allowed_ids?.length) return all_options;
        return all_options.filter((_) => allowed_ids.includes(_.id));
    });
    public readonly selected_space_restriction = computed(() => {
        const value = this.form()?.getRawValue()?.space_restrictions;
        if (typeof value === 'string' && value) return value;
        return this.space_restriction_options()[0]?.id || '';
    });

    public readonly WEEKDAY_OPTIONS = [1, 2, 3, 4, 5, 6, 7].map((index) => ({
        index,
        date: addDays(startOfWeek(Date.now(), { weekStartsOn: 1 }), index - 1),
    }));

    private readonly _default_request_types: ParkingRequestType[] = [
        {
            id: 'standard',
            name: 'BOOKINGS.PARKING_REQUEST_STANDARD_TITLE',
            description: 'BOOKINGS.PARKING_REQUEST_STANDARD_DESC',
            book_as: 'internals',
        },
        {
            id: 'special',
            name: 'BOOKINGS.PARKING_REQUEST_SPECIAL_TITLE',
            description: 'BOOKINGS.PARKING_REQUEST_SPECIAL_DESC',
            badge: 'BOOKINGS.PARKING_REQUIRES_APPROVAL',
        },
        {
            id: 'after_hours',
            name: 'BOOKINGS.PARKING_REQUEST_AFTER_HOURS_TITLE',
            description: 'BOOKINGS.PARKING_REQUEST_AFTER_HOURS_DESC',
            badge: 'BOOKINGS.PARKING_REQUIRES_APPROVAL',
            book_as: 'externals',
        },
    ];

    public readonly request_types_setting = settingSignal<
        ParkingRequestTypeConfig[]
    >('parking.request_types', null);

    public readonly request_types = computed(() => {
        const custom_types = this._normaliseRequestTypes(
            this.request_types_setting(),
        );
        const all_types =
            custom_types?.length > 0
                ? custom_types
                : this._default_request_types;
        const user_groups = currentUser()?.groups || [];
        return all_types.filter((t) => {
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
        return this._computeRecurrenceDates();
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

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        const form = this.form();
        if (!form) return;
        this.supporting_doc_names.set(
            form.value.p2_document_names ||
                (form.value.attachments || []).map((url) =>
                    this._fileNameFromUrl(url),
                ),
        );
        this.subscription(
            'space_availability',
            combineLatest([
                this._org.active_building,
                this._parking.spaces,
                form.valueChanges.pipe(startWith(form.getRawValue())),
            ])
                .pipe(
                    filter(([bld]) => !!bld?.id),
                    switchMap(([bld, spaces, value]) => {
                        const space_ids = new Set(
                            spaces
                                .filter((space) => space.bookable !== false)
                                .map((space) => space.id),
                        );
                        this.total_space_count.set(space_ids.size);
                        if (!space_ids.size) return of(0);
                        const start_date = value.date || Date.now();
                        const duration = value.duration || 540;
                        this.availability_loading.set(true);
                        return bookedResourceList({
                            period_start: getUnixTime(start_date),
                            period_end: getUnixTime(
                                addMinutes(start_date, duration),
                            ),
                            type: 'parking',
                            zones: bld.id,
                            rejected: false,
                        }).pipe(
                            map((booked_assets) => {
                                const booked_ids = new Set(
                                    booked_assets.filter((id) =>
                                        space_ids.has(id),
                                    ),
                                );
                                return [...space_ids].filter(
                                    (id) => !booked_ids.has(id),
                                ).length;
                            }),
                            catchError(() => of(0)),
                        );
                    }),
                )
                .subscribe((count) => {
                    this.available_space_count.set(count);
                    this.availability_loading.set(false);
                }),
        );
        this._initShiftStateFromForm(form);
        if (form.value.request_type) {
            this.selected_request_type_id.set(form.value.request_type);
        }
        this._syncRequestTypeTime(form);
        this._syncRequestTypeUser(form);
        this._syncPrefilledPlateNumber(form);
        this._syncPlateNumberUser(form);
        if (
            this.filtered_approver_group_options().length &&
            !this.is_auto_approved()
        ) {
            const current = form.value.approver_group;
            if (
                !current ||
                !this.filtered_approver_group_options().find(
                    (_) => _.id === current,
                )
            ) {
                form.patchValue({
                    approver_group:
                        this.filtered_approver_group_options()[0].id,
                });
            }
        }
        if (this.space_restriction_options().length) {
            const current = form.value.space_restrictions;
            if (
                !current ||
                current === true ||
                (typeof current === 'string' &&
                    !this.space_restriction_options().find(
                        (_) => _.id === current,
                    ))
            ) {
                this.setSpaceRestriction(
                    this.space_restriction_options()[0].id,
                );
            }
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
            const raw_date = form.getRawValue().date;
            if (form.value.recurrence_end && raw_date) {
                const recurrence_end =
                    form.value.recurrence_end < 1e12
                        ? form.value.recurrence_end * 1000
                        : form.value.recurrence_end;
                const reference = startOfDay(raw_date);
                const ref_dow =
                    reference.getDay() === 0 ? 7 : reference.getDay();
                const selected = [...this.selected_days()];
                const max_offset_days = selected.length
                    ? Math.max(...selected.map((d) => (d - ref_dow + 7) % 7))
                    : 0;
                const day_ms = 24 * 60 * 60 * 1000;
                const diff_days = Math.floor(
                    (startOfDay(recurrence_end).valueOf() -
                        reference.valueOf()) /
                        day_ms,
                );
                const weeks = Math.max(
                    1,
                    Math.floor((diff_days - max_offset_days) / 7) + 1,
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
        this._updateRecurrenceEnd();
    }

    public setNumWeeks(weeks: number) {
        this.num_weeks.set(weeks);
        this._updateRecurrenceEnd();
    }

    public setRequestType(type_id: string) {
        this.selected_request_type_id.set(type_id);
        const form = this.form();
        if (!form) return;
        form.patchValue({ request_type: type_id });
        this._syncRequestTypeTime(form);
        this._syncRequestTypeUser(form);
        const options = this.filtered_approver_group_options();
        if (options.length && !this.is_auto_approved()) {
            const current = form.value.approver_group;
            if (!current || !options.find((_) => _.id === current)) {
                form.patchValue({ approver_group: options[0].id });
            }
        }
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
            form.patchValue({
                recurrence_type: 'daily',
                recurrence_interval: 1,
                recurrence_days: this._computeDaysBitmask(),
            });
            this._updateRecurrenceEnd();
        }
    }

    /**
     * Public entry point for shift selection — wired to the dropdown
     * `(selectionChange)` handler. Marks the shift as user-chosen so the
     * settings-load effect won't override it.
     */
    public setShiftType(type: string) {
        this._user_selected_shift = true;
        this._applyShift(type);
    }

    /**
     * Internal shift application — used by auto-init paths
     * (`_applyPreferredShift`, `_restoreShiftState`, etc.) that should not
     * count as a user selection.
     */
    private _applyShift(type: string) {
        if (type === ALL_DAY_SHIFT_ID) {
            this.shift_type.set(ALL_DAY_SHIFT_ID);
            this.start_time_mins.set(ALL_DAY_START_MINS);
            this.end_time_mins.set(ALL_DAY_END_MINS);
            this._updateFormTimes(ALL_DAY_START_MINS, ALL_DAY_END_MINS);
            return;
        }
        if (type === CUSTOM_SHIFT_ID) {
            this.shift_type.set(CUSTOM_SHIFT_ID);
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
        if (!preset) return;
        this.shift_type.set(type);
        this.start_time_mins.set(preset.start_time);
        this.end_time_mins.set(preset.end_time);
        this._updateFormTimes(preset.start_time, preset.end_time);
    }

    public setStartTime(mins: number) {
        this._user_selected_shift = true;
        this._applyCustomShift(mins, this.end_time_mins());
    }

    public setEndTime(mins: number) {
        this._user_selected_shift = true;
        this._applyCustomShift(this.start_time_mins(), mins);
    }

    private _applyCustomShift(start_mins: number, end_mins: number) {
        const { start_time, end_time } = this._normaliseCustomShift(
            start_mins,
            end_mins,
        );
        this.start_time_mins.set(start_time);
        this.end_time_mins.set(end_time);
        this.custom_start_time_mins.set(start_time);
        this.custom_end_time_mins.set(end_time);
        this.shift_type.set(CUSTOM_SHIFT_ID);
        this._updateFormTimes(start_time, end_time);
    }

    public setSpaceRestriction(value: string) {
        const form = this.form();
        if (!form) return;
        form.patchValue({
            space_restrictions: value || false,
        });
    }

    public isExtraRestrictionSelected(id: string): boolean {
        const form = this.form();
        const value = form?.getRawValue()?.extra_space_restrictions;
        return Array.isArray(value) && value.includes(id);
    }

    public setExtraRestriction(id: string, enabled: boolean) {
        const form = this.form();
        if (!form) return;
        const current = form.getRawValue()?.extra_space_restrictions;
        const list = Array.isArray(current) ? [...current] : [];
        const index = list.indexOf(id);
        if (enabled && index === -1) list.push(id);
        if (!enabled && index !== -1) list.splice(index, 1);
        form.patchValue({ extra_space_restrictions: list });
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
        const tz = this.timezone;
        return startOfDayInTimezone(raw_date, tz) + mins * 60 * 1000;
    }

    public getBayInfo(bld: any): string {
        if (!bld) return '';
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
        const tz = this.timezone;
        const day = startOfDayInTimezone(raw_date, tz);
        let new_date = day + start_mins * 60 * 1000;
        const duration =
            end_mins > start_mins
                ? end_mins - start_mins
                : 1440 - start_mins + end_mins;
        const safe_duration = Math.max(duration, 30);
        // If the chosen shift would end in the past on this day, roll
        // forward by whole days until the window ends in the future, so the
        // `endInFuture` validator on `duration` passes. Only applied to new
        // bookings — existing ones may legitimately represent past windows.
        if (!form.value.id) {
            while (new_date + safe_duration * 60 * 1000 <= Date.now()) {
                new_date = addDays(new_date, 1).valueOf();
            }
        }
        const was_disabled = form.controls.date.disabled;
        if (was_disabled) form.controls.date.enable({ emitEvent: false });
        // Clear `all_day` first so the booking-form time sync doesn't
        // bail out of its date/duration handlers (which short-circuit when
        // `all_day` is set) and so `postForm` doesn't substitute the
        // building's all-day period for the shift window we're about to
        // write. The parking shift _is_ the time window — it must win.
        if (form.controls.all_day) {
            form.controls.all_day.patchValue(false, { emitEvent: false });
        }
        // Patch `date` silently so the generic booking-form time sync does
        // not snap shift start times earlier in the day back to `now` or
        // realign them to bookable hours — the shift select must
        // authoritatively set the form's start time and duration.
        form.controls.date.patchValue(new_date, { emitEvent: false });
        if (form.controls.date_end) {
            form.controls.date_end.patchValue(
                new_date + safe_duration * 60 * 1000,
                {
                    emitEvent: false,
                },
            );
        }
        // Patch `duration` loudly so downstream subscriptions (availability,
        // asset lookups, etc.) see the updated window.
        form.controls.duration.patchValue(safe_duration);
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
        const dates = this._computeRecurrenceDates();
        if (!dates.length) return;
        form.patchValue({
            recurrence_end: getUnixTime(endOfDay(dates[dates.length - 1])),
        });
    }

    private _computeRecurrenceDates(): number[] {
        const form = this.form();
        if (!form) return [];
        const raw_date = form.getRawValue()?.date || Date.now();
        const reference = startOfDay(raw_date);
        const ref_dow = reference.getDay() === 0 ? 7 : reference.getDay();
        const selected = [...this.selected_days()].sort((a, b) => a - b);
        const weeks = Math.max(1, this.num_weeks());
        const dates: number[] = [];
        for (const day of selected) {
            const offset = (day - ref_dow + 7) % 7;
            for (let w = 0; w < weeks; w++) {
                dates.push(addDays(reference, offset + w * 7).valueOf());
            }
        }
        return dates.sort((a, b) => a - b);
    }

    private _defaultCustomShift() {
        const tz = this.timezone;
        const { hours, minutes } = getTimeInTimezone(
            Date.now(),
            tz || undefined,
        );
        const current_mins = hours * 60 + minutes;
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
                    option.id !== CUSTOM_SHIFT_ID &&
                    option.id !== ALL_DAY_SHIFT_ID &&
                    typeof option.start_time === 'number' &&
                    typeof option.end_time === 'number',
            )
            .map((option) => ({
                id: option.id,
                name: option.name || option.id,
                start_time: option.start_time,
                end_time: option.end_time,
                groups: option.groups?.filter((group) => !!group),
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

    private _normaliseRequestTypes(
        request_types: ParkingRequestTypeConfig[] | undefined,
    ): ParkingRequestType[] {
        return ((request_types || [])
            .map((type) => {
                const id = type?.id || type?.value;
                if (!id) return null;
                const forced_time =
                    typeof type.forced_time?.start_time === 'number' &&
                    typeof type.forced_time?.end_time === 'number'
                        ? this._normaliseCustomShift(
                              type.forced_time.start_time,
                              type.forced_time.end_time,
                          )
                        : undefined;
                return {
                    id,
                    name: type.name || type.label || id,
                    description: type.description,
                    badge: type.badge,
                    groups: type.groups?.filter((group) => !!group),
                    approver_groups: type.approver_groups?.filter(
                        (group) => !!group,
                    ),
                    book_as:
                        type.book_as === 'internals' ||
                        type.book_as === 'externals' ||
                        type.book_as === 'both'
                            ? type.book_as
                            : undefined,
                    forced_time,
                };
            })
            .filter((type) => !!type) || []) as ParkingRequestType[];
    }

    /**
     * Seed the shift state from the form's current date/duration and then
     * pick the preferred shift for the active configuration. Called once
     * on initialisation.
     */
    private _initShiftStateFromForm(form: FormGroup) {
        const default_custom_shift = this._defaultCustomShift();
        this.custom_start_time_mins.set(default_custom_shift.start_time);
        this.custom_end_time_mins.set(default_custom_shift.end_time);
        const date = form.getRawValue().date;
        if (date) {
            const { hours, minutes } = getTimeInTimezone(
                date,
                this.timezone || undefined,
            );
            const start = hours * 60 + minutes;
            const duration = form.value.duration || DEFAULT_DAY_DURATION_MINS;
            this.start_time_mins.set(start);
            this.end_time_mins.set(start + duration);
            const { start_time, end_time } = this._normaliseCustomShift(
                start,
                start + duration,
            );
            this.custom_start_time_mins.set(start_time);
            this.custom_end_time_mins.set(end_time);
        } else {
            this.start_time_mins.set(default_custom_shift.start_time);
            this.end_time_mins.set(default_custom_shift.end_time);
        }
        this._applyPreferredShift();
    }

    /**
     * Pick and apply the best shift for the active configuration. The
     * resolution order matches the user-facing rules:
     *
     * 1. No presets and no custom → force all-day.
     * 2. Presets exist → prefer a preset matching the current start/end
     *    times, otherwise default to the first preset. Custom is only
     *    reached via an explicit user action against the dropdown — auto
     *    initialisation must always land on a preset when one is offered.
     * 3. No presets but custom is allowed → custom.
     */
    private _applyPreferredShift() {
        if (this.is_all_day_forced()) {
            this._applyShift(ALL_DAY_SHIFT_ID);
            return;
        }
        if (this.has_preset_shifts()) {
            const matching_preset = this.shift_options().find((_) =>
                this._matchesShiftOption(
                    _,
                    this.start_time_mins(),
                    this.end_time_mins(),
                ),
            );
            this._applyShift((matching_preset || this.shift_options()[0]).id);
            return;
        }
        // No presets — custom is allowed (otherwise is_all_day_forced).
        this._applyShift(CUSTOM_SHIFT_ID);
    }

    private _syncRequestTypeTime(form: FormGroup) {
        const forced_time = this.forced_request_time();
        if (forced_time) {
            if (!this._saved_shift_state) {
                this._saved_shift_state = {
                    type: this.shift_type(),
                    start_time: this.start_time_mins(),
                    end_time: this.end_time_mins(),
                };
            }
            this.custom_start_time_mins.set(forced_time.start_time);
            this.custom_end_time_mins.set(forced_time.end_time);
            this.start_time_mins.set(forced_time.start_time);
            this.end_time_mins.set(forced_time.end_time);
            this.shift_type.set(CUSTOM_SHIFT_ID);
            this._updateFormTimes(forced_time.start_time, forced_time.end_time);
            return;
        }
        if (this._saved_shift_state) {
            const saved_shift = this._saved_shift_state;
            this._saved_shift_state = null;
            this._restoreShiftState(saved_shift);
            return;
        }
        this._applyPreferredShift();
    }

    private _restoreShiftState(shift: ParkingRequestShiftState) {
        if (this.is_all_day_forced()) {
            this._applyShift(ALL_DAY_SHIFT_ID);
            return;
        }
        // Prefer a preset that matches the saved shift by id or by times.
        const preset =
            (shift.type !== CUSTOM_SHIFT_ID &&
                this.shift_options().find((_) => _.id === shift.type)) ||
            this.shift_options().find((_) =>
                this._matchesShiftOption(_, shift.start_time, shift.end_time),
            );
        if (preset) {
            this._applyShift(preset.id);
            return;
        }
        // No preset match — restore as custom if allowed, else fall back.
        if (!this.allow_custom_shift()) {
            this._applyShift(this.shift_options()[0].id);
            return;
        }
        const { start_time, end_time } = this._normaliseCustomShift(
            shift.start_time,
            shift.end_time,
        );
        this.custom_start_time_mins.set(start_time);
        this.custom_end_time_mins.set(end_time);
        this._applyShift(CUSTOM_SHIFT_ID);
    }

    private _matchesShiftOption(
        option: ParkingRequestShiftOption,
        start_time: number,
        end_time: number,
    ) {
        return (
            option.start_time === start_time &&
            this._shiftDuration(option.start_time, option.end_time) ===
                this._shiftDuration(start_time, end_time)
        );
    }

    private _shiftDuration(start_time: number, end_time: number) {
        return end_time > start_time
            ? end_time - start_time
            : 1440 - start_time + end_time;
    }

    private _syncRequestTypeUser(form: FormGroup) {
        const current_user = currentUser();
        const selected_user = form.getRawValue().user;
        if (this.allow_any_host()) return;
        if (!this.can_book_for_anyone() || !this.host_book_as()) {
            if (this.force_show_host_select()) {
                if (selected_user?.is_external) {
                    form.patchValue({ user: current_user || null });
                }
                return;
            }
            if (current_user && selected_user?.email !== current_user.email) {
                form.patchValue({ user: current_user });
            }
            return;
        }
        if (
            this.host_book_as() === 'externals' &&
            !selected_user?.is_external
        ) {
            form.patchValue({ user: null });
            return;
        }
        if (this.host_book_as() === 'internals' && selected_user?.is_external) {
            form.patchValue({ user: current_user || null });
        }
    }

    private _syncPrefilledPlateNumber(form: FormGroup) {
        this.subscription(
            'prefilled_plate_number',
            form.controls.plate_number.valueChanges
                .pipe(startWith(form.getRawValue().plate_number))
                .subscribe((plate_number) => {
                    if (this._prefilled_plate_number) return;
                    if (
                        this._userEmail(form.getRawValue().user) !==
                        this._userEmail(currentUser())
                    ) {
                        return;
                    }
                    if (!plate_number) return;
                    this._prefilled_plate_number = plate_number;
                }),
        );
    }

    private _syncPlateNumberUser(form: FormGroup) {
        let previous_email = this._userEmail(form.getRawValue().user);
        this.subscription(
            'plate_number_user',
            form.controls.user.valueChanges.subscribe((selected_user) => {
                const current_email = this._userEmail(currentUser());
                const selected_email = this._userEmail(selected_user);
                const user_changed = selected_email !== previous_email;
                previous_email = selected_email;
                if (!user_changed || !current_email || !selected_email) return;
                if (selected_email === current_email) {
                    if (
                        this._prefilled_plate_number &&
                        form.getRawValue().plate_number !==
                            this._prefilled_plate_number
                    ) {
                        form.patchValue({
                            plate_number: this._prefilled_plate_number,
                        });
                    }
                    return;
                }
                if (!form.getRawValue().plate_number) return;
                form.patchValue({ plate_number: '' });
            }),
        );
    }

    private _userEmail(user: { email?: string } | null | undefined): string {
        return user?.email?.trim().toLowerCase() || '';
    }
}
