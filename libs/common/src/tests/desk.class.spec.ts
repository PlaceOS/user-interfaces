import { PlaceZone } from '@placeos/ts-client';
import { Desk } from '../lib/desk.class';

describe('Desk', () => {
    let item: Desk;

    beforeEach(() => (item = new Desk()));

    it('should expose properties', () => {
        expect(item.id).toBe('');
        expect(item.name).toBe('');
        expect(item.bookable).toBe(false);
        expect(item.zone).toBeInstanceOf(PlaceZone);
        expect(item.zone?.id).toBe('');
        expect(item.groups).toEqual([]);
        item = new Desk({
            id: 'desk-1',
            name: 'Some Desk',
            bookable: true,
            zone: new PlaceZone({ id: 'zone-1' }),
            groups: ['Admin'],
        });
        expect(item.id).toBe('desk-1');
        expect(item.name).toBe('Some Desk');
        expect(item.bookable).toBe(true);
        expect(item.zone).toBeInstanceOf(PlaceZone);
        expect(item.zone?.id).toBe('zone-1');
        expect(item.groups).toEqual(['Admin']);
    });

    it('should allow getting simplified version of desk data', () => {
        const obj: any = item.toJSON();
        expect(obj.zone).toBeUndefined();
        expect(obj.id).toBe('');
        expect(obj.name).toBe('');
        expect(obj.bookable).toBe(false);
        expect(obj.groups).toEqual([]);
    });
});
