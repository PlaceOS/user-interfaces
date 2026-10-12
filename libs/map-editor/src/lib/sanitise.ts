import DOMPurify from 'dompurify';
import {
    DENIED_TAGS,
    EDITOR_ATTR_PREFIX,
    REFERENCE_ATTRS,
    SVG_NS,
    XLINK_NS,
} from './constants';

export interface SanitiseRemoval {
    kind: 'element' | 'attribute' | 'declaration';
    tag: string;
    name?: string;
    value?: string;
    reason: string;
}

export interface SanitiseReport {
    removed: SanitiseRemoval[];
}

const UNSAFE_CSS_VALUE =
    /expression\s*\(|behavior\s*:|javascript\s*:|url\s*\(\s*(?!['"]?#)/i;
const IMPORT_RULE = /@import\b[^;]*;?/gi;
const DECLARATION = /([\w-]+)\s*:\s*([^;{}]*)(;|(?=\}))/g;

export function isUnsafeCssValue(value: string): boolean {
    return UNSAFE_CSS_VALUE.test(value);
}

/** Drop `@import` and declarations with external, scripted or behaviour values. */
export function cleanStyleText(css: string): {
    text: string;
    removed: string[];
} {
    const removed: string[] = [];
    let text = css.replace(IMPORT_RULE, (match) => {
        removed.push(match.trim());
        return '';
    });
    if (UNSAFE_CSS_VALUE.test(text)) {
        text = text.replace(
            DECLARATION,
            (match, name: string, value: string) => {
                if (!isUnsafeCssValue(value)) return match;
                removed.push(`${name}:${value.trim()}`);
                return '';
            },
        );
    }
    return { text, removed };
}

function isAllowedReference(tag: string, value: string): boolean {
    const trimmed = value.trim();
    if (trimmed.startsWith('#')) return true;
    return (
        tag === 'image' &&
        /^data:image\/(?:png|jpe?g|gif|webp|svg\+xml);/i.test(trimmed)
    );
}

/**
 * Strip the deny-list from a subtree in place: scripts, foreign content,
 * animation, event handlers, external references and unsafe style text.
 * Editor attributes present in the source are stripped too.
 */
export function sanitiseTree(root: Element): SanitiseReport {
    const removed: SanitiseRemoval[] = [];
    const elements = [root, ...Array.from(root.querySelectorAll('*'))];
    for (const element of elements) {
        const tag = element.localName.toLowerCase();
        if (DENIED_TAGS.has(tag)) {
            removed.push({ kind: 'element', tag, reason: 'denied element' });
            element.remove();
            continue;
        }
        if (element.namespaceURI !== SVG_NS) {
            removed.push({
                kind: 'element',
                tag: element.tagName,
                reason: 'element outside the SVG namespace',
            });
            element.remove();
            continue;
        }
        for (const name of element.getAttributeNames()) {
            const lower = name.toLowerCase();
            const value = element.getAttribute(name) || '';
            if (lower.startsWith('on')) {
                removed.push({
                    kind: 'attribute',
                    tag,
                    name,
                    reason: 'event handler',
                });
                element.removeAttribute(name);
            } else if (lower.startsWith(EDITOR_ATTR_PREFIX)) {
                element.removeAttribute(name);
            } else if (
                (REFERENCE_ATTRS.has(lower) || lower.endsWith(':href')) &&
                !isAllowedReference(tag, value)
            ) {
                removed.push({
                    kind: 'attribute',
                    tag,
                    name,
                    value: value.slice(0, 80),
                    reason: 'reference outside the document',
                });
                element.removeAttribute(name);
                if (element.hasAttributeNS(XLINK_NS, 'href')) {
                    element.removeAttributeNS(XLINK_NS, 'href');
                }
            } else if (lower === 'style' && UNSAFE_CSS_VALUE.test(value)) {
                const cleaned = cleanStyleText(value);
                for (const declaration of cleaned.removed) {
                    removed.push({
                        kind: 'declaration',
                        tag,
                        name,
                        value: declaration,
                        reason: 'unsafe style value',
                    });
                }
                if (cleaned.text.trim())
                    element.setAttribute(name, cleaned.text);
                else element.removeAttribute(name);
            }
        }
        if (tag === 'style') {
            const cleaned = cleanStyleText(element.textContent || '');
            if (cleaned.removed.length) {
                for (const declaration of cleaned.removed) {
                    removed.push({
                        kind: 'declaration',
                        tag,
                        value: declaration,
                        reason: 'unsafe style text',
                    });
                }
                element.textContent = cleaned.text;
            }
        }
    }
    return { removed };
}

export interface PurifiedMarkup {
    element: Element | null;
    error?: string;
    report: SanitiseReport;
}

/** Elements DOMPurify adds around the input and strips again; not part of the markup. */
const PURIFY_WRAPPER_TAGS = new Set(['html', 'head', 'body']);

let purifier: ReturnType<typeof DOMPurify> | null = null;

function getPurifier(): ReturnType<typeof DOMPurify> | null {
    if (purifier) return purifier;
    const host = (globalThis as { window?: unknown }).window;
    if (!host) return null;
    const instance = DOMPurify(host as Parameters<typeof DOMPurify>[0]);
    if (!instance.isSupported) return null;
    purifier = instance;
    return purifier;
}

/**
 * Sanitise markup for one SVG element: DOMPurify with the svg and svgFilters
 * profiles (HTML parsing, so camel-case SVG names survive), re-parsed as XML,
 * then the deny-list. The result belongs to a scratch document; import it
 * before inserting.
 */
export function purifyMarkup(markup: string): PurifiedMarkup {
    const report: SanitiseReport = { removed: [] };
    const purify = getPurifier();
    if (!purify) {
        return { element: null, error: 'sanitiser unavailable', report };
    }
    const wrapped = `<svg xmlns="${SVG_NS}" xmlns:xlink="${XLINK_NS}">${markup}</svg>`;
    const body: Node = purify.sanitize(wrapped, {
        USE_PROFILES: { svg: true, svgFilters: true },
        RETURN_DOM: true,
    });
    for (const entry of purify.removed) {
        if ('element' in entry && entry.element) {
            const tag =
                (entry.element as Element).localName || entry.element.nodeName;
            if (PURIFY_WRAPPER_TAGS.has(tag)) continue;
            report.removed.push({
                kind: 'element',
                tag,
                reason: 'removed by DOMPurify',
            });
        } else if ('attribute' in entry && entry.attribute) {
            report.removed.push({
                kind: 'attribute',
                tag: (entry.from as Element).localName || '',
                name: entry.attribute.name,
                reason: 'removed by DOMPurify',
            });
        }
    }
    const wrapper = Array.from(body.childNodes).find(
        (node): node is Element => node.nodeType === 1,
    );
    if (!wrapper || wrapper.localName !== 'svg') {
        return { element: null, error: 'markup was removed entirely', report };
    }
    const serialised = new XMLSerializer().serializeToString(wrapper);
    const doc = new DOMParser().parseFromString(serialised, 'image/svg+xml');
    if (
        doc.querySelector('parsererror') ||
        doc.documentElement.localName !== 'svg'
    ) {
        return { element: null, error: 'markup is not well-formed', report };
    }
    for (const node of Array.from(doc.documentElement.childNodes)) {
        if (
            node.nodeType === 8 ||
            (node.nodeType === 3 && !(node.nodeValue || '').trim())
        ) {
            node.remove();
        }
    }
    const children = Array.from(doc.documentElement.childNodes);
    if (children.length !== 1 || children[0].nodeType !== 1) {
        return {
            element: null,
            error: `markup must be exactly one element, found ${children.length}`,
            report,
        };
    }
    const element = children[0] as Element;
    const stripped = sanitiseTree(element);
    report.removed.push(...stripped.removed);
    if (!element.parentNode) {
        return { element: null, error: 'the root element is denied', report };
    }
    return { element, report };
}
