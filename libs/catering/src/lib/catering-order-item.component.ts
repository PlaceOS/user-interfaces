import { Component, Input } from '@angular/core';

import { CateringItem } from './catering-item.class';

@Component({
    selector: '[catering-order-item]',
    template: `
        <ng-container *ngIf="item">
            <div class="w-20 text-right">
                <div name="item-bar" class="bg-gray-300"></div>
            </div>
            <div class="w-12 mr-4">
                <button
                    action
                    mat-icon-button
                    class="border border-gray-300 border-dashed text-2xl text-dark-fade"
                    [class.bg-success]="active"
                    [class.text-white]="active"
                    [class.border-solid]="active"
                >
                    <app-icon>{{ active ? 'done' : 'local_pizza' }}</app-icon>
                </button>
            </div>
            <div class="flex-1 border-b border-gray-300 border-solid py-4">
                {{ item?.name }}
            </div>
        </ng-container>
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
export class CateringOrderItemComponent {
    @Input() public item: CateringItem;

    public active = false;
}
