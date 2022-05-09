import {
    HashMap,
    randomInt,
    randomString,
    timePeriodsIntersect,
} from '@placeos/common';
import { addDays, getUnixTime, isBefore, setHours } from 'date-fns';
import { MOCK_STAFF } from '../api/users.data';

const CONTACT_EVENTS = {};

const filterFn = (start, end) => (itm) => {
    return timePeriodsIntersect(start, end, itm.contact_time, itm.contact_time);
};

class ContactTracingModule {
    constructor(_) {}

    $close_contacts(email: string, user: string, start: number, end: number) {
        if (!CONTACT_EVENTS[email]) CONTACT_EVENTS[email] = [];
        if (CONTACT_EVENTS[email].length)
            return CONTACT_EVENTS[email].filter(filterFn(start, end));
        const events = [];
        const beginning = addDays(start * 1000, -10);
        const ending = addDays(end * 1000, 10);
        let date = new Date(beginning);
        while (isBefore(date, ending)) {
            new Array(randomInt(4))
                .fill(0)
                .map((_) => ({
                    mac_address: randomString(10),
                    contact_time: getUnixTime(
                        setHours(date, randomInt(11) + 7)
                    ),
                    duration: randomInt(60) * 60,
                    username: MOCK_STAFF[randomInt(MOCK_STAFF.length)].email,
                }))
                .forEach((e) => events.push(e));
            date = addDays(date, 1);
        }
        CONTACT_EVENTS[email] = events;
        return CONTACT_EVENTS[email].filter(filterFn(start, end));
    }
}

export const createContactTracingModule = (
    space: HashMap,
    overrides: HashMap = {}
) => new ContactTracingModule({ ...space, ...overrides });
