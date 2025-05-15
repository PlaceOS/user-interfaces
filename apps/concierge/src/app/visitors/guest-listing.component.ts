import { Component } from '@angular/core';
import { Booking, saveBooking } from '@placeos/bookings';
import {
    AsyncHandler,
    SettingsService,
    getTimezoneOffsetString,
    notifyError,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata } from '@placeos/ts-client';
import { User } from '@placeos/users';
import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { lastValueFrom } from 'rxjs';
import { ParkingStateService } from '../parking/parking-state.service';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'guest-listings',
    template: `
        <simple-table
            class="z-0 block text-sm"
            [style.min-width]="64 + extra_width + 'rem'"
            [data]="guests"
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
                    name: 'FORM.TIME' | translate,
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
                    key: 'status',
                    name: 'COMMON.STATE' | translate,
                    content: status_template,
                    show: !hide_field('status'),
                    size: '9.5rem',
                },
                {
                    key: 'induction',
                    name: 'BOOKINGS.INDUCTED' | translate,
                    content: induction_template,
                    show: !!inductions_enabled,
                    size: '5.5rem',
                },
                {
                    key: 'parking_space',
                    name: 'RESOURCE.PARKING' | translate,
                    content: parking_template,
                    show: !!has_parking,
                    size: '5.5rem',
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
            [filter]="search | async"
            [sortable]="true"
        ></simple-table>
        <ng-template #state_template let-row="row">
            <div
                *ngIf="!row?.checked_in && row.checked_out_at"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-base-400 text-2xl text-neutral-content"
                [matTooltip]="
                    'APP.CONCIERGE.VISITOR_STATUS_CHECKED_OUT'
                        | translate
                            : {
                                  time:
                                      (row.checked_out_at * 1000
                                      | date: time_format : tz),
                              }
                "
                matTooltipPosition="right"
            >
                <app-icon>done</app-icon>
            </div>
            <div
                *ngIf="!row?.checked_in && !row.checked_out_at"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-warning text-2xl text-warning-content"
                [matTooltip]="
                    'APP.CONCIERGE.VISITOR_STATUS_NOT_CHECKED_IN' | translate
                "
                matTooltipPosition="right"
            >
                <app-icon>question_mark</app-icon>
            </div>
            <div
                *ngIf="row?.checked_in"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
                [matTooltip]="
                    'APP.CONCIERGE.VISITOR_STATUS_CHECKED_IN'
                        | translate
                            : {
                                  time:
                                      (row.checked_in_at * 1000
                                      | date: time_format : tz),
                              }
                "
                matTooltipPosition="right"
            >
                <app-icon>done</app-icon>
            </div>
        </ng-template>
        <ng-template #person_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.asset_name || row.asset_id }}</div>
                <div
                    *ngIf="row.asset_name && row.asset_id"
                    class="text-xs opacity-30"
                >
                    {{ row.asset_id }}
                </div>
            </div>
        </ng-template>
        <ng-template #host_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.user_name || row.user_email }}</div>
                <div
                    *ngIf="row.user_name && row.user_email"
                    class="text-xs opacity-30"
                >
                    {{ row.user_email }}
                </div>
            </div>
        </ng-template>
        <ng-template #id_template let-row="row">
            <div customTooltip [content]="id_confirmation">
                <button
                    matRipple
                    *ngIf="row.extension_data?.id_data?.url"
                    class="rounded-3xl bg-success px-4 py-2 text-white"
                >
                    {{
                        row.extension_data?.id_confirmed
                            ? 'Confirmed'
                            : row.extension_data?.id_confirmed === false
                              ? 'Rejected'
                              : 'Submitted'
                    }}
                </button>
            </div>
            <ng-template #id_confirmation>
                <div
                    class="my-2 flex w-[20rem] flex-col space-y-2 rounded bg-base-100 p-2"
                >
                    <img
                        [src]="row.extension_data?.id_data?.url"
                        class="max-h-[20rem] max-w-[20rem] object-contain"
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
            <div
                *ngIf="row.extension_data.parking_booking_id"
                class="mx-auto flex h-8 w-8 items-center justify-center rounded bg-success text-2xl text-success-content"
            >
                <app-icon>done</app-icon>
            </div>
        </ng-template>
        <ng-template #induction_template let-data="data">
            <div
                class="mx-auto flex h-8 w-8 items-center justify-center rounded text-2xl"
                [class.bg-success]="data === 'accepted'"
                [class.text-success-content]="data === 'accepted'"
                [class.bg-warning]="data !== 'accepted' && data !== 'declined'"
                [class.text-warning-content]="
                    data !== 'accepted' && data !== 'declined'
                "
                [class.bg-error]="data === 'declined'"
                [class.text-error-content]="data === 'declined'"
            >
                <app-icon>
                    {{
                        data === 'accepted'
                            ? 'done'
                            : data === 'declined'
                              ? 'close'
                              : 'question_mark'
                    }}
                </app-icon>
            </div>
        </ng-template>
        <ng-template #status_template let-row="row">
            <div class="px-4">
                <button
                    matRipple
                    class="h-10 w-[7.5rem] rounded-3xl border-none"
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
                    <div class="flex items-center space-x-2 pl-4 pr-2">
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
                        <app-icon
                            class="text-2xl"
                            *ngIf="
                                !(
                                    row?.status === 'ended' ||
                                    (row.checked_in && !row.checked_out_at)
                                )
                            "
                        >
                            arrow_drop_down
                        </app-icon>
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approveVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">event_available</app-icon>
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
                        <app-icon class="text-2xl text-error">
                            event_busy
                        </app-icon>
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
                {{ data * 1000 | date: time_format : tz }}
                <span class="text-xs opacity-30" *ngIf="timezone">
                    {{ data * 1000 | date: 'zzzz' : tz }}
                </span>
            </div>
        </ng-template>
        <ng-template #date_template let-row="row">
            <div class="px-4">
                {{
                    row.date
                        | date
                            : ((filters | async)?.period > 1
                                  ? 'MMM d, ' + time_format
                                  : time_format)
                            : tz
                }}
                <span class="text-xs opacity-30" *ngIf="timezone">
                    {{ row.date | date: 'zzzz' : tz }}
                </span>
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end px-2">
                <button icon matRipple [matMenuTriggerFor]="guest_menu">
                    <app-icon>more_horiz</app-icon>
                </button>
                <div
                    printable
                    class="print-only relative m-4 h-[14rem] w-[24rem] rounded-xl border border-neutral bg-base-100 p-4"
                >
                    <div class="flex h-full flex-col leading-tight">
                        <div
                            class="mb-2 flex h-[4.75rem] w-[4.75rem] items-center justify-center overflow-hidden rounded-full border-base-400 bg-base-200 text-3xl print:border-2"
                        >
                            <a-user-avatar
                                [user]="{
                                    name: row?.asset_name || row?.description,
                                    email: row?.asset_id,
                                    photo: row.photo,
                                }"
                            ></a-user-avatar>
                        </div>
                        <div class="text-2xl">
                            {{ row?.asset_name || row?.description }}
                        </div>
                        <div class="text-sm">
                            {{
                                'APP.VISITOR_KIOSK.LABEL_FOR'
                                    | translate: { title: row?.title }
                            }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.VISITOR_KIOSK.LABEL_HOST'
                                    | translate: { host_name: row?.user_name }
                            }}
                        </div>
                    </div>
                    <div
                        class="absolute bottom-4 left-4 mt-2 w-32 rounded-lg border border-black px-2 py-1 text-center text-sm font-medium uppercase text-black"
                    >
                        {{ 'APP.VISITOR_KIOSK.VISITOR' | translate }}
                    </div>
                    <div class="absolute right-4 top-4 flex flex-col items-end">
                        <img
                            auth
                            class="h-10"
                            alt="Logo"
                            [src]="logo?.src || logo"
                        />
                        <div class="text-right text-xs" *ngIf="zones | level">
                            {{
                                'APP.VISITOR_KIOSK.LABEL_LOCATION'
                                    | translate
                                        : {
                                              location:
                                                  (zones | level)
                                                      ?.display_name ||
                                                  (zones | level)?.name,
                                          }
                            }}
                        </div>
                        <pre class="text-right">
                            {{ row?.extension_data?.extra_details }}
                        </pre
                        >
                    </div>
                    <div
                        class="absolute bottom-4 right-4 flex items-end space-x-2"
                    >
                        <div class="text-right font-medium leading-tight">
                            <div>
                                {{ row?.date || date | date: 'shortTime' }}
                            </div>
                            <div>
                                {{ row?.date || date | date: 'mediumDate' }}
                            </div>
                        </div>
                        <div
                            class="relative h-16 w-16 rounded-lg border border-base-200 p-2"
                        >
                            <img
                                class="h-12 w-12 object-contain object-center"
                                *ngIf="qr_code"
                                [src]="qr_code"
                            />
                        </div>
                    </div>
                </div>
                <mat-menu #guest_menu="matMenu">
                    <button
                        mat-menu-item
                        [disabled]="!row.attachment?.length"
                        [matMenuTriggerFor]="attachment_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">attachment</app-icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VISITORS_ACTION_ATTACHMENTS'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        *ngIf="
                            has_parking &&
                            !row.extension_data.parking_booking_id
                        "
                        (click)="reserveParking(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">directions_car</app-icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VISITORS_ACTION_PARKING'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        *ngIf="can_email_visitors"
                        (click)="emailVisitor(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">attach_email</app-icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VISITORS_ACTION_EMAIL'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <mat-menu #menu="matMenu">
                        <a
                            *ngFor="let item of row.attachments"
                            [href]="item.url"
                            mat-menu-item
                        >
                            {{ item.name }}
                        </a>
                    </mat-menu>
                    <button
                        mat-menu-item
                        (click)="
                            setExt(row, 'remote', !row.extension_data.remote)
                        "
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">
                                {{
                                    row.extension_data.remote
                                        ? 'business'
                                        : 'laptop'
                                }}
                            </app-icon>
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
                    <button
                        mat-menu-item
                        *ngIf="can_print"
                        (click)="printQRCode()"
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">print</app-icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VISITORS_ACTION_PRINT_QR'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <button
                        mat-menu-item
                        *ngIf="allow_printing_label && row.checked_in"
                        (click)="printVisitorPass(row, $event)"
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">badge</app-icon>
                            <div>
                                {{
                                    'APP.CONCIERGE.VISITORS_ACTION_PRINT_PASS'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                    <a mat-menu-item [href]="'mailto:' + row?.asset_id">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">email</app-icon>
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
                    <button
                        mat-menu-item
                        (click)="row.checked_in ? checkout(row) : checkin(row)"
                        *ngIf="!row.checked_out_at"
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">
                                {{
                                    row.checked_in
                                        ? 'event_busy'
                                        : 'event_available'
                                }}
                            </app-icon>
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
                    <ng-container *ngIf="row.linked_event">
                        <button mat-menu-item (click)="checkinAllVisitors(row)">
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl">
                                    event_available
                                </app-icon>
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
                                <app-icon class="text-2xl text-error">
                                    event_busy
                                </app-icon>
                                <div>
                                    {{
                                        'APP.CONCIERGE.VISITORS_ACTION_CHECKOUT_ALL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </ng-container>
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
                    matRipple
                    (click)="editVisitorNotes(row)"
                >
                    <app-icon class="text-2xl">edit_square</app-icon>
                </button>
                <div
                    class="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-info text-info-content"
                    *ngIf="row.extension_data?.notes?.length"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITORS_NOTES_AVAILABLE' | translate
                    "
                >
                    <app-icon
                        className="material-symbols-rounded"
                        class="text-sm"
                    >
                        info_i
                    </app-icon>
                </div>
            </div>
        </ng-template>
        <button
            class="absolute bottom-4 right-4 z-20 h-12 w-12 bg-secondary text-white shadow hover:shadow-lg"
            [matTooltip]="'APP.CONCIERGE.VISITORS_DOWNLOAD' | translate"
            matTooltipPosition="left"
            icon
            matRipple
            *ngIf="(guests | async)?.length"
            (click)="downloadVisitorList()"
        >
            <app-icon>download</app-icon>
        </button>
        <div class="h-8 w-full"></div>
    `,
    styles: [``],
    standalone: false,
})
export class GuestListingComponent extends AsyncHandler {
    public readonly guests = this._state.filtered_bookings;
    public readonly search = this._state.search;
    public readonly filters = this._state.filters;
    public inductions_enabled = false;
    public qr_code = '';

    public hide_field(id: string) {
        return (this._settings.get('app.visitors.hide_fields') || []).includes(
            id,
        );
    }

    public get extra_width() {
        const hide = this._settings.get('app.visitors.hide_fields') || [];
        return Math.max(0, 3 - hide.length) * 6;
    }

    public get timezone() {
        const use_tz = this._settings.get('app.bookings.use_building_timezone');
        const bld_tz = this._org.building.timezone;
        return use_tz &&
            bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone
            ? bld_tz
            : '';
    }

    public get tz() {
        const tz = this.timezone;
        if (!tz) return '';
        return getTimezoneOffsetString(tz);
    }

    public get allow_printing_label() {
        return (
            this._settings.get('app.visitors.allow_printing_label') !== false
        );
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

    public get logo() {
        return this._settings.theme === 'dark'
            ? this._settings.get('app.logo_dark')
            : this._settings.get('app.logo_light');
    }

    public printVisitorPass(item: Booking) {
        this.qr_code = generateQRCode(item.asset_id);
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

    constructor(
        private _state: VisitorsStateService,
        private _parking: ParkingStateService,
        private _settings: SettingsService,
        private _org: OrganisationService,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'building',
            this._org.active_building.subscribe(async (bld) => {
                if (!bld) return;
                const visitor_kiosk_app =
                    this._settings.get('app.visitor_kiosk_app') ||
                    'visitor-kiosk_app';
                const metadata: any = await lastValueFrom(
                    showMetadata(bld.id, visitor_kiosk_app),
                );
                const org_metadata: any = await lastValueFrom(
                    showMetadata(this._org.organisation.id, visitor_kiosk_app),
                );
                const data = {
                    ...(org_metadata.details || {}),
                    ...(metadata.details || {}),
                };
                this.inductions_enabled =
                    data?.induction_enabled && data?.induction_details;
            }),
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
        await lastValueFrom(
            saveBooking(
                new Booking({ ...item, parking_booking_id: id } as any),
            ),
        );
        this._state.poll();
    }
}
