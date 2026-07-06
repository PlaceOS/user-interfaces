import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { ParkingUsersListComponent } from '../../app/parking/parking-users-list.component';
import { ParkingStateService } from '../../app/parking/parking-state.service';

describe('ParkingUsersListComponent', () => {
    let spectator: Spectator<ParkingUsersListComponent>;
    const edit_user = vi.fn();
    const remove_user = vi.fn();
    const copy = vi.fn(() => true);
    const users = signal([
        {
            id: 'user-1',
            name: 'Jane Doe',
            email: 'jane@example.com',
            plate_number: 'ZZZ999',
            car_colour: 'blue',
            deny: false,
        },
    ]);

    const createComponent = createComponentFactory({
        component: ParkingUsersListComponent,
        shallow: true,
        providers: [
            MockProvider(Clipboard, { copy }),
            MockProvider(ParkingStateService, {
                users: users as any,
                options: signal({
                    date: Date.now(),
                    search: '',
                    zones: [],
                    period: 'day',
                    request_filter: 'all',
                }) as any,
                loading: signal([]) as any,
                editUser: edit_user,
                removeUser: remove_user,
            } as any),
        ],
    });

    beforeEach(() => {
        edit_user.mockClear();
        remove_user.mockClear();
        copy.mockClear();
        spectator = createComponent();
    });

    it('should expose the parking user list from state', () => {
        expect(spectator.component.user_list()).toHaveLength(1);
        expect(spectator.component.user_list()[0].email).toBe(
            'jane@example.com',
        );
    });

    it('should delegate editing and removing users to the state service', () => {
        const user = users()[0];

        spectator.component.editUser(user);
        spectator.component.removeUser(user);

        expect(edit_user).toHaveBeenCalledWith(user);
        expect(remove_user).toHaveBeenCalledWith(user);
    });

    it('should copy the user id to the clipboard', () => {
        spectator.component.copyToClipboard('user-1');

        expect(copy).toHaveBeenCalledWith('user-1');
    });
});
