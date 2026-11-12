import { PlaceZone } from '@placeos/ts-client';
import { Desk } from '../lib/types/desk.class';

describe('Desk', () => {
    it('should use the ID as the map ID when none is given', () => {
        expect(new Desk({ id: 'desk-1' }).map_id).toBe('desk-1');
        expect(new Desk({ id: 'desk-1', map_id: 'map-1' }).map_id).toBe(
            'map-1',
        );
    });

    it('should keep fields that the class does not declare', () => {
        const desk = new Desk({ id: 'desk-1', floor_area: 4 } as Partial<Desk>);

        expect(desk['floor_area']).toBe(4);
    });

    it('should remove the zone and QR code when serialised', () => {
        const json = new Desk({
            id: 'desk-1',
            zone: new PlaceZone({ id: 'zone-1' }),
            qr_code: 'data:image/png',
            groups: ['Admin'],
        }).toJSON();

        expect(json).not.toHaveProperty('zone');
        expect(json).not.toHaveProperty('qr_code');
        expect(json).not.toHaveProperty('toJSON');
        expect(json.id).toBe('desk-1');
        expect(json.groups).toEqual(['Admin']);
    });
});
