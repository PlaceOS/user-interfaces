import { signal } from '@angular/core';
import { OrganisationService } from '@placeos/common';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';
import {
    assignedDeskBuilding,
    hasAssignedDesk,
    loadMetadataResources,
} from '../lib/booking-resource.loaders';

const desksIn = (zone: string, assigned_to = '') => [
    {
        zone: { id: zone },
        metadata: { desks: { details: [{ id: `${zone}-desk`, assigned_to }] } },
    },
];

describe('booking resource loaders', () => {
    const org = {
        building: { id: 'bld-1' },
        buildings: [{ id: 'bld-1' }, { id: 'bld-2' }],
        building_list: signal([{ id: 'bld-1' }, { id: 'bld-2' }]),
        levels: [],
    } as unknown as OrganisationService;

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.listChildMetadata).mockImplementation(
            async (id: string) =>
                (id === 'bld-2'
                    ? desksIn('lvl-2', 'Me@Example.com')
                    : desksIn('lvl-1')) as any,
        );
    });

    it('should share the metadata request of a resource list and an assignment scan', async () => {
        const [desks, home] = await Promise.all([
            loadMetadataResources(org, 'desks', false),
            assignedDeskBuilding(org, 'me@example.com', false),
        ]);

        expect(desks.map((desk) => desk.id)).toEqual(['lvl-1-desk']);
        expect(home).toBe('bld-2');
        // One request for each building, not one for each caller
        expect(ts_client.listChildMetadata).toHaveBeenCalledTimes(2);
    });

    it('should share an in-flight assignment scan between callers', async () => {
        const [home, has_desk] = await Promise.all([
            assignedDeskBuilding(org, 'me@example.com', false),
            hasAssignedDesk(org, 'me@example.com', false),
        ]);

        expect(home).toBe('bld-2');
        expect(has_desk).toBe(true);
        expect(ts_client.listChildMetadata).toHaveBeenCalledTimes(2);
        expect(await hasAssignedDesk(org, 'other@example.com', false)).toBe(
            false,
        );
    });
});
