import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { settingSignal } from '@placeos/common';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'team-quick-actions',
    template: `
        <div
            class="bg-grad border-base-300 relative mx-auto w-full max-w-full space-y-2 rounded-xl border p-4 text-white shadow"
        >
            <div class="flex items-center justify-between pb-2">
                <div
                    class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                >
                    <div
                        class="bg-brand-content absolute inset-0 opacity-20"
                    ></div>
                    <div>Quick Action</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>auto_awesome</icon>
                    <div class="text-sm">Smart Selection</div>
                </div>
            </div>
            <div>
                <h3 class="mb-1 text-2xl font-medium">Group Desk Bookings</h3>
                <p class="text-sm">
                    Book desks together with your team or selected colleagues
                </p>
            </div>
            <div
                class="flex flex-col items-center space-y-2 pt-2 sm:flex-row sm:space-y-0 sm:space-x-4"
            >
                <button
                    btn
                    matRipple
                    class="white w-full flex-1 space-x-2"
                    (click)="autoAssignDesk()"
                >
                    <icon class="text-2xl">bolt</icon>
                    <div>Book for team</div>
                </button>
                <button
                    btn
                    matRipple
                    class="inverse white w-full flex-1 space-x-2"
                >
                    <icon class="text-2xl">map</icon>
                    <div>Select Colleagues</div>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            .bg-grad {
                background: linear-gradient(
                    105deg,
                    var(--brand-100) 0%,
                    var(--brand-200) 100%
                );
            }
        `,
    ],
    imports: [IconComponent],
})
export class TeamQuickActionsComponent {
    private _dialog = inject(MatDialog);
    private _router = inject(Router);

    public readonly features = settingSignal<string[]>('features', []);

    public readonly autoAssignDesk = () => {};
}
