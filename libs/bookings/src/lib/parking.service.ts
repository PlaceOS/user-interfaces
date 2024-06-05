import { Injectable } from '@angular/core';
import {
    AsyncHandler,
    SettingsService,
    currentUser,
    flatten,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, forkJoin } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';

export interface ParkingSpace {
    id: string;
    map_id: string;
    name: string;
    notes: string;
    assigned_to: string;
}

export interface ParkingUser {
    id: string;
    name: string;
    email: string;
    car_model: string;
    car_colour: string;
    plate_number: string;
    phone: string;
    notes: string;
    deny: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class ParkingService extends AsyncHandler {
    private _loading = new BehaviorSubject<string[]>([]);

    public readonly loading =
        this._loading.asObservable(); /** List of available parking levels for the current building */
    public levels = this._org.level_list.pipe(
        map((_) => {
            if (!this._settings.get('app.use_region')) {
                const blds = this._org.buildingsForRegion();
                const bld_ids = blds.map((bld) => bld.id);
                const list = _.filter(
                    (lvl) =>
                        bld_ids.includes(lvl.parent_id) &&
                        lvl.tags.includes('parking')
                );
                list.map((lvl) => ({
                    ...lvl,
                    display_name: `${
                        blds.find((_) => _.id === lvl.parent_id)?.display_name
                    } - ${lvl.display_name}`,
                }));
                return list;
            }
            return _.filter(
                (lvl) =>
                    lvl.parent_id === this._org.building.id &&
                    lvl.tags.includes('parking')
            );
        })
    );
    /** List of parking spaces for the current building/level */
    public spaces = combineLatest([this.levels]).pipe(
        filter(([lvls]) => !!lvls[0]?.id),
        switchMap(([levels]) => {
            this._loading.next([...this._loading.getValue(), 'spaces']);
            return forkJoin(
                levels.map((lvl) =>
                    showMetadata(lvl.id, 'parking-spaces').pipe(
                        map(
                            (d) =>
                                (d.details instanceof Array
                                    ? d.details
                                    : []
                                ).map((s) => ({
                                    ...s,
                                    zone_id: lvl.id,
                                })) as ParkingSpace[]
                        )
                    )
                )
            );
        }),
        map((list) => flatten<ParkingSpace>(list)),
        tap(() =>
            this._loading.next(
                this._loading.getValue().filter((_) => _ !== 'spaces')
            )
        ),
        shareReplay(1)
    );

    /** List of parking spaces for the current building/level */
    public users = combineLatest([this._org.active_building]).pipe(
        filter(([bld]) => !!bld?.id),
        switchMap(([bld]) => {
            this._loading.next([...this._loading.getValue(), 'users']);
            return showMetadata(bld.id, 'parking-users');
        }),
        map(
            (metadata) =>
                (metadata.details instanceof Array
                    ? metadata.details
                    : []) as ParkingUser[]
        ),
        tap(() =>
            this._loading.next(
                this._loading.getValue().filter((_) => _ !== 'users')
            )
        ),
        shareReplay(1)
    );

    public readonly assigned_space = this.spaces.pipe(
        map((list) =>
            list.find(
                (_) =>
                    _.assigned_to?.toLowerCase() ===
                    currentUser().email?.toLowerCase()
            )
        )
    );

    public readonly deny_parking_access = this.users.pipe(
        map(
            (list) =>
                !!list.find(
                    (_) =>
                        _.email?.toLowerCase() ===
                        currentUser().email?.toLowerCase()
                )?.deny
        )
    );

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
        this.subscription('spaces', this.assigned_space.subscribe());
    }
}
