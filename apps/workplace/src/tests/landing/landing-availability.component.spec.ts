import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { IconComponent } from "@placeos/components";
import { MockComponent } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { LandingAvailabilityComponent } from "../../app/landing/landing-availability.component";
import { LandingStateService } from "../../app/landing/landing-state.service";

describe('LandingAvailabilityComponent', () => {
    let spectator: Spectator<LandingAvailabilityComponent>;
    const createComponent = createComponentFactory({
        component: LandingAvailabilityComponent,
        declarations: [
            MockComponent(IconComponent),
        ],
        providers: [
            { provide: LandingStateService, useValue: {
                free_spaces: new BehaviorSubject([]),
                level_occupancy: new BehaviorSubject([]),
                pollFreeSpaces: jest.fn(),
                stopPollingFreeSpaces: jest.fn()
            } }
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});