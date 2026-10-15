import { ID_PATTERN, REFERENCE_ATTRS } from './constants';

export function isValidId(id: string): boolean {
    return ID_PATTERN.test(id);
}

export function idIssue(id: string): string | null {
    if (!id) return 'id is empty';
    if (/^[^A-Za-z]/.test(id)) return `id "${id}" must start with a letter`;
    if (!ID_PATTERN.test(id)) {
        return `id "${id}" may only contain letters, digits, "_", "." and "-"`;
    }
    return null;
}

export function idsIn(root: Element): Set<string> {
    const ids = new Set<string>();
    if (root.hasAttribute('id')) ids.add(root.getAttribute('id') || '');
    for (const element of Array.from(root.querySelectorAll('[id]'))) {
        ids.add(element.getAttribute('id') || '');
    }
    ids.delete('');
    return ids;
}

/** Ids that appear on more than one element, in document order. */
export function duplicateIds(root: Element): string[] {
    const seen = new Set<string>();
    const duplicates: string[] = [];
    const elements = [root, ...Array.from(root.querySelectorAll('[id]'))];
    for (const element of elements) {
        const id = element.getAttribute('id');
        if (!id) continue;
        if (seen.has(id) && !duplicates.includes(id)) duplicates.push(id);
        seen.add(id);
    }
    return duplicates;
}

/** `prefix-N` with the lowest N not already used in the document. */
export function generateId(
    existing: ReadonlySet<string>,
    prefix: string,
): string {
    let n = 1;
    while (existing.has(`${prefix}${n}`)) n++;
    return `${prefix}${n}`;
}

const PATTERN_SLOT = /\{n(?::(\d+))?\}/;

/**
 * Expand an id pattern such as `table-01.{n:03}` for a given number. A
 * pattern without a slot gets the number appended.
 */
export function expandIdPattern(pattern: string, n: number): string {
    const match = pattern.match(PATTERN_SLOT);
    if (!match) return `${pattern}${n}`;
    const width = match[1] ? parseInt(match[1], 10) : 0;
    return pattern.replace(PATTERN_SLOT, `${n}`.padStart(width, '0'));
}

/** Highest number already used by ids matching the pattern, or 0. */
export function highestInPattern(
    existing: ReadonlySet<string>,
    pattern: string,
): number {
    const match = pattern.match(PATTERN_SLOT);
    if (!match) return 0;
    const [prefix, suffix] = pattern.split(match[0]);
    let highest = 0;
    for (const id of existing) {
        if (!id.startsWith(prefix) || !id.endsWith(suffix)) continue;
        const middle = id.slice(prefix.length, id.length - suffix.length);
        if (/^\d+$/.test(middle))
            highest = Math.max(highest, parseInt(middle, 10));
    }
    return highest;
}

function referenceValues(element: Element): [string, string][] {
    const values: [string, string][] = [];
    for (const name of element.getAttributeNames()) {
        const value = element.getAttribute(name) || '';
        if (REFERENCE_ATTRS.has(name) || value.includes('url(')) {
            values.push([name, value]);
        }
    }
    return values;
}

function referencesId(value: string, id: string): boolean {
    if (value === `#${id}`) return true;
    return new RegExp(`url\\(\\s*['"]?#${escapeRegExp(id)}['"]?\\s*\\)`).test(
        value,
    );
}

export function escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Elements whose attributes point at `#id`, through href or url(#id). */
export function referencesTo(root: Element, id: string): Element[] {
    const elements: Element[] = [];
    for (const element of [root, ...Array.from(root.querySelectorAll('*'))]) {
        if (
            referenceValues(element).some(([, value]) =>
                referencesId(value, id),
            )
        ) {
            elements.push(element);
        }
    }
    return elements;
}

/** Occurrences of `url(#id)` in `<style>` text, which `rewriteReferences` leaves alone. */
export function styleReferencesTo(root: Element, id: string): number {
    const pattern = new RegExp(
        `url\\(\\s*['"]?#${escapeRegExp(id)}['"]?\\s*\\)`,
        'g',
    );
    let count = 0;
    for (const style of Array.from(root.querySelectorAll('style'))) {
        count += (style.textContent || '').match(pattern)?.length || 0;
    }
    return count;
}

/** Rewrite `#old` references to `#new_id`; returns the elements changed. */
export function rewriteReferences(
    root: Element,
    old_id: string,
    new_id: string,
): Element[] {
    const changed: Element[] = [];
    const pattern = new RegExp(
        `(url\\(\\s*['"]?)#${escapeRegExp(old_id)}(['"]?\\s*\\))`,
        'g',
    );
    for (const element of referencesTo(root, old_id)) {
        for (const [name, value] of referenceValues(element)) {
            let next = value;
            if (value === `#${old_id}`) next = `#${new_id}`;
            else next = value.replace(pattern, `$1#${new_id}$2`);
            if (next !== value) element.setAttribute(name, next);
        }
        changed.push(element);
    }
    return changed;
}
