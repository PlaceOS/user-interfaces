import { Component, computed, input, linkedSignal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { AuthenticatedImageDirective } from './authenticated-image.directive';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

/** Distance in pixels a touch must move to count as a swipe */
const SWIPE_DISTANCE = 50;

@Component({
    selector: 'image-carousel',
    template: `
        <div
            carousel
            class="relative flex h-full w-full overflow-hidden"
            (pointerdown)="onPointerDown($event)"
            (pointerup)="onPointerUp($event)"
            (pointercancel)="onPointerCancel()"
        >
            @for (image of images(); track image) {
                <div
                    image
                    class="relative flex h-full min-w-full items-center justify-center overflow-hidden"
                    [style.transform]="offset_transform()"
                >
                    @if (image) {
                        <img
                            auth
                            alt=""
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
                    class="absolute inset-y-0 left-0 flex w-1/3 items-center justify-center opacity-0 hover:opacity-100 focus-visible:opacity-100"
                    [attr.aria-label]="'COMMON.PREVIOUS' | translate"
                    [attr.aria-disabled]="offset() === 0"
                    (click)="previous()"
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
                    class="absolute inset-y-0 right-0 flex w-1/3 items-center justify-center text-white opacity-0 hover:opacity-100 focus-visible:opacity-100"
                    [attr.aria-label]="'COMMON.NEXT' | translate"
                    [attr.aria-disabled]="offset() >= images()?.length - 1"
                    (click)="next()"
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
                            [attr.aria-label]="i + 1 + ' / ' + images().length"
                            [attr.aria-current]="offset() === i"
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

            [carousel] {
                /* Horizontal swipes go to the carousel, vertical ones scroll */
                touch-action: pan-y;
            }

            [image] {
                transition: transform 300ms;
            }

            @media (prefers-reduced-motion: reduce) {
                [image] {
                    transition: none;
                }
            }

            /* aria-disabled keeps focus on the button at the first or last image */
            button[aria-disabled='true'] {
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

    /** Index of the image in view. Goes back to the first for new images. */
    public readonly offset = linkedSignal({
        source: this.images,
        computation: () => 0,
    });
    public readonly offset_transform = computed(
        () => `translateX(-${this.offset() * 100}%)`,
    );
    /** X position where a touch or pen drag started */
    private _swipe_start: number | null = null;

    /** Show the image before this one. Stays on the first image. */
    public previous() {
        this.offset.update((value) => Math.max(0, value - 1));
    }

    /** Show the image after this one. Stays on the last image. */
    public next() {
        const last = (this.images()?.length || 1) - 1;
        this.offset.update((value) => Math.min(last, value + 1));
    }

    public onPointerDown(event: PointerEvent) {
        // A mouse uses the buttons. A mouse drag also drags the image.
        if (event.pointerType === 'mouse') return;
        this._swipe_start = event.clientX;
    }

    /** Change the image when a touch or pen moves far enough sideways */
    public onPointerUp(event: PointerEvent) {
        if (this._swipe_start === null) return;
        const distance = event.clientX - this._swipe_start;
        this._swipe_start = null;
        if (Math.abs(distance) < SWIPE_DISTANCE) return;
        if (distance < 0) this.next();
        else this.previous();
    }

    public onPointerCancel() {
        this._swipe_start = null;
    }
}
