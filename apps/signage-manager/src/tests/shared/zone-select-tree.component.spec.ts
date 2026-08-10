import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceZone } from '@placeos/ts-client';
import { PagedSearch } from '../../app/shared/paged-search';
import { ZoneSelectTreeComponent } from '../../app/shared/zone-select-tree.component';

describe('ZoneSelectTreeComponent', () => {
    async function make(zones: PlaceZone[], exclude_ids: string[] = []) {
        await TestBed.configureTestingModule({
            imports: [ZoneSelectTreeComponent],
        })
            .overrideComponent(ZoneSelectTreeComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        const fixture = TestBed.createComponent(ZoneSelectTreeComponent);
        const list = {
            search: signal(''),
            items: signal(zones),
            loading: signal(false),
            has_more: signal(false),
            loadMore: vi.fn(),
        } as unknown as PagedSearch<PlaceZone>;
        fixture.componentRef.setInput('list', list);
        fixture.componentRef.setInput('exclude_ids', exclude_ids);
        fixture.detectChanges();
        return fixture.componentInstance;
    }

    it('displays loaded zones as an expandable hierarchy', async () => {
        const component = await make([
            { id: 'root', name: 'Root' } as PlaceZone,
            { id: 'child', name: 'Child', parent_id: 'root' } as PlaceZone,
            {
                id: 'grandchild',
                name: 'Grandchild',
                parent_id: 'child',
            } as PlaceZone,
            { id: 'other', name: 'Other' } as PlaceZone,
        ]);

        expect(
            component
                .flat_tree_nodes()
                .map((node) => [node.zone.id, node.level]),
        ).toEqual([
            ['root', 0],
            ['other', 0],
        ]);

        component.toggleNode(component.tree_nodes()[0]);
        component.toggleNode(component.tree_nodes()[0].children[0]);

        expect(
            component
                .flat_tree_nodes()
                .map((node) => [node.zone.id, node.level]),
        ).toEqual([
            ['root', 0],
            ['child', 1],
            ['grandchild', 2],
            ['other', 0],
        ]);
    });

    it('excludes existing assignments while keeping their children visible', async () => {
        const component = await make(
            [
                { id: 'root', name: 'Root' } as PlaceZone,
                {
                    id: 'child',
                    name: 'Child',
                    parent_id: 'root',
                } as PlaceZone,
            ],
            ['root'],
        );

        expect(component.tree_nodes().map((node) => node.zone.id)).toEqual([
            'child',
        ]);
    });
});
