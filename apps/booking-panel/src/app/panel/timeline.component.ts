import { Component, Input } from '@angular/core';
import { timePeriodsIntersect } from '@placeos/common';
import {
    addMinutes,
    format,
    getMinutes,
    roundToNearestMinutes,
} from 'date-fns';
import { combineLatest, timer } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-timeline',
    template: `
        <div
            class="relative flex h-16 w-full items-center bg-secondary text-white"
        >
            @for (block of blocks | async; track block.hour) {
                <div
                    block
                    class="relative flex h-full flex-1 items-end border-dashed border-opacity-50"
                    [class.bg-error]="!block.free"
                    [class.border-l]="block.on_half"
                    [class.border-base-200]="block.on_half"
                    (click)="block.free ? newBooking(block) : ''"
                >
                    @if (block.on_hour) {
                        <div class="relative h-1/2 w-px bg-base-100">
                            <p
                                class="absolute -translate-x-1/2 -translate-y-full transform"
                            >
                                {{ block.hour }}
                            </p>
                        </div>
                    }
                </div>
            }
            <div
                cover
                class="absolute bottom-0 left-0 top-0 w-1/6 bg-neutral bg-opacity-40"
            >
                <div
                    class="absolute bottom-0 right-0 top-0 translate-x-1/2 transform bg-primary"
                >
                    <div
                        class="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary"
                    ></div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            [cover] > div {
                width: 2px;
            }
        `,
    ],
    standalone: false,
})
export class PanelTimelineComponent {
    @Input() public step = 10;

    public readonly blocks = combineLatest([
        this._state.bookings,
        timer(100, 15 * 1000).pipe(startWith(0)),
    ]).pipe(
        map(([bookings]) => {
            const blocks = [];
            let start = addMinutes(
                roundToNearestMinutes(new Date(), {
                    nearestTo: this.step as any,
                }),
                -120,
            ).valueOf();
            const end = addMinutes(start, 12 * 60).valueOf();
            while (start < end) {
                blocks.push({
                    id: format(start, 'HH:mm'),
                    time: start,
                    hour: format(start, 'h'),
                    on_hour: getMinutes(start) === 0,
                    on_half: getMinutes(start) === 30,
                    free: !bookings.find((bkn) =>
                        timePeriodsIntersect(
                            start,
                            start,
                            bkn.date,
                            bkn.date + bkn.duration * 60 * 1000,
                        ),
                    ),
                });

                start = addMinutes(start, this.step).valueOf();
            }
            return blocks;
        }),
    );

    public readonly newBooking = (blk) => this._state.newBooking(blk.time);

    constructor(private _state: PanelStateService) {}
}
