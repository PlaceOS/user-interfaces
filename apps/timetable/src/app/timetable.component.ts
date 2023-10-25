import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { Space, SpacesService } from '@placeos/spaces';
import { getHours, getMinutes, startOfSecond } from 'date-fns';
import { first } from 'rxjs/operators';

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
                class="flex items-center overflow-auto h-1/2 flex-1 w-full bg-[#424242] z-10 relative flex-wrap"
            >
                <div
                    class="sticky left-0 min-h-full w-16 min-w-[4rem] border-r border-white/50 bg-[#212121] flex flex-col z-20"
                >
                    <div
                        class="w-full min-h-[3rem] border-b border-white/50"
                    ></div>
                    <div class="w-full flex flex-col flex-1 h-1/2 relative">
                        <div
                            now
                            class="absolute left-0 w-screen h-[2px] bg-primary -translate-y-1/2 z-20"
                            [style.top]="current_offset + '%'"
                        >
                            <div
                                class="arrow absolute left-0 top-0 -translate-y-1/2"
                            ></div>
                        </div>
                        <div
                            *ngFor="let hr of hours"
                            hour
                            class="w-full flex-1 min-h-[2rem] border-b border-white/50 relative z-10"
                        >
                            <div
                                text
                                class="text-white bg-[#212121] w-8 text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                                {{ hr }}
                            </div>
                            <div
                                class="absolute top-1/2 inset-x-0 w-full border-b border-white/50"
                            ></div>
                        </div>
                    </div>
                </div>
                <ng-container *ngIf="spaces.length; else empty_state">
                    <space-timetable
                        *ngFor="let space of spaces"
                        class="flex-1 min-w-[24vw] border-r border-white/50 relative z-10"
                        [space]="space"
                    ></space-timetable>
                </ng-container>
            </div>
        </div>
        <ng-template #empty_state>
            <div
                class="flex-1 min-w-[30vw] flex flex-col items-center justify-center text-white opacity-60"
            >
                <p>No spaces have been selected</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            [hour]:last-child {
                border: none !important;
            }

            .arrow {
                width: 0;
                height: 0;
                border-top: 0.8rem solid transparent;
                border-bottom: 0.8rem solid transparent;
                border-left: 1rem solid var(--s);
            }
        `,
    ],
})
export class AppTimetableComponent extends AsyncHandler {
    public spaces: Space[] = [];
    public date = Date.now();
    public readonly hours = new Array(24)
        .fill(0)
        .map((_, idx) => (idx % 12 === 0 ? 12 : idx % 12));

    public get time() {
        return startOfSecond(this.date);
    }

    public get current_offset() {
        return ((getHours(this.date) + getMinutes(this.date) / 60) / 24) * 100;
    }

    public get logo() {
        return this._settings.get('app.logo_dark');
    }

    constructor(
        private _settings: SettingsService,
        private _route: ActivatedRoute,
        private _spaces: SpacesService
    ) {
        super();
    }

    public async ngOnInit() {
        await this._spaces.initialised.pipe(first((_) => _)).toPromise();
        this.interval('time', () => (this.date = Date.now()), 2000);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('sys_ids')) {
                    const id_list = params.get('sys_ids').split(',');
                    this.spaces = id_list.map((_) => this._spaces.find(_));
                }
            })
        );
    }
}
