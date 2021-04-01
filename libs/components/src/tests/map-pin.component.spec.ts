import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { MAP_FEATURE_DATA } from '../lib/interactive-map.component';
import { MapPinComponent } from '../lib/map-pin.component';

describe('MapPinComponent', () => {
    let spectator: Spectator<MapPinComponent>;
    const createComponent = createComponentFactory({
        component: MapPinComponent,
        providers: [
            { provide: MAP_FEATURE_DATA, useValue: {} }
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
