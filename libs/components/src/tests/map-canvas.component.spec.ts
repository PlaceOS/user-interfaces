import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';

import { MapCanvasComponent, Polygon } from '../lib/map-canvas.component';

describe('MapCanvasComponent', () => {
    let spectator: Spectator<MapCanvasComponent>;
    let resize_callback: ResizeObserverCallback;
    const polygons = signal<Polygon[]>([]);
    const context = {
        clearRect: vi.fn(),
        beginPath: vi.fn(),
        moveTo: vi.fn(),
        lineTo: vi.fn(),
        closePath: vi.fn(),
        fill: vi.fn(),
        stroke: vi.fn(),
        arc: vi.fn(),
        fillText: vi.fn(),
        setTransform: vi.fn(),
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
        vi.clearAllMocks();
        polygons.set([]);
        vi.stubGlobal(
            'ResizeObserver',
            class {
                constructor(callback: ResizeObserverCallback) {
                    resize_callback = callback;
                }
                public observe() {}
                public disconnect() {}
            },
        );
        vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
            context as any,
        );
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it('should create component', () => {
        spectator = createComponent();
        expect(spectator.component).toBeTruthy();
    });

    it('should size its backing buffer from its rendered size', () => {
        vi.stubGlobal('devicePixelRatio', 2);
        spectator = createComponent();
        const canvas = spectator.query('canvas') as HTMLCanvasElement;
        Object.defineProperties(canvas, {
            clientWidth: { value: 400 },
            clientHeight: { value: 200 },
        });

        expect(resize_callback).toBeTypeOf('function');
        resize_callback([], {} as ResizeObserver);

        expect(canvas.width).toBe(800);
        expect(canvas.height).toBe(400);
        expect(context.setTransform).toHaveBeenCalledWith(2, 0, 0, 2, 0, 0);
    });

    it('should cap its backing buffer at the map texture limits', () => {
        vi.stubGlobal('devicePixelRatio', 2);
        spectator = createComponent();
        const canvas = spectator.query('canvas') as HTMLCanvasElement;
        Object.defineProperties(canvas, {
            clientWidth: { value: 10_000 },
            clientHeight: { value: 5_000 },
        });

        resize_callback([], {} as ResizeObserver);

        expect(canvas.width).toBeLessThanOrEqual(8192);
        expect(canvas.height).toBeLessThanOrEqual(8192);
        expect(canvas.width * canvas.height).toBeLessThanOrEqual(16_000_000);
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
