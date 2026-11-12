vi.mock('@placeos/ts-client');

import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { User } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';
import { MockComponent, MockProvider } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { FindAvailabilityModalComponent } from '../lib/find-availability-modal/find-availability-modal.component';
import { UserAvailabilityComponent } from '../lib/find-availability-modal/user-availability.component';

const mockGet = vi.mocked(
    ts_client.get as unknown as (url: string) => Promise<unknown>,
);

const HOST = new User({ email: 'host@place.tech', name: 'Host' });

describe('FindAvailabilityModalComponent', () => {
    let spectator: Spectator<FindAvailabilityModalComponent>;
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
            MockProvider(MatDialogRef),
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    host: HOST,
                    users: [new User({ email: 'a@place.tech', name: 'Alice' })],
                    date: new Date('2030-06-01T09:00:00').valueOf(),
                    duration: 60,
                },
            },
        ],
        imports: [FormsModule],
    });

    beforeEach(() => {
        mockGet.mockResolvedValue([]);
        spectator = createComponent();
    });
    afterEach(() => vi.useRealTimers());

    it('should seed users, date and duration from the dialog data', () => {
        expect(spectator.component.users().length).toBe(1);
        expect(spectator.component.users()[0].email).toBe('a@place.tech');
        expect(spectator.component.duration()).toBe(60);
        expect(spectator.component.host).toBe(HOST);
    });

    it('should show an unnamed attendee email instead of the host email', () => {
        spectator.component.users.set([
            new User({ email: 'unnamed@place.tech' }),
        ]);
        spectator.detectChanges();

        expect(spectator.query('[person]')?.textContent).toContain(
            'unnamed@place.tech',
        );
        expect(spectator.query('[person]')?.textContent).not.toContain(
            HOST.email,
        );
    });

    it('should add a new user and clear the search selection', () => {
        const bob = new User({ email: 'b@place.tech', name: 'Bob' });
        spectator.component.addUser(bob);
        expect(spectator.component.users().length).toBe(2);
        expect(spectator.component.user()).toBeUndefined();
    });

    it('should not add a user again when the email differs only in case', () => {
        // the user search field emits the search result, then the same user
        // with the stored PlaceOS details, whose email case can differ
        spectator.component.addUser(
            new User({ email: 'carol@place.tech', name: 'Carol' }),
        );
        spectator.component.addUser(
            new User({ email: 'Carol@Place.Tech', name: 'Carol Smith' }),
        );
        expect(spectator.component.users().length).toBe(2);
        expect(spectator.component.users()[1].name).toBe('Carol Smith');
    });

    it('should remove a user whose email differs only in case', () => {
        spectator.component.removeUser(
            new User({ email: 'A@PLACE.TECH', name: 'Alice' }),
        );
        expect(spectator.component.users().length).toBe(0);
    });

    it('should ignore adding a falsy user', () => {
        spectator.component.addUser(undefined);
        expect(spectator.component.users().length).toBe(1);
    });

    it('should flag a date on the current day as today', () => {
        spectator.component.onDateChange(Date.now());
        expect(spectator.component.today()).toBe(true);
        spectator.component.onDateChange(
            new Date('2030-06-01T09:00:00').valueOf(),
        );
        expect(spectator.component.today()).toBe(false);
    });

    it('should map busy periods to positions keyed by lower case email', async () => {
        const start = new Date('2030-06-01T06:00:00');
        const starts_at = getUnixTime(start);
        mockGet.mockResolvedValue([
            {
                id: 'A@PLACE.TECH',
                availability: [
                    { status: 'busy', starts_at, ends_at: starts_at + 90 * 60 },
                    { status: 'free', starts_at, ends_at: starts_at + 60 },
                ],
            },
        ]);
        spectator = createComponent();
        await vi.waitFor(() =>
            expect(spectator.component.availability()['a@place.tech']).toEqual([
                {
                    date: start.valueOf(),
                    duration: 90,
                    start: 25,
                    size: 6.25,
                },
            ]),
        );
        const url = new URL(mockGet.mock.lastCall![0], location.origin);
        expect(url.searchParams.get('calendars')).toBe(
            'host@place.tech,a@place.tech',
        );
        expect(url.searchParams.get('period_start')).toBe(
            `${getUnixTime(new Date('2030-06-01T00:00:00'))}`,
        );
        expect(url.searchParams.get('period_end')).toBe(
            `${getUnixTime(new Date('2030-06-01T23:59:59'))}`,
        );
    });

    it('should move the selection by dragging, in 5 minute steps and not into the past', () => {
        vi.useFakeTimers({
            now: new Date('2030-06-01T08:30:00'),
            toFake: ['Date'],
        });
        const nine = new Date('2030-06-01T09:00:00').valueOf();
        const minutes = (n: number) => nine + n * 60 * 1000;
        expect(spectator.component.selection_left()).toBe(45);
        expect(spectator.component.selection_width()).toBe(5);
        spectator.component.startMovePeriod(
            new MouseEvent('mousedown', { clientX: 500 }),
        );
        expect(spectator.component.move_time()).toBe(true);
        // 80px is one hour; 10px is 7.5 minutes, which rounds down to 5
        window.dispatchEvent(new MouseEvent('mousemove', { clientX: 580 }));
        expect(spectator.component.date()).toBe(minutes(60));
        expect(spectator.component.selection_left()).toBe(50);
        window.dispatchEvent(new MouseEvent('mousemove', { clientX: 490 }));
        expect(spectator.component.date()).toBe(minutes(-5));
        // 08:00 is before the current time, so the last valid time is kept
        window.dispatchEvent(new MouseEvent('mousemove', { clientX: 420 }));
        expect(spectator.component.date()).toBe(minutes(-5));
        window.dispatchEvent(new MouseEvent('mouseup'));
        expect(spectator.component.move_time()).toBe(false);
    });

    it('should resize the duration by dragging, down to 30 minutes', () => {
        // The 24 hour timeline is 1920px wide, so 80px is one hour
        spectator.component.startMoveDuration(
            new MouseEvent('mousedown', { clientX: 500 }),
        );
        window.dispatchEvent(new MouseEvent('mousemove', { clientX: 580 }));
        expect(spectator.component.duration()).toBe(120);
        window.dispatchEvent(new MouseEvent('mousemove', { clientX: 0 }));
        expect(spectator.component.duration()).toBe(30);
        window.dispatchEvent(new MouseEvent('mouseup'));
        window.dispatchEvent(new MouseEvent('mousemove', { clientX: 660 }));
        expect(spectator.component.duration()).toBe(30);
    });
});
