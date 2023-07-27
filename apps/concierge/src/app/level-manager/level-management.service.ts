import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { PlaceZone } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LevelModalComponent } from './level-modal.component';

export interface LevelListOptions {
    zone?: string;
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class LevelManagementService {
    private _options = new BehaviorSubject<LevelListOptions>({});
    private _change = new BehaviorSubject(0);

    public options = this._options.asObservable();

    public readonly regions = this._org.region_list;

    public readonly level_list = this._org.level_list;

    public readonly filtered_levels = combineLatest([
        this.level_list,
        this._options,
    ]).pipe(
        map(([list, options]) => {
            if (options.zone) {
                list = list.filter((_) => _.parent_id === options.zone);
            }
            if (options.search) {
                list = list.filter((_) =>
                    _.name.toLowerCase().includes(options.search.toLowerCase())
                );
            }
            for (const level of list) {
                const parent = this._org.buildings.find(
                    (bld) => bld.id === level.parent_id
                );
                if (parent) {
                    (level as any).building =
                        parent.display_name || parent.name;
                }
            }
            return list;
        })
    );

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public setFilters(options: Partial<LevelListOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setSearchString(search: string) {
        this._options.next({ ...this._options.getValue(), search });
    }

    public editLevel(level: PlaceZone = new PlaceZone()) {
        const ref = this._dialog.open(LevelModalComponent, {
            data: level,
        });
        ref.afterClosed().subscribe((data) => {
            if (data) setTimeout(() => this._change.next(Date.now()), 300);
        });
    }
}
