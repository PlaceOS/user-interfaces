import { HashMap } from '@user-interfaces/common';
import { USER_DOMAIN } from '../../../users/src/lib/user.utilities';

let SPACE_COUNT: number = 0;

export function generateMockSpace(overrides: HashMap = {}): HashMap {
    const id = `space-${SPACE_COUNT++}`;
    const name = `Test Space ${SPACE_COUNT}`;
    const linked = Math.floor(Math.random() * 99999) % 2 === 0 && SPACE_COUNT > 1;
    const space = {
        id,
        name,
        long_name: `${name} with an long name`,
        map_id: `${SPACE_COUNT}`,
        capacity: Math.floor(Math.random() * 20 + 1) * 2,
        email: `${name.toLowerCase().split(' ').join('.')}@${USER_DOMAIN}`,
        type: '',
        searchable: Math.floor(Math.random() * 99999) % 2 === 0,
        controlable: Math.floor(Math.random() * 99999) % 2 === 0,
        bookable: Math.floor(Math.random() * 99999) % 2 === 0,
        cost_hour: Math.floor(Math.random() * 300) * 100,
        setup: Math.floor(Math.random() * 6) * 5,
        breakdown: Math.floor(Math.random() * 6) * 5,
        zones: ['zone_lvl-0'],
        support_url: `/control/#/${id}`,
        bookings: [], //Array(10).fill(0).map(i => generateMockBooking()),
        linked_rooms: linked ? [`space-${Math.floor(Math.random() * (SPACE_COUNT - 1))}`] : [],
        image: '',
        ...overrides
    };
    if (space['configurations'] && space['configurations'].length > 0) {
        space['configurations'].forEach(config =>
            config.capacity = Math.floor(Math.random() * space.capacity) + 1
        );
        space['configurations'][0].capacity = space.capacity;
    }
    return space;
}
