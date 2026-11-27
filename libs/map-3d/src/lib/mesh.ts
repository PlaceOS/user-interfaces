import { ShapeUtils, Vector2 } from 'three';

import {
    effectiveAnnotation,
    isHidden,
    LINEAR_KINDS,
    Map3DKind,
} from './annotations';
import { MapShape, ParsedMap, Point2, ringArea } from './shapes';

/** A raised element: its outline in metres from the map's top left corner */
export interface Footprint {
    element: Element;
    /** Index of the shape in the parsed map */
    shape: number;
    kind: Map3DKind;
    /** Metres from the floor to the bottom */
    base: number;
    /** Metres from the floor to the top */
    top: number;
    polygons: { outer: Point2[]; holes: Point2[][] }[];
    lines: { points: Point2[]; closed: boolean; width: number }[];
}

export interface MeshRange {
    /** Index into the footprint list */
    footprint: number;
    vertex_start: number;
    vertex_count: number;
    index_start: number;
    index_count: number;
}

export interface MeshData {
    positions: Float32Array;
    uvs: Float32Array;
    colors: Float32Array;
    indices: Uint32Array;
    ranges: MeshRange[];
}

export interface MeshOptions {
    /** Map size in metres */
    width: number;
    depth: number;
    /** Metres covered by one pixel of the map texture */
    texel: number;
}

/** Narrowest a line drawn wall is made, in metres */
const MIN_LINE_WIDTH = 0.06;
/** Shade of a top face, and of a side before the direction it faces is added */
const TOP_SHADE = 1;
const SIDE_SHADE = 0.74;
const SIDE_SHADE_RANGE = 0.14;
/** Shade multiplier where a side meets the floor */
const FLOOR_SHADE = 0.84;
/** Direction the light travels across the map (towards bottom right) */
const LIGHT: Point2 = [0.53, 0.85];

/**
 * Footprints of the elements a map raises above the floor.
 * @param unit SVG user units per metre
 */
export function footprintsOf(map: ParsedMap, unit: number): Footprint[] {
    const footprints: Footprint[] = [];
    if (!(unit > 0)) return footprints;
    const { x, y } = map.view_box;
    const scale = (point: Point2): Point2 => [
        (point[0] - x) / unit,
        (point[1] - y) / unit,
    ];
    for (const shape of map.shapes) {
        const annotation = effectiveAnnotation(shape.element);
        if (!annotation || !(annotation.height > 0)) continue;
        if (isHidden(shape.element)) continue;
        const footprint: Footprint = {
            element: shape.element,
            shape: shape.index,
            kind: annotation.kind,
            base: annotation.base,
            top: annotation.base + annotation.height,
            polygons: [],
            lines: [],
        };
        if (isSolid(shape, annotation.kind)) {
            footprint.polygons = shape.polygons.map((polygon) => ({
                outer: polygon.outer.map(scale),
                holes: polygon.holes.map((hole) => hole.map(scale)),
            }));
        } else if (shape.has_stroke && LINEAR_KINDS.has(annotation.kind)) {
            footprint.lines = shape.subpaths.map((sub) => ({
                points: sub.points.map(scale),
                closed: sub.closed,
                width: Math.max(MIN_LINE_WIDTH, shape.stroke_width / unit),
            }));
        }
        if (footprint.polygons.length || footprint.lines.length) {
            footprints.push(footprint);
        }
    }
    return footprints;
}

/**
 * Whether a shape is raised as a solid block. Outlines with no fill are
 * raised along their line when they are walls and filled in otherwise.
 */
export function isSolid(shape: MapShape, kind: Map3DKind): boolean {
    if (!shape.polygons.length) return false;
    if (shape.has_fill) return true;
    return !LINEAR_KINDS.has(kind) && shape.subpaths.every((_) => _.closed);
}

class MeshBuilder {
    public positions: number[] = [];
    public uvs: number[] = [];
    public colors: number[] = [];
    public indices: number[] = [];
    public ranges: MeshRange[] = [];

    constructor(private _options: MeshOptions) {}

    public get vertex_count() {
        return this.positions.length / 3;
    }

    /** Add a vertex. `x` and `z` are metres on the map, `u` and `v` where its colour is read. */
    public vertex(
        x: number,
        y: number,
        z: number,
        shade: number,
        u = x,
        v = z,
    ): number {
        this.positions.push(x, y, z);
        this.uvs.push(u / this._options.width, 1 - v / this._options.depth);
        this.colors.push(shade, shade, shade);
        return this.vertex_count - 1;
    }

    /** A vertical face from a to b, lit by the direction it faces. */
    public side(
        a: Point2,
        b: Point2,
        normal: Point2,
        base: number,
        top: number,
        colour_a: Point2,
        colour_b: Point2,
    ) {
        const facing = -(normal[0] * LIGHT[0] + normal[1] * LIGHT[1]);
        const shade = SIDE_SHADE + SIDE_SHADE_RANGE * facing;
        const low = base > 0 ? shade : shade * FLOOR_SHADE;
        const v0 = this.vertex(a[0], base, a[1], low, colour_a[0], colour_a[1]);
        const v1 = this.vertex(b[0], base, b[1], low, colour_b[0], colour_b[1]);
        const v2 = this.vertex(
            b[0],
            top,
            b[1],
            shade,
            colour_b[0],
            colour_b[1],
        );
        const v3 = this.vertex(
            a[0],
            top,
            a[1],
            shade,
            colour_a[0],
            colour_a[1],
        );
        this.indices.push(v0, v1, v2, v0, v2, v3);
    }

    public build(): MeshData {
        return {
            positions: new Float32Array(this.positions),
            uvs: new Float32Array(this.uvs),
            colors: new Float32Array(this.colors),
            indices: new Uint32Array(this.indices),
            ranges: this.ranges,
        };
    }
}

function addPolygon(
    builder: MeshBuilder,
    polygon: { outer: Point2[]; holes: Point2[][] },
    base: number,
    top: number,
    texel: number,
) {
    const { outer, holes } = polygon;
    if (outer.length < 3) return;
    const first = builder.vertex_count;
    for (const ring of [outer, ...holes]) {
        for (const [x, z] of ring) builder.vertex(x, top, z, TOP_SHADE);
    }
    const faces = ShapeUtils.triangulateShape(
        outer.map(([x, z]) => new Vector2(x, z)),
        holes.map((hole) => hole.map(([x, z]) => new Vector2(x, z))),
    );
    for (const [a, b, c] of faces) {
        builder.indices.push(first + a, first + b, first + c);
    }
    [outer, ...holes].forEach((ring, ring_index) => {
        // Normals point away from the solid: out of the outer ring, into holes
        const direction =
            Math.sign(ringArea(ring) || 1) * (ring_index === 0 ? 1 : -1);
        for (let i = 0; i < ring.length; i++) {
            const a = ring[i];
            const b = ring[(i + 1) % ring.length];
            const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
            if (!length) continue;
            const normal: Point2 = [
                (direction * (b[1] - a[1])) / length,
                (-direction * (b[0] - a[0])) / length,
            ];
            const inset = (point: Point2): Point2 => [
                point[0] - normal[0] * texel,
                point[1] - normal[1] * texel,
            ];
            builder.side(a, b, normal, base, top, inset(a), inset(b));
        }
    });
}

function addLine(
    builder: MeshBuilder,
    line: { points: Point2[]; closed: boolean; width: number },
    base: number,
    top: number,
) {
    const half = line.width / 2;
    const count = line.points.length;
    const segments = line.closed ? count : count - 1;
    for (let i = 0; i < segments; i++) {
        const a = line.points[i];
        const b = line.points[(i + 1) % count];
        const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (!length) continue;
        const along: Point2 = [(b[0] - a[0]) / length, (b[1] - a[1]) / length];
        const across: Point2 = [-along[1], along[0]];
        // Each segment runs half a width past its ends so corners are filled
        const start: Point2 = [a[0] - along[0] * half, a[1] - along[1] * half];
        const end: Point2 = [b[0] + along[0] * half, b[1] + along[1] * half];
        const corner = (point: Point2, side: number): Point2 => [
            point[0] + across[0] * half * side,
            point[1] + across[1] * half * side,
        ];
        const corners = [
            corner(start, 1),
            corner(end, 1),
            corner(end, -1),
            corner(start, -1),
        ];
        const first = builder.vertex_count;
        for (const [x, z] of corners) builder.vertex(x, top, z, TOP_SHADE);
        builder.indices.push(
            first,
            first + 1,
            first + 2,
            first,
            first + 2,
            first + 3,
        );
        // Sides take their colour from the centre of the line
        builder.side(corners[0], corners[1], across, base, top, a, b);
        builder.side(
            corners[2],
            corners[3],
            [-across[0], -across[1]],
            base,
            top,
            b,
            a,
        );
        builder.side(corners[1], corners[2], along, base, top, b, b);
        builder.side(
            corners[3],
            corners[0],
            [-along[0], -along[1]],
            base,
            top,
            a,
            a,
        );
    }
}

/**
 * Triangles for the raised elements of a map. Glass is returned apart from
 * the rest so it can be drawn see-through.
 */
export function buildMesh(
    footprints: readonly Footprint[],
    options: MeshOptions,
): { solid: MeshData; glass: MeshData } {
    const solid = new MeshBuilder(options);
    const glass = new MeshBuilder(options);
    footprints.forEach((footprint, index) => {
        const builder = footprint.kind === 'glass' ? glass : solid;
        const vertex_start = builder.vertex_count;
        const index_start = builder.indices.length;
        for (const polygon of footprint.polygons) {
            try {
                addPolygon(
                    builder,
                    polygon,
                    footprint.base,
                    footprint.top,
                    options.texel,
                );
            } catch {
                // A polygon that cannot be triangulated is left flat
            }
        }
        for (const line of footprint.lines) {
            addLine(builder, line, footprint.base, footprint.top);
        }
        builder.ranges.push({
            footprint: index,
            vertex_start,
            vertex_count: builder.vertex_count - vertex_start,
            index_start,
            index_count: builder.indices.length - index_start,
        });
    });
    return { solid: solid.build(), glass: glass.build() };
}

/** The footprint a triangle of a mesh belongs to, or -1. */
export function footprintAtIndex(mesh: MeshData, index: number): number {
    let low = 0;
    let high = mesh.ranges.length - 1;
    while (low <= high) {
        const middle = (low + high) >> 1;
        const range = mesh.ranges[middle];
        if (index < range.index_start) high = middle - 1;
        else if (index >= range.index_start + range.index_count)
            low = middle + 1;
        else return range.footprint;
    }
    return -1;
}
