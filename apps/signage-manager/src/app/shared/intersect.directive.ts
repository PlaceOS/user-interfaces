import {
    AfterViewInit,
    Directive,
    ElementRef,
    inject,
    OnDestroy,
    output,
} from '@angular/core';

/**
 * Emits `intersect` when the host element scrolls into view. Used as a sentinel
 * at the bottom of a list to trigger loading the next page of items.
 */
@Directive({
    selector: '[intersect]',
})
export class IntersectDirective implements AfterViewInit, OnDestroy {
    private readonly _el = inject(ElementRef<HTMLElement>);
    public readonly intersect = output<void>();
    private _observer?: IntersectionObserver;

    public ngAfterViewInit() {
        this._observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    this.intersect.emit();
                }
            },
            { rootMargin: '300px' },
        );
        this._observer.observe(this._el.nativeElement);
    }

    public ngOnDestroy() {
        this._observer?.disconnect();
    }
}
