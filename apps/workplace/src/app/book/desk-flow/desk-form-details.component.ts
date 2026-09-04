import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    OnChanges,
    output,
    SimpleChanges,
    WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AssetListFieldComponent } from '@placeos/assets';
import {
    BookingForm,
    BookingFormService,
    BookingFormValue,
    DeskListFieldComponent,
} from '@placeos/bookings';
import {
    AsyncHandler,
    BookingRecurrence,
    Desk,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { RecurrenceDetails } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    RecurrenceFieldComponent,
    TimeFieldComponent,
    UserListFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { addDays, endOfDay } from 'date-fns';

const MINUTES_IN_DAY = 24 * 60;

@Component({
    selector: 'desk-form-details',
    styles: [],
    template: `
        <!-- <div class="m-2 bg-warning p-2 text-center rounded-sm shadow-sm text-sm">
        The selected desk hasn't been booked. Please book the desk to be
        able to check-in.
        </div> -->
        @if (form() && model) {
            <div class="divide-base-200 space-y-2 divide-y">
                @if (allow_groups) {
                    <section class="flex items-center">
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="!options()?.group"
                            (click)="setOptions({ group: false, members: [] })"
                        >
                            <icon class="text-2xl">person</icon>
                            <div class="">
                                {{ 'BOOKINGS.DESK_LONE' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 m-0! h-1"
                                [class.bg-base-200]="options()?.group"
                                [class.bg-secondary]="!options()?.group"
                            ></div>
                        </button>
                        <button
                            matRipple
                            class="relative flex h-16 flex-1 items-center justify-center space-x-2"
                            [class.text-secondary]="options()?.group"
                            (click)="setOptions({ group: true })"
                        >
                            <icon class="text-2xl">group_add</icon>
                            <div class="">
                                {{ 'COMMON.GROUP' | translate }}
                            </div>
                            <div
                                class="absolute inset-x-0 bottom-0 m-0! h-1"
                                [class.bg-base-200]="!options()?.group"
                                [class.bg-secondary]="options()?.group"
                            ></div>
                        </button>
                    </section>
                }
                <section class="p-2" [class.border-none!]="allow_groups">
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
                    @if (can_book_for_others && !options()?.group) {
                        <div class="w-full">
                            <label for="title">{{
                                'FORM.HOST' | translate
                            }}</label>
                            <a-user-search-field
                                [formField]="form().user"
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
                                    [formField]="form().title"
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
                                [formField]="form().date"
                                [to]="end_date()"
                                [timezone]="timezone"
                            >
                                {{ 'FORM.DATE_REQUIRED' | translate }}
                            </a-date-field>
                            @if (allow_all_day) {
                                <mat-checkbox
                                    [formField]="form().all_day"
                                    class="absolute -top-2 right-0"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    </div>
                    @if (!model().all_day && allow_time_changes) {
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
                                    [range]="bookable_hours"
                                    [min_duration]="effective_min_duration"
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
                                    [formField]="form().duration"
                                    [time]="model().date"
                                    [max]="max_duration"
                                    [min]="min_duration"
                                    [step]="duration_step"
                                    [custom_options]="custom_duration_options"
                                    [end_time]="bookable_hours?.end"
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
                                [date]="model().date"
                                [ngModel]="model()"
                                (ngModelChange)="onRecurrenceChange($event)"
                                (first_instance)="onFirstInstanceChange($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [available_days]="available_days()"
                            ></recurrence-field>
                            @if (model().id) {
                                <mat-checkbox
                                    [formField]="form().update_master"
                                >
                                    {{ 'FORM.UPDATE_FUTURE' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                    @if (can_book_lockers) {
                        <div class="flex items-center space-x-2">
                            <div class="w-1/3 flex-1">
                                <mat-checkbox
                                    [ngModel]="!!model().secondary_resource"
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
                                    {{
                                        'BOOKINGS.DESK_REQUIRE_LOCKER'
                                            | translate
                                    }}
                                </mat-checkbox>
                            </div>
                        </div>
                    }
                </section>
                @if (options()?.group) {
                    <section class="p-2">
                        <h3 class="flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
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
                                [ngModel]="options()?.members || []"
                                (ngModelChange)="
                                    setOptions({ members: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                            ></a-user-list-field>
                        </div>
                    </section>
                }
                @if (model().resources && !auto_allocation) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ options()?.group ? 3 : 2 }}
                            </div>
                            <div class="text-xl">
                                {{
                                    (options()?.group
                                        ? 'BOOKINGS.DESK_GROUP_SELECT'
                                        : 'RESOURCE.DESK'
                                    ) | translate
                                }}
                            </div>
                        </h3>
                        <desk-list-field
                            [formField]="form().resources"
                        ></desk-list-field>
                        @if (options()?.group) {
                            <p
                                class="bg-warning rounded-sm px-2 py-1 text-center text-xs shadow-sm"
                            >
                                {{ 'BOOKINGS.DESK_GROUP_INFO' | translate }}
                            </p>
                        }
                    </section>
                }
                @if (auto_allocation) {
                    <section class="p-2">
                        <p
                            class="bg-info/10 text-info rounded-sm px-4 py-3 text-center text-sm"
                        >
                            {{
                                'BOOKINGS.DESK_AUTO_ALLOCATION_INFO' | translate
                            }}
                        </p>
                    </section>
                }
                @if (has_assets && !options()?.group) {
                    <section class="p-2">
                        <h3 class="mb-4 flex items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-6 w-6 items-center justify-center rounded-full"
                            >
                                {{ options()?.group ? 4 : 3 }}
                            </div>
                            <div class="text-xl">
                                {{ 'RESOURCE.ASSETS' | translate }}
                            </div>
                        </h3>
                        <asset-list-field
                            [options]="{
                                date: model().date,
                                duration: model().duration,
                                all_day: model().all_day,
                            }"
                            [formField]="form().assets"
                        ></asset-list-field>
                    </section>
                }
            </div>
        }
    `,
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        AssetListFieldComponent,
        DeskListFieldComponent,
        UserListFieldComponent,
        MatCheckboxModule,
        RecurrenceFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
        FormsModule,
        FormField,
        MatFormFieldModule,
        MatInputModule,
        UserSearchFieldComponent,
    ],
})
export class NewDeskFormDetailsComponent
    extends AsyncHandler
    implements OnChanges
{
    private _state = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly form = input<BookingForm>(undefined);
    public readonly model_input =
        input<WritableSignal<BookingFormValue>>(undefined);
    public readonly find = output<void>();

    /** Writable signal holding the raw booking form value */
    public get model() {
        return this.model_input();
    }
    /** List of available buildings to select */
    public readonly buildings = this._org.building_list;
    /** List of available levels for the selected building */
    public readonly levels = this._org.active_levels;
    /** List of set options for desk booking */
    public readonly options = this._state.options;
    /** List of set options for desk booking */
    public readonly features = this._state.features;
    public readonly minimum_duration = 60;

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

    public get auto_allocation() {
        return !!this._state.auto_allocation;
    }

    public get allow_time_changes() {
        return this._settings.get('app.desks.allow_time_changes') !== false;
    }

    public get allow_all_day() {
        return (
            this.allow_time_changes &&
            (this._settings.get('app.desks.allow_all_day') ??
                !!this._settings.get('app.bookings.allow_all_day'))
        );
    }

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.desks.use_building_timezone')
            ? this._org.building?.timezone || ''
            : '';
    }

    public readonly available_days = settingSignal(
        'desks.available_period',
        90,
    );

    public readonly end_date = computed(() => {
        return endOfDay(addDays(Date.now(), this.available_days())).valueOf();
    });

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get bookable_hours() {
        return (
            this._settings.get('app.desks.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours')
        );
    }

    public get min_duration() {
        return (
            this._settings.get('app.desks.min_duration') ||
            this._settings.get('app.bookings.min_duration') ||
            60
        );
    }

    public get duration_step() {
        return (
            this._settings.get('app.desks.duration_step') ||
            this._settings.get('app.bookings.duration_step') ||
            30
        );
    }

    public get custom_duration_options() {
        return (
            this._settings.get('app.desks.custom_duration_options') ||
            this._settings.get('app.bookings.custom_duration_options') ||
            []
        );
    }

    public get effective_min_duration() {
        return Math.min(this.min_duration, ...this.custom_duration_options);
    }

    public ngOnChanges(changes: SimpleChanges) {
        const model = this.model;
        if (changes.form && model) {
            if (this.selected_desk?.id) {
                model.update((m) => ({
                    ...m,
                    resources: [this.selected_desk],
                    asset_id: this.selected_desk.id,
                }));
            }
        }
    }

    public onRecurrenceChange(recurrence: BookingRecurrence) {
        this.model.update((m) => ({ ...m, ...recurrence }));
    }

    public onFirstInstanceChange(date: number) {
        this.model.update((m) => ({ ...m, date }));
    }
}
