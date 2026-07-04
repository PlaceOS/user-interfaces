import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { SignageTopbarComponent } from '../../app/signage/signage-topbar.component';
import { SignageStateService } from '../../app/signage/signage-state.service';

describe('SignageTopbarComponent', () => {
    let spectator: Spectator<SignageTopbarComponent>;
    let org: any;
    let active_levels: any;
    let query_params: any;

    const createComponent = createComponentFactory({
        component: SignageTopbarComponent,
        detectChanges: false,
        providers: [MockProvider(SignageStateService, {})],
    });

    function build(level_lookup: any = null) {
        org = {
            active_levels,
            levelWithID: jest.fn(() => level_lookup),
            buildings: [{ id: 'bld-1' }],
            building: null,
        };
        spectator = createComponent({
            providers: [
                MockProvider(OrganisationService, org),
                MockProvider(ActivatedRoute, {
                    queryParamMap: of(query_params) as any,
                }),
                MockProvider(Router, { navigate: jest.fn() }),
            ],
        });
    }

    beforeEach(() => {
        active_levels = signal<any[]>([]);
        query_params = { has: () => false, get: () => null };
    });

    it('should default the selected zone to the first active level', () => {
        active_levels.set([{ id: 'l1' }, { id: 'l2' }]);
        build();
        TestBed.flushEffects();

        expect(spectator.component.zones()).toEqual(['l1']);
    });

    it('should drop selected zones that are no longer active levels', () => {
        active_levels.set([{ id: 'l1' }, { id: 'l2' }]);
        build();
        TestBed.flushEffects();
        spectator.component.zones.set(['l1', 'l2']);

        active_levels.set([{ id: 'l1' }]);
        TestBed.flushEffects();

        expect(spectator.component.zones()).toEqual(['l1']);
    });

    it('should apply zone ids from the route and switch the building', () => {
        active_levels.set([{ id: 'l1' }]);
        query_params = {
            has: (key: string) => key === 'zone_ids',
            get: () => 'l1',
        };
        build({ id: 'l1', parent_id: 'bld-1' });
        TestBed.flushEffects();

        expect(org.levelWithID).toHaveBeenCalledWith(['l1']);
        expect(
            (spectator.inject(OrganisationService) as any).building,
        ).toEqual({ id: 'bld-1' });
        expect(spectator.component.zones()).toEqual(['l1']);
    });
});
