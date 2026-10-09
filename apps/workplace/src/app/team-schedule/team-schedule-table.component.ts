import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    IconComponent,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { AutoAssignedDeskModalComponent } from '../book/desk-flow/auto-assigned-desk-modal.component';
import { AddColleaguesModalComponent } from '../landing-new/add-colleagues-modal.component';
import {
    DayStatus,
    LocationStatus,
    TeamMember,
    USER_LOCATIONS,
} from './common';
import { TeamScheduleService } from './team-schedule.service';

@Component({
    selector: 'team-schedule-table',
    template: `
        <!-- Legend Row -->
        <div class="flex flex-wrap justify-between gap-4 p-4">
            <div class="flex flex-wrap gap-4">
                @for (location of user_locations; track location.name) {
                    <div class="flex items-center gap-2">
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded shadow"
                            [style.background-color]="location.bg_color"
                            [style.color]="location.fg_color"
                        >
                            <icon class="text-base">{{ location.icon }}</icon>
                        </div>
                        <div class="text-sm">
                            {{ location.name | translate }}
                        </div>
                    </div>
                }
            </div>
            <div class="text-base-content/60 flex items-center gap-2">
                <icon>info</icon>
                <p class="text-sm">
                    {{ 'APP.WORKPLACE.TEAM_SCHEDULE_BOOK_HINT' | translate }}
                </p>
                <span class="ml-4 font-medium"
                    >{{ booked_count() }}/{{ total_members() }}</span
                >
            </div>
        </div>

        <!-- Table Grid -->
        <div
            class="schedule-grid border-base-300 w-full overflow-auto border-t"
        >
            <!-- Header Row -->
            <div
                class="bg-base-200/50 text-base-content/70 contents text-sm font-medium"
            >
                <div
                    class="border-base-300 bg-base-100 sticky left-0 z-10 flex items-end border-b px-4 py-3"
                >
                    <span class="font-semibold">{{
                        'APP.WORKPLACE.TEAM_SCHEDULE_EMPLOYEE' | translate
                    }}</span>
                    <span class="text-base-content/50 ml-2"
                        >{{ filtered_members().length }}/{{
                            total_members()
                        }}</span
                    >
                </div>
                @for (day of week_days(); track day.date) {
                    <div
                        class="border-base-300 flex items-center justify-center gap-4 border-b border-l p-2"
                        [ngClass]="{ 'bg-brand-200/20': day.is_today }"
                    >
                        <div class="flex flex-col items-center leading-none">
                            <div class="text-lg uppercase">
                                {{ day.date | date: 'EEE' }}
                            </div>
                            @if (day.is_today) {
                                <div
                                    class="text-secondary relative -top-1 text-sm"
                                >
                                    {{ 'COMMON.TODAY' | translate }}
                                </div>
                            }
                        </div>
                        <div
                            class="flex flex-col items-center leading-none font-medium"
                        >
                            <div class="text-2xl">
                                {{ day.date | date: 'd' }}
                            </div>
                            <div class="relative -top-1 font-bold">
                                {{ day.date | date: 'MMM' }}
                            </div>
                        </div>
                    </div>
                }
            </div>

            <!-- Data Rows -->
            @for (member of filtered_members(); track member.user.id) {
                <div class="group contents">
                    <!-- Employee Cell -->
                    <div
                        class="border-base-300 bg-base-100 group-hover:bg-base-200/50 sticky left-0 z-10 flex items-center gap-3 border-b px-4 py-3"
                    >
                        @if (select_mode()) {
                            <button
                                class="shrink-0"
                                (click)="toggleMemberSelection(member)"
                                [matTooltip]="
                                    isMemberSelected(member)
                                        ? 'Deselect'
                                        : 'Select'
                                "
                            >
                                @if (isMemberSelected(member)) {
                                    <icon class="text-primary text-xl"
                                        >check_box</icon
                                    >
                                } @else {
                                    <icon class="text-base-content/30 text-xl"
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
                                    <icon class="text-warning text-xl"
                                        >star</icon
                                    >
                                } @else {
                                    <icon class="text-base-content/30 text-xl"
                                        >star_outline</icon
                                    >
                                }
                            </button>
                        }
                        <a-user-avatar class="shrink-0" [user]="member.user" />
                        <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-2">
                                <span
                                    class="truncate font-medium"
                                    [title]="member.user.name"
                                    >{{ member.user.name }}</span
                                >
                                @if (member.is_my_team) {
                                    <span
                                        class="bg-brand-100/20 text-brand-100 shrink-0 rounded px-1.5 py-0.5 text-xs font-medium"
                                        >{{
                                            'COMMON.MY_TEAM' | translate
                                        }}</span
                                    >
                                }
                            </div>
                            <div
                                class="text-base-content/60 flex flex-wrap items-center gap-1 text-sm"
                            >
                                @if (member.department) {
                                    <span>{{ member.department }}</span>
                                }
                                @if (member.current_building) {
                                    <span class="text-base-content/40">•</span>
                                    <icon class="text-primary text-sm"
                                        >location_on</icon
                                    >
                                    <span>{{ member.current_building }}</span>
                                }
                                @if (member.current_desk) {
                                    <span class="text-base-content/40">•</span>
                                    <span>{{ member.current_desk }}</span>
                                }
                            </div>
                        </div>
                    </div>

                    <!-- Day Cells -->
                    @for (day of week_days(); track day.date; let i = $index) {
                        <div
                            class="border-base-300 group-hover:bg-base-200/50 flex items-center justify-center border-b border-l p-2"
                            [ngClass]="{ 'bg-brand-200/10': day.is_today }"
                        >
                            @if (member.statuses[i]; as status) {
                                @if (
                                    status.status === 'office' && status.booking
                                ) {
                                    <button
                                        class="bg-info-light/30 hover:bg-info-light/40 flex w-full max-w-30 flex-col rounded-lg px-3 py-2 transition-colors"
                                        (click)="bookNearby(member, day)"
                                        matTooltip="Book nearby"
                                    >
                                        <div
                                            class="flex items-center gap-1 text-xs"
                                        >
                                            <icon class="text-brand-200 text-sm"
                                                >location_on</icon
                                            >
                                            <span class="truncate">{{
                                                status.booking.building_name
                                            }}</span>
                                        </div>
                                        <div
                                            class="flex items-center gap-1 text-xs"
                                        >
                                            <icon class="text-success text-sm"
                                                >check_circle</icon
                                            >
                                            <span>{{
                                                status.booking.desk_code
                                            }}</span>
                                        </div>
                                    </button>
                                } @else {
                                    <button
                                        class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                                        [style.background-color]="
                                            getLocationStyle(status.status)
                                                .bg_color
                                        "
                                        [style.color]="
                                            getLocationStyle(status.status)
                                                .fg_color
                                        "
                                        (click)="bookNearby(member, day)"
                                        [matTooltip]="
                                            getLocationStyle(status.status).name
                                                | translate
                                        "
                                    >
                                        <icon class="text-xl">{{
                                            getLocationStyle(status.status).icon
                                        }}</icon>
                                    </button>
                                }
                            }
                        </div>
                    }
                </div>
            } @empty {
                <!-- Empty State -->
                <div
                    class="border-base-300 col-span-full flex flex-col items-center justify-center border-t py-16"
                >
                    @if (loading()) {
                        <mat-spinner diameter="32" />
                        <p class="text-base-content/60 mt-4">
                            {{ 'COMMON.LOADING' | translate }}...
                        </p>
                    } @else if (total_members() === 0) {
                        <icon class="text-base-content/60 text-5xl"
                            >group_off</icon
                        >
                        <p class="text-base-content/60 mt-4">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS'
                                    | translate
                            }}
                        </p>
                        <p class="text-base-content/40 mt-1 text-sm">
                            {{
                                'APP.WORKPLACE.TEAM_SCHEDULE_NO_MEMBERS_HINT'
                                    | translate
                            }}
                        </p>
                    } @else {
                        <icon class="text-base-content/60 text-5xl"
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
        </div>

        <!-- Add Colleagues Button -->
        <div class="flex justify-center p-2">
            <button btn class="w-48" (click)="openAddColleaguesModal()">
                <icon class="mr-2 text-xl">person_add</icon>
                <span class="mr-2">{{
                    'APP.WORKPLACE.COLLEAGUES_ADD' | translate
                }}</span>
            </button>
        </div>
    `,
    styles: [
        `
            .schedule-grid {
                display: grid;
                grid-template-columns:
                    minmax(18rem, 20rem)
                    repeat(5, minmax(7rem, 1fr));
            }
        `,
    ],
    imports: [
        CommonModule,
        MatTooltipModule,
        TranslatePipe,
        IconComponent,
        UserAvatarComponent,
        MatProgressSpinnerModule,
    ],
})
export class TeamScheduleTableComponent {
    private _dialog = inject(MatDialog);
    private _service = inject(TeamScheduleService);

    public readonly user_locations = Object.keys(USER_LOCATIONS).map((key) => ({
        ...USER_LOCATIONS[key as LocationStatus],
        key,
    }));

    // Expose data
    public readonly week_days = this._service.week_days;
    public readonly filtered_members = this._service.filtered_members;
    public readonly total_members = this._service.total_members;
    public readonly booked_count = this._service.booked_count;
    public readonly select_mode = this._service.select_mode;
    public readonly loading = this._service.loading;

    // Actions
    public toggleMemberSelection(member: TeamMember) {
        this._service.toggleMemberSelection(member);
    }

    public isMemberSelected(member: TeamMember): boolean {
        return this._service.isMemberSelected(member);
    }

    public toggleFavorite(member: TeamMember) {
        this._service.toggleFavorite(member);
    }

    public getLocationStyle(status: LocationStatus) {
        return this._service.getLocationStyle(status);
    }

    public bookNearby(member: TeamMember, day: { date: number }) {
        const day_index = this._service
            .week_days()
            .findIndex((d) => d.date === day.date);
        const status: DayStatus | undefined = member.statuses[day_index];
        const booking = status?.booking;

        const dialog_ref = this._dialog.open(AutoAssignedDeskModalComponent, {
            maxWidth: '100vw',
            maxHeight: '100vh',
            panelClass: 'auto-assigned-desk-modal',
        });
        dialog_ref.componentInstance.show_close.set(true);

        // Set date from the day clicked
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
