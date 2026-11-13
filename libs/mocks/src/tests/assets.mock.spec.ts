import { HashMap } from '@placeos/common';
import { MockHttpRequest, registerMockEndpoint } from '@placeos/ts-client';

import { MOCK_ASSETS } from '../lib/api/assets.data';
import { registerMockAssets } from '../lib/api/assets.mock';
import { MOCK_LEVELS } from '../lib/api/zone.data';
import { endpoint } from './endpoints';

vi.mock('@placeos/ts-client');

const BASE = '/api/engine/v2';

describe('registerMockAssets', () => {
    /** Handler for `method` and `path` of the asset mocks */
    const handler = (method: MockHttpRequest['method'], path: string) =>
        endpoint<HashMap>(method, path);

    beforeEach(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockAssets();
    });

    // Write requests save the datasets to the mock session
    afterEach(() => localStorage.clear());

    describe('CRUD endpoints', () => {
        const path = `${BASE}/asset_types`;
        const show = (id: string) =>
            handler('GET', `${path}/:id`)({ route_params: { id } });

        it('should create, show, replace and delete an item', () => {
            const created = handler('POST', path)({ body: { name: 'Chair' } });
            const route_params = { id: created.id };

            expect(show(created.id)).toBe(created);
            handler(
                'PUT',
                `${path}/:id`,
            )({
                route_params,
                body: { id: created.id, brand: 'Acme' },
            });
            // PUT replaces the item, so fields left out are removed
            expect(show(created.id)).toEqual({ id: created.id, brand: 'Acme' });

            handler('DELETE', `${path}/:id`)({ route_params });
            expect(() => show(created.id)).toThrow(
                expect.objectContaining({ status: 404 }),
            );
        });

        it('should merge the body into the item on PATCH', () => {
            const created = handler(
                'POST',
                path,
            )({
                body: { name: 'Chair', brand: 'Acme' },
            });
            handler(
                'PATCH',
                `${path}/:id`,
            )({
                route_params: { id: created.id },
                body: { brand: 'Other' },
            });

            expect(show(created.id)).toEqual({
                id: created.id,
                name: 'Chair',
                brand: 'Other',
            });
        });
    });

    describe('assets', () => {
        const list = (query_params: Record<string, string>) =>
            endpoint<HashMap[]>(
                'GET',
                `${BASE}/assets`,
            )({ query_params }).map((a) => a.name);

        it('should add and change assets in bulk from a JSON string body', () => {
            // ts-client sends the bulk list as a JSON string
            const added = handler(
                'POST',
                `${BASE}/assets/bulk`,
            )({
                body: JSON.stringify([{ name: 'A' }, { name: 'B' }]),
            });
            expect(added.map((a) => a.name)).toEqual(['A', 'B']);
            expect(added[0].id).not.toBe(added[1].id);

            const changed = handler(
                'PATCH',
                `${BASE}/assets/bulk`,
            )({
                body: JSON.stringify([
                    { id: added[0].id, name: 'A2' },
                    { id: 'not-an-asset', name: 'X' },
                ]),
            });
            expect(changed[0]).toEqual({ ...added[0], name: 'A2' });
            expect(
                handler(
                    'GET',
                    `${BASE}/assets/:id`,
                )({
                    route_params: { id: added[0].id },
                }),
            ).toBe(changed[0]);
            // Unknown IDs are not added
            expect(() =>
                handler(
                    'GET',
                    `${BASE}/assets/:id`,
                )({
                    route_params: { id: 'not-an-asset' },
                }),
            ).toThrow(expect.objectContaining({ status: 404 }));
        });

        it('should list only assets in every zone asked for', () => {
            handler(
                'POST',
                `${BASE}/assets/bulk`,
            )({
                body: JSON.stringify([
                    { name: 'In both', zones: ['zone-a', 'zone-b'] },
                    { name: 'In one', zones: ['zone-a'] },
                    { name: 'By zone_id', zone_id: 'zone-a' },
                ]),
            });

            expect(list({ zones: 'zone-a,zone-b' })).toEqual(['In both']);
            expect(list({ zone_id: 'zone-a' })).toEqual([
                'In both',
                'In one',
                'By zone_id',
            ]);
        });

        it('should make the parking spaces of a level once', () => {
            const level = MOCK_LEVELS.find((zone) => zone.type === 'parking');
            const parking = (query_params: HashMap<string>) =>
                endpoint<HashMap[]>(
                    'GET',
                    `${BASE}/assets`,
                )({
                    query_params: {
                        type_id: '_parking_type_',
                        ...query_params,
                    },
                });

            // Listing the building makes the spaces of its parking levels
            parking({ zones: level.parent_id });
            const count = MOCK_ASSETS.length;
            const spaces = parking({ zone_id: level.id, limit: '500' });

            expect(spaces.length).toBeGreaterThan(0);
            // The second listing must not add the spaces again
            expect(MOCK_ASSETS).toHaveLength(count);
            expect(new Set(spaces.map((space) => space.id)).size).toBe(
                spaces.length,
            );
            expect(spaces[0].zones).toEqual(
                expect.arrayContaining([level.parent_id, level.id]),
            );
        });
    });
});
