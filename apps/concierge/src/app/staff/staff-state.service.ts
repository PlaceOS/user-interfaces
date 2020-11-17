import { Injectable } from '@angular/core';
import { StaffUser } from '@user-interfaces/users';
import { BehaviorSubject, combineLatest } from 'rxjs';

import { StaffService } from '@user-interfaces/users';
import { BookingsService } from '@user-interfaces/bookings';
import { map } from 'rxjs/operators';

export interface StaffFilters {
    date?: number;
    zones?: string[];
    only_onsite?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class StaffStateService {
    private _filters = new BehaviorSubject<StaffFilters>({});

    private _search = new BehaviorSubject<string>('');

    private _loading = new BehaviorSubject<boolean>(false);

    private _users = new BehaviorSubject<StaffUser[]>([]);

    public readonly loading = this._loading.asObservable();

    public readonly filters = this._filters.asObservable();

    public readonly users = this._filters.asObservable();

    public readonly filtered_users = combineLatest([
        this._search,
        this._users,
    ]).pipe(
        map((details) => {
            const [filter, users] = details;

            return users.filter(
                (i) =>
                    !filter ||
                    i.name.toLowerCase().includes(filter) ||
                    i.email.toLowerCase().includes(filter)
            );
        })
    );

    constructor(
        private _staff: StaffService,
        private _bookings: BookingsService
    ) {
        this.loadUsers();
    }

    public setFilters(filters: StaffFilters) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public setSearchString(search: string) {
        this._search.next(search);
    }

    private async loadUsers() {
        const user_list = await this._staff.query();
        user_list.sort((a, b) => a.name.localeCompare(b.name));
        this._users.next(user_list);
    }
}
