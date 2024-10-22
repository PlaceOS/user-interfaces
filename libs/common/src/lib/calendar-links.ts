import { User } from 'libs/users/src/lib/user.class';
import { addDays, addMinutes, format, set, startOfMinute } from 'date-fns';
import { toQueryString } from './api';
import { localToTimezone } from './timezone-helpers';
import { unique } from './general';
import { PlaceSystem } from '@placeos/ts-client';
import { USER_DOMAIN } from '@placeos/users';

export interface CalEvent {
    id?: string;
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
    resources?: string[];
    meeting_url?: string;
    system?: PlaceSystem;
}

function formatUTC(date: Date | number) {
    const utc_date = localToTimezone(date, 'UTC');
    return `${format(utc_date, 'yyyyMMdd')}T${format(utc_date, 'HHmmss')}Z`;
}

function formatAllDay(date: Date | number) {
    return `${format(date, 'yyyyMMdd')}`;
}

function escapeText(text: string): string {
    return (text || '').replace(/\\|;|,|\n/g, (match) => {
        switch (match) {
            case '\\':
                return '\\\\';
            case ';':
                return '\\;';
            case ',':
                return '\\,';
            case '\n':
                return '\\n';
            default:
                return match;
        }
    });
}

export function generateCalendarFileLink(event: CalEvent): string {
    if (!event) return 'data:text/calendar;charset=utf8,';
    const chunks: [string, string][] = [];

    const description = escapeText(
        `${event.body || ''}${event.id ? '\n\n[ID|' + event.id + ']' : ''}`,
    );
    const location = escapeText(`${event.location}`);

    chunks.push(['BEGIN', 'VCALENDAR']);
    chunks.push(['VERSION', '2.0']);
    chunks.push(['BEGIN', 'VEVENT']);
    chunks.push(['UID', `${event.id || 'uid-' + Date.now()}`]);
    chunks.push(['DTSTAMP', formatUTC(new Date())]);

    if (event.meeting_url) {
        chunks.push(['URL', `${event.meeting_url}`]);
    }

    if (event.all_day) {
        chunks.push(['DTSTART;VALUE=DATE', formatAllDay(event.date)]);
        chunks.push(['DTEND;VALUE=DATE', formatAllDay(addDays(event.date, 1))]);
    } else {
        chunks.push(['DTSTART', formatUTC(event.date)]);
        chunks.push([
            'DTEND',
            formatUTC(addMinutes(event.date, event.duration || 60)),
        ]);
    }

    chunks.push(['SUMMARY', escapeText(event.title)]);
    chunks.push(['DESCRIPTION', description]);
    chunks.push(['LOCATION', location]);

    const hostEmail = event.host || event.user_email || `no-reply@place.tech`;
    const hostName =
        event.organiser?.name || hostEmail.split('@')[0] || 'Staff';
    chunks.push([
        'ORGANIZER',
        `CN=${escapeText(hostName)}:mailto:${hostEmail}`,
    ]);

    chunks.push(['END', 'VEVENT']);
    chunks.push(['END', 'VCALENDAR']);

    const content = chunks
        .map(([key, value]) => `${key}:${value}`)
        .join('\r\n');
    const url_data = encodeURIComponent(content);

    return `data:text/calendar;charset=utf8,${url_data}`;
}

export function generateGoogleCalendarLink(event: CalEvent): string {
    const fmt = event.all_day ? formatAllDay : formatUTC;
    const details: any = {
        action: 'TEMPLATE',
        text: event.title,
        details: `${event.body || ''}${
            event.id ? '\n\n[ID|' + event.id + ']' : ''
        }`,
        location: event.location,
        trp: false,
        dates: `${fmt(event.date)}/${fmt(
            addMinutes(event.date, event.duration ?? 60),
        )}`,
    };
    const emails = (event.attendees || []).map((_: any) => _.email || _);
    const resources = (
        (event.resources?.length ? event.resources : null) || [event.system]
    ).map((_: any) => _?.email || _);
    if (emails.length || resources.length)
        details.add = unique([...emails, ...resources]).join();
    return `https://calendar.google.com/calendar/render?${toQueryString(
        details,
    )}`;
}

export function generateMicrosoftCalendarLink(
    event: CalEvent,
    type: 'outlook' | 'office' = 'office',
): string {
    if (!event.date) event.date = Date.now();
    const data: any = {
        path: '/calendar/action/compose',
        rru: 'addevent',
        startdt: new Date(event.date).toISOString(),
        enddt: addMinutes(event.date, event.duration ?? 60).toISOString(),
        subject: event.title,
        body: `${event.body || ''}${
            event.id ? '\n\n[ID|' + event.id + ']' : ''
        }`,
        location: event.location,
        allday: event.all_day ?? false,
    };
    if (event.all_day) delete data.enddt;
    const emails = (event.attendees || []).map((_: any) => _.email || _);
    const resources = (
        (event.resources?.length ? event.resources : null) || [event.system]
    ).map((_: any) => _?.email || _);
    if (emails.length || resources.length)
        data.to = unique([...emails, ...resources]).join();
    return type === 'office'
        ? `https://outlook.office.com/calendar/0/action/compose?${toQueryString(
              data,
          )}`
        : `https://outlook.live.com/calendar/0/action/compose?${toQueryString(
              data,
          )}`;
}
