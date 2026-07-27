import { Component, computed, effect, inject, signal } from '@angular/core';
import { showMetadata } from '@placeos/ts-client';

import { saveBooking } from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    generateQRCode,
    getTimezoneOffsetString,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
    User,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    CustomTooltipComponent,
    IconComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { UserDetails, UserLabelComponent } from '@placeos/users';
import { ParkingStateService } from '../parking/parking-state.service';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'guest-listings',
    template: `
        <simple-table
            class="z-0 block text-sm print:hidden"
            [style.min-width]="72 + extra_width + 'rem'"
            [data]="guests()"
            [columns]="[
                {
                    key: 'state',
                    name: 'COMMON.STATUS' | translate,
                    content: state_template,
                    size: '6.5rem',
                    show: !hide_field('state'),
                    sortable: false,
                },
                {
                    key: 'date',
                    name: 'COMMON.TIME' | translate,
                    content: date_template,
                    show: !hide_field('date'),
                    size: '6rem',
                },
                {
                    key: 'asset_name',
                    name: 'RESOURCE.VISITOR' | translate,
                    content: person_template,
                },
                {
                    key: 'user_name',
                    name: 'FORM.HOST' | translate,
                    content: host_template,
                    show: !hide_field('user_name'),
                },
                {
                    key: 'checked_in_at',
                    name: 'COMMON.CHECKED_IN' | translate,
                    content: time_template,
                    show: !hide_field('checked_in_at'),
                    size: '6rem',
                },
                {
                    key: 'checked_out_at',
                    name: 'COMMON.CHECKED_OUT' | translate,
                    content: time_template,
                    show: !hide_field('checked_out_at'),
                    size: '6rem',
                },
                {
                    key: 'induction',
                    name: 'BOOKINGS.INDUCTED' | translate,
                    content: induction_template,
                    show: !!inductions_enabled(),
                    size: '5.5rem',
                },
                {
                    key: 'pass_number',
                    name: 'BOOKINGS.PASS_NUMBER' | translate,
                    content: pass_template,
                    show: pass_number_enabled,
                    size: '6rem',
                },
                {
                    key: 'international',
                    name: 'International',
                    content: international_template,
                    show: allow_international,
                    size: '7rem',
                },
                {
                    key: 'parking_space',
                    name: 'RESOURCE.PARKING' | translate,
                    content: parking_template,
                    show: !!has_parking,
                    size: '5.5rem',
                },
                {
                    key: 'status',
                    name: 'COMMON.STATE' | translate,
                    content: status_template,
                    show: !hide_field('status'),
                    size: '9.5rem',
                },
                {
                    key: 'notes',
                    name: 'FORM.NOTES' | translate,
                    content: notes_template,
                    show: !hide_field('notes'),
                    sortable: false,
                    size: '4.5rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    size: '3.25rem',
                    sortable: false,
                },
            ]"
            [filter]="search"
            [sortable]="true"
        />
        <ng-template #state_template let-row="row">
            @if (!row?.checked_in && row.checked_out_at) {
                <div
                    class="bg-base-400 text-neutral-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITOR_STATUS_CHECKED_OUT'
                            | translate
                                : {
                                      time:
                                          (row.checked_out_at * 1000
                                          | date: time_format : tz()),
                                  }
                    "
                    matTooltipPosition="right"
                >
                    <icon>done</icon>
                </div>
            }
            @if (!row?.checked_in && !row.checked_out_at) {
                <div
                    class="bg-warning text-warning-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITOR_STATUS_NOT_CHECKED_IN'
                            | translate
                    "
                    matTooltipPosition="right"
                >
                    <icon>question_mark</icon>
                </div>
            }
            @if (row?.checked_in) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITOR_STATUS_CHECKED_IN'
                            | translate
                                : {
                                      time:
                                          (row.checked_in_at * 1000
                                          | date: time_format : tz()),
                                  }
                    "
                    matTooltipPosition="right"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #person_template let-row="row">
            <div class="px-4 py-2">
                <button
                    class="cursor-pointer border-none bg-transparent p-0 text-left underline decoration-dotted underline-offset-2"
                    customTooltip
                    [content]="visitor_details_tooltip"
                    [xPosition]="'start'"
                    [yPosition]="'bottom'"
                >
                    {{ row.asset_name || row.asset_id }}
                </button>
                @if (row.asset_name && row.asset_id) {
                    <div class="text-xs opacity-30">
                        {{ row.asset_id }}
                    </div>
                }
            </div>
            <ng-template #visitor_details_tooltip>
                <div
                    class="bg-base-100 border-base-300 my-2 w-72 gap-2 rounded-lg border p-2 shadow-lg"
                >
                    <div class="text-base-content text-lg font-medium">
                        {{ row.asset_name || row.asset_id }}
                    </div>
                    <div
                        class="border-base-200 flex flex-col rounded-lg border px-2 py-1"
                    >
                        <div class="text-sm font-medium">
                            {{ 'FORM.PHONE' | translate }}
                        </div>
                        <div class="text-base-content/80 pb-2 text-xs">
                            {{
                                row.extension_data?.phone ||
                                    row.attendees?.[0]?.phone ||
                                    '-'
                            }}
                        </div>
                        <div class="text-sm font-medium">
                            {{ 'COMMON.ORGANISATION' | translate }}
                        </div>
                        <div class="text-base-content/80 pb-2 text-xs">
                            {{
                                row.extension_data?.company ||
                                    row.attendees?.[0]?.organisation ||
                                    '-'
                            }}
                        </div>
                        <div class="text-sm font-medium">
                            {{ 'BOOKINGS.VISITOR_REASON' | translate }}
                        </div>
                        <div class="text-base-content/80 text-xs">
                            {{ row.title || row.description || '-' }}
                        </div>
                    </div>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #host_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.user_name || row.user_email }}</div>
                @if (row.user_name && row.user_email) {
                    <div class="text-xs opacity-30">
                        {{ row.user_email }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #id_template let-row="row">
            <div customTooltip [content]="id_confirmation">
                @if (row.extension_data?.id_data?.url) {
                    <button
                        matRipple
                        class="bg-success rounded-3xl px-4 py-2 text-white"
                    >
                        {{
                            row.extension_data?.id_confirmed
                                ? 'Confirmed'
                                : row.extension_data?.id_confirmed === false
                                  ? 'Rejected'
                                  : 'Submitted'
                        }}
                    </button>
                }
            </div>
            <ng-template #id_confirmation>
                <div
                    class="bg-base-100 my-2 flex w-[20rem] flex-col space-y-2 rounded-sm p-2"
                >
                    <img
                        [src]="row.extension_data?.id_data?.url"
                        class="max-h-80 max-w-[20rem] object-contain"
                    />
                    <button
                        matRipple
                        (click)="setExt(row, 'id_confirmed', true)"
                    >
                        {{
                            'APP.CONCIERGE.VISITORS_ACTION_ID_APPROVE'
                                | translate
                        }}
                    </button>
                    <button
                        matRipple
                        class="inverse mt-2"
                        (click)="setExt(row, 'id_confirmed', false)"
                    >
                        {{
                            'APP.CONCIERGE.VISITORS_ACTION_ID_REJECT'
                                | translate
                        }}
                    </button>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #parking_template let-row="row">
            @if (row.extension_data.parking_booking_id) {
                <div
                    class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                >
                    <icon>done</icon>
                </div>
            }
        </ng-template>
        <ng-template #induction_template let-data="data">
            <div
                class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                [class.bg-success]="data === 'accepted'"
                [class.text-success-content]="data === 'accepted'"
                [class.bg-warning]="data !== 'accepted' && data !== 'declined'"
                [class.text-warning-content]="
                    data !== 'accepted' && data !== 'declined'
                "
                [class.bg-error]="data === 'declined'"
                [class.text-error-content]="data === 'declined'"
            >
                <icon>
                    {{
                        data === 'accepted'
                            ? 'done'
                            : data === 'declined'
                              ? 'close'
                              : 'question_mark'
                    }}
                </icon>
            </div>
        </ng-template>
        <ng-template #status_template let-row="row">
            <div class="px-4">
                <button
                    matRipple
                    class="h-10 w-30 rounded-3xl border-none"
                    [class.text-success-content]="row?.status === 'approved'"
                    [class.bg-success]="row?.status === 'approved'"
                    [class.text-error-content]="row?.status === 'declined'"
                    [class.bg-error]="row?.status === 'declined'"
                    [class.text-neutral-content]="row?.status === 'ended'"
                    [class.bg-neutral]="row?.status === 'ended'"
                    [class.text-warning-content]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.bg-warning]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.opacity-30]="row?.status === 'ended'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="
                        row?.status === 'ended' ||
                        (row.checked_in && !row.checked_out_at)
                    "
                >
                    <div class="flex items-center space-x-2 pr-2 pl-4">
                        <div class="flex-1 text-left">
                            {{
                                (row?.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                    : row?.status === 'approved'
                                      ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                      : row?.status === 'declined'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                        : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                ) | translate
                            }}
                        </div>
                        @if (
                            !(
                                row?.status === 'ended' ||
                                (row.checked_in && !row.checked_out_at)
                            )
                        ) {
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        }
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approveVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_APPROVE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="declineVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-error text-2xl"> event_busy </icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_DECLINE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #time_template let-data="data">
            <div class="px-4">
                {{ data * 1000 | date: time_format : tz() }}
                @if (timezone()) {
                    <span class="text-xs opacity-30">
                        {{ data * 1000 | date: 'zzzz' : tz() }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #pass_template let-row="row">
            <div class="px-4">
                {{ row.extension_data.pass_number }}
                @if (!row.extension_data.pass_number) {
                    <span class="opacity-30">No Pass</span>
                }
            </div>
        </ng-template>
        <ng-template #international_template let-row="row">
            <div class="px-4">
                @if (row.extension_data?.international) {
                    {{ 'COMMON.YES' | translate }}
                } @else {
                    <span class="opacity-30">{{
                        'COMMON.NO' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #date_template let-row="row">
            <div class="px-4">
                {{
                    row.date
                        | date
                            : (filters()?.period > 1
                                  ? 'MMM d, ' + time_format
                                  : time_format)
                            : tz()
                }}
                @if (timezone()) {
                    <span class="text-xs opacity-30">
                        {{ row.date | date: 'zzzz' : tz() }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center p-2">
                <button icon default matRipple [matMenuTriggerFor]="guest_menu">
                    <icon>more_horiz</icon>
                </button>
                <mat-menu #guest_menu="matMenu">
                    <button
                        mat-menu-item
                        [disabled]="!row.attachment?.length"
                        (click)="viewAttachments(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">attachment</icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VISITORS_ACTION_ATTACHMENTS'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    @if (
                        has_parking && !row.extension_data.parking_booking_id
                    ) {
                        <button mat-menu-item (click)="reserveParking(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">directions_car</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_PARKING'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    @if (can_email_visitors) {
                        <button mat-menu-item (click)="emailVisitor(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">attach_email</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_EMAIL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    <mat-menu #menu="matMenu">
                        @for (item of row.attachments; track item) {
                            <a [href]="item.url" mat-menu-item>
                                {{ item.name }}
                            </a>
                        }
                    </mat-menu>
                    <button
                        mat-menu-item
                        (click)="
                            setExt(row, 'remote', !row.extension_data.remote)
                        "
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">
                                {{
                                    row.extension_data.remote
                                        ? 'business'
                                        : 'laptop'
                                }}
                            </icon>
                            <div>
                                {{
                                    (row.extension_data.remote
                                        ? 'APP.CONCIERGE.VISITORS_ACTION_ONSITE'
                                        : 'APP.CONCIERGE.VISITORS_ACTION_REMOTE'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </button>
                    @if (allow_printing_label && row.checked_in) {
                        <button mat-menu-item (click)="printVisitorPass(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">badge</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_PRINT_PASS'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    <a mat-menu-item [href]="'mailto:' + row?.asset_id">
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">email</icon>
                            <div>
                                {{
                                    (row?.user_email === row?.asset_id
                                        ? 'APP.CONCIERGE.VISITORS_ACTION_EMAIL_HOST'
                                        : 'APP.CONCIERGE.VISITORS_ACTION_EMAIL_GUEST'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </a>
                    @if (pass_number_enabled) {
                        <button
                            mat-menu-item
                            [matMenuTriggerFor]="pass_menu"
                            (click)="
                                pass_number.set(row.extension_data.pass_number)
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">badge</icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_SET_PASS'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <mat-menu #pass_menu>
                            <div
                                class="w-full space-y-2 px-2"
                                (click)="$event.stopPropagation()"
                            >
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript"
                                >
                                    <input
                                        [(ngModel)]="pass_number"
                                        matInput
                                        [placeholder]="
                                            'BOOKINGS.PASS_NUMBER' | translate
                                        "
                                    />
                                </mat-form-field>
                                <button
                                    btn
                                    matRipple
                                    class="w-full"
                                    [disabled]="!pass_number()"
                                    (click)="setPass(row, pass_number())"
                                >
                                    {{ 'COMMON.SAVE' | translate }}
                                </button>
                            </div>
                        </mat-menu>
                    }
                    @if (!row.checked_out_at) {
                        <button
                            mat-menu-item
                            (click)="
                                row.checked_in ? checkout(row) : checkin(row)
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">
                                    {{
                                        row.checked_in
                                            ? 'event_busy'
                                            : 'event_available'
                                    }}
                                </icon>
                                <div>
                                    {{
                                        (row.checked_in
                                            ? 'APP.CONCIERGE.VISITORS_ACTION_CHECKOUT'
                                            : 'APP.CONCIERGE.VISITORS_ACTION_CHECKIN'
                                        ) | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                    @if (canShowAllVisitorActions(row)) {
                        <button mat-menu-item (click)="checkinAllVisitors(row)">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl"> event_available </icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_CHECKIN_ALL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="checkoutAllVisitors(row)"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-error text-2xl">
                                    event_busy
                                </icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_CHECKOUT_ALL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    }
                </mat-menu>
            </div>
        </ng-template>
        <ng-template #notes_template let-row="row">
            <div class="relative mx-auto p-4">
                <button
                    [matTooltip]="
                        'APP.CONCIERGE.VISITORS_NOTES_EDIT' | translate
                    "
                    matTooltipPosition="left"
                    icon
                    default
                    matRipple
                    (click)="editVisitorNotes(row)"
                >
                    <icon>edit_square</icon>
                </button>
                @if (row.extension_data?.notes?.length) {
                    <div
                        class="bg-info text-info-content absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full"
                        [matTooltip]="
                            'APP.CONCIERGE.VISITORS_NOTES_AVAILABLE' | translate
                        "
                    >
                        <icon
                            className="material-symbols-rounded"
                            class="text-sm"
                        >
                            info_i
                        </icon>
                    </div>
                }
            </div>
        </ng-template>
        @if (guests().length) {
            <button
                class="bg-secondary absolute right-4 bottom-4 z-20 h-12 w-12 text-white shadow-sm hover:shadow-lg print:hidden"
                [matTooltip]="'APP.CONCIERGE.VISITORS_DOWNLOAD' | translate"
                matTooltipPosition="left"
                icon
                matRipple
                (click)="downloadVisitorList()"
            >
                <icon>download</icon>
            </button>
        }
        @if (printing()) {
            <div class="print-only fixed top-0 left-0">
                <user-label
                    [user]="$any(user_pass())"
                    [width]="label_size().width"
                    [height]="label_size().height"
                    [style.font-size]="label_size().scale + 'mm'"
                />
            </div>
        }
        <div class="h-8 w-full"></div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRippleModule,
        MatTooltipModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        IconComponent,
        SimpleTableComponent,
        CustomTooltipComponent,
        FormsModule,
        UserLabelComponent,
    ],
})
export class GuestListingComponent extends AsyncHandler {
    private _state = inject(VisitorsStateService);
    private _parking = inject(ParkingStateService);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);

    public readonly printing = signal('');
    public readonly guests = this._state.filtered_bookings;
    public readonly search = this._state.search;
    public readonly filters = this._state.filters;
    public readonly inductions_enabled = signal(false);
    public readonly qr_code = signal('');
    public readonly pass_number = signal('');
    public readonly user_pass = signal<UserDetails>({} as UserDetails);
    public readonly label_size = signal({ width: 25, height: 15, scale: 4 });
    public readonly active_building = this._org.active_building;
    public readonly timezone = computed(() => {
        this.active_building();
        const use_tz = this._settings.get('app.bookings.use_building_timezone');
        const bld_tz = this._org.building.timezone;
        return use_tz &&
            bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone
            ? bld_tz
            : '';
    });
    public readonly tz = computed(() => {
        const tz = this.timezone();
        return tz ? getTimezoneOffsetString(tz) : '';
    });

    public hide_field(id: string) {
        return (this._settings.get('app.visitors.hide_fields') || []).includes(
            id,
        );
    }

    public get extra_width() {
        const hide = this._settings.get('app.visitors.hide_fields') || [];
        return Math.max(0, 3 - hide.length) * 6;
    }

    public get allow_printing_label() {
        return (
            this._settings.get('app.visitors.allow_printing_label') !== false
        );
    }

    public get pass_number_enabled() {
        return this._settings.get('app.visitors.allow_pass_number') !== false;
    }

    public get allow_international() {
        return !!this._settings.get('app.visitors.allow_international');
    }

    public readonly downloadVisitorList = () =>
        this._state.downloadVisitorsList();

    public readonly approveVisitor = (u) => this._state.approveVisitor(u);
    public readonly declineVisitor = (u) => this._state.declineVisitor(u);
    public readonly checkinAllVisitors = (u) =>
        this._state.setCheckinStateForEvent(u.linked_event?.id, true);
    public readonly checkoutAllVisitors = (u) =>
        this._state.setCheckinStateForEvent(u.linked_event?.id, false);
    public readonly setExt = (u, f, v) => this._state.setExt(u, f, v);
    public readonly editVisitorNotes = (u) => this._state.editVisitorNotes(u);

    public readonly checkin = async (item: Booking) => {
        await this._state.setCheckinState(item, true).catch((e) => {
            if (e !== 'User declined') notifyError(e);
        });
        this._state.poll();
    };

    public readonly checkout = async (item: Booking) => {
        await this._state.setCheckinState(item, false).catch((_) => null);
        this._state.poll();
    };

    public readonly emailVisitor = (item) => this._state.emailVisitor(item);

    public get has_parking() {
        return (
            this._settings.get('app.features')?.includes('parking') &&
            this._settings.get('app.visitors.has_parking')
        );
    }

    public get can_email_visitors() {
        return !!this._org.module('visitor_access', 'VisitorAccess');
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get all_visitor_action_window() {
        const value = Number(
            this._settings.get('app.visitors.all_visitors_action_window') ?? 15,
        );
        return Number.isFinite(value) && value >= 0 ? value : 15;
    }

    public canShowAllVisitorActions(item: Booking) {
        if (!item?.linked_event) return false;
        const offset = this.all_visitor_action_window * 60 * 1000;
        const start = item.date - offset;
        const end = item.date_end + offset;
        const now = Date.now();
        return now >= start && now <= end;
    }

    public get logo() {
        return this._settings.theme === 'dark'
            ? this._settings.get('app.logo_dark')
            : this._settings.get('app.logo_light');
    }

    public printVisitorPass(item: Booking) {
        this.qr_code.set(generateQRCode(item.asset_id));
        this.printing.set(item.id);
        this.user_pass.set({
            name: item?.asset_name || item?.description,
            email: item?.asset_id,
            title: item?.title,
            host: item?.user_name || item.user_email,
            zones: item?.zones,
            date: item?.date || Date.now(),
            extra_details: item?.extension_data?.extra_details,
            pass_number: item?.extension_data?.pass_number,
            qr_code: this.qr_code(),
        } as UserDetails);
        window.addEventListener('afterprint', () => this.printing.set(''), {
            once: true,
        });
        this.timeout('print', () => window.print());
    }

    public inducted(item: Booking) {
        if (item.checked_in) return true;
        return item.induction == 'declined'
            ? false
            : item.induction == 'accepted'
              ? true
              : null;
    }

    constructor() {
        super();
        effect(() => {
            const bld = this._org.active_building();
            if (!bld) return;
            this._loadVisitorKioskConfig(bld);
        });
    }

    private async _loadVisitorKioskConfig(bld: any) {
        const visitor_kiosk_app =
            this._settings.get('app.visitor_kiosk_app') || 'visitor-kiosk_app';
        const metadata: any = await showMetadata(bld.id, visitor_kiosk_app);
        const org_metadata: any = await showMetadata(
            this._org.organisation.id,
            visitor_kiosk_app,
        );
        const data = {
            ...(org_metadata.details || {}),
            ...(metadata.details || {}),
        };
        const label_size = data.visitor_label_size || {};
        this.label_size.set({
            width: label_size.width || 25,
            height: label_size.height || 15,
            scale: label_size.scale || 4,
        });
        this.inductions_enabled.set(
            data?.induction_enabled && data?.induction_details,
        );
    }

    public async reserveParking(item: Booking) {
        const id = await this._parking.editReservation(undefined, {
            parent_id: item.id,
            user: new User({ email: item.asset_id, name: item.asset_name }),
            link_id: item.id,
            date: item.date,
            external_user: true,
        });
        if (!id) return;
        await saveBooking(
            new Booking({ ...item, parking_booking_id: id } as any),
        );
        this._state.poll();
    }

    public async setPass(row: any, pass = '') {
        if (!pass) return;
        await saveBooking(new Booking({ ...row, pass_number: pass } as any));
        this._state.poll();
        this.pass_number.set('');
        notifySuccess(i18n('APP.CONCIERGE.VISITORS_SAVED_PASS'));
    }

    public viewAttachments(row: any) {
        // Open attachment viewer for the visitor
        if (row.attachment?.length) {
            window.open(row.attachment[0], '_blank');
        }
    }
}
