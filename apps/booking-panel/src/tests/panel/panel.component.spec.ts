import { signal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { mockComponent } from '@placeos/common/tests';

import { PanelViewDetailsComponent } from '../../app/new-panel/panel-view-details.component';
import { PanelViewStatusComponent } from '../../app/new-panel/panel-view-status.component';
import { PanelViewComponent } from '../../app/new-panel/panel-view.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewComponent', () => {
    let spectator: SpectatorRouting<PanelViewComponent>;
    const createComponent = createRoutingFactory({
        component: PanelViewComponent,
        params: { system_id: 'a-system' },
        declarations: [
            mockComponent(PanelViewDetailsComponent),
            mockComponent(PanelViewStatusComponent),
        ],
        componentProviders: [
            {
                provide: PanelStateService,
                useValue: {
                    space: signal(null),
                    setting: vi.fn(() => false),
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
        spectator.detectChanges();
        expect(service.system).toBe('a-system');
    });
});
