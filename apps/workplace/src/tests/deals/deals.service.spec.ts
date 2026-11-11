import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import { DealDetailsModalComponent } from '../../app/deals/deal-details-modal.component';
import { DealsService } from '../../app/deals/deals.service';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('DealsService', () => {
    let spectator: SpectatorService<DealsService>;
    const active_building = signal<unknown>(null);
    const createService = createServiceFactory({
        service: DealsService,
        providers: [
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(OrganisationService, {
                active_building,
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        active_building.set(null);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: [],
        } as any);
        spectator = createService();
    });

    it('should clear deals and not query metadata without an active building', () => {
        TestBed.flushEffects();

        expect(ts_client.showMetadata).not.toHaveBeenCalled();
        expect(spectator.service.deals()).toEqual([]);
    });

    it('should load deals metadata for the active building', async () => {
        const deals = [{ id: 'a', name: 'Deal A' }];
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: deals,
        } as any);
        active_building.set({ id: 'bld-1' });

        TestBed.flushEffects();
        await wait(10);

        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'bld-1',
            'deals-n-offers',
        );
        expect(spectator.service.deals()).toEqual(deals);
        expect(spectator.service.loading()).toBe(false);
    });

    it('should fall back to an empty list when metadata is not an array', async () => {
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: null,
        } as any);
        active_building.set({ id: 'bld-1' });

        TestBed.flushEffects();
        await wait(10);

        expect(spectator.service.deals()).toEqual([]);
    });

    it('should flag a failed load and clear the flag when a reload succeeds', async () => {
        vi.mocked(ts_client.showMetadata).mockRejectedValueOnce(
            new Error('nope'),
        );
        active_building.set({ id: 'bld-1' });

        TestBed.flushEffects();
        await wait(10);

        expect(spectator.service.deals()).toEqual([]);
        expect(spectator.service.failed()).toBe(true);
        expect(spectator.service.loading()).toBe(false);

        const deals = [{ id: 'a', name: 'Deal A' }];
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: deals,
        } as any);
        spectator.service.reload();
        TestBed.flushEffects();
        await wait(10);

        expect(spectator.service.failed()).toBe(false);
        expect(spectator.service.deals()).toEqual(deals);
    });

    it('should not show the deals of a building that is no longer active', async () => {
        let resolveOld: (value: unknown) => void = () => undefined;
        vi.mocked(ts_client.showMetadata).mockImplementation(((id: string) =>
            id === 'bld-old'
                ? new Promise((resolve) => (resolveOld = resolve))
                : Promise.resolve({ details: [{ id: 'new' }] })) as any);
        active_building.set({ id: 'bld-old' });
        TestBed.flushEffects();
        active_building.set({ id: 'bld-new' });
        TestBed.flushEffects();
        await wait(10);

        resolveOld({ details: [{ id: 'old' }] });
        await wait(10);

        expect(spectator.service.deals()).toEqual([{ id: 'new' }]);
        expect(spectator.service.loading()).toBe(false);
    });

    it('should open the details modal with the deal as data when viewing', () => {
        const dialog = spectator.inject(MatDialog);
        const deal: any = { id: 'x', name: 'View me' };

        spectator.service.viewDeal(deal);

        expect(dialog.open).toHaveBeenCalledWith(DealDetailsModalComponent, {
            data: deal,
        });
    });
});
