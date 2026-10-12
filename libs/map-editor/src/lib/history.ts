import { HISTORY_BYTE_BUDGET, HISTORY_DEPTH } from './constants';
import { MapDocument } from './map-document';

export interface HistoryEntry {
    root: Element;
    bytes: number;
    label: string;
    at: number;
}

export interface HistoryOptions {
    depth?: number;
    byte_budget?: number;
}

function snapshotBytes(root: Element): number {
    return new XMLSerializer().serializeToString(root).length;
}

/**
 * Undo history as whole-root snapshots (anchors included). The oldest entries
 * drop first when the depth or the byte budget is exceeded; the budget never
 * empties the stack.
 */
export class MapHistory {
    public readonly depth: number;
    public readonly byte_budget: number;
    private _undo: HistoryEntry[] = [];
    private _redo: HistoryEntry[] = [];

    constructor(
        private readonly _doc: MapDocument,
        options: HistoryOptions = {},
    ) {
        this.depth = Math.max(1, options.depth ?? HISTORY_DEPTH);
        this.byte_budget = Math.max(
            1,
            options.byte_budget ?? HISTORY_BYTE_BUDGET,
        );
    }

    public get length(): number {
        return this._undo.length;
    }

    public get redo_length(): number {
        return this._redo.length;
    }

    public get bytes(): number {
        return this._undo.reduce((sum, entry) => sum + entry.bytes, 0);
    }

    public get can_undo(): boolean {
        return this._undo.length > 0;
    }

    public get can_redo(): boolean {
        return this._redo.length > 0;
    }

    public labels(): string[] {
        return this._undo.map((entry) => entry.label);
    }

    /** Snapshot the document before a change. Clears the redo stack. */
    public push(label = ''): void {
        const root = this._doc.root.cloneNode(true) as Element;
        this._undo.push({
            root,
            bytes: snapshotBytes(root),
            label,
            at: Date.now(),
        });
        this._redo = [];
        this._trim();
    }

    public undo(): boolean {
        const entry = this._undo.pop();
        if (!entry) return false;
        this._redo.push(this._currentEntry(entry.label));
        this._doc.replaceRoot(entry.root);
        return true;
    }

    public redo(): boolean {
        const entry = this._redo.pop();
        if (!entry) return false;
        this._undo.push(this._currentEntry(entry.label));
        this._doc.replaceRoot(entry.root);
        return true;
    }

    public clear(): void {
        this._undo = [];
        this._redo = [];
    }

    private _currentEntry(label: string): HistoryEntry {
        const root = this._doc.root;
        return { root, bytes: snapshotBytes(root), label, at: Date.now() };
    }

    private _trim(): void {
        while (this._undo.length > this.depth) this._undo.shift();
        while (this._undo.length > 1 && this.bytes > this.byte_budget)
            this._undo.shift();
    }
}
