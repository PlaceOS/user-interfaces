import { type Page } from '@placeos/ts-client/compat';
import { queryAllPages } from '../app/query-all-pages';

type Item = { id: string };

/** A 6.x style page, as `orThrowPage` gives it */
const page = (
    data: Item[],
    total: number,
    next: Page<Item[]>['next'],
): Page<Item[]> => ({ data, total, next_offset: null, next });

describe('queryAllPages', () => {
    it('should combine each page of results', async () => {
        const last_page = vi.fn(() =>
            Promise.resolve(page([{ id: 'item-3' }], 3, null)),
        );
        const next_page = vi.fn(() =>
            Promise.resolve(page([{ id: 'item-2' }], 3, last_page)),
        );
        const first_page = Promise.resolve(
            page([{ id: 'item-1' }], 3, next_page),
        );

        const result = await queryAllPages(first_page);

        expect(result.map((item) => item.id)).toEqual([
            'item-1',
            'item-2',
            'item-3',
        ]);
        expect(next_page).toHaveBeenCalledTimes(1);
        expect(last_page).toHaveBeenCalledTimes(1);
    });

    it('should stop when the current page is empty', async () => {
        const skipped_page = vi.fn(() => null);
        const empty_page = vi.fn(() =>
            Promise.resolve(page([], 3, skipped_page)),
        );
        const first_page = Promise.resolve(
            page([{ id: 'item-1' }], 3, empty_page),
        );

        const result = await queryAllPages(first_page);

        expect(result).toEqual([{ id: 'item-1' }]);
        expect(empty_page).toHaveBeenCalledTimes(1);
        expect(skipped_page).not.toHaveBeenCalled();
    });

    it('should stop when the list reaches the total', async () => {
        const skipped_page = vi.fn(() => null);
        const first_page = Promise.resolve(
            page([{ id: 'item-1' }, { id: 'item-2' }], 2, skipped_page),
        );

        const result = await queryAllPages(first_page);

        expect(result).toHaveLength(2);
        expect(skipped_page).not.toHaveBeenCalled();
    });

    it('should stop after 50 pages when the API never ends', async () => {
        let count = 0;
        const endless = (): Promise<Page<Item[]>> => {
            count += 1;
            // Fail fast instead of looping forever if the bound regresses
            if (count > 50) throw new Error('requested page 51');
            return Promise.resolve(page([{ id: `${count}` }], 0, endless));
        };

        const result = await queryAllPages(endless());

        expect(result).toHaveLength(50);
        expect(count).toBe(50);
    });
});
