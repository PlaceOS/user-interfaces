import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingFormService, saveBooking } from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    currentUser,
    getInvalidFields,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    settingSignal,
    SettingsService,
    unique,
    User,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    DateFieldComponent,
    DurationFieldComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { filter } from 'rxjs';
import {
    VipServicesData,
    VipVisitorFlowServicesComponent,
} from './vip-visitor-flow-services.component';

@Component({
    selector: 'vip-visitor-flow',
    template: `
        @if (view() !== 'success') {
            <div class="bg-base-200 relative z-0 h-full w-full overflow-auto">
                <div
                    class="mx-auto flex min-h-full w-[80rem] max-w-full flex-col px-4 pt-4"
                >
                    <div
                        class="border-base-300 bg-base-100 mb-4 flex w-full flex-col overflow-hidden rounded-xl border"
                    >
                        <!-- Visit Details Section -->
                        <div
                            class="gradient border-base-400 relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                        >
                            <icon>star</icon>
                            <div>
                                {{
                                    'BOOKINGS.VIP_VISITOR_TIME_HEADER'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="w-full p-4" [formGroup]="form">
                            @if (buildings().length > 1) {
                                <div class="flex flex-col">
                                    <label
                                        >{{ 'RESOURCE.BUILDING' | translate
                                        }}<span>*</span></label
                                    >
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [ngModel]="form_value().zones?.[0]"
                                            (ngModelChange)="
                                                form.patchValue({
                                                    zones: [$event],
                                                })
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            @for (
                                                bld of buildings();
                                                track bld
                                            ) {
                                                <mat-option [value]="bld.id">{{
                                                    bld.display_name || bld.name
                                                }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label
                                    >{{ 'FORM.DATE' | translate
                                    }}<span>*</span></label
                                >
                                <date-field formControlName="date"></date-field>
                            </div>
                            <div
                                class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                            >
                                <div class="flex-1">
                                    <label
                                        >{{ 'FORM.TIME_START' | translate
                                        }}<span>*</span></label
                                    >
                                    <time-field
                                        [ngModel]="form_value().date"
                                        (ngModelChange)="
                                            form.patchValue({ date: $event })
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        [use_24hr]="use_24hr()"
                                    />
                                </div>
                                <div class="flex-1">
                                    <label
                                        >{{ 'FORM.DURATION' | translate
                                        }}<span>*</span></label
                                    >
                                    <duration-field
                                        formControlName="duration"
                                        [time]="form_value().date"
                                        [max]="480"
                                        [use_24hr]="use_24hr()"
                                    />
                                </div>
                            </div>
                            @if (can_book_for_others()) {
                                <div class="flex w-full flex-col">
                                    <label
                                        >{{ 'FORM.HOST' | translate
                                        }}<span>*</span></label
                                    >
                                    <a-user-search-field
                                        formControlName="user"
                                    ></a-user-search-field>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label>{{
                                    'BOOKINGS.VIP_VISITOR_REASON' | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        formControlName="title"
                                        [placeholder]="
                                            'BOOKINGS.VIP_VISITOR_REASON_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                        </div>

                        <!-- Visitor Details Section -->
                        <div
                            class="gradient border-base-400 relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                        >
                            <icon>person</icon>
                            <div>
                                {{
                                    'BOOKINGS.VIP_VISITOR_DETAILS_HEADER'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="w-full p-4" [formGroup]="form">
                            <div
                                class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                            >
                                <div class="flex flex-1 flex-col">
                                    <label
                                        >{{
                                            'BOOKINGS.VIP_VISITOR_NAME'
                                                | translate
                                        }}<span>*</span></label
                                    >
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            formControlName="asset_name"
                                            [placeholder]="
                                                'BOOKINGS.VIP_VISITOR_NAME_PLACEHOLDER'
                                                    | translate
                                            "
                                            [matAutocomplete]="name_auto"
                                        />
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #name_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors();
                                            track item.email
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
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                                <div class="flex flex-1 flex-col">
                                    <label
                                        >{{
                                            'BOOKINGS.VIP_VISITOR_EMAIL'
                                                | translate
                                        }}<span>*</span></label
                                    >
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            type="email"
                                            formControlName="asset_id"
                                            [placeholder]="
                                                'BOOKINGS.VIP_VISITOR_EMAIL_PLACEHOLDER'
                                                    | translate
                                            "
                                            [matAutocomplete]="email_auto"
                                        />
                                        <mat-error>{{
                                            'FORM.EMAIL_REQUIRED' | translate
                                        }}</mat-error>
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #email_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors();
                                            track item.email
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
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <label>{{
                                    'BOOKINGS.VIP_VISITOR_COMPANY' | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        formControlName="company"
                                        [placeholder]="
                                            'BOOKINGS.VIP_VISITOR_COMPANY'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                        </div>

                        <!-- VIP Services Section -->
                        <div
                            class="gradient border-base-400 relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                        >
                            <icon>room_service</icon>
                            <div>
                                {{ 'BOOKINGS.VIP_SERVICES_HEADER' | translate }}
                            </div>
                        </div>
                        <vip-visitor-flow-services [vip_data]="vip_data" />
                    </div>
                    <div
                        class="border-base-300 bg-base-100 sticky bottom-0 z-20 mt-auto flex justify-between rounded-t-xl border-x border-t p-3"
                    >
                        <div></div>
                        <button
                            btn
                            matRipple
                            (click)="confirmBooking()"
                            [disabled]="loading()"
                        >
                            <div class="flex items-center space-x-2">
                                @if (loading()) {
                                    <icon class="animate-spin text-2xl"
                                        >progress_activity</icon
                                    >
                                } @else {
                                    <icon class="text-2xl">task_alt</icon>
                                }
                                <div class="flex-1 pr-4">
                                    {{
                                        loading()
                                            ? ('COMMON.CONFIRMING' | translate)
                                            : ('COMMON.CONFIRM' | translate)
                                    }}
                                </div>
                                @if (!loading()) {
                                    <icon class="text-2xl"
                                        >keyboard_arrow_right</icon
                                    >
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <!-- Success View -->
            <div
                class="bg-base-100 flex h-full w-full flex-col items-center justify-center text-center"
            >
                <div
                    class="z-0 m-8 h-1/2 w-full max-w-[32rem] flex-1 space-y-2 overflow-auto"
                >
                    <div
                        class="bg-warning/20 text-warning mb-4 inline-flex items-center space-x-2 rounded-full px-4 py-2"
                    >
                        <icon>star</icon>
                        <span class="font-medium">{{
                            'BOOKINGS.VIP_LABEL' | translate
                        }}</span>
                    </div>
                    <h2 class="text-3xl">
                        {{
                            'BOOKINGS.VIP_VISITOR_SENT_SINGLE'
                                | translate
                                    : { name: last_booking()?.asset_name }
                        }}
                    </h2>
                    <img class="mx-auto" src="assets/icons/sent.svg" />
                    <p>
                        {{
                            'BOOKINGS.VIP_VISITOR_SENT_MSG'
                                | translate
                                    : {
                                          location:
                                              building()?.display_name ||
                                              building()?.name,
                                          date:
                                              (last_booking()?.date
                                              | date: 'mediumDate'),
                                          time:
                                              (last_booking()?.date
                                              | date: time_format),
                                      }
                        }}
                    </p>
                </div>
                <div
                    class="border-base-200 bg-base-100 z-10 w-full border-t p-2"
                >
                    <div
                        class="mx-auto flex w-full max-w-[32rem] items-center space-x-2"
                    >
                        <button btn matRipple class="flex-1" (click)="done()">
                            {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="bookAnother()"
                        >
                            {{
                                'BOOKINGS.VIP_VISITOR_BOOK_ANOTHER' | translate
                            }}
                        </button>
                    </div>
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
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
        DatePipe,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        IconComponent,
        TranslatePipe,
        DateFieldComponent,
        DurationFieldComponent,
        TimeFieldComponent,
        UserSearchFieldComponent,
        VipVisitorFlowServicesComponent,
    ],
})
export class VipVisitorFlowComponent extends AsyncHandler implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _router = inject(Router);
    private _route = inject(ActivatedRoute);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    public readonly view = this._booking_form.view;
    public readonly loading = signal(false);
    public readonly visitors = signal<any[]>([]);
    public readonly last_booking = signal<Booking>(null);
    public readonly form = new FormGroup({
        booking_type: new FormControl('vip-visitor'),
        title: new FormControl('VIP Visit'),
        date: new FormControl(Date.now(), Validators.required),
        duration: new FormControl(60, Validators.required),
        user: new FormControl(currentUser()),
        asset_id: new FormControl('', [Validators.required, Validators.email]),
        asset_name: new FormControl('', Validators.required),
        company: new FormControl(''),
        phone: new FormControl(''),
        zones: new FormControl<string[]>([]),
    });

    // VIP services data - stored here, passed to child component
    public readonly vip_data = signal<VipServicesData>({
        vip_assistant_name: '',
        vip_assistant_email: '',
        meet_greet: 'none',
        walkthrough: false,
        welcome_beverage: 'none',
        welcome_beverage_custom: '',
        gift: false,
        photographer: false,
        restaurant_reservation: null,
        driver: 'in_house',
        welcome_screen: false,
        presentation: false,
    });

    public readonly form_value = toSignal(
        this.form.valueChanges,
        { initialValue: this.form.value },
    );
    public readonly use_24hr = settingSignal('use_24_hour_time', false);
    public readonly can_book_for_others = settingSignal(
        'bookings.can_book_for_others',
        false,
    );
    public readonly buildings = this._org.active_buildings;

    public readonly filtered_visitors = signal<any[]>([]);
    public readonly building = () => this._org.building;
    public get time_format() {
        return this._settings.time_format;
    }

    public ngOnInit() {
        this.form.patchValue({
            booking_type: 'vip-visitor',
            title: 'VIP Visit',
            user: currentUser(),
        });
        this._booking_form.setOptions({ type: 'vip-visitor', group: false });

        // Load visitor history
        const history = this._settings.get('visitor-invitees') || [];
        const list = history.map((item: string) => {
            const [email, name, company] = item.split('|');
            return { email, name, company };
        });
        this.visitors.set(list);
        this.filtered_visitors.set(list);

        // Filter visitors on input
        this.subscription(
            'name',
            this.form
                .get('asset_name')
                ?.valueChanges.subscribe((v) => this._filterVisitors(v)),
        );
        this.subscription(
            'email',
            this.form
                .get('asset_id')
                ?.valueChanges.subscribe((v) => this._filterVisitors(v)),
        );

        this.subscription(
            'route',
            this._route.paramMap.subscribe((p) => {
                if (p.has('step'))
                    this._booking_form.setView(p.get('step') as any);
            }),
        );

        // Set the active building zone on the form
        this.subscription(
            'building',
            toObservable(this._org.active_building)
                .pipe(filter((_) => !!_))
                .subscribe((bld) => {
                    this.form.patchValue({ zones: [bld.id] });
                }),
        );
    }

    private _filterVisitors(term: string) {
        const s = (term || '').toLowerCase();
        this.filtered_visitors.set(
            this.visitors().filter(
                (v) =>
                    v.email?.toLowerCase()?.includes(s) ||
                    v.name?.toLowerCase()?.includes(s),
            ),
        );
    }

    public setVisitor(item: any) {
        this.form.patchValue({
            asset_id: item.email,
            asset_name: item.name,
            company: item.company,
        });
    }

    public async confirmBooking() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form)
                        .join(', ')
                        .replace('asset_id', i18n('BOOKINGS.VISITOR')),
                }),
            );
        }

        const vip = this.vip_data();
        if (vip.restaurant_reservation && !vip.restaurant_reservation?.time) {
            return notifyError(i18n('BOOKINGS.VIP_RESTAURANT_TIME_REQUIRED'));
        }

        this.loading.set(true);
        try {
            const value = this.form.getRawValue();
            const user = currentUser();
            const zones = unique([
                this._org.organisation.id,
                this._org.region?.id,
                this._org.building?.id,
                ...(value.zones || []),
            ]).filter((_) => _);

            const booking = new Booking({
                booking_type: 'vip-visitor',
                asset_id: value.asset_id,
                asset_name: value.asset_name,
                description: value.asset_name,
                date: value.date,
                duration: value.duration,
                title: value.title,
                user_id: value.user?.id || user?.id,
                user_email: value.user?.email || user?.email,
                user_name: value.user?.name || user?.name,
                booked_by_id: user?.id,
                booked_by_email: user?.email,
                booked_by_name: user?.name,
                zones,
                attendees: [
                    new User({
                        name: value.asset_name,
                        email: value.asset_id,
                        organisation: value.company,
                        phone: value.phone,
                    }),
                ],
                extension_data: {
                    is_vip: true,
                    vip_assistant_name: vip.vip_assistant_name,
                    vip_assistant_email: vip.vip_assistant_email,
                    meet_greet: vip.meet_greet,
                    walkthrough: vip.walkthrough,
                    welcome_beverage: vip.welcome_beverage,
                    welcome_beverage_custom:
                        vip.welcome_beverage === 'custom'
                            ? vip.welcome_beverage_custom
                            : '',
                    gift: vip.gift,
                    photographer: vip.photographer,
                    restaurant_reservation: vip.restaurant_reservation,
                    driver: vip.driver,
                    welcome_screen: vip.welcome_screen,
                    presentation: vip.presentation,
                    phone: value.phone,
                    department: value.user?.department || user?.department,
                },
            });

            const result = await saveBooking(booking);
            this._booking_form.last_success = result;
            this.last_booking.set(result);
            notifySuccess(
                i18n('BOOKINGS.VIP_VISITOR_SENT_SINGLE', {
                    name: value.asset_name,
                }),
            );
            this._booking_form.setView('success');
            this._router.navigate(['/book/vip-visitor/success']);
        } catch (e) {
            notifyError(
                typeof e === 'string'
                    ? e
                    : i18n('BOOKINGS.VIP_VISITOR_BOOKING_ERROR'),
            );
        } finally {
            this.loading.set(false);
        }
    }

    public done() {
        this._router.navigate(['/']);
    }

    public bookAnother() {
        this._booking_form.clearForm();
        this.vip_data.set({
            vip_assistant_name: '',
            vip_assistant_email: '',
            meet_greet: 'none',
            walkthrough: false,
            welcome_beverage: 'none',
            welcome_beverage_custom: '',
            gift: false,
            photographer: false,
            restaurant_reservation: null,
            driver: 'in_house',
            welcome_screen: false,
            presentation: false,
        } as VipServicesData);
        this._router.navigate(['/book/vip-visitor/form']);
    }
}
