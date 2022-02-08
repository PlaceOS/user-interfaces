import { padString, predictableRandomInt, randomString } from '@placeos/common';
import { addMinutes, getUnixTime, set, subDays } from 'date-fns';
import { MOCK_ASSETS } from './assets.data';
import { MOCK_SPACES } from './spaces.data';

import { MOCK_STAFF } from './users.data';
import { MOCK_BUILDINGS, MOCK_LEVELS } from './zone.data';
import { PARKING_SPACES } from './zones.mock';

let EVENT_TIME = set(subDays(Date.now(), 3), {
    hours: 7,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
});

const nextEventTime = (save = false): number => {
    const next = addMinutes(EVENT_TIME, (predictableRandomInt(8) + 1) * 15);
    if (save) EVENT_TIME = next;
    return getUnixTime(next);
};

const TYPES = ['desk', 'parking', 'asset-request'];
const TRACKING = ['in_storage', 'in_transit', 'at_location']

export const MOCK_BOOKINGS = new Array(200).fill(0).map((_, index) => {
    const user = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
    const type = TYPES[predictableRandomInt(TYPES.length)];
    const bld = MOCK_BUILDINGS[predictableRandomInt(MOCK_BUILDINGS.length)];
    const lvls = MOCK_LEVELS.filter((_) => _.parent_id === bld.id);
    const lvl = lvls[predictableRandomInt(lvls.length)];
    const lvl_spaces = MOCK_SPACES.filter(_ => _.zones.includes(lvl?.id));
    const approved = predictableRandomInt(999999) % 4;
    const approver = MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)];
    const asset_count = predictableRandomInt(3, 1);
    const position = padString(
        (index % 18) + 1 + Math.floor(index / 18) * 100,
        3
    );
    return {
        id: `booking-${index}`,
        booking_start: nextEventTime(true),
        booking_end: nextEventTime(),
        user_id: user.id,
        user_name: user.name,
        user_email: user.email,
        booked_by_name: user.name,
        booked_by_email: user.email,
        asset_id: type === 'parking' ? `park-${position}` : `desk-${lvl?.id}-${index}`,
        asset_name: type === 'parking' ? position : `${lvl?.id}-${index}`,
        description: type === 'parking' ? position : `Desk ${index}`,
        title: `${type} Booking ${index}`,
        type,
        booking_type: type,
        checked_in: predictableRandomInt(999999) % 3 === 0,
        access: predictableRandomInt(999999) % 3 === 0,
        approved: approved === 0,
        rejected: approved === 1,
        approver_id: approved === 0 ? approver.id : '',
        approver_name: approved === 0 ? approver.name : '',
        approver_email: approved === 0 ? approver.email : '',
        zones: [bld.id, lvl?.id],
        extension_data: {
            map_id: `table-10.00${index}`,
            plate_number: randomString(8, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'),
            assets: new Array(asset_count).fill(0).map(_ => ({ ...MOCK_ASSETS[predictableRandomInt(asset_count)], amount: predictableRandomInt(5, 1)})),
            tracking: approved === 0 ? TRACKING[predictableRandomInt(TRACKING.length)] : 'in_storage',
            space_id: lvl_spaces[predictableRandomInt(lvl_spaces.length)]?.id
        },
    };
});
