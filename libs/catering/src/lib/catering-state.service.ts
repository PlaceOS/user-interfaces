import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { updateMetadata, showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { BaseClass, DialogEvent, flatten, unique } from '@user-interfaces/common';
import { Building, OrganisationService } from '@user-interfaces/organisation';
import { ConfirmModalComponent, ConfirmModalData, CONFIRM_METADATA } from '../../../components/src/lib/confirm-modal.component';

import { CateringItemModalComponent, CateringItemModalData } from './catering-item-modal.component';
import {
    CateringItemOptionModalComponent,
    CateringItemOptionModalData,
} from './catering-option-modal.component';
import {
    CateringConfigModalComponent,
    CateringConfigModalData,
} from './catering-config-modal.component';
import { CateringItem } from './catering-item.class';
import { CateringOrder } from './catering-order.class';
import { CateringOrderModalComponent, CateringOrderModalData } from './catering-order-modal/catering-order-modal.component';
import { CateringOption, CateringRuleset } from './catering.interfaces';
import { CateringOptionsModalComponent, CateringOptionsModalData } from './catering-options-modal/catering-options-modal.component';

@Injectable({
    providedIn: 'root',
})
export class CateringStateService extends BaseClass {
    /** Active menu */
    private _menu = new BehaviorSubject<CateringItem[]>([]);
    /** Whether the menu for the active building is loading */
    private _loading = new BehaviorSubject<boolean>(false);
    /** Currency code for the active building */
    private _currency = new BehaviorSubject<string>('USD');
    /** Observable for the active menu */
    public readonly menu = this._menu.asObservable();
    /** Observable for whether the menu for the active building is loadingg */
    public readonly loading = this._loading.asObservable();
    /** Observable for the currency code of the active building */
    public readonly currency = this._currency.asObservable();

    public get categories() {
        const menu = this._menu.getValue();
        return unique(menu.map((i) => i.category));
    }

    constructor(private _org: OrganisationService, private _dialog: MatDialog) {
        super();
        this.subscription(
            'building',
            this._org.active_building.subscribe(async (bld: Building) => {
                if (bld) {
                    const menu = (await this.getCateringForZone(bld.id)).map(
                        (i) => new CateringItem(i)
                    );
                    this._currency.next(bld.currency || 'USD');
                    this._menu.next(menu);
                }
            })
        );
    }

    /**
     * Create/Edit catering order
     * @param order Order to manipulate
     */
    public manageCateringOrder(order: CateringOrder) {
        return new Promise<CateringOrder>((resolve) => {
            let is_resolved = false;
            const ref = this._dialog.open<CateringOrderModalComponent, CateringOrderModalData>(
                CateringOrderModalComponent,
                {
                    data: {
                        order,
                        menu: this.menu,
                        loading: this.loading,
                        getCateringConfig: (_) => this.getCateringConfig(_),
                        selectOptions: (_) => this.selectOptions(_),
                    },
                }
            );
            (ref.componentInstance.event as Observable<DialogEvent>)
                .pipe(first((_) => _.reason === 'done'))
                .subscribe((event) => {
                    is_resolved = true;
                    resolve(event.metadata.order);
                    ref.close();
                });
            ref.afterClosed().subscribe(() => (is_resolved ? '' : resolve(order)));
        });
    }

    public addItem(item: CateringItem = new CateringItem()) {
        const ref = this._dialog.open<CateringItemModalComponent, CateringItemModalData>(
            CateringItemModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    item,
                    categories: this.categories,
                },
            }
        );
        (ref.componentInstance.event as Observable<DialogEvent>)
            .pipe(first((_) => _.reason === 'done'))
            .subscribe((event) => {
                let menu = this._menu.getValue();
                const index = menu.findIndex((itm) => itm.id === item.id);
                if (index >= 0) {
                    menu.splice(index, 1, event.metadata.item);
                } else {
                    menu.push(event.metadata.item);
                }
                this.updateMenu(this._org.building.id, menu).then(
                    () => {
                        this._menu.next([...menu]);
                        ref.close();
                    },
                    () => (ref.componentInstance.loading = false)
                );
            });
    }

    public addOption(item: CateringItem, option: CateringOption = {} as any) {
        const types = unique(item.options.map((i) => i.group));
        const ref = this._dialog.open<
            CateringItemOptionModalComponent,
            CateringItemOptionModalData
        >(CateringItemOptionModalComponent, {
            ...CONFIRM_METADATA,
            data: {
                parent: item,
                option,
                types,
            },
        });
        (ref.componentInstance.event as Observable<DialogEvent>)
            .pipe(first((_) => _.reason === 'done'))
            .subscribe((event) => {
                let menu = this._menu.getValue();
                const index = menu.findIndex((itm) => itm.id === item.id);
                if (index >= 0) {
                    menu.splice(index, 1, event.metadata.item);
                } else {
                    menu.push(event.metadata.item);
                }
                this.updateMenu(this._org.building.id, menu).then(
                    () => {
                        this._menu.next([...menu]);
                        ref.close();
                    },
                    () => (ref.componentInstance.loading = false)
                );
            });
    }

    public selectOptions(options: CateringOption[]) {
        return new Promise<CateringOption[]>((resolve, reject) => {
            let is_resolved = false;
            const ref = this._dialog.open<CateringOptionsModalComponent, CateringOptionsModalData>(
                CateringOptionsModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        options,
                    },
                }
            );
            (ref.componentInstance.event as Observable<DialogEvent>)
                .pipe(first((_) => _.reason === 'done'))
                .subscribe((event) => {
                    is_resolved = true;
                    resolve(event.metadata.options);
                    ref.close();
                });
            ref.afterClosed().subscribe(() => (is_resolved ? '' : reject()));
        });
    }

    public deleteItem(item: CateringItem) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Delete Catering Item',
                    content: `Are you sure you wish to remove the catering item ${item.name} from the menu?`,
                    icon: { type: 'icon', class: 'material-icons', content: 'delete' },
                },
            }
        );
        (ref.componentInstance.event as Observable<DialogEvent>)
            .pipe(first((_) => _.reason === 'done'))
            .subscribe(() => {
                const menu = this._menu.getValue().filter((itm) => item.id !== itm.id);
                this.updateMenu(this._org.building.id, menu).then(
                    () => {
                        this._menu.next([...menu]);
                        ref.close();
                    },
                    () => (ref.componentInstance.loading = '')
                );
            });
    }

    public deleteOption(item: CateringItem, option: CateringOption) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Delete Catering Item Option',
                    content: `Are you sure you wish to remove the catering option "${option.name}" from "${item.name}"?`,
                    icon: { type: 'icon', class: 'material-icons', content: 'delete' },
                },
            }
        );
        (ref.componentInstance.event as Observable<DialogEvent>)
            .pipe(first((_) => _.reason === 'done'))
            .subscribe(() => {
                const menu = this._menu.getValue();
                menu.splice(
                    menu.findIndex((itm) => itm.id === item.id),
                    1,
                    new CateringItem({
                        ...item,
                        options: item.options.filter((opt) => opt.id !== option.id),
                    })
                );
                this.updateMenu(this._org.building.id, menu).then(
                    () => {
                        this._menu.next([...menu]);
                        ref.close();
                    },
                    () => (ref.componentInstance.loading = '')
                );
            });
    }

    public async editConfig() {
        const config = await this.getCateringConfig(this._org.building.id);
        const menu = this._menu.getValue();
        const types = unique(flatten(menu.map((i) => [i.category, ...i.tags])));
        const ref = this._dialog.open<CateringConfigModalComponent, CateringConfigModalData>(
            CateringConfigModalComponent,
            {
                data: {
                    config,
                    types,
                },
            }
        );
        (ref.componentInstance.event as Observable<DialogEvent>)
            .pipe(first((_) => _.reason === 'done'))
            .subscribe((event) => {
                this.updateConfig(this._org.building.id, event.metadata).then(
                    () => ref.close(),
                    () => (ref.componentInstance.loading = false)
                );
            });
    }

    private updateMenu(zone_id: string, menu: CateringItem[]) {
        return updateMetadata(zone_id, {
            id: zone_id,
            name: 'catering',
            details: menu,
            description: `Catering menu for ${zone_id}`,
        }).toPromise();
    }

    private async getCateringForZone(zone_id: string): Promise<CateringItem[]> {
        const menu = (await showMetadata(zone_id, { name: 'catering' }).toPromise()).details;
        return menu instanceof Array ? menu : [];
    }

    public async getCateringConfig(
        zone_id: string = this._org.building.id
    ): Promise<CateringRuleset[]> {
        const rules = (await showMetadata(zone_id, { name: 'catering_config' }).toPromise())
            .details;
        return rules instanceof Array ? (rules as any) : [];
    }

    private updateConfig(zone_id: string, config: CateringRuleset[]) {
        return updateMetadata(zone_id, {
            id: zone_id,
            name: 'catering_config',
            details: config,
            description: `Catering menu config for ${zone_id}`,
        }).toPromise();
    }

    public addItemToOrder(order: CateringOrder, new_item: CateringItem) {
        let new_order;
        if (order) {
            let items = order.items;
            const match = items.find(
                (item) =>
                    item.id === new_item.id &&
                    new_item.options?.length ===
                        item.options?.reduce(
                            (c, o) => c + (new_item.options.find((opt) => o.id === opt.id) ? 1 : 0),
                            0
                        )
            );
            match
                ? ((match as any).quantity += 1)
                : (items = items.concat([new CateringItem({ ...new_item, quantity: 1 })]));
            new_order = new CateringOrder({
                ...order,
                items,
                event: null,
            });
        } else {
            new_order = new CateringOrder({
                items: [{ ...new_item, quantity: 1 }],
            });
        }
        return new_order;
    }
}
