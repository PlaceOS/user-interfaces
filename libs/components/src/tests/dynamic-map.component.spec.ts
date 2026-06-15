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
                    useValue: { listen: jest.fn(() => new Subscription()) },
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
});
