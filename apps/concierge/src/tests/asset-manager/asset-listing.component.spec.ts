import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { AssetManagerStateService } from '../../app/asset-manager/asset-manager-state.service';
import { AssetListingComponent } from '../../app/asset-manager/asset-listing.component';
import { AssetManagerTopbarComponent } from '../../app/asset-manager/asset-manager-topbar.component';

describe('AssetListingComponent', () => {
    let spectator: SpectatorRouting<AssetListingComponent>;
    const createComponent = createRoutingFactory({
        component: AssetListingComponent,
        detectChanges: false,
        providers: [
            MockProvider(AssetManagerStateService, {
                base_route: '/book/assets',
            } as any),
        ],
        declarations: [MockComponent(AssetManagerTopbarComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should mark the requests tab active from the url', () => {
        spectator.component.current_url.set('/book/assets/list/requests');
        expect(spectator.component.active()).toBe('requests');
    });

    it('should mark the items tab active from the url', () => {
        spectator.component.current_url.set('/book/assets/list/items');
        expect(spectator.component.active()).toBe('items');
    });

    it('should fall back to purchase-orders when no other match', () => {
        spectator.component.current_url.set('/book/assets/list/purchase-orders');
        expect(spectator.component.active()).toBe('purchase-orders');
    });

    it('should expose the base route from the state service', () => {
        expect(spectator.component.base_route).toBe('/book/assets');
    });
});
