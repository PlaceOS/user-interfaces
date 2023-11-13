import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';

@Component({
    selector: '[printable]',
    template: `
        <ng-content></ng-content>

        <ng-template cdk-portal>
            <div
                printable-view
                class="fixed top-0 left-0 flex-col items-end hidden print:flex pointer-events-none"
                [innerHTML]="content | sanitize"
            ></div>
        </ng-template>
    `,
})
export class PrintableComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    public content: string = '';
    private _overlay_ref: OverlayRef = null;

    @ViewChild(CdkPortal) private _portal: CdkPortal;

    constructor(private _overlay: Overlay, private _elem: ElementRef<any>) {
        super();
    }

    public ngOnInit(): void {
        this.open();
    }

    public ngAfterViewInit(): void {
        this.content = this._elem.nativeElement.outerHTML;
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this.close();
    }

    public open() {
        this.timeout(
            'open',
            () => {
                if (this._overlay_ref) this.close();
                if (!this._portal) return;
                const default_x = 'end';
                const default_y = 'top';
                this._overlay_ref = this._overlay.create({
                    hasBackdrop: false,
                    positionStrategy: this._overlay
                        .position()
                        .flexibleConnectedTo(document.body)
                        .withPositions([
                            {
                                originX: default_x,
                                originY: default_y,
                                overlayX: default_x,
                                overlayY: default_y,
                            },
                        ]),
                });
                this._overlay_ref.attach(this._portal);
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
}
