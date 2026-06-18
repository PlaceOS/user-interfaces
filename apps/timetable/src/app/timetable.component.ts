import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    OrganisationService,
    SettingsService,
    Space,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { SpacesService } from '@placeos/events';
import { getHours, getMinutes, startOfSecond } from 'date-fns';
import { SpaceTimetableComponent } from './space-timetable.component';

@Component({
    selector: 'app-timetable',
    template: `
        <div class="absolute inset-0 flex flex-col">
            <div
                topbar
                class="border-base-300 bg-base-100 relative z-20 flex h-16 w-full items-center border-b p-2 shadow-sm"
            >
                <img
                    auth
                    class="h-10"
                    alt="Logo"
                    [source]="logo()?.src || logo()"
                />
                <div class="flex-1"></div>
                <div class="p-2 text-xl">
                    <span>{{ time() | date: 'mediumDate' }}</span>
                    <span class="mx-2">•</span>
                    <span class="ml-1">{{ time() | date: 'shortTime' }}</span>
                </div>
            </div>
            <div
                class="bg-base-200 relative z-10 flex h-1/2 w-full flex-1 flex-wrap items-center overflow-auto"
            >
                <div
                    class="border-base-300 bg-base-100 sticky left-0 z-20 flex min-h-full w-16 min-w-16 flex-col border-r"
                >
                    <div
                        class="border-base-300 z-50 min-h-12 w-full border-b"
                    ></div>
                    <div class="relative flex h-1/2 w-full flex-1 flex-col">
                        <div
                            now
                            class="bg-secondary absolute left-0 z-20 h-[2px] w-screen -translate-y-1/2"
                            [style.top]="current_offset() + '%'"
                        >
                            <div
                                class="arrow absolute top-0 left-0 -translate-y-1/2"
                            ></div>
                        </div>
                        @for (hr of hours(); track hr; let i = $index) {
                            <div
                                hour
                                class="border-base-300 relative z-10 min-h-8 w-full flex-1 border-b"
                            >
                                <div
                                    text
                                    class="bg-base-100 absolute top-0 right-2 left-0 -translate-y-1/2 pr-2 text-right text-sm"
                                >
                                    @if (i > 0) {
                                        {{ hr % 12 === 0 ? '12' : hr % 12 }}
                                        <span class="text-[0.625rem]">{{
                                            hr >= 12 ? 'PM' : 'AM'
                                        }}</span>
                                    }
                                </div>
                                <div
                                    class="border-base-300 absolute inset-x-0 top-1/2 w-full border-b"
                                ></div>
                            </div>
                        }
                    </div>
                </div>
                @if (spaces().length) {
                    @for (space of spaces(); track space) {
                        <space-timetable
                            class="border-base-300 relative z-10 min-w-[24vw] flex-1 border-r"
                            [space]="space"
                            [time_offset]="offset()"
                            [time_period]="length()"
                        ></space-timetable>
                    }
                } @else {
                    <div
                        class="flex min-w-[30vw] flex-1 flex-col items-center justify-center opacity-30"
                    >
                        <icon
                            className="material-symbols-sharp"
                            class="text-8xl"
                            >no_meeting_room</icon
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
                border-top: 0.6rem solid transparent;
                border-bottom: 0.6rem solid transparent;
                border-left: 0.75rem solid var(--secondary);
            }
        `,
    ],
    imports: [
        CommonModule,
        AuthenticatedImageDirective,
        SpaceTimetableComponent,
        IconComponent,
    ],
})
export class AppTimetableComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);
    private _route = inject(ActivatedRoute);
    private _spaces = inject(SpacesService);
    private _spaces_initialised = toObservable(this._spaces.initialised);
    private _org = inject(OrganisationService);

    public readonly spaces = signal<Space[]>([]);
    public readonly date = signal(Date.now());
    public readonly hours = signal([]);
    public readonly offset = signal(0);
    public readonly length = signal(24);

    public readonly time = computed(() => startOfSecond(this.date()));

    public readonly current_offset = computed(() => {
        return (
            ((getHours(this.date()) + getMinutes(this.date()) / 60) / 24) * 100
        );
    });

    public readonly logo = computed(() => {
        // Recompute the logo whenever the active building changes.
        this._org.active_building();
        return (
            (this._settings.theme === 'dark'
                ? this._settings.get('app.logo_dark')
                : this._settings.get('app.logo_light')) || {}
        );
    });

    public async ngOnInit() {
        await this._org.waitUntilInitialised();
        await firstTruthyValueFrom(this._settings.initialised);
        await firstTruthyValueFrom(this._spaces_initialised);
        this.interval('time', () => this.date.set(Date.now()), 2000);
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                if (params.has('sys_ids')) {
                    const id_list = params.get('sys_ids').split(',');
                    this.spaces.set(id_list.map((_) => this._spaces.find(_)));
                    this._initTimeBlocks();
                }
            }),
        );
        this._initTimeBlocks();
    }

    private _initTimeBlocks() {
        const block_start = Math.floor(
            this._settings.get('app.block_start') || 0,
        );
        const block_end = Math.floor(this._settings.get('app.block_end') || 24);
        this.offset.set(block_start);
        this.length.set(block_end - block_start);
        this.hours.set(
            new Array(block_end - block_start)
                .fill(0)
                .map((_, i) => i + block_start),
        );
    }
}
