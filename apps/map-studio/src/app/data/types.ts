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
