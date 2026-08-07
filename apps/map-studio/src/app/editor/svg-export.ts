import { MapObject } from '../data/types';
import { TYPE_COLORS } from './constants';

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
    return object.stroke_color || TYPE_COLORS[object.object_type] || '#6b7280';
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
 * Builds a clean, PlaceOS-ready SVG from the map objects.
 *
 * Objects are grouped by type and each carries its `svg_id`, so PlaceOS can
 * bind bookings to elements by id. The background image is deliberately left
 * out — the export is vector only.
 */
export function buildSvg(
    objects: MapObject[],
    width: number,
    height: number,
    background_color = '#ffffff',
): string {
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
            const fill = exportFill(object);
            const stroke = exportStroke(object);
            const stroke_width = exportStrokeWidth(object);
            const label = escapeXml(object.label ?? '');
            const id = escapeXml(idOf(object));
            const rotation = g.rotation
                ? ` transform="rotate(${g.rotation} ${(g.x ?? 0) + (g.width ?? 0) / 2} ${(g.y ?? 0) + (g.height ?? 0) / 2})"`
                : '';

            if (g.type === 'rect') {
                const x = g.x ?? 0;
                const y = g.y ?? 0;
                const w = g.width ?? 50;
                const h = g.height ?? 50;
                lines.push(`    <g id="${id}"${rotation}>`);
                lines.push(
                    `      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${stroke_width}" rx="2" data-type="${object.object_type}" data-label="${label}" />`,
                );
                if (label && object.object_type !== 'decorative') {
                    const size = Math.max(8, Math.min(w / 6, h / 3, 16));
                    lines.push(
                        `      <text x="${x + w / 2}" y="${y + h / 2}" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-size="${size}" font-weight="600" font-family="Arial, sans-serif">${label}</text>`,
                    );
                }
                lines.push('    </g>');
            } else if (g.type === 'polygon' && g.points?.length) {
                const points = g.points.map((p) => `${p.x},${p.y}`).join(' ');
                const cx =
                    g.points.reduce((sum, p) => sum + p.x, 0) / g.points.length;
                const cy =
                    g.points.reduce((sum, p) => sum + p.y, 0) / g.points.length;
                lines.push(`    <g id="${id}">`);
                lines.push(
                    `      <polygon points="${points}" fill="${fill}" stroke="${stroke}" stroke-width="${stroke_width}" data-type="${object.object_type}" data-label="${label}" />`,
                );
                if (label) {
                    lines.push(
                        `      <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-size="10" font-weight="600" font-family="Arial, sans-serif">${label}</text>`,
                    );
                }
                lines.push('    </g>');
            } else if (g.type === 'circle') {
                const cx = g.x ?? 0;
                const cy = g.y ?? 0;
                const r = g.r ?? 10;
                lines.push(`    <g id="${id}">`);
                lines.push(
                    `      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${stroke_width}" data-type="${object.object_type}" data-label="${label}" />`,
                );
                if (label) {
                    lines.push(
                        `      <text x="${cx}" y="${cy + r + 10}" text-anchor="middle" dominant-baseline="central" fill="${stroke}" font-size="8" font-weight="600" font-family="Arial, sans-serif">${label}</text>`,
                    );
                }
                lines.push('    </g>');
            }
        }
        lines.push('  </g>');
    }

    lines.push('</svg>');
    return lines.join('\n');
}
