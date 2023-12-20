import { Space } from '@placeos/spaces';
import { setInternalUserDomain, User } from '@placeos/users';
import { add, getUnixTime, startOfDay, startOfHour, sub } from 'date-fns';
import { CalendarEvent, setDefaultCreator } from '../lib/event.class';

describe('CalendarEvent', () => {
    let event: CalendarEvent;

    beforeEach(() => (event = new CalendarEvent()));

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
            Intl.DateTimeFormat().resolvedOptions().timeZone
        );
        expect(event.location).toBe('');
        expect(event.recurring).toBe(false);
        expect(event.recurring_event_id).toBe('');
        expect(event.attachments).toEqual([]);
        expect(event.system).toBeNull();
        expect(event.extension_data).toEqual({ catering: [], assets: [] });
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
        expect(event.status).toBe('declined');
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
        expect(event.extension_data).toEqual({ catering: [], assets: [] });
        expect(event.type).toBe('cancelled');
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

    it('should expose list of guests for event', () => {
        setInternalUserDomain('work.com');
        expect(event.guests).toEqual([]);
        event = new CalendarEvent({
            attendees: [
                { name: 'Jim', email: 'jim@work.com' },
                {
                    name: 'Jim',
                    email: 'jim@visitor.com',
                    visit_expected: true,
                },
            ] as any,
        });
        expect(event.guests).toEqual([
            new User({
                name: 'Jim',
                email: 'jim@visitor.com',
                visit_expected: true,
            }),
        ]);
    });

    it('should allow setting the default host', () => {
        expect(event.creator).toBe('');
        setDefaultCreator({ email: 'jim@place.tech' } as any);
        event = new CalendarEvent();
        expect(event.creator).toBe('jim@place.tech');
        event = new CalendarEvent({ creator: 'a@p.tech' });
        expect(event.creator).toBe('a@p.tech');
    });
});
