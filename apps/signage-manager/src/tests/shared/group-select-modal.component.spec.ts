import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    GroupSelectModalComponent,
    GroupSelectModalData,
    groupTreeRows,
} from '../../app/shared/group-select-modal.component';

function group(id: string, name: string, parent_id?: string) {
    return { group: { id, name, parent_id } } as any;
}

async function createComponent(data: GroupSelectModalData) {
    await TestBed.configureTestingModule({
        imports: [GroupSelectModalComponent],
        providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
    })
        .overrideComponent(GroupSelectModalComponent, {
            set: { template: '', imports: [] },
        })
        .compileComponents();
    return TestBed.createComponent(GroupSelectModalComponent).componentInstance;
}

describe('GroupSelectModalComponent', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        TestBed.resetTestingModule();
    });

    it('returns an empty hierarchy when nothing is selected', async () => {
        const component = await createComponent({
            title: 'Select',
            groups: [group('a', 'Alpha')],
        });

        expect(component.selected_hierarchy()).toEqual([]);
    });

    it('builds the ancestor chain from the selected group up to the root', async () => {
        const component = await createComponent({
            title: 'Select',
            selected_group_id: 'c',
            groups: [
                group('a', 'Alpha'),
                group('b', 'Beta', 'a'),
                group('c', 'Gamma', 'b'),
            ],
        });

        expect(component.selected_hierarchy().map((_) => _.id)).toEqual([
            'a',
            'b',
            'c',
        ]);
    });

    it('stops safely when a parent reference forms a cycle', async () => {
        const component = await createComponent({
            title: 'Select',
            selected_group_id: 'a',
            groups: [group('a', 'Alpha', 'b'), group('b', 'Beta', 'a')],
        });

        const ids = component.selected_hierarchy().map((_) => _.id);
        expect(ids).toEqual(['b', 'a']);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('lists every group until a search term is entered', async () => {
        const component = await createComponent({
            title: 'Select',
            groups: [group('a', 'Alpha'), group('b', 'Beta')],
        });

        expect(component.filtered_groups()).toHaveLength(2);

        component.search.set('  bet ');

        expect(component.filtered_groups().map((_) => _.item.group.id)).toEqual(
            ['b'],
        );
    });

    it('matches the search term against group descriptions', async () => {
        const target = group('b', 'Beta');
        target.group.description = 'Lobby screens';
        const component = await createComponent({
            title: 'Select',
            groups: [group('a', 'Alpha'), target],
        });

        component.search.set('lobby');

        expect(component.filtered_groups().map((_) => _.item.group.id)).toEqual(
            ['b'],
        );
    });

    it('only includes the selected group when its parent is missing', async () => {
        const component = await createComponent({
            title: 'Select',
            selected_group_id: 'c',
            groups: [group('c', 'Gamma', 'missing')],
        });

        expect(component.selected_hierarchy().map((_) => _.id)).toEqual(['c']);
    });

    it('keeps the tree order and the path of matches', async () => {
        const component = await createComponent({
            title: 'Select',
            groups: [
                group('a', 'Lobby'),
                group('z', 'Other'),
                group('b', 'Lobby east', 'a'),
            ],
        });

        component.search.set('lobby');

        expect(
            component
                .filtered_groups()
                .map(({ item, path }) => [item.group.id, path]),
        ).toEqual([
            ['a', []],
            ['b', ['Lobby']],
        ]);
    });
});

describe('groupTreeRows', () => {
    const order = (rows: ReturnType<typeof groupTreeRows>) =>
        rows.map(({ item, path }) => [item.group.id, path.join('/')]);

    it('puts children under their parent with the ancestor names', () => {
        const rows = groupTreeRows([
            group('a', 'Alpha'),
            group('c', 'Gamma', 'b'),
            group('b', 'Beta', 'a'),
            group('d', 'Delta'),
        ]);

        expect(order(rows)).toEqual([
            ['a', ''],
            ['b', 'Alpha'],
            ['c', 'Alpha/Beta'],
            ['d', ''],
        ]);
    });

    it('shows groups with a missing parent as roots', () => {
        const rows = groupTreeRows([group('b', 'Beta', 'missing')]);

        expect(order(rows)).toEqual([['b', '']]);
    });

    it('shows each group in a parent cycle once', () => {
        const rows = groupTreeRows([
            group('a', 'Alpha', 'b'),
            group('b', 'Beta', 'a'),
        ]);

        expect(order(rows)).toEqual([
            ['a', ''],
            ['b', 'Alpha'],
        ]);
    });
});
