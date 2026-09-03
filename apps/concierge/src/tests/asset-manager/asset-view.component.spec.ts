import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { Asset, OrganisationService } from '@placeos/common';
import * as ts_client_mod from '@placeos/ts-client';
import { addMinutes } from 'date-fns';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import { AssetLocationModalComponent } from '../../app/asset-manager/asset-location-modal.component';
import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetViewComponent } from '../../app/asset-manager/asset-view.component';

vi.mock('@placeos/ts-client', { spy: true });

const active_product = signal<any>(null);
const extra_assets = signal<Asset[]>([]);
const active_product_requests = signal<any[]>([]);

describe('AssetViewComponent', () => {
    let spectator: Spectator<AssetViewComponent>;
    let delete_active: any;
    let post_change: () => void;

    const createComponent = createComponentFactory({
        component: AssetViewComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
                active_product,
                extra_assets,
                active_product_requests,
                deleteActiveProduct: (...args: any[]) => delete_active(...args),
                setExtraAssets: (list: Asset[]) => extra_assets.set(list),
                postChange: () => post_change(),
                setOptions: vi.fn(),
            } as any),
            MockProvider(OrganisationService, { currency_code: 'AUD' } as any),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(ActivatedRoute, { paramMap: of(new Map()) } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        active_product.set({ id: 'g1', name: 'Chair', assets: [{ id: 'a1' }] });
        extra_assets.set([]);
        active_product_requests.set([]);
        delete_active = vi.fn(async () => ({}));
        post_change = vi.fn();
        vi.mocked(ts_client_mod.removeAsset).mockResolvedValue(
            undefined as never,
        );
        vi.mocked(ts_client_mod.get).mockResolvedValue([] as never);
        spectator = createComponent();
    });

    it('should merge product assets with matching extra assets and dedupe', () => {
        extra_assets.set([
            { id: 'a2', asset_type_id: 'g1' } as Asset,
            { id: 'a3', asset_type_id: 'other' } as Asset,
            { id: 'a1', asset_type_id: 'g1' } as Asset,
        ]);

        expect(spectator.component.asset_list().map((_) => _.id)).toEqual([
            'a1',
            'a2',
        ]);
    });

    it('should only count requests that are active right now', () => {
        const now = Date.now();
        active_product_requests.set([
            { id: 'current', date: now - 1000, duration: 60 },
            {
                id: 'past',
                date: addMinutes(now, -120).valueOf(),
                duration: 30,
            },
        ]);

        expect(spectator.component.requests().map((_) => _.id)).toEqual([
            'current',
        ]);
    });

    it('should compute the available count from assets minus active requests', () => {
        extra_assets.set([{ id: 'a2', asset_type_id: 'g1' } as Asset]);
        active_product_requests.set([
            { id: 'current', date: Date.now() - 1000, duration: 60 },
        ]);

        // 2 assets - 1 active request
        expect(spectator.component.available_count()).toBe(1);
    });

    it('should delete the active product then navigate back to the list', async () => {
        await spectator.component.deleteAsset();

        expect(delete_active).toHaveBeenCalled();
        expect(spectator.component.deleting()).toBe(false);
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book/assets',
            'list',
            'items',
        ]);
    });

    it('should remove a deleted individual asset from the asset list', async () => {
        extra_assets.set([{ id: 'a1', asset_type_id: 'g1' } as Asset]);
        vi.mocked(spectator.inject(MatDialog).open).mockReturnValue({
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            afterClosed: () => NEVER,
            close: vi.fn(),
        } as never);

        await spectator.component.removeAsset({ id: 'a1' } as never);

        expect(spectator.component.asset_list()).toEqual([]);
        expect(extra_assets()).toEqual([]);
        expect(post_change).toHaveBeenCalledOnce();
    });

    it('should open the location modal when viewing locations', () => {
        spectator.component.viewLocations();

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            AssetLocationModalComponent,
        );
    });
});
