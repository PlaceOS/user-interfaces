import {
    Component,
    OnChanges,
    SimpleChanges,
    inject,
    input,
    output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BookingFormService } from '@placeos/bookings';
import {
    AsyncHandler,
    BookingRecurrence,
    SettingsService,
} from '@placeos/common';
import { RecurrenceDetails } from '@placeos/events';
import { Desk, OrganisationService } from '@placeos/organisation';
import { addDays, endOfDay, set } from 'date-fns';

@Component({
    selector: 'desk-form-details',
    styles: [],
    template: `
        <!-- <div class="m-2 bg-warning p-2 text-center rounded shadow text-sm">
        The selected desk hasn't been booked. Please book the desk to be
        able to check-in.
        </div> -->
        @if (form()) {
            <div
                class="space-y-2 divide-y divide-base-200"
                [formGroup]="form()"
            >
                @if (allow_groups) {
                    <section class="flex items-center">
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="!(options | async)?.group"
                            (click)="setOptions({ group: false, members: [] })"
                        >
                            <icon class="text-2xl">person</icon>
                            <div class="">
                                {{ 'BOOKINGS.DESK_LONE' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 !m-0 h-1"
                                [class.bg-base-200]="(options | async)?.group"
                                [class.bg-secondary]="!(options | async)?.group"
                            ></div>
                        </button>
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="(options | async)?.group"
                            (click)="setOptions({ group: true })"
                        >
                            <icon class="text-2xl">group_add</icon>
                            <div class="">
                                {{ 'BOOKINGS.DESK_GROUP' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 !m-0 h-1"
                                [class.bg-base-200]="!(options | async)?.group"
                                [class.bg-secondary]="(options | async)?.group"
                            ></div>
                        </button>
                    </section>
                }
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
                    @if (can_book_for_others && !(options | async)?.group) {
                        <div class="w-full">
                            <label for="title">{{
                                'FORM.HOST' | translate
                            }}</label>
                            <a-user-search-field
                                formControlName="user"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex flex-wrap items-center sm:space-x-2">
                        <div class="min-w-[256px] flex-1">
                            <label for="title"
                                >{{ 'FORM.TITLE' | translate
                                }}<span>*</span></label
                            >
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    name="title"
                                    formControlName="title"
                                    [placeholder]="
                                        'BOOKINGS.DESK_TITLE_PLACEHOLDER'
                                            | translate
                                    "
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
                    @if (!form().value.all_day && allow_time_changes) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <label for="start-time">
                                    {{ 'FORM.TIME_START' | translate
                                    }}<span>*</span>
                                </label>
                                <a-time-field
                                    name="start-time"
                                    [ngModel]="form().value.date"
                                    (ngModelChange)="
                                        form().patchValue({ date: $event })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                ></a-time-field>
                            </div>
                            <div class="w-1/3 flex-1">
                                <label for="end-time">
                                    {{ 'FORM.TIME_END' | translate
                                    }}<span>*</span>
                                </label>
                                <a-duration-field
                                    name="end-time"
                                    formControlName="duration"
                                    [time]="form().get('date')?.value"
                                    [max]="max_duration"
                                    [min]="60"
                                    [step]="60"
                                    [use_24hr]="use_24hr"
                                    [timezone]="timezone"
                                >
                                </a-duration-field>
                            </div>
                        </div>
                    }
                    @if (can_recurr) {
                        <div class="flex flex-col">
                            <label for="recurrence">
                                {{ 'FORM.RECURRENCE' | translate
                                }}<span>*</span>
                            </label>
                            <recurrence-field
                                name="recurrence"
                                [date]="form().getRawValue().date"
                                [ngModel]="form().value"
                                (ngModelChange)="onRecurrenceChange($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [available_days]="available_days"
                            ></recurrence-field>
                            @if (form().value.id) {
                                <mat-checkbox formControlName="update_master">
                                    {{ 'FORM.UPDATE_FUTURE' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                    @if (can_book_lockers) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <mat-checkbox
                                    [ngModel]="
                                        !!form().value.secondary_resource
                                    "
                                    (ngModelChange)="
                                        form().patchValue({
                                            secondary_resource: $event
                                                ? 'locker'
                                                : '',
                                        })
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                >
                                    {{
                                        'BOOKINGS.DESK_REQUIRE_LOCKER'
                                            | translate
                                    }}
                                </mat-checkbox>
                            </div>
                        </div>
                    }
                </section>
                @if ((options | async)?.group) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                2
                            </div>
                            <div class="text-xl">
                                {{ 'BOOKINGS.DESK_GROUP_MEMBERS' | translate }}
                            </div>
                            <div class="w-px flex-1"></div>
                        </h3>
                        <div class="overflow-hidden">
                            <a-user-list-field
                                class="mt-4"
                                [ngModel]="(options | async)?.members || []"
                                (ngModelChange)="
                                    setOptions({ members: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></a-user-list-field>
                        </div>
                    </section>
                }
                @if (form().contains('resources')) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                {{ (options | async)?.group ? 3 : 2 }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.DESK' | translate }}
                            </div>
                        </h3>
                        <desk-list-field
                            formControlName="resources"
                        ></desk-list-field>
                        @if ((options | async)?.group) {
                            <p
                                class="rounded bg-warning px-2 py-1 text-center text-xs shadow"
                            >
                                {{ 'BOOKINGS.DESK_GROUP_INFO' | translate }}
                            </p>
                        }
                    </section>
                }
                @if (has_assets && !(options | async)?.group) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="flex h-6 w-6 items-center justify-center rounded-full bg-base-200"
                            >
                                {{ (options | async)?.group ? 4 : 3 }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.ASSETS' | translate }}
                            </div>
                        </h3>
                        <asset-list-field
                            [options]="{
                                date: form().getRawValue().date,
                                duration: form().value.duration,
                                all_day: form().value.all_day,
                            }"
                            formControlName="assets"
                        ></asset-list-field>
                    </section>
                }
            </div>
        }
    `,
    standalone: false,
})
export class NewDeskFormDetailsComponent
    extends AsyncHandler
    implements OnChanges
{
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly form = input<FormGroup>(undefined);
    public readonly find = output<void>();
    /** List of available buildings to select */
    public readonly buildings = this._org.building_list;
    /** List of available levels for the selected building */
    public readonly levels = this._org.active_levels;
    /** List of set options for desk booking */
    public readonly options = this._state.options;
    /** List of set options for desk booking */
    public readonly features = this._state.features;

    public readonly force_time = set(Date.now(), {
        hours: 6,
        minutes: 0,
    }).valueOf();

    /** Selected desk for booking */
    public selected_desk: Desk;
    public from_id = false;
    public recurrence: RecurrenceDetails;

    public readonly recurrence_options = ['daily', 'weekly', 'monthly'];

    public get building() {
        return this._org.building;
    }
    public set building(bld) {
        this._org.building = bld;
    }

    public readonly setOptions = (o) => this._state.setOptions(o);

    public readonly setFeature = (f, e) => this._state.setFeature(f, e);

    public get max_duration() {
        return (
            this._settings.get('app.desks.max_duration') ||
            this._settings.get('app.bookings.max_duration') ||
            8 * 60
        );
    }

    public get can_book_for_others() {
        return (
            this._settings.get('app.bookings.can_book_for_others') ||
            this._settings.get('app.desks.can_book_for_others')
        );
    }

    public get can_book_lockers() {
        return this._settings.get('app.desks.can_book_lockers');
    }

    public get can_recurr() {
        return this._settings.get('app.desks.allow_recurrence');
    }

    public get allow_groups() {
        return this._settings.get('app.desks.allow_groups');
    }

    public get has_assets() {
        return (
            !!this._settings.get('app.bookings.has_assets') ||
            !!this._settings.get('app.desks.has_assets')
        );
    }

    public get needs_reason() {
        return this._settings.get('app.desks.needs_reason') === true;
    }

    public get allow_time_changes() {
        return this._settings.get('app.desks.allow_time_changes') !== false;
    }

    public get allow_all_day() {
        return (
            this.allow_time_changes &&
            (!!this._settings.get('app.desks.allow_all_day') ||
                !!this._settings.get('app.bookings.allow_all_day'))
        );
    }

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.desks.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }

    public get available_days() {
        return this._settings.get('app.desks.available_period') || 90;
    }

    public get end_date() {
        return endOfDay(addDays(Date.now(), this.available_days)).valueOf();
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public ngOnChanges(changes: SimpleChanges) {
        const form = this.form();
        if (changes.form && form) {
            if (this.selected_desk?.id) {
                form.patchValue({ resources: [this.selected_desk] });
            }
        }
    }

    public onRecurrenceChange(recurrence: BookingRecurrence) {
        this.form().patchValue(recurrence);
    }
}
