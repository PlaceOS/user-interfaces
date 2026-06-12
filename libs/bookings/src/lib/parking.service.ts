import { inject, Injectable } from '@angular/core';
import { queryParkingSpacesForZones, queryParkingUsers } from '@placeos/assets';
import {
    AsyncHandler,
    currentUser,
    Desk,
    flatten,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { listChildMetadata, PlaceAsset } from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, forkJoin, from, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { queryBookings } from './bookings.fn';

export type ParkingSpace = PlaceAsset;
export type { ParkingUser } from '@placeos/assets';

@Injectable({
    providedIn: 'root',
})
export class ParkingService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

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
                        lvl.tags.includes('parking'),
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
                    lvl.tags.includes('parking'),
            );
        }),
    );
    /** List of parking spaces for the current building/level */
    public spaces = combineLatest([this.levels]).pipe(
        filter(([lvls]) => !!lvls[0]?.id),
        switchMap(([levels]) => {
            this._loading.next([...this._loading.getValue(), 'spaces']);
            return queryParkingSpacesForZones(levels.map((l) => l.id));
        }),
        tap(() =>
            this._loading.next(
                this._loading.getValue().filter((_) => _ !== 'spaces'),
            ),
        ),
        shareReplay(1),
    );

    /** List of parking users for the current building */
    public users = combineLatest([this._org.active_building]).pipe(
        filter(([bld]) => !!bld?.id),
        switchMap(([bld]) => {
            this._loading.next([...this._loading.getValue(), 'users']);
            return queryParkingUsers(bld.id);
        }),
        tap(() =>
            this._loading.next(
                this._loading.getValue().filter((_) => _ !== 'users'),
            ),
        ),
        shareReplay(1),
    );

    public readonly has_booking = queryBookings({
        period_start: getUnixTime(startOfDay(Date.now())),
        period_end: getUnixTime(endOfDay(Date.now())),
        type: 'parking',
    }).pipe(
        map((_) => _.length > 0),
        shareReplay(1),
    );

    public readonly assigned_space = this.spaces.pipe(
        map((list) =>
            list.find(
                (_) =>
                    _.assigned_to?.toLowerCase() ===
                    currentUser().email?.toLowerCase(),
            ),
        ),
    );

    public readonly user_details = this.users.pipe(
        map((list) =>
            list.find(
                (_) =>
                    _.email?.toLowerCase() ===
                    currentUser().email?.toLowerCase(),
            ),
        ),
    );

    public readonly deny_parking_access = this.user_details.pipe(
        map((details) => !!details?.deny),
    );

    public readonly booked_space = combineLatest([
        this._org.active_building,
        this.spaces,
    ]).pipe(
        map(([_, spaces]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(Date.now())),
                period_end: getUnixTime(endOfDay(Date.now())),
                type: 'parking',
            }).pipe(
                catchError(() => of([])),
                map((booking_list) =>
                    booking_list
                        .map((booking) =>
                            spaces.find(
                                (space) => space.id === booking.asset_id,
                            ),
                        )
                        .filter((space) => !!space),
                ),
            ),
        ),
        map((_) => _[0]),
        shareReplay(1),
    );

    /** Building ID where the user has an assigned desk (home location) */
    public readonly home_building_id = this._org.building_list.pipe(
        filter((blds) => blds?.length > 0),
        switchMap((buildings) => {
            const map_metadata = (meta) =>
                (meta?.metadata?.desks?.details instanceof Array
                    ? meta.metadata.desks.details
                    : []
                ).map((d) => new Desk({ ...d, zone: meta.zone }));
            return forkJoin(
                buildings.map((bld) =>
                    from(listChildMetadata(bld.id, { name: 'desks' })).pipe(
                        map((data) => ({
                            building_id: bld.id,
                            desks: flatten<Desk>(data.map(map_metadata)),
                        })),
                        catchError(() =>
                            of({ building_id: bld.id, desks: [] as Desk[] }),
                        ),
                    ),
                ),
            );
        }),
        map((results) => {
            const email = currentUser()?.email?.toLowerCase();
            if (!email) return null;
            const match = results.find((r) =>
                r.desks.some((d) => d.assigned_to?.toLowerCase() === email),
            );
            return match?.building_id || null;
        }),
        shareReplay(1),
    );

    /** Whether parking is restricted at the user's home location */
    public readonly is_home_location = combineLatest([
        this._org.active_building,
        this.home_building_id,
    ]).pipe(
        map(([bld, home_id]) => {
            if (!this._settings.get('app.parking.restrict_home_location'))
                return false;
            return !!home_id && bld?.id === home_id;
        }),
        shareReplay(1),
    );

    constructor() {
        super();
        this.subscription('spaces', this.assigned_space.subscribe());
    }
}
