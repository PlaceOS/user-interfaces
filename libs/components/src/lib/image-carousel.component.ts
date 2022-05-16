import { Component, Input } from '@angular/core';

@Component({
    selector: 'image-carousel',
    template: `
        <div class="h-full w-full relative overflow-hidden flex">
            <div
                image
                class="h-full min-w-full relative flex items-center justify-center p-8"
                *ngFor="let image of images"
                [style.transform]="'translateX(-' + offset * 100 + '%)'"
            >
                <img class="h-full object-contain" *ngIf="image" [src]="image.url || image" />
            </div>
            <div
                class="h-full w-full relative flex items-center justify-center opacity-30"
                *ngIf="!images?.length"
            >
                <p>No Images for Asset</p>
            </div>
            <button
                mat-icon-button
                class="text-secondary border border-solid border-secondary absolute top-1/2 left-2 -translate-y-1/2 bg-white"
                [disabled]="offset === 0"
                (click)="offset = offset - 1"
            >
                <app-icon>chevron_left</app-icon>
            </button>
            <button
                mat-icon-button
                class="text-secondary border border-solid border-secondary absolute top-1/2 right-2 -translate-y-1/2 bg-white"
                [disabled]="offset >= images?.length - 1"
                (click)="offset = offset + 1"
            >
                <app-icon>chevron_right</app-icon>
            </button>
            <div class="absolute bottom-1 left-1/2 -translate-x-1/2 text-sm opacity-30" *ngIf="images?.length">
                {{ offset + 1 }} / {{ images.length }}
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
