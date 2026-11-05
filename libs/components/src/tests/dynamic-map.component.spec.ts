import { ElementRef, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { MAP_FEATURE_DATA, ViewerFeature } from '@placeos/common';
import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { DynamicMapComponent } from '../lib/dynamic-map.component';
import { MapViewer } from '../lib/map-viewer.class';

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
});
