import { BuildingLevel } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

import { conciergeProtectedIdSources } from '../../app/map-manager/protected-ids';

vi.mock('@placeos/ts-client', { spy: true });

describe('conciergeProtectedIdSources', () => {
    const level = new BuildingLevel({ id: 'lvl-1', parent_id: 'bld-1' });
    const metadata = (details: ts_client.PlaceMetadata['details']) =>
        Promise.resolve(new ts_client.PlaceMetadata({ details }));

    beforeEach(() => vi.clearAllMocks());

    it('should protect metadata desks by map ID, then desk ID', async () => {
        vi.mocked(ts_client.showMetadata).mockReturnValue(
            metadata([
                { id: 'desk-1', map_id: 'table-1', name: 'Desk 1' },
                { id: 'desk-2' },
                { name: 'No ID' },
            ]),
        );

        const desks = await conciergeProtectedIdSources(level, 'org-1').desks();

        expect(ts_client.showMetadata).toHaveBeenCalledWith('lvl-1', 'desks');
        expect(desks).toEqual([
            { id: 'table-1', kind: 'desk', label: 'Desk 1' },
            { id: 'desk-2', kind: 'desk', label: 'desk-2' },
        ]);
    });

    it('should protect only the map area points of interest on the level', async () => {
        vi.mocked(ts_client.showMetadata).mockReturnValue(
            metadata({
                'lvl-1': [
                    { id: 'poi-1', name: 'Lift', location: 'area-1' },
                    { id: 'poi-2', name: 'Pin', location: [10, 20] },
                ],
                'lvl-2': [{ id: 'poi-3', name: 'Other', location: 'area-3' }],
            }),
        );

        const points = await conciergeProtectedIdSources(
            level,
            'org-1',
        ).points_of_interest();

        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'org-1',
            'points-of-interest',
        );
        expect(points).toEqual([{ id: 'area-1', kind: 'poi', label: 'Lift' }]);
    });
});
