import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { ScheduleFiltersComponent } from '../../app/new-schedule/schedule-filters.component';
import { ScheduleSidebarComponent } from '../../app/new-schedule/schedule-sidebar.component';
import { ScheduleMobileCalendarComponent } from '../../app/new-schedule/schedule-mobile-calendar.component';
import { ScheduleComponent } from '../../app/new-schedule/schedule.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScheduleStateService } from '../../app/new-schedule/schedule-state.service';
import { BehaviorSubject } from 'rxjs';
import { EventCardComponent, EventFormService } from '@placeos/events';
import { BookingCardComponent } from '@placeos/bookings';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '@placeos/common';

describe('ScheduleComponent', () => {
    let spectator: SpectatorRouting<ScheduleComponent>;
    const createComponent = createRoutingFactory({
        component: ScheduleComponent,
        declarations: [
            MockComponent(ScheduleSidebarComponent),
            MockComponent(ScheduleMobileCalendarComponent),
            MockComponent(ScheduleFiltersComponent),
            MockComponent(EventCardComponent),
            MockComponent(BookingCardComponent),
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
        ],
        providers: [
            MockProvider(ScheduleStateService, {
                filtered_bookings: new BehaviorSubject([]),
                loading: new BehaviorSubject(false),
                date: new BehaviorSubject(0),
                toggleType: jest.fn(),
                setDate: jest.fn(),
            }),
            MockProvider(EventFormService, { newForm: jest.fn() }),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [MatProgressBarModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
