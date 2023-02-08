import { Injectable } from '@angular/core';
import {
    getModule,
    PlaceMetadata,
    PlaceVariableBinding,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    take,
} from 'rxjs/operators';
import { differenceInMinutes, endOfDay } from 'date-fns';

import {
    AsyncHandler,
    currentUser,
    HashMap,
    SettingsService,
    unique,
} from '@placeos/common';
import { Space } from '@placeos/spaces';
import {
    CalendarEvent,
    EventFormService,
    newCalendarEventFromBooking,
    queryEvents,
} from '@placeos/events';
import { searchStaff, User } from '@placeos/users';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { CalendarService } from '@placeos/calendar';
import { Booking, queryBookings } from '@placeos/bookings';

export interface DashboardOptions {
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class DashboardStateService extends AsyncHandler {
    private _options = new BehaviorSubject<DashboardOptions>({});
    /**  */
    private _free_spaces = new BehaviorSubject<Space[]>([]);
    /**  */
    private _upcoming_events = new BehaviorSubject<(CalendarEvent | Booking)[]>(
        []
    );
    /**  */
    private _contacts = new BehaviorSubject<User[]>([]);
    /**  */
    private _level_occupancy = new BehaviorSubject<BuildingLevel[]>([]);
    /**  */
    private _occupancy_binding: PlaceVariableBinding;
    /**  */
    public free_spaces = this._free_spaces.asObservable();
    /**  */
    public upcoming_events = this._upcoming_events.asObservable();
    /**  */
    public contacts = this._contacts.asObservable();
    /**  */
    public options = this._options.asObservable();

    public readonly search_results = this._options.pipe(
        debounceTime(500),
        switchMap(({ search }) => (search ? searchStaff(search) : of([]))),
        catchError((_) => []),
        shareReplay(1)
    );
    /**  */
    public level_occupancy = this._level_occupancy.asObservable();

    constructor(
        private _settings: SettingsService,
        private _calendar: CalendarService,
        private _org: OrganisationService,
        private _event_form: EventFormService
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
        let sys_id = this._org.binding('contact_tracing');
        if (!sys_id) return;
        const binding = getModule(sys_id, 'AreaManagement').binding('overview');
        binding.listen().subscribe((d) => this.updateOccupancy(d || {}));
        binding.bind();
    }

    public setOptions(options: Partial<DashboardOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public pollFreeSpaces(delay: number = 10 * 1000) {
        this.updateFreeSpaces();
        this.interval('free_spaces', () => this.updateFreeSpaces(), delay);
    }

    public stopPollingFreeSpaces() {
        this.clearInterval('free_spaces');
    }

    public pollUpcomingEvents(delay: number = 10 * 1000) {
        this.updateUpcomingEvents();
        this.interval(
            'upcoming_events',
            () => this.updateUpcomingEvents(),
            delay
        );
    }

    public stopPollingUpcomingEvents() {
        this.clearInterval('upcoming_events');
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
        const mins = Math.abs(
            differenceInMinutes(Date.now(), endOfDay(Date.now()))
        );
        this._event_form.setOptions({
            zone_ids: [],
            capacity: 0,
            features: [],
            show_fav: false,
        });
        this._event_form.form.patchValue({ date: Date.now(), duration: mins });
        const list = await this._event_form.available_spaces
            .pipe(take(1))
            .toPromise();
        list.sort((a, b) => a.capacity - b.capacity);
        this._free_spaces.next(list);
    }

    private async updateUpcomingEvents() {
        const period_start = Math.floor(new Date().valueOf() / 1000);
        const period_end = Math.floor(endOfDay(new Date()).valueOf() / 1000);
        const events = await (this._settings.get('app.events.use_bookings')
            ? queryBookings({
                  period_start,
                  period_end,
                  type: 'room',
                  email: currentUser().email,
              }).pipe(map((_) => _.map((i) => newCalendarEventFromBooking(i))))
            : queryEvents({
                  period_start,
                  period_end,
                  calendars: currentUser().email,
              })
        )
            .toPromise()
            .catch((_) => []);
        const bookings = await queryBookings({
            period_start,
            period_end,
            type: 'desk',
            user: currentUser().email,
        })
            .toPromise()
            .catch((_) => []);
        const event_list = [...events, ...bookings].sort(
            (a, b) => a.date - b.date
        );
        this._upcoming_events.next(event_list);
    }

    private async updateBuildingMetadata() {
        const building = this._org.building;
        const metadata = await showMetadata(
            building.id,
            'bindings'
        ).toPromise();
        if (!(metadata.details as HashMap).occupancy) return;
        const details = (metadata.details as HashMap).occupancy;
        const module = getModule(details.sys, details.module, details.index);
        if (!module) return;
        if (this._occupancy_binding) {
            this._occupancy_binding.unbind();
        }
        this._occupancy_binding = module.binding('occupancy');
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
