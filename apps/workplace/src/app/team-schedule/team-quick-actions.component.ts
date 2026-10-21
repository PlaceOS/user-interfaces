import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { currentUser, settingSignal, User } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { BookingFormService } from '@placeos/bookings';
import { TeamScheduleService } from './team-schedule.service';

@Component({
    selector: 'team-quick-actions',
    template: `
        @if (features().includes('desks')) {
            <div
                class="bg-grad border-base-300 relative mx-auto mb-4 w-full max-w-full space-y-2 rounded-xl border p-4 text-white shadow"
            >
                <div class="flex items-center justify-between pb-2">
                    <div
                        class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                    >
                        <div
                            class="bg-brand-content absolute inset-0 opacity-20"
                        ></div>
                        <div>
                            {{ 'APP.WORKPLACE.TEAM_QUICK_ACTION' | translate }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>auto_awesome</icon>
                        <div class="text-sm">
                            {{
                                'APP.WORKPLACE.TEAM_SMART_SELECTION' | translate
                            }}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="mb-1 text-2xl font-medium">
                        {{ 'APP.WORKPLACE.TEAM_GROUP_DESKS_TITLE' | translate }}
                    </h3>
                    <p class="text-sm">
                        {{ 'APP.WORKPLACE.TEAM_GROUP_DESKS_HINT' | translate }}
                    </p>
                </div>
                <div
                    class="flex flex-col items-center space-y-2 pt-2 sm:flex-row sm:space-y-0 sm:space-x-4"
                >
                    <button
                        btn
                        matRipple
                        class="white w-full flex-1 space-x-2"
                        [disabled]="select_mode() && selected_count() === 0"
                        (click)="bookForGroup()"
                    >
                        <icon class="text-2xl">bolt</icon>
                        @if (select_mode()) {
                            <div>
                                {{
                                    'APP.WORKPLACE.TEAM_BOOK_SELECTED'
                                        | translate
                                }}
                                @if (selected_count() > 0) {
                                    ({{ selected_count() }})
                                }
                            </div>
                        } @else {
                            <div>
                                {{ 'APP.WORKPLACE.TEAM_BOOK_TEAM' | translate }}
                            </div>
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
                            <div>{{ 'COMMON.CLEAR' | translate }}</div>
                        } @else {
                            <icon class="text-2xl">group_add</icon>
                            <div>
                                {{
                                    'APP.WORKPLACE.TEAM_SELECT_COLLEAGUES'
                                        | translate
                                }}
                            </div>
                        }
                    </button>
                </div>
            </div>
        }
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
    imports: [IconComponent, TranslatePipe],
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
