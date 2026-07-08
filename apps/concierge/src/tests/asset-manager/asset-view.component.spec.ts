import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { addMinutes } from 'date-fns';
import { MockProvider } from 'ng-mocks';

import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetViewComponent } from '../../app/asset-manager/asset-view.component';
import { AssetLocationModalComponent } from '../../app/asset-manager/asset-location-modal.component';

const active_product = signal<any>(null);
const extra_assets = signal<any[]>([]);
const active_product_requests = signal<any[]>([]);

describe('AssetViewComponent', () => {
    let spectator: Spectator<AssetViewComponent>;
    let delete_active: any;

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
                setOptions: vi.fn(),
            } as any),
            MockProvider(OrganisationService, { currency_code: 'AUD' } as any),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(ActivatedRoute, { paramMap: of(new Map()) } as any),
        ],
    });

    beforeEach(() => {
        active_product.set({ id: 'g1', name: 'Chair', assets: [{ id: 'a1' }] });
        extra_assets.set([]);
        active_product_requests.set([]);
        delete_active = vi.fn(async () => ({}));
        spectator = createComponent();
    });

    it('should merge product assets with matching extra assets and dedupe', () => {
        extra_assets.set([
            { id: 'a2', asset_type_id: 'g1' },
            { id: 'a3', asset_type_id: 'other' },
            { id: 'a1', asset_type_id: 'g1' },
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
        extra_assets.set([{ id: 'a2', asset_type_id: 'g1' }]);
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

    it('should open the location modal when viewing locations', () => {
        spectator.component.viewLocations();

        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            AssetLocationModalComponent,
        );
    });
});
