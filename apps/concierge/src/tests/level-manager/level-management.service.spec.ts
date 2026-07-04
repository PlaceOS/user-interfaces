import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { of } from 'rxjs';

import { LevelManagementService } from '../../app/level-manager/level-management.service';

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
jest.mock('@placeos/events', () => ({
    requestSpacesForZone: jest.fn(() => of([])),
}));

describe('LevelManagementService', () => {
    let spectator: SpectatorService<LevelManagementService>;
    let org: any;
    let dialog_open: jest.Mock;

    const createService = createServiceFactory({
        service: LevelManagementService,
        providers: [
            { provide: MatDialog, useValue: { open: jest.fn() } },
            { provide: OrganisationService, useValue: {} },
        ],
    });

    beforeEach(() => {
        org = {
            level_list: signal<any[]>([]),
            building_list: signal<any[]>([]),
            buildings: [],
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

    it('should merge partial filter options into the options signal', () => {
        spectator.service.setFilters({ zone: 'bld-1' });
        spectator.service.setSearchString('lobby');
        expect(spectator.service.options()).toEqual({
            zone: 'bld-1',
            search: 'lobby',
        });
    });

    it('should add the returned zone after editing a level', () => {
        dialog_open.mockReturnValue({ afterClosed: () => of({ id: 'new-level' }) });
        spectator.service.editLevel();
        expect(org.addZone).toHaveBeenCalledWith({ id: 'new-level' });
    });

    it('should add the returned zone after editing a level map', () => {
        dialog_open.mockReturnValue({ afterClosed: () => of({ id: 'level-map' }) });
        spectator.service.editLevelMap({ id: 'level-1' } as any);
        expect(dialog_open).toHaveBeenCalled();
        expect(org.addZone).toHaveBeenCalledWith({ id: 'level-map' });
    });

    it('should not add a zone when the level dialog is dismissed', () => {
        dialog_open.mockReturnValue({ afterClosed: () => of(null) });
        spectator.service.editLevel();
        expect(org.addZone).not.toHaveBeenCalled();
    });

    it('should remove the level when the confirmation is accepted', async () => {
        const ref = { reason: 'done', loading: jest.fn(), close: jest.fn() };
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue(ref);

        await spectator.service.removeLevel({ id: 'level-1', name: 'Level 1' } as any);

        expect(ts_client.removeZone).toHaveBeenCalledWith('level-1');
        expect(org.removeZone).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'level-1', tags: ['level'] }),
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
        expect(ref.close).toHaveBeenCalled();
    });

    it('should abort removal when the confirmation is cancelled', async () => {
        const ref = { reason: 'cancel', loading: jest.fn(), close: jest.fn() };
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue(ref);

        await spectator.service.removeLevel({ id: 'level-1', name: 'Level 1' } as any);

        expect(ts_client.removeZone).not.toHaveBeenCalled();
        expect(org.removeZone).not.toHaveBeenCalled();
        expect(ref.close).toHaveBeenCalled();
    });
});
