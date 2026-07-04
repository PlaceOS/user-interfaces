import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GroupsSectionComponent } from '../../app/groups/groups.component';
import { SignageService } from '../../app/signage.service';

describe('GroupsSectionComponent', () => {
    const managed_group = signal<any>(null);
    const service_stub = {
        managed_group,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        }).overrideComponent(GroupsSectionComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(GroupsSectionComponent).componentInstance;
    }

    beforeEach(() => {
        managed_group.set(null);
    });

    it('exposes the currently managed group from the service', () => {
        const component = make();
        expect(component.selected_group()).toBeNull();

        managed_group.set({ id: 'group-1', name: 'Group 1' });
        expect(component.selected_group()).toEqual({
            id: 'group-1',
            name: 'Group 1',
        });
    });
});
