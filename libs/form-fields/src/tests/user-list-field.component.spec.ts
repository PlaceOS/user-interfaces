import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockPipe, MockProvider } from 'ng-mocks';
import { IconComponent, UserAvatarComponent } from '@placeos/components';
import { generateMockUser, User } from '@placeos/users';
import { SettingsService } from '@placeos/common';

jest.mock('@placeos/common');
import * as common_lib from '@placeos/common';

import { UserListFieldComponent } from '../lib/user-list-field.component';
import { UserSearchFieldComponent } from '../lib/user-search-field.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PlaceUserPipe } from '../lib/place-user.pipe';

describe('UserListFieldComponent', () => {
    let spectator: Spectator<UserListFieldComponent>;
    const createComponent = createComponentFactory({
        component: UserListFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(UserSearchFieldComponent),
            MockComponent(UserAvatarComponent),
            MockPipe(PlaceUserPipe),
        ],
        providers: [
            MockProvider(MatDialog, { open: jest.fn(() => ({})) } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [
            MatChipsModule,
            FormsModule,
            MatTooltipModule,
            MatAutocompleteModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should be able to be disabled', () => {
        expect('[form-field]').not.toHaveAttribute('disabled');
        spectator.component.setDisabledState(true);
        spectator.detectChanges();
        expect('[form-field]').toHaveAttribute('disabled');
    });

    it('should show selected users', () => {
        const user_list = Array(20)
            .fill(1)
            .map((_) => new User(generateMockUser()));

        spectator.component.writeValue(user_list);
        spectator.detectChanges();
        expect('[user]').toHaveLength(user_list.length);
    });

    it('should allow user to indicate that they want to add a new contact', async () => {
        expect('[name="new-contact"]').toExist();
        spectator.click('[name="new-contact"]');
        expect(spectator.inject(MatDialog).open).toHaveBeenCalled();
    });

    it('should allow adding users from a CSV file', () => {
        (common_lib as any).notifyError = jest.fn();
        (common_lib as any).csvToJson = jest.fn((_) => [
            { id: '2', name: 'John Smith' },
            { id: '3', name: 'Johnny Smith' },
        ]);
        jest.spyOn(spectator.component, 'addUser');
        const eventListener = (type, callback) => {
            if (type === 'load') {
                callback({
                    srcElement: {
                        result: `Organisation Name,First Name,Last Name,Email,Phone\nFake Org,John,Smith,john.smith@example.com,01234567898\nFake Org,Johnny,Smith,,01234567898`,
                        target: {},
                    },
                });
            } else {
                callback();
            }
        };
        const mock_file_reader = {
            addEventListener: eventListener,
            readAsText: () => null,
        };
        jest.spyOn(window, 'FileReader').mockReturnValue(
            mock_file_reader as any
        );
        spectator.component.addUsersFromFile({
            target: {
                files: [{ id: 0, type: 'text/csv', size: 1, name: 'File.csv' }],
            },
        });
        expect(spectator.component.addUser).toHaveBeenCalledTimes(2);
        expect(spectator.component.active_list).toHaveLength(2);
        expect(
            spectator.component.active_list.find(
                (user) => user.name === 'John Smith'
            )
        ).toBeTruthy();
    });

    it('should allow user to remove selected users', () => {
        spectator.component.writeValue([new User(generateMockUser())]);
        spectator.detectChanges();
        expect('[user]').toHaveLength(1);
        expect('[user] [remove]').toExist();
        spectator.click('[user] [remove]');
        expect(spectator.component.active_list.length).toBe(0);
    });

    it('should be able to hide user actions', () => {
        expect('[actions] button').toHaveLength(3);
        spectator.setInput({ hide_actions: true });
        spectator.detectChanges();
        expect('[actions] button').toHaveLength(0);
        spectator.setInput({ hide_actions: false });
        spectator.detectChanges();
        expect('[actions] button').toHaveLength(3);
    });
});
