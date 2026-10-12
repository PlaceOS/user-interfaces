import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SignageContextService } from '../../app/signage-context.service';
import { SignageZoneService } from '../../app/zones/signage-zone.service';
import { ZoneHeaderComponent } from '../../app/zones/zone-header.component';

describe('ZoneHeaderComponent', () => {
    const filtered_zones = signal<{ id: string }[]>([]);
    const signage_zone_count = signal<number | null>(0);
    const selected_zone = signal<{ id: string } | null>(null);
    const zone_search_term = signal('');
    const can_manage_zones = signal(false);
    const add_zone = vi.fn();
    const navigate = vi.fn();
    const context_stub = { can_manage_zones };
    const zone_stub = {
        filtered_zones,
        signage_zone_count,
        selected_zone,
        zone_search_term,
        addZone: add_zone,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageContextService, useValue: context_stub },
                { provide: SignageZoneService, useValue: zone_stub },
                { provide: Router, useValue: { navigate } },
            ],
        });
        return TestBed.createComponent(ZoneHeaderComponent).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        filtered_zones.set([]);
        signage_zone_count.set(0);
        selected_zone.set(null);
        zone_search_term.set('');
        can_manage_zones.set(false);
        add_zone.mockResolvedValue(null);
    });

    // The tree also lists untagged parents, so it is not the zone count
    it('reports the server total of signage zones', () => {
        const component = make();
        filtered_zones.set([{ id: 'org' }, { id: 'building' }, { id: 'a' }]);
        signage_zone_count.set(1);

        expect(component.total_count()).toBe(1);
    });

    it('reports the number of search results while searching a zone', () => {
        const component = make();
        signage_zone_count.set(40);
        selected_zone.set({ id: 'building' });
        zone_search_term.set('lobby');
        filtered_zones.set([{ id: 'a' }, { id: 'b' }]);

        expect(component.total_count()).toBe(2);
    });

    it('shows zone management only to signage managers', () => {
        const component = make();
        expect(component.can_manage_zones()).toBe(false);

        can_manage_zones.set(true);
        expect(component.can_manage_zones()).toBe(true);
    });

    it('opens a newly created zone', async () => {
        add_zone.mockResolvedValue({ id: 'zone-1' });
        const component = make();

        await component.addZone();

        expect(add_zone).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith(['/zones', 'zone-1']);
    });
});
