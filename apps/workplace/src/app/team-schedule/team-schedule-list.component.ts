import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
    IconComponent,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { TeamMember } from './common';
import { TeamScheduleService } from './team-schedule.service';

@Component({
    selector: 'team-schedule-list',
    template: `
        <!-- Week Day Strip -->
        <div
            class="border-base-300 flex overflow-x-auto border-b"
            [style.scrollbar-width]="'none'"
        >
            @for (day of service.week_days(); track day.date; let i = $index) {
                <button
                    class="border-base-300 flex min-w-20 flex-1 flex-col items-center justify-center border-r border-b-2 px-3 py-2 last:border-r-0"
                    [ngClass]="{
                        'bg-primary/10': service.active_day_index() === i,
                    }"
                    [class.border-b-transparent]="
                        service.active_day_index() !== i
                    "
                    [class.border-b-primary]="service.active_day_index() === i"
                    (click)="service.setSelectedDayIndex(i)"
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
            @for (member of service.filtered_members(); track member.user.id) {
                <div
                    class="border-base-300 bg-base-100 flex items-center gap-3 rounded-lg border p-3"
                >
                    <!-- Favorite Star -->
                    <button
                        class="shrink-0"
                        (click)="service.toggleFavorite(member)"
                    >
                        @if (member.is_favorite) {
                            <icon class="text-warning text-2xl">star</icon>
                        } @else {
                            <icon class="text-base-content/30 text-2xl"
                                >star_outline</icon
                            >
                        }
                    </button>

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
                                    class="bg-primary/20 text-primary shrink-0 rounded px-1.5 py-0.5 text-xs font-medium"
                                >
                                    {{ 'COMMON.MY_TEAM' | translate }}
                                </span>
                            }
                        </div>
                        <div class="text-base-content/60 text-sm">
                            {{ member.department }}
                        </div>
                    </div>

                    <!-- Status Icon -->
                    @if (service.getMemberStatus(member); as status) {
                        <button
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                            [style.background-color]="
                                service.getLocationStyle(status.status).bg_color
                            "
                            [style.color]="
                                service.getLocationStyle(status.status).fg_color
                            "
                            (click)="viewMemberStatus(member)"
                        >
                            <icon class="text-xl">
                                {{
                                    service.getLocationStyle(status.status).icon
                                }}
                            </icon>
                        </button>
                    }
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [CommonModule, TranslatePipe, IconComponent, UserAvatarComponent],
})
export class TeamScheduleListComponent {
    public readonly service = inject(TeamScheduleService);

    public viewMemberStatus(member: TeamMember) {
        console.log('View member status', member.user.name);
    }
}
