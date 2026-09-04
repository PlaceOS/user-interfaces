import { TestBed } from '@angular/core/testing';
import {
    byDisplayName,
    byName,
    PagedSearch,
} from '../../app/shared/paged-search';

describe('PagedSearch', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));

    const pageOf = (ids: string[], total = ids.length, next: any = null) => ({
        data: ids.map((id) => ({ id, name: id })),
        total,
        next: next ? () => Promise.resolve(next) : null,
    });

    const query = vi.fn();

    /** Build the list and let its first (empty term) query settle */
    const make = async (sort?: any) => {
        const list = TestBed.runInInjectionContext(
            () => new PagedSearch<any>((search) => query(search), sort),
        );
        TestBed.tick();
        await flush();
        return list;
    };

    beforeEach(() => {
        vi.clearAllMocks();
        vi.useFakeTimers({ shouldAdvanceTime: true });
        query.mockReturnValue(Promise.resolve(pageOf(['b', 'a'])));
        TestBed.configureTestingModule({});
    });

    afterEach(() => vi.useRealTimers());

    it('loads the first page with an empty search term', async () => {
        const list = await make();

        expect(query).toHaveBeenCalledWith('');
        expect(list.items().map((_) => _.id)).toEqual(['b', 'a']);
        expect(list.loading()).toBe(false);
        expect(list.has_more()).toBe(false);
    });

    it('sorts the results when given a comparator', async () => {
        const list = await make(byName);

        expect(list.items().map((_) => _.id)).toEqual(['a', 'b']);
    });

    it('sends the debounced term to the query and replaces the results', async () => {
        const list = await make();
        query.mockReturnValue(Promise.resolve(pageOf(['lobby'], 1)));

        list.search.set('lobby');
        expect(query).toHaveBeenCalledTimes(1);

        await vi.advanceTimersByTimeAsync(500);
        await flush();

        expect(query).toHaveBeenLastCalledWith('lobby');
        expect(list.items().map((_) => _.id)).toEqual(['lobby']);
    });

    it('pages through the results as more are requested', async () => {
        query.mockReturnValue(
            Promise.resolve(pageOf(['a'], 3, pageOf(['b'], 3, pageOf(['c'], 3)))),
        );
        const list = await make();
        expect(list.has_more()).toBe(true);

        list.loadMore();
        await flush();
        list.loadMore();
        await flush();

        expect(list.items().map((_) => _.id)).toEqual(['a', 'b', 'c']);
        expect(list.has_more()).toBe(false);
    });

    it('ignores a request for more while a page is in flight', async () => {
        query.mockReturnValue(Promise.resolve(pageOf(['a'], 2, pageOf(['b'], 2))));
        const list = await make();

        list.loadMore();
        list.loadMore();
        await flush();

        expect(list.items().map((_) => _.id)).toEqual(['a', 'b']);
    });

    it('discards pages from a query the search moved on from', async () => {
        const list = await make();
        let resolve_stale: (value: any) => void = () => {};
        query.mockReturnValueOnce(
            new Promise((resolve) => (resolve_stale = resolve)),
        );

        list.search.set('stale');
        await vi.advanceTimersByTimeAsync(500);
        query.mockReturnValue(Promise.resolve(pageOf(['fresh'], 1)));
        list.search.set('fresh');
        await vi.advanceTimersByTimeAsync(500);
        await flush();
        resolve_stale(pageOf(['stale'], 1));
        await flush();

        expect(list.items().map((_) => _.id)).toEqual(['fresh']);
    });

    it('stops paging when a page fails', async () => {
        query.mockReturnValue(Promise.reject(new Error('nope')));
        const list = await make();

        expect(list.items()).toEqual([]);
        expect(list.has_more()).toBe(false);
        expect(list.loading()).toBe(false);
    });

    it('stays empty when the query is not allowed', async () => {
        query.mockReturnValue(null);
        const list = await make();

        expect(list.items()).toEqual([]);
        expect(list.loading()).toBe(false);
    });

    it('orders by display_name ahead of name', () => {
        const list = [
            { name: 'b-zone' },
            { name: 'a-zone', display_name: 'z-zone' },
        ].sort(byDisplayName);

        expect(list.map((_) => _.name)).toEqual(['b-zone', 'a-zone']);
    });
});
