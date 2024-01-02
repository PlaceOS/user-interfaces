import { User } from 'libs/users/src/lib/user.class';
import { addMinutes, format, set, startOfMinute } from 'date-fns';
import { toQueryString } from './api';
import { localToTimezone } from './timezone-helpers';
import { unique } from './general';
import { PlaceSystem } from '@placeos/ts-client';

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

export function generateCalendarFileLink(event: CalEvent): string {
    const chunks: [string, any][] = [];
    const description = formatCalFileText(
        `${event.body || ''}${event.id ? '\n\n[ID|' + event.id + ']' : ''}`
    );
    const location = formatCalFileText(`${event.location}`);
    chunks.push(['BEGIN', 'VCALENDAR']);
    chunks.push(['VERSION', '2.0']);
    chunks.push(['BEGIN', 'VEVENT']);
    chunks.push(['URL', `${event.meeting_url}`]);
    chunks.push([
        'DTSTART',
        `${new Date(
            event.all_day
                ? startOfMinute(set(event.date, { hours: 6, minutes: 0 }))
                : event.date
        ).toISOString()}`,
    ]);
    chunks.push([
        'DTEND',
        `${
            event.all_day
                ? startOfMinute(
                      set(event.date, { hours: 18, minutes: 0 })
                  ).toISOString()
                : addMinutes(event.date, event.duration ?? 60).toISOString()
        }`,
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
            addMinutes(event.date, event.duration ?? 60)
        )}`,
    };
    const emails = (event.attendees || []).map((_: any) => _.email || _);
    const resources = (
        (event.resources?.length ? event.resources : null) || [event.system]
    ).map((_: any) => _?.email || _);
    if (emails.length || resources.length)
        details.add = unique([...emails, ...resources]).join();
    return `https://calendar.google.com/calendar/render?${toQueryString(
        details
    )}`;
}

export function generateMicrosoftCalendarLink(
    event: CalEvent,
    type: 'outlook' | 'office' = 'office'
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
              data
          )}`
        : `https://outlook.live.com/calendar/0/action/compose?${toQueryString(
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
