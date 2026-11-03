import { assetZones } from '../lib/org/asset-zones';

describe('assetZones', () => {
    const org = {
        organisation: { id: 'org-1' },
        buildings: [{ id: 'bld-1', parent_id: 'region-1' }],
        levels: [{ id: 'lvl-1', parent_id: 'bld-1' }],
    } as any;

    it('should list the org, region, building and level of a level', () => {
        expect(assetZones(org, 'lvl-1')).toEqual([
            'org-1',
            'region-1',
            'bld-1',
            'lvl-1',
        ]);
    });

    it('should skip zones that are not known', () => {
        expect(
            assetZones({ ...org, buildings: [{ id: 'bld-1' }] }, 'lvl-1'),
        ).toEqual(['org-1', 'bld-1', 'lvl-1']);
        expect(assetZones(org, 'lvl-unknown')).toEqual([
            'org-1',
            'lvl-unknown',
        ]);
    });

    it('should use the active building for levels that are not loaded', () => {
        expect(
            assetZones(
                { ...org, building: { id: 'bld-2', parent_id: 'region-2' } },
                'lvl-unknown',
            ),
        ).toEqual(['org-1', 'region-2', 'bld-2', 'lvl-unknown']);
    });
});
