import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SignageGroupZoneSelectModalComponent } from '../../app/groups/signage-group-zone-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('SignageGroupZoneSelectModalComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const queryGroupZones = vi.fn();
    const service_stub = { queryGroupZones };
    const dialog_ref = { close: vi.fn() };
    let modal_data: { exclude_ids?: string[] };

    function build() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: MAT_DIALOG_DATA, useValue: modal_data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        }).overrideComponent(SignageGroupZoneSelectModalComponent, {
            set: { template: '', imports: [] },
        });
        const fixture = TestBed.createComponent(
            SignageGroupZoneSelectModalComponent,
        );
        fixture.detectChanges();
        return fixture.componentInstance;
    }

    const make = async () => {
        const component = build();
        await flush();
        return component;
    };

    beforeEach(() => {
        vi.clearAllMocks();
        queryGroupZones.mockReturnValue(
            Promise.resolve({
                data: [
                    { id: 'zone-1', name: 'Zone 1' },
                    { id: 'zone-2', name: 'Zone 2' },
                ],
                total: 2,
                next: null,
            }),
        );
        modal_data = {};
    });

    it('lists the zones the group can be given', async () => {
        const component = await make();

        expect(queryGroupZones).toHaveBeenCalledWith('');
        expect(component.list.items().map((zone: any) => zone.id)).toEqual([
            'zone-1',
            'zone-2',
        ]);
    });

    it('passes excluded zone ids to the tree', async () => {
        modal_data = { exclude_ids: ['zone-1'] };
        const component = await make();

        expect(component.exclude_ids).toEqual(['zone-1']);
    });

    it('shows no zones before the first page has loaded', () => {
        const component = build();

        expect(component.list.items()).toEqual([]);
    });

    it('closes with the selected zone', async () => {
        const component = await make();
        const zone = component.list.items()[0];

        component.selectZone(zone);

        expect(dialog_ref.close).toHaveBeenCalledWith(zone);
    });
});
