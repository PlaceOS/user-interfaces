import { addDays, getUnixTime, startOfDay } from 'date-fns';

import {
    CalendarEvent,
    eventStatus,
    parseRecurrence,
} from '../lib/types/event.class';

const HOUR = 60 * 60;

function unixNow() {
    return getUnixTime(Date.now());
}

describe('eventStatus', () => {
    it('should decline cancelled events', () => {
        expect(eventStatus({ status: 'cancelled' })).toBe('declined');
    });

    it('should approve events without resources', () => {
        expect(eventStatus({})).toBe('approved');
    });

    it('should approve events when all resources accepted', () => {
        expect(
            eventStatus({
                resources: [
                    { response_status: 'accepted' },
                    { response_status: 'confirmed' },
                ],
            }),
        ).toBe('approved');
    });

    it('should mark events tentative while awaiting resources', () => {
        expect(
            eventStatus({
                resources: [
                    { response_status: 'accepted' },
                    { response_status: 'needsAction' },
                ],
            }),
        ).toBe('tentative');
    });

    it('should decline events with declined resources', () => {
        expect(
            eventStatus({
                resources: [{ response_status: 'declined' }],
            }),
        ).toBe('declined');
    });
});

describe('parseRecurrence', () => {
    const start = new Date(2024, 0, 1, 10, 0).valueOf();

    it('should convert start and end to day-boundary unix times', () => {
        const end = new Date(2024, 0, 31).valueOf();
        const parsed = parseRecurrence({
            start,
            end,
            pattern: 'daily',
            interval: 1,
            days_of_week: [],
        });
        expect(parsed.range_start).toBe(getUnixTime(startOfDay(start)));
        expect(parsed.range_end).toBeGreaterThan(getUnixTime(end));
    });

    it('should derive the end date from occurrences', () => {
        const parsed = parseRecurrence({
            start,
            end: undefined,
            pattern: 'daily',
            interval: 1,
            occurrences: 3,
            days_of_week: [],
        });
        const expected_end = addDays(start, 2).valueOf();
        expect(parsed.range_end).toBe(
            getUnixTime(addDays(startOfDay(expected_end), 1)) - 1,
        );
    });

    it('should map day indexes to day names', () => {
        const parsed = parseRecurrence({
            start,
            end: start,
            pattern: 'weekly',
            interval: 1,
            days_of_week: [1, 3],
        });
        expect(parsed.days_of_week).toEqual(['monday', 'wednesday']);
    });
});

describe('CalendarEvent', () => {
    it('should default to a 30 minute meeting starting soon', () => {
        const event = new CalendarEvent();
        expect(event.duration).toBe(30);
        expect(event.date_end - event.date).toBe(30 * 60 * 1000);
    });

    it('should compute duration from start and end times', () => {
        const start = unixNow();
        const event = new CalendarEvent({
            event_start: start,
            event_end: start + 2 * HOUR,
        });
        expect(event.duration).toBe(120);
    });

    it('should split attendees from resources', () => {
        const event = new CalendarEvent({
            host: 'alex@dev.place.tech',
            attendees: [
                { name: 'Alex', email: 'alex@dev.place.tech' },
                {
                    name: 'Room 1',
                    email: 'room-1@org.com',
                    resource: true,
                    response_status: 'accepted',
                },
            ] as any,
        });
        expect(event.attendees.length).toBe(1);
        expect(event.attendees[0].email).toBe('alex@dev.place.tech');
        expect(event.resources.length).toBe(1);
        expect(event.resources[0].email).toBe('room-1@org.com');
        expect(event.space.email).toBe('room-1@org.com');
    });

    it('should treat attendees matching the system email as resources', () => {
        const event = new CalendarEvent({
            attendees: [
                { name: 'Room 1', email: 'room-1@org.com' },
            ] as any,
            system: { email: 'room-1@org.com' } as any,
        });
        expect(event.attendees.length).toBe(0);
        expect(event.resources.length).toBe(1);
    });

    it('should identify external guests', () => {
        const event = new CalendarEvent({
            attendees: [
                { name: 'Alex', email: 'alex@dev.place.tech' },
                { name: 'Guest', email: 'guest@external.com' },
            ] as any,
        });
        expect(event.guests.length).toBe(1);
        expect(event.guests[0].email).toBe('guest@external.com');
    });

    it('should strip hidden content from the body', () => {
        const event = new CalendarEvent({
            body: 'Notes &lt;&lt;&lt;hidden&gt;&gt;&gt; more',
        });
        expect(event.body).toBe('Notes  more');
    });

    it('should extract the meeting ID from the body', () => {
        const event = new CalendarEvent({
            body: 'Join here [ID|meeting-123]',
        });
        expect(event.meeting_id).toBe('meeting-123');
    });

    it('should expand all day events to the full day', () => {
        const start = getUnixTime(new Date(2030, 0, 10, 10, 0));
        const event = new CalendarEvent({
            event_start: start,
            all_day: true,
        } as any);
        expect(event.all_day).toBe(true);
        expect(event.is_all_day).toBe(true);
        expect(event.date).toBe(
            startOfDay(new Date(2030, 0, 10, 10, 0)).valueOf(),
        );
        expect(event.duration).toBe(24 * 60 - 1);
    });

    it('should map recurrence day names to indexes', () => {
        const start = unixNow();
        const event = new CalendarEvent({
            event_start: start,
            event_end: start + HOUR,
            recurring: true,
            recurrence: {
                start: start * 1000,
                end: (start + 7 * 24 * HOUR) * 1000,
                pattern: 'weekly',
                interval: 1,
                days_of_week: ['monday', 'wednesday'],
            } as any,
        });
        expect(event.recurrence.days_of_week).toEqual([1, 3]);
    });

    it('should derive the event state from the current time', () => {
        const now = unixNow();
        const future = new CalendarEvent({
            event_start: now + 2 * HOUR,
            event_end: now + 3 * HOUR,
        });
        expect(future.state).toBe('future');
        const upcoming = new CalendarEvent({
            event_start: now + 10 * 60,
            event_end: now + HOUR,
        });
        expect(upcoming.state).toBe('upcoming');
        const started = new CalendarEvent({
            event_start: now - 5 * 60,
            event_end: now + HOUR,
        });
        expect(started.state).toBe('started');
        const in_progress = new CalendarEvent({
            event_start: now - 30 * 60,
            event_end: now + HOUR,
        });
        expect(in_progress.state).toBe('in_progress');
        const done = new CalendarEvent({
            event_start: now - 2 * HOUR,
            event_end: now - HOUR,
        });
        expect(done.state).toBe('done');
    });

    it('should store unknown fields in extension data', () => {
        const event = new CalendarEvent({ custom_field: 'value' } as any);
        expect(event.extension_data.custom_field).toBe('value');
        expect(event.ext('custom_field' as any)).toBe('value');
    });

    it('should mark events with declined status as cancelled type', () => {
        const event = new CalendarEvent({ status: 'cancelled' } as any);
        expect(event.type).toBe('cancelled');
    });

    it('should mark events with external attendees as external type', () => {
        const event = new CalendarEvent({
            attendees: [{ name: 'Guest', email: 'guest@external.com' }] as any,
        });
        expect(event.type).toBe('external');
        const internal = new CalendarEvent({
            attendees: [
                { name: 'Alex', email: 'alex@dev.place.tech' },
            ] as any,
        });
        expect(internal.type).toBe('internal');
    });

    describe('toJSON', () => {
        it('should serialise times and merge resources into attendees', () => {
            const start = unixNow();
            const event = new CalendarEvent({
                event_start: start,
                event_end: start + HOUR,
                attendees: [
                    { name: 'Alex', email: 'alex@dev.place.tech' },
                    {
                        name: 'Room 1',
                        email: 'room-1@org.com',
                        resource: true,
                    },
                ] as any,
            });
            const json = event.toJSON();
            expect(json.event_start).toBe(start);
            expect(json.event_end).toBe(start + HOUR);
            expect(json.attendees.length).toBe(2);
            expect(
                json.attendees.find((_) => _.email === 'room-1@org.com')
                    .resource,
            ).toBe(true);
            expect(json.date).toBeUndefined();
            expect(json.duration).toBeUndefined();
            expect(json.status).toBeUndefined();
        });

        it('should include the system ID', () => {
            const event = new CalendarEvent({
                system: { id: 'sys-1', email: 'room@org.com' } as any,
            });
            expect(event.toJSON().system_id).toBe('sys-1');
        });
    });
});
