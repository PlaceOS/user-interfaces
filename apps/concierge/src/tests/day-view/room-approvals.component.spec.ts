import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { signal } from '@angular/core';
import { MockProvider } from 'ng-mocks';

import { EventsStateService } from '../../app/day-view/events-state.service';
import { RoomBookingsApprovalsComponent } from '../../app/day-view/room-approvals.component';

describe('RoomBookingsApprovalsComponent', () => {
    let spectator: Spectator<RoomBookingsApprovalsComponent>;
    const pending = signal<CalendarEvent[]>([]);
    const execute = jest.fn(() => Promise.resolve());
    const replace = jest.fn();
    const createComponent = createComponentFactory({
        component: RoomBookingsApprovalsComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(EventsStateService, { pending, replace } as any),
            MockProvider(OrganisationService, {
                building: { timezone: 'Australia/Sydney' },
                module: jest.fn(() => ({ execute })),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(() => false),
                time_format: 'h:mm a',
            } as any),
        ],
    });

    beforeEach(() => {
        execute.mockClear();
        replace.mockClear();
        pending.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should not refresh pending approvals immediately after approving series', async () => {
        const event = new CalendarEvent({
            id: 'event-1',
            mailbox: 'room@example.com',
            recurring_event_id: 'series-1',
        });

        await spectator.component.approveSeries(event);

        expect(execute).toHaveBeenCalledTimes(1);
        expect(execute).toHaveBeenCalledWith(
            'accept_recurring_event',
            ['room@example.com', 'series-1'],
            30 * 1000,
        );
        expect(execute).not.toHaveBeenCalledWith('find_bookings_for_approval');
    });

    it('should hide all pending events in an approved series', async () => {
        const series_event = new CalendarEvent({
            id: 'event-1',
            title: 'Standup',
            host: 'User',
            mailbox: 'room@example.com',
            recurring_event_id: 'series-1',
        });
        const next_series_event = new CalendarEvent({
            id: 'event-2',
            title: 'Standup',
            host: 'User',
            mailbox: 'room@example.com',
            recurring_event_id: 'series-1',
        });
        const other_event = new CalendarEvent({
            id: 'event-3',
            title: 'Planning',
            host: 'User',
            mailbox: 'room@example.com',
            recurring_event_id: 'series-2',
        });
        pending.set([series_event, next_series_event, other_event]);

        await spectator.component.approveSeries(series_event);

        expect(spectator.component.status()).toMatchObject({
            'series-1': 'accept',
            'event-1': 'accept',
            'event-2': 'accept',
        });
        expect(
            spectator.component.filtered_pending().map((event) => event.id),
        ).toEqual(['event-3']);

        pending.set([
            series_event,
            next_series_event,
            other_event,
            new CalendarEvent({
                id: 'event-4',
                title: 'Standup',
                host: 'User',
                mailbox: 'room@example.com',
                recurring_event_id: 'series-1',
            }),
        ]);

        expect(
            spectator.component.filtered_pending().map((event) => event.id),
        ).toEqual(['event-3']);
    });

    it('should update the room booking table after approving a booking', async () => {
        const event = new CalendarEvent({
            id: 'event-1',
            mailbox: 'room@example.com',
            resources: [
                {
                    email: 'room@example.com',
                    response_status: 'tentative',
                } as any,
            ],
        });

        await spectator.component.approve(event);

        expect(replace).toHaveBeenCalledTimes(1);
        expect(replace.mock.calls[0][0].status).toBe('approved');
    });

    it('should update the room booking table after rejecting a booking', async () => {
        const event = new CalendarEvent({
            id: 'event-1',
            mailbox: 'room@example.com',
            resources: [
                {
                    email: 'room@example.com',
                    response_status: 'tentative',
                } as any,
            ],
        });

        await spectator.component.reject(event);

        expect(replace).toHaveBeenCalledTimes(1);
        expect(replace.mock.calls[0][0].status).toBe('declined');
    });
});
