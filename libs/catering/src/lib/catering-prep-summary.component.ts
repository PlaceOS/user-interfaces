import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    CateringOrder,
    i18n,
    notifyError,
    notifySuccess,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

import {
    deliveryRuns,
    orderLevelFinder,
    orderLocation,
    prepSummary,
} from './catering-order-tools';
import { CateringOrdersService } from './catering-orders.service';

/**
 * Side panel for the kitchen. Shows how much of each item to make for the
 * listed orders, and groups ready orders by level for delivery.
 */
@Component({
    selector: 'catering-prep-summary',
    template: `
        <section class="p-4">
            <h3 class="mb-2 text-lg font-medium">
                {{ 'CATERING.PREP_SUMMARY' | translate }}
            </h3>
            @for (item of summary(); track item.name) {
                <div prep-item class="border-base-200 border-b py-2">
                    <div class="flex items-center gap-2">
                        <div class="flex-1 font-medium">{{ item.name }}</div>
                        <div
                            class="bg-base-300 rounded-sm px-2 py-0.5 font-mono text-sm"
                            [class.opacity-40]="!item.remaining"
                            [title]="'CATERING.PREP_REMAINING' | translate"
                        >
                            {{ item.remaining }} / {{ item.total }}
                        </div>
                    </div>
                    @for (variant of item.variants; track variant.options) {
                        @if (variant.options) {
                            <div class="flex text-xs opacity-60">
                                <div class="flex-1">{{ variant.options }}</div>
                                <div class="font-mono">
                                    {{ variant.total }}×
                                </div>
                            </div>
                        }
                    }
                </div>
            } @empty {
                <p class="text-sm opacity-40">
                    {{ 'CATERING.ORDERS_EMPTY' | translate }}
                </p>
            }
        </section>
        <section class="p-4">
            <h3 class="mb-2 text-lg font-medium">
                {{ 'CATERING.DELIVERY_RUNS' | translate }}
            </h3>
            @for (run of runs(); track run.id) {
                <div
                    delivery-run
                    class="border-base-300 mb-2 rounded-sm border p-2"
                >
                    <div class="mb-1 flex items-center gap-2">
                        <div class="flex-1 font-medium">
                            {{ run.name || ('COMMON.LEVEL_EMPTY' | translate) }}
                        </div>
                        <button
                            btn
                            matRipple
                            class="clear text-sm"
                            (click)="markDelivered(run.orders)"
                        >
                            {{ 'CATERING.DELIVERY_RUN_DONE' | translate }}
                        </button>
                    </div>
                    @for (order of run.orders; track order.id) {
                        <div class="flex gap-2 text-sm">
                            <div class="w-20 font-mono">
                                {{ order.deliver_at | date: time_format() }}
                            </div>
                            <div class="flex-1 truncate">
                                {{ location(order) }}
                            </div>
                        </div>
                    }
                </div>
            } @empty {
                <p class="text-sm opacity-40">
                    {{ 'CATERING.DELIVERY_RUNS_EMPTY' | translate }}
                </p>
            }
        </section>
    `,
    styles: [
        `
            :host {
                display: block;
                overflow: auto;
            }
        `,
    ],
    imports: [DatePipe, MatRippleModule, TranslatePipe],
})
export class CateringPrepSummaryComponent {
    private _orders = inject(CateringOrdersService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private readonly _levelOf = orderLevelFinder(this._org);

    public readonly time_format = this._settings.time_format_signal;
    public readonly summary = computed(() =>
        prepSummary(this._orders.matching()),
    );
    public readonly runs = computed(() =>
        deliveryRuns(this._orders.matching(), this._levelOf),
    );
    public readonly location = orderLocation;

    /**
     * Mark every order in a delivery run as delivered.
     * Saves one order at a time, as orders for one event share its metadata.
     */
    public async markDelivered(orders: readonly CateringOrder[]) {
        let failed = 0;
        for (const order of orders) {
            await this._orders
                .updateStatus(order, 'delivered')
                .catch(() => failed++);
        }
        if (failed) return notifyError(i18n('CATERING.ORDERS_STATUS_ERROR'));
        notifySuccess(i18n('CATERING.DELIVERY_RUN_DELIVERED'));
    }
}
