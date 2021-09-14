import { Injectable } from '@angular/core';
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

import { SpacesService } from '@placeos/spaces';
import { searchStaff, StaffUser, User } from '@placeos/users';
import { getModule } from '@placeos/ts-client';
import { unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

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

    public readonly emergency_contacts = this._emergency_contacts.asObservable();

    private _user_search: Observable<StaffUser[]> = this._filter.pipe(
        debounceTime(400),
        tap(() => this._loading.next(true)),
        switchMap((q) => (q?.length > 2 ? this.search_fn(q) : of([]))),
        catchError(() => [])
    );

    public readonly search_results: Observable<SearchResult[]> = combineLatest([
        this._spaces.list,
        this._user_search,
        this._emergency_contacts,
    ]).pipe(
        map(([spaces, users, contacts]) => {
            const filter = this._filter.getValue() || '';
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
    public search_fn = (q: string) => searchStaff(q);

    constructor(
        private _spaces: SpacesService,
        private _org: OrganisationService
    ) {
        this._spaces.list.subscribe();
        this.search_results.subscribe();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const mod = getModule(
            this._org.organisation.bindings?.location_services,
            'LocationServices'
        );
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
