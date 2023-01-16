import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { VisitorsStateService } from './visitors-state.service';

@Component({
    selector: 'guest-listings',
    template: `
        <div
            class="w-full flex flex-col flex-1 text-sm h-full overflow-auto pb-20"
        >
            <custom-table
                class="min-w-[88rem]"
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
                    vaccinated: vaccinated_template,
                    id_data: id_template,
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
                class="p-2 rounded-full material-icons border-2 border-dotted border-gray-600 dark:border-neutral-800"
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
        <ng-template #vaccinated_template let-row="row">
            <div customTooltip [content]="vaccine_confirmation">
                <button
                    matRipple
                    *ngIf="row.extension_data?.vaccination_proof?.url"
                    class="bg-success rounded-3xl px-4 py-2 text-white"
                >
                    {{
                        row.extension_data?.vaccination_confirmed
                            ? 'Confirmed'
                            : row.extension_data?.vaccination_confirmed ===
                              false
                            ? 'Rejected'
                            : 'Submitted'
                    }}
                </button>
            </div>
            <ng-template #vaccine_confirmation>
                <div
                    class="bg-white rounded p-2 flex flex-col space-y-2 my-2 w-[20rem]"
                >
                    <img
                        [src]="row.extension_data?.vaccination_proof?.url"
                        class="max-w-[20rem] max-h-[20rem] p-2 object-contain"
                    />
                    <button
                        matRipple
                        (click)="setExt(row, 'vaccination_confirmed', true)"
                    >
                        Confirm Vaccination Proof
                    </button>
                    <button
                        matRipple
                        class="inverse mt-2"
                        (click)="setExt(row, 'vaccination_confirmed', false)"
                    >
                        Reject Vaccination Proof
                    </button>
                </div>
            </ng-template>
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
                    class="bg-white rounded p-2 flex flex-col space-y-2 my-2 w-[20rem]"
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
        <ng-template #status_template let-row="row">
            <button
                matRipple
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
                row.extension_data?.date
                    | date
                        : ((filters | async)?.period > 1
                              ? 'MMM d, h:mm a'
                              : 'shortTime')
            }}
        </ng-template>
        <ng-template #action_template let-row="row">
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
                icon
                matRipple
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
export class GuestListingComponent {
    public readonly guests = this._state.filtered_guests;
    public readonly search = this._state.search;
    public readonly filters = this._state.filters;

    public readonly downloadVisitorList = () =>
        this._state.downloadVisitorsList();

    public readonly approveVisitor = (u) => this._state.approveVisitor(u);
    public readonly declineVisitor = (u) => this._state.declineVisitor(u);
    public readonly setExt = (u, f, v) => this._state.setExt(u, f, v);

    public get columns() {
        return this._settings.get('app.guests.vaccine_check')
            ? [
                  'state',
                  'date',
                  'name',
                  'host',
                  'email',
                  'vaccinated',
                  'id_data',
                  'status',
                  'actions',
              ]
            : ['state', 'date', 'name', 'host', 'email', 'status', 'actions'];
    }

    public get display_columns() {
        const fields = {
            state: ' ',
            date: 'Date',
            name: 'Person',
            host: 'Host',
            email: 'Email',
            vaccinated: 'Vaccinated',
            id_data: 'ID',
            status: 'State',
            actions: ' ',
        };
        return this.columns.map((_) => fields[_] || _);
    }

    public get column_sizes() {
        const fields = {
            state: '3.5r',
            date: '8r',
            name: '12r',
            host: '12r',
            email: 'flex',
            vaccinated: '8r',
            id_data: '8r',
            status: '10r',
            actions: '12r',
        };
        return this.columns.map((_) => fields[_] || _);
    }

    constructor(
        private _state: VisitorsStateService,
        private _settings: SettingsService
    ) {}
}
