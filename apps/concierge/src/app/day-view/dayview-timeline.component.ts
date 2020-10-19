import { Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseClass } from '@user-interfaces/common';
import { OrganisationService } from '@user-interfaces/organisation';
import { SpacesService } from '@user-interfaces/spaces';
import { EventsStateService } from './events-state.service';

const HOUR_BLOCKS = new Array(24).fill(0).map((_, idx) => {
    return (idx % 12 === 0 ? 12 : idx % 12) + (idx >= 12 ? ' PM' : ' AM');
});

@Component({
    selector: 'dayview-timeline',
    template: `
        <div class="time h-full overflow-hidden">
            <div class="headers relative">
                <div class="white-space absolute inset-0" style="bottom: 1em"></div>
            </div>
            <div *ngFor="let time of blocks" name="change-transform" class="relative" [style.transform]="'translateY(-' + scroll.y + 'px)'">
                <div class="text absolute w-full text-xs">{{ time }}</div>
                <div class="bar absolute"></div>
            </div>
        </div>
        <div class="h-full flex-1 flex flex-col">
            <div class="headers flex relative overflow-hidden">
                <div class="bar absolute"></div>
                <div
                    *ngFor="let space of space_list | async"
                    name="change-transform"
                    class="relative w"
                    [style.transform]="'translateX(-' + scroll.x + 'px)'"
                >
                    <div class="bar absolute"></div>
                    <div class="name m-2 text-center">{{ space.display_name || space.name }}</div>
                </div>
            </div>
            <div
                #scroll_el
                class="content relative flex flex-1 overflow-auto"
                (scroll)="onScroll()"
            >
                <div #ref class="ref absolute"></div>
                <dayview-space
                    *ngFor="let space of space_list | async"
                    [space]="space"
                ></dayview-space>
                <div
                    *ngFor="let time of blocks; let i = index"
                    class="block absolute w-full"
                    [style.width]="(space_list | async).length * 12 + 'em'"
                    [style.top]="i * 4 + 'em'"
                ></div>
            </div>
        </div>
        <mat-progress-bar *ngIf="loading | async" mode="indeterminate"></mat-progress-bar>
        <dayview-event-details *ngIf="event | async" [event]="event | async"></dayview-event-details>
    `,
    styles: [
        `
            :host {
                display: flex;
                align-items: center;
                flex: 1;
                min-height: 50%;
            }

            .time {
                width: 6em;
            }

            .time > div:not(.headers) {
                height: 4em;
            }

            .bar {
                width: 1em;
                top: 0;
                right: 0;
                height: 1px;
                background-color: rgba(0, 0, 0, 0.1);
                z-index: 0;
            }

            .headers {
                height: 4em;
                max-width: calc(100vw - 12em);
            }

            .white-space {
                background-color: #f0f0f0;
                z-index: 999;
            }

            .headers .bar {
                width: 1px;
                bottom: 0;
                right: -1px;
                height: 2em;
                background-color: rgba(0, 0, 0, 0.1);
                top: auto;
            }

            .headers > .bar:first-child {
                width: 1px;
                bottom: 0;
                right: auto;
                left: 0;
                height: 2em;
                background-color: rgba(0, 0, 0, 0.1);
                top: auto;
            }

            .w,
            dayview-space {
                width: 12em;
                min-width: 12em;
            }

            dayview-space {
                height: 96em;
            }

            .block {
                height: 4em;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                pointer-events: none;
                min-width: 100%;
                z-index: 0;
            }

            .text {
                text-align: center;
                transform: translateY(-50%);
                padding: 0 2.5em;
                opacity: 0.65;
            }

            .ref {
                top: 0;
                left: 0;
                height: 1px;
                width: 1px;
                height: 96em;
            }

            .content {
                max-width: calc(100vw - 12em);
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                border-left: 1px solid rgba(0, 0, 0, 0.1);
            }

            mat-progress-bar {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
            }

            [name="change-transform"] {
                will-change: transform;
            }
        `,
    ],
})
export class DayviewTimelineComponent extends BaseClass {
    /** Time blocks to display */
    public readonly blocks: string[] = HOUR_BLOCKS;
    /** Current scroll position of the content */
    public scroll: { x: number; y: number } = { x: 0, y: 0 };
    /** Reference Box */
    public box: ClientRect;
    /** Whether event data is loading */
    public readonly loading = this._state.loading;
    /** Whether event data is loading */
    public readonly event = this._state.event;
    /** List of spaces to display */
    public readonly space_list = combineLatest([
        this._org.active_building,
        this._spaces.list,
        this._state.zones,
    ]).pipe(
        map((details) => {
            const [bld, spaces, zones] = details;
            return (
                spaces.filter(
                    (space) =>
                        space.zones.includes(bld.id) &&
                        (!zones || !zones.length || space.zones.find((z) => zones.includes(z)))
                ) || []
            );
        })
    );

    @ViewChild('ref') private _ref_el: ElementRef;

    constructor(
        private _org: OrganisationService,
        private _spaces: SpacesService,
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

    public ngAfterViewInit() {
        this.box = this._ref_el.nativeElement.getBoundingClientRect();
    }

    public onScroll() {
        if (this._ref_el) {
            requestAnimationFrame(() => {
                const box = this._ref_el.nativeElement.getBoundingClientRect();
                this.scroll = { x: this.box.left - box.left, y: this.box.top - box.top };
            });
        }
    }
}
