import type { ParamMap, Params } from '@angular/router';
import type { PublicEvent } from './public-events.service';

/** Query params that pick the events source and the event */
const ROUTING_QUERY_PARAMS = [
    'system_id',
    'system',
    'id',
    'event_id',
    'direct_event',
];

/** Events source id from the `system_id`, `system` or `id` query param */
export function querySystemId(query: ParamMap) {
    return (
        query.get('system_id') || query.get('system') || query.get('id') || ''
    );
}

/**
 * Query params to keep when moving between the guest details and events
 * pages. The params that pick the source and the event are left out, as
 * each page sets them again.
 */
export function preservedQueryParams(query: Params): Params {
    const params = { ...query };
    for (const key of ROUTING_QUERY_PARAMS) delete params[key];
    return params;
}

/**
 * Moves focus to `el` only when focus is on the page body. This happens when
 * the focused control is removed, for example after a link changes the view.
 * Focus that the visitor moved to a control stays there.
 */
export function focusIfLost(el: HTMLElement | undefined) {
    if (el && el.ownerDocument.activeElement === el.ownerDocument.body) {
        el.focus();
    }
}

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

/**
 * Plain text of the event description. The HTML is parsed into an inert
 * document, so scripts and event handlers in the description do not run.
 */
export function eventDescriptionText(event: PublicEvent) {
    const html = `${eventDescription(event)}`;
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return (doc.body.textContent || '').trim();
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

/** Made once, as `Intl.DateTimeFormat` objects are slow to make */
const DATE_FORMAT = new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});
const TIME_FORMAT = new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
});

export function eventTime(event: PublicEvent) {
    const start = toDate(
        event.event_start || event.date_start || event.start || event.starts_at,
    );
    const end = toDate(
        event.event_end || event.date_end || event.end || event.ends_at,
    );
    if (!start) return 'Time to be confirmed';
    const start_text = `${DATE_FORMAT.format(start)}, ${TIME_FORMAT.format(start)}`;
    if (!end) return start_text;
    // An event that ends on a later day shows the end date too
    const end_text =
        end.toDateString() === start.toDateString()
            ? TIME_FORMAT.format(end)
            : `${DATE_FORMAT.format(end)}, ${TIME_FORMAT.format(end)}`;
    return `${start_text} - ${end_text}`;
}

function toDate(value: unknown) {
    if (!value) return null;
    const date =
        typeof value === 'number'
            ? new Date(value < 1_000_000_000_000 ? value * 1000 : value)
            : new Date(`${value}`);
    return Number.isNaN(date.valueOf()) ? null : date;
}
