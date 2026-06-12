import {
    Component,
    ElementRef,
    afterNextRender,
    computed,
    inject,
    signal,
} from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { TranslatePipe } from './translate.pipe';

export interface MapRadiusData {
    message: string;
    radius: number;
    fill: string;
    stroke: string;
    last_seen?: number;
}

@Component({
    selector: '[map-radius]',
    template: `
        @if (show() && radius()) {
            <ng-container (window:resize)="updateRadius()">
                <div
                    radius
                    class="center rounded-full border-4 border-dashed"
                    [style.border-color]="stroke"
                    [style.background-color]="fill + '40'"
                    [style.width]="radius() * zoom() + 'px'"
                    [style.height]="radius() * zoom() + 'px'"
                ></div>
                @if (message && show_message()) {
                    <div
                        message
                        [style.top]="'-' + (radius() / 2) * zoom() + 'px'"
                        class="whitespace-no-wrap bg-base-100 absolute top-0 m-2 flex w-64 flex-col rounded-sm p-2 text-gray-700 shadow-sm"
                    >
                        {{ message }}
                        @if (last_seen()) {
                            <span class="text-xs">
                                {{ 'COMMON.LAST_UPDATE' | translate }}:
                                {{ last_seen_at() }}
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
    imports: [TranslatePipe],
})
export class MapRadiusComponent {
    private _details = inject<MapRadiusData>(MAP_FEATURE_DATA);
    private _el = inject<ElementRef<HTMLElement>>(ElementRef);

    public zoom = signal(1);

    /** Size of the area marked by this component */
    public radius = signal(this._details.radius || 10);
    /** Message to display above the pin */
    public readonly message = this._details.message;
    /** Fill colour for the pin SVG */
    public readonly fill = this._details.fill || '#e53935';
    /** Stroke colour for the pin SVG */
    public readonly stroke = this._details.stroke || '#e53935';

    public last_seen = signal(this._details.last_seen || 0);

    public last_seen_at = computed(() => {
        return formatDistanceToNow(this.last_seen() * 1000) + ' ago';
    });

    public show = signal(false);
    public show_message = signal(false);

    constructor() {
        afterNextRender(() => {
            this.updateRadius();
            setTimeout(() => this.show.set(true), 300);
            setTimeout(() => this.show_message.set(true), 1000);
        });
    }

    public updateRadius() {
        const box = this._el.nativeElement.getBoundingClientRect();
        if (!box.width) return setTimeout(() => this.updateRadius(), 300);
        this.radius.set(
            Math.max(64, (this._details.radius || 10) * (box.width || 10)),
        );
    }
}
