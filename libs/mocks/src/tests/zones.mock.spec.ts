import { registerMockEndpoint } from '@placeos/ts-client';

import {
    MOCK_BUILDINGS,
    MOCK_LEVELS,
    MOCK_ORGS,
    MOCK_REGIONS,
} from '../lib/api/zone.data';
import { registerMockZones } from '../lib/api/zones.mock';

vi.mock('@placeos/ts-client');

/** Build the request object a mocked endpoint is handed by ts-client */
function request(overrides: Record<string, any> = {}): any {
    return {
        url: '',
        path: '',
        method: 'GET',
        metadata: {},
        route_params: {},
        query_params: {},
        body: null,
        ...overrides,
    };
}

describe('registerMockZones', () => {
    /** Callback registered for the given method + path */
    function handler(method: string, path: string) {
        const match = vi
            .mocked(registerMockEndpoint)
            .mock.calls.map(([options]) => options)
            .find((o: any) => o.method === method && o.path === path);
        if (!match) throw new Error(`No handler for ${method} ${path}`);
        return (req: any) => (match as any).callback(req);
    }

    const listZones = (query_params = {}) =>
        handler('GET', '/api/engine/v2/zones')(request({ query_params })) as any[];
    const showZone = (id: string) =>
        handler('GET', '/api/engine/v2/zones/:id')(
            request({ route_params: { id } }),
        );

    beforeEach(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockZones();
    });

    describe('zone listing', () => {
        it('should return the whole hierarchy by default', () => {
            const ids = listZones().map((z) => z.id);

            for (const zone of [
                ...MOCK_ORGS,
                ...MOCK_REGIONS,
                ...MOCK_BUILDINGS,
                ...MOCK_LEVELS,
            ]) {
                expect(ids).toContain(zone.id);
            }
        });

        it('should filter zones by tag', () => {
            const buildings = listZones({ tags: 'building' });

            expect(buildings).toHaveLength(MOCK_BUILDINGS.length);
            expect(
                buildings.every((z) => z.tags.includes('building')),
            ).toBe(true);
        });

        it('should match any of several space separated tags', () => {
            const zones = listZones({ tags: 'org region' });

            expect(zones).toHaveLength(
                MOCK_ORGS.length + MOCK_REGIONS.length,
            );
        });

        it('should filter zones by parent', () => {
            const region = MOCK_REGIONS[0];
            const children = listZones({ parent_id: region.id });

            expect(children.length).toBeGreaterThan(0);
            expect(children.every((z) => z.parent_id === region.id)).toBe(true);
        });

        it('should return nothing for an unknown tag', () => {
            expect(listZones({ tags: 'not-a-real-tag' })).toEqual([]);
        });
    });

    describe('zone details', () => {
        it('should return the zone matching the id', () => {
            const building = MOCK_BUILDINGS[0];
            expect(showZone(building.id)).toMatchObject({
                id: building.id,
                name: building.name,
            });
        });

        it('should raise a 404 for an unknown zone', () => {
            expect(() => showZone('zone-does-not-exist')).toThrow(
                expect.objectContaining({ status: 404 }),
            );
        });
    });

    describe('fixture integrity', () => {
        const all_zones = [
            ...MOCK_ORGS,
            ...MOCK_REGIONS,
            ...MOCK_BUILDINGS,
            ...MOCK_LEVELS,
        ];

        it('should give every zone a unique id', () => {
            const ids = all_zones.map((z) => z.id);
            expect(new Set(ids).size).toBe(ids.length);
        });

        it('should point every parent_id at an existing zone', () => {
            const ids = new Set(all_zones.map((z) => z.id));
            const orphans = all_zones
                .filter((z) => z.parent_id && !ids.has(z.parent_id))
                .map((z) => `${z.id} -> ${z.parent_id}`);

            // Orphans break the org hierarchy that every app builds in mock mode
            expect(orphans).toEqual([]);
        });

        it('should tag levels, buildings and regions for hierarchy lookups', () => {
            expect(MOCK_REGIONS.every((z) => z.tags.includes('region'))).toBe(
                true,
            );
            expect(
                MOCK_BUILDINGS.every((z) => z.tags.includes('building')),
            ).toBe(true);
            expect(MOCK_LEVELS.every((z) => z.tags.includes('level'))).toBe(
                true,
            );
        });
    });
});
