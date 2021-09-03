import { predictableRandomInt } from '@placeos/common';
import { DOMAIN } from './common.mock';

const PREDEF_USERS = [
    'Jonathan McFarlane',
    'Alex Sorafumo',
    'Jim Doe',
    'Cristina Boston',
    'Jeremy West',
    'Viv Briffa',
    'Candy Russo',
    'Jeff Wiz',
    'Sravani Kotha',
    'Kim Burgess',
    'Caspian Baska',
    'Stephen Von Takach',
    'Cameron Reeves',
    'Shane Boseley',
];

export const ACTIVE_USER = {
    id: 'current',
    name: 'PlaceOS - Mock User',
    email: 'dev@place.tech',
    groups: ['deals', ''],
};

export const MOCK_STAFF = PREDEF_USERS.map((name, i) => ({
    id: `user-${i + 1}`,
    name: `${name} (PlaceOS)`,
    email: `${name.split(' ').join('.').toLowerCase()}@${DOMAIN}`,
})).concat([ACTIVE_USER]);

export const MOCK_GUESTS = PREDEF_USERS.map((name, i) => ({
    id: `guest-${i + 1}`,
    name: `${name} (External)`,
    email: `${name.split(' ').join('.').toLowerCase()}@guest.${DOMAIN}`,
    visit_expected: predictableRandomInt(99999) % 2 === 0,
}));
