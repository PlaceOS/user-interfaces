import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';

import {
    Component,
    OnDestroy,
    OnInit,
    TemplateRef,
    inject,
    input,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';

@Component({
    selector: '[printable]',
    template: `
        <ng-container *ngTemplateOutlet="content()"></ng-container>

        <ng-template cdk-portal>
            <div
                printable-view
                class="pointer-events-none fixed top-0 left-0 hidden flex-col items-end print:flex"
            >
                <ng-container *ngTemplateOutlet="content()"></ng-container>
            </div>
        </ng-template>
    `,
    imports: [CommonModule, PortalModule],
})
export class PrintableComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private readonly _overlay = inject(Overlay);
    private _overlay_ref: OverlayRef = null;

    private readonly _portal = viewChild(CdkPortal);
    /** Content to render in the tooltip */
    public readonly content = input<TemplateRef<any>>(undefined);

    public ngOnInit(): void {
        this.open();
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
                const _portal = this._portal();
                if (!_portal) return;
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
                this._overlay_ref.attach(_portal);
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
}
