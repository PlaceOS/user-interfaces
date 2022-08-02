import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTooltipComponent, MAP_FEATURE_DATA } from '@placeos/components';
import { set } from 'date-fns';
import { MockComponent } from 'ng-mocks';

import { ExploreDeskInfoComponent } from '../lib/explore-desk-info.component';

describe('ExploreDeskInfoComponent', () => {
    let spectator: Spectator<ExploreDeskInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreDeskInfoComponent,
        declarations: [MockComponent(CustomTooltipComponent)],
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
