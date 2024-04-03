import { Injectable } from '@angular/core';
import { queryBookings } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';

export interface GroupEventOptions {
    date?: number;
    end?: number;
    zone_ids?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class EventStateService {
    private _options = new BehaviorSubject<GroupEventOptions>({});
    private _changed = new BehaviorSubject(0);

    public readonly event_list = combineLatest([
        this._org.active_building,
        this._options,
        this._changed,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld, options]) =>
            queryBookings({
                period_start: getUnixTime(
                    startOfDay(Math.max(Date.now(), options.date))
                ),
                period_end: getUnixTime(
                    endOfDay(options.end || options.date || Date.now())
                ),
                type: 'group-event',
                zones: options.zone_ids?.join(',') || bld.id,
            })
        ),
        map((list) => list.sort((a, b) => a.date - b.date)),
        shareReplay(1)
    );

    public changed() {
        this._changed.next(Date.now());
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}

    public setOptions(options: Partial<GroupEventOptions>) {
        this._options.next({ ...this._options.value, ...options });
    }
}
