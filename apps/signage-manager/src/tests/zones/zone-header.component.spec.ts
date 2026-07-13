import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ZoneHeaderComponent } from '../../app/zones/zone-header.component';
import { SignageService } from '../../app/signage.service';

describe('ZoneHeaderComponent', () => {
    const filtered_zones = signal<any[]>([]);
    const service_stub = { filtered_zones };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        });
        return TestBed.createComponent(ZoneHeaderComponent).componentInstance;
    }

    beforeEach(() => {
        filtered_zones.set([]);
    });

    it('reports the number of filtered zones', () => {
        const component = make();
        expect(component.total_count()).toBe(0);

        filtered_zones.set([{ id: 'a' }, { id: 'b' }]);
        expect(component.total_count()).toBe(2);
    });
});
