import { type QueryResponse } from '@placeos/ts-client';
import { mergeItems, queryAll, searchParam } from '../app/signage-service.util';

interface Item {
    id: string;
    name: string;
    display_name: string;
}

function item(id: string, display_name = '') {
    return { id, name: id, display_name };
}

/** Query whose pages hold the given items. `next` counts each page read. */
function pagedQuery(pages: Item[][], reads = { count: 0 }) {
    const page = (index: number): QueryResponse<Item> => {
        reads.count++;
        return Promise.resolve({
            data: pages[index] || [],
            total: pages.flat().length,
            next: () => (index + 1 < pages.length ? page(index + 1) : null),
        });
    };
    return page(0);
}

describe('queryAll', () => {
    it('reads every page in order', async () => {
        const items = await queryAll(
            pagedQuery([[item('a'), item('b')], [item('c')]]),
        );

        expect(items.map(({ id }) => id)).toEqual(['a', 'b', 'c']);
    });

    it('stops after the page limit when the server keeps sending pages', async () => {
        const reads = { count: 0 };
        const endless: QueryResponse<Item> =
            (function page(): QueryResponse<Item> {
                // Fail instead of hanging the worker if the limit breaks
                if (reads.count >= 3) throw new Error('read past the limit');
                reads.count++;
                return Promise.resolve({
                    data: [item(`p${reads.count}`)],
                    total: 0,
                    next: () => page(),
                });
            })();

        const items = await queryAll(endless, 3);

        expect(reads.count).toBe(3);
        expect(items.map(({ id }) => id)).toEqual(['p1', 'p2', 'p3']);
    });

    // A next link on an empty page would otherwise read pages forever
    it('stops at an empty page even when it has a next page', async () => {
        const reads = { count: 0 };

        const items = await queryAll(
            pagedQuery([[item('a')], [], [item('c')]], reads),
        );

        expect(reads.count).toBe(2);
        expect(items.map(({ id }) => id)).toEqual(['a']);
    });
});

describe('searchParam', () => {
    it('sends the trimmed term with the search fields', () => {
        expect(searchParam('  lobby ')).toEqual({
            q: 'lobby',
            fields: 'id,name,display_name,description,tags',
        });
    });

    it('sends nothing for a blank term', () => {
        expect(searchParam('   ')).toEqual({});
    });
});

describe('mergeItems', () => {
    it('shows local edits in place of loaded items, sorted by shown name', () => {
        const list = [item('b', 'Bravo'), item('a', 'Alpha'), item('c')];

        const merged = mergeItems(list, { b: item('b', 'Zulu') });

        expect(merged.map(({ id }) => id)).toEqual(['a', 'c', 'b']);
        expect(merged[2].display_name).toBe('Zulu');
    });

    it('never adds an edited item the list does not hold', () => {
        expect(mergeItems([item('a')], { x: item('x') })).toEqual([item('a')]);
    });
});
