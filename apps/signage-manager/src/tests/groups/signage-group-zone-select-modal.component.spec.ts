import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignageGroupZoneSelectModalComponent } from '../../app/groups/signage-group-zone-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('SignageGroupZoneSelectModalComponent', () => {
    const search_group_zones = jest.fn();
    const service_stub = { searchGroupZones: search_group_zones };
    let modal_data: { exclude_ids?: string[] };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
            ],
        }).overrideComponent(SignageGroupZoneSelectModalComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupZoneSelectModalComponent)
            .componentInstance;
    }

    beforeEach(() => {
        jest.clearAllMocks();
        search_group_zones.mockResolvedValue([]);
        modal_data = {};
    });

    it('shows no zones before the search resource has loaded', () => {
        const component = make();
        expect(component.zones()).toEqual([]);
    });

    it('filters out zones whose id is excluded', () => {
        modal_data = { exclude_ids: ['zone-1'] };
        const component = make();
        (component as any)._zones.value.set([
            { id: 'zone-1', name: 'Zone 1' },
            { id: 'zone-2', name: 'Zone 2' },
        ]);

        expect(component.zones().map((zone: any) => zone.id)).toEqual([
            'zone-2',
        ]);
    });

    it('returns every loaded zone when nothing is excluded', () => {
        const component = make();
        (component as any)._zones.value.set([
            { id: 'zone-1', name: 'Zone 1' },
            { id: 'zone-2', name: 'Zone 2' },
        ]);

        expect(component.zones().length).toBe(2);
    });
});
