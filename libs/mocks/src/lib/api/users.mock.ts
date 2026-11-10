import { persist, registerMockEndpoint } from '../session';

import { HashMap, predictableRandomInt } from '@placeos/common';
import { MOCK_SPACES } from './spaces.data';
import { ACTIVE_USER, MOCK_GUESTS, MOCK_STAFF } from './users.data';
import { MOCK_LEVELS } from './zone.data';

import { getUnixTime, subMinutes } from 'date-fns';
import { MOCK_EVENTS } from './events.data';

/** Catering requested by each guest, by `email|booking_id` */
const GUEST_CATERING: HashMap = {};

/** Find a user by ID or email */
const findUser = (list: HashMap[], id: string) =>
    list.find((user) => user.id === id || user.email === id);

export function registerMockUsers() {
    // The staff list holds the active user. Loading saved data copies it, so
    // link the list entry to the active user again.
    const linkActiveUser = () => {
        const index = MOCK_STAFF.findIndex((u) => u.id === ACTIVE_USER.id);
        if (index >= 0) MOCK_STAFF[index] = ACTIVE_USER as any;
    };
    persist('active-user', ACTIVE_USER);
    persist('staff', MOCK_STAFF, { onLoad: linkActiveUser });
    persist('guests', MOCK_GUESTS);
    persist('guest-catering', GUEST_CATERING);
    linkActiveUser();

    registerMockEndpoint({
        path: '/api/engine/v2/users',
        method: 'GET',
        callback: (request) => {
            const search = (request.query_params.q || '').toLowerCase();
            const limit = Number(request.query_params.limit || 100);
            return MOCK_STAFF.filter(({ name, email }) => {
                return (
                    !search ||
                    name.toLowerCase().includes(search) ||
                    email.toLowerCase().includes(search)
                );
            }).slice(0, limit);
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/users/:id',
        method: 'GET',
        callback: (request) => {
            if (request.route_params.id === 'current') {
                if (localStorage.getItem('mock-signage-user') === 'group') {
                    return {
                        ...ACTIVE_USER,
                        groups: ['staff', 'engineering', 'senior'],
                        sys_admin: false,
                    };
                }
                return ACTIVE_USER;
            }
            const person = findUser(
                MOCK_STAFF,
                decodeURIComponent(request.route_params.id),
            );
            if (person) {
                return person;
            }
            throw { status: 404, message: 'User not found' };
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/users/:id',
        method: 'PATCH',
        callback: (request) => {
            const id = decodeURIComponent(request.route_params.id);
            const person = findUser(MOCK_STAFF, id);
            if (!person) throw { status: 404, message: 'User not found' };
            return Object.assign(person, request.body, { id: person.id });
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/people',
        method: 'GET',
        callback: (request) => {
            if (request.query_params.q) {
                const search = request.query_params.q.toLowerCase();
                return MOCK_STAFF.filter(({ name, email }) => {
                    return (
                        name.toLowerCase().includes(search) ||
                        email.toLowerCase().includes(search)
                    );
                });
            }
            return MOCK_STAFF;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/people/:id',
        method: 'GET',
        callback: (request) => {
            const id = decodeURIComponent(request.route_params.id);
            const person = MOCK_STAFF.find((user) => user.email === id);
            if (person) {
                return {
                    ...person,
                    location: generateLocation(),
                };
            }
            throw { status: 404, message: 'User not found' };
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/guests',
        method: 'GET',
        callback: (request) => {
            if (request.query_params.q) {
                const search = request.query_params.q.toLowerCase();
                return MOCK_GUESTS.filter(
                    (user) =>
                        user.name.toLowerCase().includes(search) ||
                        user.email.toLowerCase().includes(search),
                );
            }
            return MOCK_GUESTS;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/guests/:email',
        method: 'GET',
        callback: (request) => {
            const email = decodeURIComponent(request.route_params.email);
            const person = findUser(MOCK_GUESTS, email);
            if (person) return person;
            throw { status: 404, message: 'Guest not found' };
        },
    });

    // Saving a visitor who is not on file yet adds them, as the real API does
    registerMockEndpoint({
        path: '/api/staff/v1/guests/:email',
        method: 'PATCH',
        callback: (request) => {
            const id = decodeURIComponent(request.route_params.email);
            const guest = findUser(MOCK_GUESTS, id);
            if (guest) return Object.assign(guest, request.body);
            const created = { id, email: id, ...request.body };
            MOCK_GUESTS.push(created);
            return created;
        },
    });

    const cateringKey = (request) =>
        `${decodeURIComponent(request.route_params.email)}|${request.query_params.booking_id || ''}`;

    registerMockEndpoint({
        path: '/api/staff/v1/guests/:email/catering',
        method: 'GET',
        callback: (request) => GUEST_CATERING[cateringKey(request)] || null,
    });

    registerMockEndpoint({
        path: '/api/staff/v1/guests/:email/catering',
        method: 'PATCH',
        callback: (request) => {
            GUEST_CATERING[cateringKey(request)] = request.body;
            return request.body;
        },
    });

    registerMockEndpoint({
        path: '/api/staff/v1/guests/:email/meetings',
        method: 'GET',
        callback: (request) => {
            if (request.route_params.email) {
                const email = request.route_params.email.toLowerCase();
                const events = MOCK_EVENTS.filter((event) =>
                    event.attendees.find(
                        (user) => user.email.toLowerCase() === email,
                    ),
                );
                return events;
            }
            throw {
                status: 404,
                message: `Unable to find meetings with guest with email ${request.route_params.email}`,
            };
        },
    });

    const LOCATION_TYPES = [
        'meeting',
        'desk_id',
        'laptop',
        'mobile',
        'geo',
        'none',
    ];

    function generateLocation() {
        const type =
            LOCATION_TYPES[predictableRandomInt(LOCATION_TYPES.length)];
        const level = MOCK_LEVELS[predictableRandomInt(MOCK_LEVELS.length)];
        const level_spaces = MOCK_SPACES.filter((s) =>
            s.zones.includes(level.id),
        );
        const space =
            level_spaces[predictableRandomInt(level_spaces.length)] || {};
        const location: HashMap = {};
        switch (type) {
            case 'meeting':
                location.meeting = {
                    building: level.parent_id,
                    level: level.id,
                    system: space.id,
                    map_id: space.map_id,
                    event_id: '',
                };
                break;
            case 'desk_id':
                location.meeting = {
                    building: level.parent_id,
                    level: level.id,
                    map_id: space.map_id,
                    checked_in: getUnixTime(Date.now()),
                };
                break;
            case 'laptop':
            case 'mobile':
                location[type] = {
                    building: level.parent_id,
                    level: level.id,
                    x: +predictableRandomInt(10000),
                    y: +predictableRandomInt(5000),
                    last_seen: getUnixTime(
                        subMinutes(Date.now(), predictableRandomInt(60)),
                    ),
                };
                break;
            case 'geo':
                location.geo = {
                    lat: predictableRandomInt(180) - 90,
                    lon: predictableRandomInt(360) - 180,
                    last_seen: getUnixTime(
                        subMinutes(Date.now(), predictableRandomInt(60)),
                    ),
                };
                break;
        }
        return location;
    }
}
