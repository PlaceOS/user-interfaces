import { signal } from '@angular/core';
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
import {
    CustomTooltipComponent,
    DynamicMapComponent,
    IconComponent,
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
                options: signal({}),
                level: signal({}) as any,
                positions: { zoom: 1, center: { x: 0.5, y: 0.5 } },
                map_url: signal(''),
                map_styles: signal({ text: { display: 'none' } }),
                map_positions: signal({ zoom: 1, center: { x: 0.5, y: 0.5 } }),
                map_features: signal([]),
                map_actions: signal([]),
                map_labels: signal([]),
                setPositions: jest.fn(),
                setFeatures: jest.fn(),
                setOptions: jest.fn(),
                setLevel: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(),
                initialised: of(true),
                theme_signal: signal('light'),
                signal: jest.fn(() => signal(undefined)),
            }),
            MockProvider(SpacesService, {
                initialised: of(true),
                get: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                initialised: of(true),
                buildings: [new Building({ id: '1' })],
                levelsForBuilding: jest.fn(() => []),
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
