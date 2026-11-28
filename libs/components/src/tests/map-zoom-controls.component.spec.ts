import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { MapZoomControlsComponent } from '../lib/map-zoom-controls.component';

describe('MapZoomControlsComponent', () => {
    let spectator: Spectator<MapZoomControlsComponent>;

    const createComponent = createComponentFactory({
        component: MapZoomControlsComponent,
    });

    beforeEach(() => (spectator = createComponent()));

    it('should increase zoom by a quarter when zoom in is pressed', () => {
        spectator.component.zoom.set(2);
        spectator.detectChanges();
        spectator.click(spectator.queryAll('button')[0]);
        expect(spectator.component.zoom()).toBeCloseTo(2.5, 6);
    });

    it('should decrease zoom when zoom out is pressed', () => {
        spectator.component.zoom.set(1.25);
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

    it('should offer the 3D switch only for a map with a 3D view', () => {
        expect(spectator.query('[toggle-3d]')).toBeNull();
        spectator.setInput('can3d', true);
        expect(spectator.query('[toggle-3d]')).toHaveText('3D');
        expect(spectator.query('[rotate-left]')).toBeNull();
    });

    it('should switch between 2D and 3D', () => {
        spectator.setInput('can3d', true);
        spectator.click('[toggle-3d]');
        expect(spectator.component.mode()).toBe('3d');
        expect(spectator.query('[toggle-3d]')).toHaveText('2D');
        spectator.click('[toggle-3d]');
        expect(spectator.component.mode()).toBe('2d');
    });

    it('should offer the isometric lock only in 3D', () => {
        spectator.setInput('can3d', true);
        expect(spectator.query('[toggle-isometric]')).toBeNull();
        spectator.setInput('mode', '3d');
        spectator.click('[toggle-isometric]');
        expect(spectator.component.isometric()).toBe(true);
        spectator.click('[toggle-isometric]');
        expect(spectator.component.isometric()).toBe(false);
    });

    it('should turn the 3D view an eighth of a circle at a time', () => {
        const turns: number[] = [];
        spectator.component.rotate.subscribe((degrees) => turns.push(degrees));
        spectator.setInput({ can3d: true, mode: '3d' });
        spectator.click('[rotate-left]');
        spectator.click('[rotate-right]');
        expect(turns).toEqual([-45, 45]);
    });
});
