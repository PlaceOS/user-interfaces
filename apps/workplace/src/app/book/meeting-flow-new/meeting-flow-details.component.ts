import {
    Component,
    computed,
    ElementRef,
    inject,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorStateMatcher, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import {
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { EventFormService } from '@placeos/events';
import {
    DateFieldComponent,
    DurationFieldComponent,
    HostSelectFieldComponent,
    RecurrenceFieldComponent,
    TimeFieldComponent,
} from '@placeos/form-fields';
import { addDays, endOfDay } from 'date-fns';
import { ROOM_CAPACITY_OPTIONS, roomCapacityFilters } from './room-capacity';

@Component({
    selector: 'meeting-flow-details',
    template: `
        <div class="h-full w-full">
            <div
                class="border-base-300 bg-base-100 flex w-full flex-col overflow-hidden rounded-xl border"
            >
                <div
                    class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                >
                    <icon>info</icon>
                    <div>
                        {{
                            'CALENDAR_EVENT.MEETING_DETAILS_HEADER' | translate
                        }}
                    </div>
                </div>
                <div class="flex flex-col p-4">
                    <label class="uppercase"
                        >{{ 'CALENDAR_EVENT.MEETING_TITLE_LABEL' | translate }}
                        <span required>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            #title_input
                            matInput
                            [formField]="form.title"
                            [errorStateMatcher]="title_error"
                            [placeholder]="
                                'CALENDAR_EVENT.TITLE_PLACEHOLDER' | translate
                            "
                        />
                        <mat-error>{{
                            'FORM.TITLE_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                    >
                        <div class="relative flex-1">
                            <label for="date" class="uppercase">{{
                                'FORM.DATE' | translate
                            }}</label>
                            <date-field
                                [formField]="form.date"
                                [to]="end_date()"
                            />
                            @if (allow_all_day()) {
                                <mat-checkbox
                                    [formField]="form.all_day"
                                    class="absolute -top-2 right-2"
                                >
                                    {{ 'COMMON.ALL_DAY' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                        <div class="flex-1">
                            <label for="time" class="uppercase">{{
                                'FORM.TIME' | translate
                            }}</label>
                            <time-field
                                name="time"
                                [ngModel]="form_value().date"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [range]="bookable_hours()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                                [disabled]="start_time_disabled()"
                            />
                        </div>
                        @if (!allow_multiday()) {
                            <div class="flex-1">
                                <label for="duration" class="uppercase">{{
                                    'FORM.DURATION' | translate
                                }}</label>
                                <duration-field
                                    [time]="form_value().date"
                                    [max]="max_duration()"
                                    [min]="min_duration()"
                                    [step]="duration_step()"
                                    [custom_options]="custom_duration_options()"
                                    [use_24hr]="use_24hr()"
                                    [end_time]="bookable_hours()?.end"
                                    [timezone]="timezone"
                                    [formField]="form.duration"
                                    [disabled]="form_value().all_day"
                                />
                            </div>
                        }
                    </div>
                    @if (allow_multiday()) {
                        <div
                            class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                        >
                            <div class="flex-1">
                                <label for="date-end" class="uppercase">{{
                                    'FORM.DATE_END' | translate
                                }}</label>
                                <date-field
                                    [formField]="form.date_end"
                                    [from]="form_value().date"
                                    [to]="end_date()"
                                />
                            </div>
                            <div class="flex-1">
                                <label for="end-time" class="uppercase">{{
                                    'FORM.TIME_END' | translate
                                }}</label>
                                <time-field
                                    name="end-time"
                                    [ngModel]="form_value().date_end"
                                    (ngModelChange)="
                                        model.update((m) => ({
                                            ...m,
                                            date_end: $event,
                                        }))
                                    "
                                    [ngModelOptions]="{ standalone: true }"
                                    [from]="form_value().date"
                                    [range]="bookable_hours()"
                                    [use_24hr]="use_24hr()"
                                    [timezone]="timezone"
                                    [disabled]="form_value().all_day"
                                />
                            </div>
                        </div>
                    }
                    @if (can_book_for_others()) {
                        <div class="flex w-full flex-col">
                            <label for="host" class="uppercase">
                                {{ 'FORM.HOST' | translate }}<span>*</span>
                            </label>
                            <host-select-field
                                [formField]="form.organiser"
                            ></host-select-field>
                        </div>
                    }
                    @if (allow_recurrence()) {
                        <div class="flex w-full flex-col">
                            <label for="recurrence" class="uppercase">
                                {{ 'FORM.RECURRENCE' | translate
                                }}<span>*</span>
                            </label>
                            <recurrence-field
                                type="event"
                                [date]="model().date"
                                [available_days]="allowed_future_days()"
                                (first_instance)="onFirstInstanceChange($event)"
                                [formField]="form.recurrence"
                            ></recurrence-field>
                            @if (model().id) {
                                <mat-checkbox [formField]="form.update_master">
                                    {{ 'FORM.UPDATE_FUTURE' | translate }}
                                </mat-checkbox>
                            }
                        </div>
                    }
                    @if (allow_online_meetings()) {
                        <settings-toggle
                            [ngModel]="
                                form_value().meeting_provider ===
                                'teamsForBusiness'
                            "
                            (ngModelChange)="
                                model.update((m) => ({
                                    ...m,
                                    meeting_provider: $event
                                        ? 'teamsForBusiness'
                                        : null,
                                }))
                            "
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ 'CALENDAR_EVENT.TEAMS_MEETING' | translate }}
                        </settings-toggle>
                    }
                </div>
                <div
                    class="gradient border-base-content relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                >
                    <icon>info</icon>
                    <div>
                        {{ 'CALENDAR_EVENT.ROOM_SIZE_LABEL' | translate }}
                    </div>
                </div>
                <div class="-mx-1 flex flex-wrap p-4">
                    @let capacity = options()?.capacity || -1;
                    @for (option of capacity_options; track option.value) {
                        <button
                            btn
                            matRipple
                            class="m-1 min-w-40 flex-1"
                            [class.inverse]="capacity !== option.value"
                            (click)="setCapacity(option.value)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon>{{ option.icon }}</icon>
                                <div>{{ option.label | translate }}</div>
                            </div>
                            @if (capacity === option.value) {
                                <icon class="absolute top-0 right-0"
                                    >task_alt</icon
                                >
                            }
                        </button>
                    }
                </div>
            </div>
            <div class="min-h-4 sm:min-h-[calc(100vh-44.25rem)]"></div>
            <div
                class="border-base-300 bg-base-100 sticky bottom-0 z-20 flex justify-between rounded-t-xl border-x border-t p-3"
            >
                <div></div>
                <button btn matRipple (click)="searchRooms()">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">search</icon>
                        <div class="flex-1 pr-4">
                            {{
                                'CALENDAR_EVENT.SEARCH_ROOMS_BUTTON' | translate
                            }}
                        </div>
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    </div>
                </button>
            </div>
        </div>
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
        MatRippleModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        DateFieldComponent,
        DurationFieldComponent,
        RecurrenceFieldComponent,
        TimeFieldComponent,
        FormsModule,
        FormField,
        RouterModule,
        TranslatePipe,
        SettingsToggleComponent,
        MatCheckboxModule,
        HostSelectFieldComponent,
    ],
})
export class MeetingFlowDetailsComponent {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _event_form = inject(EventFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly options = this._event_form.filters;
    public readonly form_value = this._event_form.model;
    public readonly allow_all_day = settingSignal(
        'events.allow_all_day',
        false,
    );
    public readonly min_duration = settingSignal('events.min_duration', 30);
    public readonly max_duration = settingSignal('events.max_duration', 8 * 60);
    public readonly duration_step = settingSignal('events.duration_step', 15);
    public readonly use_24hr = settingSignal('use_24_hour_time', false);
    public readonly custom_duration_options = settingSignal<number[]>(
        'events.custom_duration_options',
        [],
    );
    /** Number of days ahead that the user can book a meeting */
    public readonly allowed_future_days = settingSignal(
        'events.allowed_future_days',
        180,
    );
    public readonly end_date = computed(() =>
        endOfDay(addDays(Date.now(), this.allowed_future_days())).valueOf(),
    );
    public readonly can_book_for_others = settingSignal(
        'events.can_book_for_others',
        false,
    );
    private readonly _allow_multiday = settingSignal(
        'events.allow_multiday',
        false,
    );
    /** Whether to show an end date and end time in place of the duration */
    public readonly allow_multiday = computed(
        () => this._allow_multiday() || this._event_form.is_multiday,
    );
    public readonly capacity_options = ROOM_CAPACITY_OPTIONS;
    public readonly recurrence_enabled = settingSignal(
        'events.allow_recurrence',
        false,
    );
    public readonly allow_online_meetings = settingSignal(
        'events.allow_online_meetings',
        false,
    );

    public readonly bookable_hours = settingSignal<
        { start: number; end: number } | undefined
    >('events.bookable_hours', undefined);

    public get form() {
        return this._event_form.form;
    }

    public get model() {
        return this._event_form.model;
    }

    public get timezone() {
        return this._settings.get('app.events.use_building_timezone')
            ? this._org.building.timezone
            : '';
    }
    public readonly has_title = computed(
        () => !!this.form_value()?.title?.trim(),
    );
    /** Shows the title error once the title field is touched and empty */
    public readonly title_error: ErrorStateMatcher = {
        isErrorState: () => this.form.title().touched() && !this.has_title(),
    };
    private readonly _title_input =
        viewChild<ElementRef<HTMLInputElement>>('title_input');
    public readonly start_time_disabled = computed(
        () => this.form_value().all_day || this.form.date().disabled(),
    );
    public readonly setCapacity = (capacity: number) => {
        this._event_form.setFilters(roomCapacityFilters(capacity));
    };

    public readonly allow_recurrence = computed(
        () =>
            this.recurrence_enabled() && this.form_value().duration <= 24 * 60,
    );

    public onFirstInstanceChange(date: number) {
        this.model.update((m) => ({ ...m, date }));
    }

    public searchRooms() {
        if (!this.has_title()) {
            this.form.title().markAsTouched();
            this._title_input()?.nativeElement.focus();
            return;
        }

        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { view: 1 },
            queryParamsHandling: 'merge',
        });
    }
}
