import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SpacePipe } from 'libs/events/src/lib/space.pipe';
import { SpacesService } from 'libs/events/src/lib/spaces.service';
import { ExploreDesksService } from '../lib/explore-desks.service';
import { ExploreParkingService } from '../lib/explore-parking.service';
import { ExploreSpacesService } from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';
import { ExploreZonesService } from '../lib/explore-zones.service';
import { ExploreComponent } from '../lib/explore.component';

describe('ExploreComponent', () => {
    let spectator: Spectator<ExploreComponent>;
    const createComponent = createComponentFactory({
        component: ExploreComponent,
        detectChanges: false,
        overrideComponents: [
            [
                ExploreComponent,
                {
                    set: {
                        template: '',
                        imports: [],
                        providers: [
                            MockProvider(ExploreSpacesService),
                            MockProvider(ExploreDesksService),
                            MockProvider(ExploreZonesService),
                            MockProvider(ExploreParkingService),
                            MockProvider(SpacePipe),
                        ],
                    },
                },
            ],
        ],
        providers: [
            MockProvider(ExploreStateService, {
                level: signal(''),
                positions: { zoom: 1, center: { x: 0.5, y: 0.5 } },
                setLevel: vi.fn(),
                setFeatures: vi.fn(),
                setPositions: vi.fn(),
            } as never),
            MockProvider(SettingsService, {
                get: vi.fn(),
                signal: vi.fn(() => signal(undefined)),
            }),
            MockProvider(OrganisationService, {
                active_region: signal(null),
                active_building: signal(null),
                buildings: [],
                levelsForBuilding: vi.fn(() => []),
            } as never),
            MockProvider(SpacesService, { initialised: signal(true) }),
            MockProvider(MatDialog, { closeAll: vi.fn() }),
            MockProvider(Router, { navigate: vi.fn() }),
            {
                provide: ActivatedRoute,
                useValue: { queryParamMap: of(convertToParamMap({})) },
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers();
    });
    afterEach(() => vi.useRealTimers());

    it('should return to the start page after the reset delay', () => {
        spectator = createComponent();
        spectator.component.onMouse();
        vi.advanceTimersByTime(spectator.component.reset_delay * 1000);
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(['/']);
    });

    it('should not reset when reset_when_idle is false', () => {
        spectator = createComponent({ props: { reset_when_idle: false } });
        spectator.component.onMouse();
        vi.advanceTimersByTime(spectator.component.reset_delay * 1000);
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });
});
