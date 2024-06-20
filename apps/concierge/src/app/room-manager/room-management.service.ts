import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { PlaceSystem, querySystems } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { RoomModalComponent } from './room-modal.component';
import { SettingsService } from '@placeos/common';

export interface RoomListOptions {
    zones?: string[];
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class RoomManagementService {
    private _options = new BehaviorSubject<RoomListOptions>({});
    private _change = new BehaviorSubject(0);

    public options = this._options.asObservable();

    public readonly room_list = combineLatest([
        this._org.active_building,
        this._org.active_region,
        this._change,
    ]).pipe(
        filter(([b, r]) => !!b?.id),
        switchMap(([bld, region]) =>
            querySystems({
                zone_id:
                    (this._settings.get('use_region') ? region.id : '') ||
                    bld.id,
            }).pipe(
                map(({ data }) => data),
                catchError(() => of([]))
            )
        ),
        map((list) =>
            list
                .filter((_) => this._org.levelWithID(_.zones as any))
                .sort((a, b) => a.name.localeCompare(b.name))
        ),
        shareReplay(1)
    );

    public readonly filtered_rooms = combineLatest([
        this.room_list,
        this._options,
    ]).pipe(
        map(([list, options]) => {
            if (options.zones?.length) {
                list = list.filter((_) =>
                    options.zones.find((z) => _.zones.includes(z))
                );
            }
            if (options.search) {
                list = list.filter((_) =>
                    _.name.toLowerCase().includes(options.search.toLowerCase())
                );
            }
            return list;
        })
    );

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {}

    public setFilters(options: Partial<RoomListOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setSearchString(search: string) {
        this._options.next({ ...this._options.getValue(), search });
    }

    public editRoom(room: PlaceSystem = new PlaceSystem()) {
        const ref = this._dialog.open(RoomModalComponent, { data: { room } });
        ref.afterClosed().subscribe((data) => {
            if (data) setTimeout(() => this._change.next(Date.now()), 300);
        });
    }
}
