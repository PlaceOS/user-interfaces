import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { FooterMenuComponent } from "../../app/components/footer-menu.component";
import { TopbarComponent } from "../../app/components/topbar.component";
import { ScheduleFiltersComponent } from "../../app/new-schedule/schedule-filters.component";
import { ScheduleSidebarComponent } from "../../app/new-schedule/schedule-sidebar.component";
import { ScheduleMobileCalendarComponent } from "../../app/new-schedule/schedule-mobile-calendar.component";
import { ScheduleComponent } from "../../app/new-schedule/schedule.component";
import { EventCardComponent } from "../../app/components/event-card.component";
import { BookingCardComponent } from "../../app/components/booking-card.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ScheduleStateService } from "../../app/new-schedule/schedule-state.service";
import { BehaviorSubject } from "rxjs";

describe('ScheduleComponent', () => {
    let spectator: Spectator<ScheduleComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleComponent,
        declarations: [
            MockComponent(ScheduleSidebarComponent),
            MockComponent(ScheduleMobileCalendarComponent),
            MockComponent(ScheduleFiltersComponent),
            MockComponent(EventCardComponent),
            MockComponent(BookingCardComponent),
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent)
        ],
        providers: [
            { provide: ScheduleStateService, useValue: {
                filtered_bookings: new BehaviorSubject([]),
                loading: new BehaviorSubject(false),
                date: new BehaviorSubject(0),
                toggleType: jest.fn(),
                setDate: jest.fn()
            } }
        ],
        imports: [MatProgressBarModule]
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
