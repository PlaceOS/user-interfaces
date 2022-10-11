import { User } from 'libs/users/src/lib/user.class';
import { addMinutes } from 'date-fns';
import { toQueryString } from './api';

export interface CalEvent {
    title: string;
    date: number;
    duration: number;
    all_day: boolean;
    body: string;
    location: string;
    host: string;
    organiser: User;
    user_name?: string;
    user_email?: string;
    attendees: string[];
    meeting_url?: string;
}

export function generateCalendarFileLink(event: CalEvent): string {
    const chunks: [string, any][] = [];
    const description = formatCalFileText(`${event.body}`);
    const location = formatCalFileText(`${event.location}`);
    chunks.push(['BEGIN', 'VCALENDAR']);
    chunks.push(['VERSION', '2.0']);
    chunks.push(['BEGIN', 'VEVENT']);
    chunks.push(['URL', `${event.meeting_url}`]);
    chunks.push(['DTSTART', `${new Date(event.date).toISOString()}`]);
    chunks.push([
        'DTEND',
        `${addMinutes(event.date, event.duration ?? 60).toISOString()}`,
    ]);
    chunks.push(['SUMMARY', `${event.title}`]);
    chunks.push(['DESCRIPTION', description]);
    chunks.push(['LOCATION', location]);
    const host =
        event.organiser?.name ||
        event.host?.split('@') ||
        event.user_name ||
        'User';
    chunks.push([
        'ORGANIZER',
        `CN=${host}:MAILTO:${event.host || event.user_email}`,
    ]);
    const url_data = chunks
        .map(([key, value]) => `${key}:${encodeURIComponent(value)}`)
        .join('\n');
    return `data:text/calendar;charset=utf8,${url_data}`;
}

export function generateGoogleCalendarLink(event: CalEvent): string {
    const details: any = {
        action: 'TEMPLATE',
        text: event.title,
        details: event.body,
        location: event.location,
        trp: false,
        dates: `${new Date(event.date).toISOString()}/${addMinutes(
            event.date,
            event.duration ?? 60
        ).toISOString()}`,
    };
    if (event.attendees && event.attendees.length) {
        details.add = event.attendees.join();
    }
    return `https://calendar.google.com/calendar/render?${toQueryString(
        details
    )}`;
}

export function generateMicrosoftCalendarLink(
    event: CalEvent,
    type: 'outlook' | 'office' = 'outlook'
): string {
    const data = {
        path: '/calendar/action/compose',
        rru: 'addevent',
        startdt: new Date(event.date).toISOString(),
        enddt: addMinutes(event.date, event.duration ?? 60).toISOString(),
        subject: event.title,
        body: event.body,
        location: event.location,
        allday: event.all_day ?? false,
    };
    return type === 'office'
        ? `https://outlook.office.com/calendar/0/deeplink/compose?${toQueryString(
              data
          )}`
        : `https://outlook.live.com/calendar/0/deeplink/compose?${toQueryString(
              data
          )}`;
}

function formatCalFileText(str: string) {
    return str
        .replace(/,/gm, ',')
        .replace(/;/gm, ';')
        .replace(/\r\n/gm, '\n')
        .replace(/\n/gm, '\\n')
        .replace(/(\\n)[\s\t]+/gm, '\\n');
}
