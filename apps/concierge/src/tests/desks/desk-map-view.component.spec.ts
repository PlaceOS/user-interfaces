import { FormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { InteractiveMapComponent } from '@placeos/components';
import {
    ExploreDesksService,
    ExploreStateService,
    ExploreZoomControlComponent,
} from '@placeos/explore';
import { UserSearchFieldComponent } from '@placeos/form-fields';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { DeskMapViewComponent } from '../../app/desks/desk-map-view.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

describe('DeskMapViewComponent', () => {
    let spectator: Spectator<DeskMapViewComponent>;
    const createComponent = createComponentFactory({
        component: DeskMapViewComponent,
        providers: [
            {
                provide: DesksStateService,
                useValue: {
                    setFilters: jest.fn(),
                    desks: new BehaviorSubject([]),
                    filters: new BehaviorSubject({}),
                    startPolling: jest.fn(() => () => null),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    levelWithID: jest.fn(),
                },
            },
            {
                provide: ExploreStateService,
                useValue: {
                    map_url: of(''),
                    map_styles: of([]),
                    map_positions: of({ zoom: 1, center: { x: 0.5, y: 0.5 } }),
                    map_actions: of([]),
                    map_features: of([]),
                },
            },
        ],
        componentProviders: [
            {
                provide: ExploreDesksService,
                useValue: {
                    setOptions: jest.fn(),
                    startPolling: jest.fn(() => () => null),
                },
            },
        ],
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(ExploreZoomControlComponent),
            MockComponent(UserSearchFieldComponent),
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
