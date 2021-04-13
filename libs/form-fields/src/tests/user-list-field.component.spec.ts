import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { IconComponent } from '@placeos/components';
import { generateMockUser, User } from '@placeos/users';

jest.mock('@placeos/common');
import * as common_lib from '@placeos/common';

import { UserListFieldComponent } from '../lib/user-list-field.component';
import { UserSearchFieldComponent } from '../lib/user-search-field.component';

describe('UserListFieldComponent', () => {
    let spectator: Spectator<UserListFieldComponent>;
    const createComponent = createComponentFactory({
        component: UserListFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(UserSearchFieldComponent),
        ],
        providers: [
            { provide: MatDialog, useValue: { open: jest.fn(() => ({})) } },
        ],
        imports: [MatChipsModule, FormsModule],
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
        expect('mat-chip').toHaveLength(user_list.length);
    });

    it('should allow user to add existing users', () => {
        const user = new User(generateMockUser());
        expect('a-user-search-field').toExist();
        expect('mat-chip').toHaveLength(0);
        spectator.triggerEventHandler(
            'a-user-search-field',
            'ngModelChange',
            user
        );
        spectator.detectChanges();
        expect('mat-chip').toHaveLength(1);
        expect('mat-chip').toContainText(user.name);
        expect(spectator.component.active_list).toContain(user);
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
            target: { files: [{ id: 0, size: 1, name: 'File.csv' }] },
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
        const user_list = Array(20)
            .fill(1)
            .map((_) => new User(generateMockUser()));
        spectator.component.writeValue(user_list);
        spectator.detectChanges();
        expect('mat-chip').toHaveLength(user_list.length);
        expect('app-icon').toExist();
        spectator.click('app-icon');
        expect(
            spectator.component.active_list.find(
                (user) => user.email === user_list[0].email
            )
        ).not.toBeTruthy();
    });

    it('should show external users with a different colour', () => {
        const user_list = [
            {
                id: 'test-real',
                name: 'Real Test',
                email: 'test@place.tech',
                visit_expected: false,
            },
            {
                id: 'test-external',
                name: 'Jim Test',
                email: 'jim@test.com',
                visit_expected: true,
            },
        ].map((_) => new User(_));
        spectator.component.writeValue(user_list);
        spectator.detectChanges();
        expect(`[id="test@place.tech"]`).toHaveAttribute('color', 'internal');
        expect(`[id="jim@test.com"]`).toHaveAttribute('color', 'external');
    });

    it('should be able to hide user actions', () => {
        expect('button').toHaveLength(3);
        spectator.setInput({ hide_actions: true });
        spectator.detectChanges();
        expect('button').toHaveLength(0);
        spectator.setInput({ hide_actions: false });
        spectator.detectChanges();
        expect('button').toHaveLength(3);
    });
});
