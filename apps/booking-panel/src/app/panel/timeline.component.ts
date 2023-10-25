import { Component, Input } from '@angular/core';
import { timePeriodsIntersect } from '@placeos/common';
import {
    addMinutes,
    getMinutes,
    roundToNearestMinutes,
    format,
} from 'date-fns';
import { combineLatest, timer } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { PanelStateService } from '../panel-state.service';

@Component({
    selector: 'panel-timeline',
    template: `
        <div
            class="flex items-center relative w-full h-16 bg-secondary text-white"
        >
            <div
                block
                class="flex-1 h-full relative border-dashed border-opacity-50 flex items-end"
                [class.bg-error]="!block.free"
                [class.border-l]="block.on_half"
                [class.border-base-200]="block.on_half"
                *ngFor="let block of blocks | async"
                (click)="block.free ? newBooking(block) : ''"
            >
                <div
                    class="w-px h-1/2 bg-base-100 relative"
                    *ngIf="block.on_hour"
                >
                    <p
                        class="absolute transform -translate-x-1/2 -translate-y-full"
                    >
                        {{ block.hour }}
                    </p>
                </div>
            </div>
            <div
                cover
                class="absolute top-0 left-0 bottom-0 w-1/6 bg-neutral bg-opacity-40"
            >
                <div
                    class="absolute top-0 right-0 bottom-0 transform translate-x-1/2 bg-primary"
                >
                    <div
                        class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary h-2 w-2"
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
                roundToNearestMinutes(new Date(), { nearestTo: this.step }),
                -120
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
                            bkn.date + bkn.duration * 60 * 1000
                        )
                    ),
                });

                start = addMinutes(start, this.step).valueOf();
            }
            return blocks;
        })
    );

    public readonly newBooking = (blk) => this._state.newBooking(blk.time);

    constructor(private _state: PanelStateService) {}
}
