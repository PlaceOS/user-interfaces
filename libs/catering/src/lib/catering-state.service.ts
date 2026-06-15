import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    deleteCateringItem,
    queryCateringItems,
    saveCateringItem,
} from '@placeos/assets';
import {
    PlaceMetadata,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';

import {
    AsyncHandler,
    CateringItem,
    CateringOrder,
    OrganisationService,
    SettingsService,
    currentUser,
    flatten,
    i18n,
    notifyError,
    notifySuccess,
    unique,
} from '@placeos/common';
import { CateringImportMenuModalComponent } from './catering-import-menu-modal.component';
import {
    CateringItemModalComponent,
    CateringItemModalData,
} from './catering-item-modal.component';
import {
    CateringItemOptionModalComponent,
    CateringItemOptionModalData,
} from './catering-option-modal.component';
import {
    CateringOrderOptionsModalComponent,
    CateringOrderOptionsModalData,
} from './catering-order-options-modal.component';
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
    private _updated = signal(0);
    /** Active menu */
    private _menu = signal<CateringItem[]>([]);
    /** Whether the menu for the active building is loading */
    private _loading = signal<boolean>(false);
    /** Currency code for the active building */
    private _currency = signal<string>('USD');

    private _change = signal(0);
    private _settings_data = signal<CateringSettings>({});
    /** Signal for the active menu */
    public readonly menu = this._menu.asReadonly();
    /** Signal for whether the menu for the active building is loading */
    public readonly loading = this._loading.asReadonly();
    /** Signal for the currency code of the active building */
    public readonly currency = this._currency.asReadonly();

    public readonly settings = this._settings_data.asReadonly();

    public readonly charge_codes = computed(
        () => this._settings_data().charge_codes || [],
    );
    public readonly availability = computed(
        () => this._settings_data().disabled_rooms || [],
    );

    public readonly caterers = computed(() => {
        const provider_groups =
            this._settings.get('app.catering_provider_groups') || {};
        let provider_list = Object.keys(provider_groups);
        if (!provider_list.length) {
            return unique(this._menu().map((i) => i.caterer)).sort((a, b) =>
                `${a}`.localeCompare(b),
            );
        }
        provider_list = provider_list.filter((caterer) =>
            provider_groups[caterer].find((group) =>
                currentUser().groups.includes(group),
            ),
        );
        provider_list = unique(provider_list);
        provider_list = provider_list.sort((a, b) => `${a}`.localeCompare(b));
        return provider_list;
    });

    public zone = '';

    public get is_editable() {
        return !this.zone || this.zone === this._org.building?.id;
    }

    public get categories() {
        const menu = this._menu();
        return unique(menu.map((i) => i.category));
    }

    public get caterer_list() {
        const menu = this._menu();
        return unique(menu.map((i) => i.caterer));
    }

    constructor() {
        super();
        effect(() => {
            const bld = this._org.building_signal();
            this._change();
            if (!bld?.id) return;
            this._loadBuilding(bld.id, bld.currency);
            this._loadSettings(bld.id);
        });
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
            this._doneEvent(ref.componentInstance.event),
            this._closedEvent(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return;
        saveCateringItem(details.metadata.item, this._org.building.id).then(
            (saved_item) => {
                const menu = this._menu();
                const index = menu.findIndex((itm) => itm.id === item.id);
                if (index >= 0) {
                    menu.splice(index, 1, saved_item);
                } else {
                    menu.push(saved_item);
                }
                this._menu.set([...menu]);
                ref.close();
            },
            () => ref.componentInstance.loading.set(false),
        );
    }

    public updateItem(item: CateringItem) {
        saveCateringItem(item, this._org.building.id).then(
            (saved_item) => {
                const menu = this._menu();
                const index = menu.findIndex((itm) => itm.id === item.id);
                if (index >= 0) menu.splice(index, 1, saved_item);
                else menu.push(saved_item);
                this._menu.set([...menu]);
            },
            () => {
                notifyError(i18n('CATERING.ITEM_SAVE_ERROR'));
            },
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
            this._doneEvent(ref.componentInstance.event),
            this._closedEvent(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return;
        saveCateringItem(details.metadata.item, this._org.building.id).then(
            (saved_item) => {
                const menu = this._menu();
                const index = menu.findIndex((itm) => itm.id === item.id);
                if (index >= 0) {
                    menu.splice(index, 1, saved_item);
                } else {
                    menu.push(saved_item);
                }
                this._menu.set([...menu]);
                ref.close();
            },
            () => ref.componentInstance.loading.set(false),
        );
    }

    public async selectOptions(options: CateringOption[]) {
        const ref = this._dialog.open<
            CateringOrderOptionsModalComponent,
            CateringOrderOptionsModalData
        >(CateringOrderOptionsModalComponent, {
            data: {
                code: this._currency(),
                options,
            },
        });
        const details = await Promise.race([
            this._doneEvent(ref.componentInstance.event),
            this._closedEvent(ref.afterClosed()),
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
        deleteCateringItem(item.id).then(
            () => {
                const menu = this._menu().filter((itm) => item.id !== itm.id);
                this._menu.set([...menu]);
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
        const updated_item = new CateringItem({
            ...item,
            options: item.options.filter((opt) => opt.id !== option.id),
        });
        saveCateringItem(updated_item, this._org.building.id).then(
            (saved_item) => {
                const menu = this._menu();
                menu.splice(
                    menu.findIndex((itm) => itm.id === item.id),
                    1,
                    saved_item,
                );
                this._menu.set([...menu]);
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
        const { require_notes } = this.settings();
        const menu = this._menu();
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
            this._doneEvent(ref.componentInstance.event),
            this._closedEvent(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return;
        this.updateConfig(this._org.building.id, details.metadata).then(
            () => {
                ref.close();
            },
            () => ref.componentInstance.loading.set(false),
        );
    }

    public async importMenu() {
        const ref = this._dialog.open(CateringImportMenuModalComponent);
        const details = await Promise.race([
            this._doneEvent(ref.componentInstance.event),
            this._closedEvent(ref.afterClosed()),
        ]);
        if (details?.reason !== 'done') return;
        ref.componentInstance.loading.set(i18n('CATERING.MENU_IMPORT_LOADING'));
        const bld = this._org.building;
        const menu = this._menu();
        const updated_menu = unique(details.metadata.concat(menu), 'id');
        const saved_menu = await Promise.all(
            updated_menu.map((item) => saveCateringItem(item, bld.id)),
        ).catch((_) => {
            notifyError(i18n('CATERING.MENU_IMPORT_ERROR'));
            ref.close();
            throw _;
        });
        this._menu.set(saved_menu);
        notifySuccess(
            i18n('CATERING.MENU_IMPORT_SUCCESS', {
                count: details.metadata.length,
            }),
        );
        ref.close();
    }

    public async saveSettings(settings: CateringSettings) {
        const old_settings = this.settings();
        const result = await updateMetadata(this._org.building.id, {
            id: this._org.building.id,
            name: 'catering-settings',
            details: { ...old_settings, ...settings },
            description: `Catering settings for ${this._org.building.id}`,
        });
        this._change.set(Date.now());
        return result;
    }

    public async getCateringConfig(
        zone_id: string = this._org.building.id,
    ): Promise<AttachedResourceRuleset[]> {
        const rules = (await showMetadata(zone_id, 'catering_config')).details;
        return rules instanceof Array ? (rules as any) : [];
    }

    private updateConfig(zone_id: string, config: AttachedResourceRuleset[]) {
        return updateMetadata(zone_id, {
            id: zone_id,
            name: 'catering_config',
            details: config,
            description: `Catering menu config for ${zone_id}`,
        });
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

    private async _loadBuilding(building_id: string, currency: string) {
        this._loading.set(true);
        this._menu.set([]);
        const menu = await queryCateringItems(building_id).catch(() => []);
        this._currency.set(
            this._settings.get('app.currency') || currency || 'USD',
        );
        this._loading.set(false);
        this.timeout('loaded', () => this._menu.set(menu), 1000);
    }

    private async _loadSettings(building_id: string) {
        const metadata = await showMetadata(
            building_id,
            'catering-settings',
        ).catch(() => ({}) as PlaceMetadata);
        const settings = (metadata.details as CateringSettings) || {};
        this._settings_data.set(settings);
        this._settings.post(
            'require_catering_notes',
            !!settings?.require_notes,
        );
    }

    private _doneEvent(event: { subscribe: (_: any) => any }) {
        return new Promise<any>((resolve) => {
            let sub: any;
            sub = event.subscribe((details) => {
                if (details?.reason !== 'done') return;
                sub?.unsubscribe?.();
                resolve(details);
            });
        });
    }

    private _closedEvent(event: { subscribe: (_: any) => any }) {
        return new Promise<null>((resolve) => {
            let sub: any;
            sub = event.subscribe(() => {
                sub?.unsubscribe?.();
                setTimeout(() => resolve(null));
            });
        });
    }
}
