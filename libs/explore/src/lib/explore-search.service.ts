import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { catchError, debounceTime, first, map, shareReplay, switchMap } from 'rxjs/operators';

import { Space, SpacesService } from '@placeos/spaces';
import { searchStaff, User } from '@placeos/users';
import { getModule } from '@placeos/ts-client';
import { unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

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

    private _user_search = this._filter.pipe(
        debounceTime(500),
        switchMap((q) => (q?.length > 2 ? searchStaff(q) : of([]))),
        catchError((_) => []),
        shareReplay(1)
    );
    private _space_search = combineLatest([this._filter, this._spaces.list]).pipe(
        map(
            ([f, spaces]) =>
                spaces.filter((_) =>
                    _.email.toLowerCase().includes(f.toLowerCase()) ||
                    _.name.toLowerCase().includes(f.toLowerCase()) ||
                    _.display_name.toLowerCase().includes(f.toLowerCase())
                )
        ),
        shareReplay(1)
    );

    public readonly search_results = combineLatest([
        this._space_search,
        this._user_search,
        this._emergency_contacts,
        this._filter,
    ]).pipe(
        debounceTime(500),
        map(([spaces, users, contacts, filter]) => {
            const search = filter.toLowerCase();
            const results = unique(
                [
                    ...spaces.map((s) => ({
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
            this._loading.next(false);
            return results;
        })
    );
    /** Obverable for whether results are being loaded */
    public readonly loading = this._loading.asObservable();

    constructor(
        private _spaces: SpacesService,
        private _org: OrganisationService
    ) {
        this._spaces.list.subscribe(() => this._filter.next(this._filter.getValue()));
        this._filter.subscribe(_ => this._loading.next(true));
        this.ngOnInit();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const mod = getModule(
            this._org.organisation.bindings?.location_services,
            'LocationServices'
        );
        if (mod) {
            const binding = mod.binding('emergency_contacts');
            binding.listen().subscribe((contacts_map) => {
                console.log('Contacts:', contacts_map);
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
