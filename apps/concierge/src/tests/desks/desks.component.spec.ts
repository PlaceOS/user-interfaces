import { signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { DesksStateService } from '../../app/desks/desks-state.service';
import { DesksTopbarComponent } from '../../app/desks/desks-topbar.component';
import { DesksComponent } from '../../app/desks/desks.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('DesksComponent', () => {
    let spectator: SpectatorRouting<DesksComponent>;
    const createComponent = createRoutingFactory({
        component: DesksComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(DesksTopbarComponent),
            MockComponent(IconComponent),
            MockComponent(SearchbarComponent),
        ],
        providers: [
            MockProvider(DesksStateService, {
                refresh: jest.fn(),
                filters: signal({}),
                loading: signal(false),
                setFilters: jest.fn(),
                rejectAllDesks: jest.fn(),
                editDesk: jest.fn(),
                addDesks: jest.fn(),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [
            MockModule(MatProgressBarModule),
            MockModule(MatTabsModule),
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should handle routing events');
});
