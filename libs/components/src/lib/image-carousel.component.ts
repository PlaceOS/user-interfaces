import { Component, Input } from '@angular/core';

@Component({
    selector: 'image-carousel',
    template: `
        <div class="h-full w-full relative overflow-hidden flex">
            <div
                image
                class="h-full min-w-full relative flex items-center justify-center overflow-hidden"
                *ngFor="let image of images"
                [style.transform]="'translateX(-' + offset * 100 + '%)'"
            >
                <img
                    auth
                    class="h-full object-contain"
                    *ngIf="image"
                    [source]="image.url || image"
                />
            </div>
            <div
                class="h-full w-full relative flex flex-col items-center justify-center opacity-30 space-y-2"
                *ngIf="!images?.length"
            >
                <app-icon class="text-6xl">image_not_supported</app-icon>
                <p>{{ 'COMMON.IMAGES_EMPTY' | translate }}</p>
            </div>
            <button
                *ngIf="images?.length"
                class="opacity-0 hover:opacity-100 flex items-center justify-center absolute left-0 inset-y-0 w-1/3"
                [disabled]="offset === 0"
                (click)="offset = offset - 1"
            >
                <div
                    matRipple
                    class=" h-10 w-10 absolute top-1/2 left-4 -translate-y-1/2 bg-base-100 text-base-content rounded-full border border-base-300 shadow"
                >
                    <app-icon class="text-3xl">chevron_left</app-icon>
                </div>
            </button>
            <button
                *ngIf="images?.length"
                class="opacity-0 hover:opacity-100 flex items-center justify-center absolute right-0 inset-y-0 w-1/3 text-white"
                [disabled]="offset >= images?.length - 1"
                (click)="offset = offset + 1"
            >
                <div
                    matRipple
                    class=" h-10 w-10 absolute top-1/2 right-4 -translate-y-1/2 bg-base-100 text-base-content rounded-full border border-base-300 shadow"
                >
                    <app-icon class="text-3xl">chevron_right</app-icon>
                </div>
            </button>
            <div
                class="absolute bottom-2 left-1/2 flex items-center -translate-x-1/2 text-sm space-x-2"
                *ngIf="images?.length"
            >
                <button
                    matRipple
                    *ngFor="let img of images; let i = index"
                    (click)="offset = i"
                    class="h-4 w-4 flex items-center justify-center"
                >
                    <div
                        class="rounded-full bg-base-100 shadow transition-all"
                        [class.opacity-30]="offset !== i"
                        [class.h-2]="offset !== i"
                        [class.w-2]="offset !== i"
                        [class.h-4]="offset === i"
                        [class.w-4]="offset === i"
                        [class.opacity-80]="offset === i"
                    ></div>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
                width: 100%;
            }

            [image] {
                transition: transform 300ms;
            }

            button[disabled] {
                pointer-events: none;
            }
        `,
    ],
})
export class ImageCarouselComponent {
    @Input() public images: string[] = [];

    public offset = 0;
}
