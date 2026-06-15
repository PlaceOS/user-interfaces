import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';

import {
    ChangeDetectionStrategy,
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
        <div class="printable-screen-view">
            <ng-container *ngTemplateOutlet="content()"></ng-container>
        </div>

        <ng-template cdk-portal>
            <div printable-view class="pointer-events-none hidden print:block">
                <ng-container *ngTemplateOutlet="content()"></ng-container>
            </div>
        </ng-template>
    `,
    styles: [
        `
            @media print {
                .printable-screen-view {
                    display: none !important;
                }
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
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
                this._overlay_ref = this._overlay.create({
                    hasBackdrop: false,
                    positionStrategy: this._overlay
                        .position()
                        .global()
                        .left('0')
                        .top('0'),
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
