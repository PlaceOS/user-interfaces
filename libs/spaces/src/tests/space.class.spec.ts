import { Space } from '../lib/space.class';

describe('Space', () => {
    let space: Space;

    beforeEach(() => (space = new Space()));

    it('should create class', () => {
        expect(space).toBeInstanceOf(Space);
    });

    it('should expose properties', () => {
        expect(space.id).toBe('');
        expect(space.name).toBe('');
        expect(space.display_name).toBe('');
        expect(space.email).toBe('');
        expect(space.capacity).toBe(-1);
        expect(space.feature_list).toEqual([]);
        expect(space.bookable).toBe(false);
        expect(space.zones).toEqual([]);
        expect(space.support_url).toBe('');
        expect(space.map_id).toBe('');
        expect(space.images).toEqual([]);
        space = new Space({
            id: 'test',
            name: 'Space',
            display_name: 'Outer Space',
            email: 'space@place.tech',
            capacity: 42,
            feature_list: ['VidConf'],
            bookable: true,
            zones: ['zone-bld-1'],
            support_url: 'assets/support.html',
            map_id: 'area-space',
            images: ['assets/img/space.png'],
        });
        expect(space.id).toBe('test');
        expect(space.name).toBe('Space');
        expect(space.display_name).toBe('Outer Space');
        expect(space.email).toBe('space@place.tech');
        expect(space.capacity).toBe(42);
        expect(space.feature_list).toEqual(['VidConf']);
        expect(space.bookable).toBe(true);
        expect(space.zones).toEqual(['zone-bld-1']);
        expect(space.support_url).toBe('assets/support.html');
        expect(space.map_id).toBe('area-space');
        expect(space.images).toContain('assets/img/space.png');
    });
});
