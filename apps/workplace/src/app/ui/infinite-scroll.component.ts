import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    OnDestroy,
} from '@angular/core';

@Component({
    selector: 'a-infinite-scroll',
    template: `
        <ng-content></ng-content>
        <div #iscrollend></div>
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
            }
            :host > div:last-child {
                height: 2px;
                width: 100%;
                background: transparent;
            }
        `,
    ],
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
    @Input() public options = {};
    @Output() public scrolled = new EventEmitter();
    @ViewChild('iscrollend', { static: false }) public anchor: ElementRef;

    private observer: IntersectionObserver;

    constructor(private host: ElementRef) {}

    get element() {
        return this.host.nativeElement;
    }

    public ngOnInit() {
        const options = {
            root: this.isHostScrollable() ? this.host.nativeElement : null,
            ...this.options,
        };

        this.observer = new IntersectionObserver(([entry]) => {
            entry.isIntersecting && this.scrolled.emit();
        }, options);

        setTimeout(() => this.observer.observe(this.anchor.nativeElement), 100);
    }

    private isHostScrollable() {
        const style = window.getComputedStyle(this.element);

        return (
            style.getPropertyValue('overflow') === 'auto' ||
            style.getPropertyValue('overflow-y') === 'scroll'
        );
    }

    public ngOnDestroy() {
        this.observer.disconnect();
    }
}
