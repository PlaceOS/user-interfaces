import {
    Directive,
    ElementRef,
    OnDestroy,
    OnInit,
    inject,
    signal,
} from '@angular/core';

/**
 * Directive that loads/unloads images based on viewport visibility.
 * Images are only loaded when visible in the viewport and unloaded when out of view.
 */
@Directive({
    selector: 'img[vp],img[viewport]',
    standalone: true,
})
export class ViewportImageDirective implements OnInit, OnDestroy {
    private readonly _el = inject(ElementRef);
    private _observer?: IntersectionObserver;

    public readonly source = signal('');

    public ngOnInit() {
        this._observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const img = entry.target as HTMLImageElement;
                    if (entry.isIntersecting) {
                        // Load image when entering viewport
                        if (this.source() && !img.src) {
                            img.src = this.source();
                        }
                    } else {
                        // Unload image when leaving viewport
                        img.src = '';
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading slightly before entering viewport
            },
        );

        this._observer.observe(this._el.nativeElement);
    }

    public ngOnDestroy() {
        if (this._observer) {
            this._observer.disconnect();
        }
    }
}
