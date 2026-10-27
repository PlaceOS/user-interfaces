import { DatePipe } from '@angular/common';
import {
    Component,
    computed,
    effect,
    input,
    OnInit,
    output,
    signal,
    untracked,
} from '@angular/core';
import { AsyncHandler, CalendarEvent } from '@placeos/common';
import {
    addHours,
    addMinutes,
    differenceInMinutes,
    format,
    roundToNearestMinutes,
    subHours,
    subMinutes,
} from 'date-fns';

import { TIME_FORMAT } from '../new-panel/helpers';

interface TimeBlock {
    id: number;
    minutes: number;
    hour: string;
    period: string;
}

interface EventBlock {
    start: number;
    length: number;
}

@Component({
    selector: 'checkin-timetable',
    template: `
        <div class="relative flex h-16 items-center px-2">
            @for (blk of blocks(); track blk.id) {
                <button
                    class="relative h-full"
                    [style.min-width]="scale * step() + 'px'"
                    [attr.aria-label]="blk.id | date: time_format()"
                    [attr.aria-disabled]="booked_blocks().has(blk.id) || null"
                    (click)="!booked_blocks().has(blk.id) && event.emit(blk.id)"
                >
                    @if (blk.minutes % 60 === 0) {
                        <div
                            class="absolute top-1 left-0 text-xs whitespace-nowrap"
                        >
                            {{ blk.hour }}
                            <span class="text-[0.75em]">{{ blk.period }}</span>
                        </div>
                    }
                    @if (blk.minutes % 15 === 0) {
                        <div
                            class="bg-neutral absolute bottom-0 left-0 w-px"
                            [style.height]="height(blk.minutes)"
                        ></div>
                    }
                </button>
            }
            @for (blk of event_blocks(); track blk) {
                @if (blk.start + blk.length >= 0 && blk.start < 24 * 60) {
                    <div
                        event
                        class="bg-base-200 absolute bottom-0 h-12 opacity-40"
                        [style.left]="8 + scale * blk.start + 'px'"
                        [style.width]="scale * blk.length + 'px'"
                    ></div>
                }
            }
            <div
                current
                class="bg-primary pointer-events-none absolute bottom-0 h-12 w-0.5"
                [style.left]="8 + scale * current_time() + 'px'"
            >
                <div
                    class="bg-primary absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                ></div>
            </div>
        </div>
    `,
    styles: [
        `
            [event] {
                --color1: #969696;
                --color2: #424242;
                background: repeating-linear-gradient(
                    -45deg,
                    var(--color1),
                    var(--color1) 6px,
                    var(--color2) 6px,
                    var(--color2) 8px
                );
            }
        `,
    ],
    imports: [DatePipe],
})
export class CheckinTimetableComponent extends AsyncHandler implements OnInit {
    public readonly events = input<CalendarEvent[]>([]);
    public readonly step = input(15);
    /** Time format. `HH:mm` shows 24 hour labels. */
    public readonly time_format = input(TIME_FORMAT);
    public readonly event = output<number>();
    /** Pixels per minute. 2 makes each 15 minute slot 30px wide, over the 24px minimum touch target. */
    public readonly scale = 2;

    public current_time = signal<number>(0);

    public blocks = signal<TimeBlock[]>([]);
    public event_blocks = signal<EventBlock[]>([]);

    /** IDs of the time blocks that overlap a booking. Screen readers read these slots as unavailable. */
    public readonly booked_blocks = computed(() => {
        const step = this.step() * 60 * 1000;
        const events = this.events() || [];
        return new Set(
            this.blocks()
                .filter((blk) =>
                    events.some(
                        (e) =>
                            e.date < blk.id + step &&
                            e.date + e.duration * 60 * 1000 > blk.id,
                    ),
                )
                .map((blk) => blk.id),
        );
    });

    constructor() {
        super();
        effect(() => {
            this.events(); // track the signal
            this._processEvents();
        });
        // Relabel the blocks when the time format setting loads or changes
        effect(() => {
            this.time_format();
            untracked(() => this._generateTimeBlocks(true));
        });
    }

    public ngOnInit() {
        this._generateTimeBlocks();
        this._updateCurrentTime();
        this.interval(
            'gen-blocks',
            () => this._generateTimeBlocks(),
            1 * 60 * 1000,
        );
        this.interval(
            'update-current',
            () => this._updateCurrentTime(),
            30 * 1000,
        );
    }

    public height(minutes: number) {
        switch (minutes) {
            case 0:
                return '2.5rem';
            case 15:
            case 45:
                return '0.75rem';
            case 30:
                return '1.5rem';
        }
        return '';
    }

    /** Build the blocks. `force` rebuilds them when the start is the same. */
    private _generateTimeBlocks(force = false) {
        const blocks: TimeBlock[] = [];
        const hour_24 = this.time_format() !== TIME_FORMAT;
        const start = roundToNearestMinutes(
            subMinutes(subHours(Date.now(), 1), this.step() / 2),
            {
                nearestTo: this.step() as any,
            },
        );
        // The start moves once per step. Keep the blocks until then.
        if (!force && this.blocks()[0]?.id === start.valueOf()) return;
        let date = start;
        const end = addHours(start, 24);
        while (date < end) {
            blocks.push({
                id: date.valueOf(),
                minutes: date.getMinutes(),
                hour: format(date, hour_24 ? 'HH' : 'h'),
                period: hour_24 ? '' : format(date, 'a'),
            });
            date = addMinutes(date, this.step());
        }
        this.blocks.set(blocks);
    }

    private _processEvents() {
        if (!this.blocks().length) return;
        this.event_blocks.set(
            (this.events() || []).map((_) => ({
                start: differenceInMinutes(_.date, this.blocks()[0].id),
                length: _.duration,
            })),
        );
    }

    private _updateCurrentTime() {
        if (!this.blocks().length) return;
        const time = differenceInMinutes(Date.now(), this.blocks()[0].id);
        this.current_time.set(time);
    }
}
