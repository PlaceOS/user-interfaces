import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'image-carousel',
    template: `
        <div class="relative flex h-full w-full overflow-hidden">
            <div
                image
                class="relative flex h-full min-w-full items-center justify-center overflow-hidden"
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
                class="relative flex h-full w-full flex-col items-center justify-center space-y-2 opacity-30"
                *ngIf="!images?.length"
            >
                <icon class="text-6xl">image_not_supported</icon>
                <p>{{ 'COMMON.IMAGES_EMPTY' | translate }}</p>
            </div>
            <button
                *ngIf="images?.length"
                class="absolute inset-y-0 left-0 flex w-1/3 items-center justify-center opacity-0 hover:opacity-100"
                [disabled]="offset === 0"
                (click)="offset = offset - 1"
            >
                <div
                    matRipple
                    class="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-base-300 bg-base-100 text-base-content shadow"
                >
                    <icon class="text-3xl">chevron_left</icon>
                </div>
            </button>
            <button
                *ngIf="images?.length"
                class="absolute inset-y-0 right-0 flex w-1/3 items-center justify-center text-white opacity-0 hover:opacity-100"
                [disabled]="offset >= images?.length - 1"
                (click)="offset = offset + 1"
            >
                <div
                    matRipple
                    class="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-base-300 bg-base-100 text-base-content shadow"
                >
                    <icon class="text-3xl">chevron_right</icon>
                </div>
            </button>
            <div
                class="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center space-x-2 text-sm"
                *ngIf="images?.length"
            >
                <button
                    matRipple
                    *ngFor="let img of images; let i = index"
                    (click)="offset = i"
                    class="flex h-4 w-4 items-center justify-center"
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
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        AuthenticatedImageDirective,
    ],
})
export class ImageCarouselComponent {
    @Input() public images: string[] = [];

    public offset = 0;
}
