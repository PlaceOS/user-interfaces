import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import {
    PlaceSystem,
    authority,
    querySystems,
    queryZones,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

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

    public editBuilding(building: PlaceSystem = new PlaceSystem()) {
        // const ref = this._dialog.open(BuildingModalComponent, {
        //     data: { building },
        // });
        // ref.afterClosed().subscribe((data) => {
        //     if (data) setTimeout(() => this._change.next(Date.now()), 300);
        // });
    }
}
