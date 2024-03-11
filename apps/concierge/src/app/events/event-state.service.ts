import { Injectable } from '@angular/core';
import { queryBookings } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, shareReplay, switchMap } from 'rxjs/operators';

export interface GroupEventOptions {
    date?: number;
    zone_ids?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class EventStateService {
    private _options = new BehaviorSubject<GroupEventOptions>({});

    public readonly event_list = combineLatest([
        this._org.active_building,
        this._options,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld, options]) =>
            queryBookings({
                period_start: getUnixTime(
                    startOfDay(options.date || Date.now())
                ),
                period_end: getUnixTime(endOfDay(options.date || Date.now())),
                type: 'group-event',
                zones: options.zone_ids?.join(',') || bld.id,
            })
        ),
        shareReplay(1)
    );

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService
    ) {}
}
