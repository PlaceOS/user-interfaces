import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlaceZone } from '@placeos/ts-client';
import { PagedSearch } from '../../app/shared/paged-search';
import { ZoneSelectTreeComponent } from '../../app/shared/zone-select-tree.component';

describe('ZoneSelectTreeComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    async function make(
        zones: PlaceZone[],
        exclude_ids: string[] = [],
        roots: PlaceZone[] | null = null,
        load_children:
            | ((parent_id: string) => Promise<PlaceZone[]>)
            | null = null,
        scoped_search = false,
        selected: PlaceZone | null = null,
    ) {
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
            error: signal(false),
            loadMore: vi.fn(),
        } as unknown as PagedSearch<PlaceZone>;
        fixture.componentRef.setInput('list', list);
        fixture.componentRef.setInput('exclude_ids', exclude_ids);
        fixture.componentRef.setInput('roots', roots);
        fixture.componentRef.setInput('load_children', load_children);
        fixture.componentRef.setInput('scoped_search', scoped_search);
        fixture.componentRef.setInput('selected', selected);
        fixture.detectChanges();
        return fixture.componentInstance;
    }

    it('keeps a node unloaded with a retry when its children fail to load', async () => {
        const load_children = vi
            .fn()
            .mockRejectedValueOnce(new Error('Network'))
            .mockResolvedValueOnce([
                { id: 'child', name: 'Child', parent_id: 'root' } as PlaceZone,
            ]);
        const component = await make(
            [],
            [],
            [{ id: 'root', name: 'Root', children_count: 1 } as PlaceZone],
            load_children,
        );
        await vi.waitFor(() =>
            expect(component.tree_nodes()[0].children_error).toBe(true),
        );
        const root = component.tree_nodes()[0];
        expect(root.children_loaded).toBe(false);
        expect(component.canExpand(root)).toBe(true);
        TestBed.tick();
        expect(load_children).toHaveBeenCalledOnce();

        await component.loadChildren('root');

        expect(component.tree_nodes()[0].children_error).toBe(false);
        expect(component.flat_tree_nodes().map(({ zone }) => zone.id)).toEqual([
            'root',
            'child',
        ]);
    });

    it('exposes expansion to assistive tech and the arrow keys', async () => {
        await TestBed.configureTestingModule({
            imports: [ZoneSelectTreeComponent],
        }).compileComponents();
        const fixture = TestBed.createComponent(ZoneSelectTreeComponent);
        fixture.componentRef.setInput('list', {
            search: signal(''),
            items: signal([
                { id: 'root', name: 'Root' },
                { id: 'child', name: 'Child', parent_id: 'root' },
            ]),
            loading: signal(false),
            has_more: signal(false),
            error: signal(false),
            loadMore: vi.fn(),
        } as unknown as PagedSearch<PlaceZone>);
        const selected = vi.fn();
        fixture.componentInstance.zoneSelected.subscribe(selected);
        await fixture.whenStable();
        const element: HTMLElement = fixture.nativeElement;
        const items = () =>
            Array.from(element.querySelectorAll('[role="treeitem"]'));
        const root = items()[0] as HTMLElement;
        expect(root.getAttribute('aria-expanded')).toBe('false');

        root.focus();
        root.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
        );
        await fixture.whenStable();

        expect(root.getAttribute('aria-expanded')).toBe('true');
        expect(items().length).toBe(2);

        root.dispatchEvent(
            new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
        );
        expect(selected).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'root' }),
        );
    });

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

    it('automatically expands and loads root zone children', async () => {
        const load_children = vi.fn().mockResolvedValue([
            {
                id: 'child',
                name: 'Child',
                parent_id: 'root',
                children_count: 1,
            } as PlaceZone,
        ]);
        const component = await make(
            [],
            [],
            [
                {
                    id: 'root',
                    name: 'Root',
                    children_count: 1,
                } as PlaceZone,
            ],
            load_children,
        );

        await flush();

        expect(load_children).toHaveBeenCalledWith('root');
        expect(
            component
                .flat_tree_nodes()
                .map((node) => [node.zone.id, node.level]),
        ).toEqual([
            ['root', 0],
            ['child', 1],
        ]);
        expect(component.childCount(component.tree_nodes()[0])).toBe(1);

        component.toggleNode(component.tree_nodes()[0]);

        expect(component.isExpanded(component.tree_nodes()[0])).toBe(false);
    });

    it('enables scoped search only after selecting a zone', async () => {
        const root = { id: 'root', name: 'Root' } as PlaceZone;
        const component = await make([], [], [root], null, true);

        expect(component.search_enabled()).toBe(false);

        component.list().search.set('old search');
        component.selectZone(root);

        expect(component.selected()).toBe(root);
        expect(component.list().search()).toBe('');
        expect(component.search_enabled()).toBe(true);
    });

    it('shows scoped search results beneath the selected zone', async () => {
        const root = { id: 'root', name: 'Root' } as PlaceZone;
        const result = {
            id: 'result',
            name: 'Result',
            parent_id: 'nested-parent',
        } as PlaceZone;
        const component = await make([result], [], [root], null, true, root);

        component.list().search.set('result');

        expect(
            component
                .flat_tree_nodes()
                .map((node) => [node.zone.id, node.level]),
        ).toEqual([
            ['root', 0],
            ['result', 1],
        ]);
    });
});

// The real template, so a failed search shows an error and not "no zones"
describe('ZoneSelectTreeComponent errors', () => {
    it('shows a load error that retries the search', async () => {
        await TestBed.configureTestingModule({
            imports: [ZoneSelectTreeComponent],
        }).compileComponents();
        const fixture = TestBed.createComponent(ZoneSelectTreeComponent);
        const retry = vi.fn();
        const list = {
            search: signal(''),
            items: signal<PlaceZone[]>([]),
            loading: signal(false),
            has_more: signal(false),
            error: signal(true),
            loadMore: vi.fn(),
            retry,
        } as unknown as PagedSearch<PlaceZone>;
        fixture.componentRef.setInput('list', list);
        fixture.detectChanges();

        const element: HTMLElement = fixture.nativeElement;
        element.querySelector<HTMLButtonElement>('load-error button')?.click();

        expect(retry).toHaveBeenCalledTimes(1);
    });
});
