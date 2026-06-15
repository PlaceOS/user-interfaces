import { Component, OnInit, computed, input, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { OrderCateringItem } from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';

const ACTIVE_ITEMS = new Set<string>();

@Component({
    selector: '[catering-order-item]',
    template: `
        @if (item()) {
            <div class="relative h-14 w-16 text-right">
                <div
                    arm
                    class="border-base-200 absolute top-1/2 left-1/2 h-16 w-4 -translate-x-px -translate-y-full border-b-2 border-l-2"
                ></div>
            </div>
            <div class="mr-4 w-12">
                <button
                    action
                    icon
                    matRipple
                    class="text-dark-fade border-base-200 border-2 border-dashed p-2 text-xl"
                    [class.bg-success]="active()"
                    [class.text-white]="active()"
                    [class.border-solid]="active()"
                    (click)="toggle()"
                >
                    <icon>{{ active() ? 'done' : 'local_pizza' }}</icon>
                </button>
            </div>
            <div
                class="border-base-200 flex flex-1 items-center space-x-4 border-b border-solid py-4"
            >
                <div class="">
                    <div
                        class="bg-base-300 flex h-10 w-10 items-center justify-center rounded-full p-1 font-mono text-sm"
                    >
                        {{ item()?.amount || item()?.quantity || 1 }}×
                    </div>
                </div>
                <div class="flex-1">{{ item()?.name }}</div>
                <div class="mr-2 flex space-x-2 px-4">
                    @for (opt of item().option_list; track opt) {
                        @if (opt) {
                            <div
                                class="bg-warning text-warning-content rounded-2xl px-2 py-1 text-xs shadow-sm"
                            >
                                {{ opt.name }}
                            </div>
                        }
                    }
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host:last-child > div {
                border: none !important;
            }
        `,
    ],
    imports: [MatRippleModule, IconComponent],
})
export class CateringOrderItemComponent implements OnInit {
    public readonly order_id = input<string>(undefined);
    public readonly item = input<OrderCateringItem>(undefined);

    public readonly active = signal(false);

    public readonly item_key = computed(() => {
        return `${this.order_id()}|${this.item()?.id}`;
    });

    public ngOnInit() {
        this.active.set(ACTIVE_ITEMS.has(this.item_key()));
    }

    public toggle() {
        if (ACTIVE_ITEMS.has(this.item_key())) {
            ACTIVE_ITEMS.delete(this.item_key());
            this.active.set(false);
        } else {
            ACTIVE_ITEMS.add(this.item_key());
            this.active.set(true);
        }
    }
}
