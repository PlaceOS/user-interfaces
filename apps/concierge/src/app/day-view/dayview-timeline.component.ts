import { Component, OnDestroy, OnInit } from '@angular/core';
import { querySystems } from '@placeos/ts-client';
import { combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

import { AsyncHandler } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { EventsStateService } from './events-state.service';

const HOUR_BLOCKS = new Array(24).fill(0).map((_, idx) => {
    return (idx % 12 === 0 ? 12 : idx % 12) + (idx >= 12 ? ' PM' : ' AM');
});

@Component({
    selector: 'dayview-timeline',
    template: `
        <div class="absolute inset-0 flex">
            <div class="time h-full w-24 overflow-hidden bg-base-100 relative">
                <div header class="relative h-16 z-50">
                    <div
                        class="bg-base-100 absolute top-0 left-0 right-0 bottom-8"
                    ></div>
                </div>
                <div
                    *ngFor="let time of blocks"
                    change-transform
                    class="relative h-16 border-r border-base-300 z-10"
                    [style.transform]="'translateY(-' + scroll.y + 'px)'"
                >
                    <div
                        class="absolute text-center w-full text-xs top-0 transform -translate-y-1/2 opacity-40"
                    >
                        {{ time }}
                    </div>
                    <div
                        class="absolute h-px w-2 top-0 right-0 bg-base-300"
                    ></div>
                </div>
                <div class="absolute h-8 w-px top-8 right-0 bg-base-300"></div>
            </div>
            <div class="h-full flex-1 flex flex-col w-1/2">
                <div
                    header
                    class="flex relative overflow-hidden border-b border-base-300 border-opacity-50 bg-base-100 h-16 w-full"
                >
                    <div
                        *ngFor="let space of space_list | async"
                        change-transform
                        class="relative h-16 w-48 min-w-[12rem]"
                        [style.transform]="'translateX(-' + scroll.x + 'px)'"
                    >
                        <div
                            bar
                            class="absolute h-8 w-px bottom-0 -left-px bg-base-300"
                        ></div>
                        <div class="name m-2 text-center">
                            {{ space.display_name || space.name }}
                        </div>
                    </div>
                </div>
                <div
                    #scroll_el
                    content
                    class="relative flex flex-1 overflow-auto"
                    (scroll)="onScroll($event)"
                >
                    <dayview-space
                        *ngFor="let space of space_list | async"
                        [space]="space"
                        class="w-48 min-w-[12rem] h-[96rem] border-r border-base-300"
                    ></dayview-space>
                    <div
                        *ngFor="let time of blocks; let i = index"
                        class="absolute bg-base-300 h-px min-w-full left-0"
                        [style.width]="
                            (space_list | async)?.length * 12 + 'rem'
                        "
                        [style.top]="i * 4 + 'rem'"
                    ></div>
                </div>
            </div>
            <mat-progress-bar
                *ngIf="loading | async"
                mode="indeterminate"
                class="absolute bottom-0 left-0 right-0"
            ></mat-progress-bar>
            <view-event-details
                *ngIf="event | async"
                [event]="event | async"
            ></view-event-details>
        </div>
    `,
    styles: [
        `
            :host {
                position: relative;
                height: 100%;
                width: 100%;
            }

            [change-transform] {
                will-change: transform;
            }
        `,
    ],
})
export class DayviewTimelineComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    /** Time blocks to display */
    public readonly blocks: string[] = HOUR_BLOCKS;
    /** Current scroll position of the content */
    public scroll: { x: number; y: number } = { x: 0, y: 0 };
    /** Whether event data is loading */
    public readonly loading = this._state.loading;
    /** Event to show more details about */
    public readonly event = this._state.event;

    public readonly spaces = this._org.active_building.pipe(
        filter((_) => !!_),
        switchMap(({ id }) =>
            querySystems({ zone_id: id, limit: 1000 }).pipe(
                catchError(() => of({ data: [] }))
            )
        ),
        map(({ data }) =>
            data.map(
                (_) =>
                    new Space({
                        ..._,
                        level: this._org.levelWithID(_.zones),
                    } as any)
            )
        ),
        shareReplay(1)
    );
    /** List of spaces to display */
    public readonly space_list = combineLatest([
        this.spaces,
        this._state.zones,
    ]).pipe(
        map(
            ([spaces, zones]) =>
                spaces.filter(
                    (space) =>
                        !zones?.length ||
                        space.zones.find((z) => zones.includes(z))
                ) || []
        )
    );

    constructor(
        private _org: OrganisationService,
        private _state: EventsStateService
    ) {
        super();
    }

    public ngOnInit() {
        this._state.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }

    public onScroll(e) {
        requestAnimationFrame(
            () =>
                (this.scroll = {
                    x: e.srcElement.scrollLeft,
                    y: e.srcElement.scrollTop,
                })
        );
    }
}
