import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsStateService } from '../day-view/events-state.service';

@Component({
    selector: 'week-view-timeline',
    template: `
        <div class="flex divide-x border-base-200 h-full">
            <ng-container *ngFor="let i of weekdays">
                <ng-container
                    *ngIf="
                        (i !== 0 && i !== 6) || (options | async).show_weekends
                    "
                >
                    <week-view-day
                        class="h-full flex-1"
                        [index]="i"
                    ></week-view-day>
                </ng-container>
            </ng-container>
        </div>
        <mat-progress-bar
            *ngIf="loading | async"
            mode="indeterminate"
        ></mat-progress-bar>
        <view-event-details
            *ngIf="event | async"
            [event]="event | async"
        ></view-event-details>
    `,
    styles: [
        `
            :host {
                position: relative;
                height: 100%;
                width: 100%;
                overflow: hidden;
            }
        `,
    ],
})
export class WeekViewTimelineComponent implements OnInit, OnDestroy {
    public readonly weekdays = [0, 1, 2, 3, 4, 5, 6];
    public readonly options = this._state.options;
    public readonly event = this._state.event;
    public readonly loading = this._state.loading;

    constructor(private _state: EventsStateService) {}

    public ngOnInit(): void {
        this._state.startPolling('week');
    }

    public ngOnDestroy() {
        this._state.stopPolling();
    }
}
