import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { Observable } from 'rxjs';
import { MAP_FEATURE_DATA } from './interactive-map.component';

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
    ratio$?: Observable<number>;
    svg_ratio$?: Observable<number>;
    zoom$?: Observable<number>;
    data$?: Observable<MapPolygonData>;
}

@Component({
    selector: '[map-polygon]',
    template: `
        <div
            polygon
            class="absolute w-full h-full transform -translate-x-1/2 -translate-y-1/2 -top-1 -left-1"
            [style.transform]="'scale(' + scale * zoom + ')'"
        >
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                [style.width]="width + '%'"
                [style.height]="height + '%'"
            >
                <svg
                    [attr.viewBox]="
                        '0 0 ' +
                        (this.width / 20 || 1) +
                        ' ' +
                        (this.height / 20 || 1)
                    "
                    preserveAspectRatio="none"
                    class="relative w-full h-full"
                >
                    <polygon
                        [attr.points]="points"
                        [style.fill]="fill"
                        [style.stroke]="stroke"
                    />
                    <!-- <circle
                        *ngFor="let point of point_list"
                        [attr.cx]="point[0] || 0"
                        [attr.cy]="point[1] || 0"
                        [attr.r]="4"
                        [style.stroke]="'#000'"
                        [style.fill]="'#fffd'"
                    /> -->
                </svg>
            </div>
        </div>
        <div
            text
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-white text-xl text-center whitespace-pre-line"
        >
            {{ name }}
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
export class MapPolygonComponent extends AsyncHandler implements OnInit {
    /** Message to display above the pin */
    public name = this._details.name;
    /** Fill colour for the pin SVG */
    public fill = `${this._details.color || '#e53935'}88`;
    /** Stroke colour for the pin SVG */
    public stroke = this._details.color || '#e53935';
    public padding = 32;
    public width = 1;
    public height = 1;
    public readonly svg_scale = 20;

    public get scale() {
        return this._details.svg_ratio || 1;
    }

    public get zoom() {
        return this._details.zoom_value || 1;
    }

    /** List of points for drawing the polygon */
    public points = `0,0 0,${this.height} ${this.width},${this.height} ${this.width},0`;

    public point_list: [number, number][] = [];

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: MapPolygonData,
        private _cdr: ChangeDetectorRef
    ) {
        super();
    }

    public ngOnInit(): void {
        if (this._details.data$) {
            this.subscription(
                'data',
                this._details.data$.subscribe((_) => {
                    this.name = _.name;
                    this.fill = `${_.color || '#e53935'}88`;
                    this.stroke = _.color || '#e53935';
                    this.processPoints(_.points);
                })
            );
        }
        this.subscription(
            'ratio',
            this._details.ratio$?.subscribe((_) => {
                this._details.ratio = _;
                this.processPoints(this._details.points);
            })
        );
        this.subscription(
            'zoom',
            this._details.zoom$?.subscribe(
                (_) => (this._details.zoom_value = _)
            )
        );
        this.subscription(
            'svg_ratio',
            this._details.svg_ratio$?.subscribe(
                (_) => (this._details.svg_ratio = _)
            )
        );
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
            }
        );
        const range = {
            x: diff.x_max - diff.x_min,
            y: diff.y_max - diff.y_min,
        };
        const { ratio } = this._details;
        this.width = range.x * 100;
        this.height = range.y * 100 * (ratio || 1);
        this.width = Math.floor(this.width * 100);
        this.height = Math.floor(this.height * 100);
        this.points = points
            .reduce(
                (s, [x, y]) =>
                    `${s}${s ? ' ' : ''}${
                        (((x - diff.x_min) / range.x) * this.width) / 20
                    },${(((y - diff.y_min) / range.y) * this.height) / 20}`,
                ''
            )
            .replace(/NaN/g, '0');
        this.point_list = points.map(([x, y]) => [
            (((x - diff.x_min) / range.x) * this.width) / 20,
            (((y - diff.y_min) / range.y) * this.height) / 20,
        ]);
        this._cdr.detectChanges();
    }
}
