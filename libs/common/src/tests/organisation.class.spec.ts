import { Organisation } from '../lib/organisation.class';

describe('Level', () => {
    let item: Organisation;

    beforeEach(() => (item = new Organisation()));

    it('should expose properties', () => {
        expect(item.description).toBe('');
        expect(item.count).toBe(0);
        expect(item.capacity).toBe(0);
        expect(item.tags).toEqual([]);
        expect(item.bindings).toEqual({});
        item = new Organisation({
            description: 'My Organisation',
            count: 12,
            name: 'Building Level 2',
            capacity: 365,
            tags: ['org', 'great'],
            bindings: { bind1: 'sys-1234' },
        });
        expect(item.description).toBe('My Organisation');
        expect(item.count).toBe(12);
        expect(item.capacity).toBe(365);
        expect(item.tags).toEqual(['org', 'great']);
        expect(item.bindings).toEqual({ bind1: 'sys-1234' });
    });

    it('should allow getting settings', () => {
        expect(item.setting('test')).toBeNull();
        item = new Organisation({ settings: { test: 'Testing' } });
        expect(item.setting('test')).toBe('Testing');
        item = new Organisation({ settings: { nested: { test: 'Testing' } } });
        expect(item.setting('nested.test')).toBe('Testing');
    });
});
