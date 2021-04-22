import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
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
import { DeskFlowStateService } from 'apps/workplace/src/app/bookings/desk-flow/desk-flow-state.service';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { ExploreComponent } from '../app/explore.component';
import { ExploreLevelSelectComponent } from '../app/explore-level-select.component';

describe('BootstrapComponent', () => {
    let spectator: Spectator<ExploreComponent>;
    const createComponent = createComponentFactory({
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
            { provide: ExploreStateService, useValue: {} },
            { provide: SettingsService, useValue: { get: jest.fn() } },
            { provide: DeskFlowStateService, useValue: {} },
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
