import { createEnvironmentInjector, EnvironmentInjector, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ResourceDemand } from '../../app/ui/resource-demand';

describe('ResourceDemand', () => {
    it('should hold params while no view uses them and resume after use', () => {
        const demand = new ResourceDemand<'list'>();
        const building = signal('bld-1');
        const params = demand.params('list', () => ({ building: building() }));
        expect(params()).toBeUndefined();

        const view = createEnvironmentInjector(
            [],
            TestBed.inject(EnvironmentInjector),
        );
        view.runInContext(() => demand.use('list'));
        const first = params();
        expect(first).toEqual({ building: 'bld-1' });

        view.destroy();
        building.set('bld-2');
        expect(params()).toBe(first);

        building.set('bld-1');
        TestBed.runInInjectionContext(() => demand.use('list'));
        // Equal params keep the same value, so the resource does not reload
        expect(params()).toBe(first);
        building.set('bld-2');
        expect(params()).toEqual({ building: 'bld-2' });
    });
});
