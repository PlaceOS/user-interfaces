jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    currentUser: jest.fn(() => ({ id: 'me', email: 'me@example.com' })),
    settingSignal: jest.fn(() => () => []),
}));

import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { BookingFormService } from '@placeos/bookings';
import { currentUser } from '@placeos/common';
import { TeamQuickActionsComponent } from '../../app/team-schedule/team-quick-actions.component';
import { TeamScheduleService } from '../../app/team-schedule/team-schedule.service';

describe('TeamQuickActionsComponent', () => {
    let spectator: Spectator<TeamQuickActionsComponent>;
    const select_mode = signal(false);
    const selected_count = signal(0);
    const set_options = jest.fn();
    const navigate = jest.fn();
    const clear_selection = jest.fn();
    const toggle_select_mode = jest.fn(() => select_mode.set(!select_mode()));
    const selected_members = jest.fn(() => [] as any[]);
    const get_team_members = jest.fn(() => [] as any[]);

    const createComponent = createComponentFactory({
        component: TeamQuickActionsComponent,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(Router, { navigate } as any),
            MockProvider(BookingFormService, { setOptions: set_options } as any),
            MockProvider(TeamScheduleService, {
                select_mode,
                selected_count,
                selected_members,
                getTeamMembers: get_team_members,
                clearSelection: clear_selection,
                toggleSelectMode: toggle_select_mode,
            } as any),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        // NOTE: jest.clearAllMocks() wipes the module-factory implementation of
        // currentUser here, so clear the individual spies instead.
        [
            set_options,
            navigate,
            clear_selection,
            toggle_select_mode,
            selected_members,
            get_team_members,
        ].forEach((fn) => fn.mockClear());
        (currentUser as jest.Mock).mockImplementation(() => ({
            id: 'me',
            email: 'me@example.com',
        }));
        selected_members.mockReturnValue([]);
        get_team_members.mockReturnValue([]);
        select_mode.set(false);
        selected_count.set(0);
        spectator = createComponent();
    });

    it('should enter select mode when not already selecting', () => {
        spectator.component.toggleSelectMode();
        expect(toggle_select_mode).toHaveBeenCalled();
        expect(clear_selection).not.toHaveBeenCalled();
    });

    it('should clear selection when already in select mode', () => {
        select_mode.set(true);
        spectator.component.toggleSelectMode();
        expect(clear_selection).toHaveBeenCalled();
        expect(toggle_select_mode).not.toHaveBeenCalled();
    });

    it('should book for the whole team when nothing is selected', () => {
        get_team_members.mockReturnValue([
            { user: { email: 'a@example.com', name: 'A' } } as any,
        ]);
        spectator.component.bookForGroup();

        expect(get_team_members).toHaveBeenCalled();
        const options = set_options.mock.calls[0][0];
        expect(options.type).toBe('desk');
        expect(options.group).toBe(true);
        // current user is prepended
        expect(options.members.map((m: any) => m.email)).toEqual([
            'me@example.com',
            'a@example.com',
        ]);
        expect(clear_selection).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith(['/book', 'desks']);
    });

    it('should book for the selected members when selecting', () => {
        select_mode.set(true);
        selected_count.set(2);
        selected_members.mockReturnValue([
            { user: { email: 'x@example.com', name: 'X' } } as any,
            { user: { email: 'y@example.com', name: 'Y' } } as any,
        ]);
        spectator.component.bookForGroup();

        expect(selected_members).toHaveBeenCalled();
        expect(get_team_members).not.toHaveBeenCalled();
        const options = set_options.mock.calls[0][0];
        expect(options.members.map((m: any) => m.email)).toEqual([
            'me@example.com',
            'x@example.com',
            'y@example.com',
        ]);
    });

    it('should not duplicate the current user if already in the group', () => {
        (currentUser as jest.Mock).mockReturnValue({
            id: 'me',
            email: 'me@example.com',
        });
        get_team_members.mockReturnValue([
            { user: { email: 'me@example.com', name: 'Me' } } as any,
        ]);
        spectator.component.bookForGroup();
        const options = set_options.mock.calls[0][0];
        expect(
            options.members.filter((m: any) => m.email === 'me@example.com'),
        ).toHaveLength(1);
    });
});
