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
                <app-icon class="text-5xl">image_not_supported</app-icon>
                <p>No images</p>
            </div>
            <button
                matRipple
                *ngIf="images?.length"
                class="opacity-0 hover:opacity-30 flex items-center justify-center absolute left-0 inset-y-0 w-1/3 bg-neutral text-white"
                [disabled]="offset === 0"
                (click)="offset = offset - 1"
            >
                <app-icon class="text-4xl">chevron_left</app-icon>
            </button>
            <button
                matRipple
                *ngIf="images?.length"
                class="opacity-0 hover:opacity-30 flex items-center justify-center absolute right-0 inset-y-0 w-1/3 bg-neutral text-white"
                [disabled]="offset >= images?.length - 1"
                (click)="offset = offset + 1"
            >
                <app-icon class="text-4xl">chevron_right</app-icon>
            </button>
            <div
                class="absolute bottom-1 left-1/2 -translate-x-1/2 text-sm opacity-30 space-x-2"
                *ngIf="images?.length"
            >
                <button
                    matRipple
                    [class.!bg-base-100]="offset === i"
                    *ngFor="let img of images; let i = index"
                    class="h-4 w-4 rounded-full bg-base-300 shadow"
                ></button>
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
        `,
    ],
})
export class ImageCarouselComponent {
    @Input() public images: string[] = [];

    public offset = 0;
}
