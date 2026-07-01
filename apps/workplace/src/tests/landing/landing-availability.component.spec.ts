import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { ExploreSpacesService } from '@placeos/explore';
import { MockComponent, MockProvider } from 'ng-mocks';
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
                free_space_list: signal([]),
                loading_spaces: signal(false),
                level_occupancy: signal([]),
            }),
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(OrganisationService, {
                initialised: signal(true),
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
