import { Component, Input } from '@angular/core';

import { CateringItem } from './catering-item.class';

@Component({
    selector: '[catering-order-list-order-item]',
    template: `
        <div class="w-20 text-right">
            <div name="item-bar" class="bg-gray-300"></div>
        </div>
        <div class="w-12 mr-4">
            <button
                mat-icon-button
                class="border border-gray-300 border-dashed text-2xl text-dark-fade"
                [class.bg-success]="active"
                [class.text-white]="active"
                [class.border-solid]="active"
            >
                <app-icon className="material-icons">{{ active ? 'done' : 'local_pizza' }}</app-icon>
            </button>
        </div>
        <div class="flex-1 border-none border-b border-gray-300 border-solid py-4">
            {{ item.name }}
        </div>
    `,
    styles: [
        `
            :host:last-child > div {
                border: none !important;
            }

            [name='item-bar'] {
                height: 2px;
                margin-left: auto;
                margin-right: 1rem;
                width: calc(50% - 0.9375rem);
            }
        `,
    ],
})
export class CateringOrderListOrderItemComponent {
    @Input() public item: CateringItem;

    public active: boolean = false;
}
