import { Building, BuildingLevel } from '@placeos/organisation';
import { getUnixTime } from 'date-fns';
import { MapLocation } from '../lib/location.class';

describe('MapLocation', () => {
    let location: MapLocation;

    beforeEach(() => (location = new MapLocation()));

    it('should expose properties', () => {
        expect(location.type).toBe('other');
        expect(location.position).toEqual({ x: 0, y: 0 });
        expect(location.variance).toBe(0);
        expect(location.last_seen).toBe(getUnixTime(new Date()));
        expect(location.level).toBe(undefined);
        expect(location.building).toBe(undefined);
        expect(location.at_location).toBe(false);
        expect(location.coordinates_from).toBe('top-left');
        location = new MapLocation({
            type: 'desk',
            position: 'test',
            variance: 10,
            last_seen: 1,
            level: new BuildingLevel(),
            building: new Building(),
            at_location: true,
            coordinates_from: 'top-right',
        });
        expect(location.type).toBe('desk');
        expect(location.position).toBe('test');
        expect(location.variance).toBe(10);
        expect(location.last_seen).toBe(1);
        expect(location.level).toBeInstanceOf(BuildingLevel);
        expect(location.building).toBeInstanceOf(Building);
        expect(location.at_location).toBe(true);
        expect(location.coordinates_from).toBe('top-right');
    });
});
