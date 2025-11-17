import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ngMocks } from 'ng-mocks';

import { MAP_FEATURE_DATA } from '@placeos/common';
import { ExploreDeskInfoComponent } from '../lib/explore-desk-info.component';

describe('ExploreDeskInfoComponent', () => {
    let spectator: Spectator<ExploreDeskInfoComponent>;
    const createComponent = createComponentFactory({
        component: ExploreDeskInfoComponent,
        ...ngMocks.guts(null),
        providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
