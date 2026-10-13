import { Component, OnInit, computed, input, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { OrderCateringItem } from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';

const CHECKED_ITEMS_KEY = 'PLACEOS.catering.checked_items';
/** Time to keep a checked item in storage. Orders are only shown for one day. */
const CHECKED_ITEM_MAX_AGE = 2 * 24 * 60 * 60 * 1000;

/** Read checked items from storage, without entries older than the max age */
function readCheckedItems(): Record<string, number> {
    const now = Date.now();
    try {
        const saved: Record<string, unknown> = JSON.parse(
            localStorage.getItem(CHECKED_ITEMS_KEY) || '{}',
        );
        return Object.fromEntries(
            Object.entries(saved).filter(
                (entry): entry is [string, number] =>
                    typeof entry[1] === 'number' &&
                    now - entry[1] < CHECKED_ITEM_MAX_AGE,
            ),
        );
    } catch {
        return {};
    }
}

/** Save the checked state of an order item on this device */
function saveCheckedItem(key: string, checked: boolean) {
    const items = readCheckedItems();
    if (checked) items[key] = Date.now();
    else delete items[key];
    localStorage.setItem(CHECKED_ITEMS_KEY, JSON.stringify(items));
}

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
        this.active.set(this.item_key() in readCheckedItems());
    }

    public toggle() {
        const checked = !this.active();
        saveCheckedItem(this.item_key(), checked);
        this.active.set(checked);
    }
}
