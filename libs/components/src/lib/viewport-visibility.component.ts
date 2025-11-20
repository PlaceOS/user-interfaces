import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    inject,
    input,
    model,
} from '@angular/core';

@Component({
    selector: '[viewport-only]',
    template: `
        @if (visible()) {
            <ng-content />
        }
    `,
    imports: [CommonModule],
})
export class ViewportVisibilityComponent implements OnInit, OnDestroy {
    private _element = inject(ElementRef);
    private _observer: IntersectionObserver | null = null;

    /** Threshold for intersection (0.0 to 1.0) */
    public readonly threshold = input<number>(0);
    /** Root margin for intersection observer */
    public readonly root_margin = input<string>('32px');
    /** Whether to keep observing after first intersection */
    public readonly continuous = input<boolean>(true);
    /** Whether the element is inside the viewport */
    public readonly visible = model<boolean>(false);

    ngOnInit() {
        this._setupObserver();
    }

    ngOnDestroy() {
        this._cleanupObserver();
    }

    private _setupObserver() {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: this.root_margin(),
            threshold: this.threshold(),
        };

        this._observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const is_visible = entry.isIntersecting;
                this.visible.set(is_visible);
                console.log('Visible:', is_visible);

                // If not continuous, disconnect after first intersection
                if (!this.continuous() && is_visible) {
                    this._cleanupObserver();
                }
            });
        }, options);
        // Start observing
        this._observer.observe(this._element.nativeElement);
    }

    private _cleanupObserver() {
        if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
        }
    }
}
