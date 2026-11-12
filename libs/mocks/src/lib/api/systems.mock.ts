import { mockSystem } from '@placeos/ts-client';

import {
    MOCK_PAGE_SIZE,
    mockId,
    persist,
    registerMockEndpoint,
} from '../session';
import { createSystem, moduleState } from '../systems-bindings.mock';
import { MOCK_SPACES } from './spaces.data';

/** Find the space with the given ID, or throw a 404 */
function findSpace(id: string) {
    const space = MOCK_SPACES.find((_) => _.id === id);
    if (!space) throw { status: 404 };
    return space;
}

export function registerMockSystems() {
    persist('spaces', MOCK_SPACES);
    MOCK_SPACES.forEach((space) => createSystem(space));

    registerMockEndpoint({
        path: '/api/engine/v2/systems',
        method: 'GET',
        page_size: MOCK_PAGE_SIZE,
        callback: (request) => {
            const systems = request.query_params?.zone_id
                ? MOCK_SPACES.filter((_) =>
                      _.zones.includes(request.query_params.zone_id),
                  )
                : MOCK_SPACES;
            if (request.query_params?.signage) {
                return systems.map((space) => ({
                    ...space,
                    signage: true,
                    display_name: space.display_name || space.name,
                    playlists: space.playlists || [],
                    zones: space.zones || [],
                }));
            }
            return systems;
        },
    });

    // Before `/systems/:id`, which would match `with_emails` as an ID
    registerMockEndpoint({
        path: '/api/engine/v2/systems/with_emails',
        method: 'GET',
        callback: (request) => {
            const emails = `${request.query_params?.in || ''}`
                .toLowerCase()
                .split(',')
                .filter(Boolean);
            return MOCK_SPACES.filter((space) =>
                emails.includes(`${space.email || ''}`.toLowerCase()),
            );
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/systems/:id',
        method: 'GET',
        callback: (request) => findSpace(request.route_params.id),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/systems',
        method: 'POST',
        callback: (request) => {
            const space = {
                zones: [],
                ...request.body,
                id: mockId('sys-'),
            };
            MOCK_SPACES.push(space);
            createSystem(space);
            return space;
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/systems/:id',
        method: 'PATCH',
        callback: (request) =>
            Object.assign(findSpace(request.route_params.id), request.body, {
                id: request.route_params.id,
            }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/systems/:id',
        method: 'DELETE',
        callback: (request) => {
            const space = findSpace(request.route_params.id);
            MOCK_SPACES.splice(MOCK_SPACES.indexOf(space), 1);
        },
    });

    // State of one module, such as `System_1`
    registerMockEndpoint({
        path: '/api/engine/v2/systems/:id/:module',
        method: 'GET',
        callback: (request) => {
            const parts = request.route_params.module.split('_');
            const index = Number(parts.pop()) || 1;
            const mod = mockSystem(request.route_params.id)?.[
                parts.join('_')
            ]?.[index - 1];
            if (!mod) throw { status: 404, message: 'Module not found' };
            return moduleState(mod);
        },
    });

    // Modules of a mock system, named and ordered as `createSystem` adds them
    registerMockEndpoint({
        path: '/api/engine/v2/modules',
        method: 'GET',
        page_size: MOCK_PAGE_SIZE,
        callback: (request) => {
            const system_id = request.query_params?.control_system_id;
            const system = system_id ? mockSystem(system_id) : null;
            if (!system) return [];
            return Object.entries(system)
                .filter(([, modules]) => Array.isArray(modules))
                .flatMap(([name, modules]) =>
                    (modules as unknown[]).map((_, index) => ({
                        id: `mod-${system_id}-${name}-${index + 1}`,
                        name,
                        custom_name: '',
                        control_system_id: system_id,
                        running: true,
                        connected: true,
                    })),
                );
        },
    });
}
