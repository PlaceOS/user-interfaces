import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import {
    CateringMenuComponent,
    CateringOrderListComponent,
} from '@placeos/catering';
import { MockComponent } from 'ng-mocks';

import { CateringComponent } from '../app/catering.component';
import { CateringTopbarComponent } from '../app/catering-topbar.component';

describe('CateringComponent', () => {
    let spectator: SpectatorRouting<CateringComponent>;

    const create_component = createRoutingFactory({
        component: CateringComponent,
        declarations: [
            MockComponent(CateringTopbarComponent),
            MockComponent(CateringMenuComponent),
            MockComponent(CateringOrderListComponent),
        ],
    });

    beforeEach(() => (spectator = create_component()));

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should default to an empty page', () => {
        expect(spectator.component.page()).toBe('');
    });

    it('should derive the active page from the view route param', () => {
        spectator.setRouteParam('view', 'orders');
        spectator.detectChanges();
        expect(spectator.component.page()).toBe('orders');
    });

    it('should show the landing options when no page is selected', () => {
        spectator.detectChanges();
        expect(spectator.query('catering-topbar')).toBeFalsy();
        expect(spectator.query('catering-order-list')).toBeFalsy();
        expect(spectator.query('catering-menu')).toBeFalsy();
        // Two navigation cards to menu and orders
        const links = spectator.queryAll('a[matRipple]');
        expect(links.length).toBe(2);
    });

    it('should render the order list when viewing orders', () => {
        spectator.setRouteParam('view', 'orders');
        spectator.detectChanges();

        expect(spectator.query('catering-topbar')).toBeTruthy();
        expect(spectator.query('catering-order-list')).toBeTruthy();
        expect(spectator.query('catering-menu')).toBeFalsy();
    });

    it('should render the menu and edit info when viewing the menu', () => {
        spectator.setRouteParam('view', 'menu');
        spectator.detectChanges();

        expect(spectator.query('catering-topbar')).toBeTruthy();
        expect(spectator.query('catering-menu')).toBeTruthy();
        expect(spectator.query('catering-order-list')).toBeFalsy();
        // Menu editing info banner is shown only on the menu page
        expect(spectator.query('.bg-info')).toBeTruthy();
    });
});
