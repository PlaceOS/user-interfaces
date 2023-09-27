import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    CateringMenuComponent,
    CateringOrderListComponent,
} from '@placeos/catering';
import { MockComponent } from 'ng-mocks';
import { CateringTopbarComponent } from '../../app/catering/catering-topbar.component';

import { CateringComponent } from '../../app/catering/catering.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { SidebarComponent } from '../../app/ui/sidebar.component';

describe('CateringComponent', () => {
    let spectator: SpectatorRouting<CateringComponent>;
    const createComponent = createRoutingFactory({
        component: CateringComponent,
        providers: [{ provide: MatDialog, useValue: { open: jest.fn() } }],
        declarations: [
            MockComponent(CateringTopbarComponent),
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(CateringMenuComponent),
            MockComponent(CateringOrderListComponent),
            MockComponent(SidebarComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should handle route parameters', () => {
        expect(spectator.component.page).toBeFalsy();
        spectator.setRouteParam('view', 'orders');
        spectator.detectChanges();
        expect(spectator.component.page).toBe('orders');
    });
});
