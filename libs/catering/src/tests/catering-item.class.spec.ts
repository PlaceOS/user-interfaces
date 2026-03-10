import { CateringItem } from '@placeos/common';

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

    it('should clone options instead of sharing references', () => {
        const source = {
            id: 'item-1',
            options: [
                {
                    id: 'milk',
                    name: 'Milk',
                    group: 'Extras',
                    multiple: false,
                    unit_price: 100,
                    active: false,
                },
            ],
        };
        const cloned = new CateringItem(source);
        source.options[0].active = true;
        expect(cloned.options[0].active).toBe(false);
    });

    it('should update identity when option selection changes', () => {
        item = new CateringItem({
            id: 'item-1',
            options: [
                {
                    id: 'milk',
                    name: 'Milk',
                    group: 'Extras',
                    multiple: false,
                    unit_price: 100,
                    active: false,
                },
            ],
        });
        expect(item.custom_id).toBe('item-1[]menu');
        expect(item.options_string).toBe('');
        item.options[0].active = true;
        expect(item.custom_id).toBe('item-1[milk]menu');
        expect(item.options_string).toBe('milk');
    });
});
