import { HashMap, predictableRandomInt } from '@placeos/common';
import { querySystems } from '@placeos/ts-client';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { USER_DOMAIN } from '../../../users/src/lib/user.utilities';
import { Space } from './space.class';
import { updateSpaceList } from './space.pipe';

const SPACE_LIST_REQUESTS: Record<string, Observable<Space[]>> = {};

export function requestSpacesForZone(id: string) {
    if (SPACE_LIST_REQUESTS[id]) return SPACE_LIST_REQUESTS[id];
    SPACE_LIST_REQUESTS[id] = querySystems({ zone_id: id, limit: 500 }).pipe(
        map((_) => _.data.map((_) => new Space(_ as any))),
        tap((_) => updateSpaceList(_)),
        shareReplay(1)
    );
    return SPACE_LIST_REQUESTS[id];
}

let SPACE_COUNT: number = 0;
/* istanbul ignore next */
export function generateMockSpace(overrides: HashMap = {}): HashMap {
    const id = `space-${SPACE_COUNT++}`;
    const name = `Test Space ${SPACE_COUNT}`;
    const linked = predictableRandomInt(99999) % 2 === 0 && SPACE_COUNT > 1;
    const space = {
        id,
        name,
        long_name: `${name} with an long name`,
        map_id: `${SPACE_COUNT}`,
        capacity: predictableRandomInt(21, 1) * 2,
        email: `${name.toLowerCase().split(' ').join('.')}@${USER_DOMAIN}`,
        type: '',
        searchable: predictableRandomInt(99999) % 2 === 0,
        controlable: predictableRandomInt(99999) % 2 === 0,
        bookable: predictableRandomInt(99999) % 2 === 0,
        cost_hour: predictableRandomInt(300) * 100,
        setup: predictableRandomInt(6) * 5,
        breakdown: predictableRandomInt(6) * 5,
        zones: ['zone_lvl-0'],
        support_url: `/control/#/panel/${id}`,
        bookings: [], //Array(10).fill(0).map(i => generateMockBooking()),
        linked_rooms: linked
            ? [`space-${predictableRandomInt(SPACE_COUNT - 1)}`]
            : [],
        image: '',
        ...overrides,
    };
    if (space['configurations'] && space['configurations'].length > 0) {
        space['configurations'].forEach(
            (config) =>
                (config.capacity = predictableRandomInt(space.capacity) + 1)
        );
        space['configurations'][0].capacity = space.capacity;
    }
    return space;
}
