import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { TeamMember } from '../../app/team-schedule/common';
import { TeamScheduleListComponent } from '../../app/team-schedule/team-schedule-list.component';
import { TeamScheduleService } from '../../app/team-schedule/team-schedule.service';

const makeMember = (overrides: Partial<TeamMember> = {}): TeamMember =>
    ({
        user: { id: 'u1', name: 'User', email: 'u1@x' },
        is_favorite: false,
        is_my_team: false,
        statuses: [],
        ...overrides,
    }) as TeamMember;

describe('TeamScheduleListComponent', () => {
    let spectator: Spectator<TeamScheduleListComponent>;
    const week_days = signal([
        { date: 1000, is_today: false },
        { date: 2000, is_today: true },
    ]);
    const active_day_index = signal(1);
    const set_filters = jest.fn();
    const toggle_selection = jest.fn();
    const is_selected = jest.fn(() => true);
    const toggle_favorite = jest.fn();
    const get_status = jest.fn();
    const get_style = jest.fn(() => ({ icon: 'home' }) as any);

    const component_instance = {
        show_close: { set: jest.fn() },
        date: { set: jest.fn() },
        nearby_desk_id: { set: jest.fn() },
        level_id: { set: jest.fn() },
        duration: { set: jest.fn() },
    };
    const dialog_open = jest.fn(() => ({ componentInstance: component_instance }));

    const createComponent = createComponentFactory({
        component: TeamScheduleListComponent,
        providers: [
            MockProvider(MatDialog, { open: dialog_open } as any),
            MockProvider(TeamScheduleService, {
                week_days,
                active_day_index,
                filtered_members: signal([]),
                total_members: signal(0),
                select_mode: signal(false),
                loading: signal(false),
                setFilters: set_filters,
                toggleMemberSelection: toggle_selection,
                isMemberSelected: is_selected,
                toggleFavorite: toggle_favorite,
                getMemberStatus: get_status,
                getLocationStyle: get_style,
            } as any),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        jest.clearAllMocks();
        active_day_index.set(1);
        spectator = createComponent();
    });

    it('should set the selected day index on the service', () => {
        spectator.component.setDayIndex(3);
        expect(set_filters).toHaveBeenCalledWith({ day_index: 3 });
    });

    it('should delegate member actions to the service', () => {
        const member = makeMember();
        spectator.component.toggleMemberSelection(member);
        expect(toggle_selection).toHaveBeenCalledWith(member);
        expect(spectator.component.isMemberSelected(member)).toBe(true);
        spectator.component.toggleFavorite(member);
        expect(toggle_favorite).toHaveBeenCalledWith(member);
        spectator.component.getMemberStatus(member);
        expect(get_status).toHaveBeenCalledWith(member);
        spectator.component.getLocationStyle('wfh');
        expect(get_style).toHaveBeenCalledWith('wfh');
    });

    it('should open the desk modal for the active day with booking details', () => {
        const member = makeMember({
            statuses: [
                { date: 1000, status: 'wfh' },
                {
                    date: 2000,
                    status: 'office',
                    booking: {
                        building_name: 'B',
                        desk_code: 'D1',
                        desk_id: 'desk-1',
                        level_id: 'lvl-1',
                        duration: 480,
                    },
                },
            ],
        });
        spectator.component.bookNearby(member);

        expect(dialog_open).toHaveBeenCalled();
        expect(component_instance.show_close.set).toHaveBeenCalledWith(true);
        // active_day_index is 1 -> uses week_days[1].date
        expect(component_instance.date.set).toHaveBeenCalledWith(2000);
        expect(component_instance.nearby_desk_id.set).toHaveBeenCalledWith(
            'desk-1',
        );
        expect(component_instance.level_id.set).toHaveBeenCalledWith('lvl-1');
        expect(component_instance.duration.set).toHaveBeenCalledWith(480);
    });

    it('should open the desk modal without desk details when there is no booking', () => {
        const member = makeMember({
            statuses: [
                { date: 1000, status: 'wfh' },
                { date: 2000, status: 'wfh' },
            ],
        });
        spectator.component.bookNearby(member);

        expect(component_instance.date.set).toHaveBeenCalledWith(2000);
        expect(component_instance.nearby_desk_id.set).not.toHaveBeenCalled();
        expect(component_instance.level_id.set).not.toHaveBeenCalled();
    });

    it('should open the add colleagues modal', () => {
        spectator.component.openAddColleaguesModal();
        expect(dialog_open).toHaveBeenCalled();
    });
});
