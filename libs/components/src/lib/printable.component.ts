import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';

import { Component, OnDestroy, OnInit, inject, viewChild } from '@angular/core';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';

@Component({
    selector: '[printable]',
    template: `
        <ng-content />

        <ng-template cdk-portal>
            <div
                printable-view
                class="pointer-events-none fixed left-0 top-0 hidden flex-col items-end print:flex"
            >
                <ng-content />
            </div>
        </ng-template>
    `,
    imports: [PortalModule],
})
export class PrintableComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private readonly _overlay = inject(Overlay);
    private _overlay_ref: OverlayRef = null;

    private readonly _portal = viewChild(CdkPortal);

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
