import { Injectable } from '@angular/core';
import { queryBookings } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, shareReplay, switchMap } from 'rxjs/operators';

export interface GroupEventOptions {
    date: number;
}

@Injectable({
    providedIn: 'root',
})
export class GroupEventsStateService {
    private _options = new BehaviorSubject<GroupEventOptions>({
        date: Date.now(),
    });

    public readonly events = combineLatest([
        this._org.active_building,
        this._options,
    ]).pipe(
        filter(([building]) => !!building),
        switchMap(([building, options]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(options.date)),
                period_end: getUnixTime(endOfDay(options.date)),
                type: 'group-event',
                zones: this._settings.get('app.use_region')
                    ? building.parent_id
                    : building.id,
            })
        ),
        shareReplay(1)
    );

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}
}
