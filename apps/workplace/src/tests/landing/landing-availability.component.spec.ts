import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { ExploreSpacesService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { LandingAvailabilityComponent } from '../../app/landing/landing-availability.component';
import { LandingStateService } from '../../app/landing/landing-state.service';

describe('LandingAvailabilityComponent', () => {
    let spectator: Spectator<LandingAvailabilityComponent>;
    const createComponent = createComponentFactory({
        component: LandingAvailabilityComponent,
        declarations: [MockComponent(IconComponent)],
        componentProviders: [
            MockProvider(ExploreSpacesService, { bookSpace: jest.fn() }),
        ],
        providers: [
            MockProvider(LandingStateService, {
                free_space_list: new BehaviorSubject([]),
                loading_spaces: new BehaviorSubject(false),
                level_occupancy: new BehaviorSubject([]),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(OrganisationService, {
                initialised: of(true),
                buildings: [],
                organisation: {},
            } as any),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
