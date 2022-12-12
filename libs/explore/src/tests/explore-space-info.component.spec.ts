import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { CustomTooltipComponent, MAP_FEATURE_DATA } from '@placeos/components';
import { Space } from '@placeos/spaces';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ExploreSpaceInfoComponent } from '../lib/explore-space-info.component';

describe('ExploreSpaceInfoComponent', () => {
    let spectator: Spectator<ExploreSpaceInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreSpaceInfoComponent,
        declarations: [MockComponent(CustomTooltipComponent)],
        providers: [
            MockProvider(MAP_FEATURE_DATA, {}),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
