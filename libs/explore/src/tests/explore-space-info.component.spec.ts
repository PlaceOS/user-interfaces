import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAP_FEATURE_DATA, SettingsService } from '@placeos/common';
import { MockProvider, ngMocks } from 'ng-mocks';

import { ExploreSpaceInfoComponent } from '../lib/explore-space-info.component';

describe('ExploreSpaceInfoComponent', () => {
    let spectator: Spectator<ExploreSpaceInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreSpaceInfoComponent,
        ...ngMocks.guts(null),
        providers: [
            MockProvider(MAP_FEATURE_DATA, { events: [] }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
