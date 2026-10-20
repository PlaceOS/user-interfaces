import {
    DENIED_TAGS,
    EDITOR_ATTR_PREFIX,
    MARKUP_ALLOWED_TAGS,
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
const CSS_ESCAPE = /\\(?:([0-9a-fA-F]{1,6})[ \t\n\r\f]?|([^\n\r\f0-9a-fA-F]))/g;
/** An at-rule statement, `@name ... ;`, the name possibly escaped. */
const AT_STATEMENT =
    /@((?:\\[0-9a-fA-F]{1,6}[ \t\n\r\f]?|\\[^\n\r\f]|[\w-])+)[^;{}]*(?:;|(?=\})|$)/g;
const DECLARATION = /([\w-]+)\s*:\s*([^;{}]*)(;|(?=\}))/g;

/** CSS escapes (`\69`, `\.`) decoded the way a browser tokenises them. */
export function decodeCssEscapes(text: string): string {
    if (!text.includes('\\')) return text;
    return text.replace(CSS_ESCAPE, (_, hex?: string, char?: string) => {
        if (hex === undefined) return char ?? '';
        const code = parseInt(hex, 16);
        const invalid =
            code === 0 || code > 0x10ffff || (code >= 0xd800 && code <= 0xdfff);
        return invalid ? '\ufffd' : String.fromCodePoint(code);
    });
}

/** External, scripted or behaviour values, tested before and after escape decoding. */
export function isUnsafeCssValue(value: string): boolean {
    return (
        UNSAFE_CSS_VALUE.test(value) ||
        UNSAFE_CSS_VALUE.test(decodeCssEscapes(value))
    );
}

/** Drop `@import` and declarations with external, scripted or behaviour values. */
export function cleanStyleText(css: string): {
    text: string;
    removed: string[];
} {
    const removed: string[] = [];
    let text = css.replace(AT_STATEMENT, (match, name: string) => {
        if (decodeCssEscapes(name).toLowerCase() !== 'import') return match;
        removed.push(match.trim());
        return '';
    });
    if (isUnsafeCssValue(text)) {
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
 * animation, event handlers, link pings, external references and unsafe
 * style text. Presentation attributes are CSS values, so any non-`data-*`
 * attribute with an unsafe value (such as `fill="url(http://…)"`) goes too.
 * Editor attributes present in the source are stripped too. With `allowed`,
 * elements whose lower-cased tag is not in the set are removed as well.
 */
export function sanitiseTree(
    root: Element,
    allowed?: ReadonlySet<string>,
): SanitiseReport {
    const removed: SanitiseRemoval[] = [];
    const elements = [root, ...Array.from(root.querySelectorAll('*'))];
    for (const element of elements) {
        const tag = element.localName.toLowerCase();
        if (DENIED_TAGS.has(tag)) {
            removed.push({ kind: 'element', tag, reason: 'denied element' });
            element.remove();
            continue;
        }
        if (allowed && !allowed.has(tag)) {
            removed.push({
                kind: 'element',
                tag: element.localName,
                reason: 'element not in the allow-list',
            });
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
            } else if (lower === 'ping') {
                removed.push({
                    kind: 'attribute',
                    tag,
                    name,
                    value: value.slice(0, 80),
                    reason: 'link ping outside the document',
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
            } else if (lower === 'style' && isUnsafeCssValue(value)) {
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
            } else if (!lower.startsWith('data-') && isUnsafeCssValue(value)) {
                removed.push({
                    kind: 'attribute',
                    tag,
                    name,
                    value: value.slice(0, 80),
                    reason: 'unsafe attribute value',
                });
                element.removeAttribute(name);
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

/**
 * Sanitise markup for one SVG element: parsed as XML inside an SVG wrapper
 * (an inert document, so nothing runs or loads), then the allow-list and the
 * deny-list. The result belongs to a scratch document; import it before
 * inserting.
 */
export function purifyMarkup(markup: string): PurifiedMarkup {
    const report: SanitiseReport = { removed: [] };
    const wrapped = `<svg xmlns="${SVG_NS}" xmlns:xlink="${XLINK_NS}">${markup}</svg>`;
    const doc = new DOMParser().parseFromString(wrapped, 'image/svg+xml');
    if (
        doc.querySelector('parsererror') ||
        doc.documentElement.localName !== 'svg'
    ) {
        return {
            element: null,
            error: 'markup is not well-formed XML',
            report,
        };
    }
    for (const node of Array.from(doc.documentElement.childNodes)) {
        if (
            node.nodeType === 7 ||
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
    const stripped = sanitiseTree(element, MARKUP_ALLOWED_TAGS);
    report.removed.push(...stripped.removed);
    if (!element.parentNode) {
        return {
            element: null,
            error: 'the root element is not allowed',
            report,
        };
    }
    return { element, report };
}
