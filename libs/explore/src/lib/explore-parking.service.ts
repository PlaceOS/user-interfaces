import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    AsyncHandler,
    currentUser,
    flatten,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { StaffUser } from '@placeos/users';
import { PlaceZone, showMetadata } from '@placeos/ts-client';
import {
    addDays,
    endOfDay,
    endOfMinute,
    getUnixTime,
    isSameDay,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';
import { map, shareReplay, switchMap, take } from 'rxjs/operators';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';
import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { SetDatetimeModalComponent } from './set-datetime-modal.component';
import { ExploreParkingInfoComponent } from './explore-parking-info.component';
import { ParkingService } from 'libs/bookings/src/lib/parking.service';

export interface ParkingSpace {
    id: string;
    map_id: string;
    name: string;
    notes: string;
    assigned_to: string;
    zone_id?: string;
    zone?: PlaceZone;
    groups?: string[];
}

export interface ParkingOptions {
    enable_booking?: boolean;
    date?: number;
    all_day?: boolean;
    zones?: string[];
    host?: StaffUser;
    custom?: boolean;
    use_api?: boolean;
    user?: string;
}

@Injectable()
export class ExploreParkingService extends AsyncHandler {
    private _options = new BehaviorSubject<ParkingOptions>({});
    private _poll = new BehaviorSubject<number>(0);

    public readonly options = this._options.asObservable();
    public on_book: (ParkingSpace) => void = null;

    /** List of available parking levels for the active building */
    public readonly levels = this._org.active_levels.pipe(
        map((l) => l.filter((_) => _.tags.includes('parking'))),
    );

    /** List of current bookings for the current building */
    public readonly events = combineLatest([
        this._org.active_building,
        this._options,
        this._poll,
        this._state.options,
    ]).pipe(
        switchMap(([bld, _, __, { is_public }]) =>
            is_public
                ? of([])
                : queryBookings({
                      period_start: getUnixTime(
                          startOfMinute(_.date || Date.now()),
                      ),
                      period_end: getUnixTime(
                          endOfMinute(_.date || Date.now()),
                      ),
                      type: 'parking',
                      zones: bld?.id,
                  }),
        ),
        shareReplay(1),
    );
    /** Any event that the selected user has for the current date */
    public readonly user_events = combineLatest([this._options]).pipe(
        switchMap(([_]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(_.date || Date.now())),
                period_end: getUnixTime(endOfDay(_.date || Date.now())),
                type: 'parking',
                email: _?.user || currentUser()?.email,
            }),
        ),
        shareReplay(1),
    );

    /** List of parking spaces for the active building */
    public readonly spaces: Observable<ParkingSpace[]> = this.levels.pipe(
        switchMap((_) =>
            forkJoin(
                _.map((l) =>
                    showMetadata(l.id, 'parking-spaces').pipe(
                        map((d) =>
                            (d.details instanceof Array ? d.details : []).map(
                                (s) => ({ ...s, zone_id: l.id }),
                            ),
                        ),
                    ),
                ),
            ),
        ),
        map((_) => flatten(_)),
        shareReplay(1),
    );

    public readonly active_spaces = combineLatest([
        this.spaces,
        this._state.level,
    ]).pipe(
        map(([spaces, level]) => spaces.filter((_) => _.zone_id === level.id)),
    );

    private _users: Record<string, string> = {};
    private _plate_numbers: Record<string, string> = {};

    /** Available parking spaces for the current level and date */
    public readonly available_spaces = combineLatest([
        this.events,
        this.active_spaces,
        this._parking.users,
    ]).pipe(
        map(([events, spaces, users]) => {
            const available = spaces.filter((_) => {
                const event = events.find((e) => e.asset_id === _.id);
                const assigned = `${
                    event?.user_email || _.assigned_to || ''
                }`.toLowerCase();
                const user = users.find(
                    (u) => u.email.toLowerCase() === assigned.toLowerCase(),
                );
                this._users[_.id] = assigned;
                this._plate_numbers[_.id] =
                    event?.extension_data?.plate_number ||
                    user?.plate_number ||
                    undefined;
                return !assigned;
            });
            this._updateParkingSpaces(spaces, available);
            return available;
        }),
    );

    constructor(
        private _org: OrganisationService,
        private _state: ExploreStateService,
        private _settings: SettingsService,
        private _bookings: BookingFormService,
        private _parking: ParkingService,
        private _dialog: MatDialog,
    ) {
        super();
        this.subscription('spaces', this.available_spaces.subscribe());
        this.setOptions({
            enable_booking:
                this._settings.get('app.parking.enable_maps') !== false,
        });
    }

    public startPolling() {
        this.interval('poll', () => this._poll.next(Date.now()), 10 * 1000);
        this._poll.next(Date.now());
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setOptions(options: Partial<ParkingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    private async _updateParkingSpaces(
        spaces: ParkingSpace[],
        available: ParkingSpace[],
    ) {
        const styles = {};
        const features = [];
        const actions = [];
        const colours = this._settings.get('app.explore.colors') || {};
        const options = this._options.getValue();
        const assigned_space = await this._parking.assigned_space
            .pipe(take(1))
            .toPromise();
        const deny_parking_access = await this._parking.deny_parking_access
            .pipe(take(1))
            .toPromise();
        const booked_space = await this._parking.booked_space
            .pipe(take(1))
            .toPromise();
        for (const space of spaces) {
            const can_book = !!available.find((_) => _.id === space.id);
            const assigned_space = !!space.assigned_to;
            const status = can_book
                ? 'free'
                : assigned_space
                  ? 'pending'
                  : 'busy';
            styles[`#${space.map_id}`] = {
                fill:
                    colours[`parking-${status}`] ||
                    colours[`${status}`] ||
                    DEFAULT_COLOURS[`${status}`],
                opacity: 0.6,
            };
            features.push({
                location: `${space.map_id}`,
                content: ExploreParkingInfoComponent,
                z_index: 20,
                hover: true,
                data: {
                    ...space,
                    user: this._users[space.id],
                    plate_number: this._plate_numbers[space.id],
                    status:
                        status === 'pending' && assigned_space
                            ? 'reserved'
                            : status,
                },
            });
            if (!can_book) continue;
            const book_fn = async () => {
                if (this.on_book) return this.on_book(space);
                if (deny_parking_access) {
                    return notifyError(
                        `Your user account has been denied parking access to ${
                            space.zone?.display_name || space.zone?.name
                        }.`,
                    );
                }
                if (assigned_space) {
                    return notifyError(
                        `You are already assigned to parking space "${
                            space.name || space.id
                        }".`,
                    );
                }
                if (booked_space?.find((_) => _.id === space.id)) {
                    return notifyError(
                        `You already have a parking space booked for the selected time.`,
                    );
                }
                if (status !== 'free') {
                    return notifyError(
                        `${
                            space.name || 'Parking Space'
                        } is unavailable at this time.`,
                    );
                }
                if (
                    space.groups?.length &&
                    !space.groups.find((_) => currentUser().groups.includes(_))
                ) {
                    return notifyError(
                        `You are not allowed to book ${space.name}.`,
                    );
                }
                this._bookings.newForm();
                this._bookings.setOptions({ type: 'parking' });
                if (options.date) {
                    this._bookings.form.patchValue({
                        date: options.date,
                    });
                    this._bookings.form.patchValue({
                        all_day: !!options.all_day,
                    });
                }
                let { date, duration, user } = await this._setBookingTime(
                    this._bookings.form.value.date,
                    this._bookings.form.value.duration,
                    this._options.getValue()?.custom ?? false,
                    space as any,
                );
                user = user || options.host || currentUser();
                const user_email = user?.email;
                const lvl = this._state.active_level;
                this._bookings.form.patchValue({
                    resources: [space],
                    asset_id: space.id,
                    asset_name: space.name,
                    date,
                    duration: options.all_day ? 12 * 60 : duration,
                    map_id: space?.map_id || space?.id,
                    description: space.name,
                    user,
                    user_email,
                    booking_type: 'parking',
                    zones: space.zone
                        ? [space.zone?.parent_id, space.zone?.id]
                        : [lvl.parent_id, lvl.id],
                });
                await this._bookings.confirmPost().catch((e) => {
                    if (e === 'User cancelled') throw e;
                    notifyError(
                        `Failed to book parking space ${
                            space.name || space.id
                        }. ${e.message || e.error || e}`,
                    );
                    throw e;
                });
                notifySuccess(
                    `Successfully booked parking space ${
                        space.name || space.id
                    }`,
                );
                this._poll.next(Date.now());
            };
            actions.push({
                id: space?.map_id || space?.id,
                action: 'click',
                priority: 10,
                callback: book_fn,
            });
        }
        this._state.setActions(
            'parking',
            options.enable_booking ? actions : [],
        );
        this._state.setStyles('parking', styles);
        this._state.setFeatures('parking', features);
    }

    private async _setBookingTime(
        date: number,
        duration: number,
        host: boolean = false,
        resource: any = null,
    ) {
        let user = null;
        if (!!this._settings.get('app.parking.allow_time_changes')) {
            const until = endOfDay(
                addDays(
                    Date.now(),
                    this._settings.get('app.parking.available_period') || 90,
                ),
            );
            const ref = this._dialog.open(SetDatetimeModalComponent, {
                data: { date, duration, until, host, resource },
            });
            const details = await ref.afterClosed().toPromise();
            if (!details) throw 'User cancelled';
            date = details.date;
            duration = details.duration;
            user = details.user;
        }
        return { date, duration, user };
    }
}
