import {
    computed,
    effect,
    inject,
    Injectable,
    signal,
    untracked,
} from '@angular/core';
import {
    authority,
    getModule,
    PlaceVariableBinding,
    queryUsers,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';

import {
    AsyncHandler,
    Booking,
    BookingRuleset,
    BuildingLevel,
    currentUser,
    filterResourcesFromRules,
    HashMap,
    i18n,
    OrganisationService,
    SettingsService,
    Space,
    StaffUser,
    unique,
    User,
} from '@placeos/common';
import { CalendarService, requestSpacesForZone } from '@placeos/events';
import { searchStaff } from '@placeos/users';
import { isSameDay } from 'date-fns';
import { ScheduleStateService } from '../schedule/schedule-state.service';
import { loadContacts } from './contacts.fn';

export interface LandingOptions {
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class LandingStateService extends AsyncHandler {
    private _calendar = inject(CalendarService);
    private _schedule = inject(ScheduleStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _options = signal<LandingOptions>({});
    private _loading = signal('');
    private _loading_spaces = signal(false);
    private _contacts = signal<StaffUser[]>([]);
    private _level_occupancy = signal<BuildingLevel[]>([]);
    private _occupancy_binding: PlaceVariableBinding;
    private _booking_rules = signal<BookingRuleset[]>([]);
    private _space_list = signal<Space[]>([]);
    private _space_statuses = signal<unknown[]>([]);
    private _search_results = signal<StaffUser[]>([]);
    // `any` stays here: explore.component.ts reads event and booking fields
    // from this list with no type guard.
    private _upcoming_events = signal<any[]>([]);
    /** Number of open screens that show live room statuses */
    private _status_watchers = signal(0);
    private _watch_statuses = computed(() => this._status_watchers() > 0);

    private _filtered_spaces = computed(
        () =>
            filterResourcesFromRules(
                this._space_list(),
                {
                    date: Date.now(),
                    duration: 60,
                    host: currentUser(),
                    resource: null,
                },
                this._booking_rules(),
            ) as Space[],
    );

    /** Bookable spaces of the active building */
    public readonly space_list = this._space_list.asReadonly();
    /**
     * Spaces that the user can book and that have a live status of free.
     * The statuses have the same order as the filtered spaces. Empty unless a
     * screen calls `watchSpaceStatuses`.
     */
    public readonly free_space_list = computed(() =>
        this._filtered_spaces()
            .filter((_, idx) => this._space_statuses()[idx] === 'free')
            .sort((a, b) => a.capacity - b.capacity),
    );
    public readonly upcoming_events = this._upcoming_events.asReadonly();
    public contacts = this._contacts.asReadonly();
    public options = this._options.asReadonly();
    public loading = this._loading.asReadonly();
    public loading_spaces = this._loading_spaces.asReadonly();
    public readonly search_results = this._search_results.asReadonly();
    public level_occupancy = this._level_occupancy.asReadonly();

    public search_fn = async (q: string) =>
        this._settings.get('app.basic_user_search') ||
        this._settings.get('app.colleagues_require_auth') !== false
            ? queryUsers({ q, authority_id: authority()?.id }).then(
                  ({ data }) => data.map((_) => new StaffUser(_)),
              )
            : searchStaff(q);

    constructor() {
        super();
        effect(async (onCleanup) => {
            const bld = this._org.active_building();
            if (!bld) return;
            let active = true;
            onCleanup(() => (active = false));
            const metadata = await showMetadata(
                bld.id,
                `room_booking_rules`,
            ).catch(() => ({ details: [] }));
            const spaces = await requestSpacesForZone(bld.id)
                .toPromise()
                .catch(() => []);
            if (!active) return;
            this._booking_rules.set(
                metadata?.details instanceof Array ? metadata.details : [],
            );
            this._space_list.set((spaces || []).filter((s) => s.bookable));
            this.updateBuildingMetadata();
            this.updateOccupancy({});
        });
        effect((onCleanup) => {
            const list = this._watch_statuses() ? this._filtered_spaces() : [];
            this.unsubWith('bind:');
            this._space_statuses.set(Array(list.length).fill(null));
            for (const [idx, space] of list.entries()) {
                const binding = getModule(space.id, 'Bookings').variable(
                    'status',
                );
                const unsubscribe = binding.bindThenSubscribe((status) => {
                    const next_statuses = [...untracked(this._space_statuses)];
                    next_statuses[idx] = status;
                    this._space_statuses.set(next_statuses);
                });
                this.subscription(`bind:${space.id}`, unsubscribe);
            }
            onCleanup(() => this.unsubWith('bind:'));
        });
        effect((onCleanup) => {
            const { search } = this._options();
            const timeout = setTimeout(async () => {
                this._loading.set(
                    i18n('APP.WORKPLACE.COLLEAGUE_SEARCH_LOADING'),
                );
                const results = search
                    ? await this.search_fn(search).catch(() => [])
                    : [];
                this._search_results.set(results);
                this._loading.set('');
            }, 500);
            onCleanup(() => clearTimeout(timeout));
        });
        effect(() => {
            this._upcoming_events.set(
                this._schedule
                    .filtered_bookings()
                    .filter(
                        (i) =>
                            !i.deleted &&
                            !['cancelled', 'declined', 'ended'].includes(
                                i.status,
                            ) &&
                            (i instanceof Booking
                                ? !i.is_done
                                : i.state !== 'done') &&
                            isSameDay(i.date, Date.now()),
                    ),
            );
        });
        this.init();
    }

    public async init() {
        await this._org.waitUntilInitialised();
        this.updateContacts();
        const mod = this._org.module('area_management', 'AreaManagement');
        if (!mod) return;
        const binding = mod.variable('overview');
        this.subscription(
            'overview',
            binding.bindThenSubscribe((d) => this.updateOccupancy(d || {})),
        );
    }

    /**
     * Bind the live room statuses for `free_space_list` while a screen shows
     * them. Call the returned function when the screen closes.
     */
    public watchSpaceStatuses() {
        this._status_watchers.update((count) => count + 1);
        let released = false;
        return () => {
            if (released) return;
            released = true;
            this._status_watchers.update((count) => count - 1);
        };
    }

    public setOptions(options: Partial<LandingOptions>) {
        this._options.update((old_options) => ({ ...old_options, ...options }));
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

    /**
     * Load the contacts of the user. Set `refresh` after a contact change, so
     * that a load which started before the change is not used.
     */
    public async updateContacts(refresh = false) {
        this._contacts.set(await loadContacts(currentUser().id, refresh));
    }

    public async addContact(user: StaffUser) {
        let users = [...this._contacts()];
        users.push(user);
        users = unique(users, 'email');
        await updateMetadata(currentUser().id, {
            name: 'contacts',
            description: 'Contacts for the User',
            details: users,
        });
        this.updateContacts(true);
    }

    public async addContacts(user_list: User[]) {
        let users = [...this._contacts(), ...user_list];
        users = unique(users, 'email');
        await updateMetadata(currentUser().id, {
            name: 'contacts',
            description: 'Contacts for the User',
            details: users,
        });
        this.updateContacts(true);
    }

    public async removeContact(user: User) {
        let users = [...this._contacts()];
        users = users.filter((u) => u.email !== user.email);
        await updateMetadata(currentUser().id, {
            name: 'contacts',
            description: 'Contacts for the User',
            details: users,
        });
        this.updateContacts(true);
    }

    private async updateOccupancy(map: HashMap<{ recommendation: number }>) {
        const levels = this._org.levelsForBuilding() || [];
        levels.sort(
            (a, b) => map[a.id]?.recommendation - map[b.id]?.recommendation,
        );
        this._level_occupancy.set(levels);
    }

    private async updateBuildingMetadata() {
        this._level_occupancy.set([]);
        const occupancy: any = this._org.binding('occupancy');
        if (!occupancy) return;
        const { sys, module, index } = occupancy;
        const mod = getModule(sys, module, index);
        if (!mod) return;
        this._occupancy_binding = mod.variable('occupancy');
        this.subscription(
            'occupancy_binding',
            this._occupancy_binding.bindThenSubscribe((value) => {
                const levels = Object.keys(value || {}).map((key) => ({
                    id: key,
                    ...value[key],
                }));
                levels.sort(
                    (a, b) => a.recommendation_factor - b.recommendation_factor,
                );
                this._level_occupancy.set(
                    levels.map((i) => this._org.levelWithID([i.id])),
                );
            }),
        );
    }
}
