import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { currentUser, settingSignal, User } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { BookingFormService } from '@placeos/bookings';
import { TeamScheduleService } from './team-schedule.service';

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
                    (click)="bookForGroup()"
                >
                    <icon class="text-2xl">bolt</icon>
                    @if (select_mode()) {
                        <div>
                            Book selected
                            @if (selected_count() > 0) {
                                ({{ selected_count() }})
                            }
                        </div>
                    } @else {
                        <div>Book for team</div>
                    }
                </button>
                <button
                    btn
                    matRipple
                    class="inverse white w-full flex-1 space-x-2"
                    (click)="toggleSelectMode()"
                >
                    @if (select_mode()) {
                        <icon class="text-2xl">close</icon>
                        <div>Clear</div>
                    } @else {
                        <icon class="text-2xl">group_add</icon>
                        <div>Select Colleagues</div>
                    }
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
    private _booking_form = inject(BookingFormService);
    private _service = inject(TeamScheduleService);

    public readonly features = settingSignal<string[]>('features', []);

    // Expose data
    public readonly select_mode = this._service.select_mode;
    public readonly selected_count = this._service.selected_count;

    public toggleSelectMode() {
        if (this._service.select_mode()) {
            this._service.clearSelection();
        } else {
            this._service.toggleSelectMode();
        }
    }

    public bookForGroup() {
        let members: User[];

        if (this._service.select_mode() && this._service.selected_count() > 0) {
            // Use selected members
            members = this._service
                .selected_members()
                .map((m) => m.user as User);
        } else {
            // Use team members
            members = this._service.getTeamMembers().map((m) => m.user as User);
        }

        // Add current user if not already included
        const current = currentUser();
        if (!members.find((m) => m.email === current.email)) {
            members = [current, ...members];
        }

        // Clear selection mode
        this._service.clearSelection();

        // Set up group booking
        this._booking_form.setOptions({
            type: 'desk',
            group: true,
            members,
        });

        // Navigate to desk booking flow
        this._router.navigate(['/book', 'desks']);
    }
}
