import { Signal } from '@angular/core';
import { ApplyResult } from '../apply';
import { GeometryProvider } from '../geometry';
import { MapDocument } from '../map-document';
import { MapIndex } from '../map-index';
import { MapOp } from '../ops';
import { ProtectedIdSet } from '../protected-ids';
import { RenderCheck } from '../render-check';
import { PreviewSummary } from './preview';
import { MapAIAnnotation } from './types';

export interface SessionApplyOptions {
    /** Indices of ops to leave out, such as rows the person unticked. */
    skip?: ReadonlySet<number>;
}

/**
 * What the AI panel needs from the editor session hosting it. The canvas
 * lane's `MapEditorSession` satisfies this structurally; the panel never
 * imports it.
 */
export interface MapEditorSessionLike {
    /** The live document; undo, redo and restore swap its root in place. */
    readonly doc: MapDocument;
    readonly annotations?: Signal<readonly MapAIAnnotation[]>;
    /** Bumps on every document change. */
    readonly version: Signal<number>;
    /** Anchors of the selected elements. */
    readonly selection: Signal<readonly string[]>;
    /** Anchor under the pointer or highlighted by a panel row. */
    readonly hover: Signal<string | null>;
    /** The proposal previewed on the map, when the host draws pins for it. */
    readonly preview?: Signal<PreviewSummary | null>;
    setPreview?(summary: PreviewSummary | null): void;
    readonly protected: ProtectedIdSet;
    readonly geometry: GeometryProvider;
    readonly render_check: RenderCheck;
    /** The element index with bounding boxes, cached per version. */
    index(): MapIndex;
    select(anchors: readonly string[]): void;
    setHover(anchor: string | null): void;
    /** One history entry, then the ops, then a version bump. */
    apply(
        ops: readonly MapOp[],
        label: string,
        options?: SessionApplyOptions,
    ): ApplyResult;
    undo(): boolean;
    redo(): boolean;
    readonly can_undo: Signal<boolean>;
    readonly can_redo: Signal<boolean>;
    /** Entries on the undo stack. */
    undoDepth?(): number;
    /** Differs from the loaded document. */
    readonly dirty: Signal<boolean>;
}
