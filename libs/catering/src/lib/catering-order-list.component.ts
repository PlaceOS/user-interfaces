import { Component, computed, inject, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    CateringOrder,
    CateringOrderStatus,
    i18n,
    SettingsService,
} from '@placeos/common';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SimpleTableComponent } from 'libs/components/src/lib/simple-table.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringOrderItemComponent } from './catering-order-item.component';
import { CateringOrdersService } from './catering-orders.service';
import {
    CateringStatusFilter,
    nextOrderStatus,
    orderUrgency,
    statusList,
} from './catering.vars';

@Component({
    selector: 'catering-order-list',
    template: `
        <div class="flex h-full w-full flex-col overflow-auto">
            <mat-progress-bar
                [class.opacity-0]="!loading()"
                class="sticky top-0 left-0 w-full"
                mode="indeterminate"
            ></mat-progress-bar>
            @if (load_error()) {
                <div
                    load-error
                    class="bg-error text-error-content mb-2 flex items-center space-x-2 rounded-sm px-4 py-2 text-sm"
                >
                    <icon class="text-xl">cloud_off</icon>
                    <div class="flex-1">
                        {{ 'CATERING.ORDERS_LOAD_ERROR' | translate }}
                    </div>
                    @if (last_updated()) {
                        <div class="opacity-80">
                            {{
                                'COMMON.LAST_UPDATED'
                                    | translate
                                        : {
                                              time:
                                                  last_updated()
                                                  | date: time_format(),
                                          }
                            }}
                        </div>
                    }
                </div>
            }
            <div class="mb-2 flex items-center gap-2 py-1">
                @for (option of status_filters; track option.id) {
                    <button
                        matRipple
                        status-filter
                        class="border-base-300 flex items-center gap-2 rounded-full border px-3 py-1 text-sm whitespace-nowrap"
                        [class.bg-secondary]="status_filter() === option.id"
                        [class.text-secondary-content]="
                            status_filter() === option.id
                        "
                        [class.border-transparent]="
                            status_filter() === option.id
                        "
                        (click)="setStatusFilter(option.id)"
                    >
                        @if (option.colour) {
                            <span
                                class="h-3 w-3 rounded-full"
                                [style.background-color]="option.colour"
                            ></span>
                        }
                        {{ option.name }}
                        <span class="font-mono text-xs opacity-60">
                            {{ status_counts()[option.id] || 0 }}
                        </span>
                    </button>
                }
                <div class="flex-1"></div>
                <button
                    btn
                    matRipple
                    expand-all
                    class="clear flex items-center gap-2 whitespace-nowrap"
                    [disabled]="!order_list().length"
                    (click)="toggleAllExpanded()"
                >
                    <icon class="text-xl">
                        {{ all_expanded() ? 'unfold_less' : 'unfold_more' }}
                    </icon>
                    {{
                        (all_expanded()
                            ? 'COMMON.COLLAPSE_ALL'
                            : 'COMMON.EXPAND_ALL'
                        ) | translate
                    }}
                </button>
            </div>
            <simple-table
                class="block w-full min-w-6xl text-sm"
                [data]="order_list()"
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
                        show: !filters()?.caterer && caterers().length > 1,
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
                        empty: 'CATERING.ORDERS_INVOICE_EMPTY' | translate,
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        size: '15rem',
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
                [show_children]="show_children()"
                [child_template]="child_template"
                [empty_message]="'CATERING.ORDERS_EMPTY' | translate"
            >
            </simple-table>
            <ng-template #state_template let-row="row">
                @let urgency = urgencyOf(row);
                <div class="p-2">
                    <div
                        class="flex items-center justify-center rounded-full p-2 text-2xl"
                        [class.bg-base-200]="!urgency"
                        [class.bg-error]="urgency === 'overdue'"
                        [class.text-error-content]="urgency === 'overdue'"
                        [class.bg-warning]="urgency === 'soon'"
                        [class.text-warning-content]="urgency === 'soon'"
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
                                | translate
                                    : { time: data | date: time_format() }
                        }}
                    </div>
                    <div class="text-xs opacity-30">
                        {{ row?.event?.date | date: 'MMM d' }},
                        {{ row?.event?.date | date: time_format() }}
                        -
                        {{ row?.event?.date_end | date: 'MMM d' }},
                        {{ row?.event?.date_end | date: time_format() }}
                    </div>
                    @let urgency = urgencyOf(row);
                    @if (urgency) {
                        <div
                            urgency
                            class="mt-1 w-fit rounded-sm px-2 py-0.5 text-xs font-medium"
                            [class.bg-error]="urgency === 'overdue'"
                            [class.text-error-content]="urgency === 'overdue'"
                            [class.bg-warning]="urgency === 'soon'"
                            [class.text-warning-content]="urgency === 'soon'"
                        >
                            @if (urgency === 'overdue') {
                                {{ 'CATERING.ORDERS_OVERDUE' | translate }}
                            } @else {
                                {{
                                    'CATERING.ORDERS_DUE_SOON'
                                        | translate
                                            : { minutes: minutesUntil(row) }
                                }}
                            }
                        </div>
                    }
                </div>
            </ng-template>
            <ng-template #location_template let-data="data" let-row="row">
                @let space = row?.space || data?.system;
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
                            <span class="opacity-30">
                                {{ 'CATERING.ORDERS_HOST_EMPTY' | translate }}
                            </span>
                        }
                    </div>
                    <div class="text-xs opacity-30">
                        {{ data?.organiser?.email || data?.host }}
                    </div>
                </div>
            </ng-template>
            <ng-template #status_template let-row="row" let-data="data">
                <div class="flex items-center gap-2 px-4 py-2">
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
                    @let next = nextStatus(data);
                    @if (next) {
                        <button
                            icon
                            matRipple
                            next-status
                            class="h-10 w-10 border-2"
                            [style.border-color]="status(next)?.colour"
                            [matTooltip]="
                                'CATERING.ORDERS_NEXT_STATUS'
                                    | translate: { status: status(next)?.name }
                            "
                            (click)="updateStatus(row, next)"
                        >
                            <icon>
                                {{
                                    next === 'delivered'
                                        ? 'done_all'
                                        : 'arrow_forward'
                                }}
                            </icon>
                        </button>
                    }
                </div>
                <mat-menu #menu="matMenu">
                    @for (status of statuses(); track status) {
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
                    <!-- Hover shows a preview. Click opens the row, which also works on touch screens. -->
                    <button
                        icon
                        notes
                        matRipple
                        customTooltip
                        [hover]="true"
                        xPosition="end"
                        yPosition="top"
                        [content]="notes_template"
                        [disabled]="!row.notes"
                        [class.text-warning]="row.notes"
                        (click)="toggleExpanded(row.id)"
                    >
                        <icon>description</icon>
                    </button>
                    <ng-template #notes_template>
                        <div
                            class="border-base-200 bg-base-100 text-base-content max-w-lg min-w-32 rounded-lg border p-2 shadow-sm"
                        >
                            <div class="mb-2">
                                {{ 'FORM.NOTES' | translate }}
                            </div>
                            <p class="bg-base-200 rounded-sm px-4 py-2 text-sm">
                                {{ row.notes }}
                            </p>
                        </div>
                    </ng-template>
                    <button icon matRipple (click)="toggleExpanded(row.id)">
                        <icon>
                            {{
                                isExpanded(row.id)
                                    ? 'keyboard_arrow_down'
                                    : 'chevron_right'
                            }}
                        </icon>
                    </button>
                </div>
            </ng-template>
            <ng-template #child_template let-row="row">
                @if (row?.notes) {
                    <div
                        order-notes
                        class="bg-warning/20 mx-4 my-2 rounded-sm px-4 py-2 text-sm whitespace-pre-line"
                    >
                        <span class="font-medium">
                            {{ 'FORM.NOTES' | translate }}:
                        </span>
                        {{ row.notes }}
                    </div>
                }
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
        MatTooltipModule,
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
    /** Whether the latest load of orders failed */
    public readonly load_error = this._orders.load_error;
    /** Time of the latest successful load of orders */
    public readonly last_updated = this._orders.last_updated;

    public readonly filters = this._orders.order_filters;

    public readonly caterers = this._orders.caterers;

    public readonly statuses = signal(statusList());
    public readonly show_children = signal<Record<string, boolean>>({});
    /** Current time. Updates so that urgency markers stay correct. */
    public readonly now = signal(Date.now());
    /** Number of orders for each status filter */
    public readonly status_counts = this._orders.status_counts;
    /** Options for the status filter chips */
    public readonly status_filters: {
        id: CateringStatusFilter;
        name: string;
        colour?: string;
    }[] = [
        { id: 'all', name: i18n('COMMON.ALL') },
        { id: 'active', name: i18n('COMMON.STATE_ACTIVE') },
        ...this.statuses().map(({ id, name, colour }) => ({
            id,
            name,
            colour,
        })),
    ];
    public readonly status_filter = computed(
        () => this.filters()?.status || 'all',
    );
    /** Whether every listed order shows its items */
    public readonly all_expanded = computed(() => {
        const shown = this.show_children();
        const list = this.order_list();
        return list.length > 0 && list.every((order) => shown[order.id]);
    });
    public readonly nextStatus = nextOrderStatus;

    /** Change the status of an order. Offers undo when the save succeeds. */
    public readonly updateStatus = (
        order: CateringOrder,
        status: CateringOrderStatus,
    ) => this._orders.changeStatus(order, status);

    public readonly time_format = computed(() =>
        this._settings.time_format_signal(),
    );

    public status(value: string) {
        return this.statuses().find((i) => i.id === value);
    }

    constructor() {
        super();
    }

    public ngOnInit() {
        this.subscription('polling', this._orders.startPolling());
        this.interval('clock', () => this.now.set(Date.now()), 30 * 1000);
    }

    public setStatusFilter(status: CateringStatusFilter) {
        this._orders.filters = { ...this._orders.filters, status };
    }

    /** Show the items of every listed order, or hide them all */
    public toggleAllExpanded() {
        const expand = !this.all_expanded();
        this.show_children.set(
            expand
                ? Object.fromEntries(
                      this.order_list().map((order) => [order.id, true]),
                  )
                : {},
        );
    }

    public urgencyOf(order: CateringOrder) {
        return orderUrgency(order.status, order.deliver_at, this.now());
    }

    /** Whole minutes until the order is due */
    public minutesUntil(order: CateringOrder) {
        return Math.ceil((order.deliver_at - this.now()) / (60 * 1000));
    }

    public isExpanded(id: string) {
        return !!this.show_children()[id];
    }

    public toggleExpanded(id: string) {
        this.show_children.update((state) => ({ ...state, [id]: !state[id] }));
    }
}
