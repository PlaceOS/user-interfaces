import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { DynamicMapComponent } from '../lib/dynamic-map.component';
import { MapViewer } from '../lib/map-viewer.class';

const state = {
    viewer_3d: null as Record<string, unknown> | null,
    fail_3d: false,
};

class Fake3DViewer {
    public zoom = 1;
    public center = { x: 0.5, y: 0.5 };
    public tilt = 48;
    public bearing = 0;
    public aspect = 1;
    public map = { element_bounds: new Map() };
    public destroy = vi.fn();
    public setMap = vi.fn(async () => undefined);
    public isometric = false;
    public setAngles = vi.fn();
    public turnBy = vi.fn();
    public setIsometric = vi.fn((isometric: boolean) => {
        this.isometric = isometric;
    });
    public resetView = vi.fn();
    public setZoom = vi.fn();
    public setCenter = vi.fn();
    public setStyles = vi.fn();
    public setOverlays = vi.fn();
    public setActions = vi.fn();
    public setOptions = vi.fn();
    public setFixedResolution = vi.fn();
    public setDebug = vi.fn();
    constructor() {
        if (state.fail_3d) throw new Error('No WebGL');
        state.viewer_3d = this as unknown as Record<string, unknown>;
    }
}

describe('DynamicMapComponent in 3D', () => {
    const src = signal('/maps/level.svg');
    const mode = signal<'2d' | '3d'>('2d');
    const isometric = signal(false);

    /** Let the mode effect run and the viewer it asks for arrive. */
    async function settle() {
        TestBed.flushEffects();
        for (let i = 0; i < 5; i++) await Promise.resolve();
        TestBed.flushEffects();
    }

    function createMap() {
        const component = TestBed.runInInjectionContext(() =>
            Object.assign(new DynamicMapComponent(), { src, mode, isometric }),
        );
        component['_map_container'] = (() => ({
            nativeElement: document.createElement('div'),
        })) as never;
        component['_load3DViewer'] = (async () => Fake3DViewer) as never;
        return component;
    }

    beforeEach(() => {
        state.viewer_3d = null;
        state.fail_3d = false;
        mode.set('2d');
        isometric.set(false);
        vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
            null,
        );
        vi.stubGlobal(
            'ResizeObserver',
            class {
                public observe() {}
                public disconnect() {}
            },
        );
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => ({ ok: false })),
        );
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HotkeysService,
                    useValue: { listen: vi.fn(() => new Subscription()) },
                },
            ],
        });
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it('should replace the 2D viewer with the 3D one and load the map into it', async () => {
        const component = createMap();
        await settle();
        const flat = component['_map_viewer'] as MapViewer;
        expect(flat).toBeInstanceOf(MapViewer);
        const destroy = vi.spyOn(flat, 'destroy');

        mode.set('3d');
        await settle();
        expect(destroy).toHaveBeenCalled();
        expect(component['_map_viewer']).toBe(state.viewer_3d);
        expect(state.viewer_3d?.['setMap']).toHaveBeenCalledWith(
            '/maps/level.svg',
        );

        mode.set('2d');
        await settle();
        expect(state.viewer_3d?.['destroy']).toHaveBeenCalled();
        expect(component['_map_viewer']).toBeInstanceOf(MapViewer);
        component.ngOnDestroy();
    });

    it('should stay in 2D and say so when the 3D viewer cannot start', async () => {
        state.fail_3d = true;
        const component = createMap();
        const failed = vi.fn();
        component.mode3dFailed.subscribe(failed);

        mode.set('3d');
        await settle();

        expect(failed).toHaveBeenCalledTimes(1);
        expect(component['_map_viewer']).toBeInstanceOf(MapViewer);
        component.ngOnDestroy();
    });

    it('should turn only the 3D view', async () => {
        const component = createMap();
        await settle();
        component.rotateBy(45);
        mode.set('3d');
        await settle();
        component.rotateBy(45);
        expect(state.viewer_3d?.['turnBy']).toHaveBeenCalledTimes(1);
        expect(state.viewer_3d?.['turnBy']).toHaveBeenCalledWith(45);
        component.ngOnDestroy();
    });

    it('should pan with the arrow keys along the screen of a turned view', async () => {
        const component = createMap();
        mode.set('3d');
        await settle();
        state.viewer_3d!['bearing'] = 90;
        const key = (key: string) =>
            component.onKeydown(
                new KeyboardEvent('keydown', { key, cancelable: true }),
            );
        key('ArrowRight');
        expect(component.center().x).toBeCloseTo(0.5);
        expect(component.center().y).toBeCloseTo(0.6);
        key('ArrowUp');
        expect(component.center().x).toBeCloseTo(0.6);
        expect(component.center().y).toBeCloseTo(0.6);
        component.ngOnDestroy();
    });

    it('should pan straight across the screen of a wide map turned to an angle', async () => {
        const component = createMap();
        mode.set('3d');
        await settle();
        // A map twice as wide as it is deep, turned 45 degrees
        Object.assign(state.viewer_3d!, { bearing: 45, aspect: 2 });
        component.onKeydown(
            new KeyboardEvent('keydown', {
                key: 'ArrowRight',
                cancelable: true,
            }),
        );
        // In map units, the move is along the screen's right: 45 degrees
        const { x, y } = component.center();
        expect((y - 0.5) / 2 / (x - 0.5)).toBeCloseTo(1);
        component.ngOnDestroy();
    });

    it('should lock the 3D view to isometric', async () => {
        const component = createMap();
        mode.set('3d');
        await settle();
        expect(state.viewer_3d?.['setIsometric']).toHaveBeenLastCalledWith(
            false,
        );
        isometric.set(true);
        await settle();
        expect(state.viewer_3d?.['setIsometric']).toHaveBeenLastCalledWith(
            true,
        );
        component.ngOnDestroy();
    });
});
