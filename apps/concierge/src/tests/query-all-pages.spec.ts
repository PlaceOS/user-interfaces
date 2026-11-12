import type { QueryResponse } from '@placeos/ts-client';
import { queryAllPages } from '../app/query-all-pages';

describe('queryAllPages', () => {
    it('should combine each page of results', async () => {
        const last_page = vi.fn().mockResolvedValue({
            data: [{ id: 'item-3' }],
            total: 3,
            next: null,
        });
        const next_page = vi.fn().mockResolvedValue({
            data: [{ id: 'item-2' }],
            total: 3,
            next: last_page,
        });
        const first_page = Promise.resolve({
            data: [{ id: 'item-1' }],
            total: 3,
            next: next_page,
        }) as QueryResponse<{ id: string }>;

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
        const skipped_page = vi.fn();
        const empty_page = vi.fn().mockResolvedValue({
            data: [],
            total: 3,
            next: skipped_page,
        });
        const first_page = Promise.resolve({
            data: [{ id: 'item-1' }],
            total: 3,
            next: empty_page,
        }) as QueryResponse<{ id: string }>;

        const result = await queryAllPages(first_page);

        expect(result).toEqual([{ id: 'item-1' }]);
        expect(empty_page).toHaveBeenCalledTimes(1);
        expect(skipped_page).not.toHaveBeenCalled();
    });

    it('should stop when the list reaches the total', async () => {
        const skipped_page = vi.fn();
        const first_page = Promise.resolve({
            data: [{ id: 'item-1' }, { id: 'item-2' }],
            total: 2,
            next: skipped_page,
        }) as QueryResponse<{ id: string }>;

        const result = await queryAllPages(first_page);

        expect(result).toHaveLength(2);
        expect(skipped_page).not.toHaveBeenCalled();
    });

    it('should stop after 50 pages when the API never ends', async () => {
        type Page = { data: { id: number }[]; next: () => Promise<Page> };
        let count = 0;
        const page = (): Promise<Page> => {
            count += 1;
            // Fail fast instead of looping forever if the bound regresses
            if (count > 50) throw new Error('requested page 51');
            return Promise.resolve({ data: [{ id: count }], next: page });
        };

        const result = await queryAllPages(
            page() as unknown as QueryResponse<{ id: number }>,
        );

        expect(result).toHaveLength(50);
        expect(count).toBe(50);
    });
});
