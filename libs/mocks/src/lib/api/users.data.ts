import { DOMAIN } from './common.mock';

const PREDEF_USERS = [
    'Jonathan McFarlane',
    'Alex Sorafumo',
    'Jim Doe',
    'Cristina Boston',
    'Jeremy West',
    'Alexandre Chuvand',
    'Viv Briffa',
    'Candy Russo',
    'Jeff Wiz',
    'Sravani Kotha',
    'Kim Burgess',
    'Landell Archer',
    'Caspian Baska',
    'Stephen Von Takach',
    'Cameron Reeves',
    'Shane Boseley'
];

export const ACTIVE_USER = {
    id: 'current',
    name: 'PlaceOS - Mock User',
    email: 'dev@place.tech'
}

export const MOCK_STAFF = PREDEF_USERS.map((name, i) => ({
    id: `user-${i + 1}`,
    name,
    email: `${name.split(' ').join('.').toLowerCase()}@${DOMAIN}`
})).concat([ACTIVE_USER]);

export const MOCK_GUESTS = PREDEF_USERS.map((name, i) => ({
    id: `guest-${i + 1}`,
    name,
    email: `${name.split(' ').join('.').toLowerCase()}@not-${DOMAIN}`
}));

console.log('STAFF:', MOCK_STAFF);
console.log('GUESTS:', MOCK_GUESTS);
