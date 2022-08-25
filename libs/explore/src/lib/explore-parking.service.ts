import { Injectable } from '@angular/core';
import {
    BaseClass,
    currentUser,
    flatten,
    SettingsService,
} from '@placeos/common';
import { showMetadata } from '@placeos/ts-client';
import {
    addDays,
    endOfDay,
    getUnixTime,
    isSameDay,
    startOfDay,
} from 'date-fns';
import { BehaviorSubject, combineLatest, forkJoin } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { queryBookings } from 'libs/bookings/src/lib/bookings.fn';
import { ExploreStateService } from './explore-state.service';
import { DEFAULT_COLOURS } from './explore-spaces.service';

export interface ExploreParkingOptions {
    date: number;
    user?: string;
}

@Injectable()
export class ExploreParkingService extends BaseClass {
    private _options = new BehaviorSubject<ExploreParkingOptions>({
        date: startOfDay(Date.now()).valueOf(),
    });
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
    ]).pipe(
        switchMap(([bld, _]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(_.date)),
                period_end: getUnixTime(endOfDay(_.date)),
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
                period_start: getUnixTime(startOfDay(_.date)),
                period_end: getUnixTime(endOfDay(_.date)),
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
                period_start: getUnixTime(startOfDay(_.date)),
                period_end: getUnixTime(addDays(endOfDay(_.date), 6)),
                type: 'parking',
                zones: bld?.id,
            })
        ),
        shareReplay(1)
    );

    /** List of parking spaces for the active building */
    public readonly spaces = this.levels.pipe(
        switchMap((_) =>
            forkJoin(
                _.map((l) =>
                    showMetadata(l.id, 'parking-spaces').pipe(
                        map((d) =>
                            d.details.map((s) => ({ ...s, zone_id: l.id }))
                        )
                    )
                )
            )
        ),
        map((_) => flatten(_)),
        shareReplay(1)
    );

    /** Available parking spaces for the current level and date */
    public readonly available_spaces = combineLatest([
        this.events,
        this.spaces,
        this._state.level,
    ]).pipe(
        map(([events, spaces, level]) =>
            spaces.filter(
                (_) =>
                    _.zone_id === level?.id &&
                    !events.find((e) => e.asset_id === _.id)
            )
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
        private _settings: SettingsService
    ) {
        super();
        this.subscription(
            'spaces',
            combineLatest([this.spaces, this.available_spaces]).subscribe(
                ([spaces, available]) =>
                    this._updateParkingSpaces(spaces, available)
            )
        );
        this.interval('poll', () => this._poll.next(Date.now()), 10 * 1000);
    }

    public setOptions(options: Partial<ExploreParkingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    private _updateParkingSpaces(spaces, available) {
        const styles = {};
        const labels = [];
        const colours = this._settings.get('app.explore.colors') || {};
        for (const space of spaces) {
            const can_book = !!available.find((_) => _.id === space.id);
            const status = can_book ? 'free' : 'busy';
            styles[`#${space.map_id}`] = {
                fill:
                    colours[`desk-${status}`] ||
                    colours[`${status}`] ||
                    DEFAULT_COLOURS[`${status}`],
                opacity: 0.6,
            };
            if (can_book) {
                labels.push({
                    location: `${space.map_id}`,
                    content: `${space.name}\nFree`,
                });
            }
        }
        this._state.setStyles('parking', styles);
        this._state.setLabels('parking', labels);
    }
}
