import { signal } from '@angular/core';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';

import { MapCanvasComponent, Polygon } from '../lib/map-canvas.component';

describe('MapCanvasComponent', () => {
    let spectator: Spectator<MapCanvasComponent>;
    const polygons = signal<Polygon[]>([]);
    const createComponent = createComponentFactory({
        component: MapCanvasComponent,
        providers: [{ provide: MAP_FEATURE_DATA, useValue: { polygons } }],
    });

    beforeEach(() => {
        polygons.set([]);
        spectator = createComponent();
    });

    it('should draw each polygon in map coordinates', () => {
        polygons.set([
            {
                name: 'Zone A',
                color: '#ff0000',
                points: [
                    [0, 0],
                    [1, 0],
                    [0.5, 1],
                ],
            },
        ]);
        spectator.detectChanges();
        const shape = spectator.query('polygon');
        expect(shape.getAttribute('points')).toBe('0,0 1,0 0.5,1');
        expect(shape.getAttribute('fill')).toBe('#ff000080');
        expect(shape.getAttribute('stroke')).toBeTruthy();
    });

    it('should not draw polygons without points', () => {
        polygons.set([{ name: 'Empty', color: '#00ff00', points: [] }]);
        spectator.detectChanges();
        expect(spectator.query('polygon')).toBeNull();
    });
});
