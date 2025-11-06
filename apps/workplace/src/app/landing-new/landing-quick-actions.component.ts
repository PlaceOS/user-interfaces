import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { AutoAssignedDeskModalComponent } from '../book/desk-flow/auto-assigned-desk-modal.component';

@Component({
    selector: 'landing-quick-actions',
    template: `
        <div
            class="space-y-2 rounded-lg border border-base-300 bg-base-100 p-4"
        >
            <div class="mb-2 flex items-center justify-between">
                <h3 class="text-lg font-medium">Quick Actions</h3>
            </div>
            <button
                btn
                matRipple
                class="h-16 w-full"
                (click)="autoAssignDesk()"
            >
                <div class="space-y-1">
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">bolt</icon>
                        <div class="pr-2 font-medium">Auto-assign Desk</div>
                    </div>
                    <div class="text-xs">We'll find you a desk for today</div>
                </div>
            </button>
            <h4 class="font-medium">Reserve</h4>
            <a
                btn
                matRipple
                [routerLink]="['/book', 'meeting']"
                class="inverse w-full space-x-4 text-left"
            >
                <icon class="text-xl">meeting_room</icon>
                <div class="flex-1">Book a room</div>
                <icon class="text-xl">chevron_right</icon>
            </a>
            <a
                btn
                matRipple
                [routerLink]="['/book', 'desk']"
                class="inverse w-full space-x-4 text-left"
            >
                <icon class="text-xl">desk</icon>
                <div class="flex-1">Book a desk</div>
                <icon class="text-xl">chevron_right</icon>
            </a>
            <a
                btn
                matRipple
                [routerLink]="['/book', 'parking']"
                class="inverse w-full space-x-4 text-left"
            >
                <icon class="text-xl">directions_car</icon>
                <div class="flex-1">Book parking</div>
                <icon class="text-xl">chevron_right</icon>
            </a>
            <a
                btn
                matRipple
                [routerLink]="['/book', 'locker']"
                class="inverse w-full space-x-4 text-left"
            >
                <icon class="text-xl">lock</icon>
                <div class="flex-1">Book locker</div>
                <icon class="text-xl">chevron_right</icon>
            </a>
        </div>
    `,
    imports: [MatRippleModule, RouterModule, IconComponent],
})
export class LandingQuickActionsComponent {
    private _dialog = inject(MatDialog);
    private _router = inject(Router);

    public readonly autoAssignDesk = () => {
        // Open the auto-assigned desk modal
        const dialog_ref = this._dialog.open(AutoAssignedDeskModalComponent, {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'auto-assigned-desk-modal',
        });
        dialog_ref.componentInstance.show_close.set(true);

        dialog_ref.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
                this._router.navigate(['/book', 'desks', 'success']);
            }
        });
    };
}
