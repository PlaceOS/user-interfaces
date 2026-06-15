import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import {
    OrganisationService,
    Region,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { PlaceZone, removeZone } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettingsModalComponent } from '../ui/app-settings-modal.component';
import { RegionModalComponent } from './region-modal.component';

export interface RegionListOptions {
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class RegionManagementService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    private _options = new BehaviorSubject<RegionListOptions>({});
    private _change = new BehaviorSubject(0);

    public options = this._options.asObservable();

    public readonly filtered_regions = combineLatest([
        toObservable(this._org.building_list),
        toObservable(this._org.region_list),
        this._options,
    ]).pipe(
        map(([buildings, list, options]) => {
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
        }),
    );

    public setFilters(options: Partial<RegionListOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setSearchString(search: string) {
        this._options.next({ ...this._options.getValue(), search });
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
        const ref = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.REGIONS_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.REGIONS_REMOVE_MSG', {
                    name: region.name,
                }),
                icon: { content: 'delete_forever' },
                confirm_text: i18n('COMMON.REMOVE'),
            },
            this._dialog,
        );
        if (ref.reason !== 'done') return ref.close();
        ref.loading(i18n('APP.CONCIERGE.REGIONS_REMOVE_LOADING'));
        await removeZone(region.id).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.REGIONS_REMOVE_ERROR', { error: e }),
            );
            throw e;
        });
        this._org.removeZone({ id: region.id, tags: ['region'] } as any);
        notifySuccess(i18n('APP.CONCIERGE.REGIONS_REMOVE_SUCCESS'));
        ref.close();
    }
}
