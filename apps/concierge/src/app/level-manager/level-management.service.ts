import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { PlaceZone, removeZone } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LevelModalComponent } from './level-modal.component';
import { notifySuccess, openConfirmModal } from '@placeos/common';

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
            if (data) this._org.addZone(data);
        });
    }

    public async removeLevel(level: BuildingLevel) {
        const ref = await openConfirmModal(
            {
                title: 'Remove Building',
                content: `Are you sure you want to remove the building "${level.name}"?`,
                icon: { content: 'delete_forever' },
                confirm_text: 'Remove',
            },
            this._dialog
        );
        if (ref.reason !== 'done') return ref.close();
        ref.loading('Removing building...');
        await removeZone(level.id).toPromise();
        this._org.removeZone({ id: level.id, tags: ['level'] } as any);
        notifySuccess('Successfully removed building.');
        ref.close();
    }
}
