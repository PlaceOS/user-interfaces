import { fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';

import { MapsPeopleService } from 'libs/common/src/lib/mapspeople.service';
import { IndoorMapsComponent } from 'libs/components/src/lib/indoor-maps.component';
import { InteractiveMapComponent } from 'libs/components/src/lib/interactive-map.component';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';
import { ExploreDesksService } from '../lib/explore-desks.service';
import { ExploreLockersService } from '../lib/explore-lockers.service';
import { ExploreMapControlComponent } from '../lib/explore-map-control.component';
import { ExploreMapViewComponent } from '../lib/explore-map-view.component';
import { ExploreParkingService } from '../lib/explore-parking.service';
import { ExploreSpacesService } from '../lib/explore-spaces.service';
import { ExploreStateService } from '../lib/explore-state.service';
import { ExploreZonesService } from '../lib/explore-zones.service';
import { ExploreZoomControlComponent } from '../lib/explore-zoom-control.component';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');
jest.mock('libs/users/src/lib/staff.fn');

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import * as user_mod from 'libs/users/src/lib/staff.fn';

describe('ExploreMapViewComponent', () => {
    let spectator: SpectatorRouting<ExploreMapViewComponent>;
    const createComponent = createRoutingFactory({
        component: ExploreMapViewComponent,
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(ExploreMapControlComponent),
            MockComponent(ExploreZoomControlComponent),
            MockComponent(IndoorMapsComponent),
        ],
        componentProviders: [
            MockProvider(ExploreSpacesService),
            MockProvider(ExploreDesksService),
            MockProvider(ExploreZonesService),
            MockProvider(ExploreParkingService),
            MockProvider(ExploreLockersService),
            MockProvider(SpacePipe, { transform: jest.fn(() => ({})) } as any),
            MockProvider(MapsPeopleService, {
                use_mapspeople$: new BehaviorSubject(false),
            } as any),
        ],
        providers: [
            MockProvider(OrganisationService, {
                initialised: of(true),
                levelWithID: jest.fn(),
                binding: jest.fn(() => 'sys'),
                active_levels: new BehaviorSubject([]),
                active_building: new BehaviorSubject({ id: 'bld-1' }),
            } as any),
            MockProvider(SpacesService, { initialised: of(true) }),
            MockProvider(ExploreStateService, {
                level: new BehaviorSubject({ id: 'lvl-1' } as any),
                options: new BehaviorSubject({ is_public: true }),
                reset: jest.fn(),
                setLevel: jest.fn(),
                setFeatures: jest.fn(),
                setOptions: jest.fn(),
            } as any),
            MockProvider(SettingsService, {
                value: jest.fn(),
                get: jest.fn(() => false),
            } as any),
        ],
        imports: [
            MockModule(MatSlideToggleModule),
            MockModule(MatSelectModule),
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    afterEach(() => {
        (spectator.inject(ExploreStateService).setFeatures as any).mockReset();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show map component', () => expect('interactive-map').toExist());

    it('should handle option changes', () => {
        expect('[name="zones"]').toExist();
        const state = spectator.inject(ExploreStateService);
        spectator.triggerEventHandler(
            'mat-slide-toggle',
            'ngModelChange',
            true,
        );
        expect(state.setOptions).toHaveBeenCalledWith({ disable: undefined });
    });

    it('should handle level changes', () => {
        const state = spectator.inject(ExploreStateService);
        expect(state.setLevel).not.toHaveBeenCalled();
        spectator.setRouteQueryParam('level', 'lvl-1');
        spectator.detectChanges();
        expect(state.setLevel).toHaveBeenCalledWith('lvl-1');
    });

    it('should handle locating users', fakeAsync(() => {
        const state = spectator.inject(ExploreStateService);
        (ts_client as any).getModule = jest.fn(() => ({
            execute: jest.fn(() => [{}]),
        }));
        (common_mod as any).notifyError = jest.fn();
        (user_mod as any).showStaff = jest.fn(() => of({}));
        spectator.setRouteQueryParam('user', 'jim@jim.com');
        spectator.tick(1000);
        expect(state.setFeatures).toHaveBeenCalledTimes(2);
        (ts_client as any).getModule = jest.fn(() => ({
            execute: jest.fn(() => []),
        }));
        expect(common_mod.notifyError).not.toHaveBeenCalled();
        spectator.setRouteQueryParam('user', 'jim2@jim.com');
        spectator.detectChanges();
        spectator.tick(1000);
        // expect(common_mod.notifyError).toHaveBeenCalled();
        expect(state.setFeatures).toHaveBeenCalledTimes(3);
    }));

    it('should handle location spaces', fakeAsync(() => {
        const state = spectator.inject(ExploreStateService);
        const spaces = spectator.inject(SpacesService);
        (spaces as any).find = jest.fn(() => ({}));
        spectator.setRouteQueryParam('space', 'space-1');
        spectator.detectChanges();
        expect(state.setFeatures).toHaveBeenCalledTimes(2);
        (spaces as any).find = jest.fn(() => null);
        spectator.setRouteQueryParam('space', 'space-2');
        spectator.detectChanges();
        expect(state.setFeatures).toHaveBeenCalledTimes(3);
    }));
});
