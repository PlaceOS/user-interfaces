import { HashMap } from '@placeos/common';
import { registerMockEndpoint } from '@placeos/ts-client';

import { MOCK_SPACES } from '../lib/api/spaces.data';
import {
    MOCK_BUILDINGS,
    MOCK_LEVELS,
    MOCK_ORGS,
    MOCK_REGIONS,
} from '../lib/api/zone.data';
import { registerMockZones } from '../lib/api/zones.mock';
import { endpoint } from './endpoints';

vi.mock('@placeos/ts-client');

const API = '/api/engine/v2';

describe('registerMockZones', () => {
    const listZones = (query_params: Record<string, string> = {}) =>
        endpoint<HashMap[]>('GET', `${API}/zones`)({ query_params });
    const ids = (zones: HashMap[]) => zones.map((z) => z.id).sort();
    const showZone = (id: string) =>
        endpoint('GET', `${API}/zones/:id`)({ route_params: { id } });

    beforeEach(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockZones();
    });

    // Write requests save the zones to the mock session
    afterEach(() => localStorage.clear());

    describe('zone listing', () => {
        it('should return the whole hierarchy by default', () => {
            const listed = ids(listZones());

            for (const zone of [
                ...MOCK_ORGS,
                ...MOCK_REGIONS,
                ...MOCK_BUILDINGS,
                ...MOCK_LEVELS,
            ]) {
                expect(listed).toContain(zone.id);
            }
        });

        it('should match any of several space separated tags', () => {
            expect(ids(listZones({ tags: 'building' }))).toEqual(
                ids(MOCK_BUILDINGS),
            );
            expect(ids(listZones({ tags: 'org region' }))).toEqual(
                ids([...MOCK_ORGS, ...MOCK_REGIONS]),
            );
        });

        it('should filter zones by parent', () => {
            const region = MOCK_REGIONS[0];
            const children = listZones({ parent_id: region.id });

            expect(children.length).toBeGreaterThan(0);
            expect(children.every((z) => z.parent_id === region.id)).toBe(true);
        });
    });

    describe('zone details', () => {
        it('should show a zone by ID, or raise a 404', () => {
            expect(showZone(MOCK_BUILDINGS[0].id)).toBe(MOCK_BUILDINGS[0]);
            expect(() => showZone('zone-does-not-exist')).toThrow(
                expect.objectContaining({ status: 404 }),
            );
        });

        it('should keep the zone ID and list when a zone changes', () => {
            const level = MOCK_LEVELS[0];
            endpoint(
                'PATCH',
                `${API}/zones/:id`,
            )({
                route_params: { id: level.id },
                body: { id: 'zone-new-id', display_name: 'Renamed' },
            });

            expect(MOCK_LEVELS[0]).toMatchObject({
                id: level.id,
                display_name: 'Renamed',
            });
        });

        it('should list a new zone by its tags, and delete it', () => {
            const zone = endpoint<HashMap>(
                'POST',
                `${API}/zones`,
            )({
                body: { name: 'New', tags: ['mock-test'] },
            });
            expect(listZones({ tags: 'mock-test' })).toEqual([zone]);

            endpoint(
                'DELETE',
                `${API}/zones/:id`,
            )({
                route_params: { id: zone.id },
            });
            expect(listZones({ tags: 'mock-test' })).toEqual([]);
        });
    });

    describe('metadata', () => {
        const level_id = () => MOCK_LEVELS[1].id;
        const desks = { name: 'desks', details: [{ id: 'desk-saved' }] };
        const show = (name: string) =>
            endpoint<HashMap>(
                'GET',
                `${API}/metadata/:id`,
            )({
                route_params: { id: level_id() },
                query_params: { name },
            });

        it('should return saved metadata in place of generated metadata', () => {
            expect(show('desks').desks.details).toHaveLength(30);

            endpoint(
                'PATCH',
                `${API}/metadata/:id`,
            )({
                route_params: { id: level_id() },
                body: desks,
            });

            // Desk maps that a user edits must survive the next load
            expect(show('desks')).toEqual({ desks });
            expect(
                endpoint(
                    'GET',
                    `${API}/metadata/:name/bulk`,
                )({
                    route_params: { name: 'desks' },
                    query_params: { parent_ids: level_id() },
                }),
            ).toEqual({ [level_id()]: desks });
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

        it('should point every module binding at a registered mock system', () => {
            const { bindings } = endpoint<{
                bindings: { details: Record<string, string> };
            }>(
                'GET',
                `${API}/metadata/:id`,
            )({
                route_params: { id: 'zone-any' },
                query_params: { name: 'bindings' },
            });
            const system_ids = new Set(MOCK_SPACES.map((s) => s.id));
            const missing = Object.entries(bindings.details)
                .filter(([, sys]) => !system_ids.has(sys))
                .map(([name, sys]) => `${name} -> ${sys}`);

            // A missing system makes every websocket bind fail in mock mode
            expect(missing).toEqual([]);
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
