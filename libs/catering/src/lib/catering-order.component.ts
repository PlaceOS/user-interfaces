import { Component, Input } from '@angular/core';

import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    AsyncHandler,
    SettingsService,
} from '@placeos/common';

import { CateringOrdersService } from './catering-orders.service';
import { CateringOrder } from './catering-order.class';
import { CATERING_STATUSES } from './catering.vars';

@Component({
    selector: 'catering-order',
    template: `
        <div
            class="w-full flex items-center py-2"
            [class.bg-base-200]="!show_items"
            [class.bg-base-200]="show_items"
            *ngIf="order"
        >
            <div
                class="w-20 flex items-center justify-center z-20 h-full"
                [class.bg-base-200]="show_items"
                [class.dark:bg-neutral-700]="show_items"
            >
                <div
                    class="rounded-full bg-base-300 p-2 text-2xl text-black opacity-60 flex items-center justify-center"
                >
                    <app-icon>room_service</app-icon>
                </div>
            </div>
            <div time class="w-24">
                {{ order.deliver_at | date: time_format }}
            </div>
            <div time class="w-36 text-sm">
                {{ order.event?.date | date: 'MMM d' }},
                {{ order.event?.date | date: time_format }}
                <br />
                {{ order.event?.date_end | date: 'MMM d' }},
                {{ order.event?.date_end | date: time_format }}
            </div>
            <div class="flex-1">
                {{
                    order.event?.space.display_name ||
                        order.event?.space.name ||
                        ''
                }}
                <span
                    class="opacity-30"
                    *ngIf="
                        !(
                            order.event?.space.display_name ||
                            order.event?.space.name
                        )
                    "
                >
                    No Location
                </span>
            </div>
            <div class="w-56">
                {{ order.event?.organiser?.name || order.event?.host || '' }}
                <span
                    class="opacity-30"
                    *ngIf="!(order.event?.organiser?.name || order.event?.host)"
                >
                    Unknown Host
                </span>
            </div>
            <div class="w-28">{{ order.charge_code || '~ No Code ~' }}</div>
            <div class="w-24">
                <button
                    *ngIf="order.notes"
                    class="clear underline"
                    [matTooltip]="order.notes"
                >
                    View
                </button>
            </div>
            <div class="w-28">
                {{ order.invoice_number || '' }}
                <span class="opacity-30" *ngIf="!order.invoice_number">
                    No Invoice
                </span>
            </div>
            <div class="w-36">
                <button
                    name="status"
                    class="text-base border-none h-10 px-4 flex items-center text-white w-36"
                    matRipple
                    [style.background]="status?.colour"
                    [matMenuTriggerFor]="menu"
                >
                    <div class="flex text-center capitalize mx-2">
                        {{ status?.name }}
                    </div>
                    <app-icon class="pl-2">arrow_drop_down</app-icon>
                </button>
            </div>
            <div class="w-12">
                <button icon (click)="show_items = !show_items">
                    <app-icon>{{
                        show_items
                            ? 'keyboard_arrow_down'
                            : 'keyboard_arrow_right'
                    }}</app-icon>
                </button>
            </div>
        </div>
        <ul
            *ngIf="order?.items.length"
            class="list-none p-0 m-0 w-full relative z-0"
            [class.shown]="show_items"
            [@show]="show_items ? 'show' : 'hide'"
        >
            <li
                catering-order-item
                class="flex items-center"
                *ngFor="let item of order.items; let i = index"
                [order_id]="order?.id"
                [item]="item"
            ></li>
        </ul>
        <mat-menu #menu="matMenu">
            <button
                mat-menu-item
                *ngFor="let status of statuses"
                class="flex items-center"
                (click)="updateStatus(status.id)"
            >
                <div
                    class="rounded-full h-4 w-4 mr-2"
                    [style.background-color]="status.colour"
                ></div>
                <span class="mr-2 w-20">{{ status.name }}</span>
            </button>
        </mat-menu>
    `,
    styles: [
        `
            [name='status'] {
                border-radius: 1.55rem;
            }

            button[mat-menu-item] {
                display: flex;
            }

            [name='bar'] {
                width: 2px;
                top: -0.5rem;
                left: calc(2.5rem - 1px);
            }
        `,
    ],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class CateringOrderComponent extends AsyncHandler {
    @Input() public order: CateringOrder;
    /** Whether to show the items in the catering order */
    public show_items = false;
    /** List of status available to select */
    public readonly statuses = CATERING_STATUSES;

    public readonly updateStatus = async (s) => {
        await this._orders.updateStatus(this.order, s);
        this.timeout('status-change', () => ((this.order as any).status = s));
    };

    public get status() {
        return this.statuses.find((i) => i.id === this.order.status);
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _orders: CateringOrdersService,
        private _settings: SettingsService
    ) {
        super();
    }
}
