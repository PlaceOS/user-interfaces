import {
    computed,
    effect,
    inject,
    Injectable,
    linkedSignal,
    signal,
    untracked,
} from '@angular/core';
import { queryBookings } from '@placeos/bookings';
import {
    Booking,
    currentUser,
    firstTruthyValueFrom,
    OrganisationService,
    SETTING_KEYS,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import {
    addDays,
    addWeeks,
    eachDayOfInterval,
    endOfDay,
    format,
    getUnixTime,
    isSameDay,
    startOfDay,
    startOfWeek,
    subWeeks,
} from 'date-fns';
import { catchError, lastValueFrom, of } from 'rxjs';
import {
    COLLEAGUE_REQUEST_LIMIT,
    loadContacts,
    mapWithLimit,
} from '../landing/contacts.fn';
import {
    DayStatus,
    DeskBooking,
    LocationStatus,
    TeamMember,
    USER_LOCATIONS,
} from './common';

export type ViewFilter = 'all' | 'favorites' | 'team';

export interface TeamScheduleFilters {
    date: number;
    day_index: number; // -1 means auto-select today
    view: ViewFilter;
    search: string;
    department: string | null;
    office: string | null;
    status: LocationStatus | null;
}

const DEFAULT_FILTERS: TeamScheduleFilters = {
    date: Date.now(),
    day_index: -1,
    view: 'all',
    search: '',
    department: null,
    office: null,
    status: null,
};

@Injectable({
    providedIn: 'root',
})
export class TeamScheduleService {
    private readonly _org = inject(OrganisationService);
    private readonly _settings = inject(SettingsService);

    // Filter state
    private readonly _filters = signal<TeamScheduleFilters>({
        ...DEFAULT_FILTERS,
    });
    public readonly filters = this._filters.asReadonly();

    // Loading state - starts true, set to false after initial load completes
    public readonly loading = signal(true);
    /** Whether the colleagues did not load */
    public readonly failed = signal(false);
    /** Whether the colleagues are loaded. Cleared when they change */
    private _initialized = false;
    /** Number of open screens that show the team members */
    private readonly _watchers = signal(0);
    private readonly _active = computed(() => this._watchers() > 0);
    /** Colleagues from the contacts of the user */
    private _users: StaffUser[] = [];
    /** Number of the last booking load. A response for an old load is dropped */
    private _request_id = 0;

    // Selection mode state
    public readonly select_mode = signal(false);
    private readonly _selected_member_ids = signal<Set<string>>(new Set());

    // Favourite and team member IDs. Read from the settings without a
    // member load, so other screens can show the flags.
    private readonly _favorite_ids = linkedSignal(() => this._getFavoriteIds());
    private readonly _team_member_ids = linkedSignal(() =>
        this._getTeamMemberIds(),
    );

    /**
     * Start of the selected week. The value is a number, so a filter change
     * in the same week (search, department, status, view) does not change it.
     */
    private readonly _week_start = computed(() =>
        startOfWeek(this._filters().date, { weekStartsOn: 1 }).valueOf(),
    );

    // Week days computed from selected date
    public readonly week_days = computed(() => {
        const start = this._week_start();
        const days = eachDayOfInterval({
            start,
            end: addDays(start, 4),
        });
        const today = startOfDay(Date.now()).valueOf();
        return days.map((date) => ({
            date: date.valueOf(),
            is_today: isSameDay(date, new Date()),
            // A desk cannot be booked on a past day
            is_past: date.valueOf() < today,
        }));
    });

    // Auto-select today's index when it's in the current week
    public readonly active_day_index = computed(() => {
        const manual_index = this._filters().day_index;
        if (manual_index >= 0) return manual_index;

        const days = this.week_days();
        const today_index = days.findIndex((d) => d.is_today);
        return today_index >= 0 ? today_index : 0;
    });

    // Team members from API
    private readonly _team_members = signal<TeamMember[]>([]);

    // Available filter options derived from data
    public readonly departments = computed(() => {
        const members = this._team_members();
        const depts = new Set(members.map((m) => m.department).filter(Boolean));
        return Array.from(depts).sort() as string[];
    });

    public readonly offices = computed(() => {
        const members = this._team_members();
        const offices = new Set(
            members.map((m) => m.current_building).filter(Boolean),
        );
        return Array.from(offices).sort() as string[];
    });

    public readonly statuses = computed(() => {
        return Object.keys(USER_LOCATIONS) as LocationStatus[];
    });

    // Filtered members based on all filters
    public readonly filtered_members = computed(() => {
        let members = this._team_members();
        const {
            view,
            search: raw_search,
            department,
            office,
            status,
        } = this._filters();
        const search = raw_search.toLowerCase().trim();
        const day_index = this.active_day_index();

        // View filter
        if (view === 'favorites') {
            members = members.filter((m) => m.is_favorite);
        } else if (view === 'team') {
            members = members.filter((m) => m.is_my_team);
        }

        // Search filter
        if (search) {
            members = members.filter(
                (m) =>
                    m.user.name.toLowerCase().includes(search) ||
                    m.user.email.toLowerCase().includes(search) ||
                    m.department?.toLowerCase().includes(search),
            );
        }

        // Department filter
        if (department) {
            members = members.filter((m) => m.department === department);
        }

        // Office filter
        if (office) {
            members = members.filter((m) => m.current_building === office);
        }

        // Status filter
        if (status) {
            members = members.filter(
                (m) => m.statuses[day_index]?.status === status,
            );
        }

        return members;
    });

    public readonly total_members = computed(() => this._team_members().length);
    public readonly booked_count = computed(() => {
        const members = this._team_members();
        const day_index = this.active_day_index();
        return members.filter((m) => m.statuses[day_index]?.status === 'office')
            .length;
    });

    // Selected members for group booking
    public readonly selected_members = computed(() => {
        const ids = this._selected_member_ids();
        return this._team_members().filter((m) => ids.has(m.user.id));
    });

    public readonly selected_count = computed(
        () => this._selected_member_ids().size,
    );

    // Actions
    public setFilters(filters: Partial<TeamScheduleFilters>) {
        this._filters.set({ ...this._filters(), ...filters });
    }

    public resetFilters() {
        this._filters.set({ ...DEFAULT_FILTERS, date: Date.now() });
    }

    public previousWeek() {
        const current = this._filters();
        this._filters.set({
            ...current,
            date: subWeeks(current.date, 1).valueOf(),
            day_index: 0,
        });
    }

    public nextWeek() {
        const current = this._filters();
        this._filters.set({
            ...current,
            date: addWeeks(current.date, 1).valueOf(),
            day_index: 0,
        });
    }

    public toggleFavorite(member: TeamMember) {
        if (member.is_favorite) {
            this.removeFavorite(member.user as StaffUser);
        } else {
            this.addFavorite(member.user as StaffUser);
        }
    }

    /** Check if a user is a favourite */
    public isFavorite(user: StaffUser | { email: string }): boolean {
        const user_id = user.email;
        return this._favorite_ids().has(user_id);
    }

    /** Check if a user is a team member */
    public isTeamMember(user: StaffUser | { email: string }): boolean {
        const user_id = user.email;
        return this._team_member_ids().has(user_id);
    }

    /** Toggle favourite status for a user by email */
    public toggleFavoriteByUser(user: StaffUser | { email: string }) {
        if (this.isFavorite(user)) {
            this.removeFavorite(user as StaffUser);
        } else {
            this.addFavorite(user as StaffUser);
        }
    }

    /** Toggle team member status for a user by email */
    public toggleTeamMemberByUser(user: StaffUser | { email: string }) {
        if (this.isTeamMember(user)) {
            this.removeTeamMember(user as StaffUser);
        } else {
            this.addTeamMember(user as StaffUser);
        }
    }

    public getLocationStyle(status: LocationStatus) {
        return USER_LOCATIONS[status] || USER_LOCATIONS.unspecified;
    }

    public getMemberStatus(member: TeamMember): DayStatus | undefined {
        return member.statuses[this.active_day_index()];
    }

    // Selection mode methods
    public toggleSelectMode() {
        const new_mode = !this.select_mode();
        this.select_mode.set(new_mode);
        if (!new_mode) {
            this._selected_member_ids.set(new Set());
        }
    }

    public clearSelection() {
        this._selected_member_ids.set(new Set());
        this.select_mode.set(false);
    }

    public toggleMemberSelection(member: TeamMember) {
        const ids = new Set(this._selected_member_ids());
        if (ids.has(member.user.id)) {
            ids.delete(member.user.id);
        } else {
            ids.add(member.user.id);
        }
        this._selected_member_ids.set(ids);
    }

    public isMemberSelected(member: TeamMember): boolean {
        return this._selected_member_ids().has(member.user.id);
    }

    public getTeamMembers(): TeamMember[] {
        return this._team_members().filter((m) => m.is_my_team);
    }

    constructor() {
        // Load the colleagues while a screen shows them, and their bookings
        // again when the week changes or the screen opens again
        effect(() => {
            if (!this._active()) return;
            this._week_start();
            untracked(() =>
                this._initialized
                    ? this._refreshBookings()
                    : this._initializeData(),
            );
        });
    }

    /**
     * Load the team members and their bookings while a screen shows them.
     * Call the returned function when the screen closes.
     */
    public watch() {
        this._watchers.update((count) => count + 1);
        let released = false;
        return () => {
            if (released) return;
            released = true;
            this._watchers.update((count) => count - 1);
        };
    }

    private async _initializeData() {
        await this._org.waitUntilInitialised();
        await this._loadUsers();
    }

    /** Load colleagues and team members, then fetch their bookings */
    private async _loadUsers() {
        this.loading.set(true);
        try {
            // Fetch colleagues (from user's contacts metadata)
            this._users = await this._fetchColleagues();
        } catch (error) {
            console.error('Error loading team schedule data:', error);
        }
        // Set before the bookings load, so a week change in that time
        // starts a new load.
        this._initialized = true;
        await this._updateMembers();
    }

    /** Refresh bookings for existing users when week changes */
    private async _refreshBookings() {
        if (!this._initialized || this._users.length === 0) return;
        await this._updateMembers();
    }

    /** Load the bookings of the colleagues for the selected week */
    private async _updateMembers() {
        const request_id = ++this._request_id;
        this.loading.set(true);
        try {
            // Favourites and team members are subsets of the colleagues.
            // Read the IDs from the settings in case they changed.
            const favorite_ids = this._getFavoriteIds();
            this._favorite_ids.set(favorite_ids);
            const team_ids = this._getTeamMemberIds();
            this._team_member_ids.set(team_ids);
            const team_members = await this._buildTeamMembers(
                this._users,
                favorite_ids,
                team_ids,
            );
            // A newer load started. Do not show the bookings of an old week.
            if (request_id !== this._request_id) return;
            this._team_members.set(team_members);
        } catch (error) {
            console.error('Error loading team schedule bookings:', error);
        } finally {
            if (request_id === this._request_id) this.loading.set(false);
        }
    }

    /** Fetch colleagues from user's contacts metadata */
    private async _fetchColleagues(): Promise<StaffUser[]> {
        const user = currentUser();
        if (!user?.id) return [];
        this.failed.set(false);
        return loadContacts(user.id).catch(() => {
            this.failed.set(true);
            return [] as StaffUser[];
        });
    }

    /** Get favourite team member IDs from user settings */
    private _getFavoriteIds(): Set<string> {
        const ids =
            this._settings.get<string[]>(SETTING_KEYS.FAVORITE_TEAM_MEMBERS) ||
            [];
        return new Set(ids);
    }

    /** Get team member IDs from user settings */
    private _getTeamMemberIds(): Set<string> {
        const ids =
            this._settings.get<string[]>(SETTING_KEYS.TEAM_MEMBERS) || [];
        return new Set(ids);
    }

    /**
     * Map user work location preference to our LocationStatus type.
     * @param location - The location string from work preferences (wfh, wfo, aol, ooo, etc.)
     * @returns The corresponding LocationStatus
     */
    private _mapWorkLocationToStatus(
        location: string | undefined,
    ): LocationStatus {
        if (!location) return 'unspecified';
        switch (location) {
            case 'wfh':
                return 'wfh';
            case 'wfo':
                return 'office';
            case 'aol':
                return 'on_leave';
            case 'sick':
                return 'off_sick';
            case 'ooo':
                return 'unspecified';
            default:
                return 'unspecified';
        }
    }

    /**
     * Get user's work location for a specific date based on their work preferences.
     * Checks overrides first, then falls back to day-of-week preferences.
     * @param user - The StaffUser to check
     * @param date - The date to check (timestamp)
     * @returns The location string or undefined if not set
     */
    private _getUserWorkLocationForDate(
        user: StaffUser,
        date: number,
    ): string | undefined {
        const date_obj = new Date(date);
        const date_string = format(date_obj, 'yyyy-MM-dd');
        const day_of_week = date_obj.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;

        // Check for date-specific override first
        const override = user.work_overrides?.[date_string];
        if (override?.blocks?.length) {
            // Use the first block's location (or could use midday time)
            return override.blocks[0].location;
        }

        // Fall back to day-of-week preference
        const day_preference = user.work_preferences?.find(
            (pref) => pref.day_of_week === day_of_week,
        );
        if (day_preference?.blocks?.length) {
            // Use the first block's location
            return day_preference.blocks[0].location;
        }

        return undefined;
    }

    /** Build TeamMember objects with booking data for each user */
    private async _buildTeamMembers(
        users: StaffUser[],
        favorite_ids: Set<string>,
        team_ids: Set<string>,
    ): Promise<TeamMember[]> {
        const week_days = this.week_days();
        const building = this._org.building;

        // Get the week's date range for querying bookings
        const week_start = startOfDay(week_days[0].date);
        const week_end = endOfDay(week_days[week_days.length - 1].date);

        // The bookings API filters by one user, so this is one request for
        // each user. Limit the requests that run at one time.
        const all_bookings = await mapWithLimit(
            users,
            COLLEAGUE_REQUEST_LIMIT,
            (user) =>
                queryBookings({
                    email: user.email,
                    type: 'desk',
                    period_start: getUnixTime(week_start),
                    period_end: getUnixTime(week_end),
                }).catch(() => [] as Booking[]),
        );

        // Build team members with their booking data
        return users.map((user, index) => {
            const user_bookings = all_bookings[index];
            const user_id = user.email || user.id;

            // Build day statuses from work preferences and bookings
            const day_statuses: DayStatus[] = week_days.map((day) => {
                const day_start = startOfDay(day.date);
                const day_end = endOfDay(day.date);

                // Find booking for this day
                const booking = user_bookings.find(
                    (b) =>
                        b.date >= day_start.valueOf() &&
                        b.date < day_end.valueOf(),
                );

                // Get user's work location preference for this day
                const work_location = this._getUserWorkLocationForDate(
                    user,
                    day.date,
                );
                let status: LocationStatus =
                    this._mapWorkLocationToStatus(work_location);
                let desk_booking: DeskBooking | undefined;

                // If user has a desk booking, override status to 'office' and include booking details
                if (booking) {
                    status = 'office';
                    // Find building name from zones
                    const booking_building = this._org.buildings.find((bld) =>
                        booking.zones?.includes(bld.id),
                    );
                    // Find level from zones
                    const booking_level = this._org.levels.find((lvl) =>
                        booking.zones?.includes(lvl.id),
                    );

                    desk_booking = {
                        building_name:
                            booking_building?.display_name ||
                            booking_building?.name ||
                            '',
                        desk_code:
                            booking.asset_name || booking.description || '',
                        desk_id: booking.asset_id,
                        level_id: booking_level?.id,
                        date: booking.date,
                        duration: booking.duration,
                    };
                }

                return {
                    date: day.date,
                    status,
                    booking: desk_booking,
                };
            });

            // Get current day's status for current building/desk
            const current_status = day_statuses.find((s) =>
                isSameDay(s.date, new Date()),
            );
            const current_booking = current_status?.booking;

            return {
                user,
                is_favorite: favorite_ids.has(user_id),
                is_my_team: team_ids.has(user_id),
                department: user.department,
                current_building: current_booking?.building_name,
                current_desk: current_booking?.desk_code,
                statuses: day_statuses,
            };
        });
    }

    /** Add a user to favorites */
    public addFavorite(user: StaffUser) {
        const user_id = user.email || user.id;
        const current_favorites =
            this._settings.get<string[]>(SETTING_KEYS.FAVORITE_TEAM_MEMBERS) ||
            [];

        // Don't add duplicates
        if (current_favorites.includes(user_id)) return;

        const updated = [...current_favorites, user_id];
        this._settings.saveUserSetting(
            SETTING_KEYS.FAVORITE_TEAM_MEMBERS,
            updated,
        );

        // Update local state
        const favorite_ids = new Set(this._favorite_ids());
        favorite_ids.add(user_id);
        this._favorite_ids.set(favorite_ids);

        // Update member's favorite status
        const members = this._team_members().map((m) =>
            m.user.email === user.email ? { ...m, is_favorite: true } : m,
        );
        this._team_members.set(members);
    }

    /** Remove a user from favorites */
    public removeFavorite(user: StaffUser) {
        const user_id = user.email || user.id;
        const current_favorites =
            this._settings.get<string[]>(SETTING_KEYS.FAVORITE_TEAM_MEMBERS) ||
            [];

        const updated = current_favorites.filter((id) => id !== user_id);
        this._settings.saveUserSetting(
            SETTING_KEYS.FAVORITE_TEAM_MEMBERS,
            updated,
        );

        // Update local state
        const favorite_ids = new Set(this._favorite_ids());
        favorite_ids.delete(user_id);
        this._favorite_ids.set(favorite_ids);

        // Update member's favorite status
        const members = this._team_members().map((m) =>
            m.user.email === user.email ? { ...m, is_favorite: false } : m,
        );
        this._team_members.set(members);
    }

    /** Toggle a user's team member status */
    public toggleTeamMember(member: TeamMember) {
        if (member.is_my_team) {
            this.removeTeamMember(member.user as StaffUser);
        } else {
            this.addTeamMember(member.user as StaffUser);
        }
    }

    /** Add a user to team members */
    public addTeamMember(user: StaffUser) {
        const user_id = user.email || user.id;
        const current_team =
            this._settings.get<string[]>(SETTING_KEYS.TEAM_MEMBERS) || [];

        // Don't add duplicates
        if (current_team.includes(user_id)) return;

        const updated = [...current_team, user_id];
        this._settings.saveUserSetting(SETTING_KEYS.TEAM_MEMBERS, updated);

        // Update local state
        const team_ids = new Set(this._team_member_ids());
        team_ids.add(user_id);
        this._team_member_ids.set(team_ids);

        // Update member's team status
        const members = this._team_members().map((m) =>
            m.user.email === user.email ? { ...m, is_my_team: true } : m,
        );
        this._team_members.set(members);
    }

    /** Remove a user from team members */
    public removeTeamMember(user: StaffUser) {
        const user_id = user.email || user.id;
        const current_team =
            this._settings.get<string[]>(SETTING_KEYS.TEAM_MEMBERS) || [];

        const updated = current_team.filter((id) => id !== user_id);
        this._settings.saveUserSetting(SETTING_KEYS.TEAM_MEMBERS, updated);

        // Update local state
        const team_ids = new Set(this._team_member_ids());
        team_ids.delete(user_id);
        this._team_member_ids.set(team_ids);

        // Update member's team status
        const members = this._team_members().map((m) =>
            m.user.email === user.email ? { ...m, is_my_team: false } : m,
        );
        this._team_members.set(members);
    }

    /**
     * Load the colleagues and their bookings again. When no screen shows
     * them, the next screen to open loads them.
     */
    public async refresh() {
        if (!this._active()) {
            this._initialized = false;
            return;
        }
        await this._loadUsers();
    }
}
