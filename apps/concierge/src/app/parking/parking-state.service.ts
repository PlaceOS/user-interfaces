import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    approveBooking,
    Booking,
    queryBookings,
    rejectBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    notifyError,
    notifySuccess,
    openConfirmModal,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { randomInt } from '@placeos/common';
import { endOfDay, format, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { ParkingSpaceModalComponent } from './parking-space-modal.component';

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
}

export interface ParkingUser {
    id: string;
    email: string;
    name: string;
    transponder: string;
    designation: string;
    car_model: string;
    car_colour: string;
    plate_number: string;
    phone: string;
    notes: string;
}

@Injectable({
    providedIn: 'root',
})
export class ParkingStateService extends AsyncHandler {
    private _poll = new BehaviorSubject<number>(0);
    private _change = new BehaviorSubject(0);
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
        map(([_, bld]) => {
            const levels = this._org.levels.filter((_) =>
                _.tags.includes('parking')
            );
            if (this._settings.get('app.use_region')) {
                const blds = this._org.buildingsForRegion();
                const bld_ids = blds.map((bld) => bld.id);
                const list = levels.filter((lvl) =>
                    bld_ids.includes(lvl.parent_id)
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
        })
    );
    /** List of parking spaces for the current building/level */
    public spaces = combineLatest([
        this.levels,
        this._options,
        this._change,
    ]).pipe(
        switchMap(([levels, options]) => {
            if (!(options.zones[0] || levels[0]?.id)) {
                return of({ details: [] });
            }
            this._loading.next([...this._loading.getValue(), 'spaces']);
            return showMetadata(
                options.zones[0] || levels[0]?.id,
                'parking-spaces'
            );
        }),
        map(
            (metadata) =>
                (metadata.details instanceof Array
                    ? metadata.details
                    : []) as ParkingSpace[]
        ),
        tap(() =>
            this._loading.next(
                this._loading.getValue().filter((_) => _ !== 'spaces')
            )
        ),
        shareReplay(1)
    );
    /** List of parking spaces for the current building/level */
    public users = combineLatest([
        this._org.active_building,
        this._change,
    ]).pipe(
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
    /** List of parking bookings for the current building/level */
    public bookings = combineLatest([
        this._org.active_building,
        this._options,
        this._poll,
    ]).pipe(
        debounceTime(500),
        switchMap(([bld, options]) => {
            this._loading.next([...this._loading.getValue(), 'bookings']);
            return queryBookings({
                period_start: getUnixTime(startOfDay(options.date)),
                period_end: getUnixTime(endOfDay(options.date)),
                type: 'parking',
                zones: options.zones?.length
                    ? options.zones.join(',')
                    : (this._settings.get('app.use_region')
                          ? this._org.region?.id
                          : '') || bld?.id,
            });
        }),
        tap(() =>
            this._loading.next(
                this._loading.getValue().filter((_) => _ !== 'bookings')
            )
        ),
        shareReplay(1)
    );

    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
    }

    public setOptions(options: Partial<ParkingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public startPolling(delay = 5000) {
        this._poll.next(Date.now());
        this.interval('poll', () => this._poll.next(Date.now()), delay);
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    /** Add or update a space in the available list */
    public async editSpace(space?: ParkingSpace) {
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
        const zone = this._options.getValue().zones[0];
        const new_space = {
            ...state.metadata,
            id: state.metadata.id || `parking-${zone}.${randomInt(999_999)}`,
        };
        const spaces = await this.spaces.pipe(take(1)).toPromise();
        const idx = spaces.findIndex((_) => _.id === new_space.id);
        if (idx >= 0) spaces[idx] = new_space;
        else spaces.push(new_space);
        const new_space_list = spaces;
        await updateMetadata(zone, {
            name: 'parking-spaces',
            details: new_space_list,
            description: 'List of available parking spaces',
        }).toPromise();
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
            this._dialog
        );
        if (state?.reason !== 'done') return;
        state.loading('Removing parking space...');
        const zone = this._options.getValue().zones[0];
        const spaces = await this.spaces.pipe(take(1)).toPromise();
        await updateMetadata(zone, {
            name: 'parking-spaces',
            details: spaces.filter((_) => _.id !== space.id),
            description: 'List of available parking spaces',
        }).toPromise();
        state.close();
    }

    public async saveUsers(users: ParkingUser[]) {}

    public async approveBooking(booking: Booking) {
        const success = await approveBooking(booking.id)
            .toPromise()
            .catch((_) => 'failed');
        success === 'failed'
            ? notifyError('Error approving in desk booking')
            : notifySuccess(
                  `Approved parking reservation for ${
                      booking.user_name
                  } on ${format(booking.date, 'MMM Do')}.`
              );
    }

    public async rejectBooking(bookings: Booking) {
        const success = await rejectBooking(bookings.id)
            .toPromise()
            .catch((_) => 'failed');
        success === 'failed'
            ? notifyError('Error rejecting in desk booking')
            : notifySuccess(
                  `Rejected parking reservation for ${
                      bookings.user_name
                  } on ${format(bookings.date, 'MMM Do')}.`
              );
    }
}
