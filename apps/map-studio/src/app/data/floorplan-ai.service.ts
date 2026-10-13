import { Injectable, inject } from '@angular/core';

import { PlaceOSService } from './placeos.service';
import { StoreService } from './store.service';

export type FloorplanAnalysisMode = 'outline' | 'rooms';

export interface DetectedRoom {
    id: string;
    label: string;
    type:
        | 'meeting'
        | 'focus'
        | 'collaboration'
        | 'open-plan'
        | 'facilities'
        | 'other';
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface FloorplanAnalysis {
    outline: {
        id: string;
        points: { x: number; y: number }[];
        closed: boolean;
    } | null;
    rooms: DetectedRoom[];
}

const MAX_ANALYSIS_DIMENSION = 2400;
const ROOM_TYPES = new Set<DetectedRoom['type']>([
    'meeting',
    'focus',
    'collaboration',
    'open-plan',
    'facilities',
    'other',
]);

const OUTLINE_TASK = `
TASK — BUILDING OUTLINE
Trace the EXTERIOR PERIMETER: the solid, continuous physical outer walls of the building floor plate.

Rules:
- The outline must encompass every room, desk and labelled space.
- Vertices are wall corners. Include every notch, setback and recess.
- Do not trace dotted, dashed or curved internal zone boundaries.
- Stop at the last solid wall; exclude blank margins, title blocks and image borders.
- Use 10–80 vertices where needed. Do not simplify the floor plate to a box.

Return a JSON object in exactly this shape:
{"outline":{"points":[{"x":270,"y":120},{"x":1050,"y":120}],"closed":true},"rooms":[]}`;

const ROOMS_TASK = `
TASK — ROOM DETECTION
Identify every labelled space on the floor plan and measure it using the red coordinate grid.

For each space:
1. Read its printed label exactly.
2. Locate its enclosing solid walls.
3. Set x and y to the top-left inner wall corner.
4. Set width and height to its wall-to-wall interior dimensions.

Rules:
- Keep each bounding box tightly aligned to that space's own walls.
- Do not include adjacent rooms, corridors or open areas.
- Never merge adjacent rooms.
- Include meeting rooms, focus rooms, open plan and collaboration areas, phone booths, wellness rooms, print/copy areas, storage, lockers, toilets, showers, lifts, stairs, kitchens, reception and lounges.
- type must be meeting, focus, collaboration, open-plan, facilities or other.

Return a JSON object in exactly this shape:
{"outline":null,"rooms":[{"id":"meeting-3-44","label":"MEETING 3.44","type":"meeting","x":500,"y":200,"width":180,"height":140}]}`;

@Injectable({ providedIn: 'root' })
export class FloorplanAiService {
    private readonly _placeos = inject(PlaceOSService);
    private readonly _store = inject(StoreService);

    public get configured() {
        return !!this._placeos.aiConfig;
    }

    public async analyze(
        floorplan_id: string,
        mode: FloorplanAnalysisMode,
    ): Promise<FloorplanAnalysis> {
        const source = await this._store.getSourceImage(floorplan_id);
        if (!source) throw new Error('Upload a floor plan image first');

        const prepared = await prepareImage(source);
        const prompt = `You are an expert architectural floor plan analyser. A RED COORDINATE GRID is overlaid on this image. Grid labels show ORIGINAL pixel coordinates.

The ORIGINAL image is ${prepared.width}px wide × ${prepared.height}px tall. Return every coordinate in ORIGINAL image pixels using the red grid as reference.
${mode === 'outline' ? OUTLINE_TASK : ROOMS_TASK}`;
        const response = await this._placeos.analyzeImage(
            prompt,
            prepared.base64,
        );
        return normaliseFloorplanAnalysis(
            response,
            prepared.width,
            prepared.height,
        );
    }
}

async function prepareImage(source: Blob): Promise<{
    base64: string;
    width: number;
    height: number;
}> {
    const image = await loadImage(source);
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    if (!width || !height) throw new Error('Could not read source image');

    const scale = Math.min(1, MAX_ANALYSIS_DIMENSION / Math.max(width, height));
    const send_width = Math.round(width * scale);
    const send_height = Math.round(height * scale);
    const canvas = document.createElement('canvas');
    canvas.width = send_width;
    canvas.height = send_height;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Image processing is unavailable');

    context.drawImage(image, 0, 0, send_width, send_height);
    drawCoordinateGrid(context, send_width, send_height, scale);

    const jpeg = await new Promise<Blob>((resolve, reject) =>
        canvas.toBlob(
            (blob) =>
                blob
                    ? resolve(blob)
                    : reject(new Error('Could not prepare source image')),
            'image/jpeg',
            0.8,
        ),
    );
    return { base64: await blobBase64(jpeg), width, height };
}

function loadImage(source: Blob): Promise<HTMLImageElement> {
    const url = URL.createObjectURL(source);
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            URL.revokeObjectURL(url);
            resolve(image);
        };
        image.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error('Could not read source image'));
        };
        image.src = url;
    });
}

function drawCoordinateGrid(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    scale: number,
) {
    const spacing = Math.max(50, Math.round(width / 20 / 25) * 25);
    context.save();
    context.strokeStyle = 'red';
    context.fillStyle = 'red';
    context.font = 'bold 11px Arial';

    let index = 0;
    for (let x = spacing; x < width; x += spacing, index++) {
        const major = index % 2 === 1;
        context.globalAlpha = major ? 0.7 : 0.4;
        context.lineWidth = major ? 1.5 : 0.8;
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
        if (major) {
            context.globalAlpha = 0.95;
            context.fillText(`${Math.round(x / scale)}`, x + 3, 14);
        }
    }

    index = 0;
    for (let y = spacing; y < height; y += spacing, index++) {
        const major = index % 2 === 1;
        context.globalAlpha = major ? 0.7 : 0.4;
        context.lineWidth = major ? 1.5 : 0.8;
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
        if (major) {
            context.globalAlpha = 0.95;
            context.fillText(`${Math.round(y / scale)}`, 3, y - 3);
        }
    }
    context.restore();
}

function blobBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () =>
            resolve(`${reader.result ?? ''}`.split(',', 2)[1] ?? '');
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
    });
}

function distance(
    point: { x: number; y: number },
    start: { x: number; y: number },
    end: { x: number; y: number },
) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const magnitude = Math.hypot(dx, dy);
    return magnitude
        ? Math.abs(dx * (start.y - point.y) - (start.x - point.x) * dy) /
              magnitude
        : Math.hypot(point.x - start.x, point.y - start.y);
}

function simplify(
    points: { x: number; y: number }[],
    epsilon: number,
): { x: number; y: number }[] {
    if (points.length < 3) return points;
    let furthest = 0;
    let furthest_index = 0;
    for (let index = 1; index < points.length - 1; index++) {
        const current = distance(
            points[index],
            points[0],
            points[points.length - 1],
        );
        if (current > furthest) {
            furthest = current;
            furthest_index = index;
        }
    }
    if (furthest <= epsilon) return [points[0], points[points.length - 1]];
    const left = simplify(points.slice(0, furthest_index + 1), epsilon);
    const right = simplify(points.slice(furthest_index), epsilon);
    return [...left.slice(0, -1), ...right];
}

function record(value: unknown): Record<string, unknown> | null {
    return value !== null && typeof value === 'object' && !Array.isArray(value)
        ? (value as Record<string, unknown>)
        : null;
}

function finite(value: unknown): number | null {
    return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function point(
    value: unknown,
    width: number,
    height: number,
): { x: number; y: number } | null {
    const item = record(value);
    const x = finite(item?.['x']);
    const y = finite(item?.['y']);
    return x === null || y === null
        ? null
        : {
              x: Math.round(Math.min(Math.max(x, 0), width)),
              y: Math.round(Math.min(Math.max(y, 0), height)),
          };
}

function uniqueId(raw: string, index: number, seen: Set<string>) {
    let id = (raw || `room-${index}`)
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '-')
        .replace(/^[^a-z]/, 'r$&');
    let unique = id;
    let suffix = 1;
    while (seen.has(unique)) unique = `${id}-${suffix++}`;
    seen.add(unique);
    return unique;
}

function placeOsId(label: string) {
    const match = label.match(/(\d{1,2})-(\d{1,3})/);
    return match ? `area-${match[1]}.${match[2]}-free` : null;
}

function snapRooms(rooms: DetectedRoom[], threshold: number) {
    const cluster = (values: number[]) => {
        const sorted = [...new Set(values)].sort((a, b) => a - b);
        const result = new Map<number, number>();
        for (let index = 0; index < sorted.length; index++) {
            const group = [sorted[index]];
            while (
                index + 1 < sorted.length &&
                sorted[index + 1] - sorted[index] <= threshold
            ) {
                group.push(sorted[++index]);
            }
            const median = group[Math.floor(group.length / 2)];
            group.forEach((value) => result.set(value, median));
        }
        return result;
    };
    const xs = cluster(rooms.flatMap((room) => [room.x, room.x + room.width]));
    const ys = cluster(rooms.flatMap((room) => [room.y, room.y + room.height]));
    return rooms.map((room) => {
        const x = xs.get(room.x) ?? room.x;
        const y = ys.get(room.y) ?? room.y;
        const right = xs.get(room.x + room.width) ?? room.x + room.width;
        const bottom = ys.get(room.y + room.height) ?? room.y + room.height;
        return {
            ...room,
            x,
            y,
            width: Math.max(20, right - x),
            height: Math.max(20, bottom - y),
        };
    });
}

/** Validates the untrusted model response and confines it to the source image. */
export function normaliseFloorplanAnalysis(
    response: string,
    width: number,
    height: number,
): FloorplanAnalysis {
    let parsed: Record<string, unknown>;
    try {
        const value = JSON.parse(
            response
                .trim()
                .replace(/^```(?:json)?\s*/, '')
                .replace(/\s*```$/, ''),
        );
        parsed = record(value) ?? {};
    } catch {
        throw new Error('The AI returned invalid JSON');
    }

    const raw_outline = record(parsed['outline']);
    const raw_points = Array.isArray(raw_outline?.['points'])
        ? raw_outline['points']
        : [];
    const points = raw_points
        .map((value) => point(value, width, height))
        .filter((value): value is { x: number; y: number } => !!value);
    const outline =
        points.length >= 3
            ? {
                  id: 'auto-outline',
                  points: simplify(points, Math.max(width, height) * 0.003),
                  closed: raw_outline?.['closed'] !== false,
              }
            : null;

    const seen = new Set<string>();
    const raw_rooms = Array.isArray(parsed['rooms']) ? parsed['rooms'] : [];
    const rooms = raw_rooms.flatMap((value, index): DetectedRoom[] => {
        const item = record(value);
        if (!item) return [];
        const raw_x = finite(item['x']);
        const raw_y = finite(item['y']);
        const raw_width = finite(item['width']);
        const raw_height = finite(item['height']);
        if (
            raw_x === null ||
            raw_y === null ||
            raw_width === null ||
            raw_height === null
        )
            return [];

        const x = Math.round(Math.min(Math.max(raw_x, 0), width - 20));
        const y = Math.round(Math.min(Math.max(raw_y, 0), height - 20));
        const room_width = Math.round(
            Math.min(Math.max(raw_width, 20), width - x),
        );
        const room_height = Math.round(
            Math.min(Math.max(raw_height, 20), height - y),
        );
        const label =
            typeof item['label'] === 'string' && item['label']
                ? item['label']
                : `Room ${index + 1}`;
        const candidate =
            typeof item['type'] === 'string' &&
            ROOM_TYPES.has(item['type'] as DetectedRoom['type'])
                ? (item['type'] as DetectedRoom['type'])
                : 'other';
        const raw_id =
            placeOsId(label) ??
            (typeof item['id'] === 'string' ? item['id'] : `room-${index}`);
        return [
            {
                id: uniqueId(raw_id, index, seen),
                label,
                type: candidate,
                x,
                y,
                width: room_width,
                height: room_height,
            },
        ];
    });

    return {
        outline,
        rooms: snapRooms(rooms, Math.max(width, height) * 0.008),
    };
}
