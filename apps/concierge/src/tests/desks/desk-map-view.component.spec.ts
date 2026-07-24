import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    ExploreDesksService,
    ExploreStateService,
    ExploreZoomControlComponent,
} from '@placeos/explore';
import { UserSearchFieldComponent } from '@placeos/form-fields';

import { InteractiveMapComponent } from '@placeos/components';
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
                    setFilters: vi.fn(),
                    desks: signal([]),
                    filters: signal({}),
                    startPolling: vi.fn(() => () => null),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    levelWithID: vi.fn(),
                },
            },
            {
                provide: ExploreStateService,
                useValue: {
                    map_url: signal(''),
                    map_styles: signal([]),
                    map_positions: signal({
                        zoom: 1,
                        center: { x: 0.5, y: 0.5 },
                    }),
                    map_actions: signal([]),
                    map_features: signal([]),
                },
            },
        ],
        componentProviders: [
            {
                provide: ExploreDesksService,
                useValue: {
                    setOptions: vi.fn(),
                    startPolling: vi.fn(() => () => null),
                },
            },
        ],
        declarations: [
            mockComponent(InteractiveMapComponent),
            mockComponent(ExploreZoomControlComponent),
            mockComponent(UserSearchFieldComponent),
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
