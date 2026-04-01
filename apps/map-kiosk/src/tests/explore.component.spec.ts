import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    Building,
    MapsPeopleService,
    OrganisationService,
    Region,
    SettingsService,
} from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    ExploreDesksService,
    ExploreParkingService,
    ExploreSearchComponent,
    ExploreSpacesService,
    ExploreStateService,
    ExploreZonesService,
} from '@placeos/explore';
import { MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CustomTooltipComponent, IconComponent } from '@placeos/components';
import { SpacePipe, SpacesService } from '@placeos/events';
import { AccessibilityControlsComponent } from '../app/accessibility-controls.component';
import { ExploreLevelSelectComponent } from '../app/explore-level-select.component';
import { ExploreComponent } from '../app/explore.component';
import { DynamicMapComponent } from '../app/map-viewer/dynamic-map.component';

describe('ExploreComponent', () => {
    let spectator: SpectatorRouting<ExploreComponent>;
    const createComponent = createRoutingFactory({
        component: ExploreComponent,
        declarations: [
            mockComponent(DynamicMapComponent),
            mockComponent(ExploreLevelSelectComponent),
            mockComponent(ExploreSearchComponent),
            mockComponent(IconComponent),
            mockComponent(CustomTooltipComponent),
            mockComponent(AccessibilityControlsComponent),
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
                active_levels: new BehaviorSubject([]),
            }),
            MockProvider(MapsPeopleService, {
                available$: of(false),
            }),
        ],
        imports: [MockModule(MatSlideToggleModule), FormsModule, MatMenuModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
