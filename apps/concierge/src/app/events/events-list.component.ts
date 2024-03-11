import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { EventStateService } from './event-state.service';

@Component({
    selector: 'app-event-list',
    template: `
        <div class="w-full h-full flex flex-col">
            <div class="flex items-center justify-between p-8">
                <h2 class="text-2xl font-medium">Events</h2>
                <a
                    btn
                    matRipple
                    [routerLink]="['/entertainment', 'events', 'manage']"
                >
                    <div class="ml-2">Create Event</div>
                    <app-icon class="text-2xl">chevron_right</app-icon>
                </a>
            </div>
            <div filters class=""></div>
            <div class="h-1/2 flex-1 w-full px-8 overflow-auto">
                <custom-table
                    class="min-w-[60rem] block"
                    [dataSource]="event_list"
                    [columns]="[
                        'events',
                        'level',
                        'room',
                        'attending',
                        'status',
                        'actions'
                    ]"
                    [display_column]="[
                        'Event',
                        'Level',
                        'Room',
                        'Attending',
                        'Status',
                        ' '
                    ]"
                    [column_size]="['24r', 'flex', '10r', '6r', '8r', '3.5r']"
                    [template]="{
                        events: event_template,
                        level: level_template,
                        room: room_template,
                        attending: attending_template,
                        status: status_template,
                        actions: actions_template
                    }"
                ></custom-table>
            </div>
        </div>
        <ng-template #event_template let-item="row">
            <div class="flex items-center space-x-2">
                <div date class="flex flex-col items-center leading-tight">
                    <div
                        month
                        class="text-sm font-medium relative top-0.5 opacity-60"
                    >
                        {{ item.date | date: 'MMM' }}
                    </div>
                    <div day class="text-2xl font-light relative -top-0.5">
                        {{ item.date | date: 'd' }}
                    </div>
                </div>
                <div
                    class="h-12 w-12 rounded overflow-hidden bg-base-200"
                ></div>
                <div details class="flex flex-col">
                    <div class="text-sm">{{ item.title }}</div>
                    <div class="text-xs opacity-40">
                        {{ item.date | date: 'EEEE, ' + time_format }} &ndash;
                        {{
                            item.date + item.duration * 60 * 1000
                                | date: time_format + ' z'
                        }}
                    </div>
                    <div class="text-xs">
                        {{
                            item.location ||
                                (
                                    (item.resources[0]?.email | space | async)
                                        ?.zones | building
                                )?.address
                        }}
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #level_template let-item="row">
            {{
                ((item.resources[0]?.email | space | async)?.zones | level)
                    ?.display_name
            }}
        </ng-template>
        <ng-template #room_template let-item="row">
            {{ (item.resources[0]?.email | space | async)?.display_name }}
        </ng-template>
        <ng-template #attending_template let-item="row">
            {{ item.attendees?.length || 1 }}
        </ng-template>
        <ng-template #status_template let-item="row">
            <div
                class="px-4 py-1 rounded-full"
                [class.bg-success]="
                    item.state !== 'done' && item.state !== 'in_progress'
                "
                [class.text-success-content]="
                    item.state !== 'done' && item.state !== 'in_progress'
                "
                [class.bg-warning]="item.state === 'in_progress'"
                [class.text-warning-content]="item.state === 'in_progress'"
                [class.bg-base-200]="item.state === 'done'"
                [class.text-base-content]="item.state === 'done'"
            >
                {{
                    item.state === 'done'
                        ? 'Done'
                        : item.state === 'in_progress'
                        ? 'In Progress'
                        : 'Active'
                }}
            </div>
        </ng-template>
        <ng-template #actions_template let-item="row">
            <div class="w-full flex items-center justify-end space-x-2">
                <button icon matRipple [matMenuTriggerFor]="menu">
                    <app-icon>more_vert</app-icon>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item>
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl"
                            >confirmation_number</app-icon
                        >
                        <div class="mr-2">Promote Event</div>
                    </div>
                </button>
                <button mat-menu-item>
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">visibility</app-icon>
                        <div class="mr-2">View Event</div>
                    </div>
                </button>
                <button mat-menu-item>
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">edit</app-icon>
                        <div class="mr-2">Edit Event</div>
                    </div>
                </button>
                <button mat-menu-item>
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl">content_copy</app-icon>
                        <div class="mr-2">Copy URL</div>
                    </div>
                </button>
                <button mat-menu-item>
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-2xl text-error">delete</app-icon>
                        <div class="mr-2">Delete Event</div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
    `,
    styles: [
        `
            :host {
                flex: 1;
            }
        `,
    ],
})
export class EventsListComponent {
    public readonly event_list = this._state.event_list;

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _settings: SettingsService,
        private _state: EventStateService
    ) {}
}
