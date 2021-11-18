import { Component } from '@angular/core';
import { VisitorsStateService } from './visitors-state.service';

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
                [columns]="[
                    'state',
                    'date',
                    'name',
                    'host',
                    'email',
                    'status',
                    'actions'
                ]"
                [display_column]="[
                    ' ',
                    'Date',
                    'Person',
                    'Host',
                    'Email',
                    'State',
                    ' '
                ]"
                [column_size]="[
                    '3.5r',
                    '8r',
                    '12r',
                    '12r',
                    'flex',
                    '10r',
                    '12r'
                ]"
                [template]="{
                    state: state_template,
                    status: status_template,
                    date: date_template,
                    host: host_template,
                    actions: action_template
                }"
                [empty]="
                    (search | async)
                        ? 'No matching visitors'
                        : 'There are visitors for the currently selected date.'
                "
            ></custom-table>
        </div>
        <ng-template #state_template let-row="row">
            <i
                *ngIf="!row?.checked_in; else checkin_state"
                class="p-2 rounded-full material-icons border-2 border-dotted border-gray-600"
                >face</i
            >
            <ng-template #checkin_state>
                <i
                    class="p-2 rounded-full material-icons bg-green-600 border-2 border-green-600 text-white"
                    >done</i
                >
            </ng-template>
        </ng-template>
        <ng-template #host_template let-row="row">
            {{ row.extension_data?.host }}
        </ng-template>
        <ng-template #status_template let-row="row">
            <button
                mat-button
                class="rounded-3xl bg-pending border-none"
                [class.bg-success]="row?.status === 'approved'"
                [class.!bg-error]="row?.status === 'declined'"
                [matMenuTriggerFor]="menu"
            >
                <div class="flex items-center">
                    <div class="mx-2">
                        {{
                            row?.status === 'approved'
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
                <button mat-menu-item (click)="approveVisitor(row)">Approve Visitor</button>
                <button mat-menu-item (click)="declineVisitor(row)">Decline Visitor</button>
            </mat-menu>
        </ng-template>
        <ng-template #date_template let-row="row">
            {{
                row.extension_data?.date
                    | date
                        : ((filters | async)?.period > 1
                              ? 'MMM d, h:mm a'
                              : 'shortTime')
            }}
        </ng-template>
        <ng-template #action_template let-row="row">
            <button
                mat-icon-button
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
                    remote
                        ? 'Set as In-Person Visitor'
                        : 'Set as Remote Visitior'
                "
                [loading]="loading === 'remote'"
                [content]="remote ? 'tap_and_play' : 'business'"
                (click)="toggleRemote()"
                [class.invisible]="!row?.is_external || row?.organizer"
            >
            </action-icon>
            <action-icon
                checkin
                matTooltip="Checkin Guest"
                [loading]="loading === 'checkin'"
                [state]="row?.checked_in ? 'success' : ''"
                content="event_available"
                (click)="checkin()"
                [class.invisible]="!row?.is_external || row?.organizer"
            >
            </action-icon>
            <action-icon
                checkout
                matTooltip="Checkout Guest"
                [loading]="loading === 'checkout'"
                content="event_busy"
                (click)="checkout()"
                [class.invisible]="!row?.is_external || row?.organizer"
            >
            </action-icon>
            <a
                [href]="'mailto:' + row?.email"
                mat-icon-button
                [matTooltip]="row?.organizer ? 'Email Host' : 'Email Guest'"
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
        </ng-template>
        <button
            class="bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12"
            matTooltip="Download Visitor List"
            matTooltipPosition="left"
            mat-icon-button
            *ngIf="(guests | async)?.length"
            (click)="downloadVisitorList()"
        >
            <app-icon>download</app-icon>
        </button>
    `,
    styles: [``],
})
export class GuestListingComponent {
    public readonly guests = this._state.filtered_guests;
    public readonly search = this._state.search;
    public readonly filters = this._state.filters;

    public readonly downloadVisitorList = () =>
        this._state.downloadVisitorsList();

        public readonly approveVisitor = (u) => this._state.approveVisitor(u);
        public readonly declineVisitor = (u) => this._state.declineVisitor(u);

    constructor(private _state: VisitorsStateService) {}
}
