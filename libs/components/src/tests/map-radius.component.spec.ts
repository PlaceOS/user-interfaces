import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { MAP_FEATURE_DATA } from '../lib/interactive-map.component';
import { MapRadiusComponent } from '../lib/map-radius.component';

describe('MapRadiusComponent', () => {
    let spectator: Spectator<MapRadiusComponent>;
    const createComponent = createComponentFactory({
        component: MapRadiusComponent,
        providers: [
            { provide: MAP_FEATURE_DATA, useValue: {} }
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
