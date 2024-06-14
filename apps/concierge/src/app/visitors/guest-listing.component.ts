import { Component } from '@angular/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { VisitorsStateService } from './visitors-state.service';
import { Booking } from '@placeos/bookings';
import { showMetadata } from '@placeos/ts-client';
import { OrganisationService } from '@placeos/organisation';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'guest-listings',
    template: `
        <div
            class="w-full flex flex-col flex-1 text-sm h-full overflow-auto pb-20"
        >
            <custom-table
                class="min-w-[80rem]"
                [dataSource]="guests"
                [filter]="search | async"
                [columns]="columns"
                [display_column]="display_columns"
                [column_size]="column_sizes"
                [template]="{
                    state: state_template,
                    status: status_template,
                    date: date_template,
                    host: host_template,
                    id_data: id_template,
                    actions: action_template,
                    induction: boolean_template
                }"
                [empty]="
                    (search | async)
                        ? 'No matching visitors'
                        : 'There are visitors for the currently selected date.'
                "
            ></custom-table>
        </div>
        <ng-template #state_template let-row="row">
            <div
                *ngIf="!row?.checked_in && row.checked_out_at"
                class="rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-400 text-neutral-content mx-auto"
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
        <ng-template #host_template let-row="row">
            {{ row.extension_data?.host }}
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
            <button
                matRipple
                class="rounded-3xl bg-warning text-warning-content border-none"
                [class.!text-success-content]="row?.status === 'approved'"
                [class.!bg-success]="row?.status === 'approved'"
                [class.!text-error-content]="row?.status === 'declined'"
                [class.!bg-error]="row?.status === 'declined'"
                [class.!text-neutral-content]="row?.status === 'ended'"
                [class.!bg-neutral]="row?.status === 'ended'"
                [class.opacity-60]="row?.status === 'ended'"
                [matMenuTriggerFor]="menu"
                [disabled]="row?.status === 'ended'"
            >
                <div class="flex items-center">
                    <div class="mx-2">
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
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approveVisitor(row)">
                    Approve Visitor
                </button>
                <button mat-menu-item (click)="declineVisitor(row)">
                    Decline Visitor
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #date_template let-row="row">
            {{
                row.date
                    | date
                        : ((filters | async)?.period > 1
                              ? 'MMM d, ' + time_format
                              : time_format)
            }}
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex items-center justify-end">
                <button
                    icon
                    matRipple
                    [class.pointer-events-none]="!row.linked_event"
                    [matMenuTriggerFor]="checkin_menu"
                >
                    <app-icon
                        class="text-2xl"
                        [class.opacity-0]="!row.linked_event"
                    >
                        event
                    </app-icon>
                </button>
                <mat-menu #checkin_menu="matMenu">
                    <button mat-menu-item (click)="checkinAllVisitors(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">
                                event_available
                            </app-icon>
                            <div>Checkin All for Booking</div>
                        </div>
                    </button>
                    <button mat-menu-item (click)="checkoutAllVisitors(row)">
                        <div class="flex items-center space-x-2">
                            <app-icon class="text-2xl">event_busy</app-icon>
                            <div>Checkout All for Booking</div>
                        </div>
                    </button>
                </mat-menu>
                <button
                    icon
                    matRipple
                    [disabled]="!row.attachments?.length"
                    title=""
                    matTooltip="View Attachments"
                    [matMenuTriggerFor]="menu"
                >
                    <app-icon>attachment</app-icon>
                </button>
                <mat-menu #menu="matMenu">
                    <a
                        *ngFor="let item of row.attachments"
                        [href]="item.url"
                        mat-menu-item
                        >{{ item.name }}</a
                    >
                </mat-menu>
                <action-icon
                    remote
                    [matTooltip]="
                        row.extension_data.remote
                            ? 'Set as In-Person Visitor'
                            : 'Set as Remote Visitior'
                    "
                    [loading]="loading === 'remote'"
                    [content]="
                        row.extension_data.remote ? 'tap_and_play' : 'business'
                    "
                    (click)="setExt(row, 'remote', !row.extension_data.remote)"
                >
                </action-icon>
                <action-icon
                    checkin
                    matTooltip="Checkin Guest"
                    [loading]="loading === 'checkin'"
                    [state]="row?.checked_in ? 'success' : ''"
                    content="event_available"
                    (click)="checkin(row)"
                >
                </action-icon>
                <action-icon
                    checkout
                    matTooltip="Checkout Guest"
                    [loading]="loading === 'checkout'"
                    content="event_busy"
                    (click)="checkout(row)"
                >
                </action-icon>
                <a
                    [href]="'mailto:' + row?.asset_id"
                    icon
                    matRipple
                    [matTooltip]="
                        row?.user_email === row?.asset_id
                            ? 'Email Host'
                            : 'Email Guest'
                    "
                >
                    <app-icon>email</app-icon>
                </a>
                <action-icon
                    matTooltip="Print QR Code"
                    [loading]="loading === 'printing'"
                    content="event_busy"
                    (click)="printQRCode()"
                    [class.invisible]="!can_print"
                >
                </action-icon>
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
    public readonly guests = this._state.filtered_bookings.pipe(
        tap((_: any) => console.log(_))
    );
    public readonly search = this._state.search;
    public readonly filters = this._state.filters;
    private _inductions_enabled = false;

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

    public get columns() {
        return this._inductions_enabled
            ? [
                  'state',
                  'date',
                  'asset_name',
                  'user_name',
                  'asset_id',
                  'status',
                  'induction',
                  'actions',
              ]
            : [
                  'state',
                  'date',
                  'asset_name',
                  'user_name',
                  'asset_id',
                  'status',
                  'actions',
              ];
    }

    public get display_columns() {
        const fields = {
            state: 'Checked In',
            date: 'Time',
            asset_name: 'Person',
            user_name: 'Host',
            asset_id: 'Email',
            id_data: 'ID',
            status: 'State',
            induction: 'Inducted',
            actions: ' ',
        };
        return this.columns.map((_) => fields[_] || _);
    }

    public get column_sizes() {
        const fields = {
            state: '4.5r',
            date: '8r',
            asset_name: '12r',
            user_name: '12r',
            asset_id: 'flex',
            id_data: '8r',
            status: '10r',
            actions: '16r',
            induction: '5r',
        };
        return this.columns.map((_) => fields[_] || _);
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _state: VisitorsStateService,
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
                this._inductions_enabled =
                    metadata.details?.induction_enabled &&
                    metadata.details?.induction_details;
            })
        );
    }
}
