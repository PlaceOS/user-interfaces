import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { NEVER, of } from 'rxjs';

import { RegionManagementService } from '../../app/region-manager/region-management.service';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('RegionManagementService', () => {
    let spectator: SpectatorService<RegionManagementService>;
    let building_list: ReturnType<typeof signal<any[]>>;
    let region_list: ReturnType<typeof signal<any[]>>;
    let org: any;
    let dialog_open: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createService = createServiceFactory({
        service: RegionManagementService,
        providers: [
            { provide: MatDialog, useValue: { open: vi.fn() } },
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
        const close = confirmRef('done');

        await spectator.service.removeRegion({ id: 'r1', name: 'North Region' } as any);

        expect(ts_client.removeZone).toHaveBeenCalledWith('r1');
        expect(org.removeZone).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'r1', tags: ['region'] }),
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

        await spectator.service.removeRegion({ id: 'r1', name: 'North Region' } as any);

        expect(ts_client.removeZone).not.toHaveBeenCalled();
        expect(org.removeZone).not.toHaveBeenCalled();
        expect(close).toHaveBeenCalled();
    });
});
