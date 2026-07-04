import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { FacilitiesComponent } from '../../app/facilities/facilities.component';
import { FacilitiesMapComponent } from '../../app/facilities/facilities-map.component';
import { FacilitiesStatusComponent } from '../../app/facilities/facilities-status.component';
import { FacilitiesTopbarComponent } from '../../app/facilities/facilities-topbar.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

describe('FacilitiesComponent', () => {
    let spectator: SpectatorRouting<FacilitiesComponent>;
    const createComponent = createRoutingFactory({
        component: FacilitiesComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(FacilitiesTopbarComponent),
            MockComponent(FacilitiesMapComponent),
            MockComponent(FacilitiesStatusComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should derive the trailing path segment from the router url', () => {
        Object.defineProperty(spectator.router, 'url', {
            value: '/facilities',
            configurable: true,
        });
        (spectator.component as any)._url.set(Date.now());
        expect(spectator.component.path()).toBe('facilities');
    });
});
