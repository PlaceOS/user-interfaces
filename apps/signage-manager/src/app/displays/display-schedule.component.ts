import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { SignagePlaylist } from '@placeos/ts-client';
import { addDays, format, isSameDay, startOfDay, startOfWeek } from 'date-fns';
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

const DAY_COUNT = 7;
const MINUTES_PER_DAY = 1440;
const DEFAULT_PLAYLIST_DURATION = 60;

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

type ScheduleBlockBase = Omit<
    ScheduleBlock,
    'playlist' | 'day_index' | 'bg_color' | 'text_color'
>;

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

function formatTimeRange(
    start_minutes: number,
    duration_minutes: number,
): string {
    return `${formatTime(start_minutes)} – ${formatTime(start_minutes + duration_minutes)}`;
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
): ScheduleBlockBase[] {
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) return [];
    const [minute_part, hour_part] = parts;
    const duration = play_hours
        ? parseDurationMinutes(play_hours)
        : DEFAULT_PLAYLIST_DURATION;
    const blocks: ScheduleBlockBase[] = [];
    for (let h = 0; h < 24; h++) {
        if (!matchesCronPart(h, hour_part)) continue;
        for (let m = 0; m < 60; m++) {
            if (!matchesCronPart(m, minute_part)) continue;
            const start_mins = h * 60 + m;
            blocks.push({
                start_minutes: start_mins,
                duration_minutes: duration,
                all_day: false,
                label: formatTimeRange(start_mins, duration),
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
            const start_mins = at_date.getHours() * 60 + at_date.getMinutes();
            const duration = has_hours
                ? parseDurationMinutes(play_hours)
                : DEFAULT_PLAYLIST_DURATION;
            blocks.push({
                playlist,
                day_index: i,
                start_minutes: start_mins,
                duration_minutes: duration,
                all_day: false,
                bg_color: color.bg,
                text_color: color.text,
                label: formatTimeRange(start_mins, duration),
            });
        } else if (is_range) {
            const [start_str, end_str] = play_hours.split('-');
            const start_mins = parseDurationMinutes(start_str);
            const end_mins = parseDurationMinutes(end_str);
            const duration =
                end_mins > start_mins
                    ? end_mins - start_mins
                    : MINUTES_PER_DAY - start_mins + end_mins;
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
                duration_minutes: MINUTES_PER_DAY,
                all_day: true,
                bg_color: color.bg,
                text_color: color.text,
                label: playlist.name,
            });
        }
    }
    return blocks;
}

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

@Component({
    selector: 'display-schedule',
    template: `
        <div class="flex h-full flex-col overflow-hidden">
            <!-- Navigation -->
            <div
                class="border-base-200 flex items-center justify-center gap-1 border-b px-3 py-2"
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
                <span class="ml-2 text-sm font-medium">
                    {{ weekLabel() }}
                </span>
                <button
                    icon
                    matRipple
                    matTooltip="Next week"
                    (click)="nextWeek()"
                >
                    <icon>chevron_right</icon>
                </button>
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
                <div timeline class="z-0 grid min-h-0 flex-1 overflow-auto">
                    <div
                        day-headers
                        class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-w-[calc(100%-5rem)] items-center border-b"
                        [style.width]="days().length * 12 + 'rem'"
                    >
                        @for (day of days(); track day) {
                            <div
                                class="relative flex h-full min-w-48 flex-1 flex-col items-center justify-center py-2 leading-tight"
                            >
                                <div class="text-[10px] uppercase opacity-50">
                                    {{ dayNames[$index] }}
                                </div>
                                <div
                                    class="truncate text-sm"
                                    [class.text-info]="isToday(day)"
                                    [class.font-semibold]="isToday(day)"
                                >
                                    {{ day | date: 'EEE, MMM d' }}
                                </div>
                                @if (isToday(day)) {
                                    <div
                                        class="text-info absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px]"
                                    >
                                        Today
                                    </div>
                                }
                                <div
                                    class="bg-base-300 absolute bottom-0 -left-px h-2 w-px"
                                ></div>
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
                                class="border-base-200 min-w-48 flex-1 border-r p-2 last:border-none"
                            >
                                @if (day_blocks()[day_index].all_day.length) {
                                    <div class="mb-2 space-y-1">
                                        @for (
                                            block of day_blocks()[day_index]
                                                .all_day;
                                            track block.playlist.id +
                                                '_' +
                                                block.day_index
                                        ) {
                                            <a
                                                [routerLink]="[
                                                    '/playlists',
                                                    block.playlist.id,
                                                ]"
                                                class="border-base-200 hover:border-info flex w-full items-center gap-2 rounded-sm border px-2 py-1.5 text-left no-underline"
                                                [matTooltip]="
                                                    block_tooltip(block)
                                                "
                                            >
                                                <div
                                                    class="h-2 w-2 shrink-0 rounded-full"
                                                    [style.background-color]="
                                                        block.text_color
                                                    "
                                                ></div>
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-sm font-medium"
                                                    >
                                                        {{
                                                            block.playlist.name
                                                        }}
                                                    </div>
                                                    <div
                                                        class="text-xs opacity-60"
                                                    >
                                                        All day
                                                    </div>
                                                </div>
                                            </a>
                                        }
                                    </div>
                                }
                                @if (day_blocks()[day_index].timed.length) {
                                    <div class="space-y-1">
                                        @for (
                                            block of day_blocks()[day_index]
                                                .timed;
                                            track block.playlist.id +
                                                '_' +
                                                block.day_index +
                                                '_' +
                                                block.start_minutes
                                        ) {
                                            <a
                                                [routerLink]="[
                                                    '/playlists',
                                                    block.playlist.id,
                                                ]"
                                                class="hover:bg-base-200 flex w-full gap-2 rounded-sm px-2 py-2 text-left no-underline"
                                                [matTooltip]="
                                                    block_tooltip(block)
                                                "
                                            >
                                                <div
                                                    class="my-1.5 h-2 w-2 shrink-0 rounded-full"
                                                    [style.background-color]="
                                                        block.text_color
                                                    "
                                                ></div>
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-sm"
                                                    >
                                                        {{
                                                            block.playlist.name
                                                        }}
                                                    </div>
                                                    <div
                                                        class="text-xs opacity-60"
                                                    >
                                                        {{ block.label }}
                                                    </div>
                                                </div>
                                            </a>
                                        }
                                    </div>
                                }
                                @if (
                                    !day_blocks()[day_index].all_day.length &&
                                    !day_blocks()[day_index].timed.length
                                ) {
                                    <div
                                        class="flex min-h-24 items-center justify-center rounded-sm border border-dashed opacity-30"
                                    >
                                        <span class="text-xs">
                                            No scheduled playlists
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

    public readonly schedule_entries = computed(() => {
        const playlists = this.display_playlists();
        const days = this.days();
        return playlists.flatMap((playlist, index) =>
            generateScheduleBlocks(playlist, days, index),
        );
    });

    public readonly day_blocks = computed(() => {
        const result: { all_day: ScheduleBlock[]; timed: ScheduleBlock[] }[] =
            Array.from({ length: DAY_COUNT }, () => ({
                all_day: [],
                timed: [],
            }));
        for (const block of this.schedule_entries()) {
            if (block.all_day) {
                result[block.day_index].all_day.push(block);
            } else {
                result[block.day_index].timed.push(block);
            }
        }
        for (const day_blocks of result) {
            day_blocks.all_day.sort((left, right) =>
                left.playlist.name.localeCompare(right.playlist.name),
            );
            day_blocks.timed.sort(
                (left, right) => left.start_minutes - right.start_minutes,
            );
        }
        return result;
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

    public readonly dayNames = DAY_NAMES;

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
