import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { queryCateringItems } from '@placeos/assets';
import {
    CateringItem,
    ExternalCateringService,
    OrganisationService,
    SettingsService,
    Space,
    unique,
} from '@placeos/common';
import { PlaceMetadata, showMetadata } from '@placeos/ts-client';
import { CateringSettings } from '../catering-state.service';
import { cateringItemAvailable, getCateringRulesForZone } from '../utilities';

export interface CateringOrderSelectOptions {
    // Affects backend requests
    zone?: string;
}

export interface CateringOrderSelectFilters {
    // Affects frontend filtering
    date?: number;
    duration?: number;
    zone_id?: string;
    resources?: Space[];
    search: string;
    tags: string[];
    categories: string[];
    caterer?: string;
}

@Injectable({
    providedIn: 'root',
})
export class CateringOrderStateService {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _external_catering = inject(ExternalCateringService);

    private _options = signal<CateringOrderSelectOptions>({});
    private _filters = signal<CateringOrderSelectFilters>({
        search: '',
        tags: [],
        categories: [],
        caterer: '',
    });
    private _loading = signal('');
    private _settings_data = signal<CateringSettings>({});
    private _available_menu = signal<CateringItem[]>([]);
    private _filtered_menu = signal<CateringItem[]>([]);
    /** Incrementing token so a stale menu load can't overwrite a newer one */
    private _menu_load = 0;

    public readonly loading = this._loading.asReadonly();
    public readonly filters = this._filters.asReadonly();
    public readonly settings = this._settings_data.asReadonly();
    public readonly charge_codes = computed(
        () => this._settings_data().charge_codes || [],
    );
    public readonly availability = computed(
        () => this._settings_data().disabled_rooms || [],
    );
    public readonly available_menu = this._available_menu.asReadonly();
    public readonly categories = computed(() =>
        unique(this._available_menu().map((i) => i.category)),
    );
    public readonly caterers = computed(() => {
        return this._settings.get('app.catering_provider')
            ? []
            : unique(this._available_menu().map((i) => i.caterer));
    });
    public readonly filtered_menu = this._filtered_menu.asReadonly();

    public get currency_code() {
        return this._org.currency_code;
    }

    constructor() {
        effect(() => {
            const bld = this._org.active_building();
            const { zone } = this._options();
            // Depend on the catering backend setting so the menu reloads via
            // the external backend once the org settings finish loading (they arrive after the
            // building is first set, so reading it non-reactively would race)
            this._settings.signal('catering.backend')();
            if (!bld?.id) return;
            this._loadSettings(bld.id);
            this._loadMenu(zone || bld.id);
        });
        effect(() => {
            const filters = this._filters();
            const menu = this._available_menu();
            this._filterMenu(filters, menu);
        });
    }

    public setOptions(opts: Partial<CateringOrderSelectOptions>) {
        this._options.set({ ...this._options(), ...opts });
    }

    public setFilters(opts: Partial<CateringOrderSelectFilters>) {
        this._filters.set({ ...this._filters(), ...opts });
    }

    public getFilters() {
        return { ...this._filters() };
    }

    private async _loadSettings(building_id: string) {
        const metadata = await showMetadata(
            building_id,
            'catering-settings',
        ).catch(() => ({}) as PlaceMetadata);
        const settings = metadata.details as CateringSettings;
        this._settings_data.set(settings || {});
        this._settings.post(
            'require_catering_notes',
            !!settings?.require_notes,
        );
    }

    private async _loadMenu(zone_id: string) {
        const load = ++this._menu_load;
        this._loading.set('[MENU]');
        const items = this._external_catering.enabled
            ? await this._external_catering
                  .loadMenu()
                  .catch(() => [] as CateringItem[])
            : await queryCateringItems(zone_id).catch(
                  () => [] as CateringItem[],
              );
        // A newer load (e.g. native -> external after settings arrive) started
        // while this one was in flight; drop this stale result.
        if (load !== this._menu_load) return;
        this._loading.set(this._loading().replace('[MENU]', ''));
        if (this._settings.get('app.catering_provider')) {
            this.setFilters({
                caterer: this._settings.get('app.catering_provider'),
            });
        } else {
            const caterer_list = unique(
                items.map((i) => i.caterer).filter((_) => !!_),
            );
            if (caterer_list.length > 1) {
                this.setFilters({ caterer: caterer_list[0] || '' });
            }
        }
        this._available_menu.set(items);
    }

    private async _filterMenu(
        {
            search,
            tags,
            categories,
            zone_id,
            date,
            duration,
            resources,
            caterer,
        }: CateringOrderSelectFilters,
        menu: CateringItem[],
    ) {
        const rules = await getCateringRulesForZone(zone_id);
        search = search.toLowerCase();
        let list = search
            ? menu.filter((_) => _.name.toLowerCase().includes(search))
            : menu;
        list = tags.length
            ? list.filter((_) => tags.every((t) => _.tags.includes(t)))
            : list;
        list = categories.length
            ? list.filter((_) => categories.includes(_.category))
            : list;
        list = caterer
            ? list.filter(
                  (_) =>
                      (caterer === '<empty>' && !_.caterer) ||
                      _.caterer === caterer,
              )
            : list;
        this._filtered_menu.set(
            list.filter((_) =>
                cateringItemAvailable(_, rules, {
                    date,
                    duration,
                    resources,
                } as any),
            ),
        );
    }
}
