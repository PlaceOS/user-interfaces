import { Component, OnInit, inject, signal } from '@angular/core';

import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';

export interface MapPinData {
    message: string;
    fill: string;
    stroke: string;
    action?: () => void;
}

@Component({
    selector: '[map-pin]',
    template: `
        <div
            class="-z-1 absolute bottom-1/2 left-1/2 flex w-[24rem] -translate-x-1/2 flex-col items-center"
        >
            @if (message && show_message()) {
                <div
                    name="message"
                    class="text-gray-700 m-2 rounded bg-base-100 p-2 shadow"
                >
                    {{ message }}
                </div>
            }
            @if (show()) {
                <svg
                    name="pin"
                    viewBox="0 0 380 560"
                    class="w-8"
                    [class.pointer-events-auto]="action"
                    (click)="action()"
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
            }
        </div>
    `,
    styles: [
        `
            [name='message'],
            [name='pin'] {
                animation: fade-in-top 1s;
            }

            @keyframes fade-in-top {
                0% {
                    opacity: 0;
                    transform: translateY(-100%);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0%);
                }
            }
        `,
    ],
    standalone: false,
})
export class MapPinComponent implements OnInit {
    private _details = inject<MapPinData>(MAP_FEATURE_DATA);

    /** Message to display above the pin */
    public readonly message = this._details.message;
    /** Fill colour for the pin SVG */
    public readonly fill = this._details.fill || '#e53935';
    /** Stroke colour for the pin SVG */
    public readonly stroke = this._details.stroke || '#fff';
    /** Action to perform when clicking pin */
    public readonly action = this._details.action || null;

    public show = signal(false);
    public show_message = signal(false);

    public ngOnInit() {
        setTimeout(() => this.show.set(true), 300);
        setTimeout(() => this.show_message.set(true), 1000);
    }
}
