import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import { TeamMember } from '../../app/team-schedule/common';
import { TeamScheduleTableComponent } from '../../app/team-schedule/team-schedule-table.component';
import { TeamScheduleService } from '../../app/team-schedule/team-schedule.service';

const makeMember = (overrides: Partial<TeamMember> = {}): TeamMember =>
    ({
        user: { id: 'u1', name: 'User', email: 'u1@x' },
        is_favorite: false,
        is_my_team: false,
        statuses: [],
        ...overrides,
    }) as TeamMember;

describe('TeamScheduleTableComponent', () => {
    let spectator: Spectator<TeamScheduleTableComponent>;
    const week_days = signal([
        { date: 1000, is_today: false },
        { date: 2000, is_today: true },
    ]);
    const toggle_selection = vi.fn();
    const is_selected = vi.fn(() => false);
    const toggle_favorite = vi.fn();
    const get_style = vi.fn(() => ({ icon: 'home' }) as any);

    const component_instance = {
        show_close: { set: vi.fn() },
        date: { set: vi.fn() },
        nearby_desk_id: { set: vi.fn() },
        level_id: { set: vi.fn() },
        duration: { set: vi.fn() },
    };
    const dialog_open = vi.fn(() => ({ componentInstance: component_instance }));

    const createComponent = createComponentFactory({
        component: TeamScheduleTableComponent,
        providers: [
            MockProvider(MatDialog, { open: dialog_open } as any),
            MockProvider(TeamScheduleService, {
                week_days,
                filtered_members: signal([]),
                total_members: signal(0),
                booked_count: signal(0),
                select_mode: signal(false),
                loading: signal(false),
                toggleMemberSelection: toggle_selection,
                isMemberSelected: is_selected,
                toggleFavorite: toggle_favorite,
                getLocationStyle: get_style,
            } as any),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should build a legend entry for every known location', () => {
        expect(spectator.component.user_locations.length).toBe(6);
        expect(
            spectator.component.user_locations.map((l) => l.key),
        ).toContain('office');
    });

    it('should delegate member actions to the service', () => {
        const member = makeMember();
        spectator.component.toggleMemberSelection(member);
        expect(toggle_selection).toHaveBeenCalledWith(member);
        spectator.component.isMemberSelected(member);
        expect(is_selected).toHaveBeenCalledWith(member);
        spectator.component.toggleFavorite(member);
        expect(toggle_favorite).toHaveBeenCalledWith(member);
        spectator.component.getLocationStyle('office');
        expect(get_style).toHaveBeenCalledWith('office');
    });

    it('should open the desk modal for the clicked day with booking details', () => {
        const member = makeMember({
            statuses: [
                { date: 1000, status: 'wfh' },
                {
                    date: 2000,
                    status: 'office',
                    booking: {
                        building_name: 'B',
                        desk_code: 'D1',
                        desk_id: 'desk-9',
                        level_id: 'lvl-9',
                        duration: 240,
                    },
                },
            ],
        });
        // day with date 2000 maps to index 1 in week_days
        spectator.component.bookNearby(member, { date: 2000 });

        expect(component_instance.show_close.set).toHaveBeenCalledWith(true);
        expect(component_instance.date.set).toHaveBeenCalledWith(2000);
        expect(component_instance.nearby_desk_id.set).toHaveBeenCalledWith(
            'desk-9',
        );
        expect(component_instance.level_id.set).toHaveBeenCalledWith('lvl-9');
        expect(component_instance.duration.set).toHaveBeenCalledWith(240);
    });

    it('should not set desk details when the clicked day has no booking', () => {
        const member = makeMember({
            statuses: [
                { date: 1000, status: 'wfh' },
                { date: 2000, status: 'wfh' },
            ],
        });
        spectator.component.bookNearby(member, { date: 1000 });

        expect(component_instance.date.set).toHaveBeenCalledWith(1000);
        expect(component_instance.nearby_desk_id.set).not.toHaveBeenCalled();
    });

    it('should open the add colleagues modal', () => {
        spectator.component.openAddColleaguesModal();
        expect(dialog_open).toHaveBeenCalled();
    });
});
