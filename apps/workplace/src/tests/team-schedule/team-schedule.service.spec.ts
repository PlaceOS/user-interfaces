import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import {
    addDays,
    addWeeks,
    format,
    startOfWeek,
    subWeeks,
} from 'date-fns';

jest.mock('@placeos/bookings', () => ({
    ...jest.requireActual('@placeos/bookings'),
    queryBookings: jest.fn(() => Promise.resolve([])),
}));

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(() => Promise.resolve({ details: [] })),
    showUser: jest.fn((email: string) => Promise.resolve({ email })),
}));

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    currentUser: jest.fn(() => ({ id: 'me', email: 'me@example.com' })),
}));

import { queryBookings } from '@placeos/bookings';
import { OrganisationService, SettingsService, StaffUser } from '@placeos/common';
import { showMetadata, showUser } from '@placeos/ts-client';
import { TeamScheduleService } from '../../app/team-schedule/team-schedule.service';
import { TeamMember } from '../../app/team-schedule/common';

const wait = (ms = 5) => new Promise((resolve) => setTimeout(resolve, ms));

const makeMember = (overrides: Partial<TeamMember> = {}): TeamMember => ({
    user: {
        id: overrides.user?.id || 'u1',
        name: overrides.user?.name || 'User One',
        email: overrides.user?.email || 'u1@example.com',
    } as any,
    is_favorite: false,
    is_my_team: false,
    department: 'Engineering',
    current_building: 'Building A',
    current_desk: 'D1',
    statuses: [{ date: Date.now(), status: 'wfh' }],
    ...overrides,
});

describe('TeamScheduleService', () => {
    let spectator: SpectatorService<TeamScheduleService>;
    let service: TeamScheduleService;
    let settings_store: Record<string, any>;
    const save_setting = jest.fn(
        (key: string, value: any) => (settings_store[key] = value),
    );

    const createService = createServiceFactory({
        service: TeamScheduleService,
        providers: [
            MockProvider(OrganisationService, {
                waitUntilInitialised: jest.fn(() => Promise.resolve()),
                building: null,
                buildings: [
                    {
                        id: 'zone-bld',
                        name: 'Building One',
                        display_name: 'Building One (HQ)',
                    },
                ],
                levels: [{ id: 'zone-lvl' }],
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn((key: string) => settings_store[key]),
                saveUserSetting: save_setting,
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        settings_store = {};
        (showMetadata as jest.Mock).mockResolvedValue({ details: [] });
        (showUser as jest.Mock).mockImplementation((email: string) =>
            Promise.resolve({ email }),
        );
        (queryBookings as jest.Mock).mockResolvedValue([]);
        spectator = createService();
        service = spectator.service;
    });

    const set_members = (members: TeamMember[]) =>
        (service as any)._team_members.set(members);

    it('should compute the working week as five week days', () => {
        const days = service.week_days();
        expect(days).toHaveLength(5);
        const start = startOfWeek(service.filters().date, { weekStartsOn: 1 });
        expect(days[0].date).toBe(start.valueOf());
        expect(days[4].date).toBe(addDays(start, 4).valueOf());
    });

    describe('active_day_index', () => {
        it('should use the manually selected index when set', () => {
            service.setFilters({ day_index: 3 });
            expect(service.active_day_index()).toBe(3);
        });

        it('should auto-select today when it falls within the week', () => {
            // Force the week to contain today by using the default (current) date
            service.setFilters({ date: Date.now(), day_index: -1 });
            const days = service.week_days();
            const today = days.findIndex((d) => d.is_today);
            expect(service.active_day_index()).toBe(today >= 0 ? today : 0);
        });

        it('should fall back to index 0 when today is not in the week', () => {
            // Use a week well in the past so no day is today
            service.setFilters({
                date: subWeeks(Date.now(), 10).valueOf(),
                day_index: -1,
            });
            expect(service.active_day_index()).toBe(0);
        });
    });

    describe('derived filter options', () => {
        beforeEach(() => {
            set_members([
                makeMember({
                    user: { id: 'a', name: 'A', email: 'a@x' } as any,
                    department: 'Sales',
                    current_building: 'Beta',
                }),
                makeMember({
                    user: { id: 'b', name: 'B', email: 'b@x' } as any,
                    department: 'Admin',
                    current_building: 'Alpha',
                }),
                makeMember({
                    user: { id: 'c', name: 'C', email: 'c@x' } as any,
                    department: 'Admin',
                    current_building: undefined,
                }),
            ]);
        });

        it('should list unique sorted departments', () => {
            expect(service.departments()).toEqual(['Admin', 'Sales']);
        });

        it('should list unique sorted offices ignoring empty buildings', () => {
            expect(service.offices()).toEqual(['Alpha', 'Beta']);
        });

        it('should expose all known location statuses', () => {
            expect(service.statuses()).toContain('office');
            expect(service.statuses()).toContain('wfh');
            expect(service.statuses()).toHaveLength(6);
        });
    });

    describe('filtered_members', () => {
        beforeEach(() => {
            service.setFilters({ day_index: 0 });
            set_members([
                makeMember({
                    user: { id: 'a', name: 'Alice', email: 'alice@x' } as any,
                    is_favorite: true,
                    is_my_team: false,
                    department: 'Sales',
                    current_building: 'Beta',
                    statuses: [{ date: Date.now(), status: 'office' }],
                }),
                makeMember({
                    user: { id: 'b', name: 'Bob', email: 'bob@x' } as any,
                    is_favorite: false,
                    is_my_team: true,
                    department: 'Admin',
                    current_building: 'Alpha',
                    statuses: [{ date: Date.now(), status: 'wfh' }],
                }),
            ]);
        });

        it('should return every member for the "all" view', () => {
            service.setFilters({ view: 'all' });
            expect(service.filtered_members().map((m) => m.user.id)).toEqual([
                'a',
                'b',
            ]);
        });

        it('should keep only favourites for the "favorites" view', () => {
            service.setFilters({ view: 'favorites' });
            expect(service.filtered_members().map((m) => m.user.id)).toEqual([
                'a',
            ]);
        });

        it('should keep only team members for the "team" view', () => {
            service.setFilters({ view: 'team' });
            expect(service.filtered_members().map((m) => m.user.id)).toEqual([
                'b',
            ]);
        });

        it('should match search against name, email and department', () => {
            service.setFilters({ search: 'alice' });
            expect(service.filtered_members().map((m) => m.user.id)).toEqual([
                'a',
            ]);
            service.setFilters({ search: 'bob@x' });
            expect(service.filtered_members().map((m) => m.user.id)).toEqual([
                'b',
            ]);
            service.setFilters({ search: 'admin' });
            expect(service.filtered_members().map((m) => m.user.id)).toEqual([
                'b',
            ]);
        });

        it('should filter by department', () => {
            service.setFilters({ department: 'Sales' });
            expect(service.filtered_members().map((m) => m.user.id)).toEqual([
                'a',
            ]);
        });

        it('should filter by office', () => {
            service.setFilters({ office: 'Alpha' });
            expect(service.filtered_members().map((m) => m.user.id)).toEqual([
                'b',
            ]);
        });

        it('should filter by status on the active day', () => {
            service.setFilters({ status: 'office' });
            expect(service.filtered_members().map((m) => m.user.id)).toEqual([
                'a',
            ]);
        });
    });

    it('should count total and office-booked members for the active day', () => {
        service.setFilters({ day_index: 0 });
        set_members([
            makeMember({
                user: { id: 'a', name: 'A', email: 'a@x' } as any,
                statuses: [{ date: Date.now(), status: 'office' }],
            }),
            makeMember({
                user: { id: 'b', name: 'B', email: 'b@x' } as any,
                statuses: [{ date: Date.now(), status: 'wfh' }],
            }),
        ]);
        expect(service.total_members()).toBe(2);
        expect(service.booked_count()).toBe(1);
    });

    describe('filter mutations', () => {
        it('should merge partial filter updates', () => {
            service.setFilters({ search: 'abc' });
            service.setFilters({ department: 'Sales' });
            expect(service.filters().search).toBe('abc');
            expect(service.filters().department).toBe('Sales');
        });

        it('should reset filters back to defaults', () => {
            service.setFilters({ search: 'abc', view: 'team', day_index: 2 });
            service.resetFilters();
            const filters = service.filters();
            expect(filters.search).toBe('');
            expect(filters.view).toBe('all');
            expect(filters.day_index).toBe(-1);
        });

        it('should shift a week back and reset the day index', () => {
            const before = service.filters().date;
            service.previousWeek();
            expect(service.filters().date).toBe(subWeeks(before, 1).valueOf());
            expect(service.filters().day_index).toBe(0);
        });

        it('should shift a week forward and reset the day index', () => {
            const before = service.filters().date;
            service.nextWeek();
            expect(service.filters().date).toBe(addWeeks(before, 1).valueOf());
            expect(service.filters().day_index).toBe(0);
        });
    });

    describe('selection mode', () => {
        it('should enter and leave select mode, clearing selection on exit', () => {
            const member = makeMember();
            service.toggleSelectMode();
            expect(service.select_mode()).toBe(true);
            service.toggleMemberSelection(member);
            expect(service.selected_count()).toBe(1);
            service.toggleSelectMode();
            expect(service.select_mode()).toBe(false);
            expect(service.selected_count()).toBe(0);
        });

        it('should toggle individual member selection on and off', () => {
            const member = makeMember();
            service.toggleMemberSelection(member);
            expect(service.isMemberSelected(member)).toBe(true);
            service.toggleMemberSelection(member);
            expect(service.isMemberSelected(member)).toBe(false);
        });

        it('should resolve selected members from selected ids', () => {
            const a = makeMember({
                user: { id: 'a', name: 'A', email: 'a@x' } as any,
            });
            const b = makeMember({
                user: { id: 'b', name: 'B', email: 'b@x' } as any,
            });
            set_members([a, b]);
            service.toggleMemberSelection(a);
            expect(service.selected_members().map((m) => m.user.id)).toEqual([
                'a',
            ]);
        });

        it('should clear selection and exit select mode', () => {
            const member = makeMember();
            service.toggleSelectMode();
            service.toggleMemberSelection(member);
            service.clearSelection();
            expect(service.select_mode()).toBe(false);
            expect(service.selected_count()).toBe(0);
        });
    });

    describe('favourites and team membership', () => {
        const user = new StaffUser({
            email: 'fav@example.com',
            name: 'Fav',
        } as any);

        beforeEach(() => {
            set_members([
                makeMember({
                    user: {
                        id: 'fav@example.com',
                        name: 'Fav',
                        email: 'fav@example.com',
                    } as any,
                }),
            ]);
        });

        it('should add a favourite, persist it and flag the member', () => {
            service.addFavorite(user);
            expect(save_setting).toHaveBeenCalledWith(
                'favourite_team_members',
                ['fav@example.com'],
            );
            expect(service.isFavorite(user)).toBe(true);
            expect(
                (service as any)._team_members()[0].is_favorite,
            ).toBe(true);
        });

        it('should not persist a duplicate favourite', () => {
            settings_store['favourite_team_members'] = ['fav@example.com'];
            service.addFavorite(user);
            expect(save_setting).not.toHaveBeenCalled();
        });

        it('should remove a favourite and clear the member flag', () => {
            settings_store['favourite_team_members'] = ['fav@example.com'];
            (service as any)._favorite_ids.set(new Set(['fav@example.com']));
            service.removeFavorite(user);
            expect(save_setting).toHaveBeenCalledWith(
                'favourite_team_members',
                [],
            );
            expect(service.isFavorite(user)).toBe(false);
            expect(
                (service as any)._team_members()[0].is_favorite,
            ).toBe(false);
        });

        it('should add and remove team members via settings', () => {
            service.addTeamMember(user);
            expect(save_setting).toHaveBeenCalledWith('team_members', [
                'fav@example.com',
            ]);
            expect(service.isTeamMember(user)).toBe(true);
            service.removeTeamMember(user);
            expect(save_setting).toHaveBeenLastCalledWith('team_members', []);
            expect(service.isTeamMember(user)).toBe(false);
        });

        it('should toggle favourites based on current state', () => {
            const add_spy = jest.spyOn(service, 'addFavorite');
            const remove_spy = jest.spyOn(service, 'removeFavorite');
            service.toggleFavoriteByUser(user);
            expect(add_spy).toHaveBeenCalled();
            (service as any)._favorite_ids.set(new Set(['fav@example.com']));
            service.toggleFavoriteByUser(user);
            expect(remove_spy).toHaveBeenCalled();
        });

        it('should toggle a member favourite using is_favorite flag', () => {
            const add_spy = jest.spyOn(service, 'addFavorite');
            const remove_spy = jest.spyOn(service, 'removeFavorite');
            service.toggleFavorite(makeMember({ is_favorite: false }));
            expect(add_spy).toHaveBeenCalled();
            service.toggleFavorite(makeMember({ is_favorite: true }));
            expect(remove_spy).toHaveBeenCalled();
        });

        it('should toggle team membership using is_my_team flag', () => {
            const add_spy = jest.spyOn(service, 'addTeamMember');
            const remove_spy = jest.spyOn(service, 'removeTeamMember');
            service.toggleTeamMember(makeMember({ is_my_team: false }));
            expect(add_spy).toHaveBeenCalled();
            service.toggleTeamMember(makeMember({ is_my_team: true }));
            expect(remove_spy).toHaveBeenCalled();
        });
    });

    describe('helper accessors', () => {
        it('should return the location style with a fallback', () => {
            expect(service.getLocationStyle('office').icon).toBe('business');
            expect(service.getLocationStyle('nonsense' as any).icon).toBe(
                'help_outline',
            );
        });

        it('should return the member status for the active day', () => {
            service.setFilters({ day_index: 1 });
            const member = makeMember({
                statuses: [
                    { date: 1, status: 'wfh' },
                    { date: 2, status: 'office' },
                ],
            });
            expect(service.getMemberStatus(member)?.status).toBe('office');
        });

        it('should return only my-team members', () => {
            set_members([
                makeMember({
                    user: { id: 'a', name: 'A', email: 'a@x' } as any,
                    is_my_team: true,
                }),
                makeMember({
                    user: { id: 'b', name: 'B', email: 'b@x' } as any,
                    is_my_team: false,
                }),
            ]);
            expect(service.getTeamMembers().map((m) => m.user.id)).toEqual([
                'a',
            ]);
        });
    });

    describe('loading colleagues and building statuses', () => {
        const week_start = startOfWeek(Date.now(), { weekStartsOn: 1 });
        const monday = week_start.valueOf();

        // Let the constructor's initial (empty) load settle before each test
        // so it cannot overwrite the data we load via refresh().
        beforeEach(async () => {
            await wait();
        });

        const setupColleagues = (users: any[]) => {
            (showMetadata as jest.Mock).mockResolvedValue({
                details: users.map((u) => ({ email: u.email })),
            });
            const by_email = new Map(users.map((u) => [u.email, u]));
            (showUser as jest.Mock).mockImplementation((email: string) =>
                Promise.resolve(by_email.get(email) || { email }),
            );
        };

        it('should map work preferences to location statuses', async () => {
            setupColleagues([
                {
                    email: 'home@example.com',
                    name: 'Home',
                    // Every day of week set to wfh so every column maps to wfh
                    work_preferences: [0, 1, 2, 3, 4, 5, 6].map((day) => ({
                        day_of_week: day,
                        blocks: [{ location: 'wfh' }],
                    })),
                },
            ]);

            await service.refresh();
            await wait();

            const members = (service as any)._team_members();
            expect(members).toHaveLength(1);
            expect(
                members[0].statuses.every((s: any) => s.status === 'wfh'),
            ).toBe(true);
        });

        it('should map every known work location code', async () => {
            const codes: Array<[string, string]> = [
                ['wfo', 'office'],
                ['aol', 'on_leave'],
                ['sick', 'off_sick'],
                ['ooo', 'unspecified'],
                ['unknown', 'unspecified'],
            ];
            for (const [code, expected] of codes) {
                setupColleagues([
                    {
                        email: `${code}@example.com`,
                        name: code,
                        work_preferences: [0, 1, 2, 3, 4, 5, 6].map((day) => ({
                            day_of_week: day,
                            blocks: [{ location: code }],
                        })),
                    },
                ]);
                await service.refresh();
                await wait();
                const member = (service as any)._team_members()[0];
                expect(member.statuses[0].status).toBe(expected);
            }
        });

        it('should default to unspecified when no work preference exists', async () => {
            setupColleagues([
                { email: 'none@example.com', name: 'None', work_preferences: [] },
            ]);
            await service.refresh();
            await wait();
            const member = (service as any)._team_members()[0];
            expect(
                member.statuses.every((s: any) => s.status === 'unspecified'),
            ).toBe(true);
        });

        it('should prefer a date-specific override over the weekly preference', async () => {
            const monday_key = format(new Date(monday), 'yyyy-MM-dd');
            setupColleagues([
                {
                    email: 'ovr@example.com',
                    name: 'Override',
                    work_preferences: [0, 1, 2, 3, 4, 5, 6].map((day) => ({
                        day_of_week: day,
                        blocks: [{ location: 'wfh' }],
                    })),
                    work_overrides: {
                        [monday_key]: { blocks: [{ location: 'aol' }] },
                    },
                },
            ]);
            await service.refresh();
            await wait();
            const member = (service as any)._team_members()[0];
            expect(member.statuses[0].status).toBe('on_leave');
            expect(member.statuses[1].status).toBe('wfh');
        });

        it('should override status to office and attach booking details when a desk is booked', async () => {
            setupColleagues([
                {
                    email: 'booked@example.com',
                    name: 'Booked',
                    work_preferences: [0, 1, 2, 3, 4, 5, 6].map((day) => ({
                        day_of_week: day,
                        blocks: [{ location: 'wfh' }],
                    })),
                },
            ]);
            (queryBookings as jest.Mock).mockResolvedValue([
                {
                    date: monday + 9 * 3600 * 1000,
                    duration: 480,
                    zones: ['zone-bld', 'zone-lvl'],
                    asset_name: 'Desk 42',
                    asset_id: 'desk-42',
                    description: '',
                },
            ]);

            await service.refresh();
            await wait();

            const member = (service as any)._team_members()[0];
            expect(member.statuses[0].status).toBe('office');
            expect(member.statuses[0].booking).toMatchObject({
                building_name: 'Building One (HQ)',
                desk_code: 'Desk 42',
                desk_id: 'desk-42',
                level_id: 'zone-lvl',
                duration: 480,
            });
        });

        it('should flag favourites and team members from settings', async () => {
            settings_store['favourite_team_members'] = ['fav@example.com'];
            settings_store['team_members'] = ['team@example.com'];
            setupColleagues([
                { email: 'fav@example.com', name: 'Fav', work_preferences: [] },
                { email: 'team@example.com', name: 'Team', work_preferences: [] },
                { email: 'plain@example.com', name: 'Plain', work_preferences: [] },
            ]);

            await service.refresh();
            await wait();

            const members = (service as any)._team_members() as TeamMember[];
            const fav = members.find((m) => m.user.email === 'fav@example.com');
            const team = members.find((m) => m.user.email === 'team@example.com');
            const plain = members.find(
                (m) => m.user.email === 'plain@example.com',
            );
            expect(fav?.is_favorite).toBe(true);
            expect(fav?.is_my_team).toBe(false);
            expect(team?.is_my_team).toBe(true);
            expect(plain?.is_favorite).toBe(false);
            expect(plain?.is_my_team).toBe(false);
        });

        it('should clear the loading flag after a refresh', async () => {
            await service.refresh();
            await wait();
            expect(service.loading()).toBe(false);
        });
    });
});
