import { BuildingLevel } from '@placeos/common';
import { mockData } from '@placeos/common/tests';
import { type JsonValue, Metadata, metadata } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';

import { conciergeProtectedIdSources } from '../../app/map-manager/protected-ids';

vi.mock('@placeos/ts-client', { spy: true });

describe('conciergeProtectedIdSources', () => {
    const level = new BuildingLevel({ id: 'lvl-1', parent_id: 'bld-1' });
    /** The reply of `metadata.show` with the details of the named metadata */
    const showReply = (name: string, details: JsonValue) =>
        mockReply({ [name]: mockData(Metadata, { name, details }) });

    beforeEach(() => vi.clearAllMocks());

    it('should protect metadata desks by map ID, then desk ID', async () => {
        vi.mocked(metadata.show).mockResolvedValue(
            showReply('desks', [
                { id: 'desk-1', map_id: 'table-1', name: 'Desk 1' },
                { id: 'desk-2' },
                { name: 'No ID' },
            ]),
        );

        const desks = await conciergeProtectedIdSources(level, 'org-1').desks();

        expect(metadata.show).toHaveBeenCalledWith({
            id: 'lvl-1',
            name: 'desks',
        });
        expect(desks).toEqual([
            { id: 'table-1', kind: 'desk', label: 'Desk 1' },
            { id: 'desk-2', kind: 'desk', label: 'desk-2' },
        ]);
    });

    it('should protect only the map area points of interest on the level', async () => {
        vi.mocked(metadata.show).mockResolvedValue(
            showReply('points-of-interest', {
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

        expect(metadata.show).toHaveBeenCalledWith({
            id: 'org-1',
            name: 'points-of-interest',
        });
        expect(points).toEqual([{ id: 'area-1', kind: 'poi', label: 'Lift' }]);
    });
});
