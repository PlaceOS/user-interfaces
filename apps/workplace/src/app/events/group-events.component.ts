import { Component } from '@angular/core';
import { GroupEventsStateService } from './group-events-state.service';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { addDays, endOfDay, startOfDay } from 'date-fns';
import { AsyncHandler, SettingsService } from '@placeos/common';

@Component({
    selector: '[group-events]',
    template: `
        <topbar></topbar>
        <main class="flex flex-1 h-1/2 bg-base-200">
            <group-events-sidebar></group-events-sidebar>
            <div class="w-1/2 flex-1 h-full overflow-auto p-4">
                <group-events-filters-list></group-events-filters-list>
                <group-event-card
                    *ngIf="featured | async"
                    [event]="featured | async"
                    [featured]="true"
                    class="my-2 mx-auto w-[64rem] max-w-full"
                ></group-event-card>
                <ng-container
                    *ngIf="(event_list | async)?.length; else no_events"
                >
                    <div
                        class="flex flex-wrap mt-2 w-[64rem] max-w-full mx-auto"
                    >
                        <group-event-card
                            *ngFor="
                                let event of events_without_featured | async
                            "
                            [event]="event"
                            class="m-2"
                        ></group-event-card>
                    </div>
                </ng-container>
                <ng-template #no_events>
                    <div
                        class="flex flex-col items-center justify-center w-full h-full space-y-2"
                    >
                        <img src="assets/icons/no-results.svg" class="w-32" />
                        <div class="font-medium">
                            No events for the selected time period
                        </div>
                        <div class="opacity-30">
                            Expand you search or try again
                        </div>
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
export class GroupEventsComponent extends AsyncHandler {
    public readonly event_list = this._state.filtered_events;
    public readonly featured = this.event_list.pipe(
        map((_) => _.find((_: any) => _.extension_data?.featured || _.featured))
    );
    public readonly events_without_featured = combineLatest([
        this.event_list,
        this.featured,
    ]).pipe(
        map(([list, featured]) =>
            list.filter((_: any) => _.id !== featured?.id)
        )
    );

    constructor(private _state: GroupEventsStateService) {
        super();
    }
}
