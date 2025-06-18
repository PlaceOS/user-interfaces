import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import {
    AsyncHandler,
    DialogEvent,
    HashMap,
    i18n,
    unique,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AttachedResourceRuleset } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { CateringItem } from './catering-item.class';
import { CateringOrder } from './catering-order.class';
import { CateringOption } from './catering.interfaces';
import { cateringItemAvailable } from './utilities';

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
        @if (!loading) {
            <div class="main min-w-[20rem]">
                @if (!show_order_details) {
                    <mat-tab-group>
                        @for (cat of categories; track cat) {
                            @if ((menu_items || {})[cat].length) {
                                <mat-tab [label]="cat">
                                    <div class="list">
                                        @for (
                                            item of (menu_items || {})[cat];
                                            track item
                                        ) {
                                            <div
                                                item
                                                class="flex items-center border-b border-base-200 p-2"
                                            >
                                                <div class="w-1/2 flex-1">
                                                    <div class="w-1/2 flex-1">
                                                        {{ item.name }}
                                                    </div>
                                                    @if (item.options.length) {
                                                        <div
                                                            class="text-xs no-underline"
                                                        >
                                                            {{
                                                                'CATERING.ITEM_OPTION_AVAILABLE'
                                                                    | translate
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                                <div
                                                    class="mx-2 rounded bg-primary px-4 py-2 text-xs font-medium text-white"
                                                >
                                                    {{
                                                        item.unit_price / 100
                                                            | currency: code
                                                    }}
                                                </div>
                                                @if (!item.options.length) {
                                                    <a-counter
                                                        ngDefaultControl
                                                        [ngModel]="
                                                            item.quantity
                                                        "
                                                        (ngModelChange)="
                                                            updateItemQuantity(
                                                                item,
                                                                $event
                                                            )
                                                        "
                                                    ></a-counter>
                                                }
                                                @if (item.options.length) {
                                                    <div
                                                        class="flex items-center"
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
                                                                [disabled]="
                                                                    true
                                                                "
                                                            >
                                                                <icon
                                                                    >remove</icon
                                                                >
                                                            </button>
                                                        </div>
                                                        <div
                                                            class="count flex h-12 w-12 items-center justify-center"
                                                        >
                                                            {{ item.quantity }}
                                                        </div>
                                                        <button
                                                            icon
                                                            matRipple
                                                            (click)="
                                                                addItem(item)
                                                            "
                                                        >
                                                            <icon>add</icon>
                                                        </button>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                </mat-tab>
                            }
                        }
                    </mat-tab-group>
                } @else {
                    <header class="h-[3.25rem]">
                        <h3>
                            {{ 'CATERING.ORDERS_CONFIRM' | translate }}
                        </h3>
                    </header>
                    <div class="list">
                        @for (item of order.items; track item) {
                            <div
                                item
                                class="flex items-center border-b border-base-200 p-2"
                            >
                                <div class="w-1/2 flex-1">
                                    <div class="w-1/2 flex-1">
                                        {{ item.name }}
                                    </div>
                                    @if (item.options.length) {
                                        <div
                                            class="text-xs underline"
                                            [matTooltip]="optionsFor(item)"
                                        >
                                            {{
                                                'CATERING.ORDERS_SELECTED'
                                                    | translate
                                                        : {
                                                              count: item
                                                                  .options
                                                                  .length,
                                                          }
                                            }}
                                        </div>
                                    }
                                </div>
                                <div
                                    class="mx-2 rounded bg-primary px-4 py-2 text-xs font-medium text-white"
                                >
                                    {{ item.total_cost / 100 | currency: code }}
                                </div>
                                <a-counter
                                    [ngModel]="item.quantity"
                                    (ngModelChange)="
                                        updateItemQuantity(item, $event)
                                    "
                                ></a-counter>
                            </div>
                        }
                    </div>
                }
            </div>
        } @else {
            <div class="flex w-64 flex-col items-center space-y-2 p-8">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        }
        @if (!loading) {
            <footer
                class="flex items-center justify-center space-x-2 border-t border-base-200 p-2"
            >
                @if (!show_order_details) {
                    <button btn matRipple class="inverse" mat-dialog-close>
                        {{ 'COMMON.CANCEL' | translate }}
                    </button>
                    <button
                        confirm
                        btn
                        matRipple
                        [disabled]="!order.item_count"
                        (click)="show_order_details = true"
                    >
                        {{ 'COMMON.CONFIRM' | translate }}
                    </button>
                } @else {
                    <button
                        matRipple
                        class="inverse"
                        (click)="show_order_details = false"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                    <button save btn matRipple (click)="saveOrder()">
                        {{ 'CATERING.ORDERS_SAVE' | translate }}
                    </button>
                }
            </footer>
        }
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
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        CounterComponent,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        IconComponent,
        FormsModule,
    ],
})
export class CateringOrderModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _org = inject(OrganisationService);
    private _data = inject<CateringOrderModalData>(MAT_DIALOG_DATA);

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

    constructor() {
        super();
        this.loading = i18n('CATERING.MENU_LOADING');
    }

    public async ngOnInit() {
        this.loading = i18n('CATERING.MENU_LOADING');
        this.order = new CateringOrder(this._data.order);
        this.rules = await this._data.getCateringConfig(
            this.order.event?.space?.level?.parent_id,
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
                            this.order.event,
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

    public addItem(item: CateringItem, choose_options = true) {
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
                        0,
                    ),
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
                            ),
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
                    _.id !== item.id &&
                    _.options_string === item.options_string,
            ),
        });
        this.updateMenuQuantities();
    }

    public updateItemQuantity(item: CateringItem, amount: number) {
        const old_item = this.order.items.find(
            (itm) =>
                itm.id === item.id &&
                itm.options_string === item.options_string,
        );
        let items = [...this.order.items];
        if (old_item) {
            items = this.order.items
                .filter(
                    (i) =>
                        !(
                            i.id === item.id &&
                            i.options_string === item.options_string
                        ),
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
                    0,
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
