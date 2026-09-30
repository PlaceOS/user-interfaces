import { Injectable, computed, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    Region,
    i18n,
    notifySuccess,
} from '@placeos/common';
import { PlaceZone, removeZone } from '@placeos/ts-client';
import { AppSettingsModalComponent } from '../ui/app-settings-modal.component';
import { RegionModalComponent } from './region-modal.component';

export interface RegionListOptions {
    search?: string;
}

import { confirmAction } from '../ui/modal-actions';
@Injectable({
    providedIn: 'root',
})
export class RegionManagementService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    private _options = signal<RegionListOptions>({});

    public readonly options = this._options.asReadonly();

    public readonly filtered_regions = computed(() => {
        const buildings = this._org.building_list();
        let list = this._org.region_list();
        const options = this._options();
        if (options.search) {
            list = list.filter((_) =>
                _.name.toLowerCase().includes(options.search.toLowerCase()),
            );
        }
        for (const region of list) {
            (region as any).building_count = buildings.filter(
                (bld) => bld.parent_id === region.id,
            ).length;
        }
        return list;
    });

    public setFilters(options: Partial<RegionListOptions>) {
        this._options.update((current) => ({ ...current, ...options }));
    }

    public setSearchString(search: string) {
        this._options.update((current) => ({ ...current, search }));
    }

    public editRegion(region: PlaceZone = new PlaceZone()) {
        const ref = this._dialog.open(RegionModalComponent, {
            data: region,
        });
        ref.afterClosed().subscribe((data) => {
            if (data) this._org.addZone(data);
        });
    }

    public editRegionMetadata(region: PlaceZone = new PlaceZone()) {
        const ref = this._dialog.open(AppSettingsModalComponent, {
            data: { zone: region },
        });
        ref.afterClosed().subscribe((data) => {
            if (data) setTimeout(() => location.reload(), 300);
        });
    }

    public async removeRegion(region: Region) {
        const removed = await confirmAction(
            this._dialog,
            {
                title: i18n('APP.CONCIERGE.REGIONS_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.REGIONS_REMOVE_MSG', {
                    name: region.name,
                }),
                icon: { content: 'delete_forever' },
                confirm_text: i18n('COMMON.REMOVE'),
            },
            {
                loading: i18n('APP.CONCIERGE.REGIONS_REMOVE_LOADING'),
                action: () => removeZone(region.id),
                error: (error) =>
                    i18n('APP.CONCIERGE.REGIONS_REMOVE_ERROR', { error }),
            },
        );
        if (!removed) return;
        this._org.removeZone({ id: region.id, tags: ['region'] } as any);
        notifySuccess(i18n('APP.CONCIERGE.REGIONS_REMOVE_SUCCESS'));
    }
}
