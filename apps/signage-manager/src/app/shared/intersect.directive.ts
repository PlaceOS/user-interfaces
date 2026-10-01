import {
    AfterViewInit,
    Directive,
    ElementRef,
    inject,
    OnDestroy,
    output,
} from '@angular/core';

/** Most ancestors checked for a scroll container, to bound the walk */
const MAX_SCROLL_PARENT_DEPTH = 50;

/**
 * Nearest ancestor that scrolls its content, or null for the viewport. The
 * observer root must be this element: a root margin only grows the root, and
 * a scroll container clips its content to its own box.
 */
function scrollParent(element: HTMLElement): HTMLElement | null {
    let parent = element.parentElement;
    for (let depth = 0; parent && depth < MAX_SCROLL_PARENT_DEPTH; depth++) {
        const { overflowY } = getComputedStyle(parent);
        if (overflowY === 'auto' || overflowY === 'scroll') return parent;
        parent = parent.parentElement;
    }
    return null;
}

/**
 * Emits `intersect` when the host element scrolls into view, or comes within
 * 300px of it. Used as a sentinel at the bottom of a list to trigger loading
 * the next page of items.
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
            { root: scrollParent(this._el.nativeElement), rootMargin: '300px' },
        );
        this._observer.observe(this._el.nativeElement);
    }

    public ngOnDestroy() {
        this._observer?.disconnect();
    }
}
