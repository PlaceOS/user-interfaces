/** Mirrors the structs in rest-api's SignageAI controller. */

export interface ImageGenModelCapabilities {
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

export interface ImageGenProviderCapabilities {
    id: string;
    name: string;
    provider: string;
    region?: string;
    default_model?: string;
    models: ImageGenModelCapabilities[];
}

export interface ImageGenCapabilities {
    enabled: boolean;
    reason?: string;
    providers: ImageGenProviderCapabilities[];
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

export interface ImageGenJobImage {
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

export type ImageGenJobState =
    | 'queued'
    | 'running'
    | 'done'
    | 'failed'
    | 'cancelled';

export interface ImageGenJob {
    id: string;
    state: ImageGenJobState;
    kind: 'generate' | 'edit';
    provider?: string;
    model?: string;
    candidates: number;
    images_produced: number;
    parent_job_id?: string;
    version: number;
    prompt?: string;
    /** one slot per candidate, null until that candidate lands */
    images: (ImageGenJobImage | null)[];
    error_kind?: string;
    error_message?: string;
    cost_units?: number;
    latency_ms?: number;
    created_at?: number;
    finished_at?: number;
}

export interface ImageGenGenerateRequest {
    prompt: string;
    aspect_ratio?: string;
    quality?: 'standard' | 'high';
    candidates?: number;
    references?: string[];
    include_logo?: boolean;
    add_text_with_layer?: boolean;
    /** false leaves the organisation's colours, face and tone out of it */
    use_branding?: boolean;
    words?: string;
    provider_id?: string;
    model?: string;
    group_id?: string;
    idempotency_key?: string;
}

export interface ImageGenEditRequest extends ImageGenGenerateRequest {
    source_upload_id: string;
    source_item_id?: string;
    parent_job_id?: string;
}

export interface ImageGenBrandKit {
    organisation?: string;
    palette?: Record<string, string>;
    tone?: string;
    /** the logo for a light background, so dark ink; rest-api reads this exact key */
    logo_upload_id?: string;
    /** the logo to put on a dark background, so light ink */
    logo_dark_upload_id?: string;
    /** which of the two was made by flipping the other, rather than uploaded */
    logo_derived?: ImageGenLogoSlot;
    never_include?: string[];
    font?: { url?: string; family?: string } | string;
}

/** which background a logo file is meant to sit on */
export type ImageGenLogoSlot = 'on_light' | 'on_dark';

/** on_light and on_dark pick a file; auto reads the artwork behind the logo */
export type ImageGenLogoChoice = 'auto' | ImageGenLogoSlot;

/**
 * An image attached to a request, numbered from 1 so a brief can name it.
 */
export interface ImageGenReference {
    id: string;
    name: string;
    url: string;
}

/** drives the size the text is drawn at */
export type ImageGenTextRole = 'headline' | 'subheading' | 'body';

/** how the lines inside a block line up with each other */
export type ImageGenTextAlign = 'left' | 'centre' | 'right';

export interface ImageGenTextBlock {
    id: string;
    text: string;
    role: ImageGenTextRole;
    /** top left of the block, as a fraction of the artwork's width and height */
    x: number;
    y: number;
    align: ImageGenTextAlign;
    colour: string;
    /** empty means the organisation's brand font */
    font: string;
    panel: boolean;
}

/** what the layer editor produces, kept on the modal between states */
export interface ImageGenLayerState {
    blocks: ImageGenTextBlock[];
    logo: boolean;
    logo_position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    logo_scale: number;
    logo_choice: ImageGenLogoChoice;
}
