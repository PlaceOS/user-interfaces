import { Injectable } from '@angular/core';
import {
    getModule,
    PlaceMetadata,
    PlaceVariableBinding,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { endOfDay } from 'date-fns';

import { BaseClass, currentUser, HashMap, unique } from '@placeos/common';
import { Space } from '@placeos/spaces';
import { CalendarEvent, queryEvents } from '@placeos/events';
import { searchStaff, User } from '@placeos/users';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { CalendarService } from '@placeos/calendar';
import { ScheduleStateService } from '../new-schedule/schedule-state.service';

export interface LandingOptions {
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class LandingStateService extends BaseClass {
    private _options = new BehaviorSubject<LandingOptions>({});
    private _loading = new BehaviorSubject<string>('');
    private _loading_spaces = new BehaviorSubject<boolean>(false);
    /**  */
    private _free_spaces = new BehaviorSubject<Space[]>([]);
    /**  */
    private _contacts = new BehaviorSubject<User[]>([]);
    /**  */
    private _level_occupancy = new BehaviorSubject<BuildingLevel[]>([]);
    /**  */
    private _occupancy_binding: PlaceVariableBinding;
    /**  */
    public free_spaces = this._free_spaces.asObservable();
    /**  */
    public readonly upcoming_events = this._schedule.filtered_bookings.pipe(
        map((_) => _.filter((i) => i instanceof CalendarEvent))
    );
    /**  */
    public contacts = this._contacts.asObservable();
    /**  */
    public options = this._options.asObservable();
    /**  */
    public loading = this._loading.asObservable();
    /**  */
    public loading_spaces = this._loading_spaces.asObservable();

    public readonly search_results = this._options.pipe(
        debounceTime(500),
        switchMap(({ search }) => {
            this._loading.next('Loading users...');
            return search
                ? searchStaff(search).pipe(catchError(() => of([])))
                : of([]);
        }),
        tap(() => this._loading.next('')),
        shareReplay(1)
    );
    /**  */
    public level_occupancy = this._level_occupancy.asObservable();

    constructor(
        private _calendar: CalendarService,
        private _schedule: ScheduleStateService,
        private _org: OrganisationService
    ) {
        super();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.subscription(
            'building',
            this._org.active_building
                .pipe(filter((bld) => !!bld))
                .subscribe(() => this.updateBuildingMetadata())
        );
        let sys_id = this._org.binding('area_management');
        if (!sys_id) return;
        const binding = getModule(sys_id, 'AreaManagement').binding('overview');
        binding.listen().subscribe((d) => this.updateOccupancy(d || {}));
        binding.bind();
    }

    public setOptions(options: Partial<LandingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public pollFreeSpaces(delay: number = 60 * 1000) {
        this._loading_spaces.next(true);
        this.updateFreeSpaces();
        this.interval('free_spaces', () => this.updateFreeSpaces(), delay);
    }

    public stopPollingFreeSpaces() {
        this.clearInterval('free_spaces');
    }

    public pollUpcomingEvents(delay: number = 10 * 1000) {
        this._schedule.setDate(Date.now());
        return this._schedule.startPolling(delay);
    }

    public stopPollingUpcomingEvents() {
        this._schedule.stopPolling();
    }

    public async updateContacts() {
        const metadata: PlaceMetadata = (await showMetadata(
            currentUser().id,
            'contacts'
        ).toPromise()) as any;
        const list = metadata.details instanceof Array ? metadata.details : [];
        this._contacts.next(list.map((i) => new User(i)));
    }

    public async addContact(user: User) {
        let users = [...this._contacts.getValue()];
        users.push(user);
        users = unique(users, 'email');
        const metadata = await updateMetadata(currentUser().id, {
            name: 'contacts',
            description: 'Contacts for the User',
            details: users,
        }).toPromise();
        const list = metadata.details instanceof Array ? metadata.details : [];
        this._contacts.next(list.map((i) => new User(i)));
    }

    public async removeContact(user: User) {
        let users = [...this._contacts.getValue()];
        users = users.filter((u) => u.email !== user.email);
        const metadata = await updateMetadata(currentUser().id, {
            name: 'contacts',
            description: 'Contacts for the User',
            details: users,
        }).toPromise();
        const list = metadata.details instanceof Array ? metadata.details : [];
        this._contacts.next(list.map((i) => new User(i)));
    }

    private async updateOccupancy(map: HashMap<{ recommendation: number }>) {
        const levels = [...this._org.levels];
        levels.sort(
            (a, b) => map[a.id]?.recommendation - map[b.id]?.recommendation
        );
        this._level_occupancy.next(levels);
    }

    private async updateFreeSpaces() {
        if (!this._org.building) return;
        this._loading_spaces.next(true);
        const period_start = Math.floor(new Date().valueOf() / 1000);
        const period_end = Math.floor(endOfDay(new Date()).valueOf() / 1000);
        const list = await this._calendar
            .freeBusy({
                period_start,
                period_end,
                zone_ids: this._org.building.id,
            })
            .pipe(
                map((_) =>
                    _.filter(
                        (space) =>
                            !space.availability.length ||
                            space.availability.find((_) => _.status !== 'busy')
                    )
                ),
                catchError(_ => of([]))
            )
            .toPromise();
        list.sort((a, b) => a.capacity - b.capacity);
        this._free_spaces.next(list);
        this._loading_spaces.next(false);
    }

    private async updateBuildingMetadata() {
        this._level_occupancy.next([]);
        const occupancy: any = this._org.binding('occupancy');
        if (!occupancy) return;
        const { sys, module, index } = occupancy;
        const mod = getModule(sys, module, index);
        if (!mod) return;
        if (this._occupancy_binding) {
            this._occupancy_binding.unbind();
        }
        this._occupancy_binding = mod.binding('occupancy');
        this._occupancy_binding.bind();
        this.subscription(
            'occupancy_binding',
            this._occupancy_binding.listen().subscribe((value) => {
                const levels = Object.keys(value).map((key) => ({
                    id: key,
                    ...value[key],
                }));
                levels.sort(
                    (a, b) => a.recommendation_factor - b.recommendation_factor
                );
                this._level_occupancy.next(
                    levels.map((i) => this._org.levelWithID([i.id]))
                );
            })
        );
    }
}
