import type { PublicEvent } from './public-events.service';

export function eventId(event: PublicEvent) {
    return `${
        event.id ||
        event.event_id ||
        event.calendar_event_id ||
        event.uid ||
        event.name ||
        ''
    }`;
}

export function eventTitle(event: PublicEvent) {
    return (
        event.title ||
        event.name ||
        event.summary ||
        event.display_name ||
        'Untitled event'
    );
}

export function eventDescription(event: PublicEvent) {
    return event.description || event.body || event.details || '';
}

export function eventDescriptionText(event: PublicEvent) {
    const html = `${eventDescription(event)}`;
    if (!html) return '';
    const element = document.createElement('div');
    element.innerHTML = html;
    return (element.textContent || element.innerText || '').trim();
}

export function isSystemEvent(event: PublicEvent) {
    return (
        event.is_system_event === true ||
        `${event.body || event.description || event.details || ''}`.includes(
            'main_event_id',
        )
    );
}

export function eventLocation(event: PublicEvent) {
    return event.location || event.location_name || event.space_name || '';
}

export function eventTime(event: PublicEvent) {
    const start = toDate(
        event.event_start || event.date_start || event.start || event.starts_at,
    );
    const end = toDate(
        event.event_end || event.date_end || event.end || event.ends_at,
    );
    if (!start) return 'Time to be confirmed';
    const date = new Intl.DateTimeFormat(undefined, {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }).format(start);
    const start_time = new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: '2-digit',
    }).format(start);
    const end_time = end
        ? new Intl.DateTimeFormat(undefined, {
              hour: 'numeric',
              minute: '2-digit',
          }).format(end)
        : '';
    return `${date}, ${start_time}${end_time ? ' - ' + end_time : ''}`;
}

function toDate(value: unknown) {
    if (!value) return null;
    const date =
        typeof value === 'number'
            ? new Date(value < 1_000_000_000_000 ? value * 1000 : value)
            : new Date(`${value}`);
    return Number.isNaN(date.valueOf()) ? null : date;
}
