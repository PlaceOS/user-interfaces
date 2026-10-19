import { CONTENT_HASH_LENGTH, EDITOR_ATTR_PREFIX } from './constants';

export function isEditorAttribute(name: string): boolean {
    return name.startsWith(EDITOR_ATTR_PREFIX);
}

/** Direct text node children, trimmed and joined. */
export function ownText(element: Element): string {
    let text = '';
    for (const node of Array.from(element.childNodes)) {
        if (node.nodeType === 3 || node.nodeType === 4)
            text += node.nodeValue || '';
    }
    return text.trim();
}

/**
 * Canonical own-signature of an element: tag, sorted own attributes without
 * editor attributes, own text. Children are not included.
 */
export function canonicalSignature(element: Element): string {
    const attrs = element
        .getAttributeNames()
        .filter((name) => !isEditorAttribute(name))
        .sort()
        .map((name) => `${name}=${JSON.stringify(element.getAttribute(name))}`);
    return `${element.tagName}|${attrs.join('|')}|${JSON.stringify(ownText(element))}`;
}

/** FNV-1a 32-bit as 8 hex characters. */
export function contentHash(text: string): string {
    let hash = 0x811c9dc5;
    for (let i = 0; i < text.length; i++) {
        hash ^= text.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return hash.toString(16).padStart(CONTENT_HASH_LENGTH, '0');
}

export function elementHash(element: Element): string {
    return contentHash(canonicalSignature(element));
}
