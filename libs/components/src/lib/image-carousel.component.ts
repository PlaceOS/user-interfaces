import { Component, computed, input, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'image-carousel',
    template: `
        <div class="relative flex h-full w-full overflow-hidden">
            @for (image of images(); track image) {
                <div
                    image
                    class="relative flex h-full min-w-full items-center justify-center overflow-hidden"
                    [style.transform]="offset_transform()"
                >
                    @if (image) {
                        <img
                            auth
                            class="h-full object-contain"
                            [source]="$any(image)?.url || image"
                        />
                    }
                </div>
            }
            @if (!images()?.length) {
                <div
                    class="relative flex h-full w-full flex-col items-center justify-center space-y-2 opacity-30"
                >
                    <icon class="text-6xl">image</icon>
                    <p>{{ 'COMMON.IMAGES_EMPTY' | translate }}</p>
                </div>
            }
            @if (images()?.length) {
                <button
                    class="absolute inset-y-0 left-0 flex w-1/3 items-center justify-center opacity-0 hover:opacity-100"
                    [disabled]="offset() === 0"
                    (click)="offset.update((value) => value - 1)"
                >
                    <div
                        matRipple
                        class="border-base-300 bg-base-100 text-base-content absolute top-1/2 left-4 h-10 w-10 -translate-y-1/2 rounded-full border shadow-sm"
                    >
                        <icon class="text-3xl">chevron_left</icon>
                    </div>
                </button>
            }
            @if (images()?.length) {
                <button
                    class="absolute inset-y-0 right-0 flex w-1/3 items-center justify-center text-white opacity-0 hover:opacity-100"
                    [disabled]="offset() >= images()?.length - 1"
                    (click)="offset.update((value) => value + 1)"
                >
                    <div
                        matRipple
                        class="border-base-300 bg-base-100 text-base-content absolute top-1/2 right-4 h-10 w-10 -translate-y-1/2 rounded-full border shadow-sm"
                    >
                        <icon class="text-3xl">chevron_right</icon>
                    </div>
                </button>
            }
            @if (images()?.length) {
                <div
                    class="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center space-x-2 text-sm"
                >
                    @for (img of images(); track img; let i = $index) {
                        <button
                            matRipple
                            (click)="offset.set(i)"
                            class="flex h-4 w-4 items-center justify-center"
                        >
                            <div
                                class="bg-base-100 rounded-full shadow-sm transition-all"
                                [class.opacity-30]="offset() !== i"
                                [class.h-2]="offset() !== i"
                                [class.w-2]="offset() !== i"
                                [class.h-4]="offset() === i"
                                [class.w-4]="offset() === i"
                                [class.opacity-80]="offset() === i"
                            ></div>
                        </button>
                    }
                </div>
            }
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
        MatRippleModule,
        TranslatePipe,
        AuthenticatedImageDirective,
        IconComponent,
    ],
})
export class ImageCarouselComponent {
    public readonly images = input<readonly string[]>([]);

    public readonly offset = signal(0);
    public readonly offset_transform = computed(
        () => `translateX(-${this.offset() * 100}%)`,
    );
}
