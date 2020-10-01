import { registerMockEndpoint } from '@placeos/ts-client';

import { HashMap } from '../../utilities/types.utilities';
import { ACTIVE_USER, MOCK_STAFF, MOCK_GUESTS, MOCK_LEVELS, MOCK_SPACES } from '../mock-data';

import * as dayjs from 'dayjs';

registerMockEndpoint({
    path: '/api/engine/v2/users/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.route_params.id === 'current') {
            return ACTIVE_USER;
        }
        throw { status: 404, message: 'User not found' };
    },
});


registerMockEndpoint({
    path: '/api/staff/v1/people',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.query_params.q) {
            const search = request.query_params.q.toLowerCase();
            return MOCK_STAFF.filter(
                (user) =>
                    user.name.toLowerCase().includes(search) ||
                    user.email.toLowerCase().includes(search)
            );
        }
        return MOCK_STAFF;
    },
});

registerMockEndpoint({
    path: '/api/staff/v1/people/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        const id = decodeURIComponent(request.route_params.id);
        const person = MOCK_STAFF.find(user => user.email === id);
        if (person) {
            return {
                ...person,
                location: generateLocation()
            };
        }
        throw { status: 404, message: 'User not found' };
    },
});


registerMockEndpoint({
    path: '/api/staff/v1/guests',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.query_params.q) {
            const search = request.query_params.q.toLowerCase();
            return MOCK_GUESTS.filter(
                (user) =>
                    user.name.toLowerCase().includes(search) ||
                    user.email.toLowerCase().includes(search)
            );
        }
        return MOCK_STAFF;
    },
});



const LOCATION_TYPES = ['meeting', 'desk_id', 'laptop', 'mobile', 'geo', 'none'];

function generateLocation() {
    const type = LOCATION_TYPES[Math.floor(Math.random() * LOCATION_TYPES.length)];
    const level = MOCK_LEVELS[Math.floor(Math.random() * MOCK_LEVELS.length)];
    const level_spaces = MOCK_SPACES.filter(s => s.zones.includes(level.id));
    const space = level_spaces[Math.floor(Math.random() * level_spaces.length)] || {};
    const location: HashMap = {};
    switch (type) {
        case 'meeting':
            location.meeting = {
                building: level.parent_id,
                level: level.id,
                system: space.id,
                map_id: space.map_id,
                event_id: ''
            };
            break;
        case 'desk_id':
            location.meeting = {
                building: level.parent_id,
                level: level.id,
                map_id: space.map_id,
                checked_in: dayjs().unix()
            };
            break;
        case 'laptop':
        case 'mobile':
            location[type] = {
                building: level.parent_id,
                level: level.id,
                x: +(Math.random().toFixed(4)) * 10000,
                y: +(Math.random().toFixed(4)) * 5000,
                last_seen: dayjs().subtract(Math.floor(Math.random() * 60), 'm').unix()
            };
            break;
        case 'geo':
            location.geo = {
                lat: Math.floor(Math.random() * 180) - 90,
                lon: Math.floor(Math.random() * 360) - 180,
                last_seen: dayjs().subtract(Math.floor(Math.random() * 60), 'm').unix()
            };
            break;
    }
    return location;
}
