import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageGroupContentComponent } from '../../app/groups/signage-group-content.component';
import { SignageService } from '../../app/signage.service';

describe('SignageGroupContentComponent', () => {
    const managed_group = signal<any>(null);
    const managed_group_tab = signal<'users' | 'zones'>('users');
    const service_stub = {
        managed_group,
        managed_group_tab,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        }).overrideComponent(SignageGroupContentComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupContentComponent)
            .componentInstance;
    }

    beforeEach(() => {
        managed_group.set(null);
        managed_group_tab.set('users');
    });

    it('mirrors the selected group and active tab from the service', () => {
        const component = make();
        expect(component.selected_group()).toBeNull();
        expect(component.active_tab()).toBe('users');

        managed_group.set({ id: 'group-1' });
        managed_group_tab.set('zones');

        expect(component.selected_group()).toEqual({ id: 'group-1' });
        expect(component.active_tab()).toBe('zones');
    });
});
