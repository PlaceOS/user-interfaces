import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MatDialog } from '@angular/material/dialog';
import { MockComponent } from 'ng-mocks';

import { PanelStateService } from '../../app/panel-state.service';
import { BookingPanelComponent } from '../../app/panel/panel.component';
import { PanelTopbarComponent } from '../../app/panel/topbar.component';
import { PanelStatusComponent } from '../../app/panel/panel-status.component';
import { PanelDetailsComponent } from '../../app/panel/panel-details.component';
import { PanelBookingListComponent } from '../../app/panel/panel-booking-list.component';

describe('BookingPanelComponent', () => {
    let spectator: SpectatorRouting<BookingPanelComponent>;
    const createComponent = createRoutingFactory({
        component: BookingPanelComponent,
        declarations: [
            MockComponent(PanelTopbarComponent),
            MockComponent(PanelDetailsComponent),
            MockComponent(PanelBookingListComponent),
            MockComponent(PanelStatusComponent),
        ],
        componentProviders: [{ provide: PanelStateService, useValue: {} }],
    });

    beforeEach(() => {
        localStorage.setItem('PLACEOS.BOOKINGS.system', 'a-system');
        spectator = createComponent();
    });

    afterEach(() => localStorage.clear());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should set system on input change', () => {
        const service = spectator.inject(PanelStateService, true);
        service.system = '';
        spectator.setInput({ system_id: 'sys-1' });
        spectator.detectChanges();
        expect(service.system).toBe('sys-1');
    });

    it('should set system on route change', () => {
        const service = spectator.inject(PanelStateService, true);
        service.system = '';
        spectator.setRouteParam('system_id', 'sys-2');
        spectator.detectChanges();
        expect(service.system).toBe('sys-2');
    });

    it('should default system to localStorage value', () => {
        const service = spectator.inject(PanelStateService, true);
        expect(service.system).toBe('a-system');
    });
});
