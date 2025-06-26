import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space, SpacesService } from '@placeos/spaces';
import { getHours, getMinutes, startOfSecond } from 'date-fns';
import { debounceTime, first, map } from 'rxjs/operators';

@Component({
    selector: 'app-timetable',
    template: `
        <div class="absolute inset-0 flex flex-col">
            <div
                topbar
                class="relative z-20 flex h-16 w-full items-center bg-secondary p-2 shadow"
            >
                <img
                    auth
                    class="h-10"
                    alt="Logo"
                    [source]="(logo | async)?.src || (logo | async)"
                />
                <div class="flex-1"></div>
                <div class="p-2 text-xl text-white">
                    <span>{{ time | date: 'mediumDate' }}</span>
                    <span class="mx-2">•</span>
                    <span class="ml-1">{{ time | date: 'shortTime' }}</span>
                </div>
            </div>
            <div
                class="relative z-10 flex h-1/2 w-full flex-1 flex-wrap items-center overflow-auto bg-[#424242]"
            >
                <div
                    class="sticky left-0 z-20 flex min-h-full w-16 min-w-[4rem] flex-col border-r border-white/50 bg-[#212121]"
                >
                    <div
                        class="min-h-[3rem] w-full border-b border-white/50"
                    ></div>
                    <div class="relative flex h-1/2 w-full flex-1 flex-col">
                        <div
                            now
                            class="absolute left-0 z-20 h-[2px] w-screen -translate-y-1/2 bg-primary"
                            [style.top]="current_offset + '%'"
                        >
                            <div
                                class="arrow absolute left-0 top-0 -translate-y-1/2"
                            ></div>
                        </div>
                        @for (hr of hours; track hr) {
                            <div
                                hour
                                class="relative z-10 min-h-[2rem] w-full flex-1 border-b border-white/50"
                            >
                                <div
                                    text
                                    class="absolute left-1/2 top-0 w-8 -translate-x-1/2 -translate-y-1/2 bg-[#212121] text-center text-white"
                                >
                                    {{ hr }}
                                </div>
                                <div
                                    class="absolute inset-x-0 top-1/2 w-full border-b border-white/50"
                                ></div>
                            </div>
                        }
                    </div>
                </div>
                @if (spaces.length) {
                    @for (space of spaces; track space) {
                        <space-timetable
                            class="relative z-10 min-w-[24vw] flex-1 border-r border-white/50"
                            [space]="space"
                        ></space-timetable>
                    }
                } @else {
                    <div
                        class="flex min-w-[30vw] flex-1 flex-col items-center justify-center text-white opacity-60"
                    >
                        <p>No spaces have been selected</p>
                    </div>
                }
            </div>
        </div>
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
    standalone: false,
})
export class AppTimetableComponent extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _spaces = inject(SpacesService);
    private _org = inject(OrganisationService);

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

    public readonly logo = this._org.active_building.pipe(
        debounceTime(500),
        map(
            () =>
                (this._settings.theme === 'dark'
                    ? this._settings.get('app.logo_dark')
                    : this._settings.get('app.logo_light')) || {},
        ),
    );

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
            }),
        );
    }
}
