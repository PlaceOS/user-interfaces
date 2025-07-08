import { Component, OnInit, input } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { CateringItem } from './catering-item.class';

const ACTIVE_ITEMS = new Set<string>();

@Component({
    selector: '[catering-order-item]',
    template: `
        @if (item()) {
            <div class="relative h-14 w-16 text-right">
                <div
                    arm
                    class="absolute left-1/2 top-1/2 h-16 w-4 -translate-x-px -translate-y-full border-b-2 border-l-2 border-base-200"
                ></div>
            </div>
            <div class="mr-4 w-12">
                <button
                    action
                    icon
                    matRipple
                    class="text-dark-fade border-2 border-dashed border-base-200 p-2 text-xl"
                    [class.bg-success]="active"
                    [class.text-white]="active"
                    [class.border-solid]="active"
                    (click)="toggle()"
                >
                    <icon>{{ active ? 'done' : 'local_pizza' }}</icon>
                </button>
            </div>
            <div
                class="flex flex-1 items-center space-x-4 border-b border-solid border-base-200 py-4"
            >
                <div class="">
                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-base-300 p-1 font-mono text-sm"
                    >
                        {{ item()?.amount || item()?.quantity || 1 }}×
                    </div>
                </div>
                <div class="flex-1">{{ item()?.name }}</div>
                <div class="mr-2 flex space-x-2 px-4">
                    @for (opt of item().option_list; track opt) {
                        @if (opt) {
                            <div
                                class="rounded-2xl bg-warning px-2 py-1 text-xs text-warning-content shadow"
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
    public readonly item = input<CateringItem>(undefined);

    public active = false;

    public get item_key() {
        return `${this.order_id()}|${this.item()?.id}`;
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
