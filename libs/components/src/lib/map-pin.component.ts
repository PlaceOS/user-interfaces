import { Component, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from './interactive-map.component';

export interface MapPinData {
    message: string;
    fill: string;
    stroke: string;
}

@Component({
    selector: '[map-pin]',
    template: `
        <ng-container *ngIf="show">
        <div *ngIf="message && show_message" class="p-2 m-2 rounded bg-white text-gray-700 shadow">
            {{ message }}
        </div>
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 380 560"
            enable-background="new 0 0 380 560"
            xml:space="preserve"
        >
            <g>
                <path
                    [style.fill]="fill"
                    [style.stroke]="stroke"
                    stroke-width="25"
                    d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9
            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8
            c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"
                />
            </g>
        </svg>
</ng-container>
    `,
    styles: [
        `
            :host {
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 24rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                transform: translateX(-50%);
                z-index: -1;
            }

            div {
                animation: fade-in-top 1s;
            }

            svg {
                width: 2rem;
                animation: fade-in-top 1s;
            }

            @keyframes fade-in-top {
                0% {
                    opacity: 0;
                    transform: translateY(-100%)
                }
                100% {
                    opacity: 1;
                    transform translateY(0%);
                }
            }
        `,
    ],
})
export class MapPinComponent {
    /** Message to display above the pin */
    public readonly message = this._details.message;
    /** Fill colour for the pin SVG */
    public readonly fill = this._details.fill || '#e53935';
    /** Stroke colour for the pin SVG */
    public readonly stroke = this._details.stroke || '#fff';

    public show: boolean;
    public show_message: boolean;

    constructor(@Inject(MAP_FEATURE_DATA) private _details: MapPinData) {}

    public ngOnInit() {
        setTimeout(() => this.show = true, 300);
        setTimeout(() => this.show_message = true, 1000);
    }
}
