import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService, Region } from '@placeos/organisation';
import { PlaceZone, removeZone } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegionModalComponent } from './region-modal.component';
import { AppSettingsModalComponent } from '../ui/app-settings-modal.component';
import { notifySuccess, openConfirmModal } from '@placeos/common';

export interface RegionListOptions {
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class RegionManagementService {
    private _options = new BehaviorSubject<RegionListOptions>({});
    private _change = new BehaviorSubject(0);

    public options = this._options.asObservable();

    public readonly filtered_regions = combineLatest([
        this._org.building_list,
        this._org.region_list,
        this._options,
    ]).pipe(
        map(([buildings, list, options]) => {
            if (options.search) {
                list = list.filter((_) =>
                    _.name.toLowerCase().includes(options.search.toLowerCase())
                );
            }
            for (const region of list) {
                (region as any).building_count = buildings.filter(
                    (bld) => bld.parent_id === region.id
                ).length;
            }
            return list;
        })
    );

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

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
                title: 'Remove Building',
                content: `Are you sure you want to remove the building "${region.name}"?`,
                icon: { content: 'delete_forever' },
                confirm_text: 'Remove',
            },
            this._dialog
        );
        if (ref.reason !== 'done') return ref.close();
        ref.loading('Removing building...');
        await removeZone(region.id).toPromise();
        this._org.removeZone({ id: region.id, tags: ['region'] } as any);
        notifySuccess('Successfully removed building.');
        ref.close();
    }
}
