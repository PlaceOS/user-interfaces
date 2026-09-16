import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { BookingCardComponent } from '@placeos/bookings';
import { Booking, CalendarEvent, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { EventCardComponent } from '@placeos/events';
import { MockProvider, ngMocks } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { VirtualConciergeButtonComponent } from '../../app/components/virtual-concierge-button.component';
import { ScheduleDayViewComponent } from '../../app/schedule/schedule-day-view.component';
import { ScheduleFiltersComponent } from '../../app/schedule/schedule-filters.component';
import { ScheduleListViewComponent } from '../../app/schedule/schedule-list-view.component';
import { ScheduleSidebarComponent } from '../../app/schedule/schedule-sidebar.component';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';
import { ScheduleTopbarComponent } from '../../app/schedule/schedule-topbar.component';
import { ScheduleWeekViewComponent } from '../../app/schedule/schedule-week-view.component';
import { ScheduleComponent } from '../../app/schedule/schedule.component';

describe('ScheduleComponent', () => {
    let spectator: SpectatorRouting<ScheduleComponent>;
    const bookings = signal<(Booking | CalendarEvent)[]>([]);
    const createComponent = createRoutingFactory({
        component: ScheduleComponent,
        declarations: [
            mockComponent(VirtualConciergeButtonComponent),
            mockComponent(ScheduleSidebarComponent),
            mockComponent(ScheduleFiltersComponent),
            mockComponent(EventCardComponent),
            mockComponent(BookingCardComponent),
            mockComponent(TopbarComponent),
            mockComponent(FooterMenuComponent),
            mockComponent(ScheduleTopbarComponent),
            mockComponent(ScheduleListViewComponent),
            mockComponent(ScheduleWeekViewComponent),
            mockComponent(ScheduleDayViewComponent),
        ],
        providers: [
            MockProvider(ScheduleStateService, {
                bookings,
                filtered_bookings: bookings,
                loading: signal(false),
                date: signal(0),
                end_date: signal(null),
                toggleType: vi.fn(),
                setDate: vi.fn(),
                setEndDate: vi.fn(),
                setOptions: vi.fn(),
                startPolling: vi.fn(() => () => {}),
                getOptions: vi.fn(() => ({ period: 'day' })),
                triggerPoll: vi.fn(),
            } as any),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [MatProgressBarModule, FormsModule],
    });

    beforeEach(() => {
        bookings.set([]);
        spectator = createComponent();
    });

    it.each(['day', 'week'] as const)(
        'removes cancelled parking from the %s calendar after refresh and retains list history',
        async (view) => {
            const active = new Booking({
                id: 'parking-1',
                booking_type: 'parking',
            });
            const meeting = new CalendarEvent({ id: 'meeting-1' });
            bookings.set([active, meeting]);
            spectator.component.view.set(view);
            await spectator.fixture.whenStable();
            const calendar = () =>
                ngMocks.input(
                    view === 'day' ? 'schedule-day-view' : 'schedule-week-view',
                    'bookings',
                );
            expect(calendar()).toEqual([active, meeting]);

            const cancelled = new Booking({ ...active, deleted: true });
            const status_cancelled = new Booking({
                id: 'parking-2',
                booking_type: 'parking',
                status: 'cancelled',
            });
            bookings.set([cancelled, status_cancelled, meeting]);
            await spectator.fixture.whenStable();
            expect(calendar()).toEqual([meeting]);

            spectator.component.view.set('list');
            await spectator.fixture.whenStable();
            expect(ngMocks.input('schedule-list-view', 'bookings')).toEqual([
                cancelled,
                status_cancelled,
                meeting,
            ]);
            expect(cancelled.status).toBe('cancelled');
        },
    );
});
