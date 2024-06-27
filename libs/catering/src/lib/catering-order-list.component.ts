import { Component } from '@angular/core';
import { CateringOrder } from './catering-order.class';

import { CateringOrdersService } from './catering-orders.service';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { CATERING_STATUSES } from './catering.vars';

@Component({
    selector: 'catering-order-list',
    template: `
        <div class="flex flex-col h-full w-full overflow-auto">
            <!-- <mat-progress-bar
                [class.opacity-0]="!(loading | async)"
                class="w-full"
                mode="indeterminate"
            ></mat-progress-bar> -->
            <simple-table
                class="min-w-[72rem] w-full block text-sm"
                [data]="order_list"
                [columns]="[
                    {
                        key: 'state',
                        name: ' ',
                        size: '4rem',
                        sortable: false,
                        content: state_template
                    },
                    {
                        key: 'deliver_at',
                        name: 'Time',
                        content: time_template
                    },
                    {
                        key: 'event',
                        name: 'Location',
                        content: location_template,
                        sortable: false
                    },
                    {
                        key: 'event',
                        name: 'Host',
                        content: host_template,
                        sortable: false
                    },
                    { key: 'charge_code', name: 'Charge Code' },
                    {
                        key: 'invoice_number',
                        name: 'Invoice No.',
                        empty: 'No Invoice'
                    },
                    {
                        key: 'status',
                        name: 'Status',
                        content: status_template,
                        size: '11rem'
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6.5rem',
                        content: actions_template,
                        sortable: false
                    }
                ]"
                [sortable]="true"
                [show_children]="show_children"
                [child_template]="child_template"
                empty_message="No Catering Orders"
            >
            </simple-table>
            <ng-template #state_template let-data="data">
                <div class="p-2">
                    <div
                        class="rounded-full bg-base-200 p-2 text-2xl flex items-center justify-center"
                    >
                        <app-icon>room_service</app-icon>
                    </div>
                </div>
            </ng-template>
            <ng-template #time_template let-data="data" let-row="row">
                <div class="p-4">
                    <div>Deliver at {{ data | date: time_format }}</div>
                    <div class="text-xs opacity-30">
                        {{ row?.event?.date | date: 'MMM d' }},
                        {{ row?.event?.date | date: time_format }}
                        -
                        {{ row?.event?.date_end | date: 'MMM d' }},
                        {{ row?.event?.date_end | date: time_format }}
                    </div>
                </div>
            </ng-template>
            <ng-template #location_template let-data="data">
                <div class="px-4 py-2">
                    {{ data?.space?.display_name || data?.space?.name || '' }}
                    <span
                        class="opacity-30"
                        *ngIf="
                            !(data?.space?.display_name || data?.space?.name)
                        "
                    >
                        No Location
                    </span>
                </div>
            </ng-template>
            <ng-template #host_template let-data="data">
                <div class="px-4 py-2">
                    <div>
                        {{ data?.organiser?.name || data?.host || '' }}
                        <span
                            class="opacity-30"
                            *ngIf="!(data?.organiser?.name || data?.host)"
                        >
                            Unknown Host
                        </span>
                    </div>
                    <div class="text-xs opacity-30">
                        {{ data?.organiser?.email || data?.host }}
                    </div>
                </div>
            </ng-template>
            <ng-template #status_template let-row="row" let-data="data">
                <div class="px-4 py-2">
                    <button
                        status
                        matRipple
                        class="rounded-3xl text-base border-none h-10 px-4 flex items-center text-white w-36"
                        [style.background]="status(data)?.colour"
                        [matMenuTriggerFor]="menu"
                    >
                        <div class="flex text-center capitalize mx-2">
                            {{ status(data)?.name }}
                        </div>
                        <app-icon class="pl-2">arrow_drop_down</app-icon>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    <button
                        mat-menu-item
                        *ngFor="let status of statuses"
                        class="flex items-center"
                        (click)="updateStatus(row, status.id)"
                    >
                        <div class="flex items-center space-x-2">
                            <div
                                class="rounded-full h-4 w-4 mr-2"
                                [style.background-color]="status.colour"
                            ></div>
                            <span class="mr-2 w-20">{{ status.name }}</span>
                        </div>
                    </button>
                </mat-menu>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="flex items-center space-x-2 p-2 mx-auto">
                    <button
                        icon
                        matRipple
                        customTooltip
                        [hover]="true"
                        xPosition="end"
                        yPosition="top"
                        [content]="notes_template"
                        [disabled]="!row.notes"
                    >
                        <app-icon>description</app-icon>
                    </button>
                    <ng-template #notes_template>
                        <div
                            class="p-2 rounded-lg bg-base-100 text-base-content max-w-[32rem] min-w-[8rem] shadow border border-base-200"
                        >
                            <div class="mb-2">Notes</div>
                            <p class="text-sm px-4 py-2 bg-base-200 rounded">
                                {{ row.notes }}
                            </p>
                        </div>
                    </ng-template>
                    <button
                        icon
                        matRipple
                        (click)="show_children[row.id] = !show_children[row.id]"
                    >
                        <app-icon>
                            {{
                                show_children[row.id]
                                    ? 'keyboard_arrow_down'
                                    : 'chevron_right'
                            }}
                        </app-icon>
                    </button>
                </div>
            </ng-template>
            <ng-template #child_template let-row="row">
                <ul
                    *ngIf="row?.items.length"
                    class="list-none p-0 m-0 w-full relative z-0"
                >
                    <li
                        catering-order-item
                        class="flex items-center"
                        *ngFor="let item of row.items; let i = index"
                        [order_id]="row?.id"
                        [item]="item"
                    ></li>
                </ul>
            </ng-template>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class CateringOrderListComponent extends AsyncHandler {
    /** List of filtered orders */
    public readonly order_list = this._orders.filtered;
    /** Whether order list is loading */
    public readonly loading = this._orders.loading;

    public readonly statuses = CATERING_STATUSES;
    public readonly show_children: Record<string, boolean> = {};

    public readonly updateStatus = async (order, s) => {
        await this._orders.updateStatus(order, s);
        this.timeout('status-change', () => ((order as any).status = s));
    };

    public get time_format() {
        return this._settings.time_format;
    }

    public status(value: string) {
        return CATERING_STATUSES.find((i) => i.id === value);
    }

    constructor(
        private _orders: CateringOrdersService,
        private _settings: SettingsService
    ) {
        super();
    }

    public ngOnInit() {
        this._orders.startPolling();
    }

    public ngOnDestroy() {
        this._orders.stopPolling();
    }

    /* istanbul ignore next */
    public trackByFn(index: number, order: CateringOrder) {
        return order ? order.id : undefined;
    }
}
