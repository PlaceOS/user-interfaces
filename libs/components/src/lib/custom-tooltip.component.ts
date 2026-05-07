import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    Injectable,
    Injector,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    TemplateRef,
    Type,
    ViewContainerRef,
    computed,
    effect,
    inject,
    input,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { SanitizePipe } from './sanitise.pipe';

@Injectable()
export class CustomTooltipData<T = any> {
    data: T;
    close: () => void;
}

@Component({
    selector: '[customTooltip]',
    template: `
        <ng-content />
        <ng-template #portal_content>
            <div custom-tooltip class="relative print:hidden">
                @switch (type()) {
                    @case ('component') {
                        <ng-container
                            *ngComponentOutlet="component(); injector: injector"
                        ></ng-container>
                    }
                    @case ('html') {
                        <div [innerHTML]="html() | sanitize"></div>
                    }
                    @default {
                        <ng-container
                            *ngTemplateOutlet="template(); context: data()"
                        ></ng-container>
                    }
                }
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                pointer-events: auto !important;
            }
        `,
    ],
    imports: [CommonModule, SanitizePipe],
})
export class CustomTooltipComponent<T = any>
    extends AsyncHandler
    implements OnChanges, OnDestroy, OnInit
{
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private _overlay = inject(Overlay);
    private _injector = inject(Injector);
    private _view_container_ref = inject(ViewContainerRef);

    /** Horizontal position of the rendered overlay */
    public readonly x_pos = input<'start' | 'center' | 'end'>('end', {
        alias: 'xPosition',
    });
    /** Vertical position of the rendered overlay */
    public readonly y_pos = input<'top' | 'center' | 'bottom'>('top', {
        alias: 'yPosition',
    });
    /** Content to render in the tooltip */
    public readonly content = input<TemplateRef<any> | Type<any> | string>(
        undefined,
    );
    /** Data associated with the tooltip content */
    public readonly data = input<T>(undefined);
    /** Whether tooltip has a backdrop */
    public readonly backdrop = input(true);
    /** Whether tooltip has a backdrop */
    public readonly hover = input(false);
    /** Delay time in milliseconds to close after hover */
    public readonly delay = input(0);
    /** Type of content to render */
    public readonly type = computed(() =>
        this.content() instanceof TemplateRef
            ? 'template'
            : this.content() instanceof Type
              ? 'component'
              : 'html',
    );

    public readonly template = computed(() => {
        return this.content() as TemplateRef<any>;
    });

    public readonly html = computed(() => {
        return this.content() as string;
    });

    public readonly component = computed(() => {
        return this.content() as Type<any>;
    });

    public injector: Injector;

    private _overlay_ref: OverlayRef = null;

    private readonly _portal_content = viewChild.required('portal_content', {
        read: TemplateRef,
    });

    private _update_injector = effect(() => {
        this.injector = Injector.create({
            providers: [
                {
                    provide: CustomTooltipData,
                    useValue: { data: this.data(), close: () => this.close() },
                },
            ],
            parent: this._injector,
        });
    });

    public ngOnInit(): void {
        const open = () => (!this.hover() ? this.open() : '');
        const hover_open = (event: MouseEvent | PointerEvent) =>
            this._canOpenHoverTooltip(event) ? this.open() : '';
        const hover_close = (event: MouseEvent | PointerEvent) =>
            this._canOpenHoverTooltip(event) ? this.close() : '';
        this._element.nativeElement.addEventListener('click', open);
        this._element.nativeElement.addEventListener('touchend', open);
        this._element.nativeElement.addEventListener('pointerenter', hover_open);
        this._element.nativeElement.addEventListener('pointerleave', hover_close);
        this.subscription('click', () =>
            this._element.nativeElement.removeEventListener('click', open),
        );
        this.subscription('touchend', () =>
            this._element.nativeElement.removeEventListener('touchend', open),
        );
        this.subscription('pointerenter', () =>
            this._element.nativeElement.removeEventListener(
                'pointerenter',
                hover_open,
            ),
        );
        this.subscription('pointerleave', () =>
            this._element.nativeElement.removeEventListener(
                'pointerleave',
                hover_close,
            ),
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
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
        if (!this.content()) return;
        this.timeout(
            'open',
            () => {
                const hover = this.hover();
                const delay = this.delay();
                if (hover && delay) {
                    this.timeout('onclose', () => this.close(), delay);
                }
                if (this._overlay_ref) this.close();
                const portal = new TemplatePortal(
                    this._portal_content(),
                    this._view_container_ref,
                );
                const default_x = 'end';
                const default_y = 'top';
                const y_pos = this.y_pos();
                this._overlay_ref = this._overlay.create({
                    hasBackdrop: !!this.backdrop() && !hover,
                    positionStrategy: this._overlay
                        .position()
                        .flexibleConnectedTo(this._element)
                        .withPositions([
                            {
                                originX: this.x_pos() || default_x,
                                originY:
                                    (y_pos === 'top'
                                        ? 'bottom'
                                        : y_pos == 'bottom'
                                          ? 'top'
                                          : y_pos) || default_y,
                                overlayX: this.x_pos() || default_x,
                                overlayY: this.y_pos() || default_y,
                            },
                        ]),
                });
                this._overlay_ref.attach(portal);
                if (this.backdrop()) {
                    this.subscription(
                        'backdrop',
                        this._overlay_ref
                            .backdropClick()
                            .subscribe(() => this.close()),
                    );
                }
            },
            50,
        );
    }

    public close() {
        this.clearTimeout('open');
        if (this._overlay_ref) {
            this._overlay_ref.dispose();
            this._overlay_ref = null;
        }
    }

    private _canOpenHoverTooltip(event: MouseEvent | PointerEvent) {
        if (!this.hover()) return false;
        return !('pointerType' in event) || event.pointerType !== 'touch';
    }
}
