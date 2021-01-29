import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, first, map } from 'rxjs/operators';

import { Space, SpacesService } from '@user-interfaces/spaces';
import { searchStaff, User } from '@user-interfaces/users';
import { getModule } from '@placeos/ts-client';
import { unique } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';

@Injectable({
    providedIn: 'root',
})
export class ExploreSearchService {
    private _space_list = new BehaviorSubject<Space[]>([]);
    /** Current search results for staff users */
    private _user_list = new BehaviorSubject<User[]>([]);
    /** Current search results for staff users */
    private _emergency_contacts = new BehaviorSubject<User[]>([]);
    /** Filter string for results */
    private _filter = new BehaviorSubject<string>('');
    /** Whether results are being loaded */
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly emergency_contacts = this._emergency_contacts.asObservable();

    public readonly search_results = combineLatest([
        this._space_list,
        this._user_list,
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
            return results;
        })
    );
    /** Obverable for current space search results */
    public readonly space_list = this._space_list.asObservable();
    /** Obverable for current user search results */
    public readonly user_list = this._user_list.asObservable();
    /** Obverable for whether results are being loaded */
    public readonly loading = this._loading.asObservable();

    constructor(private _spaces: SpacesService, private _org: OrganisationService) {
        this._spaces.list.subscribe(() =>
            this._filter.next(this._filter.getValue())
        );
        this._filter.subscribe(async (filter_str) => {
            this._loading.next(true);
            const s = filter_str.toLowerCase();
            this._space_list.next(
                this._spaces.space_list.filter(
                    (space) =>
                        space.email.toLowerCase().includes(s) ||
                        space.name.toLowerCase().includes(s) ||
                        space.display_name.toLowerCase().includes(s)
                )
            );
            this._user_list.next([]);
            if (s.length > 2) {
                const users = await searchStaff(s)
                    .toPromise()
                    .catch((_) => null);
                this._user_list.next(users || []);
            }
            this._loading.next(false);
        });
        this.ngOnInit();
    }

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const mod = getModule(
            this._org.organisation.bindings?.location_services,
            'LocationServices'
        );
        console.log('Module:', mod);
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
