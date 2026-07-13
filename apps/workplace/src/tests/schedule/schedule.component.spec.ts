import { computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingCardComponent } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { EventCardComponent } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { mockComponent } from '@placeos/common/tests';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
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
    const createComponent = createRoutingFactory({
        component: ScheduleComponent,
        declarations: [
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
                bookings: computed(() => []),
                filtered_bookings: computed(() => []),
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

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
