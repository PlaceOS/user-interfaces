import { ElementRef, signal, WritableSignal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import {
    MAP_FEATURE_DATA,
    Point,
    ViewAction,
    ViewerFeature,
    ViewerStyles,
} from '@placeos/common';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { DynamicMapComponent } from '../lib/dynamic-map.component';
import { MapViewer } from '../lib/map-viewer.class';

/** Viewer stand-in that keeps the view state. Other methods do nothing. */
function fakeViewer(overrides: Record<string, unknown> = {}) {
    const viewer = {
        zoom: 1,
        center: { x: 0.5, y: 0.5 } as Point,
        setZoom(zoom: number) {
            this.zoom = zoom;
        },
        setCenter(point: Point) {
            this.center = point;
        },
        setStyles: vi.fn(),
        setOverlays: vi.fn(),
        setActions: vi.fn(),
        ...overrides,
    };
    return new Proxy(viewer, {
        get: (target, key) => (key in target ? target[key] : () => null),
    }) as typeof viewer & MapViewer;
}

/**
 * Make a map that uses `viewer`. Each entry of `inputs` replaces the input
 * of that name, so the test can change it.
 */
function createMap(
    viewer: MapViewer,
    inputs: Record<string, WritableSignal<unknown>>,
) {
    const component = TestBed.runInInjectionContext(() =>
        Object.assign(new DynamicMapComponent(), inputs),
    );
    component['_map_viewer'] = viewer;
    TestBed.flushEffects();
    return component;
}

describe('DynamicMapComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HotkeysService,
                    useValue: { listen: vi.fn(() => new Subscription()) },
                },
            ],
        });
    });

    it('should not retrigger injector updates from its own injector signal write', () => {
        const features = signal([
            {
                location: 'desk-1',
                track_id: 'feature-1',
                content: '<span>Desk</span>',
            },
        ]);
        const component = TestBed.runInInjectionContext(() => {
            const instance = new DynamicMapComponent();
            (instance as any).features = features;
            return instance;
        });

        TestBed.flushEffects();

        const injectors = component.injectors();
        expect(injectors).toHaveLength(1);

        TestBed.flushEffects();

        expect(component.injectors()).toBe(injectors);

        component.ngOnDestroy();
    });

    it('should give a feature a new injector only when its data changes', () => {
        const desks = (date: number) => [
            {
                location: 'desk-1',
                track_id: 'desk-1',
                content: '',
                data: { date },
            },
            { location: 'desk-2', content: '', data: { date: 1 } },
        ];
        const features = signal<ViewerFeature[]>(desks(1));
        const component = TestBed.runInInjectionContext(() =>
            Object.assign(new DynamicMapComponent(), { features }),
        );
        TestBed.flushEffects();
        const [, untracked_desk] = component.injectors();

        features.set(desks(2));
        TestBed.flushEffects();

        const [tracked_desk, same_desk] = component.injectors();
        expect(tracked_desk.get(MAP_FEATURE_DATA).date).toBe(2);
        expect(same_desk).toBe(untracked_desk);
        component.ngOnDestroy();
    });

    it('should show HTML features with the sanitised element', () => {
        const component = TestBed.runInInjectionContext(
            () => new DynamicMapComponent(),
        );
        const setOverlays = vi.fn();
        component['_map_viewer'] = {
            setOverlays,
        } as Partial<MapViewer> as MapViewer;
        const rendered = document.createElement('div');

        component['_applyOverlays'](
            [
                {
                    location: 'desk-1',
                    content: '<img src="x" onerror="alert(1)">',
                },
            ],
            [],
            [new ElementRef(rendered)],
        );

        expect(setOverlays.mock.calls[0][0][0].contents).toBe(rendered);
        component['_map_viewer'] = null;
        component.ngOnDestroy();
    });

    it('should render label content as text, not HTML', () => {
        const component = TestBed.runInInjectionContext(
            () => new DynamicMapComponent(),
        );
        const setOverlays = vi.fn();
        (component as any)._map_viewer = { setOverlays };

        (component as any)._applyOverlays(
            [],
            [
                {
                    location: 'zone-1',
                    content: '<img src="x" onerror="alert(1)">',
                    css_class: ['zone'],
                },
            ],
            [],
        );

        const label = setOverlays.mock.calls[0][0][0].contents as HTMLElement;
        expect(label.className).toBe('map-label zone');
        expect(label.textContent).toBe('<img src="x" onerror="alert(1)">');
        expect(label.children).toHaveLength(0);
        (component as any)._map_viewer = null;
        component.ngOnDestroy();
    });

    it('should write limited zoom back and zoom or pan from the keyboard', () => {
        const component = TestBed.runInInjectionContext(
            () => new DynamicMapComponent(),
        );
        const viewer = {
            zoom: 1,
            center: { x: 0.5, y: 0.5 },
            setZoom(zoom: number) {
                this.zoom = Math.max(1, Math.min(10, zoom));
            },
            setCenter(point: { x: number; y: number }) {
                this.center = point;
            },
        };
        // Other viewer methods do nothing
        (component as any)._map_viewer = new Proxy(viewer, {
            get: (target, key) => (key in target ? target[key] : () => null),
        });
        component.zoom.set(16);
        TestBed.flushEffects();
        expect(component.zoom()).toBe(10);

        component.zoom.set(2);
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowRight',
            cancelable: true,
        });
        component.onKeydown(event);
        expect(event.defaultPrevented).toBe(true);
        expect(component.center()).toEqual({ x: 0.55, y: 0.5 });
        component.onKeydown(new KeyboardEvent('keydown', { key: '-' }));
        expect(component.zoom()).toBeCloseTo(2 / 1.1);
        (component as any)._map_viewer = null;
        component.ngOnDestroy();
    });

    it('should show an error instead of the old map for an unsupported source', () => {
        const component = TestBed.runInInjectionContext(
            () => new DynamicMapComponent(),
        );
        (component as any)._loadMap('https://cdn.example/map.png');
        expect(component.error()).toBe(true);
        expect(component.loading()).toBe(false);
        component.ngOnDestroy();
    });

    it('should give styles to the viewer as CSS that overrides inline styles', () => {
        const viewer = fakeViewer();
        const styles = signal<ViewerStyles>({
            '#desk-1': { fill: 'red', strokeWidth: 2 },
            '#zones': { display: 'none !important' },
        });
        const component = createMap(viewer, { styles });

        expect(viewer.setStyles).toHaveBeenLastCalledWith({
            '#desk-1': 'fill: red !important; stroke-width: 2 !important',
            '#zones': 'display: none !important',
        });
        component.ngOnDestroy();
    });

    it('should listen for the pointer events of each action', () => {
        const viewer = fakeViewer();
        const callback = vi.fn();
        const actions = signal<ViewAction[]>([
            {
                id: 'desk-1',
                action: ['mousedown', 'touchstart', 'enter'],
                priority: 2,
                callback,
            },
            { id: 'desk-2', action: '*', callback },
            { id: 'desk-3', action: 'dblclick', callback },
            // No element or no events, so nothing to listen for
            { id: '', action: 'click', callback },
            { id: 'desk-4', action: [], callback },
        ]);
        const component = createMap(viewer, { actions });

        const map_actions = viewer.setActions.mock.lastCall[0];
        expect(map_actions).toEqual([
            {
                ref: 'desk-1',
                events: ['pointerdown', 'pointerenter'],
                priority: 2,
                callback: expect.any(Function),
            },
            {
                ref: 'desk-2',
                events: [
                    'click',
                    'pointerdown',
                    'pointerup',
                    'pointerenter',
                    'pointerleave',
                ],
                priority: undefined,
                callback: expect.any(Function),
            },
            {
                ref: 'desk-3',
                events: ['dblclick'],
                priority: undefined,
                callback: expect.any(Function),
            },
        ]);

        map_actions[0].callback({ x: 0.25, y: 0.75 });
        expect(callback).toHaveBeenCalledWith(
            expect.objectContaining({
                detail: { point: { x: 0.25, y: 0.75 } },
            }),
            { x: 0.25, y: 0.75 },
        );
        component.ngOnDestroy();
    });

    it('should size hover and full size features to their element', () => {
        const component = TestBed.runInInjectionContext(
            () => new DynamicMapComponent(),
        );
        const viewer = fakeViewer();
        component['_map_viewer'] = viewer;
        const element = () => new ElementRef(document.createElement('div'));

        component['_applyOverlays'](
            [
                { location: 'desk-1', hover: true },
                { location: 'desk-2', full_size: true, z_index: 5 },
                { location: 'desk-3' },
                // No location, or no rendered element, so not shown
                { location: '' },
                { location: 'desk-5' },
            ],
            [],
            [element(), element(), element(), element()],
        );

        const overlays = viewer.setOverlays.mock.lastCall[0];
        expect(
            overlays.map(({ ref, type, scale_with_zoom, z_index }) => ({
                ref,
                type,
                scale_with_zoom,
                z_index,
            })),
        ).toEqual([
            {
                ref: 'desk-1',
                type: 'box',
                scale_with_zoom: false,
                z_index: undefined,
            },
            { ref: 'desk-2', type: 'box', scale_with_zoom: false, z_index: 5 },
            {
                ref: 'desk-3',
                type: 'point',
                scale_with_zoom: true,
                z_index: undefined,
            },
        ]);
        component.ngOnDestroy();
    });

    it('should reset the view for a new map and ignore a map that loads late', async () => {
        const loads: Array<() => void> = [];
        const bounds = { x: 0.1, y: 0.2, w: 0.05, h: 0.05 };
        const viewer = fakeViewer({
            map: { element_bounds: new Map([['desk-1', bounds]]) },
            setMap: vi.fn(
                () => new Promise<void>((resolve) => loads.push(resolve)),
            ),
        });
        const src = signal('level-1.svg');
        const component = createMap(viewer, { src });
        const map_info = vi.fn();
        component.mapInfo.subscribe(map_info);
        expect(viewer.setMap).toHaveBeenLastCalledWith('level-1.svg');
        expect(component.loading()).toBe(true);

        component.zoom.set(3);
        component.center.set({ x: 0.2, y: 0.3 });
        TestBed.flushEffects();
        src.set('level-2.svg');
        TestBed.flushEffects();
        expect(component.zoom()).toBe(1);
        expect(component.center()).toEqual({ x: 0.5, y: 0.5 });

        // The first map finishes after the source changed
        loads[0]();
        await new Promise((resolve) => setTimeout(resolve));
        expect(component.loading()).toBe(true);
        expect(map_info).not.toHaveBeenCalled();

        loads[1]();
        await vi.waitFor(() => expect(component.loading()).toBe(false));
        expect(map_info).toHaveBeenCalledExactlyOnceWith({ 'desk-1': bounds });
        component.ngOnDestroy();
    });
});
