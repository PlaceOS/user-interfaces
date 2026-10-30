import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { HotkeysService } from 'libs/common/src/lib/hotkeys.service';
import { DynamicMapComponent } from '../lib/dynamic-map.component';

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
});
