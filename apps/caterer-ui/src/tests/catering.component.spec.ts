import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    CateringKitchenBoardComponent,
    CateringMenuComponent,
    CateringOrderListComponent,
    CateringPrepSummaryComponent,
} from '@placeos/catering';
import { MockComponents } from 'ng-mocks';

import { CateringTopbarComponent } from '../app/catering-topbar.component';
import { CateringComponent } from '../app/catering.component';

const CHILD_VIEWS = [
    CateringTopbarComponent,
    CateringMenuComponent,
    CateringOrderListComponent,
    CateringKitchenBoardComponent,
    CateringPrepSummaryComponent,
];

/**
 * Paths that the router links in the view point to.
 * The routing factory stubs the Router, so read the commands each link passes to it.
 */
function linkPaths(spectator: SpectatorRouting<CateringComponent>) {
    const calls = vi.mocked(spectator.inject(Router).createUrlTree).mock.calls;
    return [...new Set(calls.map(([commands]) => commands.join('/')))];
}

describe('CateringComponent', () => {
    let spectator: SpectatorRouting<CateringComponent>;

    const create_component = createRoutingFactory({
        component: CateringComponent,
        overrideComponents: [
            [
                CateringComponent,
                {
                    remove: { imports: CHILD_VIEWS },
                    add: { imports: MockComponents(...CHILD_VIEWS) },
                },
            ],
        ],
    });

    beforeEach(() => (spectator = create_component()));

    it('should show the menu and orders options when no page is selected', () => {
        expect(spectator.component.page()).toBe('');
        expect(spectator.query('catering-topbar')).toBeFalsy();
        expect(spectator.query('catering-order-list')).toBeFalsy();
        expect(spectator.query('catering-menu')).toBeFalsy();
        expect(linkPaths(spectator)).toEqual(['/menu', '/orders']);
    });

    it('should render the order list when viewing orders', () => {
        spectator.setRouteParam('view', 'orders');

        expect(spectator.query('catering-topbar')).toBeTruthy();
        expect(spectator.query('catering-order-list')).toBeTruthy();
        expect(spectator.query('catering-menu')).toBeFalsy();
        expect(spectator.query('.bg-info')).toBeFalsy();
    });

    it('should show the prep summary next to the orders only when summary=true', () => {
        spectator.setRouteParam('view', 'orders');
        expect(spectator.query('catering-prep-summary')).toBeFalsy();

        spectator.setRouteQueryParam('summary', 'true');
        expect(spectator.query('catering-prep-summary')).toBeTruthy();

        spectator.setRouteQueryParam('summary', 'false');
        expect(spectator.query('catering-prep-summary')).toBeFalsy();
    });

    it('should render the menu and edit info when viewing the menu', () => {
        spectator.setRouteParam('view', 'menu');

        expect(spectator.query('catering-topbar')).toBeTruthy();
        expect(spectator.query('catering-menu')).toBeTruthy();
        expect(spectator.query('catering-order-list')).toBeFalsy();
        expect(spectator.query('.bg-info')).toBeTruthy();
    });

    it('should show the kitchen board with a back link and no topbar', () => {
        vi.mocked(spectator.inject(Router).createUrlTree).mockClear();
        spectator.setRouteParam('view', 'kitchen');

        expect(spectator.query('catering-kitchen-board')).toBeTruthy();
        expect(spectator.query('catering-topbar')).toBeFalsy();
        expect(spectator.query('main')).toBeFalsy();
        expect(spectator.query('catering-kitchen-board a')).toBeTruthy();
        expect(linkPaths(spectator)).toEqual(['/orders']);
    });
});
