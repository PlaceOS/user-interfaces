import { predictableRandomInt } from '@placeos/common';
import { registerMockEndpoint } from '@placeos/ts-client';
import { MOCK_MENU } from './catering.data';
import { MOCK_ORGS, MOCK_LEVELS, MOCK_BUILDINGS } from './zone.data';

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
            return {
                desks: {
                    details: new Array(30).fill(0).map((_, idx) => ({
                        id: `table-${padString(id, 2)}.${padString(
                            idx + 1,
                            3
                        )}`,
                        name: `Desk ${id}.${padString(idx + 1, 3)}`,
                        bookable: predictableRandomInt(9999) % 4 !== 0,
                        group: '',
                    })),
                },
            };
        }
        return {};
    },
});

registerMockEndpoint({
    path: '/api/engine/v2/metadata/:id/children',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        return [
            {
                zone: {
                    id: 'bld-01_lvl-01',
                    name: 'Level 1',
                },
                metadata: {
                    desks: {
                        details: [
                            {
                                id: 'table-01.001',
                                name: '1.001',
                                bookable: true,
                                group: '',
                            },
                            {
                                id: 'table-01.002',
                                name: '1.002',
                                bookable: true,
                                group: '',
                            },
                            {
                                id: 'table-01.003',
                                name: '1.003',
                                bookable: true,
                                group: '',
                            },
                            {
                                id: 'table-01.004',
                                name: '1.004',
                                bookable: true,
                                group: '',
                            },
                            {
                                id: 'table-01.005',
                                name: '1.005',
                                bookable: false,
                                group: '',
                            },
                            {
                                id: 'table-01.006',
                                name: '1.006',
                                bookable: true,
                                group: '',
                            },
                        ],
                    },
                },
            },
        ];
    },
});
