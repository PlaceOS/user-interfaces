import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { of } from 'rxjs';

import { BuildingManagementService } from '../../app/building-manager/building-management.service';

import * as common_mod from '@placeos/common';
import * as component_mod from '@placeos/components';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifySuccess: jest.fn(),
    notifyError: jest.fn(),
}));
jest.mock('@placeos/components', () => ({
    ...jest.requireActual('@placeos/components'),
    openConfirmModal: jest.fn(),
}));
jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    removeZone: jest.fn(() => Promise.resolve()),
}));

describe('BuildingManagementService', () => {
    let spectator: SpectatorService<BuildingManagementService>;
    let building_list: ReturnType<typeof signal<any[]>>;
    let region_list: ReturnType<typeof signal<any[]>>;
    let org: any;
    let dialog_open: jest.Mock;

    const createService = createServiceFactory({
        service: BuildingManagementService,
        providers: [
            {
                provide: MatDialog,
                useValue: { open: jest.fn() },
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
            levelsForBuilding: jest.fn(() => [{ id: 'lvl-1' }, { id: 'lvl-2' }]),
            addZone: jest.fn(),
            removeZone: jest.fn(),
        };
        (common_mod.notifySuccess as jest.Mock).mockClear();
        (common_mod.notifyError as jest.Mock).mockClear();
        (ts_client.removeZone as jest.Mock).mockClear();
        (ts_client.removeZone as jest.Mock).mockResolvedValue(undefined);
        (component_mod.openConfirmModal as jest.Mock).mockReset();
        spectator = createService({
            providers: [
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: { open: jest.fn() } },
            ],
        });
        dialog_open = spectator.inject(MatDialog).open as jest.Mock;
    });

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
        const ref = { reason: 'done', loading: jest.fn(), close: jest.fn() };
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue(ref);

        await spectator.service.removeBuilding({ id: 'b1', name: 'Alpha Tower' } as any);

        expect(ts_client.removeZone).toHaveBeenCalledWith('b1');
        expect(org.removeZone).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'b1', tags: ['building'] }),
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
        expect(ref.close).toHaveBeenCalled();
    });

    it('should abort removal when the confirmation is cancelled', async () => {
        const ref = { reason: 'cancel', loading: jest.fn(), close: jest.fn() };
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue(ref);

        await spectator.service.removeBuilding({ id: 'b1', name: 'Alpha Tower' } as any);

        expect(ts_client.removeZone).not.toHaveBeenCalled();
        expect(org.removeZone).not.toHaveBeenCalled();
        expect(ref.close).toHaveBeenCalled();
    });

    it('should open the auto-release modal only for buildings with an id', () => {
        spectator.service.setAutoRelease({ id: '' } as any);
        expect(dialog_open).not.toHaveBeenCalled();
        spectator.service.setAutoRelease({ id: 'b1' } as any);
        expect(dialog_open).toHaveBeenCalled();
    });
});
