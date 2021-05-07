import { CateringItem } from '../lib/catering-item.class';

describe('CateringItem', () => {
    let item: CateringItem;

    beforeEach(() => (item = new CateringItem()));

    it('should expose properties', () => {
        expect(item.id).toBe('');
        expect(item.name).toBe('');
        expect(item.category).toBe('');
        expect(item.description).toBe('');
        expect(item.unit_price).toBe(0);
        expect(item.quantity).toBe(0);
        expect(item.options).toEqual([]);
        expect(item.tags).toEqual([]);
        expect(item.total_cost).toBe(0);
        item = new CateringItem({
            id: 'item-1',
            name: 'Coffee',
            category: 'Drinks',
            description: 'Most amazing coffee',
            unit_price: 100,
            quantity: 2,
            tags: ['healthy'],
        });
        expect(item.id).toBe('item-1');
        expect(item.name).toBe('Coffee');
        expect(item.category).toBe('Drinks');
        expect(item.description).toBe('Most amazing coffee');
        expect(item.unit_price).toBe(100);
        expect(item.quantity).toBe(2);
        expect(item.options).toEqual([]);
        expect(item.tags).toEqual(['healthy']);
        expect(item.total_cost).toBe(200);
    });
});
