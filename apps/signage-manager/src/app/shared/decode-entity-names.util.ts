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
// Copies this module made. Some items pass the data boundary twice, such as
// displays from `querySignageDisplays` read through `queryAll`, and a second
// decode would turn a saved `&amp;` into `&`.
const _decoded = new WeakSet<object>();

/** Returns a shallow copy of `item` with name fields (and one nested level of
 * group/user/zone) HTML-entity decoded. The copy keeps the prototype of
 * `item`, so getters such as `SignageMedia.media_url` still work. An item
 * this function returned is returned as is, so names decode only once. */
export function decodeEntityNames<T>(item: T): T {
    if (!item || typeof item !== 'object' || _decoded.has(item)) return item;
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
    _decoded.add(fields);
    return copy;
}
