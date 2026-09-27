import { DatePipe, NgTemplateOutlet } from '@angular/common';
import {
    Component,
    computed,
    ElementRef,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    AsyncHandler,
    CateringOrder,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

import { CateringOrderAlertsService } from './catering-order-alerts.service';
import {
    deliveryRuns,
    orderLevelFinder,
    orderLocation,
} from './catering-order-tools';
import { CateringOrdersService } from './catering-orders.service';
import { nextOrderStatus, orderUrgency, statusList } from './catering.vars';

/** Statuses that have a column on the board */
const BOARD_STATUSES: CateringOrder['status'][] = [
    'pending',
    'accepted',
    'preparing',
    'ready',
];

/**
 * Full screen board of today's orders for a kitchen display.
 * Each open status has a column. Tap an order to move it to the next status.
 * Ready orders are grouped by level for delivery.
 */
@Component({
    selector: 'catering-kitchen-board',
    host: { class: 'bg-base-content text-base-100' },
    template: `
        <header class="flex items-center gap-4 px-6 py-3">
            <ng-content />
            <h2 class="text-2xl font-medium">
                {{ 'CATERING.KITCHEN' | translate }}
            </h2>
            <div class="text-sm opacity-60">
                {{ 'CATERING.STATUS_DELIVERED' | translate }}
                {{ done_counts().delivered }} ·
                {{ 'CATERING.STATUS_CANCELLED' | translate }}
                {{ done_counts().cancelled }}
            </div>
            <div class="flex-1"></div>
            @if (load_error()) {
                <div
                    load-error
                    class="bg-error text-error-content flex items-center gap-2 rounded-sm px-3 py-1 text-sm"
                >
                    <icon>cloud_off</icon>
                    {{ 'CATERING.ORDERS_LOAD_ERROR' | translate }}
                </div>
            }
            <div class="font-mono text-2xl">
                {{ now() | date: time_format() }}
            </div>
            <button
                icon
                matRipple
                class="h-12 w-12"
                [matTooltip]="
                    (alerts_on() ? 'CATERING.ALERTS_OFF' : 'CATERING.ALERTS_ON')
                        | translate
                "
                (click)="toggleAlerts()"
            >
                <icon class="text-2xl">
                    {{
                        alerts_on()
                            ? 'notifications_active'
                            : 'notifications_off'
                    }}
                </icon>
            </button>
            <button
                icon
                matRipple
                class="h-12 w-12"
                [matTooltip]="'CATERING.FULLSCREEN' | translate"
                (click)="toggleFullscreen()"
            >
                <icon class="text-2xl">
                    {{ fullscreen() ? 'fullscreen_exit' : 'fullscreen' }}
                </icon>
            </button>
        </header>
        <main class="grid min-h-0 flex-1 grid-cols-4 gap-4 px-6 pb-6">
            @for (column of columns(); track column.status.id) {
                <section
                    board-column
                    class="bg-base-100/10 flex min-h-0 flex-col rounded-lg"
                >
                    <h3
                        class="flex items-center gap-2 px-4 py-3 text-lg font-medium"
                    >
                        <span
                            class="h-4 w-4 rounded-full"
                            [style.background-color]="column.status.colour"
                        ></span>
                        {{ column.status.name }}
                        <span class="font-mono opacity-60">
                            {{ column.orders.length }}
                        </span>
                    </h3>
                    <div class="flex-1 space-y-3 overflow-auto px-3 pb-3">
                        @if (column.status.id === 'ready') {
                            @for (run of ready_runs(); track run.id) {
                                <div
                                    class="pt-1 text-sm font-medium opacity-80"
                                >
                                    {{
                                        run.name ||
                                            ('COMMON.LEVEL_EMPTY' | translate)
                                    }}
                                </div>
                                @for (order of run.orders; track order.id) {
                                    <ng-container
                                        *ngTemplateOutlet="
                                            card;
                                            context: { $implicit: order }
                                        "
                                    />
                                }
                            }
                        } @else {
                            @for (order of column.orders; track order.id) {
                                <ng-container
                                    *ngTemplateOutlet="
                                        card;
                                        context: { $implicit: order }
                                    "
                                />
                            }
                        }
                    </div>
                </section>
            }
        </main>
        <ng-template #card let-order>
            @let urgency = urgencyOf(order);
            @let next = nextStatus(order.status);
            <article
                kitchen-card
                class="bg-base-100 text-base-content rounded-lg p-3 shadow"
                [class.ring-4]="urgency"
                [class.ring-error]="urgency === 'overdue'"
                [class.ring-warning]="urgency === 'soon'"
            >
                <div class="flex items-center gap-2">
                    <div class="font-mono text-xl font-medium">
                        {{ order.deliver_at | date: time_format() }}
                    </div>
                    @if (urgency === 'overdue') {
                        <span
                            class="bg-error text-error-content rounded-sm px-2 text-xs"
                        >
                            {{ 'CATERING.ORDERS_OVERDUE' | translate }}
                        </span>
                    }
                    <div class="flex-1 truncate text-right text-sm">
                        {{ location(order) }}
                    </div>
                </div>
                <ul class="my-2 space-y-1">
                    @for (item of order.items; track $index) {
                        <li class="flex gap-2">
                            <span class="font-mono font-medium">
                                {{ item.quantity }}×
                            </span>
                            <span class="flex-1">
                                {{ item.name }}
                                @for (
                                    option of item.option_list;
                                    track $index
                                ) {
                                    <span
                                        class="bg-warning text-warning-content ml-1 rounded-sm px-1 text-xs"
                                    >
                                        {{ option.name }}
                                    </span>
                                }
                            </span>
                        </li>
                    }
                </ul>
                @if (order.notes) {
                    <p
                        class="bg-warning/20 mb-2 rounded-sm px-2 py-1 text-sm whitespace-pre-line"
                    >
                        {{ order.notes }}
                    </p>
                }
                @if (next) {
                    <button
                        matRipple
                        next-status
                        class="flex h-14 w-full items-center justify-center gap-2 rounded-sm text-lg font-medium text-black"
                        [style.background-color]="status(next)?.colour"
                        (click)="changeStatus(order, next)"
                    >
                        {{ status(next)?.name }}
                        <icon>arrow_forward</icon>
                    </button>
                }
            </article>
        </ng-template>
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
        DatePipe,
        MatRippleModule,
        MatTooltipModule,
        IconComponent,
        TranslatePipe,
        NgTemplateOutlet,
    ],
})
export class CateringKitchenBoardComponent
    extends AsyncHandler
    implements OnInit
{
    private _orders = inject(CateringOrdersService);
    private _alerts = inject(CateringOrderAlertsService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);

    private readonly _levelOf = orderLevelFinder(this._org);
    private readonly _statuses = statusList();

    /** Current time. Updates so that the clock and urgency stay correct. */
    public readonly now = signal(Date.now());
    public readonly fullscreen = signal(!!document.fullscreenElement);
    public readonly time_format = this._settings.time_format_signal;
    public readonly load_error = this._orders.load_error;
    public readonly alerts_on = this._alerts.enabled;
    public readonly nextStatus = nextOrderStatus;
    public readonly location = orderLocation;

    /** Open orders for each column of the board */
    public readonly columns = computed(() => {
        const orders = this._orders.matching();
        return this._statuses
            .filter((status) => BOARD_STATUSES.includes(status.id))
            .map((status) => ({
                status,
                orders: orders.filter((order) => order.status === status.id),
            }));
    });
    /** Ready orders grouped by level */
    public readonly ready_runs = computed(() =>
        deliveryRuns(this._orders.matching(), this._levelOf),
    );
    /** Number of orders that are done today */
    public readonly done_counts = computed(() => {
        const orders = this._orders.matching();
        return {
            delivered: orders.filter((o) => o.status === 'delivered').length,
            cancelled: orders.filter((o) => o.status === 'cancelled').length,
        };
    });

    public ngOnInit() {
        // The board always shows today
        this._orders.filters = { ...this._orders.filters, date: Date.now() };
        this.subscription('polling', this._orders.startPolling());
        this.interval('clock', () => this.now.set(Date.now()), 30 * 1000);
        const on_fullscreen = () =>
            this.fullscreen.set(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', on_fullscreen);
        this.subscription('fullscreen', () =>
            document.removeEventListener('fullscreenchange', on_fullscreen),
        );
    }

    public status(id: string) {
        return this._statuses.find((status) => status.id === id);
    }

    public urgencyOf(order: CateringOrder) {
        return orderUrgency(order.status, order.deliver_at, this.now());
    }

    public changeStatus(order: CateringOrder, status: CateringOrder['status']) {
        return this._orders.changeStatus(order, status);
    }

    public toggleAlerts() {
        return this._alerts.setEnabled(!this.alerts_on());
    }

    public toggleFullscreen() {
        if (document.fullscreenElement) return document.exitFullscreen();
        return this._element.nativeElement.requestFullscreen();
    }
}
