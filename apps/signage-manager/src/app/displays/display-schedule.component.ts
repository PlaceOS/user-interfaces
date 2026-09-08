import { DatePipe } from '@angular/common';
import { Component, computed, inject, resource, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { addDays, format, isSameDay, startOfWeek } from 'date-fns';
import {
    DAY_COUNT,
    ScheduleBlock,
    buildScheduleBlocks,
} from '../schedules/signage-schedule.util';
import { SignageService } from '../signage.service';
import { buildDisplayScheduleDays } from './display-schedule.util';

@Component({
    selector: 'display-schedule',
    template: `
        <div class="flex h-full flex-col overflow-hidden">
            <div
                class="border-base-200 flex items-center justify-center gap-0.5 border-b px-3 py-2"
            >
                <button
                    icon
                    type="button"
                    matRipple
                    [matTooltip]="'SIGNAGE_MANAGER.PREV_WEEK' | translate"
                    (click)="previousWeek()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.PREV_WEEK_ARIA' | translate
                    "
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    type="button"
                    matRipple
                    [matTooltip]="'COMMON.WEEK_THIS' | translate"
                    (click)="goToToday()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.THIS_WEEK_ARIA' | translate
                    "
                >
                    <icon>today</icon>
                </button>
                <span class="ml-1.5 text-sm font-medium">
                    {{ weekLabel() }}
                </span>
                <button
                    icon
                    type="button"
                    matRipple
                    [matTooltip]="'SIGNAGE_MANAGER.NEXT_WEEK' | translate"
                    (click)="nextWeek()"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.NEXT_WEEK_ARIA' | translate
                    "
                >
                    <icon>chevron_right</icon>
                </button>
            </div>

            @if (templates_loading()) {
                <div class="flex flex-1 items-center justify-center p-8">
                    {{ 'COMMON.LOADING' | translate }}
                </div>
            } @else if (templates_error()) {
                <div class="text-error p-8 text-center">
                    {{
                        'SIGNAGE_MANAGER.TEMPLATE_MAPPINGS_LOAD_ERROR'
                            | translate
                    }}
                </div>
            } @else if (
                !schedule_entries().length && !template_mappings().length
            ) {
                <div
                    class="text-base-content/40 flex flex-1 flex-col items-center justify-center gap-3"
                >
                    <icon class="text-4xl">event_busy</icon>
                    <p class="text-sm">
                        {{ 'SIGNAGE_MANAGER.NO_SCHEDULE_CONTENT' | translate }}
                    </p>
                </div>
            } @else {
                <div timeline class="z-0 grid min-h-0 flex-1 overflow-auto">
                    <div
                        day-headers
                        class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-w-[calc(100%-5rem)] items-center border-b"
                        [style.width]="days().length * 12 + 'rem'"
                    >
                        @for (day of days(); track day) {
                            <div
                                class="relative flex h-full min-w-48 flex-1 flex-col items-center justify-center py-2 leading-tight"
                                [class.today-column]="isToday(day)"
                            >
                                <div
                                    class="text-base-content/45 text-[10px] font-medium tracking-wide uppercase"
                                    [class.text-info]="isToday(day)"
                                >
                                    {{ day | date: 'EEE' }}
                                </div>
                                <div
                                    class="truncate text-sm"
                                    [class.text-info]="isToday(day)"
                                    [class.font-semibold]="isToday(day)"
                                >
                                    {{ day | date: 'MMM d' }}
                                </div>
                                @if ($index !== 0) {
                                    <div
                                        class="bg-base-content/10 absolute top-0 -left-px h-2 w-px"
                                    ></div>
                                }
                            </div>
                        }
                    </div>
                    <div
                        date-blocks
                        class="relative flex min-w-[calc(100%-5rem)]"
                        [style.width]="days().length * 12 + 'rem'"
                    >
                        @for (
                            day of days();
                            track day;
                            let day_index = $index
                        ) {
                            <div
                                class="border-base-content/[0.06] min-w-48 flex-1 border-r p-2 last:border-none"
                                [class.today-column]="isToday(day)"
                            >
                                <ul class="space-y-2">
                                    @for (
                                        block of day_blocks()[day_index].items;
                                        track block
                                    ) {
                                        <li
                                            class="border-base-content/10 rounded-md border"
                                        >
                                            <a
                                                [routerLink]="
                                                    block.mapping
                                                        ? [
                                                              '/templates',
                                                              block.mapping
                                                                  .template_id,
                                                          ]
                                                        : [
                                                              '/playlists',
                                                              block.playlist.id,
                                                          ]
                                                "
                                                class="hover:bg-base-content/[0.04] flex items-start gap-2 rounded-md px-2 py-1.5 no-underline"
                                                [matTooltip]="
                                                    block_tooltip(block)
                                                "
                                            >
                                                <icon
                                                    class="mt-0.5 shrink-0 text-sm"
                                                    [style.color]="
                                                        block.text_color
                                                    "
                                                >
                                                    {{
                                                        block.mapping
                                                            ? 'dashboard'
                                                            : 'playlist_play'
                                                    }}
                                                </icon>
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-[13px] font-medium"
                                                        [class.line-through]="
                                                            !block.playlist
                                                                .enabled
                                                        "
                                                    >
                                                        {{
                                                            block.playlist.name
                                                        }}
                                                    </div>
                                                    <div
                                                        class="text-base-content/60 text-[11px] tabular-nums"
                                                    >
                                                        {{ block.label }}
                                                    </div>
                                                    @if (
                                                        block.mapping &&
                                                        !block.mapping.schedule
                                                    ) {
                                                        <div
                                                            class="text-primary text-[11px]"
                                                        >
                                                            {{
                                                                'SIGNAGE_MANAGER.DEFAULT_TEMPLATE'
                                                                    | translate
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            @if (block.children.length) {
                                                <ul
                                                    class="border-base-content/10 mb-2 ml-4 space-y-1 border-l pr-1 pl-2"
                                                >
                                                    @for (
                                                        child of block.children;
                                                        track child
                                                    ) {
                                                        <li>
                                                            <a
                                                                [routerLink]="[
                                                                    '/playlists',
                                                                    child
                                                                        .playlist
                                                                        .id,
                                                                ]"
                                                                class="hover:bg-base-content/[0.04] flex gap-2 rounded-md px-2 py-1 no-underline"
                                                                [matTooltip]="
                                                                    block_tooltip(
                                                                        child
                                                                    )
                                                                "
                                                            >
                                                                <icon
                                                                    class="mt-0.5 shrink-0 text-sm"
                                                                    [style.color]="
                                                                        child.text_color
                                                                    "
                                                                    >playlist_play</icon
                                                                >
                                                                <div
                                                                    class="min-w-0"
                                                                >
                                                                    <div
                                                                        class="truncate text-[13px]"
                                                                        [class.line-through]="
                                                                            !child
                                                                                .playlist
                                                                                .enabled
                                                                        "
                                                                    >
                                                                        {{
                                                                            child
                                                                                .playlist
                                                                                .name
                                                                        }}
                                                                    </div>
                                                                    <div
                                                                        class="text-base-content/60 text-[11px] tabular-nums"
                                                                    >
                                                                        {{
                                                                            child.label
                                                                        }}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    }
                                                </ul>
                                            }
                                        </li>
                                    }
                                </ul>
                                @if (
                                    !day_blocks()[day_index].all_day.length &&
                                    !day_blocks()[day_index].timed.length
                                ) {
                                    <div
                                        class="border-base-content/10 text-base-content/25 flex min-h-20 flex-col items-center justify-center gap-1 rounded-md border border-dashed"
                                    >
                                        <icon class="text-base"
                                            >event_busy</icon
                                        >
                                        <span class="text-[11px]">
                                            {{
                                                'SIGNAGE_MANAGER.NO_SCHEDULE_CONTENT'
                                                    | translate
                                            }}
                                        </span>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            [timeline] {
                grid-template-columns: 5rem;
                grid-template-rows: 3.5rem;
            }

            .today-column {
                background-color: color-mix(
                    in srgb,
                    var(--info) 4%,
                    transparent
                );
            }
        `,
    ],
    imports: [
        DatePipe,
        MatRippleModule,
        MatTooltipModule,
        RouterLink,
        IconComponent,
        TranslatePipe,
    ],
})
export class DisplayScheduleComponent {
    private readonly _service = inject(SignageService);

    public readonly selected_display = this._service.selected_display;
    private readonly _playlists = this._service.playlists;

    public readonly week_offset = signal(0);

    public readonly week_start = computed(() => {
        const base = startOfWeek(new Date(), { weekStartsOn: 1 });
        return addDays(base, this.week_offset() * 7);
    });

    public readonly days = computed(() =>
        Array.from({ length: DAY_COUNT }, (_, i) =>
            addDays(this.week_start(), i),
        ),
    );

    public readonly display_playlists = computed(() => {
        const display = this.selected_display();
        if (!display) return [];
        return this._playlists().filter((p) =>
            display.playlists?.includes(p.id),
        );
    });

    public readonly display_assignments = computed(() =>
        this.display_playlists().map((playlist) => ({ playlist })),
    );

    public readonly schedule_entries = computed(() => {
        const days = this.days();
        return buildScheduleBlocks(this.display_assignments(), days);
    });

    private readonly _template_mappings = resource({
        params: () =>
            this._service.templates_enabled()
                ? this.selected_display()?.id
                : undefined,
        loader: ({ params }) =>
            this._service.listTemplateMappings({ control_system_id: params }),
    });
    public readonly templates_loading = this._template_mappings.isLoading;
    public readonly templates_error = this._template_mappings.error;
    public readonly template_mappings = computed(() =>
        this._template_mappings.hasValue()
            ? this._template_mappings.value()
            : [],
    );

    public readonly day_blocks = computed(() =>
        buildDisplayScheduleDays(
            this.schedule_entries(),
            this.template_mappings(),
            this.days(),
        ),
    );

    public readonly weekLabel = computed(() => {
        const start = this.week_start();
        const end = addDays(start, 6);
        if (start.getFullYear() !== end.getFullYear()) {
            return `${format(start, 'MMM d, yyyy')} – ${format(end, 'MMM d, yyyy')}`;
        }
        if (start.getMonth() !== end.getMonth()) {
            return `${format(start, 'MMM d')} – ${format(end, 'MMM d, yyyy')}`;
        }
        return `${format(start, 'MMM d')} – ${format(end, 'd, yyyy')}`;
    });

    public isToday(day: Date): boolean {
        return isSameDay(day, new Date());
    }

    public block_tooltip(block: ScheduleBlock): string {
        return `${block.playlist.name} · ${block.label}`;
    }

    public previousWeek(): void {
        this.week_offset.update((v) => v - 1);
    }

    public nextWeek(): void {
        this.week_offset.update((v) => v + 1);
    }

    public goToToday(): void {
        this.week_offset.set(0);
    }
}
