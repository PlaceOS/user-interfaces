import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ts_client from '@placeos/ts-client';
import { getUnixTime } from 'date-fns';

import { UserAvailabilityModalComponent } from '../../app/components/user-availability.modal.component';

// Native vitest cannot module-mock the @placeos/events workspace package.
// `queryEvents` is the real function; it calls @placeos/ts-client `get`
// (the only mockable layer), stubbed to resolve `[]` below.
vi.mock('@placeos/ts-client', { spy: true });

describe('UserAvailabilityModalComponent', () => {
    // base_data users have no email so ngOnInit's un-awaited
    // loadAvailability() never reaches the query layer.
    const base_data = {
        users: [{ name: 'Alice' }, { name: 'Bob' }],
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
        vi.clearAllMocks();
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
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
        const emit = vi.fn();
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
        const emit = vi.fn();
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

    it('builds a group per user and resets loading after availability loads', async () => {
        spectator.component.users.set(base_data.users as any);
        await spectator.component.loadAvailability();
        const groups = spectator.component.groups();
        expect(groups).toHaveLength(2);
        expect(groups[0].name).toBe('Alice');
        expect(groups[1].name).toBe('Bob');
        expect(spectator.component.loading()).toBe(false);
    });

    it('returns empty events for users without an email without querying', async () => {
        spectator.component.users.set([{ name: 'NoEmail' } as any]);
        await spectator.component.loadAvailability();
        // No email => the component never reaches the query layer.
        expect(ts_client.get).not.toHaveBeenCalled();
        expect(spectator.component.groups()).toEqual([
            { name: 'NoEmail', events: [] },
        ]);
    });

    it('maps queried events into timeline groups for users with an email', async () => {
        const event_date = new Date('2050-01-01T10:00:00');
        vi.mocked(ts_client.get).mockResolvedValue([
            { event_start: getUnixTime(event_date), duration: 45 },
        ] as any);
        spectator.component.users.set([
            { name: 'Alice', email: 'alice@place.tech' } as any,
        ]);
        await spectator.component.loadAvailability();
        expect(ts_client.get).toHaveBeenCalled();
        const groups = spectator.component.groups();
        expect(groups).toHaveLength(1);
        expect(groups[0].events).toEqual([
            { start: event_date.getHours(), duration: 45 },
        ]);
        expect(spectator.component.loading()).toBe(false);
    });
});
