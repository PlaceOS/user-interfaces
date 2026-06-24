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
 * group/user/zone) HTML-entity decoded. Idempotent for already-decoded values. */
export function decodeEntityNames<T>(item: T): T {
    if (!item || typeof item !== 'object') return item;
    const copy: any = { ...item };
    for (const field of NAME_FIELDS) {
        if (typeof copy[field] === 'string') {
            copy[field] = decodeEntities(copy[field]);
        }
    }
    for (const field of NESTED_FIELDS) {
        if (copy[field] && typeof copy[field] === 'object') {
            copy[field] = decodeEntityNames(copy[field]);
        }
    }
    return copy;
}
