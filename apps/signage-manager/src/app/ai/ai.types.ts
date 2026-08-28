/** Mirrors the structs in rest-api's SignageAI controller. */

export interface AiModelCapabilities {
    id: string;
    name: string;
    generate: boolean;
    edit: boolean;
    enhance: boolean;
    max_references: number;
    max_candidates: number;
    qualities: string[];
    aspect_ratios: string[];
}

export interface AiProviderCapabilities {
    id: string;
    name: string;
    provider: string;
    region?: string;
    default_model?: string;
    models: AiModelCapabilities[];
}

export interface AiCapabilities {
    enabled: boolean;
    reason?: string;
    providers: AiProviderCapabilities[];
    default_provider_id?: string;
    aspect_ratios: string[];
    qualities: string[];
    max_candidates: number;
    logo_layer: boolean;
    quota: {
        user_remaining_today: number | null;
        domain_remaining_month: number | null;
    };
}

export interface AiJobImage {
    state?: string;
    index?: number;
    upload_id?: string;
    url?: string;
    width?: number;
    height?: number;
    mime?: string;
    bytes?: number;
    item_id?: string;
}

export type AiJobState =
    | 'queued'
    | 'running'
    | 'done'
    | 'failed'
    | 'cancelled';

export interface AiJob {
    id: string;
    state: AiJobState;
    kind: 'generate' | 'edit';
    provider?: string;
    model?: string;
    candidates: number;
    images_produced: number;
    parent_job_id?: string;
    version: number;
    prompt?: string;
    /** one slot per candidate, null until that candidate lands */
    images: (AiJobImage | null)[];
    error_kind?: string;
    error_message?: string;
    cost_units?: number;
    latency_ms?: number;
    created_at?: number;
    finished_at?: number;
}

export interface AiGenerateRequest {
    prompt: string;
    aspect_ratio?: string;
    quality?: 'standard' | 'high';
    candidates?: number;
    references?: string[];
    include_logo?: boolean;
    add_text_with_layer?: boolean;
    words?: string;
    provider_id?: string;
    model?: string;
    group_id?: string;
    idempotency_key?: string;
}

export interface AiEditRequest extends AiGenerateRequest {
    source_upload_id: string;
    source_item_id?: string;
    parent_job_id?: string;
}

export interface AiBrandKit {
    organisation?: string;
    palette?: Record<string, string>;
    tone?: string;
    logo_upload_id?: string;
    never_include?: string[];
    font?: { url?: string; family?: string } | string;
}

/** where a block or the logo sits. Blocks sharing an anchor stack in order. */
export type AiAnchor =
    | 'top-left'
    | 'top-centre'
    | 'top-right'
    | 'centre-left'
    | 'centre'
    | 'centre-right'
    | 'bottom-left'
    | 'bottom-centre'
    | 'bottom-right';

/** drives the size the text is drawn at */
export type AiTextRole = 'headline' | 'subheading' | 'body';

export interface AiTextBlock {
    id: string;
    text: string;
    role: AiTextRole;
    anchor: AiAnchor;
    colour: string;
    panel: boolean;
}

/** what the layer editor produces, kept on the modal between states */
export interface AiLayerState {
    blocks: AiTextBlock[];
    logo: boolean;
    logo_position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    logo_scale: number;
}
