import {
    Component,
    computed,
    effect,
    inject,
    Injector,
    input,
    linkedSignal,
    output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';

import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    alignDateToBookableHours,
    Booking,
    currentUser,
    getInvalidSignalFields,
    i18n,
    notifyError,
    notifySuccess,
    onFieldChange,
    SettingsService,
    User,
} from '@placeos/common';

import { OrganisationService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import {
    CalEvent,
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from 'libs/events/src/lib/calendar-links';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { HostSelectFieldComponent } from 'libs/form-fields/src/lib/host-select-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { UserListFieldComponent } from 'libs/form-fields/src/lib/user-list-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { BookingFormService } from './booking-form.service';

@Component({
    selector: `invite-visitor-form`,
    template: `
        @if (!sent()) {
            @if (!loading() && !loading_many()) {
                <div
                    class="bg-base-100 relative flex max-h-full flex-col overflow-auto"
                >
                    <div
                        class="border-base-200 w-full border-b px-4 py-4 sm:px-16"
                    >
                        <h2 class="text-2xl font-medium">
                            {{
                                (is_edit()
                                    ? 'BOOKINGS.VISITOR_EDIT_TITLE'
                                    : 'BOOKINGS.VISITOR_INVITE_TITLE'
                                ) | translate
                            }}
                        </h2>
                    </div>
                    @if (form) {
                        <form class="px-4 py-4 sm:px-16">
                            @if (buildings()?.length > 1) {
                                <div class="flex flex-col">
                                    <label for="building">
                                        {{ 'RESOURCE.BUILDING' | translate
                                        }}<span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [ngModel]="selected_building_id()"
                                            (ngModelChange)="
                                                setBuilding($event)
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            name="building"
                                            placeholder="Select building"
                                        >
                                            @for (
                                                bld of buildings();
                                                track bld
                                            ) {
                                                <mat-option [value]="bld.id">
                                                    {{
                                                        bld.display_name ||
                                                            bld.name
                                                    }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label for="date">
                                    {{ 'FORM.DATE' | translate }}<span>*</span>
                                </label>
                                <a-date-field
                                    [formField]="form.date"
                                ></a-date-field>
                            </div>
                            @if (allow_all_day()) {
                                <div class="-mt-2 mb-2 flex justify-end">
                                    <mat-checkbox [formField]="form.all_day">
                                        {{ 'COMMON.ALL_DAY' | translate }}
                                    </mat-checkbox>
                                </div>
                            }
                            @if (!model().all_day) {
                                <div class="flex items-center space-x-2">
                                    <div class="flex w-1/3 flex-1 flex-col">
                                        <label for="start-time">
                                            {{ 'FORM.TIME_START' | translate }}
                                            <span>*</span>
                                        </label>
                                        <a-time-field
                                            name="start-time"
                                            [ngModel]="form_date()"
                                            [disabled]="
                                                is_start_time_disabled()
                                            "
                                            (ngModelChange)="
                                                model.update((m) => ({
                                                    ...m,
                                                    date: $event,
                                                }))
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [use_24hr]="use_24hr()"
                                            [range]="bookable_hours()"
                                            [min_duration]="min_duration()"
                                            [timezone]="timezone()"
                                        ></a-time-field>
                                    </div>
                                    <div class="flex w-1/3 flex-1 flex-col">
                                        <label for="end-time">
                                            {{ 'FORM.TIME_END' | translate }}
                                            <span>*</span>
                                        </label>
                                        <a-duration-field
                                            [formField]="form.duration"
                                            [time]="form_date()"
                                            [max]="max_duration()"
                                            [use_24hr]="use_24hr()"
                                            [end_time]="bookable_hours()?.end"
                                            [timezone]="timezone()"
                                        ></a-duration-field>
                                    </div>
                                </div>
                            }
                            @if (can_book_for_anyone()) {
                                <div class="flex w-full flex-col">
                                    <label for="host">
                                        {{ 'FORM.HOST' | translate
                                        }}<span>*</span>
                                    </label>
                                    <a-user-search-field
                                        class="mb-4"
                                        [formField]="form.user"
                                    ></a-user-search-field>
                                </div>
                            } @else if (can_book_for_others()) {
                                <div class="flex w-full flex-col">
                                    <label for="host">
                                        {{ 'FORM.HOST' | translate
                                        }}<span>*</span>
                                    </label>
                                    <host-select-field
                                        [formField]="form.user"
                                    ></host-select-field>
                                </div>
                            }
                            @if (!multiple()) {
                                <div class="flex flex-col">
                                    <label for="visitor-name">
                                        {{
                                            'BOOKINGS.VISITOR_NAME' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            id="visitor-name"
                                            [formField]="form.asset_name"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_NAME_PLACEHOLDER'
                                                    | translate
                                            "
                                            (focus)="
                                                filterVisitors(
                                                    model().asset_name
                                                )
                                            "
                                            [matAutocomplete]="name_auto"
                                        />
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #name_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors();
                                            track item
                                        ) {
                                            <mat-option
                                                [value]="item.name"
                                                (click)="setVisitor(item)"
                                            >
                                                <div
                                                    class="flex flex-col leading-tight"
                                                >
                                                    <div>{{ item.name }}</div>
                                                    <div
                                                        class="text-xs opacity-60"
                                                    >
                                                        {{ item.email }}
                                                        {{
                                                            item.company
                                                                ? '| ' +
                                                                  item.company
                                                                : ''
                                                        }}
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                                <div class="flex flex-col">
                                    <label for="visitor-email">
                                        {{
                                            'BOOKINGS.VISITOR_EMAIL' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            type="email"
                                            id="visitor-email"
                                            [formField]="form.asset_id"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_EMAIL_PLACEHOLDER'
                                                    | translate
                                            "
                                            (focus)="
                                                filterVisitors(
                                                    model().asset_id
                                                )
                                            "
                                            [matAutocomplete]="email_auto"
                                        />
                                        <mat-error>
                                            {{
                                                'FORM.EMAIL_REQUIRED'
                                                    | translate
                                            }}
                                        </mat-error>
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #email_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors();
                                            track item
                                        ) {
                                            <mat-option
                                                [value]="item.email"
                                                (click)="setVisitor(item)"
                                            >
                                                <div
                                                    class="flex flex-col leading-tight"
                                                >
                                                    <div>{{ item.name }}</div>
                                                    <div
                                                        class="text-xs opacity-60"
                                                    >
                                                        {{ item.email }}
                                                        {{
                                                            item.company
                                                                ? '| ' +
                                                                  item.company
                                                                : ''
                                                        }}
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                                <div class="flex flex-col">
                                    <label for="visitor-name">{{
                                        'BOOKINGS.VISITOR_COMPANY' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            [formField]="form.company"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_COMPANY'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                            } @else {
                                <div class="flex flex-col">
                                    <label for="visitor-name">
                                        {{
                                            'BOOKINGS.VISITOR_LIST' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <a-user-list-field
                                        [formField]="form.assets"
                                        [guests_only]="true"
                                    ></a-user-list-field>
                                </div>
                                @if (
                                    allow_international &&
                                    model().assets?.length
                                ) {
                                    <div class="mb-2 flex flex-col">
                                        <label>International Visitors</label>
                                        <div
                                            class="flex flex-wrap gap-x-4 gap-y-2"
                                        >
                                            @for (
                                                item of model().assets;
                                                track item.id || item.email
                                            ) {
                                                <mat-checkbox
                                                    [ngModel]="
                                                        visitor_international()[
                                                            item.email ||
                                                                item.id
                                                        ] || false
                                                    "
                                                    (ngModelChange)="
                                                        setVisitorInternational(
                                                            item,
                                                            $event
                                                        )
                                                    "
                                                    [ngModelOptions]="{
                                                        standalone: true,
                                                    }"
                                                >
                                                    {{
                                                        item.name || item.email
                                                    }}
                                                </mat-checkbox>
                                            }
                                        </div>
                                    </div>
                                }
                            }
                            <div class="flex flex-col">
                                <label for="reason">{{
                                    'BOOKINGS.VISITOR_REASON' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [formField]="form.title"
                                        [placeholder]="
                                            'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            @if (allow_pass_number()) {
                                <div class="flex flex-col">
                                    <label for="pass">{{
                                        'BOOKINGS.VISITOR_PASS' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            [formField]="form.pass_number"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                            }
                            @if (allow_international() && !multiple()) {
                                <div class="-mt-2 mb-2 flex justify-end">
                                    <mat-checkbox
                                        [formField]="form.international"
                                    >
                                        International Visitor
                                    </mat-checkbox>
                                </div>
                            }
                        </form>
                    }
                    <div
                        class="border-base-200 bg-base-100 sticky bottom-0 border-t px-4 py-4 sm:px-16"
                    >
                        <button
                            btn
                            matRipple
                            send
                            class="w-full sm:w-auto"
                            (click)="sendInvite()"
                        >
                            {{
                                (is_edit()
                                    ? 'BOOKINGS.VISITOR_UPDATE'
                                    : 'BOOKINGS.VISITOR_SEND'
                                ) | translate
                            }}
                        </button>
                    </div>
                </div>
            } @else {
                <div
                    loading
                    class="relative flex h-full min-h-72 w-full flex-col items-center justify-center overflow-hidden rounded-sm"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ 'BOOKINGS.VISITOR_SENDING' | translate }}</p>
                </div>
            }
        } @else {
            <div
                sent
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center text-center"
            >
                <div
                    class="z-0 m-8 h-1/2 w-full max-w-lg flex-1 space-y-2 overflow-auto"
                >
                    <h2 class="text-3xl">
                        {{
                            (multiple()
                                ? 'BOOKINGS.VISITOR_SENT_MULTIPLE'
                                : 'BOOKINGS.VISITOR_SENT_SINGLE'
                            )
                                | translate
                                    : {
                                          name:
                                              last_success()?.asset_name ||
                                              last_success()?.asset_id,
                                          count: last_count() || 1,
                                      }
                        }}
                    </h2>
                    <img class="mx-auto" src="assets/icons/sent.svg" />
                    <p>
                        {{
                            (multiple() && last_count() > 1
                                ? 'BOOKINGS.VISITOR_SENT_MSG_MULTIPLE'
                                : 'BOOKINGS.VISITOR_SENT_MSG'
                            )
                                | translate
                                    : {
                                          location:
                                              building()?.display_name ||
                                              building()?.name,
                                          date:
                                              last_success()?.date
                                              | date: 'mediumDate',
                                          time:
                                              last_success()?.date
                                              | date: time_format(),
                                      }
                        }}
                    </p>
                    @if (show_links()) {
                        <div
                            class="relative flex flex-col items-center space-y-4 p-4"
                        >
                            <a
                                btn
                                matRipple
                                name="desk-outlook-link"
                                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                                [href]="outlook_link() | sanitize: 'url'"
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                <img
                                    src="assets/icons/outlook.svg"
                                    class="w-6"
                                />
                                <span>{{
                                    'BOOKINGS.LINK_OUTLOOK' | translate
                                }}</span>
                            </a>
                            <a
                                btn
                                matRipple
                                name="desk-google-link"
                                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                                [href]="google_link() | sanitize: 'url'"
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                <img src="assets/icons/gcal.svg" class="w-6" />
                                <span>{{
                                    'BOOKINGS.LINK_GOOGLE' | translate
                                }}</span>
                            </a>
                            <a
                                btn
                                matRipple
                                name="desk-ical-link"
                                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                                [href]="ical_link() | safe: 'url'"
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                <icon class="text-xl">download</icon>
                                <span>{{
                                    'BOOKINGS.LINK_ICAL' | translate
                                }}</span>
                            </a>
                        </div>
                    }
                </div>
                <div
                    class="border-base-200 bg-base-100 z-10 w-full border-t p-2"
                >
                    <div
                        class="mx-auto flex w-full max-w-lg items-center space-x-2"
                    >
                        <button btn matRipple class="flex-1" (click)="onDone()">
                            {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="sent.set(false)"
                        >
                            {{
                                (multiple() && last_count() > 1
                                    ? 'BOOKINGS.VISITOR_BOOK_ANOTHER_MULTIPLE'
                                    : 'BOOKINGS.VISITOR_BOOK_ANOTHER'
                                ) | translate
                            }}
                        </button>
                    </div>
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatCheckboxModule,
        UserListFieldComponent,
        FormField,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        UserSearchFieldComponent,
        HostSelectFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        DateFieldComponent,
        MatSelectModule,
        MatProgressSpinnerModule,
        FormsModule,
        SanitizePipe,
        SafePipe,
    ],
})
export class InviteVisitorFormComponent {
    private _service = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _injector = inject(Injector);
    private _existing_siblings: Booking[] = [];

    public readonly date = input<number>(undefined);
    public readonly done = output<void>();

    public readonly outlook_link = signal('');
    public readonly google_link = signal('');
    public readonly ical_link = signal('');

    public readonly sent = signal(false);
    public booking?: Booking;
    public readonly loading = this._service.loading;
    public readonly loading_many = signal(false);
    public readonly buildings = this._org.building_list;
    public readonly last_success = signal(this._service.last_success);
    public readonly last_count = signal(0);
    private visitors = [];
    public readonly filtered_visitors = signal<any[]>([]);
    public readonly visitor_international = signal<Record<string, boolean>>(
        {},
    );
    private readonly _visitor_bookable_hours = this._settings.signal(
        'visitors.bookable_hours',
        null,
    );
    private readonly _booking_bookable_hours = this._settings.signal(
        'bookings.bookable_hours',
        null,
    );
    private readonly _visitor_max_duration = this._settings.signal(
        'visitors.max_duration',
        null,
    );
    private readonly _booking_max_duration = this._settings.signal(
        'bookings.max_duration',
        null,
    );
    private readonly _allow_pass_number = this._settings.signal(
        'visitors.allow_pass_number',
        false,
    );
    private readonly _allow_international = this._settings.signal(
        'visitors.allow_international',
        false,
    );
    private readonly _visitor_allow_all_day = this._settings.signal(
        'visitors.allow_all_day',
        undefined,
    );
    private readonly _booking_allow_all_day = this._settings.signal(
        'bookings.allow_all_day',
        false,
    );
    private readonly _multiple = this._settings.signal(
        'bookings.multiple_visitors',
        false,
    );
    private readonly _visitor_can_book_for_others = this._settings.signal(
        'visitors.can_book_for_others',
        undefined,
    );
    private readonly _booking_can_book_for_others = this._settings.signal(
        'bookings.can_book_for_others',
        false,
    );
    private readonly _visitor_can_book_for_anyone = this._settings.signal(
        'visitors.can_book_for_anyone',
        undefined,
    );
    private readonly _booking_can_book_for_anyone = this._settings.signal(
        'bookings.can_book_for_anyone',
        false,
    );
    private readonly _show_links = this._settings.signal(
        'visitors.show_calendar_links',
        false,
    );
    private readonly _use_region = this._settings.signal('use_region', false);
    private readonly _use_24hr = this._settings.signal(
        'use_24_hour_time',
        false,
    );
    private readonly _booking_use_building_timezone = this._settings.signal(
        'bookings.use_building_timezone',
        false,
    );
    private readonly _visitor_use_building_timezone = this._settings.signal(
        'visitors.use_building_timezone',
        false,
    );
    private readonly _visitor_min_duration = this._settings.signal(
        'visitors.min_duration',
        null,
    );
    private readonly _booking_min_duration = this._settings.signal(
        'bookings.min_duration',
        null,
    );

    public readonly bookable_hours = computed(
        () => this._visitor_bookable_hours() || this._booking_bookable_hours(),
    );
    public readonly max_duration = computed(
        () =>
            this._visitor_max_duration() ||
            this._booking_max_duration() ||
            4 * 60,
    );
    public readonly allow_pass_number = this._allow_pass_number;
    public readonly allow_international = this._allow_international;
    public readonly allow_all_day = computed(
        () => this._visitor_allow_all_day() ?? this._booking_allow_all_day(),
    );
    public readonly multiple = this._multiple;
    public readonly can_book_for_others = computed(
        () =>
            this._visitor_can_book_for_others() ??
            this._booking_can_book_for_others(),
    );
    public readonly can_book_for_anyone = computed(
        () =>
            this._visitor_can_book_for_anyone() ??
            this._booking_can_book_for_anyone(),
    );
    public readonly show_links = this._show_links;
    public readonly building = computed(() =>
        this._use_region() ? this._org.region : this._org.building,
    );

    public get form() {
        return this._service.form;
    }
    public get model() {
        return this._service.model;
    }
    public readonly is_edit = computed(() => !!this.model()?.id);

    public readonly time_format = this._settings.time_format_signal;
    public readonly use_24hr = this._use_24hr;
    public readonly timezone = computed(() =>
        this._booking_use_building_timezone() ||
        this._visitor_use_building_timezone()
            ? this._org.building?.timezone || ''
            : '',
    );
    public readonly min_duration = computed(
        () =>
            this._visitor_min_duration() || this._booking_min_duration() || 30,
    );

    public readonly form_date = linkedSignal(
        () => this.model()?.date || Date.now(),
    );

    public readonly is_start_time_disabled = computed(
        () => this.form.date().disabled() || false,
    );

    public readonly selected_building_id = computed(() => {
        const zone_list = this.model()?.zones || [];
        const level = this._org.levelWithID(zone_list);
        const building =
            this._org.buildings.find(
                (bld) =>
                    zone_list.includes(bld.id) ||
                    zone_list.includes((bld as any).zone_id),
            ) || this._org.buildings.find((bld) => level?.parent_id === bld.id);
        if (building?.id) return building.id;
        if (this.model()?.id) return zone_list[0] || '';
        return this._org.building?.id || zone_list[0] || '';
    });

    // `multiple` comes from settings, which can resolve after the form is set
    // up, and the form itself can be reset asynchronously. Keep the placeholder
    // email in sync instead of writing it once during init, otherwise the
    // required/email validation on `asset_id` fails on send.
    private _multipleVisitorEffect = effect(() => {
        const { id, asset_id } = this.model();
        if (!this.multiple() || id || asset_id) return;
        this.model.update((m) => ({ ...m, asset_id: 'multiple@place.tech' }));
    });

    private _dateEffect = effect(() => {
        const date = this.date();
        if (date) {
            const aligned_date = alignDateToBookableHours(
                date,
                this.bookable_hours(),
                this.model().date,
            );
            this.model.update((m) => ({ ...m, date: aligned_date }));
        }
    });

    public async ngOnInit() {
        this.sent.set(false);
        this._service.clearOldState();
        await this.initFormZone();
        this.form_date.set(this.model().date);
        const visitors = this._settings.get('visitor-invitees') || [];
        for (const item of visitors) {
            if (typeof item !== 'string') continue;
            const [email, name, company, international] = item.split('|');
            this.visitors.push({
                email,
                name,
                company,
                international: international === '1',
            });
        }
        this.filterVisitors('');
        onFieldChange(
            this.model,
            (m) => m.asset_id,
            (_) => this.filterVisitors(_),
            this._injector,
        );
        onFieldChange(
            this.model,
            (m) => m.asset_name,
            (_) => this.filterVisitors(_),
            this._injector,
        );
        this.syncVisitorInternational(this.model().assets || []);
        onFieldChange(
            this.model,
            (m) => m.assets,
            (_) => this.syncVisitorInternational(_ || []),
            this._injector,
        );
        if (!this.model().id)
            this.model.update((m) => ({ ...m, title: 'Visit' }));
    }

    public setVisitor(item) {
        this.model.update((m) => ({
            ...m,
            asset_id: item.email,
            asset_name: item.name,
            company: item.company,
            phone: item.phone,
            international: !!item.international,
        }));
    }

    public setBuilding(building_id: string) {
        if (!building_id) {
            this.model.update((m) => ({ ...m, zones: [] }));
            return;
        }
        const building = this._org.find(building_id);
        const zones = [
            this._org.organisation?.id,
            building?.parent_id,
            building_id,
        ].filter((_) => _);
        this.model.update((m) => ({ ...m, zones }));
    }

    public setVisitorInternational(item: User, international: boolean) {
        const key = item.email || item.id;
        if (!key) return;
        this.visitor_international.set({
            ...this.visitor_international(),
            [key]: !!international,
        });
        this.model.update((m) => ({
            ...m,
            assets: (m.assets || []).map((user) => {
                const user_key = user.email || user.id;
                return user_key !== key
                    ? user
                    : new User({
                          ...user,
                          international: !!international,
                          extension_data: {
                              ...(user.extension_data || {}),
                              international: !!international,
                          },
                      } as any);
            }),
        }));
    }

    public filterVisitors(filter: string) {
        const s = (filter || '').toLowerCase();
        this.filtered_visitors.set(
            this.visitors.filter(
                ({ email, name, company }) =>
                    email.toLowerCase().includes(s) ||
                    name.toLowerCase().includes(s) ||
                    `${company || ''}`.toLowerCase().includes(s),
            ),
        );
    }

    public onDone() {
        // TODO: The 'emit' function requires a mandatory void argument
        // TODO: The 'emit' function requires a mandatory void argument
        this.done.emit();
        this.sent.set(false);
    }

    public async sendInvite() {
        this.form().markAsTouched();
        const form_data = this.model();
        if (
            !this.form().valid() ||
            (this.multiple() && !form_data.assets?.length)
        ) {
            return notifyError(
                `Some fields are invalid. [${
                    getInvalidSignalFields(this.form, this.model).join(', ') ||
                    'visitors'
                }]`,
            );
        }
        if (!this.model().user_email || !this.can_book_for_others()) {
            this.model.update((m) => ({ ...m, user: currentUser() }));
        }
        const visitor_reason =
            form_data.title || form_data.description || 'Visit';
        this.model.update((m) => ({ ...m, title: visitor_reason }));
        const old_visitors = this._settings.get('visitor-invitees') || [];
        const { asset_id, asset_name, company, international, assets } =
            this.model();
        if (this.multiple() && assets?.length) {
            const asset_ids = assets.map((_) => _.email).filter((_) => !!_);
            this._settings.saveUserSetting('visitor-invitees', [
                ...old_visitors.filter((_) => {
                    const visitor_id = `${_}`.split('|')[0];
                    return !asset_ids.includes(visitor_id);
                }),
                ...assets
                    .filter((_) => !!_.email)
                    .map((item) => {
                        return `${item.email}|${item.name || item.email}|${
                            (item as any).company || item.organisation || ''
                        }|${this.getVisitorInternational(item) ? '1' : '0'}`;
                    }),
            ]);
        } else {
            const visitor_details = `${asset_id}|${asset_name}|${company}|${
                international ? '1' : '0'
            }`;
            this._settings.saveUserSetting('visitor-invitees', [
                ...old_visitors.filter((_) => !_.includes(asset_id)),
                visitor_details,
            ]);
        }
        const is_editing = this.is_edit();
        await (this.multiple() ? this._bookForMany() : this._bookForOne());
        if (is_editing) {
            notifySuccess(i18n('BOOKINGS.VISITOR_UPDATED'));
            this.done.emit();
            return;
        }
        this.last_success.set(this._service.last_success);
        if (this.last_success()) this._generateLinks();
        await this.initFormZone();
        this.sent.set(true);
    }

    private async initFormZone() {
        await this._org.waitUntilInitialised();
        const form_snapshot = this.model() as any;
        const booking_snapshot = this._service.booking as any;
        const is_visitor_booking = (booking: Record<string, any>) =>
            booking?.booking_type === 'visitor' || booking?.type === 'visitor';
        const keep_preloaded_edit =
            (!!form_snapshot.id || !!booking_snapshot?.id) &&
            (is_visitor_booking(form_snapshot) ||
                is_visitor_booking(booking_snapshot));
        if (keep_preloaded_edit && !form_snapshot?.id && booking_snapshot?.id) {
            const booking = new Booking(booking_snapshot);
            this.model.set({
                user: currentUser(),
                booked_by: currentUser(),
                ...booking_snapshot,
                ...booking,
                ...(booking.extension_data || {}),
                _in_progress:
                    booking_snapshot.state === 'started' ||
                    booking_snapshot.state === 'in_progress',
            } as any);
            this.form().reset();
        } else if (!keep_preloaded_edit) {
            this._service.loadForm('visitor');
        }
        this._service.setOptions({ type: 'visitor' });
        if (!this.model().id) this._service.newForm('visitor');
        this.model.update((m) => ({ ...m, booking_type: 'visitor' }));
        this.form_date.set(this.model().date);
        if (!this.model().id && !this.model().zones?.length) {
            this.model.update((m) => ({
                ...m,
                zones: [this._org.building?.id],
            }));
        }
        if (this.model().id) {
            const booking_ref = this._service.booking;
            if (this.multiple()) {
                // Populate quickly from cached booking extension data, then
                // refresh from sibling bookings without blocking form display.
                const extension_visitors = this._visitorsFromGroupMembers(
                    booking_ref?.extension_data?.group_members || [],
                );
                if (extension_visitors.length) {
                    this.model.update((m) => ({
                        ...m,
                        assets: extension_visitors,
                    }));
                    this.syncVisitorInternational(extension_visitors);
                }
                this._loadSiblingVisitors(
                    booking_ref?.id
                        ? booking_ref
                        : new Booking(this.model() as any),
                ).catch(() => null);
            }
            if (!this.model().assets?.length) {
                const attendees = this.model().attendees || [];
                if (attendees.length) {
                    this.model.update((m) => ({ ...m, assets: attendees }));
                } else if (this.model().asset_id) {
                    this.model.update((m) => ({
                        ...m,
                        assets: [
                            new User({
                                name: m.asset_name,
                                email: m.asset_id,
                                organisation: m.company,
                            }),
                        ],
                    }));
                }
            }
            if (!this.multiple() && this.model().assets?.length) {
                const [visitor] = this.model().assets as User[];
                if (visitor?.email) {
                    this.model.update((m) => ({
                        ...m,
                        asset_id: visitor.email,
                        asset_name: visitor.name || visitor.email,
                        company:
                            (visitor as any).company ||
                            visitor.organisation ||
                            m.company,
                        phone: visitor.phone || m.phone,
                    }));
                }
            }
        }
    }

    private async _loadSiblingVisitors(booking_ref: Booking) {
        this._existing_siblings =
            await this._service.loadGroupSiblings(booking_ref);
        if (!this._existing_siblings.length) return;
        const visitors = this._existing_siblings.map((s) => {
            const group_member = (s.extension_data?.group_members || []).find(
                (member) => member?.email === s.asset_id,
            );
            return new User({
                name: group_member?.name || s.asset_name || s.asset_id,
                email: s.asset_id,
                organisation:
                    group_member?.company || s.extension_data?.company,
                phone: group_member?.phone || s.extension_data?.phone,
                extension_data: {
                    international: !!(
                        group_member?.international ||
                        s.extension_data?.international
                    ),
                },
            });
        });
        this.model.update((m) => ({ ...m, assets: visitors }));
        this.syncVisitorInternational(visitors);
    }

    private _visitorsFromGroupMembers(members: any[] = []) {
        return (members || [])
            .filter((member) => !!member?.email)
            .map(
                (member) =>
                    new User({
                        name: member.name || member.email,
                        email: member.email,
                        organisation: member.company || '',
                        phone: member.phone || '',
                        extension_data: {
                            international: !!member.international,
                        },
                    }),
            );
    }

    private async _bookForOne() {
        const value = this.model();
        this.model.update((m) => ({
            ...m,
            name: value.asset_name || value.asset_id,
            attendees: [
                new User({
                    name: value.asset_name || value.asset_id,
                    email: value.asset_id,
                    organisation: value.company,
                    phone: value.phone,
                }),
            ],
        }));
        await this._service.postForm().catch((e) => {
            notifyError(e);
            throw e;
        });
    }

    private async _bookForMany() {
        this.loading_many.set(true);
        const assets: User[] = this.model().assets || [];
        this.last_count.set(assets.length);
        const visitor_members = assets
            .filter((_) => !!_.email)
            .map(
                (user) =>
                    new User({
                        ...user,
                        name: user.name || user.email,
                        international: this.getVisitorInternational(user),
                        extension_data: {
                            ...(user.extension_data || {}),
                            international: this.getVisitorInternational(user),
                        },
                    } as any),
            );
        this._service.setOptions({
            type: 'visitor',
            group: true,
            members: visitor_members,
        });
        if (this.is_edit()) {
            let existing_siblings = this._existing_siblings;
            if (!existing_siblings.length) {
                existing_siblings = await this._service.loadGroupSiblings(
                    new Booking(this.model() as any),
                );
            }
            if (!existing_siblings.length) {
                existing_siblings = [new Booking(this.model() as any)];
            }
            this._existing_siblings = existing_siblings;
            await this._service
                .editFormForGroup(existing_siblings)
                .catch((e) => {
                    notifyError(e);
                    this.loading_many.set(false);
                    throw e;
                });
        } else {
            await this._service.postFormForVisitorGroup().catch((e) => {
                notifyError(e);
                this.loading_many.set(false);
                throw e;
            });
        }
        this.loading_many.set(false);
    }

    private syncVisitorInternational(assets: User[] = []) {
        const map_data: Record<string, boolean> = {};
        for (const item of assets || []) {
            const key = item.email || item.id;
            if (!key) continue;
            map_data[key] = this.getVisitorInternational(item);
        }
        this.visitor_international.set(map_data);
    }

    private getVisitorInternational(item: User): boolean {
        const key = item?.email || item?.id;
        if (!key) return false;
        if (key in this.visitor_international()) {
            return !!this.visitor_international()[key];
        }
        return (
            !!(item as any).international ||
            !!item?.extension_data?.international
        );
    }

    private _generateLinks() {
        const last_success = this.last_success();
        const event: CalEvent = {
            ...last_success,
            host: last_success.user_email,
            organiser: {
                name: last_success.user_name,
                email: last_success.user_email,
            } as any,
            attendees: last_success.attendees.map((_) => _.email),
            body: last_success.description,
            location:
                this._org.building.display_name || this._org.building.name,
        };
        event.attendees.push(last_success.asset_id);
        this.outlook_link.set(generateMicrosoftCalendarLink(event));
        this.google_link.set(generateGoogleCalendarLink(event));
        this.ical_link.set(generateCalendarFileLink(event));
    }
}
