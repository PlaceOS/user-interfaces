import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, signal, viewChild } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from './icon.component';
import { UserControlsComponent } from './user-controls.component';

@Component({
    selector: 'user-controls-sidebar',
    template: `
        <button
            icon
            matRipple
            avatar
            name="user-controls"
            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
            (click)="open()"
        >
            <ng-content>
                <icon class="text-2xl">person</icon>
            </ng-content>
        </button>
        <ng-template cdk-portal>
            <div class="fixed inset-0 z-9999 overflow-hidden">
                <!-- Backdrop -->
                <div
                    class="absolute inset-0 bg-black transition-opacity duration-200"
                    [class.opacity-50]="is_open()"
                    [class.opacity-0]="!is_open()"
                    (click)="close()"
                ></div>
                <!-- Sidebar panel -->
                <div class="absolute inset-y-0 right-0 flex max-w-full">
                    <div
                        class="bg-base-100 relative w-80 shadow-xl transition-transform duration-200 ease-in-out"
                        [class.translate-x-0]="is_open()"
                        [class.translate-x-full]="!is_open()"
                    >
                        <div class="h-full overflow-auto pt-4">
                            <user-controls [sidebar]="true"></user-controls>
                        </div>
                        <button
                            icon
                            matRipple
                            class="hover:bg-base-200 absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full"
                            (click)="close()"
                        >
                            <icon class="text-2xl">close</icon>
                        </button>
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    imports: [
        CommonModule,
        PortalModule,
        MatRippleModule,
        IconComponent,
        UserControlsComponent,
    ],
})
export class UserControlsSidebarComponent implements OnDestroy {
    private _overlay = inject(Overlay);
    private _overlay_ref: OverlayRef = null;
    private readonly _portal = viewChild(CdkPortal);

    public readonly is_open = signal(false);

    public ngOnDestroy(): void {
        this._close_immediately();
    }

    public open(): void {
        if (this._overlay_ref) return;
        const portal = this._portal();
        if (!portal) return;

        this._overlay_ref = this._overlay.create({
            hasBackdrop: false,
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: this._overlay.scrollStrategies.block(),
        });

        this._overlay_ref.attach(portal);

        // Trigger animation on next frame
        requestAnimationFrame(() => {
            this.is_open.set(true);
        });
    }

    public close(): void {
        this.is_open.set(false);
        // Wait for animation to complete before disposing
        setTimeout(() => {
            this._close_immediately();
        }, 200);
    }

    private _close_immediately(): void {
        if (this._overlay_ref) {
            this._overlay_ref.dispose();
            this._overlay_ref = null;
        }
    }
}
