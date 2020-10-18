import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isAfter, setHours, isBefore } from 'date-fns';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CateringItem } from '../catering-item.class';
import { CateringOrder } from '../catering-order.class';
import { CateringOption, CateringRuleset } from '../catering.interfaces';

import { CalendarEvent } from '../../../../events/src/lib/event.class';
import { stringToMinutes } from '../../../../events/src/lib/event.utilities';
import { BaseClass, DialogEvent, HashMap, unique } from '@user-interfaces/common';

export interface CateringOrderModalData {
    order: CateringOrder;
    menu: Observable<CateringItem[]>;
    loading: Observable<boolean>;
    getCateringConfig: (_: string) => Promise<CateringRuleset[]>;
    selectOptions: (_: CateringOption[]) => Promise<CateringOption[]>;
}

export function cateringItemAvailable(
    item: CateringItem,
    rules: CateringRuleset[],
    event: CalendarEvent
) {
    let is_available = true;
    for (const rule of rules) {
        if (
            item.category === rule.name ||
            item.tags.includes(rule.name) ||
            event.space?.zones.includes(rule.name) ||
            rule.name === '*'
        ) {
            let matches = 0;
            for (const condition of rule.rules) {
                const date = new Date(event.date);
                switch (condition[0]) {
                    case 'after_hour':
                        matches += isAfter(date, setHours(date, condition[1])) ? 1 : 0;
                        break;
                    case 'before_hour':
                        matches += isBefore(date, setHours(date, condition[1])) ? 1 : 0;
                        break;
                    case 'min_length':
                        matches += event.duration >= stringToMinutes(condition[1]) ? 1 : 0;
                        break;
                    case 'max_length':
                        matches += event.duration <= stringToMinutes(condition[1]) ? 1 : 0;
                        break;
                    case 'visitor_type':
                        matches += event.visitor_type === condition[1] ? 1 : 0;
                        break;
                    default:
                        matches++;
                }
            }
            is_available = matches >= rule.rules.length;
        }
    }
    return is_available;
}

@Component({
    selector: 'app-catering-order-modal',
    templateUrl: './catering-order-modal.component.html',
    styleUrls: ['./catering-order-modal.component.scss'],
})
export class CateringOrderModalComponent extends BaseClass {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether changes are being saved */
    public loading: string = '';
    /** Current order */
    public order: CateringOrder;
    /** Name of the active category */
    public category: string;
    /** Whether order details should be shown */
    public show_order_details: boolean;
    /** Catering rules for selected space */
    public rules: readonly CateringRuleset[];
    /**  */
    public readonly form: FormGroup;
    /** List of menu items to show */
    public readonly menu_items$: Observable<HashMap<CateringItem[]>>;
    /** List of categories for the active menu */
    public get categories(): Observable<string[]> {
        return this._data.menu.pipe(map((list) => unique(list.map((item) => item.category))));
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: CateringOrderModalData
    ) {
        super();
        this.loading = 'Loading menu...';
        this.menu_items$ = this._data.menu.pipe(
            map((list) => {
                const categories = unique(list.map((item) => item.category));
                const map = {};
                for (const cat of categories) {
                    map[cat] = list.filter(
                        (item) =>
                            item.category === cat &&
                            cateringItemAvailable(item, this.rules as any, this.order.event)
                    );
                }
                return map;
            })
        );
        this.order = new CateringOrder(this._data.order);
        this.form = new FormGroup({
            charge_code: new FormControl(this.order.charge_code, [Validators.required]),
        });
        this.subscription(
            'charge_code',
            this.form.controls.charge_code.valueChanges.subscribe(
                (value) => (this.order = new CateringOrder({ ...this.order, charge_code: value }))
            )
        );
        this.subscription(
            'loading',
            this._data.loading.subscribe(
                (state) => (this.loading = state ? 'Loading menu...' : '')
            )
        );
        this.loading = 'Loading menu...';
        this.timeout('loading', () => (this.loading = ''), 1000);
    }

    public async ngOnInit() {
        this.rules = await this._data.getCateringConfig(
            this.order.event.space?.level?.parent_id
        );
    }

    public addItem(item: CateringItem, choose_options: boolean = true) {
        const old_item = this.order.items.find(
            (itm) =>
                itm.id === item.id &&
                itm.options.length ===
                    itm.options.reduce(
                        (c, o) => c + (item.options.find((opt) => o.id === opt.id) ? 1 : 0),
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
                    .filter((i) => i !== old_item && i.options.length === old_item.options.length)
                    .concat([new CateringItem({ ...item, quantity: old_item.quantity + 1 })]),
            });
        } else {
            this.order = new CateringOrder({
                ...this.order,
                items: this.order.items.concat([new CateringItem({ ...item, quantity: 1 })]),
            });
        }
    }

    public updateItemQuantity(item: CateringItem, amount: number) {
        const old_item = this.order.items.find(
            (itm) =>
                itm.id === item.id &&
                item.options.length ===
                    item.options.reduce(
                        (c, o) => c + (itm.options.find((opt) => o.id === opt.id) ? 1 : 0),
                        0
                    )
        );
        let items = [...this.order.items];
        if (old_item) {
            items = this.order.items
                .filter((i) => i.id !== item.id)
                .concat([new CateringItem({ ...item, quantity: amount })]);
        } else {
            items = this.order.items.concat([new CateringItem({ ...item, quantity: amount })]);
        }
        items.sort((a, b) => a.name.localeCompare(b.name));
        this.order = new CateringOrder({
            ...this.order,
            items,
        });
    }

    public optionsFor(item: CateringItem) {
        return item.options.map((i) => i.name).join('\n');
    }

    public saveOrder() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.event.emit({ reason: 'done', metadata: { order: this.order } });
        }
    }

    public confirmOrder() {
        this.show_order_details = true;
    }
}
