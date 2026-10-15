import {
    toVisitorInternalOrExternal,
    VisitorInternalOrExternal,
} from './booking-form.model';

/** Visitor from the `visitor-invitees` user setting */
export interface RecentVisitor {
    email: string;
    name: string;
    company: string;
    phone: string;
    international: boolean;
    visitor_internal_or_external: VisitorInternalOrExternal;
}

function cleanValue(value: unknown): string {
    if (!value || value === 'null' || value === 'undefined') return '';
    return `${value}`.trim();
}

/** Lower-case email address without a `mailto:` prefix or quote characters */
export function normaliseVisitorEmail(value: unknown): string {
    return cleanValue(value)
        .replace(/^mailto:/i, '')
        .replace(/[<>"']/g, '')
        .toLowerCase();
}

/**
 * Parse the `visitor-invitees` history. The result has the most recent
 * visitor first and one visitor for each email address.
 *
 * An item is `email|name|company|international|phone|visitor_internal_or_external`.
 * Older visitor forms saved only the first four or five fields, with
 * `international` as `0` or `1`. A fourth field with a different value is a
 * phone number from an earlier version of the Workplace visitor flow.
 */
export function parseRecentVisitors(history: unknown): RecentVisitor[] {
    const list: unknown[] = Array.isArray(history) ? history : [];
    const visitors = new Map<string, RecentVisitor>();
    for (let index = list.length - 1; index >= 0; index--) {
        const item = list[index];
        if (typeof item !== 'string') continue;
        const [
            email,
            name,
            company,
            flag,
            phone,
            visitor_internal_or_external,
        ] = item.split('|');
        const key = normaliseVisitorEmail(email);
        if (!key || visitors.has(key)) continue;
        const is_flag = !flag || flag === '0' || flag === '1';
        visitors.set(key, {
            email: key,
            name: cleanValue(name),
            company: cleanValue(company),
            phone: cleanValue(is_flag ? phone : flag),
            international: flag === '1',
            visitor_internal_or_external: toVisitorInternalOrExternal(
                visitor_internal_or_external,
            ),
        });
    }
    return [...visitors.values()];
}

/** History item for a visitor, in the format that `parseRecentVisitors` reads */
export function recentVisitorEntry(visitor: Partial<RecentVisitor>): string {
    return [
        visitor.email || '',
        visitor.name || '',
        visitor.company || '',
        visitor.international ? '1' : '0',
        visitor.phone || '',
        toVisitorInternalOrExternal(visitor.visitor_internal_or_external),
    ].join('|');
}
