import { Injectable } from '@angular/core';
import {
    authority,
    getModule,
    PlaceMetadata,
    PlaceVariableBinding,
    querySystems,
    queryUsers,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, forkJoin, of, zip } from 'rxjs';
import {
    catchError,
    combineAll,
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

import {
    BaseClass,
    currentUser,
    HashMap,
    SettingsService,
    unique,
} from '@placeos/common';
import { requestSpacesForZone } from '@placeos/spaces';
import { CalendarEvent } from '@placeos/events';
import { searchStaff, StaffUser, User } from '@placeos/users';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { CalendarService } from '@placeos/calendar';
import { ScheduleStateService } from '../new-schedule/schedule-state.service';
import { isAfter, isSameDay } from 'date-fns';

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
    private _contacts = new BehaviorSubject<User[]>([]);
    /**  */
    private _level_occupancy = new BehaviorSubject<BuildingLevel[]>([]);
    /**  */
    private _occupancy_binding: PlaceVariableBinding;
    /**  */

    private _space_list = this._org.active_building.pipe(
        filter((_) => !!_),
        switchMap((bld) => requestSpacesForZone(bld.id)),
        map((_) => _.filter((s) => s.bookable)),
        shareReplay(1)
    );

    private _space_statuses = this._space_list.pipe(
        tap((_) => this.unsubWith('bind:')),
        switchMap((list) =>
            combineLatest(
                (list || []).map((_) => {
                    const binding = getModule(_.id, 'Bookings').binding(
                        'status'
                    );
                    const obs = binding.listen();
                    this.subscription(`bind:${_.id}`, binding.bind());
                    return obs;
                })
            )
        ),
        shareReplay(1)
    );

    public readonly free_space_list = combineLatest([
        this._space_list,
        this._space_statuses,
    ]).pipe(
        map(([list, statuses]) =>
            (list || [])
                .filter((_, idx) => statuses[idx] === 'free')
                .sort((a, b) => a.capacity - b.capacity)
        ),
        shareReplay(1)
    );
    /**  */
    public readonly upcoming_events = this._schedule.filtered_bookings.pipe(
        map((_) =>
            _.filter((i) => i.state !== 'done' && isSameDay(i.date, Date.now()))
        )
    );
    /**  */
    public contacts = this._contacts.asObservable();
    /**  */
    public options = this._options.asObservable();
    /**  */
    public loading = this._loading.asObservable();
    /**  */
    public loading_spaces = this._loading_spaces.asObservable();
    /** Function used to query for users */
    public search_fn = (q: string) =>
        this._settings.get('app.basic_user_search')
            ? queryUsers({ q, authority_id: authority()?.id }).pipe(
                  map(({ data }) => data.map((_) => new StaffUser(_)))
              )
            : searchStaff(q);

    public readonly search_results = this._options.pipe(
        debounceTime(500),
        switchMap(({ search }) => {
            this._loading.next('Loading users...');
            return search
                ? this.search_fn(search).pipe(catchError(() => of([])))
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
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.updateContacts();
        this.subscription(
            'building',
            this._org.active_building
                .pipe(filter((bld) => !!bld))
                .subscribe(() => {
                    this.updateBuildingMetadata();
                    this.updateOccupancy({});
                })
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

    public pollUpcomingEvents(delay: number = 5 * 60 * 1000) {
        this._schedule.setDate(Date.now());
        return this._schedule.startPolling(delay);
    }

    public stopPollingUpcomingEvents() {
        this._schedule.stopPolling();
    }

    public refreshUpcomingEvents() {
        this._schedule.setDate(Date.now());
        this._schedule.triggerPoll();
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
        const levels = [
            ...(await this._org.active_levels.pipe(take(1)).toPromise()),
        ];
        levels.sort(
            (a, b) => map[a.id]?.recommendation - map[b.id]?.recommendation
        );
        this._level_occupancy.next(levels);
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
