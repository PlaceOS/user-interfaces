import { Component, Signal, computed, inject } from '@angular/core';
import { shiftColorTowards } from '@placeos/common';

import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';

export interface Polygon {
    /** Name of the region */
    name: string;
    /** Color to display region in on overlay */
    color: string;
    /** List of x, y coordinates from 0 to 1 */
    points: [number, number][];
}

export interface MapPolygonData {
    polygons: Signal<Polygon[]>;
}

/**
 * Map overlay that fills regions of the map. Use it as a full size `box`
 * feature. The polygons are one SVG with a 0-1 view box, so they stay sharp
 * at all zoom levels and resizing the overlay does not reallocate a buffer.
 */
@Component({
    selector: '[map-canvas]',
    host: { class: 'block h-full w-full' },
    template: `
        <svg
            class="block h-full w-full"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            @for (shape of shapes(); track $index) {
                <polygon
                    stroke-width="3"
                    vector-effect="non-scaling-stroke"
                    [attr.points]="shape.points"
                    [attr.fill]="shape.fill"
                    [attr.stroke]="shape.stroke"
                />
            }
        </svg>
    `,
})
export class MapCanvasComponent {
    private readonly _data = inject<MapPolygonData>(MAP_FEATURE_DATA);

    /** SVG attributes for each polygon that has points */
    public readonly shapes = computed(() =>
        this._data
            .polygons()
            .filter((polygon) => polygon.points?.length)
            .map((polygon) => ({
                points: polygon.points.map(([x, y]) => `${x},${y}`).join(' '),
                fill: polygon.color + '80',
                stroke: shiftColorTowards(polygon.color, '#888888', 0.5),
            })),
    );
}
