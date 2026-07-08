import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { InteractiveMapComponent } from '@placeos/components';
import {
    ExploreStateService,
    ExploreZoomControlComponent,
} from '@placeos/explore';
import { MockComponent, MockProvider } from 'ng-mocks';

import { EventsStateService } from '../../app/day-view/events-state.service';
import { FacilitiesMapComponent } from '../../app/facilities/facilities-map.component';

describe('FacilitiesMapComponent', () => {
    let spectator: Spectator<FacilitiesMapComponent>;
    let zones: ReturnType<typeof signal<string[]>>;
    let set_level: any;

    const createComponent = createComponentFactory({
        component: FacilitiesMapComponent,
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(ExploreZoomControlComponent),
        ],
        providers: [
            MockProvider(ExploreStateService, {
                map_url: signal('map.svg') as any,
                map_styles: signal({}) as any,
                map_positions: signal({ zoom: 1, center: {} }) as any,
                map_features: signal([]) as any,
                map_actions: signal([]) as any,
                setLevel: (...args: any[]) => set_level(...args),
            } as any),
            MockProvider(EventsStateService, {
                get zones() {
                    return zones;
                },
            } as any),
        ],
    });

    beforeEach(() => {
        set_level = vi.fn();
        zones = signal([]);
        spectator = createComponent();
    });

    it('should not set a level when there are no active zones', () => {
        spectator.detectChanges();
        expect(set_level).not.toHaveBeenCalled();
    });

    it('should set the explore level to the first active zone', async () => {
        zones.set(['zone-1', 'zone-2']);
        spectator.detectChanges();
        await spectator.fixture.whenStable();

        expect(set_level).toHaveBeenCalledWith('zone-1');
    });

    it('should expose the explore map signals to the template', () => {
        expect(spectator.component.url()).toBe('map.svg');
        expect(spectator.component.positions().zoom).toBe(1);
    });
});
