import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { SignageGroupZonesComponent } from '../../app/groups/signage-group-zones.component';
import { SignageGroupZoneSelectModalComponent } from '../../app/groups/signage-group-zone-select-modal.component';
import { SignageGroupPermissionsModalComponent } from '../../app/groups/signage-group-permissions-modal.component';
import { SignageService } from '../../app/signage.service';

function dialogRef(value: unknown) {
    return {
        afterClosed: () => ({
            subscribe: (handler: (value: unknown) => void) => {
                Promise.resolve().then(() => handler(value));
                return { unsubscribe: vi.fn() };
            },
        }),
    };
}

describe('SignageGroupZonesComponent', () => {
    const managed_group_zones = signal<any[]>([]);
    const add_zone = vi.fn();
    const update_zone = vi.fn();
    const remove_zone = vi.fn();
    const dialog = { open: vi.fn() };
    const service_stub = {
        managed_group_zones,
        addManagedGroupZone: add_zone,
        updateManagedGroupZone: update_zone,
        removeManagedGroupZone: remove_zone,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: MatDialog, useValue: dialog },
            ],
        }).overrideComponent(SignageGroupZonesComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupZonesComponent)
            .componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        managed_group_zones.set([
            { zone_id: 'zone-1', permissions: 1, deny: false },
            { zone_id: 'zone-2', permissions: 0, deny: true },
        ]);
    });

    it('exposes the managed group zones from the service', () => {
        const component = make();
        expect(component.zones().map((row: any) => row.zone_id)).toEqual([
            'zone-1',
            'zone-2',
        ]);
    });

    it('opens the zone picker excluding assigned zones and adds the result', async () => {
        dialog.open.mockReturnValue(dialogRef({ id: 'zone-3' }));
        const component = make();

        await component.addZone();

        expect(dialog.open).toHaveBeenCalledWith(
            SignageGroupZoneSelectModalComponent,
            expect.objectContaining({
                data: { exclude_ids: ['zone-1', 'zone-2'] },
            }),
        );
        expect(add_zone).toHaveBeenCalledWith({ id: 'zone-3' });
    });

    it('does not add a zone when the picker is dismissed', async () => {
        dialog.open.mockReturnValue(dialogRef(undefined));
        const component = make();

        await component.addZone();

        expect(add_zone).not.toHaveBeenCalled();
    });

    it('updates zone permissions including the deny flag on result', async () => {
        dialog.open.mockReturnValue(dialogRef({ permissions: 5, deny: true }));
        const component = make();
        const row = { zone_id: 'zone-1', permissions: 1, deny: false } as any;

        await component.editZonePermissions(row);

        expect(dialog.open).toHaveBeenCalledWith(
            SignageGroupPermissionsModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({
                    permissions: 1,
                    deny: false,
                    show_deny: true,
                }),
            }),
        );
        expect(update_zone).toHaveBeenCalledWith(row, 5, true);
    });

    it('does not update zone permissions when cancelled', async () => {
        dialog.open.mockReturnValue(dialogRef(undefined));
        const component = make();

        await component.editZonePermissions({ zone_id: 'zone-1' } as any);

        expect(update_zone).not.toHaveBeenCalled();
    });

    it('removes a zone through the service', () => {
        const component = make();
        const row = { zone_id: 'zone-1' } as any;
        component.removeZone(row);
        expect(remove_zone).toHaveBeenCalledWith(row);
    });
});
