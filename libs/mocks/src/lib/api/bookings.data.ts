import { predictableRandomInt } from '@placeos/common';
import { addMinutes, getUnixTime, setHours, startOfDay } from 'date-fns';

import { MOCK_STAFF } from './users.data';
import { MOCK_BUILDINGS, MOCK_LEVELS } from './zone.data';

let EVENT_TIME = setHours(startOfDay(new Date()), 7);

const nextEventTime = (save = false): number => {
    const next = addMinutes(EVENT_TIME, (predictableRandomInt(8) + 1) * 15);
    if (save) EVENT_TIME = next;
    return getUnixTime(next);
};

const TYPES = ['desk', 'parking'];

export const MOCK_BOOKINGS = new Array(200).fill(0).map((_, index) => {
    const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
    const type = TYPES[predictableRandomInt(TYPES.length)];
    const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
    const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld.id);
    const lvl = lvls[predictableRandomInt(lvls.length)];
    const approved = predictableRandomInt(999999) % 4;
    const approver = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
    return {
        id: `booking-${index}`,
        booking_start: nextEventTime(true),
        booking_end: nextEventTime(),
        user_id: user.id,
        user_name: user.name,
        user_email: user.email,
        asset_id: `desk-${lvl?.id}-${index}`,
        description: `Desk ${index}`,
        title: `${type} Booking ${index}`,
        type,
        checked_in: predictableRandomInt(999999) % 3 === 0,
        access: predictableRandomInt(999999) % 3 === 0,
        approved: approved === 0,
        rejected: approved === 1,
        approver_id: approved === 0 ? approver.id : '',
        approver_name: approved === 0 ? approver.name : '',
        approver_email: approved === 0 ? approver.email : '',
        zones: [bld.id, lvl?.id],
        extension_data: {},
    };
});
