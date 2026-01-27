import { computed, Injectable, signal } from '@angular/core';
import { User } from '@placeos/common';
import {
    addDays,
    eachDayOfInterval,
    isSameDay,
    startOfWeek,
    subWeeks,
    addWeeks,
} from 'date-fns';
import {
    DayStatus,
    DeskBooking,
    LocationStatus,
    TeamMember,
    USER_LOCATIONS,
} from './common';

export type ViewFilter = 'all' | 'favorites' | 'team';

@Injectable({
    providedIn: 'root',
})
export class TeamScheduleService {
    // Filter state
    public readonly selected_date = signal(Date.now());
    public readonly selected_day_index = signal(-1); // -1 means auto-select today
    public readonly view_filter = signal<ViewFilter>('all');
    public readonly search_query = signal('');
    public readonly department_filter = signal<string | null>(null);
    public readonly office_filter = signal<string | null>(null);
    public readonly status_filter = signal<LocationStatus | null>(null);

    // Week days computed from selected date
    public readonly week_days = computed(() => {
        const start = startOfWeek(this.selected_date(), { weekStartsOn: 1 });
        const days = eachDayOfInterval({
            start,
            end: addDays(start, 4),
        });
        return days.map((date) => ({
            date: date.valueOf(),
            is_today: isSameDay(date, new Date()),
        }));
    });

    // Auto-select today's index when it's in the current week
    public readonly active_day_index = computed(() => {
        const manual_index = this.selected_day_index();
        if (manual_index >= 0) return manual_index;

        const days = this.week_days();
        const today_index = days.findIndex((d) => d.is_today);
        return today_index >= 0 ? today_index : 0;
    });

    // Mock data - in real implementation, this would come from an API
    private readonly _team_members = signal<TeamMember[]>(
        this._generateMockMembers(),
    );

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
        const view = this.view_filter();
        const search = this.search_query().toLowerCase().trim();
        const dept = this.department_filter();
        const office = this.office_filter();
        const status = this.status_filter();
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
        if (dept) {
            members = members.filter((m) => m.department === dept);
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
    public readonly booked_count = signal(20);

    // Actions
    public setViewFilter(view: ViewFilter) {
        this.view_filter.set(view);
    }

    public setSearchQuery(query: string) {
        this.search_query.set(query);
    }

    public setDepartmentFilter(dept: string | null) {
        this.department_filter.set(dept);
    }

    public setOfficeFilter(office: string | null) {
        this.office_filter.set(office);
    }

    public setStatusFilter(status: LocationStatus | null) {
        this.status_filter.set(status);
    }

    public setSelectedDayIndex(index: number) {
        this.selected_day_index.set(index);
    }

    public resetDate() {
        this.selected_date.set(Date.now());
        this.selected_day_index.set(-1); // Reset to auto-select today
    }

    public previousWeek() {
        this.selected_date.set(subWeeks(this.selected_date(), 1).valueOf());
        this.selected_day_index.set(0);
    }

    public nextWeek() {
        this.selected_date.set(addWeeks(this.selected_date(), 1).valueOf());
        this.selected_day_index.set(0);
    }

    public toggleFavorite(member: TeamMember) {
        const members = this._team_members();
        const index = members.findIndex((m) => m.user.id === member.user.id);
        if (index >= 0) {
            members[index] = {
                ...members[index],
                is_favorite: !members[index].is_favorite,
            };
            this._team_members.set([...members]);
        }
    }

    public getLocationStyle(status: LocationStatus) {
        return USER_LOCATIONS[status] || USER_LOCATIONS.unspecified;
    }

    public getMemberStatus(member: TeamMember): DayStatus | undefined {
        return member.statuses[this.active_day_index()];
    }

    private _generateMockMembers(): TeamMember[] {
        const statuses: LocationStatus[] = [
            'wfh',
            'office',
            'on_leave',
            'off_sick',
            'onsite',
            'unspecified',
        ];
        const buildings = ['Hay Street', 'Ord Street'];
        const departments = [
            'Engineering',
            'Design',
            'Marketing',
            'Sales',
            'HR',
            'Finance',
        ];
        const names = [
            'Alice Anderson',
            'Bob Brown',
            'Charlie Chen',
            'Diana Davis',
            'Edward Evans',
            'Fiona Fisher',
            'George Garcia',
            'Hannah Hill',
            'Ivan Ivanov',
            'Julia Johnson',
        ];

        const start = startOfWeek(Date.now(), { weekStartsOn: 1 });
        const week_dates = eachDayOfInterval({
            start,
            end: addDays(start, 4),
        });

        return names.map((name, i) => {
            const day_statuses: DayStatus[] = week_dates.map((date) => {
                const status =
                    statuses[Math.floor(Math.random() * statuses.length)];
                const booking: DeskBooking | undefined =
                    status === 'office'
                        ? {
                              building_name:
                                  buildings[
                                      Math.floor(
                                          Math.random() * buildings.length,
                                      )
                                  ],
                              desk_code: `L${Math.floor(Math.random() * 5) + 1}-${Math.floor(Math.random() * 50) + 1}`,
                          }
                        : undefined;
                return {
                    date: date.valueOf(),
                    status,
                    booking,
                };
            });

            const current_status = day_statuses.find((s) =>
                isSameDay(s.date, new Date()),
            );
            const current_booking = current_status?.booking;

            return {
                user: new User({
                    id: `user-${i}`,
                    name,
                    email: `${name.toLowerCase().replace(/[ ]/g, '.')}@company.com`,
                }),
                is_favorite: i < 3,
                is_my_team: i % 3 === 0,
                department: departments[i % departments.length],
                current_building: current_booking?.building_name,
                current_desk: current_booking?.desk_code,
                statuses: day_statuses,
            };
        });
    }
}
