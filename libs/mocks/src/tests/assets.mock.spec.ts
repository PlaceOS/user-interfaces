import { registerMockEndpoint } from '@placeos/ts-client';

import { registerMockAssets } from '../lib/api/assets.mock';

vi.mock('@placeos/ts-client');

const BASE = '/api/engine/v2';

describe('registerMockAssets', () => {
    /** Callback registered for the given method + path */
    function handler(method: string, path: string) {
        const match = vi
            .mocked(registerMockEndpoint)
            .mock.calls.map(([options]) => options)
            .find((o) => o.method === method && o.path === path);
        if (!match) throw new Error(`No handler for ${method} ${path}`);
        return (req: Record<string, unknown>) =>
            match.callback({
                route_params: {},
                query_params: {},
                ...req,
            } as never) as any;
    }

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
            (handler('GET', `${BASE}/assets`)({ query_params }) as any[]).map(
                (a) => a.name,
            );

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
    });
});
