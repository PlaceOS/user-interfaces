import {
    Component,
    computed,
    effect,
    inject,
    Injector,
    input,
    OnChanges,
    OnInit,
    output,
    signal,
    SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    alignDateToBookableHours,
    AsyncHandler,
    currentUser,
    getInvalidSignalFields,
    i18n,
    notifyError,
    notifySuccess,
    onFieldChange,
    OrganisationService,
    randomString,
    settingSignal,
    SettingsService,
    User,
} from '@placeos/common';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { HostSelectFieldComponent } from 'libs/form-fields/src/lib/host-select-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { UserListFieldComponent } from 'libs/form-fields/src/lib/user-list-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { BookingFormService } from './booking-form.service';

@Component({
    selector: 'visitor-invite-form',
    template: `
        @if (form) {
            <form>
                @if (buildings()?.length > 1) {
                    <div class="flex flex-col">
                        <label for="building">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [ngModel]="model().zones[0]"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        zones: [$event],
                                    }))
                                "
                                [ngModelOptions]="{
                                    standalone: true,
                                }"
                                name="building"
                                placeholder="Select building"
                            >
                                @for (bld of buildings(); track bld) {
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
                    <a-date-field [formField]="form.date"></a-date-field>
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
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
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
                                [time]="model().date"
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
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            class="mb-4"
                            [formField]="form.user"
                        ></a-user-search-field>
                    </div>
                } @else if (can_book_for_others()) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <host-select-field
                            [formField]="form.user"
                        ></host-select-field>
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
                                [formField]="form.asset_name"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_NAME_PLACEHOLDER'
                                        | translate
                                "
                                (focus)="search_term.set(model().asset_name)"
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
                                type="email"
                                [formField]="form.asset_id"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_EMAIL_PLACEHOLDER'
                                        | translate
                                "
                                (focus)="search_term.set(model().asset_id)"
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
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <label for="company">{{
                                'BOOKINGS.VISITOR_COMPANY' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.company"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_COMPANY' | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="phone">{{
                                'BOOKINGS.VISITOR_PHONE' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    type="tel"
                                    [formField]="form.phone"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_PHONE_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                } @else {
                    <div class="flex flex-col">
                        <label for="visitor-name">
                            {{ 'RESOURCE.VISITORS' | translate }}
                            <span>*</span>
                        </label>
                        <a-user-list-field
                            [formField]="form.assets"
                            [guests_only]="true"
                        ></a-user-list-field>
                    </div>
                    @if (allow_international() && model().assets?.length) {
                        <div class="mb-2 flex flex-col">
                            <label>International Visitors</label>
                            <div class="flex flex-wrap gap-x-4 gap-y-2">
                                @for (
                                    item of model().assets;
                                    track item.id || item.email
                                ) {
                                    <mat-checkbox
                                        [ngModel]="
                                            visitor_international()[
                                                item.email || item.id
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
                                        {{ item.name || item.email }}
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
                            'BOOKINGS.PASS_NUMBER' | translate
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
                        <mat-checkbox [formField]="form.international">
                            International Visitor
                        </mat-checkbox>
                    </div>
                }
            </form>
        }
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        UserListFieldComponent,
        MatAutocompleteModule,
        UserSearchFieldComponent,
        HostSelectFieldComponent,
        DateFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        FormField,
        FormsModule,
    ],
})
export class VisitorInviteFormComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    private _service = inject(BookingFormService);
    private _injector = inject(Injector);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private readonly _visitor_allow_all_day = this._settings.signal(
        'visitors.allow_all_day',
        undefined,
    );
    private readonly _booking_allow_all_day = this._settings.signal(
        'bookings.allow_all_day',
        false,
    );

    public readonly date = input<number>(Date.now());
    public readonly confirm = input<number>(0);
    public readonly done = output<number>();

    public readonly search_term = signal<string>('');
    public readonly visitors = signal<User[]>([]);
    public readonly visitor_international = signal<Record<string, boolean>>({});
    public readonly filtered_visitors = computed(() => {
        const s = this.search_term().toLowerCase();
        return this.visitors().filter(
            ({ email, name, company }: any) =>
                email.toLowerCase().includes(s) ||
                name.toLowerCase().includes(s) ||
                `${company || ''}`.toLowerCase().includes(s),
        );
    });

    public readonly allow_pass_number = settingSignal(
        'visitors.allow_pass_number',
        false,
    );
    public readonly allow_international = settingSignal(
        'visitors.allow_international',
        false,
    );
    public readonly can_book_for_others = computed(
        () =>
            settingSignal('visitors.can_book_for_others')() ??
            settingSignal('bookings.can_book_for_others')(),
    );
    public readonly can_book_for_anyone = computed(
        () =>
            settingSignal('visitors.can_book_for_anyone')() ??
            settingSignal('bookings.can_book_for_anyone')(),
    );
    public readonly bookable_hours = computed(
        () =>
            settingSignal('visitors.bookable_hours', null)() ||
            settingSignal('bookings.bookable_hours', null)(),
    );
    private readonly _visitor_max_duration = settingSignal(
        'visitors.max_duration',
    );
    private readonly _booking_max_duration = settingSignal(
        'bookings.max_duration',
    );
    public readonly max_duration = computed(
        () =>
            this._visitor_max_duration() || this._booking_max_duration() || 180,
    );
    public readonly multiple = settingSignal(
        'bookings.multiple_visitors',
        false,
    );
    public readonly use_24hr = settingSignal('use_24_hour_time', false);
    private readonly _visitor_use_bld_tz = settingSignal(
        'visitors.use_building_timezone',
        false,
    );
    private readonly _booking_use_bld_tz = settingSignal(
        'bookings.use_building_timezone',
        false,
    );
    public readonly timezone = computed(() =>
        this._visitor_use_bld_tz() || this._booking_use_bld_tz()
            ? this._org.building?.timezone || ''
            : '',
    );
    private readonly _visitor_min_duration = settingSignal(
        'visitors.min_duration',
    );
    private readonly _booking_min_duration = settingSignal(
        'bookings.min_duration',
    );
    public readonly min_duration = computed(
        () =>
            this._visitor_min_duration() || this._booking_min_duration() || 30,
    );
    public readonly buildings = this._org.active_buildings;
    public readonly building = computed(() =>
        settingSignal('use_region', false)()
            ? this._org.region
            : this._org.building,
    );

    public get form() {
        return this._service.form;
    }

    public get model() {
        return this._service.model;
    }

    // `multiple` comes from settings, which can resolve after the form is set
    // up, and the form itself can be reset asynchronously. Keep the placeholder
    // email in sync instead of writing it once during init, otherwise the
    // required/email validation on `asset_id` fails on send.
    private _multipleVisitorEffect = effect(() => {
        const { id, asset_id } = this.model();
        if (!this.multiple() || id || asset_id) return;
        this.model.update((m) => ({ ...m, asset_id: 'multiple@place.tech' }));
    });

    public readonly time_format = this._settings.time_format_signal;
    public readonly allow_all_day = computed(
        () => this._visitor_allow_all_day() ?? this._booking_allow_all_day(),
    );

    public async ngOnInit() {
        this._service.clearOldState();
        await this.initFormZone();
        const visitors = this._settings.get('visitor-invitees') || [];
        this.visitors.update((list) => {
            for (const item of visitors) {
                if (typeof item !== 'string') continue;
                const [email, name, company, international] = item.split('|');
                list.push({
                    email,
                    name,
                    company,
                    international: international === '1',
                } as any);
            }
            return list;
        });
        this.search_term.set('');
        const email_handle = onFieldChange(
            this.model,
            (m) => m.asset_id,
            (_) => this.search_term.set(_),
            this._injector,
        );
        this.subscription('email', () => email_handle.destroy());
        const name_handle = onFieldChange(
            this.model,
            (m) => m.asset_name,
            (_) => this.search_term.set(_),
            this._injector,
        );
        this.subscription('name', () => name_handle.destroy());
        this.syncVisitorInternational(this.model().assets || []);
        const assets_handle = onFieldChange(
            this.model,
            (m) => m.assets,
            (_) => this.syncVisitorInternational(_ || []),
            this._injector,
        );
        this.subscription('assets', () => assets_handle.destroy());
        if (!this.model().id)
            this.model.update((m) => ({ ...m, title: 'Visit' }));
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.date && this.date()) {
            this.model.update((m) => ({
                ...m,
                date: alignDateToBookableHours(
                    this.date(),
                    this.bookable_hours(),
                    this.model().date,
                ),
            }));
        }
        if (changes.confirm && this.confirm() > 0) {
            this.sendInvite();
        }
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

    public setVisitorInternational(item: User, international: boolean) {
        const key = item.email || item.id;
        if (!key) return;
        this.visitor_international.set({
            ...this.visitor_international(),
            [key]: !!international,
        });
        this.model.update((m) => ({
            ...m,
            assets: (this.model().assets || []).map((user) => {
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

    public async sendInvite() {
        this.form().markAsTouched();
        if (
            !this.form().valid() ||
            (this.multiple() && !this.model().assets.length)
        ) {
            return notifyError(
                `Some fields are invalid. [${
                    getInvalidSignalFields(this.form, this.model).join(', ') ||
                    'visitors'
                }]`,
            );
        }
        // Existing bookings keep whatever host they were created with — only
        // fall back to the signed-in user for a new booking with no host.
        if (
            !this.model().user_email ||
            (!this.can_book_for_others() && !this.model().id)
        ) {
            this.model.update((m) => ({ ...m, user: currentUser() }));
        }
        const visitor_reason =
            this.model().title || this.model().description || 'Visit';
        this.model.update((m) => ({
            ...m,
            title: visitor_reason,
            description: visitor_reason,
        }));
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
        await (this.multiple() ? this._bookForMany() : this._bookForOne());
        notifySuccess(
            i18n(
                this.multiple()
                    ? 'BOOKINGS.VISITOR_SENT_MULTIPLE'
                    : 'BOOKINGS.VISITOR_SENT_SINGLE',
                { name: asset_name, count: this.model().attendees?.length },
            ),
        );
        this.done.emit(this.model().attendees?.length || 1);
    }

    private async initFormZone() {
        await this._org.waitUntilInitialised();
        this._service.loadForm('visitor');
        this._service.setOptions({ type: 'visitor' });
        if (!this.model().id) this._service.newForm('visitor');
        this.model.update((m) => ({ ...m, booking_type: 'visitor' }));
        if (!this.model().zones?.length) {
            this.model.update((m) => ({
                ...m,
                zones: [this._org.building?.id],
            }));
        }
        if (this.model().id) {
            if (!this.model().assets?.length) {
                const attendees = this.model().attendees || [];
                if (attendees.length) {
                    this.model.update((m) => ({ ...m, assets: attendees }));
                } else if (this.model().asset_id) {
                    this.model.update((m) => ({
                        ...m,
                        assets: [
                            new User({
                                name: this.model().asset_name,
                                email: this.model().asset_id,
                                organisation: this.model().company,
                                is_external: true,
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
                            this.model().company,
                        phone: visitor.phone || this.model().phone,
                    }));
                }
            }
        }
    }

    private async _bookForOne() {
        const value = this.model();
        this.model.update((m) => ({
            ...m,
            name: value.asset_name,
            attendees: [
                new User({
                    name: value.asset_name,
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
        const group = `grp-${randomString(8)}`;
        const value = this.model();
        const assets = value.assets;
        for (const user of assets) {
            if (!user.email) continue;
            this.model.update((m) => ({
                ...m,
                ...value,
                booking_type: 'visitor',
                asset_id: user.email,
                asset_name: user.name,
                international: this.getVisitorInternational(user),
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
            }));
            await this._service.postForm().catch((e) => {
                notifyError(e);
                throw e;
            });
        }
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
}
