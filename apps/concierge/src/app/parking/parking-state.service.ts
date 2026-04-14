import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import type { ParkingFleetVehicle, ParkingUser } from '@placeos/assets';
import {
    deleteParkingFleetVehicle,
    deleteParkingSpace,
    deleteParkingUser,
    queryParkingFleetVehicles,
    queryParkingSpaces,
    queryParkingSpacesForZones,
    queryParkingUsers,
    saveParkingFleetVehicle,
    saveParkingSpace,
    saveParkingUser,
    toParkingFleetVehicle,
} from '@placeos/assets';
import {
    approveBooking,
    approveBookingInstance,
    bookedResourceList,
    checkinBooking,
    checkinBookingInstance,
    queryBookings,
    rejectBooking,
    rejectBookingInstance,
    removeBooking,
    saveBooking,
    updateBooking,
    updateBookingInstance,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    csvToJson,
    currentUser,
    downloadFile,
    getTimezoneDifferenceInHours,
    i18n,
    jsonToCsv,
    loadTextFileFromInputEvent,
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
import {
    addHours,
    addMinutes,
    endOfDay,
    endOfWeek,
    getUnixTime,
    set,
    startOfDay,
    startOfWeek,
    subDays,
} from 'date-fns';
import { BehaviorSubject, combineLatest, lastValueFrom, of } from 'rxjs';
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

export type ParkingRequestFilter =
    | 'all'
    | 'bookings'
    | 'manual'
    | 'pending'
    | 'requests'
    | 'waitlist';

export interface ParkingOptions {
    date: number;
    search: string;
    zones: string[];
    period: 'day' | 'week';
    request_filter: ParkingRequestFilter;
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
        period: 'day',
        request_filter: 'all',
    });
    private _loading = new BehaviorSubject<string[]>([]);

    public get tz_offset() {
        const tz = this._settings.get('app.bookings.use_building_timezone')
            ? this._org.building.timezone
            : '';
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
    }

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
            const zone_ids = options.zones.length
                ? options.zones
                : levels[0]?.id
                  ? [levels[0].id]
                  : [];
            if (!zone_ids.length) {
                return of([] as ParkingSpace[]);
            }
            this._loading.next([...this._loading.getValue(), 'spaces']);
            return queryParkingSpacesForZones(zone_ids);
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
            const week_start = this._settings.get('app.week_start') || 0;
            const range_start =
                options.period === 'week'
                    ? startOfWeek(options.date, { weekStartsOn: week_start })
                    : startOfDay(options.date);
            const range_end =
                options.period === 'week'
                    ? endOfWeek(options.date, { weekStartsOn: week_start })
                    : endOfDay(options.date);
            const period_start = addMinutes(range_start, this.tz_offset * 60);
            const period_end = addMinutes(range_end, this.tz_offset * 60);
            return queryBookings({
                period_start: getUnixTime(period_start),
                period_end: getUnixTime(period_end),
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
    public readonly period = this._options.pipe(map((o) => o.period));

    public get week_start(): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
        return this._settings.get('app.week_start') || 0;
    }

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

    public setPeriod(period: 'day' | 'week') {
        this.setOptions({ period });
    }

    public isRequest(booking: Booking) {
        return !!booking.asset_id?.startsWith('unallocated');
    }

    public canApproveBooking(
        booking: Booking,
        user_groups = currentUser()?.groups || [],
    ) {
        const approver_group = booking.extension_data?.approver_group;
        return !approver_group || user_groups.includes(approver_group);
    }

    public isManualRequest(booking: Booking) {
        return (
            this.isRequest(booking) && !!booking.extension_data?.approver_group
        );
    }

    public isWaitlisted(booking: Booking) {
        if (!this.isRequest(booking) || booking.status !== 'tentative') {
            return false;
        }
        const now = Date.now();
        const current_week_start = startOfWeek(now, {
            weekStartsOn: this.week_start,
        }).valueOf();
        const current_week_end = endOfWeek(now, {
            weekStartsOn: this.week_start,
        }).valueOf();
        return (
            booking.date >= current_week_start &&
            booking.date <= current_week_end
        );
    }

    public filterEventList(list: Booking[], filter_type: ParkingRequestFilter) {
        const show_requests = !!this._settings.get('app.parking.show_requests');
        const visible_list = show_requests
            ? list
            : list.filter((booking) => !this.isRequest(booking));
        if (filter_type === 'bookings') {
            return visible_list.filter((booking) => !this.isRequest(booking));
        }
        if (filter_type === 'requests') {
            return visible_list.filter((booking) => this.isRequest(booking));
        }
        if (filter_type === 'manual') {
            return visible_list.filter((booking) =>
                this.isManualRequest(booking),
            );
        }
        if (filter_type === 'waitlist') {
            return visible_list.filter((booking) => this.isWaitlisted(booking));
        }
        if (filter_type === 'pending') {
            return visible_list.filter(
                (booking) =>
                    this.isRequest(booking) &&
                    booking.status === 'tentative' &&
                    !this.isWaitlisted(booking),
            );
        }
        return visible_list;
    }

    public filterEventSearch(list: Booking[], search = '') {
        const search_term = search.toLowerCase();
        if (!search_term) return list;
        return list.filter(
            (booking) =>
                booking.user_name?.toLowerCase().includes(search_term) ||
                booking.user_email?.toLowerCase().includes(search_term) ||
                booking.booked_by_name?.toLowerCase().includes(search_term) ||
                booking.booked_by_email?.toLowerCase().includes(search_term) ||
                booking.asset_name?.toLowerCase().includes(search_term),
        );
    }

    public activeBookings(list: Booking[]) {
        return list.filter((booking) => !this.isRequest(booking));
    }

    public startPolling(delay = 2 * 60 * 1000) {
        this._poll.next(Date.now());
        this.interval('poll', () => this._poll.next(Date.now()), delay);
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    /** Download current parking spaces as a CSV file */
    public async downloadSpacesCSV() {
        const spaces = await nextValueFrom(this.spaces);
        const rows = spaces.map((space) => ({
            id: space.id || '',
            identifier: space.identifier || '',
            map_id: space.map_id || '',
            assigned_to: space.assigned_to || '',
            assigned_name: space.assigned_name || '',
            bookable: space.bookable ?? false,
            place_groups: (space.place_groups || []).join('|'),
            features: (space.features || []).join('|'),
            notes: space.notes || '',
        }));
        if (!rows.length) {
            // Download an empty template with headers
            rows.push({
                id: '',
                identifier: '',
                map_id: '',
                assigned_to: '',
                assigned_name: '',
                bookable: false,
                place_groups: '',
                features: '',
                notes: '',
            });
        }
        const csv = jsonToCsv(rows);
        downloadFile('parking-spaces.csv', csv);
    }

    /** Upload a CSV file to create or update parking spaces */
    public async uploadSpacesCSV(event: InputEvent) {
        const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
            notifyError(m);
            throw e;
        });
        try {
            const rows = csvToJson(data) || [];
            if (!rows.length) {
                notifyError(i18n('APP.CONCIERGE.PARKING_CSV_EMPTY'));
                return;
            }
            const zone_id =
                this._options.getValue().zones[0] ||
                this._org.levelsForBuilding()[0]?.id;
            if (!zone_id) {
                notifyError(i18n('APP.CONCIERGE.PARKING_CSV_NO_ZONE'));
                return;
            }
            let success_count = 0;
            let error_count = 0;
            for (const row of rows) {
                try {
                    const space_data: Partial<ParkingSpace> = {
                        ...(row.id ? { id: row.id } : {}),
                        identifier: row.identifier || '',
                        map_id: row.map_id || '',
                        assigned_to: row.assigned_to || '',
                        assigned_name: row.assigned_name || '',
                        bookable:
                            row.bookable === true ||
                            row.bookable === 'true' ||
                            row.bookable === 'TRUE',
                        place_groups: row.place_groups
                            ? String(row.place_groups)
                                  .split('|')
                                  .filter(Boolean)
                            : [],
                        features: row.features
                            ? String(row.features).split('|').filter(Boolean)
                            : [],
                        notes: row.notes || '',
                        ...(!row.id ? { zone_id } : {}),
                    };
                    await saveParkingSpace(space_data).toPromise();
                    success_count++;
                } catch (e) {
                    console.error('Failed to save parking space row:', row, e);
                    error_count++;
                }
            }
            if (error_count > 0) {
                notifyError(
                    i18n('APP.CONCIERGE.PARKING_CSV_SAVE_ERROR', {
                        count: error_count,
                    }),
                );
            }
            if (success_count > 0) {
                notifySuccess(
                    i18n('APP.CONCIERGE.PARKING_CSV_SAVE_SUCCESS', {
                        count: success_count,
                    }),
                );
            }
            this._change.next(Date.now());
        } catch (e) {
            console.error('CSV parsing error:', e);
            notifyError(i18n('APP.CONCIERGE.PARKING_CSV_PARSE_ERROR'));
        }
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
            await this._clearAssignedBooking(space);
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
        await this._clearAssignedBooking(space);
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
        if (
            this._settings.get('app.parking.assign_space_on_approve') &&
            this.isRequest(booking)
        ) {
            try {
                await this._assignSpaceForApproval(booking);
            } catch (error) {
                notifyError(
                    i18n('APP.CONCIERGE.PARKING_APPROVE_ERROR', {
                        error: error?.message || error?.error || error,
                    }),
                );
                return;
            }
        }
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

    private async _assignSpaceForApproval(booking: Booking) {
        const building = this._org.building;
        const levels = this._org
            .levelsForBuilding(building)
            .filter((level) => level.tags.includes('parking'));
        if (!building?.id || !levels.length) {
            throw i18n('APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY');
        }
        const [booked_ids, level_spaces] = await Promise.all([
            lastValueFrom(
                bookedResourceList({
                    period_start: getUnixTime(startOfDay(booking.date)),
                    period_end: getUnixTime(endOfDay(booking.date)),
                    type: 'parking',
                    zones: building.id,
                }),
            ),
            Promise.all(
                levels.map((level) =>
                    lastValueFrom(queryParkingSpaces(level.id)),
                ),
            ),
        ]);
        const booked_resource_ids = new Set(booked_ids);
        const available_space = level_spaces
            .flat()
            .find(
                (space) =>
                    !booked_resource_ids.has(space.id) &&
                    !space.assigned_to &&
                    space.bookable !== false,
            );
        if (!available_space) {
            throw i18n('APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY');
        }
        const level = levels.find(
            (item) => item.id === available_space.zone_id,
        );
        const asset_name = available_space.name || available_space.id;
        const patch = {
            asset_id: available_space.id,
            asset_name,
            zones: level
                ? unique([
                      this._org.organisation.id,
                      this._org.region?.id,
                      level.parent_id,
                      level.id,
                  ]).filter((_) => _)
                : booking.zones,
            extension_data: {
                ...booking.extension_data,
                asset_name,
            },
        } as Partial<Booking>;
        await lastValueFrom(
            booking.instance
                ? updateBookingInstance(
                      booking.id,
                      booking.instance || booking.booking_start,
                      patch,
                  )
                : updateBooking(booking.id, patch),
        );
    }

    private async _clearAssignedBooking(resource: ParkingSpace) {
        const today = Date.now();
        const booking_list = await lastValueFrom(
            queryBookings({
                period_start: getUnixTime(startOfDay(today)),
                period_end: getUnixTime(endOfDay(today)),
                type: 'parking',
                email: resource.assigned_to,
                include_checked_out: true,
            }),
        );
        const filtered = booking_list.filter((_) => _.asset_id === resource.id);
        for (const booking of filtered) {
            const is_recurring = booking.instance;
            if (is_recurring) {
                const yesterday_end = getUnixTime(endOfDay(subDays(today, 1)));
                await lastValueFrom(
                    updateBooking(
                        booking.id,
                        { recurrence_end: yesterday_end },
                        'patch',
                    ),
                );
            } else {
                await lastValueFrom(removeBooking(booking.id));
            }
        }
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
