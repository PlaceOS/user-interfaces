vi.mock('@placeos/ts-client');

import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '@placeos/common';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import * as ts_client from '@placeos/ts-client';
import { MockComponent, MockProvider } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { FindAvailabilityModalComponent } from '../lib/find-availability-modal/find-availability-modal.component';
import { UserAvailabilityComponent } from '../lib/find-availability-modal/user-availability.component';

const HOST = new User({ email: 'host@place.tech', name: 'Host' });

describe('FindAvailabilityModalComponent', () => {
    let spectator: Spectator<FindAvailabilityModalComponent>;
    const close_fn = vi.fn();
    const createComponent = createComponentFactory({
        component: FindAvailabilityModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(UserAvatarComponent),
            MockComponent(DateFieldComponent),
            MockComponent(UserSearchFieldComponent),
            MockComponent(UserAvailabilityComponent),
        ],
        providers: [
            MockProvider(MatDialogRef, { close: close_fn }),
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    host: HOST,
                    users: [
                        new User({ email: 'a@place.tech', name: 'Alice' }),
                    ],
                    date: new Date('2030-06-01T09:00:00').valueOf(),
                    duration: 60,
                },
            },
        ],
        imports: [FormsModule],
    });

    beforeEach(() => {
        close_fn.mockClear();
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should seed users, date and duration from the dialog data', () => {
        expect(spectator.component.users().length).toBe(1);
        expect(spectator.component.users()[0].email).toBe('a@place.tech');
        expect(spectator.component.duration()).toBe(60);
        expect(spectator.component.host).toBe(HOST);
    });

    it('should add a new user and clear the search selection', () => {
        const bob = new User({ email: 'b@place.tech', name: 'Bob' });
        spectator.component.addUser(bob);
        expect(spectator.component.users().length).toBe(2);
        expect(spectator.component.user()).toBeUndefined();
    });

    it('should not add duplicate users by email', () => {
        const alice_again = new User({
            email: 'a@place.tech',
            name: 'Alice II',
        });
        spectator.component.addUser(alice_again);
        expect(spectator.component.users().length).toBe(1);
        expect(spectator.component.users()[0].name).toBe('Alice II');
    });

    it('should ignore adding a falsy user', () => {
        spectator.component.addUser(undefined as any);
        expect(spectator.component.users().length).toBe(1);
    });

    it('should remove a user by email', () => {
        spectator.component.removeUser(spectator.component.users()[0]);
        expect(spectator.component.users().length).toBe(0);
    });

    it('should update the selected date', () => {
        const new_date = new Date('2030-07-01T12:00:00').valueOf();
        spectator.component.onDateChange(new_date);
        expect(spectator.component.date()).toBe(new_date);
    });

    it('should compute selection width from the duration', () => {
        spectator.component.duration.set(120);
        expect(spectator.component.selection_width()).toBe(10);
    });

    it('should flag a date on the current day as today', () => {
        spectator.component.onDateChange(Date.now());
        expect(spectator.component.today()).toBe(true);
        spectator.component.onDateChange(
            new Date('2030-06-01T09:00:00').valueOf(),
        );
        expect(spectator.component.today()).toBe(false);
    });

    it('should close the dialog with true when confirming', () => {
        spectator.component.closeAndUpdate();
        expect(close_fn).toHaveBeenCalledWith(true);
    });
});
