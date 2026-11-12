import { CateringItem } from '@placeos/common';

describe('CateringItem', () => {
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
        const item = new CateringItem({
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
