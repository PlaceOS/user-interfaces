import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    showMetadata: jest.fn(() => Promise.resolve({ details: [] })),
}));

import { showMetadata } from '@placeos/ts-client';
import { DealsService } from '../../app/deals/deals.service';
import { DealDetailsModalComponent } from '../../app/deals/deal-details-modal.component';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('DealsService', () => {
    let spectator: SpectatorService<DealsService>;
    const active_building = signal<any>(null);
    const createService = createServiceFactory({
        service: DealsService,
        providers: [
            MockProvider(MatDialog, { open: jest.fn() } as any),
            MockProvider(OrganisationService, {
                active_building,
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        active_building.set(null);
        (showMetadata as jest.Mock).mockResolvedValue({ details: [] });
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should clear deals and not query metadata without an active building', () => {
        TestBed.flushEffects();

        expect(showMetadata).not.toHaveBeenCalled();
        expect(spectator.service.deals()).toEqual([]);
    });

    it('should load deals metadata for the active building', async () => {
        const deals = [{ id: 'a', name: 'Deal A' }];
        (showMetadata as jest.Mock).mockResolvedValue({ details: deals });
        active_building.set({ id: 'bld-1' });

        TestBed.flushEffects();
        await wait(10);

        expect(showMetadata).toHaveBeenCalledWith('bld-1', 'deals-n-offers');
        expect(spectator.service.deals()).toEqual(deals);
        expect(spectator.service.loading()).toBe(false);
    });

    it('should fall back to an empty list when metadata is not an array', async () => {
        (showMetadata as jest.Mock).mockResolvedValue({ details: null });
        active_building.set({ id: 'bld-1' });

        TestBed.flushEffects();
        await wait(10);

        expect(spectator.service.deals()).toEqual([]);
    });

    it('should fall back to an empty list when the metadata request fails', async () => {
        (showMetadata as jest.Mock).mockRejectedValue(new Error('nope'));
        active_building.set({ id: 'bld-1' });

        TestBed.flushEffects();
        await wait(10);

        expect(spectator.service.deals()).toEqual([]);
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
