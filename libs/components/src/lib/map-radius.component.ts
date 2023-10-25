import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { Observable } from 'rxjs';
import { MAP_FEATURE_DATA } from './interactive-map.component';

export interface MapRadiusData {
    message: string;
    radius: number;
    fill: string;
    stroke: string;
    last_seen?: number;
    zoom$: Observable<number>;
}

@Component({
    selector: '[map-radius]',
    template: `
        <ng-container *ngIf="show && radius" (window:resize)="updateRadius()">
            <div
                radius
                class="center border-4 rounded-full border-dashed"
                [style.border-color]="stroke"
                [style.background-color]="fill + '40'"
                [style.width]="radius * zoom + 'px'"
                [style.height]="radius * zoom + 'px'"
            ></div>
            <div
                *ngIf="message && show_message"
                message
                [style.top]="'-' + (radius / 2) * zoom + 'px'"
                class="p-2 m-2 rounded bg-base-100 text-gray-700 shadow absolute top-0 whitespace-no-wrap flex flex-col w-64"
            >
                {{ message }}
                <span *ngIf="last_seen" class="text-xs">
                    Last updated: {{ last_seen_at }}
                </span>
            </div>
        </ng-container>
    `,
    styles: [
        `
            :host {
                position: absolute;
                height: 100%;
                width: 100%;
            }

            [message] {
                transform: translate(-50%, -120%);
                animation: fade-in-top 1s;
            }

            @keyframes fade-in-top {
                0% {
                    opacity: 0;
                    transform: translate(-50%, -220%);
                }
                100% {
                    opacity: 1;
                    transform: translate(-50%, -120%);
                }
            }
        `,
    ],
})
export class MapRadiusComponent implements OnInit {
    public zoom = 1;
    /** Size of the area marked by this component */
    public radius = this._details.radius || 10;
    /** Message to display above the pin */
    public readonly message = this._details.message;
    /** Fill colour for the pin SVG */
    public readonly fill = this._details.fill || '#e53935';
    /** Stroke colour for the pin SVG */
    public readonly stroke = this._details.stroke || '#e53935';

    public readonly last_seen: number = this._details.last_seen || 0;

    public get last_seen_at() {
        return formatDistanceToNow(this.last_seen * 1000) + ' ago';
    }

    public show: boolean;
    public show_message: boolean;

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: MapRadiusData,
        private _el: ElementRef<HTMLElement>
    ) {
        this._details.zoom$?.subscribe((v) =>
            Math.max(0.5, (this.zoom = v || 1))
        );
    }

    public ngOnInit() {
        setTimeout(() => (this.show = true), 300);
        setTimeout(() => (this.show_message = true), 1000);
    }

    public ngAfterViewInit() {
        this.updateRadius();
    }

    public updateRadius() {
        const box = this._el.nativeElement.getBoundingClientRect();
        if (!box.width) return setTimeout(() => this.updateRadius(), 300);
        this.radius = Math.max(
            64,
            (this._details.radius || 10) * (box.width || 10)
        );
    }
}
