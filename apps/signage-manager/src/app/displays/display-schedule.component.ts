import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import {
    addDays,
    format,
    isSameDay,
    startOfDay,
    startOfWeek,
} from 'date-fns';
import { SignageService } from '../signage.service';

const BLOCK_PALETTE = [
    { bg: '#dbeafe', text: '#1e40af' },
    { bg: '#d1fae5', text: '#065f46' },
    { bg: '#fef3c7', text: '#92400e' },
    { bg: '#fee2e2', text: '#991b1b' },
    { bg: '#ede9fe', text: '#5b21b6' },
    { bg: '#fce7f3', text: '#9d174d' },
    { bg: '#cffafe', text: '#155e75' },
];

interface ScheduleBlock {
    playlist: SignagePlaylist;
    day_index: number;
    start_minutes: number;
    duration_minutes: number;
    all_day: boolean;
    bg_color: string;
    text_color: string;
    label: string;
}

interface AllDaySpan {
    playlist: SignagePlaylist;
    start_day_index: number;
    end_day_index: number;
    row_index: number;
    bg_color: string;
    text_color: string;
}

function matchesCronPart(value: number, cron_part: string): boolean {
    if (cron_part === '*') return true;
    if (cron_part.includes(','))
        return cron_part
            .split(',')
            .some((item) => matchesCronPart(value, item));
    if (cron_part.includes('-')) {
        const [start, end] = cron_part.split('-').map(Number);
        return value >= start && value <= end;
    }
    if (cron_part.includes('/')) {
        const [, step] = cron_part.split('/');
        return value % Number(step) === 0;
    }
    return Number(cron_part) === value;
}

function parseDurationMinutes(hhmm: string): number {
    const [h, m] = hhmm.split(':').map(Number);
    return (h || 0) * 60 + (m || 0);
}

function formatTime(minutes: number): string {
    const h = Math.floor(minutes / 60) % 24;
    const m = minutes % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function parsePlayAt(play_at: string): Date | null {
    if (!play_at || play_at === '0') return null;
    const num = Number(play_at);
    if (!isNaN(num) && num > 0) return new Date(num * 1000);
    const date = new Date(play_at);
    return isNaN(date.getTime()) ? null : date;
}

function isDayInRange(
    day: Date,
    valid_from?: number,
    valid_until?: number,
): boolean {
    const day_start = startOfDay(day).getTime();
    if (valid_from) {
        const from_start = startOfDay(new Date(valid_from * 1000)).getTime();
        if (day_start < from_start) return false;
    }
    if (valid_until) {
        const until_start = startOfDay(new Date(valid_until * 1000)).getTime();
        if (day_start > until_start) return false;
    }
    return true;
}

function getCronBlocksForDay(
    cron: string,
    play_hours: string,
): Omit<ScheduleBlock, 'playlist' | 'day_index' | 'bg_color' | 'text_color'>[] {
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) return [];
    const [minute_part, hour_part] = parts;
    const duration = play_hours ? parseDurationMinutes(play_hours) : 60;
    const blocks: Omit<
        ScheduleBlock,
        'playlist' | 'day_index' | 'bg_color' | 'text_color'
    >[] = [];
    for (let h = 0; h < 24; h++) {
        if (!matchesCronPart(h, hour_part)) continue;
        for (let m = 0; m < 60; m++) {
            if (!matchesCronPart(m, minute_part)) continue;
            const start_mins = h * 60 + m;
            blocks.push({
                start_minutes: start_mins,
                duration_minutes: duration,
                all_day: false,
                label: `${formatTime(start_mins)} – ${formatTime(start_mins + duration)}`,
            });
        }
    }
    return blocks;
}

function doesCronMatchDay(cron: string, day: Date): boolean {
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) return false;
    const [, , dom_part, month_part, dow_part] = parts;
    const month = day.getMonth() + 1;
    const day_of_month = day.getDate();
    const day_of_week = day.getDay();
    if (!matchesCronPart(month, month_part)) return false;
    if (dom_part === '*' && dow_part === '*') return true;
    if (dom_part !== '*' && dow_part === '*')
        return matchesCronPart(day_of_month, dom_part);
    if (dom_part === '*' && dow_part !== '*')
        return matchesCronPart(day_of_week, dow_part);
    return (
        matchesCronPart(day_of_month, dom_part) ||
        matchesCronPart(day_of_week, dow_part)
    );
}

function generateScheduleBlocks(
    playlist: SignagePlaylist,
    days: Date[],
    palette_index: number,
): ScheduleBlock[] {
    const color = BLOCK_PALETTE[palette_index % BLOCK_PALETTE.length];
    const blocks: ScheduleBlock[] = [];
    const { play_hours, play_at, play_cron, valid_from, valid_until } =
        playlist;
    const has_cron = !!play_cron?.trim();
    const has_at = !!play_at && play_at !== '0';
    const has_hours = !!play_hours?.trim();
    const is_range = has_hours && play_hours.includes('-');

    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        if (!isDayInRange(day, valid_from, valid_until)) continue;

        if (has_cron) {
            if (!doesCronMatchDay(play_cron, day)) continue;
            const cron_blocks = getCronBlocksForDay(play_cron, play_hours);
            for (const cb of cron_blocks) {
                blocks.push({
                    ...cb,
                    playlist,
                    day_index: i,
                    bg_color: color.bg,
                    text_color: color.text,
                });
            }
        } else if (has_at) {
            const at_date = parsePlayAt(play_at);
            if (!at_date || !isSameDay(day, at_date)) continue;
            const start_mins =
                at_date.getHours() * 60 + at_date.getMinutes();
            const duration = has_hours
                ? parseDurationMinutes(play_hours)
                : 60;
            blocks.push({
                playlist,
                day_index: i,
                start_minutes: start_mins,
                duration_minutes: duration,
                all_day: false,
                bg_color: color.bg,
                text_color: color.text,
                label: `${formatTime(start_mins)} – ${formatTime(start_mins + duration)}`,
            });
        } else if (is_range) {
            const [start_str, end_str] = play_hours.split('-');
            const start_mins = parseDurationMinutes(start_str);
            const end_mins = parseDurationMinutes(end_str);
            const duration =
                end_mins > start_mins
                    ? end_mins - start_mins
                    : 1440 - start_mins + end_mins;
            blocks.push({
                playlist,
                day_index: i,
                start_minutes: start_mins,
                duration_minutes: duration,
                all_day: false,
                bg_color: color.bg,
                text_color: color.text,
                label: `${start_str} – ${end_str}`,
            });
        } else {
            blocks.push({
                playlist,
                day_index: i,
                start_minutes: 0,
                duration_minutes: 1440,
                all_day: true,
                bg_color: color.bg,
                text_color: color.text,
                label: playlist.name,
            });
        }
    }
    return blocks;
}

function buildAllDaySpans(blocks: ScheduleBlock[]): AllDaySpan[] {
    const sorted_blocks = [...blocks]
        .filter((block) => block.all_day)
        .sort((left, right) => {
            if (left.playlist.id !== right.playlist.id) {
                return left.playlist.id.localeCompare(right.playlist.id);
            }
            return left.day_index - right.day_index;
        });
    const merged_spans: Omit<AllDaySpan, 'row_index'>[] = [];
    for (const block of sorted_blocks) {
        const last_span = merged_spans[merged_spans.length - 1];
        if (
            last_span &&
            last_span.playlist.id === block.playlist.id &&
            last_span.end_day_index + 1 === block.day_index
        ) {
            last_span.end_day_index = block.day_index;
            continue;
        }
        merged_spans.push({
            playlist: block.playlist,
            start_day_index: block.day_index,
            end_day_index: block.day_index,
            bg_color: block.bg_color,
            text_color: block.text_color,
        });
    }

    const row_end_indexes: number[] = [];
    return merged_spans
        .sort((left, right) => {
            if (left.start_day_index !== right.start_day_index) {
                return left.start_day_index - right.start_day_index;
            }
            return left.end_day_index - right.end_day_index;
        })
        .map((span) => {
            let row_index = row_end_indexes.findIndex(
                (end_index) => end_index < span.start_day_index,
            );
            if (row_index < 0) {
                row_index = row_end_indexes.length;
                row_end_indexes.push(span.end_day_index);
            } else {
                row_end_indexes[row_index] = span.end_day_index;
            }
            return { ...span, row_index };
        });
}

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const HOURS = Array.from({ length: 24 }, (_, i) => ({
    label: `${i % 12 || 12} ${i >= 12 ? 'PM' : 'AM'}`,
    index: i,
}));

@Component({
    selector: 'display-schedule',
    template: `
        <div class="flex h-full flex-col overflow-hidden">
            <!-- Navigation -->
            <div
                class="border-base-200 flex items-center gap-1 border-b px-3 py-2"
            >
                <button
                    icon
                    matRipple
                    matTooltip="Previous week"
                    (click)="previousWeek()"
                >
                    <icon>chevron_left</icon>
                </button>
                <button
                    icon
                    matRipple
                    matTooltip="This week"
                    (click)="goToToday()"
                >
                    <icon>today</icon>
                </button>
                <button
                    icon
                    matRipple
                    matTooltip="Next week"
                    (click)="nextWeek()"
                >
                    <icon>chevron_right</icon>
                </button>
                <span class="ml-2 text-sm font-medium">
                    {{ weekLabel() }}
                </span>
            </div>

            @if (display_playlists().length === 0) {
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-2 opacity-30"
                >
                    <icon class="text-4xl">event_busy</icon>
                    <p class="text-sm">
                        No playlists assigned to this display.
                    </p>
                </div>
            } @else {
                <!-- Calendar grid -->
                <div class="relative min-h-0 flex-1">
                    <div class="absolute inset-0 overflow-auto">
                        <div style="min-width: calc(5rem + 42rem)">
                            <!-- Day headers (sticky top) -->
                            <div
                                class="border-base-200 bg-base-100 sticky top-0 z-30 flex h-14 border-b"
                            >
                                <div
                                    class="bg-base-100 sticky left-0 z-10 w-20 shrink-0"
                                ></div>
                                @for (day of days(); track $index) {
                                    <div
                                        class="border-base-200 flex flex-1 flex-col items-center justify-center border-r"
                                    >
                                        <div
                                            class="text-[10px] uppercase opacity-50"
                                        >
                                            {{ dayNames[$index] }}
                                        </div>
                                        <div
                                            class="text-sm"
                                            [class.text-info]="isToday(day)"
                                            [class.font-bold]="
                                                isToday(day)
                                            "
                                        >
                                            {{ day | date: 'd' }}
                                        </div>
                                    </div>
                                }
                            </div>

                            <!-- All-day row -->
                            <div
                                class="border-base-200 relative border-b"
                                [style.min-height.px]="allDayRowHeight()"
                            >
                                <div class="flex h-full">
                                    <div
                                        class="bg-base-100 sticky left-0 z-10 flex w-20 shrink-0 items-center justify-end pr-2"
                                    >
                                        <span class="text-[10px] opacity-40"
                                            >All Day</span
                                        >
                                    </div>
                                    @for (day of days(); track $index) {
                                        <div
                                            class="border-base-200 flex-1 border-r"
                                        ></div>
                                    }
                                </div>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0"
                                    style="left: 5rem"
                                >
                                    @for (
                                        span of allDaySpans();
                                        track span.playlist.id +
                                            '_' +
                                            span.start_day_index +
                                            '_' +
                                            span.end_day_index
                                    ) {
                                        <a
                                            [routerLink]="[
                                                '/playlists',
                                                span.playlist.id,
                                            ]"
                                            class="pointer-events-auto absolute overflow-hidden truncate rounded px-1.5 py-0.5 text-[10px] font-medium no-underline"
                                            [style.background-color]="
                                                span.bg_color
                                            "
                                            [style.color]="span.text_color"
                                            [style.left]="
                                                'calc(' +
                                                (span.start_day_index / 7) *
                                                    100 +
                                                '% + 2px)'
                                            "
                                            [style.width]="
                                                'calc(' +
                                                ((span.end_day_index -
                                                    span.start_day_index +
                                                    1) /
                                                    7) *
                                                    100 +
                                                '% - 4px)'
                                            "
                                            [style.top.px]="
                                                span.row_index * 24 + 4
                                            "
                                            [style.height.px]="18"
                                            [matTooltip]="span.playlist.name"
                                        >
                                            {{ span.playlist.name }}
                                        </a>
                                    }
                                </div>
                            </div>

                            <!-- Hour grid -->
                            <div class="relative">
                                @for (
                                    hour of hours;
                                    track hour.index
                                ) {
                                    <div
                                        class="border-base-200 flex h-10 border-b"
                                    >
                                        <div
                                            class="bg-base-100 sticky left-0 z-10 relative w-20 shrink-0"
                                        >
                                            @if (hour.index > 0) {
                                                <div
                                                    class="absolute top-0 right-2 -translate-y-1/2 text-[10px] whitespace-nowrap opacity-50"
                                                >
                                                    {{ hour.label }}
                                                </div>
                                            }
                                        </div>
                                        <div class="flex-1"></div>
                                    </div>
                                }

                                <!-- Day columns overlay -->
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex"
                                    style="left: 5rem"
                                >
                                    @for (
                                        day of days();
                                        track $index;
                                        let i = $index
                                    ) {
                                        <div
                                            class="border-base-200 relative flex-1 border-r"
                                        >
                                            @for (
                                                block of timedBlocks()[
                                                    i
                                                ];
                                                track block.playlist.id +
                                                    '_' +
                                                    block.start_minutes
                                            ) {
                                                <a
                                                    [routerLink]="[
                                                        '/playlists',
                                                        block.playlist.id,
                                                    ]"
                                                    matRipple
                                                    class="pointer-events-auto absolute inset-x-0.5 overflow-hidden rounded border border-black/10 no-underline shadow-sm"
                                                    [style.background-color]="
                                                        block.bg_color
                                                    "
                                                    [style.color]="
                                                        block.text_color
                                                    "
                                                    [style.top]="
                                                        (block.start_minutes /
                                                            1440) *
                                                            100 +
                                                        '%'
                                                    "
                                                    [style.height]="
                                                        (block.duration_minutes /
                                                            1440) *
                                                            100 +
                                                        '%'
                                                    "
                                                    [style.min-height.px]="
                                                        18
                                                    "
                                                    [matTooltip]="
                                                        block.playlist
                                                            .name +
                                                        ' · ' +
                                                        block.label
                                                    "
                                                >
                                                    <div
                                                        class="truncate px-1.5 py-0.5 text-[10px] leading-tight"
                                                    >
                                                        <div
                                                            class="font-medium"
                                                        >
                                                            {{
                                                                block
                                                                    .playlist
                                                                    .name
                                                            }}
                                                        </div>
                                                        <div
                                                            class="opacity-75"
                                                        >
                                                            {{
                                                                block.label
                                                            }}
                                                        </div>
                                                    </div>
                                                </a>
                                            }
                                            @if (isToday(day)) {
                                                <div
                                                    class="border-error pointer-events-none absolute inset-x-0 z-10 h-0 border-t-2"
                                                    [style.top]="
                                                        nowOffset *
                                                            100 +
                                                        '%'
                                                    "
                                                >
                                                    <div
                                                        class="bg-error absolute top-0 left-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                                    ></div>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
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
        `,
    ],
    imports: [
        DatePipe,
        MatRippleModule,
        MatTooltipModule,
        RouterLink,
        IconComponent,
    ],
})
export class DisplayScheduleComponent {
    private readonly _service = inject(SignageService);

    public readonly selected_display = this._service.selected_display;
    private readonly _playlists = toSignal(this._service.playlists, {
        initialValue: [],
    });

    public readonly week_offset = signal(0);

    public readonly week_start = computed(() => {
        const base = startOfWeek(new Date(), { weekStartsOn: 1 });
        return addDays(base, this.week_offset() * 7);
    });

    public readonly days = computed(() =>
        Array.from({ length: 7 }, (_, i) => addDays(this.week_start(), i)),
    );

    public readonly display_playlists = computed(() => {
        const display = this.selected_display();
        if (!display) return [];
        return this._playlists().filter((p) =>
            display.playlists?.includes(p.id),
        );
    });

    public readonly schedule_entries = computed(() => {
        const playlists = this.display_playlists();
        const days = this.days();
        const blocks: ScheduleBlock[] = [];
        playlists.forEach((playlist, idx) => {
            blocks.push(...generateScheduleBlocks(playlist, days, idx));
        });
        return blocks;
    });

    public readonly allDaySpans = computed(() =>
        buildAllDaySpans(this.schedule_entries()),
    );

    public readonly timedBlocks = computed(() => {
        const result: ScheduleBlock[][] = Array.from(
            { length: 7 },
            () => [],
        );
        for (const block of this.schedule_entries()) {
            if (!block.all_day) result[block.day_index].push(block);
        }
        return result;
    });

    public readonly allDayRowHeight = computed(() => {
        const row_count =
            Math.max(
                -1,
                ...this.allDaySpans().map((span) => span.row_index),
            ) + 1;
        return Math.max(28, row_count * 24 + 8);
    });

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

    public readonly hours = HOURS;
    public readonly dayNames = DAY_NAMES;

    public get nowOffset(): number {
        const now = new Date();
        return (now.getHours() * 60 + now.getMinutes()) / 1440;
    }

    public isToday(day: Date): boolean {
        return isSameDay(day, new Date());
    }

    public previousWeek() {
        this.week_offset.update((v) => v - 1);
    }

    public nextWeek() {
        this.week_offset.update((v) => v + 1);
    }

    public goToToday() {
        this.week_offset.set(0);
    }
}
