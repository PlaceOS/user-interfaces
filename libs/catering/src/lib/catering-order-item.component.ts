import { Component, Input } from '@angular/core';

import { CateringItem } from './catering-item.class';

@Component({
    selector: '[catering-order-item]',
    template: `
        <ng-container *ngIf="item">
            <div class="w-20 text-right h-14 relative">
                <div
                    class="border-b-2 border-l-2 border-gray-400 dark:border-neutral-500 w-4 h-16 absolute top-1/2 left-1/2 -translate-y-full"
                ></div>
            </div>
            <div class="w-12 mr-4">
                <button
                    action
                    icon
                    matRipple
                    class="border border-gray-300 dark:border-neutral-500 border-dashed text-xl text-dark-fade p-2"
                    [class.bg-success]="active"
                    [class.text-white]="active"
                    [class.border-solid]="active"
                    (click)="active = !active"
                >
                    <app-icon>{{ active ? 'done' : 'local_pizza' }}</app-icon>
                </button>
            </div>
            <div
                class="flex flex-1 border-b border-gray-300 dark:border-neutral-500 border-solid py-4"
            >
                <div class="flex-1">{{ item?.name }}</div>
                <div class="flex space-x-2 mr-2">
                    <ng-container *ngFor="let opt of item.option_list">
                        <div
                            class="text-xs py-1 px-2 bg-yellow-300 text-black rounded-2xl shadow"
                            *ngIf="opt"
                        >
                            {{ opt.name }}
                        </div>
                    </ng-container>
                </div>
            </div>
        </ng-container>
    `,
    styles: [
        `
            :host:last-child > div {
                border: none !important;
            }
        `,
    ],
})
export class CateringOrderItemComponent {
    @Input() public item: CateringItem;

    public active = false;
}
