import {
    Component,
    OnInit,
    Input,
    Output,
    ViewChild,
    ElementRef,
    EventEmitter,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import {
    addMinutes,
    differenceInMinutes,
    endOfDay,
    format,
    formatDuration,
    isBefore,
    isSameMinute,
    set,
    startOfDay,
    startOfMinute,
} from 'date-fns';

import { AsyncHandler } from '@placeos/common';

import { ITimelineEventGroup } from '../event-timeline/event-timeline.component';

@Component({
    selector: 'vertical-timeline',
    templateUrl: './vertical-timeline.component.html',
    styleUrls: ['./vertical-timeline.component.scss'],
})
export class VerticalTimelineComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    /** Active date */
    @Input() public date: number;
    /** Active duration */
    @Input() public duration: number;
    /** Groups and events */
    @Input() public groups: ITimelineEventGroup[];
    /** Blocks */
    public blocks: any[];
    /** Element to move */
    public active_move: string;
    /** Active start date */
    public active_start: number;
    /** Active duration */
    public active_length: number;
    /** Offset of time box */
    public offset = { x: 0, y: 0 };

    /** Output emitter */
    @Output() public dateChange = new EventEmitter<number>();
    @Output() public durationChange = new EventEmitter<number>();
    @Output() public groupsChange = new EventEmitter<ITimelineEventGroup[]>();

    @ViewChild('block') private block: ElementRef;
    @ViewChild('time') private time: ElementRef;

    public ngOnInit(): void {
        this.generateBlocks();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.groups) {
            this.checkInUseBlocks();
        }
        if (changes.date || changes.duration) {
            this.updateStartEnd();
        }
    }

    /** Timeline start */
    public get timeline_start() {
        return startOfDay(this.date).valueOf();
    }

    /** Timeline end */
    public get timeline_end() {
        return endOfDay(this.date).valueOf();
    }

    public generateBlocks() {
        this.blocks = [];
        const start = this.timeline_start;
        const end = this.timeline_end;
        const now = Date.now();
        for (
            let time = start;
            isBefore(startOfMinute(time), startOfMinute(end));
            time = addMinutes(time, 5).valueOf()
        ) {
            const minute = new Date(time).getMinutes();
            this.blocks.push({
                id: format(time, 'HH:mm'),
                display: format(time, 'HH:mm'),
                hour: minute === 0,
                show: minute % 30 === 0,
                disabled: isBefore(time, now),
            });
        }
        this.checkInUseBlocks();
    }

    public get display(): string {
        const date = this.date;
        const end = addMinutes(this.date, this.duration);
        const duration = formatDuration({ minutes: this.duration });
        return `${format(date, 'hh:mm A')} - ${format(
            end,
            'hh:mm A',
        )} (${duration})`;
    }

    public move(e) {
        this.timeout(
            'move',
            () => {
                if (this.active_move && this.block) {
                    const center = {
                        x:
                            e.touches && e.touches.length > 0
                                ? e.touches[0].clientX || e.clientX
                                : e.clientX,
                        y:
                            e.touches && e.touches.length > 0
                                ? e.touches[0].clientY || e.clientY
                                : e.clientY,
                    };
                    const off =
                        this.active_move === 'bottom'
                            ? { x: 0, y: 0 }
                            : this.offset;
                    const content_box =
                        this.block.nativeElement.getBoundingClientRect();
                    const percent_w =
                        (center.x - off.x - content_box.left) /
                        content_box.width;
                    const percent_h =
                        (center.y - off.y - content_box.top) /
                        content_box.height;
                    const percent = percent_h;
                    const tl_start = new Date(this.timeline_start);
                    const start_time =
                        tl_start.getHours() + tl_start.getMinutes() / 60;
                    const tl_end = new Date(this.timeline_end);
                    const end_time =
                        tl_end.getHours() + tl_end.getMinutes() / 60;
                    const diff_time = end_time - start_time;
                    const block_size = 15;
                    const hour =
                        Math.ceil(
                            (diff_time * percent + start_time) *
                                (60 / block_size),
                        ) /
                        (60 / block_size);
                    if (this.active_move === 'bottom') {
                        let date = this.date;
                        const end = set(this.date, {
                            hours: Math.floor(hour),
                            minutes: Math.floor((hour * 60) % 60),
                        });
                        if (isSameMinute(end, date) || isBefore(end, date)) {
                            date = addMinutes(end, -this.duration).valueOf();
                            this.date = date.valueOf();
                        } else {
                            const duration = Math.floor(
                                differenceInMinutes(end, date),
                            );
                            this.duration = Math.max(
                                60,
                                duration || block_size,
                            );
                            this.durationChange.emit(this.duration);
                        }
                    } else if (this.active_move === 'top') {
                        const date = set(this.date, {
                            hours: Math.floor(hour),
                            minutes: Math.floor((hour * 60) % 60),
                        });
                        this.date = date.valueOf();
                    }
                    this.dateChange.emit(this.date);
                    this.updateStartEnd();
                }
            },
            10,
        );
    }

    // public setOffset(e) {
    // if (this.time) {
    //     const box = this.time.nativeElement.getBoundingClientRect();
    //     this.offset = { x: e.center.x - box.left, y: e.center.y - box.top };
    // }
    // }

    public setMove(move: string) {
        this.active_move = move;
    }

    public checkInUseBlocks() {
        if (!this.blocks || !this.groups) {
            return;
        }
        const blocks = this.blocks.map((i) => ({
            ...i,
            unavailable: false,
        }));
        for (const grp of this.groups) {
            for (const event of grp.events || []) {
                const start = this.hoursToDate(event.start);
                const end = addMinutes(start, event.duration);
                for (
                    let time = start;
                    isBefore(time, end);
                    time = addMinutes(time, 5).valueOf()
                ) {
                    const display = format(time, 'HH:mm');
                    const blk = blocks.find((i) => i.id === display);
                    if (blk) {
                        blk.unavailable = true;
                    }
                }
            }
        }
        this.blocks = blocks;
    }

    public hoursToDate(time: number) {
        let t = set(startOfDay(Date.now()), {
            hours: Math.floor(time),
            minutes: Math.floor((time * 60) % 60),
        });
        t = set(t, { minutes: Math.floor(t.getMinutes() / 5) * 5 });
        return t.valueOf();
    }

    public updateStartEnd() {
        this.updatePeriod();
    }

    public resetMove() {
        this.active_move = '';
    }

    public updatePeriod() {
        const start = startOfMinute(this.date);
        const period =
            differenceInMinutes(this.timeline_end, this.timeline_start) / 60;
        this.active_start =
            differenceInMinutes(start, this.timeline_start) / 60 / period;
        this.active_length = this.duration / 60 / period;
    }
}
