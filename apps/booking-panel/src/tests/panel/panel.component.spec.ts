import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { mockComponent } from '@placeos/common/tests';

import { PanelViewDetailsComponent } from '../../app/new-panel/panel-view-details.component';
import { PanelViewStatusComponent } from '../../app/new-panel/panel-view-status.component';
import { PanelViewComponent } from '../../app/new-panel/panel-view.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewComponent', () => {
    let spectator: SpectatorRouting<PanelViewComponent>;
    const createComponent = createRoutingFactory({
        component: PanelViewComponent,
        declarations: [
            mockComponent(PanelViewDetailsComponent),
            mockComponent(PanelViewStatusComponent),
        ],
        componentProviders: [
            {
                provide: PanelStateService,
                useValue: {
                    space: {
                        subscribe: jest.fn(() => ({ unsubscribe: jest.fn() })),
                    },
                    setting: jest.fn(() => false),
                    system: '',
                },
            },
        ],
    });

    beforeEach(() => {
        localStorage.setItem('PLACEOS.BOOKINGS.system', 'a-system');
        spectator = createComponent();
    });

    afterEach(() => localStorage.clear());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should set system on route change', () => {
        const service = spectator.inject(PanelStateService, true);
        service.system = '';
        spectator.setRouteParam('system_id', 'sys-2');
        spectator.detectChanges();
        expect(service.system).toBe('sys-2');
    });
});
