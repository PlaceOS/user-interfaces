import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { LandingAvailabilityComponent } from '../../app/landing/landing-availability.component';
import { LandingStateService } from '../../app/landing/landing-state.service';

describe('LandingAvailabilityComponent', () => {
    let spectator: Spectator<LandingAvailabilityComponent>;
    const createComponent = createComponentFactory({
        component: LandingAvailabilityComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(LandingStateService, {
                free_spaces: new BehaviorSubject([]),
                level_occupancy: new BehaviorSubject([]),
                pollFreeSpaces: jest.fn(),
                stopPollingFreeSpaces: jest.fn(),
            }),
            MockProvider(OrganisationService, {}),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
