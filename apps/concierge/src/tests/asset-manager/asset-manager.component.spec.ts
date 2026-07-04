import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { AssetManagerComponent } from '../../app/asset-manager/asset-manager.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

describe('AssetManagerComponent', () => {
    let spectator: SpectatorRouting<AssetManagerComponent>;
    const createComponent = createRoutingFactory({
        component: AssetManagerComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    function setUrl(url: string) {
        Object.defineProperty(spectator.inject(Router), 'url', {
            value: url,
            configurable: true,
        });
        (spectator.component as any)._url.set(Date.now());
    }

    it('should resolve the last path segment', () => {
        setUrl('/book/assets/list/purchase-orders');
        expect(spectator.component.path()).toBe('purchase-orders');
    });

    it('should strip query parameters from the path', () => {
        setUrl('/book/assets/list/items?building=bld-1');
        expect(spectator.component.path()).toBe('items');
    });
});
