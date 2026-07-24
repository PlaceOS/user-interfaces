import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import * as ts_client_mod from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';
import { NEVER, of, Subject } from 'rxjs';

import { DealsService } from '../../app/deals/deals.service';

vi.mock('@placeos/ts-client', { spy: true });

/**
 * `openConfirmModal` is a workspace wrapper (unspyable under this builder) that
 * simply opens `ConfirmModalComponent` through the injected `MatDialog` and
 * resolves from the dialog ref. We drive it entirely through the injected
 * dialog fake below.
 */
const makeConfirmRef = () => ({
    componentInstance: { event: of({ reason: 'done' }), loading: { set: vi.fn() } },
    afterClosed: () => of({ reason: 'done' }),
    close: vi.fn(),
});

const makeDismissRef = () => ({
    // `event` never emits `done`; the dialog closes with a non-done reason.
    componentInstance: { event: NEVER, loading: { set: vi.fn() } },
    afterClosed: () => of({ reason: 'cancel' }),
    close: vi.fn(),
});

describe('DealsService', () => {
    let spectator: SpectatorService<DealsService>;
    let stored_deals: any[];
    let dialog_open: any;

    const organisation_service: any = {
        active_building: signal(undefined),
        building: { id: 'bld-1' },
    };

    const createService = createServiceFactory({
        service: DealsService,
        providers: [
            MockProvider(OrganisationService, organisation_service),
            MockProvider(MatDialog, {
                open: (...args: any[]) => dialog_open(...args),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        stored_deals = [];
        dialog_open = vi.fn();
        vi.mocked(ts_client_mod.showMetadata).mockImplementation(
            async () => ({ details: stored_deals }) as any,
        );
        vi.mocked(ts_client_mod.updateMetadata).mockImplementation(
            async (_id: string, metadata: any) => {
                stored_deals = metadata.details;
                return {} as any;
            },
        );
        spectator = createService();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should append a new deal with a generated id when saving', async () => {
        const saved = await spectator.service.saveDeal({ name: 'Coffee Deal' });

        expect(saved.id).toMatch(/^deal-/);
        expect(ts_client_mod.updateMetadata).toHaveBeenCalledWith(
            'bld-1',
            expect.objectContaining({
                name: 'deals-n-offers',
                details: expect.arrayContaining([
                    expect.objectContaining({ name: 'Coffee Deal' }),
                ]),
            }),
        );
    });

    it('should replace an existing deal instead of duplicating when saving', async () => {
        stored_deals = [
            { id: 'deal-1', name: 'Old' },
            { id: 'deal-2', name: 'Keep' },
        ];

        await spectator.service.saveDeal({ id: 'deal-1', name: 'Updated' });

        expect(stored_deals).toHaveLength(2);
        const updated = stored_deals.find((d) => d.id === 'deal-1');
        expect(updated.name).toBe('Updated');
        expect(stored_deals.some((d) => d.id === 'deal-2')).toBe(true);
    });

    it('should return metadata details as the current deal list', async () => {
        stored_deals = [{ id: 'deal-1' }, { id: 'deal-2' }];
        const deals = await spectator.service.getDeals();
        expect(deals).toEqual(stored_deals);
    });

    it('should remove a deal after confirmation and persist the change', async () => {
        stored_deals = [{ id: 'deal-1' }, { id: 'deal-2' }];
        dialog_open.mockReturnValue(makeConfirmRef());

        const result = await spectator.service.removeDeal({ id: 'deal-1' } as any);

        expect(result).toBe(true);
        // Confirmation dialog was opened...
        expect(dialog_open).toHaveBeenCalled();
        // ...and the change was persisted through ts-client metadata.
        expect(ts_client_mod.updateMetadata).toHaveBeenCalled();
        expect(stored_deals).toEqual([{ id: 'deal-2' }]);
    });

    it('should abort removal when the confirmation is dismissed', async () => {
        dialog_open.mockReturnValue(makeDismissRef());
        stored_deals = [{ id: 'deal-1' }];

        const result = await spectator.service.removeDeal({ id: 'deal-1' } as any);

        expect(result).toBe(false);
        expect(ts_client_mod.updateMetadata).not.toHaveBeenCalled();
        expect(stored_deals).toEqual([{ id: 'deal-1' }]);
    });

    it('should skip the confirmation dialog when confirm is false', async () => {
        stored_deals = [{ id: 'deal-1' }];

        const result = await spectator.service.removeDeal(
            { id: 'deal-1' } as any,
            false,
        );

        expect(result).toBe(true);
        expect(dialog_open).not.toHaveBeenCalled();
        expect(ts_client_mod.updateMetadata).toHaveBeenCalled();
        expect(stored_deals).toEqual([]);
    });

    it('should remove and close the modal when the view dialog emits remove', async () => {
        const remove = new Subject<void>();
        const after_closed = new Subject<void>();
        const close = vi.fn();
        // The same ref serves both the view dialog (exposes `remove`) and the
        // confirmation dialog opened by `removeDeal` (exposes `event`).
        dialog_open.mockReturnValue({
            componentInstance: {
                remove,
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            afterClosed: () => after_closed,
            close,
        });
        stored_deals = [{ id: 'deal-1' }];

        spectator.service.viewDeal({ id: 'deal-1' } as any);
        remove.next();
        await new Promise((resolve) => setTimeout(resolve));

        expect(dialog_open).toHaveBeenCalled();
        expect(close).toHaveBeenCalled();
        // The deal was removed as part of the flow.
        expect(stored_deals).toEqual([]);
    });
});
