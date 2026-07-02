import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { MapZoomControlsComponent } from '../lib/map-zoom-controls.component';

describe('MapZoomControlsComponent', () => {
    let spectator: Spectator<MapZoomControlsComponent>;

    const createComponent = createComponentFactory({
        component: MapZoomControlsComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should increase zoom by 10% when zoom in is pressed', () => {
        spectator.component.zoom.set(2);
        spectator.detectChanges();
        spectator.click(spectator.queryAll('button')[0]);
        expect(spectator.component.zoom()).toBeCloseTo(2.2, 6);
    });

    it('should decrease zoom when zoom out is pressed', () => {
        spectator.component.zoom.set(1.1);
        spectator.detectChanges();
        spectator.click(spectator.queryAll('button')[1]);
        expect(spectator.component.zoom()).toBeCloseTo(1, 6);
    });

    it('should increment reset counter when reset is pressed', () => {
        expect(spectator.component.reset()).toBe(0);
        spectator.click(spectator.queryAll('button')[2]);
        expect(spectator.component.reset()).toBe(1);
        spectator.click(spectator.queryAll('button')[2]);
        expect(spectator.component.reset()).toBe(2);
    });
});
