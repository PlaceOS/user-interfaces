import { ANCHOR_ATTR, SVG_NS } from './constants';
import { AttributeGeometryProvider, GeometryProvider } from './geometry';
import { ProtectedIdSet } from './protected-ids';
import { SanitiseReport, sanitiseTree } from './sanitise';
import {
    canonicalSignature,
    elementHash,
    isEditorAttribute,
} from './signature';
import { parseStyleRules, StyleRule } from './style-resolution';

export type MapDocumentErrorCode =
    | 'empty'
    | 'doctype'
    | 'parse_error'
    | 'not_svg'
    | 'no_viewbox';

export class MapDocumentError extends Error {
    constructor(
        public readonly code: MapDocumentErrorCode,
        message: string,
    ) {
        super(message);
        this.name = 'MapDocumentError';
    }
}

export interface ViewBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface MapDocumentOptions {
    geometry?: GeometryProvider;
    protected?: ProtectedIdSet;
    /** Strip the deny-list on load. Default true. */
    sanitise?: boolean;
}

/** How an op names an element: by session anchor, by id, or both, with an optional content hash. */
export interface Target {
    a?: string | null;
    id?: string | null;
    h?: string | null;
}

export type Resolution =
    | { ok: true; element: Element }
    | { ok: false; error: string };

const DOCTYPE_OR_ENTITY = /<!\s*(?:DOCTYPE|ENTITY)\b/i;
const PROLOG = /^﻿?\s*(<\?xml[\s\S]*?\?>)/;
const UNITLESS_NUMBER = /^\+?(?:\d+\.?\d*|\.\d+)(?:px)?$/;

export function parseViewBox(value: string | null): ViewBox | null {
    if (!value) return null;
    const parts = value.trim().split(/[\s,]+/);
    if (parts.length !== 4) return null;
    const numbers = parts.map((part) =>
        /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/.test(part)
            ? Number(part)
            : NaN,
    );
    if (numbers.some((n) => !Number.isFinite(n))) return null;
    if (numbers[2] <= 0 || numbers[3] <= 0) return null;
    return {
        x: numbers[0],
        y: numbers[1],
        width: numbers[2],
        height: numbers[3],
    };
}

export function stripEditorAttributes(root: Element): void {
    for (const element of [root, ...Array.from(root.querySelectorAll('*'))]) {
        for (const name of element.getAttributeNames()) {
            if (isEditorAttribute(name)) element.removeAttribute(name);
        }
    }
}

/**
 * The level's SVG as a live DOM with session anchors on every element.
 * Anchors are stripped on serialise and never reach the saved file.
 */
export class MapDocument {
    public geometry: GeometryProvider;
    public protected: ProtectedIdSet;
    private _root: SVGSVGElement;
    private _version = 0;
    private _anchor_counter: number;
    private _by_anchor: Map<string, Element> | null = null;
    private _anchor_version = -1;
    private _style_rules: StyleRule[] | null = null;
    private _style_version = -1;

    private constructor(
        root: SVGSVGElement,
        public readonly view_box: ViewBox,
        public readonly view_box_synthesised: boolean,
        public readonly prolog: string,
        public readonly sanitise_report: SanitiseReport,
        anchor_counter: number,
        options: MapDocumentOptions,
    ) {
        this._root = root;
        this._anchor_counter = anchor_counter;
        this.geometry = options.geometry || new AttributeGeometryProvider();
        this.protected = options.protected || ProtectedIdSet.empty();
    }

    /**
     * Parse strictly: no parser error, no DOCTYPE or entity declaration, an
     * `svg` root in the SVG namespace, a numeric viewBox (synthesised once
     * from numeric unitless width and height when missing).
     */
    public static load(
        text: string,
        options: MapDocumentOptions = {},
    ): MapDocument {
        if (typeof text !== 'string' || !text.trim()) {
            throw new MapDocumentError('empty', 'The map is empty.');
        }
        if (DOCTYPE_OR_ENTITY.test(text)) {
            throw new MapDocumentError(
                'doctype',
                'The map declares a DOCTYPE or entities, which are not allowed.',
            );
        }
        const prolog = text.match(PROLOG)?.[1] || '';
        const xml = new DOMParser().parseFromString(text, 'image/svg+xml');
        const error_node = xml.querySelector('parsererror');
        if (error_node || xml.documentElement?.localName === 'parsererror') {
            const detail =
                (error_node || xml.documentElement)?.textContent || '';
            throw new MapDocumentError(
                'parse_error',
                `The map is not well-formed XML. ${detail.trim().slice(0, 200)}`,
            );
        }
        if (xml.doctype) {
            throw new MapDocumentError(
                'doctype',
                'The map declares a DOCTYPE.',
            );
        }
        const root = xml.documentElement;
        if (!root || root.localName !== 'svg' || root.namespaceURI !== SVG_NS) {
            throw new MapDocumentError(
                'not_svg',
                'The root element is not <svg> in the SVG namespace.',
            );
        }
        let view_box = parseViewBox(root.getAttribute('viewBox'));
        let synthesised = false;
        if (!view_box) {
            if (root.hasAttribute('viewBox')) {
                throw new MapDocumentError(
                    'no_viewbox',
                    `The viewBox "${root.getAttribute('viewBox')}" is not four numbers.`,
                );
            }
            const width = root.getAttribute('width') || '';
            const height = root.getAttribute('height') || '';
            if (!UNITLESS_NUMBER.test(width) || !UNITLESS_NUMBER.test(height)) {
                throw new MapDocumentError(
                    'no_viewbox',
                    'The map has no viewBox and no numeric width and height to derive one from.',
                );
            }
            view_box = {
                x: 0,
                y: 0,
                width: parseFloat(width),
                height: parseFloat(height),
            };
            if (view_box.width <= 0 || view_box.height <= 0) {
                throw new MapDocumentError(
                    'no_viewbox',
                    'The map has a zero-sized canvas.',
                );
            }
            root.setAttribute(
                'viewBox',
                `0 0 ${view_box.width} ${view_box.height}`,
            );
            synthesised = true;
        }
        const report: SanitiseReport =
            options.sanitise === false ? { removed: [] } : sanitiseTree(root);
        stripEditorAttributes(root);
        let counter = 0;
        for (const element of [
            root,
            ...Array.from(root.querySelectorAll('*')),
        ]) {
            element.setAttribute(ANCHOR_ATTR, `e${++counter}`);
        }
        return new MapDocument(
            root as unknown as SVGSVGElement,
            view_box,
            synthesised,
            prolog,
            report,
            counter,
            options,
        );
    }

    public get root(): SVGSVGElement {
        return this._root;
    }

    public get version(): number {
        return this._version;
    }

    public get had_prolog(): boolean {
        return !!this.prolog;
    }

    /** Call after any change to the tree so cached lookups rebuild. */
    public markChanged(): void {
        this._version++;
    }

    /** Root and every descendant, in document order. */
    public elements(): Element[] {
        return [this._root, ...Array.from(this._root.querySelectorAll('*'))];
    }

    public elementCount(): number {
        return 1 + this._root.querySelectorAll('*').length;
    }

    public anchorOf(element: Element): string {
        return element.getAttribute(ANCHOR_ATTR) || '';
    }

    public byAnchor(anchor: string): Element | null {
        if (this._anchor_version !== this._version || !this._by_anchor) {
            this._by_anchor = new Map();
            for (const element of this.elements()) {
                const anchor_value = element.getAttribute(ANCHOR_ATTR);
                if (anchor_value) this._by_anchor.set(anchor_value, element);
            }
            this._anchor_version = this._version;
        }
        return this._by_anchor.get(anchor) || null;
    }

    /** First element with the id, in document order. */
    public byId(id: string): Element | null {
        for (const element of this.elements()) {
            if (element.getAttribute('id') === id) return element;
        }
        return null;
    }

    /** Resolve a target; anchor and id must agree when both are given. */
    public resolve(target: Target | null | undefined): Resolution {
        if (!target || (!target.a && !target.id)) {
            return {
                ok: false,
                error: 'target has neither an anchor nor an id',
            };
        }
        const by_anchor = target.a ? this.byAnchor(target.a) : null;
        if (target.a && !by_anchor)
            return { ok: false, error: `unknown anchor "${target.a}"` };
        const by_id = target.id ? this.byId(target.id) : null;
        if (target.id && !by_id)
            return { ok: false, error: `unknown id "${target.id}"` };
        if (by_anchor && by_id && by_anchor !== by_id) {
            return {
                ok: false,
                error: `anchor "${target.a}" and id "${target.id}" are different elements`,
            };
        }
        return { ok: true, element: (by_anchor || by_id) as Element };
    }

    public nextAnchor(): string {
        return `e${++this._anchor_counter}`;
    }

    /** Give one element a fresh anchor, leaving its descendants alone. */
    public assignAnchor(element: Element): string {
        const anchor = this.nextAnchor();
        element.setAttribute(ANCHOR_ATTR, anchor);
        this.markChanged();
        return anchor;
    }

    /** Give every element in the subtree a fresh anchor, replacing any it carries. */
    public assignAnchors(subtree: Element): string[] {
        const anchors: string[] = [];
        for (const element of [
            subtree,
            ...Array.from(subtree.querySelectorAll('*')),
        ]) {
            const anchor = this.nextAnchor();
            element.setAttribute(ANCHOR_ATTR, anchor);
            anchors.push(anchor);
        }
        this.markChanged();
        return anchors;
    }

    public hashOf(element: Element): string {
        return elementHash(element);
    }

    public signatureOf(element: Element): string {
        return canonicalSignature(element);
    }

    /** Canonical own-signature of every element, keyed by anchor. */
    public signatures(): Map<string, string> {
        const map = new Map<string, string>();
        for (const element of this.elements()) {
            map.set(this.anchorOf(element), canonicalSignature(element));
        }
        return map;
    }

    public styleRules(): StyleRule[] {
        if (this._style_version !== this._version || !this._style_rules) {
            this._style_rules = parseStyleRules(this._root);
            this._style_version = this._version;
        }
        return this._style_rules;
    }

    /** The map without editor attributes, with the XML prolog if the source had one. */
    public serialise(): string {
        const clone = this._root.cloneNode(true) as Element;
        stripEditorAttributes(clone);
        const markup = new XMLSerializer().serializeToString(clone);
        return this.prolog ? `${this.prolog}\n${markup}` : markup;
    }

    public byteSize(): number {
        return new TextEncoder().encode(this.serialise()).length;
    }

    /** Deep copy with the same anchors, options and anchor counter. */
    public clone(): MapDocument {
        const owner = this._root.ownerDocument;
        const xml = owner.implementation.createDocument(null, null, null);
        const root = xml.importNode(this._root, true) as SVGSVGElement;
        xml.appendChild(root);
        return new MapDocument(
            root,
            { ...this.view_box },
            this.view_box_synthesised,
            this.prolog,
            { removed: [...this.sanitise_report.removed] },
            this._anchor_counter,
            { geometry: this.geometry, protected: this.protected },
        );
    }

    /** Swap the live root for another (a history snapshot); anchors come with it. */
    public replaceRoot(root: Element): void {
        if (root.localName !== 'svg')
            throw new Error('replaceRoot needs an <svg> root');
        const parent = this._root.parentNode;
        if (parent) parent.replaceChild(root, this._root);
        this._root = root as SVGSVGElement;
        this.markChanged();
    }

    /** Elements of a subtree, including its root, in document order. */
    public static subtree(element: Element): Element[] {
        return [element, ...Array.from(element.querySelectorAll('*'))];
    }
}
