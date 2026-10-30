import { MapObject, ObjectGeometry } from '../data/types';
import { TYPE_COLORS } from './constants';
import { composeSourceSvg, importedObject } from './source-svg';

/** Order objects are painted in, back to front */
const TYPE_ORDER = [
    'decorative',
    'zone',
    'area',
    'room',
    'desk',
    'locker',
    'parking',
    'amenity',
];

/** PlaceOS map ids must start with a letter and stay URL-safe */
const PLACEOS_ID_RE = /^[a-zA-Z][a-zA-Z0-9_.-]*$/;

export interface PreflightCheck {
    label: string;
    pass: boolean;
    detail: string;
}

const idOf = (object: MapObject) => object.svg_id || object.id;

/** The id auto-number gives an object: `prefix` plus a 3-digit number */
export const sequentialId = (prefix: string, number: number) =>
    `${prefix}${String(number).padStart(3, '0')}`;

/** Summary of the ids auto-number will produce, e.g. `room-001 … room-042` */
export function sequentialIdRange(
    prefix: string,
    start: number,
    count: number,
): string {
    if (count < 1) return '';
    const first = sequentialId(prefix, start);
    return count === 1
        ? first
        : `${first} … ${sequentialId(prefix, start + count - 1)}`;
}

/** Rooms and desks — the objects PlaceOS can bind a booking to */
export const bookableObjects = (objects: MapObject[]) =>
    objects.filter((o) => o.object_type === 'room' || o.object_type === 'desk');

/**
 * Checks that must pass before a map can be published to PlaceOS.
 * Mirrors the reference application's pre-publish checklist.
 */
export function preflightChecks(objects: MapObject[]): PreflightCheck[] {
    const bookable = bookableObjects(objects);

    const duplicates = new Map<string, number>();
    for (const object of bookable) {
        const id = idOf(object);
        duplicates.set(id, (duplicates.get(id) ?? 0) + 1);
    }

    return [
        {
            label: 'All IDs start with a letter',
            pass: bookable.every((o) => /^[a-zA-Z]/.test(idOf(o))),
            detail: bookable
                .filter((o) => !/^[a-zA-Z]/.test(idOf(o)))
                .map(idOf)
                .join(', '),
        },
        {
            label: 'No duplicate IDs',
            pass: duplicates.size === bookable.length,
            detail: [...duplicates.entries()]
                .filter(([, count]) => count > 1)
                .map(([id, count]) => `${id} (×${count})`)
                .join(', '),
        },
        {
            label: 'All bookable spaces have labels',
            pass: bookable.every((o) => !!o.label?.trim()),
            detail: bookable
                .filter((o) => !o.label?.trim())
                .map(idOf)
                .join(', '),
        },
        {
            label: 'Valid ID format (letters, digits, hyphens, dots)',
            pass: bookable.every((o) => PLACEOS_ID_RE.test(idOf(o))),
            detail: bookable
                .filter((o) => !PLACEOS_ID_RE.test(idOf(o)))
                .map(idOf)
                .join(', '),
        },
        {
            label: `Bookable spaces found (${bookable.length})`,
            pass: bookable.length > 0,
            detail: '',
        },
    ];
}

/** Convert a hex colour into rgba() at the given opacity */
function toFillOpacity(hex: string, opacity: number): string {
    const clean = hex.replace('#', '').slice(0, 6);
    const r = parseInt(clean.slice(0, 2), 16) || 0;
    const g = parseInt(clean.slice(2, 4), 16) || 0;
    const b = parseInt(clean.slice(4, 6), 16) || 0;
    return `rgba(${r},${g},${b},${opacity})`;
}

function exportFill(object: MapObject): string {
    const base = TYPE_COLORS[object.object_type] ?? '#4b5563';
    const color = object.fill_color || base;
    switch (object.object_type) {
        case 'room':
            return toFillOpacity(color, 0.45);
        case 'desk':
            return toFillOpacity(color, 0.55);
        case 'zone':
        case 'area':
            return toFillOpacity(color, 0.2);
        case 'amenity':
            return toFillOpacity(color, 0.5);
        case 'decorative':
            return object.layer === 'walls'
                ? '#374151'
                : toFillOpacity(base, 0.3);
        default:
            return toFillOpacity(base, 0.3);
    }
}

function exportStroke(object: MapObject): string {
    if (object.object_type === 'room') return '#374151';
    if (object.object_type === 'desk') return TYPE_COLORS['desk'] ?? '#22c55e';
    if (object.object_type === 'decorative' && object.layer === 'walls')
        return '#1f2937';
    return safeColor(
        object.stroke_color,
        TYPE_COLORS[object.object_type] || '#6b7280',
    );
}

function exportStrokeWidth(object: MapObject): string {
    if (object.object_type === 'room') return '1.5';
    if (object.object_type === 'desk') return '0.8';
    return '1';
}

/** Escape text destined for an XML attribute or text node */
function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

/**
 * Hex, named and functional colours only. Saved, CSV and PlaceOS data can hold
 * any string, and the value goes straight into published markup.
 */
const CSS_COLOR_RE = /^[#\w(),.%\s-]+$/;

const safeColor = (value: string | null | undefined, fallback: string) =>
    value && CSS_COLOR_RE.test(value) ? value : fallback;

/** A finite number, or `fallback`, for the same reason as `safeColor` */
const num = (value: unknown, fallback = 0): number =>
    typeof value === 'number' && Number.isFinite(value) ? value : fallback;

/** Geometry that carries a full bounding box */
type Bounded = Required<Pick<ObjectGeometry, 'x' | 'y' | 'width' | 'height'>>;

const hasBounds = (g: ObjectGeometry): g is ObjectGeometry & Bounded =>
    [g.x, g.y, g.width, g.height].every((v) => typeof v === 'number');

/** Label centred in a box, sized to fit inside it */
function boxLabel(label: string, box: Bounded): string {
    const size = Math.max(8, Math.min(box.width / 6, box.height / 3, 16));
    return `<text x="${box.x + box.width / 2}" y="${box.y + box.height / 2}" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-size="${size}" font-weight="600" font-family="Arial, sans-serif">${label}</text>`;
}

/**
 * Export imported SVGs in their source hierarchy; build shapes for new maps.
 * PlaceOS viewers paint availability on the element carrying a shape's id.
 */
export function buildSvg(
    objects: MapObject[],
    width: number,
    height: number,
    background_color = '#ffffff',
    source?: string | null,
    managed_ids?: string[],
): string {
    if (source) {
        const doc = new DOMParser().parseFromString(
            composeSourceSvg(source, objects, managed_ids),
            'image/svg+xml',
        );
        const added = objects.filter((object) => !importedObject(object));
        if (added.length) {
            const additions = new DOMParser().parseFromString(
                buildSvg(added, width, height, background_color),
                'image/svg+xml',
            );
            const group = doc.createElementNS(
                'http://www.w3.org/2000/svg',
                'g',
            );
            const viewBox = doc.documentElement
                .getAttribute('viewBox')
                ?.split(/[ ,]+/)
                .map(Number);
            if (viewBox?.length === 4)
                group.setAttribute(
                    'transform',
                    `translate(${viewBox[0]} ${viewBox[1]})`,
                );
            for (const child of Array.from(
                additions.documentElement.children,
            ).slice(1)) {
                child.removeAttribute('id');
                group.appendChild(doc.importNode(child, true));
            }
            doc.documentElement.appendChild(group);
        }
        return new XMLSerializer().serializeToString(doc.documentElement);
    }
    width = num(width);
    height = num(height);
    background_color = safeColor(background_color, '#ffffff');
    const lines: string[] = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">`,
        `  <rect x="0" y="0" width="${width}" height="${height}" fill="${background_color}" />`,
    ];

    for (const type of TYPE_ORDER) {
        const matching = objects.filter(
            (o) => o.object_type === type && o.visible,
        );
        if (!matching.length) continue;

        lines.push(`  <g id="${type}s">`);
        for (const object of matching) {
            const g = object.geometry;
            const stroke = exportStroke(object);
            const label = escapeXml(object.label ?? '');
            const id = escapeXml(idOf(object));
            const style = `fill="${exportFill(object)}" stroke="${stroke}" stroke-width="${exportStrokeWidth(object)}" data-type="${object.object_type}" data-label="${label}"`;
            let shape = '';
            let text = '';
            let transform = '';

            if (g.type === 'rect') {
                const box = {
                    x: num(g.x),
                    y: num(g.y),
                    width: num(g.width, 50),
                    height: num(g.height, 50),
                };
                const rotation = num(g.rotation);
                if (rotation) {
                    transform = ` transform="rotate(${rotation} ${box.x + num(g.width) / 2} ${box.y + num(g.height) / 2})"`;
                }
                shape = `<rect id="${id}" x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}" rx="2" ${style} />`;
                if (label && object.object_type !== 'decorative') {
                    text = boxLabel(label, box);
                }
            } else if (g.type === 'polygon' && g.points?.length) {
                const vertices = g.points.map((p) => ({
                    x: num(p.x),
                    y: num(p.y),
                }));
                const points = vertices.map((p) => `${p.x},${p.y}`).join(' ');
                const cx =
                    vertices.reduce((sum, p) => sum + p.x, 0) / vertices.length;
                const cy =
                    vertices.reduce((sum, p) => sum + p.y, 0) / vertices.length;
                shape = `<polygon id="${id}" points="${points}" ${style} />`;
                if (label) {
                    text = `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-size="10" font-weight="600" font-family="Arial, sans-serif">${label}</text>`;
                }
            } else if (g.type === 'circle') {
                const cx = num(g.x);
                const cy = num(g.y);
                const r = num(g.r, 10);
                shape = `<circle id="${id}" cx="${cx}" cy="${cy}" r="${r}" ${style} />`;
                if (label) {
                    text = `<text x="${cx}" y="${cy + r + 10}" text-anchor="middle" dominant-baseline="central" fill="${stroke}" font-size="8" font-weight="600" font-family="Arial, sans-serif">${label}</text>`;
                }
            } else if (g.type === 'path' && g.d) {
                shape = `<path id="${id}" d="${escapeXml(g.d)}" ${style} />`;
                if (
                    label &&
                    object.object_type !== 'decorative' &&
                    hasBounds(g)
                ) {
                    text = boxLabel(label, g);
                }
            } else {
                continue;
            }

            lines.push(`    <g${transform}>`);
            lines.push(`      ${shape}`);
            if (text) lines.push(`      ${text}`);
            lines.push('    </g>');
        }
        lines.push('  </g>');
    }

    lines.push('</svg>');
    return lines.join('\n');
}
