import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MAP_FEATURE_DATA } from './interactive-map.component';

export interface MapRadiusData {
    message: string;
    radius: number;
    fill: string;
    stroke: string;
}

@Component({
    selector: '[map-radius]',
    template: `
        <ng-container *ngIf="show">
            <div
                class="center border-4 rounded-full border-dashed"
                [style.border-color]="stroke"
                [style.background-color]="fill + '40'"
                [style.width]="radius * 100 + '%'"
                [style.height]="radius * 100 + '%'"
            ></div>
            <div
                *ngIf="message && show_message"
                name="message"
                [style.top]="'-' + radius * 100 + '%'"
                class="p-2 m-2 rounded bg-white text-gray-700 shadow absolute top-0 whitespace-no-wrap"
            >
                {{ message }}
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

            [name="message"] {
                transform: translateX(-50%);
            }

            div {
                animation: fade-in-top 1s;
            }

            @keyframes fade-in-top {
                0% {
                    opacity: 0;
                    transform: translate(-50%, -100%)
                }
                100% {
                    opacity: 1;
                    transform translate(-50%, 0%);
                }
            }
        `,
    ],
})
export class MapRadiusComponent implements OnInit {
    /** Message to display above the pin */
    public readonly message = this._details.message;
    /** Fill colour for the pin SVG */
    public readonly fill = this._details.fill || '#e53935';
    /** Fill colour for the pin SVG */
    public readonly radius = this._details.radius || 10;
    /** Stroke colour for the pin SVG */
    public readonly stroke = this._details.stroke || '#e53935';

    public show: boolean;
    public show_message: boolean;

    constructor(@Inject(MAP_FEATURE_DATA) private _details: MapRadiusData) {}

    public ngOnInit() {
        setTimeout(() => (this.show = true), 300);
        setTimeout(() => (this.show_message = true), 1000);
    }
}
