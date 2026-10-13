import { MapOp } from '../ops';

/** Vendors a provider row can point at. */
export type MapAIProviderType = 'OPENAI' | 'AZURE_OPENAI' | 'GOOGLE_VERTEX';

/** A provider that can edit maps, as the server describes it. */
export interface MapAIProviderCapabilities {
    id: string;
    name: string;
    provider: MapAIProviderType | string;
    /** Model used for map edits on this provider. */
    text_model: string;
}

/** Edits left of the allowance; `null` when the feature is off. */
export interface MapAIQuota {
    user_remaining_today: number | null;
    domain_remaining_month: number | null;
}

export interface MapAILimits {
    max_context_bytes: number;
    max_ops: number;
    max_instruction_chars: number;
}

/** `GET /api/engine/v2/maps/ai/capabilities` */
export interface MapAICapabilities {
    enabled: boolean;
    /** Why the feature is unavailable; only set when `enabled` is false. */
    reason?: string | null;
    providers: MapAIProviderCapabilities[];
    default_provider_id?: string | null;
    quota: MapAIQuota;
    limits: MapAILimits;
}

export type MapAIJobState =
    | 'queued'
    | 'running'
    | 'done'
    | 'failed'
    | 'cancelled';

export type MapAIJobKind = 'map_edit' | 'generate' | 'edit';

/** `error_kind` values the runner writes; other strings are possible. */
export type MapAIErrorKind =
    | 'timeout'
    | 'vendor'
    | 'moderation'
    | 'invalid_response'
    | 'cancelled';

export type MapAIResolveDecision =
    | 'applied'
    | 'partial'
    | 'rejected'
    | 'refined'
    | 'abandoned';

/** The record `POST /jobs/:id/resolve` leaves on the job. */
export interface MapAIResolution {
    decision: MapAIResolveDecision;
    accepted_op_ids: string[];
    rejected_op_ids: string[];
    reasons: unknown;
    saved_upload_id: string | null;
    resolved_at: number;
    resolved_by: string;
}

export interface MapAIUsageInfo {
    input_tokens?: number | null;
    output_tokens?: number | null;
    total_tokens?: number | null;
    finish?: string | null;
    attempts?: number | null;
}

/** A map edit job as the editor sees it. */
export interface MapAIJob {
    id: string;
    state: MapAIJobState;
    kind: MapAIJobKind;
    zone_id: string | null;
    provider: string | null;
    model: string | null;
    parent_job_id: string | null;
    /** Bumps on every change; `since` on a poll is the last value seen. */
    version: number;
    instruction: string | null;
    markup_upload_id: string | null;
    schema_version: number | null;
    summary: string | null;
    /** The model's operations exactly as returned. */
    ops: MapOp[];
    /** Keyed by op id `op-N`, N the op's 1-based position in `ops`. Advisory. */
    server_issues: Record<string, string>;
    questions: string[];
    usage: MapAIUsageInfo | null;
    resolution: MapAIResolution | null;
    error_kind: MapAIErrorKind | string | null;
    error_message: string | null;
    cost_units: number | null;
    latency_ms: number | null;
    /** Unix seconds. */
    created_at: number | null;
    /** Unix seconds. */
    finished_at: number | null;
}

export const MAP_AI_CONTEXT_SCHEMA = 'placeos.map-ai-context/1';
export const MAP_AI_MARKUP_SCHEMA = 'placeos.map-markup/1';

/** x, y, width, height in user units. */
export type MapAIViewBox = [number, number, number, number];

/** An outlined label: the glyph paths of one or two rows inside a room, desk or zone. */
export interface MapAILabel {
    /** Id or anchor of the element the label sits in. */
    in: string;
    /** Anchors of the glyph paths, left to right, top row first. */
    anchors: string[];
    bbox: MapAIViewBox;
    fill: string | null;
}

/** One line of the element index the prompt builder reads. */
export interface MapAIContextEntry {
    /** Session anchor. */
    a: string;
    id: string | null;
    tag: string;
    /** The class list as one string, null when empty. */
    cls: string | null;
    label: string | null;
    /** Root-space x, y, width, height; null when unknown. */
    bbox: MapAIViewBox | null;
    /** Parent anchor; null for a child of the root. */
    p: string | null;
    /** Paint order; null for non-rendered elements. */
    z: number | null;
    kind: string;
    /** Bound to a booking record. */
    prot: boolean;
    /** Content hash. */
    h: string;
    /** Effective fill colour; null when none or unknown. */
    fill: string | null;
    /** Id or anchor of the smallest bookable or zone whose box contains this element's box. */
    in: string | null;
}

export type MapAIAnnotationKind = 'box' | 'arrow' | 'path' | 'pin';

/** One mark the person drew, in user units. */
export interface MapAIAnnotation {
    n: number;
    kind: MapAIAnnotationKind;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    x2?: number;
    y2?: number;
    points?: [number, number][];
    text?: string;
    /** Anchors hit-tested under the mark. */
    hits?: string[];
    /** Anchors near the mark. */
    near?: string[];
}

export interface MapAIMarkup {
    schema: typeof MAP_AI_MARKUP_SCHEMA;
    viewBox: MapAIViewBox;
    annotations: MapAIAnnotation[];
    /** Anchors of the selected elements. */
    selected: string[];
}

export interface MapAIContextStats {
    elements: number;
    ids: number;
    bytes: number;
}

/** `context` on an edit request; the server's prompt builder reads every key. */
export interface MapAIContext {
    schema: typeof MAP_AI_CONTEXT_SCHEMA;
    viewBox: MapAIViewBox;
    /** Pixel size of the snapshot, when one is sent. */
    image_px: [number, number];
    units_per_px: number;
    protected_ids: string[];
    duplicate_ids: string[];
    index: MapAIContextEntry[];
    /** Outlined labels found by clustering glyph paths. */
    labels: MapAILabel[];
    /** Anchors whose markup is in `subtrees`. */
    shortlist: string[];
    /** Anchor to outerHTML, without editor attributes. */
    subtrees: Record<string, string>;
    /** Each rule as `selector{name:value;...}`. */
    style_rules: string[];
    markup: MapAIMarkup;
    stats: MapAIContextStats;
}

/** `POST /api/engine/v2/maps/ai/edit` */
export interface MapAIEditRequest {
    zone_id: string;
    instruction: string;
    context: MapAIContext;
    /** Upload id of the snapshot with the person's marks drawn on it. */
    markup_upload_id?: string | null;
    /** The job this request refines. */
    parent_job_id?: string | null;
    provider_id?: string | null;
    model?: string | null;
    /** A repeat with the same key returns the job already accepted. */
    idempotency_key?: string | null;
}

/** `POST /api/engine/v2/maps/ai/jobs/:id/resolve` */
export interface MapAIResolveRequest {
    decision: MapAIResolveDecision;
    accepted_op_ids: string[];
    rejected_op_ids: string[];
    reasons?: unknown;
    saved_upload_id?: string | null;
}

export interface MapAIJobShowOptions {
    /** Seconds to hold the request open; the server caps it at 25. */
    wait?: number;
    /** The version already seen; the request returns once the job moves past it. */
    since?: number;
}

export interface MapAIJobQueryOptions {
    /** Only the caller's own jobs. Default true. */
    mine?: boolean;
    zone_id?: string;
    kind?: MapAIJobKind;
    limit?: number;
}

export interface MapAIUsageOptions {
    /** Unix seconds; default 30 days ago. */
    from?: number;
    /** Unix seconds; default now. */
    to?: number;
}

export interface MapAIUsageRow {
    kind: string;
    provider: string;
    model: string;
    jobs: number;
    candidates: number;
    images_produced: number;
    cost_units: number;
}
