import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { ZoneSelectModalComponent } from '../../app/shared/zone-select-modal.component';
import { SignageService } from '../../app/signage.service';

describe('ZoneSelectModalComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const querySelectableZones = vi.fn();
    const zoneChildren = vi.fn();
    const root_zones = signal<any[]>([]);
    const service = { querySelectableZones, root_zones, zoneChildren };
    const dialog_ref = { close: vi.fn() };

    beforeEach(async () => {
        vi.clearAllMocks();
        root_zones.set([
            { id: 'z2', name: 'Rooftop' },
            { id: 'z1', name: 'level-1', display_name: 'Level 1' },
        ]);
        querySelectableZones.mockReturnValue(
            Promise.resolve({
                data: [],
                total: 0,
                next: null,
            }),
        );
        zoneChildren.mockResolvedValue([]);
        await TestBed.configureTestingModule({
            imports: [ZoneSelectModalComponent],
            providers: [
                { provide: SignageService, useValue: service },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(ZoneSelectModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
    });

    it('uses the same roots and child loader as the zones sidebar', async () => {
        const fixture = TestBed.createComponent(ZoneSelectModalComponent);
        fixture.detectChanges();
        await flush();

        expect(fixture.componentInstance.roots()).toEqual(root_zones());
        expect(querySelectableZones).not.toHaveBeenCalled();

        await fixture.componentInstance.loadChildren('z1');

        expect(zoneChildren).toHaveBeenCalledWith('z1');
    });

    it('defaults to the root zone', async () => {
        const fixture = TestBed.createComponent(ZoneSelectModalComponent);

        await fixture.whenStable();

        expect(fixture.componentInstance.selected_zone()).toBe(root_zones()[0]);
    });

    it('queries within the selected zone', async () => {
        const fixture = TestBed.createComponent(ZoneSelectModalComponent);
        fixture.detectChanges();
        fixture.componentInstance.selected_zone.set({ id: 'z1' } as any);
        fixture.componentInstance.list.search.set(' lobby ');
        await new Promise((resolve) => setTimeout(resolve, 450));

        expect(querySelectableZones).toHaveBeenCalledWith(' lobby ', 'z1');
    });

    it('closes with the confirmed zone id', () => {
        const fixture = TestBed.createComponent(ZoneSelectModalComponent);
        fixture.componentInstance.selected_zone.set({ id: 'z1' } as any);

        fixture.componentInstance.addZone();

        expect(dialog_ref.close).toHaveBeenCalledWith('z1');
    });
});
