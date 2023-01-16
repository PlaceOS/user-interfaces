import { Injectable } from '@angular/core';
import {
    authority,
    getModule,
    querySystems,
    queryUsers,
} from '@placeos/ts-client';
import { SettingsService, unique } from '@placeos/common';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

import { Space } from 'libs/spaces/src/lib/space.class';
import { StaffUser, User } from 'libs/users/src/lib/user.class';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

export interface SearchResult {
    /** Unique ID of the result item */
    id: string;
    /** Type of the item being displayed */
    type: 'space' | 'user' | 'contact' | 'feature';
    /** Main display string for the item */
    name: string;
    /** Secondary display string for the item. e.g. email, location, coordinates */
    description: string;
}

@Injectable({
    providedIn: 'root',
})
export class ExploreSearchService {
    /** Current search results for staff users */
    private _emergency_contacts = new BehaviorSubject<User[]>([]);
    /** Filter string for results */
    private _filter = new BehaviorSubject<string>('');
    /** Whether results are being loaded */
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly emergency_contacts =
        this._emergency_contacts.asObservable();

    private _user_search: Observable<StaffUser[]> = this._filter.pipe(
        debounceTime(400),
        tap(() => this._loading.next(true)),
        switchMap((q) => (q?.length > 2 ? this.search_fn(q) : of([]))),
        catchError(() => [])
    );

    private _space_search: Observable<Space[]> = this._filter.pipe(
        debounceTime(400),
        tap(() => this._loading.next(true)),
        switchMap((q) =>
            q?.length > 2
                ? querySystems({ q, zone_id: this._org.organisation.id }).pipe(
                      map(({ data }) =>
                          data
                              .filter((_) => _.map_id)
                              .map(
                                  (_) =>
                                      new Space({
                                          ..._,
                                          level: this._org.levelWithID(
                                              _.zones as any
                                          ),
                                      } as any)
                              )
                      )
                  )
                : of([])
        ),
        catchError(() => [])
    );

    public readonly search_results: Observable<SearchResult[]> = combineLatest([
        this._space_search,
        this._user_search,
        this._emergency_contacts,
        this._filter,
    ]).pipe(
        map(([spaces, users, contacts, filter]) => {
            const search = filter.toLowerCase();
            const results = unique(
                [
                    ...spaces
                        .filter(
                            (_) =>
                                _.email.toLowerCase().includes(search) ||
                                _.name.toLowerCase().includes(search) ||
                                _.display_name.toLowerCase().includes(search)
                        )
                        .map((s) => ({
                            id: s.id,
                            type: 'space',
                            name: s.display_name || s.name,
                            description: `Capacity: ${s.capacity} `,
                        })),
                    ...contacts
                        .map((u) => ({
                            id: u.email,
                            type: (u as any).type || 'contact',
                            name: u.name,
                            description: u.email,
                        }))
                        .filter(
                            (_) =>
                                _.name.toLowerCase().includes(search) ||
                                _.description.toLowerCase().includes(search) ||
                                _.type.toLowerCase().includes(search)
                        ),
                    ...users.map((u) => ({
                        id: u.email,
                        type: 'user',
                        name: u.name,
                        description: u.email,
                    })),
                ],
                'id'
            );
            results.sort((a, b) => a.name.localeCompare(b.name));
            return results;
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1)
    );
    /** Obverable for whether results are being loaded */
    public readonly loading = this._loading.asObservable();
    /** Function used to query for users */
    public search_fn = (q: string) =>
        this._settings.get('app.basic_user_search')
            ? queryUsers({ q, authority_id: authority()?.id })
            : searchStaff(q);

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        this.search_results.subscribe();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        let sys_id: any = this._org.binding('location_services');
        if (!sys_id) return;
        const mod = getModule(sys_id, 'LocationServices');
        if (mod) {
            const binding = mod.binding('emergency_contacts');
            binding.listen().subscribe((contacts_map) => {
                const list = [];
                for (const type in contacts_map) {
                    for (const user of contacts_map[type]) {
                        list.push({ ...user, type });
                    }
                }
                this._emergency_contacts.next(list);
            });
            binding.bind();
        }
    }

    public setFilter(str: string) {
        this._filter.next(str);
    }
}
