import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { Observable } from 'rxjs';

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
        @if (show && radius) {
            <ng-container (window:resize)="updateRadius()">
                <div
                    radius
                    class="center rounded-full border-4 border-dashed"
                    [style.border-color]="stroke"
                    [style.background-color]="fill + '40'"
                    [style.width]="radius * zoom + 'px'"
                    [style.height]="radius * zoom + 'px'"
                ></div>
                @if (message && show_message) {
                    <div
                        message
                        [style.top]="'-' + (radius / 2) * zoom + 'px'"
                        class="text-gray-700 whitespace-no-wrap absolute top-0 m-2 flex w-64 flex-col rounded bg-base-100 p-2 shadow"
                    >
                        {{ message }}
                        @if (last_seen) {
                            <span class="text-xs">
                                {{ 'COMMON.LAST_UPDATE' | translate }}:
                                {{ last_seen_at }}
                            </span>
                        }
                    </div>
                }
            </ng-container>
        }
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
    standalone: false,
})
export class MapRadiusComponent implements OnInit {
    private _details = inject<MapRadiusData>(MAP_FEATURE_DATA);
    private _el = inject<ElementRef<HTMLElement>>(ElementRef);

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

    constructor() {
        this._details.zoom$?.subscribe((v) =>
            Math.max(0.5, (this.zoom = v || 1)),
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
            (this._details.radius || 10) * (box.width || 10),
        );
    }
}
