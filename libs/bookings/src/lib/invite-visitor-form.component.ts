import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
    input,
    output,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    CalEvent,
    SettingsService,
    currentUser,
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from '@placeos/common';
import { getInvalidFields, randomString } from 'libs/common/src/lib/general';
import { notifyError } from 'libs/common/src/lib/notifications';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SafePipe } from 'libs/components/src/lib/safe.pipe';
import { SanitizePipe } from 'libs/components/src/lib/sanitise.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { UserListFieldComponent } from 'libs/form-fields/src/lib/user-list-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { User } from 'libs/users/src/lib/user.class';
import { BookingFormService } from './booking-form.service';
import { Booking } from './booking.class';

@Component({
    selector: `invite-visitor-form`,
    template: `
        @if (!sent) {
            @if (!(loading | async) && !loading_many) {
                <div
                    class="relative flex max-h-full flex-col overflow-auto bg-base-100"
                >
                    <div
                        class="w-full border-b border-base-200 px-4 py-4 sm:px-16"
                    >
                        <h2 class="text-2xl font-medium">
                            {{ 'BOOKINGS.VISITOR_INVITE_TITLE' | translate }}
                        </h2>
                    </div>
                    @if (form) {
                        <form [formGroup]="form" class="px-4 py-4 sm:px-16">
                            @if (buildings?.length > 1) {
                                <div class="flex flex-col">
                                    <label for="building">
                                        {{ 'RESOURCE.BUILDING' | translate
                                        }}<span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [ngModel]="form.value.zones[0]"
                                            (ngModelChange)="
                                                form.patchValue({
                                                    zones: [$event],
                                                })
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            name="building"
                                            placeholder="Select building"
                                        >
                                            @for (
                                                bld of buildings | async;
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
                            <div class="flex items-center space-x-2">
                                <div class="flex w-1/3 flex-1 flex-col">
                                    <label for="start-time">
                                        {{ 'FORM.TIME_START' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-time-field
                                        name="start-time"
                                        [ngModel]="form.value.date"
                                        (ngModelChange)="
                                            form.patchValue({ date: $event })
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        [disabled]="form.value.all_day"
                                        [use_24hr]="use_24hr"
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
                                        [time]="form.value.date"
                                        [max]="max_duration"
                                        [use_24hr]="use_24hr"
                                    ></a-duration-field>
                                </div>
                            </div>
                            @if (can_book_for_others) {
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
                                            item of filtered_visitors;
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
                                            item of filtered_visitors;
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
                        </form>
                    }
                    <div
                        class="sticky bottom-0 border-t border-base-200 bg-base-100 px-4 py-4 sm:px-16"
                    >
                        <button
                            btn
                            matRipple
                            send
                            class="w-full sm:w-auto"
                            (click)="sendInvite()"
                        >
                            {{ 'BOOKINGS.VISITOR_SEND' | translate }}
                        </button>
                    </div>
                </div>
            } @else {
                <div
                    loading
                    class="relative flex h-full min-h-[18rem] w-full flex-col items-center justify-center overflow-hidden rounded"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ 'BOOKINGS.VISITOR_SENDING' | translate }}</p>
                </div>
            }
        } @else {
            <div
                sent
                class="absolute inset-0 flex flex-col items-center justify-center bg-base-100 text-center"
            >
                <div
                    class="z-0 m-8 h-1/2 w-full max-w-[32rem] flex-1 space-y-2 overflow-auto"
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
                            'BOOKINGS.VISITOR_SENT_MSG'
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
                                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                                [href]="outlook_link | sanitize: 'url'"
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
                                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                                [href]="google_link | sanitize: 'url'"
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
                                class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                                [href]="ical_link | safe: 'url'"
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
                    class="z-10 w-full border-t border-base-200 bg-base-100 p-2"
                >
                    <div
                        class="mx-auto flex w-full max-w-[32rem] items-center space-x-2"
                    >
                        <button btn matRipple class="flex-1" (click)="onDone()">
                            {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="sent = false"
                        >
                            {{ 'BOOKINGS.VISITOR_BOOK_ANOTHER' | translate }}
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
        UserListFieldComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        UserSearchFieldComponent,
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
export class InviteVisitorFormComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    private _service = inject(BookingFormService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly date = input<number>(undefined);
    public readonly done = output<void>();

    public outlook_link = '';
    public google_link = '';
    public ical_link = '';

    public sent = false;
    public booking?: Booking;
    public readonly loading = this._service.loading;
    public loading_many = false;
    public readonly buildings = this._org.active_buildings;
    public last_success = this._service.last_success;
    public last_count = 0;
    public visitors = [];
    public filtered_visitors = [];

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

    public get multiple() {
        return this._settings.get('app.bookings.multiple_visitors');
    }

    public get can_book_for_others() {
        return this._settings.get('app.bookings.can_book_for_others');
    }

    public get show_links() {
        return this._settings.get('app.visitors.show_calendar_links');
    }

    public get building() {
        return this._settings.get('app.use_region')
            ? this._org.region
            : this._org.building;
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

    constructor() {
        super();
    }

    public async ngOnInit() {
        this.sent = false;
        this._service.clearOldState();
        await this.initFormZone();
        this.form
            .get('asset_id')
            .setValidators([Validators.required, Validators.email]);
        const visitors = this._settings.get('visitor-invitees') || [];
        for (const item of visitors) {
            const [email, name, company] = item.split('|');
            this.visitors.push({ email, name, company });
        }
        this.filterVisitors('');
        this.subscription(
            'email',
            this.form
                .get('asset_id')
                .valueChanges.subscribe((_) => this.filterVisitors(_)),
        );
        this.subscription(
            'name',
            this.form
                .get('asset_name')
                .valueChanges.subscribe((_) => this.filterVisitors(_)),
        );
        if (this.multiple)
            this.form.patchValue({ asset_id: 'multiple@place.tech' });
        this.form.patchValue({ title: 'Visit' });
    }

    public ngOnChanges(changes: SimpleChanges) {
        const date = this.date();
        if (changes.date && date) {
            this.form.patchValue({ date: date });
        }
    }

    public setVisitor(item) {
        this.form.patchValue({
            asset_id: item.email,
            asset_name: item.name,
            company: item.company,
            phone: item.phone,
        });
    }

    public filterVisitors(filter: string) {
        const s = (filter || '').toLowerCase();
        this.filtered_visitors = this.visitors.filter(
            ({ email, name, company }) =>
                email.toLowerCase().includes(s) ||
                name.toLowerCase().includes(s) ||
                company.toLowerCase().includes(s),
        );
    }

    public onDone() {
        // TODO: The 'emit' function requires a mandatory void argument
        // TODO: The 'emit' function requires a mandatory void argument
        this.done.emit();
        this.sent = false;
    }

    public async sendInvite() {
        this.form.markAllAsTouched();
        if (
            !this.form.valid ||
            (this.multiple && !this.form.value.assets.length)
        ) {
            return notifyError(
                `Some fields are invalid. [${
                    getInvalidFields(this.form).join(', ') || 'visitors'
                }]`,
            );
        }
        if (!this.form.value.user_email || !this.can_book_for_others) {
            this.form.patchValue({ user: currentUser() });
        }
        this.form.patchValue({
            description: this.form.value.description || this.form.value.title,
        });
        const { asset_id, asset_name, company, assets } = this.form.value;
        const visitor_details = `${asset_id}|${asset_name}|${company}`;
        const old_visitors = this._settings.get('visitor-invitees') || [];
        this._settings.saveUserSetting('visitor-invitees', [
            ...old_visitors.filter((_) => !_.includes(asset_id)),
            visitor_details,
        ]);
        await (this.multiple ? this._bookForMany() : this._bookForOne());
        this.last_success = this._service.last_success;
        if (this.last_success) this._generateLinks();
        await this.initFormZone();
        this.sent = true;
    }

    private async initFormZone() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this._service.loadForm();
        this._service.setOptions({ type: 'visitor' });
        if (!this.form.value.id) this._service.newForm('visitor');
        this.form.patchValue({
            booking_type: 'visitor',
            zones: [this._org.building?.id],
        });
        if (this.multiple)
            this.form.patchValue({ asset_id: 'multiple@place.tech' });
    }

    private async _bookForOne() {
        const value = this.form.value;
        this.form.patchValue({
            name: value.asset_name,
            attendees: [
                new User({
                    name: value.asset_name,
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
        this.loading_many = true;
        const group = `grp-${randomString(8)}`;
        const value = this.form.value;
        const assets = value.assets;
        this.last_count = assets.length;
        for (const user of assets) {
            if (!user.email) continue;
            this.form.patchValue({
                ...value,
                booking_type: 'visitor',
                asset_id: user.email,
                asset_name: user.name,
                user: currentUser(),
                description: group,
                name: user.name,
                assets: [],
                attendees: [
                    new User({
                        name: user.name,
                        email: user.email,
                        organisation: user.company || user.organisation,
                        phone: user.phone,
                    }),
                ],
            });
            await this._service.postForm().catch((e) => {
                notifyError(e);
                this.loading_many = false;
                throw e;
            });
        }
        this.loading_many = false;
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
        this.outlook_link = generateMicrosoftCalendarLink(event);
        this.google_link = generateGoogleCalendarLink(event);
        this.ical_link = generateCalendarFileLink(event);
    }
}
