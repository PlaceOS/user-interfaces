import { Component, Input } from '@angular/core';

import { CateringItem } from './catering-item.class';

const ACTIVE_ITEMS = new Set<string>();

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
                    (click)="toggle()"
                >
                    <app-icon>{{ active ? 'done' : 'local_pizza' }}</app-icon>
                </button>
            </div>
            <div
                class="flex flex-1 border-b border-gray-300 dark:border-neutral-500 border-solid py-4 space-x-2"
            >
                <div class="">{{ item?.name }}</div>
                <div class="flex-1">
                    <div
                        class="p-1 rounded-full bg-black/10 w-8 h-8 flex items-center justify-center"
                    >
                        ⨯{{ item?.amount || item?.quantity || 1 }}
                    </div>
                </div>
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
    @Input() public order_id: string;
    @Input() public item: CateringItem;

    public active = false;

    public get item_key() {
        return `${this.order_id}|${this.item.id}`;
    }

    public ngOnInit() {
        this.active = ACTIVE_ITEMS.has(this.item_key);
    }

    public toggle() {
        if (ACTIVE_ITEMS.has(this.item_key)) {
            ACTIVE_ITEMS.delete(this.item_key);
            this.active = false;
        } else {
            ACTIVE_ITEMS.add(this.item_key);
            this.active = true;
        }
    }
}
