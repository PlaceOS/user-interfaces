import { predictableRandomInt, unique } from '@placeos/common';

import { MOCK_SPACES } from './spaces.data';
import { ACTIVE_USER, MOCK_GUESTS, MOCK_STAFF } from './users.data';

import * as dayjs from 'dayjs';
import { generateCateringOrder } from './catering.data';

let EVENT_TIME = dayjs().startOf('d').hour(7);

const nextEventTime = (save = false): number => {
    const next = EVENT_TIME.add((predictableRandomInt(8) + 1) * 15, 'm');
    if (save) {
        EVENT_TIME = next;
    }
    return next.unix();
};

const event_status = ['tentative', 'confirmed', 'cancelled'];
const randomStatus = (): string => {
    const rnd = predictableRandomInt(10);
    return rnd < 2
        ? event_status[2]
        : rnd < 5
        ? event_status[0]
        : event_status[1];
};

export const MOCK_EVENTS = new Array(100).fill(0).map((_, index) => {
    const PEOPLE = MOCK_STAFF.concat(MOCK_GUESTS);
    let attendees: any[] = new Array(predictableRandomInt(8, 1))
        .fill(0)
        .map((_) => PEOPLE[predictableRandomInt(PEOPLE.length)]);
    attendees.unshift(ACTIVE_USER);
    attendees = unique(attendees, 'email');
    const space = MOCK_SPACES[predictableRandomInt(MOCK_SPACES.length)];
    attendees = attendees.concat({
        ...space,
        resource: true,
    });
    const has_active_user = predictableRandomInt(9999) % 2 === 0;
    if (has_active_user) {
        attendees.push(ACTIVE_USER);
    }

    const event_start = nextEventTime(true);
    const event_end = nextEventTime();
    return {
        id: `cal-event-${index}`,
        status: randomStatus(),
        host: has_active_user ? ACTIVE_USER.email : attendees[0].email,
        calendar: 'calendar_id',
        creator: 'optional@fake.com',
        attendees: unique(attendees, 'email'),
        title: `Some Meeting ${index}`,
        body: `A Description`,
        private: false,
        event_start,
        event_end,
        timezone: 'Australia/Sydney',
        all_day: false,
        location: `${space.name}`,
        recurring: false,
        recurrence: {},
        attachments: {},
        system: space,
        extension_data: {
            catering:
                predictableRandomInt(99999) % 4 === 0
                    ? [
                          generateCateringOrder({
                              id: `cal-event-${index}`,
                              event_start,
                              event_end,
                          }),
                      ]
                    : [],
            setup: predictableRandomInt(4) * 5,
            breakdown: predictableRandomInt(4) * 5,
        },
    };
});

const event_spaces = {};
MOCK_EVENTS.forEach((event) => {
    if (!event_spaces[event.system.id]) {
        event_spaces[event.system.id] = [];
    }
    event_spaces[event.system.id].push(event);
});
