import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SignageService } from '../../app/signage.service';
import { ZoneHeaderComponent } from '../../app/zones/zone-header.component';

describe('ZoneHeaderComponent', () => {
    const filtered_zones = signal<any[]>([]);
    const can_manage_zones = signal(false);
    const add_zone = vi.fn();
    const navigate = vi.fn();
    const service_stub = {
        filtered_zones,
        can_manage_zones,
        addZone: add_zone,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: Router, useValue: { navigate } },
            ],
        });
        return TestBed.createComponent(ZoneHeaderComponent).componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        filtered_zones.set([]);
        can_manage_zones.set(false);
        add_zone.mockResolvedValue(null);
    });

    it('reports the number of filtered zones', () => {
        const component = make();
        expect(component.total_count()).toBe(0);

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
