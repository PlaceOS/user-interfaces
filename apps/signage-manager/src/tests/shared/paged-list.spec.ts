import { PagedList } from '../../app/shared/paged-list';

interface Row {
    id: string;
    name: string;
    signage?: boolean;
}

describe('PagedList', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    /** Page whose `next` yields the following page, API style */
    const pageOf = (
        ids: string[],
        total: number,
        next: unknown = null,
    ): any => ({
        data: ids.map((id) => ({ id, name: id })),
        total,
        next: next ? () => Promise.resolve(next) : null,
    });

    const idsOf = (list: PagedList<Row>) => list.items().map(({ id }) => id);

    /** List settled on `first_page` */
    const load = async (first_page: any, list = new PagedList<Row>()) => {
        list.reset(Promise.resolve(first_page));
        await flush();
        return list;
    };

    it('loads one page up front and leaves the rest for scrolling', async () => {
        const list = await load(pageOf(['a', 'b'], 4, pageOf(['c', 'd'], 4)));

        expect(idsOf(list)).toEqual(['a', 'b']);
        expect(list.has_more()).toBe(true);
        expect(list.loading()).toBe(false);
        expect(list.total()).toBe(4);
    });

    it('appends the next page when more are requested', async () => {
        const list = await load(pageOf(['a', 'b'], 4, pageOf(['c', 'd'], 4)));

        list.loadMore();
        await flush();

        expect(idsOf(list)).toEqual(['a', 'b', 'c', 'd']);
        expect(list.has_more()).toBe(false);
    });

    it('keeps the items sorted across pages', async () => {
        const list = await load(
            pageOf(['b'], 2, pageOf(['a'], 2)),
            new PagedList<Row>({ sort: (x, y) => x.id.localeCompare(y.id) }),
        );

        list.loadMore();
        await flush();

        expect(idsOf(list)).toEqual(['a', 'b']);
    });

    it('does not request the next page twice while one is in flight', async () => {
        const next = vi.fn(() => new Promise(() => {}));
        const list = await load({ ...pageOf(['a'], 3), next });

        list.loadMore();
        list.loadMore();

        expect(next).toHaveBeenCalledTimes(1);
    });

    it('does not request anything once the last page is loaded', async () => {
        const next = vi.fn();
        const list = await load({ ...pageOf(['a', 'b'], 2), next });

        expect(list.has_more()).toBe(false);
        list.loadMore();

        expect(next).not.toHaveBeenCalled();
    });

    it('does not duplicate an item already held when its page arrives', async () => {
        const list = await load(pageOf(['a', 'b'], 3, pageOf(['b', 'c'], 3)));

        list.loadMore();
        await flush();

        expect(idsOf(list)).toEqual(['a', 'b', 'c']);
    });

    it('stops paging when a page comes back empty', async () => {
        const list = await load(pageOf(['a'], 5, pageOf([], 5)));

        list.loadMore();
        await flush();

        expect(list.has_more()).toBe(false);
    });

    // An empty list after a failure would read as "nothing found"
    it('flags a failed page and loads it on retry', async () => {
        const next = vi
            .fn()
            .mockImplementationOnce(() => Promise.reject(new Error('offline')))
            .mockImplementationOnce(() => Promise.resolve(pageOf(['b'], 2)));
        const list = await load({ ...pageOf(['a'], 2), next });

        list.loadMore();
        await flush();

        expect(list.error()).toBe(true);
        expect(list.has_more()).toBe(false);

        expect(list.retry()).toBe(true);
        await flush();

        expect(list.error()).toBe(false);
        expect(idsOf(list)).toEqual(['a', 'b']);
    });

    it('leaves a failed first page to the owner to reset', async () => {
        const list = new PagedList<Row>();
        list.reset(Promise.reject(new Error('offline')));
        await flush();

        expect(list.error()).toBe(true);
        expect(list.retry()).toBe(false);
    });

    it('discards pages from a superseded query', async () => {
        const list = new PagedList<Row>();
        let resolveStale: (page: unknown) => void = () => {};
        list.reset(new Promise((resolve) => (resolveStale = resolve)));
        list.reset(Promise.resolve(pageOf(['fresh'], 1)));
        await flush();
        resolveStale(pageOf(['stale'], 1));
        await flush();

        expect(idsOf(list)).toEqual(['fresh']);
    });

    // The stale page does not clear the flag, so the list would show
    // loading forever
    it('stops loading when cleared while a page is in flight', async () => {
        const list = new PagedList<Row>();
        let resolveStale: (page: unknown) => void = () => {};
        list.reset(new Promise((resolve) => (resolveStale = resolve)));
        expect(list.loading()).toBe(true);

        list.reset(null);
        resolveStale(pageOf(['stale'], 1));
        await flush();

        expect(list.loading()).toBe(false);
        expect(idsOf(list)).toEqual([]);
    });

    it('keeps the items on screen until a reload of the same query lands', async () => {
        const list = await load(pageOf(['a', 'b'], 2));
        let resolveReload: (page: unknown) => void = () => {};

        list.reset(new Promise((resolve) => (resolveReload = resolve)), {
            keep_items: true,
        });
        expect(idsOf(list)).toEqual(['a', 'b']);
        expect(list.total()).toBe(2);

        resolveReload(pageOf(['b'], 1));
        await flush();

        expect(idsOf(list)).toEqual(['b']);
        expect(list.total()).toBe(1);
    });

    it('counts filtered out rows when it pages', async () => {
        const list = new PagedList<Row>({ filter: (row) => !!row.signage });
        list.reset(
            Promise.resolve({
                data: [
                    { id: 'a', name: 'a', signage: true },
                    { id: 'b', name: 'b', signage: false },
                ],
                total: 2,
                next: null,
            } as any),
        );
        await flush();

        expect(idsOf(list)).toEqual(['a']);
        expect(list.loaded_rows).toBe(2);
        expect(list.has_more()).toBe(false);
    });

    // Later pages can report an older total while the search index catches up
    it('keeps the total of the first page and local changes to it', async () => {
        const list = await load(pageOf(['a'], 2, pageOf(['b'], 1)));
        list.adjustTotal(1);

        list.loadMore();
        await flush();

        expect(list.total()).toBe(3);
    });
});
