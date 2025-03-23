import { Injectable } from '@angular/core';
import {
    authority,
    getModule,
    PlaceMetadata,
    PlaceVariableBinding,
    queryUsers,
    showMetadata,
    showUser,
    updateMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
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

import { CalendarService } from '@placeos/calendar';
import {
    AsyncHandler,
    BookingRuleset,
    currentUser,
    filterResourcesFromRules,
    HashMap,
    SettingsService,
    unique,
} from '@placeos/common';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { requestSpacesForZone, Space } from '@placeos/spaces';
import { searchStaff, StaffUser, User } from '@placeos/users';
import { isSameDay } from 'date-fns';
import { ScheduleStateService } from '../schedule/schedule-state.service';

import { querySpaceAvailability } from '@placeos/events'

export interface LandingOptions {
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class LandingStateService extends AsyncHandler {

    public selectedData: number = 0;

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

    public _booking_rules: Observable<BookingRuleset[]> =
        this._org.active_building.pipe(
            filter((bld) => !!bld),
            switchMap((bld) =>
                showMetadata(bld.id, `room_booking_rules`).pipe(
                    catchError(() => of({ details: [] })),
                ),
            ),
            map((_) => (_?.details instanceof Array ? _.details : [])),
            shareReplay(1),
        );

    private _space_list = this._org.active_building.pipe(
        filter((_) => !!_),
        switchMap((bld) => requestSpacesForZone(bld.id)),
        map((_) => _.filter((s) => s.bookable)),
        shareReplay(1),
    );

    private _filtered_spaces = combineLatest([
        this._space_list,
        this._booking_rules,
    ]).pipe(
        map(([list, rules]) =>
            filterResourcesFromRules(
                list,
                {
                    date: this.selectedData,
                    duration: 60,
                    host: currentUser(),
                    resource: null,
                },
                rules,
            ),
        ),
    );

    private _space_statuses = this._filtered_spaces.pipe(
        tap((_) => this.unsubWith('bind:')),
        switchMap((list) =>
            combineLatest(
                (list || []).map((_) => {
                    const binding = getModule(_.id, 'Bookings').binding(
                        'status',
                    );
                    const obs = binding.listen();
                    this.subscription(`bind:${_.id}`, binding.bind());
                    return obs;
                }),
            ),
        ),
        shareReplay(1),
    );

    public readonly free_space_list = combineLatest([
        this._space_list,
        this._space_statuses,
    ]).pipe(
        map(([list, statuses]) =>
            (list || [])
                .filter((_, idx) => statuses[idx] === 'free')
                .sort((a, b) => a.capacity - b.capacity),
        ),
        shareReplay(1),
    );
    /**  */
    public readonly upcoming_events = this._schedule.filtered_bookings.pipe(
        map((_) =>
            _.filter(
                (i) => i.state !== 'done' && isSameDay(i.date, Date.now()),
            ),
        ),
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
        this._settings.get('app.basic_user_search') ||
        this._settings.get('app.colleagues_require_auth') !== false
            ? queryUsers({ q, authority_id: authority()?.id }).pipe(
                  map(({ data }) => data.map((_) => new StaffUser(_ as any))),
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
        shareReplay(1),
    );
    /**  */
    public level_occupancy = this._level_occupancy.asObservable();

    constructor(
        private _calendar: CalendarService,
        private _schedule: ScheduleStateService,
        private _org: OrganisationService,
        private _settings: SettingsService,
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
                }),
        );
        const mod = this._org.module('area_management', 'AreaManagement');
        if (!mod) return;
        const binding = mod.binding('overview');
        binding.listen().subscribe((d) => this.updateOccupancy(d || {}));
        binding.bind();
    }

    public setOptions(options: Partial<LandingOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public pollUpcomingEvents(delay: number = 2 * 60 * 1000) {
        this._schedule.setDate(Date.now());
        this._schedule.triggerPoll();
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
            'contacts',
        ).toPromise()) as any;
        const list = metadata.details instanceof Array ? metadata.details : [];
        const users = await Promise.all(
            list.map((_) =>
                showUser(_.email)
                    .pipe(catchError(() => of(_)))
                    .toPromise(),
            ),
        );
        this._contacts.next(users.map((i) => new StaffUser(i as any)));
    }

    public async addContact(user: User) {
        let users = [...this._contacts.getValue()];
        users.push(user);
        users = unique(users, 'email');
        await updateMetadata(currentUser().id, {
            name: 'contacts',
            description: 'Contacts for the User',
            details: users,
        }).toPromise();
        this.updateContacts();
    }

    public async removeContact(user: User) {
        let users = [...this._contacts.getValue()];
        users = users.filter((u) => u.email !== user.email);
        await updateMetadata(currentUser().id, {
            name: 'contacts',
            description: 'Contacts for the User',
            details: users,
        }).toPromise();
        this.updateContacts();
    }

    private async updateOccupancy(map: HashMap<{ recommendation: number }>) {
        const levels = this._org.levelsForBuilding() || [];
        levels.sort(
            (a, b) => map[a.id]?.recommendation - map[b.id]?.recommendation,
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
                    (a, b) => a.recommendation_factor - b.recommendation_factor,
                );
                this._level_occupancy.next(
                    levels.map((i) => this._org.levelWithID([i.id])),
                );
            }),
        );
    }


    // Method to get the list of spaces as an array
    public getSpaces(): Observable<any[]> {
        return this._space_list;
    }

    // Method to get the list of spaces as an array (synchronous)
    public async getSpacesArray(): Promise<any[]> {
        return await this._space_list.pipe(first()).toPromise();
    }

    public async getSpaceAvailability(spaces_list, select_date: number) {
        return await querySpaceAvailability(spaces_list.map((s) => s.id), select_date, 60).toPromise();
    }

    async getAvailable(select_date){

        const spaces_list = await this.getSpacesArray();
        const available = await this.getSpaceAvailability(spaces_list, select_date);

        let final_list: Space[] = [];
        for (let i=0; i < spaces_list.length; i++){
            if (available[i]){
                final_list.push(spaces_list[i]);
            }
        }

        return final_list;       
    }
    
}
