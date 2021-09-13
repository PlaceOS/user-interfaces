import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { InteractiveMapComponent } from '@placeos/components';
import {
    ExploreDesksService,
    ExploreSearchComponent,
    ExploreSpacesService,
    ExploreStateService,
    ExploreZonesService,
    ExploreZoomControlComponent,
} from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { ExploreComponent } from '../app/explore.component';
import { ExploreLevelSelectComponent } from '../app/explore-level-select.component';
import { MatDialog } from '@angular/material/dialog';

describe('ExploreComponent', () => {
    let spectator: SpectatorRouting<ExploreComponent>;
    const createComponent = createRoutingFactory({
        component: ExploreComponent,
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(ExploreZoomControlComponent),
            MockComponent(ExploreLevelSelectComponent),
            MockComponent(ExploreSearchComponent),
        ],
        componentProviders: [
            { provide: ExploreSpacesService, useValue: {} },
            { provide: ExploreDesksService, useValue: {} },
            { provide: ExploreZonesService, useValue: {} },
        ],
        providers: [
            { provide: MatDialog, useValue: { open: jest.fn() } },
            { provide: ExploreStateService, useValue: {} },
            { provide: SettingsService, useValue: { get: jest.fn() } },
            {
                provide: OrganisationService,
                useValue: { initialised: of(true) },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
