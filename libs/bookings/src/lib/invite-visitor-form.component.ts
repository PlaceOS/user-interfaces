import {
    Component,
    DestroyRef,
    effect,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    Booking,
    SettingsService,
    User,
    alignDateToBookableHours,
    currentUser,
    getInvalidFields,
    i18n,
    notifyError,
    notifySuccess,
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
                                (is_edit
                                    ? 'BOOKINGS.VISITOR_EDIT_TITLE'
                                    : 'BOOKINGS.VISITOR_INVITE_TITLE'
                                ) | translate
                            }}
                        </h2>
                    </div>
                    @if (form) {
                        <form [formGroup]="form" class="px-4 py-4 sm:px-16">
                            @if (buildings()?.length > 1) {
                                <div class="flex flex-col">
                                    <label for="building">
                                        {{ 'RESOURCE.BUILDING' | translate
                                        }}<span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [ngModel]="selected_building_id"
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
                                    name="date"
                                    formControlName="date"
                                ></a-date-field>
                            </div>
                            @if (allow_all_day) {
                                <div class="-mt-2 mb-2 flex justify-end">
                                    <mat-checkbox formControlName="all_day">
                                        {{ 'COMMON.ALL_DAY' | translate }}
                                    </mat-checkbox>
                                </div>
                            }
                            @if (!form.value.all_day) {
                                <div class="flex items-center space-x-2">
                                    <div class="flex w-1/3 flex-1 flex-col">
                                        <label for="start-time">
                                            {{ 'FORM.TIME_START' | translate }}
                                            <span>*</span>
                                        </label>
                                        <a-time-field
                                            name="start-time"
                                            [ngModel]="form_date"
                                            [disabled]="is_start_time_disabled"
                                            (ngModelChange)="
                                                form.patchValue({
                                                    date: $event,
                                                })
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [use_24hr]="use_24hr"
                                            [range]="bookable_hours"
                                            [min_duration]="min_duration"
                                            [timezone]="timezone"
                                        ></a-time-field>
                                    </div>
                                    <div class="flex w-1/3 flex-1 flex-col">
                                        <label for="end-time">
                                            {{ 'FORM.TIME_END' | translate }}
                                            <span>*</span>
                                        </label>
                                        <a-duration-field
                                            name="end-time"
                                            formControlName="duration"
                                            [time]="form_date"
                                            [max]="max_duration"
                                            [use_24hr]="use_24hr"
                                            [end_time]="bookable_hours?.end"
                                            [timezone]="timezone"
                                        ></a-duration-field>
                                    </div>
                                </div>
                            }
                            @if (can_book_for_anyone) {
                                <div class="flex w-full flex-col">
                                    <label for="host">
                                        {{ 'FORM.HOST' | translate
                                        }}<span>*</span>
                                    </label>
                                    <a-user-search-field
                                        name="host"
                                        class="mb-4"
                                        formControlName="user"
                                    ></a-user-search-field>
                                </div>
                            } @else if (can_book_for_others) {
                                <div class="flex w-full flex-col">
                                    <label for="host">
                                        {{ 'FORM.HOST' | translate
                                        }}<span>*</span>
                                    </label>
                                    <host-select-field
                                        name="host"
                                        formControlName="organiser"
                                    ></host-select-field>
                                </div>
                            }
                            @if (!multiple) {
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
                                            name="visitor-name"
                                            formControlName="asset_name"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_NAME_PLACEHOLDER'
                                                    | translate
                                            "
                                            (focus)="
                                                filterVisitors(
                                                    form.value.asset_name
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
                                            name="visitor-email"
                                            type="email"
                                            formControlName="asset_id"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_EMAIL_PLACEHOLDER'
                                                    | translate
                                            "
                                            (focus)="
                                                filterVisitors(
                                                    form.value.asset_id
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
                                            name="company"
                                            formControlName="company"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_COMPANY'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                            } @else {
                                <div class="flex flex-col" [formGroup]="form">
                                    <label for="visitor-name">
                                        {{
                                            'BOOKINGS.VISITOR_LIST' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <a-user-list-field
                                        formControlName="assets"
                                        [guests_only]="true"
                                    ></a-user-list-field>
                                </div>
                                @if (
                                    allow_international &&
                                    form.value.assets?.length
                                ) {
                                    <div class="mb-2 flex flex-col">
                                        <label>International Visitors</label>
                                        <div
                                            class="flex flex-wrap gap-x-4 gap-y-2"
                                        >
                                            @for (
                                                item of form.value.assets;
                                                track item.id || item.email
                                            ) {
                                                <mat-checkbox
                                                    [ngModel]="
                                                        visitor_international[
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
                                        name="reason"
                                        matInput
                                        formControlName="title"
                                        [placeholder]="
                                            'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                            @if (allow_pass_number) {
                                <div class="flex flex-col">
                                    <label for="pass">{{
                                        'BOOKINGS.VISITOR_PASS' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            name="pass"
                                            matInput
                                            formControlName="pass_number"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                            }
                            @if (allow_international && !multiple) {
                                <div class="-mt-2 mb-2 flex justify-end">
                                    <mat-checkbox
                                        formControlName="international"
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
                                (is_edit
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
                            (multiple
                                ? 'BOOKINGS.VISITOR_SENT_MULTIPLE'
                                : 'BOOKINGS.VISITOR_SENT_SINGLE'
                            )
                                | translate
                                    : {
                                          name:
                                              last_success?.asset_name ||
                                              last_success?.asset_id,
                                          count: last_count || 1,
                                      }
                        }}
                    </h2>
                    <img class="mx-auto" src="assets/icons/sent.svg" />
                    <p>
                        {{
                            (multiple && last_count > 1
                                ? 'BOOKINGS.VISITOR_SENT_MSG_MULTIPLE'
                                : 'BOOKINGS.VISITOR_SENT_MSG'
                            )
                                | translate
                                    : {
                                          location:
                                              building?.display_name ||
                                              building?.name,
                                          date:
                                              last_success?.date
                                              | date: 'mediumDate',
                                          time:
                                              last_success?.date
                                              | date: time_format,
                                      }
                        }}
                    </p>
                    @if (show_links) {
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
                                (multiple && last_count > 1
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
        ReactiveFormsModule,
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
    private _destroyRef = inject(DestroyRef);
    private _existing_siblings: Booking[] = [];

    public readonly date = input<number>(undefined);
    public readonly done = output<void>();

    public readonly outlook_link = signal('');
    public readonly google_link = signal('');
    public readonly ical_link = signal('');

    public readonly sent = signal(false);
    public booking?: Booking;
    public readonly loading = toSignal(this._service.loading, {
        initialValue: '',
    });
    public readonly loading_many = signal(false);
    public readonly buildings = toSignal(this._org.building_list, {
        initialValue: [] as any[],
    });
    public last_success = this._service.last_success;
    public last_count = 0;
    public visitors = [];
    public readonly filtered_visitors = signal<any[]>([]);
    public visitor_international: Record<string, boolean> = {};

    public get bookable_hours() {
        return (
            this._settings.get('app.visitors.bookable_hours') ||
            this._settings.get('app.bookings.bookable_hours')
        );
    }

    public get max_duration() {
        return (
            this._settings.get('app.visitors.max_duration') ||
            this._settings.get('app.bookings.max_duration') ||
            4 * 60
        );
    }

    public get allow_pass_number() {
        return this._settings.get('app.visitors.allow_pass_number');
    }

    public get allow_international() {
        return !!this._settings.get('app.visitors.allow_international');
    }

    public get allow_all_day() {
        return (
            this._settings.get('app.visitors.allow_all_day') ??
            this._settings.get('app.bookings.allow_all_day')
        );
    }

    public get multiple() {
        return this._settings.get('app.bookings.multiple_visitors');
    }

    public get can_book_for_others() {
        return (
            this._settings.get('app.visitors.can_book_for_others') ??
            this._settings.get('app.bookings.can_book_for_others')
        );
    }

    public get can_book_for_anyone() {
        return (
            this._settings.get('app.visitors.can_book_for_anyone') ??
            this._settings.get('app.bookings.can_book_for_anyone')
        );
    }

    public get show_links() {
        return this._settings.get('app.visitors.show_calendar_links');
    }

    public get building() {
        return this._settings.get('app.use_region')
            ? this._org.region
            : this._org.building;
    }

    public get is_edit() {
        return !!this.form?.value?.id;
    }

    public get form() {
        return this._service.form;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get use_24hr() {
        return this._settings.get('app.use_24_hour_time');
    }

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.visitors.use_building_timezone')
            ? this._org.building?.timezone || ''
            : '';
    }

    public get min_duration() {
        return (
            this._settings.get('app.visitors.min_duration') ||
            this._settings.get('app.bookings.min_duration') ||
            30
        );
    }

    public get form_date() {
        return this.form?.getRawValue()?.date;
    }

    public get is_start_time_disabled() {
        return this.form?.get('date')?.disabled || false;
    }

    public get selected_building_id() {
        const zone_list = this.form?.getRawValue()?.zones || [];
        const level = this._org.levelWithID(zone_list);
        const building =
            this._org.buildings.find(
                (bld) =>
                    zone_list.includes(bld.id) ||
                    zone_list.includes((bld as any).zone_id),
            ) || this._org.buildings.find((bld) => level?.parent_id === bld.id);
        if (building?.id) return building.id;
        if (this.form?.getRawValue()?.id) return zone_list[0] || '';
        return this._org.building?.id || zone_list[0] || '';
    }

    private _dateEffect = effect(() => {
        const date = this.date();
        if (date) {
            this.form.patchValue({
                date: alignDateToBookableHours(
                    date,
                    this.bookable_hours,
                    this.form.getRawValue().date,
                ),
            });
        }
    });

    public async ngOnInit() {
        this.sent.set(false);
        this._service.clearOldState();
        await this.initFormZone();
        this.form
            .get('asset_id')
            .setValidators([Validators.required, Validators.email]);
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
        this.form
            .get('asset_id')
            .valueChanges.pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((_) => this.filterVisitors(_));
        this.form
            .get('asset_name')
            .valueChanges.pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((_) => this.filterVisitors(_));
        this.syncVisitorInternational(this.form.value.assets || []);
        this.form
            .get('assets')
            .valueChanges.pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((_) => this.syncVisitorInternational(_ || []));
        if (this.multiple && !this.form.value.id)
            this.form.patchValue({ asset_id: 'multiple@place.tech' });
        if (!this.form.value.id) this.form.patchValue({ title: 'Visit' });
    }

    public setVisitor(item) {
        this.form.patchValue({
            asset_id: item.email,
            asset_name: item.name,
            company: item.company,
            phone: item.phone,
            international: !!item.international,
        });
    }

    public setBuilding(building_id: string) {
        if (!building_id) {
            this.form.patchValue({ zones: [] });
            return;
        }
        const building = this._org.find(building_id);
        const zones = [
            this._org.organisation?.id,
            building?.parent_id,
            building_id,
        ].filter((_) => _);
        this.form.patchValue({ zones });
    }

    public setVisitorInternational(item: User, international: boolean) {
        const key = item.email || item.id;
        if (!key) return;
        this.visitor_international = {
            ...this.visitor_international,
            [key]: !!international,
        };
        this.form.patchValue({
            assets: (this.form.value.assets || []).map((user) => {
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
        });
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
        this.form.markAllAsTouched();
        const form_data = this.form.getRawValue();
        if (!this.form.valid || (this.multiple && !form_data.assets?.length)) {
            return notifyError(
                `Some fields are invalid. [${
                    getInvalidFields(this.form).join(', ') || 'visitors'
                }]`,
            );
        }
        if (!this.form.value.user_email || !this.can_book_for_others) {
            this.form.patchValue({ user: currentUser() });
        }
        const visitor_reason =
            form_data.title || form_data.description || 'Visit';
        this.form.patchValue({
            title: visitor_reason,
        });
        const old_visitors = this._settings.get('visitor-invitees') || [];
        const { asset_id, asset_name, company, international, assets } =
            this.form.getRawValue();
        if (this.multiple && assets?.length) {
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
        const is_editing = this.is_edit;
        await (this.multiple ? this._bookForMany() : this._bookForOne());
        if (is_editing) {
            notifySuccess(i18n('BOOKINGS.VISITOR_UPDATED'));
            this.done.emit();
            return;
        }
        this.last_success = this._service.last_success;
        if (this.last_success) this._generateLinks();
        await this.initFormZone();
        this.sent.set(true);
    }

    private async initFormZone() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const form_snapshot = this.form?.getRawValue?.() as any;
        const booking_snapshot = this._service.booking as any;
        const is_visitor_booking = (booking: Record<string, any>) =>
            booking?.booking_type === 'visitor' || booking?.type === 'visitor';
        const keep_preloaded_edit =
            (!!form_snapshot.id || !!booking_snapshot?.id) &&
            (is_visitor_booking(form_snapshot) ||
                is_visitor_booking(booking_snapshot));
        if (keep_preloaded_edit && !form_snapshot?.id && booking_snapshot?.id) {
            const booking = new Booking(booking_snapshot);
            this.form.reset({ user: currentUser(), booked_by: currentUser() });
            this.form.patchValue(
                {
                    ...booking_snapshot,
                    ...booking,
                    ...(booking.extension_data || {}),
                    _in_progress:
                        booking_snapshot.state === 'started' ||
                        booking_snapshot.state === 'in_progress',
                },
                { emitEvent: false },
            );
        } else if (!keep_preloaded_edit) {
            this._service.loadForm();
        }
        this._service.setOptions({ type: 'visitor' });
        if (!this.form.value.id) this._service.newForm('visitor');
        this.form.patchValue({ booking_type: 'visitor' });
        if (!this.form.value.id && !this.form.value.zones?.length) {
            this.form.patchValue({ zones: [this._org.building?.id] });
        }
        if (this.multiple && !this.form.value.id)
            this.form.patchValue({ asset_id: 'multiple@place.tech' });
        if (this.form.value.id) {
            const booking_ref = this._service.booking;
            if (this.multiple) {
                // Populate quickly from cached booking extension data, then
                // refresh from sibling bookings without blocking form display.
                const extension_visitors = this._visitorsFromGroupMembers(
                    booking_ref?.extension_data?.group_members || [],
                );
                if (extension_visitors.length) {
                    this.form.patchValue({ assets: extension_visitors });
                    this.syncVisitorInternational(extension_visitors);
                }
                this._loadSiblingVisitors(
                    booking_ref?.id
                        ? booking_ref
                        : new Booking(this.form.getRawValue()),
                ).catch(() => null);
            }
            if (!this.form.value.assets?.length) {
                const attendees = this.form.value.attendees || [];
                if (attendees.length) {
                    this.form.patchValue({ assets: attendees });
                } else if (this.form.value.asset_id) {
                    this.form.patchValue({
                        assets: [
                            new User({
                                name: this.form.value.asset_name,
                                email: this.form.value.asset_id,
                                organisation: this.form.value.company,
                            }),
                        ],
                    });
                }
            }
            if (!this.multiple && this.form.value.assets?.length) {
                const [visitor] = this.form.value.assets as User[];
                if (visitor?.email) {
                    this.form.patchValue({
                        asset_id: visitor.email,
                        asset_name: visitor.name || visitor.email,
                        company:
                            (visitor as any).company ||
                            visitor.organisation ||
                            this.form.value.company,
                        phone: visitor.phone || this.form.value.phone,
                    });
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
        this.form.patchValue({ assets: visitors });
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
        const value = this.form.getRawValue();
        this.form.patchValue({
            name: value.asset_name || value.asset_id,
            attendees: [
                new User({
                    name: value.asset_name || value.asset_id,
                    email: value.asset_id,
                    organisation: value.company,
                    phone: value.phone,
                }),
            ],
        });
        await this._service.postForm().catch((e) => {
            notifyError(e);
            throw e;
        });
    }

    private async _bookForMany() {
        this.loading_many.set(true);
        const assets: User[] = this.form.getRawValue().assets || [];
        this.last_count = assets.length;
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
        if (this.is_edit) {
            let existing_siblings = this._existing_siblings;
            if (!existing_siblings.length) {
                existing_siblings = await this._service.loadGroupSiblings(
                    new Booking(this.form.getRawValue()),
                );
            }
            if (!existing_siblings.length) {
                existing_siblings = [new Booking(this.form.getRawValue())];
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
        this.visitor_international = map_data;
    }

    private getVisitorInternational(item: User): boolean {
        const key = item?.email || item?.id;
        if (!key) return false;
        if (key in this.visitor_international) {
            return !!this.visitor_international[key];
        }
        return (
            !!(item as any).international ||
            !!item?.extension_data?.international
        );
    }

    private _generateLinks() {
        const event: CalEvent = {
            ...this.last_success,
            host: this.last_success.user_email,
            organiser: {
                name: this.last_success.user_name,
                email: this.last_success.user_email,
            } as any,
            attendees: this.last_success.attendees.map((_) => _.email),
            body: this.last_success.description,
            location:
                this._org.building.display_name || this._org.building.name,
        };
        event.attendees.push(this.last_success.asset_id);
        this.outlook_link.set(generateMicrosoftCalendarLink(event));
        this.google_link.set(generateGoogleCalendarLink(event));
        this.ical_link.set(generateCalendarFileLink(event));
    }
}
