import { Component, Inject, Output, EventEmitter, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { AsyncHandler, DialogEvent, HashMap, unique } from '@placeos/common';

import { CateringItem } from './catering-item.class';
import { CateringOrder } from './catering-order.class';
import { CateringOption } from './catering.interfaces';
import { OrganisationService } from '@placeos/organisation';
import { cateringItemAvailable } from './utilities';
import { AttachedResourceRuleset } from '@placeos/components';

export interface CateringOrderModalData {
    order: CateringOrder;
    code: string;
    menu: Observable<CateringItem[]>;
    loading: Observable<boolean>;
    getCateringConfig: (_: string) => Promise<AttachedResourceRuleset[]>;
    selectOptions: (_: CateringOption[]) => Promise<CateringOption[]>;
}

// TODO: Split template into 2 children components. Order menu and Order Confirm;

@Component({
    selector: 'app-catering-order-modal',
    template: `
        <div class="main min-w-[20rem]" *ngIf="!loading; else load_state">
            <ng-container *ngIf="!show_order_details; else order_details">
                <mat-tab-group>
                    <ng-container *ngFor="let cat of categories">
                        <mat-tab
                            *ngIf="(menu_items || {})[cat].length"
                            [label]="cat"
                        >
                            <div class="list">
                                <div
                                    item
                                    class="flex items-center p-2 border-b border-base-200"
                                    *ngFor="let item of (menu_items || {})[cat]"
                                >
                                    <div class="flex-1 w-1/2">
                                        <div class="flex-1 w-1/2">
                                            {{ item.name }}
                                        </div>
                                        <div
                                            class="text-xs no-underline"
                                            *ngIf="item.options.length"
                                        >
                                            Options Available
                                        </div>
                                    </div>
                                    <div
                                        class="bg-primary text-xs rounded px-4 py-2 mx-2 text-white font-medium"
                                    >
                                        {{
                                            item.unit_price / 100
                                                | currency: code
                                        }}
                                    </div>
                                    <a-counter
                                        ngDefaultControl
                                        [ngModel]="item.quantity"
                                        (ngModelChange)="
                                            updateItemQuantity(item, $event)
                                        "
                                        *ngIf="!item.options.length"
                                    ></a-counter>
                                    <div
                                        class="flex items-center"
                                        *ngIf="item.options.length"
                                    >
                                        <div
                                            [matTooltip]="
                                                item.quantity
                                                    ? 'Items with options must be removed from order confirmation page'
                                                    : ''
                                            "
                                        >
                                            <button
                                                icon
                                                matRipple
                                                [disabled]="true"
                                            >
                                                <app-icon>remove</app-icon>
                                            </button>
                                        </div>
                                        <div
                                            class="count h-12 w-12 flex items-center justify-center"
                                        >
                                            {{ item.quantity }}
                                        </div>
                                        <button
                                            icon
                                            matRipple
                                            (click)="addItem(item)"
                                        >
                                            <app-icon>add</app-icon>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </mat-tab>
                    </ng-container>
                </mat-tab-group>
            </ng-container>
        </div>
        <footer
            *ngIf="!loading"
            class="flex items-center justify-center space-x-2 p-2 border-t border-base-200"
        >
            <ng-container *ngIf="!show_order_details; else order_actions">
                <button btn matRipple class="inverse" mat-dialog-close>
                    Cancel
                </button>
                <button
                    confirm
                    btn
                    matRipple
                    [disabled]="!order.item_count"
                    [matBadge]="order.item_count"
                    [matBadgeHidden]="!order.item_count"
                    matBadgeColor="warn"
                    (click)="show_order_details = true"
                >
                    Confirm
                </button>
            </ng-container>
            <ng-template #order_actions>
                <button
                    matRipple
                    class="inverse"
                    (click)="show_order_details = false"
                >
                    Back
                </button>
                <button save btn matRipple (click)="saveOrder()">
                    Save Order
                </button>
            </ng-template>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col w-64 p-8 items-center space-y-2">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </ng-template>
        <ng-template #order_details>
            <header class="h-[3.25rem]">
                <h3>Confirm Order</h3>
            </header>
            <div class="list">
                <div
                    item
                    class="flex items-center p-2 border-b border-base-200"
                    *ngFor="let item of order.items"
                >
                    <div class="flex-1 w-1/2">
                        <div class="flex-1 w-1/2">{{ item.name }}</div>
                        <div
                            class="text-xs underline"
                            *ngIf="item.options.length"
                            [matTooltip]="optionsFor(item)"
                        >
                            {{ item.options.length }} option{{
                                item.options.length === 1 ? '' : 's'
                            }}
                            selected
                        </div>
                    </div>
                    <div
                        class="bg-primary text-xs rounded px-4 py-2 mx-2 text-white font-medium"
                    >
                        {{ item.total_cost / 100 | currency: code }}
                    </div>
                    <a-counter
                        [ngModel]="item.quantity"
                        (ngModelChange)="updateItemQuantity(item, $event)"
                    ></a-counter>
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            .list {
                height: 24em;
                min-width: 32em;
                max-width: calc(100vw - 1em);
            }

            footer button {
                min-width: 12em;
            }

            input {
                position: relative;
                width: 100%;
                padding: 1em;
                border: none;
                border-radius: 0 !important;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                outline: none;
                font-size: 1em;
            }

            input:focus {
                border: none;
                border-top: 2px solid var(--s);
                border-bottom: 2px solid var(--s);
                box-shadow: none;
            }

            input.error::placeholder {
                color: rgba(var(--error), 0.45);
            }
        `,
    ],
})
export class CateringOrderModalComponent
    extends AsyncHandler
    implements OnInit
{
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether changes are being saved */
    public loading = '';
    /** Current order */
    public order: CateringOrder;
    /** Name of the active category */
    public category: string;
    /** Whether order details should be shown */
    public show_order_details: boolean;
    /** Catering rules for selected space */
    public rules: readonly AttachedResourceRuleset[];
    /** List of menu items to show */
    public menu_items: HashMap<CateringItem[]> = {};
    /** List of categories for the active menu */
    public categories: string[] = [];

    public get code() {
        return this._org.currency_code;
    }

    constructor(
        private _org: OrganisationService,
        @Inject(MAT_DIALOG_DATA) private _data: CateringOrderModalData
    ) {
        super();
        this.loading = 'Loading menu...';
    }

    public async ngOnInit() {
        this.loading = 'Loading menu...';
        this.order = new CateringOrder(this._data.order);
        this.rules = await this._data.getCateringConfig(
            this.order.event?.space?.level?.parent_id
        );
        this._data.menu.subscribe((list) => {
            this.loading = 'Loading menu...';
            const categories = unique(list.map((item) => item.category));
            const map = {};
            for (const cat of categories) {
                map[cat] = list.filter((item) => {
                    return (
                        item.category === cat &&
                        cateringItemAvailable(
                            item,
                            this.rules as any,
                            this.order.event
                        )
                    );
                });
            }
            this.categories = categories;
            this.menu_items = map;
            this.updateMenuQuantities();
            this.timeout('clear_loading', () => (this.loading = ''), 1000);
        });
    }

    public addItem(item: CateringItem, choose_options: boolean = true) {
        const old_item = this.order.items.find(
            (itm) =>
                itm.id === item.id &&
                itm.options.length ===
                    itm.options.reduce(
                        (c, o) =>
                            c +
                            (item.options.find((opt) => o.id === opt.id)
                                ? 1
                                : 0),
                        0
                    )
        );
        if (choose_options && item.options?.length) {
            this._data.selectOptions(item.options).then((options) => {
                const new_item = new CateringItem({ ...item, options });
                this.addItem(new_item, false);
            });
        } else if (old_item) {
            this.order = new CateringOrder({
                ...this.order,
                items: this.order.items
                    .filter(
                        (i) =>
                            !(
                                i.id === item.id &&
                                i.options_string === item.options_string
                            )
                    )
                    .concat([
                        new CateringItem({
                            ...item,
                            quantity: old_item.quantity + 1,
                        }),
                    ]),
            });
        } else {
            this.order = new CateringOrder({
                ...this.order,
                items: this.order.items.concat([
                    new CateringItem({ ...item, quantity: 1 }),
                ]),
            });
        }
        this.updateMenuQuantities();
    }

    public removeItem(item: CateringItem) {
        this.order = new CateringOrder({
            ...this.order,
            items: this.order.items.filter(
                (_) =>
                    _.id !== item.id && _.options_string === item.options_string
            ),
        });
        this.updateMenuQuantities();
    }

    public updateItemQuantity(item: CateringItem, amount: number) {
        const old_item = this.order.items.find(
            (itm) =>
                itm.id === item.id && itm.options_string === item.options_string
        );
        let items = [...this.order.items];
        if (old_item) {
            items = this.order.items
                .filter(
                    (i) =>
                        !(
                            i.id === item.id &&
                            i.options_string === item.options_string
                        )
                )
                .concat([new CateringItem({ ...item, quantity: amount })]);
        } else {
            items = this.order.items.concat([
                new CateringItem({ ...item, quantity: amount }),
            ]);
        }
        items.sort((a, b) => a.name.localeCompare(b.name));
        this.order = new CateringOrder({
            ...this.order,
            items,
        });
        this.updateMenuQuantities();
    }

    public updateMenuQuantities() {
        for (const cat in this.menu_items) {
            for (const item of this.menu_items[cat]) {
                (item as any).quantity = this.order.items.reduce(
                    (c, i) => (i.id === item.id ? c + i.quantity : c),
                    0
                );
            }
        }
    }

    public optionsFor(item: CateringItem) {
        return item.options.map((i) => i.name).join('\n');
    }

    public saveOrder() {
        this.event.emit({
            reason: 'done',
            metadata: { order: this.order },
        });
    }

    public confirmOrder() {
        this.show_order_details = true;
    }
}
