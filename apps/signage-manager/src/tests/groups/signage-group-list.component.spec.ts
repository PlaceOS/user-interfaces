import { CdkTreeModule } from '@angular/cdk/tree';
import { Component, Pipe, PipeTransform, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlaceGroup } from '@placeos/ts-client';
import { SignageGroupAdminService } from '../../app/groups/signage-group-admin.service';
import { SignageGroupListComponent } from '../../app/groups/signage-group-list.component';

function group(id: string, extra: Partial<PlaceGroup> = {}) {
    return new PlaceGroup({ id, name: id, ...extra });
}

@Component({ selector: 'icon', template: '<ng-content />' })
class IconStubComponent {}

@Pipe({ name: 'translate' })
class TranslateStubPipe implements PipeTransform {
    public transform(key: string) {
        return key;
    }
}

describe('SignageGroupListComponent', () => {
    const manageable_signage_groups = signal<PlaceGroup[]>([]);
    const managed_group = signal<PlaceGroup | undefined>(undefined);
    const signage_group_tree_expanded = signal<Record<string, boolean>>({});
    const managed_group_id = signal('');
    const manageable_signage_groups_failed = signal(false);
    const service_stub = {
        manageable_signage_groups,
        manageable_signage_groups_failed,
        managed_group,
        signage_group_tree_expanded,
        managed_group_id,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageGroupAdminService, useValue: service_stub },
            ],
        }).overrideComponent(SignageGroupListComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupListComponent)
            .componentInstance;
    }

    /** Renders the real template with the tree, and stubbed icons and text */
    async function render() {
        TestBed.configureTestingModule({
            providers: [
                { provide: SignageGroupAdminService, useValue: service_stub },
            ],
        }).overrideComponent(SignageGroupListComponent, {
            set: {
                imports: [
                    CdkTreeModule,
                    FormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatRippleModule,
                    IconStubComponent,
                    TranslateStubPipe,
                ],
            },
        });
        const fixture = TestBed.createComponent(SignageGroupListComponent);
        await fixture.whenStable();
        return fixture;
    }

    function rows(component: SignageGroupListComponent) {
        return component
            .visible_group_rows()
            .map(({ group, level }) => [group.id, level]);
    }

    beforeEach(() => {
        manageable_signage_groups_failed.set(false);
        managed_group.set(undefined);
        managed_group_id.set('');
        signage_group_tree_expanded.set({});
        manageable_signage_groups.set([
            group('root', { name: 'Root' }),
            group('child-b', { name: 'Beta', parent_id: 'root' }),
            group('child-a', { name: 'Alpha', parent_id: 'root' }),
        ]);
    });

    it('only shows search results when a search term is present', () => {
        const component = make();
        expect(component.show_search_results()).toBe(false);
        expect(component.filtered_groups()).toEqual([]);

        component.search.set('alpha');
        expect(component.show_search_results()).toBe(true);
        expect(component.filtered_groups().map(({ id }) => id)).toEqual([
            'child-a',
        ]);
    });

    it('matches search against name, description and id', () => {
        const component = make();
        manageable_signage_groups.set([
            group('g1', { name: 'Lobby', description: 'front desk' }),
            group('g2', { name: 'Kiosk', description: 'entrance' }),
        ]);

        component.search.set('front');
        expect(component.filtered_groups().map(({ id }) => id)).toEqual(['g1']);

        component.search.set('g2');
        expect(component.filtered_groups().map(({ id }) => id)).toEqual(['g2']);
    });

    it('counts children from the group list', () => {
        const component = make();
        expect(component.childCount(group('root'))).toBe(2);
        expect(component.childCount(group('child-a'))).toBe(0);
    });

    it('selects a group by writing its id to the shared service signal', () => {
        const component = make();
        component.selectGroup(group('child-a'));
        expect(managed_group_id()).toBe('child-a');
    });

    it('builds the tree from the group list, children sorted by name', () => {
        const component = make();
        expect(rows(component)).toEqual([['root', 0]]);

        component.setExpanded(group('root'), true);

        expect(signage_group_tree_expanded()).toEqual({ root: true });
        expect(rows(component)).toEqual([
            ['root', 0],
            ['child-a', 1],
            ['child-b', 1],
        ]);
    });

    it('keeps open branches when the group list reloads', () => {
        const component = make();
        component.setExpanded(group('root'), true);

        manageable_signage_groups.set([...manageable_signage_groups()]);

        expect(rows(component).length).toBe(3);
    });

    it('keeps the aria-level of each row after the list reloads', async () => {
        signage_group_tree_expanded.set({ root: true });
        const fixture = await render();
        const levels = () =>
            Array.from(
                (fixture.nativeElement as HTMLElement).querySelectorAll(
                    'cdk-tree-node',
                ),
                (node) => node.getAttribute('aria-level'),
            );
        expect(levels()).toEqual(['1', '2', '2']);

        // A save reloads the list, so every row is a new object
        manageable_signage_groups.set([...manageable_signage_groups()]);
        await fixture.whenStable();

        expect(levels()).toEqual(['1', '2', '2']);
    });

    it('shows an error, not an empty state, when the group list fails', async () => {
        manageable_signage_groups.set([]);
        manageable_signage_groups_failed.set(true);
        const fixture = await render();
        const text = (fixture.nativeElement as HTMLElement).textContent;

        expect(text).toContain('SIGNAGE_MANAGER.GROUPS_LOAD_ERROR');
        expect(text).not.toContain('SIGNAGE_MANAGER.NO_MANAGEABLE_GROUPS');
    });

    it('shows groups whose parent is not in the list as roots', () => {
        manageable_signage_groups.set([
            group('managed', { parent_id: 'not-managed' }),
        ]);
        const component = make();

        expect(rows(component)).toEqual([['managed', 0]]);
    });

    it('opens the branches down to the selected group', () => {
        manageable_signage_groups.set([
            group('root'),
            group('child', { parent_id: 'root' }),
            group('leaf', { parent_id: 'child' }),
        ]);
        const component = make();

        managed_group.set(group('leaf', { parent_id: 'child' }));
        TestBed.tick();

        expect(rows(component)).toEqual([
            ['root', 0],
            ['child', 1],
            ['leaf', 2],
        ]);
        expect(signage_group_tree_expanded()).toEqual({
            root: true,
            child: true,
        });
    });

    it('stops when the parents form a cycle', () => {
        manageable_signage_groups.set([
            group('root'),
            group('loop-a', { parent_id: 'loop-b' }),
            group('loop-b', { parent_id: 'loop-a' }),
        ]);
        const component = make();
        managed_group.set(group('loop-a', { parent_id: 'loop-b' }));
        TestBed.tick();

        expect(rows(component)).toEqual([['root', 0]]);
    });
});
