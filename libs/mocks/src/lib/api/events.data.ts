import { predictableRandomInt, unique } from '@user-interfaces/common';

import { MOCK_SPACES } from './spaces.data';
import { ACTIVE_USER, MOCK_GUESTS, MOCK_STAFF } from './users.data';

import * as dayjs from 'dayjs';

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
    return rnd < 2 ? event_status[2] : rnd < 5 ? event_status[0] : event_status[1];
};

export const MOCK_EVENTS = new Array(200).fill(0).map((_, index) => {
    let attendees: any[] = MOCK_STAFF.concat(MOCK_GUESTS).filter((_) => predictableRandomInt(9999) % 3 === 0);
        attendees.unshift(MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)]);
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
        event_start: nextEventTime(true),
        event_end: nextEventTime(),
        timezone: 'Sydney',
        all_day: false,
        location: 'clear text location',
        recurring: false,
        recurrence: {},
        attachments: {},
        system: space,
        extension_data: {},
    };
});

const event_spaces = {};
MOCK_EVENTS.forEach((event) => {
    if (!event_spaces[event.system.id]) {
        event_spaces[event.system.id] = [];
    }
    event_spaces[event.system.id].push(event);
});
