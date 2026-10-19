import {
    collectProtectedIds,
    mergeProtectedIds,
    ProtectedIdSet,
} from '../lib/protected-ids';

describe('protected ids', () => {
    it('merges sources and marks the set incomplete when one fails', async () => {
        const set = await collectProtectedIds({
            desks: async () => [
                { id: 'table-01.001', kind: 'desk', label: 'Desk 1' },
            ],
            rooms: async () => {
                throw new Error('offline');
            },
            areas: async () => [
                { id: 'area-1.01-status', kind: 'area', label: 'Meeting 1.01' },
                { id: 'table-01.001', kind: 'desk', label: '' },
            ],
        });
        expect(set.complete).toBe(false);
        expect(set.failed_sources).toEqual(['rooms']);
        expect(set.size).toBe(2);
        expect(set.has('table-01.001')).toBe(true);
        expect(set.has('nope')).toBe(false);
        expect(set.has(null)).toBe(false);
        expect(set.labelOf('table-01.001')).toBe('Desk 1');
        expect(set.labelOf('unknown')).toBe('unknown');
        expect(set.ids().map((entry) => entry.id)).toEqual([
            'table-01.001',
            'area-1.01-status',
        ]);
    });

    it('is complete when every source answers', () => {
        const set = mergeProtectedIds([
            { source: 'a', ids: [{ id: 'x', kind: 'other', label: 'X' }] },
            { source: 'b', ids: [] },
        ]);
        expect(set.complete).toBe(true);
        expect(set.failed_sources).toEqual([]);
        expect(ProtectedIdSet.empty().size).toBe(0);
    });
});
