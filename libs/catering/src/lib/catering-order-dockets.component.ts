import { DatePipe } from '@angular/common';
import { Component, inject, Injectable, signal } from '@angular/core';
import { CateringOrder, SettingsService } from '@placeos/common';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

import { orderHost, orderLocation } from './catering-order-tools';

/**
 * Prints order dockets. Needs a `catering-order-dockets` element in the app
 * and the rest of the app hidden when printing.
 */
@Injectable({
    providedIn: 'root',
})
export class CateringDocketsService {
    private _orders = signal<readonly CateringOrder[]>([]);

    /** Orders to show on the printed page */
    public readonly orders = this._orders.asReadonly();

    /** Print one docket for each order */
    public print(orders: readonly CateringOrder[]) {
        this._orders.set(orders);
        // Wait for the dockets to render before the print dialog opens
        setTimeout(() => window.print(), 100);
    }
}

/** Dockets for the orders to print. Only visible when printing. */
@Component({
    selector: 'catering-order-dockets',
    host: { class: 'hidden print:block' },
    template: `
        @for (order of orders(); track order.id) {
            <article docket class="break-after-page p-4 text-black">
                <div class="flex items-baseline justify-between border-b pb-2">
                    <div class="text-3xl font-bold">
                        {{ order.deliver_at | date: time_format() }}
                    </div>
                    <div class="text-xl">{{ location(order) }}</div>
                </div>
                <div class="flex justify-between py-2 text-sm">
                    <div>{{ host(order) }}</div>
                    <div>{{ order.deliver_at | date: 'mediumDate' }}</div>
                </div>
                <ul class="my-2 space-y-1 text-lg">
                    @for (item of order.items; track $index) {
                        <li>
                            <span class="font-bold">{{ item.quantity }}×</span>
                            {{ item.name }}
                            @if (item.option_list.length) {
                                <span class="text-sm">
                                    ({{ optionNames(item) }})
                                </span>
                            }
                        </li>
                    }
                </ul>
                @if (order.notes) {
                    <p class="border p-2 whitespace-pre-line">
                        <span class="font-bold">
                            {{ 'FORM.NOTES' | translate }}:
                        </span>
                        {{ order.notes }}
                    </p>
                }
                <div class="mt-2 flex justify-between text-xs">
                    <div>{{ order.caterer }}</div>
                    <div>{{ order.charge_code }}</div>
                    <div>{{ order.invoice_number }}</div>
                </div>
            </article>
        }
    `,
    imports: [DatePipe, TranslatePipe],
})
export class CateringOrderDocketsComponent {
    private _dockets = inject(CateringDocketsService);
    private _settings = inject(SettingsService);

    public readonly orders = this._dockets.orders;
    public readonly time_format = this._settings.time_format_signal;
    public readonly location = orderLocation;
    public readonly host = orderHost;

    public optionNames(item: CateringOrder['items'][number]) {
        return item.option_list.map((option) => option.name).join(', ');
    }
}
