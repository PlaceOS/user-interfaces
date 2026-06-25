import { Component, input, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { i18n } from '@placeos/common';
import {
    DateFromPipe,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { differenceInMinutes, format, startOfDay } from 'date-fns';
import {
    MINUTES_PER_DAY,
    ScheduleBlock,
    ScheduleTimelineRow,
} from './signage-schedule.util';

@Component({
    selector: 'schedule-timeline',
    template: `
        <div timeline class="z-0 grid min-h-0 flex-1 overflow-auto">
            <div
                corner
                class="bg-base-100 border-base-300 sticky top-0 left-0 z-40 flex flex-col justify-end border-r border-b px-4 pb-2"
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
                class="border-base-300 bg-base-100 sticky top-0 z-30 flex h-14 items-end border-b"
                [style.width]="timeline_width + 'rem'"
            >
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="relative flex h-full items-end pb-2"
                        [style.width]="block_width + 'rem'"
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
            <div
                row-headers
                class="border-base-300 bg-base-100 sticky left-0 z-40 border-r"
                [style.height]="rows().length * row_height + 'rem'"
            >
                @for (row of rows(); track row.id; let i = $index) {
                    <div
                        class="border-base-200 flex w-full items-center gap-2 border-b px-2 transition-colors duration-100 sm:gap-3 sm:px-3"
                        [style.height]="row_height + 'rem'"
                        [class.row-highlight]="hovered_row() === i"
                        (mouseenter)="hovered_row.set(i)"
                        (mouseleave)="clearHoveredRow(i)"
                    >
                        <div
                            class="bg-base-content/6 hidden h-8 w-8 shrink-0 items-center justify-center rounded-md sm:flex"
                            [class.bg-info]="
                                displayRowStatus(row) === 'success'
                            "
                            [class.bg-error]="displayRowStatus(row) === 'error'"
                            [class.text-info-content]="
                                displayRowStatus(row) === 'success'
                            "
                            [class.text-error-content]="
                                displayRowStatus(row) === 'error'
                            "
                            [matTooltip]="
                                displayRowStatus(row)
                                    ? (row.signage_last_seen * 1000 | dateFrom)
                                    : ''
                            "
                            matTooltipPosition="right"
                        >
                            <icon class="text-base opacity-60">{{
                                row.icon
                            }}</icon>
                        </div>
                        <div class="min-w-0 flex-1">
                            <a
                                class="block truncate text-xs font-medium hover:underline sm:text-sm"
                                [routerLink]="row.route"
                            >
                                {{ row.name }}
                            </a>
                            <div
                                class="text-base-content/50 truncate text-[10px] sm:text-[11px]"
                            >
                                {{ row.subtitle }}
                            </div>
                        </div>
                        <div
                            class="bg-base-content/6 text-base-content/60 hidden rounded-md px-1.5 py-0.5 text-[10px] font-semibold tabular-nums sm:block"
                        >
                            {{ row.blocks.length }}
                        </div>
                    </div>
                }
            </div>
            <div
                timeline-grid
                class="relative z-0 overflow-hidden"
                [style.width]="timeline_width + 'rem'"
                [style.height]="rows().length * row_height + 'rem'"
            >
                @for (hour of hours; track hour; let i = $index) {
                    <div
                        class="bg-base-content/6 absolute top-0 h-full w-px"
                        [style.left]="i * block_width + 'rem'"
                    ></div>
                }
                @for (row of rows(); track row.id; let i = $index) {
                    <div
                        class="absolute left-0 w-full transition-colors duration-100"
                        [style.top]="i * row_height + 'rem'"
                        [style.height]="row_height + 'rem'"
                        [class.row-highlight]="hovered_row() === i"
                        (mouseenter)="hovered_row.set(i)"
                        (mouseleave)="clearHoveredRow(i)"
                    ></div>
                    <div
                        class="border-base-content/6 absolute left-0 w-full border-b"
                        [style.top]="i * row_height + row_height + 'rem'"
                    ></div>

                    @if (!row.blocks.length) {
                        <div
                            class="text-base-content/30 pointer-events-none absolute left-4 flex items-center gap-1.5 text-[11px]"
                            [style.top]="i * row_height + 'rem'"
                            [style.height]="row_height + 'rem'"
                        >
                            <icon class="text-sm">event_busy</icon>
                            {{
                                'SIGNAGE_MANAGER.NO_PLAYLISTS_SCHEDULED'
                                    | translate
                            }}
                        </div>
                    }

                    @for (
                        block of row.blocks;
                        track block.playlist.id +
                            '_' +
                            block.start_minutes +
                            '_' +
                            (block.source_label || '') +
                            '_' +
                            $index
                    ) {
                        <a
                            matRipple
                            class="schedule-block absolute z-10 text-left"
                            [style.left]="
                                timeToOffset(block.start_minutes) + '%'
                            "
                            [style.top]="i * row_height + 0.375 + 'rem'"
                            [style.width]="
                                durationToOffset(visibleDuration(block)) + '%'
                            "
                            [style.height]="row_height - 0.75 + 'rem'"
                            [style.min-width.rem]="2"
                            [routerLink]="['/playlists', block.playlist.id]"
                            [matTooltip]="blockTooltip(row, block)"
                            [attr.aria-label]="blockAriaLabel(row, block)"
                            (mouseenter)="hovered_row.set(i)"
                            (mouseleave)="clearHoveredRow(i)"
                        >
                            <div
                                class="relative flex h-full w-full flex-col overflow-hidden rounded-md border px-2 py-1"
                                [style.background-color]="
                                    blockBackgroundColor(block)
                                "
                                [style.color]="blockTextColor(block)"
                                [style.border-color]="blockBorderColor(block)"
                                [class.border-dashed]="
                                    block.source_type === 'zone' &&
                                    view_tab() === 'displays'
                                "
                            >
                                <div
                                    class="truncate text-[11px] leading-tight font-semibold"
                                >
                                    {{ block.playlist.name }}
                                </div>
                                <div
                                    class="truncate text-[10px] leading-tight opacity-70"
                                >
                                    {{
                                        block.all_day
                                            ? ('SIGNAGE_MANAGER.ALL_DAY'
                                              | translate)
                                            : block.label
                                    }}
                                </div>
                                @if (requiresApproval(block)) {
                                    <div
                                        class="mt-auto truncate text-[10px] leading-tight font-medium"
                                    >
                                        {{
                                            'SIGNAGE_MANAGER.AWAITING_APPROVAL'
                                                | translate
                                        }}
                                    </div>
                                }
                                @if (
                                    block.source_label &&
                                    view_tab() === 'displays'
                                ) {
                                    <div
                                        class="mt-auto truncate text-[10px] leading-tight opacity-60"
                                    >
                                        {{
                                            block.source_type === 'display'
                                                ? ('SIGNAGE_MANAGER.SOURCE_DIRECT'
                                                  | translate)
                                                : ('SIGNAGE_MANAGER.SOURCE_VIA'
                                                  | translate
                                                      : {
                                                            source: block.source_label,
                                                        })
                                        }}
                                    </div>
                                }
                            </div>
                        </a>
                    }
                }

                @if (show_current_time()) {
                    <div
                        class="pointer-events-none absolute inset-y-0 z-30"
                        [style.left]="timeToOffset(current_minutes()) + '%'"
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
                display: flex;
                min-height: 0;
                flex: 1;
            }

            [timeline] {
                grid-template-columns: 9rem auto;
                grid-template-rows: 3.5rem auto;
            }

            @media (min-width: 640px) {
                [timeline] {
                    grid-template-columns: 16rem auto;
                }
            }

            .row-highlight {
                background-color: color-mix(
                    in srgb,
                    var(--info) 6%,
                    transparent
                );
            }

            .schedule-block {
                transition:
                    transform 120ms ease,
                    z-index 0ms;
            }
            .schedule-block:hover {
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
        `,
    ],
    imports: [
        MatRippleModule,
        MatTooltipModule,
        RouterLink,
        IconComponent,
        DateFromPipe,
        TranslatePipe,
    ],
})
export class ScheduleTimelineComponent {
    public readonly rows = input<ScheduleTimelineRow[]>([]);
    public readonly view_tab = input<'displays' | 'zones'>('displays');
    public readonly selected_date = input.required<Date>();
    public readonly current_minutes = input(0);
    public readonly show_current_time = input(false);
    public readonly playlist_approval_status = input<Record<string, boolean>>(
        {},
    );

    public readonly block_width = 6;
    public readonly row_height = 4;
    public readonly hours = Array.from({ length: 24 }, (_, index) => index);
    public readonly timeline_width = this.hours.length * this.block_width;
    public readonly hovered_row = signal(-1);

    public displayRowStatus(row: ScheduleTimelineRow) {
        if (this.view_tab() !== 'displays') return '';
        const diff = Math.abs(
            differenceInMinutes(row.signage_last_seen * 1000, Date.now()),
        );
        return diff > 5 ? 'error' : 'success';
    }

    public clearHoveredRow(index: number) {
        if (this.hovered_row() === index) this.hovered_row.set(-1);
    }

    public formatHour(hour: number) {
        const date = startOfDay(new Date());
        date.setHours(hour);
        return format(date, 'haaa').replace('AM', 'am').replace('PM', 'pm');
    }

    public timeToOffset(minutes: number) {
        return +((Math.max(0, minutes) / MINUTES_PER_DAY) * 100).toFixed(2);
    }

    public durationToOffset(duration: number) {
        return +(
            (Math.min(MINUTES_PER_DAY, Math.max(duration, 0)) /
                MINUTES_PER_DAY) *
            100
        ).toFixed(2);
    }

    public visibleDuration(block: ScheduleBlock) {
        return block.all_day
            ? MINUTES_PER_DAY
            : Math.max(
                  15,
                  Math.min(
                      block.duration_minutes,
                      MINUTES_PER_DAY - block.start_minutes,
                  ),
              );
    }

    public requiresApproval(block: ScheduleBlock) {
        const approvals = this.playlist_approval_status();
        return block.playlist.id in approvals && !approvals[block.playlist.id];
    }

    public blockBackgroundColor(block: ScheduleBlock) {
        return this.requiresApproval(block) ? '#fef3c7' : block.bg_color;
    }

    public blockTextColor(block: ScheduleBlock) {
        return this.requiresApproval(block) ? '#92400e' : block.text_color;
    }

    public blockBorderColor(block: ScheduleBlock) {
        return this.requiresApproval(block) ? '#f59e0b' : block.text_color;
    }

    public blockTooltip(row: ScheduleTimelineRow, block: ScheduleBlock) {
        const source =
            block.source_label && this.view_tab() === 'displays'
                ? `\n${i18n('SIGNAGE_MANAGER.TOOLTIP_SOURCE', {
                      source:
                          block.source_type === 'display'
                              ? i18n('SIGNAGE_MANAGER.SOURCE_DISPLAY')
                              : block.source_label,
                  })}`
                : '';
        const approval = this.requiresApproval(block)
            ? `\n${i18n('SIGNAGE_MANAGER.TOOLTIP_STATUS_AWAITING')}`
            : '';
        const time = block.all_day
            ? i18n('SIGNAGE_MANAGER.ALL_DAY')
            : block.label;
        return `${row.name}\n${i18n('SIGNAGE_MANAGER.TOOLTIP_PLAYLIST', {
            name: block.playlist.name,
        })}\n${i18n('SIGNAGE_MANAGER.TOOLTIP_TIME', {
            time,
        })}${source}${approval}`;
    }

    public blockAriaLabel(row: ScheduleTimelineRow, block: ScheduleBlock) {
        const time = block.all_day
            ? i18n('SIGNAGE_MANAGER.ALL_DAY_LOWER')
            : block.label;
        return `${row.name}, ${block.playlist.name}, ${time}`;
    }
}
