import { createRoutingFactory, SpectatorRouting } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { BookingCardComponent } from "../../app/components/booking-card.component";
import { EventCardComponent } from "../../app/components/event-card.component";
import { LandingStateService } from "../../app/landing/landing-state.service";
import { LandingUpcomingComponent } from "../../app/landing/landing-upcoming.component";

describe('LandingUpcomingComponent', () => {
    let spectator: SpectatorRouting<LandingUpcomingComponent>;
    const createComponent = createRoutingFactory({
        component: LandingUpcomingComponent,
        declarations: [
            MockComponent(EventCardComponent),
            MockComponent(BookingCardComponent),
        ],
        providers: [
            { provide: LandingStateService, useValue: {
                upcoming_events: new BehaviorSubject([]),
                pollUpcomingEvents: jest.fn(),
                stopPollingUpcomingEvents: jest.fn()
            } }
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    })
});