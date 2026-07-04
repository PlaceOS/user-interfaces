import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MAP_FEATURE_DATA } from '@placeos/common';

import { MapShowElementComponent } from '../../app/poi-manager/map-show-element.component';

describe('MapShowElementComponent', () => {
    const createComponent = createComponentFactory({
        component: MapShowElementComponent,
    });

    it('should mark itself as hovered when the feature data flags it', () => {
        const spectator: Spectator<MapShowElementComponent> = createComponent({
            providers: [{ provide: MAP_FEATURE_DATA, useValue: { hover: true } }],
        });
        expect(spectator.component.hover()).toBe(true);
        expect(spectator.query('.border-warning')).toBeTruthy();
        expect(spectator.query('.border-success')).toBeFalsy();
    });

    it('should default to the non-hovered success styling without data', () => {
        const spectator: Spectator<MapShowElementComponent> = createComponent({
            providers: [{ provide: MAP_FEATURE_DATA, useValue: null }],
        });
        expect(spectator.component.hover()).toBe(false);
        expect(spectator.query('.border-success')).toBeTruthy();
        expect(spectator.query('.border-warning')).toBeFalsy();
    });
});
