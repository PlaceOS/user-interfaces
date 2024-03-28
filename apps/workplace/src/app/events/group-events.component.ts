import { Component } from '@angular/core';
import { GroupEventsStateService } from './group-events-state.service';
import { of } from 'rxjs';
import { Booking } from '@placeos/bookings';
import { map } from 'rxjs/operators';

@Component({
    selector: '[dashboard]',
    template: `
        <topbar></topbar>
        <main class="flex flex-1 h-1/2 bg-base-200">
            <group-events-sidebar></group-events-sidebar>
            <div class="w-1/2 flex-1 h-full overflow-auto p-4">
                <group-event-card
                    *ngIf="featured | async; else no_featured"
                    [event]="featured | async"
                    [featured]="true"
                    class="my-2 mx-auto"
                ></group-event-card>
                <ng-template #no_featured>
                    <div
                        class="flex items-center justify-center w-full h-48 bg-base-300 rounded-xl"
                        *ngIf="(event_list | async)?.length"
                    >
                        <div class="opacity-30">No featured event</div>
                    </div>
                </ng-template>
                <div
                    class="flex flex-wrap justify-center mt-2"
                    *ngIf="(event_list | async)?.length; else no_events"
                >
                    <group-event-card
                        *ngFor="let event of event_list | async"
                        [event]="event"
                        class="m-2"
                    ></group-event-card>
                </div>
                <ng-template #no_events>
                    <div class="flex items-center justify-center w-full h-48">
                        <div class="opacity-30">No upcoming events</div>
                    </div>
                </ng-template>
            </div>
        </main>
        <footer-menu></footer-menu>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            main {
                min-height: 50%;
            }

            .top {
                background-color: #007ac8;
            }
        `,
    ],
})
export class GroupEventsComponent {
    public readonly event_list = this._state.events;
    public readonly featured = this.event_list.pipe(
        map((_) => _.find((_: any) => _.extension_data?.featured || _.featured))
    );

    constructor(private _state: GroupEventsStateService) {}
}
