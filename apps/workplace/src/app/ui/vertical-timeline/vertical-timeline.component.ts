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
import { formatDuration } from 'date-fns';

import { BaseClass } from '@user-interfaces/common';

import { ITimelineEventGroup } from '../event-timeline/event-timeline.component';

import * as dayjs from 'dayjs';

@Component({
    selector: 'vertical-timeline',
    templateUrl: './vertical-timeline.component.html',
    styleUrls: ['./vertical-timeline.component.scss'],
})
export class VerticalTimelineComponent extends BaseClass implements OnInit, OnChanges {
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
        return dayjs(this.date).startOf('d');
    }

    /** Timeline end */
    public get timeline_end() {
        return dayjs(this.date).endOf('d');
    }

    public generateBlocks() {
        this.blocks = [];
        const start = this.timeline_start;
        const end = this.timeline_end;
        const now = dayjs();
        for (let time = start; time.isBefore(end, 'm'); time = time.add(5, 'm')) {
            this.blocks.push({
                id: time.format('HH:mm'),
                display: time.format('HH:mm'),
                hour: time.minute() === 0,
                show: time.minute() % 30 === 0,
                disabled: time.isBefore(now, 'm'),
            });
        }
        this.checkInUseBlocks();
    }

    public get display(): string {
        const date = dayjs(this.date);
        const end = dayjs(this.date).add(this.duration, 'm');
        const duration = formatDuration({ minutes: this.duration });
        return `${date.format('hh:mm A')} - ${end.format('hh:mm A')} (${duration})`;
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
                    const off = this.active_move === 'bottom' ? { x: 0, y: 0 } : this.offset;
                    const content_box = this.block.nativeElement.getBoundingClientRect();
                    const percent_w = (center.x - off.x - content_box.left) / content_box.width;
                    const percent_h = (center.y - off.y - content_box.top) / content_box.height;
                    const percent = percent_h;

                    const start_time =
                        this.timeline_start.hour() + this.timeline_start.minute() / 60;
                    const end_time = this.timeline_end.hour() + this.timeline_end.minute() / 60;
                    const diff_time = end_time - start_time;
                    const block_size = 15;
                    const hour =
                        Math.ceil((diff_time * percent + start_time) * (60 / block_size)) /
                        (60 / block_size);
                    if (this.active_move === 'bottom') {
                        let date = dayjs(this.date);
                        const end = dayjs(this.date)
                            .hour(Math.floor(hour))
                            .minute(Math.floor((hour * 60) % 60));
                        if (end.isSame(date, 'm') || end.isBefore(date, 'm')) {
                            date = dayjs(end).add(-this.duration, 'm');
                            this.date = date.valueOf();
                        } else {
                            const duration = Math.floor(end.diff(date, 'm'));
                            this.duration = Math.max(60, duration || block_size);
                            this.durationChange.emit(this.duration);
                        }
                    } else if (this.active_move === 'top') {
                        const date = dayjs(this.date)
                            .hour(Math.floor(hour))
                            .minute(Math.floor((hour * 60) % 60));
                        this.date = date.valueOf();
                    }
                    this.dateChange.emit(this.date);
                    this.updateStartEnd();
                }
            },
            10
        );
    }

    // public setOffset(e) {
    // if (this.time) {
    //     const box = this.time.nativeElement.getBoundingClientRect();
    //     this.offset = { x: e.center.x - box.left, y: e.center.y - box.top };
    // }
    // }

    public setMove(move: string) {
        console.log(move);
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
                const end = dayjs(start).add(event.duration, 'm');
                for (let time = dayjs(start); time.isBefore(end); time = time.add(5, 'm')) {
                    const display = time.format('HH:mm');
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
        let t = dayjs()
            .startOf('d')
            .hour(Math.floor(time))
            .minute(Math.floor((time * 60) % 60));
        t = t.minute(Math.floor(t.minute() / 5) * 5);
        return t;
    }

    public updateStartEnd() {
        this.updatePeriod();
    }

    public resetMove() {
        this.active_move = '';
    }

    public updatePeriod() {
        const start = dayjs(this.date).startOf('m');
        const period = this.timeline_end.diff(this.timeline_start, 'm') / 60;
        this.active_start = start.diff(this.timeline_start, 'm') / 60 / period;
        this.active_length = this.duration / 60 / period;
    }
}
