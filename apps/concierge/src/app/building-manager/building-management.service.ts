import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { notifySuccess, openConfirmModal } from '@placeos/common';
import { Building, OrganisationService } from '@placeos/organisation';
import { PlaceZone, removeZone } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BuildingModalComponent } from './building-modal.component';
import { AppSettingsModalComponent } from '../ui/app-settings-modal.component';
import { AutoReleaseSettingsModalComponent } from './auto-release-settings-modal.component';
import { InductionSettingsModalComponent } from './induction-settings-modal.component';
import { ItemListModalComponent } from './item-list-modal.component';

export interface BuildingListOptions {
    zone?: string;
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class BuildingManagementService {
    private _options = new BehaviorSubject<BuildingListOptions>({});
    private _change = new BehaviorSubject(0);

    public options = this._options.asObservable();

    public readonly filtered_buildings = combineLatest([
        this._org.region_list,
        this._org.building_list,
        this._options,
        this._org.initialised,
    ]).pipe(
        map(([regions, list, options]) => {
            if (options.zone) {
                list = list.filter((_) => _.parent_id === options.zone);
            }
            if (options.search) {
                list = list.filter((_) =>
                    _.name.toLowerCase().includes(options.search.toLowerCase())
                );
            }
            for (const bld of list) {
                const parent = regions.find((_) => _.id === bld.parent_id);
                if (parent) {
                    (bld as any).region = parent.display_name || parent.name;
                }
                (bld as any).level_count =
                    this._org.levelsForBuilding(bld)?.length || 0;
            }
            return list;
        })
    );

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public setFilters(options: Partial<BuildingListOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setSearchString(search: string) {
        this._options.next({ ...this._options.getValue(), search });
    }

    public editBuilding(building: PlaceZone = new PlaceZone()) {
        const ref = this._dialog.open(BuildingModalComponent, {
            data: building,
        });
        ref.afterClosed().subscribe((data) => {
            if (data) this._org.addZone(data);
        });
    }

    public editBuildingMetadata(zone: PlaceZone = new PlaceZone()) {
        const ref = this._dialog.open(AppSettingsModalComponent, {
            data: { zone },
        });
        ref.afterClosed().subscribe((data) => {
            if (data) setTimeout(() => location.reload(), 300);
        });
    }

    public setAutoRelease(building: PlaceZone) {
        if (!building?.id) return;
        this._dialog.open(AutoReleaseSettingsModalComponent, {
            data: building.id,
        });
    }

    public setInduction(building: PlaceZone) {
        if (!building?.id) return;
        this._dialog.open(InductionSettingsModalComponent, {
            data: building.id,
        });
    }

    public setSupportIssueTypes(building: PlaceZone) {
        if (!building?.id) return;
        this._dialog.open(ItemListModalComponent, {
            data: building.id,
        });
    }

    public async removeBuilding(building: Building) {
        const ref = await openConfirmModal(
            {
                title: 'Remove Building',
                content: `Are you sure you want to remove the building "${building.name}"?`,
                icon: { content: 'delete_forever' },
                confirm_text: 'Remove',
            },
            this._dialog
        );
        if (ref.reason !== 'done') return ref.close();
        ref.loading('Removing building...');
        await removeZone(building.id).toPromise();
        this._org.removeZone({ id: building.id, tags: ['building'] } as any);
        notifySuccess('Successfully removed building.');
        ref.close();
    }
}
