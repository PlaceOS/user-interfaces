import { signal } from '@angular/core';
import {
    createComponentFactory,
    mockProvider,
    Spectator,
} from '@ngneat/spectator/vitest';
import { OrganisationService, Space } from '@placeos/common';
import { EventFormOptions, EventFormService } from '@placeos/events';

import { OutlookEventService } from '../app/calendar/outlook-event.service';
import { MemoryItemAdapter } from '../app/calendar/outlook-item.adapter';
import { RoomSearchComponent } from '../app/calendar/room-search.component';

const START = new Date(2026, 9, 1, 9).valueOf();
const HOUR = 60 * 60 * 1000;

const room = (id: string, capacity: number, details: Partial<Space> = {}) =>
    new Space({
        id,
        name: id,
        email: `${id}@place.tech`,
        capacity,
        zones: ['lvl-1'],
        features: [],
        ...details,
    });

describe('RoomSearchComponent', () => {
    let spectator: Spectator<RoomSearchComponent>;
    let adapter: MemoryItemAdapter;
    const available = signal<Space[]>([]);
    const options = signal<Partial<EventFormOptions>>({});

    const createComponent = createComponentFactory({
        component: RoomSearchComponent,
        detectChanges: false,
        providers: [
            mockProvider(EventFormService, {
                loading: signal(''),
                options,
                spaces: available,
                available_spaces: available,
                features: signal([]),
                setOptions: (changes: Partial<EventFormOptions>) =>
                    options.update((o) => ({ ...o, ...changes })),
            }),
            mockProvider(OrganisationService, {
                building_list: signal([]),
                active_building: signal(null),
                active_levels: signal([]),
            }),
        ],
    });

    beforeEach(async () => {
        options.set({});
        available.set([
            room('large', 10, { features: ['VC'] }),
            room('small', 4),
            room('unknown', -1),
            room('on-event', 6),
            room('level-2', 8, { zones: ['lvl-2'] }),
        ]);
        adapter = new MemoryItemAdapter({
            subject: 'Client visit',
            start: START,
            end: START + HOUR,
            all_day: false,
            is_recurring: false,
            room_emails: ['on-event@place.tech'],
        });
        spectator = createComponent();
        const outlook = spectator.inject(OutlookEventService);
        outlook.useAdapter(adapter);
        await outlook.refresh();
        spectator.detectChanges();
    });

    const results = () => spectator.component.results().map((_) => _.id);

    it('lists rooms that are not on the event, smallest first', () => {
        expect(results()).toEqual(['unknown', 'small', 'level-2', 'large']);
    });

    it('keeps rooms with an unknown capacity under a capacity filter', () => {
        spectator.component.capacity.set(8);
        expect(results()).toEqual(['unknown', 'level-2', 'large']);
    });

    it('filters by facility, floor and name', () => {
        spectator.component.selected_features.set(['VC']);
        expect(results()).toEqual(['large']);

        spectator.component.selected_features.set([]);
        spectator.component.level_id.set('lvl-2');
        expect(results()).toEqual(['level-2']);

        spectator.component.level_id.set('');
        spectator.component.search.set(' SMA ');
        expect(results()).toEqual(['small']);
    });

    it('searches for rooms at the Outlook event time', async () => {
        expect(options()).toMatchObject({
            date: START,
            duration: 60,
            all_day: false,
            zones: [],
        });

        adapter.update({ start: START + HOUR, end: START + 3 * HOUR });
        await spectator.inject(OutlookEventService).refresh();
        spectator.detectChanges();

        expect(options()).toMatchObject({ date: START + HOUR, duration: 120 });
    });

    it('moves an added room from the results to the event', async () => {
        await spectator.component.addRoom(available()[1]);

        expect(adapter.details.room_emails).toContain('small@place.tech');
        expect(results()).not.toContain('small');
        expect(spectator.component.event_rooms()).toContainEqual(
            expect.objectContaining({
                email: 'small@place.tech',
                state: 'selected',
            }),
        );
        expect(spectator.component.busy()).toBe('');
    });
});
