import { HashMap } from '@placeos/common';

import { mockId, registerMockEndpoint } from '../session';

/**
 * Register the show, create, update and delete endpoints for a mock dataset.
 * The list endpoint differs per resource, so callers register it themselves.
 * PATCH merges the request body into the item, PUT replaces the item.
 */
export function registerCrudEndpoints(
    path: string,
    dataset: HashMap[],
    id_prefix: string,
    label: string,
) {
    const indexOf = (id: string) => {
        const index = dataset.findIndex((e) => e.id === id);
        if (index < 0)
            throw {
                status: 404,
                message: `Unable to find ${label} with ID ${id}`,
            };
        return index;
    };
    registerMockEndpoint({
        path: `${path}/:id`,
        method: 'GET',
        callback: (req) => dataset[indexOf(req.route_params.id)],
    });
    registerMockEndpoint({
        path,
        method: 'POST',
        callback: (req) => {
            const item = { ...req.body, id: mockId(id_prefix) };
            dataset.push(item);
            return item;
        },
    });
    registerMockEndpoint({
        path: `${path}/:id`,
        method: 'PUT',
        callback: (req) => {
            const item = { ...req.body };
            dataset.splice(indexOf(req.route_params.id), 1, item);
            return item;
        },
    });
    registerMockEndpoint({
        path: `${path}/:id`,
        method: 'PATCH',
        callback: (req) => {
            const index = indexOf(req.route_params.id);
            const item = { ...dataset[index], ...req.body };
            dataset.splice(index, 1, item);
            return item;
        },
    });
    registerMockEndpoint({
        path: `${path}/:id`,
        method: 'DELETE',
        callback: (req) => {
            dataset.splice(indexOf(req.route_params.id), 1);
        },
    });
}
