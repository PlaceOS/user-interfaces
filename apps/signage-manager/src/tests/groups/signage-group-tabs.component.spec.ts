import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageGroupAdminService } from '../../app/groups/signage-group-admin.service';
import { SignageGroupTabsComponent } from '../../app/groups/signage-group-tabs.component';

describe('SignageGroupTabsComponent', () => {
    const managed_group_tab = signal<'users' | 'zones'>('users');
    const service_stub = {
        managed_group_tab,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageGroupAdminService, useValue: service_stub },
            ],
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

    it('moves between the tabs with the arrow, Home and End keys', () => {
        const component = make();
        const press = (key: string) =>
            component.onKeydown(new KeyboardEvent('keydown', { key }));

        press('ArrowRight');
        expect(managed_group_tab()).toBe('zones');
        press('ArrowRight');
        expect(managed_group_tab()).toBe('users');
        press('ArrowLeft');
        expect(managed_group_tab()).toBe('zones');
        press('Home');
        expect(managed_group_tab()).toBe('users');
        press('End');
        expect(managed_group_tab()).toBe('zones');
        press('a');
        expect(managed_group_tab()).toBe('zones');
    });
});
