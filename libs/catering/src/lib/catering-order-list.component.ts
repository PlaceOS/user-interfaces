import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringOrderItemComponent } from './catering-order-item.component';
import { CateringOrdersService } from './catering-orders.service';
import { statusList } from './catering.vars';

@Component({
    selector: 'catering-order-list',
    template: `
        <div class="flex h-full w-full flex-col overflow-auto">
            <mat-progress-bar
                [class.opacity-0]="!(loading | async)"
                class="sticky left-0 top-0 w-full"
                mode="indeterminate"
            ></mat-progress-bar>
            <simple-table
                class="block w-full min-w-[72rem] text-sm"
                [data]="order_list"
                [columns]="[
                    {
                        key: 'state',
                        name: ' ',
                        size: '4rem',
                        sortable: false,
                        content: state_template,
                    },
                    {
                        key: 'caterer',
                        name: 'CATERING.CATERER' | translate,
                        show:
                            !filters?.caterer && (caterers | async)?.length > 1,
                    },
                    {
                        key: 'deliver_at',
                        name: 'COMMON.TIME' | translate,
                        content: time_template,
                    },
                    {
                        key: 'event',
                        name: 'COMMON.LOCATION' | translate,
                        content: location_template,
                        sortable: false,
                    },
                    {
                        key: 'event',
                        name: 'FORM.HOST' | translate,
                        content: host_template,
                        sortable: false,
                    },
                    {
                        key: 'charge_code',
                        name: 'CATERING.CHARGE_CODE' | translate,
                    },
                    {
                        key: 'invoice_number',
                        name: 'CATERING.INVOICE_NUMBER' | translate,
                        empty: 'No Invoice',
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '11rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        size: '6.5rem',
                        content: actions_template,
                        sortable: false,
                    },
                ]"
                [sortable]="true"
                [show_children]="show_children"
                [child_template]="child_template"
                [empty_message]="'CATERING.ORDERS_EMPTY' | translate"
            >
            </simple-table>
            <ng-template #state_template let-data="data">
                <div class="p-2">
                    <div
                        class="flex items-center justify-center rounded-full bg-base-200 p-2 text-2xl"
                    >
                        <icon>room_service</icon>
                    </div>
                </div>
            </ng-template>
            <ng-template #time_template let-data="data" let-row="row">
                <div class="p-4">
                    <div>
                        {{
                            'CATERING.ORDERS_DELIVER_TIME'
                                | translate: { time: data | date: time_format }
                        }}
                    </div>
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
                @let space = data?.system;
                @if (space || !data?.location) {
                    <div class="px-4 py-2">
                        {{ space?.display_name || space?.name || '' }}
                        @if (!(space?.display_name || space?.name)) {
                            <span class="opacity-30">
                                {{
                                    'CATERING.ORDERS_LOCATION_EMPTY' | translate
                                }}
                            </span>
                        }
                    </div>
                } @else {
                    <div class="px-4 py-2">{{ data?.location }}</div>
                }
            </ng-template>
            <ng-template #host_template let-data="data">
                <div class="px-4 py-2">
                    <div>
                        {{ data?.organiser?.name || data?.host || '' }}
                        @if (!(data?.organiser?.name || data?.host)) {
                            <span class="opacity-30"> Unknown Host </span>
                        }
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
                        class="flex h-10 w-36 items-center rounded-3xl border-none px-4 text-base text-white"
                        [style.background]="status(data)?.colour"
                        [matMenuTriggerFor]="menu"
                    >
                        <div class="mx-2 flex text-center capitalize">
                            {{ status(data)?.name }}
                        </div>
                        <icon class="pl-2">arrow_drop_down</icon>
                    </button>
                </div>
                <mat-menu #menu="matMenu">
                    @for (status of statuses; track status) {
                        <button
                            mat-menu-item
                            class="flex items-center"
                            (click)="updateStatus(row, status.id)"
                        >
                            <div class="flex items-center space-x-2">
                                <div
                                    class="mr-2 h-4 w-4 rounded-full"
                                    [style.background-color]="status.colour"
                                ></div>
                                <span class="mr-2 w-20">{{ status.name }}</span>
                            </div>
                        </button>
                    }
                </mat-menu>
            </ng-template>
            <ng-template #actions_template let-row="row">
                <div class="mx-auto flex items-center space-x-2 p-2">
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
                        <icon>description</icon>
                    </button>
                    <ng-template #notes_template>
                        <div
                            class="min-w-[8rem] max-w-[32rem] rounded-lg border border-base-200 bg-base-100 p-2 text-base-content shadow"
                        >
                            <div class="mb-2">
                                {{ 'FORM.NOTES' | translate }}
                            </div>
                            <p class="rounded bg-base-200 px-4 py-2 text-sm">
                                {{ row.notes }}
                            </p>
                        </div>
                    </ng-template>
                    <button
                        icon
                        matRipple
                        (click)="show_children[row.id] = !show_children[row.id]"
                    >
                        <icon>
                            {{
                                show_children[row.id]
                                    ? 'keyboard_arrow_down'
                                    : 'chevron_right'
                            }}
                        </icon>
                    </button>
                </div>
            </ng-template>
            <ng-template #child_template let-row="row">
                @if (row?.items.length) {
                    <ul class="relative z-0 m-0 w-full list-none p-0">
                        @for (item of row.items; track item; let i = $index) {
                            <li
                                catering-order-item
                                class="flex items-center"
                                [order_id]="row?.id"
                                [item]="item"
                            ></li>
                        }
                    </ul>
                }
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
    imports: [
        CommonModule,
        CateringOrderItemComponent,
        MatRippleModule,
        TranslatePipe,
        CustomTooltipComponent,
        MatMenuModule,
        SimpleTableComponent,
        MatProgressBarModule,
        IconComponent,
    ],
})
export class CateringOrderListComponent extends AsyncHandler implements OnInit {
    private _orders = inject(CateringOrdersService);
    private _settings = inject(SettingsService);

    /** List of filtered orders */
    public readonly order_list = this._orders.filtered;
    /** Whether order list is loading */
    public readonly loading = this._orders.loading;

    public get filters() {
        return this._orders.filters;
    }

    public caterers = this._orders.caterers;

    public statuses = [];
    public readonly show_children: Record<string, boolean> = {};

    public readonly updateStatus = async (order, s) => {
        await this._orders.updateStatus(order, s);
        this.timeout('status-change', () => ((order as any).status = s));
    };

    public get time_format() {
        return this._settings.time_format;
    }

    public status(value: string) {
        return this.statuses.find((i) => i.id === value);
    }

    constructor() {
        super();
    }

    public ngOnInit() {
        this.statuses = statusList();
        this.subscription('polling', this._orders.startPolling());
    }
}
