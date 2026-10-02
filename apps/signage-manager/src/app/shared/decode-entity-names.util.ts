/**
 * The backend HTML-encodes resource names on save (e.g. `Sales & Marketing`
 * becomes `Sales &amp; Marketing`). Angular then escapes again on render, so the
 * UI shows the literal `&amp;`. Decode names back to their real characters at the
 * data boundary so display, forms, search and sort all use the real value.
 */

let _decoder: HTMLTextAreaElement | null = null;

export function decodeEntities(value: string): string {
    if (!value || value.indexOf('&') === -1) return value;
    _decoder ??= document.createElement('textarea');
    _decoder.innerHTML = value;
    return _decoder.value;
}

const NAME_FIELDS = ['name', 'display_name'];
const NESTED_FIELDS = ['group', 'user', 'zone'];

/** Returns a shallow copy of `item` with name fields (and one nested level of
 * group/user/zone) HTML-entity decoded. The copy keeps the prototype of
 * `item`, so getters such as `SignageMedia.media_url` still work. */
export function decodeEntityNames<T>(item: T): T {
    if (!item || typeof item !== 'object') return item;
    const copy: T = Object.assign(
        Object.create(Object.getPrototypeOf(item)),
        item,
    );
    const fields = copy as Record<string, unknown>;
    for (const field of NAME_FIELDS) {
        const value = fields[field];
        if (typeof value === 'string') fields[field] = decodeEntities(value);
    }
    for (const field of NESTED_FIELDS) {
        const value = fields[field];
        if (value && typeof value === 'object') {
            fields[field] = decodeEntityNames(value);
        }
    }
    return copy;
}
