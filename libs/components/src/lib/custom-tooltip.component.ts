import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import {
    Component,
    ElementRef,
    HostListener,
    Injectable,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    TemplateRef,
    Type,
    ViewChild,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';

@Injectable()
export class CustomTooltipData<T = any> {
    data: T;
    close: () => void;
    constructor(d) {
        this.data = d.data;
        this.close = d.close || (() => null);
    }
}

@Component({
    selector: '[customTooltip]',
    template: `
        <ng-content></ng-content>

        <ng-template cdk-portal>
            <div custom-tooltip class="relative print:hidden" [ngSwitch]="type">
                <ng-container *ngSwitchCase="'component'">
                    <ng-container
                        *ngComponentOutlet="content; injector: injector"
                    ></ng-container>
                </ng-container>
                <ng-container *ngSwitchCase="'html'">
                    <div [innerHTML]="content | sanitize"></div>
                </ng-container>
                <ng-container *ngSwitchDefault>
                    <ng-container
                        *ngTemplateOutlet="content; context: data"
                    ></ng-container>
                </ng-container>
            </div>
        </ng-template>
    `,
})
export class CustomTooltipComponent<T = any>
    extends AsyncHandler
    implements OnChanges, OnDestroy
{
    /** Horizontal position of the rendered overlay */
    @Input('xPosition') public x_pos: 'start' | 'center' | 'end';
    /** Vertical position of the rendered overlay */
    @Input('yPosition') public y_pos: 'top' | 'center' | 'bottom';
    /** Content to render in the tooltip */
    @Input() public content: TemplateRef<any> | Type<any> | string;
    /** Data associated with the tooltip content */
    @Input() public data: T;
    /** Whether tooltip has a backdrop */
    @Input() public backdrop = true;
    /** Whether tooltip has a backdrop */
    @Input() public hover = false;
    /** Delay time in milliseconds to close after hover */
    @Input() public delay = 0;
    /** Type of content to render */
    public type: 'template' | 'component' | 'html' = 'template';

    public injector: Injector;

    private _overlay_ref: OverlayRef = null;

    @ViewChild(CdkPortal) private _portal: CdkPortal;

    @HostListener('click') public readonly onClick = () => this.open();
    @HostListener('touchend') public readonly onTouch = () => this.open();
    @HostListener('mouseenter') public readonly onEnter = () =>
        this.hover ? this.open() : '';
    @HostListener('mouseleave') public readonly onLeave = () =>
        this.hover ? this.close() : '';

    constructor(
        private _element: ElementRef<HTMLElement>,
        private _overlay: Overlay,
        private _injector: Injector
    ) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this._updateInjector();
        if (
            this._overlay_ref &&
            (changes.x_pos || changes.y_pos || changes.content)
        ) {
            this.open();
        }
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this.close();
    }

    public open() {
        if (!this.content) return;
        this.timeout(
            'open',
            () => {
                if (this.hover && this.delay) {
                    this.timeout('onclose', () => this.close(), this.delay);
                }
                this._updateType();
                if (this._overlay_ref) this.close();
                if (!this._portal) return;
                const pos = this._element.nativeElement.getBoundingClientRect();
                const default_x = 'end';
                const default_y = 'top';
                this._overlay_ref = this._overlay.create({
                    hasBackdrop: !!this.backdrop && !this.hover,
                    positionStrategy: this._overlay
                        .position()
                        .flexibleConnectedTo(this._element)
                        .withPositions([
                            {
                                originX: this.x_pos || default_x,
                                originY:
                                    (this.y_pos === 'top'
                                        ? 'bottom'
                                        : this.y_pos == 'bottom'
                                        ? 'top'
                                        : this.y_pos) || default_y,
                                overlayX: this.x_pos || default_x,
                                overlayY: this.y_pos || default_y,
                            },
                        ]),
                });
                this._overlay_ref.attach(this._portal);
                if (this.backdrop) {
                    this.subscription(
                        'backdrop',
                        this._overlay_ref
                            .backdropClick()
                            .subscribe(() => this.close())
                    );
                }
            },
            50
        );
    }

    public close() {
        this.clearTimeout('open');
        if (this._overlay_ref) {
            this._overlay_ref.dispose();
            this._overlay_ref = null;
        }
    }

    private _updateType() {
        this.type =
            typeof this.content === 'string'
                ? 'html'
                : this.content instanceof TemplateRef
                ? 'template'
                : 'component';
    }

    private _updateInjector() {
        this.injector = Injector.create({
            providers: [
                {
                    provide: CustomTooltipData,
                    useValue: { data: this.data, close: () => this.close() },
                },
            ],
            parent: this._injector,
        });
    }
}
