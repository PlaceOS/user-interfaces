import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
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
    afterEach(() => {
        vi.useRealTimers();
        localStorage.removeItem('KIOSK.level');
    });

    /** Run `ngOnInit` and the effects that wait for it */
    const init = async () => {
        await spectator.component.ngOnInit();
        TestBed.tick();
        await vi.advanceTimersByTimeAsync(0);
    };

    it('should return to the start page and kiosk level after the reset delay', () => {
        spectator = createComponent();
        const state = spectator.inject(ExploreStateService);
        localStorage.setItem('KIOSK.level', 'lvl-kiosk');
        spectator.component.onMouse();
        vi.advanceTimersByTime(spectator.component.reset_delay * 1000);
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(['/']);
        expect(state.setLevel).toHaveBeenCalledWith('lvl-kiosk');
        expect(state.setPositions).toHaveBeenCalledWith(1, { x: 0.5, y: 0.5 });
        expect(spectator.inject(MatDialog).closeAll).toHaveBeenCalled();
    });

    it('should not reset when the inactivity timeout setting is 0', async () => {
        spectator = createComponent({
            providers: [
                MockProvider(SettingsService, {
                    get: vi.fn((key: string) =>
                        key === 'app.inactivity_timeout_secs' ? 0 : undefined,
                    ) as SettingsService['get'],
                    signal: vi.fn(() => signal(undefined)),
                }),
            ],
        });
        await init();
        spectator.component.onMouse();
        await vi.advanceTimersByTimeAsync(180 * 1000);
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });

    it('should show the level and building from the level query parameter', async () => {
        const building = { id: 'bld-2' };
        const org = {
            active_region: signal(null),
            active_building: signal(null),
            buildings: [{ id: 'bld-1' }, building],
            building: null,
            levelsForBuilding: vi.fn(() => []),
            levelWithID: vi.fn(() => ({ id: 'lvl-2', parent_id: 'bld-2' })),
        };
        spectator = createComponent({
            providers: [
                MockProvider(OrganisationService, org as never),
                {
                    provide: ActivatedRoute,
                    useValue: {
                        queryParamMap: of(
                            convertToParamMap({ level: 'lvl-2' }),
                        ),
                    },
                },
            ],
        });
        await init();
        expect(
            spectator.inject(ExploreStateService).setLevel,
        ).toHaveBeenCalledWith('lvl-2');
        expect(spectator.inject(OrganisationService).building).toBe(building);
    });

    it('should list the levels of every building in the region when set', () => {
        spectator = createComponent({
            providers: [
                MockProvider(SettingsService, {
                    get: vi.fn(
                        (key: string) => key === 'app.use_region',
                    ) as SettingsService['get'],
                    signal: vi.fn(() => signal(undefined)),
                }),
                MockProvider(OrganisationService, {
                    active_region: signal({ id: 'reg-1' }),
                    active_building: signal(null),
                    buildings: [
                        {
                            id: 'bld-1',
                            parent_id: 'reg-1',
                            display_name: 'Ord',
                        },
                        {
                            id: 'bld-2',
                            parent_id: 'reg-2',
                            display_name: 'Far',
                        },
                    ],
                    levelsForBuilding: vi.fn((bld) => [
                        { id: `${bld.id}-l1`, display_name: 'L1' },
                    ]),
                } as never),
            ],
        });
        expect(spectator.component.levels()).toEqual([
            { id: 'bld-1-l1', display_name: 'Ord - L1' },
        ]);
    });

    it('should not reset when reset_when_idle is false', () => {
        spectator = createComponent({ props: { reset_when_idle: false } });
        spectator.component.onMouse();
        vi.advanceTimersByTime(spectator.component.reset_delay * 1000);
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });
});
