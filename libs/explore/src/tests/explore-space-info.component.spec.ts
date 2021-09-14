import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTooltipComponent, MAP_FEATURE_DATA } from '@placeos/components';
import { Space } from '@placeos/spaces';

import { ExploreSpaceInfoComponent } from '../lib/explore-space-info.component';

describe('ExploreSpaceInfoComponent', () => {
    let spectator: Spectator<ExploreSpaceInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreSpaceInfoComponent,
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

});
