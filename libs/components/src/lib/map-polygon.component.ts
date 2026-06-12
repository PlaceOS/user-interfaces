import { Component, OnInit, inject, signal } from '@angular/core';

import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';

export interface MapPolygonData {
    /** Name of the region */
    name: string;
    /** Color to display region in on overlay */
    color: string;
    /** Array of points that define the shape of the region */
    points: [number, number][];
    /**  */
    ratio?: number;
    svg_ratio?: number;
    zoom_value?: number;
}

@Component({
    selector: '[map-polygon]',
    template: `
        <div
            polygon
            class="absolute -top-1 -left-1 h-full w-full -translate-x-1/2 -translate-y-1/2 transform"
            [style.transform]="'scale(' + scale() * zoom_value() + ')'"
        >
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                [style.width]="width() + '%'"
                [style.height]="height() + '%'"
            >
                <svg
                    [attr.viewBox]="
                        '0 0 ' +
                        (width() / 20 || 1) +
                        ' ' +
                        (height() / 20 || 1)
                    "
                    preserveAspectRatio="none"
                    class="relative h-full w-full"
                >
                    <polygon
                        [attr.points]="points()"
                        [style.fill]="fill()"
                        [style.stroke]="stroke()"
                    />
                </svg>
            </div>
        </div>
        <div
            text
            class="text-shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl whitespace-pre-line text-white"
        >
            {{ name() }}
        </div>
    `,
    styles: [
        `
            [polygon] {
                will-change: transform;
            }

            polygon {
                stroke-width: 2;
            }
            circle {
                stroke-width: 2;
            }

            [text] {
                width: 32rem;
                max-width: 65vw;
            }
        `,
    ],
})
export class MapPolygonComponent implements OnInit {
    private _details = inject<MapPolygonData>(MAP_FEATURE_DATA);

    /** Message to display above the pin */
    public readonly name = signal(this._details.name);
    /** Fill colour for the pin SVG */
    public readonly fill = signal(`${this._details.color || '#e53935'}88`);
    /** Stroke colour for the pin SVG */
    public readonly stroke = signal(this._details.color || '#e53935');
    public readonly width = signal(1);
    public readonly height = signal(1);
    public readonly svg_scale = 20;

    public readonly scale = signal(this._details.svg_ratio || 1);
    public readonly zoom_value = signal(this._details.zoom_value || 1);

    /** List of points for drawing the polygon */
    public readonly points = signal('0,0 0,1 1,1 1,0');

    public readonly point_list = signal<[number, number][]>([]);

    public ngOnInit(): void {
        this.processPoints(this._details.points);
    }

    public processPoints(points: [number, number][]) {
        const diff: Record<string, number> = points.reduce(
            (m, [x, y]) => ({
                x_min: x < m.x_min ? x : m.x_min,
                x_max: x > m.x_max ? x : m.x_max,
                y_min: y < m.y_min ? y : m.y_min,
                y_max: y > m.y_max ? y : m.y_max,
            }),
            {
                x_min: 100,
                x_max: -100,
                y_min: 100,
                y_max: -100,
            },
        );
        const range = {
            x: diff.x_max - diff.x_min,
            y: diff.y_max - diff.y_min,
        };
        const { ratio } = this._details;
        let w = range.x * 100;
        let h = range.y * 100 * (ratio || 1);
        w = Math.floor(w * 100);
        h = Math.floor(h * 100);
        this.width.set(w);
        this.height.set(h);
        this.points.set(
            points
                .reduce(
                    (s, [x, y]) =>
                        `${s}${s ? ' ' : ''}${
                            (((x - diff.x_min) / range.x) * w) / 20
                        },${(((y - diff.y_min) / range.y) * h) / 20}`,
                    '',
                )
                .replace(/NaN/g, '0'),
        );
        this.point_list.set(
            points.map(([x, y]) => [
                (((x - diff.x_min) / range.x) * w) / 20,
                (((y - diff.y_min) / range.y) * h) / 20,
            ]),
        );
    }
}
