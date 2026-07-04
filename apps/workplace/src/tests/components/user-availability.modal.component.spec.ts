import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

jest.mock('@placeos/events', () => ({
    ...jest.requireActual('@placeos/events'),
    queryEvents: jest.fn(() => ({ toPromise: () => Promise.resolve([]) })),
}));

import { queryEvents } from '@placeos/events';
import { UserAvailabilityModalComponent } from '../../app/components/user-availability.modal.component';

describe('UserAvailabilityModalComponent', () => {
    const base_data = {
        users: [
            { name: 'Alice', email: 'alice@place.tech' },
            { name: 'Bob', email: 'bob@place.tech' },
        ],
        date: new Date('2050-01-01T09:00:00').valueOf(),
        duration: 60,
    };

    let spectator: Spectator<UserAvailabilityModalComponent>;
    const createComponent = createComponentFactory({
        component: UserAvailabilityModalComponent,
        detectChanges: false,
        providers: [{ provide: MAT_DIALOG_DATA, useValue: base_data }],
    });

    beforeEach(() => {
        (queryEvents as jest.Mock).mockReset();
        (queryEvents as jest.Mock).mockReturnValue({
            toPromise: () => Promise.resolve([]),
        });
        spectator = createComponent();
    });

    it('initialises state from dialog data on init', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.users()).toEqual(base_data.users);
        expect(spectator.component.date()).toBe(base_data.date);
        expect(spectator.component.duration()).toBe(60);
    });

    it('marks a past date via is_past and a future date as not past', () => {
        spectator.component.date.set(new Date('2000-01-01').valueOf());
        expect(spectator.component.is_past()).toBe(true);
        spectator.component.date.set(new Date('2100-01-01').valueOf());
        expect(spectator.component.is_past()).toBe(false);
    });

    it('emits a done event with date and duration on save when not past', () => {
        const emit = jest.fn();
        spectator.component.event.subscribe(emit);
        spectator.component.date.set(new Date('2100-06-01').valueOf());
        spectator.component.duration.set(90);
        spectator.component.save();
        expect(emit).toHaveBeenCalledWith({
            reason: 'done',
            metadata: {
                date: spectator.component.date(),
                duration: 90,
            },
        });
    });

    it('does not emit on save when the selected date is in the past', () => {
        const emit = jest.fn();
        spectator.component.event.subscribe(emit);
        spectator.component.date.set(new Date('2000-01-01').valueOf());
        spectator.component.save();
        expect(emit).not.toHaveBeenCalled();
    });

    it('preserves hours and minutes when changing the date', () => {
        const current = new Date('2050-03-03T14:37:00');
        spectator.component.date.set(current.valueOf());
        const new_day = new Date('2050-08-08T00:00:00').valueOf();
        spectator.component.changeDate(new_day);
        const result = new Date(spectator.component.date());
        expect(result.getHours()).toBe(14);
        expect(result.getMinutes()).toBe(37);
        expect(result.getDate()).toBe(8);
        expect(result.getMonth()).toBe(7);
    });

    it('builds a group per user and maps returned events to start hour and duration', async () => {
        (queryEvents as jest.Mock).mockReturnValue({
            toPromise: () =>
                Promise.resolve([
                    {
                        date: new Date('2050-01-01T10:00:00').valueOf(),
                        duration: 30,
                    },
                ]),
        });
        spectator.component.users.set(base_data.users as any);
        await spectator.component.loadAvailability();
        const groups = spectator.component.groups();
        expect(groups).toHaveLength(2);
        expect(groups[0].name).toBe('Alice');
        expect(groups[0].events).toEqual([{ start: 10, duration: 30 }]);
        expect(spectator.component.loading()).toBe(false);
    });

    it('returns empty events for users without an email without querying', async () => {
        spectator.component.users.set([{ name: 'NoEmail' } as any]);
        await spectator.component.loadAvailability();
        expect(queryEvents).not.toHaveBeenCalled();
        expect(spectator.component.groups()).toEqual([
            { name: 'NoEmail', events: [] },
        ]);
    });

    it('falls back to empty events when the query fails', async () => {
        (queryEvents as jest.Mock).mockReturnValue({
            toPromise: () => Promise.reject(new Error('boom')),
        });
        spectator.component.users.set([
            { name: 'Alice', email: 'alice@place.tech' } as any,
        ]);
        await spectator.component.loadAvailability();
        expect(spectator.component.groups()).toEqual([
            { name: 'Alice', events: [] },
        ]);
        expect(spectator.component.loading()).toBe(false);
    });
});
