import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';
import {
    addHours,
    addMinutes,
    differenceInMinutes,
    format,
    roundToNearestMinutes,
    subHours,
    subMinutes,
} from 'date-fns';

interface TimeBlock {
    id: number;
    minutes: number;
    hour: string;
}

interface EventBlock {
    start: number;
    length: number;
}

@Component({
    selector: 'checkin-timetable',
    template: `
        <div class="flex items-center relative h-20 px-2">
            <button
                *ngFor="let blk of blocks"
                class="h-full relative"
                [style.min-width]="1 * step + 'px'"
                (click)="event.emit(blk.id)"
            >
                <div
                    *ngIf="blk.minutes % 60 === 0"
                    class="absolute top-1 left-0 text-xs whitespace-nowrap"
                >
                    {{ blk.hour }}
                </div>
                <div
                    *ngIf="blk.minutes % 15 === 0"
                    class="absolute w-px bottom-0 left-0 bg-neutral"
                    [style.height]="height(blk.minutes)"
                ></div>
            </button>
            <ng-container *ngFor="let blk of event_blocks">
                <div
                    event
                    *ngIf="blk.start + blk.length >= 0 && blk.start < 24 * 60"
                    class="absolute bottom-0 h-[3.5rem] bg-base-200 opacity-40"
                    [style.left]="8 + blk.start + 'px'"
                    [style.width]="blk.length + 'px'"
                ></div>
            </ng-container>
            <div
                current
                class="absolute bottom-0 h-[3.5rem] w-0.5 bg-primary pointer-events-none"
                [style.left]="8 + current_time + 'px'"
            >
                <div
                    class="h-2 w-2 rounded-full bg-primary absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
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
})
export class CheckinTimetableComponent extends AsyncHandler {
    @Input() public events: CalendarEvent[] = [];
    @Input() public step = 15;
    @Output() public event = new EventEmitter<number>();

    public current_time = 0;

    public blocks: TimeBlock[] = [];
    public event_blocks: EventBlock[] = [];

    public ngOnInit() {
        this._generateTimeBlocks();
        this._updateCurrentTime();
        this.interval(
            'gen-blocks',
            () => this._generateTimeBlocks(),
            1 * 60 * 1000
        );
        this.interval(
            'update-current',
            () => this._updateCurrentTime(),
            30 * 1000
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.events) {
            this._processEvents();
        }
    }

    public height(minutes: number) {
        switch (minutes) {
            case 0:
                return '3.5rem';
            case 15:
            case 45:
                return '1rem';
            case 30:
                return '2rem';
        }
        return '';
    }

    private _generateTimeBlocks() {
        const blocks: TimeBlock[] = [];
        const start = roundToNearestMinutes(
            subMinutes(subHours(Date.now(), 1), this.step / 2),
            {
                nearestTo: this.step,
            }
        );
        let date = start;
        const end = addHours(start, 24);
        while (date < end) {
            blocks.push({
                id: date.valueOf(),
                minutes: date.getMinutes(),
                hour: format(date, 'h a'),
            });
            date = addMinutes(date, this.step);
        }
        this.blocks = blocks;
    }

    private _processEvents() {
        if (!this.blocks.length) return;
        this.event_blocks = (this.events || []).map((_) => ({
            start: differenceInMinutes(_.date, this.blocks[0].id),
            length: _.duration,
        }));
    }

    private _updateCurrentTime() {
        if (!this.blocks.length) return;
        const time = differenceInMinutes(Date.now(), this.blocks[0].id);
        this.current_time = time;
    }
}
