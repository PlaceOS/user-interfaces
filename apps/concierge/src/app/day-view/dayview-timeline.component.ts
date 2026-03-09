import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AsyncHandler, OrganisationService, Space } from '@placeos/common';
import { querySystems } from '@placeos/ts-client';
import { combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

import { EventsStateService } from './events-state.service';

const HOUR_BLOCKS = new Array(24).fill(0).map((_, idx) => {
    return (idx % 12 === 0 ? 12 : idx % 12) + (idx >= 12 ? ' PM' : ' AM');
});

@Component({
    selector: 'dayview-timeline',
    template: `
        <div class="absolute inset-0 flex">
            <div class="time bg-base-100 relative h-full w-24 overflow-hidden">
                <div header class="relative z-50 h-16">
                    <div
                        class="bg-base-100 absolute top-0 right-0 bottom-8 left-0"
                    ></div>
                </div>
                @for (time of blocks; track time) {
                    <div
                        change-transform
                        class="border-base-300 relative z-10 h-16 border-r"
                        [style.transform]="'translateY(-' + scroll.y + 'px)'"
                    >
                        <div
                            class="absolute top-0 w-full -translate-y-1/2 transform text-center text-xs text-gray-600"
                        >
                            {{ time }}
                        </div>
                        <div
                            class="bg-base-300 absolute top-0 right-0 h-px w-2"
                        ></div>
                    </div>
                }
                <div class="bg-base-300 absolute top-8 right-0 h-8 w-px"></div>
            </div>
            <div class="flex h-full w-1/2 flex-1 flex-col">
                <div
                    header
                    class="border-base-300/50 bg-base-100 relative flex h-16 w-full overflow-hidden border-b"
                >
                    @for (space of space_list | async; track space) {
                        <div
                            change-transform
                            class="relative h-16 w-48 min-w-48"
                            [style.transform]="
                                'translateX(-' + scroll.x + 'px)'
                            "
                        >
                            <div
                                bar
                                class="bg-base-300 absolute bottom-0 -left-px h-8 w-px"
                            ></div>
                            <div class="name m-2 text-center">
                                {{ space.display_name || space.name }}
                            </div>
                        </div>
                    }
                </div>
                <div
                    #scroll_el
                    content
                    class="relative flex flex-1 overflow-auto"
                    (scroll)="onScroll($event)"
                >
                    @for (space of space_list | async; track space) {
                        <dayview-space
                            [space]="space"
                            class="border-base-300 h-384 w-48 min-w-48 border-r"
                        ></dayview-space>
                    }
                    @for (time of blocks; track time; let i = $index) {
                        <div
                            class="bg-base-300 absolute left-0 h-px min-w-full"
                            [style.width]="
                                (space_list | async)?.length * 12 + 'rem'
                            "
                            [style.top]="i * 4 + 'rem'"
                        ></div>
                    }
                </div>
            </div>
            @if (loading | async) {
                <mat-progress-bar
                    mode="indeterminate"
                    class="absolute right-0 bottom-0 left-0"
                ></mat-progress-bar>
            }
            @if (event | async) {
                <view-event-details
                    [event]="event | async"
                ></view-event-details>
            }
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
    standalone: false,
})
export class DayviewTimelineComponent
    extends AsyncHandler
    implements OnInit, OnDestroy
{
    private _org = inject(OrganisationService);
    private _state = inject(EventsStateService);

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
                catchError(() => of({ data: [] })),
            ),
        ),
        map(({ data }) =>
            data.map(
                (_) =>
                    new Space({
                        ..._,
                        level: this._org.levelWithID(_.zones),
                    } as any),
            ),
        ),
        shareReplay(1),
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
                        space.zones.find((z) => zones.includes(z)),
                ) || [],
        ),
    );

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
                }),
        );
    }
}
