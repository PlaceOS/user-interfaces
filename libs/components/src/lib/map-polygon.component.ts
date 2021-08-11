import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { BaseClass, HashMap } from '@placeos/common';
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

    ratio$?: Observable<number>;

    data$?: Observable<MapPolygonData>;
}

@Component({
    selector: '[map-polygon]',
    template: `
        <div
            polygon
            class="absolute w-full h-full transform -translate-x-1/2 -translate-y-1/2"
        >
            <svg
                [attr.viewBox]="
                    '0 0 ' + width + padding + ' ' + height + padding
                "
                [style.width]="width * (100 / scale) + '%'"
                [style.height]="height * (100 / scale) + '%'"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
            >
                <polygon
                    [attr.points]="points"
                    [style.fill]="fill"
                    [style.stroke]="stroke"
                />
                <circle
                    *ngFor="let point of point_list"
                    [attr.cx]="point[0] || 0"
                    [attr.cy]="point[1] || 0"
                    [attr.r]="4"
                    [style.stroke]="'#000'"
                    [style.fill]="'#fffd'"
                />
            </svg>
            <div
                text
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow text-white text-xl text-center whitespace-pre-line"
            >
                {{ name }}
            </div>
        </div>
    `,
    styles: [
        `
            polygon {
                stroke-width: 4;
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
export class MapPolygonComponent extends BaseClass implements OnInit {
    /** Message to display above the pin */
    public name = this._details.name;
    /** Fill colour for the pin SVG */
    public fill = `${this._details.color || '#e53935'}88`;
    /** Stroke colour for the pin SVG */
    public stroke = this._details.color || '#e53935';

    public padding = 32;

    public scale = 8;

    public offset_x = 0;
    public offset_y = 0;
    public width = 1;
    public height = 1;

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
        if (this._details.ratio$) {
            this.subscription(
                'ratio',
                this._details.ratio$.subscribe((_) => {
                    this._details.ratio = _;
                    this.processPoints(this._details.points);
                })
            );
        }
        this.processPoints(this._details.points);
    }

    public processPoints(points: [number, number][]) {
        const diff: HashMap<number> = points.reduce(
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
        this.offset_x = diff.x_min * 100;
        this.offset_y = diff.y_min * 100;
        const range = {
            x: diff.x_max - diff.x_min,
            y: diff.y_max - diff.y_min,
        };
        this.width = range.x * 100 * this.scale;
        this.height = range.y * 100 * (this._details?.ratio || 1) * this.scale;
        const edge_padding = this.padding / 2 + 8;
        this.width = Math.floor(this.width * 100) / 100;
        this.height = Math.floor(this.height * 100) / 100;
        this.points = points
            .reduce(
                (s, [x, y]) =>
                    `${s}${s ? ' ' : ''}${
                        ((x - diff.x_min) / range.x) * this.width + edge_padding
                    },${
                        ((y - diff.y_min) / range.y) * this.height +
                        edge_padding
                    }`,
                ''
            )
            .replace(/NaN/g, '0');
        this.point_list = points.map(([x, y]) => [
            ((x - diff.x_min) / range.x) * this.width + edge_padding,
            ((y - diff.y_min) / range.y) * this.height + edge_padding,
        ]);
        this.width = this.width + this.padding + 8;
        this.height = this.height + this.padding + 8;
        this._cdr.detectChanges();
    }
}
