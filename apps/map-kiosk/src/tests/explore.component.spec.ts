import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    Building,
    OrganisationService,
    Region,
    SettingsService,
} from '@placeos/common';
import {
    ExploreDesksService,
    ExploreParkingService,
    ExploreSearchComponent,
    ExploreSpacesService,
    ExploreStateService,
    ExploreZonesService,
    ExploreZoomControlComponent,
} from '@placeos/explore';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
    CustomTooltipComponent,
    IconComponent,
    InteractiveMapComponent,
} from '@placeos/components';
import { SpacePipe, SpacesService } from '@placeos/events';
import { AccessibilityControlsComponent } from '../app/accessibility-controls.component';
import { ExploreLevelSelectComponent } from '../app/explore-level-select.component';
import { ExploreComponent } from '../app/explore.component';

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
            MockProvider(OrganisationService, {
                initialised: of(true),
                active_region: new BehaviorSubject(new Region({})),
                active_building: new BehaviorSubject(new Building({ id: '1' })),
            }),
        ],
        imports: [MockModule(MatSlideToggleModule), FormsModule, MatMenuModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
