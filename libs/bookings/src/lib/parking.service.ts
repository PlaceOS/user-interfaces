import { Injectable, inject } from '@angular/core';
import {
    Asset,
    AsyncHandler,
    OrganisationService,
    SettingsService,
    currentUser,
    flatten,
} from '@placeos/common';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, forkJoin, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { queryBookings } from './bookings.fn';
import { ResourceAssetsService } from './resource-assets.service';

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

/** ParkingSpace to Asset mapping */
const PARKING_SPACE_ASSET_MAPPING = {
    assetToResource: (asset: Asset, zone_id?: string): ParkingSpace => {
        const other_data = asset.other_data as Record<string, any>;
        return {
            id: asset.id,
            map_id: other_data?.map_id || asset.id,
            name: asset.identifier || '',
            notes: other_data?.notes || asset.notes || '',
            assigned_to: asset.assigned_to || '',
        };
    },
    resourceToAsset: (
        space: ParkingSpace,
        asset_type_id: string,
        zone_id: string,
        zones: string[],
    ): Partial<Asset> => ({
        id: space.id?.startsWith('temp-') ? undefined : space.id,
        asset_type_id,
        identifier: space.name,
        assigned_to: space.assigned_to || '',
        notes: space.notes || '',
        zone_id,
        zones,
        other_data: {
            map_id: space.map_id || space.id,
            notes: space.notes || '',
        } as Record<string, any>,
    }),
};

/** ParkingUser to Asset mapping */
const PARKING_USER_ASSET_MAPPING = {
    assetToResource: (asset: Asset, zone_id?: string): ParkingUser => {
        const other_data = asset.other_data as Record<string, any>;
        return {
            id: asset.id,
            name: asset.identifier || '',
            email: other_data?.email || '',
            car_model: other_data?.car_model || '',
            car_colour: other_data?.car_colour || '',
            plate_number: other_data?.plate_number || '',
            phone: other_data?.phone || '',
            notes: other_data?.notes || asset.notes || '',
            deny: other_data?.deny ?? false,
        };
    },
    resourceToAsset: (
        user: ParkingUser,
        asset_type_id: string,
        zone_id: string,
        zones: string[],
    ): Partial<Asset> => ({
        id: user.id?.startsWith('temp-') ? undefined : user.id,
        asset_type_id,
        identifier: user.name,
        notes: user.notes || '',
        zone_id,
        zones,
        other_data: {
            email: user.email || '',
            car_model: user.car_model || '',
            car_colour: user.car_colour || '',
            plate_number: user.plate_number || '',
            phone: user.phone || '',
            notes: user.notes || '',
            deny: user.deny ?? false,
        } as Record<string, any>,
    }),
};

/** Legacy metadata to ParkingSpace mapping */
const legacySpaceMapFn = (item: any, zone_id: string): ParkingSpace => ({
    ...item,
});

/** Legacy metadata to ParkingUser mapping */
const legacyUserMapFn = (item: any, zone_id: string): ParkingUser => ({
    ...item,
});

@Injectable({
    providedIn: 'root',
})
export class ParkingService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _resourceAssets = inject(ResourceAssetsService);

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
            return forkJoin(
                levels.map((lvl) =>
                    this._resourceAssets
                        .loadWithFallback$(
                            'parking-spaces',
                            'parking-spaces',
                            lvl.id,
                            PARKING_SPACE_ASSET_MAPPING,
                            legacySpaceMapFn,
                        )
                        .pipe(
                            map((spaces) =>
                                spaces.map((s) => ({
                                    ...s,
                                    zone_id: lvl.id,
                                })),
                            ),
                            catchError(() => of([] as ParkingSpace[])),
                        ),
                ),
            );
        }),
        map((list) => flatten<ParkingSpace>(list)),
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
            return this._resourceAssets
                .loadWithFallback$(
                    'parking-users',
                    'parking-users',
                    bld.id,
                    PARKING_USER_ASSET_MAPPING,
                    legacyUserMapFn,
                )
                .pipe(catchError(() => of([] as ParkingUser[])));
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

    constructor() {
        super();
        this.subscription('spaces', this.assigned_space.subscribe());
    }
}
