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

export interface RoomListOptions {
    zone?: string;
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class RoomManagementService {
    private _options = new BehaviorSubject<RoomListOptions>({});

    public options = this._options.asObservable();

    public readonly room_list = this._org.active_building.pipe(
        filter((_) => !!_?.id),
        switchMap((bld) =>
            querySystems({ zone_id: bld.id }).pipe(
                map(({ data }) => data),
                catchError(() => of([]))
            )
        ),
        map((list) =>
            list
                .filter((_) => this._org.levelWithID(_.zones))
                .sort((a, b) => a.name.localeCompare(b.name))
        ),
        shareReplay(1)
    );

    public readonly filtered_rooms = combineLatest([
        this.room_list,
        this._options,
    ]).pipe(
        map(([list, options]) => {
            if (options.zone) {
                list = list.filter((_) => _.zones.includes(options.zone));
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
        private _dialog: MatDialog
    ) {}

    public setFilters(options: Partial<RoomListOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setSearchString(search: string) {
        this._options.next({ ...this._options.getValue(), search });
    }

    public editRoom(room: PlaceSystem = new PlaceSystem()) {
        const ref = this._dialog.open(RoomModalComponent, { data: { room } });
    }
}
