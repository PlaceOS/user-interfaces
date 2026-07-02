import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';

import { MapCanvasComponent, Polygon } from '../lib/map-canvas.component';

describe('MapCanvasComponent', () => {
    let spectator: Spectator<MapCanvasComponent>;
    const polygons = signal<Polygon[]>([]);
    const context = {
        clearRect: jest.fn(),
        beginPath: jest.fn(),
        moveTo: jest.fn(),
        lineTo: jest.fn(),
        closePath: jest.fn(),
        fill: jest.fn(),
        stroke: jest.fn(),
        arc: jest.fn(),
        fillText: jest.fn(),
    };
    const test_polygon: Polygon = {
        name: 'Zone A',
        color: '#ff0000',
        points: [
            [0, 0],
            [1, 0],
            [1, 1],
        ],
    };
    const createComponent = createComponentFactory({
        component: MapCanvasComponent,
        providers: [
            {
                provide: MAP_FEATURE_DATA,
                useValue: { polygons, draw_labels: true, draw_points: true },
            },
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        polygons.set([]);
        jest.spyOn(
            HTMLCanvasElement.prototype,
            'getContext',
        ).mockReturnValue(context as any);
    });

    afterEach(() => jest.restoreAllMocks());

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should size the canvas from the zoom and ratio signals', () => {
        spectator = createComponent();
        const canvas = spectator.query('canvas') as HTMLCanvasElement;
        expect(canvas.style.width).toBe('10000%');
        expect(canvas.style.height).toBe('10000%');
        spectator.component.zoom.set(2);
        spectator.component.ratio.set(0.5);
        spectator.detectChanges();
        expect(canvas.style.width).toBe('20000%');
        expect(canvas.style.height).toBe('10000%');
    });

    it('should draw polygons with outline, points and label', () => {
        spectator = createComponent();
        polygons.set([test_polygon]);
        spectator.detectChanges();
        TestBed.flushEffects();
        expect(context.clearRect).toHaveBeenCalled();
        expect(context.fill).toHaveBeenCalled();
        expect(context.stroke).toHaveBeenCalled();
        expect(context.arc).toHaveBeenCalledTimes(3);
        expect(context.fillText).toHaveBeenCalledWith(
            'Zone A',
            expect.any(Number),
            expect.any(Number),
        );
    });

    it('should skip drawing points and labels when disabled', () => {
        spectator = createComponent({
            providers: [
                {
                    provide: MAP_FEATURE_DATA,
                    useValue: {
                        polygons,
                        draw_labels: false,
                        draw_points: false,
                    },
                },
            ],
        });
        polygons.set([test_polygon]);
        spectator.detectChanges();
        TestBed.flushEffects();
        expect(context.fill).toHaveBeenCalled();
        expect(context.arc).not.toHaveBeenCalled();
        expect(context.fillText).not.toHaveBeenCalled();
    });

    it('should not draw polygons without points', () => {
        spectator = createComponent();
        polygons.set([{ name: 'Empty', color: '#00ff00', points: [] }]);
        spectator.detectChanges();
        TestBed.flushEffects();
        expect(context.clearRect).toHaveBeenCalled();
        expect(context.fill).not.toHaveBeenCalled();
    });
});
