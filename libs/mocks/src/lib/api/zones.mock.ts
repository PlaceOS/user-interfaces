import { predictableRandomInt } from '@placeos/common';
import { registerMockEndpoint } from '@placeos/ts-client';
import { MOCK_MENU } from './catering.data';
import { MOCK_ORGS, MOCK_LEVELS, MOCK_BUILDINGS } from './zone.data';

const MOCK_METADATA = {
    current: {
        contacts: {
            name: 'contacts',
            description: '',
            details: [
                {
                    id: 'user-1',
                    name: 'Jonathan McFarlane (PlaceOS)',
                    email: 'jon@place.tech',
                    first_name: 'Jonathan',
                    last_name: 'McFarlane',
                },
                {
                    id: 'user-1',
                    name: 'Alex Sorafumo (PlaceOS)',
                    email: 'alex@place.tech',
                    first_name: 'Alex',
                    last_name: 'Sorafumo',
                },
            ],
        },
    },
};

export const ZONE_MOCKS = registerMocks();

function registerMocks() {
    registerMockEndpoint({
        path: '/api/engine/v2/zones',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            if (request.query_params.tags === 'org') {
                return MOCK_ORGS;
            } else if (request.query_params.tags === 'building') {
                return MOCK_BUILDINGS;
            } else if (request.query_params.tags === 'level') {
                return MOCK_LEVELS;
            }
            throw { status: 404, message: 'Zones not found' };
        },
    });

    function padString(str: string | number, length: number = 5) {
        str = `${str}`;
        while (str.length < length) str = `0${str}`;
        return str;
    }

    registerMockEndpoint({
        path: '/api/engine/v2/metadata/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            if (request.query_params.name === 'bindings') {
                return {
                    bindings: {
                        details: {
                            area_management: 'space-0',
                            location_services: 'space-0',
                        },
                    },
                };
            }
            if (request.query_params.name === 'catering') {
                return {
                    catering: {
                        details: MOCK_MENU,
                    },
                };
            }
            if (request.query_params.name === 'desks') {
                const parts = request.route_params.id.split('-');
                const id = parts[parts.length - 1];
                return generateMockDeskMetadata(id);
            }
            if (request.query_params.name === 'map_regions') {
                return {
                    map_regions: {
                        details: {
                            areas: [
                                {
                                    id: 'zone-10.A',
                                    properties: {
                                        capacity: 100,
                                        label_location: { x: 0.36, y: 0.33 },
                                    },
                                },
                                {
                                    id: 'zone-10.B',
                                    properties: {
                                        capacity: 100,
                                        label_location: { x: 0.76, y: 0.33 },
                                    },
                                },
                                {
                                    id: 'zone-10.C',
                                    properties: {
                                        capacity: 100,
                                        label_location: { x: 0.63, y: 0.77 },
                                    },
                                },
                            ],
                        },
                    },
                };
            }
            if (
                MOCK_METADATA[request.route_params.id] &&
                MOCK_METADATA[request.route_params.id][
                    request.query_params.name
                ]
            ) {
                return MOCK_METADATA[request.route_params.id];
            } else if (
                MOCK_METADATA[request.route_params.id] &&
                !request.query_params.name
            ) {
                return MOCK_METADATA[request.route_params.id] || {};
            }
            return {};
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/metadata/:id',
        metadata: {},
        method: 'PATCH',
        callback: (request) => {
            if (!MOCK_METADATA[request.route_params.id])
                MOCK_METADATA[request.route_params.id] = {};
            MOCK_METADATA[request.route_params.id][request.body.name] =
                request.body;
        },
    });

    const DESK_FEATURES = ['sit_to_stand', 'single_monitor', 'dual_monitor'];

    function generateMockDeskMetadata(id: string) {
        return {
            desks: {
                details: new Array(30).fill(0).map((_, idx) => ({
                    id: `table-${padString(id, 2)}.${padString(idx + 1, 3)}`,
                    name: `Desk ${id}.${padString(idx + 1, 3)}`,
                    bookable: predictableRandomInt(9999) % 4 !== 0,
                    group: '',
                    features: DESK_FEATURES.filter(
                        (_) => predictableRandomInt(99999) % 3 === 0
                    ),
                })),
            },
        };
    }

    registerMockEndpoint({
        path: '/api/engine/v2/metadata/:id/children',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const zone = MOCK_BUILDINGS.find(
                (_) => _.id === request.route_params.id
            );
            if (!zone)
                throw {
                    status: 404,
                    message: `Unable to find zone with id "${request.route_params.id}"`,
                };
            return MOCK_LEVELS.filter((_) => _.parent_id === zone.id).map(
                (lvl) => {
                    const parts = lvl.id.split('-');
                    const id = parts[parts.length - 1];
                    return {
                        zone: lvl,
                        metadata: generateMockDeskMetadata(id),
                    };
                }
            );
        },
    });
}
