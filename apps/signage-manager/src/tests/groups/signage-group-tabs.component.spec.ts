import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageGroupTabsComponent } from '../../app/groups/signage-group-tabs.component';
import { SignageService } from '../../app/signage.service';

describe('SignageGroupTabsComponent', () => {
    const managed_group_tab = signal<'users' | 'zones'>('users');
    const service_stub = {
        managed_group_tab,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        }).overrideComponent(SignageGroupTabsComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupTabsComponent)
            .componentInstance;
    }

    beforeEach(() => managed_group_tab.set('users'));

    it('lists the users and zones tabs', () => {
        const component = make();
        expect(component.tabs.map((tab) => tab.id)).toEqual(['users', 'zones']);
    });

    it('switches the active tab through the shared service signal', () => {
        const component = make();
        expect(component.active_tab()).toBe('users');

        component.active_tab.set('zones');

        expect(managed_group_tab()).toBe('zones');
    });
});
