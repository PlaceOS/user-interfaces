import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
    IconComponent,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { LocationStatus, TeamMember, USER_LOCATIONS } from './common';
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
                    >{{ service.booked_count() }}/20</span
                >
            </div>
        </div>

        <!-- Table Grid -->
        <div class="schedule-grid border-base-300 w-full border-t">
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
                        >{{ service.filtered_members().length }}/{{
                            service.total_members()
                        }}</span
                    >
                </div>
                @for (day of service.week_days(); track day.date) {
                    <div
                        class="border-base-300 flex items-center justify-center gap-4 border-b border-l p-2"
                        [ngClass]="{ 'bg-primary/20': day.is_today }"
                    >
                        <div class="flex flex-col items-center leading-none">
                            <div class="text-lg">
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
            @for (member of service.filtered_members(); track member.user.id) {
                <div class="group contents">
                    <!-- Employee Cell -->
                    <div
                        class="border-base-300 bg-base-100 group-hover:bg-base-200/50 sticky left-0 z-10 flex items-center gap-3 border-b px-4 py-3"
                    >
                        <button
                            class="shrink-0"
                            (click)="service.toggleFavorite(member)"
                        >
                            @if (member.is_favorite) {
                                <icon class="text-warning text-xl">star</icon>
                            } @else {
                                <icon class="text-base-content/30 text-xl"
                                    >star_outline</icon
                                >
                            }
                        </button>
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
                                        class="bg-primary/20 text-primary shrink-0 rounded px-1.5 py-0.5 text-xs font-medium"
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
                    @for (
                        day of service.week_days();
                        track day.date;
                        let i = $index
                    ) {
                        <div
                            class="border-base-300 group-hover:bg-base-200/50 flex items-center justify-center border-b border-l p-2"
                            [ngClass]="{ 'bg-primary/10': day.is_today }"
                        >
                            @if (member.statuses[i]; as status) {
                                @if (
                                    status.status === 'office' && status.booking
                                ) {
                                    <button
                                        class="bg-base-200 hover:bg-base-300 flex w-full max-w-30 flex-col items-center rounded-lg px-3 py-2 transition-colors"
                                        (click)="bookNearby(member, day)"
                                    >
                                        <div
                                            class="text-primary flex items-center gap-1 text-xs"
                                        >
                                            <icon class="text-sm"
                                                >location_on</icon
                                            >
                                            <span class="truncate">{{
                                                status.booking.building_name
                                            }}</span>
                                        </div>
                                        <div
                                            class="text-success flex items-center gap-1 text-xs"
                                        >
                                            <icon class="text-sm"
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
                                            service.getLocationStyle(
                                                status.status
                                            ).bg_color
                                        "
                                        [style.color]="
                                            service.getLocationStyle(
                                                status.status
                                            ).fg_color
                                        "
                                        (click)="bookNearby(member, day)"
                                    >
                                        <icon class="text-xl">{{
                                            service.getLocationStyle(
                                                status.status
                                            ).icon
                                        }}</icon>
                                    </button>
                                }
                            }
                        </div>
                    }
                </div>
            }
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
    imports: [CommonModule, TranslatePipe, IconComponent, UserAvatarComponent],
})
export class TeamScheduleTableComponent {
    public readonly service = inject(TeamScheduleService);

    public readonly user_locations = Object.keys(USER_LOCATIONS).map((key) => ({
        ...USER_LOCATIONS[key as LocationStatus],
        key,
    }));

    public bookNearby(member: TeamMember, day: { date: number }) {
        console.log('Book nearby', member.user.name, new Date(day.date));
    }
}
