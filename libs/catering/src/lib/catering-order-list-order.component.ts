import { Component, Input } from '@angular/core';

import { ANIMATION_SHOW_CONTRACT_EXPAND } from '@user-interfaces/common';

import { CateringOrdersService } from './catering-orders.service';
import { CateringOrder } from './catering-order.class';
import { CATERING_STATUSES } from './catering.vars';

@Component({
    selector: 'catering-order-list-item',
    template: `
        <div
            class="w-full font-medium flex items-center py-2 bg-gray-100"
            [class.shown]="show_items"
        >
            <div class="w-20 flex items-center justify-center">
                <div
                    class="rounded-full bg-gray-300  p-2 text-2xl text-dark-fade flex items-center justify-center"
                >
                    <app-icon className="material-icons">room_service</app-icon>
                </div>
            </div>
            <div class="w-24">{{ order.deliver_at | date: 'shortTime' }}</div>
            <div class="flex-1">
                {{
                    order.event?.space.display_name || order.event?.space.name || '~ No Location ~'
                }}
            </div>
            <div class="w-56">
                {{ order.event?.organiser?.name || order.event?.host || '~ Unknown Host ~' }}
            </div>
            <div class="w-24">{{ order.charge_code || '~ No Code ~' }}</div>
            <div class="w-28">{{ order.invoice_number || '~ No Invoice ~' }}</div>
            <div class="w-36">
                <button
                    name="status"
                    class="text-base border-none h-10 px-4 flex items-center text-white"
                    matRipple
                    [style.background]="status?.colour"
                    [matMenuTriggerFor]="menu"
                >
                    <div class="flex text-center capitalize mx-2">{{ status?.name }}</div>
                    <app-icon class="pl-2" className="material-icons">arrow_drop_down</app-icon>
                </button>
            </div>
            <div class="w-12">
                <button mat-icon-button (click)="show_items = !show_items">
                    <app-icon className="material-icons">{{
                        show_items ? 'keyboard_arrow_down' : 'keyboard_arrow_right'
                    }}</app-icon>
                </button>
            </div>
        </div>
        <ul
            class="list-none p-0 m-0 w-full relative"
            [class.shown]="show_items"
            [@show]="show_items ? 'show' : 'hide'"
        >
            <div
                name="bar"
                class="absolute top-0 bg-gray-300"
                [style.height]="3.125 * order.items.length - 1 + 'rem'"
            ></div>

            <li
                catering-order-list-order-item
                class="flex items-center"
                *ngFor="let item of order.items; let i = index"
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

            .shown {
                background-color: #eee;
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
export class CateringOrderListOrderComponent {
    @Input() public order: CateringOrder;
    /** Whether to show the items in the catering order */
    public show_items: boolean = false;
    /** List of status available to select */
    public readonly statuses = CATERING_STATUSES;

    public readonly updateStatus = (s) => this._orders.updateStatus(this.order, s);

    public get status() {
        return this.statuses.find((i) => i.id === this.order.status);
    }

    constructor(private _orders: CateringOrdersService) {}
}
