import { inject, Injectable } from '@angular/core';
import { currentUser, SettingsService, unique } from '@placeos/common';
import { queryEvents } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { querySystemsWithEmails } from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

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
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _options = new BehaviorSubject<GroupEventOptions>({
        date: Date.now(),
    });
    private _filters = new BehaviorSubject<GroupEventFilters>({
        categories: [],
        tags: [],
    });
    private _tag_list = new BehaviorSubject<string[]>([]);

    public get calendar() {
        return this._settings.get('app.group_events_calendar');
    }

    public readonly filters = this._filters.asObservable();
    public readonly tags = this._tag_list.asObservable();

    public readonly calendar_system = this._org.active_building.pipe(
        debounceTime(100),
        switchMap((bld) =>
            !bld
                ? of(null)
                : querySystemsWithEmails({ in: this.calendar }).pipe(
                      map((r) => r.data?.[0]),
                      catchError(() => of(null)),
                  ),
        ),
        shareReplay(1),
    );

    public readonly events = combineLatest([
        this._org.active_building,
        this.calendar_system,
        this._options,
    ]).pipe(
        filter(([building, sys]) => !!building && !!sys),
        switchMap(([building, sys, options]) =>
            queryEvents({
                period_start: getUnixTime(startOfDay(options.date)),
                period_end: getUnixTime(
                    endOfDay(options.end || options.date || Date.now()),
                ),
                system_ids: sys.id,
            }),
        ),
        map((list) =>
            list
                .filter(
                    (_) =>
                        (_.permission !== 'private' ||
                            currentUser()?.email === _.creator ||
                            currentUser()?.email === _.host ||
                            currentUser()?.email === _.mailbox) &&
                        _.extension_data.shared_event,
                )
                .sort((a, b) => a.date - b.date),
        ),
        tap((list) => {
            const old_tags = this._tag_list.getValue();
            const tags = list
                .map((event) => event.extension_data.tags || [])
                .flat();
            this._tag_list.next(unique([...old_tags, ...tags]));
        }),
        shareReplay(1),
    );

    public readonly filtered_events = combineLatest([
        this.events,
        this._filters,
    ]).pipe(
        map(([list, { tags }]) => {
            const tag_list = tags.map((_) => _.toLowerCase());
            return list.filter((event) => {
                const event_tags = (event.extension_data.tags || []).map((_) =>
                    _.toLowerCase(),
                );
                return (
                    tag_list.every((tag) => event_tags.includes(tag)) &&
                    event.date_end > Date.now()
                );
            });
        }),
        shareReplay(1),
    );

    public readonly options = this._options.asObservable();

    public setOptions(options: Partial<GroupEventOptions>) {
        this._options.next({ ...this._options.value, ...options });
    }

    public setFilters(filters: Partial<GroupEventFilters>) {
        this._filters.next({ ...this._filters.value, ...filters });
    }
}
