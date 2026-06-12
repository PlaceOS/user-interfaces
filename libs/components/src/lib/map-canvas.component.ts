import {
    Component,
    ElementRef,
    Signal,
    computed,
    effect,
    inject,
    signal,
    viewChild,
} from '@angular/core';
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
    draw_labels?: boolean;
    draw_points?: boolean;
    polygons: Signal<Polygon[]>;
}

@Component({
    selector: '[map-canvas]',
    template: `
        <canvas
            #canvas
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            [style.width]="width() * svg_ratio() * zoom() + '%'"
            [style.height]="width() * svg_ratio() * ratio() * zoom() + '%'"
        ></canvas>
    `,
    styles: [],
})
export class MapCanvasComponent {
    private _data = inject<MapPolygonData>(MAP_FEATURE_DATA);

    public zoom = signal(1);
    public ratio = signal(1);
    public svg_ratio = signal(1);
    public width = signal(10000);

    private readonly canvas_element =
        viewChild<ElementRef<HTMLCanvasElement>>('canvas');

    public readonly ratioed_height = computed(
        () => +(this.width() * this.ratio()).toFixed(2),
    );

    constructor() {
        effect(() => {
            const canvas = this.canvas_element();
            const polygons = this._data.polygons();
            if (!canvas) return;
            this._handleStateChange(polygons);
        });
    }

    private _handleStateChange(polygon_list: Polygon[]): void {
        const canvas = this.canvas_element().nativeElement;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        polygon_list.forEach((poly) => this._drawPolygon(poly));
    }

    private _drawPolygon(polygon: Polygon) {
        const points = polygon.points;
        if (!points?.length) return;
        const canvas = this.canvas_element().nativeElement;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        // Draw polygon
        ctx.fillStyle = polygon.color + '80';
        ctx.beginPath();
        ctx.moveTo(points[0][0] * width, points[0][1] * height);
        points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
        ctx.closePath();
        ctx.fill();
        // Draw Outline
        ctx.strokeStyle = shiftColorTowards(polygon.color, '#888888', 0.5);
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(points[0][0] * width, points[0][1] * height);
        points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
        ctx.closePath();
        ctx.stroke();
        // Draw Points
        if (this._data.draw_points !== false) {
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = polygon.color;
            ctx.lineWidth = 4;
            points.forEach(([x, y]) => {
                ctx.beginPath();
                ctx.arc(x * width, y * height, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            });
        }
        // Draw Text
        if (this._data.draw_labels !== false) {
            const center = points.reduce(
                (acc, [x, y]) => [acc[0] + x, acc[1] + y],
                [0, 0],
            );
            center[0] /= points.length;
            center[1] /= points.length;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#FFF';
            ctx.font = '32px sans-serif';
            ctx.fillText(
                polygon.name,
                center[0] * width + 1,
                center[1] * height + 2,
            );
            ctx.fillStyle = '#000';
            ctx.fillText(polygon.name, center[0] * width, center[1] * height);
        }
    }
}
