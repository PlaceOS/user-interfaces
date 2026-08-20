import { DatePipe } from '@angular/common';
import { Component, computed, inject, linkedSignal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import {
    IconComponent,
    MediaDurationPipe,
    TranslatePipe,
} from '@placeos/components';
import {
    MediaAnimation,
    SignagePlaylist,
    type SignagePlaylistSchedule,
} from '@placeos/ts-client';
import { fromUnixTime } from 'date-fns';
import { SignageSharedWithComponent } from '../shared/signage-shared-with.component';
import { SignageService } from '../signage.service';

const DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
const WEEKDAY_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

function matchesCronPart(value: number, cron_part: string) {
    if (cron_part === '*') return true;
    if (cron_part.includes(',')) {
        return cron_part
            .split(',')
            .some((item) => matchesCronPart(value, item));
    }
    if (cron_part.includes('/')) {
        const [base, step] = cron_part.split('/');
        return !!+step && value % +step === 0 && matchesCronPart(value, base);
    }
    if (cron_part.includes('-')) {
        const [start, end] = cron_part.split('-').map(Number);
        return value >= start && value <= end;
    }
    return Number(cron_part) === value;
}

function isCronMonthlyWeekday(day_part: string, weekday_part: string) {
    return /^\d+-\d+(,\d+-\d+)*$/.test(day_part || '') && weekday_part !== '*';
}

function doesCronMatchDate(cron: string, date: Date) {
    const parts = cron.trim().split(/\s+/);
    if (parts.length !== 5) return false;
    const [minute, hour, day, month, day_of_week] = parts;
    if (!matchesCronPart(date.getMinutes(), minute)) return false;
    if (!matchesCronPart(date.getHours(), hour)) return false;
    if (!matchesCronPart(date.getMonth() + 1, month)) return false;
    const day_matches = matchesCronPart(date.getDate(), day);
    const weekday_matches = matchesCronPart(date.getDay(), day_of_week);
    if (day === '*' && day_of_week === '*') return true;
    if (day !== '*' && day_of_week === '*') return day_matches;
    if (day === '*' && day_of_week !== '*') return weekday_matches;
    if (isCronMonthlyWeekday(day, day_of_week)) {
        return day_matches && weekday_matches;
    }
    return day_matches || weekday_matches;
}

function ordinal(value: number) {
    if (value >= 11 && value <= 13) return `${value}th`;
    switch (value % 10) {
        case 1:
            return `${value}st`;
        case 2:
            return `${value}nd`;
        case 3:
            return `${value}rd`;
        default:
            return `${value}th`;
    }
}

function formatCronTime(hour_part: string, minute_part: string) {
    const date = new Date();
    date.setHours(+hour_part || 0, +minute_part || 0, 0, 0);
    return date.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
    });
}

function durationLabel(duration_minutes: number) {
    if (!duration_minutes) return 'one playlist pass';
    if (duration_minutes < 60) {
        return `${duration_minutes} minute${duration_minutes === 1 ? '' : 's'}`;
    }
    if (duration_minutes % 60 === 0) {
        const hours = duration_minutes / 60;
        return `${hours} hour${hours === 1 ? '' : 's'}`;
    }
    const hours = Math.floor(duration_minutes / 60);
    const minutes = duration_minutes % 60;
    return `${hours} hr ${minutes} min`;
}

function parseCronList(value: string, min: number, max: number) {
    const values = new Set<number>();
    if (!value || value === '*') return [];
    for (const part of value.split(',')) {
        if (part.includes('-')) {
            const [start, end] = part.split('-').map(Number);
            if (start < min || end > max || start > end) return [];
            for (let item = start; item <= end; item++) values.add(item);
        } else {
            const item = Number(part);
            if (item < min || item > max) return [];
            values.add(item);
        }
    }
    return [...values].sort((a, b) => a - b);
}

function listText(values: string[]) {
    if (values.length <= 1) return values[0] || '';
    if (values.length === 2) return `${values[0]} and ${values[1]}`;
    return `${values.slice(0, -1).join(', ')} and ${values.at(-1)}`;
}

function weekOfMonthLabel(day_part: string) {
    const [start, end] = day_part.split('-').map(Number);
    if (start === 1 && end === 7) return '1st';
    if (start === 8 && end === 14) return '2nd';
    if (start === 15 && end === 21) return '3rd';
    if (start === 22 && end === 28) return '4th';
    if (start === 29 && end === 31) return '5th';
    return '';
}

function weekOfMonthLabels(day_part: string) {
    const labels = day_part.split(',').map((range) => weekOfMonthLabel(range));
    return labels.every((label) => label) ? labels : [];
}

function humanizeCronSchedule(cron: string, duration_minutes: number) {
    const parts = (cron || '0 0 * * *').trim().split(/\s+/);
    if (parts.length !== 5) return `Custom schedule (${cron})`;
    const [minute, hour, day, month, day_of_week] = parts;
    const duration = durationLabel(duration_minutes);
    const suffix = ` for ${duration}`;
    if (month !== '*') return `Custom schedule (${cron})`;
    const minute_interval = /^\*\/(\d+)$/.exec(minute)?.[1];
    if (minute === '*' && hour === '*' && day === '*' && day_of_week === '*') {
        return `Every minute${suffix}`;
    }
    if (minute_interval && hour === '*' && day === '*' && day_of_week === '*') {
        return `Every ${minute_interval} minutes${suffix}`;
    }
    const hour_interval = /^\*\/(\d+)$/.exec(hour)?.[1];
    if (minute === '0' && hour === '*' && day === '*' && day_of_week === '*') {
        return `Every hour${suffix}`;
    }
    if (minute === '0' && hour_interval && day === '*' && day_of_week === '*') {
        return `Every ${hour_interval} hours${suffix}`;
    }
    if (!/^\d+$/.test(minute) || !/^\d+$/.test(hour)) {
        return `Custom schedule (${cron})`;
    }
    const time = formatCronTime(hour, minute);
    if (day === '*' && day_of_week === '*') {
        return `Every day at ${time}${suffix}`;
    }
    if (day === '*' && day_of_week === '1-5') {
        return `Weekdays at ${time}${suffix}`;
    }
    if (day === '*' && day_of_week !== '*') {
        const weekdays = parseCronList(day_of_week, 0, 6).map(
            (day_value) => WEEKDAY_NAMES[day_value],
        );
        return weekdays.length
            ? `Every ${listText(weekdays)} at ${time}${suffix}`
            : `Custom schedule (${cron})`;
    }
    if (day !== '*' && day_of_week === '*') {
        const days = parseCronList(day, 1, 31).map((day_value) =>
            ordinal(day_value),
        );
        return days.length
            ? `On the ${listText(days)} of each month at ${time}${suffix}`
            : `Custom schedule (${cron})`;
    }
    if (isCronMonthlyWeekday(day, day_of_week)) {
        const weeks = weekOfMonthLabels(day);
        const weekdays = parseCronList(day_of_week, 0, 6).map(
            (day_value) => WEEKDAY_NAMES[day_value],
        );
        return weeks.length && weekdays.length
            ? `On the ${listText(weeks)} ${listText(weekdays)} of each month at ${time}${suffix}`
            : `Custom schedule (${cron})`;
    }
    return `Custom schedule (${cron})`;
}

function formatPlayDateTime(date: Date) {
    return date.toLocaleString(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });
}

function formatPlayTime(date: Date) {
    return date.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
    });
}

function formatPlayDateTimeRange(start: Date, duration_minutes: number) {
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + Math.max(0, duration_minutes || 0));
    if (duration_minutes > 0) end.setSeconds(end.getSeconds() - 1);
    const end_text =
        start.toDateString() === end.toDateString()
            ? formatPlayTime(end)
            : formatPlayDateTime(end);
    return `${formatPlayDateTime(start)} – ${end_text}`;
}

function nextCronPlayDates(cron: string, count: number) {
    const result: Date[] = [];
    if (!cron?.trim()) return result;
    const date = new Date();
    date.setSeconds(0, 0);
    date.setMinutes(date.getMinutes() + 1);
    const end = new Date(date);
    end.setFullYear(end.getFullYear() + 2);
    while (date <= end && result.length < count) {
        if (doesCronMatchDate(cron, date)) result.push(new Date(date));
        date.setMinutes(date.getMinutes() + 1);
    }
    return result;
}

function playlistSchedules(playlist: SignagePlaylist) {
    const legacy_playlist = playlist as SignagePlaylist & {
        play_at?: number;
        play_cron?: string;
        play_period?: number;
        play_takeover?: boolean;
    };
    if (playlist.schedules?.length) return playlist.schedules;
    return [
        {
            play_at: legacy_playlist.play_at,
            play_cron: legacy_playlist.play_cron || '0 0 * * *',
            play_period:
                legacy_playlist.play_period ?? DEFAULT_PLAY_PERIOD_MINUTES,
            play_takeover: !!legacy_playlist.play_takeover,
        },
    ];
}

function schedulePeriod(schedule: Partial<SignagePlaylistSchedule>) {
    return Number.isFinite(schedule.play_period)
        ? schedule.play_period || 0
        : DEFAULT_PLAY_PERIOD_MINUTES;
}

function scheduleLabel(schedule: Partial<SignagePlaylistSchedule>) {
    const period = schedulePeriod(schedule);
    if (schedule.play_at) {
        const date = fromUnixTime(schedule.play_at);
        return `Plays once on ${date.toLocaleString()} for ${durationLabel(period)}`;
    }
    return `${humanizeCronSchedule(schedule.play_cron || '0 0 * * *', period)}${
        schedule.play_takeover ? ' · takeover' : ''
    }`;
}

interface PlaySession {
    start: Date;
    period: number;
}

function nextSchedulePlaySessions(
    schedule: Partial<SignagePlaylistSchedule>,
    count: number,
): PlaySession[] {
    const period = schedulePeriod(schedule);
    if (schedule.play_at) {
        const start = fromUnixTime(schedule.play_at);
        const end = new Date(start);
        end.setMinutes(end.getMinutes() + Math.max(0, period || 0));
        if (period > 0) end.setSeconds(end.getSeconds() - 1);
        return end >= new Date() ? [{ start, period }] : [];
    }
    return nextCronPlayDates(schedule.play_cron || '0 0 * * *', count).map(
        (start) => ({ start, period }),
    );
}

@Component({
    selector: 'playlist-item-details',
    template: `
        @if (playlist()) {
            <div
                class="border-base-300 flex h-full min-w-60 flex-col overflow-hidden border-l lg:w-84"
            >
                <mat-tab-group
                    class="flex-1 overflow-hidden"
                    [selectedIndex]="active_tab()"
                    (selectedIndexChange)="active_tab.set($event)"
                >
                    <mat-tab [label]="'COMMON.DETAILS' | translate">
                        <div class="h-full overflow-auto">
                            <div class="flex w-full flex-col gap-2 p-4">
                                <div class="w-full">
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{ 'FORM.NAME' | translate }}
                                    </div>
                                    <div class="text-sm font-medium">
                                        {{ playlist().name }}
                                    </div>
                                </div>
                                @if (playlist().description) {
                                    <div class="w-full">
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'COMMON.DESCRIPTION' | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{ playlist().description }}
                                        </div>
                                    </div>
                                }
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{ 'COMMON.STATUS' | translate }}
                                    </div>
                                    @if (playlist().enabled) {
                                        <span
                                            class="bg-success text-success-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            {{ 'COMMON.ENABLED' | translate }}
                                        </span>
                                    } @else {
                                        <span
                                            class="bg-warning text-warning-content rounded px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            {{ 'COMMON.DISABLED' | translate }}
                                        </span>
                                    }
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.PLAYBACK'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{
                                            (playlist().random
                                                ? 'SIGNAGE_MANAGER.SHUFFLE'
                                                : 'SIGNAGE_MANAGER.SEQUENTIAL'
                                            ) | translate
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.DEFAULT_DURATION'
                                                | translate
                                        }}
                                    </div>
                                    <div class="font-mono text-sm">
                                        {{
                                            playlist().default_duration / 1000
                                                | mediaDuration
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.DEFAULT_ANIMATION'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{ animation_label() | translate }}
                                    </div>
                                </div>
                                @if (playlist().orientation) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.ORIENTATION'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm capitalize">
                                            {{
                                                playlist().orientation ||
                                                    ('COMMON.LOCATION_UNSPECIFIED'
                                                        | translate)
                                            }}
                                        </div>
                                    </div>
                                }
                                <div>
                                    <div
                                        class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.TAB_ITEMS'
                                                | translate
                                        }}
                                    </div>
                                    <div class="text-sm">
                                        {{ item_count() }}
                                    </div>
                                </div>
                                @if (playlist().valid_from) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.VALID_FROM'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{
                                                valid_from() | date: 'longDate'
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (playlist().valid_until) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{ 'FORM.EXPIRES_AT' | translate }}
                                        </div>
                                        <div class="text-sm">
                                            {{
                                                valid_until() | date: 'longDate'
                                            }}
                                        </div>
                                    </div>
                                }
                                @if (!playlist().distribution) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.SCHEDULE'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="space-y-1 text-sm">
                                            @for (
                                                schedule of schedule_labels();
                                                track schedule
                                            ) {
                                                <div>{{ schedule }}</div>
                                            }
                                        </div>
                                        <div class="mt-2">
                                            <div
                                                class="text-base-content/60 mb-1 text-xs font-medium tracking-wide uppercase"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.NEXT_5_PLAYS'
                                                        | translate
                                                }}
                                            </div>
                                            <div
                                                class="text-base-content/80 space-y-0.5 font-mono text-xs leading-tight"
                                            >
                                                @for (
                                                    play_time of next_play_sessions();
                                                    track play_time
                                                ) {
                                                    <div class="truncate">
                                                        {{ play_time }}
                                                    </div>
                                                } @empty {
                                                    <div
                                                        class="text-base-content/60"
                                                    >
                                                        {{
                                                            'SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES'
                                                                | translate
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                                @if (playlist().play_count) {
                                    <div>
                                        <div
                                            class="text-base-content/70 mb-1 text-xs font-medium tracking-wider uppercase"
                                        >
                                            {{
                                                'SIGNAGE_MANAGER.PLAY_COUNT'
                                                    | translate
                                            }}
                                        </div>
                                        <div class="text-sm">
                                            {{ playlist().play_count }}
                                        </div>
                                    </div>
                                }
                                <signage-shared-with
                                    class="mt-2"
                                    type="playlists"
                                    [item_id]="playlist().id"
                                    [group_id]="selected_group_id()"
                                    [allow_unshare]="can_update()"
                                    [compact_label]="true"
                                />
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            {{
                                'SIGNAGE_MANAGER.ZONES_COUNT'
                                    | translate
                                        : { count: playlist_zones().length }
                                        : playlist_zones().length
                            }}
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">layers</icon>
                                    {{
                                        'SIGNAGE_MANAGER.ZONES_COUNT'
                                            | translate
                                                : {
                                                      count: playlist_zones()
                                                          .length,
                                                  }
                                                : playlist_zones().length
                                    }}
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.ADD_ZONE_TOOLTIP'
                                                | translate
                                        "
                                        (click)="addZone()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ADD_ZONE_TO_PLAYLIST_ARIA'
                                                | translate
                                        "
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="min-h-0 flex-1 gap-2 overflow-auto p-2">
                                @if (playlist_zones().length > 0) {
                                    @for (
                                        zone of playlist_zones();
                                        track zone.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/zones',
                                                    zone.id,
                                                ]"
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.OPEN_ZONE'
                                                        | translate
                                                            : {
                                                                  name:
                                                                      zone.display_name ||
                                                                      zone.name,
                                                              }
                                                "
                                            >
                                                <icon
                                                    class="shrink-0 text-xl opacity-60"
                                                    >location_on</icon
                                                >
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-sm font-medium"
                                                    >
                                                        {{
                                                            zone.display_name ||
                                                                zone.name
                                                        }}
                                                    </div>
                                                    @if (zone.description) {
                                                        <div
                                                            class="text-base-content/70 truncate text-xs"
                                                        >
                                                            {{
                                                                zone.description
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            @if (can_update()) {
                                                <button
                                                    icon
                                                    default
                                                    error
                                                    type="button"
                                                    class="m-1 text-sm"
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_ZONE'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removeZone($event, zone)
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_ZONE_FROM_PLAYLIST'
                                                            | translate
                                                                : {
                                                                      name:
                                                                          zone.display_name ||
                                                                          zone.name,
                                                                  }
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8"
                                    >
                                        <icon class="text-4xl"
                                            >location_off</icon
                                        >
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.NO_ZONES_USE_PLAYLIST'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                    <mat-tab>
                        <ng-template mat-tab-label>
                            {{
                                'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                    | translate
                                        : { count: playlist_displays().length }
                                        : playlist_displays().length
                            }}
                        </ng-template>
                        <div class="flex h-full flex-col overflow-hidden">
                            <div
                                class="border-base-300 flex items-center gap-2 border-b px-4 py-3"
                            >
                                <h5
                                    class="text-base-content/80 flex flex-1 items-center gap-2 font-medium tracking-wider uppercase"
                                >
                                    <icon class="text-lg">tv</icon>
                                    {{
                                        'SIGNAGE_MANAGER.DISPLAYS_COUNT'
                                            | translate
                                                : {
                                                      count: playlist_displays()
                                                          .length,
                                                  }
                                                : playlist_displays().length
                                    }}
                                </h5>
                                @if (can_update()) {
                                    <button
                                        icon
                                        default
                                        type="button"
                                        matRipple
                                        [matTooltip]="
                                            'SIGNAGE_MANAGER.ADD_DISPLAY_TOOLTIP'
                                                | translate
                                        "
                                        (click)="addDisplay()"
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.ADD_DISPLAY_TO_PLAYLIST_ARIA'
                                                | translate
                                        "
                                    >
                                        <icon>add</icon>
                                    </button>
                                }
                            </div>
                            <div class="min-h-0 flex-1 gap-2 overflow-auto p-2">
                                @if (playlist_displays().length > 0) {
                                    @for (
                                        display of playlist_displays();
                                        track display.id
                                    ) {
                                        <div
                                            class="border-base-300 bg-base-100 mb-2 flex items-center gap-3 rounded-lg border p-0.5 pl-1"
                                        >
                                            <a
                                                matRipple
                                                class="hover:bg-base-200 flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 no-underline transition-colors"
                                                [routerLink]="[
                                                    '/displays',
                                                    display.id,
                                                ]"
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.OPEN_DISPLAY'
                                                        | translate
                                                            : {
                                                                  name:
                                                                      display.display_name ||
                                                                      display.name,
                                                              }
                                                "
                                            >
                                                <icon
                                                    class="shrink-0 text-xl opacity-60"
                                                    >tv</icon
                                                >
                                                <div class="min-w-0 flex-1">
                                                    <div
                                                        class="truncate text-sm font-medium"
                                                    >
                                                        {{
                                                            display.display_name ||
                                                                display.name
                                                        }}
                                                    </div>
                                                    @if (display.description) {
                                                        <div
                                                            class="text-base-content/70 truncate text-xs"
                                                        >
                                                            {{
                                                                display.description
                                                            }}
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            @if (can_update()) {
                                                <button
                                                    icon
                                                    default
                                                    error
                                                    class="m-1 text-sm"
                                                    type="button"
                                                    matRipple
                                                    [matTooltip]="
                                                        'SIGNAGE_MANAGER.REMOVE_DISPLAY'
                                                            | translate
                                                    "
                                                    (click)="
                                                        removeDisplay(
                                                            $event,
                                                            display
                                                        )
                                                    "
                                                    [attr.aria-label]="
                                                        'SIGNAGE_MANAGER.REMOVE_DISPLAY_FROM_PLAYLIST'
                                                            | translate
                                                                : {
                                                                      name:
                                                                          display.display_name ||
                                                                          display.name,
                                                                  }
                                                    "
                                                >
                                                    <icon>close</icon>
                                                </button>
                                            }
                                        </div>
                                    }
                                } @else {
                                    <div
                                        class="text-base-content/70 flex flex-col items-center justify-center space-y-2 p-8"
                                    >
                                        <icon class="text-4xl">tv_off</icon>
                                        <p class="text-sm">
                                            {{
                                                'SIGNAGE_MANAGER.NO_DISPLAYS_USE_PLAYLIST'
                                                    | translate
                                            }}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </mat-tab>
                </mat-tab-group>
            </div>
        } @else {
            <div
                class="border-base-300 text-base-content/70 flex min-w-60 flex-1 flex-col items-center justify-center space-y-2 border-l p-8"
            >
                <icon class="text-6xl">info</icon>
                <p>
                    {{ 'SIGNAGE_MANAGER.SELECT_PLAYLIST_DETAILS' | translate }}
                </p>
            </div>
        }
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
        MatRippleModule,
        MatTabsModule,
        MatTooltipModule,
        RouterLink,
        IconComponent,
        DatePipe,
        MediaDurationPipe,
        TranslatePipe,
        SignageSharedWithComponent,
    ],
})
export class PlaylistItemDetailsComponent {
    private readonly _service = inject(SignageService);

    public readonly playlist = this._service.selected_playlist;
    public readonly active_tab = linkedSignal<SignagePlaylist | null, number>({
        source: this.playlist,
        computation: (playlist, previous) =>
            previous && playlist?.id === previous.source?.id
                ? previous.value
                : 0,
    });

    private readonly _items = this._service.playlist_media_items;
    private readonly _displays = this._service.displays;
    private readonly _zones = this._service.zones;

    public readonly item_count = computed(() => this._items().length);
    public readonly can_update = this._service.can_update;
    public readonly selected_group_id = computed(
        () => this._service.selected_group()?.group.id || '',
    );

    public readonly playlist_displays = computed(() => {
        const pl = this.playlist();
        if (!pl) return [];
        return this._displays().filter((d) => d.playlists?.includes(pl.id));
    });

    public readonly playlist_zones = computed(() => {
        const pl = this.playlist();
        if (!pl) return [];
        return this._zones().filter((z) => z.playlists?.includes(pl.id));
    });

    public readonly animation_label = computed(() => {
        const pl = this.playlist();
        if (!pl) return 'COMMON.DEFAULT';
        switch (pl.default_animation) {
            case MediaAnimation.Cut:
                return 'SIGNAGE_MANAGER.ANIM_CUT';
            case MediaAnimation.CrossFade:
                return 'SIGNAGE_MANAGER.ANIM_CROSS_FADE';
            case MediaAnimation.SlideTop:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_TOP';
            case MediaAnimation.SlideLeft:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_LEFT';
            case MediaAnimation.SlideRight:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_RIGHT';
            case MediaAnimation.SlideBottom:
                return 'SIGNAGE_MANAGER.ANIM_SLIDE_BOTTOM';
            default:
                return 'COMMON.DEFAULT';
        }
    });

    public readonly valid_from = computed(() => {
        const pl = this.playlist();
        if (!pl?.valid_from) return '';
        return pl.valid_from * 1000;
    });

    public readonly valid_until = computed(() => {
        const pl = this.playlist();
        if (!pl?.valid_until) return '';
        return pl.valid_until * 1000;
    });

    public readonly schedule_labels = computed(() => {
        const pl = this.playlist();
        if (!pl || pl.distribution) return [];
        return playlistSchedules(pl).map((schedule) => scheduleLabel(schedule));
    });

    public readonly next_play_sessions = computed(() => {
        const pl = this.playlist();
        if (!pl || pl.distribution) return [];
        return playlistSchedules(pl)
            .flatMap((schedule) => nextSchedulePlaySessions(schedule, 5))
            .sort((a, b) => a.start.getTime() - b.start.getTime())
            .slice(0, 5)
            .map((session) =>
                formatPlayDateTimeRange(session.start, session.period),
            );
    });

    public addDisplay() {
        const playlist = this.playlist();
        if (playlist) this._service.addDisplayToPlaylist(playlist);
    }

    public addZone() {
        const playlist = this.playlist();
        if (playlist) this._service.addZoneToPlaylist(playlist);
    }

    public removeDisplay(event: Event, display: any) {
        event.preventDefault();
        event.stopPropagation();
        const playlist = this.playlist();
        if (playlist)
            this._service.removeDisplayFromPlaylist(playlist, display);
    }

    public removeZone(event: Event, zone: any) {
        event.preventDefault();
        event.stopPropagation();
        const playlist = this.playlist();
        if (playlist) this._service.removeZoneFromPlaylist(playlist, zone);
    }
}
