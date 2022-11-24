import { createRoutingFactory, SpectatorRouting } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { BookingCardComponent } from "@placeos/bookings";
import { EventCardComponent } from "@placeos/events";
import { LandingStateService } from "../../app/landing/landing-state.service";
import { LandingUpcomingComponent } from "../../app/landing/landing-upcoming.component";
import { MatDialog } from "@angular/material/dialog";
import { SettingsService } from "@placeos/common";

describe('LandingUpcomingComponent', () => {
    let spectator: SpectatorRouting<LandingUpcomingComponent>;
    const createComponent = createRoutingFactory({
        component: LandingUpcomingComponent,
        declarations: [
            MockComponent(EventCardComponent),
            MockComponent(BookingCardComponent),
        ],
        providers: [
            { provide: MatDialog, useValue: { open: jest.fn() } },
            { provide: LandingStateService, useValue: {
                upcoming_events: new BehaviorSubject([]),
                refreshUpcomingEvents: jest.fn(),
                pollUpcomingEvents: jest.fn(),
                stopPollingUpcomingEvents: jest.fn()
            } },
            { provide: SettingsService, useValue: { get: jest.fn() } }
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});