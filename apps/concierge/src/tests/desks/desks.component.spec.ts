import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { DesksStateService } from '../../app/desks/desks-state.service';
import { DesksTopbarComponent } from '../../app/desks/desks-topbar.component';
import { DesksComponent } from '../../app/desks/desks.component';
import { SidebarComponent } from '../../app/ui/sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';

describe('DesksComponent', () => {
    let spectator: SpectatorRouting<DesksComponent>;
    const createComponent = createRoutingFactory({
        component: DesksComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(DesksTopbarComponent),
            MockComponent(SidebarComponent),
        ],
        providers: [MockProvider(DesksStateService, { refresh: jest.fn() })],
        imports: [MockModule(MatProgressBarModule), MockModule(MatTabsModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should handle routing events');
});
