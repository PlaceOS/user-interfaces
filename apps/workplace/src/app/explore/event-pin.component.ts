import { Component, inject } from '@angular/core';
import { MAP_FEATURE_DATA } from 'libs/common/src/lib/types';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: `event-map-pin`,
    template: `
        <div
            class="pointer-events-auto absolute bottom-0 left-1/2 -translate-x-1/2"
        >
            <svg
                width="48"
                height="64"
                viewBox="0 0 48 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter
                        id="event-pin-shadow"
                        x="-4"
                        y="0"
                        width="56"
                        height="72"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feDropShadow
                            dx="0"
                            dy="2"
                            stdDeviation="2"
                            flood-opacity="0.3"
                        />
                    </filter>
                </defs>
                <!-- Diamond shape: rounded top/left/right corners, pointed bottom -->
                <g filter="url(#event-pin-shadow)">
                    <path
                        d="M24 4
                           C26 4 28 5 30 7
                           L42 19
                           C44 21 45 23 45 25
                           C45 27 44 29 42 31
                           L28 45
                           C26 47 25 49 24 52
                           C23 49 22 47 20 45
                           L6 31
                           C4 29 3 27 3 25
                           C3 23 4 21 6 19
                           L18 7
                           C20 5 22 4 24 4
                           Z"
                        [attr.fill]="fill"
                        [attr.stroke]="stroke"
                        stroke-width="2"
                    />
                </g>
            </svg>
            <div
                class="absolute left-0 top-0 flex h-[52px] w-full items-center justify-center"
            >
                <icon class="text-2xl" [style.color]="icon_color">
                    calendar_month
                </icon>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [IconComponent],
})
export class EventPinComponent {
    private _data = inject(MAP_FEATURE_DATA);

    public get fill() {
        return this._data.fill || 'var(--secondary)';
    }

    public get stroke() {
        return this._data.stroke || 'var(--secondary-focus)';
    }

    public get icon_color() {
        return this._data.icon_color || 'var(--secondary-content)';
    }
}
