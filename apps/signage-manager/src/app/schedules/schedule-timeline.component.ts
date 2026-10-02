import { DatePipe } from '@angular/common';
import { Component, computed, inject, input, LOCALE_ID } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { i18n } from '@placeos/common';
import {
    DateFromPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { format, isSameDay, startOfDay } from 'date-fns';
import { isDisplayOnline } from '../displays/display-status.util';
import {
    MINUTES_PER_DAY,
    ScheduleTimelineRow,
    TimelineBlock,
    visibleMinutes,
} from './signage-schedule.util';

/** Height of one lane of blocks, in rem */
const LANE_HEIGHT = 3.25;
/** Space above and below the lanes of a row, in rem */
const ROW_PADDING = 0.375;

const APPROVAL_COLOURS = { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' };

/** Display data of one block, worked out once per change of the inputs */
interface TimelineBlockView {
    key: string;
    playlist_id: string;
    name: string;
    enabled: boolean;
    time: string;
    takeover: boolean;
    awaiting_approval: boolean;
    source: string;
    from_zone: boolean;
    left: number;
    width: number;
    top: number;
    bg_color: string;
    text_color: string;
    border_color: string;
    tooltip: string;
    aria_label: string;
}

interface TimelineRowView {
    row: ScheduleTimelineRow;
    height: number;
    blocks: TimelineBlockView[];
}

/** Online status of a display row, as text so it is not shown by colour only */
interface RowStatus {
    online: boolean;
    label: string;
}

/** Percentage of the day that a number of minutes covers */
function dayPercent(minutes: number) {
    const clamped = Math.min(MINUTES_PER_DAY, Math.max(0, minutes));
    return +((clamped / MINUTES_PER_DAY) * 100).toFixed(2);
}

@Component({
    selector: 'schedule-timeline',
    template: `
        <div class="min-h-0 flex-1 overflow-auto">
            <div class="relative w-max min-w-full">
                <div class="sticky top-0 z-40 flex">
                    <div
                        corner
                        class="header-cell bg-base-100 border-base-300 sticky left-0 z-10 flex h-14 flex-col justify-end border-r border-b px-4 pb-2"
                    >
                        <div
                            class="text-base-content/50 text-[10px] font-semibold tracking-[0.2em] uppercase"
                        >
                            {{
                                (view_tab() === 'displays'
                                    ? 'SIGNAGE_MANAGER.NAV_DISPLAYS'
                                    : 'SIGNAGE_MANAGER.NAV_ZONES'
                                ) | translate
                            }}
                        </div>
                    </div>
                    <div
                        time-headers
                        class="border-base-300 bg-base-100 flex h-14 items-end border-b"
                        [style.width.rem]="timeline_width"
                    >
                        @for (hour of hours; track hour; let i = $index) {
                            <div
                                class="relative flex h-full items-end pb-2"
                                [style.width.rem]="block_width"
                            >
                                <div
                                    class="text-base-content/50 w-full text-center text-[10px] tabular-nums"
                                >
                                    {{ formatHour(hour) }}
                                </div>
                                @if (i !== 0) {
                                    <div
                                        class="bg-base-300/60 absolute top-0 left-0 h-2.5 w-px"
                                    ></div>
                                }
                            </div>
                        }
                    </div>
                </div>
                @for (view of view_rows(); track view.row.id) {
                    <div
                        schedule-row
                        class="schedule-row border-base-200 flex border-b"
                        [style.height.rem]="view.height"
                    >
                        <div
                            row-header
                            class="header-cell bg-base-100 border-base-300 sticky left-0 z-30 flex items-center gap-2 border-r px-2 sm:gap-3 sm:px-3"
                        >
                            @let status = row_status().get(view.row.id);
                            @if (status) {
                                <div
                                    row-status
                                    tabindex="0"
                                    role="img"
                                    class="hidden h-8 w-8 shrink-0 items-center justify-center rounded-md sm:flex"
                                    [class.bg-info]="status.online"
                                    [class.text-info-content]="status.online"
                                    [class.bg-error]="!status.online"
                                    [class.text-error-content]="!status.online"
                                    [attr.aria-label]="status.label"
                                    [matTooltip]="status.label"
                                    matTooltipPosition="right"
                                >
                                    <icon class="text-base opacity-60">{{
                                        view.row.icon
                                    }}</icon>
                                </div>
                            } @else {
                                <div
                                    class="bg-base-content/6 hidden h-8 w-8 shrink-0 items-center justify-center rounded-md sm:flex"
                                >
                                    <icon class="text-base opacity-60">{{
                                        view.row.icon
                                    }}</icon>
                                </div>
                            }
                            <div class="min-w-0 flex-1">
                                <a
                                    class="block truncate text-xs font-medium hover:underline sm:text-sm"
                                    [routerLink]="view.row.route"
                                >
                                    {{ view.row.name }}
                                </a>
                                <div
                                    class="text-base-content/50 truncate text-[10px] sm:text-[11px]"
                                >
                                    {{ view.row.subtitle }}
                                </div>
                            </div>
                            <div
                                class="bg-base-content/6 text-base-content/60 hidden rounded-md px-1.5 py-0.5 text-[10px] font-semibold tabular-nums sm:block"
                            >
                                {{ view.blocks.length }}
                            </div>
                        </div>
                        <div
                            row-timeline
                            class="hour-lines relative"
                            [style.width.rem]="timeline_width"
                        >
                            @for (block of view.blocks; track block.key) {
                                <a
                                    schedule-block
                                    class="schedule-block absolute z-10 text-left"
                                    [style.left.%]="block.left"
                                    [style.top.rem]="block.top"
                                    [style.width.%]="block.width"
                                    [style.height.rem]="lane_height"
                                    [style.min-width.rem]="2"
                                    [routerLink]="[
                                        '/playlists',
                                        block.playlist_id,
                                    ]"
                                    [matTooltip]="block.tooltip"
                                    [attr.aria-label]="block.aria_label"
                                >
                                    <div
                                        class="relative flex h-full w-full flex-col overflow-hidden rounded-md border px-2 py-1"
                                        [class.border-dashed]="block.from_zone"
                                        [class.takeover]="block.takeover"
                                        [style.background-color]="
                                            block.bg_color
                                        "
                                        [style.color]="block.text_color"
                                        [style.border-color]="
                                            block.border_color
                                        "
                                    >
                                        <div
                                            class="flex items-center gap-1 truncate text-[11px] leading-tight font-semibold"
                                        >
                                            @if (block.takeover) {
                                                <icon class="shrink-0 text-xs"
                                                    >bolt</icon
                                                >
                                            }
                                            <span
                                                class="truncate"
                                                [class.line-through]="
                                                    !block.enabled
                                                "
                                                >{{ block.name }}</span
                                            >
                                        </div>
                                        <div
                                            class="truncate text-[10px] leading-tight opacity-70"
                                        >
                                            {{ block.time }}
                                        </div>
                                        @if (block.takeover) {
                                            <div
                                                class="truncate text-[10px] leading-tight font-medium"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.TAKEOVER_PLAYBACK'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                        @if (block.awaiting_approval) {
                                            <div
                                                class="mt-auto truncate text-[10px] leading-tight font-medium"
                                            >
                                                {{
                                                    'SIGNAGE_MANAGER.AWAITING_APPROVAL'
                                                        | translate
                                                }}
                                            </div>
                                        }
                                        @if (block.source) {
                                            <div
                                                class="mt-auto truncate text-[10px] leading-tight opacity-60"
                                            >
                                                {{ block.source }}
                                            </div>
                                        }
                                    </div>
                                </a>
                            } @empty {
                                <div
                                    class="text-base-content/30 pointer-events-none absolute inset-y-0 left-4 flex items-center gap-1.5 text-[11px]"
                                >
                                    <icon class="text-sm">event_busy</icon>
                                    {{
                                        'SIGNAGE_MANAGER.NO_PLAYLISTS_SCHEDULED'
                                            | translate
                                    }}
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (show_current_time()) {
                    <div
                        class="pointer-events-none absolute top-14 bottom-0 z-[25]"
                        [style.left]="
                            'calc(var(--header-width) + ' +
                            current_offset() +
                            'rem)'
                        "
                    >
                        <div
                            class="bg-error absolute -top-0.5 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
                        ></div>
                        <div class="bg-error h-full w-0.5"></div>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                --header-width: 9rem;
                display: flex;
                min-height: 0;
                flex: 1;
            }

            @media (min-width: 640px) {
                :host {
                    --header-width: 16rem;
                }
            }

            .header-cell {
                width: var(--header-width);
                flex-shrink: 0;
            }

            .hour-lines {
                background-image: repeating-linear-gradient(
                    to right,
                    color-mix(in srgb, var(--base-content) 6%, transparent) 0
                        1px,
                    transparent 1px 6rem
                );
            }

            .schedule-row:hover,
            .schedule-row:hover > .header-cell {
                background-color: color-mix(
                    in srgb,
                    var(--info) 6%,
                    var(--base-100)
                );
            }

            .schedule-block {
                transition:
                    transform 120ms ease,
                    z-index 0ms;
            }
            .schedule-block:hover,
            .schedule-block:focus-visible {
                z-index: 20;
                transform: scaleY(1.04);
            }
            .schedule-block > div {
                box-shadow: 0 1px 2px rgb(0 0 0 / 0.06);
                transition: box-shadow 120ms ease;
            }
            .schedule-block:hover > div {
                box-shadow: 0 3px 8px rgb(0 0 0 / 0.12);
            }
            .schedule-block > div.takeover {
                border-left-width: 4px;
                font-weight: 600;
            }
        `,
    ],
    imports: [MatTooltipModule, RouterLink, IconComponent, TranslatePipe],
})
export class ScheduleTimelineComponent {
    private readonly _date_from = new DateFromPipe();
    private readonly _date = new DatePipe(inject(LOCALE_ID));

    public readonly rows = input<ScheduleTimelineRow[]>([]);
    public readonly view_tab = input<'displays' | 'zones'>('displays');
    public readonly current_minutes = input(0);
    public readonly show_current_time = input(false);
    public readonly playlist_approval_status = input<Record<string, boolean>>(
        {},
    );

    public readonly block_width = 6;
    public readonly lane_height = LANE_HEIGHT;
    public readonly hours = Array.from({ length: 24 }, (_, index) => index);
    public readonly timeline_width = this.hours.length * this.block_width;

    /** Position of the current time line from the start of the day, in rem */
    public readonly current_offset = computed(
        () => (dayPercent(this.current_minutes()) / 100) * this.timeline_width,
    );

    /** Rows with the position, colours and text of each block */
    public readonly view_rows = computed<TimelineRowView[]>(() => {
        const approvals = this.playlist_approval_status();
        const show_source = this.view_tab() === 'displays';
        return this.rows().map((row) => ({
            row,
            height: Math.max(4, row.lane_count * LANE_HEIGHT + 2 * ROW_PADDING),
            blocks: row.blocks.map((block) =>
                this._blockView(row, block, approvals, show_source),
            ),
        }));
    });

    /** Online status of display rows. Updates each minute. */
    public readonly row_status = computed(() => {
        this.current_minutes();
        const now = Date.now();
        const statuses = new Map<string, RowStatus>();
        if (this.view_tab() !== 'displays') return statuses;
        for (const row of this.rows()) {
            const online = isDisplayOnline(row.signage_last_seen, now);
            const label = !row.signage_last_seen
                ? i18n('SIGNAGE_MANAGER.DISPLAY_STATUS_NEVER_SEEN')
                : i18n(
                      online
                          ? 'SIGNAGE_MANAGER.DISPLAY_STATUS_ONLINE'
                          : 'SIGNAGE_MANAGER.DISPLAY_STATUS_OFFLINE',
                      {
                          time: this._lastSeen(
                              row.signage_last_seen * 1000,
                              now,
                          ),
                      },
                  );
            statuses.set(row.id, { online, label });
        }
        return statuses;
    });

    /**
     * When a display last checked in: relative within the last hour, the
     * time earlier today, and the date and time before today. Matches the
     * display list.
     */
    private _lastSeen(last_seen: number, now: number) {
        if (now - last_seen < 60 * 60 * 1000) {
            return this._date_from.transform(last_seen);
        }
        const date_format = isSameDay(last_seen, now) ? 'shortTime' : 'short';
        return this._date.transform(last_seen, date_format) || '';
    }

    public formatHour(hour: number) {
        const date = startOfDay(new Date());
        date.setHours(hour);
        return format(date, 'haaa').replace('AM', 'am').replace('PM', 'pm');
    }

    private _blockView(
        row: ScheduleTimelineRow,
        block: TimelineBlock,
        approvals: Record<string, boolean>,
        show_source: boolean,
    ): TimelineBlockView {
        const { playlist } = block;
        const awaiting_approval =
            playlist.id in approvals && !approvals[playlist.id];
        const colours = awaiting_approval
            ? APPROVAL_COLOURS
            : {
                  bg: block.bg_color,
                  text: block.text_color,
                  border: block.text_color,
              };
        const time = block.all_day
            ? i18n('SIGNAGE_MANAGER.ALL_DAY')
            : block.label;
        const source =
            show_source && block.source_label
                ? block.source_type === 'display'
                    ? i18n('SIGNAGE_MANAGER.SOURCE_DIRECT')
                    : i18n('SIGNAGE_MANAGER.SOURCE_VIA', {
                          source: block.source_label,
                      })
                : '';
        const takeover = block.takeover
            ? i18n('SIGNAGE_MANAGER.TAKEOVER_PLAYBACK')
            : '';
        const approval = awaiting_approval
            ? i18n('SIGNAGE_MANAGER.AWAITING_APPROVAL')
            : '';
        const tooltip_source =
            show_source && block.source_label
                ? i18n('SIGNAGE_MANAGER.TOOLTIP_SOURCE', {
                      source:
                          block.source_type === 'display'
                              ? i18n('SIGNAGE_MANAGER.SOURCE_DISPLAY')
                              : block.source_label,
                  })
                : '';
        return {
            key: `${playlist.id}|${block.takeover}|${block.start_minutes}`,
            playlist_id: playlist.id,
            name: playlist.name,
            enabled: !!playlist.enabled,
            time,
            takeover: block.takeover,
            awaiting_approval,
            source,
            from_zone: show_source && block.source_type === 'zone',
            left: dayPercent(block.start_minutes),
            width: dayPercent(visibleMinutes(block)),
            top: ROW_PADDING + block.lane * LANE_HEIGHT,
            bg_color: colours.bg,
            text_color: colours.text,
            border_color: colours.border,
            tooltip: [
                row.name,
                i18n('SIGNAGE_MANAGER.TOOLTIP_PLAYLIST', {
                    name: playlist.name,
                }),
                i18n('SIGNAGE_MANAGER.TOOLTIP_TIME', { time }),
                takeover,
                tooltip_source,
                awaiting_approval
                    ? i18n('SIGNAGE_MANAGER.TOOLTIP_STATUS_AWAITING')
                    : '',
            ]
                .filter((line) => line)
                .join('\n'),
            aria_label: [
                row.name,
                playlist.name,
                block.all_day ? i18n('SIGNAGE_MANAGER.ALL_DAY_LOWER') : time,
                takeover,
                approval,
                source,
            ]
                .filter((part) => part)
                .join(', '),
        };
    }
}
