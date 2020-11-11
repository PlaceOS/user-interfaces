import { Component, ElementRef, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@user-interfaces/components';
import { formatDistanceToNow } from 'date-fns';

export interface DeviceInfoData {
    mac: string;
    variance: number;
    last_seen: number;
}

@Component({
    selector: 'explore-device-info',
    template: `
        <div
            name="radius"
            class="radius absolute center bg-blue-600 bg-opacity-25 border-4 border-dashed border-blue-600 rounded-full"
            [style]="'height: ' + diameter + '%; width: ' + diameter + '%;'"
        ></div>
        <div
            name="dot"
            class="h-2 w-2 absolute center rounded-full bg-blue-800 pointer-events-auto"
        ></div>
        <div
            name="device-info"
            [class]="
                'absolute rounded bg-white p-4 top-0 left-0 shadow pointer-events-none ' +
                x_pos +
                ' ' +
                y_pos
            "
        >
            <div class="arrow"></div>
            <div class="details">
                <p>MAC: {{ mac }}</p>
                <p>Variance: {{ variance }}</p>
                <p>Last Seen: {{ last_seen }}</p>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                pointer-events: auto;
            }

            :host > [name='dot'] {
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
            }

            :host:hover > [name='device-info'],
            :host:hover > [name='radius'] {
                opacity: 1;
            }

            [name='radius'] {
                opacity: 0;
                transition: opacity 200ms;
                pointer-events: none;
            }

            [name='device-info'] {
                opacity: 0;
                transition: opacity 200ms;
                width: 16rem;
                z-index: 999;
                pointer-events: none;
            }
        `,
    ],
})
export class ExploreDeviceInfoComponent {
    /** Mac Address of the device */
    public readonly mac = this._details.mac;
    /** Accuracy of the location data */
    public readonly variance = this._details.variance.toFixed(2);

    public readonly diameter = this._details.variance * 100;
    /** Time of the last update */
    public get last_seen() {
        return formatDistanceToNow(new Date(this._details.last_seen * 1000), {
            addSuffix: true,
        });
    }

    public y_pos: 'top' | 'bottom';

    public x_pos: 'left' | 'right';

    constructor(
        @Inject(MAP_FEATURE_DATA) private _details: DeviceInfoData,
        private _element: ElementRef<HTMLElement>
    ) {}

    public ngOnInit(tries: number = 0) {
        if (tries > 10) return;
        setTimeout(() => {
            const parent = this._element.nativeElement.parentElement
                ?.parentElement;
            if (!parent) return this.ngOnInit(++tries);
            const position = {
                y: parseInt(parent.style.top, 10) / 100,
                x: parseInt(parent.style.left, 10) / 100,
            };
            this.y_pos = position.y >= 0.5 ? 'bottom' : 'top';
            this.x_pos = position.x >= 0.5 ? 'right' : 'left';
        }, 200);
    }
}
