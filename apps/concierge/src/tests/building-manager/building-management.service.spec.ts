import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { NEVER, of } from 'rxjs';

import { BuildingManagementService } from '../../app/building-manager/building-management.service';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('BuildingManagementService', () => {
    let spectator: SpectatorService<BuildingManagementService>;
    let building_list: ReturnType<typeof signal<any[]>>;
    let region_list: ReturnType<typeof signal<any[]>>;
    let org: any;
    let dialog_open: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createService = createServiceFactory({
        service: BuildingManagementService,
        providers: [
            {
                provide: MatDialog,
                useValue: { open: vi.fn() },
            },
            {
                provide: OrganisationService,
                useValue: {},
            },
        ],
    });

    beforeEach(() => {
        building_list = signal<any[]>([
            { id: 'b1', name: 'Alpha Tower', parent_id: 'r1' },
            { id: 'b2', name: 'Beta House', parent_id: 'r2' },
        ]);
        region_list = signal<any[]>([
            { id: 'r1', name: 'Region One', display_name: 'North Region' },
        ]);
        org = {
            initialised: signal(true),
            building_list,
            region_list,
            levelsForBuilding: vi.fn(() => [{ id: 'lvl-1' }, { id: 'lvl-2' }]),
            addZone: vi.fn(),
            removeZone: vi.fn(),
        };
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        (ts_client.removeZone as any).mockClear();
        (ts_client.removeZone as any).mockResolvedValue(undefined);
        spectator = createService({
            providers: [
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: { open: vi.fn() } },
            ],
        });
        dialog_open = spectator.inject(MatDialog).open as any;
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
        vi.restoreAllMocks();
    });

    const confirmRef = (reason: string) => {
        const close = vi.fn();
        dialog_open.mockReturnValue({
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            afterClosed: () => of({ reason }),
            close,
        });
        return close;
    };

    it('should annotate buildings with region name and level count', () => {
        const list = spectator.service.filtered_buildings();
        const alpha = list.find((_) => _.id === 'b1') as any;
        expect(alpha.region).toBe('North Region');
        expect(alpha.level_count).toBe(2);
        // building without a matching region keeps no region label
        const beta = list.find((_) => _.id === 'b2') as any;
        expect(beta.region).toBeUndefined();
    });

    it('should filter buildings by parent zone', () => {
        spectator.service.setFilters({ zone: 'r1' });
        const list = spectator.service.filtered_buildings();
        expect(list.map((_) => _.id)).toEqual(['b1']);
    });

    it('should filter buildings by case-insensitive search string', () => {
        spectator.service.setSearchString('beta');
        const list = spectator.service.filtered_buildings();
        expect(list.map((_) => _.id)).toEqual(['b2']);
    });

    it('should add the returned zone after editing a building', () => {
        dialog_open.mockReturnValue({ afterClosed: () => of({ id: 'new-bld' }) });
        spectator.service.editBuilding();
        expect(dialog_open).toHaveBeenCalled();
        expect(org.addZone).toHaveBeenCalledWith({ id: 'new-bld' });
    });

    it('should not add a zone when the edit dialog is dismissed', () => {
        dialog_open.mockReturnValue({ afterClosed: () => of(null) });
        spectator.service.editBuilding();
        expect(org.addZone).not.toHaveBeenCalled();
    });

    it('should remove the building when the confirmation is accepted', async () => {
        const close = confirmRef('done');

        await spectator.service.removeBuilding({ id: 'b1', name: 'Alpha Tower' } as any);

        expect(ts_client.removeZone).toHaveBeenCalledWith('b1');
        expect(org.removeZone).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'b1', tags: ['building'] }),
        );
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(close).toHaveBeenCalled();
    });

    it('should abort removal when the confirmation is cancelled', async () => {
        const close = confirmRef('cancel');

        await spectator.service.removeBuilding({ id: 'b1', name: 'Alpha Tower' } as any);

        expect(ts_client.removeZone).not.toHaveBeenCalled();
        expect(org.removeZone).not.toHaveBeenCalled();
        expect(close).toHaveBeenCalled();
    });

    it('should open the auto-release modal only for buildings with an id', () => {
        spectator.service.setAutoRelease({ id: '' } as any);
        expect(dialog_open).not.toHaveBeenCalled();
        spectator.service.setAutoRelease({ id: 'b1' } as any);
        expect(dialog_open).toHaveBeenCalled();
    });
});
