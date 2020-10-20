import { registerMockEndpoint } from '@placeos/ts-client';

import { HashMap, predictableRandomInt } from '@user-interfaces/common';
import { ACTIVE_USER, MOCK_GUESTS, MOCK_STAFF } from './users.data';
import { MOCK_LEVELS } from './zone.data';
import { MOCK_SPACES } from './spaces.data';

import * as dayjs from 'dayjs';
import { MOCK_EVENTS } from './events.data';

registerMockEndpoint({
    path: '/api/engine/v2/users/:id',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.route_params.id === 'current') {
            return ACTIVE_USER;
        }
        const person = MOCK_STAFF.find(user => user.email === request.route_params.id);
        if (person) {
            return person;
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

registerMockEndpoint({
    path: '/api/staff/v1/guests/:email',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        const person = MOCK_GUESTS.find(user => user.email === request.route_params.email);
        if (person) {
            return person;
        }
        throw { status: 404, message: 'Guest not found' };
    },
});

registerMockEndpoint({
    path: '/api/staff/v1/guests/:email/meetings',
    metadata: {},
    method: 'GET',
    callback: (request) => {
        if (request.route_params.email) {
            console.log('Events:', MOCK_EVENTS);
            const email = request.route_params.email.toLowerCase();
            console.log('Email:', request.route_params.email);
            const events = MOCK_EVENTS.filter(
                (event) => event.attendees.find(user => user.email.toLowerCase() === email)
            );
            console.log('Matched Events:', events);
            return events;
        }
        throw { status: 404, message: `Unable to find meetings with guest with email ${request.route_params.email}` };
    },
});



const LOCATION_TYPES = ['meeting', 'desk_id', 'laptop', 'mobile', 'geo', 'none'];

function generateLocation() {
    const type = LOCATION_TYPES[predictableRandomInt(LOCATION_TYPES.length)];
    const level = MOCK_LEVELS[predictableRandomInt(MOCK_LEVELS.length)];
    const level_spaces = MOCK_SPACES.filter(s => s.zones.includes(level.id));
    const space = level_spaces[predictableRandomInt(level_spaces.length)] || {};
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
                x: +predictableRandomInt(10000),
                y: +predictableRandomInt(5000),
                last_seen: dayjs().subtract(predictableRandomInt(60), 'm').unix()
            };
            break;
        case 'geo':
            location.geo = {
                lat: predictableRandomInt(180) - 90,
                lon: predictableRandomInt(360) - 180,
                last_seen: dayjs().subtract(predictableRandomInt(60), 'm').unix()
            };
            break;
    }
    return location;
}
