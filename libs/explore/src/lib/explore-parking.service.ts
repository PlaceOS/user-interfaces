import { Injectable } from '@angular/core';
import {
    AsyncHandler,
    currentUser,
    flatten,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';
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
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';
import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';
import { BookingFormService } from 'libs/bookings/src/lib/booking-form.service';
import { StaffUser } from '@placeos/users';
import { SetDatetimeModalComponent } from './set-datetime-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ExploreDeskInfoComponent } from './explore-desk-info.component';

export interface ParkingSpace {
    id: string;
    map_id: string;
    name: string;
    notes: string;
    assigned_to: string;
    zone_id?: string;
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

    /** List of available parking levels for the active building */
    public readonly levels = this._org.active_levels.pipe(
        map((l) => l.filter((_) => _.tags.includes('parking')))
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
                          startOfMinute(_.date || Date.now())
                      ),
                      period_end: getUnixTime(
                          endOfMinute(_.date || Date.now())
                      ),
                      type: 'parking',
                      zones: bld?.id,
                  })
        ),
        shareReplay(1)
    );
    /** Any event that the selected user has for the current date */
    public readonly existing_event = combineLatest([this._options]).pipe(
        switchMap(([_]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(_.date || Date.now())),
                period_end: getUnixTime(endOfDay(_.date || Date.now())),
                type: 'parking',
                email: _?.user || currentUser()?.email,
            })
        ),
        shareReplay(1)
    );

    /** List of current bookings for the current building */
    public readonly week_events = combineLatest([
        this._org.active_building,
        this._options,
    ]).pipe(
        switchMap(([bld, _]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(_.date || Date.now())),
                period_end: getUnixTime(
                    addDays(endOfDay(_.date || Date.now()), 6)
                ),
                type: 'parking',
                zones: bld?.id,
            })
        ),
        shareReplay(1)
    );

    /** List of parking spaces for the active building */
    public readonly spaces: Observable<ParkingSpace[]> = this.levels.pipe(
        switchMap((_) =>
            forkJoin(
                _.map((l) =>
                    showMetadata(l.id, 'parking-spaces').pipe(
                        map((d) =>
                            (d.details instanceof Array ? d.details : []).map(
                                (s) => ({ ...s, zone_id: l.id })
                            )
                        )
                    )
                )
            )
        ),
        map((_) => flatten(_)),
        shareReplay(1)
    );

    public readonly active_spaces = combineLatest([
        this.spaces,
        this._state.level,
    ]).pipe(
        map(([spaces, level]) => spaces.filter((_) => _.zone_id === level.id))
    );

    private _users = {};

    /** Available parking spaces for the current level and date */
    public readonly available_spaces = combineLatest([
        this.events,
        this.active_spaces,
    ]).pipe(
        map(([events, spaces]) =>
            spaces.filter((_) => {
                const assigned =
                    events.find((e) => e.asset_id === _.id)?.user_name ||
                    _.assigned_to;
                this._users[_.id] = assigned;
                return !assigned;
            })
        )
    );

    public readonly week_availablility = combineLatest([
        this.week_events,
        this.spaces,
        this._options,
    ]).pipe(
        map(([events, spaces, { date }]) => {
            const availability = {};
            for (let i = 0; i < 7; i++) {
                const day = addDays(date, i);
                const day_events = events.filter((_) => isSameDay(day, _.date));
                availability[day.valueOf()] = spaces.filter(
                    (_) => !day_events.find((e) => e.asset_id === _.id)
                ).length;
            }
            return availability;
        })
    );

    constructor(
        private _org: OrganisationService,
        private _state: ExploreStateService,
        private _settings: SettingsService,
        private _bookings: BookingFormService,
        private _dialog: MatDialog
    ) {
        super();
        this.subscription(
            'spaces',
            combineLatest([this.spaces, this.available_spaces]).subscribe(
                ([spaces, available]) =>
                    this._updateParkingSpaces(spaces, available)
            )
        );
        this.setOptions({
            enable_booking:
                this._settings.get('app.parking.enable_maps') !== false,
        });
        this.interval('poll', () => this._poll.next(Date.now()), 10 * 1000);
    }

    public setOptions(options: Partial<ParkingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    private _updateParkingSpaces(spaces, available) {
        const styles = {};
        const features = [];
        const labels = [];
        const actions = [];
        const colours = this._settings.get('app.explore.colors') || {};
        const options = this._options.getValue();
        for (const space of spaces) {
            const can_book = !!available.find((_) => _.id === space.id);
            const status = can_book ? 'free' : 'busy';
            styles[`#${space.map_id}`] = {
                fill:
                    colours[`parking-${status}`] ||
                    colours[`${status}`] ||
                    DEFAULT_COLOURS[`${status}`],
                opacity: 0.6,
            };
            features.push({
                track_id: `parking:hover:${space.map_id}`,
                location: `${space.map_id}`,
                content: ExploreDeskInfoComponent,
                full_size: true,
                no_scale: true,
                z_index: 20,
                data: { ...space, user: this._users[space.id], status },
            });
            if (!can_book) continue;
            labels.push({
                zoom_level: 1.1,
                location: `${space.map_id}`,
                content: `${space.name}\nFree`,
            });
            const book_fn = async () => {
                if (status !== 'free') {
                    return notifyError(
                        `${
                            space.name || 'Parking Space'
                        } is unavailable at this time.`
                    );
                }
                if (
                    space.groups?.length &&
                    !space.groups.find((_) => currentUser().groups.includes(_))
                ) {
                    return notifyError(
                        `You are not allowed to book ${space.name}.`
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
                    space as any
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
                    console.log(e);
                    notifyError(
                        `Failed to book parking space ${
                            space.name || space.id
                        }. ${e.message || e.error || e}`
                    );
                    throw e;
                });
                notifySuccess(
                    `Successfully booked parking space ${
                        space.name || space.id
                    }`
                );
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
            options.enable_booking ? actions : []
        );
        this._state.setStyles('parking', styles);
        this._state.setLabels('parking', labels);
    }

    private async _setBookingTime(
        date: number,
        duration: number,
        host: boolean = false,
        resource: any = null
    ) {
        let user = null;
        if (!!this._settings.get('app.parking.allow_time_changes')) {
            const until = endOfDay(
                addDays(
                    Date.now(),
                    this._settings.get('app.parking.available_period') || 90
                )
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
