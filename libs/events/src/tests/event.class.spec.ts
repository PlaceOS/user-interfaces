import { CalendarEvent, setDefaultCreator, Space, User } from '@placeos/common';
import { setInternalUserDomain } from '@placeos/users';
import {
    add,
    endOfDay,
    getUnixTime,
    startOfDay,
    startOfHour,
    sub,
} from 'date-fns';

describe('CalendarEvent', () => {
    let event: CalendarEvent;

    beforeEach(() => {
        setDefaultCreator({ email: '' } as any);
        event = new CalendarEvent();
    });

    it('should expose properties', () => {
        expect(event.id).toBe('');
        expect(event.status).toBe('approved');
        expect(event.host).toBe('');
        expect(event.calendar).toBe('');
        expect(event.creator).toBe('');
        expect(event.attendees).toEqual([]);
        expect(event.resources).toEqual([]);
        expect(event.title).toBeUndefined();
        expect(event.body).toBe('');
        expect(event.private).toBe(false);
        expect(event.all_day).toBe(false);
        expect(event.duration).toBe(30);
        expect(event.timezone).toBe(
            Intl.DateTimeFormat().resolvedOptions().timeZone,
        );
        expect(event.location).toBe('');
        expect(event.recurring).toBe(false);
        expect(event.recurring_event_id).toBe('');
        expect(event.attachments).toEqual([]);
        expect(event.system).toBeNull();
        expect(event.extension_data).toEqual({
            catering: [],
            assets: [],
            images: [],
            view_access: 'OPEN',
        });
        expect(event.type).toBe('internal');
        event = new CalendarEvent({
            id: 'One',
            attendees: [
                { name: 'Jim', email: 'jim@work.com' },
                { name: 'Space 1', email: 'space@work.com', resource: true },
            ] as any,
            host: 'me@work.com',
            calendar: 'me@work.com',
            creator: 'me@work.com',
            title: 'For the test',
            body: 'Some content for you',
            private: true,
            all_day: true,
            timezone: 'Australia/Sydney',
            location: 'Home',
            recurring: true,
            recurrence: {} as any,
            recurring_event_id: 'Another',
            attachments: [{ name: 'file.png', blob: null }],
        });
        expect(event.id).toBe('One');
        expect(event.status).toBe('tentative');
        expect(event.host).toBe('me@work.com');
        expect(event.calendar).toBe('me@work.com');
        expect(event.creator).toBe('me@work.com');
        expect(event.attendees).toEqual([
            new User({ name: 'Jim', email: 'jim@work.com' }),
        ]);
        expect(event.resources).toEqual([
            new Space({ name: 'Space 1', email: 'space@work.com' }),
        ]);
        expect(event.title).toBe('For the test');
        expect(event.body).toBe('Some content for you');
        expect(event.private).toBe(true);
        expect(event.all_day).toBe(true);
        expect(event.duration).toBe(24 * 60 - 1);
        expect(event.timezone).toBe('Australia/Sydney');
        expect(event.location).toBe('Home');
        expect(event.recurring).toBe(true);
        expect(event.recurring_event_id).toBe('Another');
        expect(event.attachments).toEqual([{ name: 'file.png', blob: null }]);
        expect(event.system).toBeTruthy();
        expect(event.extension_data).toEqual({
            catering: [],
            assets: [],
            images: [],
            view_access: 'OPEN',
        });
        expect(event.type).toBe('external');
        // TODO: Test date/time fields
    });

    it('should expose extension data', () => {
        expect(event.ext('visitor_type')).toBeUndefined();
        event = new CalendarEvent({ visitor_type: 'done' });
        expect(event.ext('visitor_type')).toBe('done');
        event = new CalendarEvent({
            extension_data: { visitor_type: 'another' },
        });
        expect(event.ext('visitor_type')).toBe('another');
        event = new CalendarEvent({
            visitor_type: 'one',
            extension_data: { visitor_type: 'two' },
        });
        expect(event.ext('visitor_type')).toBe('one');
    });

    it('should expose current state of event', () => {
        expect(event.state).toBe('upcoming');
        event = new CalendarEvent({
            date: add(new Date(), { minutes: -1 }).valueOf(),
        });
        expect(event.state).toBe('started');
        event = new CalendarEvent({
            date: add(new Date(), { minutes: 30 }).valueOf(),
        });
        expect(event.state).toBe('future');
        event = new CalendarEvent({
            date: add(new Date(), { minutes: -20 }).valueOf(),
        });
        expect(event.state).toBe('in_progress');
        event = new CalendarEvent({
            date: add(new Date(), { minutes: -45 }).valueOf(),
        });
        expect(event.state).toBe('done');
    });

    it('should expose whether event can be checked in', () => {
        expect(event.can_check_in).toBeTruthy();
        event = new CalendarEvent({
            date: startOfHour(new Date()).valueOf(),
        });
        expect(event.can_check_in).toBeTruthy();
        event = new CalendarEvent({
            date: sub(new Date(), { days: 1 }).valueOf(),
        });
        expect(event.can_check_in).toBeFalsy();
        event = new CalendarEvent({
            date: add(new Date(), { days: 1 }).valueOf(),
        });
        expect(event.can_check_in).toBeFalsy();
        event = new CalendarEvent({
            date: startOfDay(new Date()).valueOf(),
            all_day: true,
        });
        expect(event.can_check_in).toBeTruthy();
    });

    it('should expose whether event is today', () => {
        expect(event.is_today).toBeTruthy();
        event = new CalendarEvent({
            date: sub(new Date(), { days: 2 }).valueOf(),
        });
        expect(event.is_today).toBeFalsy();
        event = new CalendarEvent({
            event_start: getUnixTime(add(new Date(), { days: 2 })),
        });
        expect(event.is_today).toBeFalsy();
    });

    it('should preserve custom all-day periods', () => {
        event = new CalendarEvent({
            all_day: true,
            date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            date_end: new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
        });

        expect(event.date).toBe(new Date(2028, 5, 15, 9, 0, 0, 0).valueOf());
        expect(event.duration).toBe(8 * 60);
        expect(event.date_end).toBe(
            new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
        );
    });

    it('should load custom all-day events from extension data', () => {
        event = new CalendarEvent({
            all_day: false,
            date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            date_end: new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
            extension_data: { custom_all_day: true },
        });

        expect(event.all_day).toBe(true);
        expect(event.date).toBe(new Date(2028, 5, 15, 9, 0, 0, 0).valueOf());
        expect(event.duration).toBe(8 * 60);
    });

    it('should serialise custom all-day events for the backend', () => {
        event = new CalendarEvent({
            all_day: true,
            date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            date_end: new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
        });

        const json = event.toJSON();

        expect(json.all_day).toBe(false);
        expect(json.extension_data.custom_all_day).toBe(true);
        expect(json.extension_data.all_day_date).toBe('2028-06-15');
    });

    it('should serialise recurring events from the recurrence start', () => {
        const recurrence_start = new Date(2026, 4, 13, 9).valueOf();
        event = new CalendarEvent({
            date: new Date(2026, 4, 12, 9).valueOf(),
            date_end: new Date(2026, 4, 12, 10).valueOf(),
            recurring: true,
            recurrence: {
                start: recurrence_start,
                end: new Date(2026, 10, 30).valueOf(),
                interval: 1,
                pattern: 'monthly',
                days_of_week: [3],
            },
        });

        const json = event.toJSON();

        expect(json.recurrence.range_start).toBe(
            getUnixTime(startOfDay(recurrence_start)),
        );
        expect(json.recurrence.days_of_week).toEqual(['wednesday']);
    });

    it('should serialise recurring events until the selected end date', () => {
        const recurrence_end = new Date(2026, 5, 30, 23, 59, 59, 999).valueOf();
        event = new CalendarEvent({
            date: new Date(2026, 5, 2, 9).valueOf(),
            date_end: new Date(2026, 5, 2, 10).valueOf(),
            recurring: true,
            recurrence: {
                start: new Date(2026, 5, 2, 9).valueOf(),
                end: recurrence_end,
                interval: 1,
                pattern: 'weekly',
                days_of_week: [2],
            },
        });

        const json = event.toJSON();

        expect(json.recurrence.range_end).toBe(
            getUnixTime(endOfDay(recurrence_end)),
        );
    });

    it('should clear custom all-day metadata when updating an existing event', () => {
        event = new CalendarEvent({
            id: 'event-1',
            all_day: false,
            date: new Date(2028, 5, 15, 9, 0, 0, 0).valueOf(),
            date_end: new Date(2028, 5, 15, 17, 0, 0, 0).valueOf(),
        });

        const json = event.toJSON();

        expect(json.all_day).toBe(false);
        expect(json.extension_data.custom_all_day).toBe(false);
    });

    it('should expose list of guests for event', () => {
        setInternalUserDomain('work.com');
        expect(event.guests).toEqual([]);
        event = new CalendarEvent({
            attendees: [
                { name: 'Jim', email: 'jim@work.com', is_external: false },
                {
                    name: 'Jim',
                    email: 'jim@visitor.com',
                    is_external: true,
                    visit_expected: true,
                },
            ] as any,
        });
        const guests = event.guests;
        expect(guests.length).toBeGreaterThan(0);
        const visitor_guest = guests.find((g) => g.email === 'jim@visitor.com');
        expect(visitor_guest).toBeTruthy();
        expect(visitor_guest?.name).toBe('Jim');
        expect(visitor_guest?.visit_expected).toBe(true);
    });

    it('should allow setting the default host', () => {
        expect(event.creator).toBe('');
        setDefaultCreator({ email: 'jim@place.tech' } as any);
        event = new CalendarEvent();
        expect(event.creator).toBe('jim@place.tech');
        event = new CalendarEvent({ creator: 'a@p.tech' });
        expect(event.creator).toBe('a@p.tech');
    });

    it('should treat attendees matching system email as resources', () => {
        event = new CalendarEvent({
            attendees: [
                {
                    name: 'Meeting Room',
                    email: 'ROOM-1@WORK.COM',
                    response_status: 'accepted',
                },
                { name: 'Alex', email: 'alex@work.com' },
            ] as any,
            system: { email: 'room-1@work.com' } as any,
        });
        expect(event.attendees).toEqual([
            new User({ name: 'Alex', email: 'alex@work.com' }),
        ]);
        expect(event.resources).toContainEqual(
            new Space({
                name: 'Meeting Room',
                email: 'ROOM-1@WORK.COM',
                response_status: 'accepted',
            }),
        );
        expect(event.status).toBe('approved');
    });
});
