import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { BookingPanelArrayComponent } from '../app/panel-array.component';
import { BookingPanelComponent } from '../app/panel/panel.component';
import { PanelTopbarComponent } from '../app/panel/topbar.component';

describe('BookingPanelArrayComponent', () => {
    let spectator: SpectatorRouting<BookingPanelArrayComponent>;
    const createComponent = createRoutingFactory({
        component: BookingPanelArrayComponent,
        declarations: [
            MockComponent(BookingPanelComponent),
            MockComponent(PanelTopbarComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should display one panel', () => {
        spectator.setRouteQueryParam('system_ids', 'sys-A0');
        spectator.detectChanges();
        expect('[panel]').toHaveLength(1);
    });

    it('shold display two panels', () => {
        spectator.setRouteQueryParam('system_ids', 'sys-A0,sys-A1');
        spectator.detectChanges();
        expect('[panel]').toHaveLength(2);
    });

    it('should display four panels', () => {
        spectator.setRouteQueryParam(
            'system_ids',
            'sys-A0,sys-A1,sys-A2,sys-A3'
        );
        spectator.detectChanges();
        expect('[panel]').toHaveLength(4);
    });

    it('should show message when no panels', () => {
        spectator.setRouteQueryParam('system_ids', '');
        spectator.detectChanges();
        expect('[panel]').toHaveLength(0);
        expect('div').toContainText(
            'No systems are set for displaying on the panel array'
        );
    });
});
