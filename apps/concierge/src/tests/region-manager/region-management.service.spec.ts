import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { of } from 'rxjs';

import { RegionManagementService } from '../../app/region-manager/region-management.service';

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

describe('RegionManagementService', () => {
    let spectator: SpectatorService<RegionManagementService>;
    let building_list: ReturnType<typeof signal<any[]>>;
    let region_list: ReturnType<typeof signal<any[]>>;
    let org: any;
    let dialog_open: jest.Mock;

    const createService = createServiceFactory({
        service: RegionManagementService,
        providers: [
            { provide: MatDialog, useValue: { open: jest.fn() } },
            { provide: OrganisationService, useValue: {} },
        ],
    });

    beforeEach(() => {
        building_list = signal<any[]>([
            { id: 'b1', name: 'Alpha', parent_id: 'r1' },
            { id: 'b2', name: 'Beta', parent_id: 'r1' },
            { id: 'b3', name: 'Gamma', parent_id: 'r2' },
        ]);
        region_list = signal<any[]>([
            { id: 'r1', name: 'North Region' },
            { id: 'r2', name: 'South Region' },
        ]);
        org = {
            building_list,
            region_list,
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

    it('should count the buildings belonging to each region', () => {
        const list = spectator.service.filtered_regions();
        expect((list.find((_) => _.id === 'r1') as any).building_count).toBe(2);
        expect((list.find((_) => _.id === 'r2') as any).building_count).toBe(1);
    });

    it('should filter regions by search string', () => {
        spectator.service.setSearchString('south');
        const list = spectator.service.filtered_regions();
        expect(list.map((_) => _.id)).toEqual(['r2']);
    });

    it('should add the returned zone after editing a region', () => {
        dialog_open.mockReturnValue({ afterClosed: () => of({ id: 'new-region' }) });
        spectator.service.editRegion();
        expect(org.addZone).toHaveBeenCalledWith({ id: 'new-region' });
    });

    it('should remove the region when the confirmation is accepted', async () => {
        const ref = { reason: 'done', loading: jest.fn(), close: jest.fn() };
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue(ref);

        await spectator.service.removeRegion({ id: 'r1', name: 'North Region' } as any);

        expect(ts_client.removeZone).toHaveBeenCalledWith('r1');
        expect(org.removeZone).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'r1', tags: ['region'] }),
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
        expect(ref.close).toHaveBeenCalled();
    });

    it('should abort removal when the confirmation is cancelled', async () => {
        const ref = { reason: 'cancel', loading: jest.fn(), close: jest.fn() };
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue(ref);

        await spectator.service.removeRegion({ id: 'r1', name: 'North Region' } as any);

        expect(ts_client.removeZone).not.toHaveBeenCalled();
        expect(org.removeZone).not.toHaveBeenCalled();
        expect(ref.close).toHaveBeenCalled();
    });
});
