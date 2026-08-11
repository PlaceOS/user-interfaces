import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { OrganisationService } from '@placeos/common';
import { SignageService } from '../../app/signage.service';
import { ZoneListComponent } from '../../app/zones/zone-list.component';

describe('ZoneListComponent', () => {
    const initialised = signal(true);
    const all_zones = signal<any[]>([]);
    const root_zones = signal<any[]>([]);
    const filtered_zones = signal<any[]>([]);
    const selected_zone = signal<any>(null);
    const zone_search_term = signal('');
    const zone_tree_expanded = signal<Record<string, boolean>>({});
    const zone_tree_children_cache = signal<Record<string, any[]>>({});
    const zone_children = vi.fn();
    const org_stub = { initialised };
    const service_stub = {
        all_zones,
        root_zones,
        filtered_zones,
        selected_zone,
        zone_search_term,
        zone_tree_expanded,
        zone_tree_children_cache,
        zoneChildren: zone_children,
    };

    async function make() {
        await TestBed.configureTestingModule({
            imports: [ZoneListComponent],
            providers: [
                { provide: SignageService, useValue: service_stub },
                { provide: OrganisationService, useValue: org_stub },
            ],
        })
            .overrideComponent(ZoneListComponent, { set: { template: '' } })
            .compileComponents();
        const fixture = TestBed.createComponent(ZoneListComponent);
        fixture.detectChanges();
        TestBed.flushEffects();
        return fixture.componentInstance;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        initialised.set(true);
        all_zones.set([]);
        root_zones.set([]);
        filtered_zones.set([]);
        selected_zone.set(null);
        zone_search_term.set('');
        zone_tree_expanded.set({});
        zone_tree_children_cache.set({});
        zone_children.mockResolvedValue([]);
    });

    it('only enables search after selecting a zone', async () => {
        const component = await make();
        expect(component.search_enabled()).toBe(false);
        expect(component.show_search_results()).toBe(false);

        zone_search_term.set('  lobby ');
        expect(component.show_search_results()).toBe(false);

        selected_zone.set({ id: 'r1', display_name: 'Root 1' });
        expect(component.search_enabled()).toBe(true);
        expect(component.show_search_results()).toBe(true);
    });

    it('presents search results beneath the selected zone', async () => {
        selected_zone.set({ id: 'r1' });
        zone_search_term.set('lobby');
        filtered_zones.set([{ id: 'z1', parent_id: 'r1', children_count: 2 }]);
        const component = await make();

        expect(
            component
                .flat_tree_nodes()
                .map((node) => [node.zone.id, node.level]),
        ).toEqual([
            ['r1', 0],
            ['z1', 1],
        ]);
        expect(component.childCount(component.tree_nodes()[0])).toBe(1);
        expect(
            component.childCount(component.tree_nodes()[0].children[0]),
        ).toBe(2);
    });

    it('derives child counts and child lookups from the full zone list', async () => {
        all_zones.set([
            { id: 'r1' },
            { id: 'c1', parent_id: 'r1' },
            { id: 'c2', parent_id: 'r1' },
            { id: 'gc1', parent_id: 'c1' },
        ]);
        const component = await make();

        expect(component.child_count_lookup()).toEqual({ r1: 2, c1: 1 });
        expect(component.children_lookup()['r1'].map((z: any) => z.id)).toEqual(
            ['c1', 'c2'],
        );
    });

    it('reports child count from the lookup for a known parent zone', async () => {
        all_zones.set([{ id: 'r1' }, { id: 'c1', parent_id: 'r1' }]);
        const component = await make();

        expect(component.childCount('r1')).toBe(1);
        expect(component.childCount('c1')).toBe(0);
    });

    it('falls back to a zone children_count when it has no lookup entry', async () => {
        const component = await make();
        expect(
            component.childCount({ id: 'x', children_count: 4 } as any),
        ).toBe(4);
    });

    it('builds root tree nodes from the service root zones', async () => {
        root_zones.set([{ id: 'r1', name: 'Root 1' }]);
        all_zones.set([{ id: 'r1' }, { id: 'c1', parent_id: 'r1' }]);
        const component = await make();

        const flat = component.flat_tree_nodes();
        expect(flat.map((n) => n.zone.id)).toEqual(['r1']);
        expect(flat[0].level).toBe(0);
    });

    it('selects a zone through the shared selection signal', async () => {
        zone_search_term.set('lobby');
        const component = await make();
        component.selectZone({ id: 'z9' } as any);
        expect(selected_zone()?.id).toBe('z9');
        expect(zone_search_term()).toBe('');
    });

    it('automatically expands the root and fetches its children', async () => {
        root_zones.set([{ id: 'r1', name: 'Root 1', children_count: 1 }]);
        all_zones.set([{ id: 'r1' }, { id: 'c1', parent_id: 'r1' }]);
        zone_children.mockResolvedValue([{ id: 'c1', parent_id: 'r1' }]);
        const component = await make();
        const node = component.tree_nodes()[0];

        expect(component.isExpanded(node)).toBe(true);
        expect(zone_children).toHaveBeenCalledWith('r1');
    });

    it('allows the automatically expanded root to be collapsed', async () => {
        root_zones.set([{ id: 'r1', name: 'Root 1', children_count: 1 }]);
        all_zones.set([{ id: 'r1' }, { id: 'c1', parent_id: 'r1' }]);
        const component = await make();
        const node = component.tree_nodes()[0];

        component.onExpandedChange(node, false);

        expect(component.isExpanded(node)).toBe(false);
        expect(zone_children).toHaveBeenCalledOnce();
    });
});
