import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { DealsComponent } from '../../app/deals/deals.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

describe('DealsComponent', () => {
    let spectator: SpectatorRouting<DealsComponent>;
    const createComponent = createRoutingFactory({
        component: DealsComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should derive the trailing path segment from the router url', () => {
        Object.defineProperty(spectator.router, 'url', {
            value: '/deals-n-offers/manage',
            configurable: true,
        });
        (spectator.component as any)._url.set(Date.now());
        expect(spectator.component.path()).toBe('manage');
    });
});
