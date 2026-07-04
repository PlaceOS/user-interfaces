import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { EventListingComponent } from '../../app/events/event-listing.component';
import { EventStateService } from '../../app/events/event-state.service';

const CALENDAR = 'group@events.com';

describe('EventListingComponent', () => {
    let spectator: SpectatorRouting<EventListingComponent>;
    const loading = signal('');
    const event_list = signal<any[]>([]);
    const view_event = jest.fn();
    const remove_event = jest.fn();

    const createComponent = createRoutingFactory({
        component: EventListingComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            {
                provide: EventStateService,
                useValue: {
                    loading,
                    event_list,
                    calendar: CALENDAR,
                    viewEvent: view_event,
                    removeEvent: remove_event,
                },
            },
            MockProvider(SettingsService, {
                time_format: 'shortTime',
            } as any),
        ],
    });

    beforeEach(() => {
        loading.set('');
        event_list.set([]);
        view_event.mockClear();
        remove_event.mockClear();
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should resolve the room resource that is not the calendar', () => {
        const item = {
            resources: [
                { email: CALENDAR, name: 'Calendar' },
                { email: 'room@b.com', name: 'Room' },
            ],
        } as any;
        expect(spectator.component.room(item)?.email).toBe('room@b.com');
    });

    it('should count attendees excluding the calendar', () => {
        const attendees = [
            { email: CALENDAR },
            { email: 'a@b.com' },
            { email: 'c@b.com' },
        ] as any;
        expect(spectator.component.attendeeCount(attendees)).toBe(2);
        expect(spectator.component.attendeeCount([])).toBe(0);
        expect(
            spectator.component.attendeeList(attendees).map((u) => u.email),
        ).toEqual(['a@b.com', 'c@b.com']);
    });

    it('should count and list only checked-in attendees', () => {
        const attendees = [
            { email: 'a@b.com', checked_in: true },
            { email: 'c@b.com', checked_in: false },
        ] as any;
        expect(spectator.component.checkedInCount(attendees)).toBe(1);
        expect(spectator.component.checkedInCount(undefined)).toBe(0);
        expect(
            spectator.component.checkedInList(attendees).map((u) => u.email),
        ).toEqual(['a@b.com']);
    });

    it('should delegate view and remove to the state service', () => {
        spectator.component.viewEvent({ id: 'e1' });
        spectator.component.removeEvent({ id: 'e2' });
        expect(view_event).toHaveBeenCalledWith({ id: 'e1' });
        expect(remove_event).toHaveBeenCalledWith({ id: 'e2' });
    });
});
