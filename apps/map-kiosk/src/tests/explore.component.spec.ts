import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    InteractiveMapComponent,
} from '@placeos/components';
import {
    ExploreDesksService,
    ExploreParkingService,
    ExploreSearchComponent,
    ExploreSpacesService,
    ExploreStateService,
    ExploreZonesService,
    ExploreZoomControlComponent,
} from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ExploreComponent } from '../app/explore.component';
import { ExploreLevelSelectComponent } from '../app/explore-level-select.component';
import { MatDialog } from '@angular/material/dialog';
import { SpacesService } from '@placeos/spaces';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { AccessibilityControlsComponent } from '../app/accessibility-controls.component';

describe('ExploreComponent', () => {
    let spectator: SpectatorRouting<ExploreComponent>;
    const createComponent = createRoutingFactory({
        component: ExploreComponent,
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(ExploreZoomControlComponent),
            MockComponent(ExploreLevelSelectComponent),
            MockComponent(ExploreSearchComponent),
            MockComponent(IconComponent),
            MockComponent(CustomTooltipComponent),
            MockComponent(AccessibilityControlsComponent),
        ],
        componentProviders: [
            MockProvider(ExploreSpacesService),
            MockProvider(ExploreDesksService, { setOptions: jest.fn() }),
            MockProvider(ExploreZonesService),
            MockProvider(ExploreParkingService),

            MockProvider(SpacePipe, { transform: jest.fn(() => ({})) } as any),
        ],
        providers: [
            MockProvider(MatDialog, { open: jest.fn(), closeAll: jest.fn() }),
            MockProvider(ExploreStateService, {
                options: of({}),
                level: of({}) as any,
                setPositions: jest.fn(),
                setFeatures: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(),
                initialised: of(true),
            }),
            MockProvider(SpacesService, {
                initialised: of(true),
                get: jest.fn(),
            } as any),
            MockProvider(OrganisationService, { initialised: of(true) }),
        ],
        imports: [MockModule(MatSlideToggleModule), FormsModule, MatMenuModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
