import { PlaceZone } from '@placeos/ts-client';
import { displayZoneIds } from '../../app/displays/display-zones.util';

describe('displayZoneIds', () => {
    it('includes the selected group zone and its parent tree', async () => {
        const organisation = new PlaceZone({ id: 'org' });
        const region = new PlaceZone({ id: 'region', parent_id: 'org' });
        const building = new PlaceZone({
            id: 'building',
            parent_id: 'region',
        });
        const load_zone = vi.fn(async (zone_id: string) =>
            zone_id === region.id ? region : null,
        );

        const result = await displayZoneIds(
            [building],
            [organisation],
            load_zone,
        );

        expect(result).toEqual(['org', 'region', 'building']);
        expect(load_zone).toHaveBeenCalledWith('region');
    });

    it('deduplicates shared ancestors for multiple group zones', async () => {
        const organisation = new PlaceZone({ id: 'org' });
        const first = new PlaceZone({ id: 'first', parent_id: 'org' });
        const second = new PlaceZone({ id: 'second', parent_id: 'org' });

        const result = await displayZoneIds(
            [first, second],
            [organisation],
            async () => null,
        );

        expect(result).toEqual(['org', 'first', 'second']);
    });
});
