import { BuildingLevel } from '../lib/level.class';

describe('Level', () => {
    let item: BuildingLevel;

    beforeEach(() => (item = new BuildingLevel()));

    it('should expose properties', () => {
        expect(item.id).toBe('');
        expect(item.parent_id).toBe('');
        expect(item.name).toBe('');
        expect(item.display_name).toBe('');
        expect(item.capacity).toBe(0);
        expect(item.number).toBe('');
        expect(item.map_id).toBe('');
        expect(item.settings).toEqual({});
        expect(item.locations).toEqual([]);
        item = new BuildingLevel({
            id: 'level-1',
            parent_id: 'bld-1',
            name: 'Building Level 2',
            display_name: 'Level 2',
            capacity: 420,
            map_id: 'bld-1-level-1',
            locations: [{ id: '1', name: 'One' }],
        });
        expect(item.id).toBe('level-1');
        expect(item.parent_id).toBe('bld-1');
        expect(item.name).toBe('Building Level 2');
        expect(item.display_name).toBe('Level 2');
        expect(item.capacity).toBe(420);
        expect(item.number).toBe('2');
        expect(item.map_id).toBe('bld-1-level-1');
        expect(item.locations).toEqual([{ id: '1', name: 'One' }]);
    });

    it('should try to get level number from display name', () => {
        expect(item.number).toBe('');
        item = new BuildingLevel({ display_name: 'Level 2' });
        expect(item.number).toBe('2');
        item = new BuildingLevel({ display_name: 'Mezzanine' });
        expect(item.number).toBe('M');
        item = new BuildingLevel({ display_name: 'Building Level 42' });
        expect(item.number).toBe('42');
    });
});
