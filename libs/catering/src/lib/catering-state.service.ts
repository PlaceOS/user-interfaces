import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceMetadata,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, lastValueFrom, of } from 'rxjs';
import {
    catchError,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { flatten, nextValueFrom, unique } from 'libs/common/src/lib/general';
import { i18n } from 'libs/common/src/lib/locale.service';
import { notifyError, notifySuccess } from 'libs/common/src/lib/notifications';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { currentUser } from 'libs/common/src/lib/user-state';
import { Building } from 'libs/organisation/src/lib/building.class';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { CateringImportMenuModalComponent } from './catering-import-menu-modal.component';
import {
    CateringItemModalComponent,
    CateringItemModalData,
} from './catering-item-modal.component';
import { CateringItem } from './catering-item.class';
import {
    CateringItemOptionModalComponent,
    CateringItemOptionModalData,
} from './catering-option-modal.component';
import {
    CateringOrderModalComponent,
    CateringOrderModalData,
} from './catering-order-modal.component';
import {
    CateringOrderOptionsModalComponent,
    CateringOrderOptionsModalData,
} from './catering-order-options-modal.component';
import { CateringOrder } from './catering-order.class';
import { CateringOrdersService } from './catering-orders.service';
import { CateringOption } from './catering.interfaces';

import {
    AttachedResourceConfigModalComponent,
    AttachedResourceConfigModalData,
    AttachedResourceRuleset,
} from 'libs/components/src/lib/attached-resource-config-modal.component';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';

export interface CateringSettings {
    require_notes?: boolean;
    charge_codes?: string[];
    disabled_rooms?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class CateringStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _orders = inject(CateringOrdersService);

    private _updated = new BehaviorSubject(0);
    /** Active menu */
    private _menu = new BehaviorSubject<CateringItem[]>([]);
    /** Whether the menu for the active building is loading */
    private _loading = new BehaviorSubject<boolean>(false);
    /** Currency code for the active building */
    private _currency = new BehaviorSubject<string>('USD');

    private _change = new BehaviorSubject(0);
    /** Observable for the active menu */
    public readonly menu = this._menu.asObservable();
    /** Observable for whether the menu for the active building is loadingg */
    public readonly loading = this._loading.asObservable();
    /** Observable for the currency code of the active building */
    public readonly currency = this._currency.asObservable();

    public readonly settings = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([_]) => !!_),
        switchMap(([_]) =>
            showMetadata(_.id, 'catering-settings').pipe(
                catchError((_) => of({} as PlaceMetadata)),
            ),
        ),
        map((_) => (_.details as CateringSettings) || {}),
        tap((_) =>
            this._settings.post('require_catering_notes', !!_?.require_notes),
        ),
        shareReplay(1),
    );

    public readonly charge_codes = this.settings.pipe(
        map((_) => _.charge_codes || []),
    );
    public readonly availability = this.settings.pipe(
        map((_) => _.disabled_rooms || []),
    );

    public readonly caterers = combineLatest([
        this._menu,
        this._orders.caterers,
    ]).pipe(
        map(([menu_items]) => {
            const provider_groups =
                this._settings.get('app.catering_provider_groups') || {};
            let provider_list = Object.keys(provider_groups);
            if (!provider_list.length) {
                return unique(menu_items.map((i) => i.caterer)).sort((a, b) =>
                    `${a}`.localeCompare(b),
                );
            }
            provider_list = provider_list.filter((caterer) =>
                provider_groups[caterer].find((group) =>
                    currentUser().groups.includes(group),
                ),
            );
            provider_list = unique(provider_list);
            provider_list = provider_list.sort((a, b) =>
                `${a}`.localeCompare(b),
            );
            return provider_list;
        }),
        shareReplay(1),
    );

    public zone = '';

    public get is_editable() {
        return !this.zone || this.zone === this._org.building?.id;
    }

    public get categories() {
        const menu = this._menu.getValue();
        return unique(menu.map((i) => i.category));
    }

    public get caterer_list() {
        const menu = this._menu.getValue();
        return unique(menu.map((i) => i.caterer));
    }

    constructor() {
        super();
        this.subscription(
            'building',
            this._org.active_building.subscribe(async (bld: Building) => {
                if (bld) {
                    this._loading.next(true);
                    this._menu.next([]);
                    const menu = (
                        await this.getCateringForZone(bld.id).catch(() => [])
                    ).map((i) => new CateringItem(i));
                    this._currency.next(
                        this._settings.get('app.currency') ||
                            bld.currency ||
                            'USD',
                    );
                    this._loading.next(false);

                    this.timeout('loaded', () => this._menu.next(menu), 1000);
                }
            }),
        );
    }

    /**
     * Create/Edit catering order
     * @param order Order to manipulate
     */
    public async manageCateringOrder(order: CateringOrder) {
        const ref = this._dialog.open<
            CateringOrderModalComponent,
            CateringOrderModalData
        >(CateringOrderModalComponent, {
            data: {
                code: this._currency.getValue(),
                order,
                menu: this.menu,
                loading: this.loading,
                getCateringConfig: (_) => this.getCateringConfig(_),
                selectOptions: (_) => this.selectOptions(_),
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        ref.close();
        return details?.metadata?.order || order;
    }

    public async addItem(item: CateringItem = new CateringItem()) {
        const ref = this._dialog.open<
            CateringItemModalComponent,
            CateringItemModalData
        >(CateringItemModalComponent, {
            data: {
                item,
                categories: this.categories,
                caterers: this.caterer_list,
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details?.reason !== 'done') return;
        const menu = this._menu.getValue();
        const index = menu.findIndex((itm) => itm.id === item.id);
        if (index >= 0) {
            menu.splice(index, 1, details.metadata.item);
        } else {
            menu.push(details.metadata.item);
        }
        this.updateMenu(this._org.building.id, menu).then(
            () => {
                this._menu.next([...menu]);
                ref.close();
            },
            () => (ref.componentInstance.loading = false),
        );
    }

    public updateItem(item: CateringItem) {
        const menu = this._menu.getValue();
        const index = menu.findIndex((itm) => itm.id === item.id);
        if (index >= 0) menu.splice(index, 1, item);
        else menu.push(item);
        this.updateMenu(this._org.building.id, menu).then(() =>
            this._menu.next([...menu]),
        );
    }

    public async addOption(
        item: CateringItem,
        option: CateringOption = {} as any,
    ) {
        const types = unique(item.options.map((i) => i.group));
        const ref = this._dialog.open<
            CateringItemOptionModalComponent,
            CateringItemOptionModalData
        >(CateringItemOptionModalComponent, {
            data: {
                parent: item,
                option,
                types,
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details?.reason !== 'done') return;
        const menu = this._menu.getValue();
        const index = menu.findIndex((itm) => itm.id === item.id);
        if (index >= 0) {
            menu.splice(index, 1, details.metadata.item);
        } else {
            menu.push(details.metadata.item);
        }
        this.updateMenu(this._org.building.id, menu).then(
            () => {
                this._menu.next([...menu]);
                ref.close();
            },
            () => (ref.componentInstance.loading = false),
        );
    }

    public async selectOptions(options: CateringOption[]) {
        const ref = this._dialog.open<
            CateringOrderOptionsModalComponent,
            CateringOrderOptionsModalData
        >(CateringOrderOptionsModalComponent, {
            data: {
                code: this._currency.getValue(),
                options,
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details?.reason !== 'done') return [];
        ref.close();
        return details.metadata.options;
    }

    public async deleteItem(item: CateringItem) {
        const details = await openConfirmModal(
            {
                title: i18n('CATERING.ITEM_REMOVE'),
                content: i18n('CATERING.ITEM_REMOVE_MSG', { name: item.name }),
                icon: {
                    type: 'icon',
                    class: 'material-symbols-outlined',
                    content: 'delete',
                },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('CATERING.ITEM_REMOVE_LOADING'));
        const menu = this._menu.getValue().filter((itm) => item.id !== itm.id);
        this.updateMenu(this._org.building.id, menu).then(
            () => {
                this._menu.next([...menu]);
                notifySuccess(i18n('CATERING.ITEM_REMOVE_SUCCESS'));
                details.close();
            },
            (e) => {
                notifyError(i18n('CATERING.ITEM_REMOVE_ERROR', { error: e }));
                details.loading('');
            },
        );
    }

    public async deleteOption(item: CateringItem, option: CateringOption) {
        const details = await openConfirmModal(
            {
                title: i18n('CATERING.ITEM_OPTION_REMOVE'),
                content: i18n('CATERING.ITEM_OPTION_REMOVE', {
                    name: option.name,
                    item: item.name,
                }),
                icon: {
                    type: 'icon',
                    class: 'material-symbols-outlined',
                    content: 'delete',
                },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n('CATERING.ITEM_OPTION_REMOVE_LOADING'));
        const menu = this._menu.getValue();
        menu.splice(
            menu.findIndex((itm) => itm.id === item.id),
            1,
            new CateringItem({
                ...item,
                options: item.options.filter((opt) => opt.id !== option.id),
            }),
        );
        this.updateMenu(this._org.building.id, menu).then(
            () => {
                this._menu.next([...menu]);
                notifySuccess(
                    i18n('CATERING.ITEM_OPTION_REMOVE_SUCCESS', {
                        item: item.name,
                    }),
                );
                details.close();
            },
            () => {
                notifySuccess(
                    i18n('CATERING.ITEM_OPTION_REMOVE_ERROR', {
                        item: item.name,
                    }),
                );
                details.loading('');
            },
        );
    }

    public async editConfig() {
        const config = await this.getCateringConfig(this._org.building.id);
        const { require_notes } = await nextValueFrom(this.settings);
        const menu = this._menu.getValue();
        const types = unique(flatten(menu.map((i) => [i.category, ...i.tags])));
        const ref = this._dialog.open<
            AttachedResourceConfigModalComponent,
            AttachedResourceConfigModalData
        >(AttachedResourceConfigModalComponent, {
            data: {
                config,
                types,
                require_notes,
                saveNotes: (b) => this.saveSettings({ require_notes: b }),
            },
        });
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details?.reason !== 'done') return;
        this.updateConfig(this._org.building.id, details.metadata).then(
            () => ref.close(),
            () => (ref.componentInstance.loading = false),
        );
    }

    public async importMenu() {
        const ref = this._dialog.open(CateringImportMenuModalComponent);
        const details = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ]);
        if (details?.reason !== 'done') return;
        ref.componentInstance.loading = i18n('CATERING.MENU_IMPORT_LOADING');
        const menu = this._menu.getValue();
        const bld = this._org.building;
        const updated_menu = unique(details.metadata.concat(menu), 'id');
        await this.updateMenu(bld.id, updated_menu).catch((_) => {
            notifyError(i18n('CATERING.MENU_IMPORT_ERROR'));
            ref.close();
            throw _;
        });
        notifySuccess(
            i18n('CATERING.MENU_IMPORT_SUCCESS', {
                count: details.metadata.length,
            }),
        );
        ref.close();
    }

    private updateMenu(zone_id: string, menu: CateringItem[]) {
        return lastValueFrom(
            updateMetadata(zone_id, {
                id: zone_id,
                name: 'catering',
                details: menu,
                description: `Catering menu for ${zone_id}`,
            }),
        );
    }

    public async saveSettings(settings: CateringSettings) {
        const old_settings = await nextValueFrom(this.settings);
        const result = await lastValueFrom(
            updateMetadata(this._org.building.id, {
                id: this._org.building.id,
                name: 'catering-settings',
                details: { ...old_settings, ...settings },
                description: `Catering settings for ${this._org.building.id}`,
            }),
        );
        this._change.next(Date.now());
        return result;
    }

    private async getCateringForZone(zone_id: string): Promise<CateringItem[]> {
        const menu = (await showMetadata(zone_id, 'catering').toPromise())
            .details;
        return menu instanceof Array ? menu : [];
    }

    public async getCateringConfig(
        zone_id: string = this._org.building.id,
    ): Promise<AttachedResourceRuleset[]> {
        const rules = (
            await showMetadata(zone_id, 'catering_config').toPromise()
        ).details;
        return rules instanceof Array ? (rules as any) : [];
    }

    private updateConfig(zone_id: string, config: AttachedResourceRuleset[]) {
        return updateMetadata(zone_id, {
            id: zone_id,
            name: 'catering_config',
            details: config,
            description: `Catering menu config for ${zone_id}`,
        }).toPromise();
    }

    public addItemToOrder(order: CateringOrder, new_item: CateringItem) {
        let items = order.items;
        const match = items.find(
            (item) =>
                item.id === new_item.id &&
                new_item.options?.length ===
                    item.options?.reduce(
                        (c, o) =>
                            c +
                            (new_item.options.find((opt) => o.id === opt.id)
                                ? 1
                                : 0),
                        0,
                    ),
        );
        match
            ? ((match as any).quantity += 1)
            : (items = items.concat([
                  new CateringItem({ ...new_item, quantity: 1 }),
              ]));
        const new_order = new CateringOrder({
            ...order,
            items,
            event: null,
        });
        return new_order;
    }
}
