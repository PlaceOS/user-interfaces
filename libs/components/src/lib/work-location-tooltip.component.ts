import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { currentUser, i18n, reloadUserData } from '@placeos/common';
import { updateUser } from '@placeos/ts-client';
import { WorktimePreference } from '@placeos/users';
import {
    addDays,
    format,
    isBefore,
    parse,
    set,
    startOfDay,
    startOfMinute,
} from 'date-fns';

import { WFHSettingsModalComponent } from 'libs/users/src/lib/wfh-settings-modal.component';

@Component({
    selector: 'work-location-tooltip',
    template: `
        <div
            class="relative -right-1 -top-12 flex w-[18.5rem] flex-col overflow-hidden rounded bg-base-100 shadow"
        >
            <div class="flex items-center justify-between px-2">
                <h3 class="px-2 py-4 font-medium">
                    {{ 'COMMON.WORK_LOCATION' | translate }}
                </h3>
                <button
                    icon
                    matRipple
                    [matTooltip]="'COMMON.WORK_LOCATION_EDIT' | translate"
                    matTooltipPosition="left"
                    class="hover:bg-base-200"
                    (click)="editSettings()"
                >
                    <icon>edit_note</icon>
                </button>
            </div>
            <h3 class="px-4 text-sm font-medium">
                {{ now | date: 'fullDate' }}
            </h3>
            @if (active_preference?.blocks?.length) {
                <div class="pb-2">
                    @for (
                        block of active_preference?.blocks;
                        track block;
                        let i = $index
                    ) {
                        <div
                            class="relative flex items-center px-4 py-2"
                            [class.opacity-30]="now > timeFrom(block.end_time)"
                        >
                            <div
                                class="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-base-200"
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
                                <icon class="text-2xl">{{
                                    location_icon(timeFrom(block.start_time))
                                }}</icon>
                            </div>
                            <div class="ml-2 flex-1">
                                <button
                                    matRipple
                                    class="flex items-center space-x-2 rounded px-2 py-1 font-medium hover:bg-base-200"
                                    [matMenuTriggerFor]="work_menu"
                                >
                                    <div>
                                        {{
                                            location(timeFrom(block.start_time))
                                        }}
                                    </div>
                                    <icon>expand_more</icon>
                                </button>
                                <mat-menu #work_menu="matMenu">
                                    @for (loc of locations; track loc) {
                                        <button
                                            mat-menu-item
                                            (click)="setLocation(i, loc.id)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl">{{
                                                    loc.icon
                                                }}</icon>
                                                <div class="pr-8">
                                                    {{ loc.name | translate }}
                                                </div>
                                            </div>
                                        </button>
                                    }
                                </mat-menu>
                                <div class="px-2 text-xs opacity-60">
                                    {{
                                        timeFrom(block.start_time)
                                            | date: 'shortTime'
                                    }}
                                    &ndash;
                                    {{
                                        timeFrom(block.end_time)
                                            | date: 'shortTime'
                                    }}
                                </div>
                            </div>
                            @if (i > 0) {
                                <div
                                    class="absolute -top-2 left-7 h-4 w-0 -translate-x-px border-l-2 border-dashed border-base-200"
                                ></div>
                            }
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="flex w-full flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <icon class="text-6xl">event_busy</icon>
                    <p class="text-center text-sm">
                        {{ 'COMMON.WORK_LOCATION_EMPTY' | translate }}
                    </p>
                    <p class="text-center text-sm">
                        {{ 'COMMON.WORK_LOCATION_EDIT_INFO' | translate }}
                    </p>
                </div>
            }
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class WorkLocationTooltipComponent implements OnInit {
    private _dialog = inject(MatDialog);

    public locations = [];
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

    public ngOnInit() {
        const user = currentUser();
        this.settings = user.work_preferences;
        this.overrides = user.work_overrides;
        this.locations = [
            { id: 'wfo', name: i18n('COMMON.WORK_OFFICE'), icon: 'business' },
            { id: 'wfh', name: i18n('COMMON.WORK_HOME'), icon: 'home' },
            { id: 'aol', name: i18n('COMMON.WORK_LEAVE'), icon: 'event_busy' },
        ];
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

    public async setLocation(index: number, location: string) {
        const user = currentUser();
        const active_preference = this.active_preference;
        const date = format(Date.now(), 'yyyy-MM-dd');
        const new_overrides = {
            ...user.work_overrides,
            [date]: {
                ...active_preference,
                blocks: [
                    ...active_preference.blocks.slice(0, index),
                    {
                        ...active_preference.blocks[index],
                        location,
                    },
                    ...active_preference.blocks.slice(index + 1),
                ],
            },
        };
        for (const key in new_overrides) {
            const key_date = parse(key, 'yyyy-MM-dd', new Date());
            if (
                !new_overrides[key].blocks.length ||
                isBefore(key_date, addDays(startOfDay(Date.now()), -1))
            ) {
                delete new_overrides[key];
            }
        }
        this.overrides = new_overrides;
        await updateUser(user.id, {
            ...user,
            work_overrides: new_overrides,
        } as any).toPromise();
        reloadUserData();
    }
}
