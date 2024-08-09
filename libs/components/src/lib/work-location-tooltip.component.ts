import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { currentUser } from '@placeos/common';
import { WorktimePreference } from '@placeos/users';
import { format, set, startOfMinute } from 'date-fns';

import { WFHSettingsModalComponent } from 'libs/users/src/lib/wfh-settings-modal.component';

@Component({
    selector: 'work-location-tooltip',
    template: `
        <div
            class="flex flex-col w-[18.5rem] rounded bg-base-100 shadow relative -top-12 -right-1 overflow-hidden"
        >
            <div class="flex items-center justify-between px-2 pt-2">
                <h3 class="px-2 font-medium">Work Location</h3>
                <button
                    icon
                    matRipple
                    matTooltip="Edit Work Location Preferences"
                    class="bg-base-200"
                    (click)="editSettings()"
                >
                    <app-icon>settings</app-icon>
                </button>
            </div>
            <div
                class="pb-2"
                *ngIf="active_preference?.blocks?.length; else empty_state"
            >
                <div
                    class="relative flex items-center px-4 py-2 space-x-2"
                    *ngFor="
                        let block of active_preference?.blocks;
                        let i = index
                    "
                    [class.opacity-30]="now > timeFrom(block.end_time)"
                >
                    <div
                        class="rounded-full h-10 w-10 flex items-center justify-center bg-base-200 z-20"
                        [class.bg-base-200]="
                            now < timeFrom(block.start_time) ||
                            now > timeFrom(block.end_time)
                        "
                        [class.bg-info]="
                            now >= timeFrom(block.start_time) &&
                            now <= timeFrom(block.end_time)
                        "
                        [class.text-info-content]="
                            now >= timeFrom(block.start_time) &&
                            now <= timeFrom(block.end_time)
                        "
                    >
                        <app-icon class="text-2xl">{{
                            location_icon(timeFrom(block.start_time))
                        }}</app-icon>
                    </div>
                    <div class="flex-1 ml-2">
                        <div class="font-medium">
                            {{ location(timeFrom(block.start_time)) }}
                        </div>
                        <div class="text-xs opacity-60">
                            {{ timeFrom(block.start_time) | date: 'shortTime' }}
                            &ndash;
                            {{ timeFrom(block.end_time) | date: 'shortTime' }}
                        </div>
                    </div>
                    <div
                        *ngIf="i > 0"
                        class="absolute -top-2 left-7 h-4 w-0 border-l-2 border-dashed border-base-200 -translate-x-px"
                    ></div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="flex flex-col items-center justify-center p-8 space-y-2 w-full opacity-30"
            >
                <app-icon class="text-6xl">event_busy</app-icon>
                <p class="text-center text-sm">No work location for today.</p>
                <p class="text-center text-sm">
                    Click the cog to edit your work location preferences.
                </p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class WorkLocationTooltipComponent {
    public settings: WorktimePreference[];
    public overrides: Record<string, WorktimePreference>;

    public get active_preference() {
        const date = format(new Date(), 'yyyy-MM-dd');
        if (this.overrides[date]) return this.overrides[date];
        return this.settings.find(
            (pref) => pref.day_of_week === new Date().getDay(),
        );
    }

    public get now() {
        return startOfMinute(Date.now()).getTime();
    }

    constructor(private _dialog: MatDialog) {}

    public ngOnInit() {
        const user = currentUser();
        this.settings = user.work_preferences;
        this.overrides = user.work_overrides;
    }

    public location_icon(time: number) {
        const user = currentUser();
        return user.location_icon(time + 1 * 60 * 1000);
    }

    public location(time: number) {
        const user = currentUser();
        return user.location_name_time(time + 1 * 60 * 1000);
    }

    public timeFrom(hours: number) {
        return startOfMinute(
            set(new Date(), {
                hours: Math.floor(hours),
                minutes: (hours * 60) % 60,
                seconds: 0,
                milliseconds: 0,
            }),
        ).getTime();
    }

    public editSettings() {
        this._dialog.open(WFHSettingsModalComponent);
    }
}
