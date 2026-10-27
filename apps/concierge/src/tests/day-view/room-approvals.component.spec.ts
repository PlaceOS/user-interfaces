import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    CalendarEvent,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import { EventsStateService } from '../../app/day-view/events-state.service';
import { RoomBookingsApprovalsComponent } from '../../app/day-view/room-approvals.component';

describe('RoomBookingsApprovalsComponent', () => {
    let spectator: Spectator<RoomBookingsApprovalsComponent>;
    const pending = signal<CalendarEvent[]>([]);
    const execute = vi.fn(() => Promise.resolve());
    const replace = vi.fn();
    // Reason the decline confirmation resolves with
    let confirm_reason: 'done' | 'cancel' = 'done';
    const dialog_open = vi.fn(() => ({
        componentInstance: {
            event: confirm_reason === 'done' ? of({ reason: 'done' }) : NEVER,
            loading: { set: vi.fn() },
        },
        afterClosed: () =>
            confirm_reason === 'done' ? NEVER : of({ reason: 'cancel' }),
        close: vi.fn(),
    }));
    const createComponent = createComponentFactory({
        component: RoomBookingsApprovalsComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(EventsStateService, { pending, replace }),
            MockProvider(OrganisationService, {
                building: { timezone: 'Australia/Sydney' },
                module: vi.fn(() => ({ execute })),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
                time_format: 'h:mm a',
            } as any),
            MockProvider(MatDialog, { open: dialog_open } as any),
        ],
    });

    beforeEach(() => {
        execute.mockClear();
        replace.mockClear();
        confirm_reason = 'done';
        pending.set([]);
        spectator = createComponent();
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

        expect(execute).toHaveBeenCalledWith(
            'accept_event',
            ['room@example.com', 'event-1'],
            30 * 1000,
        );
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

        expect(execute).toHaveBeenCalledWith(
            'decline_event',
            ['room@example.com', 'event-1'],
            30 * 1000,
        );
        expect(replace).toHaveBeenCalledTimes(1);
        expect(replace.mock.calls[0][0].status).toBe('declined');
    });

    it('should not decline a booking when the user cancels', async () => {
        confirm_reason = 'cancel';
        const event = new CalendarEvent({
            id: 'event-1',
            mailbox: 'room@example.com',
        });

        await spectator.component.reject(event);

        expect(execute).not.toHaveBeenCalled();
    });

    it('should show the decline time in the building time zone', async () => {
        vi.mocked(spectator.inject(SettingsService).get).mockReturnValue(true);
        (spectator.inject(OrganisationService) as any).building = {
            timezone: 'Pacific/Honolulu',
        };
        const event = new CalendarEvent({
            id: 'event-1',
            title: 'Standup',
            mailbox: 'room@example.com',
            date: Date.UTC(2026, 0, 1, 0, 0),
        });

        await spectator.component.reject(event);

        const [, config] = dialog_open.mock.calls.at(-1) as any;
        expect(config.data.content).toContain('31 Dec 2025 2:00 PM');
    });
});
