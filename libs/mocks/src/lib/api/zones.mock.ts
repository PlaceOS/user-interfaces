import { registerMockEndpoint } from '@placeos/ts-client';
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

registerMockEndpoint({
    path: '/api/engine/v2/metadata/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.query_params.name === 'catering') {
            return [];
        }
        if (request.query_params.name === 'desks') {
            return {
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
                    name: 'Level 1'
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
