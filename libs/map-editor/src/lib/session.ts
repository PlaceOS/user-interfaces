import { Signal, signal } from '@angular/core';
import { applyOps, ApplyResult } from './apply';
import { ANCHOR_ATTR } from './constants';
import { draftKeyFor, DraftStore, makeDraft } from './draft-store';
import { BrowserGeometryProvider, GeometryProvider } from './geometry';
import { HistoryOptions, MapHistory } from './history';
import { MapDocument } from './map-document';
import { buildIndex, MapIndex } from './map-index';
import { MapOp } from './ops';
import { ProtectedIdSet } from './protected-ids';
import { FakeRenderCheck, RenderCheck } from './render-check';
import { canonicalSignature } from './signature';

export interface SessionApplyOptions {
    /** Indices of ops to leave out, such as rows the person unticked. */
    skip?: ReadonlySet<number>;
}

export interface MapEditorSessionOptions {
    /** Zone the map belongs to; part of the draft key. */
    zone_id: string;
    /** The text the document was loaded from; hashed into the draft key. */
    source_text: string;
    geometry?: GeometryProvider;
    render_check?: RenderCheck;
    protected?: ProtectedIdSet;
    draft_store?: DraftStore | null;
    /** Quiet time after a change before the draft is written. Default 800. */
    draft_delay_ms?: number;
    history?: HistoryOptions;
}

/**
 * Browser geometry that follows the document's current root, since undo,
 * redo and restore swap the root element.
 */
export class LiveGeometryProvider implements GeometryProvider {
    constructor(private readonly _root: () => SVGSVGElement) {}

    public bboxOf(element: Element) {
        return new BrowserGeometryProvider(this._root()).bboxOf(element);
    }

    public ctmOf(element: Element) {
        return new BrowserGeometryProvider(this._root()).ctmOf(element);
    }
}

/**
 * One editing session over a level map: the live document, selection, hover,
 * history, the element index and the browser draft. Every change goes through
 * `apply`, `undo`, `redo` or `restore`, which bump `version`.
 */
export class MapEditorSession {
    public readonly doc: MapDocument;
    public readonly zone_id: string;
    public readonly protected: ProtectedIdSet;
    public readonly geometry: GeometryProvider;
    public readonly render_check: RenderCheck;
    public readonly history: MapHistory;

    private readonly _version = signal(0);
    public readonly version: Signal<number> = this._version.asReadonly();
    private readonly _selection = signal<readonly string[]>([]);
    public readonly selection: Signal<readonly string[]> =
        this._selection.asReadonly();
    private readonly _hover = signal<string | null>(null);
    public readonly hover: Signal<string | null> = this._hover.asReadonly();
    private readonly _can_undo = signal(false);
    public readonly can_undo: Signal<boolean> = this._can_undo.asReadonly();
    private readonly _can_redo = signal(false);
    public readonly can_redo: Signal<boolean> = this._can_redo.asReadonly();
    private readonly _dirty = signal(false);
    public readonly dirty: Signal<boolean> = this._dirty.asReadonly();
    private readonly _undo_label = signal('');
    /** Label of the change undo would revert. */
    public readonly undo_label: Signal<string> = this._undo_label.asReadonly();
    private readonly _redo_label = signal('');
    /** Label of the change redo would restore. */
    public readonly redo_label: Signal<string> = this._redo_label.asReadonly();

    private readonly _baseline_markup: string;
    private readonly _baseline_root: Element;
    private readonly _baseline_signatures: Map<string, string>;
    private readonly _draft_store: DraftStore | null;
    private readonly _draft_delay_ms: number;
    private readonly _draft_key: Promise<string>;
    private _draft_timer: ReturnType<typeof setTimeout> | null = null;
    private _draft_write: Promise<void> = Promise.resolve();
    private _index: MapIndex | null = null;
    private _index_version = -1;
    private _disposed = false;

    constructor(doc: MapDocument, options: MapEditorSessionOptions) {
        this.doc = doc;
        this.zone_id = options.zone_id;
        this.protected = options.protected || doc.protected;
        doc.protected = this.protected;
        this.geometry = options.geometry || doc.geometry;
        doc.geometry = this.geometry;
        this.render_check = options.render_check || new FakeRenderCheck();
        this.history = new MapHistory(doc, options.history);
        this._baseline_markup = doc.serialise();
        this._baseline_root = doc.root.cloneNode(true) as Element;
        this._baseline_signatures = doc.signatures();
        this._draft_store = options.draft_store || null;
        this._draft_delay_ms = options.draft_delay_ms ?? 800;
        this._draft_key = draftKeyFor(options.zone_id, options.source_text);
    }

    /** The element index with bounding boxes, cached per version. */
    public index(): MapIndex {
        if (!this._index || this._index_version !== this._version()) {
            this._index = buildIndex(this.doc, {
                geometry: this.geometry,
                protected: this.protected,
            });
            this._index_version = this._version();
        }
        return this._index;
    }

    public select(anchors: readonly string[]): void {
        const next = [...new Set(anchors)].filter(
            (anchor) => !!this.doc.byAnchor(anchor),
        );
        const current = this._selection();
        if (
            next.length === current.length &&
            next.every((anchor, i) => anchor === current[i])
        ) {
            return;
        }
        this._selection.set(next);
    }

    public toggleSelected(anchor: string): void {
        const current = this._selection();
        this.select(
            current.includes(anchor)
                ? current.filter((entry) => entry !== anchor)
                : [...current, anchor],
        );
    }

    public setHover(anchor: string | null): void {
        const next = anchor && this.doc.byAnchor(anchor) ? anchor : null;
        if (next !== this._hover()) this._hover.set(next);
    }

    /** One history entry, then the ops, then a version bump. */
    public apply(
        ops: readonly MapOp[],
        label: string,
        options: SessionApplyOptions = {},
    ): ApplyResult {
        this.history.push(label);
        const result = applyOps(this.doc, ops, {
            geometry: this.geometry,
            skip: options.skip,
        });
        if (!result.applied.length) {
            this.history.drop();
            this._syncHistory();
            return result;
        }
        this._changed();
        return result;
    }

    public undo(): boolean {
        if (!this.history.undo()) return false;
        this._changed();
        return true;
    }

    public redo(): boolean {
        if (!this.history.redo()) return false;
        this._changed();
        return true;
    }

    /**
     * Replace the whole document with other markup (a draft or an earlier
     * save), as one undoable step. Throws the loader's error when the markup
     * does not parse.
     */
    public restore(markup: string, label = 'Restore'): void {
        const loaded = MapDocument.load(markup, {
            geometry: this.geometry,
            protected: this.protected,
        });
        this.history.push(label);
        const root = loaded.root;
        for (const element of [root, ...Array.from(root.querySelectorAll('*'))])
            element.removeAttribute(ANCHOR_ATTR);
        this.doc.replaceRoot(root);
        this.doc.assignAnchors(this.doc.root);
        this._changed();
    }

    /** Whether the element differs from the loaded document, or is new. */
    public isChanged(anchor: string): boolean {
        const element = this.doc.byAnchor(anchor);
        if (!element) return false;
        const original = this._baseline_signatures.get(anchor);
        return (
            original === undefined || original !== canonicalSignature(element)
        );
    }

    /** The element as it was when the map loaded; null for an element added since. */
    public originalOf(anchor: string): Element | null {
        return (
            this._baseline_root.querySelector(`[${ANCHOR_ATTR}="${anchor}"]`) ||
            null
        );
    }

    public draftKey(): Promise<string> {
        return this._draft_key;
    }

    /** The draft kept for this map, if the store has one. */
    public async loadDraft(): Promise<string | null> {
        if (!this._draft_store) return null;
        const draft = await this._draft_store.get(await this._draft_key);
        return draft?.markup || null;
    }

    /** Remove the browser draft, after a save or a discard. */
    public async clearDraft(): Promise<void> {
        if (this._draft_timer) {
            clearTimeout(this._draft_timer);
            this._draft_timer = null;
        }
        await this._draft_write;
        if (!this._draft_store) return;
        await this._draft_store.delete(await this._draft_key);
    }

    /** Resolve once any pending draft write has finished. */
    public flushDraft(): Promise<void> {
        if (this._draft_timer) {
            clearTimeout(this._draft_timer);
            this._draft_timer = null;
            this._queueDraftWrite();
        }
        return this._draft_write;
    }

    public dispose(): void {
        this._disposed = true;
        if (this._draft_timer) {
            clearTimeout(this._draft_timer);
            this._draft_timer = null;
        }
    }

    private _changed(): void {
        this._version.update((version) => version + 1);
        this._dirty.set(this.doc.serialise() !== this._baseline_markup);
        this._syncHistory();
        this.select(this._selection());
        this.setHover(this._hover());
        this._scheduleDraft();
    }

    private _syncHistory(): void {
        this._can_undo.set(this.history.can_undo);
        this._can_redo.set(this.history.can_redo);
        this._undo_label.set(this.history.labels().at(-1) || '');
        this._redo_label.set(this.history.redoLabels()[0] || '');
    }

    private _scheduleDraft(): void {
        if (!this._draft_store || this._disposed) return;
        if (this._draft_timer) clearTimeout(this._draft_timer);
        this._draft_timer = setTimeout(() => {
            this._draft_timer = null;
            this._queueDraftWrite();
        }, this._draft_delay_ms);
    }

    private _queueDraftWrite(): void {
        const store = this._draft_store;
        if (!store || this._disposed) return;
        const dirty = this._dirty();
        const markup = dirty ? this.doc.serialise() : '';
        this._draft_write = this._draft_write
            .then(async () => {
                const key = await this._draft_key;
                if (!dirty) {
                    await store.delete(key);
                    return;
                }
                const sha = key.slice(key.lastIndexOf(':') + 1);
                await store.put(makeDraft(this.zone_id, sha, markup));
            })
            .catch(() => undefined);
    }
}
