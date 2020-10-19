import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Space, SpacesService } from '@user-interfaces/spaces';
import { StaffService, User } from '@user-interfaces/users';

@Injectable({
    providedIn: 'root',
})
export class ExploreSearchService {
    /** Current search results for spaces */
    private _space_list = new BehaviorSubject<Space[]>([]);
    /** Current search results for staff users */
    private _user_list = new BehaviorSubject<User[]>([]);
    /** Filter string for results */
    private _filter = new BehaviorSubject<string>('');
    /** Whether results are being loaded */
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly search_results = combineLatest([this._space_list, this._user_list]).pipe(
        map((i) => {const results = [
            ...i[0].map((s) => ({
                id: s.id,
                type: 'space',
                name: s.display_name || s.name,
                description: `Capacity: ${s.capacity} `,
            })),
            ...i[1].map((u) => ({ id: u.email, type: 'user', name: u.name, description: u.email })),
        ];
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

    constructor(private _spaces: SpacesService, private _staff: StaffService) {
        this._spaces.list.subscribe(() => this._filter.next(this._filter.getValue()))
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
                const users = await this._staff.query({ q: s }).catch(_ => null);
                this._user_list.next(users || [])
            }
            this._loading.next(false);
        });
    }

    public setFilter(str: string) {
        this._filter.next(str);
    }
}
