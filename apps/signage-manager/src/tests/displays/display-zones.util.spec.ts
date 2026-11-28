import { displayZoneIds } from '../../app/displays/display-zones.util';
import { signageZone } from '../../app/signage-models';

describe('displayZoneIds', () => {
    it('includes the selected group zone and its parent tree', async () => {
        const organisation = signageZone({ id: 'org' });
        const region = signageZone({ id: 'region', parent_id: 'org' });
        const building = signageZone({
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
        const organisation = signageZone({ id: 'org' });
        const first = signageZone({ id: 'first', parent_id: 'org' });
        const second = signageZone({ id: 'second', parent_id: 'org' });

        const result = await displayZoneIds(
            [first, second],
            [organisation],
            async () => null,
        );

        expect(result).toEqual(['org', 'first', 'second']);
    });
});
