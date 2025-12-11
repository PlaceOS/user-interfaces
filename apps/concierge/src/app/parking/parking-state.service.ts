import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    approveBooking,
    approveBookingInstance,
    checkinBooking,
    checkinBookingInstance,
    queryBookings,
    rejectBooking,
    rejectBookingInstance,
    removeBooking,
    ResourceAssetsService,
    saveBooking,
} from '@placeos/bookings';
import {
    Asset,
    AsyncHandler,
    Booking,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
    OrganisationService,
    randomInt,
    RecurrenceDays,
    SettingsService,
    unique,
    User,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { updateMetadata } from '@placeos/ts-client';
import { UserPipe } from '@placeos/users';
import { addHours, endOfDay, getUnixTime, set, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { ParkingBookingModalComponent } from './parking-booking-modal.component';
import { ParkingSpaceModalComponent } from './parking-space-modal.component';
import { ParkingUserModalComponent } from './parking-user-modal.component';

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
            zone_id: zone_id || asset.zone_id,
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
    zone_id,
});

/** Legacy metadata to ParkingUser mapping */
const legacyUserMapFn = (item: any, zone_id: string): ParkingUser => ({
    ...item,
});

export interface ParkingOptions {
    date: number;
    search: string;
    zones: string[];
}

export interface ParkingSpace {
    id: string;
    map_id: string;
    name: string;
    notes: string;
    assigned_to: string;
    zone_id?: string;
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

const USER_PIPE = new UserPipe();

@Injectable({
    providedIn: 'root',
})
export class ParkingStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _resourceAssets = inject(ResourceAssetsService);

    private _poll = new BehaviorSubject<number>(0);
    private _change = new BehaviorSubject(0);
    private _options = new BehaviorSubject<ParkingOptions>({
        date: Date.now(),
        search: '',
        zones: [],
    });
    private _loading = new BehaviorSubject<string[]>([]);
    private _spaces_need_migration = signal<boolean>(false);
    private _users_need_migration = signal<boolean>(false);

    public readonly spaces_need_migration =
        this._spaces_need_migration.asReadonly();
    public readonly users_need_migration =
        this._users_need_migration.asReadonly();
    /** List of available parking levels for the current building */
    public levels = combineLatest([
        this._org.active_region,
        this._org.active_building,
    ]).pipe(
        filter(([_, bld]) => !!bld),
        map(([_, bld]) => {
            const levels = this._org.levels.filter((_) =>
                _.tags.includes('parking'),
            );
            if (this._settings.get('app.use_region')) {
                const blds = this._org.buildingsForRegion();
                const bld_ids = blds.map((bld) => bld.id);
                const list = levels.filter((lvl) =>
                    bld_ids.includes(lvl.parent_id),
                );
                list.map((lvl) => ({
                    ...lvl,
                    display_name: `${
                        blds.find((_) => _.id === lvl.parent_id)?.display_name
                    } - ${lvl.display_name}`,
                }));
                return list;
            }
            return levels.filter((lvl) => lvl.parent_id === bld.id);
        }),
    );
    /** List of parking spaces for the current building/level */
    public spaces = combineLatest([
        this.levels,
        this._options,
        this._change,
    ]).pipe(
        switchMap(([levels, options]) => {
            const zone_id = options.zones[0] || levels[0]?.id;
            if (!zone_id) {
                return of([] as ParkingSpace[]);
            }
            this._loading.next([...this._loading.getValue(), 'spaces']);
            // Check migration status
            this._checkSpacesMigrationStatus(zone_id);
            // Try Assets API first, fallback to metadata
            return this._resourceAssets
                .loadWithFallback$(
                    'parking-spaces',
                    'parking-spaces',
                    zone_id,
                    PARKING_SPACE_ASSET_MAPPING,
                    legacySpaceMapFn,
                )
                .pipe(catchError(() => of([] as ParkingSpace[])));
        }),
        tap(() =>
            this._loading.next(
                this._loading.getValue().filter((_) => _ !== 'spaces'),
            ),
        ),
        shareReplay(1),
    );
    /** List of parking users for the current building */
    public users = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
        filter(([bld]) => !!bld?.id),
        switchMap(([bld]) => {
            this._loading.next([...this._loading.getValue(), 'users']);
            // Check migration status
            this._checkUsersMigrationStatus(bld.id);
            // Try Assets API first, fallback to metadata
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
    /** List of parking bookings for the current building/level */
    public bookings = combineLatest([
        this._org.active_building,
        this._options,
        this.users,
        this._poll,
        this._change,
    ]).pipe(
        debounceTime(500),
        switchMap(([bld, options, users]) => {
            this._loading.next([...this._loading.getValue(), '[BOOKINGS]']);
            return queryBookings({
                period_start: getUnixTime(startOfDay(options.date)),
                period_end: getUnixTime(endOfDay(options.date)),
                type: 'parking',
                zones: options.zones?.length
                    ? options.zones.join(',')
                    : (this._settings.get('app.use_region')
                          ? this._org.region?.id
                          : '') || bld?.id,
                include_checked_out: true,
            }).pipe(
                map((list) => {
                    for (const booking of list) {
                        const user = users.find(
                            (_) =>
                                _.email.toLowerCase() ===
                                booking.user_email.toLowerCase(),
                        );
                        if (user) {
                            booking.extension_data.plate_number =
                                booking.extension_data.plate_number ||
                                user.plate_number;
                        }
                    }
                    return list;
                }),
            );
        }),
        tap(() =>
            this._loading.next(
                this._loading.getValue().filter((_) => _ !== '[BOOKINGS]'),
            ),
        ),
        shareReplay(1),
    );

    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();

    public setOptions(options: Partial<ParkingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public startPolling(delay = 2 * 60 * 1000) {
        this._poll.next(Date.now());
        this.interval('poll', () => this._poll.next(Date.now()), delay);
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    /** Add or update a space in the available list */
    public async editSpace(space: ParkingSpace = {} as any) {
        const ref = this._dialog.open(ParkingSpaceModalComponent, {
            data: space,
        });
        const state = await Promise.race([
            ref.afterClosed().toPromise(),
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
        ]);
        if (state?.reason !== 'done') return;
        const zone =
            this._options.getValue().zones[0] ||
            space.zone_id ||
            this._org.levelsForBuilding()[0]?.id;
        const new_space: ParkingSpace = {
            ...state.metadata,
            zone_id: zone,
            id: state.metadata.id || `parking-${zone}.${randomInt(999_999)}`,
        };
        const spaces = await nextValueFrom(this.spaces);
        let recreate = false;
        if (
            space.assigned_to &&
            (space.assigned_to !== new_space.assigned_to ||
                space.id !== new_space.id)
        ) {
            this._clearAssignedBooking(space);
            recreate = true;
        }
        if (
            (space.assigned_to !== new_space.assigned_to || recreate) &&
            new_space.assigned_to
        ) {
            const users = await nextValueFrom(this.users);
            const user = users.find((_) => _.email === new_space.assigned_to);
            const user_details = await USER_PIPE.transform(
                new_space.assigned_to,
            );
            const date = set(Date.now(), { hours: 1, minutes: 0, seconds: 0 });
            await saveBooking(
                new Booking({
                    user_id: user_details.id || new_space.assigned_to,
                    user_email: new_space.assigned_to,
                    user_name: user_details.name,
                    booking_start: getUnixTime(date),
                    booking_end: getUnixTime(addHours(date, 22)),
                    type: 'parking',
                    booking_type: 'parking',
                    asset_id: new_space.id,
                    asset_name: new_space.name,
                    recurrence_type: 'daily',
                    recurrence_days:
                        RecurrenceDays.MONDAY |
                        RecurrenceDays.TUESDAY |
                        RecurrenceDays.WEDNESDAY |
                        RecurrenceDays.THURSDAY |
                        RecurrenceDays.FRIDAY,
                    zones: unique([
                        this._org.organisation.id,
                        this._org.region?.id,
                        this._org.building?.id,
                        new_space.zone_id,
                    ]),
                    extension_data: {
                        asset_name: new_space.name,
                        is_assigned: true,
                        plate_number: user?.plate_number || '',
                    },
                }),
            ).toPromise();
        }

        const using_assets = await this._resourceAssets.isUsingAssetsAPI(
            'parking-spaces',
            zone,
        );

        try {
            if (using_assets) {
                const saved = await this._resourceAssets.saveResource(
                    'parking-spaces',
                    new_space,
                    zone,
                    PARKING_SPACE_ASSET_MAPPING,
                    space.id,
                );
                if (saved) {
                    new_space.id = saved.id;
                }
            } else {
                const idx = spaces.findIndex((_) => _.id === space.id);
                if (idx >= 0) spaces[idx] = new_space;
                else spaces.push(new_space);
                await updateMetadata(zone, {
                    name: 'parking-spaces',
                    details: spaces,
                    description: 'List of available parking spaces',
                }).toPromise();
            }
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_SPACE_SAVE_ERROR', { error: e }) ||
                    `Failed to save parking space: ${e}`,
            );
            throw e;
        }

        this._change.next(Date.now());
        ref.close();
    }

    /** Remove the given space from the available list */
    public async removeSpace(space: ParkingSpace) {
        const state = await openConfirmModal(
            {
                title: 'Remove Parking Space',
                content: `Are you sure you wish to remove the parking space "${space.name}"?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading('Removing parking space...');
        const zone = this._options.getValue().zones[0] || space.zone_id;
        this._clearAssignedBooking(space);

        const using_assets = await this._resourceAssets.isUsingAssetsAPI(
            'parking-spaces',
            zone,
        );

        try {
            if (using_assets) {
                await this._resourceAssets.deleteResource(space.id);
            } else {
                const spaces = await nextValueFrom(this.spaces);
                await updateMetadata(zone, {
                    name: 'parking-spaces',
                    details: spaces.filter((_) => _.id !== space.id),
                    description: 'List of available parking spaces',
                }).toPromise();
            }
            this._change.next(Date.now());
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_SPACE_DELETE_ERROR', {
                    error: e,
                }) || `Failed to delete parking space: ${e}`,
            );
        }
        state.close();
    }

    /** Add or update a user in the available list */
    public async editUser(user?: ParkingUser) {
        const ref = this._dialog.open(ParkingUserModalComponent, {
            data: user,
        });
        const state = await Promise.race([
            ref.afterClosed().toPromise(),
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
        ]);
        if (state?.reason !== 'done') return;
        const zone = this._org.building.id;
        const new_user: ParkingUser = {
            ...state.metadata,
            id: state.metadata.id || `P:USR-${randomInt(999_999)}`,
        };
        if ('user' in new_user) delete (new_user as any).user;

        const using_assets = await this._resourceAssets.isUsingAssetsAPI(
            'parking-users',
            zone,
        );

        try {
            if (using_assets) {
                const saved = await this._resourceAssets.saveResource(
                    'parking-users',
                    new_user,
                    zone,
                    PARKING_USER_ASSET_MAPPING,
                    user?.id,
                );
                if (saved) {
                    new_user.id = saved.id;
                }
            } else {
                const users = await nextValueFrom(this.users);
                const idx = users.findIndex(
                    (_) => _.id === (user?.id || new_user.id),
                );
                if (idx >= 0) users[idx] = new_user;
                else users.push(new_user);
                await updateMetadata(zone, {
                    name: 'parking-users',
                    details: users,
                    description: 'List of available parking users',
                }).toPromise();
            }
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_USER_SAVE_ERROR', { error: e }) ||
                    `Failed to save parking user: ${e}`,
            );
            throw e;
        }

        this._change.next(Date.now());
        ref.close();
    }

    /** Remove the given user from the available list */
    public async removeUser(user: ParkingUser) {
        const state = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.PARKING_USER_REMOVE'),
                content: i18n('APP.CONCIERGE.PARKING_USER_REMOVE_MSG', {
                    name: user.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading(i18n('APP.CONCIERGE.PARKING_USER_REMOVE_LOADING'));
        const zone = this._org.building.id;

        const using_assets = await this._resourceAssets.isUsingAssetsAPI(
            'parking-users',
            zone,
        );

        try {
            if (using_assets) {
                await this._resourceAssets.deleteResource(user.id);
            } else {
                const users = await nextValueFrom(this.users);
                await updateMetadata(zone, {
                    name: 'parking-users',
                    details: users.filter((_) => _.id !== user.id),
                    description: 'List of available parking users',
                }).toPromise();
            }
            notifySuccess(i18n('APP.CONCIERGE.PARKING_USER_REMOVE_SUCCESS'));
            this._change.next(Date.now());
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_USER_REMOVE_ERROR', {
                    error: e,
                }),
            );
        }
        state.close();
    }

    public editReservation(
        reservation?: Booking,
        {
            parent_id,
            user,
            link_id,
            date,
            space,
            allow_time_changes,
            external_user,
        }: {
            parent_id?: string;
            user?: User;
            link_id?: string;
            date?: number;
            space?: ParkingSpace;
            allow_time_changes?: boolean;
            external_user?: boolean;
        } = {},
    ) {
        return new Promise<string>(async (resolve) => {
            const levels = await nextValueFrom(this.levels);
            const spaces = await nextValueFrom(this.spaces);
            if (!space && reservation?.asset_id) {
                space = spaces.find((_) => _.id === reservation.asset_id);
            }
            const ref = this._dialog.open(ParkingBookingModalComponent, {
                data: {
                    parent_id,
                    booking: reservation,
                    user,
                    link_id,
                    date,
                    level: levels[0],
                    space,
                    allow_time_changes,
                    external_user,
                },
            });
            ref.afterClosed().subscribe((id) => {
                resolve(id);
                this._poll.next(Date.now());
            });
        });
    }

    public async setBookingCheckinState(booking: Booking, state = true) {
        const promise = (
            booking.instance
                ? checkinBookingInstance(booking.id, booking.instance, state)
                : checkinBooking(booking.id, state)
        )
            .toPromise()
            .catch((_) => ({ state: 'failed', error: _ }));
        const success = await promise;
        success.state === 'failed'
            ? notifyError(
                  i18n(
                      state
                          ? 'APP.CONCIERGE.PARKING_CHECKIN_ERROR'
                          : 'APP.CONCIERGE.PARKING_CHECKOUT_ERROR',
                      { error: success.error },
                  ),
              )
            : notifySuccess(
                  i18n(
                      state
                          ? 'APP.CONCIERGE.PARKING_CHECKIN_SUCCESS'
                          : 'APP.CONCIERGE.PARKING_CHECKOUT_SUCCESS',
                  ),
              );
        if (success.state !== 'failed') this._change.next(Date.now());
    }

    public async approveBooking(booking: Booking) {
        const promise = (
            booking.instance
                ? approveBookingInstance(booking.id, booking.instance)
                : approveBooking(booking.id)
        )
            .toPromise()
            .catch((_) => ({ state: 'failed', error: _ }));
        const success = await promise;
        success.state === 'failed'
            ? notifyError(
                  i18n('APP.CONCIERGE.PARKING_APPROVE_ERROR', {
                      error: success.error,
                  }),
              )
            : notifySuccess(i18n('APP.CONCIERGE.PARKING_APPROVE_SUCCESS'));
        if (success.state !== 'failed') this._change.next(Date.now());
    }

    public async rejectBooking(booking: Booking) {
        const promise = (
            booking.instance
                ? rejectBookingInstance(booking.id, booking.instance)
                : rejectBooking(booking.id)
        )
            .toPromise()
            .catch((_) => ({ state: 'failed', error: _ }));
        const success = await promise;
        success.state === 'failed'
            ? notifyError(
                  i18n('APP.CONCIERGE.PARKING_DECLINE_ERROR', {
                      error: success.error,
                  }),
              )
            : notifySuccess(i18n('APP.CONCIERGE.PARKING_DECLINE_SUCCESS'));
        if (success.state !== 'failed') this._change.next(Date.now());
    }

    private async _clearAssignedBooking(space: ParkingSpace) {
        const booking_list = await queryBookings({
            period_start: getUnixTime(startOfDay(Date.now())),
            period_end: getUnixTime(endOfDay(Date.now())),
            type: 'parking',
            email: space.assigned_to,
            include_checked_out: true,
        }).toPromise();
        const filtered = booking_list.filter((_) => _.asset_id === space.id);
        await Promise.all(filtered.map((_) => removeBooking(_.id).toPromise()));
    }

    /** Check migration status for parking spaces */
    private async _checkSpacesMigrationStatus(zone_id: string): Promise<void> {
        const needs_migration = await this._resourceAssets.needsMigration(
            'parking-spaces',
            zone_id,
        );
        this._spaces_need_migration.set(needs_migration);
    }

    /** Check migration status for parking users */
    private async _checkUsersMigrationStatus(zone_id: string): Promise<void> {
        const needs_migration = await this._resourceAssets.needsMigration(
            'parking-users',
            zone_id,
        );
        this._users_need_migration.set(needs_migration);
    }

    /** Migrate parking spaces from metadata to Assets API */
    public async migrateSpaces(): Promise<boolean> {
        const zone =
            this._options.getValue().zones[0] ||
            (await nextValueFrom(this.levels))[0]?.id;
        if (!zone) {
            notifyError('Please select a parking level to migrate.');
            return false;
        }

        const resp = await openConfirmModal(
            {
                title:
                    i18n('APP.CONCIERGE.PARKING_SPACES_MIGRATE_TITLE') ||
                    'Migrate Parking Spaces',
                content:
                    i18n('APP.CONCIERGE.PARKING_SPACES_MIGRATE_MSG') ||
                    `This will migrate all parking spaces for this level to the Assets API. Continue?`,
                icon: {
                    type: 'icon',
                    class: 'material-symbols-rounded',
                    content: 'sync',
                },
            },
            this._dialog,
        );

        if (resp.reason !== 'done') return false;

        resp.loading(
            i18n('APP.CONCIERGE.PARKING_SPACES_MIGRATE_LOADING') ||
                'Migrating parking spaces...',
        );

        try {
            const result = await this._resourceAssets.migrateFromMetadata(
                'parking-spaces',
                'parking-spaces',
                zone,
                PARKING_SPACE_ASSET_MAPPING,
                legacySpaceMapFn,
            );
            resp.close();
            this._change.next(Date.now());
            return result;
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_SPACES_MIGRATE_ERROR', {
                    error: e,
                }) || `Migration failed: ${e}`,
            );
            resp.close();
            return false;
        }
    }

    /** Migrate parking users from metadata to Assets API */
    public async migrateUsers(): Promise<boolean> {
        const zone = this._org.building?.id;
        if (!zone) {
            notifyError('Please select a building to migrate parking users.');
            return false;
        }

        const resp = await openConfirmModal(
            {
                title:
                    i18n('APP.CONCIERGE.PARKING_USERS_MIGRATE_TITLE') ||
                    'Migrate Parking Users',
                content:
                    i18n('APP.CONCIERGE.PARKING_USERS_MIGRATE_MSG') ||
                    `This will migrate all parking users for this building to the Assets API. Continue?`,
                icon: {
                    type: 'icon',
                    class: 'material-symbols-rounded',
                    content: 'sync',
                },
            },
            this._dialog,
        );

        if (resp.reason !== 'done') return false;

        resp.loading(
            i18n('APP.CONCIERGE.PARKING_USERS_MIGRATE_LOADING') ||
                'Migrating parking users...',
        );

        try {
            const result = await this._resourceAssets.migrateFromMetadata(
                'parking-users',
                'parking-users',
                zone,
                PARKING_USER_ASSET_MAPPING,
                legacyUserMapFn,
            );
            resp.close();
            this._change.next(Date.now());
            return result;
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_USERS_MIGRATE_ERROR', {
                    error: e,
                }) || `Migration failed: ${e}`,
            );
            resp.close();
            return false;
        }
    }
}
