import { Component } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { VisitorsStateService } from './visitors-state.service';
import { Booking, saveBooking } from '@placeos/bookings';
import { showMetadata } from '@placeos/ts-client';
import { OrganisationService } from '@placeos/organisation';
import { ParkingStateService } from '../parking/parking-state.service';
import { User } from '@placeos/users';

@Component({
    selector: 'guest-listings',
    template: `
        <div
            class="w-full min-h-full flex flex-col flex-1 text-sm h-full overflow-auto pb-20"
        >
            <simple-table
                class="min-w-[64rem] block text-sm"
                [data]="guests"
                [columns]="[
                    {
                        key: 'state',
                        name: 'Checked In',
                        content: state_template,
                        size: '5.5rem',
                        sortable: false
                    },
                    {
                        key: 'date',
                        name: 'Time',
                        content: date_template,
                        size: '6rem'
                    },
                    {
                        key: 'asset_name',
                        name: 'Visitor',
                        content: person_template
                    },
                    { key: 'user_name', name: 'Host', content: host_template },
                    {
                        key: 'status',
                        name: 'State',
                        content: status_template,
                        size: '9.5rem'
                    },
                    {
                        key: 'induction',
                        name: 'Inducted',
                        content: boolean_template,
                        show: !!inductions_enabled,
                        size: '5.5rem'
                    },
                    {
                        key: 'parking_space',
                        name: 'Parking',
                        content: parking_template,
                        show: !!has_parking,
                        size: '5.5rem'
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        size: '3.25rem',
                        sortable: false
                    }
                ]"
                [filter]="search | async"
                [sortable]="true"
            ></simple-table>
        </div>
        <ng-template #state_template let-row="row">
            <div
                *ngIf="!row?.checked_in && row.checked_out_at"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-content text-base-100 mx-auto"
                [matTooltip]="
                    'Checked out at ' + (row.checked_out_at | date: time_format)
                "
                matTooltipPosition="right"
            >
                <app-icon>done</app-icon>
            </div>
            <div
                *ngIf="!row?.checked_in && !row.checked_out_at"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto"
                matTooltip="Not checked in"
                matTooltipPosition="right"
            >
                <app-icon>question_mark</app-icon>
            </div>
            <div
                *ngIf="row?.checked_in"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto"
                matTooltip="Checked In"
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
                    class="opacity-30 text-xs"
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
                    class="opacity-30 text-xs"
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
            </div>
            <ng-template #id_confirmation>
                <div
                    class="bg-base-100 rounded p-2 flex flex-col space-y-2 my-2 w-[20rem]"
                >
                    <img
                        [src]="row.extension_data?.id_data?.url"
                        class="max-w-[20rem] max-h-[20rem] object-contain"
                    />
                    <button
                        matRipple
                        (click)="setExt(row, 'id_confirmed', true)"
                    >
                        Confirm ID
                    </button>
                    <button
                        matRipple
                        class="inverse mt-2"
                        (click)="setExt(row, 'id_confirmed', false)"
                    >
                        Reject ID
                    </button>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #parking_template let-row="row">
            <div
                *ngIf="row.extension_data.parking_booking_id"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto"
            >
                <app-icon>done</app-icon>
            </div>
        </ng-template>
        <ng-template #boolean_template let-row="row">
            <div
                *ngIf="row.induction"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto"
            >
                <app-icon>done</app-icon>
            </div>
            <div
                *ngIf="
                    !row.induction && !row.process_state.includes('declined')
                "
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto"
            >
                <app-icon>question_mark</app-icon>
            </div>
            <div
                *ngIf="!row.induction && row.process_state.includes('declined')"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-error text-error-content mx-auto"
            >
                <app-icon>close</app-icon>
            </div>
        </ng-template>
        <ng-template #status_template let-row="row">
            <div class="px-4">
                <button
                    matRipple
                    class="rounded-3xl bg-warning text-warning-content border-none w-[7.5rem] h-10"
                    [class.!text-success-content]="row?.status === 'approved'"
                    [class.!bg-success]="row?.status === 'approved'"
                    [class.!text-error-content]="row?.status === 'declined'"
                    [class.!bg-error]="row?.status === 'declined'"
                    [class.!text-neutral-content]="row?.status === 'ended'"
                    [class.!bg-neutral]="row?.status === 'ended'"
                    [class.opacity-30]="row?.status === 'ended'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="row?.status === 'ended'"
                >
                    <div class="flex items-center pl-4 pr-2 space-x-2">
                        <div class="flex-1 text-left">
                            {{
                                row?.status === 'ended'
                                    ? 'Ended'
                                    : row?.status === 'approved'
                                    ? 'Approved'
                                    : row?.status === 'declined'
                                    ? 'Declined'
                                    : 'Pending'
                            }}
                        </div>
                        <app-icon class="text-2xl">arrow_drop_down</app-icon>
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approveVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">event_available</app-icon>
                        <div class="pr-2">Approve Visitor</div>
                    </div>
                </button>
                <button mat-menu-item (click)="declineVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">event_busy</app-icon>
                        <div class="pr-2">Decline Visitor</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #date_template let-row="row">
            <div class="px-4">
                {{
                    row.date
                        | date
                            : ((filters | async)?.period > 1
                                  ? 'MMM d, ' + time_format
                                  : time_format)
                }}
            </div>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end px-2">
                <button icon matRipple [matMenuTriggerFor]="guest_menu">
                    <app-icon>more_horiz</app-icon>
                </button>
                <mat-menu #guest_menu="matMenu">
                    <button
                        mat-menu-item
                        [disabled]="!row.attachment?.length"
                        [matMenuTriggerFor]="attachment_menu"
                    >
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">attachment</app-icon>
                            <div>View Attachments</div>
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
                            <div>Reserve Parking Space</div>
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
                    <button mat-menu-item (click)="setExt(row, 'remote', true)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">
                                {{
                                    row.extension_data.remote
                                        ? 'business'
                                        : 'laptop'
                                }}
                            </app-icon>
                            <div>
                                Set as
                                {{
                                    row.extension_data.remote
                                        ? 'Onsite'
                                        : 'Remote'
                                }}
                                Visitor
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
                            <div>Print QR Code</div>
                        </div>
                    </button>
                    <a mat-menu-item [href]="'mailto:' + row?.asset_id">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">email</app-icon>
                            <div>
                                Email
                                {{
                                    row?.user_email === row?.asset_id
                                        ? 'Host'
                                        : 'Guest'
                                }}
                            </div>
                        </div>
                    </a>
                    <button
                        mat-menu-item
                        (click)="row.checked_in ? checkout(row) : checkin(row)"
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
                                {{ row.checked_in ? 'Checkout' : 'Checkin' }}
                                Guest
                            </div>
                        </div>
                    </button>
                    <ng-container *ngIf="row.linked_event">
                        <button mat-menu-item (click)="checkinAllVisitors(row)">
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl">
                                    event_available
                                </app-icon>
                                <div>Checkin all for Meeting</div>
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
                                <div>Checkout all for Meeting</div>
                            </div>
                        </button>
                    </ng-container>
                </mat-menu>
            </div>
        </ng-template>
        <button
            class="bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12"
            matTooltip="Download Visitor List"
            matTooltipPosition="left"
            icon
            matRipple
            *ngIf="(guests | async)?.length"
            (click)="downloadVisitorList()"
        >
            <app-icon>download</app-icon>
        </button>
    `,
    styles: [``],
})
export class GuestListingComponent extends AsyncHandler {
    public readonly guests = this._state.filtered_bookings;
    public readonly search = this._state.search;
    public readonly filters = this._state.filters;
    public inductions_enabled = false;

    public readonly downloadVisitorList = () =>
        this._state.downloadVisitorsList();

    public readonly approveVisitor = (u) => this._state.approveVisitor(u);
    public readonly declineVisitor = (u) => this._state.declineVisitor(u);
    public readonly checkinAllVisitors = (u) =>
        this._state.setCheckinStateForEvent(u.linked_event?.id, true);
    public readonly checkoutAllVisitors = (u) =>
        this._state.setCheckinStateForEvent(u.linked_event?.id, false);
    public readonly setExt = (u, f, v) => this._state.setExt(u, f, v);

    public readonly checkin = async (item: Booking) => {
        await this._state.setCheckinState(item, true);
        this._state.poll();
    };

    public readonly checkout = async (item: Booking) => {
        await this._state.setCheckinState(item, false);
        this._state.poll();
    };

    public get has_parking() {
        return (
            this._settings.get('app.features')?.includes('parking') &&
            this._settings.get('app.visitors.has_parking')
        );
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: VisitorsStateService,
        private _parking: ParkingStateService,
        private _settings: SettingsService,
        private _org: OrganisationService
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
                const metadata: any = await showMetadata(
                    bld.id,
                    visitor_kiosk_app
                ).toPromise();
                this.inductions_enabled =
                    metadata.details?.induction_enabled &&
                    metadata.details?.induction_details;
            })
        );
    }

    public async reserveParking(item: Booking) {
        const id = await this._parking.editReservation(undefined, {
            user: new User({ email: item.asset_id, name: item.asset_name }),
            link_id: item.id,
            date: item.date,
        });
        if (id) {
            await saveBooking(
                new Booking({ ...item, parking_booking_id: id } as any)
            ).toPromise();
            this._state.poll();
        }
    }
}
