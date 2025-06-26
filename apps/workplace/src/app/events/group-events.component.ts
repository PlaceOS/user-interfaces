import { Component, inject } from '@angular/core';
import { AsyncHandler } from '@placeos/common';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { GroupEventsStateService } from './group-events-state.service';

@Component({
    selector: '[group-events]',
    template: `
        <topbar />
        <main class="flex h-1/2 flex-1 flex-col bg-base-200 sm:flex-row">
            <group-events-sidebar></group-events-sidebar>
            <div class="h-full w-full flex-1 overflow-auto p-2 sm:w-1/2 sm:p-4">
                <group-events-filters-list></group-events-filters-list>
                @if (featured | async) {
                    <group-event-card
                        [event]="featured | async"
                        [featured]="true"
                        class="mx-auto my-2 w-[64rem] max-w-full"
                    ></group-event-card>
                }
                @if ((event_list | async)?.length) {
                    <div
                        class="mx-auto mt-2 flex w-[64rem] max-w-full flex-wrap"
                    >
                        @for (
                            event of events_without_featured | async;
                            track event
                        ) {
                            <group-event-card
                                [event]="event"
                                class="m-2"
                            ></group-event-card>
                        }
                    </div>
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-2"
                    >
                        <img src="assets/icons/no-results.svg" class="w-32" />
                        <div class="font-medium">
                            {{ 'APP.WORKPLACE.EVENTS_EMPTY' | translate }}
                        </div>
                        <div class="opacity-30">
                            {{ 'APP.WORKPLACE.EVENTS_RETRY' | translate }}
                        </div>
                    </div>
                }
            </div>
        </main>
        <footer-menu />
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
    standalone: false,
})
export class GroupEventsComponent extends AsyncHandler {
    private _state = inject(GroupEventsStateService);

    public readonly event_list = this._state.filtered_events;
    public readonly featured = this.event_list.pipe(
        map((_) =>
            _.find((_: any) => _.extension_data?.featured || _.featured),
        ),
    );
    public readonly events_without_featured = combineLatest([
        this.event_list,
        this.featured,
    ]).pipe(
        map(([list, featured]) =>
            list.filter((_: any) => _.id !== featured?.id),
        ),
    );
}
