import { Injectable } from '@angular/core';
import { queryBookings } from '@placeos/bookings';
import { SettingsService, unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';

export interface GroupEventOptions {
    date: number;
    end?: number;
}

export interface GroupEventFilters {
    categories: string[];
    tags: string[];
}

@Injectable({
    providedIn: 'root',
})
export class GroupEventsStateService {
    private _options = new BehaviorSubject<GroupEventOptions>({
        date: Date.now(),
    });
    private _filters = new BehaviorSubject<GroupEventFilters>({
        categories: [],
        tags: [],
    });
    private _tag_list = new BehaviorSubject<string[]>([]);

    public readonly filters = this._filters.asObservable();
    public readonly tags = this._tag_list.asObservable();

    public readonly events = combineLatest([
        this._org.active_building,
        this._options,
    ]).pipe(
        filter(([building]) => !!building),
        switchMap(([building, options]) =>
            queryBookings({
                period_start: getUnixTime(
                    startOfDay(Math.max(Date.now(), options.date))
                ),
                period_end: getUnixTime(endOfDay(options.end || options.date)),
                type: 'group-event',
                zones: this._settings.get('app.use_region')
                    ? building.parent_id
                    : building.id,
            })
        ),
        map((list) =>
            list
                .filter((_) => _.permission !== 'PRIVATE')
                .sort((a, b) => a.date - b.date)
        ),
        tap((list) => {
            const old_tags = this._tag_list.getValue();
            const tags = list.map((event) => event.tags).flat();
            this._tag_list.next(unique([...old_tags, ...tags]));
        }),
        shareReplay(1)
    );

    public readonly filtered_events = combineLatest([
        this.events,
        this._filters,
    ]).pipe(
        map(([list, { tags }]) => {
            const tag_list = tags.map((_) => _.toLowerCase());
            return list.filter((event) => {
                const event_tags = event.tags.map((_) => _.toLowerCase());
                return (
                    tag_list.every((tag) => event_tags.includes(tag)) &&
                    event.date_end > Date.now()
                );
            });
        }),
        shareReplay(1)
    );

    public readonly options = this._options.asObservable();

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {}

    public setOptions(options: Partial<GroupEventOptions>) {
        this._options.next({ ...this._options.value, ...options });
    }

    public setFilters(filters: Partial<GroupEventFilters>) {
        this._filters.next({ ...this._filters.value, ...filters });
    }
}
