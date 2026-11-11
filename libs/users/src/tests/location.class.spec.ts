import { MapLocation } from '../lib/location.class';

describe('MapLocation', () => {
    afterEach(() => vi.useRealTimers());

    it('should default to an unknown location seen now', () => {
        vi.useFakeTimers({ now: new Date('2030-01-01T00:00:00Z') });
        const location = new MapLocation();
        expect(location.type).toBe('other');
        expect(location.position).toEqual({ x: 0, y: 0 });
        expect(location.last_seen).toBe(1893456000);
        expect(location.at_location).toBe(false);
        expect(location.coordinates_from).toBe('top-left');
    });

    it('should use the location field when type is missing', () => {
        expect(new MapLocation({ location: 'wireless' }).type).toBe('wireless');
    });

    it.each([
        [{ position: 'pos', map_id: 'map', asset_id: 'asset' }, 'pos'],
        [{ map_id: 'map', asset_id: 'asset' }, 'map'],
        [{ asset_id: 'asset' }, 'asset'],
    ])('should prefer explicit position IDs %o', (data, position) => {
        expect(new MapLocation(data).position).toBe(position);
    });

    it('should normalise raw coordinates against the map size', () => {
        const location = new MapLocation({
            x: 50,
            y: 25,
            map_width: 200,
            map_height: 100,
        });
        expect(location.position).toEqual({ x: 0.25, y: 0.25 });
    });
});
