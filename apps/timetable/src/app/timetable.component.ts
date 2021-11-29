import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { getHours, getMinutes, startOfMinute } from 'date-fns';

@Component({
    selector: 'app-timetable',
    template: `
        <div class="absolute inset-0 flex flex-col">
            <div
                topbar
                class="bg-secondary w-full shadow z-20 p-2 h-16 flex items-center relative"
            >
                <img [src]="logo?.src" class="h-12" />
                <div class="flex-1"></div>
                <div class="text-white p-2 text-xl">
                    <span>{{ time | date: 'mediumDate' }}</span>
                    <span class="mx-2">•</span>
                    <span class="ml-1">{{ time | date: 'shortTime' }}</span>
                </div>
            </div>
            <div
                class="flex items-center overflow-auto h-1/2 flex-1 w-full bg-[#424242] z-10 relative"
            >
                <div
                    class="sticky left-0 min-h-full w-16 border-r border-white/50 bg-[#212121] flex flex-col"
                >
                    <div now class="absolute left-0 w-screen h-[2px] bg-primary -translate-y-1/2 z-20" [style.top]="current_offset + '%'">
                        <div class="arrow absolute left-0 top-0 -translate-y-1/2"></div>
                    </div>
                    <div class="w-full min-h-[3rem] border-b border-white/50"></div>
                    <div
                        *ngFor="let hr of hours"
                        hour
                        class="w-full flex-1 min-h-[2rem] border-b border-white/50 relative z-10"
                    >
                        <div text class="text-white bg-[#212121] w-8 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">{{ hr }}</div>
                        <div class="absolute top-1/2 inset-x-0 w-full border-b border-white/50"></div>
                    </div>
                </div>
                <space-timetable class="flex-1 min-w-[30vw]"></space-timetable>
            </div>
        </div>
    `,
    styles: [`
        [hour]:last-child {
            border: none !important;
        }

        .arrow {
            width: 0; 
            height: 0; 
            border-top: .8rem solid transparent;
            border-bottom: .8rem solid transparent;
            border-left: 1rem solid var(--primary);
        }
    `],
})
export class AppTimetableComponent {
    public readonly hours = new Array(24)
        .fill(0)
        .map((_, idx) => (idx % 12 === 0 ? 12 : idx % 12));

    public get time() {
        return startOfMinute(Date.now());
    }

    public get current_offset() {
        return (getHours(Date.now()) + getMinutes(Date.now()) / 60) / 24 * 100;
    }

    public get logo() {
        return this._settings.get('app.logo_dark');
    }

    constructor(private _settings: SettingsService) {}
}
