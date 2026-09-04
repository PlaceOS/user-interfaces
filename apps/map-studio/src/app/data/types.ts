// ── Job ──────────────────────────────────────────────────────────────────────

export type JobStatus =
    | 'uploading'
    | 'processing'
    | 'configuring'
    | 'generating'
    | 'complete'
    | 'failed';

export interface Job {
    id: string;
    status: JobStatus;
    image_path: string | null;
    config: BrandConfig | null;
    metadata: ImageMetadata | null;
    error: string | null;
    output_path: string | null;
    created_at: string;
    updated_at: string;
}

// ── Image Metadata ───────────────────────────────────────────────────────────

export interface ImageMetadata {
    width: number;
    height: number;
    aspect_ratio: number;
    format: string;
}

// ── Brand Config ─────────────────────────────────────────────────────────────

export interface BrandConfig {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
    accentColor: string;
    badgeColor?: string;
    clientName: string;
    levelName: string;
    iconStyle?: IconStyle;
    showShadow?: boolean;
    roomIds: RoomEntry[];
    nonBookableZones?: NonBookableZone[];
    typography?: TypographyConfig;
    furniturePlacements?: FurniturePlacement[];
    iconPlacements?: IconPlacement[];
    tracing?: TracingData;
    embedFloorplanImage?: boolean;
    stateAssignments?: Record<string, AvailabilityState>;
}

export type IconStyle = 'filled' | 'outline';

// ── Room & Zone ──────────────────────────────────────────────────────────────

export interface RoomEntry {
    id: string;
    label: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    opacity?: number;
    icon?: AmenityIcon;
}

export interface IconPlacement {
    id: string;
    icon: AmenityIcon;
    label: string;
    x: number;
    y: number;
}

export type NonBookableZoneType =
    | 'open-plan'
    | 'collaboration'
    | 'facilities'
    | 'lounge'
    | 'placeholder'
    | 'wellness';

export interface NonBookableZone {
    id: string;
    label: string;
    type: NonBookableZoneType;
    x: number;
    y: number;
    width: number;
    height: number;
    highlightColor?: string;
}

// ── Typography ───────────────────────────────────────────────────────────────

export interface TypographyRole {
    fontSize: number;
    fontWeight: number;
    fill: string;
}

export interface TypographyConfig {
    zoneLabel?: TypographyRole;
    roomLabel?: TypographyRole;
    deskLabel?: TypographyRole;
    badgeLabel?: TypographyRole;
    sectionLabel?: TypographyRole;
}

// ── Furniture ────────────────────────────────────────────────────────────────

export type FurnitureType =
    | 'desk-single'
    | 'desk-pair'
    | 'desk-pod'
    | 'table-small'
    | 'table-medium'
    | 'table-large'
    | 'table-round'
    | 'bench'
    | 'lounge-chair'
    | 'sofa'
    | 'phone-booth'
    | 'lockers'
    | 'standing-desk';

export interface FurniturePlacement {
    type: FurnitureType;
    x: number;
    y: number;
    width?: number;
    height?: number;
    rotation?: 0 | 90 | 180 | 270;
    deskId?: string;
}

// ── API Responses ────────────────────────────────────────────────────────────

export interface UploadResponse {
    jobId: string;
    previewUrl: string;
    metadata?: ImageMetadata;
}

export interface JobStatusResponse {
    jobId: string;
    status: JobStatus;
    error?: string;
    downloadUrl?: string;
}

export interface ValidationError {
    field: string;
    message: string;
    value?: unknown;
}

export interface ErrorResponse {
    error: string;
    details?: ValidationError[];
}

// ── SVG Layer Names ──────────────────────────────────────────────────────────

export const LAYER_ORDER = [
    'bkd',
    'outline',
    'walls',
    'space-highlights',
    'room-bookings',
    'plants-and-furniture',
    'text',
    'icons',
] as const;

export type LayerName = (typeof LAYER_ORDER)[number];

// ── Icon Types ───────────────────────────────────────────────────────────────

export type AmenityIcon =
    | 'male-restroom'
    | 'female-restroom'
    | 'accessible-restroom'
    | 'staircase'
    | 'elevator'
    | 'fire-exit'
    | 'cafe'
    | 'reception'
    | 'aed'
    | 'lockers'
    | 'presentation';

// ── Vector Tracing ───────────────────────────────────────────────────────────

export interface PathPoint {
    x: number;
    y: number;
}

export interface TracedPath {
    id: string;
    points: PathPoint[];
    closed: boolean;
}

export interface TracedShape {
    id: string;
    label: string;
    type: 'rect';
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
}

export interface TracingData {
    outlinePaths: TracedPath[];
    wallPaths: TracedPath[];
    spaceHighlights: TracedShape[];
}

// ── SVG Elements ──────────────────────────────────────────────────────────────

export interface SvgElement {
    tag: string;
    attributes: Record<string, string>;
    children: (SvgElement | string)[];
}

// ── Projects ────────────────────────────────────────────────────────────────

export interface Project {
    id: string;
    name: string;
    building_name: string | null;
    building_zone_id?: string | null;
    status: 'draft' | 'published' | 'archived';
    created_at: string;
    updated_at: string;
    floorplans?: Floorplan[];
}

export interface Floorplan {
    id: string;
    project_id: string;
    floor_name: string;
    floor_index: number;
    level_zone_id?: string | null;
    source_image_path: string | null;
    source_type: string | null;
    background_opacity: number;
    background_color: string | null;
    background_locked: boolean;
    scale_px_per_meter: number | null;
    canvas_width: number | null;
    canvas_height: number | null;
    canvas_state: EditorState | null;
    svg_output: string | null;
    status: 'draft' | 'published' | 'archived';
    version: number;
    created_at: string;
    updated_at: string;
}

export interface FloorplanVersion {
    id: string;
    floorplan_id: string;
    version: number;
    canvas_state: EditorState;
    svg_output: string | null;
    note: string | null;
    created_at: string;
}

export type MapObjectType =
    | 'room'
    | 'desk'
    | 'zone'
    | 'area'
    | 'amenity'
    | 'decorative'
    | 'parking'
    | 'locker';

export type PlaceOSEntityType = 'system' | 'module' | 'zone';

export type AvailabilityState =
    | 'available'
    | 'booked'
    | 'occupied'
    | 'restricted'
    | 'unavailable' // desk states
    | 'free'
    | 'checked-in'
    | 'pending'
    | 'out-of-service'; // room states

export interface ObjectGeometry {
    type: 'rect' | 'polygon' | 'circle' | 'path';
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rotation?: number;
    points?: { x: number; y: number }[];
    d?: string; // SVG path data
    r?: number; // circle radius
}

export interface MapObject {
    id: string;
    floorplan_id: string;
    object_type: MapObjectType;
    svg_id: string | null;
    label: string | null;
    geometry: ObjectGeometry;
    entity_type: PlaceOSEntityType | null;
    entity_id: string | null;
    layer: string;
    fill_color: string | null;
    stroke_color: string | null;
    opacity: number;
    capacity: number | null;
    amenities: string[] | null;
    tags: string[] | null;
    metadata: Record<string, unknown> | null;
    group_id: string | null;
    z_index: number;
    locked: boolean;
    visible: boolean;
}

export interface EditorState {
    objects: MapObject[];
    viewport: { x: number; y: number; zoom: number };
    selectedIds: string[];
    layers: EditorLayer[];
    gridEnabled: boolean;
    snapEnabled: boolean;
    gridSize: number;
}

export interface EditorLayer {
    id: string;
    name: string;
    visible: boolean;
    locked: boolean;
    opacity: number;
    order: number;
}

export interface ValidationIssue {
    type: 'error' | 'warning';
    objectId?: string;
    message: string;
    field?: string;
}
