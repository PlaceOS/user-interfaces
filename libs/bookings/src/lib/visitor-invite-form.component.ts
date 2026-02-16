import { AsyncPipe } from '@angular/common';
import {
    Component,
    computed,
    inject,
    input,
    OnChanges,
    OnInit,
    output,
    signal,
    SimpleChanges,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    currentUser,
    firstTruthyValueFrom,
    getInvalidFields,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    randomString,
    settingSignal,
    SettingsService,
    User,
} from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { UserListFieldComponent } from 'libs/form-fields/src/lib/user-list-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { BookingFormService } from './booking-form.service';

@Component({
    selector: 'visitor-invite-form',
    template: `
        @if (form) {
            <form [formGroup]="form">
                @if ((buildings | async)?.length > 1) {
                    <div class="flex flex-col">
                        <label for="building">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
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
                                @for (bld of buildings | async; track bld) {
                                    <mat-option [value]="bld.id">
                                        {{ bld.display_name || bld.name }}
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
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [use_24hr]="use_24hr()"
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
                                [max]="max_duration()"
                                [use_24hr]="use_24hr()"
                            ></a-duration-field>
                        </div>
                    </div>
                }
                @if (can_book_for_others()) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            name="host"
                            class="mb-4"
                            formControlName="user"
                        ></a-user-search-field>
                    </div>
                }
                @if (!multiple()) {
                    <div class="flex flex-col">
                        <label for="visitor-name">
                            {{ 'BOOKINGS.VISITOR_NAME' | translate }}
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
                                (focus)="search_term.set(form.value.asset_name)"
                                [matAutocomplete]="name_auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #name_auto="matAutocomplete">
                            @for (item of filtered_visitors(); track item) {
                                <mat-option
                                    [value]="item.name"
                                    (click)="setVisitor(item)"
                                >
                                    <div class="flex flex-col leading-tight">
                                        <div>{{ item.name }}</div>
                                        <div class="text-xs opacity-60">
                                            {{ item.email }}
                                            {{
                                                item.organisation
                                                    ? '| ' + item.organisation
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
                            {{ 'BOOKINGS.VISITOR_EMAIL' | translate }}
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
                                (focus)="search_term.set(form.value.asset_id)"
                                [matAutocomplete]="email_auto"
                            />
                            <mat-error>
                                {{ 'FORM.EMAIL_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                        <mat-autocomplete #email_auto="matAutocomplete">
                            @for (item of filtered_visitors(); track item) {
                                <mat-option
                                    [value]="item.email"
                                    (click)="setVisitor(item)"
                                >
                                    <div class="flex flex-col leading-tight">
                                        <div>{{ item.name }}</div>
                                        <div class="text-xs opacity-60">
                                            {{ item.email }}
                                            {{
                                                item.organisation
                                                    ? '| ' + item.organisation
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
                                    'BOOKINGS.VISITOR_COMPANY' | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                } @else {
                    <div class="flex flex-col" [formGroup]="form">
                        <label for="visitor-name">
                            {{ 'BOOKINGS.VISITOR_LIST' | translate }}
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
                @if (allow_pass_number()) {
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
    `,
    styles: [``],
    imports: [
        AsyncPipe,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        UserListFieldComponent,
        MatAutocompleteModule,
        UserSearchFieldComponent,
        DateFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class VisitorInviteFormComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    private _service = inject(BookingFormService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly date = input<number>(Date.now());
    public readonly confirm = input<number>(0);
    public readonly done = output<number>();

    public readonly search_term = signal<string>('');
    public readonly visitors = signal<User[]>([]);
    public readonly filtered_visitors = computed(() => {
        const s = this.search_term().toLowerCase();
        return this.visitors().filter(
            ({ email, name, company }: any) =>
                email.toLowerCase().includes(s) ||
                name.toLowerCase().includes(s) ||
                company.toLowerCase().includes(s),
        );
    });

    public readonly allow_pass_number = settingSignal(
        'visitors.allow_pass_number',
        false,
    );
    public readonly can_book_for_others = settingSignal(
        'bookings.can_book_for_others',
        false,
    );
    public readonly max_duration = computed(() =>
        Math.min(
            settingSignal('visitors.max_duration', 180)(),
            settingSignal('bookings.max_duration', 180)(),
        ),
    );
    public readonly multiple = settingSignal(
        'bookings.multiple_visitors',
        false,
    );
    public readonly use_24hr = settingSignal('use_24_hour_time', false);
    public readonly buildings = this._org.active_buildings;
    public readonly building = computed(() =>
        settingSignal('use_region', false)()
            ? this._org.region
            : this._org.building,
    );

    public get form() {
        return this._service.form;
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get allow_all_day() {
        return (
            this._settings.get('app.visitors.allow_all_day') ??
            this._settings.get('app.bookings.allow_all_day')
        );
    }

    public async ngOnInit() {
        this._service.clearOldState();
        await this.initFormZone();
        this.form
            .get('asset_id')
            .setValidators([Validators.required, Validators.email]);
        const visitors = this._settings.get('visitor-invitees') || [];
        this.visitors.update((list) => {
            for (const item of visitors) {
                const [email, name, company] = item.split('|');
                list.push({ email, name, company } as any);
            }
            return list;
        });
        this.search_term.set('');
        this.subscription(
            'email',
            this.form
                .get('asset_id')
                .valueChanges.subscribe((_) => this.search_term.set(_)),
        );
        this.subscription(
            'name',
            this.form
                .get('asset_name')
                .valueChanges.subscribe((_) => this.search_term.set(_)),
        );
        if (this.multiple())
            this.form.patchValue({ asset_id: 'multiple@place.tech' });
        if (!this.form.value.id) this.form.patchValue({ title: 'Visit' });
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.date && this.date()) {
            this.form.patchValue({ date: this.date() });
        }
        if (changes.confirm && this.confirm() > 0) {
            this.sendInvite();
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

    public async sendInvite() {
        this.form.markAllAsTouched();
        if (
            !this.form.valid ||
            (this.multiple() && !this.form.value.assets.length)
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
        await (this.multiple() ? this._bookForMany() : this._bookForOne());
        notifySuccess(
            i18n(
                this.multiple()
                    ? 'BOOKINGS.VISITOR_SENT_MULTIPLE'
                    : 'BOOKINGS.VISITOR_SENT_SINGLE',
                { name: asset_name, count: this.form.value.attendees?.length },
            ),
        );
        this.done.emit(this.form.value.attendees?.length || 1);
    }

    private async initFormZone() {
        await firstTruthyValueFrom(this._org.initialised);
        this._service.loadForm();
        this._service.setOptions({ type: 'visitor' });
        if (!this.form.value.id) this._service.newForm('visitor');
        this.form.patchValue({
            booking_type: 'visitor',
            zones: [this._org.building?.id],
        });
        if (this.multiple())
            this.form.patchValue({ asset_id: 'multiple@place.tech' });
        if (this.form.value.id && !this.form.value.assets?.length) {
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
                            is_external: true,
                        }),
                    ],
                });
            }
        }
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
        const group = `grp-${randomString(8)}`;
        const value = this.form.value;
        const assets = value.assets;
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
                throw e;
            });
        }
    }
}
