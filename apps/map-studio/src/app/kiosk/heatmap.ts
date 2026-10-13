import { AvailabilityState, MapObject } from '../data/types';

export interface HeatmapCell {
    x: number;
    y: number;
    w: number;
    h: number;
    color: string;
    opacity: number;
}

/** How heavily a state counts toward utilisation, 0 free → 1 fully occupied */
export function stateToScore(state?: AvailabilityState): number {
    switch (state) {
        case 'free':
        case 'available':
            return 0;
        case 'pending':
            return 0.3;
        case 'booked':
            return 0.5;
        case 'checked-in':
            return 0.7;
        case 'occupied':
            return 1;
        case 'out-of-service':
        case 'restricted':
            return 0.2;
        default:
            return 0;
    }
}

/** Green at 0, amber at 0.5, red at 1 */
export function scoreToColor(score: number): string {
    if (score <= 0.5) {
        const t = score / 0.5;
        return `rgb(${Math.round(76 + (255 - 76) * t)},${Math.round(175 + (152 - 175) * t)},${Math.round(80 - 80 * t)})`;
    }
    const t = (score - 0.5) / 0.5;
    return `rgb(${Math.round(255 - 11 * t)},${Math.round(152 - 85 * t)},${Math.round(54 * t)})`;
}

/**
 * Buckets bookable objects into a coarse grid and spreads each one's
 * utilisation score over its neighbouring cells, producing a blurrable
 * occupancy heatmap.
 */
export function computeHeatmap(
    objects: MapObject[],
    availability: Record<string, AvailabilityState>,
    canvas_width: number,
    canvas_height: number,
): HeatmapCell[] {
    const cell_size = Math.max(canvas_width, canvas_height) / 20;
    if (!cell_size) return [];
    const cols = Math.ceil(canvas_width / cell_size);
    const rows = Math.ceil(canvas_height / cell_size);

    const grid = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({ score: 0, count: 0 })),
    );

    const bookable = objects.filter(
        (o) =>
            o.visible && (o.object_type === 'room' || o.object_type === 'desk'),
    );

    const radius = 2;
    for (const object of bookable) {
        const g = object.geometry;
        const cx = (g.x ?? 0) + (g.width ?? 30) / 2;
        const cy = (g.y ?? 0) + (g.height ?? 30) / 2;
        const score = stateToScore(availability[object.id]);
        const col = Math.floor(cx / cell_size);
        const row = Math.floor(cy / cell_size);

        for (let dr = -radius; dr <= radius; dr++) {
            for (let dc = -radius; dc <= radius; dc++) {
                const r = row + dr;
                const c = col + dc;
                if (r < 0 || r >= rows || c < 0 || c >= cols) continue;
                const weight = Math.max(
                    0,
                    1 - Math.hypot(dr, dc) / (radius + 1),
                );
                grid[r][c].score += score * weight;
                grid[r][c].count += weight;
            }
        }
    }

    const cells: HeatmapCell[] = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = grid[r][c];
            if (!cell.count) continue;
            cells.push({
                x: c * cell_size,
                y: r * cell_size,
                w: cell_size,
                h: cell_size,
                color: scoreToColor(cell.score / cell.count),
                opacity: Math.min(0.5, cell.count * 0.15),
            });
        }
    }
    return cells;
}
