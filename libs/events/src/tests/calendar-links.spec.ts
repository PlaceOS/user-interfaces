import { addDays, addMinutes, format } from 'date-fns';
import { localToTimezone } from '@placeos/common';
import {
    CalEvent,
    generateCalendarFileLink,
    generateGoogleCalendarLink,
    generateMicrosoftCalendarLink,
} from '../lib/calendar-links';

function formatUTC(date: Date | number) {
    const utc_date = localToTimezone(date, 'UTC');
    return `${format(utc_date, 'yyyyMMdd')}T${format(utc_date, 'HHmmss')}Z`;
}

const EVENT: CalEvent = {
    id: 'event-1',
    title: 'Team Meeting',
    date: new Date('2024-06-12T10:00:00').valueOf(),
    duration: 90,
    all_day: false,
    body: 'Discuss things',
    location: 'Room 1',
    host: 'host@place.tech',
    organiser: { name: 'Host Person' } as any,
    attendees: ['a@place.tech', 'b@place.tech'],
    resources: ['room1@place.tech'],
};

describe('generateCalendarFileLink', () => {
    it('should return an empty calendar link for no event', () => {
        expect(generateCalendarFileLink(null)).toBe(
            'data:text/calendar;charset=utf8,',
        );
    });

    it('should generate an ICS data URI with the event details', () => {
        const link = generateCalendarFileLink(EVENT);
        const content = decodeURIComponent(
            link.replace('data:text/calendar;charset=utf8,', ''),
        );
        expect(content).toContain('BEGIN:VCALENDAR');
        expect(content).toContain('BEGIN:VEVENT');
        expect(content).toContain('UID:event-1');
        expect(content).toContain('SUMMARY:Team Meeting');
        expect(content).toContain('LOCATION:Room 1');
        expect(content).toContain(`DTSTART:${formatUTC(EVENT.date)}`);
        expect(content).toContain(
            `DTEND:${formatUTC(addMinutes(EVENT.date, 90))}`,
        );
        expect(content).toContain(
            'ORGANIZER:CN=Host Person:mailto:host@place.tech',
        );
        expect(content).toContain('[ID|event-1]');
        expect(content).toContain('END:VCALENDAR');
    });

    it('should use date-only values for all day events', () => {
        const link = generateCalendarFileLink({ ...EVENT, all_day: true });
        const content = decodeURIComponent(
            link.replace('data:text/calendar;charset=utf8,', ''),
        );
        expect(content).toContain(
            `DTSTART;VALUE=DATE:${format(EVENT.date, 'yyyyMMdd')}`,
        );
        expect(content).toContain(
            `DTEND;VALUE=DATE:${format(addDays(EVENT.date, 1), 'yyyyMMdd')}`,
        );
    });

    it('should escape special characters in text fields', () => {
        const link = generateCalendarFileLink({
            ...EVENT,
            title: 'One, Two; Three\nFour',
        });
        const content = decodeURIComponent(
            link.replace('data:text/calendar;charset=utf8,', ''),
        );
        expect(content).toContain('SUMMARY:One\\, Two\\; Three\\nFour');
    });

    it('should include the meeting URL when set', () => {
        const link = generateCalendarFileLink({
            ...EVENT,
            meeting_url: 'https://meet.example.com/1',
        });
        const content = decodeURIComponent(
            link.replace('data:text/calendar;charset=utf8,', ''),
        );
        expect(content).toContain('URL:https://meet.example.com/1');
    });

    it('should fallback organiser details when not set', () => {
        const link = generateCalendarFileLink({
            ...EVENT,
            host: '',
            organiser: null,
        });
        const content = decodeURIComponent(
            link.replace('data:text/calendar;charset=utf8,', ''),
        );
        expect(content).toContain(
            'ORGANIZER:CN=no-reply:mailto:no-reply@place.tech',
        );
    });
});

describe('generateGoogleCalendarLink', () => {
    it('should generate a Google Calendar render URL', () => {
        const link = generateGoogleCalendarLink(EVENT);
        expect(link).toMatch(
            /^https:\/\/calendar\.google\.com\/calendar\/render\?/,
        );
        const params = new URLSearchParams(link.split('?')[1]);
        expect(params.get('action')).toBe('TEMPLATE');
        expect(params.get('text')).toBe('Team Meeting');
        expect(params.get('location')).toBe('Room 1');
        expect(params.get('dates')).toBe(
            `${formatUTC(EVENT.date)}/${formatUTC(addMinutes(EVENT.date, 90))}`,
        );
        expect(params.get('details')).toContain('[ID|event-1]');
    });

    it('should add unique attendees and resources to the invite', () => {
        const link = generateGoogleCalendarLink({
            ...EVENT,
            attendees: ['a@place.tech', 'a@place.tech'],
            resources: ['room1@place.tech'],
        });
        const params = new URLSearchParams(link.split('?')[1]);
        expect(params.get('add')).toBe('a@place.tech,room1@place.tech');
    });
});

describe('generateMicrosoftCalendarLink', () => {
    it('should generate an Office deeplink by default', () => {
        const link = generateMicrosoftCalendarLink(EVENT);
        expect(link).toMatch(
            /^https:\/\/outlook\.office\.com\/calendar\/deeplink\/compose\?/,
        );
        const params = new URLSearchParams(link.split('?')[1]);
        expect(params.get('subject')).toBe('Team Meeting');
        expect(params.get('startdt')).toBe(
            `${format(EVENT.date, 'yyyy-MM-dd')}T${format(EVENT.date, 'HH:mm:ss')}`,
        );
        expect(params.get('to')).toBe(
            'a@place.tech,b@place.tech,room1@place.tech',
        );
    });

    it('should generate an outlook.live link when requested', () => {
        const link = generateMicrosoftCalendarLink(EVENT, 'outlook');
        expect(link).toMatch(
            /^https:\/\/outlook\.live\.com\/calendar\/deeplink\/compose\?/,
        );
    });

    it('should omit the end date for all day events', () => {
        const link = generateMicrosoftCalendarLink({ ...EVENT, all_day: true });
        const params = new URLSearchParams(link.split('?')[1]);
        expect(params.get('enddt')).toBeNull();
        expect(params.get('allday')).toBe('true');
    });
});
