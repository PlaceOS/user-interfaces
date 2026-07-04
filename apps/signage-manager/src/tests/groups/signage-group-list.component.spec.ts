import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SignageGroupListComponent } from '../../app/groups/signage-group-list.component';
import { SignageService } from '../../app/signage.service';

function group(id: string, extra: Record<string, unknown> = {}) {
    return { id, name: id, description: '', parent_id: '', ...extra } as any;
}

function node(group_data: any, children: any[] = []) {
    return {
        group: group_data,
        children,
        children_loaded: children.length > 0,
        children_loading: false,
    };
}

describe('SignageGroupListComponent', () => {
    const manageable_signage_groups = signal<any[]>([]);
    const root_manageable_signage_groups = signal<any[]>([]);
    const managed_group = signal<any>(undefined);
    const signage_group_tree_expanded = signal<Record<string, boolean>>({});
    const group_children = jest.fn();
    const managed_group_id = signal('');
    const service_stub = {
        manageable_signage_groups,
        root_manageable_signage_groups,
        managed_group,
        signage_group_tree_expanded,
        managed_group_id,
        groupChildren: group_children,
    };

    function make() {
        TestBed.configureTestingModule({
            providers: [{ provide: SignageService, useValue: service_stub }],
        }).overrideComponent(SignageGroupListComponent, {
            set: { template: '', imports: [] },
        });
        return TestBed.createComponent(SignageGroupListComponent)
            .componentInstance;
    }

    beforeEach(() => {
        jest.clearAllMocks();
        group_children.mockResolvedValue([]);
        managed_group.set(undefined);
        managed_group_id.set('');
        signage_group_tree_expanded.set({});
        manageable_signage_groups.set([
            group('root', { name: 'Root', children_count: 2 }),
            group('child-b', { name: 'Beta', parent_id: 'root' }),
            group('child-a', { name: 'Alpha', parent_id: 'root' }),
        ]);
        root_manageable_signage_groups.set([
            group('root', { name: 'Root', children_count: 2 }),
        ]);
    });

    it('only shows search results when a search term is present', () => {
        const component = make();
        expect(component.show_search_results()).toBe(false);
        expect(component.filtered_groups()).toEqual([]);

        component.search.set('alpha');
        expect(component.show_search_results()).toBe(true);
        expect(component.filtered_groups().map((g: any) => g.id)).toEqual([
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
        expect(component.filtered_groups().map((g: any) => g.id)).toEqual([
            'g1',
        ]);

        component.search.set('g2');
        expect(component.filtered_groups().map((g: any) => g.id)).toEqual([
            'g2',
        ]);
    });

    it('builds a parent-to-children lookup sorted by name', () => {
        const component = make();
        const lookup = component.child_lookup();
        expect(lookup['root'].map((g: any) => g.id)).toEqual([
            'child-a',
            'child-b',
        ]);
    });

    it('counts children from the lookup', () => {
        const component = make();
        expect(component.childCount('root')).toBe(2);
    });

    it('falls back to a group children_count when no children are loaded', () => {
        const component = make();
        manageable_signage_groups.set([group('lonely', { children_count: 7 })]);
        // A bare group object (not a tree node) uses its reported count.
        expect(component.childCount(group('lonely', { children_count: 7 }))).toBe(
            7,
        );
    });

    it('selects a group by writing its id to the shared service signal', () => {
        const component = make();
        component.selectGroup(group('child-a'));
        expect(managed_group_id()).toBe('child-a');
    });

    it('flattens loaded tree nodes into visible rows with levels', () => {
        const component = make();
        component.tree_nodes.set([
            node(group('root', { name: 'Root' }), [
                node(group('child-a', { parent_id: 'root' })),
            ]),
        ]);
        signage_group_tree_expanded.set({ root: true });

        const rows = component.visible_group_rows();
        expect(rows.map((row: any) => [row.group.id, row.level])).toEqual([
            ['root', 0],
            ['child-a', 1],
        ]);
    });

    it('hides children of collapsed nodes', () => {
        const component = make();
        component.tree_nodes.set([
            node(group('root', { name: 'Root' }), [
                node(group('child-a', { parent_id: 'root' })),
            ]),
        ]);
        signage_group_tree_expanded.set({});

        const rows = component.visible_group_rows();
        expect(rows.map((row: any) => row.group.id)).toEqual(['root']);
    });

    it('expands a node, records the state and loads its children', async () => {
        const component = make();
        const root_node = node(group('root', { children_count: 2 }));
        component.tree_nodes.set([root_node]);

        component.onExpandedChange(root_node, true);

        expect(component.isExpanded('root')).toBe(true);
        expect(signage_group_tree_expanded()['root']).toBe(true);
        expect(group_children).toHaveBeenCalledWith('root');
        expect(component.tree_nodes()[0].children_loading).toBe(true);

        await Promise.resolve();
        await Promise.resolve();

        const loaded = component.tree_nodes()[0];
        expect(loaded.children_loading).toBe(false);
        expect(loaded.children_loaded).toBe(true);
    });

    it('does not reload children when collapsing a node', () => {
        const component = make();
        signage_group_tree_expanded.set({ root: true });
        const root_node = node(group('root', { children_count: 2 }));
        component.tree_nodes.set([root_node]);

        component.onExpandedChange(root_node, false);

        expect(signage_group_tree_expanded()['root']).toBe(false);
        expect(group_children).not.toHaveBeenCalled();
    });
});
