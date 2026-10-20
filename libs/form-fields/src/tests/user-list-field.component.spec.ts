import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService, User } from '@placeos/common';
import { generateMockUser } from 'libs/users/src/lib/user.utilities';
import { MockComponent, MockPipe, MockProvider } from 'ng-mocks';

import {
    MatAutocompleteModule,
    MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { PlaceUserPipe } from '../lib/place-user.pipe';
import { UserListFieldComponent } from '../lib/user-list-field.component';
import { UserSearchFieldComponent } from '../lib/user-search-field.component';

describe('UserListFieldComponent', () => {
    let spectator: Spectator<UserListFieldComponent>;
    /** Values returned by the mocked settings signal method, by key */
    const settings_map: Record<string, unknown> = {};
    const createComponent = createComponentFactory({
        component: UserListFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(UserSearchFieldComponent),
            MockComponent(UserAvatarComponent),
            MockPipe(PlaceUserPipe),
        ],
        providers: [
            MockProvider(MatDialog, { open: vi.fn(() => ({})) } as any),
            MockProvider(SettingsService, {
                get: vi.fn(),
                signal: vi.fn((name: string, default_value?: unknown) =>
                    signal(
                        name in settings_map
                            ? settings_map[name]
                            : default_value,
                    ),
                ),
            } as any),
        ],
        imports: [
            MatChipsModule,
            FormsModule,
            MatTooltipModule,
            MatAutocompleteModule,
        ],
    });

    // The search input is a chip input (no `matInput`), so MatAutocompleteTrigger
    // is its sole value accessor. On teardown its `writeValue` schedules a
    // microtask that runs `_updateNativeInputValue` against the already-destroyed
    // view, producing a benign "Cannot set properties of undefined (setting
    // 'value')" rejection. Null-guard the write so it no-ops once the host input
    // is gone.
    const trigger_proto = MatAutocompleteTrigger.prototype;
    const original_write = trigger_proto.writeValue;
    beforeAll(() => {
        trigger_proto.writeValue = function (value: unknown) {
            Promise.resolve(null).then(() => {
                try {
                    this._assignOptionValue(value);
                } catch {
                    /* view already destroyed */
                }
            });
        };
    });
    afterAll(() => {
        trigger_proto.writeValue = original_write;
    });

    beforeEach(() => {
        for (const key of Object.keys(settings_map)) delete settings_map[key];
        spectator = createComponent();
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
            .map(() => new User(generateMockUser()));

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
        // The real csvToJson parses the CSV string produced by the mocked
        // FileReader below into two user rows.
        vi.spyOn(spectator.component, 'addUser');
        const eventListener = (type, callback) => {
            if (type === 'load') {
                callback({
                    srcElement: {
                        result: `Organisation Name,First Name,Last Name,Email,Phone\nFake Org,John,Smith,john.smith@example.com,01234567898\nFake Org,Johnny,Smith,johnny.smith@example.com,01234567898`,
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
        vi.spyOn(window, 'FileReader').mockImplementation(function () {
            return mock_file_reader;
        });
        spectator.component.addUsersFromFile({
            target: {
                files: [{ id: 0, type: 'text/csv', size: 1, name: 'File.csv' }],
            },
        });
        expect(spectator.component.addUser).toHaveBeenCalledTimes(2);
        expect(spectator.component.active_list().length).toBeGreaterThan(0);
    });

    it('should allow user to remove selected users', () => {
        spectator.component.writeValue([new User(generateMockUser())]);
        spectator.detectChanges();
        expect('[user]').toHaveLength(1);
        expect('[user] [remove]').toExist();
        spectator.click('[user] [remove]');
        expect(spectator.component.active_list().length).toBe(0);
    });

    it('should only remove the selected user when users have no IDs', () => {
        const users = [
            {
                name: 'Visitor One',
                email: 'visitor.one@example.com',
            },
            {
                name: 'Visitor Two',
                email: 'visitor.two@example.com',
            },
        ] as User[];
        spectator.component.writeValue(users);
        spectator.detectChanges();

        spectator.click('[user] [remove]');

        expect(spectator.component.active_list()).toEqual([users[1]]);
    });

    it('should only remove one entry when list entries share an identity', () => {
        // Visitor lists built from booking data can carry blank or repeated
        // ids/emails; removal must stay positional. (PPT-2634)
        const users = [
            { name: 'Visitor One', email: '' },
            { name: 'Visitor Two', email: '' },
            { name: 'Visitor Three', email: '' },
        ] as User[];
        spectator.component.writeValue(users);
        spectator.detectChanges();
        expect('[user]').toHaveLength(3);

        spectator.click('[user] [remove]');

        expect(spectator.component.active_list()).toEqual([users[1], users[2]]);
    });

    it('should remove the clicked entry rather than the first match', () => {
        const users = [
            { name: 'Visitor One', email: 'one@example.com' },
            { name: 'Visitor Two', email: 'two@example.com' },
            { name: 'Visitor Three', email: 'three@example.com' },
        ] as User[];
        spectator.component.writeValue(users);
        spectator.detectChanges();

        spectator.component.removeUser(1);

        expect(spectator.component.active_list()).toEqual([users[0], users[2]]);
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

    describe('attendee flags', () => {
        beforeEach(() => {
            settings_map['events.allow_international'] = true;
            settings_map['events.allow_attendee_internal_or_external'] = true;
            spectator = createComponent();
            spectator.setInput({ flags: true });
            spectator.component.writeValue([
                new User({ name: 'Visitor', email: 'visitor@example.com' }),
            ]);
            spectator.detectChanges();
        });

        it('should show the international checkbox and type radio when enabled', () => {
            expect('mat-checkbox').toExist();
            expect('mat-radio-group').toExist();
            expect('mat-radio-button').toHaveLength(2);
        });

        it('should hide the flag controls when the flags input is off', () => {
            spectator.setInput({ flags: false });
            spectator.detectChanges();
            expect('mat-checkbox').not.toExist();
            expect('mat-radio-group').not.toExist();
        });

        it('should store the international flag on the user', () => {
            const item = spectator.component.active_list()[0];
            expect(spectator.component.getAttendeeInternational(item)).toBe(
                false,
            );
            spectator.click('mat-checkbox input');
            expect(spectator.component.getAttendeeInternational(item)).toBe(
                true,
            );
            expect(item.extension_data.international).toBe(true);
        });

        it('should store the internal/external type on the user', () => {
            const item = spectator.component.active_list()[0];
            expect(spectator.component.getAttendeeType(item)).toBe('internal');
            spectator.click(
                'mat-radio-group mat-radio-button[value="external"] input',
            );
            expect(spectator.component.getAttendeeType(item)).toBe('external');
            expect(item.extension_data.visitor_internal_or_external).toBe(
                'external',
            );
        });

        it('should emit the updated list through the form control', () => {
            const onChange = vi.fn();
            spectator.component.registerOnChange(onChange);
            spectator.click('mat-checkbox input');
            expect(onChange).toHaveBeenCalled();
        });

        it('should hide the flag controls when the settings are off', () => {
            settings_map['events.allow_international'] = false;
            settings_map['events.allow_attendee_internal_or_external'] = false;
            spectator = createComponent();
            spectator.setInput({ flags: true });
            spectator.component.writeValue([
                new User({ name: 'Visitor', email: 'visitor@example.com' }),
            ]);
            spectator.detectChanges();
            expect('mat-checkbox').not.toExist();
            expect('mat-radio-group').not.toExist();
        });
    });
});
