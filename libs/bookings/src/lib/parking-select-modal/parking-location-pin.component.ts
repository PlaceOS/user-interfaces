import { Component, Inject } from '@angular/core';
import { MAP_FEATURE_DATA } from '@placeos/components';

@Component({
    selector: 'parking-space-location-pin',
    template: `
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
            <svg
                width="66"
                height="80"
                viewBox="0 0 66 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_1065_10313)">
                    <path
                        d="M19.724 53.0408C25.0871 60.3435 30.5582 65.8583 31.0184 66.3178C31.4558 66.755 32.0489 67.0007 32.6674 67.0008H32.6678C33.2863 67.0007 33.8795 66.755 34.3169 66.3178C34.7771 65.8583 40.2481 60.3435 45.6112 53.0408C48.2928 49.3894 50.963 45.2701 52.9663 41.0957C54.9629 36.935 56.3331 32.6459 56.3342 28.6724C56.364 25.5564 55.7725 22.4657 54.5941 19.5809C53.415 16.6946 51.6722 14.0724 49.4675 11.8677C47.2629 9.66308 44.6407 7.92024 41.7544 6.74121C38.8711 5.5634 35.782 4.97184 32.6676 5.00103C29.5533 4.97184 26.4642 5.5634 23.5809 6.74121C20.6946 7.92024 18.0724 9.66308 15.8677 11.8677C13.6631 14.0724 11.9202 16.6946 10.7412 19.5809C9.56278 22.4657 8.97122 25.5565 9.00108 28.6726C9.0022 32.646 10.3724 36.9351 12.369 41.0957C14.3723 45.2701 17.0425 49.3894 19.724 53.0408Z"
                        fill="#309251"
                        stroke="#0B421D"
                        stroke-width="2"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_1065_10313"
                        x="0"
                        y="0"
                        width="65.3353"
                        height="80.001"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0196078 0 0 0 0 0.109804 0 0 0 0 0.172549 0 0 0 0.2 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1065_10313"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1065_10313"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
            <div
                class="absolute top-0 left-0 w-full h-3/4 flex items-center justify-center"
            >
                <div
                    class="relative z-10 h-4 w-4 rounded-full bg-base-100 border-2 border-[#0B421D]"
                    *ngIf="!selected"
                ></div>
                <app-icon
                    class="relative text-white z-10 text-2xl"
                    *ngIf="selected"
                >
                    done
                </app-icon>
            </div>
        </div>
    `,
    styles: [],
})
export class ParkingSpaceLocationPinComponent {
    public get selected() {
        return this._data.selected === true;
    }
    constructor(@Inject(MAP_FEATURE_DATA) private _data: any) {}
}
