import { fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, of } from 'rxjs';

import { ExploreMapControlComponent } from '../lib/explore-map-control.component';
import { ExploreStateService } from '../lib/explore-state.service';

describe('ExploreMapControlComponent', () => {
    let spectator: SpectatorRouting<ExploreMapControlComponent>;
    const createComponent = createRoutingFactory({
        component: ExploreMapControlComponent,
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                    active_buildings: new BehaviorSubject([]),
                    active_building: new BehaviorSubject(null),
                    active_levels: new BehaviorSubject([]),
                },
            },
            {
                provide: ExploreStateService,
                useValue: {
                    level: new BehaviorSubject(null),
                    setLevel: jest.fn(),
                    setFeatures: jest.fn(),
                },
            },
            { provide: Router, useValue: { navigate: jest.fn() } },
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show dropdowns for buildings and levels', () => {
        expect('[buildings]').not.toExist();
        expect('[levels]').not.toExist();
        const buildings = spectator.inject(OrganisationService).active_buildings;
        const levels = spectator.inject(OrganisationService).active_levels;
        (levels as any).next([
            { id: 'lvl-1', name: 'Level 1' },
            { id: 'lvl-2', name: 'Level 2' },
        ]);
        spectator.detectChanges();
        expect('[buildings]').not.toExist();
        expect('[levels]').toExist();
        (buildings as any).next([
            { id: 'bld-1', name: 'Building 1' },
            { id: 'bld-2', name: 'Building 2' },
        ]);
        spectator.detectChanges();
        expect('[buildings]').toExist();
        expect('[levels]').toExist();
    });

    it('should allow switching buildings', () => {
        const buildings = spectator.inject(OrganisationService).active_buildings;
        (buildings as any).next([
            { id: 'bld-1', name: 'Building 1' },
            { id: 'bld-2', name: 'Building 2' },
        ]);
        spectator.detectChanges();
        expect('[buildings]').toExist();
        const spy = jest.spyOn(spectator.component, 'setBuilding');
        spectator.click('[buildings] mat-select');
        spectator.detectChanges();
        spectator.click(document.querySelector('mat-option'));
        expect(spy).toHaveBeenCalledWith({ id: 'bld-1', name: 'Building 1' });
    });

    it('should allow switching levels', fakeAsync(() => {
        const levels = spectator.inject(OrganisationService).active_levels;
        (levels as any).next([
            { id: 'lvl-1', name: 'Level 1' },
            { id: 'lvl-2', name: 'Level 2' },
        ]);
        spectator.detectChanges();
        expect('[levels]').toExist();
        const spy = jest.spyOn(spectator.component, 'setLevel');
        spectator.click('[levels] mat-select');
        spectator.detectChanges();
        spectator.click(document.querySelector('mat-option'));
        expect(spy).toHaveBeenCalledWith({ id: 'lvl-1', name: 'Level 1' });
        spectator.tick(240);
        expect(spectator.inject(Router).navigate).toBeCalledWith([], {
            relativeTo: spectator.inject(ActivatedRoute),
            queryParams: { zone: 'lvl-1' },
        });
        spectator.tick(10000);
    }));

    it('should handle routing changes', () => {
        const state = spectator.inject(ExploreStateService);
        expect(state.setLevel).not.toHaveBeenCalled();
        spectator.setRouteQueryParam('zone', 'lvl-1');
        spectator.detectChanges();
        expect(state.setLevel).toHaveBeenCalledWith('lvl-1');
    });
});
