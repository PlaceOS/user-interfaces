import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { PlaceZone } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegionModalComponent } from './region-modal.component';

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
            if (data) setTimeout(() => this._change.next(Date.now()), 300);
        });
    }
}
