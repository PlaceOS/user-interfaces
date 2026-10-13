import {
    Component,
    ElementRef,
    Signal,
    effect,
    inject,
    untracked,
    viewChild,
} from '@angular/core';
import { shiftColorTowards } from '@placeos/common';

import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';

const MAX_CANVAS_PIXELS = 16_000_000;
const MAX_CANVAS_DIMENSION = 8192;

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
    host: { class: 'block h-full w-full' },
    template: ` <canvas #canvas class="block h-full w-full"></canvas> `,
    styles: [],
})
export class MapCanvasComponent {
    private readonly _data = inject<MapPolygonData>(MAP_FEATURE_DATA);

    private readonly canvas_element =
        viewChild<ElementRef<HTMLCanvasElement>>('canvas');

    constructor() {
        effect((onCleanup) => {
            const canvas = this.canvas_element()?.nativeElement;
            if (!canvas || typeof ResizeObserver === 'undefined') return;
            const resize_observer = new ResizeObserver(() =>
                this._resizeCanvas(),
            );
            resize_observer.observe(canvas);
            untracked(() => this._resizeCanvas());
            onCleanup(() => resize_observer.disconnect());
        });
        effect(() => {
            const canvas = this.canvas_element();
            const polygons = this._data.polygons();
            if (!canvas) return;
            this._handleStateChange(polygons);
        });
    }

    private _resizeCanvas(): void {
        const canvas = this.canvas_element()?.nativeElement;
        if (!canvas?.clientWidth || !canvas.clientHeight) return;
        const pixel_ratio = Math.min(
            window.devicePixelRatio || 1,
            MAX_CANVAS_DIMENSION / canvas.clientWidth,
            MAX_CANVAS_DIMENSION / canvas.clientHeight,
            Math.sqrt(
                MAX_CANVAS_PIXELS / (canvas.clientWidth * canvas.clientHeight),
            ),
        );
        const width = Math.max(1, Math.floor(canvas.clientWidth * pixel_ratio));
        const height = Math.max(
            1,
            Math.floor(canvas.clientHeight * pixel_ratio),
        );
        if (canvas.width === width && canvas.height === height) return;
        canvas.width = width;
        canvas.height = height;
        this._handleStateChange(this._data.polygons());
    }

    private _handleStateChange(polygon_list: Polygon[]): void {
        const canvas = this.canvas_element().nativeElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const width = canvas.clientWidth || canvas.width;
        const height = canvas.clientHeight || canvas.height;
        ctx.setTransform(
            canvas.clientWidth ? canvas.width / canvas.clientWidth : 1,
            0,
            0,
            canvas.clientHeight ? canvas.height / canvas.clientHeight : 1,
            0,
            0,
        );
        ctx.clearRect(0, 0, width, height);
        polygon_list.forEach((poly) =>
            this._drawPolygon(ctx, poly, width, height),
        );
    }

    private _drawPolygon(
        ctx: CanvasRenderingContext2D,
        polygon: Polygon,
        width: number,
        height: number,
    ): void {
        const points = polygon.points;
        if (!points?.length) return;
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
