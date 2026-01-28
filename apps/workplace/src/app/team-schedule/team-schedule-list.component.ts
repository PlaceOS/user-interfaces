import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    IconComponent,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { AutoAssignedDeskModalComponent } from '../book/desk-flow/auto-assigned-desk-modal.component';
import { AddColleaguesModalComponent } from '../landing-new/add-colleagues-modal.component';
import { DayStatus, LocationStatus, TeamMember } from './common';
import { TeamScheduleService } from './team-schedule.service';

@Component({
    selector: 'team-schedule-list',
    template: `
        <!-- Week Day Strip -->
        <div
            class="border-base-300 flex overflow-x-auto border-b"
            [style.scrollbar-width]="'none'"
        >
            @for (day of week_days(); track day.date; let i = $index) {
                <button
                    class="border-base-300 flex min-w-20 flex-1 flex-col items-center justify-center border-r border-b-2 px-3 py-2 last:border-r-0"
                    [ngClass]="{
                        'bg-primary/10': active_day_index() === i,
                    }"
                    [class.border-b-transparent]="active_day_index() !== i"
                    [class.border-b-primary]="active_day_index() === i"
                    (click)="setDayIndex(i)"
                >
                    <div
                        class="text-xs uppercase"
                        [class.font-medium]="day.is_today"
                    >
                        {{ day.date | date: 'EEE' }}
                    </div>
                    <div class="text-sm font-medium">
                        {{ day.date | date: 'MMM d' }}
                    </div>
                    @if (day.is_today) {
                        <div class="text-secondary text-xs font-medium">
                            {{ 'COMMON.TODAY' | translate }}
                        </div>
                    }
                </button>
            }
        </div>

        <!-- Team Member List -->
        <div class="flex flex-col gap-3 p-4">
            @for (member of filtered_members(); track member.user.id) {
                <div
                    class="border-base-300 bg-base-100 flex items-center gap-3 rounded-lg border p-3"
                >
                    <!-- Favorite Star / Selection Checkbox -->
                    @if (select_mode()) {
                        <button
                            class="shrink-0"
                            (click)="toggleMemberSelection(member)"
                            [matTooltip]="
                                isMemberSelected(member) ? 'Deselect' : 'Select'
                            "
                        >
                            @if (isMemberSelected(member)) {
                                <icon class="text-primary text-2xl"
                                    >check_box</icon
                                >
                            } @else {
                                <icon class="text-base-content/30 text-2xl"
                                    >check_box_outline_blank</icon
                                >
                            }
                        </button>
                    } @else {
                        <button
                            class="shrink-0"
                            (click)="toggleFavorite(member)"
                            [matTooltip]="
                                member.is_favorite
                                    ? 'Remove from favorites'
                                    : 'Add to favorites'
                            "
                        >
                            @if (member.is_favorite) {
                                <icon class="text-warning text-2xl">star</icon>
                            } @else {
                                <icon class="text-base-content/30 text-2xl"
                                    >star_outline</icon
                                >
                            }
                        </button>
                    }

                    <!-- Avatar -->
                    <a-user-avatar class="shrink-0" [user]="member.user" />

                    <!-- Name & Department -->
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2">
                            <span
                                class="truncate font-medium"
                                [title]="member.user.name"
                            >
                                {{ member.user.name }}
                            </span>
                            @if (member.is_my_team) {
                                <span
                                    class="bg-brand-100/20 text-brand-100 shrink-0 rounded px-1.5 py-0.5 text-xs font-medium"
                                >
                                    {{ 'COMMON.MY_TEAM' | translate }}
                                </span>
                            }
                        </div>
                        <div class="text-base-content/60 text-sm">
                            {{ member.department }}
                        </div>
                    </div>

                    <!-- Status Icon / Book Nearby -->
                    @if (getMemberStatus(member); as status) {
                        @if (status.status === 'office' && status.booking) {
                            <button
                                class="bg-info-light/30 hover:bg-info-light/40 flex shrink-0 flex-col rounded-lg px-3 py-2 transition-colors"
                                (click)="bookNearby(member)"
                                matTooltip="Book nearby"
                            >
                                <div class="flex items-center gap-1 text-xs">
                                    <icon class="text-brand-200 text-sm"
                                        >location_on</icon
                                    >
                                    <span class="truncate">{{
                                        status.booking.building_name
                                    }}</span>
                                </div>
                                <div class="flex items-center gap-1 text-xs">
                                    <icon class="text-success text-sm"
                                        >check_circle</icon
                                    >
                                    <span>{{ status.booking.desk_code }}</span>
                                </div>
                            </button>
                        } @else {
                            <button
                                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                                [style.background-color]="
                                    getLocationStyle(status.status).bg_color
                                "
                                [style.color]="
                                    getLocationStyle(status.status).fg_color
                                "
                                (click)="bookNearby(member)"
                                [matTooltip]="
                                    getLocationStyle(status.status).name
                                        | translate
                                "
                            >
                                <icon class="text-xl">
                                    {{ getLocationStyle(status.status).icon }}
                                </icon>
                            </button>
                        }
                    }
                </div>
            } @empty {
                <!-- Empty State -->
                <div class="flex flex-col items-center justify-center py-16">
                    @if (loading()) {
                        <div
                            class="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"
                        ></div>
                        <p class="text-base-content/60 mt-4 text-sm">
                            {{ 'COMMON.LOADING' | translate }}...
                        </p>
                    } @else if (total_members() === 0) {
                        <icon class="text-base-content/30 text-5xl"
                            >group_off</icon
                        >
                        <p class="text-base-content/60 mt-4 text-sm">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS'
                                    | translate
                            }}
                        </p>
                        <p class="text-base-content/40 mt-1 text-xs">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS_HINT'
                                    | translate
                            }}
                        </p>
                    } @else {
                        <icon class="text-base-content/30 text-5xl"
                            >filter_list_off</icon
                        >
                        <p class="text-base-content/60 mt-4 text-sm">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS'
                                    | translate
                            }}
                        </p>
                        <p class="text-base-content/40 mt-1 text-xs">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_FILTER_RESULTS_HINT'
                                    | translate
                            }}
                        </p>
                    }
                </div>
            }

            <!-- Add Colleagues Button -->
            <div class="flex justify-center pt-4">
                <button
                    class="border-base-300 hover:bg-base-200 flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
                    (click)="openAddColleaguesModal()"
                >
                    <icon class="text-xl">person_add</icon>
                    <span>{{ 'APP.WORKPLACE.COLLEAGUES_ADD' | translate }}</span>
                </button>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatTooltipModule,
        TranslatePipe,
        IconComponent,
        UserAvatarComponent,
    ],
})
export class TeamScheduleListComponent {
    private _dialog = inject(MatDialog);
    private _service = inject(TeamScheduleService);

    // Expose data
    public readonly week_days = this._service.week_days;
    public readonly active_day_index = this._service.active_day_index;
    public readonly filtered_members = this._service.filtered_members;
    public readonly total_members = this._service.total_members;
    public readonly select_mode = this._service.select_mode;
    public readonly loading = this._service.loading;

    // Actions
    public setDayIndex(index: number) {
        this._service.setFilters({ day_index: index });
    }

    public toggleMemberSelection(member: TeamMember) {
        this._service.toggleMemberSelection(member);
    }

    public isMemberSelected(member: TeamMember): boolean {
        return this._service.isMemberSelected(member);
    }

    public toggleFavorite(member: TeamMember) {
        this._service.toggleFavorite(member);
    }

    public getMemberStatus(member: TeamMember): DayStatus | undefined {
        return this._service.getMemberStatus(member);
    }

    public getLocationStyle(status: LocationStatus) {
        return this._service.getLocationStyle(status);
    }

    public bookNearby(member: TeamMember) {
        const day_index = this._service.active_day_index();
        const day = this._service.week_days()[day_index];
        const status: DayStatus | undefined = member.statuses[day_index];
        const booking = status?.booking;

        const dialog_ref = this._dialog.open(AutoAssignedDeskModalComponent, {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'auto-assigned-desk-modal',
        });
        dialog_ref.componentInstance.show_close.set(true);

        // Set date from the selected day
        dialog_ref.componentInstance.date.set(day.date);

        // If the team member has a booking, use their desk and booking details
        if (booking?.desk_id) {
            dialog_ref.componentInstance.nearby_desk_id.set(booking.desk_id);
            if (booking.level_id) {
                dialog_ref.componentInstance.level_id.set(booking.level_id);
            }
            if (booking.duration) {
                dialog_ref.componentInstance.duration.set(booking.duration);
            }
        }
    }

    public openAddColleaguesModal() {
        this._dialog.open(AddColleaguesModalComponent, {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'panel',
            data: {},
        });
    }
}
