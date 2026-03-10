import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import type { ParkingFleetVehicle, ParkingUser } from '@placeos/assets';
import {
    deleteParkingFleetVehicle,
    deleteParkingSpace,
    deleteParkingUser,
    queryParkingFleetVehicles,
    queryParkingSpaces,
    queryParkingUsers,
    saveParkingFleetVehicle,
    saveParkingSpace,
    saveParkingUser,
    toParkingFleetVehicle,
} from '@placeos/assets';
import {
    approveBooking,
    approveBookingInstance,
    checkinBooking,
    checkinBookingInstance,
    queryBookings,
    rejectBooking,
    rejectBookingInstance,
    removeBooking,
    saveBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
    OrganisationService,
    RecurrenceDays,
    SettingsService,
    unique,
    User,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { PlaceAsset } from '@placeos/ts-client';
import { UserPipe } from '@placeos/users';
import { addHours, endOfDay, getUnixTime, set, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { ParkingAssignSpaceModalComponent } from './parking-assign-space-modal.component';
import { ParkingBookingModalComponent } from './parking-booking-modal.component';
import { ParkingFleetModalComponent } from './parking-fleet-modal.component';
import { ParkingSpaceModalComponent } from './parking-space-modal.component';
import { ParkingUserModalComponent } from './parking-user-modal.component';

export interface ParkingOptions {
    date: number;
    search: string;
    zones: string[];
}

export type ParkingSpace = PlaceAsset;

export type { ParkingFleetVehicle, ParkingUser } from '@placeos/assets';

const USER_PIPE = new UserPipe();

@Injectable({
    providedIn: 'root',
})
export class ParkingStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    private _poll = new BehaviorSubject<number>(0);
    private _change = new BehaviorSubject(0);
    private _fleet_vehicles = new BehaviorSubject<ParkingFleetVehicle[]>([]);
    private _options = new BehaviorSubject<ParkingOptions>({
        date: Date.now(),
        search: '',
        zones: [],
    });
    private _loading = new BehaviorSubject<string[]>([]);
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
        debounceTime(300),
        switchMap(([levels, options]) => {
            const zone_id = options.zones[0] || levels[0]?.id;
            if (!zone_id) {
                return of([] as ParkingSpace[]);
            }
            this._loading.next([...this._loading.getValue(), 'spaces']);
            return queryParkingSpaces(zone_id);
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
            return queryParkingUsers(bld.id);
        }),
        tap(() =>
            this._loading.next(
                this._loading.getValue().filter((_) => _ !== 'users'),
            ),
        ),
        shareReplay(1),
    );
    /** List of fleet vehicles for the current building */
    public readonly fleet_vehicles = this._fleet_vehicles.asObservable();
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

    constructor() {
        super();
        this.subscription(
            'fleet_vehicles',
            combineLatest([this._org.active_building, this._change])
                .pipe(
                    filter(([bld]) => !!bld?.id),
                    switchMap(([bld]) => this._loadFleetVehicles(bld.id)),
                )
                .subscribe((list) => this._fleet_vehicles.next(list)),
        );
    }

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
        const zone_id =
            this._options.getValue().zones[0] ||
            space.zone_id ||
            this._org.levelsForBuilding()[0]?.id;
        const asset_data: Partial<ParkingSpace> = {
            ...state.metadata,
            zone_id,
            id: state.metadata.id || undefined,
        };
        let recreate = false;
        if (
            space.assigned_to &&
            (space.assigned_to !== asset_data.assigned_to ||
                space.id !== asset_data.id)
        ) {
            this._clearAssignedBooking(space);
            recreate = true;
        }
        const saved = await saveParkingSpace(asset_data).toPromise();
        if (
            (space.assigned_to !== asset_data.assigned_to || recreate) &&
            asset_data.assigned_to
        ) {
            const users = await nextValueFrom(this.users);
            const user = users.find((_) => _.email === asset_data.assigned_to);
            const user_details = await USER_PIPE.transform(
                asset_data.assigned_to,
            );
            const date = set(Date.now(), { hours: 1, minutes: 0, seconds: 0 });
            await saveBooking(
                new Booking({
                    user_id: user_details.id || asset_data.assigned_to,
                    user_email: asset_data.assigned_to,
                    user_name: user_details.name,
                    booking_start: getUnixTime(date),
                    booking_end: getUnixTime(addHours(date, 22)),
                    type: 'parking',
                    booking_type: 'parking',
                    asset_id: saved.id,
                    asset_name: saved.name,
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
                        zone_id,
                    ]),
                    extension_data: {
                        asset_name: saved.name,
                        is_assigned: true,
                        plate_number: user?.plate_number || '',
                    },
                }),
            )
                .toPromise()
                .catch((e) => {
                    ref.close();
                    throw e;
                });
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
        this._clearAssignedBooking(space);
        await deleteParkingSpace(space.id).toPromise();
        this._change.next(Date.now());
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
        const new_user = {
            ...state.metadata,
            id: state.metadata.id || undefined,
        };
        if ('user' in new_user) delete new_user.user;
        await saveParkingUser(new_user, zone).toPromise();
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
        await deleteParkingUser(user.id)
            .toPromise()
            .catch((e) => {
                notifyError(
                    i18n('APP.CONCIERGE.PARKING_USER_REMOVE_ERROR', {
                        error: e,
                    }),
                );
                throw e;
            });
        state.close();
        notifySuccess(i18n('APP.CONCIERGE.PARKING_USER_REMOVE_SUCCESS'));
        this._change.next(Date.now());
    }

    /** Add or update a fleet vehicle in the available list */
    public async editFleetVehicle(vehicle?: ParkingFleetVehicle) {
        const ref = this._dialog.open(ParkingFleetModalComponent, {
            data: vehicle,
        });
        const state = await Promise.race([
            ref.afterClosed().toPromise(),
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
        ]);
        if (state?.reason !== 'done') return;
        const zone = this._org.building.id;
        const new_vehicle = {
            ...state.metadata,
            id: state.metadata.id || undefined,
        };
        const saved = await saveParkingFleetVehicle(
            new_vehicle,
            zone,
        ).toPromise();
        this._upsertFleetVehicle(toParkingFleetVehicle(saved));
        ref.close();
    }

    /** Remove the given fleet vehicle from the available list */
    public async removeFleetVehicle(vehicle: ParkingFleetVehicle) {
        const state = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE'),
                content: i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE_MSG', {
                    name: vehicle.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading(i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE_LOADING'));
        await deleteParkingFleetVehicle(vehicle.id)
            .toPromise()
            .catch((e) => {
                notifyError(
                    i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE_ERROR', {
                        error: e,
                    }),
                );
                throw e;
            });
        state.close();
        notifySuccess(i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE_SUCCESS'));
        this._removeFleetVehicleFromList(vehicle.id);
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

    public async assignSpace(booking: Booking) {
        const ref = this._dialog.open(ParkingAssignSpaceModalComponent, {
            data: { booking },
        });
        const result = await ref.afterClosed().toPromise();
        if (result) this._change.next(Date.now());
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

    private _loadFleetVehicles(building_id: string) {
        this._loading.next([...this._loading.getValue(), 'fleet']);
        return queryParkingFleetVehicles(building_id).pipe(
            tap(() =>
                this._loading.next(
                    this._loading.getValue().filter((_) => _ !== 'fleet'),
                ),
            ),
        );
    }

    private _upsertFleetVehicle(vehicle: ParkingFleetVehicle) {
        const fleet_list = this._fleet_vehicles.getValue();
        const index = fleet_list.findIndex((_) => _.id === vehicle.id);
        this._fleet_vehicles.next(
            index >= 0
                ? fleet_list.map((item, idx) =>
                      idx === index ? vehicle : item,
                  )
                : [...fleet_list, vehicle],
        );
    }

    private _removeFleetVehicleFromList(vehicle_id: string) {
        this._fleet_vehicles.next(
            this._fleet_vehicles.getValue().filter((_) => _.id !== vehicle_id),
        );
    }
}
