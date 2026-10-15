import {
    CONTAINER_TAGS,
    LINE_TAGS,
    NON_RENDERED_TAGS,
    REFERENCE_TAGS,
    TEXT_TAGS,
    XLINK_NS,
} from './constants';

export interface StyleRule {
    selectors: readonly string[];
    declarations: Readonly<Record<string, string>>;
}

const COMMENT = /\/\*[\s\S]*?\*\//g;
const RULE = /([^{}@]+)\{([^{}]*)\}/g;
const AT_STATEMENT = /@[^{};]*;/g;
const AT_BLOCK = /@[^{}]*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g;

/** Flat rules from every `<style>` in the tree; at-rules and nested blocks are skipped. */
export function parseStyleRules(root: Element | Document): StyleRule[] {
    const rules: StyleRule[] = [];
    for (const style of Array.from(root.querySelectorAll('style'))) {
        rules.push(...parseStyleText(style.textContent || ''));
    }
    return rules;
}

export function parseStyleText(css: string): StyleRule[] {
    const rules: StyleRule[] = [];
    const text = css
        .replace(COMMENT, '')
        .replace(AT_BLOCK, '')
        .replace(AT_STATEMENT, '');
    for (const match of text.matchAll(RULE)) {
        const selectors = match[1]
            .split(',')
            .map((s) => s.trim())
            .filter((s) => !!s);
        const declarations = parseDeclarations(match[2]);
        if (selectors.length && Object.keys(declarations).length) {
            rules.push({ selectors, declarations });
        }
    }
    return rules;
}

export function parseDeclarations(body: string): Record<string, string> {
    const declarations: Record<string, string> = {};
    for (const part of body.split(';')) {
        const index = part.indexOf(':');
        if (index < 0) continue;
        const name = part.slice(0, index).trim();
        const value = cleanStyleValue(part.slice(index + 1));
        if (name && value) declarations[name] = value;
    }
    return declarations;
}

export function formatDeclarations(
    declarations: Readonly<Record<string, string>>,
): string {
    return Object.entries(declarations)
        .map(([name, value]) => `${name}:${value}`)
        .join(';');
}

export function cleanStyleValue(value: string): string {
    return value.replace('!important', '').trim();
}

export function isValidSelector(root: Element, selector: string): boolean {
    try {
        root.querySelectorAll(selector);
        return true;
    } catch {
        return false;
    }
}

export function selectorSpecificity(selector: string): number {
    const id_count = selector.match(/#[\w-]+/g)?.length || 0;
    const class_count =
        selector.match(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g)?.length || 0;
    const tag_count =
        selector
            .replace(/#[\w-]+/g, ' ')
            .replace(/(\.[\w-]+|\[[^\]]+\]|:[\w-]+)/g, ' ')
            .split(/[\s>+~]+/)
            .filter((s) => !!s.trim() && s.trim() !== '*').length || 0;
    return id_count * 100 + class_count * 10 + tag_count;
}

export function inlineStyleValue(element: Element, name: string): string {
    const style = (element as SVGElement).style;
    const value = style?.getPropertyValue(name);
    return value ? cleanStyleValue(value) : '';
}

export function numberValue(value: string): number | null {
    if (!value) return null;
    const number = parseFloat(value);
    return Number.isFinite(number) ? number : null;
}

export function isTransparentColour(value: string): boolean {
    const colour = value.trim().toLowerCase();
    return (
        !colour ||
        colour === 'none' ||
        colour === 'transparent' ||
        colour === 'rgba(0,0,0,0)' ||
        colour === 'rgba(0, 0, 0, 0)'
    );
}

export function hasReference(element: Element): boolean {
    return (
        element.hasAttribute('href') ||
        element.hasAttribute('xlink:href') ||
        element.hasAttributeNS(XLINK_NS, 'href')
    );
}

/** Elements in the tree that a selector matches; an invalid selector matches nothing. */
export function elementsMatching(root: Element, selector: string): Element[] {
    try {
        const matches = Array.from(root.querySelectorAll(selector));
        if (root.matches(selector)) matches.unshift(root);
        return matches;
    } catch {
        return [];
    }
}

/**
 * Resolves presentation properties for one tree: inline style, then the
 * highest-specificity `<style>` rule (later rules win ties), then the
 * presentation attribute, inherited from ancestors. Rule matches are computed
 * once per resolver, so build a new one after the document changes.
 */
export class StyleResolver {
    public readonly rules: readonly StyleRule[];
    private readonly _rule_values = new Map<
        Element,
        Map<string, [string, number]>
    >();
    private readonly _own_cache = new Map<Element, Map<string, string>>();

    constructor(root: Element, rules?: readonly StyleRule[]) {
        this.rules = rules || parseStyleRules(root);
        for (const rule of this.rules) {
            for (const selector of rule.selectors) {
                const specificity = selectorSpecificity(selector);
                for (const element of elementsMatching(root, selector)) {
                    let values = this._rule_values.get(element);
                    if (!values) {
                        values = new Map();
                        this._rule_values.set(element, values);
                    }
                    for (const [name, value] of Object.entries(
                        rule.declarations,
                    )) {
                        const current = values.get(name);
                        if (!current || specificity >= current[1]) {
                            values.set(name, [value, specificity]);
                        }
                    }
                }
            }
        }
    }

    /** Value from the `<style>` rules only. */
    public cssValue(element: Element, name: string): string {
        return this._rule_values.get(element)?.get(name)?.[0] || '';
    }

    /** The element's own value: inline style, then rules, then the attribute. */
    public own(element: Element, name: string): string {
        let cache = this._own_cache.get(element);
        if (!cache) {
            cache = new Map();
            this._own_cache.set(element, cache);
        }
        const cached = cache.get(name);
        if (cached !== undefined) return cached;
        const value =
            inlineStyleValue(element, name) ||
            this.cssValue(element, name) ||
            cleanStyleValue(element.getAttribute(name) || '');
        cache.set(name, value);
        return value;
    }

    public inherited(element: Element, name: string, fallback: string): string {
        let current: Element | null = element;
        while (current) {
            const value = this.own(current, name);
            if (value) return value;
            current = current.parentElement;
        }
        return fallback;
    }

    public isHiddenByOwnStyle(element: Element): boolean {
        return (
            element.hasAttribute('hidden') ||
            this.own(element, 'display') === 'none' ||
            ['hidden', 'collapse'].includes(this.own(element, 'visibility')) ||
            numberValue(this.own(element, 'opacity')) === 0
        );
    }

    public hasHiddenAncestor(element: Element): boolean {
        let current: Element | null = element;
        while (current) {
            if (NON_RENDERED_TAGS.has(current.localName.toLowerCase()))
                return true;
            if (this.isHiddenByOwnStyle(current)) return true;
            current = current.parentElement;
        }
        return false;
    }

    public hasVisibleFill(element: Element): boolean {
        const fill = this.inherited(element, 'fill', 'black');
        const fill_opacity = numberValue(
            this.inherited(element, 'fill-opacity', '1'),
        );
        return !isTransparentColour(fill || 'black') && fill_opacity !== 0;
    }

    public hasVisibleStroke(element: Element): boolean {
        const stroke = this.inherited(element, 'stroke', '');
        const stroke_opacity = numberValue(
            this.inherited(element, 'stroke-opacity', '1'),
        );
        const stroke_width = numberValue(
            this.inherited(element, 'stroke-width', '1'),
        );
        return (
            !!stroke &&
            !isTransparentColour(stroke) &&
            stroke_opacity !== 0 &&
            stroke_width !== 0
        );
    }

    /**
     * Whether the element paints anything: not inside a non-rendered or hidden
     * subtree, and with a visible fill or stroke (containers: any visible
     * child; text: non-empty; lines: stroke; references: a target).
     */
    public isVisible(element: Element): boolean {
        if (this.hasHiddenAncestor(element)) return false;
        const tag = element.localName.toLowerCase();
        if (NON_RENDERED_TAGS.has(tag)) return false;
        if (tag === 'svg') return true;
        if (CONTAINER_TAGS.has(tag)) {
            return Array.from(element.children).some((child) =>
                this.isVisible(child),
            );
        }
        if (TEXT_TAGS.has(tag)) {
            return (
                !!(element.textContent || '').trim() &&
                (this.hasVisibleFill(element) || this.hasVisibleStroke(element))
            );
        }
        if (LINE_TAGS.has(tag)) return this.hasVisibleStroke(element);
        if (REFERENCE_TAGS.has(tag)) return hasReference(element);
        return this.hasVisibleFill(element) || this.hasVisibleStroke(element);
    }

    public visibleColour(element: Element, name: 'fill' | 'stroke'): string {
        return this.inherited(element, name, name === 'fill' ? 'black' : '');
    }

    /**
     * Descendants that set the property themselves, so a value set on the
     * element does not reach them.
     */
    public overridingDescendants(element: Element, name: string): Element[] {
        return Array.from(element.querySelectorAll('*')).filter(
            (child) => !!this.own(child, name),
        );
    }
}
