import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { Space } from '@placeos/spaces';
import { addMonths } from 'date-fns';
import { map } from 'rxjs/operators';

import { MapLocateModalComponent } from '@placeos/components';
import {
    BookingLike,
    ScheduleStateService,
} from '../schedule/schedule-state.service';
import { DashboardStateService } from './dashboard-state.service';

@Component({
    selector: 'a-dashboard-upcoming',
    template: `
        <h3 class="m-0 mb-4 font-medium text-xl">Your Bookings</h3>
        <div
            name="event"
            *ngFor="let event of event_list | async | slice: 0:3"
            class="flex bg-base-100 shadow rounded-lg relative overflow-hidden mb-4"
        >
            <div
                name="status"
                class="absolute rounded-lg"
                [class.bg-primary]="event.asset_id"
            ></div>
            <div name="details" class="flex-1 mr-2">
                <div time class="text-primary text-sm font-bold mb-2">
                    {{ event.date | date: 'shortTime' }}
                </div>
                <div name="title" class="text-sm font-bold mb-2">
                    {{ event.title }}
                </div>
                <div name="space" class="text-xs flex items-center mb-2">
                    <app-icon class="mr-2">room</app-icon>
                    <a
                        class="text-black"
                        [class.underline]="!!event.space || !!event.asset_id"
                        [matTooltip]="event.space ? 'Locate Space' : ''"
                        (click)="
                            event.space || event.asset_id
                                ? locateSpace(event.space || event)
                                : ''
                        "
                    >
                        {{
                            event.space?.display_name ||
                                event.space?.name ||
                                event.asset_name ||
                                '&lt;No Location&gt;'
                        }}
                        {{
                            event.space?.level?.display_name ||
                            event.space?.level?.name
                                ? ', ' + event.space.level.display_name ||
                                  event.space.level.name
                                : ''
                        }}
                    </a>
                </div>
                <div
                    name="attendees"
                    class="text-xs flex items-center mb-2"
                    *ngIf="event.guests"
                >
                    <app-icon
                        class="mr-2"
                        [icon]="{ class: 'material-icons', content: 'group' }"
                    ></app-icon>
                    {{ event.guests?.length }} Guest{{
                        event.guests?.length === 1 ? '' : 's'
                    }}
                </div>
                <div
                    name="guests"
                    class="flex space-x-2 text-sm"
                    *ngIf="event.guests"
                >
                    <a-user-avatar
                        *ngFor="let guest of event.guests"
                        [user]="guest"
                    ></a-user-avatar>
                </div>
            </div>
            <a
                btn
                matRipple
                *ngIf="event.meeting_link"
                class="uppercase h-12"
                [href]="event.meeting_link"
                >Join Call</a
            >
        </div>
    `,
    styles: [
        `
            :host {
                padding: 1em;
                min-width: 16rem;
            }

            [name='event'] {
                padding: 1rem 1rem 1rem 2rem;
            }

            [name='status'] {
                top: 1rem;
                left: -0.8rem;
                height: 2.5rem;
                width: 1.6rem;
                background-color: #00529b;
            }

            button {
                height: 3em;
            }

            app-icon {
                margin-left: -0.25rem;
            }
        `,
    ],
})
export class DashboardUpcomingComponent implements OnInit, OnDestroy {
    public readonly today = new Date();
    public readonly max_date = addMonths(this.today, 4);
    public readonly upcoming_events = this._state.upcoming_events;
    public readonly event_list = this._schedule.events.pipe(
        map((list) => {
            const updated_list = list
                .filter((_) => _.state !== 'done' && _.is_done !== true)
                .map((_) =>
                    _.space
                        ? _
                        : {
                              ..._,
                              space: {
                                  name: _.asset_name || _.asset_id,
                                  map_id: _.asset_id,
                                  level: this._org.levelWithID(_.zones),
                                  zones: _.zones,
                              },
                          }
                );
            return updated_list;
        })
    );

    constructor(
        private _org: OrganisationService,
        private _state: DashboardStateService,
        private _schedule: ScheduleStateService,
        private _dialog: MatDialog
    ) {}

    public ngOnInit() {
        this._state.pollUpcomingEvents();
        this._schedule.startPolling();
    }

    public ngOnDestroy() {
        this._state.stopPollingUpcomingEvents();
        this._schedule.stopPolling();
    }

    public locateSpace(space: Space) {
        this._dialog.open(MapLocateModalComponent, {
            data: { item: { ...space, level: null } },
        });
    }

    public trackByFn(idx: number, event: BookingLike) {
        return event ? `${event.id}|${event.date}` : undefined;
    }
}
