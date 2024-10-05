import {
    Component,
    OnInit,
    Input,
    SimpleChanges,
    OnChanges,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import {
    startOfDay,
    set,
    addMinutes,
    addDays,
    differenceInSeconds,
    isBefore,
    isAfter,
    isSameMinute,
    format,
    startOfMinute,
    differenceInMinutes,
} from 'date-fns';

export interface ITimelineEventGroup {
    name?: string;
    divider?: boolean;
    can_toggle?: boolean;
    disabled?: boolean;
    required?: boolean;
    events?: ITimelineEvent[];
    blocks?: ITimelineBlock[];
    remove?: () => void;
}

export interface ITimelineEvent {
    start: number;
    duration: number;
    text?: string;
}

interface ITimelineBlock {
    id: string;
    display?: string;
    short?: string;
    hour?: boolean;
    divider?: boolean;
    unavailable?: boolean;
    events?: ITimelineEvent[];
}

@Component({
    selector: 'event-timeline',
    templateUrl: './event-timeline.component.html',
    styleUrls: ['./event-timeline.component.scss'],
})
export class EventTimelineComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    /** Groups and events */
    @Input() public groups: ITimelineEventGroup[];
    /** Selected date */
    @Input() public date = Date.now();
    /** Selected duration in min */
    @Input() public duration = 30;
    /** Whether time can be changed */
    @Input() public can_select = true;
    @Input() public klass: string;

    /** Output emitter */
    @Output() public dateChange = new EventEmitter<number>();
    @Output() public durationChange = new EventEmitter<number>();
    @Output() public groupsChange = new EventEmitter<ITimelineEventGroup[]>();

    public vertical = false;
    public model: { [name: string]: any } = {};

    @ViewChild('overlay', { static: false })
    public content: ElementRef<HTMLDivElement>;

    public ngOnInit(): void {
        this.model.start = set(this.date, { hours: 6, minutes: 30 });
        this.model.end = set(this.date, { hours: 21, minutes: 30 });
        this.generateBlocks();
        this.updateTime();
        this.interval('timer', () => this.updateTime(), 60 * 1000);
        const now = Date.now();
        ('');
        const tomorrow = addDays(startOfDay(now), 1).valueOf();
        this.timeout(
            'update_date',
            () => {
                this.updateStartEnd();
                this.interval(
                    'update_date',
                    () => this.updateStartEnd(),
                    24 * 60 * 60 * 1000,
                );
            },
            Math.floor(differenceInSeconds(tomorrow, now)),
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.groups) {
            this.processGroups();
        }
        if (changes.date || changes.duration) {
            this.updateStartEnd();
        }
    }

    public updateStartEnd() {
        this.model.start = set(this.date, { hours: 6, minutes: 30 });
        this.model.end = set(this.date, { hours: 21, minutes: 30 });
        this.updatePeriod();
        this.updateTime();
    }

    public generateBlocks() {
        const start = this.model.start;
        const end = this.model.end;
        const blocks: ITimelineBlock[] = [];
        for (let time = start; time.isBefore(end); time = time.add(5, 'm')) {
            blocks.push({
                id: time.format('HH:mm'),
                display: time.format('hh:00 a'),
                short: time.format('hh a'),
                hour: time.minute() === 0,
                divider: time.minute() % 30 === 0,
            });
        }
        this.model.blocks = blocks;
    }

    public processGroups() {
        this.timeout(
            'process',
            () => {
                this.model.groups = [];
                const date = this.model.start;
                const end = this.model.end;
                for (const grp of this.groups || []) {
                    const blocks: ITimelineBlock[] = [];
                    for (
                        let time = date;
                        isBefore(time, end);
                        time = addMinutes(time, 5).valueOf()
                    ) {
                        const blk_end = addMinutes(time, 5);
                        let events = [];
                        if (grp.events) {
                            events = grp.events.filter((i) => {
                                const event_time = set(this.date, {
                                    hours: Math.floor(i.start),
                                    minutes: Math.floor((i.start * 60) % 60),
                                });
                                return (
                                    (isAfter(event_time, time) ||
                                        isSameMinute(event_time, time)) &&
                                    isBefore(event_time, blk_end)
                                );
                            });
                        }
                        blocks.push({
                            id: time.format('HH:mm'),
                            events,
                        });
                    }
                    this.model.groups.push({ ...grp, blocks });
                }
                this.checkInUseBlocks();
            },
            20,
        );
    }

    public checkInUseBlocks() {
        if (!this.model.blocks) {
            return;
        }
        const blocks: ITimelineBlock[] = this.model.blocks.map((i) => ({
            ...i,
            unavailable: false,
        }));
        for (const grp of this.model.groups) {
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
        this.model.blocks = blocks;
    }

    public hoursToDate(time: number) {
        let t = set(startOfDay(Date.now()), {
            hours: Math.floor(time),
            minutes: Math.floor((time * 60) % 60),
        });
        t = set(t, { minutes: Math.floor(t.getMinutes() / 5) * 5 });
        return t.valueOf();
    }

    public timeToDate(timestamp: string) {
        const parts = timestamp.split(':');
        let t = set(startOfDay(Date.now()), {
            hours: +parts[0],
            minutes: +parts[1],
        });
        t = set(t, { minutes: Math.floor(t.getMinutes() / 5) * 5 });
        return t.valueOf();
    }

    public updatePeriod() {
        const start = startOfMinute(this.date);
        const period =
            differenceInMinutes(this.model.end, this.model.start) / 60;
        this.model.start_time =
            differenceInMinutes(start, this.model.start) / 60 / period;
        this.model.duration = this.duration / 60 / period;
    }

    public updateTime() {
        const start = startOfMinute(Date.now());
        const period =
            differenceInMinutes(this.model.end, this.model.start) / 60;
        this.model.today =
            differenceInMinutes(start, this.model.start) / 60 / period;
    }

    public resetMove() {
        this.model.move = '';
    }

    public setMove(move: string) {
        this.model.move = move;
    }

    public setTime(block: ITimelineBlock) {
        if (!block) {
            return;
        }
        const parts = block.id.split(':');
        const time = set(this.date, {
            hours: +parts[0],
            minutes: +parts[1],
        });
        this.date = time.valueOf();
        this.dateChange.emit(this.date);
        this.updatePeriod();
    }

    public move(e) {
        this.timeout(
            'move',
            () => {
                if (this.model.move && this.content) {
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
                    const content_box =
                        this.content.nativeElement.getBoundingClientRect();
                    const percent_w =
                        (center.x - content_box.left) / content_box.width;
                    const percent_h =
                        (center.y - content_box.top) / content_box.height;
                    const percent = !this.vertical ? percent_w : percent_h;

                    const start_time =
                        this.model.start.hour() +
                        this.model.start.minute() / 60;
                    const end_time =
                        this.model.end.hour() + this.model.end.minute() / 60;
                    const diff_time = end_time - start_time;
                    const block_size = 15;
                    const hour =
                        Math.ceil(
                            (diff_time * percent + start_time) *
                                (60 / block_size),
                        ) /
                        (60 / block_size);
                    if (this.model.move === 'end') {
                        let date = this.date;
                        const end = set(this.date, {
                            hours: Math.floor(hour),
                            minutes: Math.floor((hour * 60) % 60),
                        });
                        if (isSameMinute(end, date) || isBefore(end, date)) {
                            date = addMinutes(end, -this.duration).valueOf();
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
                    } else if (this.model.move === 'start') {
                        const date = set(this.date, {
                            hours: Math.floor(hour),
                            minutes: Math.floor((hour * 60) % 60),
                        });
                        this.date = date.valueOf();
                    }
                    this.dateChange.emit(this.date);
                    this.updatePeriod();
                }
            },
            10,
        );
    }
}
