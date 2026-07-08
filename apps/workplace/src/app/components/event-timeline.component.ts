import {
    Component,
    ElementRef,
    input,
    model,
    OnChanges,
    OnInit,
    output,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import {
    addDays,
    addMinutes,
    differenceInMinutes,
    differenceInSeconds,
    format,
    isAfter,
    isBefore,
    isSameMinute,
    set,
    startOfDay,
    startOfMinute,
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
    template: `
        <div [class]="'event-timeline' + (klass() ? ' ' + klass() : '')">
            <div
                class="times"
                (window:mouseup)="resetMove()"
                (window:touchend)="resetMove()"
            >
                <div class="row divider">
                    <div class="header"></div>
                    <div class="line">
                        @for (blk of model.blocks || []; track blk) {
                            <div class="mini-block">
                                @if (blk.hour) {
                                    <div class="time">
                                        <span>{{ blk.short }}</span>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="overlay row">
                    <div class="header"></div>
                    <div
                        class="line"
                        #overlay
                        (mousemove)="move($event)"
                        (touchmove)="move($event)"
                    >
                        @for (blk of model.blocks || []; track blk) {
                            <div
                                class="mini-block"
                                [class.unavailable]="blk.unavailable"
                                (click)="setTime(blk)"
                            >
                                <div
                                    class="bar"
                                    [class.hour]="blk.hour"
                                    [class.divider]="blk.divider"
                                ></div>
                            </div>
                        }
                        @if (model.today > 0) {
                            <div
                                class="current-time"
                                [style.left]="
                                    vertical ? '' : model.today * 100 + '%'
                                "
                                [style.top]="
                                    vertical ? model.today * 100 + '%' : ''
                                "
                            ></div>
                        }
                        @if (can_select()) {
                            <div
                                class="selected-time"
                                [style.left]="
                                    vertical ? '' : model.start_time * 100 + '%'
                                "
                                [style.top]="
                                    vertical ? model.start_time * 100 + '%' : ''
                                "
                                [style.width]="
                                    vertical ? '' : model.duration * 100 + '%'
                                "
                                [style.height]="
                                    vertical ? model.duration * 100 + '%' : ''
                                "
                            >
                                <div
                                    class="inner"
                                    (mousedown)="setMove('start')"
                                    (touchstart)="setMove('start')"
                                ></div>
                                <div
                                    class="knob start"
                                    (mousedown)="setMove('start')"
                                    (touchstart)="setMove('start')"
                                ></div>
                                <div
                                    class="knob end"
                                    (mousedown)="setMove('end')"
                                    (touchstart)="setMove('end')"
                                ></div>
                            </div>
                        }
                    </div>
                </div>
                @for (grp of this.model.groups || []; track grp) {
                    <div class="row" [class.divider]="grp.divider">
                        <div class="header">
                            <div class="text">{{ grp.name }}</div>
                            @if (grp.remove) {
                                <div class="icon" (click)="grp.remove()">
                                    <i class="material-symbols-rounded"
                                        >close</i
                                    >
                                </div>
                            }
                        </div>
                        <div class="line">
                            @for (blk of grp.blocks; track blk) {
                                <div class="mini-block">
                                    @for (event of blk.events; track event) {
                                        <div
                                            class="item"
                                            [style.width]="
                                                vertical
                                                    ? ''
                                                    : (event.duration / 5) *
                                                          100 +
                                                      '%'
                                            "
                                            [style.height]="
                                                vertical
                                                    ? (event.duration / 5) *
                                                          100 +
                                                      '%'
                                                    : ''
                                            "
                                        >
                                            <div class="text">
                                                {{ event.text }}
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            .times {
                position: sticky;
                top: 0;
                left: 0;
                overflow: auto;
                border: 1px solid #ccc;
            }

            .content {
                position: relative;
                overflow: auto;
                border: 1px solid #ccc;
                border-top: none;
                .row {
                    border-top: 1px solid #ccc;
                    &:first-child {
                        border-top: none;
                    }
                }
                .ovrelay .line {
                    overflow: auto;
                }
            }

            .row {
                position: relative;
                display: flex;
                align-items: center;
                min-width: 100%;
                min-height: 2.5em;
                z-index: 0;

                &.divider {
                    background-color: #f0f0f0;
                    z-index: 2;
                }
            }

            .overlay {
                position: absolute;
                height: 100%;
                width: 100%;
                pointer-events: none;
                background: none;
                border: none;
                z-index: 1;

                .line {
                    pointer-events: auto;
                }

                .mini-block {
                    pointer-events: auto;
                    &.unavailable {
                        background-color: rgba(#000, 0.05);
                    }
                    &:first-child {
                        opacity: 0;
                    }
                }

                .bar {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;

                    &.hour {
                        border-left-style: solid;
                    }

                    &.divider {
                        border-left: 1px dashed rgba(#000, 0.05);
                    }
                }
            }

            .line {
                position: relative;
                display: flex;
                align-items: center;
                flex: 1;
                min-width: 10em;
                height: 100%;
                overflow: hidden;
                pointer-events: none;
            }

            .time {
                position: absolute;
                left: 0;
                bottom: 0.5em;
                transform: translateX(-50%);
                display: flex;
                align-items: center;
                white-space: nowrap;
            }

            .header {
                position: sticky;
                display: flex;
                align-items: center;
                top: 0;
                left: 0;
                bottom: 0;
                width: 10em;
                border-right: 1px solid #ccc;
                min-height: 2.5em;
                .text {
                    padding: 0.5em;
                }
            }

            .vertical {
                .row {
                    flex-direction: column;
                    min-width: 0;
                    min-height: 100%;
                }

                .mini-block {
                    min-height: 4px;
                    min-width: 2.5em;
                }

                .selected-time {
                    top: auto;
                    bottom: auto;
                    left: 0;
                    right: 0;
                    border: none;
                    border-top: 2px solid var(--secondary);
                    border-bottom: 2px solid var(--secondary);
                    pointer-events: auto;

                    .knob {
                        position: absolute;
                        top: 0;
                        left: 1em;
                        transform: translateY(calc(-50% - 1px));
                        cursor: ns-resize;
                        &.end {
                            top: auto;
                            bottom: 0;
                            left: auto;
                            right: 1em;
                            transform: translateY(calc(50% + 1px));
                        }
                    }
                }

                .curent-time {
                    top: auto;
                    bottom: auto;
                    left: 0;
                    right: 0;
                    width: auto;
                    height: 2px;
                    background-color: var(--secondary);
                }
            }

            .mini-block {
                position: relative;
                min-width: 4px;
                min-height: 2.5em;
                height: 100%;
                flex: 1;
            }

            .item {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                background-color: rgba(var(--secondary), 0.54);
                border: 1px solid rgba(#fff, 0.87);
            }

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 1.2em;
                width: 1.2em;
                img {
                    max-height: 1em;
                    max-width: 1em;
                }
            }

            .selected-time {
                position: absolute;
                top: 0;
                bottom: 0;
                background-color: rgba(var(--secondary), 0.2);
                border-left: 2px solid var(--secondary);
                border-right: 2px solid var(--secondary);
                pointer-events: auto;

                .inner {
                    height: 100%;
                    width: 100%;
                    cursor: grab;
                }

                .knob {
                    position: absolute;
                    top: 1em;
                    left: 0;
                    height: 12px;
                    width: 12px;
                    border-radius: 100%;
                    background-color: var(--secondary);
                    transform: translateX(calc(-50% - 1px));
                    box-shadow:
                        0 1px 3px 0 rgba(0, 0, 0, 0.2),
                        0 1px 1px 0 rgba(0, 0, 0, 0.14),
                        0 2px 1px -1px rgba(0, 0, 0, 0.12);
                    cursor: ew-resize;
                    &.end {
                        top: auto;
                        left: auto;
                        right: 0;
                        bottom: 1em;
                        transform: translateX(calc(50% + 1px));
                    }
                }
            }

            .current-time {
                position: absolute;
                top: 0;
                bottom: 0;
                width: 2px;
                background-color: var(--primary-dark);
            }
        `,
    ],
    imports: [],
})
export class EventTimelineComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    /** Groups and events */
    public readonly groups = input<ITimelineEventGroup[]>(undefined);
    /** Selected date */
    public readonly date = model(Date.now());
    /** Selected duration in min */
    public readonly duration = model(30);
    /** Whether time can be changed */
    public readonly can_select = input(true);
    public readonly klass = input<string>(undefined);

    /** Output emitter */
    public readonly groupsChange = output<ITimelineEventGroup[]>();

    public vertical = false;
    public model: { [name: string]: any } = {};

    public readonly content = viewChild<ElementRef<HTMLDivElement>>('overlay');

    public ngOnInit(): void {
        this.model.start = set(this.date(), { hours: 6, minutes: 30 });
        this.model.end = set(this.date(), { hours: 21, minutes: 30 });
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
        this.model.start = set(this.date(), { hours: 6, minutes: 30 });
        this.model.end = set(this.date(), { hours: 21, minutes: 30 });
        this.updatePeriod();
        this.updateTime();
    }

    public generateBlocks() {
        const start = this.model.start;
        const end = this.model.end;
        const blocks: ITimelineBlock[] = [];
        for (
            let time = start;
            isBefore(time, end);
            time = addMinutes(time, 5)
        ) {
            const minute = new Date(time).getMinutes();
            blocks.push({
                id: format(time, 'HH:mm'),
                display: format(time, 'hh:00 a'),
                short: format(time, 'hh a'),
                hour: minute === 0,
                divider: minute % 30 === 0,
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
                for (const grp of this.groups() || []) {
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
                                const event_time = set(this.date(), {
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
                            id: format(time, 'HH:mm'),
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
        const start = startOfMinute(this.date());
        const period =
            differenceInMinutes(this.model.end, this.model.start) / 60;
        this.model.start_time =
            differenceInMinutes(start, this.model.start) / 60 / period;
        this.model.duration = this.duration() / 60 / period;
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
        const time = set(this.date(), {
            hours: +parts[0],
            minutes: +parts[1],
        });
        this.date.set(time.valueOf());
        this.updatePeriod();
    }

    public move(e) {
        this.timeout(
            'move',
            () => {
                const content = this.content();
                if (this.model.move && content) {
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
                        content.nativeElement.getBoundingClientRect();
                    const percent_w =
                        (center.x - content_box.left) / content_box.width;
                    const percent_h =
                        (center.y - content_box.top) / content_box.height;
                    const percent = !this.vertical ? percent_w : percent_h;

                    const start_date = new Date(this.model.start);
                    const end_date = new Date(this.model.end);
                    const start_time =
                        start_date.getHours() + start_date.getMinutes() / 60;
                    const end_time =
                        end_date.getHours() + end_date.getMinutes() / 60;
                    const diff_time = end_time - start_time;
                    const block_size = 15;
                    const hour =
                        Math.ceil(
                            (diff_time * percent + start_time) *
                                (60 / block_size),
                        ) /
                        (60 / block_size);
                    if (this.model.move === 'end') {
                        let date = this.date();
                        const end = set(this.date(), {
                            hours: Math.floor(hour),
                            minutes: Math.floor((hour * 60) % 60),
                        });
                        if (isSameMinute(end, date) || isBefore(end, date)) {
                            date = addMinutes(end, -this.duration()).valueOf();
                        } else {
                            const duration = Math.floor(
                                differenceInMinutes(end, date),
                            );
                            this.duration.set(
                                Math.max(60, duration || block_size),
                            );
                        }
                    } else if (this.model.move === 'start') {
                        const date = set(this.date(), {
                            hours: Math.floor(hour),
                            minutes: Math.floor((hour * 60) % 60),
                        });
                        this.date.set(date.valueOf());
                    }
                    this.updatePeriod();
                }
            },
            10,
        );
    }
}
