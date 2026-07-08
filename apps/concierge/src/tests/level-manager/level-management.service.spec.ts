import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { NEVER, of } from 'rxjs';

import { LevelManagementService } from '../../app/level-manager/level-management.service';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('LevelManagementService', () => {
    let spectator: SpectatorService<LevelManagementService>;
    let org: any;
    let dialog_open: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createService = createServiceFactory({
        service: LevelManagementService,
        providers: [
            { provide: MatDialog, useValue: { open: vi.fn() } },
            { provide: OrganisationService, useValue: {} },
        ],
    });

    beforeEach(() => {
        org = {
            level_list: signal<any[]>([]),
            building_list: signal<any[]>([]),
            buildings: [],
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
        const close = confirmRef('done');

        await spectator.service.removeLevel({ id: 'level-1', name: 'Level 1' } as any);

        expect(ts_client.removeZone).toHaveBeenCalledWith('level-1');
        expect(org.removeZone).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'level-1', tags: ['level'] }),
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

        await spectator.service.removeLevel({ id: 'level-1', name: 'Level 1' } as any);

        expect(ts_client.removeZone).not.toHaveBeenCalled();
        expect(org.removeZone).not.toHaveBeenCalled();
        expect(close).toHaveBeenCalled();
    });
});
