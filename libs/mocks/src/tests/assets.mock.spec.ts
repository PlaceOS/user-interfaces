import { registerMockEndpoint } from '@placeos/ts-client';

import { registerMockAssets } from '../lib/api/assets.mock';

vi.mock('@placeos/ts-client');

describe('registerMockAssets', () => {
    /** Callback registered for the given method + path */
    function handler(method: string, path: string) {
        const match = vi
            .mocked(registerMockEndpoint)
            .mock.calls.map(([options]) => options)
            .find((o) => o.method === method && o.path === path);
        if (!match) throw new Error(`No handler for ${method} ${path}`);
        return (req: any) => match.callback(req);
    }

    beforeEach(() => {
        vi.mocked(registerMockEndpoint).mockClear();
        registerMockAssets();
    });

    it('should create, show, update and delete an asset type', () => {
        const path = '/api/engine/v2/asset_types';
        const created = handler('POST', path)({ body: { name: 'Chair' } });
        const route_params = { id: created.id };

        expect(handler('GET', `${path}/:id`)({ route_params })).toBe(created);
        const updated = handler(
            'PUT',
            `${path}/:id`,
        )({
            route_params,
            body: { ...created, name: 'Desk' },
        });
        expect(handler('GET', `${path}/:id`)({ route_params })).toBe(updated);
        handler('DELETE', `${path}/:id`)({ route_params });
        expect(() =>
            handler('GET', `${path}/:id`)({ route_params }),
        ).toThrowError();
    });
});
