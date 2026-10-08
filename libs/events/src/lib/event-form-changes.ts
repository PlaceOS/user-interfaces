import type { EventFormValue } from './event-form';

/** Form fields that are derived or need semantic comparison below. */
const IGNORED_DETAIL_FIELDS = [
    'attendees',
    'body',
    'system',
    'date_end',
    'organiser',
    'recurrence',
    'resources',
];

/** Serialise an event body so that editor-only markup changes compare equal. */
function normaliseEventBody(body: string) {
    const template = document.createElement('template');
    template.innerHTML = body || '';
    const serialise = (node: Node): string => {
        if (node.nodeType === Node.TEXT_NODE) {
            return (node.textContent || '').replace(/\u200b/g, '');
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return '';
        const element = node as Element;
        if (element.tagName === 'BR') return '\n';
        const content = [...element.childNodes].map(serialise).join('');
        if (element.tagName === 'DIV' || element.tagName === 'P') {
            return `\n${content}\n`;
        }
        const tag = element.tagName.toLowerCase();
        const attributes = [...element.attributes]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ name, value }) => ` ${name}="${value}"`)
            .join('');
        return `<${tag}${attributes}>${content}</${tag}>`;
    };
    return [...template.content.childNodes]
        .map(serialise)
        .join('')
        .replace(/[ \t]+\n|\n[ \t]+/g, '\n')
        .replace(/\n+/g, '\n')
        .trim();
}

/** Lower-cased emails of the attendees in an event form value. */
export function attendeeEmails(value: EventFormValue): string[] {
    return value.attendees.map((_) => (_.email || _).toLowerCase());
}

/**
 * Serialise every event detail except the attendee list. Two values with the
 * same key differ only in their attendees.
 */
export function eventDetailsKey(value: EventFormValue): string {
    const details = Object.entries(value).filter(
        ([key]) => !IGNORED_DETAIL_FIELDS.includes(key),
    );
    const recurrence = value.recurrence;
    details.push(['body', normaliseEventBody(value.body)]);
    details.push(['host_email', value.organiser?.email || '']);
    details.push([
        'recurrence',
        recurrence?.pattern && recurrence?._pattern !== 'none'
            ? [
                  recurrence.pattern,
                  recurrence.interval || 1,
                  [...(recurrence.days_of_week || [])].sort(),
                  recurrence.nth_of_month || null,
                  recurrence.start || null,
                  recurrence.end || null,
                  recurrence.occurrences || null,
              ]
            : null,
    ]);
    details.push([
        'space_ids',
        (value.resources || [])
            .map((_) => (_.email || _.id || '').toLowerCase())
            .sort(),
    ]);
    details.sort(([a], [b]) => (a > b ? 1 : -1));
    return JSON.stringify(details);
}
